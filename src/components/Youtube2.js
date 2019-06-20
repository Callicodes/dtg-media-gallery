import React from "react";
import YouTube from "react-youtube";

// https://youtu.be/QjnUB856pgs
// https://www.youtube.com/watch?v=QjnUB856pgs

class ReactYouTube2 extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube videoId="QjnUB856pgs" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default ReactYouTube2;
