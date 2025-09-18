import React from 'react';
import { GraduationCap, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "MCA Student",
      description: "SGPA 7.9 up to 2nd sem"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Foundation",
      description: "Strong foundation in Python and web technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Project Experience",
      description: "Hands-on project experience with real-world applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-2xl mb-8 lg:mb-0">
              <div className="text-8xl font-bold text-blue-600">JP</div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Being an optimistic and active learner, I seek opportunities to maximize my potential and contribute to organisational growth. I create value for employers through dedicated and diligent efforts.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;