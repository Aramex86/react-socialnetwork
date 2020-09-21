import React from "react";

const PlayList = ({ name, cover, song, state, artist, addSong }) => {
  //    console.log(name, cover, song, state, artist,addSong);

  return (
    <div className="song-wrapp" onClick={() => addSong(song)}>
      <div className="item-container">
        <img src={cover} alt="cover" className="item-container__img" />
        <div className="item-container__name">
          <span className="item-container__name__artist"> {artist} </span>
          <br />
          <span className="item-container__name__songname"> {name} </span>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
