import * as axios from 'axios';
// 1) Create the instance Options
const instance = axios.create({
    //option permision
    withCredentials:true,
    //base url
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    //headers api
    headers:{
        'API-KEY':'7c327b9e-8967-4fb6-b17d-8c965ac4b753'
    }

});


export const usersAPI={
     getUsers(currentPage,pageSize){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res =>{
            return res.data;
        });
      },

      getPages(pageNumber,pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res=>{ 
            return res.data;
        });
    },
    follow(id){
        return instance.post(`follow/${id}`)
    },

    unfollow(id){
        return instance.delete(`follow/${id}`)
    }


}

export const profileAPI={
    getProfile(userId){
     return instance.get(`/profile/${userId}`).then(res =>{
         return res.data;
     })
    },
    
    getStatus(userId){
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`/profile/status/`,{status:status});
    }
}

export const authAPI={
    setAuth(){
        return instance.get('auth/me');
    }
}

