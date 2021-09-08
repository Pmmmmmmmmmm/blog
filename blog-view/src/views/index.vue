<template>
  <div class="indexPage" :class="{ isReady: isReady }">
    <div class="left-side">
      <!-- <img src="@/assets/images/logo.png" alt="" /> -->
    </div>
    <div class="trend">
      <div v-for="(item, index) in articleList" :key="index">
        <h3>{{ item.title }}</h3>
        <div>{{ item.content }}</div>
      </div>
    </div>
    <div class="right-side"></div>
    <back-top />
  </div>
</template>
<script>
import { getText } from "@/api/index.js";
import backTop from "@/components/backTop.vue";

export default {
  name: "indexPage",
  props: {},
  components: {
    backTop,
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
.indexPage {
  min-width: fit-content;
  min-height: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
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
    min-height: 360vh;
    height: fit-content;
    min-width: 600px;
    max-width: 800px;
    @include commonBox;
    & > div {
      padding: 5px 0;
      border-bottom: 1px solid #e9e9eb;
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
