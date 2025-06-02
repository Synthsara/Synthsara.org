// POWERcoinEconomy Component for Synthsara & Synthocracy Platform
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Leaf, BookOpen, Users, Zap } from 'lucide-react';

export const POWERcoinEconomy = () => {
  const [balance, setBalance] = useState(42.7);
  const [impactActions, setImpactActions] = useState([
    {
      id: 'action1',
      title: 'Community Garden Volunteer',
      description: 'Participate in local community garden initiatives to promote sustainable food systems.',
      sdgAlignment: [2, 11, 13],
      reward: 5.0,
      verificationMethod: 'Location check-in + community validation',
      chaosOrderBalance: 0.6 // 0 = pure chaos, 1 = pure order, 0.5 = balance
    },
    {
      id: 'action2',
      title: 'Renewable Energy Adoption',
      description: 'Switch to renewable energy sources for your home or business.',
      sdgAlignment: [7, 13],
      reward: 15.0,
      verificationMethod: 'Utility bill verification',
      chaosOrderBalance: 0.7
    },
    {
      id: 'action3',
      title: 'Educational Workshop Host',
      description: 'Host workshops on sustainability, digital literacy, or other community-building topics.',
      sdgAlignment: [4, 11, 17],
      reward: 10.0,
      verificationMethod: 'Participant verification + photo evidence',
      chaosOrderBalance: 0.4
    }
  ]);

  // Animation variants for the balance visualization
  const balanceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="powercoin" className="py-12 bg-divine-chaos-50 bg-diamond-essence bg-fixed bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">POWERcoin™ Economy</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Earn rewards for positive impact actions aligned with the UN Sustainable Development Goals, creating a regenerative economic system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4">
                <h3 className="text-xl font-semibold">Your POWERcoin™ Wallet</h3>
              </div>
              <div className="p-6">
                <motion.div 
                  className="text-center mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={balanceVariants}
                >
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-divine-chaos-100 to-sacred-order-100 flex items-center justify-center mx-auto">
                      <Coins size={40} className="text-divine-chaos-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-8 h-8 flex items-center justify-center">
                      +3.2
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-divine-chaos-600 mt-3 mb-2">{balance.toFixed(1)}</div>
                  <div className="text-gray-600">POWERcoin™ Balance</div>
                </motion.div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Impact Breakdown</h4>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Environmental</span>
                        <span className="text-sm font-medium text-gray-700">18.3 PC</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Social</span>
                        <span className="text-sm font-medium text-gray-700">15.7 PC</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-divine-chaos-500 h-2 rounded-full" style={{ width: '37%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Governance</span>
                        <span className="text-sm font-medium text-gray-700">8.7 PC</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-sacred-order-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Recent Transactions</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Community Garden</span>
                          <span className="text-sm text-green-600">+5.0 PC</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">2025-05-28</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Data Contribution</span>
                          <span className="text-sm text-green-600">+3.8 PC</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">2025-05-25</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Local Exchange</span>
                          <span className="text-sm text-red-600">-2.5 PC</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">2025-05-22</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4">
                <h3 className="text-xl font-semibold">Positive Impact Opportunities</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Earn POWERcoin™ by taking verifiable actions that contribute to the UN Sustainable Development Goals.
                </p>
                
                <div className="space-y-6">
                  {impactActions.map((action, index) => (
                    <motion.div 
                      key={action.id} 
                      className="border border-gray-200 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <div className="flex items-start">
                        <div className="flex-grow">
                          <h4 className="text-lg font-medium text-gray-800 mb-2">{action.title}</h4>
                          <p className="text-gray-600 mb-3">{action.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {action.sdgAlignment.map(sdg => (
                              <span key={sdg} className="inline-block bg-divine-chaos-100 text-divine-chaos-800 text-xs px-2 py-1 rounded-full">
                                SDG {sdg}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <span className="text-sm font-medium text-gray-700">Reward:</span>
                              <span className="text-sm text-gray-600 ml-2">{action.reward.toFixed(1)} POWERcoin™</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-700">Verification:</span>
                              <span className="text-sm text-gray-600 ml-2">{action.verificationMethod}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Divine Chaos / Sacred Order Balance Visualization */}
                        <div className="ml-4 flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-divine-chaos-100 to-sacred-order-100 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                              <div 
                                className="absolute top-0 bottom-0 left-0 bg-divine-chaos-200" 
                                style={{ width: `${(1 - action.chaosOrderBalance) * 100}%` }}
                              ></div>
                              <div 
                                className="absolute top-0 bottom-0 right-0 bg-sacred-order-200" 
                                style={{ width: `${action.chaosOrderBalance * 100}%` }}
                              ></div>
                            </div>
                            {action.chaosOrderBalance < 0.4 ? (
                              <Zap size={24} className="text-divine-chaos-600 z-10" />
                            ) : action.chaosOrderBalance > 0.6 ? (
                              <Leaf size={24} className="text-sacred-order-600 z-10" />
                            ) : (
                              <div className="w-6 h-6 bg-vesica-piscis bg-contain bg-no-repeat bg-center z-10"></div>
                            )}
                          </div>
                          <div className="text-xs text-center mt-1 text-gray-500">
                            {action.chaosOrderBalance < 0.4 ? 'Creative' : 
                             action.chaosOrderBalance > 0.6 ? 'Structured' : 'Balanced'}
                          </div>
                        </div>
                      </div>
                      
                      <button className="mt-3 bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white py-2 px-4 rounded-lg hover:shadow-md transition w-full">
                        Participate & Earn
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4">
                <h3 className="text-xl font-semibold">Regenerative Economy Visualization</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-divine-chaos-100 to-sacred-order-100 flex items-center justify-center mx-auto mb-3 relative">
                      <div className="w-12 h-12 bg-flower-of-life bg-contain bg-no-repeat bg-center"></div>
                      <motion.div 
                        className="absolute -right-2 top-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      >
                        +
                      </motion.div>
                    </div>
                    <h4 className="font-medium">Positive Impact</h4>
                    <p className="text-sm text-gray-600">Actions aligned with SDGs</p>
                  </div>
                  
                  <motion.div 
                    className="w-12 h-2 md:w-2 md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-divine-chaos-400 to-sacred-order-400"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-divine-chaos-100 to-sacred-order-100 flex items-center justify-center mx-auto mb-3">
                      <Coins size={36} className="text-divine-chaos-600" />
                    </div>
                    <h4 className="font-medium">POWERcoin™</h4>
                    <p className="text-sm text-gray-600">Regenerative value token</p>
                  </div>
                  
                  <motion.div 
                    className="w-12 h-2 md:w-2 md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-sacred-order-400 to-divine-chaos-400"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-divine-chaos-100 to-sacred-order-100 flex items-center justify-center mx-auto mb-3">
                      <Users size={36} className="text-sacred-order-600" />
                    </div>
                    <h4 className="font-medium">Community</h4>
                    <p className="text-sm text-gray-600">Shared prosperity</p>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 mt-6">
                  The regenerative economy creates a positive feedback loop where individual actions contribute to collective wellbeing, which in turn empowers more positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition">
            Explore Local Economy
          </button>
        </div>
      </div>
    </section>
  );
};
