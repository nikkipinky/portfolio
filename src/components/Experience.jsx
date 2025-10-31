import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import CustomIcon1 from '../assets/custom-icon-1.png'; // Replace with your custom icon paths
import CustomIcon2 from '../assets/custom-icon-2.webp';
import CustomIcon3 from '../assets/custom-icon-3.png';
import CustomIcon4 from '../assets/custom-icon-4.jpeg';
import CustomIcon5 from '../assets/custom-icon-5.jpg';

// Mock function to simulate getImageUrl (replace with your actual implementation)
const getImageUrl = (path) => path;

const experiences = [
  {
    organisation: 'Community Dreams Foundation',
    role: 'Software Engineer',
    startDate: 'Aug 2025',
    endDate: 'Present',
    imageSrc: CustomIcon5,
    experiences: [
      'Architected and Deployed modular services in Java and Node.js, reducing system latency by 35% and improving maintainability. Led Agile sprints and collaborated with cross-functional teams to define requirements, cutting change requests by 20%. Automated debugging and upgrade pipelines, lowering production downtime by 25% and improving release stability. Integrated user feedback loops into release cycles, increasing post-deployment feature adoption by 15%.',
    ],
  },
  {
    organisation: 'California State University, Los Angeles',
    role: 'Software Engineer',
    startDate: 'Aug 2023',
    endDate: 'May 2025',
    imageSrc: CustomIcon1,
    experiences: [
      'Optimized ServiceNow workflows and internal web apps, improving IT ticket resolution time by 40%. Built and deployed CI/CD pipelines and automated testing frameworks, cutting manual deployment errors by 60%. Implemented API-level security, system monitoring, and 99.9% uptime, ensuring compliance with campus standards. Collaborated with academic departments to streamline tech solutions supporting 10,000+ student and faculty interactions.',
    ],
  },
  {
    organisation: 'Tata Consultancy Services',
    role: 'Systems Engineer',
    startDate: 'Aug 2022',
    endDate: 'Aug 2023',
    imageSrc: CustomIcon2,
    experiences: [
      'Developed and launched a web platform (Node.js + PostgreSQL + Azure) serving 500+ daily users with 99.9% uptime. Optimized SQL queries and database schema, improving data retrieval performance by 30% and enhancing backend scalability. Implemented automated CI/CD pipelines in Azure DevOps, increasing deployment efficiency by 50% and reducing errors. Partnered with UI/UX teams to refine product interfaces, achieving a 10% increase in user engagement',
    ],
  },
  {
    organisation: 'EPAM Systems',
    role: 'Junior Software Engineer',
    startDate: 'Jan 2022',
    endDate: 'June 2022',
    imageSrc: CustomIcon3,
    experiences: [
      ' Developed and optimized backend APIs using Python and Node.js, improving data throughput by 20%. Redesigned MySQL schema and indexing for better performance and scalability during product growth. Utilized Agile and Git-based workflows for iterative delivery, ensuring version integrity and fast feature rollouts.',
    ],
  },
  {
    organisation: 'Virtusa Consulting Services Private Limited',
    role: 'Software Engineer',
    startDate: 'Aug 2021',
    endDate: 'Dec 2021',
    imageSrc: CustomIcon4,
    experiences: [
      'Developed and deployed RESTful services using Python and Java for enterprise analytics dashboards. Led debugging and performance optimization sessions, cutting load times by 35%. Enhanced CI/CD and deployment process to improve integration efficiency across microservices. Conducted code reviews and maintained detailed documentation, ensuring knowledge continuity across sprints.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="p-8 max-w-[1200px] mx-auto" id="experience">
      <h2 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h2>
      <div className="flex flex-col space-y-8">
        <ul className="space-y-8">
          {experiences.map((experience, id) => (
            <Reveal key={id}>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
              >
                {/* Experience Box */}
                <div className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 flex items-start space-x-6">
                  {/* Icon/Logo */}
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={getImageUrl(experience.imageSrc)}
                      alt={`${experience.organisation} Logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <h3 className="text-gray-100 text-2xl font-semibold">
                      {`${experience.role}, ${experience.organisation}`}
                    </h3>
                    <p className="text-gray-300">{`${experience.startDate} - ${experience.endDate}`}</p>
                    <ul className="mt-4 space-y-2">
                      {experience.experiences.map((exp, idx) => (
                        <li key={idx} className="text-gray-400">
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;