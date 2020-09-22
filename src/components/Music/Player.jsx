import React from "react";
//import song from '../../assets/musicTest/TheDays.mp3';

const Player = (props) => {
  console.log('Player',props);
  console.log("Player###", props.state);
  const track = Object.values(props.state).map((track) => track);

  console.log("TRACK", track[0]);

  const playSong = new Audio(track);

  const handlePlay = () => {
    playSong.play();
  };

  const stopPlay=()=>{
      playSong.pause();
  }


  return (
    <div className="player-wrapper">
      <audio>
        <source src={track} type="audio/mpeg"></source>
        <source src={track} type="audio/ogg"></source>
      </audio>

      <h1>Player Wrapper</h1>
      <button onClick={() => handlePlay()}>play</button>
      <button onClick={() => stopPlay()}>stop</button>
    </div>
  );
};

export default Player;
