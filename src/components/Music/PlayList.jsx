import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from '@material-ui/core/Tooltip';


const PlayList = ({
  id,
  name,
  cover,
  song,
  state,
  artist,
  addSong,
  playerBg,
  ...props
}) => {
  return (
    <div className="song-wrapp" onClick={() => addSong(song, cover, playerBg)}>
      <div className="item-container">
      <Tooltip title="Add" aria-label="add" className='item-container__tooltip'>
        <AddCircleOutlineIcon
          onClick={() => props.addSongto(id, artist, name, song)}
        />
      </Tooltip>
        
        <img src={cover} alt="cover" className="item-container__img" />
        <div className="item-container__name">
          <span className="item-container__name__artist"> {artist} </span>
          <br />
          <span className="item-container__name__songname"> {name}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
