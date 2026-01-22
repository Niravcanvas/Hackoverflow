import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const SponsorUs = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    const benefits = [
        {
            id: 1,
            icon: "🎯",
            title: "Brand Visibility",
            desc: "Get your brand in front of 500+ tech enthusiasts and innovators",
            color: "#FCB216"
        },
        {
            id: 2,
            icon: "🤝",
            title: "Talent Pipeline",
            desc: "Connect with top engineering talent and future tech leaders",
            color: "#E85D24"
        },
        {
            id: 3,
            icon: "📢",
            title: "Marketing Reach",
            desc: "Extensive promotion across social media and campus networks",
            color: "#D91B57"
        },
        {
            id: 4,
            icon: "🚀",
            title: "Innovation Access",
            desc: "First look at cutting-edge projects and breakthrough ideas",
            color: "#63205F"
        },
        {
            id: 5,
            icon: "🌟",
            title: "Community Impact",
            desc: "Support the next generation of innovators and problem solvers",
            color: "#FCB216"
        },
        {
            id: 6,
            icon: "📊",
            title: "Thought Leadership",
            desc: "Position your brand as a leader in tech and innovation",
            color: "#E85D24"
        }
    ];


    return (
        <section className="sponsor-section">
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .sponsor-section {
          min-height: 100vh;
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
          padding: 3rem 0;
        }


        .sponsor-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .cta-buttons {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-primary {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 50%, #D91B57 100%);
          border: none;
          color: #FFFFFF;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(252, 178, 22, 0.3);
        }

        .cta-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #FCB216;
          transform: translateY(-3px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #FCB216, #E85D24, #D91B57);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: rgba(252, 178, 22, 0.3);
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 0.8rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FCB216, #E85D24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #B0B0B0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          color: #FFFFFF;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .benefit-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-8px);
          border-color: rgba(252, 178, 22, 0.3);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.8rem;
        }

        .benefit-desc {
          font-size: 0.95rem;
          color: #B0B0B0;
          line-height: 1.6;
        }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .tier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .tier-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--tier-gradient);
        }

        .tier-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(252, 178, 22, 0.4);
        }

        .tier-name {
          font-size: 1.8rem;
          font-weight: 800;
          background: var(--tier-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
        }

        .tier-features {
          list-style: none;
        }

        .tier-feature {
          padding: 0.8rem 0;
          color: #E0E0E0;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .tier-feature::before {
          content: '✓';
          color: #FCB216;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .contact-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .contact-desc {
          font-size: 1.1rem;
          color: #B0B0B0;
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tiers-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .sponsor-section {
            padding: 1.5rem 0;
          }

          .sponsor-container {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2.5rem;
            letter-spacing: -1px;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-card {
            padding: 1.5rem 1rem;
          }

          .stat-icon {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .contact-section {
            padding: 2rem 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 1.8rem;
          }

          .tier-card {
            padding: 1.5rem;
          }
        }
      `}</style>

            <div
                className="orb-glow orb-1"
                style={{
                    transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`
                }}
            />
            <div
                className="orb-glow orb-2"
                style={{
                    transform: `translate(${-cursorPos.x * 0.02}px, ${-cursorPos.y * 0.02}px)`
                }}
            />

            <div className="sponsor-container">
                <div style={{ textAlign: "center", marginBottom: "4rem", padding: "3rem 0" }}>
                    <SectionHeader
                        badge="Partnership Opportunity"
                        title="Want to"
                        gradientText="Sponsor Us?"
                        subtitle="Reach hundreds of students and potential customers by sponsoring HackOverflow 4.0. Partner with us to inspire innovation and connect with the next generation of tech leaders."
                    />
                    <div className="cta-buttons">
                        <a href="/docs/SponsorBrochure.pdf" download="HackOverflow_4.0_Sponsorship_Brochure.pdf" className="cta-btn cta-primary" style={{ position: 'relative', zIndex: 1 }}>
                            <span style={{ position: 'relative', zIndex: 1 }}>Download Brochure</span>
                        </a>
                        <a href="mailto:admin@hackoverflow4.tech" className="cta-btn cta-secondary" style={{ position: 'relative', zIndex: 1 }}>
                            <span style={{ position: 'relative', zIndex: 1 }}>Email Us</span>
                        </a>
                    </div>
                </div>


                {/* Benefits Section */}
                <h2 className="section-title">
                    Why <span className="gradient-text">Partner With Us?</span>
                </h2>
                <div className="benefits-grid">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="benefit-card"
                            onMouseEnter={() => setHoveredBenefit(benefit.id)}
                            onMouseLeave={() => setHoveredBenefit(null)}
                            style={{
                                borderColor: hoveredBenefit === benefit.id ? benefit.color : 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <span className="benefit-icon">{benefit.icon}</span>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-desc">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SponsorUs;