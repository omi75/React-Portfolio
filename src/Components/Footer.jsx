import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub  } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
    const parentVariant = {
        view: {
          opacity: [0, 1],
          transition: {
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.15,
          },
        },
      };

    const childSocialVariant = {
    view: {
        y: [-300, 0],
        opacity: [0, 1],
        transition: {
        opacity: {
            duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
        },
    },
    };

    const childCopyVariant = {
        view: {
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            opacity: {
              duration: 0.6,
            },
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      };
    
  return (
    <div>
        {/* app__flex app__footer  */}
         <div className="w-full h-24 bg-[#2f2e41] flex justify-between items-center px-2 md:py-4 md:px-8">
            {/* app__footer-contacts app__flex */}
            <motion.div className="flex gap-x-4 ml-0 md:ml-8 " variants={parentVariant} whileInView="view" >
                {/* app__flex */}
                <motion.div className="hover:bg-white-color hover:text-black-color text-lg md:text-2xl text-white-color rounded-full border border-white-color p-2 text-center md:py-2 md:px-2" variants={childSocialVariant} whileInView="view">
                    <a href="https://www.linkedin.com/in/onkar-mahindrakar-66187422b/" target="_blank" rel="noreferrer" className="app__flex">
                     <GrLinkedinOption />
                    </a>
                </motion.div>
                
                <motion.div className="hover:bg-white-color hover:text-black-color text-lg md:text-2xl text-white-color rounded-full border border-white-color p-2 text-center md:py-2 md:px-2" variants={childSocialVariant} hileInView="view" >
                <a href="https://github.com/omi75" target="_blank" rel="noreferrer" className="app__flex">
                    <FaGithub  />
                </a>
                </motion.div>
                
                <motion.div className="hover:bg-white-color hover:text-black-color text-lg md:text-2xl text-white-color rounded-full border border-white-color p-2 text-center md:py-2 md:px-2" variants={childSocialVariant} whileInView="view">
                    <a href="https://www.instagram.com/urstrulyonkar" target="_blank" rel="noreferrer" className="app__flex">
                        <BsInstagram />
                    </a>
                </motion.div>
             </motion.div>

            <motion.div className="flex flex-col items-center uppercase gap-y-1 mr-0 md:mr-8" variants={parentVariant} whileInView="view">
                <motion.p className="p-text" variants={childCopyVariant} whileInView="view">&copy; 2024 Onkar </motion.p>
                <motion.p className="p-text" variants={childCopyVariant} whileInView="view">ALL RIGHTS RESERVED</motion.p>
            </motion.div>
    </div>
    </div>
  )
}

export default Footer