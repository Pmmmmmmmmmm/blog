import axios from "axios";

import router from "../router/index.js";

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    let noToken = ['login', 'getImg']
    let target = config.url.split('/')
    if (!noToken.includes(target[target.length - 1])) {
      //设置请求头
      if (sessionStorage.token) {
        config.headers.Authorization = sessionStorage.token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 获取状态码
    const { status } = error.response;

    if (status === 401) {
      alert("请重新登录");
      //清楚token
      localStorage.removeItem("eToken");
      //跳转到登录页面
      router.push("/login");
    }
    return Promise.reject(error);
  }
);
export default axios;
