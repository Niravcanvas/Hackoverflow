"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";

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
    { id: 1, name: "Blue Star", image: "/images/Sponsors/Blue Star tab.png", link: "#", effect: "fade-up", SubSponsorcategory: "Co-Powered By" },
    { id: 2, name: "Devfolio", image: "/images/Sponsors/devfolioWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Gold Sponsor" },
    { id: 3, name: "Polygon", image: "/images/Sponsors/polygonWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Gold Sponsor" },
    { id: 4, name: "IMFS", image: "/images/Sponsors/imfsWhite.webp", link: "#", effect: "fade-up", SubSponsorcategory: "Gold Sponsor" },
    { id: 5, name: "AM Study", image: "/images/Sponsors/AMstudy.png", link: "#", effect: "fade-up", SubSponsorcategory: "Gold Sponsor" },
    { id: 6, name: "Aptech Panvel", image: "/images/Sponsors/apptech.png", link: "#", effect: "fade-up", SubSponsorcategory: "Gold Sponsor" },
    { id: 7, name: "Beeceptor", image: "/images/Sponsors/beeceptorWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Gold Sponsor" },
    { id: 8, name: "Replit", image: "/images/Sponsors/replitWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Silver Sponsor" },
    { id: 9, name: "Solana", image: "/images/Sponsors/solanaWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Silver Sponsor" },
    { id: 10, name: "FileCoin", image: "/images/Sponsors/filecoinWhite.png", link: "#", effect: "fade-up", SubSponsorcategory: "Silver Sponsor" }
  ];

  const pastSponsors: SponsorItem[] = [
    { id: 1, image: "/images/Sponsors/devfolioWhite.png", link: "https://devfolio.co/" },
    { id: 2, image: "/images/Sponsors/polygonWhite.png", link: "https://polygon.technology/" },
    { id: 3, image: "/images/Sponsors/imfsWhite.webp", link: "https://www.imfs.co.in/" },
    { id: 4, image: "/images/Sponsors/AMstudy.png", link: "https://amstudyabroad.com/" },
    { id: 5, image: "/images/Sponsors/apptech.png", link: "https://www.aptechlearning.com/" },
    { id: 6, image: "/images/Sponsors/BSidesMumbaiWhite.png", link: "https://www.bsidesmumbai.in/" },
    { id: 7, image: "/images/Sponsors/bobbleWhite.png", link: "https://www.bobble.ai/" },
    { id: 8, image: "/images/Sponsors/BlueStarSponsor.png", link: "https://www.bluestarindia.com/" },
    { id: 9, image: "/images/Sponsors/parnika.png", link: "https://theparnika.com/" },
    { id: 10, image: "/images/Sponsors/quillbotWhite.png", link: "https://quillbot.com/" },
    { id: 11, image: "/images/Sponsors/unloxblack.png", link: "https://www.unlox.com/" },
    { id: 12, image: "/images/Sponsors/tvsWhite.png", link: "https://www.tvsmotor.com/" },
    { id: 14, image: "/images/Sponsors/replitWhite.png", link: "https://replit.com/" },
    { id: 15, image: "/images/Sponsors/solanaWhite.png", link: "https://solana.com/" },
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
    <section className="sponsor-main-section">
      <style>{`
        html, body {
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        .sponsor-main-section {
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
          font-family: 'Poppins', sans-serif;
        }

        /* ORBS */
        .orb-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.12;
          pointer-events: none;
        }
        .orb-1 { top: -150px; left: -150px; background: #E85D24; }
        .orb-2 { bottom: -150px; right: -150px; background: #63205F; }

        .sponsor-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 2;
        }

        /* CTA */
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .cta-btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
        }

        .cta-primary {
          background: linear-gradient(90deg,#FCB216,#E85D24,#D91B57);
          color: #fff;
        }

        .cta-secondary {
          border: 2px solid #E85D24;
          color: #fff;
          background: rgba(255,255,255,0.05);
        }

        /* CENTERED SECTION TITLE */
        .section-title {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 800;
          margin: 4rem auto 3rem;
          color: #fff;
          max-width: 720px;
        }

        /* BENEFITS GRID — FIXED */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .benefit-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: 0.3s;
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.06);
        }

        .benefit-icon { font-size: 2.5rem; }
        .benefit-title { color: #fff; font-weight: 700; margin: 0.8rem 0; }
        .benefit-desc { color: #B0B0B0; font-size: 0.95rem; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            max-width: 100%;
            font-size: 1.8rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }

        /* SPONSORS */
        .simple-header {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          margin: 4rem 0 2rem;
          color: #fff;
        }

        .our-sponsors-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .our-sponsor-card {
          width: min(220px, 45%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sponsor-role-label {
          font-size: 0.8rem;
          color: #fff;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .sponsor-card-box {
          width: 100%;
          height: 110px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .sponsor-card-box img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }

        /* Past sponsor flowting row */
        .marquee-container {
          overflow: hidden;
          width: 100%;
          margin-top: 2rem;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee-scroll 18s linear infinite; /* 🔥 faster */
        }

        .marquee-item {
          width: 220px;
          flex-shrink: 0;
        }

        /* FULL WIDTH SCROLL */
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Pause on hover (nice UX) */
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

      `}</style>

      <div className="orb-glow orb-1" style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }} />
      <div className="orb-glow orb-2" style={{ transform: `translate(${-cursorPos.x * 0.02}px, ${-cursorPos.y * 0.02}px)` }} />

      <div className="sponsor-container">
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

        {/* <h2 className="simple-header">Our Sponsors</h2>
        <div className="our-sponsors-grid">
          {ourSponsors.map((s) => (
            <div key={s.id} className="our-sponsor-card" data-aos={s.effect}>
              <div className="sponsor-role-label">{s.SubSponsorcategory}</div>
              <div className="sponsor-card-box">
                <img src={s.image} alt={s.name} />
              </div>
            </div>
          ))}
        </div> */}

        <h2 className="simple-header">Past Sponsors</h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...pastSponsors, ...pastSponsors].map((s, i) => (
              <div key={i} className="marquee-item">
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <div className="sponsor-card-box">
                    <img src={s.image} alt="Sponsor" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorUs;
