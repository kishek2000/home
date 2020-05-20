import React from "react";

function SocialsImg({ imgAlt, link, src }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="socials-img-wrapper">
        <img src={src} alt={imgAlt} className="socials-img" />
      </div>
    </a>
  );
}

export function Socials({ gitImg, soundcloudImg, gmailImg }) {
  return (
    <div className="socials">
      <div className="socials-col">
        <SocialsImg
          imgAlt="git"
          link="https://github.com/kishek2000/"
          src={gitImg}
        />
        <SocialsImg
          imgAlt="gmail"
          link="mailto:kishek12@gmail.com"
          src={gmailImg}
        />
        <SocialsImg
          imgAlt="soundcloud"
          link="https://soundcloud.com/adi-kishore"
          src={soundcloudImg}
        />
      </div>
    </div>
  );
}
