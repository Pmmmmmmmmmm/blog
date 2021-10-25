<template>
  <div class="indexPage" :class="{ isReady: isReady }">
    <header-bar />
    <div class="left-side">
      <!-- <img src="@/assets/images/logo.png" alt="" /> -->
    </div>
    <div class="trend">
      <div v-for="(item, index) in articleList" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
    <div class="right-side"></div>
    <back-top />
  </div>
</template>
<script>
import { getText } from "@/api/index.js";
import backTop from "@/components/backTop.vue";
import HeaderBar from "../components/headerBar.vue";

export default {
  name: "indexPage",
  props: {},
  components: {
    backTop,
    HeaderBar,
  },
  data() {
    return {
      articleList: "",
      isReady: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    getText() {
      getText().then((res) => {
        this.articleList = res.data.articleList;
        this.isReady = true;
      });
    },
  },
  created() {
    this.getText();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
@media screen and (max-width: 700px) {
  .indexPage {
    .left-side,
    .right-side {
      display: none !important;
    }
  }
}
@media screen and (max-width: 1200px) {
  .indexPage {
    .right-side {
      display: none !important;
    }
  }
}
// @media screen and (max-width: 800px) {
//   .indexPage {
//     .left-side,
//     .right-side {
//       display: none !important;
//     }
//   }
// }
.indexPage {
  min-width: fit-content;
  min-height: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px 20px 20px;
  transition: opacity 0.2s ease;
  opacity: 0;

  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    min-width: 260px;
    @include commonBox;
  }
  .trend {
    // min-height: 360vh;
    flex: 1;
    height: fit-content;
    // min-width: 600px;
    max-width: 800px;
    @include commonBox;
    & > div {
      padding: 5px 0;
      border-bottom: 1px solid #e9e9eb;
      word-break: break-all;
      &:first-child {
        padding: 0 0 5px 0;
      }
    }
  }
  .right-side {
    min-height: 40vh;
    min-width: 260px;
    @include commonBox;
  }
}
.isReady {
  opacity: 1;
}
</style>
