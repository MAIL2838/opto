import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

function ParallaxImage({ src, alt, accentColor }: { src: string; alt: string; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, aspectRatio: '4/3' }}>
      <motion.div style={{ y }} className="parallax-img-wrapper">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            width: '100%', height: 'calc(100% + 60px)',
            objectFit: 'cover', display: 'block',
            scale: 1,
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.div>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 48, height: 3,
        background: `linear-gradient(270deg, ${accentColor}, transparent)`,
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 3, height: 48,
        background: `linear-gradient(180deg, ${accentColor}, transparent)`,
      }} />
    </div>
  );
}

function ServiceRow({ icon: Icon, title, tagline, body, detail, image, imageAlt, reverse, index }: Service & { reverse: boolean; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 56,
        alignItems: 'center',
        padding: '64px 0',
        borderBottom: index < services.length - 1 ? '1px solid rgba(122,140,110,0.12)' : 'none',
      }}
    >
      {/* Text */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
        }}
        style={{ order: reverse ? 2 : 1 }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#7a8c6e', marginBottom: 14,
          }}
        >
          {tagline}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18,
          }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 4, flexShrink: 0,
            background: 'rgba(122,140,110,0.12)',
            border: '1px solid rgba(122,140,110,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={20} color="#7a8c6e" strokeWidth={1.5} />
          </div>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(26px, 3vw, 34px)',
            fontWeight: 500, color: '#2c2c2c', lineHeight: 1.15,
          }}>
            {title}
          </h3>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
            color: '#3a3a3a', lineHeight: 1.72, marginBottom: 24,
          }}
        >
          {body}
        </motion.p>

        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}
        >
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
        </motion.ul>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 } },
        }}
        style={{ order: reverse ? 1 : 2 }}
      >
        <div style={{
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
        }}>
          <ParallaxImage src={image} alt={imageAlt} accentColor="#7a8c6e" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            style={{
              display: 'inline-block', marginBottom: 18,
              fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a8c6e',
            }}
          >
            What We Offer
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            className="shiny-text"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(34px, 5vw, 54px)',
              fontWeight: 400, lineHeight: 1.12,
              marginBottom: 18,
            }}
          >
            Services Designed<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Around You</em>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
              color: '#3a3a3a', maxWidth: 440, margin: '0 auto', lineHeight: 1.68,
            }}
          >
            From routine exams to specialised monitoring, every service delivered with precision and care.
          </motion.p>
        </motion.div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={i} {...service} reverse={i % 2 !== 0} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ textAlign: 'center', paddingTop: 48 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
