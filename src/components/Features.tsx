import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Microscope, Cpu, Smile, TreePine, Zap } from 'lucide-react';

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
  {
    icon: Zap,
    title: 'Modern Equipment',
    body: 'Our clinic is equipped with leading-edge optical technology, ensuring assessments that are both fast and highly accurate.',
    image: 'https://images.pexels.com/photos/5765830/pexels-photo-5765830.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    imageAlt: 'Modern optical coherence tomography scanner',
  },
];

type Feature = typeof features[0];

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
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
  );
}

function FeatureRow({ icon: Icon, title, body, image, imageAlt, reverse, index }: Feature & { reverse: boolean; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 56,
        alignItems: 'center',
        padding: '64px 0',
        borderBottom: index < features.length - 1 ? '1px solid rgba(184,150,90,0.1)' : 'none',
      }}
    >
      {/* Text block */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
        }}
        style={{ order: reverse ? 2 : 1 }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{
            width: 48, height: 48, borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(184,150,90,0.14), rgba(184,150,90,0.06))',
            border: '1px solid rgba(184,150,90,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <Icon size={20} color="#b8965a" strokeWidth={1.5} />
        </motion.div>
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(26px, 3vw, 34px)',
            fontWeight: 500, color: '#2c2c2c',
            lineHeight: 1.15, marginBottom: 16,
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 17, fontWeight: 400,
            color: '#3a3a3a', lineHeight: 1.72,
          }}
        >
          {body}
        </motion.p>
      </motion.div>

      {/* Image block */}
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
          <ParallaxImage src={image} alt={imageAlt} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
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
              letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8965a',
            }}
          >
            Why Choose Us
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
            Care Refined to<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Every Detail</em>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400,
              color: '#3a3a3a', maxWidth: 480, margin: '0 auto', lineHeight: 1.68,
            }}
          >
            A practice built on precision, patience, and genuine commitment to the people we care for.
          </motion.p>
        </motion.div>

        {/* Feature rows */}
        <div>
          {features.map((feature, i) => (
            <FeatureRow key={i} {...feature} reverse={i % 2 !== 0} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
