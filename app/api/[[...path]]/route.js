import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

let client;
let db;
async function getDb() {
  if (db) return db;
  client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  db = client.db(process.env.DB_NAME || 'breedlove');
  return db;
}

function getPath(req) {
  const url = new URL(req.url);
  return url.pathname.replace(/^\/api\/?/, '');
}

export async function GET(req) {
  const path = getPath(req);
  if (path === '' || path === 'health') {
    return NextResponse.json({ ok: true, service: 'Breedlove API' });
  }
  if (path === 'bookings') {
    try {
      const database = await getDb();
      const items = await database.collection('bookings').find({}).sort({ createdAt: -1 }).limit(100).toArray();
      return NextResponse.json({ items });
    } catch (e) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }
  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function POST(req) {
  const path = getPath(req);
  try {
    const body = await req.json();
    if (path === 'bookings') {
      const database = await getDb();
      const doc = {
        id: uuidv4(),
        ...body,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      await database.collection('bookings').insertOne(doc);
      return NextResponse.json({ ok: true, booking: doc });
    }
    if (path === 'contact') {
      const database = await getDb();
      const doc = {
        id: uuidv4(),
        ...body,
        createdAt: new Date().toISOString(),
      };
      await database.collection('contact_messages').insertOne(doc);
      return NextResponse.json({ ok: true, message: doc });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
