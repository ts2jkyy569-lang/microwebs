import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import Trusted from "../components/sections/Trusted";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white overflow-x-hidden">

        {/* Hero */}
        <Hero />

        {/* Trusted Businesses */}
        <Trusted />

        {/* Statistics */}
        <Stats />

        {/* Services */}
        <Services />

        {/* Featured Portfolio */}
        <Portfolio />

        {/* Our Process */}
        <Process />

        {/* Pricing */}
        <Pricing />

        {/* Why Choose Us */}
        <WhyChoose />

        {/* About */}
        <About />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* Contact */}
        <Contact />

        {/* Final CTA */}
        <CTA />

      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}