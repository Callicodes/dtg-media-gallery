import React, { Component } from "react";
import Gallery from "./Gallery";

export default class MiniNavbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-light" id="miniNavBar">
          <a class="navbar-brand" href="#">
            TRAIN SIM WORLD HUB
          </a>
          <a class="navbar-brand" href="#">
            CHALLENGES
          </a>
          <a class="navbar-brand" href="#">
            MEDIA GALLERY
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
