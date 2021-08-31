<template>
  <div class="indexPage">
    <div class="left-side">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="trend"></div>
    <div class="right-side"></div>
  </div>
</template>
<script>
export default {
  name: "indexPage",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
.indexPage {
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(230, 245, 255);
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  .left-side {
    min-height: 20vh;
    min-width: 260px;
    @include commonBox;
  }
  .trend {
    min-height: 60vh;
    min-width: 600px;
    @include commonBox;
  }
  .right-side {
    min-height: 40vh;
    min-width: 260px;
    @include commonBox;
  }
}
</style>
