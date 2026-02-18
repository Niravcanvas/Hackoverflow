"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "hero", label: "Home", type: "scroll" },
  { id: "gallery", label: "Gallery", type: "scroll" },
  { id: "stats", label: "Statistics", type: "scroll" },
  { id: "schedule", label: "Schedule", type: "scroll" },
  { id: "sponsors", label: "Sponsors", type: "scroll" },
  { id: "teams", label: "Team", type: "scroll" },
  { id: "about", label: "About", type: "scroll" },
  { id: "/Events", label: "Events", type: "route" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = "hero";

      navLinks.forEach((link) => {
        if (link.type !== "scroll") return;

        const el = document.getElementById(link.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const scrollTo = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    setIsMobileOpen(false);

    const offset = 80;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15,15,15,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(252,178,22,0.2);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo-image {
          width: 64px;
          height: 64px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logo:hover .logo-image {
          transform: scale(1.05);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-links li {
          display: flex;
          align-items: center;
        }

        /* SAME styling for button and Link */
        .nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.3rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.7);
          font-family: Poppins, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          position: relative;
          transition: 0.3s;
          text-decoration: none;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,#FCB216,#E85D24);
          transform: translateX(-50%);
          transition: 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #FCB216;
        }

        .nav-link.active::after {
          width: 80%;
        }

        .brochure {
          border: 2px solid #FCB216;
          padding: 0.6rem 1.6rem;
          border-radius: 8px;
          color: #FCB216;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .brochure:hover {
          background: linear-gradient(90deg,#FCB216,#E85D24);
          color: #000;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: #FCB216;
        }

        .mobile-menu {
          display: none;
          background: rgba(15,15,15,0.97);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu .nav-link {
          display: block;
          width: 100%;
          padding: 1rem 2rem;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .navbar-links, .brochure { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo" onClick={() => scrollTo("hero")}>
            <Image
              src="/images/HO 4.0 Logo.svg"
              alt="HackOverflow Logo"
              className="logo-image"
              width={64}
              height={64}
              priority
            />
          </div>

          {/* Desktop */}
          <ul className="navbar-links">
            {navLinks.map((l) => (
              <li key={l.id}>
                {l.type === "scroll" ? (
                  <button
                    className={`nav-link ${pathname === "/" && activeSection === l.id
                      ? "active"
                      : ""
                      }`}
                    onClick={() => scrollTo(l.id)}
                  >
                    {l.label}
                  </button>
                ) : (
                  <Link
                    href={l.id}
                    className={`nav-link ${pathname === l.id ? "active" : ""
                      }`}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            className="brochure"
            href="/Docs/PublicityBrochure.pdf"
            download="HackOverflow Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brochure
          </a>

          <button
            className="hamburger"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile */}
        <div className={`mobile-menu ${isMobileOpen ? "open" : ""}`}>
          {navLinks.map((l) =>
            l.type === "scroll" ? (
              <button
                key={l.id}
                className={`nav-link ${pathname === "/" && activeSection === l.id
                  ? "active"
                  : ""
                  }`}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.id}
                href={l.id}
                className={`nav-link ${pathname === l.id ? "active" : ""
                  }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
