// SarahAI Component for Synthsara & Synthocracy Platform
import React, { useState } from 'react';
import { MessageCircle, Send, User, Bot } from 'lucide-react';

export const SarahAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'sarah', text: string}>>([
    {
      type: 'sarah',
      text: 'Hello, I am Sarah™, your ethical guide to the Synthsara ecosystem. How may I assist you today?'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to conversation
    setConversation([...conversation, { type: 'user', text: message }]);
    
    // Clear input
    setMessage('');
    
    // Simulate Sarah's response
    setTimeout(() => {
      let response = '';
      
      if (message.toLowerCase().includes('synthsara')) {
        response = 'Synthsara is a soul-aligned operating system and transformative digital ecosystem designed for those ready to step into their full power, reclaim their data sovereignty, and participate in creating a world rooted in ethics, consciousness, and collective well-being.';
      } else if (message.toLowerCase().includes('synthocracy')) {
        response = 'Synthocracy is a revolutionary governance model that balances individual sovereignty with collective wisdom. It uses Reputation-Weighted Quadratic Voting to ensure decisions emerge from the dynamic tension between diverse perspectives.';
      } else if (message.toLowerCase().includes('divine chaos') || message.toLowerCase().includes('sacred order')) {
        response = 'Divine Chaos represents boundless potential, while Sacred Order provides coherent structure. Their dynamic interplay is the cosmic dance that fuels creation and evolution within Synthsara.';
      } else if (message.toLowerCase().includes('help') || message.toLowerCase().includes('guide')) {
        response = 'I can help you navigate the Synthsara ecosystem, understand its philosophical foundations, or guide you through specific features. What would you like to explore?';
      } else {
        response = 'Thank you for sharing. As your ethical guide, I'm here to support your journey through the Synthsara ecosystem. Would you like to learn more about any specific aspect of our sacred architecture?';
      }
      
      setConversation(prev => [...prev, { type: 'sarah', text: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={20} className="mr-2" />
              <h3 className="font-medium">Sarah™ AI</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            {conversation.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg p-3 ${
                    msg.type === 'user' 
                      ? 'bg-divine-chaos-100 text-gray-800' 
                      : 'bg-sacred-order-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {msg.type === 'user' ? (
                      <>
                        <span className="font-medium text-sm">You</span>
                        <User size={14} className="ml-1 text-gray-600" />
                      </>
                    ) : (
                      <>
                        <span className="font-medium text-sm">Sarah™</span>
                        <Bot size={14} className="ml-1 text-sacred-order-600" />
                      </>
                    )}
                  </div>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Sarah™ anything..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-divine-chaos-500"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};
