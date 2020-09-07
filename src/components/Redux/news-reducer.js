import {newsRequest} from '../../api/Api';

const GET_NEWS = 'GET_NEWS';
const FETCHING_NEWS_REQUEST = 'FETCHING_NEWS_REQUEST';

const initialSatate= {
    //isFetching:false,
    articles:[]
}


const newsReducer = (state = initialSatate,action)=>{
    switch(action.type){
        case  FETCHING_NEWS_REQUEST:{
            return{
                ...state,
                payload:state.isFetching
            }
        }
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

export const isFetchingRequest=(isFetching)=>{
    return{type:FETCHING_NEWS_REQUEST,isFetching}
}

// Thunck 
export const getNewsRequest = ()=> async(dispatch)=>{
    const res = await newsRequest();
    dispatch(getNews(res.articles));
};


export default newsReducer;