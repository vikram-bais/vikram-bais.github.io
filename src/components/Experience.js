
import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Software Development Engineer 2',
      company: 'Aumnee',
      period: 'Nov 2024 – Present',
      duration: '7 months',
      points: [
        'Developed a schema-driven Master Data Service using Java, Spring Boot, and MongoDB, enabling custom data uploads via CSV/APIs with JSON Schema validation. Implemented advanced filtering and querying logic for Master Data Service APIs and SDKs to enhance data retrieval efficiency.',
        'Built a User Identity Verification Service with Java, Spring Boot, and PostgreSQL, supporting user kyc verification workflows like Aadhaar validation, PAN validation, mobile otp verification with dynamic vendor routing.',
        'Contributed to a Scheduler Service using Java, Spring Boot, and Cadence, managing cron jobs and workflows with gRPC communication.',
      ],
    },
    {
      role: 'Software Development Engineer 2',
      company: 'Parkplus',
      period: 'Apr 2024 – Nov 2024',
      duration: '7 months',
      points: [
        'Developed a Hire a Driver service in Golang, supporting driver bookings with extended trips and efficient refund processing.',
        'Integrated customizable subgating flows for multilevel parking projects, enabling planning by building, floor, location, and unit.',
      ],
    },
    {
      role: 'Software Development Engineer 1',
      company: 'Parkplus',
      period: 'Jul 2022 – Mar 2024',
      duration: '1 year 9 months',
      points: [
        'Implemented MySQL partitioning by week-of-the-year and year in Activity Service, optimizing search and data archival processes.',
        'Restructured a large MySQL table into four tables and Elasticsearch data into four indices, handling 50 RPS and 300 Kafka messages/min.',
        'Optimized Elasticsearch queries for dashboard APIs, achieving sub-second response times.',
        'Eliminated manual Elasticsearch index refreshing, reducing cluster load by over 50%.',
        'Designed a vehicle insurance claims flow for ICICI Lombard using Golang, integrating ICICI APIs.',
        'Built a Driver onboarding system in Golang, streamlining attendance, exams, and offer letters, boosting on-time deployments by 50% and cutting administrative workload by 80%.',
      ],
    },
    {
      role: 'Software Development Intern',
      company: 'Parkplus',
      period: 'Apr 2022 – Jun 2022',
      duration: '3 months',
      points: [
        'Managed Activity Service at 40–50 RPS, generating 1M daily records (300 GB/month).',
        'Developed B2B parking data monitoring solutions, handling transactions, collections, and statistics for multiple clients.',
        'Enhanced dispatch app with real-time notifications and dynamic banners for entry/exit events.',
      ],
    },
    {
      role: 'Software Development Intern',
      company: 'Liveasy',
      period: 'Jun 2021 – Aug 2021',
      duration: '3 months',
      points: [
        'Added features to an Android app using Java, Spring Boot, PostgreSQL, and AWS, deployed via Git actions and EC2.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">Experience</h2>
      <div className="py-10 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-lg text-blue-300">{exp.company} | {exp.period}</p>
            <p className="text-md text-gray-400">{exp.duration}</p>
            <ul className="list-disc list-outside pl-6 text-gray-300 mt-2 space-y-2">
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex} className="pl-2">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
