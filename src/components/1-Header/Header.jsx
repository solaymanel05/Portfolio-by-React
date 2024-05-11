import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./header.css";
export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [them, setThem] = useState(
    localStorage.getItem("CurrentMood") ?? "dark"
  );
  const handelShow = () => {
    setShowModel(!showModel);
  };
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [them]);

  return (
    <header className="flex">
      <div className="button-menu">
        <FontAwesomeIcon
          className="icon-menu"
          onClick={handelShow}
          icon={faBarsStaggered}
        />
      </div>

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Certificare</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => {
          // send value to localeStorage
          localStorage.setItem(
            "CurrentMood",
            them === "dark" ? "light" : "dark"
          );
          // get value from localeStorage
          setThem(localStorage.getItem("CurrentMood"));
        }}
        className="button icon-moon"
      >
        {them === "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon className="sunIcon" icon={faSun} />
        )}
      </div>

      {showModel ? (
        <div className="fixed">
          <ul className="model">
            <li>
              <FontAwesomeIcon
                onClick={() => {
                  setShowModel(!showModel);
                }}
                className="iconXmark"
                icon={faXmark}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a>Certifications</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
