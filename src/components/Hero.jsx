import React from "react";
import './Hero.css';
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiMongodb,
  DiGit,
  DiPython,
  DiPostgresql,
  DiBootstrap,
  DiWindows,
} from "react-icons/di";
import {
  SiExpress,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiGraphql,
  SiTailwindcss,
  SiPostman,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiVite,
  SiOracle,
  SiLinux,
  SiAndroidstudio,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

const categories = [
  {
    title: "Languages",
    tech: [
      { icon: DiJava, name: "Java" },
      { icon: SiC, name: "C" },
      { icon: SiCplusplus, name: "C++" },
      { icon: TbBrandCSharp, name: "C#" },
      { icon: DiJavascript1, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: DiPython, name: "Python" },
    ],
  },
  {
    title: "Frameworks",
    tech: [
      { icon: DiReact, name: "React" },
      { icon: SiAngular, name: "Angular" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiExpress, name: "Express" },
      { icon: DiNodejsSmall, name: "Node.js" },
    ],
  },
  {
    title: "Databases",
    tech: [
      { icon: DiMysql, name: "MySQL" },
      { icon: DiPostgresql, name: "PostgreSQL" },
      { icon: DiMongodb, name: "MongoDB" },
      { icon: SiOracle, name: "Oracle" },
    ],
  },
  {
    title: "Web & API",
    tech: [
      { icon: DiHtml5, name: "HTML5" },
      { icon: DiCss3, name: "CSS3" },
      { icon: SiGraphql, name: "GraphQL" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: DiBootstrap, name: "Bootstrap" },
    ],
  },
  {
    title: "Machine Learning Tools",
    tech: [
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: SiPandas, name: "Pandas" },
      { icon: SiNumpy, name: "NumPy" },
      { icon: SiScikitlearn, name: "Scikit-learn" },
      { icon: SiOpencv, name: "OpenCV" },
    ],
  },
  {
    title: "Tools",
    tech: [
      { icon: DiGit, name: "Git" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiVite, name: "Vite" },
      { icon: VscVscode, name: "VS Code" },
    ],
  },
  {
    title: "Cloud & DevOps",
    tech: [{ icon: VscAzure, name: "Azure" }],
  },
  {
    title: "Dev & Runtime Environments",
    tech: [
      { icon: SiAndroidstudio, name: "Android Studio" },
      { icon: SiLinux, name: "Linux" },
      { icon: DiWindows, name: "Windows" },
    ],
  },
];

const Hero = () => {
  return (
    <div
      className="hero-container"
      id="hero"
    >
      {/* Hero Section */}
      <div className="hero-content">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <p className="hero-title">Hello, I am</p>
          <p className="hero-title"><span className="hero-highlight">Sai Nikhitha Madireddy</span></p>
          
          <div className="hero-subtitle">
            <span>Passionate about</span>
            <TypeAnimation
              sequence={[
                "Web Development",
                1000,
                "Software Engineering",
                1000,
                "Artificial Intelligence",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="type-animation"
            />
          </div>

          <p className="hero-description">
          Crafting high-quality, scalable applications by blending <span>full&#8209;stack </span>
          development, machine learning expertise, and optimized database solutions.
          </p>

          <div className="hero-buttons">
            <motion.button whileHover={{ scale: 1.05 }} className="download-btn">
              <a href="/Sai_Nikhitha_Madireddy_Resume.pdf" download="Sai_Nikhitha_Madireddy_Resume.pdf">Download CV</a>
            </motion.button>

            <div className="social-icons">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/nikkipinky" target="_blank"><AiOutlineGithub /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sai-nikhitha-madireddy/" target="_blank"><AiOutlineLinkedin /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="mailto:sainikhithamadireddy2506@gmail.com" target="_blank"><AiOutlineMail /></motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <div className="profile-container">
          <motion.img
            src={profilepic}
            className="profile-pic"
            alt="Profile Picture"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <motion.div className="flex flex-col items-center py-12 md:py-24 w-full">
        <p className="text-gray-200 text-2xl md:text-3xl lg:text-4xl mb-6">
          My Tech Stack
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-purple-400 rounded-xl shadow-lg p-4 md:p-6 w-full"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-purple-400 text-lg md:text-xl font-bold mb-4 text-center">
                {category.title}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                {category.tech.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <tech.icon className="text-3xl md:text-4xl" />
                    <span className="text-sm md:text-base">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Shiny Effect (Desktop Only) */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
