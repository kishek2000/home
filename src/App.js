import React from "react";
import "./App.css";
import { Socials } from "./Socials";
import { QualificationItem } from "./QualificationItem";
import { MenuItem } from "./MenuItem";

import * as data from "./store";

import facebookImg from "./static/facebookImg.png";
import soundcloudImg from "./static/soundcloudImg.png";
import gmailImg from "./static/gmailImg.png";
import { HandleMenuClick } from "./HandleMenuClick";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="kishek">kishek2000</div>
        <div className="App-header-text">
          <div className="body-big-title">Greetings.</div>
          <div className="header-description-text">
            I'm <strong>Adi</strong>, a keen developer who loves to build!
          </div>
        </div>
        <img
          className="App-header-photo"
          src="https://ik.imagekit.io/m3aqkfw4pj/IMG_2057_lpkgmrUuj.jpg"
          alt="my dp"
        />
        <div className="header-item-col">
          <div className="header-item" onClick={() => HandleMenuClick(0)}>
            HOME
          </div>
          <div className="header-item" onClick={() => HandleMenuClick(1)}>
            ABOUT
          </div>
          <div className="header-item" onClick={() => HandleMenuClick(2)}>
            PROJECTS
          </div>
          <div className="header-item" onClick={() => HandleMenuClick(3)}>
            QUALIFICATIONS
          </div>
        </div>
      </section>
      <section className="App-body">
        <div className="body-about">
          <div className="body-about-img-wrapper">
            <img src={data.aboutImg} className="body-about-img" alt="about" />
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
              src={data.contentsImg}
              alt="contents Img"
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
              color="rgb(240, 170, 57)"
              description="Find where to stream Movies, Shows and Music."
              breakdown="myLounge is a digital lounge that allows users to browse multiple entertainment options. You can filter and/or search TV Shows, Movies, Podcasts and Music, and immediately find a list of streaming services for a chosen media option!"
              demo="Video Demo"
              role="Frontend Lead, Full Stack Engineer"
            />
            <MenuItem
              title="Discovery"
              src="http://kishek2000.github.io/discovery"
              status="OPTIMISING"
              color="rgb(240, 170, 57)"
              description="Children's education made fun and engaging."
              breakdown="Discovery is a platform that makes children's education fun and engaging. It aims to target a large age range of audience, and is a free learning space that covers interesting areas of content about the world!"
              demo="Live Demo"
              role="Full Stack Lead"
            />
            <MenuItem
              title="Sadafal Education"
              src=""
              status="RESEARCHING"
              color="rgb(129, 110, 237)"
              description="Discover your path of learning, and shape your career."
              breakdown="Sadafal Education aims to be a global level education platform that guides users to discover their path of learning and shape their career! This is a platform for anyone looking to learn."
              // breakdown = ""
              demo="Coming Soon"
              role="TBD"
            />
          </div>
        </div>
        <div className="body-qualifications">
          <div className="body-qualifications-img-wrapper">
            <img
              src={data.qualificationsImg}
              alt="qualifications Img"
              className="body-qualifications-img"
            />
          </div>
          <div className="body-header">
            <div className="body-title">QUALIFICATIONS</div>
            <div className="description-text">
              Over the last few years, I've pursued a path of learning and
              implementing software technologies. Today, these are the range of
              technologies I have <strong>learned and implemented</strong>. I am
              keen to <strong>continue deepening my skills</strong> in each of
              these, and <strong>learning new technologies</strong> for future
              solutions!
            </div>
          </div>
          <div className="body-qualifications-row">
            <QualificationItem title="Frontend" skills={data.frontendSkills} />
            <QualificationItem title="Backend" skills={data.backendSkills} />
            <QualificationItem title="DevOps" skills={data.devopSkills} />
            <QualificationItem
              title="Design and Prototyping"
              skills={data.designSkills}
            />
            <QualificationItem
              title="Programming Languages"
              skills={data.programmingSkills}
            />
            <QualificationItem
              title="Production"
              skills={data.productionSkills}
            />
          </div>
          <Socials
            gitImg={data.gitImg}
            facebookImg={facebookImg}
            soundcloudImg={soundcloudImg}
            gmailImg={gmailImg}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
