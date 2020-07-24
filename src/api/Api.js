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
};

export const authAPI = {
  setAuth() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
