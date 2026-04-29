import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What happens during an eye exam?',
    answer: 'Your eye exam begins with a conversation about your vision, medical history, and any concerns. We then conduct a thorough assessment covering visual acuity, retinal health, intraocular pressure, and binocular vision function. The entire process is gentle and unhurried, with every step explained clearly as we go.',
  },
  {
    question: 'How much does a consultation cost?',
    answer: 'Our consultation fee covers your initial assessment and a full discussion of findings. All further costs are discussed and agreed with you before any additional services are carried out. We believe in complete transparency, so there are never any surprise charges. Please contact us for current consultation pricing.',
  },
  {
    question: 'Should I choose contact lenses or glasses?',
    answer: 'The right choice depends on your lifestyle, visual needs, and personal preference. Many patients benefit from both. During your consultation, we assess your eye health, daily activities, and comfort preferences to recommend the best option for you. There is no one-size-fits-all answer, and we guide you through the decision.',
  },
  {
    question: 'Is the examination comfortable?',
    answer: 'Absolutely. We design every part of the experience around your comfort. Our clinic is calm and welcoming, and we use gentle, modern techniques throughout. If you feel any discomfort or have concerns at any point, simply let us know and we will adjust. Your ease is a priority, not an afterthought.',
  },
  {
    question: 'What follow-up care do you provide?',
    answer: 'After your consultation, we provide a clear summary of findings and recommendations. If ongoing monitoring is needed, we set up a recall schedule tailored to your situation. For contact lens patients, follow-up appointments ensure your lenses remain comfortable and effective. We are always available if questions arise between visits.',
  },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(170deg, #ede7d9 0%, #f5f0e8 50%, #faf8f4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', bottom: '5%', right: '3%', width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,90,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-in delay-1" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', marginBottom: 18,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
          }}>
            Common Questions
          </div>
          <h2 className="shiny-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 300, lineHeight: 1.15,
            marginBottom: 18,
          }}>
            Questions<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Answered</em>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400,
            color: '#4a4a4a', maxWidth: 440, margin: '0 auto', lineHeight: 1.65,
          }}>
            Clear, straightforward answers to the questions we hear most often.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`fade-in delay-${Math.min(i + 2, 6)}`}
                style={{
                  background: '#faf8f4',
                  border: `1px solid ${isOpen ? 'rgba(184,150,90,0.35)' : 'rgba(184,150,90,0.12)'}`,
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500,
                    color: '#2c2c2c', lineHeight: 1.3,
                  }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#b8965a"
                    strokeWidth={1.5}
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>

                <div style={{
                  maxHeight: isOpen ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <div style={{
                    padding: '0 24px 20px',
                    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                    color: '#4a4a4a', lineHeight: 1.7,
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
