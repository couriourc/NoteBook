<template>
  <div class="body-container">
    <transition-group name="introduce-animation">
      <content-card
        v-for="(i, index) in content"
        :key="index"
        :message="i"
        introduce="This is a test"
      ></content-card>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "blogbody",
  data() {
    return {
      content: "Lorem sit amet consectetur adipisicing elit. Eaque quidem, pariatur animi debitis quibusdam, quam non consectetur iste, doloremque soluta architecto error cum quis sequi repudiandae aut aspernatur vel alias!".split(
        " "
      ),
    };
  },
  methods: {},
  components: {
    "content-card": () => import("./card"),
  },
};
</script>

<style scoped>
.body-container {
  margin: 0 auto;
  z-index: 1000;
  color: white;
}

.introduce-animation-enter-active,
.introduce-animation-leave-active {
  transition: all 1s;
}

.introduce-animation-enter,
.introduce-animation-leave {
  opacity: 0;
  transform: translateY(30px);
}
</style>
