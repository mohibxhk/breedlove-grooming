import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Leaf, Sparkles, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { IMAGES } from '@/lib/site-data';

export const metadata = {
  title: 'About Us — The Story of Roxie & Breedlove Grooming',
  description:
    'Meet Roxie, owner of Breedlove Grooming Salon & Spa. 15+ years of luxury, low-stress pet grooming in East Peoria, Illinois, built on a foundation of love, patience, and craft.',
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs tracking-[0.28em] uppercase text-brand-bronze">Our Story</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-charcoal text-balance">
              Built on love.<br />
              <em className="italic text-brand-sage">Perfected over fifteen years.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-brand-slate leading-relaxed max-w-3xl">
              Breedlove Grooming Salon & Spa was born from one simple idea — that every pet in East Peoria
              deserved a grooming experience as warm, intentional, and beautiful as the love their families
              already give them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
              <Image src={IMAGES.groomer} alt="Roxie grooming a happy dog" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Meet the owner"
              title={<>Hi, I’m <em className="italic text-brand-sage">Roxie</em>.</>}
            />
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-brand-slate leading-relaxed text-[17px]">
                <p>
                  I’ve been a professional groomer for over fifteen years — long enough to know that the
                  best grooming has very little to do with the scissors and almost everything to do with how
                  a pet <em>feels</em> the moment they walk in the door.
                </p>
                <p>
                  At Breedlove, we slow down. We learn your dog’s name, their quirks, the way they like to
                  be held. We never rush, never sedate, and never settle for “good enough.” We treat your
                  pet like ours — because honestly, after a while, they kind of become ours too.
                </p>
                <p>
                  My team and I are deeply grateful to be East Peoria’s most-loved grooming home, and we
                  promise to keep earning that trust every single appointment.
                </p>
                <p className="font-serif italic text-brand-charcoal text-xl pt-2">— Roxie</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white border-y border-brand-bronze/15">
        <div className="container py-24">
          <SectionHeading
            center
            eyebrow="Our Values"
            title={<>What sets Breedlove <em className="italic text-brand-sage">apart</em></>}
            description="Six principles that shape every appointment, every coat, every tail wag."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Pets First, Always', text: 'Every decision — from booking to brushing — starts with what’s best for your animal.' },
              { icon: ShieldCheck, title: 'Low-Stress Handling', text: 'Calm voices, gentle hands, never sedation. Your pet will feel safe with us.' },
              { icon: Award, title: 'Master Craft', text: 'Fifteen years of breed-specific training and continual education in modern grooming.' },
              { icon: Leaf, title: 'Premium, Clean Products', text: 'Salon-grade shampoos, conditioners, and tools chosen for the most sensitive skin.' },
              { icon: Sparkles, title: 'Spa-Level Detail', text: 'From paw butter to scented finishes, no small detail is too small.' },
              { icon: Users, title: 'Locally Family-Owned', text: 'A real East Peoria business, run by neighbors who love your pets like family.' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full p-8 rounded-2xl border border-brand-bronze/15 bg-brand-cream hover:bg-white hover:shadow-lg transition">
                  <div className="h-12 w-12 rounded-full bg-brand-sage/10 flex items-center justify-center">
                    <v.icon className="h-5 w-5 text-brand-sage" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-brand-charcoal">{v.title}</h3>
                  <p className="mt-3 text-brand-slate leading-relaxed text-[15px]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="Our Journey"
          title={<>Fifteen years, <em className="italic text-brand-sage">one paw at a time</em>.</>}
        />
        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12 relative">
          {[
            { year: '2010', title: 'A small dream begins', text: 'Roxie completes her professional grooming certification and starts taking on her first clients in East Peoria.' },
            { year: '2014', title: 'Breedlove opens its doors', text: 'After four years of growing word of mouth, the official Breedlove Grooming Salon & Spa opens on Riverside Drive.' },
            { year: '2018', title: 'A 5.0-star reputation', text: 'Breedlove crosses 100 five-star reviews and becomes one of the most trusted grooming names in central Illinois.' },
            { year: '2022', title: 'Spa expansion', text: 'A redesigned spa area, new low-stress handling certifications, and an expanded feline grooming program.' },
            { year: '2025', title: 'Today', text: '15+ years strong, 2,000+ pet families served, and the same promise we started with — every pet, deeply loved.' },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-brand-sage text-white flex items-center justify-center font-serif text-xs">{t.year.slice(2)}</div>
                <div className="text-xs tracking-[0.28em] uppercase text-brand-bronze">{t.year}</div>
                <h3 className="mt-2 font-serif text-2xl text-brand-charcoal">{t.title}</h3>
                <p className="mt-2 text-brand-slate leading-relaxed">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-brand-sage text-white p-12 md:p-16 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">We’d love to meet your pet.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-white/80 max-w-2xl mx-auto">Visit the salon, book an appointment, or simply call — we’re happy to answer any question you have.</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-bronze-dark text-brand-charcoal rounded-full h-14 px-8">
                <Link href="/book">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-brand-sage rounded-full h-14 px-8">
                <Link href="/contact">Visit & Contact</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
