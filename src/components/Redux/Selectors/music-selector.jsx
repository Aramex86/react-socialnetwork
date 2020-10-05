import{createSelector} from 'reselect';


//favorite List
export const favoriteSelector=(state)=>{
        return state.music.favorite;
}


//Song List
export const musicSelector=(state)=>{
    return state.music.songs;
}