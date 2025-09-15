import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Part-Time Blockchain Developer',
      company: 'Tech Academy',
      location: 'Philippines',
      period: '2023 - Present',
      description: 'Worked on blockchain-based projects, contributing to smart contract development, decentralized application integration, and blockchain solution deployment.',
      achievements: [
        'Developed and deployed smart contracts for decentralized applications',
        'Contributed to blockchain integration projects with improved security',
        'Collaborated on innovative blockchain solutions for real-world applications'
      ],
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'JavaScript']
    },
    {
      title: 'IT Intern',
      company: 'Savoy Hotel Mactan',
      location: 'Cebu, Philippines',
      period: '2023',
      description: 'Assisted in troubleshooting hardware and software issues, and supported the administration and maintenance of the hotel\'s networking systems to ensure smooth daily operations.',
      achievements: [
        'Successfully resolved hardware and software issues improving system uptime',
        'Maintained and optimized hotel networking infrastructure',
        'Provided technical support ensuring seamless guest and staff operations'
      ],
      technologies: ['Network Administration', 'Hardware Troubleshooting', 'System Maintenance', 'Technical Support']
    }
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'University of Cebu',
    location: 'Cebu, Philippines',
    period: '2021 - 2026',
    description: 'Building a strong foundation in programming, hardware systems, and software development. Developed expertise in front-end technologies and blockchain development through coursework and practical projects.',
    achievements: [
      'Specialized in Computer Engineering with focus on software development',
      'Completed projects in blockchain technology and smart contract development',
      'Active participation in technology-focused academic initiatives'
    ]
  };

  const ExperienceCard = ({ experience, isEducation = false }: { experience: any, isEducation?: boolean }) => (
    <div className="relative">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
            <div className="flex items-center text-blue-400 mb-1">
              <ExternalLink size={16} className="mr-2" />
              <span className="font-medium">{experience.company || experience.school}</span>
            </div>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin size={16} className="mr-2" />
              <span>{experience.location}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
            <Calendar size={16} className="mr-2" />
            <span>{experience.period}</span>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          {experience.description}
        </p>

        {experience.achievements && (
          <div className="mb-6">
            <h4 className="text-white font-medium mb-3">Key {isEducation ? 'Highlights' : 'Achievements'}:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.technologies && (
          <div>
            <h4 className="text-white font-medium mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through technology, from academic foundations to professional achievements.
          </p>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎓</span>
              </div>
              Education
            </h3>
            <ExperienceCard experience={education} isEducation={true} />
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💼</span>
              </div>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;