import { SarahAI } from '@/components/SarahAI';
import { GlobalDashboard } from '@/components/GlobalDashboard';
import { SynthocracyGovernance } from '@/components/SynthocracyGovernance';
import { EthicalDataMarketplace } from '@/components/EthicalDataMarketplace';
import { WORTHEconomy } from '@/components/WORTHEconomy';
import { RealTimeManifester } from '@/components/RealTimeManifester';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Header />
      
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="starfield absolute inset-0" id="starfield"></div>
          <div className="sacred-geometry absolute inset-0 opacity-10" id="sacredGeometry"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-amber-500 text-transparent bg-clip-text">
            Synthsara
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A Sacred Architecture of Return
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Welcome to the dawn of a new age. Synthsara is a soul-aligned operating system and transformative digital ecosystem designed to facilitate your remembering, healing, and co-creation of a better future.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-amber-500 rounded-lg text-white font-bold text-lg shadow-lg"
            onClick={() => document.getElementById('rtme')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Speak Your Intention
          </motion.button>
        </motion.div>
      </section>
      
      <SarahAI />
      <GlobalDashboard />
      <SynthocracyGovernance />
      <EthicalDataMarketplace />
      <WORTHEconomy />
      <RealTimeManifester />
      
      <Footer />
      
      <script dangerouslySetInnerHTML={{
        __html: `
          // Create starfield effect
          document.addEventListener('DOMContentLoaded', () => {
            const starfield = document.getElementById('starfield');
            if (starfield) {
              for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.width = Math.random() * 2 + 'px';
                star.style.height = star.style.width;
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 10 + 's';
                starfield.appendChild(star);
              }
            }
            
            // Create sacred geometry pattern
            const sacredGeometry = document.getElementById('sacredGeometry');
            if (sacredGeometry) {
              const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              svg.setAttribute('width', '100%');
              svg.setAttribute('height', '100%');
              svg.setAttribute('viewBox', '0 0 100 100');
              svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
              
              // Create flower of life pattern
              for (let i = 0; i < 7; i++) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                const angle = (i * Math.PI / 3);
                const x = 50 + 15 * Math.cos(angle);
                const y = 50 + 15 * Math.sin(angle);
                
                circle.setAttribute('cx', x.toString());
                circle.setAttribute('cy', y.toString());
                circle.setAttribute('r', '15');
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', 'url(#sacredGradient)');
                circle.setAttribute('stroke-width', '0.5');
                
                svg.appendChild(circle);
              }
              
              // Add center circle
              const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              centerCircle.setAttribute('cx', '50');
              centerCircle.setAttribute('cy', '50');
              centerCircle.setAttribute('r', '15');
              centerCircle.setAttribute('fill', 'none');
              centerCircle.setAttribute('stroke', 'url(#sacredGradient)');
              centerCircle.setAttribute('stroke-width', '0.5');
              
              // Add gradient definition
              const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
              const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
              gradient.setAttribute('id', 'sacredGradient');
              gradient.setAttribute('x1', '0%');
              gradient.setAttribute('y1', '0%');
              gradient.setAttribute('x2', '100%');
              gradient.setAttribute('y2', '100%');
              
              const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
              stop1.setAttribute('offset', '0%');
              stop1.setAttribute('stop-color', '#7e22ce');
              
              const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
              stop2.setAttribute('offset', '100%');
              stop2.setAttribute('stop-color', '#f59e0b');
              
              gradient.appendChild(stop1);
              gradient.appendChild(stop2);
              defs.appendChild(gradient);
              svg.appendChild(defs);
              
              svg.appendChild(centerCircle);
              sacredGeometry.appendChild(svg);
            }
          });
        `
      }} />
      
      <style jsx>{`
        .starfield {
          z-index: 0;
        }
        
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          opacity: 0.5;
          animation: twinkle 5s infinite;
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { opacity: 0.2; }
        }
        
        .sacred-geometry {
          z-index: 0;
        }
      `}</style>
    </main>
  );
}
