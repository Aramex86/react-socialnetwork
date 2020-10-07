import { FriendsType, ProfileType } from './../../Types/Types';
import { profileAPI } from "../../api/Api";
const SET_SIDEBAR_USER_PROFILE = "SET_SIDEBAR_USER_PROFILE";




let initialState = {
    friends: [
        {
            name: 'Sveta',
            img: 'https://randomuser.me/api/portraits/women/57.jpg'
        },
        {
            name: 'Misha',
            img: 'https://randomuser.me/api/portraits/men/76.jpg'
        },
        {
            name: 'Olga',
            img: 'https://randomuser.me/api/portraits/women/88.jpg'
        }
    ] as Array<FriendsType>,
    profile:null,
};

type InitialStatetype = typeof initialState;
const sideBarReducer=(state=initialState,action:any):InitialStatetype=>{
            switch(action.type){
                case SET_SIDEBAR_USER_PROFILE:{
                 return{
                    ...state,
                    profile:action.profile
                 }   

                }
                default:
                    return state
            }
           
}

type SetSideBarUserProfileType={
    type:typeof SET_SIDEBAR_USER_PROFILE,
     profile:ProfileType
}

export const setSideBarUserProfile=(profile:ProfileType)=>{
    return{type:SET_SIDEBAR_USER_PROFILE, profile}
}

export const getSideBar = (userId:number)=> async (dispatch:any)=>{
    const res = await profileAPI.getSideBar(userId);
    console.log(res)
    dispatch(setSideBarUserProfile(res));

}



export default sideBarReducer;