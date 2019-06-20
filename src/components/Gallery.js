import React, { Component } from "react";
import ReactYouTube from "./Youtube";
import ReactYouTube2 from "./Youtube2";

export default class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="col-sm-6 col-md-4 mb-3">
          <ReactYouTube videoId="S1qGVeXm4s4" />
        </div>

        <div class="col-sm-6 col-md-4 mb-3">
          <ReactYouTube2 videoId="QjnUB856pgs" />
        </div>
        {/* <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            /> */}
      </React.Fragment>
    );
  }
}
