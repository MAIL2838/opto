import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: '14 Harley Street, London W1G 9PE' },
  { icon: Phone, label: 'Telephone', value: '+44 20 7946 0958' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri 8:30-18:00 / Sat 9:00-14:00' },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px',
    background: 'rgba(245,240,232,0.5)',
    border: '1px solid rgba(184,150,90,0.2)',
    borderRadius: 2, outline: 'none',
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
    color: '#2c2c2c',
    transition: 'border-color 0.25s, background 0.25s',
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(160deg, #2c2c2c 0%, #3a3028 50%, #2c2c2c 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,140,110,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.4), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4b07a',
          }}>
            Get in Touch
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            color: '#f5f0e8', marginBottom: 18,
          }}>
            Book Your<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Consultation</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300,
            color: 'rgba(245,240,232,0.55)', maxWidth: 420, margin: '0 auto', lineHeight: 1.65,
          }}>
            We will be in touch within one business day to confirm your appointment.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48, alignItems: 'start',
        }}>
          {/* Contact info */}
          <div className="fade-in delay-2">
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 400,
              color: '#f5f0e8', marginBottom: 8,
            }}>
              Visit the Clinic
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
              color: 'rgba(245,240,232,0.5)', marginBottom: 40, lineHeight: 1.55,
            }}>
              Our practice is situated in central London, accessible by public transport and with nearby parking.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {contactInfo.map(({ icon: Icon, label, value }, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(184,150,90,0.12)',
                    border: '1px solid rgba(184,150,90,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} color="#d4b07a" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(212,176,122,0.7)', marginBottom: 4,
                    }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                      color: 'rgba(245,240,232,0.75)', lineHeight: 1.5,
                    }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{
              margin: '44px 0', height: 1,
              background: 'linear-gradient(90deg, rgba(184,150,90,0.3), transparent)',
            }} />

            <div style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 300,
              fontStyle: 'italic', color: 'rgba(245,240,232,0.45)', lineHeight: 1.6,
            }}>
              "Your vision is our priority. We give every patient the time they deserve."
            </div>
          </div>

          {/* Form */}
          <div className="fade-in delay-3">
            {submitted ? (
              <div style={{
                background: 'rgba(122,140,110,0.12)',
                border: '1px solid rgba(122,140,110,0.3)',
                borderRadius: 4, padding: '56px 40px', textAlign: 'center',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(122,140,110,0.2)',
                  border: '1px solid rgba(122,140,110,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <Send size={22} color="#9aad8c" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 400,
                  color: '#f5f0e8', marginBottom: 12,
                }}>
                  Request Received
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                  color: 'rgba(245,240,232,0.55)', lineHeight: 1.6,
                }}>
                  Thank you for reaching out. A member of our team will confirm your appointment within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{
                    display: 'block', marginBottom: 7,
                    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 400,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                  }}>
                    Name
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    required placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(184,150,90,0.5)'; e.target.style.background = 'rgba(245,240,232,0.7)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(184,150,90,0.2)'; e.target.style.background = 'rgba(245,240,232,0.5)'; }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block', marginBottom: 7,
                    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 400,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                  }}>
                    Email
                  </label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="jane@example.com"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(184,150,90,0.5)'; e.target.style.background = 'rgba(245,240,232,0.7)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(184,150,90,0.2)'; e.target.style.background = 'rgba(245,240,232,0.5)'; }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block', marginBottom: 7,
                    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 400,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                  }}>
                    Phone
                  </label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+44 7700 000000"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(184,150,90,0.5)'; e.target.style.background = 'rgba(245,240,232,0.7)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(184,150,90,0.2)'; e.target.style.background = 'rgba(245,240,232,0.5)'; }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block', marginBottom: 7,
                    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 400,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Any particular concerns or preferred appointment times..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(184,150,90,0.5)'; e.target.style.background = 'rgba(245,240,232,0.7)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(184,150,90,0.2)'; e.target.style.background = 'rgba(245,240,232,0.5)'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    marginTop: 8, padding: '15px',
                    background: loading
                      ? 'rgba(184,150,90,0.5)'
                      : 'linear-gradient(135deg, #b8965a, #c9a96e)',
                    color: '#faf8f4', border: 'none', borderRadius: 2, cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    boxShadow: loading ? 'none' : '0 6px 24px rgba(184,150,90,0.28)',
                    transition: 'transform 0.25s, box-shadow 0.25s, background 0.25s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(184,150,90,0.38)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = loading ? 'none' : '0 6px 24px rgba(184,150,90,0.28)'; }}
                >
                  {loading ? (
                    <>
                      <div style={{
                        width: 14, height: 14, border: '2px solid rgba(250,248,244,0.4)',
                        borderTopColor: '#faf8f4', borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : 'Book Consultation'}
                </button>

                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
                  color: 'rgba(245,240,232,0.35)', textAlign: 'center', lineHeight: 1.5,
                }}>
                  Your information is kept strictly private and is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
