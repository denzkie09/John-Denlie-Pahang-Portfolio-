import React from 'react';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Questlog',
      description: 'A comprehensive task and project management application designed to help users organize, track, and complete their goals efficiently. Features intuitive task creation, progress tracking, and project organization capabilities.',
      image: 'questlog.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Web Development','Blockchain'],
      githubUrl: 'https://github.com/kashiwagiren/Questlog',
      liveUrl: 'https://dazzling-parfait-18b675.netlify.app/',
      date: '2025',
      featured: true
    }
  ];

  const ProjectCard = ({ project, featured = false }: { project: any, featured?: boolean }) => (
    <div className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
            <a 
              href={project.githubUrl}
              className="flex-1 bg-gray-900/90 backdrop-blur-sm text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors duration-200"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
            <a 
              href={project.liveUrl}
              className="flex-1 bg-blue-600/90 backdrop-blur-sm text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink size={18} />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-orange-400 rounded-full animate-float animation-delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and blockchain development.
          </p>
        </div>

        {projects.length > 0 ? (
          <>
            {/* Featured Projects */}
            {projects.filter(p => p.featured).length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-8">Featured Work</h3>
                <div className="grid lg:grid-cols-2 gap-8 animate-stagger-in">
                  {projects.filter(p => p.featured).map((project, index) => (
                    <ProjectCard key={index} project={project} featured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Other Projects */}
            {projects.filter(p => !p.featured).length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Other Projects</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 animate-stagger-in">
                  {projects.filter(p => !p.featured).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Projects Coming Soon</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              I'm currently working on some exciting projects. Check back soon to see my latest work!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;