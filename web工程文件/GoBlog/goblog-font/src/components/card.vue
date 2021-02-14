<template>
  <div class="card-container">
    <div class="title">
      <h1>
        <router-link class="article-title" :to="'/single/' + message">
          {{ message }}
        </router-link>
      </h1>
      <br/>
      <h6 class="article-introduce">{{ introduce }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    message: String || null,
    introduce: String || null,
  },
  methods: {},
};
</script>
<style scoped>
.card-container {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 2em;
  margin: 20px;
  overflow: hidden;
}

.title {
  text-align: center;
  height: 200px;
}

.article-title {
  color: #551a8b;
}

.article-introduce {
  color: black;
}

.card-container:hover::after {
  content: "";
  position: relative;
  background-color: chocolate;
  display: block;
  width: 200px;
  height: 200px;
  top: -100px;
  left: -100px;
  border-top-right-radius: 50%;
  border-top-left-radius: 75%;
  border-bottom-right-radius: 75%;
  border-bottom-left-radius: 50%;
  animation: rotate 4s 0.2s linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: scale(1.5, 1.5);
  }
  75% {
    transform: scale(2, 2);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
