import * as axios from "axios";
// 1) Create the instance Options
const instance = axios.create({
  //option permision
  withCredentials: true,
  
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  //headers api
  headers: {
    "API-KEY": "3cbba7a4-ece5-49a7-bc29-e1705c0d4fa1",
  },
});

const instanceNews = axios.create({

withCredentials:true,

baseURL:'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=050a8dc039ff4b9e81bea7ad19bab7ce',

});


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => {
        return res.data;
      });
  },

  getPages(pageNumber, pageSize) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => {
        return res.data;
      });
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then((res) => {
      return res.data;
    });
  },

  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`/profile/status/`, { status: status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();

    formData.append('image',photoFile)
    return instance.put(`/profile/photo/`, formData,{
      headers:{
        'Content-Type':'multipart/term-data'
      }
    });
  },
  saveProfile(profile){
    return  instance.put('profile',profile);
  }
};

export const authAPI = {
  setAuth() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false,captcha=null) {
    return instance.post("auth/login", { email, password, rememberMe,captcha });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const securityApi={
  getCaptchaUrl(){
    return instance.get('security/get-captcha-url');
  }
}

//News request



// const  newsURL='http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=050a8dc039ff4b9e81bea7ad19bab7ce'

// export const newsApi ={

//   getNews(){
//     return instanceNews.get();
//   }
// }

