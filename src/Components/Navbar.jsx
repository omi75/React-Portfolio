import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import '../Components/Navbar.scss'

function Navbar() {
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
    <nav className={`w-full flex justify-between items-center py-4 px-8 fixed z-[2] transition-all duration-300 ease ${classFloat}`}>
        <div className='app__navbar-logo flex justify-center items-center cursor-pointer'>
            <img src={logo} alt="logo" loading='lazy' className='w-[90px] h-[25px] 2xl:w-[130px] 2xl:h-[40px]'/>
        </div>
        <ul className='app__navbar-links'>
            {
                ['Home','About','Work','Skills','Contact'].map((item)=>(
                    <li key={`link-${item}`} className={active === item ? "active" : ""}>
                    <a href={`#${item}`} onClick={()=>{setActive(item)}}>{item}</a></li>
                ))
            }
        </ul>

        <section className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {toggle &&
                <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.75, ease: "easeOut" }}>
                    <HiX onClick={()=>setToggle(false)}/>
                    <ul>
                    {
                        ['Home','About','Work','Skills','Contact'].map((item)=>(
                            <li key={item}><a href={`#${item}`}>
                            {item}</a></li>
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