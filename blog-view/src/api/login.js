import axios from "../untils/request";
// import QS from "qs";
// import base from "../untils/base";

/**
 * post方法，对应post请求
 * @desc注册请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosTest(data) {
  return axios({
    url: "proxy/users/getToken",
    method: "post",
    data,
  });
}
