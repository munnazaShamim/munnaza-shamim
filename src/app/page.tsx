import { Metadata } from 'next';
import Hero from '@/components/Hero';
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

export const metadata: Metadata = {
  title: 'Munnaza - Premium Developer Portfolio',
  description: 'High-performance web development services for international clients',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
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