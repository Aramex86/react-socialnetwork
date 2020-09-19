import cover1 from "../../assets/images/player/Avicii.png";
import cover2 from "../../assets/images/player/ritaOra.jpg";
import TheDays from "../../assets/musicTest/TheDays.mp3";
import AviciifeatRitaOra  from '../../assets/musicTest/Avicii feat. Rita Ora - Lonely Together (DJ Licious Remix).mp3'

const COUNTER_MINUS = "COUNTER_MINUS";
const COUNTER_PLUS = "COUNTER_PLUS";
const PAUSE_SONG = "PAUSE_SONG";
const MOVE_RIGTH_SONG = "MOVE_RIGTH_SONG";
const MOVE_LEFT_SONG = "MOVE_LEFT_SONG";
const PLAYED_SONGS = 'PLAYED_SONGS';
const TEXT = 'TEXT';

const initialState = {
  songs: [
    {
      id: 1,
      artist:'Avicii',
      name: "TheDays",
      cover: cover1,
      bg: cover1,
      song: TheDays,
      playerBg: "#7d68c4",
    },
    {
      id: 2,
      artist:'Avicii feat. Rita Ora',
      name: "Lonely Together (DJ Licious Remix)",
      cover: cover2,
      bg: cover2,
      song: AviciifeatRitaOra,
      playerBg: "#e2ad5c",
    },
  ],
};


const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYED_SONGS:{
  return{
   
  }
}  
   


// case COUNTER_MINUS: {
    //   return {
    //     ...state,
    //     counter:state.counter -1,
    //   };
    // }
    // case COUNTER_PLUS: {
    //   return {
    //     ...state,
    //     counter:state.counter +1,
    //   };
    // }
    default:
      return state;
  }


};



//Action  creators
// export const getCounterMinus=()=>{
//   return{type:COUNTER_MINUS}
// }
// export const getCounterPlus=()=>{
//   return{type:COUNTER_PLUS}
// }
export const getPlayedMusic=()=>{
  return{type:PLAYED_SONGS}
}

export const setText=()=>{
  return{type:TEXT}
}


export default musicReducer;
