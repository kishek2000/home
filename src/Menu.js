import React from "react";
export function Menu({ HandleMenuClick }) {
  return (
    <>
      <div className="kishek">kishek2000</div>
      <div className="header-item-row">
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
    </>
  );
}
