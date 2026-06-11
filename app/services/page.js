import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { SERVICES, FAQS, IMAGES } from '@/lib/site-data';

export const metadata = {
  title: 'Services & Pricing — Luxury Pet Grooming',
  description:
    'Explore our full menu of spa-quality grooming services — from the Signature Spa Groom and Puppy First Groom to feline grooming and de-shedding treatments. Premium care, transparent pricing.',
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs tracking-[0.28em] uppercase text-brand-bronze">Services & Pricing</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-charcoal text-balance">
              Every coat. Every breed.<br />
              <em className="italic text-brand-sage">Every pet, perfectly cared for.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg text-brand-slate leading-relaxed max-w-3xl">
              Our menu is intentionally curated — thoughtful services designed around your pet’s breed, age,
              and temperament. Final pricing is confirmed at booking based on size, coat condition, and visit length.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <div className="h-full bg-white rounded-3xl border border-brand-bronze/15 p-8 md:p-10 hover:shadow-xl transition">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-bronze">
                      <Sparkles className="h-3.5 w-3.5" /> {s.tagline}
                    </div>
                    <h3 className="mt-3 font-serif text-3xl text-brand-charcoal leading-tight">{s.title}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-serif text-2xl text-brand-sage">{s.price}</div>
                    <div className="text-xs text-brand-slate flex items-center gap-1 mt-1 justify-end">
                      <Clock className="h-3 w-3" /> {s.duration}
                    </div>
                  </div>
                </div>
                <ul className="mt-7 space-y-3">
                  {s.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-brand-slate">
                      <Check className="h-4 w-4 text-brand-sage mt-1 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-brand-bronze/15">
                  <Button asChild variant="ghost" className="p-0 h-auto text-brand-charcoal hover:bg-transparent hover:text-brand-sage group">
                    <Link href="/book" className="inline-flex items-center gap-2">
                      Book this service <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-ivory border-y border-brand-bronze/15">
        <div className="container py-24">
          <SectionHeading
            eyebrow="What to Expect"
            title={<>The Breedlove <em className="italic text-brand-sage">experience</em></>}
            description="From the moment you arrive until your pet is back in your arms, every step is intentional, calm, and luxurious."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Warm Welcome', d: 'Your pet is greeted by name, offered a treat, and given a few minutes to settle into the calm spa space.' },
              { n: '02', t: 'Personal Consultation', d: 'We review breed standards, your preferences, coat condition, and any special needs together.' },
              { n: '03', t: 'The Spa Experience', d: 'Bath, blow-out, breed cut, and finishing touches — all performed at your pet’s pace.' },
              { n: '04', t: 'Picture-Perfect Pickup', d: 'A keepsake photo, a kiss on the forehead, and a tail-wagging hand-off back to you.' },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl p-8 border border-brand-bronze/10">
                  <div className="font-serif text-5xl text-brand-bronze/40">{p.n}</div>
                  <h4 className="mt-4 font-serif text-xl text-brand-charcoal">{p.t}</h4>
                  <p className="mt-3 text-sm text-brand-slate leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Common Questions"
              title={<>You ask. <em className="italic text-brand-sage">We’ve answered.</em></>}
              description="Still curious? Call us at (309) 694-0000 or use the contact form — Roxie answers personally."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={IMAGES.bath} alt="Pet bath spa experience" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-brand-bronze/20">
                    <AccordionTrigger className="font-serif text-lg md:text-xl text-brand-charcoal text-left hover:no-underline py-6">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-slate leading-relaxed text-[15px] pb-6">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
