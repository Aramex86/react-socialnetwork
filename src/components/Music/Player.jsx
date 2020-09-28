import React, { useState, useRef, useEffect } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";
//import song from "../../assets/musicTest/TheDays.mp3";

const Player = (props) => {
  // console.log("Player", props);
  // console.log("Player###", props.state);
  const [played, setPlay] = useState(true);
  const [currentTime,setCurrentTime]=useState(0);
  const [duration,setDuration]=useState(0);

  console.log(currentTime);
  console.log(duration);

  const track = props.state.selectedTrack;

  //const playSong = new Audio(track);
  const playPauseRef = useRef(null);


  //console.log("TRACK", props.state.selectedTrack);
  //console.log(played);

  useEffect(() => {
    const soundTime = playPauseRef.current;
    soundTime.addEventListener('timeupdate',e=>{
        setCurrentTime(e.target.currentTime);
        setDuration(e.target.duration);
    });
  },[]); 

  const playSound = () => {
    playPauseRef.current.play();
    setPlay(false);
  };

  const stopSound = () => {
    playPauseRef.current.pause();
    setPlay(true);
  };

  const selectCurrentTime=(event)=>{
    setCurrentTime(event.target.value);
  }

  function getTime(time) {
    if(!isNaN(time)) {
      return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
  }

  

  return (
    <div className="player-wrapper">
      <audio ref={playPauseRef} src={track}>
        <source src={track} type="audio/mpeg" />
      </audio>
      <div className="player-wrapper__img">
        {!props.state.cover ? (
          "NO TRACK SELECTED"
        ) : (
          <>
            <img src={props.state.cover} alt="cover" /> <span></span>
          </>
        )}
      </div>

      <div className="player-wrapper__btns">
        <div>
          <input type="range"  value={currentTime} onChange={selectCurrentTime}/>
        <span>{getTime(currentTime)}/{getTime(duration)}</span>
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