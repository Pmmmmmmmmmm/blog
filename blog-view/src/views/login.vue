<template>
  <div class="login-page" @keyup.enter="login">
    <div class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="ruleForm.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="passWord">
          <el-input
            v-model="ruleForm.passWord"
            size="medium"
            type="passWord"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码:" prop="verification" class="verification">
          <el-input v-model="ruleForm.verification" size="medium"></el-input>
          <img
            :src="src"
            class="verification-img"
            @click="getImg"
            v-show="isImgShow"
          />
        </el-form-item>
        <div class="btn">
          <el-button type="primary" size="medium" @click="login"
            >LOGIN</el-button
          >
        </div>
        <router-link class="register" to="">register</router-link>
      </el-form>
    </div>

    <div class="img" :class="{ isShow: isShow }">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>
<script>
import { login, getCaptcha, getBCG } from "@/api/login.js";
import { Encrypt } from "../utils/secret.js";
export default {
  name: "login",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        passWord: "",
        verification: "",
      },
      src: "",
      imgSrc: "",
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "change" }],
        passWord: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        verification: [
          { required: true, message: "请输入验证码 ", trigger: "change" },
        ],
      },
      isImgShow: false,
      isShow: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    getCaptcha() {
      getCaptcha()
        .then((response) => {
          return (
            "data:image/png;base64," +
            btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )
          );
        })
        .then((data) => {
          this.src = data; //data可以直接放到img标签的src中
          this.isImgShow = true;
        });
    },
    // 登录
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // 加密
          let loginData = Encrypt(JSON.stringify(this.ruleForm));
          login({ loginData }).then((res) => {
            if (res.data.code === 1) {
              // 登录成功后获取token
              sessionStorage.token = res.data.token;
              this.$notify({
                message: res.data.msg,
                type: "success",
              });
              // 自动跳转到主页
              this.$router.push("/home");
            } else if (res.data.code === 0) {
              // 重新获取验证码图片
              this.getCaptcha();
              this.$notify.error({
                message: res.data.msg,
              });
            }
          });
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取背景图片
    getBCG() {
      getBCG()
        .then((response) => {
          return (
            "data:image/png;base64," +
            btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )
          );
        })
        .then((data) => {
          this.imgSrc = data; //data可以直接放到img标签的src中
          setTimeout(() => (this.isShow = true), 0);
        });
    },
  },
  created() {
    // 验证是否已经登录

    if (sessionStorage.token != undefined) {
      this.$router.replace("/home");
    }
    this.getCaptcha();
    this.getBCG();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
.login-page {
  min-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #e6f5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    flex: 1;
    transform: translateY(-20%);
    display: flex;
    justify-content: center;
    align-items: center;
    .demo-ruleForm {
      max-width: 20vw;
      min-width: 350px;
      margin: 0 20px;

      @include commonBox;

      .verification ::v-deep .el-form-item__content {
        display: flex;
        align-items: center;
        .el-input {
          flex: 1;
        }
        .verification-img {
          width: 80px;
          margin: 0 0 0 10px;
        }
      }

      .el-form-item {
        margin: 0 20px 20px 10px;
      }
      .btn {
        margin: 25px 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .el-button {
          width: 85%;
        }
      }
      .register {
        display: block;
        margin: 10px 0 0 0;
        width: 100%;
        font-size: 1px;
        text-align: center;
        text-decoration: none;
        color: #909399;
      }
    }
  }
  .img {
    width: 0%;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    & > img {
      width: fit-content;
      height: 100%;
    }
  }
  .isShow {
    width: 72%;
    transition: width 1s ease;
  }
}
</style>
