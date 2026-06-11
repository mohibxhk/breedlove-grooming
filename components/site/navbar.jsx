'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Gallery' },
  { href: '#', label: 'Reviews' },
  { href: '#', label: 'Contact' },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full bg-brand-sage flex items-center justify-center shadow-sm">
            <span className="font-serif text-brand-cream text-xl leading-none">B</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg md:text-xl text-brand-charcoal tracking-tight">Breedlove</div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-brand-bronze">Grooming Salon & Spa</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-wide transition-colors ${
                  active ? 'text-brand-sage' : 'text-brand-charcoal/80 hover:text-brand-sage'
                }`}
              >
                {item.label}
                {active && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-6 bg-brand-bronze" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+13096940000" className="flex items-center gap-2 text-sm text-brand-slate hover:text-brand-sage transition">
            <Phone className="h-4 w-4" /> (309) 694-0000
          </a>
          <Button asChild className="bg-brand-sage hover:bg-brand-sage-dark text-white rounded-full px-6 h-11">
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-brand-charcoal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-cream border-t border-brand-bronze/20">
          <div className="container py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base py-2 border-b border-brand-bronze/10 ${
                  pathname === item.href ? 'text-brand-sage' : 'text-brand-charcoal'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-brand-sage hover:bg-brand-sage-dark text-white rounded-full h-12">
              <Link href="/book" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
