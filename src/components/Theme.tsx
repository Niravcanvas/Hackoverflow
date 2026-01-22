import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const Themes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const TARGET_DATE = new Date("2026-03-01T19:00:00");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".themes-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // COUNTDOWN LOGIC
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap");

        .themes-section {
          min-height: 100vh;
          background: #0F0F0F;
          padding: 100px 1rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glow-bg-themes {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.08;
          pointer-events: none;
        }

        .glow-themes-1 { 
          top: -200px; 
          left: -200px; 
          background: #E85D24;
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .glow-themes-2 { 
          bottom: -200px; 
          right: -200px; 
          background: #63205F;
          animation: pulse-glow 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.1); }
        }

        .themes-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .theme-header-anim {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
        }

        .theme-header-anim.visible {
          opacity: 1;
        }

        .announcement-box {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.02);
          border: 2px solid rgba(252, 178, 22, 0.2);
          border-radius: 24px;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .announcement-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .announcement-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(252, 178, 22, 0.1), 
            transparent
          );
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }

        .announcement-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 30px;
          background: rgba(252, 178, 22, 0.1);
          border: 2px solid rgba(252, 178, 22, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .announcement-icon svg {
          width: 50px;
          height: 50px;
          stroke: #FCB216;
        }

        .announcement-icon::after {
          content: '';
          position: absolute;
          inset: -4px;
          border: 2px solid rgba(252, 178, 22, 0.3);
          border-radius: 50%;
          animation: pulse-ring 2s ease-out infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        .announcement-text {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .announcement-subtext {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 40px;
        }

        .countdown-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .countdown-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(252, 178, 22, 0.2);
          border-radius: 12px;
          min-width: 100px;
        }

        .countdown-number {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FCB216 0%, #E85D24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }

        .countdown-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        .notify-button {
          margin-top: 40px;
          padding: 16px 40px;
          background: transparent;
          border: 2px solid #FCB216;
          border-radius: 12px;
          color: #FCB216;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .notify-button:hover {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 100%);
          color: #FFFFFF;
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(252, 178, 22, 0.3);
          transform: translateY(-2px);
        }

        .notify-button svg {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .notify-button:hover svg {
          transform: rotate(12deg);
        }

        .decorative-dots-themes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          opacity: 0.3;
        }

        .dot-themes {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FCB216;
          border-radius: 50%;
          animation: float-dots 3s ease-in-out infinite;
        }

        .dot-themes:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .dot-themes:nth-child(2) { top: 25%; right: 15%; animation-delay: 0.5s; }
        .dot-themes:nth-child(3) { top: 60%; left: 8%; animation-delay: 1s; }
        .dot-themes:nth-child(4) { top: 75%; right: 12%; animation-delay: 1.5s; }
        .dot-themes:nth-child(5) { top: 85%; left: 20%; animation-delay: 2s; }
        .dot-themes:nth-child(6) { top: 40%; right: 8%; animation-delay: 2.5s; }

        @keyframes float-dots {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .themes-title {
            font-size: 3rem;
          }

          .announcement-box {
            padding: 60px 30px;
          }

          .announcement-text {
            font-size: 2rem;
          }

          .countdown-container {
            flex-wrap: wrap;
            gap: 15px;
          }

          .countdown-item {
            min-width: 80px;
            padding: 15px;
          }

          .countdown-number {
            font-size: 2rem;
          }

          .notify-button {
            padding: 14px 30px;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .themes-section {
            padding: 80px 1rem;
          }

          .themes-title {
            font-size: 2.5rem;
          }

          .announcement-box {
            padding: 40px 20px;
          }

          .announcement-icon {
            width: 80px;
            height: 80px;
          }

          .announcement-icon svg {
            width: 40px;
            height: 40px;
          }

          .announcement-text {
            font-size: 1.5rem;
          }

          .countdown-item {
            min-width: 70px;
          }
        }
      `}</style>

      <section className="themes-section">
        <div className="decorative-dots-themes">
          <div className="dot-themes"></div>
          <div className="dot-themes"></div>
          <div className="dot-themes"></div>
          <div className="dot-themes"></div>
          <div className="dot-themes"></div>
          <div className="dot-themes"></div>
        </div>

        <div className="themes-container">
          <div className={`theme-header-anim ${isVisible ? "visible" : ""}`}>
            <SectionHeader
              badge="Coming Soon"
              title="Hackoverflow"
              gradientText="Theme"
              subtitle="Get ready to dive into exciting problem statements that will challenge your creativity and technical skills"
            />
          </div>

          <div className={`announcement-box ${isVisible ? "visible" : ""}`}>
            <div className="announcement-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>

            <div className="announcement-text">TO BE ANNOUNCED</div>

            <div className="announcement-subtext">
              Themes will be revealed soon. Stay tuned for exciting challenges
              across multiple domains!
            </div>

            {/* ⏳ LIVE COUNTDOWN */}
            <div className="countdown-container">
              <div className="countdown-item">
                <span className="countdown-number">
                  {timeLeft.days}
                </span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {timeLeft.hours}
                </span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {timeLeft.minutes}
                </span>
                <span className="countdown-label">Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Themes;
