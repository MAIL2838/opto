import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 2,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #b8965a 0%, #c9a96e 100%)',
        color: '#faf8f4',
        boxShadow: '0 4px 20px rgba(184,150,90,0.4)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        pointerEvents: visible ? 'auto' : 'none',
        zIndex: 50,
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
