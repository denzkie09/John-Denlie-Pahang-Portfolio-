import React from 'react';
import { ArrowDown, Facebook, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1 bg-gradient-to-r from-blue-400 to-purple-500">
              <img 
                src="/Denol.jpg" 
                alt="John Denlie Pahang"
                className="w-full h-full object-cover object-center rounded-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              John Denlie Pahang
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-300">
            Computer Engineer & Frontend Developer
          </p>
          
          <p className="text-lg mb-8 text-blue-200 leading-relaxed animate-fade-in-up animation-delay-600">
            Passionate about creating innovative web solutions and exploring blockchain technology. 
            Currently pursuing my degree in Computer Engineering while building modern applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-900">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-200"
            >
              View My Work
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-1200">
            <a 
              href="https://web.facebook.com/sa3lowdota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pahang-john-denlie-t-163883301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/johndenlie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Instagram size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce-slow text-blue-300 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;