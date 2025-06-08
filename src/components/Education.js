import React from 'react';
import '../App.css'

function Education() {
    const education = [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'Institute of Technology, GGV Bilaspur',
            period: '2018 - 2022',
            description: 'Graduated with a CGPA of 8.75/10.00, focusing on software engineering, data structures, and algorithms.',
        },
    ];
      
  return (
    <section id="education" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold global-title-color text-center mb-8">Education</h2>
      <div className="py-10 space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="background-card p-6">
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-lg text-blue-300">{edu.institution} | {edu.period}</p>
            <p className="text-gray-300 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;