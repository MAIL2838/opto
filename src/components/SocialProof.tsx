import { useEffect, useRef, useState } from 'react';
import { Eye, Sun, Sparkles } from 'lucide-react';

const transformations = [
  {
    icon: Eye,
    before: 'Struggling with blurred distance vision and frequent squinting',
    after: 'Sharp, clear vision at all distances with tailored correction',
    label: 'Clarity',
  },
  {
    icon: Sun,
    before: 'Persistent eye strain and discomfort during screen use',
    after: 'Comfortable, relaxed vision throughout the day with proper support',
    label: 'Comfort',
  },
  {
    icon: Sparkles,
    before: 'Uncertain about eye health and hesitant to seek care',
    after: 'Confident in a clear care plan and ongoing professional support',
    label: 'Confidence',
  },
];

const testimonials = [
  {
    quote: 'The thoroughness of the examination was remarkable. For the first time, I felt someone was truly looking after my vision, not just checking a box.',
    name: 'Catherine M.',
    detail: 'Comprehensive eye exam patient',
  },
  {
    quote: 'After years of uncomfortable lenses, the fitting process here changed everything. The attention to detail made all the difference.',
    name: 'James R.',
    detail: 'Contact lens fitting patient',
  },
  {
    quote: 'I was nervous about my first eye exam in years. The team put me at ease immediately and explained every step clearly.',
    name: 'Priya S.',
    detail: 'New patient consultation',
  },
  {
    quote: 'The monitoring programme gives me real peace of mind. I know any changes will be caught early, and that matters enormously to me.',
    name: 'David L.',
    detail: 'Ongoing eye health monitoring',
  },
];

const trustSignals = [
  'Clinically rigorous, evidence-based approach',
  'GMC-registered optometrists',
  'Patient-first philosophy in every consultation',
  'Transparent communication at every stage',
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="social-proof"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #faf8f4 0%, #f5f0e8 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: '5%', left: '-3%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Patient Stories
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            marginBottom: 18,
          }}>
            Real Transformations,<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Real Results</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
            color: '#4a4a4a', maxWidth: 460, margin: '0 auto', lineHeight: 1.65,
          }}>
            Every patient who walks through our doors has a unique story. Here is what changes when vision care is done right.
          </p>
        </div>

        {/* Before / After transformations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24, marginBottom: 80,
        }}>
          {transformations.map(({ icon: Icon, before, after, label }, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 2}`}
              style={{
                background: '#faf8f4',
                border: '1px solid rgba(184,150,90,0.15)',
                borderRadius: 4,
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: 3, height: 48,
                background: 'linear-gradient(180deg, #b8965a, transparent)',
                borderRadius: '0 0 2px 0',
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(184,150,90,0.12), rgba(184,150,90,0.05))',
                border: '1px solid rgba(184,150,90,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
              }}>
                <Icon size={20} color="#b8965a" strokeWidth={1.5} />
              </div>

              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#7a8c6e', marginBottom: 16,
              }}>
                {label}
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: '#5a5a5a', marginBottom: 6,
                }}>
                  Before
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                  color: '#4a4a4a', lineHeight: 1.6,
                }}>
                  {before}
                </p>
              </div>

              <div style={{
                width: 32, height: 1,
                background: 'linear-gradient(90deg, #b8965a, transparent)',
                marginBottom: 20,
              }} />

              <div>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: '#b8965a', marginBottom: 6,
                }}>
                  After
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                  color: '#2c2c2c', lineHeight: 1.6,
                }}>
                  {after}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="fade-in delay-5" style={{ marginBottom: 80 }}>
          <div style={{
            background: 'linear-gradient(135deg, #2c2c2c 0%, #3d3530 100%)',
            borderRadius: 4,
            padding: '56px 48px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.5), transparent)',
            }} />

            <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: 60, fontWeight: 300,
                color: 'rgba(184,150,90,0.25)', lineHeight: 1, marginBottom: 8,
              }}>
                "
              </div>

              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: i === activeTestimonial ? 'block' : 'none',
                    opacity: i === activeTestimonial ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                >
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 300,
                    fontStyle: 'italic', color: '#f5f0e8', lineHeight: 1.65,
                    marginBottom: 28,
                  }}>
                    {t.quote}
                  </p>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
                    color: '#d4b07a', marginBottom: 4,
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 400,
                    color: 'rgba(245,240,232,0.7)',
                  }}>
                    {t.detail}
                  </div>
                </div>
              ))}

              {/* Dots */}
              <div style={{
                display: 'flex', gap: 8, justifyContent: 'center',
                marginTop: 32,
              }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    style={{
                      width: i === activeTestimonial ? 24 : 8,
                      height: 8, borderRadius: 4,
                      background: i === activeTestimonial ? '#b8965a' : 'rgba(184,150,90,0.25)',
                      border: 'none', cursor: 'pointer',
                      transition: 'width 0.3s ease, background 0.3s ease',
                    }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="fade-in delay-6">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {trustSignals.map((signal, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '16px 20px',
                  background: '#faf8f4',
                  border: '1px solid rgba(184,150,90,0.12)',
                  borderRadius: 4,
                }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#b8965a', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 400,
                  color: '#4a4a4a', lineHeight: 1.4,
                }}>
                  {signal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
