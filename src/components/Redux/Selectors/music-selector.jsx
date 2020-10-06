import{createSelector} from 'reselect';


//favorite List
export const favoriteSelector=(state)=>{
        return state.music.favorite;
}

// export const getFavorite= createSelector(favoriteSelector,(favorite)=>{
//     return favorite.filter(f => true);
//   });


//Song List
export const musicSelector=(state)=>{
    return state.music.songs;
}