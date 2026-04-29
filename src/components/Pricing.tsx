import { useEffect, useRef } from 'react';
import { FileText, MessageCircle } from 'lucide-react';

export default function Pricing() {
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
      id="pricing"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: '8%', right: '2%', width: 450, height: 450,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Transparent Pricing
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            color: '#2c2c2c', marginBottom: 18,
          }}>
            Consultation-Led<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Care, Clearly Priced</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 300,
            color: '#6b6b6b', maxWidth: 520, margin: '0 auto', lineHeight: 1.65,
          }}>
            We believe in straightforward pricing with no hidden costs. Your consultation determines exactly what you need, and we discuss all fees before proceeding.
          </p>
        </div>

        {/* Pricing approach cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28, marginBottom: 56,
        }}>
          <div
            className="fade-in delay-2"
            style={{
              background: '#faf8f4',
              border: '1px solid rgba(184,150,90,0.15)',
              borderRadius: 4,
              padding: '40px 32px',
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
              <FileText size={20} color="#b8965a" strokeWidth={1.5} />
            </div>

            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500,
              color: '#2c2c2c', marginBottom: 12, lineHeight: 1.2,
            }}>
              How Pricing Works
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
              color: '#6b6b6b', lineHeight: 1.65, marginBottom: 20,
            }}>
              Every visit begins with a consultation. This allows us to understand your needs fully before recommending any services or treatments.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Consultation fee covers your initial assessment',
                'All further costs discussed and agreed upfront',
                'No surprise charges or hidden extras',
                'Clear written summary provided',
              ].map((item, j) => (
                <li key={j} style={{
                  display: 'flex', alignItems: 'center', gap: 9,
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 300,
                  color: '#4a4a4a', marginBottom: j < 3 ? 8 : 0,
                }}>
                  <div style={{
                    width: 3, height: 3, borderRadius: '50%', flexShrink: 0,
                    background: '#b8965a',
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="fade-in delay-3"
            style={{
              background: '#faf8f4',
              border: '1px solid rgba(184,150,90,0.15)',
              borderRadius: 4,
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: 3, height: 48,
              background: 'linear-gradient(180deg, #7a8c6e, transparent)',
              borderRadius: '0 0 2px 0',
            }} />

            <div style={{
              width: 48, height: 48, borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(122,140,110,0.12), rgba(122,140,110,0.05))',
              border: '1px solid rgba(122,140,110,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 22,
            }}>
              <MessageCircle size={20} color="#7a8c6e" strokeWidth={1.5} />
            </div>

            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500,
              color: '#2c2c2c', marginBottom: 12, lineHeight: 1.2,
            }}>
              What to Expect
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
              color: '#6b6b6b', lineHeight: 1.65, marginBottom: 20,
            }}>
              Your consultation is the foundation of your care. We take the time to listen, examine, and explain before any decisions are made.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Thorough initial assessment and discussion',
                'Personalised recommendations based on findings',
                'Full cost breakdown before any treatment',
                'Flexible approach to suit your circumstances',
              ].map((item, j) => (
                <li key={j} style={{
                  display: 'flex', alignItems: 'center', gap: 9,
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 300,
                  color: '#4a4a4a', marginBottom: j < 3 ? 8 : 0,
                }}>
                  <div style={{
                    width: 3, height: 3, borderRadius: '50%', flexShrink: 0,
                    background: '#7a8c6e',
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="fade-in delay-4" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 300,
            color: '#4a4a4a', marginBottom: 24, lineHeight: 1.5,
          }}>
            Have questions about pricing? We are happy to discuss before your visit.
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
