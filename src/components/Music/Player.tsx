import React, { useState, useRef, useEffect } from "react";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";

import Slider from "@material-ui/core/Slider";

type State = {
  selectedTrack: string | undefined;
  grid: boolean;
  playerBg: string | null;
  cover: string | null;
};

type PropsType = {
  state: State;
};

const Player = (props: PropsType) => {
  // console.log("Player", props);
  // console.log("Player###", props.state);
  const [played, setPlay] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [imgRotate, setImgRotate] = useState(true);
  const [item, setItem] = useState(props.state.selectedTrack);

  const track = props.state.selectedTrack;
  // console.log(currentTime = 150);

  const playPauseRef = useRef(document.createElement("audio"));

  //console.log("TRACK", props.state.selectedTrack);
  //console.log(played);

  useEffect(() => {
    const soundTime: any = playPauseRef.current;
    soundTime.addEventListener("timeupdate", (event: any) => {
      setCurrentTime(event.target.currentTime);
      setDuration(event.target.duration);
    });
  }, []);

  useEffect(() => {
    setItem(props.state.selectedTrack);
    if (item) {
      setImgRotate(true);
      setPlay(true);
    }
  }, [props.state.selectedTrack, item]);

  const playSound = () => {
    playPauseRef.current.play();
    setImgRotate(false);
    setPlay(false);
  };

  const stopSound = () => {
    playPauseRef.current.pause();
    setImgRotate(true);
    setPlay(true);
  };

  const selectCurrentTime = (event: any) => {
    return setCurrentTime(event.currentTarget.value);
  };

  function getTime(time: number) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  }

  return (
    <div className="player-wrapper">
      <audio ref={playPauseRef} src={track}>
        <source src={track} type="audio/mpeg" />
      </audio>
      <div
        className={imgRotate ? "player-wrapper__img" : "player-wrapper__rotate"}
      >
        {!props.state.cover ? (
          "NO TRACK SELECTED"
        ) : (
          <>
            <img src={props.state.cover} alt="cover" /> <span></span>
          </>
        )}
      </div>

      <div className="player-wrapper__btns">
        <div className="player-wrapper__timeline">
          <Slider
            max={duration}
            //value={currentTime}
            aria-labelledby="continuous-slider"
            onChange={selectCurrentTime}
            style={{ padding: "6px 0", color: "#fff", marginTop: "10px" }}
          />
          <span className="player-wrapper__timeline-time">
            {getTime(currentTime)}/{getTime(duration)}
          </span>
        </div>
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
