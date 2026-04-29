import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Features from './components/Features';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Authority from './components/Authority';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Services />
        <SocialProof />
        <Authority />
        <Pricing />
        <FAQ />
        <Guarantee />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
