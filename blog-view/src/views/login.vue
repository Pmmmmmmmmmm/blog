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
        <!-- <el-form-item label="验证码:" prop="verification" class="verification">
          <el-input v-model="ruleForm.verification" size="medium"></el-input>
          <img
            :src="src"
            class="verification-img"
            @click="getImg"
            v-show="isImgShow"
          />
        </el-form-item> -->
        <div class="btn">
          <el-button type="primary" size="medium" @click="login"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
// import { ElLoading } from "element-plus";

import axios from "axios";
import { axiosTest } from "@/api/login.js";
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
    };
  },
  computed: {},
  watch: {},
  methods: {
    getImg() {
      axios({
        method: "get",
        url: "/local/login/getImg",
        responseType: "arraybuffer",
      })
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
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          axios.post("/local/login/startLogin", this.ruleForm).then((res) => {
            if (res.data.code == "0") {
              this.$message({ message: res.data.msg, type: "success" });
              setTimeout(() => this.$router.push("Home"), 1500);
            } else {
              this.$message({ message: res.data.msg, type: "error" });
              this.getImg();
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    axiosTest({
      name: "pm",
      id: "2",
    }).then((res) => {
      // console.log(res);
      sessionStorage.token = res.data.token;
    });

    // this.getImg();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
.login-page {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #e6f5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    transform: translateY(-20%);
    display: flex;
    align-items: center;
    height: fit-content !important;
    width: 300px;
    @include commonBox;
    .demo-ruleForm {
      height: fit-content;
      .verification {
        .el-form-item__content::deep {
          display: flex;
          align-items: center;
          .el-input {
            width: calc(100% - 120px);
          }
          .verification-img {
            display: block;
            margin: 0 10px;
            width: 100px;
            height: 25px;
          }
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
      }
    }
  }
}
</style>
