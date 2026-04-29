import { Eye, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#1e1e1e',
      padding: '48px 32px 32px',
      borderTop: '1px solid rgba(184,150,90,0.12)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'flex-start', gap: 32, marginBottom: 40,
        }}>
          {/* Brand + contact info */}
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, #b8965a, #d4b07a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Eye size={15} color="#faf8f4" strokeWidth={1.8} />
              </div>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500,
                color: '#f5f0e8', letterSpacing: '0.02em',
              }}>
                Lumiere Eye
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MapPin size={13} color="rgba(184,150,90,0.6)" strokeWidth={1.5} />
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
                  color: 'rgba(245,240,232,0.45)',
                }}>
                  14 Harley Street, London W1G 9PE
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={13} color="rgba(184,150,90,0.6)" strokeWidth={1.5} />
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
                  color: 'rgba(245,240,232,0.45)',
                }}>
                  +44 20 7946 0958
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Clock size={13} color="rgba(184,150,90,0.6)" strokeWidth={1.5} />
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
                  color: 'rgba(245,240,232,0.45)',
                }}>
                  Mon-Fri 8:30-18:00 / Sat 9:00-14:00
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 64px' }}>
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(184,150,90,0.7)', marginBottom: 16,
              }}>
                Services
              </div>
              {['Eye Exams', 'Contact Lenses', 'Vision Correction', 'Eye Health Monitoring'].map(s => (
                <a key={s} href="#services" style={{
                  display: 'block', marginBottom: 9,
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 300,
                  color: 'rgba(245,240,232,0.45)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
                >
                  {s}
                </a>
              ))}
            </div>

            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(184,150,90,0.7)', marginBottom: 16,
              }}>
                Clinic
              </div>
              {['Features', 'FAQ', 'Contact'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`}
                  onClick={s === 'Contact' ? scrollToContact : undefined}
                  style={{
                    display: 'block', marginBottom: 9,
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 300,
                    color: 'rgba(245,240,232,0.45)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(184,150,90,0.7)', marginBottom: 16,
            }}>
              Get Started
            </div>
            <button
              onClick={scrollToContact}
              style={{
                padding: '11px 24px',
                background: 'transparent',
                color: '#d4b07a',
                border: '1px solid rgba(184,150,90,0.35)',
                borderRadius: 2, cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 400,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                transition: 'border-color 0.25s, color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#d4b07a';
                e.currentTarget.style.background = 'rgba(184,150,90,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(184,150,90,0.35)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24,
          borderTop: '1px solid rgba(245,240,232,0.06)',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12,
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
            color: 'rgba(245,240,232,0.25)',
          }}>
            2026 Lumiere Eye Clinic. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
                color: 'rgba(245,240,232,0.25)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.25)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
