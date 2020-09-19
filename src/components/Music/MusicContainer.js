import React from "react";
import { musicSelector } from "../Redux/Selectors/music-selector";
import { connect } from "react-redux";
import {setText} from '../Redux/music-reducer';

import PlayList from './PlayList';

class MusicContainer extends React.Component {
  state = {
    selectedTrack: 1,
  };
  

  render() {
    console.log(this.state.selectedTrack);
    console.log(this.props);

    const list = this.props.songList.map((item, i) => (
      <div key={i} onClick={() => this.setState({ selectedTrack: item.id })}>
        <img src={item.cover} alt="cover" style={{width:'30%'}}/>
      </div>
    ));

    return (
      <div className="player-wrapper">
        
       {list}
       <PlayList state={this.state}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // counter:counterSelector(state)
    songList: musicSelector(state),
    text:state.music.text
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
