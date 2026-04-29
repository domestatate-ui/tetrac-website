import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ProductsSection from '@/components/ProductsSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhoSection from '@/components/WhoSection';
import HowItWorks from '@/components/HowItWorks';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustSection />
      <ProductsSection />
      <FeaturesSection />
      <WhoSection />
      <HowItWorks />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
