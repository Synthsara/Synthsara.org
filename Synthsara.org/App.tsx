// Main App component for Synthsara & Synthocracy Platform
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeIcon, 
  Users, 
  BarChart3, 
  Scale, 
  Brain,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

// Components would be imported from separate files in a full implementation
import { Header } from './components/Header';
import { GlobalDashboard } from './components/GlobalDashboard';
import { SynthocracyGovernance } from './components/SynthocracyGovernance';
import { EthicalDataMarketplace } from './components/EthicalDataMarketplace';
import { POWERcoinEconomy } from './components/POWERcoinEconomy';
import { RealTimeManifester } from './components/RealTimeManifester';
import { Footer } from './components/Footer';
import { SarahAI } from './components/SarahAI';

import './App.css';

function App() {
  const [showSarah, setShowSarah] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-r from-divine-chaos-700 to-sacred-order-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Synthsara
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A global dashboard facilitating decentralized participatory democracy, unifying the world and catalyzing a paradigm shift towards a more equitable and automated society.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#dashboard" 
                className="bg-white text-divine-chaos-700 py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition mr-4"
              >
                Explore Dashboard
              </a>
              <a 
                href="#governance" 
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-divine-chaos-700 transition"
              >
                Join Synthocracy
              </a>
            </motion.div>
          </div>
        </section>
        
        <GlobalDashboard />
        <SynthocracyGovernance />
        <EthicalDataMarketplace />
        <POWERcoinEconomy />
        <RealTimeManifester />
      </main>

      <Footer />
      
      {/* Sarah AI Toggle Button */}
      <button 
        onClick={() => setShowSarah(!showSarah)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
        aria-label="Toggle Sarah AI"
      >
        {showSarah ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {/* Sarah AI Chat Interface */}
      {showSarah && <SarahAI />}
    </div>
  );
}

export default App;
