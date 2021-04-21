export const getNewsSelector=(state)=>{
    return state.newsPage.articles;
}

export const getIsFetching=(state)=>{
    return state.newsPage.isFetching;
}

