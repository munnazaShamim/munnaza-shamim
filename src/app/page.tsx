import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import Services from '@/components/homepage/Services';
import CaseStudies from '@/components/homepage/CaseStudies';
import FreeAudit from '@/components/homepage/FreeAudit';
import TechStack from '@/components/homepage/TechStack';
import Experience from '@/components/homepage/Experience';
import PerformanceExpertise from '@/components/homepage/PerformanceExpertise';
import Blog from '@/components/homepage/Blog';
import Process from '@/components/homepage/Process';
import Testimonials from '@/components/homepage/Testimonials';
import Contact from '@/components/homepage/Contact';

// Ordered for conversion: proof first (case studies + client feedback),
// then the offer (services + low-commitment audit), then background.
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CaseStudies />
      <Testimonials />
      <Services />
      <FreeAudit />
      <About />
      <TechStack />
      <Experience />
      <PerformanceExpertise />
      <Blog />
      <Process />
      <Contact />
    </main>
  );
}