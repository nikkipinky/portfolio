import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import CustomIcon1 from '../assets/custom-icon-1.png'; // Replace with your custom icon paths
import CustomIcon2 from '../assets/custom-icon-2.webp';
import CustomIcon3 from '../assets/custom-icon-3.png';
import CustomIcon4 from '../assets/custom-icon-4.jpeg';

// Mock function to simulate getImageUrl (replace with your actual implementation)
const getImageUrl = (path) => path;

const experiences = [
  {
    organisation: 'California State University, Los Angeles',
    role: 'Graduate Student Assistant',
    startDate: 'Oct 2023',
    endDate: 'Present',
    imageSrc: CustomIcon1,
    experiences: [
      'Resolved ServiceNow tickets with a 95% success rate, providing technical support for software, hardware, and network issues. Optimized IT workflows, reducing ticket resolution time by 30% and enhancing web services performance by 40% while ensuring security compliance.',
    ],
  },
  {
    organisation: 'Tata Consultancy Services',
    role: 'Systems Engineer',
    startDate: 'Aug 2022',
    endDate: 'Aug 2023',
    imageSrc: CustomIcon2,
    experiences: [
      'Developed a full-stack web application using AngularJS, ReactJS, and Node.js, ensuring seamless cross-platform compatibility. Designed and optimized database solutions with PostgreSQL and Oracle SQL on Microsoft Azure, improving query performance by 30%. Collaborated with cross-functional teams to enhance application functionality and performance.',
    ],
  },
  {
    organisation: 'EPAM Systems',
    role: 'Junior Software Engineer',
    startDate: 'Jan 2022',
    endDate: 'June 2022',
    imageSrc: CustomIcon3,
    experiences: [
      'Developed scalable software solutions using Python, Java, JavaScript, ReactJS, AngularJS, and Node.js, enhancing performance and user experience. Collaborated in Agile teams, utilizing Git, VSCode, and MySQL for version control, efficient development, and optimized database management, ensuring maintainable codebases.',
    ],
  },
  {
    organisation: 'Virtusa Consulting Services Private Limited',
    role: 'Software Engineer Intern',
    startDate: 'Aug 2021',
    endDate: 'Dec 2021',
    imageSrc: CustomIcon4,
    experiences: [
      'Developed optimized software solutions using Python, Java, and JavaScript, focusing on algorithm refinement, debugging, and problem-solving in Agile environments. Gained hands-on experience in the Software Development Lifecycle (SDLC), from requirements analysis to development, testing, and deployment, ensuring high-quality and timely project delivery.',
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