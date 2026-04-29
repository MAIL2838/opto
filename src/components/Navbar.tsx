import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease',
        background: scrolled ? 'rgba(250, 248, 244, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.07)' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #b8965a, #d4b07a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Eye size={18} color="#faf8f4" strokeWidth={1.8} />
          </div>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: '#2c2c2c', letterSpacing: '0.02em' }}>
            Lumière Eye
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.href === '#contact' ? scrollToContact : undefined}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 400,
                color: '#4a4a4a', textDecoration: 'none', letterSpacing: '0.06em',
                textTransform: 'uppercase', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#b8965a')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a4a')}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToContact}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '10px 24px', borderRadius: 2,
              background: 'linear-gradient(135deg, #b8965a, #c9a96e)',
              color: '#faf8f4', border: 'none', cursor: 'pointer',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, height: 2, background: '#2c2c2c', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: '#2c2c2c', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 22, height: 2, background: '#2c2c2c', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(250, 248, 244, 0.98)', backdropFilter: 'blur(12px)',
          padding: '24px 32px 32px', borderTop: '1px solid rgba(184,150,90,0.15)',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.href === '#contact' ? scrollToContact : () => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                color: '#4a4a4a', textDecoration: 'none', letterSpacing: '0.06em',
                textTransform: 'uppercase', borderBottom: '1px solid rgba(184,150,90,0.1)',
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToContact}
            style={{
              marginTop: 20, width: '100%', padding: '13px',
              background: 'linear-gradient(135deg, #b8965a, #c9a96e)',
              color: '#faf8f4', border: 'none', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}
          >
            Book Consultation
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
