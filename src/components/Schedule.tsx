import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

type EventType =
  | "registration"
  | "break"
  | "ceremony"
  | "setup"
  | "start"
  | "coding"
  | "networking"
  | "judging"
  | "submission"
  | "end";

interface ScheduleEvent {
  time: string;
  event: string;
  icon: string;
  type: EventType;
}

type DayKey = 1 | 2 | 3;

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<DayKey>(1);

  const scheduleData: Record<DayKey, ScheduleEvent[]> = {
    1: [
      { time: "11:00 AM", event: "Check In", icon: "🎫", type: "registration" },
      { time: "1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM", event: "Orientation & Opening Ceremony", icon: "🎤", type: "ceremony" },
      { time: "4:00 PM", event: "Lab Allotment", icon: "🏢", type: "setup" },
      { time: "5:00 PM", event: "Hackathon Begins", icon: "🚀", type: "start" },
      { time: "9:00 PM", event: "Dinner", icon: "🍴", type: "break" },
      { time: "10:00 PM", event: "Networking", icon: "🤝", type: "networking" },
    ],
    2: [
      { time: "8:00 AM", event: "Breakfast", icon: "☕", type: "break" },
      { time: "9:00 AM", event: "Coding", icon: "💻", type: "coding" },
      { time: "11:00 AM", event: "Coding", icon: "💻", type: "coding" },
      { time: "1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM", event: "Coding", icon: "💻", type: "coding" },
      { time: "9:00 PM", event: "Dinner", icon: "🍴", type: "break" },
      { time: "10:00 PM", event: "Jamming Session", icon: "🎶", type: "networking" },
    ],
    3: [
      { time: "7:00 AM", event: "Project Submission", icon: "📤", type: "submission" },
      { time: "8:00 AM", event: "Breakfast", icon: "☕", type: "break" },
      { time: "9:00 AM", event: "Judging", icon: "⚖️", type: "judging" },
      { time: "1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM", event: "Winner Announcement", icon: "🏆", type: "ceremony" },
      { time: "5:00 PM", event: "Check Out", icon: "👋", type: "end" },
    ],
  };

  const getEventColor = (type: EventType) => {
    const colors: Record<EventType, string> = {
      registration: "#e75829",
      break: "#FFD47C",
      ceremony: "#e75829",
      setup: "#F2A03D",
      start: "#e75829",
      coding: "#F2A03D",
      networking: "#FFD47C",
      judging: "#e75829",
      submission: "#e75829",
      end: "#FFD47C",
    };
    return colors[type];
  };

  return (
    <section className="schedule-container">
      <style>{`
        .schedule-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a, #121212);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .schedule-content {
          max-width: 1200px;
          margin: 0 auto;
        }


        .day-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .day-button {
          padding: 0.9rem 2rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .day-button.active {
          background: linear-gradient(135deg, #e75829, #F2A03D);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(231,88,41,0.3);
        }

        .timeline-container {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(231,88,41,0.4),
            transparent
          );
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 90px;
          margin-bottom: 3rem;
        }

        .timeline-node {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: rgba(0,0,0,0.6);
          z-index: 2;
          box-shadow: 0 0 20px rgba(231,88,41,0.35);
        }

        .timeline-content {
          width: calc(50% - 80px);
          padding: 1.4rem 2rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: auto;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          text-align: left;
        }

        .timeline-time {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 600;
          color: #FFD47C;
        }

        .timeline-item:nth-child(odd) .timeline-time {
          left: calc(50% + 50px);
        }

        .timeline-item:nth-child(even) .timeline-time {
          right: calc(50% + 50px);
        }

        .event-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }

          .timeline-node {
            left: 30px;
            transform: none;
          }

          .timeline-content {
            width: auto;
            margin-left: 80px !important;
            text-align: left !important;
          }

          .timeline-time {
            position: relative;
            left: 80px !important;
            top: auto;
            transform: none;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <div className="schedule-content">
        <SectionHeader
          badge="3-Day Event"
          title="Event"
          gradientText="Schedule"
          subtitle="A 36-hour journey of innovation, collaboration, and creation"
        />

        <div className="day-selector">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              className={`day-button ${activeDay === day ? "active" : ""}`}
              onClick={() => setActiveDay(day as DayKey)}
            >
              Day {day}
            </button>
          ))}
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {scheduleData[activeDay].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time">{item.time}</div>

              <div
                className="timeline-node"
                style={{ borderColor: getEventColor(item.type) }}
              >
                {item.icon}
              </div>

              <div className="timeline-content">
                <div className="event-name">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
