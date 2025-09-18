import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

const Certifications: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const certifications = [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      type: "Professional"
    },
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      type: "Cloud"
    },
    {
      name: "Relational Databases & SQL",
      issuer: "Stanford Online (edX)",
      type: "Database"
    },
    {
      name: "Python Programming",
      issuer: "Ethnotech",
      type: "Programming"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-xl p-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left"
          >
            <div className="flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            )}
          </button>

          {isExpanded && (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {cert.type}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;