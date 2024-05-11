import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
import Lottie from "lottie-react";
import mainIcon from "../../assets/animations/heroAnim.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Hero() {
  return (
    <section className="hero flex" style={{ gap: "40px" }}>
      <div className="left-section">
        <div className="parent-avatar flex" style={{ gap: "5px" }}>
          <img src="./sola.png" alt="" className="avatarImg" />
          <FontAwesomeIcon className="IconVerify" icon={faCircleCheck} />
        </div>
        <motion.h1
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="title"
        >
          Front-End Development with a Creative Touch,Your Guide to Web Elegance
        </motion.h1>
        <motion.p
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="subtitle"
        >
          Hello! I am Soulaiman khalidi, a front-end developer with a passion
          for crafting beautiful and user-friendly digital experiences. My
          journey in web development has been driven by a love for design and a
          commitment to creating intuitive, accessible interfaces. I specialize
          in modern web technologies, including HTML, CSS ,JAVASCRIPT, React
          ,NEXT js , and I thrive on turning complex problems into elegant
          solutions.
        </motion.p>
        <div className="icons flex">
          <div className="icon">
            <a
              href="https://github.com/solaymanel05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://linkedin.com/in/solayman-el-khalidi-04849a202"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="icon">
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="icon">
            <a href="">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie animationData={mainIcon} className="lotieSearch" />
      </div>
    </section>
  );
}
