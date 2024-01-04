import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub  } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/onkar-mahindrakar-66187422b/" target="_blank" rel="noreferrer" className="app__flex">
          <BsLinkedin />
        </a>
      </div>

      <div>
          <a href="https://github.com/omi75" target="_blank" rel="noreferrer" className="app__flex">
          <FaGithub />
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/urstrulyonkar" target="_blank" rel="noreferrer" className="app__flex">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
