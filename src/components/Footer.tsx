import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img width={65} height={65} src={Logo} />
              <span className="ml-2 text-xl font-bold text-white">
                Divine Swastik
              </span>
            </div>
            <p className="mb-6">
              We’ve empowered numerous healthcare providers to achieve their
              marketing goals with data-driven strategies and innovative
              solutions tailored to the medical industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="hover:text-blue-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Divine Swastik. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
