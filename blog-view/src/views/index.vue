<template>
  <div class="indexPage">
    <div class="left-side">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="trend">
      <div v-for="(item, index) in articleList" :key="index">
        <h3>{{ item.title }}</h3>
        <div>{{ item.content }}</div>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
</template>
<script>
import { getText } from "@/api/index.js";

export default {
  name: "indexPage",
  props: {},
  components: {},
  data() {
    return {
      articleList: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    getText() {
      getText().then((res) => {
        this.articleList = res.data.articleList;
        // console.log(this.articleList);
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
  min-width: 100%;
  min-height: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #e6f5ff;

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
</style>
