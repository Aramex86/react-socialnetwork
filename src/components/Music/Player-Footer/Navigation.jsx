import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseIcon from "@material-ui/icons/Pause";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import track from "../../../assets/musicTest/TheDays.mp3";

const Navigation = (props) => {
  const [showTrack, setShowTrack] = React.useState(false);
  const [playPause, setPlayPause] = React.useState(true);

  console.log(playPause);
  console.log(track);

  const activateTrackBar = () => {
    setShowTrack(false);
  };

  const deactivateTrackBar = () => {
    setShowTrack(true);
  };

  const changeProgressBar = (value) => {
    console.log("change value:", value);
  };

  const next = () => {
    console.log("nextbtn");
  };
  const prev = () => {
    console.log("prevbtn");
  };
  const playPauseBtn = (track) => {
    console.log("playPausebtn");
    //track.play();
  };
  const random = () => {
    console.log("randombtn");
  };

  return (
    <div className="playernavigation-wrapper">
      <div className="playernavigation-wrapper__header">
        {showTrack ? (
          <>
            <KeyboardArrowDownIcon onClick={activateTrackBar} />
            <div className="playernavigation-wrapper__header-track playernavigation-wrapper__header-track-show">
              <input
                type="range"
                id="progress-bar"
                min="0"
                max="100"
                //value="0"
                onChange={changeProgressBar()}
              />
            </div>
          </>
        ) : (
          <>
            <KeyboardArrowUpIcon onClick={deactivateTrackBar} />
            <div className="playernavigation-wrapper__header-track playernavigation-wrapper__header-track-hide"></div>
          </>
        )}
        {/* <div className="playernavigation-wrapper__header-track-hide">
          <input
            type="range"
            id="progress-bar"
            min="0"
            max="100"
            //value="0"
            onChange={changeProgressBar()}
          />
        </div> */}
      </div>

      <audio id="tracksong">
        <source src={track} type="audio/mpeg"></source>
      </audio>
      <div className="playernavigation-wrapper__nav">
        <ShuffleIcon style={{ gridColumn: "1/1" }} onClick={random} />
        <FastRewindIcon style={{ gridColumn: "2/2" }} onClick={prev} />
        <PlayCircleOutlineIcon
          style={{ gridColumn: "3/3" }}
          onClick={playPauseBtn}
        />
        <FastForwardIcon style={{ gridColumn: "4/4" }} onClick={next} />
      </div>
    </div>
  );
};

export default Navigation;
