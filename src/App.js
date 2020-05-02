import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="App-header-text">
          <div className="body-big-title">Greetings.</div>
          <div className="header-description-text">
            I'm <b>Adi</b>, a keen developer who loves to build!
          </div>
        </div>
        <img
          className="App-header-photo"
          src="https://lh3.googleusercontent.com/j0DyTHIwRpfdDLMvFtcV1LFG8thQ98eeU89qD6Q2A4xgfnSn-3BmGNtOMlohlJx_1y3kSyiTEEUvMwF4q25793N1QUj-xNEwa4Phl_4uLewEAJbehXOET8bzOAnp69G01bLAoAb7YCeMtcCrrQ8CcZ2P9cz-FV9GIOZ7y4sWIHOPZuMOjjHNJ4maeoUV7vJakn7H8BMAu8VqNuO7KvpIj52sCjslOonKyeqQuitn5ETI7s1cA4Gg81vTpbJuP5KwYf12K40i9SSrmiLLS6e_AAEYtpy2feIQ64T7gWkUOIlbf3RpOx1sG9c-VzYIybLAeE2iWUAA_JjS1LbcTJgxwk7ar3WCjs92y1mudb0wQO4G8nNYnHUGrJNZ4aJyK69M1H79_tEP38TOXjOZtM22eZuRV7CF2ECKibVmlEi9HBHuqgJnHCzEiB2GK4mLEtH5aYnoafNt6mlzWK6ghXwbYngOSEYpb-adfjwLG6lblWxMdx1D-IdcmKnhoHcJcFDZTbyRT7AkVEHL4H7yA29j0-ow-TS85-DRpCwzJ7ND_Ss4k1cyvvy62Blz7XEn9WKvQAfDiiZ2PmwdQlsPWA43g_Q4hPhjQ_GlWoh2klN5cqIrfX0C3tcDeod3Uvv1dDz9jsN9JXdx5-LgjpH1A5JV2NwZmds-zfok-1dlUzZPPbyPWlmQOhMmwVVejccav4o=w1007-h1342-no"
          alt="my dp"
        />
        <div className="header-item-row">
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            TOP
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 1,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            ABOUT
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 2,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            PROJECTS
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 3,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            QUALIFICATIONS
          </div>
          <div
            className="header-item"
            onClick={() => {
              window.scroll({
                top: window.innerHeight * 4,
                left: 1000,
                behavior: "smooth",
              });
            }}
          >
            CONTACT
          </div>
        </div>
      </section>
      <section className="App-body">
        <div className="body-about">
          <div className="body-about-description">
            <div className="body-title">ABOUT</div>
            <div className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              metus elit, commodo at commodo non, dapibus a lorem. Maecenas
              iaculis urna eget massa ultrices elementum. Nam sed sodales leo.
              Aliquam erat volutpat. Praesent fermentum hendrerit mattis. Proin
              ut turpis pharetra, tempus nisi eget, luctus lacus. Quisque
              lacinia elit at congue dictum.
            </div>
          </div>
        </div>
        <div className="body-contents">
          <div className="body-header">
            <div className="body-title" style={{ "text-align": "right" }}>
              PROJECTS
            </div>
          </div>
          <div className="body-menu">
            <MenuItem title="myHome" src="" />
            <MenuItem
              title="myLounge"
              src="https://github.com/kishek2000/Team-100"
            />
            <MenuItem
              title="Productive"
              src="https://github.com/kishek2000/productive"
            />
            <MenuItem title="myBudget" src="" />
            <MenuItem title="Discovery" src="" />
          </div>
        </div>
        <div className="body-qualifications">
          <div className="body-title">QUALIFICATIONS</div>
        </div>
        <div className="body-contact">
          <div className="body-title" style={{ "text-align": "right" }}>
            CONTACT
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

function MenuItem(props) {
  return (
    <div className="menu-item">
      <a
        href={props.src}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        {props.title}
      </a>
    </div>
  );
}
