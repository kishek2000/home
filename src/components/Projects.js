import React from "react";
import { MenuItem } from "./MenuItem";
export function Projects({ data }) {
  return (
    <div className="body-contents" id="projects">
      <div className="body-img-wrapper">
        <img src={data.contentsImg} alt="contents Img" className="body-img" />
      </div>
      <div className="body-header">
        <div className="body-title">PROJECTS</div>
        <div className="description-text">
          From the beginning of 2020, I have passionately pursued projects that
          look solve real problems and <strong>positively impact </strong>the
          community, or help ease our lives.
        </div>
      </div>
      <div className="body-menu">
        <MenuItem
          title="myLounge"
          src="https://www.youtube.com/watch?v=znZc0CzMUmQ"
          status="OPTIMISING"
          color="rgb(240, 170, 57)"
          description="Find where to stream Movies, Shows and Music."
          breakdown="myLounge is a digital lounge that allows users to browse, filter and/or search TV Shows, Movies, Podcasts and Music, and immediately find a list of streaming services for a chosen media option!"
          demo="Video Demo"
          role="Frontend Lead, Full Stack Developer"
        />
        <MenuItem
          title="Discovery"
          src="http://kishek2000.github.io/discovery"
          status="OPTIMISING"
          color="rgb(240, 170, 57)"
          description="Children's education made fun and engaging."
          breakdown="Discovery is a platform that makes children's education fun and engaging. It aims to target a large age range, and is a free learning space that covers interesting areas of content about the world!"
          demo="Live Demo"
          role="Project Lead"
        />
        <MenuItem
          title="Sadafal Education"
          src=""
          status="RESEARCHING"
          color="rgb(129, 110, 237)"
          description="Discover your path of learning, and shape your career."
          breakdown="Sadafal Education aims to be a global level education platform that guides users to discover their path of learning and shape their career! This is a platform for anyone looking to learn."
          demo="Coming Soon"
          role="TBD"
        />
      </div>
    </div>
  );
}
