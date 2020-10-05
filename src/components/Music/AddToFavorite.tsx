import React from "react";

type FavoriteType = {
  favorite: Array<ItemType>;
  addSong: Function;
};

type ItemType = {
  id: number;
  artist: string;
  name: string;
  song: string;
  cover: string;
};

const AddToFavorite = ({ favorite, addSong }: FavoriteType) => {
  const favoriteList = favorite.map((item) => (
    <div className="list-wrapp__list" key={item.id} onClick={() => addSong(item.song, item.cover)}>
      <img src={item.cover} alt="cover" />
    </div>
  ));
  console.log("favorite", favorite);

  return (<div className="favoriteSongs-wrapp">
      <h1>FAVORITE SONGS LIST</h1>
      <div className='list-wrapp'>{favoriteList}</div>
    </div>
  );
};

export default AddToFavorite;
