import Link from 'next/link';
import Image from 'next/image';
import { Star, Award, Sparkles, Heart, ShieldCheck, Clock, ArrowRight, ArrowUpRight, Quote, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal, FadeIn } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { IMAGES, SERVICES, REVIEWS } from '@/lib/site-data';

export default function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Beautifully groomed dog at Breedlove Grooming Salon"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/85 via-brand-charcoal/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs tracking-[0.18em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              East Peoria · Illinois
            </div>
          </FadeIn>
          <div className="mt-7 max-w-3xl">
            <Reveal>
              <h1 className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
                Where every pet leaves<br />
                <span className="italic text-brand-gold">a little more loved.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                Breedlove Grooming Salon & Spa is East Peoria’s premier destination for luxury,
                low-stress pet grooming. Fifteen years of award-winning craftsmanship by owner Roxie,
                trusted by over 2,000 local families.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-bronze-dark text-brand-charcoal rounded-full h-14 px-8 text-base shadow-xl">
                  <Link href="/book">Book an Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-brand-charcoal">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />)}
                  </div>
                  <span className="text-sm tracking-wide">5.0 · Loved by every family</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/30" />
                <div className="text-sm tracking-wide">15+ Years of Craft</div>
                <div className="hidden sm:block h-4 w-px bg-white/30" />
                <div className="text-sm tracking-wide">2,000+ Happy Pets</div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-ivory border-y border-brand-bronze/10">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Star, label: '5.0 Star Reviews', sub: 'Across every platform' },
            { icon: Award, label: '15+ Years of Care', sub: 'Owned & operated by Roxie' },
            { icon: ShieldCheck, label: 'Low-Stress Certified', sub: 'Gentle handling, always' },
            { icon: Heart, label: '2,000+ Pet Families', sub: 'Trusted across Peoria' },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-white border border-brand-bronze/20 flex items-center justify-center shadow-sm">
                  <t.icon className="h-5 w-5 text-brand-sage" />
                </div>
                <div>
                  <div className="font-serif text-lg text-brand-charcoal">{t.label}</div>
                  <div className="text-xs text-brand-slate mt-0.5">{t.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
                <Image src={IMAGES.groomer} alt="Roxie, owner of Breedlove Grooming" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="hidden md:flex absolute -mt-20 ml-[-2rem] lg:ml-8 lg:-mt-24 z-10 bg-brand-cream rounded-2xl p-6 shadow-xl border border-brand-bronze/15 max-w-xs">
                <div>
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />)}
                  </div>
                  <p className="mt-3 text-sm text-brand-slate leading-relaxed italic">“Roxie doesn’t just groom — she truly knows every dog by name and personality.”</p>
                  <p className="mt-2 text-xs text-brand-charcoal">— Jennifer M.</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Meet Roxie"
              title={<>Fifteen years of <em className="font-serif italic text-brand-sage">passion</em>, patience, and craft.</>}
              description="Roxie founded Breedlove to give East Peoria a grooming experience that feels less like an appointment and more like a day at the spa. Every cut, every conditioner, every kind word is chosen with one promise in mind — your pet should leave happier than they arrived."
            />
            <Reveal delay={0.25}>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  { k: '15+', v: 'Years grooming pets in East Peoria' },
                  { k: '2K+', v: 'Pet families who trust us with their best friend' },
                  { k: '5.0', v: 'Average rating across Google, Yelp & Facebook' },
                  { k: '0%', v: 'Sedation — ever. Just calm, patient care' },
                ].map((stat, i) => (
                  <div key={i} className="border-t border-brand-bronze/30 pt-4">
                    <div className="font-serif text-4xl text-brand-sage">{stat.k}</div>
                    <div className="mt-1 text-sm text-brand-slate leading-relaxed">{stat.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <Button asChild variant="ghost" className="mt-10 group text-brand-sage hover:bg-transparent hover:text-brand-sage-dark p-0 h-auto font-medium">
                <Link href="/about" className="inline-flex items-center gap-2">
                  Read our story
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="container py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <SectionHeading
              eyebrow="Our Services"
              title={<>Spa-quality grooming, <em className="italic text-brand-sage">crafted</em> for every coat.</>}
              description="From signature spa days to gentle puppy introductions, every service at Breedlove is tailored to your pet’s breed, age, temperament, and your preferences."
            />
            <Button asChild variant="outline" className="rounded-full border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white self-start lg:self-end">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link href="/services" className="group block h-full">
                  <div className="h-full p-8 rounded-2xl bg-brand-cream border border-brand-bronze/15 transition-all hover:border-brand-sage hover:shadow-xl hover:-translate-y-1 duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <Sparkles className="h-6 w-6 text-brand-bronze" />
                      <span className="text-xs tracking-[0.2em] uppercase text-brand-slate">{s.duration}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-brand-charcoal">{s.title}</h3>
                    <p className="mt-2 text-sm text-brand-slate">{s.tagline}</p>
                    <div className="mt-6 pt-6 border-t border-brand-bronze/15 flex items-center justify-between">
                      <span className="text-brand-sage font-medium">{s.price}</span>
                      <ArrowUpRight className="h-4 w-4 text-brand-charcoal group-hover:text-brand-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container py-24 lg:py-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Before & After"
            title={<>Transformations that <em className="italic text-brand-sage">speak for themselves</em>.</>}
            description="Every pet that visits Breedlove walks out as the best version of themselves — fluffier, fresher, and bursting with confidence."
          />
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[IMAGES.fluffy1, IMAGES.portrait1, IMAGES.fluffy2, IMAGES.fluffy3, IMAGES.happy1, IMAGES.groomedDog, IMAGES.portrait2, IMAGES.happy2].map((src, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <Image src={src} alt={`Grooming transformation ${i + 1}`} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white">
            <Link href="/gallery">See Full Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-brand-ivory">
        <div className="container py-24 lg:py-32">
          <SectionHeading
            center
            eyebrow="Beloved by Pet Parents"
            title={<>What our families <em className="italic text-brand-sage">say</em></>}
            description="A 5.0-star reputation built one happy tail wag at a time."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-brand-bronze/15 shadow-sm relative">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-bronze/20" />
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
          <div className="mt-12 text-center">
            <Button asChild variant="ghost" className="text-brand-sage hover:bg-brand-sage/10">
              <Link href="/reviews">Read all 240+ reviews <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[28px] grain">
          <Image src={IMAGES.spaScene} alt="Spa scene at Breedlove" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/40" />
          <div className="relative grid lg:grid-cols-2 gap-12 px-8 py-20 md:p-20">
            <div>
              <SectionHeading
                light
                eyebrow="Book Your Visit"
                title={<>Treat your pet to the <em className="italic text-brand-gold">very best</em>.</>}
                description="New clients receive a complimentary blueberry facial with their first Signature Spa Groom. Limited weekend appointments — reserve yours today."
              />
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-bronze-dark text-brand-charcoal rounded-full h-14 px-8 shadow-xl">
                    <Link href="/book">Book Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-charcoal">
                    <a href="tel:+13096940000"><Phone className="mr-2 h-4 w-4" /> (309) 694-0000</a>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="lg:pl-12 lg:border-l border-white/20">
              <Reveal delay={0.2}>
                <div className="space-y-7 text-white/90">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-brand-gold mt-1 shrink-0" />
                    <div>
                      <div className="font-serif text-xl text-white">Visit Our Salon</div>
                      <div className="text-sm text-white/70 mt-1">104 Riverside Drive, East Peoria, IL 61611</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-brand-gold mt-1 shrink-0" />
                    <div>
                      <div className="font-serif text-xl text-white">Salon Hours</div>
                      <div className="text-sm text-white/70 mt-1">Tuesday – Saturday · 8:00 AM – 5:30 PM<br />Closed Sunday & Monday</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="h-5 w-5 text-brand-gold mt-1 shrink-0" />
                    <div>
                      <div className="font-serif text-xl text-white">Our Promise</div>
                      <div className="text-sm text-white/70 mt-1">100% satisfaction or your next groom is on us — always.</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
