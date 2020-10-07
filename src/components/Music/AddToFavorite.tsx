import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

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
  const [showFav, setShowFav] = useState(false);

  const toggleBtn = () => {
    setShowFav(!showFav);
  };

  const favoriteList = favorite.map((item: any) => (
    <div
      className="list-wrapp__list"
      key={item.id}
      onClick={() => addSong(item.song, item.cover)}
    >
      <DeleteForeverRoundedIcon className="list-wrapp__list__icon"/>
      <img src={item.cover} alt="cover" />
    </div>
  ));

  return (
    <>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => toggleBtn()}
      >
        <BookmarkBorderRoundedIcon fontSize='inherit'/>
      </Button>
      <div
        className={
          showFav ? "favoriteSongs-wrapp__show" : "favoriteSongs-wrapp"
        }
      >
        <h3>FAVORITE SONGS LIST</h3>
        <div className="list-wrapp">{favoriteList}</div>
      </div>
    </>
  );
};

export default AddToFavorite;
