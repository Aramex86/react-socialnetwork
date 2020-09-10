import cover from "../../assets/images/player/Avicii.png";
import TheDays from "../../assets/musicTest/TheDays.mp3";
import AviciifeatRitaOra  from '../../assets/musicTest/Avicii feat. Rita Ora - Lonely Together (DJ Licious Remix).mp3'

const PLAY_SONG = "PLAY_SONG";
const PAUSE_SONG = "PAUSE_SONG";
const MOVE_RIGTH_SONG = "MOVE_RIGTH_SONG";
const MOVE_LEFT_SONG = "MOVE_LEFT_SONG";

const initialState = {
  songs: [
    {
      id: 1,
      name: "Avicii",
      cover: cover,
      bg: cover,
      song: TheDays,
      playerBg: "#e2ad5c",
    },
    {
      id: 2,
      name: "Avicii",
      cover: cover,
      bg: cover,
      song: AviciifeatRitaOra,
      playerBg: "#e2ad5c",
    },
  ],

  counter:0,

};


const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG: {
      return {
        ...state,
        songs:[Object.values(...state.songs)]
      };
    }
    case MOVE_RIGTH_SONG:{
        return{
            ...state,
            
        }
    }
    case MOVE_LEFT_SONG:{
        return{
            ...state,
            counter:state.counter-1
        }
    }
    default:
      return state;
  }
};

//Action  creators

export const playSong = () => {
  return { type: PLAY_SONG };
};

export const moveRigth=()=>{
    return{ type: MOVE_RIGTH_SONG}
}
export const moveLeft=()=>{
    return{ type: MOVE_LEFT_SONG}
}

export default musicReducer;
