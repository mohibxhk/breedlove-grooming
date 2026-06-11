import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { REVIEWS, IMAGES } from '@/lib/site-data';

export const metadata = {
  title: 'Reviews & Testimonials — 5.0 Star Pet Grooming',
  description:
    'Read what East Peoria pet families say about Breedlove Grooming Salon & Spa. 5.0 stars on Google, Yelp, and Facebook — over 240+ heartfelt reviews and counting.',
};

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs tracking-[0.28em] uppercase text-brand-bronze">Reviews & Testimonials</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-charcoal text-balance">
              5.0 stars,<br />
              <em className="italic text-brand-sage">240+ pet families.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg text-brand-slate leading-relaxed max-w-3xl">
              We don’t take a single review for granted. Every kind word represents a real pet, a real
              family, and a real promise kept.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RATING SUMMARY */}
      <section className="container pb-16">
        <Reveal>
          <div className="rounded-3xl bg-white border border-brand-bronze/15 p-10 md:p-14 grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="font-serif text-7xl text-brand-charcoal leading-none">5.0</div>
              <div className="flex justify-center md:justify-start mt-3 gap-1">
                {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />)}
              </div>
              <div className="mt-2 text-sm text-brand-slate">Out of 5 · across all platforms</div>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-6">
              {[
                { label: 'Google', count: '142+' },
                { label: 'Facebook', count: '68+' },
                { label: 'Yelp', count: '30+' },
              ].map((p) => (
                <div key={p.label} className="text-center md:text-left">
                  <div className="font-serif text-3xl text-brand-sage">{p.count}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-brand-slate mt-1">{p.label}</div>
                  <div className="flex gap-0.5 mt-2 justify-center md:justify-start">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FEATURED REVIEW */}
      <section className="container pb-16">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden grain">
            <Image src={IMAGES.happy1} alt="Happy groomed dog" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/70 to-brand-charcoal/30" />
            <div className="relative p-12 md:p-20 max-w-3xl">
              <Quote className="h-10 w-10 text-brand-gold" />
              <p className="mt-6 font-serif text-2xl md:text-3xl text-white italic leading-[1.35] text-balance">
                “I’ve been bringing pets to Roxie for nearly a decade. Three dogs, two cats, every life stage.
                She has never once disappointed. Breedlove isn’t just a groomer — it’s a part of our family’s
                routine, and a part of our pets’ lives we cherish.”
              </p>
              <div className="mt-8 flex gap-1">
                {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />)}
              </div>
              <div className="mt-4">
                <div className="font-serif text-xl text-white">Christine W.</div>
                <div className="text-sm text-white/60">Longtime client · East Peoria, IL</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* REVIEW GRID */}
      <section className="container pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className="h-full bg-white rounded-2xl p-8 border border-brand-bronze/15 hover:shadow-lg transition relative">
                <Quote className="absolute top-6 right-6 h-7 w-7 text-brand-bronze/20" />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-slate leading-relaxed text-[15px]">“{r.text}”</p>
                <div className="mt-6 pt-6 border-t border-brand-bronze/15">
                  <div className="font-serif text-base text-brand-charcoal">{r.name}</div>
                  <div className="text-xs text-brand-slate mt-0.5">{r.pet} · {r.date}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-brand-sage text-white p-12 md:p-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Write your own Breedlove story.</h2>
          <p className="mt-5 text-white/85 max-w-2xl mx-auto">Book your pet’s first appointment today and see why every family raves.</p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-bronze-dark text-brand-charcoal rounded-full h-14 px-8">
              <Link href="/book">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
