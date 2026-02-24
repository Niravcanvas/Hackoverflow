"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "@/components/SectionHeader"; // Import SectionHeader

interface SponsorItem {
  id: number;
  name?: string;
  image: string;
  link: string;
  effect?: string;
  SubSponsorcategory?: string;
}

const SponsorUs: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const ourSponsors: SponsorItem[] = [
    { id: 1, name: "aecc_global", image: "/images/Sponsors/aeccWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Platinum Sponsor" },
     { id: 4, name: "IMFS", image: "/images/Sponsors/imfsWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Platinum Sponsor" },
    { id: 5, name: "Sumago", image: "/images/Sponsors/sumagoSponsor.png", link: "#", effect: "fade-up", SubSponsorcategory: "Platinum Sponsor" },
    { id: 2, name: "osen", image: "/images/Sponsors/osenSponsor.png", link: "#", effect: "fade-up", SubSponsorcategory: "Our Sponsor" },
    { id: 3, name: "imperial", image: "/images/Sponsors/imperialSponsor.png", link: "#", effect: "fade-up", SubSponsorcategory: "Our Sponsor" },
   
    { id: 6, name: "Upthrust", image: "/images/Sponsors/upthrustSponsor.png", link: "#", effect: "fade-up", SubSponsorcategory: "Gaming Partner" },
  ];

  const pastSponsors: SponsorItem[] = [
    { id: 1, image: "/images/Sponsors/devfolioWhite.png", link: "https://devfolio.co/" },
    { id: 2, image: "/images/Sponsors/polygonWhite.png", link: "https://polygon.technology/" },
    { id: 3, image: "/images/Sponsors/imfsWhite.png", link: "https://www.imfs.co.in/" },
    { id: 4, image: "/images/Sponsors/AMstudy.png", link: "https://amstudyabroad.com/" },
    { id: 5, image: "/images/Sponsors/apptech.png", link: "https://www.aptechlearning.com/" },
    { id: 6, image: "/images/Sponsors/BSidesMumbaiWhite.png", link: "https://www.bsidesmumbai.in/" },
    { id: 7, image: "/images/Sponsors/bobbleWhite.png", link: "https://www.bobble.ai/" },
    { id: 8, image: "/images/Sponsors/BlueStarSponsor.png", link: "https://www.bluestarindia.com/" },
    { id: 9, image: "/images/Sponsors/parnika.png", link: "https://theparnika.com/" },
    { id: 10, image: "/images/Sponsors/quillbotWhite.png", link: "https://quillbot.com/" },
    { id: 11, image: "/images/Sponsors/unloxblack.png", link: "https://www.unlox.com/" },
    { id: 12, image: "/images/Sponsors/tvsWhite.png", link: "https://www.tvsmotor.com/" },
    { id: 13, image: "/images/Sponsors/replitWhite.png", link: "https://replit.com/" },
    { id: 14, image: "/images/Sponsors/solanaWhite.png", link: "https://solana.com/" },
  ];

  const stats = [
    { number: "500+", label: "Participants", icon: "👥" },
    { number: "85+", label: "Projects", icon: "💡" },
    { number: "36", label: "Hours", icon: "⏱️" },
    { number: "35+", label: "Colleges", icon: "🎓" }
  ];

  const benefits = [
    { id: 1, icon: "🎯", title: "Brand Visibility", desc: "Get your brand in front of 500+ innovators.", color: "#FCB216" },
    { id: 2, icon: "🤝", title: "Talent Pipeline", desc: "Connect with top engineering talent.", color: "#E85D24" },
    { id: 3, icon: "📢", title: "Marketing Reach", desc: "Wide exposure across campuses & socials.", color: "#D91B57" },
    { id: 4, icon: "🚀", title: "Innovation Access", desc: "Early access to breakthrough ideas.", color: "#63205F" },
    { id: 5, icon: "🌟", title: "Community Impact", desc: "Support the next generation of builders.", color: "#FCB216" },
    { id: 6, icon: "📊", title: "Thought Leadership", desc: "Position your brand as a tech leader.", color: "#E85D24" }
  ];

  useEffect(() => {
    AOS.init({ duration: 900 });
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style>{`
        /* --- GLOBAL & RESET --- */
        html, body { overflow-x: hidden; }
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* --- MAIN SECTION --- */
        .sponsor-main-section {
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }

        /* --- ORBS --- */
        .orb-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.12;
          pointer-events: none;
          transition: transform 0.1s ease-out;
        }
        .orb-1 { top: -150px; left: -150px; background: #E85D24; }
        .orb-2 { bottom: -150px; right: -150px; background: #63205F; }

        .sponsor-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* --- HERO HEADER --- */
        .hero-section { text-align: center; margin-bottom: 4rem; }
        
        .faq-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          color: #FCB216;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #B0B0B0;
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        /* --- CTA BUTTONS --- */
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
          display: inline-block;
        }

        .cta-primary {
          background: linear-gradient(90deg, #FCB216, #E85D24, #D91B57);
          color: #fff;
          box-shadow: 0 4px 15px rgba(232, 93, 36, 0.3);
        }
        .cta-primary:hover { transform: translateY(-3px); }

        .cta-secondary {
          border: 2px solid #E85D24;
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }
        .cta-secondary:hover { background: #E85D24; }

        /* --- STATS GRID --- */
        .stats-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 1.5rem; 
          margin-bottom: 5rem; 
          margin-top: 4rem;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #E85D24;
          display: block;
        }
        .stat-label { font-size: 0.9rem; color: #B0B0B0; text-transform: uppercase; }

        /* --- BENEFITS GRID --- */
        .section-title {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 800;
          margin: 5rem auto 3rem;
          color: #fff;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: 0.3s;
        }
        .benefit-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.06);
        }

        .benefit-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
        .benefit-title { color: #fff; font-weight: 700; margin-bottom: 0.8rem; font-size: 1.2rem; }
        .benefit-desc { color: #B0B0B0; font-size: 0.95rem; line-height: 1.5; }
        
        .stat-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 1rem;
          transform: scale(1.5);
        }
        
        /* --- SPONSOR SECTION HEADER --- */
        .simple-header {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          margin: 6rem 0 3rem;
          color: #fff;
          text-transform: capitalize;
          position: relative;
        }
        .simple-header::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #E85D24;
          margin: 15px auto 0;
          border-radius: 2px;
        }

        .our-sponsors-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 60px;
          width: 100%;
          padding: 0 1rem;
        }

        .our-sponsor-card {
          width: 300px; 
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .our-sponsor-card:hover {
          transform: translateY(-5px);
        }

        .sponsor-role-label {
          font-size: 1rem;
          color: #E85D24;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-align: center;
        }

        /* --- LOGO WRAPPER (BIGGER) --- */
        .sponsor-logo-wrapper {
          width: 100%;
          height: 180px; 
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .sponsor-logo-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          /* Full opacity for clarity */
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.1));
          transition: all 0.3s ease;
        }

        .sponsor-logo-wrapper:hover img {
          /* Glow effect on hover */
          filter: drop-shadow(0 0 15px rgba(232, 93, 36, 0.5));
          transform: scale(1.1);
        }

        /* --- PAST SPONSORS (MARQUEE - LARGE & VISIBLE) --- */
        .marquee-container {
          overflow: hidden;
          width: 100%;
          margin-top: 2rem;
          position: relative;
          padding: 30px 0;
          /* Fade Effect on Edges */
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 60px; /* Large spacing */
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
          align-items: center;
        }

        .marquee-item {
          /* Bigger dimensions for marquee items */
          width: 250px; 
          height: 140px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .marquee-item img {
           transition: all 0.3s ease;
           /* Fully visible (No Dimming) */
           opacity: 1; 
           filter: drop-shadow(0 0 2px rgba(255,255,255,0.1));
        }
        
        .marquee-item:hover img {
           transform: scale(1.15);
           filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .section-title { font-size: 1.8rem; }
          .benefits-grid { grid-template-columns: 1fr; }
          
          .our-sponsor-card { width: 80%; }
          .sponsor-logo-wrapper { height: 140px; }
          .marquee-item { width: 180px; height: 100px; }
        }
      `}</style>

      <section className="sponsor-main-section">
        <div className="orb-glow orb-1" style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }} />
        <div className="orb-glow orb-2" style={{ transform: `translate(${-cursorPos.x * 0.02}px, ${-cursorPos.y * 0.02}px)` }} />

        <div className="sponsor-container">

          {/* HERO */}
          <div className="hero-section">
            <SectionHeader
              badge="Partnership Opportunity"
              title="Want to"
              gradientText="Sponsor Us?"
              subtitle="Reach hundreds of students and innovators by partnering with HackOverflow 4.0."
            />

            <div className="cta-buttons">
              <a className="cta-btn cta-primary" href="/docs/SponsorBrochure.pdf" download>
                Download Brochure
              </a>
              <a className="cta-btn cta-secondary" href="mailto:hackoverflow@mes.ac.in">
                Email Us
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* BENEFITS */}
          <h2 className="section-title">
            Why <span className="gradient-text">Partner With Us?</span>
          </h2>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div
                key={b.id}
                className="benefit-card"
                style={{ borderColor: hoveredBenefit === b.id ? b.color : undefined }}
                onMouseEnter={() => setHoveredBenefit(b.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <span className="benefit-icon">{b.icon}</span>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* OUR SPONSORS */}
          <h2 className="simple-header">Our Sponsors</h2>
          <div className="our-sponsors-grid">
            {ourSponsors.map((s) => (
              <div key={s.id} className="our-sponsor-card" data-aos={s.effect}>
                <div className="sponsor-role-label">{s.SubSponsorcategory}</div>
                <div className="sponsor-logo-wrapper">
                  <Image
                    src={s.image}
                    alt={s.name || "Sponsor"}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PAST SPONSORS (MARQUEE - LARGE & VISIBLE) */}
          <h2 className="simple-header">Past Sponsors</h2>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...pastSponsors, ...pastSponsors].map((s, i) => (
                <div key={i} className="marquee-item">
                  <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                    <Image
                      src={s.image}
                      alt="Past Sponsor"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorUs;