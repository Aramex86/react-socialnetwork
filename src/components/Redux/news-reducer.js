//import {newsApi} from '../../api/Api';

const GET_NEWS = 'GET_NEWS';

const initialSatate= {
    articles:[]
}


const newsReducer = (state = initialSatate,action)=>{
    switch(action.type){
        case GET_NEWS:{
            return{
                ...state,
                articles: action.articles
            }
        }
        default:
            return state;
    }
};

export const getNews=(articles)=>{
    return{type:GET_NEWS, articles}
};

// export const getNewsRequest = ()=> async(dispatch)=>{
//     const res = await newsApi;
//     dispatch(getNews(res.articles));

// };


export default newsReducer;