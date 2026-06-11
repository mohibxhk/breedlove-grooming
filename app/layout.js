import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://breedlovegrooming.com'),
  title: {
    default: 'Breedlove Grooming Salon & Spa | Premium Pet Grooming in East Peoria, IL',
    template: '%s | Breedlove Grooming Salon & Spa',
  },
  description:
    'East Peoria\u2019s most-loved pet grooming salon. Owner Roxie and her team have served local pet families for 15+ years with 5-star, luxury spa-quality grooming for dogs and cats.',
  keywords: [
    'pet grooming East Peoria',
    'dog grooming Illinois',
    'luxury pet spa',
    'Breedlove Grooming',
    'cat grooming',
    'puppy first groom',
    'mobile pet grooming Peoria',
  ],
  openGraph: {
    title: 'Breedlove Grooming Salon & Spa',
    description: 'Premium pet grooming in East Peoria, IL \u2014 5.0 stars, 15+ years of trusted, loving care.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-brand-cream text-brand-charcoal antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
