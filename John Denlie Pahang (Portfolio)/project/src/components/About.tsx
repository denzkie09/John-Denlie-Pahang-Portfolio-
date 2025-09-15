import React from 'react';
import { Code, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-purple-500 rounded-full animate-bounce-slow"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge traditional development with emerging technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Story */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12 animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I'm currently pursuing my Bachelor's degree in Computer Engineering at the University of Cebu (2021-2026), 
                where I've developed a strong foundation in programming, hardware systems, and software development. 
                What started as curiosity about how technology works has evolved into a deep passion for creating 
                innovative web solutions and exploring the transformative potential of blockchain technology.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                My journey into blockchain development began during my studies when I realized the immense potential 
                of decentralized technologies to reshape how we interact with digital systems. I've since dedicated 
                myself to mastering smart contract development, DeFi protocols, and building user-friendly interfaces 
                for complex blockchain applications.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Beyond the technical aspects, I'm driven by the vision of creating technology that empowers people 
                and democratizes access to financial and digital services. Whether it's building responsive web 
                applications or developing smart contracts, I approach every project with attention to detail, 
                user experience, and long-term sustainability in mind.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-8 animate-stagger-in">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/20 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Excellence</h3>
              <p className="text-gray-300">
                Committed to writing clean, efficient code and staying current with the latest 
                development practices and emerging technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/20 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Focus</h3>
              <p className="text-gray-300">
                Passionate about exploring blockchain technology and building solutions that 
                push the boundaries of what's possible in web development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-500/20 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">User-Centered</h3>
              <p className="text-gray-300">
                Dedicated to creating intuitive, accessible experiences that make complex 
                technology approachable for everyone.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2 counter-animate">2+</div>
              <div className="text-gray-400">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2 counter-animate">100%</div>
              <div className="text-gray-400">Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2 counter-animate">24/7</div>
              <div className="text-gray-400">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;