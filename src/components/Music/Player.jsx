import React, { useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";
//import song from '../../assets/musicTest/TheDays.mp3';

const Player = (props) => {
  // console.log("Player", props);
  // console.log("Player###", props.state);
  const track = props.state.selectedTrack;

  //console.log("TRACK", props.state.selectedTrack);

  const playSong = new Audio(track);

  const handlePlay = () => {
    playSong.play();
  };

  const stopPlay = () => {
    playSong.pause();
  };

  return (
    <div className="player-wrapper">
      <audio>
        <source src={track} type="audio/mpeg"></source>
        <source src={track} type="audio/ogg"></source>
      </audio>

      <div className="player-wrapper__img">
        {!props.state.cover ? (
          "NO TRACK SELECTED"
        ) : (
          <div>
            <img src={props.state.cover} alt="cover" /> <span></span>
          </div>
        )}
      </div>

      <div className="player-wrapper__btns">
        <div>
        <input type="range"/>
        </div>
        <div>
        <button onClick={() => handlePlay()}>
          <PlayCircleOutlineIcon style={{ width: "4rem", height: "4rem" }} />
        </button>{" "}
        <button onClick={() => stopPlay()}>
          <StopIcon style={{ width: "3rem", height: "3rem" }} />
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Player;
