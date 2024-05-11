import React, { useEffect, useState } from "react";
import Header from "../components/1-Header/Header";
import Hero from "../components/2-Hero/Hero";
import Main from "../components/3-Main/Main";
import Contact from "../components/4-Contact/Contact";
import Footer from "../components/5-Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
export default function App() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div id="Up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      {isScroll ? (
        <a href="#Up" style={{ opacity: "1", transition: "0.8s" }}>
          <button className="btn-scrolling">
            <FontAwesomeIcon className="iconUp" icon={faAngleUp} />
          </button>
        </a>
      ) : (
        <a href="#Up" style={{ opacity: "0", transition: "0.8s" }}>
          <button className="btn-scrolling">
            <FontAwesomeIcon className="iconUp" icon={faAngleUp} />
          </button>
        </a>
      )}
    </div>
  );
}
