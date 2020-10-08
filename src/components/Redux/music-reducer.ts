import { SongsType, FavoriteType, SongItemType } from './../../Types/Types';
import cover1 from "../../assets/images/player/Avicii.png";
import cover2 from "../../assets/images/player/ritaOra.jpg";
import cover3 from "../../assets/images/player/brokenArrows.jpg";
import cover4 from "../../assets/images/player/DirtFGL.jpg";
import cover5 from "../../assets/images/player/something.jpg";

const TheDays = require( "../../assets/musicTest/TheDays.mp3");
const AviciifeatRitaOra= require("../../assets/musicTest/LonelyTogether.mp3");
const BrokenArrows=require ( "../../assets/musicTest/Broken Arrows.mp3");
const Dirt=require ( "../../assets/musicTest/Florida Georgia Line - Dirt.mp3");
const TheChainsmokers=require ( '../../assets/musicTest/The Chainsmokers & Coldplay - Something Just Like This.mp3');

const ADD_SONGS = "ADD_SONGS";
const DELETE_SONGS = "DELETE_SONGS";

const initialState = {
  songs: [
    {
      id: 1,
      artist: "Avicii",
      name: "TheDays",
      cover: cover1,
      bg: cover1,
      song: TheDays,
      playerBg: "#7d68c4",
    },
    {
      id: 2,
      artist: "Avicii feat. Rita Ora",
      name: "Lonely Together (DJ Licious Remix)",
      cover: cover2,
      bg: cover2,
      song: AviciifeatRitaOra,
      playerBg: "#e2ad5c",
    },
    {
      id: 3,
      artist: "Avicii feat. Zac Brown Band",
      name: "Broken Arrows",
      cover: cover3,
      bg: cover3,
      song: BrokenArrows,
      playerBg: "#e2ad5c",
    },
    {
      id: 4,
      artist: "Florida Georgia Line",
      name: "Dirt",
      cover: cover4,
      bg: cover4,
      song: Dirt,
      playerBg: "#e2ad5c",
    },
    {
      id: 5,
      artist: "The Chainsmokers & Coldplay",
      name: "Something Just Like This",
      cover: cover5,
      bg: cover5,
      song: TheChainsmokers,
      playerBg: "#e2ad5c",
    },
  ] as Array<SongsType>,
  favorite: []as Array<FavoriteType>,
};

type InitialStateType = typeof initialState;

const musicReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case ADD_SONGS: {
      // const songItem = {
      //   id: action.id,
      //   artist: "artist",
      //   cover: "cover",
      //   name: "name",
      //   song: "song",
      // };

      const removeDuplicates = new Set(state.favorite.map((item) => item.id));
      if (removeDuplicates.has(action.songItem.id)) {
        return state;
      }

      return {
        ...state,
        favorite: state.favorite.concat(action.songItem),
      };
    }
    case DELETE_SONGS:{
      return{
        ...state,
        favorite: [...state.favorite.filter(item=>item.id !== action.id)]

      }
    }

    default:
      return state;
  }
};

type AddSongsToFavoriteType ={
  type:typeof ADD_SONGS,
   songItem: SongItemType
}

export const addSongsToFavorite = (id:number, artist:string, name:string, song:string, cover:string):AddSongsToFavoriteType => {
  return { type: ADD_SONGS, songItem: { id, artist, name, song, cover } };
};

type DeleteSongFromFavoriteType={
  type:typeof DELETE_SONGS,
  id:number
}

export const deleteSongFromFavorite=(id:number):DeleteSongFromFavoriteType=>{
  return{type:DELETE_SONGS,id}

}

export default musicReducer;
