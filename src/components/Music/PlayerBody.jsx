import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from "@material-ui/icons/Add";
import cover from "../../assets/images/player/Avicii.png";

const PlayerBody = (props) => {
  return (
    <div className="playerbody-wrapper">
      <div className="playerbody-wrapper__header">
        <FavoriteBorderIcon style={{ fontSize: 19, width: "42%",cursor:'pointer' }} />
        <AddIcon style={{ fontSize: 19, width: "41%",cursor:'pointer' }} />
      </div>
      <div className="playerbody-wrapper">
        <div className="playerbody-wrapper__bg"></div>
        <div className="playerbody-wrapper__image">
          <img src={cover} alt="album" />
        </div>
      </div>
    </div>
  );
};

export default PlayerBody;
