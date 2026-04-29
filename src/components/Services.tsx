import { useEffect, useRef, useState } from 'react';
import { Eye, Contact, Glasses, Activity } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Eye Exams',
    tagline: 'Comprehensive & Thorough',
    body: 'Full ocular health assessments tailored to your age, lifestyle, and history. We examine beyond visual acuity to ensure complete eye wellness.',
    detail: ['Retinal imaging', 'Pressure checks', 'Binocular vision assessment', 'Colour vision testing'],
  },
  {
    icon: Contact,
    title: 'Contact Lens Fitting',
    tagline: 'Precision Fit, Total Comfort',
    body: 'Expert fitting across all lens types — daily, monthly, toric, and multifocal — with follow-up care to ensure lasting comfort.',
    detail: ['Corneal mapping', 'Trial lens assessment', 'Dry eye evaluation', 'Wear schedule guidance'],
  },
  {
    icon: Glasses,
    title: 'Vision Correction',
    tagline: 'Clarity, Redefined',
    body: 'Personalised prescriptions with expert guidance on corrective options, from eyewear to co-managed refractive procedures.',
    detail: ['Refraction testing', 'Myopia management', 'Prescription eyewear', 'Surgical co-management'],
  },
  {
    icon: Activity,
    title: 'Eye Health Monitoring',
    tagline: 'Proactive & Preventive',
    body: 'Ongoing monitoring programmes for those with elevated risk factors, ensuring early detection and peace of mind.',
    detail: ['Glaucoma screening', 'Macular health tracking', 'Diabetic eye review', 'Annual recall system'],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(170deg, #ede7d9 0%, #f5f0e8 50%, #faf8f4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', bottom: '5%', left: '3%', width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,140,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a8c6e',
          }}>
            What We Offer
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            color: '#2c2c2c', marginBottom: 18,
          }}>
            Services Designed<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Around You</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 300,
            color: '#6b6b6b', maxWidth: 440, margin: '0 auto', lineHeight: 1.65,
          }}>
            From routine exams to specialised monitoring — every service delivered with precision and care.
          </p>
        </div>

        {/* Service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          marginBottom: 64,
        }}>
          {services.map(({ icon: Icon, title, tagline, body, detail }, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 2}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i
                  ? 'linear-gradient(160deg, #2c2c2c 0%, #3d3530 100%)'
                  : '#faf8f4',
                border: `1px solid ${hovered === i ? 'transparent' : 'rgba(184,150,90,0.15)'}`,
                borderRadius: 4,
                padding: '36px 30px',
                cursor: 'default',
                transition: 'background 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 24px 64px rgba(0,0,0,0.14)' : '0 2px 12px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: hovered === i
                  ? 'linear-gradient(90deg, #b8965a, #d4b07a)'
                  : 'linear-gradient(90deg, transparent, rgba(184,150,90,0.3), transparent)',
                transition: 'background 0.4s',
              }} />

              <div style={{
                width: 50, height: 50, borderRadius: 4, marginBottom: 24,
                background: hovered === i
                  ? 'rgba(184,150,90,0.2)'
                  : 'linear-gradient(135deg, rgba(184,150,90,0.1), rgba(184,150,90,0.04))',
                border: `1px solid ${hovered === i ? 'rgba(184,150,90,0.45)' : 'rgba(184,150,90,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.4s, border-color 0.4s',
              }}>
                <Icon size={21} color={hovered === i ? '#d4b07a' : '#b8965a'} strokeWidth={1.5} />
              </div>

              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: hovered === i ? 'rgba(212,176,122,0.8)' : '#7a8c6e',
                marginBottom: 8, transition: 'color 0.4s',
              }}>
                {tagline}
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500,
                color: hovered === i ? '#f5f0e8' : '#2c2c2c',
                marginBottom: 14, lineHeight: 1.15, transition: 'color 0.4s',
              }}>
                {title}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                color: hovered === i ? 'rgba(245,240,232,0.65)' : '#6b6b6b',
                lineHeight: 1.65, marginBottom: 24, transition: 'color 0.4s',
              }}>
                {body}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {detail.map((item, j) => (
                  <li key={j} style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
                    color: hovered === i ? 'rgba(245,240,232,0.5)' : '#8e8275',
                    marginBottom: j < detail.length - 1 ? 7 : 0,
                    transition: 'color 0.4s',
                  }}>
                    <div style={{
                      width: 3, height: 3, borderRadius: '50%', flexShrink: 0,
                      background: hovered === i ? '#d4b07a' : '#b8965a',
                      transition: 'background 0.4s',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in delay-6" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 300,
            color: '#4a4a4a', marginBottom: 24, lineHeight: 1.5,
          }}>
            Ready to prioritise your eye health?
          </p>
          <button
            onClick={scrollToContact}
            style={{
              padding: '14px 40px',
              background: 'linear-gradient(135deg, #b8965a, #c9a96e)',
              color: '#faf8f4', border: 'none', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              boxShadow: '0 8px 28px rgba(184,150,90,0.28)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(184,150,90,0.38)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(184,150,90,0.28)'; }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
