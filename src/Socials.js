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

export function Socials({ gitImg, facebookImg, soundcloudImg, gmailImg }) {
  return (
    <div className="socials">
      <div className="socials-row">
        <SocialsImg
          imgAlt="git"
          link="https://github.com/kishek2000/"
          src={gitImg}
        />
        <SocialsImg
          imgAlt="soundcloud"
          link="https://soundcloud.com/adi-kishore"
          src={soundcloudImg}
        />
        <SocialsImg
          imgAlt="gmail"
          link="mailto:kishek12@gmail.com"
          src={gmailImg}
        />
        <SocialsImg
          imgAlt="facebook"
          link="https://facebook.com/kishek2000"
          src={facebookImg}
        />
      </div>
    </div>
  );
}
