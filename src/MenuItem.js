import React from "react";
export function MenuItem(props) {
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
        {props.role && <div className="menu-item-role">{props.role}</div>}
      </div>
      {/* <div className="menu-item-description">{props.description}</div> */}
      <div className="menu-item-breakdown">{props.breakdown}</div>
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
