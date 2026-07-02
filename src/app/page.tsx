import Hero from '@/components/Hero';
import About from '@/components/About';
import TrustMetrics from '@/components/TrustMetrics';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import PerformanceExpertise from '@/components/PerformanceExpertise';
import Blog from '@/components/Blog';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <TrustMetrics />
      <Services />
      <CaseStudies />
      <TechStack />
      <Experience />
      <PerformanceExpertise />
      <Blog />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}