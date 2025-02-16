import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import { DiJavascript, DiReact, DiNodejs, DiMongodb, DiHtml5, DiPython, DiCss3, DiJava } from 'react-icons/di';
import { SiExpress, SiVite, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiOpencv } from 'react-icons/si';
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "Meal Planner Application",
    description: "Using Spoonacular API",
    technologies: [
      { name: "JavaScript", icon: <DiJavascript className="text-2xl text-yellow-400" /> },
      { name: "React", icon: <DiReact className="text-2xl text-blue-500" /> },
      { name: "Node.js", icon: <DiNodejs className="text-2xl text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-2xl text-gray-400" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-2xl text-green-600" /> },
      { name: "HTML", icon: <DiHtml5 className="text-2xl text-orange-500" /> },
      { name: "CSS", icon: <DiCss3 className="text-2xl text-blue-400" /> },
      { name: "Vite", icon: <SiVite className="text-2xl text-purple-500" /> },
    ],
    links: {
      github: "https://github.com/nikkipinky/Projects/tree/master/MealPlanApp",
    },
  },
  {
    img: project2,
    title: "Heart Disease Prediction",
    description: "A Heart disease prediction model using Python and machine learning",
    technologies: [
      { name: "Python", icon: <DiPython className="text-2xl text-yellow-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-2xl text-blue-600" /> },
      { name: "Pandas", icon: <SiPandas className="text-2xl text-red-600" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-2xl text-orange-500" /> },
    ],
    links: {
      github: "https://github.com/nikkipinky/Projects/tree/master/Heart_Disease_Prediction",
    },
  },
  {
    img: project4,
    title: "Virtual Trial Room",
    description: "A Virtual trial room using machine learning",
    technologies: [
      { name: "Python", icon: <DiPython className="text-2xl text-yellow-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-2xl text-blue-600" /> },
      { name: "Pandas", icon: <SiPandas className="text-2xl text-red-600" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-2xl text-orange-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-2xl text-green-500" /> },
    ],
    links: {
      github: "https://github.com/nikkipinky/Projects/tree/master/Virtual-Trial-Room-master",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-4 md:p-8 md:my-20 scroll-mt-32' id="portfolio">
      <h2 className='text-3xl md:text-4xl font-bold text-gray-200 mb-8 md:mb-12 text-center'>Projects</h2>

      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div 
              className="shadow-xl rounded-xl border border-gray-700 p-6 md:p-10 w-full max-w-4xl bg-gray-900 mb-8 md:mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
              style={{ minHeight: '400px' }}
            >
              {/* Left Side: Project Image */}
              <div className="w-full md:w-1/3 h-48 md:h-64 flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Side: Title, Description, Technologies, GitHub Link */}
              <div className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-base md:text-lg">{project.description}</p>
                  {/* Technologies Section */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                        {tech.icon}
                        <span className="text-gray-200 text-sm md:text-base">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <a href={project.links.github}
                    className="px-6 py-3 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center text-base md:text-lg"
                  >
                    <AiOutlineGithub className="text-2xl mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* See More Projects Button */}
      <div className='text-center mt-8 md:mt-12'>
        <a
          href="https://github.com/nikkipinky/Projects/tree/master"
          className='px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-gray-200 rounded-xl hover:bg-purple-700 transition duration-300 inline-flex items-center text-base md:text-lg'
        >
          <AiFillGithub className='mr-2 text-2xl md:text-3xl' />
          See more projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;