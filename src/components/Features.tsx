import { useEffect, useRef } from 'react';
import { Microscope, Cpu, Smile, TreePine } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Advanced Eye Exams',
    body: 'Thorough, comprehensive examinations that go far beyond standard vision testing, covering retinal health, intraocular pressure, and more.',
    image: 'https://i.postimg.cc/QCPJYtkq/Does-BC-MSP-Cover-Eye-Exams-hero-1-1024x672.jpg',
    imageAlt: 'Optometrist performing slit-lamp examination',
  },
  {
    icon: Cpu,
    title: 'Precision Diagnostics',
    body: 'State-of-the-art imaging and diagnostic tools deliver detailed insights, enabling early detection and accurate clinical decisions.',
    image: 'https://i.postimg.cc/kXj8f0qJ/medium-shot-woman-getting-her-eyes-checked-23-2150758537.avif',
    imageAlt: 'Retinal imaging diagnostic equipment close-up',
  },
  {
    icon: Smile,
    title: 'Comfortable Experience',
    body: 'Every touchpoint is designed with your ease in mind: calm surroundings, gentle techniques, and unhurried consultations.',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Patient at ease during a calm clinic consultation',
  },
  {
    icon: TreePine,
    title: 'Long-Term Eye Health',
    body: 'We build an ongoing understanding of your ocular history, supporting prevention and continuity of care over time.',
    image: 'https://i.postimg.cc/d14tJK5g/eye-health-exercises-daily-routine.jpg',
    imageAlt: 'Doctor reviewing longitudinal patient eye health data',
  },
];

type Feature = typeof features[0];

function FeaturedRow({ icon: Icon, title, body, image, imageAlt }: Feature) {
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
          width: 56, height: 56, borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(184,150,90,0.14), rgba(184,150,90,0.06))',
          border: '1px solid rgba(184,150,90,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 28,
        }}>
          <Icon size={24} color="#b8965a" strokeWidth={1.5} />
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(30px, 3.5vw, 40px)',
          fontWeight: 500, color: '#2c2c2c',
          lineHeight: 1.15, marginBottom: 20,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 17, fontWeight: 400,
          color: '#3a3a3a', lineHeight: 1.72,
        }}>
          {body}
        </p>
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
            position: 'absolute', top: 0, left: 0,
            width: 48, height: 3,
            background: 'linear-gradient(90deg, #b8965a, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 3, height: 48,
            background: 'linear-gradient(180deg, #b8965a, transparent)',
          }} />
        </div>
      </div>
    </div>
  );
}

function CompactRow({ icon: Icon, title, body, image, imageAlt, index }: Feature & { index: number }) {
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
        borderBottom: index < features.length - 1 ? '1px solid rgba(184,150,90,0.08)' : 'none',
        flexDirection: isEven ? 'row' : 'row-reverse',
      }}
    >
      {/* Text — 55% */}
      <div
        className={isEven ? 'slide-left' : 'slide-right'}
        style={{ flex: '0 0 55%', maxWidth: 520 }}
      >
        <div style={{
          width: 40, height: 40, borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(184,150,90,0.14), rgba(184,150,90,0.06))',
          border: '1px solid rgba(184,150,90,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 18,
        }}>
          <Icon size={18} color="#b8965a" strokeWidth={1.5} />
        </div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(24px, 2.5vw, 30px)',
          fontWeight: 500, color: '#2c2c2c',
          lineHeight: 1.15, marginBottom: 12,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 16, fontWeight: 400,
          color: '#3a3a3a', lineHeight: 1.68,
        }}>
          {body}
        </p>
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
            position: 'absolute', top: 0, left: 0,
            width: 36, height: 3,
            background: 'linear-gradient(90deg, #b8965a, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 3, height: 36,
            background: 'linear-gradient(180deg, #b8965a, transparent)',
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
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

  return (
    <section
      id="features"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #faf8f4 0%, #f5f0e8 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: '10%', right: '2%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Why Choose Us
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 54px)',
            fontWeight: 400, lineHeight: 1.12,
            marginBottom: 18,
          }}>
            Care Refined to<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Every Detail</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
            color: '#3a3a3a', maxWidth: 480, margin: '0 auto', lineHeight: 1.68,
          }}>
            A practice built on precision, patience, and genuine commitment to the people we care for.
          </p>
        </div>

        {/* Featured item — large image, prominent text */}
        <FeaturedRow {...features[0]} />

        {/* Supporting items — compact, varied layout */}
        {features.slice(1).map((feature, i) => (
          <CompactRow key={i} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
}
