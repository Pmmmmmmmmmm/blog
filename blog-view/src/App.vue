<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}

#app {
  /* font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif; */

  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: fit-content;
  min-width: 100%;
  min-height: 100vh;
  background-color: #e6f5ff;
}
</style>
