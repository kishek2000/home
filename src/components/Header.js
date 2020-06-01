import React from "react";
import { HandleMenuClick } from "../HandleMenuClick";
import { Menu } from "./Menu";
import displayPic from "../static/images/mainDisplay.jpg";
import UseWindowDimensions from "./Dimensions";

export function Header() {
  const { width } = UseWindowDimensions();
  return (
    <>
      {width < 1080 && (
        <img className="App-header-photo" src={displayPic} alt="my dp" />
      )}
      <div className="App-header-text">
        <div className="header-title">Greetings.</div>
        <div className="header-description-text">
          I'm <strong>Adi</strong>, a keen developer who loves to build!
        </div>
      </div>
      {width >= 1080 && (
        <img className="App-header-photo" src={displayPic} alt="my dp" />
      )}
      <Menu HandleMenuClick={HandleMenuClick} />
    </>
  );
}
