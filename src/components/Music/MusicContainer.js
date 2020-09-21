import React from "react";
import { musicSelector } from "../Redux/Selectors/music-selector";
import { connect } from "react-redux";

import PlayList from "./PlayList";
import Player from './Player';

class MusicContainer extends React.Component {
  state = {
    selectedTrack: null,
  };

  addSongsToState = (song) => {
    this.setState({
      selectedTrack:song,
    });
  };

  render() {
    console.log(this.state.selectedTrack);
    // console.log(this.props);

    const songList = this.props.songList.map((item) => (
      <PlayList
        key={item.id}
        name={item.name}
        cover={item.cover}
        song={item.song}
        artist={item.artist}
        addSong={this.addSongsToState}
      />
    ));

    return <div className="player-wrapper">
      <Player props={this.props.songList} state={this.state}/>
      {songList}
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    // counter:counterSelector(state)
    songList: musicSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setCounterMinus:()=>{
    //   dispatch(getCounterMinus())
    // },
    // setCounterPlus:()=>{
    //   dispatch(getCounterPlus())
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);
