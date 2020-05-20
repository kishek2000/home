import React from "react";
import "./App.css";
import { Socials } from "./Socials";

import * as data from "./store";

import { Qualifications } from "./Qualifications";
import { Projects } from "./Projects";
import { About } from "./About";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Header />
      </section>
      <section className="App-body">
        <About data={data} />
        <Projects data={data} />
        <Qualifications data={data} />
        <Socials
          gitImg={data.gitImg}
          soundcloudImg={data.soundcloudImg}
          gmailImg={data.gmailImg}
        />
      </section>
    </div>
  );
}

export default App;
