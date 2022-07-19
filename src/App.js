import React from "react";
import "./App.scss";
import "./responsive.scss";

import play from "./assets/play.svg";

import Logo from "./assets/logo.svg";
import Web from "./assets/web.png";
import Devices from "./assets/devices.png";
import Console from "./assets/console.png";
import Video from "./assets/video.png";

import fb from "./assets/fb.svg";
import gmail from "./assets/gmail.svg";
import tw from "./assets/tw.svg";
import ig from "./assets/ig.svg";

const App = () => {
  const handleOnClick = () => {
    // const menu_toggle = document.querySelector(".menu_toggle");
    const navigation = document.querySelector(".navigation-container");
    navigation.classList.toggle("active");
  };

  return (
    <div className="App">
      <nav className="container">
        <div className="safe-area-view navigation-container">
          <div className="brand">
            <img className="brand--logo" src={Logo} />
            <h4 className="brand--name">DigitalAgency</h4>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Client</a>
              </li>
            </ul>
          </div>
          <div className="contact-us">Contact Us</div>
          <div className="nav-toggle" onClick={() => handleOnClick()}>
            <div className="hamburger"></div>
          </div>
        </div>
      </nav>
      <main>
        <section id="Hero" className="container">
          <div className="safe-area-view hero-container">
            <div className="top">
              <div className="left">
                <h1>
                  We are a creative digital agency to provide solutions to your
                  problems.
                </h1>
              </div>
              <div className="right">
                <p>
                  Digital Agency dedicated to solving problems and creating
                  impactful digital experience for user. We make digital
                  products with aim of giving the best to users.
                </p>
                <div className="button-wrapper">
                  <button className="primary-button">Request a quote</button>
                  <button className="secondary-button">
                    <span>
                      <img src={play} />
                      <p>Watch demo</p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </div>
          </div>
        </section>
        <section id="Services" className="container">
          <div className="safe-area-view services-container">
            <div className="services--details">
              <div className="services--title">
                Digital agency work to interact and our services can help you.
              </div>
              <div className="services--desc">
                We want to provided a user-friendly experience with the eyes
                capture designs and develop products quickly with the ability to
                solve user problems.
              </div>
            </div>
            <div className="services--items">
              <div className="services-card">
                <img src={Web} />
                <h1>Web Development</h1>
                <p>
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate product to solve user problems.
                </p>
                <a>Learn More &gt;</a>
              </div>
              <div className="services-card">
                <img src={Devices} />
                <h1>UI/UX Design</h1>
                <p>
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate product to solve user problems.
                </p>
                <a>Learn More &gt;</a>
              </div>
              <div className="services-card">
                <img src={Console} />
                <h1>VR & 3D Games</h1>
                <p>
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate product to solve user problems.
                </p>
                <a>Learn More &gt;</a>
              </div>
              <div className="services-card">
                <img src={Video} />
                <h1>VFX Videos & Trailers</h1>
                <p>
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate product to solve user problems.
                </p>
                <a>Learn More &gt;</a>
              </div>
            </div>
          </div>
        </section>
        <section id="Dedicated" className="container">
          <div className="safe-area-view dedicated-container">
            <div className="left">
              <h1>Dedicated to the success of your digital product.</h1>
              <p>
                We created modern and customized websites for your business
                growth. and enter the talk room with us.
              </p>
              <ul>
                <li>Fast and easy to create website</li>
                <li>High quality design software products</li>
                <li>Beautiful UI elements to build page</li>
                <li>
                  Immersive pixel perfect user interfaces for VR, Mobile and
                  desktop game
                </li>
                <li>
                  Proven design system to scale start ups with agile iterative
                  design model
                </li>
              </ul>
            </div>
            <div className="right">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            </div>
          </div>
        </section>
        <section id="Work" className="container">
          <div className="safe-area-view work-container">
            <div className="work--details">
              <div className="work--title">
                How we work to develop digital products with the ability
                interact
              </div>
              <div className="work--desc">
                We want to provied a user-friendly experience with the eyes
                capture designs and develop products quickly with the ability to
                solve user problems.
              </div>
            </div>
            <div className="work--items">
              <div className="work-card">
                <div className="work-card--img">
                  <div className="work-card--number">01</div>
                </div>
                <h1 className="work-card--title">Product Research</h1>
                <p className="work-card--desc">
                  Do the product research needed to find solution to the problem
                  and we do it with the team
                </p>
              </div>
              <div className="work-card">
                <div className="work-card--img">
                  <div className="work-card--number">02</div>
                </div>
                <h1 className="work-card--title">Data Collection</h1>
                <p className="work-card--desc">
                  Do the product research needed to find solution to the problem
                  and we do it with the team
                </p>
              </div>
              <div className="work-card">
                <div className="work-card--img">
                  <div className="work-card--number">03</div>
                </div>
                <h1 className="work-card--title">Problem Solving</h1>
                <p className="work-card--desc">
                  Do the product research needed to find solution to the problem
                  and we do it with the team
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container">
        <div className="safe-area-view footer-container">
          <h1>
            Want to develop your digital product? <br /> Let's talk with us to
            get the solution
          </h1>
          <p>
            Let's discuss the project business that will be done with our team
            to develop the digital product you want
          </p>
          <button>Let's Discuss</button>
          <div className="bottom-nav">
            <ul>
              <li>Services</li>
              <li>About Us</li>
              <li>Our Client</li>
              <li>Contact Us</li>
            </ul>
            <div className="brand">
              <img className="brand--logo" src={Logo} />
              <h4 className="brand--name">DigitalAgency</h4>
            </div>
            <div className="social-media">
              <img src={gmail} />
              <img src={fb} />
              <img src={ig} />
              <img src={tw} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
