import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream/90 mt-24">
      <div className="container py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-brand-sage flex items-center justify-center">
              <span className="font-serif text-brand-cream text-2xl leading-none">B</span>
            </div>
            <div>
              <div className="font-serif text-2xl text-white">Breedlove</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-brand-gold">Grooming Salon & Spa</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-md">
            For over 15 years, Roxie and the Breedlove team have given East Peoria pet families a place to
            trust \u2014 a calm, luxurious spa where every dog and cat leaves looking, feeling, and being their best.
          </p>
          <div className="flex items-center gap-3 mt-7">
            <a aria-label="Facebook" href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.28em] text-brand-gold mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white text-white/70">Home</Link></li>
            <li><Link href="/about" className="hover:text-white text-white/70">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white text-white/70">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white text-white/70">Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-white text-white/70">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white text-white/70">Contact</Link></li>
            <li><Link href="/book" className="hover:text-white text-white/70">Book Appointment</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.28em] text-brand-gold mb-5">Visit & Contact</div>
          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <span>104 Riverside Drive<br />East Peoria, IL 61611</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <a href="tel:+13096940000" className="hover:text-white">(309) 694-0000</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <a href="mailto:roxie@breedlovegrooming.com" className="hover:text-white">roxie@breedlovegrooming.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <span>Tue \u2013 Sat \u00B7 8:00 AM \u2013 5:30 PM<br />Closed Sunday & Monday</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/55">
          <div>\u00A9 {new Date().getFullYear()} Breedlove Grooming Salon & Spa. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/book" className="hover:text-white">Book Appointment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
