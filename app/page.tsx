import Image from "next/image";
import Link from "next/link";

// ── SVG icon helpers ────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.19 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function SelectChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function MedizcoLogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="url(#logoGrad)"/>
      <path d="M12 24C12 17.373 17.373 12 24 12s12 5.373 12 12c0 5.42-3.586 10.015-8.514 11.526" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 16v8l5 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 31c2-2 5-2 7 0s5 2 7 0" stroke="#48cae4" strokeWidth="2.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#0096c7"/>
          <stop offset="100%" stopColor="#0d2d5e"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Navigation data ──────────────────────────────────────────────────────────
const navItems = [
  { label: "Home", hasDropdown: false },
  { label: "About", hasDropdown: true },
  { label: "Department", hasDropdown: false },
  { label: "Doctor", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Contact", hasDropdown: false },
  { label: "Megamenu", hasDropdown: true },
];

// ── Page Component ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      {/* ── Top Info Bar ── */}
      <div className="topbar">
        <div className="topbar-left">
          <a href="tel:+12123052500" className="topbar-item" id="topbar-phone">
            <PhoneIcon />
            <span>Phone: +1 (212) 305-2500</span>
          </a>
          <span className="topbar-item" id="topbar-hours">
            <ClockIcon />
            <span>Mon-Fri (8am - 6pm)</span>
          </span>
          <a href="mailto:info@example.com" className="topbar-item" id="topbar-email">
            <MailIcon />
            <span>info@example.com</span>
          </a>
        </div>
        <div className="topbar-right">
          <div className="cart-icon" id="topbar-cart" role="button" aria-label="Shopping cart">
            <CartIcon />
            <span className="cart-badge">0</span>
          </div>
          <div className="topbar-item" id="topbar-menu" role="button" aria-label="Menu">
            <MenuIcon />
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <Link href="/" className="logo" id="nav-logo" aria-label="Medizco Center Home">
          <div className="logo-icon">
            <MedizcoLogoIcon />
          </div>
          <div className="logo-text">
            <span className="brand-name">MEDIZCO</span>
            <span className="brand-sub">CENTER</span>
          </div>
        </Link>

        <ul className="nav-links" role="list">
          {navItems.map((item) => (
            <li key={item.label} className="nav-item">
              <Link
                href="#"
                className="nav-link"
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                aria-haspopup={item.hasDropdown ? "true" : undefined}
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon />}
              </Link>
            </li>
          ))}
        </ul>

        <button className="nav-search-btn" id="nav-search-btn" aria-label="Search">
          <SearchIcon />
        </button>
      </nav>

      {/* ── Hero Section ── */}
      <section className="hero" aria-labelledby="hero-title">
        {/* Background Image */}
        <div className="hero-bg">
          <Image
            src="/hospital_bg.png"
            alt="Doctor smiling at Medizco Medical Center"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            loading="eager"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Decorative lines */}
        <div className="hero-decor" aria-hidden="true" />

        {/* Hero Content */}
        <div className="hero-content">
          <span className="hero-label" aria-label="Category: Diagnosis">
            Diagnosis
          </span>

          <h1 className="hero-title" id="hero-title">
            Personal care for your
            <br />
            healthy living
          </h1>

          <p className="hero-desc">
            Small river named Duden flows by their place and supplies it with the
            necessary regelialia. It is a paradisematic country, in which roasted
            parts of sentences fly into your mouth.
          </p>

          <a href="#book" className="hero-btn" id="hero-book-btn" aria-label="Book an appointment">
            Book Now
            <span className="hero-btn-arrow" aria-hidden="true">
              <ArrowRightIcon />
            </span>
          </a>
        </div>
      </section>

      {/* ── Service Finder Bar ── */}
      <section className="service-bar" aria-label="Find a service">
        <div className="service-bar-inner">
          {/* Area selector */}
          <div className="service-select-area" id="service-area">
            <LocationPinIcon aria-hidden="true" />
            <span>Select your area</span>
          </div>

          {/* Service type selector */}
          <div className="service-select-wrap" id="service-type-wrap">
            <select id="service-type-select" aria-label="Select service type" defaultValue="">
              <option value="" disabled>Select Service type</option>
              <option value="general">General Medicine</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
            </select>
            <span className="select-icon" aria-hidden="true">
              <SelectChevronIcon />
            </span>
          </div>

          {/* CTA */}
          <a href="#services" className="service-cta" id="service-cta-btn" aria-label="Get your service now">
            Get Your Service Now
          </a>
        </div>
      </section>
    </main>
  );
}
