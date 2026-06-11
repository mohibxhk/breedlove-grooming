import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLayout } from '@/components/site/site-layout';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { ContactForm } from '@/components/site/contact-form';

export const metadata = {
  title: 'Contact & Location — Visit Breedlove Grooming',
  description:
    'Visit Breedlove Grooming Salon & Spa at 104 Riverside Drive in East Peoria, Illinois. Open Tuesday – Saturday. Call (309) 694-0000 or send a message.',
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="container py-16 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs tracking-[0.28em] uppercase text-brand-bronze">Contact & Location</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-charcoal text-balance">
              We’d love to <em className="italic text-brand-sage">hear from you</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg text-brand-slate leading-relaxed max-w-3xl">
              Questions about your pet’s coat, scheduling, or special needs? Send us a message or just stop by — we love meeting new pet families.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: MapPin, title: 'Visit Our Salon', body: <>104 Riverside Drive<br />East Peoria, IL 61611</> },
              { icon: Phone, title: 'Call or Text', body: <a href="tel:+13096940000" className="hover:text-brand-sage">(309) 694-0000</a> },
              { icon: Mail, title: 'Email Roxie', body: <a href="mailto:roxie@breedlovegrooming.com" className="hover:text-brand-sage">roxie@breedlovegrooming.com</a> },
              { icon: Clock, title: 'Salon Hours', body: <>Tue – Sat · 8:00 AM – 5:30 PM<br />Closed Sunday & Monday</> },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-brand-bronze/15 flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-brand-sage/10 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-brand-sage" />
                  </div>
                  <div>
                    <div className="font-serif text-xl text-brand-charcoal">{c.title}</div>
                    <div className="mt-1 text-brand-slate text-[15px] leading-relaxed">{c.body}</div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="bg-brand-charcoal text-white rounded-2xl p-7 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-brand-gold">Follow Along</div>
                  <div className="font-serif text-xl mt-1">@breedlovegrooming</div>
                </div>
                <div className="flex gap-3">
                  <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-charcoal transition">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-charcoal transition">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="bg-white rounded-3xl border border-brand-bronze/15 p-8 md:p-10">
                <h2 className="font-serif text-3xl text-brand-charcoal">Send a message</h2>
                <p className="mt-2 text-brand-slate text-sm">We typically reply within a few hours during salon hours.</p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container pb-24">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-brand-bronze/15 shadow-sm">
            <iframe
              title="Breedlove Grooming Salon Location"
              src="https://www.google.com/maps?q=East%20Peoria%2C%20IL&output=embed"
              className="w-full h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <section className="container pb-24">
        <div className="rounded-3xl bg-brand-sage text-white p-12 md:p-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Ready to schedule?</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">Book online in under 60 seconds.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-bronze-dark text-brand-charcoal rounded-full h-14 px-8">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
