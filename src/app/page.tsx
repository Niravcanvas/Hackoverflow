"use client";

import Footer from "@/components/Footer";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Schedule from "@/components/Schedule";
import KeyDates from "@/components/KeyDates";
import Special from "@/components/Special";
import Overview from "@/components/Overview";
import Theme from "@/components/Theme";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Sponsor from "@/components/Sponsor";
import Teams from "@/components/Teams";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <Special />

      <Overview />

      <section id="gallery">
        <Gallery />
      </section>

      <section id="stats">
        <Statistics />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <KeyDates />

      <section id="theme">
        <Theme />
      </section>

      <section id="sponsors">
        <Sponsor />
      </section>

      <section id="teams">
        <Teams />
      </section>

      <section id="faq">
        <FAQ />
      </section>
      <section id="about">
        <About />
      </section>

      <Footer />
    </>
  );
}
