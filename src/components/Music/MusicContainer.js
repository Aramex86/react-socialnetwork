import React from "react";
import {
  musicSelector,
  favoriteSelector,
} from "../Redux/Selectors/music-selector";
import { addSongsToFavorite } from "../Redux/music-reducer";
import { connect } from "react-redux";

import PlayList from "./PlayList";
import Player from "./Player";
import AddToFavorite from "./AddToFavorite";

import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";


class MusicContainer extends React.Component {
  state = {
    selectedTrack: null,
    grid: false,
    playerBg: null,
  };

  addSongsToState = (song, cover, playerBg) => {
    this.setState({
      selectedTrack: song,
      cover: cover,
      playerBg: playerBg,
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
  };

  render() {
    //console.log(this.state.selectedTrack);
    console.log(this.props);

    const songList = this.props.songList.map((item) => (
      <PlayList
        id={item.id}
        key={item.id}
        name={item.name}
        cover={item.cover}
        song={item.song}
        artist={item.artist}
        playerBg={item.playerBg}
        addSong={this.addSongsToState}
        addSongto={this.props.addSongTo}
      />
    ));

    return (
      <div className="player-page">
        <Player state={this.state} />
        <div className="switchLayout-btn">
          <AppsOutlinedIcon onClick={this.swhichGrid} />
          <FormatListBulletedRoundedIcon onClick={this.swhichList} />
        </div>
        <div className="bodyplayer-wrapp">
          <div
            className={this.state.grid ? "items-wrapp__grid" : "items-wrapp"}
          >
            {songList}
          </div>
            <AddToFavorite favorite={this.props.favorite}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorite: favoriteSelector(state),
    songList: musicSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongTo: (id, artist, name, song) => {
      dispatch(addSongsToFavorite(id, artist, name, song));
    },
    // setCounterMinus:()=>{
    //   dispatch(getCounterMinus())
    // },
    // setCounterPlus:()=>{
    //   dispatch(getCounterPlus())
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);
