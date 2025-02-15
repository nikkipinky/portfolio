import React from "react";
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
    <div className="mt-16 md:mt-24 w-full mx-auto relative px-4 md:px-12" id="hero">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 place-items-center gap-6 md:gap-8">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="justify-self-start max-w-lg w-full"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.p className="text-gray-200 text-4xl md:text-6xl lg:text-7xl tracking-tight whitespace-nowrap">
              Hello,
            </motion.p>
            <motion.p className="text-gray-200 text-4xl md:text-6xl lg:text-7xl tracking-tight whitespace-nowrap">
              I am <span className="text-purple-500">Sai Nikhitha Madireddy</span>
            </motion.p>
            <div className="flex items-center whitespace-nowrap">
              <span className="text-gray-400 text-lg md:text-3xl lg:text-4xl font-bold italic mr-2">
                Passionate about
              </span>
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
                className="font-bold text-gray-400 text-lg md:text-3xl lg:text-4xl italic"
              />
            </div>
            <motion.p className="text-gray-300 text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-left">
              Crafting high-quality, scalable applications by blending full-stack development, machine learning expertise, and optimized database solutions.
            </motion.p>
            <motion.div className="flex flex-row items-center gap-4 md:gap-6 my-4 md:mb-0">
              <motion.button className="font-bold text-gray-200 p-3 md:p-4 border border-purple-400 rounded-xl text-sm md:text-base">
                <a href="/resume.pdf" download="Sai_Nikhitha_Madireddy_Resume.pdf">Download CV</a>
              </motion.button>
              <div className="flex gap-4 md:gap-6 flex-row text-3xl md:text-4xl lg:text-5xl text-purple-400">
                <motion.a href="https://github.com/nikkipinky/Projects"><AiOutlineGithub /></motion.a>
                <motion.a href="https://www.linkedin.com/in/sai-nikhitha-madireddy/"><AiOutlineLinkedin /></motion.a>
                <motion.a href="mailto:sainikhithamadireddy2506@gmail.com"><AiOutlineMail /></motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <div className="flex justify-center md:justify-end w-full">
          <motion.img
            src={profilepic}
            className="w-[250px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg"
            alt="Profile Picture"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <motion.div className="flex flex-col items-center py-12 md:py-24 w-full">
        <p className="text-gray-200 text-2xl md:text-3xl lg:text-4xl mb-6">My Tech Stack</p>

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
              <p className="text-purple-400 text-lg md:text-xl font-bold mb-4">{category.title}</p>
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