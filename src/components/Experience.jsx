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
      'Developed and defined system functionality by improving the clarity and scope of project definitions by 20%. Executed the full Software Development Life Cycle ensuring adherence to industry standards. Collaborated with teams to debug, upgrade, and maintain applications while integrating essential user feedback. Deployed robust software  solutions using Java, C++, and JavaScript, handling end-to-end development and maintenance in a large-scale system.',
    ],
  },
  {
    organisation: 'California State University, Los Angeles',
    role: 'Software Engineer',
    startDate: 'Aug 2023',
    endDate: 'May 2025',
    imageSrc: CustomIcon1,
    experiences: [
      'Engineered and optimized ServiceNow workflows and web applications, enhancing system performance by 40%. Developed and deployed internal software tools that streamlined IT operations, reducing issue resolution time and improving user efficiency. Collaborated on debugging, testing, and performance tuning to maintain secure, reliable, and scalable systems. Managed system security and scalability protocols, achieving 99.9% uptime and reliability across the entire university IT system.',
    ],
  },
  {
    organisation: 'Tata Consultancy Services',
    role: 'Systems Engineer',
    startDate: 'Aug 2022',
    endDate: 'Aug 2023',
    imageSrc: CustomIcon2,
    experiences: [
      'Built a full-stack web application with Node.js, ensuring cross-platform compatibility and reaching base of 500+ daily users. Enhanced database performance by 30% by meticulously tuning queries and schemas using PostgreSQL and Oracle SQL. Collaborated with teams to improve functionality and user experience, resulting in a 10% increase in user engagement metrics. Deployed the full-stack application and managed its infrastructure on Microsoft Azure, ensuring high availability and seamless cross-platform functionality.',
    ],
  },
  {
    organisation: 'EPAM Systems',
    role: 'Junior Software Engineer',
    startDate: 'Jan 2022',
    endDate: 'June 2022',
    imageSrc: CustomIcon3,
    experiences: [
      'Developed scalable software using Python, Java, Node.js, enhancing overall application performance and user experience (UX). Managed database optimization and maintainability through the use of MySQL, supporting the development lifecycle. Utilized Agile workflows with Git and MySQL for version control and database management, ensuring high-quality applications.',
    ],
  },
  {
    organisation: 'Virtusa Consulting Services Private Limited',
    role: 'Software Engineer',
    startDate: 'Aug 2021',
    endDate: 'Dec 2021',
    imageSrc: CustomIcon4,
    experiences: [
      'Created optimized software with Python, Java, and JavaScript, focusing on debugging, and advanced problem-solving. Delivered high-quality solutions, ensuring 100% efficient completion through experienced execution of all SDLC phases. Executed end-to-end development in an Agile environment, applying expertise in Python and Java to deliver efficient solutions.',
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