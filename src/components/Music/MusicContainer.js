import React from "react";
import { musicSelector } from "../Redux/Selectors/music-selector";
import { connect } from "react-redux";

import PlayList from "./PlayList";
import Player from "./Player";

import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";

class MusicContainer extends React.Component {
  state = {
    selectedTrack: null,
    grid: false,
  };

  addSongsToState = (song, cover) => {
    this.setState({
      selectedTrack: song,
      cover: cover,
    });
  };

  swhichGrid = () => {
    this.setState({
      grid: true,
    });
    console.log("click");
  };
  swhichList = () => {
    this.setState({
      grid: false,
    });
    console.log("click");
  };

  render() {
    //console.log(this.state.selectedTrack);
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

    return (
      <div className="player-page">
        <Player state={this.state} />
        <div className="switchLayout-btn">
          <AppsOutlinedIcon onClick={this.swhichGrid}/>
          <FormatListBulletedRoundedIcon onClick={this.swhichList} />
        </div>
        <div className={this.state.grid?'items-wrapp__grid':'items-wrapp'}>{songList}</div>
      </div>
    );
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
