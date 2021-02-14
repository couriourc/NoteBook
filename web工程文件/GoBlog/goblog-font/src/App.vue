<template>
  <div id="app">
    <blog-asid></blog-asid>
    <blog-header></blog-header>
    <transition
      name="router-animation"
    >
      <router-view class="main-window"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "blog-asid": () => import("./components/asid"),
    "blog-header": () => import("./components/blogheader"),
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #565555;
}

@font-face {
  font-family: "iconfont";
  src: url("./assets/iconfont/iconfont.eot");
  src: url("./assets/iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
  url("./assets/iconfont/iconfont.woff2") format("woff2"),
  url("./assets/iconfont/iconfont.woff") format("woff"),
  url("./assets/iconfont/iconfont.ttf") format("truetype"),
  url("./assets/iconfont/iconfont.svg#iconfont") format("svg");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 40px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
}

.main-window {
  display: inline-block;
  position: relative;
  color: #eee;
  height: auto;
  top: 80px;
  left: 200px;
  width: calc(100% - 200px);
}

.router-animation-enter-active {
  /* 在进入的时候设置动画过渡的时间*/
  transition: all .3s linear;

}

.router-animation-enter-active {
  /* 设置进入动画 */
  opacity: 0;
}

.router-animation-enter {
  opacity: 50%;
}

.router-animation-leave-active {
  opacity: 50%;
}

.router-animation-leave {
  opacity: 0;
}
</style>
