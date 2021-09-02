module.exports = {
  devServer: {
    proxy: {
      "/proxy": {
        target: "http://localhost:3001/", //跨域的域名
        changeOrigin: true, //是否开启跨域
        pathRewrite: {
          "^/proxy": "", // 重写地址
        },
      },
    },
  },
};
