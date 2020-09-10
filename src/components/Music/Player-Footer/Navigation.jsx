import React, { Component } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseIcon from "@material-ui/icons/Pause";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
//import track from "../../../assets/musicTest/TheDays.mp3";
import useSound from 'use-sound';

// const PlayPauseBtn=(props)=>{
//   console.log(props)
//    const[play,{stop}]=useSound(props.music.song);
   


//   const[pause, setPause]=React.useState(true);

//   const playBtn=()=>{
//     setPause(false);
//     play();
//   }

//   const pauseBtn=()=>{
//     setPause(true);
//     stop();
//   }
  
//   return(
//   <div>{pause? <PlayCircleOutlineIcon onClick={playBtn}/>:<PauseIcon onClick={pauseBtn}/>}</div>
//   )


// }


// const Musicnavigation = ({music,playMusic,moveRigth,moveLeft}) => {
//   const [showTrack, setShowTrack] = React.useState(false);
 



//   const activateTrackBar = () => {
//     setShowTrack(false);
//   };

//   const deactivateTrackBar = () => {
//     setShowTrack(true);
//   };

//   const changeProgressBar = (value) => {
//     console.log("change value:", value);
//   };

//   ///
//   // const play=(song)=>{
//   //   playMusic(song);
//   // }

//   const next = () => {
//     console.log("nextbtn");
//     moveRigth();
    
//   };
//   const prev = () => {
//     console.log("prevbtn");
//     moveLeft();
   
//   };
 
//   const random = () => {
//     console.log("randombtn");
//   };

//   return (
//     <div className="playernavigation-wrapper">
//       <div className="playernavigation-wrapper__header">
//         {showTrack ? (
//           <>
//             <KeyboardArrowDownIcon onClick={activateTrackBar} />
//             <div className="playernavigation-wrapper__header-track playernavigation-wrapper__header-track-show">
//               <input
//                 type="range"
//                 id="progress-bar"
//                 min="0"
//                 max="100"
//                 //value="0"
//                 onChange={changeProgressBar()}
//               />
//             </div>
//           </>
//         ) : (
//           <>
//             <KeyboardArrowUpIcon onClick={deactivateTrackBar} />
//             <div className="playernavigation-wrapper__header-track playernavigation-wrapper__header-track-hide"></div>
//           </>
//         )}
//         {/* <div className="playernavigation-wrapper__header-track-hide">
//           <input
//             type="range"
//             id="progress-bar"
//             min="0"
//             max="100"
//             //value="0"
//             onChange={changeProgressBar()}
//           />
//         </div> */}
//       </div>

//       {/* <audio id="tracksong">
//         <source src={song} type="audio/mpeg"></source>
//       </audio> */}
//       <div className="playernavigation-wrapper__nav">
//         <ShuffleIcon style={{ gridColumn: "1/1" }} onClick={random} />
//         <FastRewindIcon style={{ gridColumn: "2/2" }} onClick={prev} />
//         <PlayPauseBtn music={music} playMusic={playMusic}/>
//         <FastForwardIcon style={{ gridColumn: "4/4" }} onClick={next} />
//       </div>
//     </div>
//   );
// };

// export default Musicnavigation;


class Musicnavigation extends Component{

  render(){
    return(
      <div className="playernavigation-wrapper">
      <div className="playernavigation-wrapper__header">
        {/* {showTrack ? (
          <>
            <KeyboardArrowDownIcon onClick={activateTrackBar} />
            <div className="playernavigation-wrapper__header-track playernavigation-wrapper__header-track-show">
              <input
                type="range"
                id="progress-bar"
                min="0"
                max="100"
                //value="0"
                onChange={changeProgressBar()}
              />
            </div>
          </>
        ) : (
          <>
            <KeyboardArrowUpIcon onClick={deactivateTrackBar} />
            <div className="playernavigation-wrapper__header-track playernavigation-wrapper__header-track-hide"></div>
          </>
        )} */}
        {/* <div className="playernavigation-wrapper__header-track-hide">
          <input
            type="range"
            id="progress-bar"
            min="0"
            max="100"
            //value="0"
            onChange={changeProgressBar()}
          />
        </div> */}
      </div>

      {/* <audio id="tracksong">
        <source src={song} type="audio/mpeg"></source>
      </audio> */}
      <div className="playernavigation-wrapper__nav">
        <ShuffleIcon style={{ gridColumn: "1/1" }}  />
        <FastRewindIcon style={{ gridColumn: "2/2" }}  />
        <PlayCircleOutlineIcon />
        <FastForwardIcon style={{ gridColumn: "4/4" }}  />
      </div>
    </div>
    )
  }

}

export default Musicnavigation;