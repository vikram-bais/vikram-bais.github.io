import React from 'react';

function About() {
  return (
    <section id="about" className="py-40 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">About Me</h2>
      <div className="py-10 flex flex-col items-center">
        <img
          src="/img/pro.jpeg"
          alt="Profile"
          className="w-50 h-50 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-8">Vikram Bais</h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          Software Engineer 2 (Backend) with 3 years of experience designing and building scalable{' '}
          <span className="text-blue-500">backend systems</span> using{' '}
          <span className="text-blue-500">Golang</span>,{' '}
          <span className="text-blue-500">Python</span>, and{' '}
          <span className="text-blue-500">Java</span>. Proficient in{' '}
          <span className="text-blue-500">Spring Boot</span>,{' '}
          <span className="text-blue-500">Django</span>, and{' '}
          <span className="text-blue-500">Gin</span>. Experienced with{' '}
          <span className="text-blue-500">Kafka</span>,{' '}
          <span className="text-blue-500">RabbitMQ</span>,{' '}
          <span className="text-blue-500">MySQL</span>,{' '}
          <span className="text-blue-500">PostgreSQL</span>,{' '}
          <span className="text-blue-500">MongoDB</span>, and{' '}
          <span className="text-blue-500">Elasticsearch</span>. Focused on delivering{' '}
          <span className="text-blue-500">clean</span>,{' '}
          <span className="text-blue-500">reliable</span> solutions and owning the entire{' '}
          <span className="text-blue-500">development lifecycle</span>.
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/vikram-bais/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vikram-bais"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1OjzZepnJI7-43JJ-ex5eqvGZ7cN6BX7L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

// import React from 'react';

// function About() {
//   return (
//     <section id="about" className="py-40 max-w-6xl mx-auto px-4">
//       <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">About Me</h2>
//       <div className="py-10 flex flex-col items-center">
//         <img
//           src="/img/pro.jpeg"
//           alt="Profile"
//           className="w-50 h-50 rounded-full mb-4"
//         />
//         <h2 className="text-2xl font-bold text-blue-500 text-center mb-8">Vikram Bais</h2>
//         <p className="text-lg text-gray-300 text-center max-w-2xl">
//             Software Engineer 2 (Backend) with 3 years of experience designing and building scalable <span className="text-blue-500">backend systems</span> using <span className="text-blue-500">Golang</span>, <span className="text-blue-500">Python</span>, and <span className="text-blue-500">Java</span>. Proficient in <span className="text-blue-500">Spring Boot</span>, <span className="text-blue-500">Django</span>, and <span className="text-blue-500">Gin</span>. Experienced with <span className="text-blue-500">Kafka</span>, <span className="text-blue-500">RabbitMQ</span>, <span className="text-blue-500">MySQL</span>, <span className="text-blue-500">PostgreSQL</span>, <span className="text-blue-500">MongoDB</span>, and <span className="text-blue-500">Elasticsearch</span>. Focused on delivering <span className="text-blue-500">clean</span>, <span className="text-blue-500">reliable</span> solutions and owning the entire <span className="text-blue-500">development lifecycle</span>.
//         </p>

//       </div>
//     </section>
//   );
// }

// export default About;