
import React from 'react';
import '../App.css'

function About() {
  return (
    
    <section id="about" className="py-40 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold global-title-color text-center mb-8">About Me</h2>
      <div className="py-10 flex flex-col items-center">
        <img
          src="/img/pro.jpeg"
          alt="Profile"
          className="w-60 h-60 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold global-title-color text-center mb-8">Vikram Bais</h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          Software Engineer 2 (Backend) with 3 years of experience designing and building scalable{' '}
          <span className="global-title-color">backend systems</span> using{' '}
          <span className="global-title-color">Golang</span>,{' '}
          <span className="global-title-color">Python</span>, and{' '}
          <span className="global-title-color">Java</span>. Proficient in{' '}
          <span className="global-title-color">Spring Boot</span>,{' '}
          <span className="global-title-color">Django</span>, and{' '}
          <span className="global-title-color">Gin</span>. Experienced with{' '}
          <span className="global-title-color">Kafka</span>,{' '}
          <span className="global-title-color">RabbitMQ</span>,{' '}
          <span className="global-title-color">MySQL</span>,{' '}
          <span className="global-title-color">PostgreSQL</span>,{' '}
          <span className="global-title-color">MongoDB</span>, and{' '}
          <span className="global-title-color">Elasticsearch</span>. Focused on delivering{' '}
          <span className="global-title-color">clean</span>,{' '}
          <span className="global-title-color">reliable</span> solutions and owning the entire{' '}
          <span className="global-title-color">development lifecycle</span>.
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/vikram-bais/"
            target="_blank"
            rel="noopener noreferrer"
            className="global-button px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vikram-bais"
            target="_blank"
            rel="noopener noreferrer"
            className="global-button px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1OjzZepnJI7-43JJ-ex5eqvGZ7cN6BX7L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="global-button px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;