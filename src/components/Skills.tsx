import React from 'react';
import { Code, Database, Globe, PenTool as Tool, Users, Languages } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      skills: ["Python", "C (basic)", "JavaScript"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["Oracle SQL"]
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Tools",
      skills: ["GitHub", "Excel"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: ["Project Management", "Teamwork", "Time Management"]
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Languages",
      skills: ["English", "Tamil"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;