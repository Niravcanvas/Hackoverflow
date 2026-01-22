import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";

const Special = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      id: 1,
      day: "11",
      month: "MARCH",
      title: "Kickoff & Hacking",
      color: "#FCB216"
    },
    {
      id: 2,
      day: "12",
      month: "MARCH",
      title: "Mid-Evaluation",
      color: "#E85D24"
    },
    {
      id: 3,
      day: "13",
      month: "MARCH",
      title: "Grand Finale",
      color: "#D91B57"
    }
  ];

  return (
    <>
      <style>{`
        .timeline-section {
          background: #0F0F0F;
          padding: 3rem 1rem 5rem;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .glass-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: 0.4s ease;
        }

        .glass-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.1);
        }

        .event-month {
          letter-spacing: 4px;
          color: #888;
          margin-bottom: 0.4rem;
        }

        .event-day {
          font-size: 6rem;
          font-weight: 800;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

      `}</style>

      <section className="timeline-section">
        <div className="container">
          <SectionHeader
            badge="Journey Ahead"
            title="HackOverflow"
            gradientText="Begins In"
            subtitle="The final countdown to three days of innovation, energy, and impact"
          />

          <div className="timeline-grid">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="event-month">{event.month}</div>
                <div className="event-day" style={{ color: event.color }}>
                  {event.day}
                </div>
                <h4 className="card-title">{event.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
