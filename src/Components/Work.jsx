import React from 'react'
import { useState } from 'react';
import { projectWork } from '../data/data';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from '../wrapper'
import './Work.scss'

function Work() {
    const [category, setCategory] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [touched, setTouched] = useState(null);

    console.log(category);
 
    const handleFilter = (item) => {
    setCategory(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });

    setTimeout(() => {
        setAnimateCard({ opacity: 1, scale: 1, y: 0 });
    }, 500);
    };
  return (
    <div>
         <h2 className="head-text">
            My creative <span>Portfolio</span> section
        </h2>

        <div className="app__work-filter">
            {
                ["All","React JS","Web Projects"].map((item,index)=>(
                    <div key={index}  className={`app__work-filter-item app__flex p-text ${category === item ? "item-active" : ""}`}
                    onClick={() => handleFilter(item)}>
                        {item}
                    </div>
                ))
            }
        </div>
        <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio" onClick={() => setTouched(null)} >
            {
                projectWork[category].map((work,index)=>(
                    <motion.div className={`app__work-item app__flex ${touched === index ? "app__work-touched-nowrap" : ""}`}
                      key={index} onClick={() => setTouched(index)} onTouchStart={() => setTouched(index)}>
                      
                      <div className="app__work-img app__flex">
                        <img src={work.img} alt={work.title} />
                      
                        <motion.div whileHover={{ opacity: [0, 1] }} transition={{duration: 0.25,ease: "easeInOut",staggerChildren: 0.5,}}
                            className={`app__work-hover app__flex ${touched === index ? "app__work-touched" : ""}`}>
                            <a href={work.live} target="_blank" rel="noreferrer" className={`app__flex ${work.live.toLowerCase() === "na" ? "none" : ""}`}>
                                <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex" >
                                    <AiFillEye />
                                </motion.div>
                            </a>

                            <a href={work.git} target="_blank" rel="noreferrer" className="app__flex">
                                <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                                    <AiFillGithub />
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>
                    <div className="app__work-content app__flex">
                        <h4 className="bold-text" title={work.title}>
                            {work.title}
                        </h4>
                        <p
                            className="p-text"
                            style={{ marginTop: 10 }}
                            title={work.desc}
                        >
                            {work.desc}
                        </p>
                        <div className="app__work-tag app__flex">
                            <p className="p-text">{work.category}</p>
                        </div>
                        </div>

                    </motion.div>
                ))
            }
        </motion.div>

    </div>
  )
}

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
  );