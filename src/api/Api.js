import * as axios from "axios";
// 1) Create the instance Options
const instance = axios.create({
  //option permision
  withCredentials: true,

  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  //headers api
  headers: {
    "API-KEY": "8c823512-6149-48ff-94c9-511079e6b0c0",
  },
});

const options = {
  method: 'GET',
  url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey',
  headers: {
    'x-rapidapi-key': 'b400990badmsh2e90a029187c53bp11fc28jsn0d9974984aaf',
    'x-rapidapi-host': 'google-news.p.rapidapi.com'
  }
};

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
  getSideBar(userId) {
    return instance.get(`/profile/${userId}`).then((res) => {
      return res.data;
    });
  },

  getProfile(userId) {
    return instance
      .get(`/profile/${userId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
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

    formData.append("image", photoFile);
    return instance.put(`/profile/photo/`, formData, {
      headers: {
        "Content-Type": "multipart/term-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put("profile", profile);
  },
};

export const authAPI = {
  setAuth() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const securityApi = {
  getCaptchaUrl() {
    return instance.get("security/get-captcha-url");
  },
};

//News request

//const  proxy_url = 'https://cors-anywhere.herokuapp.com/';
//WgdjCCubBiqsqHXgExjLyTLGk9Fc9cp9

export const newsRequest = () => {
  return axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=WgdjCCubBiqsqHXgExjLyTLGk9Fc9cp9`).then(function (response) {
    return response.data.results
  }).catch(function (error) {
    console.error(error);
  });
};
