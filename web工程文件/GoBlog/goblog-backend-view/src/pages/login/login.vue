<template>
  <div class="login-container">
    <login-bar ></login-bar>
  </div>
</template>

<script>
export default {
  name: "login",
  components:{
    'login-bar':()=>import('../../components/login-bar'),
  }
}
</script>

<style scoped>
.login-container{
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://pic.macw.com/pic/202003/05150244_5700b67686.jpeg");
}
</style>
