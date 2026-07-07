import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import Services from '@/components/homepage/Services';
import CaseStudies from '@/components/homepage/CaseStudies';
import TechStack from '@/components/homepage/TechStack';
import Experience from '@/components/homepage/Experience';
import PerformanceExpertise from '@/components/homepage/PerformanceExpertise';
import Blog from '@/components/homepage/Blog';
import Process from '@/components/homepage/Process';
import Testimonials from '@/components/homepage/Testimonials';
import Contact from '@/components/homepage/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <TechStack />
      <Experience />
      <PerformanceExpertise />
      <Blog />
      <Process />
      <Contact />
    </main>
  );
}