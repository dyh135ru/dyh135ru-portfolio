import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="background-class-color">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
