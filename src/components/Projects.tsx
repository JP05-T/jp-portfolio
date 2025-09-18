import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Flight Tracker System",
      shortDescription: "Real-time flight tracking built with Python and the OpenSky Network API; includes map visualization and live position updates.",
      fullDescription: "A comprehensive flight tracking system that provides real-time aircraft position updates using the OpenSky Network API. The application features interactive map visualization with Leaflet, allowing users to track flights globally with live position updates, flight paths, and detailed aircraft information.",
      techStack: ["Python", "OpenSky API", "Tkinter"],
     
    },
    {
      title: "Sales Dashboard",
      shortDescription: "Interactive sales dashboard built using Excel for data analysis and visualization.",
      fullDescription: "A comprehensive sales analytics dashboard created in Excel featuring dynamic pivot tables, interactive charts, and automated reporting. The dashboard provides insights into sales performance, trend analysis, and key performance indicators with user-friendly visualizations.",
      techStack: ["Excel", "Pivot Tables", "Charts", "VBA"],
  
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                  {project.link && (
                    <a href={project.link} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {selectedProject.link && (
                  <a href={selectedProject.link} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;