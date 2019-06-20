import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark px-sm-5">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <a href="/">
              <img
                src="https://live.dovetailgames.com/images/logo-light.png"
                alt=""
                class="siteLogo"
              />
            </a>
            &nbsp; &nbsp;
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOBBIES <span class="sr-only">(current)</span>
                </a>
              </li>
              &nbsp; &nbsp;
              <li class="nav-item">
                <a class="nav-link" href="#">
                  STORE
                </a>
              </li>
              &nbsp; &nbsp;
              <li class="nav-item">
                <a class="nav-link" href="#">
                  COMMUNITY
                </a>
              </li>
              &nbsp; &nbsp;
              <li class="nav-item">
                <a class="nav-link" href="#">
                  DEVELOPERS
                </a>
              </li>
            </ul>
            <span>
              <a href="Login"> Login &nbsp;&nbsp;</a>
              <a href="/"> Register &nbsp;&nbsp;</a>
              <a href="/"> Support &nbsp;&nbsp;</a>
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
