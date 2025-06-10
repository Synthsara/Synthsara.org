// Footer Component for Synthsara & Synthocracy Platform
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Synthsara</h3>
            <p className="text-gray-400">
              A digital platform embodying the principles of Synthsara and Synthocracy, facilitating decentralized participatory democracy and ethical AI integration.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="text-gray-400 hover:text-white transition">Global Dashboard</a></li>
              <li><a href="#governance" className="text-gray-400 hover:text-white transition">Synthocracy Governance</a></li>
              <li><a href="#marketplace" className="text-gray-400 hover:text-white transition">Ethical Data Marketplace</a></li>
              <li><a href="#powercoin" className="text-gray-400 hover:text-white transition">POWERcoin™ Economy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">User Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Educational Materials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community Forums</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Partnerships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Synthsara Platform. All rights reserved.</p>
          <p className="mt-2">Embodying the principles of Divine Chaos and Sacred Order.</p>
        </div>
      </div>
    </footer>
  );
};
