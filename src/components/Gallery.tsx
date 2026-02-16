import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

type YearKey = "1.0" | "2.0" | "3.0";
type Day = 1 | 2 | 3;

interface Memory {
  id: number;
  day: Day;
  title: string;
  desc: string;
  time: string;
  image: string;
  color: string;
}

interface YearData {
  year?: string;
  title: string;
  theme: string;
  stats: {
    participants: string;
    projects: string;
    hours: number;
  };
  memories: Memory[];
}

type GalleryData = Record<YearKey, YearData>;

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>("3.0");

  const galleryData: GalleryData = {
    "1.0": {
      year: "2023",
      title: "HackOverflow 1.0",
      theme: "The Beginning",
      stats: { participants: "200+", projects: "45+", hours: 36 },
      memories: [
        {
          id: 1,
          day: 1,
          title: "Opening Ceremony",
          desc: "The journey begins with 250+ passionate minds",
          time: "Day 1 - Morning",
          image: "images/HO 1.0/1.1.png",
          color: "#FCB216"
        },
        {
          id: 2,
          day: 2,
          title: "Judging & Mentoring",
          desc: "Where experience shapes innovation",
          time: "Day 2 - Afternoon",
          image: "images/HO 1.0/1.2.JPG",
          color: "#D91B57"
        },
        {
          id: 3,
          day: 3,
          title: "Pitch Perfect",
          desc: "Months of effort, minutes to impress",
          time: "Day 3 - Morning",
          image: "images/HO 1.0/1.3.JPG",
          color: "#FCB216"
        },
        {
          id: 4,
          day: 1,
          title: "Coding Begins",
          desc: "Ideas turn into code, one line at a time",
          time: "Day 1 - Evening",
          image: "images/HO 1.0/1.4.JPG",
          color: "#E85D24"
        },
        {
          id: 5,
          day: 2,
          title: "Networking Night",
          desc: "Breaking the code and the routine",
          time: "Day 2 - Night",
          image: "images/HO 1.0/1.5.JPG",
          color: "#63205F"
        },

        {
          id: 6,
          day: 3,
          title: "Victory",
          desc: "Celebrating the innovators and winners",
          time: "Day 3 - Afternoon",
          image: "images/HO 1.0/1.6.webp",
          color: "#E85D24"
        }
      ]
    },
    "2.0": {
      year: "2024",
      title: "HackOverflow 2.0",
      theme: "Level Up",
      stats: { participants: "250+", projects: "60+", hours: 36 },
      memories: [
        {
          id: 7,
          day: 1,
          title: "Grand Welcome",
          desc: "A new journey begins with bold ideas and open minds",
          time: "Day 1 - Morning",
          image: "images/HO 2.0/2.1.JPG",
          color: "#FCB216"
        },
        {
          id: 8,
          day: 2,
          title: "Judging & Mentoring",
          desc: "Connections that last a lifetime",
          time: "Day 2 - Afternoon",
          image: "images/HO 2.0/2.2.JPG",
          color: "#D91B57"
        },
        {
          id: 9,
          day: 3,
          title: "Final Pitch",
          desc: "Turning hard work into a powerful story",
          time: "Day 3 - Morning",
          image: "images/HO 2.0/2.3.JPG",
          color: "#FCB216"
        },
        {
          id: 10,
          day: 1,
          title: "Hackathon Starts",
          desc: "The grind begins creativity meets execution",
          time: "Day 1 - Evening",
          image: "images/HO 2.0/2.4.webp",
          color: "#E85D24"
        },
        {
          id: 11,
          day: 2,
          title: "Jamming Night",
          desc: "Because innovation needs a little fun too",
          time: "Day 2 - Night",
          image: "images/HO 2.0/2.5.JPG",
          color: "#63205F"
        },
        {
          id: 12,
          day: 3,
          title: "Champions Rise",
          desc: "New legends are born",
          time: "Day 3 - Afternoon",
          image: "images/HO 2.0/2.6.JPG",
          color: "#E85D24"
        }
      ]
    },
    "3.0": {
      year: "2025",
      title: "HackOverflow 3.0",
      theme: "Future Forward",
      stats: { participants: "250+", projects: "62+", hours: 36 },
      memories: [
        {
          id: 13,
          day: 1,
          title: "Inauguration Ceremony",
          desc: "Where innovators gather and possibilities take shape",
          time: "Day 1 - Morning",
          image: "images/HO 3.0/3.1.JPG",
          color: "#FCB216"
        },
        {
          id: 14,
          day: 2,
          title: "Networking & Judging",
          desc: "Ideas that change the world",
          time: "Day 2 - Afternoon",
          image: "images/HO 3.0/3.2.JPG",
          color: "#D91B57"
        },
        {
          id: 15,
          day: 3,
          title: "Grand Finale",
          desc: "The best minds evaluate brilliance",
          time: "Day 3 - Morning",
          image: "images/HO 3.0/3.3.JPG",
          color: "#FCB216"
        },
        {
          id: 16,
          day: 1,
          title: "Coding sprint",
          desc: "Insights from tech giants",
          time: "Day 1 - Evening",
          image: "images/HO 3.0/3.4.JPG",
          color: "#E85D24"
        },
        {
          id: 17,
          day: 2,
          title: "Night of fun",
          desc: "Not just coding but also fun",
          time: "Day 2 - Night",
          image: "images/HO 3.0/3.5.JPG",
          color: "#63205F"
        },
        {
          id: 18,
          day: 3,
          title: "Winner Announcement",
          desc: "A celebration of innovation and spirit",
          time: "Day 3 - Afternoon",
          image: "images/HO 3.0/3.6.JPG",
          color: "#E85D24"
        }
      ]
    }
  };

  /* ✅ FIX — THIS WAS MISSING */
  const current = galleryData[selectedYear];
  const days: Day[] = [1, 2, 3];
  const memories = current.memories;

  return (
    <section className="gallery-section">
      <style>{`
        /* STYLES UNCHANGED — EXACTLY AS YOU PROVIDED */
        .gallery-section {
          background: #0F0F0F;
          padding: 4rem 0;
          font-family: 'Poppins', sans-serif;
        }

        .gallery-container {
          max-width: 1400px;
          margin: auto;
          padding: 0 2rem;
        }

        .year-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .year-btn {
          padding: 1rem 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #B0B0B0;
          font-weight: 700;
          cursor: pointer;
        }

        .year-btn.active {
          background: linear-gradient(90deg,#FCB216,#E85D24,#D91B57,#63205F);
          color: #fff;
          border: none;
        }

        .year-info {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          backdrop-filter: blur(10px);
        }

        .year-theme {
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(90deg,#FCB216,#E85D24,#D91B57);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .year-stats {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 1.2rem;
          flex-wrap: wrap;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #B0B0B0;
          text-transform: uppercase;
        }

        .day-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        .day-column {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .immersive-card {
          position: relative;
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .immersive-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.85));
          z-index: 1;
          transition: opacity 0.4s ease;
        }

        .immersive-card:hover::before {
          opacity: 0;
        }

        .immersive-card:hover {
          transform: scale(1.05) rotate(2deg);
          z-index: 10;
          box-shadow: 0 0 25px rgba(252, 178, 22, 0.4);
        }

        .overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .overlay small {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .overlay h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
        }

        .overlay p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.9);
        }

        @media (max-width: 1024px) {
          .day-grid {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media (max-width: 768px) {
          .day-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="gallery-container">
        <SectionHeader
          badge="Journey Through Time"
          title="HackOverflow"
          gradientText=" Memories"
          subtitle="Relive the moments that defined innovation"
        />

        <div className="year-selector">
          {(["1.0", "2.0", "3.0"] as YearKey[]).map((year) => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              HackOverflow {year}
              <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                {galleryData[year].year}
              </div>
            </button>
          ))}
        </div>

        <div className="year-info">
          {/* Fixed: Escaped quotes using curly braces to avoid unescaped entity errors */}
          <div className="year-theme">{'"'}{current.theme}{'"'}</div>

          <div className="year-stats">
            <div>
              <span className="stat-number">{current.stats.participants}</span>
              <div className="stat-label">Participants</div>
            </div>
            <div>
              <span className="stat-number">{current.stats.projects}</span>
              <div className="stat-label">Projects</div>
            </div>
            <div>
              <span className="stat-number">{current.stats.hours}</span>
              <div className="stat-label">Hours</div>
            </div>
          </div>
        </div>

        <div className="day-grid">
          {days.map((day) => (
            <div key={day} className="day-column">
              {memories
                .filter((m) => m.day === day)
                .map((m) => (
                  <div key={m.id} className="immersive-card">
                    {/* Fixed: Added alt attribute for accessibility */}
                    <Image
                      src={m.image} 
                      alt={`${m.title} - ${m.desc}`}
                      fill
                      className="immersive-image"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="overlay">
                      <small style={{ color: m.color }}>{m.time}</small>
                      <h3>{m.title}</h3>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;