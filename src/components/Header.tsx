import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleQuote = () => setIsQuoteOpen(!isQuoteOpen);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img width={65} height={65} src={Logo} />
            <span className="ml-2 text-xl font-bold text-gray-800">
              Divine Swastik
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
            <button
              onClick={toggleQuote}
              className="bg-[#F17E00] text-white px-6 py-2 rounded-full hover:bg-[#F16E00] transition-colors"
            >
              Get a Quote
            </button>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#services" className="block py-2 text-gray-600">
              Services
            </a>
            <a href="#about" className="block py-2 text-gray-600">
              About
            </a>
            <a href="#contact" className="block py-2 text-gray-600">
              Contact
            </a>
            <button
              onClick={toggleQuote}
              className="w-full mt-4 bg-[#F17E00] text-white px-6 py-2 rounded-full hover:bg-[#F16E00] transition-colors"
            >
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
