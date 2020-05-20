import React from "react";
export function About({ data }) {
  return (
    <div className="body-about">
      <div className="body-about-img-wrapper">
        <img src={data.aboutImg} className="body-about-img" alt="about" />
      </div>
      <div className="body-about-description">
        <div className="body-title">ABOUT</div>
        <div className="description-text">
          Hey There! My name is Adi Kishore and I'm currently a student studying
          Software Engineering at UNSW. I'm a very passionate developer who is
          extremely keen to jump in any problem space and develop some cool
          solutions! I'm still in the exciting beginnings of my journey but
          throughout my experience so far I've successfully lead and executed a
          few projects as the full stack lead, and am deeply interested to keep
          going!
        </div>
      </div>
    </div>
  );
}
