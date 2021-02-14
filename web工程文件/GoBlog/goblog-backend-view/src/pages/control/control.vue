<template>
  <el-container>
    <el-aside width="200px" v-if="show" >
      <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>回信反馈</template>
        <el-menu-item-group>
          <template slot="title">日期</template>
          <el-menu-item index="1-1">{{time}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>推送文章</template>
        <el-menu-item-group>
          <template slot="title">文章</template>
          <el-menu-item index="2-1">草稿箱</el-menu-item>
          <el-menu-item index="2-2">文章编辑</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="已发送文章">
          <el-menu-item index="2-3">文章删除</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>设置 </template>
        <el-menu-item-group>
          <template slot="title">文章设置</template>
          <el-menu-item index="3-1">浏览量统计</el-menu-item>
          <el-menu-item index="3-2">文章基本设置</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="个人设置">
          <el-menu-item index="3-3">头像设置</el-menu-item>
          <el-menu-item index="3-4">联系方式设置</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
    </el-menu></el-aside>
    <el-container>
      <el-header>   <el-dropdown>
        <i class="auth el-icon-setting" ></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
        <span class="auth">咸鱼润</span>
      </el-dropdown>
      </el-header>
      <el-main>
        <router-view name="main"></router-view>
      </el-main>
      <el-footer>
        <span class="copyright">
        这是你的第{{count}}次登录
        </span>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
name: "control",
  data(){
  return {
    time:'2021 2 8',
    show:true,
    count: 1,

  }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
}
.el-footer{
  display: inline-block;
  height: 1em;
  background-color: #B3C0D1;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  overflow-x: hidden;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.auth{
  line-height: 2em;
  font-size: 2em;
  float: right;
  outline: none;

}
.auth:nth-child(1){
  border-left: solid 1px;
  padding-left: 10px;
  margin-left: 10px;
}
.el-dropdown{
  width: calc(100%);
}
.copyright{
  display: block;
  text-align: center;
  line-height: 3em;
}
</style>
