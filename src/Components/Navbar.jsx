import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/onkar-light.png'
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import { motion } from "framer-motion";
import '../Components/Navbar.scss'

function Navbar({theme,switchTheme}) {
    const [toggle, setToggle] = useState(false); 
    const [classFloat, setClassFloat] = useState("");
    const [active, setActive] = useState("");

    const stickNavBar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          if (windowHeight > 250) {
            setClassFloat("navbar-float");
          } else {
            setClassFloat("");
          }
        }
      };

    useEffect(() => {
    window.addEventListener("scroll", stickNavBar);

    return () => {
        window.removeEventListener("scroll", stickNavBar);
    };
    }, []);

  return (
    <nav className={`${theme} w-full flex justify-between items-center py-4 px-8 fixed z-[2] transition-all duration-300 ease ${classFloat}`}>
        <div className='app__navbar-logo flex justify-center items-center cursor-pointer'>
            {
              theme ==='light' ? (<img src={logo} alt="logo" loading='lazy' className='w-[90px] h-[25px] 2xl:w-[130px] 2xl:h-[40px]'/>) :
              (<img src={logo2} alt="logo2" loading='lazy' className='w-[90px] h-[25px] 2xl:w-[130px] 2xl:h-[40px]'/>)
            } 
        </div>
        <ul className='app__navbar-links'>
            {
                ['home','about','work','skills','contact'].map((item)=>(
                    <li key={`link-${item}`} className={active === item ? "active" : ""}>
                    <a href={`#${item}`} onClick={()=>{setActive(item)}}>{item}</a></li>
                ))
            }
        </ul>
        {/* Light & Dark Theme Functionality */}
        <div className='nav-img flex justify-center items-center gap-x-4 cursor-pointer text-[1.5rem]' onClick={switchTheme}>
          {
            theme === 'light' ? (<MdOutlineLightMode />) : (<FaMoon/>)
          }
        </div>

        <section className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {toggle &&
                <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.75, ease: "easeOut" }}>
                    <HiX onClick={()=>setToggle(false)}/>
                    <ul>
                    {
                        ['home','about','work','skills','contact'].map((item)=>(
                            <li key={item}><a href={'#'+item} onClick={() => setToggle(false)}>{item}</a></li>
                        ))
                    }
                    </ul>
                </motion.div>
            }
        </section>
    </nav>
  );
};

export default Navbar