<template>
  <div>
    <transition name="asid">
      <div @mousemove="drawStar" v-if="show" class="asid">
        <canvas :ref="'canvas'" id="canvas" class="canvas"></canvas>
        <ul class="button-container">
          <get-start :color="'colorful'"></get-start>
        </ul>
        <ul class="contact-container">
          <icon-button :title="'github'" :icon="'icon-github'"></icon-button>
          <icon-button :title="'qq'" :icon="'icon-qq-copy'"></icon-button>
          <icon-button :title="'wechat'" :icon="'icon-wechat'"></icon-button>
        </ul>
        <ul class="introduce-container">
          <li class="info author">
            {{ info.nickname }}
          </li>
          <li
            class="info motor"
            v-for="(motorword, index) in info.motor.split('')"
            :key="index"
          >
            {{ motorword }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "asid",
  data() {
    return {
      info: {
        nickname: "咸鱼润",
        motor: "一个把咸鱼作为目标的孩子",
      },
      show: true,
    };
  },
  methods: {
    canvas(event) {
      //  画布效果
    }
  },
  components: {
    "get-start": () => import("./common-button"),
    "icon-button": () => import("./circle-button"),
  },
};
</script>

<style scoped>
@font-face {
  font-family: introduceFont;
  src: url("../assets/font/introducefont.ttf");
}

.canvas {
  position: absolute;
  background-color: rgb(2, 77, 77);
  z-index: -10;
  width: 20em;
  height: 100%;
}

.button-container {
  padding-top: 14px;
  padding-bottom: 14px;
  width: 200px;
  text-align: center;
}

.contact-container {
  padding-top: 14px;
  padding-bottom: 14px;
  width: 200px;
  text-align: center;
  border-bottom: solid 1px #eee;
}

.iconfont:nth-child(1) {
  font-size: 49px;
}

.iconfont:nth-child(2) {
  font-size: 55px;
}

.iconfont:nth-child(3) {
  font-size: 50px;
}

.info {
  color: #eee;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.asid {
  overflow: hidden;
  position: fixed;
  display: inline-block;
  width: 200px;
  height: 100vh;
}

.author {
  margin: 20px;
  font-family: introduceFont;
  font-size: 4em;
}

.motor {
  list-style: none;
  transition-duration: 2s;
  font-size: 2em;
  font-family: introduceFont;
}

.motor:nth-child(2n + 1) {
  transform: translateX(100px);
}

.motor:nth-child(2n + 2) {
  transform: translateX(40px);
}
</style>
