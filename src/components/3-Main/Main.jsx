import React, { useState } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectData } from "../../assets/Data/ProjectData";
export default function Main() {
  const [isActive, setIsActive] = useState("All");
  const [dataPro, setDataPro] = useState(ProjectData);
  const handelButtonFilter = (handelCategory) => {
    const newArr = ProjectData.filter((item) => {
      const deepFilter = item.category.find((deep) => {
        return deep === handelCategory;
      });
      // return deepFilter[0] === "css" if we used filter
      return deepFilter === handelCategory;
    });
    setDataPro(newArr);
  };
  return (
    <main className="flex">
      <section className="left-section flex ">
        <button
          onClick={() => {
            setIsActive("All");
            handelButtonFilter();
            setDataPro(ProjectData);
          }}
          className={isActive === "All" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setIsActive("css");
            handelButtonFilter("css");
          }}
          className={isActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setIsActive("React");
            handelButtonFilter("React");
          }}
          className={isActive === "react" ? "active" : null}
        >
          React js
        </button>
        <button
          onClick={() => {
            setIsActive("javascript");
            handelButtonFilter("javascript");
          }}
          className={isActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setIsActive("bootsrap");
            handelButtonFilter("bootsrap");
          }}
          className={isActive === "bootsrap" ? "active" : null}
        >
          Bootstrap
        </button>
      </section>
      <section className="right-section flex ">
        {dataPro.map((item, key) => {
          return (
            <>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 1 }}
              >
                <article key={key} className="card">
                  <img src={item.img} alt="" style={{ width: "270px" }} />
                  <div className="box" style={{ width: "270px" }}>
                    <h1 className="title">{item.ProjectTitle}</h1>
                    <p className="subtitle">{item.subTitle}</p>
                    <div className="icon-card flex">
                      <div className=" icon-left flex">
                        <FontAwesomeIcon icon={faLink} className="falink" />
                        <FontAwesomeIcon icon={faGithub} className="fagithub" />
                      </div>
                      <a
                        className="alink flex"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        more{" "}
                        <span style={{ alignSelf: "end" }}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="icon-link"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </a>
            </>
          );
        })}
      </section>
    </main>
  );
}
