import React from 'react';
import '../App.css';


function Skills() {
  const skills = ["Java", "Golang","Python","Spring Boot","Django","Django Rest Framework","MongoDB","PostgreSQL","MySQL","Elasticsearch","Kafka","RabbitMQ","Gin","Git","Redis"];

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold global-title-color text-center mb-8">Skills</h2>
      <div className="py-10 flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="global-button px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;