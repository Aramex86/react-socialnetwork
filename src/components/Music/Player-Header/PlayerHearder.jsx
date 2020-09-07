import React from 'react';
import Showinfo from './ShowInfo';
import AddToPlayList from './AddToPlayList';

const PlayerHearder = (props) => {
    return (
        <div className="player-header">
            <div className="player-header__title"><h2>Your Library</h2></div>
            <Showinfo/>
            <AddToPlayList/>
        </div>
    )
}

export default PlayerHearder;
