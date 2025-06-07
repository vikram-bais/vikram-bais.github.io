import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'IQAC-portal',
      points: [
        'Developed a data collection system for University’s IQAC using MERN stack, collaborating with a 5-6 member student team.',
        'Enabled efficient AQAR data gathering, reducing paperwork by 90% and streamlining NAAC Accreditation report generation.',
        'Utilized AWS S3 for data storage and management.',
      ],
      technologies: ['MERN', 'AWS S3'],
      link: null,
      image: null, // No image provided
    },
  ];

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">Projects</h2>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
            ) : (
                <div></div>
            )}
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <ul className="list-disc list-outside pl-6 text-gray-300 mt-2 space-y-2">
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex} className="pl-2">{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>

            {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View Project
            </a>) : (
                <div></div>
            )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

// import React from 'react';

// function Projects() {
//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'A full-stack e-commerce app built with React, Node.js, and MongoDB. Features include user authentication, product filtering, and secure payments.',
//       link: 'https://github.com/yourusername/ecommerce',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       title: 'Task Manager',
//       description: 'A task management app with drag-and-drop functionality using React and Firebase. Supports real-time updates and user collaboration.',
//       link: 'https://github.com/yourusername/task-manager',
//       image: 'https://via.placeholder.com/300x200',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 max-w-6xl mx-auto px-4 bg-gray-800">
//       <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition">
//             <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
//             <h3 className="text-2xl font-semibold">{project.title}</h3>
//             <p className="text-gray-300 mt-2">{project.description}</p>
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline mt-4 inline-block"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;