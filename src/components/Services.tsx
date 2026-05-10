import { useEffect, useRef } from 'react';
import { Eye, Contact, Glasses, Activity } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Eye Exams',
    tagline: 'Comprehensive & Thorough',
    body: 'Full ocular health assessments tailored to your age, lifestyle, and history. We examine beyond visual acuity to ensure complete eye wellness.',
    detail: ['Retinal imaging', 'Pressure checks', 'Binocular vision assessment', 'Colour vision testing'],
    image: 'https://images.pexels.com/photos/5752310/pexels-photo-5752310.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Optometrist conducting comprehensive eye exam',
  },
  {
    icon: Contact,
    title: 'Contact Lens Fitting',
    tagline: 'Precision Fit, Total Comfort',
    body: 'Expert fitting across all lens types, from daily and monthly to toric and multifocal, with follow-up care to ensure lasting comfort.',
    detail: ['Corneal mapping', 'Trial lens assessment', 'Dry eye evaluation', 'Wear schedule guidance'],
    image: 'https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Precision contact lens fitting appointment',
  },
  {
    icon: Glasses,
    title: 'Vision Correction',
    tagline: 'Clarity, Redefined',
    body: 'Personalised prescriptions with expert guidance on corrective options, from eyewear to co-managed refractive procedures.',
    detail: ['Refraction testing', 'Myopia management', 'Prescription eyewear', 'Surgical co-management'],
    image: 'https://i.postimg.cc/YS2CZ93z/a2d188.jpg',
    imageAlt: 'Optician assisting patient with prescription eyewear selection',
  },
  {
    icon: Activity,
    title: 'Eye Health Monitoring',
    tagline: 'Proactive & Preventive',
    body: 'Ongoing monitoring programmes for those with elevated risk factors, ensuring early detection and peace of mind.',
    detail: ['Glaucoma screening', 'Macular health tracking', 'Diabetic eye review', 'Annual recall system'],
    image: 'https://i.postimg.cc/qv5FVDX0/Best-Eye-Hospital-in-Trivandrum-1.jpg',
    imageAlt: 'Advanced eye health monitoring equipment',
  },
];

type Service = typeof services[0];

function FeaturedService({ icon: Icon, title, tagline, body, detail, image, imageAlt }: Service) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          el.querySelectorAll('.slide-left, .slide-right').forEach(n => n.classList.add('visible'));
          observer.disconnect();
        }
      }),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: 64,
        alignItems: 'center',
        padding: '72px 0 56px',
      }}
    >
      {/* Text — 35% */}
      <div className="slide-left" style={{ flex: '0 0 35%', maxWidth: 380 }}>
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#7a8c6e', marginBottom: 16,
        }}>
          {tagline}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 4, flexShrink: 0,
            background: 'rgba(122,140,110,0.12)',
            border: '1px solid rgba(122,140,110,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={22} color="#7a8c6e" strokeWidth={1.5} />
          </div>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(30px, 3.5vw, 40px)',
            fontWeight: 500, color: '#2c2c2c', lineHeight: 1.15,
          }}>
            {title}
          </h3>
        </div>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
          color: '#3a3a3a', lineHeight: 1.72, marginBottom: 24,
        }}>
          {body}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {detail.map((item, j) => (
            <li key={j} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 400,
              color: '#3a3a3a',
            }}>
              <div style={{
                width: 4, height: 4, borderRadius: '50%', flexShrink: 0,
                background: '#b8965a',
              }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Image — 65% */}
      <div className="slide-right" style={{ flex: '1 1 65%' }}>
        <div style={{
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '16/10',
          boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
        }}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
          />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 48, height: 3,
            background: 'linear-gradient(270deg, #7a8c6e, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 3, height: 48,
            background: 'linear-gradient(180deg, #7a8c6e, transparent)',
          }} />
        </div>
      </div>
    </div>
  );
}

function CompactService({ icon: Icon, title, tagline, body, detail, image, imageAlt, index }: Service & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          el.querySelectorAll('.slide-left, .slide-right').forEach(n => n.classList.add('visible'));
          observer.disconnect();
        }
      }),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: 44,
        alignItems: 'center',
        padding: '44px 0',
        borderBottom: index < services.length - 1 ? '1px solid rgba(122,140,110,0.1)' : 'none',
        flexDirection: isEven ? 'row' : 'row-reverse',
      }}
    >
      {/* Text — 55% */}
      <div
        className={isEven ? 'slide-left' : 'slide-right'}
        style={{ flex: '0 0 55%', maxWidth: 520 }}
      >
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#7a8c6e', marginBottom: 12,
        }}>
          {tagline}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 4, flexShrink: 0,
            background: 'rgba(122,140,110,0.12)',
            border: '1px solid rgba(122,140,110,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={17} color="#7a8c6e" strokeWidth={1.5} />
          </div>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(24px, 2.5vw, 30px)',
            fontWeight: 500, color: '#2c2c2c', lineHeight: 1.15,
          }}>
            {title}
          </h3>
        </div>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
          color: '#3a3a3a', lineHeight: 1.68, marginBottom: 18,
        }}>
          {body}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {detail.map((item, j) => (
            <li key={j} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
              color: '#3a3a3a',
            }}>
              <div style={{
                width: 4, height: 4, borderRadius: '50%', flexShrink: 0,
                background: '#b8965a',
              }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Image — 45% */}
      <div
        className={isEven ? 'slide-right' : 'slide-left'}
        style={{ flex: '1 1 45%' }}
      >
        <div style={{
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '4/3',
          boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
        }}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
          />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 36, height: 3,
            background: 'linear-gradient(270deg, #7a8c6e, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 3, height: 36,
            background: 'linear-gradient(180deg, #7a8c6e, transparent)',
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

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
        background: 'radial-gradient(circle, rgba(122,140,110,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a8c6e',
          }}>
            What We Offer
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 54px)',
            fontWeight: 400, lineHeight: 1.12,
            marginBottom: 18,
          }}>
            Services Designed<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Around You</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
            color: '#3a3a3a', maxWidth: 440, margin: '0 auto', lineHeight: 1.68,
          }}>
            From routine exams to specialised monitoring, every service delivered with precision and care.
          </p>
        </div>

        {/* Featured service — large image, prominent text */}
        <FeaturedService {...services[0]} />

        {/* Supporting services — compact, varied layout */}
        {services.slice(1).map((service, i) => (
          <CompactService key={i} {...service} index={i} />
        ))}

        {/* Bottom CTA */}
        <div className="fade-in delay-2" style={{ textAlign: 'center', paddingTop: 48 }}>
          <button
            onClick={scrollToContact}
            style={{
              padding: '16px 48px',
              background: 'linear-gradient(135deg, #b8965a, #c9a96e)',
              color: '#faf8f4', border: 'none', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
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
