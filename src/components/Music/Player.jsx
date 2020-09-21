import React from 'react';
import song from '../../assets/musicTest/TheDays.mp3';

const Player = (props) => {
    //console.log('Player',props);
    console.log('Props##',props.state)
    
   
    
    //console.log('song',song)
    
    const handlerSongValue=()=>{
        console.log('some value')
    }

    return (
        <div className="player-wrapper">
            <audio controls>
            <source src={song} type="audio/mpeg"></source>
            <source src={song} type="audio/ogg"></source>
            </audio>
            <h1>Player Wrapper</h1>
            <button>play</button>
           <input type="range" min='10' max='100' onChange={()=>handlerSongValue()}/>
        </div>
    )
}

export default Player
