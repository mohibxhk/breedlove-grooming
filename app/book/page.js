'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar as CalendarIcon, ArrowRight, ArrowLeft, Check, Sparkles, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal } from '@/components/site/reveal';
import { SERVICES, IMAGES } from '@/lib/site-data';

const STEPS = ['Service', 'Pet', 'Schedule', 'You'];

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    service: '',
    petName: '',
    petBreed: '',
    petAge: '',
    petSize: '',
    notes: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const next = () => {
    if (step === 0 && !form.service) return toast.error('Please choose a service.');
    if (step === 1 && (!form.petName || !form.petBreed)) return toast.error('Tell us your pet\u2019s name & breed.');
    if (step === 2 && (!form.date || !form.time)) return toast.error('Please pick a date and time.');
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your contact details.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      toast.error('Something went wrong. Please call (309) 694-0000.');
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const timeSlots = ['8:00 AM', '9:30 AM', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM'];

  if (done) {
    return (
      <SiteLayout>
        <section className="container py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-brand-sage text-white mx-auto flex items-center justify-center">
              <Check className="h-7 w-7" />
            </div>
            <h1 className="mt-8 font-serif text-5xl md:text-6xl text-brand-charcoal text-balance">You’re booked!</h1>
            <p className="mt-5 text-lg text-brand-slate leading-relaxed">
              Thank you, {form.name.split(' ')[0]}. We’ve received {form.petName}’s appointment request for
              <strong className="text-brand-charcoal"> {form.date}</strong> at <strong className="text-brand-charcoal">{form.time}</strong>.
              Roxie will personally confirm by phone within a few hours.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button asChild className="bg-brand-sage hover:bg-brand-sage-dark text-white rounded-full h-12">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white">
                <a href="tel:+13096940000"><Phone className="mr-2 h-4 w-4" /> Call Salon</a>
              </Button>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT — sidebar */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="sticky top-28">
                <span className="text-xs tracking-[0.28em] uppercase text-brand-bronze">Book Appointment</span>
                <h1 className="mt-4 font-serif text-4xl md:text-5xl text-brand-charcoal leading-[1.05] text-balance">
                  Let’s plan a beautiful <em className="italic text-brand-sage">spa day</em>.
                </h1>
                <p className="mt-5 text-brand-slate leading-relaxed">
                  Tell us a little about your pet and your preferred time. Roxie personally confirms every
                  booking within hours.
                </p>
                <div className="mt-10 relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image src={IMAGES.groomedDog} alt="Groomed dog" fill className="object-cover" sizes="33vw" />
                </div>
                <div className="mt-8 space-y-3 text-sm text-brand-slate">
                  <a href="tel:+13096940000" className="flex items-center gap-3 hover:text-brand-sage"><Phone className="h-4 w-4 text-brand-bronze" /> (309) 694-0000</a>
                  <a href="mailto:roxie@breedlovegrooming.com" className="flex items-center gap-3 hover:text-brand-sage"><Mail className="h-4 w-4 text-brand-bronze" /> roxie@breedlovegrooming.com</a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — wizard */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-brand-bronze/15 p-8 md:p-12 shadow-sm">
              {/* progress */}
              <div className="flex items-center justify-between mb-10">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex items-center gap-3 flex-1">
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-serif transition ${
                      i < step ? 'bg-brand-sage text-white' : i === step ? 'bg-brand-charcoal text-white' : 'bg-brand-cream text-brand-slate border border-brand-bronze/20'
                    }`}>
                      {i < step ? <Check className="h-4 w-4" /> : i + 1}
                    </div>
                    <div className="hidden md:block">
                      <div className={`text-xs uppercase tracking-[0.2em] ${i === step ? 'text-brand-charcoal' : 'text-brand-slate'}`}>{s}</div>
                    </div>
                    {i < STEPS.length - 1 && <div className="flex-1 h-px bg-brand-bronze/20 mx-2" />}
                  </div>
                ))}
              </div>

              {/* STEP 0 — Service */}
              {step === 0 && (
                <div>
                  <h2 className="font-serif text-3xl text-brand-charcoal">Which service?</h2>
                  <p className="mt-2 text-brand-slate">Pick the one that best fits your pet — we can fine-tune at the salon.</p>
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {SERVICES.map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => set('service', s.slug)}
                        className={`text-left p-5 rounded-2xl border transition ${
                          form.service === s.slug
                            ? 'border-brand-sage bg-brand-sage/5 ring-2 ring-brand-sage/30'
                            : 'border-brand-bronze/20 hover:border-brand-charcoal bg-brand-cream/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <Sparkles className="h-4 w-4 text-brand-bronze mt-1 shrink-0" />
                          <div className="text-xs uppercase tracking-[0.22em] text-brand-slate">{s.price}</div>
                        </div>
                        <div className="font-serif text-xl text-brand-charcoal mt-2">{s.title}</div>
                        <div className="text-sm text-brand-slate mt-1">{s.tagline}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 1 — Pet */}
              {step === 1 && (
                <div>
                  <h2 className="font-serif text-3xl text-brand-charcoal">About your pet</h2>
                  <p className="mt-2 text-brand-slate">The little details help us prep the perfect experience.</p>
                  <div className="mt-8 grid md:grid-cols-2 gap-5">
                    <div className="grid gap-2">
                      <Label>Pet name</Label>
                      <Input value={form.petName} onChange={(e) => set('petName', e.target.value)} placeholder="Bella" className="h-12 bg-brand-cream/40" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Breed</Label>
                      <Input value={form.petBreed} onChange={(e) => set('petBreed', e.target.value)} placeholder="Goldendoodle" className="h-12 bg-brand-cream/40" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Age</Label>
                      <Input value={form.petAge} onChange={(e) => set('petAge', e.target.value)} placeholder="3 years" className="h-12 bg-brand-cream/40" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Size</Label>
                      <Select value={form.petSize} onValueChange={(v) => set('petSize', v)}>
                        <SelectTrigger className="h-12 bg-brand-cream/40"><SelectValue placeholder="Choose size" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toy">Toy (under 10 lb)</SelectItem>
                          <SelectItem value="small">Small (10\u201125 lb)</SelectItem>
                          <SelectItem value="medium">Medium (25\u201150 lb)</SelectItem>
                          <SelectItem value="large">Large (50\u201380 lb)</SelectItem>
                          <SelectItem value="giant">Giant (80+ lb)</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2 grid gap-2">
                      <Label>Special notes (optional)</Label>
                      <Textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Anxiety, allergies, favorite cuts, etc." rows={4} className="bg-brand-cream/40" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 — Schedule */}
              {step === 2 && (
                <div>
                  <h2 className="font-serif text-3xl text-brand-charcoal">Choose a time</h2>
                  <p className="mt-2 text-brand-slate">Open Tuesday – Saturday. Times are approximate — we’ll confirm.</p>
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <Label>Preferred date</Label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-bronze pointer-events-none" />
                        <Input type="date" min={today} value={form.date} onChange={(e) => set('date', e.target.value)} className="h-12 pl-10 bg-brand-cream/40" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>Preferred time</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => set('time', t)}
                            className={`h-12 rounded-md text-sm border transition ${
                              form.time === t
                                ? 'bg-brand-charcoal text-white border-brand-charcoal'
                                : 'bg-brand-cream/40 border-brand-bronze/20 hover:border-brand-charcoal text-brand-charcoal'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 — You */}
              {step === 3 && (
                <div>
                  <h2 className="font-serif text-3xl text-brand-charcoal">Your details</h2>
                  <p className="mt-2 text-brand-slate">So Roxie can personally confirm your appointment.</p>
                  <div className="mt-8 grid md:grid-cols-2 gap-5">
                    <div className="grid gap-2 md:col-span-2">
                      <Label>Your name</Label>
                      <Input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Jane Doe" className="h-12 bg-brand-cream/40" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Email</Label>
                      <Input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="jane@email.com" className="h-12 bg-brand-cream/40" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Phone</Label>
                      <Input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="(309) 555\u20110123" className="h-12 bg-brand-cream/40" />
                    </div>
                  </div>
                  <div className="mt-8 p-5 rounded-2xl bg-brand-ivory border border-brand-bronze/20 text-sm text-brand-slate">
                    <div className="text-xs uppercase tracking-[0.22em] text-brand-bronze mb-2">Booking summary</div>
                    <div className="grid sm:grid-cols-2 gap-y-1">
                      <div><span className="text-brand-charcoal">Service:</span> {SERVICES.find((s) => s.slug === form.service)?.title || '\u2014'}</div>
                      <div><span className="text-brand-charcoal">Pet:</span> {form.petName || '\u2014'}{form.petBreed ? `, ${form.petBreed}` : ''}</div>
                      <div><span className="text-brand-charcoal">Date:</span> {form.date || '\u2014'}</div>
                      <div><span className="text-brand-charcoal">Time:</span> {form.time || '\u2014'}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* nav */}
              <div className="mt-10 flex items-center justify-between">
                <Button type="button" variant="ghost" onClick={back} disabled={step === 0} className="text-brand-charcoal disabled:opacity-30">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button type="button" onClick={next} className="bg-brand-charcoal hover:bg-brand-sage-dark text-white rounded-full h-12 px-6">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="button" onClick={submit} disabled={loading} className="bg-brand-sage hover:bg-brand-sage-dark text-white rounded-full h-12 px-8">
                    {loading ? 'Submitting...' : <>Confirm Booking <Check className="ml-2 h-4 w-4" /></>}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
