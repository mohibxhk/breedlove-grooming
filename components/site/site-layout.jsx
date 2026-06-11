import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

export function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
