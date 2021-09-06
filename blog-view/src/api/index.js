import axios from "../utils/request";

export function getText(data) {
  return axios({
    url: "proxy/text/getText",
    method: "post",
    data,
  });
}
