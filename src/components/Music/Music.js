import React from 'react';
import PlayerHeader from './Player-Header/PlayerHearder';
import PlayerBody from './PlayerBody';
import PlayerFooter from './Player-Footer/PlayerFooter';

const Music = () => {
    return (
        <div className="player-wrapper">
           <PlayerHeader/>
           <PlayerBody/>
           <PlayerFooter/>
        </div>

    )
}

export default Music;