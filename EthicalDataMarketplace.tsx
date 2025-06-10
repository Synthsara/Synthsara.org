// EthicalDataMarketplace Component for Synthsara & Synthocracy Platform
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, BarChart } from 'lucide-react';

export const EthicalDataMarketplace = () => {
  const [dataCategories, setDataCategories] = useState([
    {
      id: 'personal',
      name: 'Personal Insights',
      description: 'Share anonymized personal preferences and habits to improve services.',
      sharingEnabled: true,
      compensation: 'WORTH™ rewards based on data quality and usage',
      privacyLevel: 'High - Fully anonymized with consent management'
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      description: 'Contribute to medical research and health innovations through anonymized health data.',
      sharingEnabled: false,
      compensation: 'WORTH™ rewards + research outcome access',
      privacyLevel: 'Very High - Zero-knowledge proofs for verification without exposure'
    },
    {
      id: 'environmental',
      name: 'Environmental Monitoring',
      description: 'Share local environmental data to support climate research and conservation efforts.',
      sharingEnabled: true,
      compensation: 'POWERcoin™ rewards + community impact reports',
      privacyLevel: 'Medium - Location generalized to region level'
    }
  ]);

  const toggleDataSharing = (id) => {
    setDataCategories(categories => 
      categories.map(category => 
        category.id === id 
          ? { ...category, sharingEnabled: !category.sharingEnabled } 
          : category
      )
    );
  };

  // Animation variants for data flow visualization
  const flowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="marketplace" className="py-12 bg-gray-50 bg-torus bg-fixed bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ethical Data Marketplace™</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Take control of your data. Choose what to share, with whom, and under what conditions, while being fairly compensated for your contributions.
        </p>
        
        {/* Data Sovereignty Visualization */}
        <div className="mb-12 relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
            <h3 className="text-xl font-semibold text-center mb-6">Your Data Sovereignty Journey</h3>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* User Data (Divine Chaos - Raw Potential) */}
              <motion.div 
                className="flex flex-col items-center p-4 text-center mb-6 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={flowVariants}
              >
                <div className="w-20 h-20 rounded-full bg-divine-chaos-100 flex items-center justify-center mb-3">
                  <Database size={36} className="text-divine-chaos-600" />
                </div>
                <h4 className="font-medium text-divine-chaos-700">Your Data</h4>
                <p className="text-sm text-gray-600 mt-1 max-w-xs">
                  Raw potential with inherent value and sovereignty
                </p>
              </motion.div>
              
              {/* Flow Arrow */}
              <motion.div 
                className="hidden md:block w-16 h-2 bg-gradient-to-r from-divine-chaos-400 to-sacred-order-400"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 64 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              ></motion.div>
              
              {/* Consent & Control (Sacred Order - Structure) */}
              <motion.div 
                className="flex flex-col items-center p-4 text-center mb-6 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={flowVariants}
                transition={{ delay: 0.3 }}
              >
                <div className="w-20 h-20 rounded-full bg-sacred-order-100 flex items-center justify-center mb-3">
                  <Shield size={36} className="text-sacred-order-600" />
                </div>
                <h4 className="font-medium text-sacred-order-700">Consent & Control</h4>
                <p className="text-sm text-gray-600 mt-1 max-w-xs">
                  You decide what to share and with whom
                </p>
              </motion.div>
              
              {/* Flow Arrow */}
              <motion.div 
                className="hidden md:block w-16 h-2 bg-gradient-to-r from-sacred-order-400 to-divine-chaos-400"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 64 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              ></motion.div>
              
              {/* Ethical Exchange (The Dance) */}
              <motion.div 
                className="flex flex-col items-center p-4 text-center mb-6 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={flowVariants}
                transition={{ delay: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-divine-chaos-100 to-sacred-order-100 flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-vesica-piscis bg-contain bg-no-repeat bg-center"></div>
                </div>
                <h4 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-divine-chaos-700 to-sacred-order-700">Ethical Exchange</h4>
                <p className="text-sm text-gray-600 mt-1 max-w-xs">
                  Fair value exchange through smart contracts
                </p>
              </motion.div>
              
              {/* Flow Arrow */}
              <motion.div 
                className="hidden md:block w-16 h-2 bg-gradient-to-r from-divine-chaos-400 to-sacred-order-400"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 64 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              ></motion.div>
              
              {/* Collective Benefit (Emergence) */}
              <motion.div 
                className="flex flex-col items-center p-4 text-center"
                initial="hidden"
                animate="visible"
                variants={flowVariants}
                transition={{ delay: 0.9 }}
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <BarChart size={36} className="text-green-600" />
                </div>
                <h4 className="font-medium text-green-700">Collective Benefit</h4>
                <p className="text-sm text-gray-600 mt-1 max-w-xs">
                  Creating value for all while preserving individual sovereignty
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Background sacred geometry pattern */}
          <div className="absolute inset-0 bg-flower-of-life bg-contain bg-no-repeat bg-center opacity-5 z-0"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dataCategories.map(category => (
            <motion.div 
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * dataCategories.findIndex(c => c.id === category.id) }}
            >
              <div className={`p-4 text-white ${
                category.id === 'personal' 
                  ? 'bg-divine-chaos-600' 
                  : category.id === 'health' 
                    ? 'bg-sacred-order-600' 
                    : 'bg-green-600'
              }`}>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Compensation:</span>
                    <span className="text-sm text-gray-600">{category.compensation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Privacy Level:</span>
                    <span className="text-sm text-gray-600">{category.privacyLevel}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Data Sharing:</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={category.sharingEnabled}
                      onChange={() => toggleDataSharing(category.id)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-divine-chaos-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-divine-chaos-600"></div>
                  </label>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className={`w-full py-2 px-4 rounded-lg transition ${
                  category.sharingEnabled
                    ? 'bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {category.sharingEnabled ? 'Manage Sharing Settings' : 'Enable Data Sharing'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4">
            <h3 className="text-xl font-semibold">Data Sharing Activity</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compensation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-05-28</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Environmental Monitoring</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Global Climate Research Initiative</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.2 WORTH™</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-05-25</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Personal Insights</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sustainable Consumer Research</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.8 POWERcoin™</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-05-31</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Environmental Monitoring</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Local Conservation Project</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.5 POWERcoin™</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
