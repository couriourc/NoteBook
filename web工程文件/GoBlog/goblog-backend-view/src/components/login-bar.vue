<template>
  <div class="login-bar-container">
    <h1 class="login-title">欢迎登录</h1>
      <transition name="dateGo">
        <span class="time" >{{setDate}}</span>
      </transition>
    <hr />
    <div class="login-main-bar">
    <div class="login-form">
       <div class="login-info-bar">
          <span class="icon el-icon-s-custom"></span><input class="login-info  username" placeholder="用户名" ref="username" type="text">
          <span class="icon el-icon-s-custom"></span><input class="login-info password" placeholder="密码" ref="password" type="password">
          <span class="icon el-icon-s-check"></span><input class="login-info valid-text" placeholder="验证码" ref="text" type="text">
       </div>
        <div class="login-link">
          <router-link to="/reg" class="login-plus el-icon-circle-plus">注册</router-link>
            <router-link to="/forget" class="login-plus el-icon-question">忘记密码</router-link>
        </div>
        <button class="login-button">登录</button>
      </div>
    <canvas ref="valid-text"
            width="20px"
            height="20px"
    class="canvas">
    </canvas>
    </div>
    </div>
</template>

<script>
export default {
  name: "login-bar",
  computed:{
    setDate(){
      let date = new Date();
      let time = `${date.getUTCFullYear()} ${date.getMonth()+1} ${date.getUTCDate()}`
      return time
    }
  }
}
</script>

<style scoped>
.login-title{
  color: white;
}
.login-main-bar{
  display: flex;
}
.canvas{
  display: inline-block;
  width: 8em;
}
.login-form{
  width: 17em;
  height: auto;
}
.login-title::before{
  content: '';
  display: inline-block;
  background-color: blue;
  width: 0.2em;
  height: 1em;
  border-radius: 2em;
  margin-right: 0.3em;
  vertical-align: middle;
}

.login-bar-container{
  width: 25em;
  height: calc(25em * 0.618);
  display: block;
  flex-direction: column;
  align-items: center;
  opacity: 80%;
  background-color: darkgrey;
  margin: 0 auto;
  padding: 2em;
}
.login-button{
  display: inline-block;
  width: 100px;
  height: calc(50px * 0.78);
  border-radius: 2em;
  outline: none;
  border: none;
  margin-left: 6em;
  color: #070606;
}
.login-info-bar{
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.login-info{
  display: inline-block;
  height: 2em;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px gray;
  width: 20em;
}
.login-link{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login-plus{
  text-decoration: none;
  color: beige;
}
.icon{
  color: #070606;
}
.time{
  font-size: 12px;
  float: right;
  color: white;
}
</style>
