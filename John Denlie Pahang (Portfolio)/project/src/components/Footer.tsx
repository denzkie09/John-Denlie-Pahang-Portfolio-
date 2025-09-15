import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">John Denlie Pahang</h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Engineer specializing in front-end development and blockchain solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:johndenlietitopahang@gmail.com"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                johndenlietitopahang@gmail.com
              </a>
              <a 
                href="tel:+639622716412"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                +63 9622716412
              </a>
              <p className="text-gray-400">Philippines</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>and</span>
              <Code size={16} className="mx-2 text-blue-500" />
              <span>by John Denlie Pahang</span>
            </div>
            <div className="text-gray-400">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;