import React from "react";
import PlayerHeader from "./Player-Header/PlayerHearder";
import PlayerBody from "./PlayerBody";
import PlayerFooter from "./Player-Footer/PlayerFooter";
import {
  musicSelector,
  counterSelector,
} from "../Redux/Selectors/music-selector";
import { playSong, moveRigth, moveLeft } from "../Redux/music-reducer";
import { connect } from "react-redux";

const Music = (props) => {
  return (
    <div className="player-wrapper">
      <PlayerHeader />
      <PlayerBody />
      <PlayerFooter
        music={props.music}
        playMusic={props.playMusic}
        moveRigth={props.moveRigth}
        moveLeft={props.moveLeft}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    music: musicSelector(state),
    counter: counterSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playMusic: () => {
      dispatch(playSong());
    },

    moveRigth: () => {
      dispatch(moveRigth());
    },
    moveLeft: () => {
      dispatch(moveLeft());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);
