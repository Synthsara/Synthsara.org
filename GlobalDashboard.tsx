// Global Dashboard Component for Synthsara & Synthocracy Platform
import React from 'react';
import { motion } from 'framer-motion';
import { GlobeIcon, Users, BarChart3 } from 'lucide-react';

export const GlobalDashboard = () => {
  // In a full implementation, this would fetch real data
  // For the prototype, we'll use sample data
  const environmentalData = {
    co2Levels: 415.32,
    forestCoverage: 31.2,
    oceanHealth: 68.7,
    biodiversityIndex: 72.4,
    renewableEnergy: 28.6
  };
  
  const socialData = {
    globalPeaceIndex: 74.3,
    educationAccess: 82.1,
    healthcareAccess: 76.8,
    genderEquality: 68.9,
    incomeInequality: 62.3
  };
  
  const economicData = {
    globalGDP: 84.7,
    sustainableBusiness: 42.8,
    ethicalInvestment: 38.5,
    circularEconomy: 29.4,
    wealthDistribution: 58.2
  };

  return (
    <section id="dashboard" className="py-12 bg-gray-50 bg-flower-of-life bg-fixed bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Global Dashboard</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Real-time visualization of global metrics, challenges, and progress toward a more equitable and sustainable world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <GlobeIcon className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Environmental Harmony</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(environmentalData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-800 font-medium">{value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Users className="text-divine-chaos-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Social Wellbeing</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(socialData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-divine-chaos-500 h-2.5 rounded-full" 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-800 font-medium">{value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <BarChart3 className="text-sacred-order-500 text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Economic Vitality</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(economicData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-sacred-order-500 h-2.5 rounded-full" 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-800 font-medium">{value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition">
            Explore Full Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};
