import {newsRequest} from '../../api/Api';
import { NewsArticalsType } from '../../Types/Types';

const GET_NEWS = 'GET_NEWS';
const FETCHING_NEWS_REQUEST = 'FETCHING_NEWS_REQUEST';

const initialSatate= {
    //isFetching:false,
    articles:[] as Array<NewsArticalsType>,
    isFetching:false
}

type InitialStateType = typeof initialSatate;
const newsReducer = (state = initialSatate,action:any):InitialStateType=>{
    switch(action.type){
        case  FETCHING_NEWS_REQUEST:{
            return{
                ...state,
                isFetching:action.isFetching
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

type GetNewsType={
    type:typeof GET_NEWS,
    articles:Array<NewsArticalsType>
}

export const getNews=(articles:Array<NewsArticalsType>):GetNewsType=>{
    return{type:GET_NEWS, articles}
};

type IsFetchingRequestType={
    type:typeof FETCHING_NEWS_REQUEST,
    isFetching:boolean
}

export const isFetchingRequest=(isFetching:boolean):IsFetchingRequestType=>{
    return{type:FETCHING_NEWS_REQUEST,isFetching}
}

// Thunck 
export const getNewsRequest = ()=> async(dispatch:any)=>{
    const res = await newsRequest();
    dispatch(getNews(res.articles));
};


export default newsReducer;