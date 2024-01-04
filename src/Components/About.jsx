import React from 'react'
import './About.scss'
import profile from '../assets/my-photo.jpg'
import mern from '../assets/fullstack.jpg'
import tech from '../assets/tech.png'
import ps from '../assets/problemSolving.png'
import lead from '../assets/leadership.jpg'
import { motion } from "framer-motion";
import {AppWrap ,MotionWrap} from '../wrapper'

function About() {
    function viewResumeHandler()
    {
        window.open('https://www.google.com',"_blank");
    }

    const card_data=[
        {
            img:mern,
            title:"MERN STACK",
            desc:'The MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, empowers developers to build dynamic and scalable web applications using JavaScript across the entire development stack.',
        },
        {
            img:tech,
            title:"Tech Enthusiast",
            desc:'Dedicated to continuous growth, I actively pursue and acquire new technology skills, ensuring a versatile and up-to-date proficiency in the ever-evolving landscape of web development.',
        },
        {
            img:ps,
            title:"Problem Solver",
            desc:'Possessing strong analytical and problem-solving abilities, I am a creative thinker who thrives on challenges and enjoys tackling complex puzzles with enthusiasm and efficiency.',
        },
        {
            img:lead,
            title:"Visionary",
            desc:'As a visionary leader, I aspire to reach new heights, showcasing resilient qualities by swiftly recovering from setbacks and leveraging failures as valuable learning experiences.',
        }
    ];
  return (
    <div>
        <h2 className='head-text'>
        I Know That <span>Good Design</span> <br />
          Means <span>Good Business</span>
        </h2>
        <div className='app__about-context app__flex'>
            <div className='app__about-img app__flex'>
                <div className='app__flex'>
                    <img src={profile} alt="my-profile" loading='lazy' className=''/>
                </div>
            </div>

            <div className="app__about-data app__flex">
                <h2 className='head-text'>About Me</h2>
                <p className='p-text'>
                    Hello, I'm <span>Onkar</span>, a Front End web developer with a passion for creating visually appealing and user-friendly websites. I find great satisfaction in my current role and am deeply committed to the field of <span>Web Development</span>. 
                    My motivation lies in challenging myself to acquire new skills and expand my expertise. In terms of my professional traits, I consider myself to be result-oriented, demonstrating effectiveness both as a collaborative team player and a competent individual contributor. I approach tasks with efficiency and always strive for excellence in my work.
                </p>
                <div>
                    <button className='portfolio-button' onClick={viewResumeHandler}>Download CV</button>
                </div>
            </div> 
        </div> 

        <div className='app__profiles'>
            {
                card_data.map((item,index)=>(
                    <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} transition={{ duration: 0.2, type: "tween" }} className="app__profile-item cursor-pointer"
                     key={item.title + index} >
                        <img src={item.img} alt="card-image" loading='lazy'/>
                        <h2 className="bold-text" style={{ marginTop: "20px"}}>{item.title} </h2>
                        <h2 className="p-text" style={{ marginTop: "10px" , textAlign:"justify"}}> {item.desc}</h2>
                     </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
  );
  