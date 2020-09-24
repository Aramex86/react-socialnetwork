import React, { useState, useRef, useEffect } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";
import song from "../../assets/musicTest/TheDays.mp3";

const Player = (props) => {
  // console.log("Player", props);
  // console.log("Player###", props.state);
  const [played, setPlay] = useState(true);

  const track = props.state.selectedTrack;

  const playSong = new Audio(track);
  const playPauseRef = useRef(null);
  const sourceRef = useRef(null);

  //console.log("TRACK", props.state.selectedTrack);
  //console.log(played);
  console.log(sourceRef);

  useEffect(() => {
    return sourceRef.current.currentTime;
  });

  const playSound = () => {
    playPauseRef.current.play();
    setPlay(false);
  };

  const stopSound = () => {
    playPauseRef.current.pause();
    setPlay(true);
  };

  return (
    <div className="player-wrapper">
      <audio ref={playPauseRef} src={track}>
        <source ref={sourceRef} src={track} type="audio/mpeg" />
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
        {/* <div>
          <input type="range" min="0" max="100" />
        </div> */}
        <div>
          {played ? (
            <button onClick={playSound} disabled={track === null}>
              <PlayCircleOutlineIcon
                style={{ width: "5rem", height: "5rem" }}
              />
            </button>
          ) : (
            <button onClick={stopSound}>
              <StopIcon style={{ width: "3.5rem", height: "3.5rem" }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
