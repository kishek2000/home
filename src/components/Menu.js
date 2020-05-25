import React from "react";
export function Menu({ HandleMenuClick }) {
  return (
    <>
      <div className="kishek">kishek2000</div>
      <div className="header-item-row">
        <div className="header-item" onClick={() => HandleMenuClick("header")}>
          HOME
        </div>
        <div className="header-item" onClick={() => HandleMenuClick("about")}>
          ABOUT
        </div>
        <div
          className="header-item"
          onClick={() => HandleMenuClick("projects")}
        >
          PROJECTS
        </div>
        <div
          className="header-item"
          onClick={() => HandleMenuClick("qualifications")}
        >
          QUALIFICATIONS
        </div>
      </div>
    </>
  );
}
