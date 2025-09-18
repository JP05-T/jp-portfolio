import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry",
      grade: "SGPA: 7.9 (up to 2nd sem)",
      duration: "Expected April 2026",
      status: "current"
    },
    {
      degree: "Bachelor of Science (Chemistry)",
      institution: "Vels University",
      location: "Chennai",
      grade: "CGPA: 67%",
      duration: "May 2024",
      status: "completed"
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "John Dewey Matriculation Higher Secondary School",
      location: "Panruti",
      grade: "73%",
      duration: "2021",
      status: "completed"
    },
    {
      degree: "Secondary (Class X)",
      institution: "John Dewey Matriculation Higher Secondary School",
      location: "Panruti",
      grade: "63%",
      duration: "2019",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              {edu.status === 'current' && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;