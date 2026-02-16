import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

export default function Team() {
  const principle: TeamMember[] = [
    {
      name: "Dr. Jagdish W. Bakal",
      role: "Principal",
      image: "/images/Team/Jagdish W. Bakal.jpeg",
      bio: " Principal of MES's Pillai College of Engineering, providing visionary leadership and unwavering support to Hackoverflow.",
      socials: {
        linkedin: "https://www.linkedin.com/in/jagdish-bakal-0508/",
        email: "jagdishbakal@mes.ac.in"
      },
    },
  ]
  const facultyCoordinator: TeamMember[] = [
    {
      name: "Prof. Rutvij Mane",
      role: "Faculty Coordinator",
      image: "/images/Team/Rutvij Mane.jpeg",
      bio: "Academic mentor and technical advisor",
      socials: {
        linkedin: " https://www.linkedin.com/in/rutvij-mahendra-mane-0500621b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "rutvijmane@mes.ac.in"
      },
    },
    {
      name: "Dr. Rajashree Gadhave",
      role: "Head of Computer Department",
      image: "/images/Team/Rajashree Gadhave.jpeg",
      bio: "Guiding Hackoverflow with vision & experience",
      socials: {
        linkedin: "",
        email: "rgadhave@mes.ac.in"
      },
    },
    {
      name: "Prof. Pradnya Patil",
      role: "Faculty Coordinator",
      image: "/images/Team/Pradnya Patil.jpeg",
      bio: "Driving innovation and student collaboration",
      socials: {
        linkedin: "",
        email: "pchavarkar@mes.ac.in"
      },
    },
  ];

  const leads: TeamMember[] = [
    {
      name: "Darin Peringalloor",
      role: "Hackoveflow 4.0 Lead",
      image: "/images/Team/Darin.jpeg",
      bio: "Driving strategic vision and unified team execution",
      socials: {
        linkedin: " https://www.linkedin.com/in/darin-peringalloor",
        github: "https://github.com/DarinJoy"
      },
    },
    {
      name: "Sampriti Dogra",
      role: "Hackoveflow 4.0 Lead",
      image: "/images/Team/Sampriti Dogra.jpeg",
      bio: "Aligning diverse teams toward a singular, high-impact goal",
      socials: {
        linkedin: " https://www.linkedin.com/in/sampriti-dogra",
        github: "https://github.com/sampriti-9"
      },
    },
  ];

  const heads: TeamMember[] = [
    {
      name: "Parth Bhoir",
      role: "Event Head",
      image: "/images/Team/Parth Bhoir.jpeg",
      bio: "Managing logistics and event-day workflow",
      socials: {
        linkedin: "https://in.linkedin.com/in/parth-bhoir-781727289",
        github: "https://github.com/Parthb56"
      },
    },
      
    {
      name: "Chetan Jadhav",
      role: "Technical Head",
      image: "/images/Team/Chetan Jadhav.jpeg",
      bio: "Building digital platforms and stage tech",
      socials: {
        linkedin: "https://www.linkedin.com/in/iamchetanjadhav",
        github: "https://github.com/iamchetanjadhav"
      },
    },
    {
      name: "Rohan Gharat",
      role: "Media Head",
      image: "/images/Team/Rohan Gharat.jpeg",
      bio: "Capturing moments and managing social presence",
      socials: { linkedin: "", github: "" },
    },
    {
      name: "Aarya Karpe",
      role: "Graphics Head",
      image: "/images/Team/Aarya Karpe.png",
      bio: "Crafting visual identity and promotional assets",
      socials: {
        linkedin: "linkedin.com/in/aarya-karpe-b88b4b312",
        github: "github.com/aaryakarpe"
      },
    },
    {
      name: "Ashutosh Chavan",
      role: "Finance Head",
      image: "/images/Team/Ashutosh Chavan.jpeg",
      bio: "Building communities and outreach",
      socials: {
        github: "https://github.com/Ashutosh-Chavan",
        linkedin: "https://www.linkedin.com/in/ashutosh-chavan2212"
      },
    },
    {
      name: "Aayush Gunjal",
      role: "Management Head",
      image: "/images/Team/Aayush Gunjal.jpeg",
      bio: "Coordinating participants, judges, and mentors",
      socials: {
        linkedin: "http://linkedin.com/in/aayushgunjal",
        github: "http://github.com/AayushGunjal"
      },
    },
    {
      name: "Midhun Mohandas",
      role: "PR/BD Head",
      image: "/images/Team/Midhun Mohandas.jpeg",
      bio: "Building communities and outreach",
      socials: {
        linkedin: "https://www.linkedin.com/in/midhun-mohandas-684a07283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/student-midhun"
      },
    },
    {
      name: "Richa Shringarpure",
      role: "Documentation Head",
      image: "/images/Team/Richa Shrungarpure.png",
      bio: "Handling permissions, letters, and official records",
      socials: {
        linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
        github: "https://github.com/RichaShringarpure"
      },
    },
    {
      name: "Vedanti Patil",
      role: "Decor Head",
      image: "/images/Team/Vedanti Patil.jpeg",
      bio: "Designing aesthetics and immersive event environments",
      socials: {
        linkedin: "www.linkedin.com/in/vedanti-patil-2004vp",
        github: "https://github.com/V0630"
      },
    },
    {
      name: "Sharayu Patil",
      role: "Decor Head",
      image: "/images/Team/Sharayu Patil.jpeg",
      bio: "Visualizing themes and crafting immersive decor",
      socials: {
        linkedin: "https://www.linkedin.com/in/sharayupatil2624",
        github: "https://github.com/Sharayu2624"
      },
    },
    {
      name: "Chetan Jadhav",
      role: "Publicity Head",
      image: "/images/Team/Chetan Jadhav.jpeg",
      bio: "Driving reach and maximizing participation",
      socials: {
        linkedin: "https://www.linkedin.com/in/iamchetanjadhav",
        github: "https://github.com/iamchetanjadhav"
      },
    },
    {
      name: "Aayush Gunjal",
      role: "Publicity Head",
      image: "/images/Team/Aayush Gunjal.jpeg",
      bio: "Expanding reach and driving high impact registrations",
      socials: {
        linkedin: "http://linkedin.com/in/aayushgunjal",
        github: "http://github.com/AayushGunjal"
      },
    },
     {
      name: "Saksham Tiwari",
      role: "Outreach Head",
      image: "/images/Team/Saksham Tiwari.jpeg",
      bio: "Doing Outreah and PR for the event",
      socials: {
        linkedin: "https://www.linkedin.com/in/saksham-tiwari1512",
        github: "https://github.com/Saksham-Tiwar"
      },
    },
     {
      name: "Advait Patil",
      role: "Motion Graphics Head",
      image: "/images/Team/Advait Patil.jpeg",
      bio: "Creating engaging motion graphics and visual content",
      socials: {
        linkedin: "https://www.linkedin.com/in/advait-patil-236aa82b5",
        github: "https://github.com/ady6615"
      },
    },
  ];

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="team-card">
      <div className="team-avatar">
        <Image 
          src={member.image} 
          alt={member.name}
          width={120}
          height={120}
          className="team-avatar-img"
        />
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-bio">{member.bio}</p>
      <div className="team-socials">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin}
            className="social-link">
            <Linkedin size={18} />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter}
            className="social-link">
            <Twitter size={18} />
          </a>
        )}
        {member.socials.github && (
          <a href={member.socials.github}
            className="social-link">
            <Github size={18} />
          </a>
        )}
        {member.socials.email && (
          <a
            href={`mailto:${member.socials.email}`}
            className="social-link"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section className="team-section">
      <style>{`
        .team-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #0a0a0a, #121212);
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }


        /* Section Head */
        .section-head {
          text-align: center;
          margin-bottom: 1.8rem;
          margin-top: 1.5rem;
        }


        .section-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.8rem;
        }

        .section-divider {
          width: 60px;
          height: 3px;
          margin: 0 auto;
          background: linear-gradient(135deg, #e75829, #F2A03D);
          border-radius: 10px;
        }

        /* GRIDS */
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(3, 260px);
          justify-content: center;
          gap: 2rem;
        }
        
        .principle-grid {
          display: grid;
          grid-template-columns: 260px;
          justify-content: center;
        }
        
        .leads-grid {
          display: grid;
          grid-template-columns: repeat(2, 260px);
          justify-content: center;
          gap: 2rem;
        }

        .heads-grid {
          display: grid;
          grid-template-columns: repeat(4, 260px);
          justify-content: center;
          gap: 2rem;
        }

        /* Card */
        .team-card {
          width: 260px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(231,88,41,0.4);
          box-shadow: 0 0 40px rgba(231,88,41,0.25);
        }

        .team-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid rgba(231,88,41,0.4);
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .team-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
        }

        .team-role {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: #e75829;
          margin: 0.4rem 0 0.8rem;
        }

        .team-bio {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          text-align: center;
          flex-grow: 1;
        }

        .team-socials {
          display: flex;
          gap: 0.8rem;
          padding-top: 0.8rem;
          margin-top: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .social-link {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(231,88,41,0.15);
          border: 1px solid rgba(231,88,41,0.4);
          color: #e75829;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #e75829, #F2A03D);
          color: #fff;
        }

        @media (max-width: 1024px) {
          .heads-grid {
            grid-template-columns: repeat(2, 260px);
          }
        }

        @media (max-width: 768px) {
          .principle-grid,
          .faculty-grid,
          .leads-grid,
          .heads-grid {
            grid-template-columns: 260px;
          }
        }
      `}</style>

      <div className="team-container">
        <SectionHeader
          badge="Our Team"
          title="Meet Our"
          gradientText="Workforce"
          subtitle="Innovators, dreamers, and builders creating the future"
          className="team-header-spacer"
        />
        {/* PRINCIPAL */}
        <div className="team-level">
          <div className="section-head">
            <div className="section-title">Principal</div>
            <div className="section-divider" />
          </div>
          <div className="principle-grid">
            {principle.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>

        {/* FACULTY */}
        <div className="team-level">
          <div className="section-head">
            <div className="section-title">Faculty Coordinators</div>
            <div className="section-divider" />
          </div>
          <div className="faculty-grid">
            {facultyCoordinator.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>

        {/* LEADS */}
        <div className="team-level">
          <div className="section-head">
            <div className="section-title">Leads</div>
            <div className="section-divider" />
          </div>
          <div className="leads-grid">
            {leads.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>

        {/* HEADS */}
        <div className="team-level">
          <div className="section-head">
            <div className="section-title">Heads</div>
            <div className="section-divider" />
          </div>
          <div className="heads-grid">
            {heads.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}