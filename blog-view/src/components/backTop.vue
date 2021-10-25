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
      isScroll: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    backToTop() {
      let timer = setInterval(() => {
        this.isScroll = true;
        document.documentElement.scrollTop -=
          document.documentElement.scrollTop / 10;
        if (parseInt(document.documentElement.scrollTop) == 0) {
          clearInterval(timer);
          this.isScroll = false;
        }
      }, 1);
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", () => {
      this.isShow =
        document.documentElement.scrollTop > this.scrollH ? true : false;
    });
    // 返回顶部过程中组织滚轮默认事件
    window.addEventListener(
      "mousewheel",
      (e) => {
        if (this.isScroll) e.preventDefault();
      },
      { passive: false }
    );
  },
};
</script>
<style lang="scss" scoped>
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
