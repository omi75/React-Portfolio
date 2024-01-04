import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import React from 'react'
import react from '../assets/react.png'
import css from '../assets/css.png'
import cpp from '../assets/cpp.png'
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/Tailwind.png'
import redux from '../assets/redux.png'
import git from '../assets/git.png'
import scss from '../assets/sass.png'
import py from '../assets/python.png'
import "./Skills.scss";

function Skills() {
  const skills=[
    {
       icon: html,
       name:"html",
    },
    {
        icon:css,
        name:"css",
    },
    {
        icon:tailwind,
        name:"tailwind css",
    },
    {
        icon:js,
        name:"Javascript",
    },
    {
        icon:react,
        name:"react js",
    },
    {
        icon:redux,
        name:"redux",
    },
    {
        icon:cpp,
        name:"c++",
    },
    {
        icon:git,
        name:"git",
    },
    {
        icon:scss,
        name:"scss",
    },
    {
        icon:py,
        name:"python",
    }];
  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
        <h2 className="head-text head"><span>Skills</span></h2>
        <div className="app__skills-container">
            <motion.div className="app__skills-list">
                {
                    skills.map((skill,index)=>(
                        <motion.div variants={skillVariants} whileInView="view" whileHover="hover" whileTap="tap" className="app__skills-item app__flex" 
                          key={skill.name + "-" + index}>
                           <div className="app__flex">
                             <img src={skill.icon} alt={skill.name} loading="lazy"/>
                           </div>  
                           <p className="p-text">{skill.name}</p> 
                        </motion.div>
                    ))
                }
            </motion.div>

            <motion.div className="app__skills-exp">
                <h2 className="htext"><span className="top-text">M</span>e and <br/>My Tech Stack</h2>
                <p>I am a highly motivated computer science & engineering student with a passion for technology and its application in solving real-world problems. Goal is to work with an organization where I can learn new skills and increase my abilities for the organizational goals as well as myself.</p>
                <p>As a tech enthusiast, I'm currently exploring in Software Development, MERN Stack Development & I'm B.E. Graduate from Modern Education Society College of Engineering , Pune and love exploring new technologies.</p>
                <p>Eager to apply my skills, adaptability, and commitment to excellence in a dynamic software development role to contribute to cutting-edge projects and further enhance my expertise in the field</p>
            </motion.div>
        </div>
    </div>
  )
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
  );
  