import React from 'react'
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import circle from '../assets/circle.svg'
import pro from '../assets/programmer.svg'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tail from '../assets/Tailwind.png'
import AppWrap from '../wrapper/AppWrap'
import "./Home.scss"

function Home() {
  const [tagText] = useTypewriter({
    words: ['MERN STACK Developer', 'React JS Developer', 'Software Developer'],
    loop: 0
  });

    const scaleVariants = {
        whileInView: {scale: [0, 1], opacity: [0, 1],},
        transition: { duration: 0.5, ease: "easeInOut",},
      };
      
    const headerSkillVariants = {
    visible: { rotate: [-120, 0], y:-10, x:10,
      transition: {
        rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
        y: {
          repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeOut",
        },
        x: { repeat: Infinity, repeatType: "mirror", duration: 5,ease: "easeOut",
        },
      },
    },
    hover: {
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    },
  };
  
  return (
    <div className="app__header app__flex">
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__header-info" >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <p className="head-text">Onkar</p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">{tagText}</p>
            <Cursor cursorStyle="|" />
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__header-img">
        <motion.img src={pro} alt="profile_bg" whileInView={{ y: [-100, 0] }} loading='lazy'/>
        <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: "easeInOut" }} src={circle} alt="profile-circle" className="overlay_circle" loading='lazy'/>
      </motion.div>
      
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
        {[js, react,tail].map((circle, index) => (
          <motion.div variants={headerSkillVariants} whileInView="visible" whileHover="hover" drag dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragElastic={0.1} className="circle-cmp app__flex cursor-pointer" key={`circle-${index}`} >
            <img src={circle} alt="circle" loading='lazy'/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default AppWrap(Home,"home");