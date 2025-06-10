// SynthocracyGovernance Component for Synthsara & Synthocracy Platform
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Activity, Check, X, AlertCircle } from 'lucide-react';

export const SynthocracyGovernance = () => {
  const [activeProposals, setActiveProposals] = useState([
    {
      id: 'SP-2025-001',
      title: 'Enhanced Data Privacy Controls',
      description: 'Implement additional user controls for data sharing preferences and consent management.',
      category: 'Platform Development',
      votingEnds: '2025-06-15',
      yesVotes: 78,
      noVotes: 12,
      abstainVotes: 10,
      stage: 'Voting', // Stages: Tension, Mediation, Feedback, Resonance, Emergence
      tensionLevel: 'Medium',
      resonanceScore: 82
    },
    {
      id: 'SP-2025-002',
      title: 'Community Education Initiative',
      description: 'Allocate resources for developing educational content about data sovereignty and ethical AI.',
      category: 'Education',
      votingEnds: '2025-06-10',
      yesVotes: 92,
      noVotes: 5,
      abstainVotes: 3,
      stage: 'Resonance', // This proposal has moved further in the process
      tensionLevel: 'Low',
      resonanceScore: 95
    },
    {
      id: 'SP-2025-003',
      title: 'Sustainable Development Partnership',
      description: 'Form strategic partnership with renewable energy organizations to promote SDG 7.',
      category: 'Partnerships',
      votingEnds: '2025-06-20',
      yesVotes: 65,
      noVotes: 20,
      abstainVotes: 15,
      stage: 'Mediation', // This proposal is earlier in the process
      tensionLevel: 'High',
      resonanceScore: 68
    }
  ]);

  // Function to get stage-specific UI elements
  const getStageIndicator = (stage, tensionLevel, resonanceScore) => {
    const stageColors = {
      'Tension': 'bg-red-500',
      'Mediation': 'bg-yellow-500',
      'Feedback': 'bg-blue-500',
      'Resonance': 'bg-purple-500',
      'Emergence': 'bg-green-500',
      'Voting': 'bg-divine-chaos-500'
    };
    
    const tensionColors = {
      'High': 'text-red-500',
      'Medium': 'text-yellow-500',
      'Low': 'text-green-500'
    };
    
    return (
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${stageColors[stage]} mr-2`}></div>
          <span className="text-sm font-medium">{stage}</span>
        </div>
        
        {stage !== 'Emergence' && (
          <>
            <div className="flex items-center">
              <Activity size={14} className={tensionColors[tensionLevel]} />
              <span className={`text-xs ml-1 ${tensionColors[tensionLevel]}`}>
                {tensionLevel} Tension
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                <div 
                  className="bg-sacred-order-500 h-1.5 rounded-full" 
                  style={{ width: `${resonanceScore}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">{resonanceScore}%</span>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="governance" className="py-12 bg-divine-chaos-50 bg-vesica-piscis bg-fixed bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Synthocracy Governance</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Participate in decentralized decision-making through Reputation-Weighted Quadratic Voting, shaping the future of the Synthsara ecosystem.
        </p>
        
        {/* Cosmic Dance Process Visualization */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6">The Cosmic Dance of Governance</h3>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md mb-4 md:mb-0"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-2">
                <AlertCircle size={32} className="text-red-500" />
              </div>
              <h4 className="font-medium">Tension</h4>
              <p className="text-sm text-center text-gray-600 mt-1">Identifying needs and challenges</p>
            </motion.div>
            
            <div className="hidden md:block w-8 h-1 bg-gray-300"></div>
            
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md mb-4 md:mb-0"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                <Scale size={32} className="text-yellow-500" />
              </div>
              <h4 className="font-medium">Mediation</h4>
              <p className="text-sm text-center text-gray-600 mt-1">Finding integration pathways</p>
            </motion.div>
            
            <div className="hidden md:block w-8 h-1 bg-gray-300"></div>
            
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md mb-4 md:mb-0"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Activity size={32} className="text-blue-500" />
              </div>
              <h4 className="font-medium">Feedback</h4>
              <p className="text-sm text-center text-gray-600 mt-1">Gathering collective wisdom</p>
            </motion.div>
            
            <div className="hidden md:block w-8 h-1 bg-gray-300"></div>
            
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md mb-4 md:mb-0"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 rounded-full bg-sacred-order-100 flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-vesica-piscis bg-contain bg-no-repeat bg-center"></div>
              </div>
              <h4 className="font-medium">Resonance</h4>
              <p className="text-sm text-center text-gray-600 mt-1">Amplifying aligned patterns</p>
            </motion.div>
            
            <div className="hidden md:block w-8 h-1 bg-gray-300"></div>
            
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-flower-of-life bg-contain bg-no-repeat bg-center"></div>
              </div>
              <h4 className="font-medium">Emergence</h4>
              <p className="text-sm text-center text-gray-600 mt-1">Creating new structures</p>
            </motion.div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4">
            <h3 className="text-xl font-semibold">Active Proposals</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {activeProposals.map(proposal => (
              <div key={proposal.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{proposal.title}</h4>
                    <p className="text-gray-600 mt-1">{proposal.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="inline-block bg-divine-chaos-100 text-divine-chaos-800 text-xs px-2 py-1 rounded-full mr-2">
                        {proposal.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        Voting ends: {proposal.votingEnds}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-gray-500 mb-2">ID: {proposal.id}</span>
                    {getStageIndicator(proposal.stage, proposal.tensionLevel, proposal.resonanceScore)}
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-green-500 h-2.5 rounded-full" 
                        style={{ width: `${proposal.yesVotes}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{proposal.yesVotes}% Yes</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full" 
                        style={{ width: `${proposal.noVotes}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{proposal.noVotes}% No</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-gray-400 h-2.5 rounded-full" 
                        style={{ width: `${proposal.abstainVotes}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{proposal.abstainVotes}% Abstain</span>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition flex items-center">
                    <Check size={16} className="mr-1" />
                    Vote Yes
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition flex items-center">
                    <X size={16} className="mr-1" />
                    Vote No
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition">
                    Abstain
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition">
            Create New Proposal
          </button>
        </div>
      </div>
    </section>
  );
};
