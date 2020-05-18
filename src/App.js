import React from "react";
import "./App.css";
import aboutBg from "./static/about.jpeg";
import contentsBg from "./static/project.jpeg";

function App() {
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
            <img src={aboutBg} alt="about bg" className="body-about-img" />
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
          <div className="body-title">QUALIFICATIONS</div>
          <div className="body-qualifications-row">
            <div className="body-qualifications-subtitle">FRONTEND</div>
            <div className="body-qualifications-subtitle">BACKEND</div>
            <div className="body-qualifications-subtitle">FRONTEND</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

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
