import axios from "../utils/request";
// import QS from "qs";
// import base from "../utils/base";

/**
 * post方法，对应post请求
 * @desc注册请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function login(data) {
  return axios({
    url: "proxy/users/login",
    method: "post",
    data,
  });
}
export function getCaptcha() {
  return axios({
    url: "proxy/users/getVerification",
    method: "get",
    responseType: "arraybuffer",
  });
}
export function getBCG() {
  return axios({
    url: "https://source.unsplash.com/1200x750/?coding",
    method: "get",
    responseType: "arraybuffer",
  });
}
