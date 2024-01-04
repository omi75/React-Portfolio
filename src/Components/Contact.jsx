import React, { useState } from 'react'
import '../Components/Contact.scss'
import email from '../assets/email.png'
import { AppWrap, MotionWrap } from '../wrapper'


function Contact() {
    const [form,setForm]=useState({name:"",email:"",subject:"",message:""});
    function handleChangeInput(ev)
    {
        const {name,value}=ev.target;
        setForm((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        console.log(form);
    }
  return (
    <div>
        <h2 className='head-text'><span>Contact Me </span> Questions, Thoughts, Or Just Want To <span>Say Hello?</span></h2>
        <div className="app__contact-cards">
            <div className="app__contact-card">
              <img src={email} alt="email" loading='lazy'/>
              <a href="mailto:onkar.mhd@gmail.com" className="p-text">
                onkar.mhd@gmail.com
              </a>
            </div>
        </div>

        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder="Your Name" value={form.name} onChange={handleChangeInput} name="name" />
          </div>

          <div className="app__flex"> 
            <input type="email" className="p-text" placeholder="Your Email" value={form.email} onChange={handleChangeInput} name="email"/>
          </div>
        
          <div className="app__flex">
            <input type="text" className="p-text" placeholder="Subject" value={form.subject} onChange={handleChangeInput} name="subject" />
          </div>

          <div>
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChangeInput} />
          </div>

          <button className="portfolio-button" onClick={handleSubmit} > Sending Message </button>
        </div>
    </div>
    )
}

export default AppWrap(
    MotionWrap(Contact, "app__contact"),
    "contact",
    "app__whitebg"
  );
  