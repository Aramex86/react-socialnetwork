import React from "react";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

//PUT SONG IN FAVORITE

const addToFavorite=()=>{
  console.log('Add to favorite');
}


const PlayList = ({ name, cover, song, state, artist, addSong, playerBg }) => {
  //    console.log(name, cover, song, state, artist,addSong);

  return (
    <div className="song-wrapp" onClick={() => addSong(song, cover, playerBg)}>
      <div className="item-container">
        <FavoriteBorderRoundedIcon onClick={addToFavorite}/>
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
