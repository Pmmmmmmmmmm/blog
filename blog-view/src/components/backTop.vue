<template>
  <div class="backTop" @click="backToTop" :class="{ isShow: isShow }">
    <arrow-up-bold />
  </div>
</template>
<script>
import { ArrowUpBold } from "@element-plus/icons";
export default {
  name: "backTop",
  props: {},
  components: { ArrowUpBold },
  data() {
    return {
      isShow: false,
      scrollH: 1000,
    };
  },
  computed: {},
  watch: {},
  methods: {
    backToTop() {
      let timer = setInterval(() => {
        document.documentElement.scrollTop -=
          document.documentElement.scrollTop / 20;
        if (parseInt(document.documentElement.scrollTop) == 0)
          clearInterval(timer);
      }, 1);
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", () => {
      this.isShow =
        document.documentElement.scrollTop > this.scrollH ? true : false;
    });
  },
};
</script>
<style lang='scss' scoped>
@import "~@/assets/scss/common.scss";

.backTop {
  padding: 10px;
  width: 40px;
  height: 40px;
  color: black;
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: #fcffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.212);
  border-radius: 50%;
  transform: scale(0);
  transition: all 0.1s ease;
  cursor: pointer;
  user-select: none;
}
.isShow {
  transform: scale(1);
}
</style>