import React from "react";
import "./App.css";
import aboutBg from "./static/about.jpeg";
import contentsBg from "./static/project.jpeg";
import qualificationsBg from "./static/qualifications.jpeg";

import reactImg from "./static/reactImg.png";
import jsImg from "./static/jsImg.png";
import htmlImg from "./static/htmlImg.png";
import cssImg from "./static/cssImg.png";

import cImg from "./static/cImg.png";
import pythonImg from "./static/pythonImg.png";

import finalcutImg from "./static/finalcutImg.png";
import auditionImg from "./static/auditionImg.png";
import logicImg from "./static/logicImg.png";

import figmaImg from "./static/figmaImg.png";
import sketchImg from "./static/sketchImg.png";

import nodeImg from "./static/nodeImg.png";
import expressImg from "./static/expressImg.png";
import flaskImg from "./static/flaskImg.png";
import djangoImg from "./static/djangoImg.png";

function App() {
  const productionSkills = [
    {
      langs: [
        {
          title: "Logic Pro X",
          imgSrc: logicImg,
        },
        {
          title: "Final Cut Pro X",
          imgSrc: finalcutImg,
        },
        {
          title: "Adobe Audition",
          imgSrc: auditionImg,
        },
      ],
    },
  ];
  const designSkills = [
    {
      langs: [
        {
          title: "Figma",
          imgSrc: figmaImg,
        },
        {
          title: "Sketch",
          imgSrc: sketchImg,
        },
      ],
    },
  ];
  const devopSkills = [
    {
      langs: [
        {
          title: "Github",
          imgSrc: cImg,
        },
        {
          title: "Gitlab",
          imgSrc: pythonImg,
        },
      ],
    },
  ];
  const programmingSkills = [
    {
      langs: [
        {
          title: "C",
          imgSrc: cImg,
        },
        {
          title: "Python 3",
          imgSrc: pythonImg,
        },
        {
          title: "Javascript",
          imgSrc: jsImg,
        },
      ],
    },
  ];

  const frontendSkills = [
    {
      langs: [
        {
          title: "React",
          imgSrc: reactImg,
        },
        {
          title: "Javascript",
          imgSrc: jsImg,
        },
        {
          title: "HTML",
          imgSrc: htmlImg,
        },
        {
          title: "CSS",
          imgSrc: cssImg,
        },
      ],
    },
  ];
  const backendSkills = [
    {
      langs: [
        {
          title: "Django",
          imgSrc: djangoImg,
        },
        {
          title: "Flask",
          imgSrc: flaskImg,
        },
        {
          title: "Node",
          imgSrc: nodeImg,
        },
        {
          title: "Express",
          imgSrc: expressImg,
        },
        {
          title: "Javascript",
          imgSrc: jsImg,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <section className="App-header">
        <div className="App-header-text">
          <div className="body-big-title">Greetings.</div>
          <div className="header-description-text">
            I'm <b>Adi</b>, a keen developer who loves to build!
          </div>
        </div>
        <img
          className="App-header-photo"
          src="https://ik.imagekit.io/m3aqkfw4pj/IMG_2057_lpkgmrUuj.jpg"
          alt="my dp"
        />
        <div className="header-item-col">
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            TOP
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 1,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            ABOUT
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 2,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            PROJECTS
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 3,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            QUALIFICATIONS
          </div>
        </div>
      </section>
      <section className="App-body">
        <div className="body-about">
          <div className="body-about-img-wrapper">
            <img src={aboutBg} className="body-about-img" alt="about" />
          </div>
          <div className="body-about-description">
            <div className="body-title">ABOUT</div>
            <div className="description-text">
              Hey There! My name is Adi Kishore and I'm currently a student
              studying Software Engineering at UNSW. I'm a very passionate
              developer who is extremely keen to jump in any problem space and
              develop some cool solutions! I'm still in the exciting beginnings
              of my journey but throughout my experience so far I've
              successfully lead and executed a few projects as the full stack
              lead, and am deeply interested to keep going!
            </div>
          </div>
        </div>
        <div className="body-contents">
          <div className="body-contents-img-wrapper">
            <img
              src={contentsBg}
              alt="contents bg"
              className="body-contents-img"
            />
          </div>
          <div className="body-header">
            <div className="body-title">PROJECTS</div>
            <div className="description-text">
              From the beginning of 2020, I have pursued my deep interest for
              working on projects that solve real problems in a{" "}
              <strong>meaningful</strong> and <strong>helpful</strong> way.
            </div>
          </div>
          <div className="body-menu">
            <MenuItem
              title="myLounge"
              src="https://www.youtube.com/watch?v=znZc0CzMUmQ"
              status="OPTIMISING"
              // color="rgb(57, 240, 112)" completed colour
              color="rgb(240, 170, 57)"
              description="Find where to stream Movies, Shows and Music."
              breakdown="myLounge is a digital lounge that provides users the ability to browse multiple entertainment options. It allows filtering and searching of TV Shows, Movies, Podcasts and Music and immediately provides users a list of streaming services for a chosen media option."
              demo="Video Demo"
            />
            <MenuItem
              title="Discovery"
              src="http://kishek2000.github.io/discovery"
              status="OPTIMISING"
              color="rgb(240, 170, 57)"
              description="Children's education made fun and engaging."
              demo="Live Demo"
            />
            <MenuItem
              title="Sadafal Education"
              src=""
              status="RESEARCHING"
              color="rgb(129, 110, 237)"
              description="Discover your path of learning, and shape your career."
              demo="Coming Soon"
            />
          </div>
        </div>
        <div className="body-qualifications">
          <div className="body-qualifications-img-wrapper">
            <img
              src={qualificationsBg}
              alt="qualifications bg"
              className="body-qualifications-img"
            />
          </div>
          <div className="body-header">
            <div className="body-title">QUALIFICATIONS</div>
            <div className="description-text">
              Over the last few years, I've pursued a path of learning and
              implementing software technologies. Today, these are the skills I
              have currently acquired, from a range of{" "}
              <strong>basic to medium proficiency</strong>. I am keen to
              continue deepening my skills in each of these, and learning new
              technologies future solutions!
            </div>
          </div>
          <div className="body-qualifications-row">
            <QualificationItem title="Frontend" skills={frontendSkills} />
            <QualificationItem title="Backend" skills={backendSkills} />
            <QualificationItem title="DevOps" skills={devopSkills} />
            <QualificationItem
              title="Design and Prototype"
              skills={designSkills}
            />
            <QualificationItem
              title="Programming Languages"
              skills={programmingSkills}
            />
            <QualificationItem title="Production" skills={productionSkills} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

function QualificationItem(props) {
  return (
    <div className="body-qualifications-item">
      <div className="body-qualifications-main-title">{props.title}</div>
      <div className="body-qualifications-langs-grid">
        {props.skills.map((proficiency, index) => (
          <>
            {/* <div className="body-qualifications-proficiency-title">
              {proficiency.title}
            </div> */}
            <div className="body-qualifications-proficiency-langs">
              {proficiency.langs.map((language, num) => (
                <div className="body-qualifications-proficiency-item">
                  <img
                    src={language.imgSrc}
                    alt={`${language.title} icon`}
                    className="body-qualifications-lang-img"
                  />
                  <div className="body-qualifications-lang-title">
                    {language.title}
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

function MenuItem(props) {
  return (
    <div className="menu-item">
      <div className="menu-item-text">
        <div className="menu-item-title">{props.title}</div>
        <div
          className="menu-item-status"
          style={{ backgroundColor: props.color }}
        >
          {props.status}
        </div>
      </div>
      <div className="menu-item-description">{props.description}</div>
      {/* <div className="menu-item-breakdown">{props.breakdown}</div> */}
      <div className="menu-item-demo">
        {props.src !== "" ? (
          <a
            href={props.src}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {props.demo}
          </a>
        ) : (
          <div>{props.demo}</div>
        )}
      </div>
    </div>
  );
}
