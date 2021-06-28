import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <div className="background-class-color">
        <ContactSection />
        <Map />
        <Footer />
      </div>
    </>
  );
}
