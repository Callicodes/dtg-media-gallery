import React from "react";
import YouTube from "react-youtube";

// https://youtu.be/S1qGVeXm4s4
// https://www.youtube.com/watch?v=S1qGVeXm4s4
// https://www.youtube.com/watch?v=-_pgcFQ0l64&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK

class ReactYouTube extends React.Component {
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
      <YouTube videoId="S1qGVeXm4s4" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default ReactYouTube;
