import cover1 from "../../assets/images/player/Avicii.png";
import cover2 from "../../assets/images/player/ritaOra.jpg";
import cover3 from "../../assets/images/player/brokenArrows.jpg";
import cover4 from "../../assets/images/player/DirtFGL.jpg";
import cover5 from "../../assets/images/player/something.jpg";
import TheDays from "../../assets/musicTest/TheDays.mp3";

import AviciifeatRitaOra from "../../assets/musicTest/LonelyTogether.mp3";
import BrokenArrows from "../../assets/musicTest/Broken Arrows.mp3";
import Dirt from "../../assets/musicTest/Florida Georgia Line - Dirt.mp3";
import TheChainsmokers from '../../assets/musicTest/The Chainsmokers & Coldplay - Something Just Like This.mp3';

const ADD_SONGS = "ADD_SONGS";

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
  ],
  favorite: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS: {
      const songItem = {
        id: action.id,
        artist: "artist",
        cover: "cover",
        name: "name",
        song: "song",
      };

      const removeDuplicates = new Set(state.favorite.map((item) => item.id));
      if (removeDuplicates.has(action.songItem.id)) {
        return state;
      }

      return {
        ...state,
        favorite: state.favorite.concat(action.songItem),
      };
    }

    default:
      return state;
  }
};

export const addSongsToFavorite = (id, artist, name, song, cover) => {
  return { type: ADD_SONGS, songItem: { id, artist, name, song, cover } };
};

export default musicReducer;
