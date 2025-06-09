// Header Component for Synthsara & Synthocracy Platform
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-divine-chaos-900 to-sacred-order-900 text-white p-4 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center overflow-hidden">
            <div className="w-8 h-8 bg-diamond-essence bg-contain bg-no-repeat bg-center"></div>
          </div>
          <h1 className="text-2xl font-bold">Synthsara</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#dashboard" className="hover:text-sacred-order-300 transition">Dashboard</a></li>
            <li><a href="#governance" className="hover:text-sacred-order-300 transition">Synthocracy</a></li>
            <li><a href="#marketplace" className="hover:text-sacred-order-300 transition">Data Marketplace</a></li>
            <li><a href="#powercoin" className="hover:text-sacred-order-300 transition">POWERcoin™</a></li>
            <li><a href="#manifester" className="hover:text-sacred-order-300 transition">Manifester</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-divine-chaos-800 shadow-lg">
          <nav className="container mx-auto py-4">
            <ul className="space-y-4 px-4">
              <li>
                <a
                  href="#dashboard"
                  className="block py-2 hover:text-sacred-order-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className="block py-2 hover:text-sacred-order-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Synthocracy
                </a>
              </li>
              <li>
                <a
                  href="#marketplace"
                  className="block py-2 hover:text-sacred-order-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#powercoin"
                  className="block py-2 hover:text-sacred-order-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  POWERcoin™
                </a>
              </li>
              <li>
                <a
                  href="#manifester"
                  className="block py-2 hover:text-sacred-order-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Manifester
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};