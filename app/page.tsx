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

// ── New SVG icons for sections ──────────────────────────────────────────────
function StethoscopeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.7.7 0 014 3v3a4 4 0 008 0V3a.7.7 0 00-.8-.7"/>
      <path d="M14 5.5a4 4 0 014 4"/>
      <path d="M18 9.5a4 4 0 014 4 4 4 0 01-8 0 4 4 0 014-4z"/>
      <circle cx="18" cy="17.5" r="2.5"/>
    </svg>
  );
}

function HeartPulseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      <polyline points="2 12 7 12 8.5 8.5 11 14 13 8 14.5 11.5 18 12"/>
    </svg>
  );
}

function AmbulanceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2"/>
      <path d="M19 9h3l2 3v4h-2"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
      <line x1="7" y1="10" x2="7" y2="14"/>
      <line x1="5" y1="12" x2="9" y2="12"/>
      <line x1="13" y1="10" x2="13" y2="14"/>
      <line x1="11" y1="12" x2="15" y2="12"/>
    </svg>
  );
}

function MicroscopeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8"/>
      <path d="M3 22h18"/>
      <path d="M14 22a2 2 0 01-2-2v-2"/>
      <path d="M12 2v10a4 4 0 01-4 4H6a4 4 0 01-4-4V2"/>
      <line x1="4" y1="6" x2="8" y2="6"/>
      <line x1="4" y1="10" x2="8" y2="10"/>
      <circle cx="16" cy="16" r="4"/>
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <polyline points="17 11 19 13 23 9"/>
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <polyline points="9 16 11 18 15 14"/>
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
      <path d="M8 3.13a4 4 0 000 7.75"/>
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="18" cy="6" r="1.5"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <line x1="9" y1="6" x2="9" y2="6.01"/>
      <line x1="15" y1="6" x2="15" y2="6.01"/>
      <line x1="9" y1="10" x2="9" y2="10.01"/>
      <line x1="15" y1="10" x2="15" y2="10.01"/>
      <path d="M9 14h6v8H9z"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function PhoneCallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
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

// ── Service data ─────────────────────────────────────────────────────────────
const services = [
  { icon: <StethoscopeIcon />, title: "General Checkup", desc: "Comprehensive health examinations and preventive care for all ages." },
  { icon: <HeartPulseIcon />, title: "Cardiology", desc: "Advanced heart care including diagnostics, treatment, and rehabilitation." },
  { icon: <AmbulanceIcon />, title: "Emergency Care", desc: "24/7 emergency medical services with rapid response and critical care." },
  { icon: <MicroscopeIcon />, title: "Lab Tests", desc: "State-of-the-art diagnostic laboratory with accurate and fast results." },
];

// ── Why Choose Us data ───────────────────────────────────────────────────────
const whyChooseUs = [
  { icon: <UserCheckIcon />, title: "Expert Doctors", desc: "Highly qualified and experienced medical professionals dedicated to your health." },
  { icon: <ShieldCheckIcon />, title: "Quality Care", desc: "Patient-centered approach with the highest standards of medical care." },
  { icon: <CalendarCheckIcon />, title: "Easy Scheduling", desc: "Convenient appointment booking with flexible timing options." },
  { icon: <MicroscopeIcon />, title: "Modern Technology", desc: "Cutting-edge medical equipment and advanced treatment techniques." },
];

// ── Testimonial data ─────────────────────────────────────────────────────────
const testimonials = [
  { name: "Sarah Johnson", role: "Patient", text: "The care I received was exceptional. The doctors took time to explain everything and made me feel completely at ease throughout my treatment.", rating: 5 },
  { name: "Michael Chen", role: "Patient", text: "I've been coming here for years. The staff is friendly, the facilities are modern, and the medical care is top-notch. Highly recommended!", rating: 5 },
  { name: "Emily Davis", role: "Patient", text: "After struggling with my condition for years, the specialists here finally gave me the right diagnosis and treatment plan. I'm forever grateful.", rating: 5 },
];

// ── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  { icon: <BuildingIcon />, value: "25+", label: "Years Experience" },
  { icon: <UsersIcon />, value: "15K+", label: "Happy Patients" },
  { icon: <DoctorIcon />, value: "150+", label: "Expert Doctors" },
  { icon: <AwardIcon />, value: "50+", label: "Awards Won" },
];

// ── Component: Stats Section ─────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="stats-section" aria-label="Hospital statistics">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card" id={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="stat-icon">{stat.icon}</div>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Component: Services Section ──────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="section-header">
        <span className="section-subtitle">Our Services</span>
        <h2 className="section-title" id="services-title">
          Comprehensive Medical Services
        </h2>
        <p className="section-desc">
          We offer a wide range of medical services to meet all your healthcare needs
          with compassion and expertise.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card" id={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="service-card-icon">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.desc}</p>
            <Link href="#" className="service-card-link">
              Learn More <ArrowRightIcon />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Component: Why Choose Us Section ─────────────────────────────────────────
function WhyChooseUsSection() {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="why-container">
        <div className="why-content">
          <div className="section-header why-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title" id="why-title">
              We Are Here For Your Health
            </h2>
            <p className="section-desc">
              Our commitment to excellence and patient-centered care makes us the preferred
              choice for healthcare services.
            </p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="why-card" id={`why-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="why-card-icon">{item.icon}</div>
                <div className="why-card-text">
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-image-wrap">
          <div className="why-image-placeholder">
            <DoctorIcon />
            <span>Our Medical Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Component: Testimonials Section ──────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-header">
        <span className="section-subtitle">Testimonials</span>
        <h2 className="section-title" id="testimonials-title">
          What Our Patients Say
        </h2>
        <p className="section-desc">
          Hear from our patients about their experience and the care they received.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card" id={`testimonial-${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="testimonial-quote">
              <QuoteIcon />
            </div>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-rating">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i} className="star"><StarIcon /></span>
              ))}
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {item.name.charAt(0)}
              </div>
              <div className="testimonial-info">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Component: Appointment CTA Section ───────────────────────────────────────
function AppointmentCTASection() {
  return (
    <section className="appointment-cta" aria-label="Book an appointment">
      <div className="appointment-cta-bg" aria-hidden="true" />
      <div className="appointment-cta-overlay" aria-hidden="true" />
      <div className="appointment-cta-content">
        <span className="appointment-cta-subtitle">Book Appointment</span>
        <h2 className="appointment-cta-title">
          Ready to Get Started?
        </h2>
        <p className="appointment-cta-desc">
          Schedule your visit today and take the first step towards better health.
          Our team is ready to provide you with the best medical care.
        </p>
        <div className="appointment-cta-actions">
          <a href="#book" className="appointment-btn-primary" id="appointment-book-btn">
            Book Appointment <ArrowRightIcon />
          </a>
          <a href="tel:+12123052500" className="appointment-btn-phone" id="appointment-call-btn">
            <PhoneCallIcon /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Component: Footer ────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = [
    { heading: "Quick Links", links: ["Home", "About Us", "Departments", "Our Doctors", "Services", "Contact"] },
    { heading: "Departments", links: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Dermatology", "General Medicine"] },
    { heading: "Contact Info", links: [] },
  ];

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-col footer-brand-col">
          <Link href="/" className="footer-logo" aria-label="Medizco Center Home">
            <div className="footer-logo-icon">
              <MedizcoLogoIcon />
            </div>
            <div className="footer-logo-text">
              <span className="footer-brand-name">MEDIZCO</span>
              <span className="footer-brand-sub">CENTER</span>
            </div>
          </Link>
          <p className="footer-brand-desc">
            Dedicated to providing exceptional healthcare services with compassion,
            innovation, and excellence for over 25 years.
          </p>
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="footer-social-link" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" className="footer-social-link" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>

        {/* Quick Links Column */}
        {footerLinks.map((col) => (
          <div key={col.heading} className="footer-col">
            <h3 className="footer-heading">{col.heading}</h3>
            {col.links.length > 0 ? (
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="footer-link">
                      <ArrowRightIcon /> {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <PhoneIcon />
                  <span>+1 (212) 305-2500</span>
                </div>
                <div className="footer-contact-item">
                  <MailIcon />
                  <span>info@medizco.com</span>
                </div>
                <div className="footer-contact-item">
                  <LocationPinIcon />
                  <span>123 Medical Center Dr, NY</span>
                </div>
                <div className="footer-contact-item">
                  <ClockIcon />
                  <span>Mon-Fri: 8am - 6pm</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Medizco Center. All rights reserved.</p>
      </div>
    </footer>
  );
}

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

      {/* ── Stats Section ── */}
      <StatsSection />

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

      {/* ── Services Section ── */}
      <ServicesSection />

      {/* ── Why Choose Us Section ── */}
      <WhyChooseUsSection />

      {/* ── Testimonials Section ── */}
      <TestimonialsSection />

      {/* ── Appointment CTA Section ── */}
      <AppointmentCTASection />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}