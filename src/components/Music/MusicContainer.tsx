import React from "react";
import {
  musicSelector,
  favoriteSelector,
} from "../Redux/Selectors/music-selector";
import { addSongsToFavorite, deleteSongFromFavorite } from "../Redux/music-reducer";
import { connect } from "react-redux";

import PlayList from "./PlayList";
import Player from "./Player";
import AddToFavorite from "./AddToFavorite";

import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import { compose } from "redux";
import { withRouter } from "react-router";
import WithAuthRedirect from "../HOC/WithAuthRedirect";

type IProps = {
  songList: Array<string>
  favorite: Array<any>
  addSong: Function
  addSongTo: Function
  deleteSong:Function
};
type State = {
  selectedTrack: string | undefined;
  grid: boolean;
  playerBg: string | null;
  cover: string | null;
};
// type IState = {
//   state: { [key: string]: State };
// };

class MusicContainer extends React.Component<IProps, State> {
  state: State = {
    selectedTrack: "",
    grid: false,
    playerBg: null,
    cover: null,
  };

  addSongsToState = (song: string, cover: string, playerBg: string) => {
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
    //console.log(this.props);

    const songList = this.props.songList.map((item: any) => (
      <PlayList
        id={item.id}
        key={item.id}
        name={item.name}
        cover={item.cover}
        song={item.song}
        //state={this.state}
        artist={item.artist}
        playerBg={item.playerBg}
        addSong={this.addSongsToState}
        addSongToFavorite={this.props.addSongTo}
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
          <AddToFavorite
            favorite={this.props.favorite}
            addSong={this.addSongsToState}
            deleteSong={this.props.deleteSong}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: object) => {
  return {
    favorite: favoriteSelector(state),
    songList: musicSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addSongTo: (
      id: number,
      artist: string,
      name: string,
      song: string,
      cover: string
    ) => {
      dispatch(addSongsToFavorite(id, artist, name, song, cover));
    },
    deleteSong:(id:number)=>{
      dispatch(deleteSongFromFavorite(id));
    }
    // setCounterMinus:()=>{
    //   dispatch(getCounterMinus())
    // },
    // setCounterPlus:()=>{
    //   dispatch(getCounterPlus())
    // },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(MusicContainer);


