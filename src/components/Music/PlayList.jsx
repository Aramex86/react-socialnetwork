import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

//PUT SONG IN FAVORITE




const PlayList = ({id, name, cover, song, state, artist, addSong, playerBg,...props}) => {
  return (
    <div className="song-wrapp" onClick={() => addSong(song, cover, playerBg)}>
      <div className="item-container">
        <AddCircleOutlineIcon onClick={()=>props.addSongto(id,artist,name,song)}/>
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
