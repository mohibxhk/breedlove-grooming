'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { GALLERY } from '@/lib/site-data';
import { ArrowRight, ImageIcon } from 'lucide-react';

const TAGS = ['All', 'Doodle', 'Poodle', 'Small', 'Fluffy', 'Large', 'Cat'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.tag === filter);

  return (
    <SiteLayout>
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs tracking-[0.28em] uppercase text-brand-bronze">Gallery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-charcoal text-balance">
              Before & After<br />
              <em className="italic text-brand-sage">transformations</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg text-brand-slate leading-relaxed max-w-3xl">
              A glimpse into a regular day at Breedlove. Real pets, real coats, real results — styled with
              care and finished with love.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-8">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm transition border ${
                filter === t
                  ? 'bg-brand-charcoal text-white border-brand-charcoal'
                  : 'bg-white text-brand-charcoal border-brand-bronze/20 hover:border-brand-charcoal'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((g, i) => (
            <Reveal key={`${g.breed}-${i}`} delay={(i % 4) * 0.06}>
              <div className="rounded-3xl overflow-hidden bg-white border border-brand-bronze/15 shadow-sm hover:shadow-xl transition">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image src={g.before} alt={`Before grooming — ${g.breed}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-charcoal text-[10px] tracking-[0.22em] uppercase px-3 py-1 rounded-full">Before</span>
                  </div>
                  <div className="relative aspect-square">
                    <Image src={g.after} alt={`After grooming — ${g.breed}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    <span className="absolute top-3 left-3 bg-brand-sage text-white text-[10px] tracking-[0.22em] uppercase px-3 py-1 rounded-full">After</span>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-xl text-brand-charcoal">{g.breed}</div>
                    <div className="text-xs text-brand-slate uppercase tracking-[0.2em] mt-1">{g.tag} Coat</div>
                  </div>
                  <ImageIcon className="h-5 w-5 text-brand-bronze" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-brand-charcoal text-white p-12 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Your Pet Could Be Next"
              title={<>Ready for a <em className="italic text-brand-gold">picture-worthy</em> groom?</>}
              description="Book your visit and we’ll text you a keepsake before-and-after of your own."
            />
          </div>
          <div className="md:text-right">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-bronze-dark text-brand-charcoal rounded-full h-14 px-8">
              <Link href="/book">Book Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
