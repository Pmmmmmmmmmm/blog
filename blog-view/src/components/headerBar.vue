<template>
  <div class="headerBar" :class="{ isShow: !isShow }">
    <div class="el-icon">
      <User @click="reLog" />
      <User @click="reLog" />
      <User @click="reLog" />
    </div>
  </div>
</template>
//
<script>
import { User } from "@element-plus/icons";

export default {
  name: "headerBar",
  props: {},
  components: { User },
  data() {
    return { isShow: true, position: 0 };
  },
  computed: {},
  watch: {},
  methods: {
    reLog() {
      sessionStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  created() {},
  mounted() {
    this.position = document.documentElement.scrollTop;

    // 返回顶部过程中组织滚轮默认事件
    window.addEventListener("scroll", () => {
      this.isShow = this.position >= document.documentElement.scrollTop;
      this.position = document.documentElement.scrollTop;
      console.dir(document.documentElement.scrollTop);
    });
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
.headerBar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fcffff;
  width: 85%;
  // min-width: 1366px;
  height: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  border-radius: 0 0 15px 15px;
  padding: 0 10px;

  .el-icon {
    display: flex;
    align-items: center;
    // justify-content: center;
    // width: 100%;
    height: 100%;
    width: fit-content;
    font-size: 20px;
    line-height: 30px;
  }
}
.isShow {
  // transform: translateX(-50%);
  transform: translate(-50%, -150%);
}
</style>
