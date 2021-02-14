<template>
  <div class="header-container">
    <ul class="title-container">
      <li v-for="(title,index) in headerInfo"
          :key="index"
          class="title title-box">
        <span
          :class="title.activeTitle?'title active-title':'title'"
          @click="active_title">
        <router-link class="link" :to="title.link"> {{ title.title }} </router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'blogheader',
  data() {
    return {
      headerInfo: [{
        title: "首页",
        link: '/',
        activeTitle: false
      },
        {
          title: "搜索",
          link: '/search',
          activeTitle: false
        }, {
          title: "目录",
          link: '/archie',
          activeTitle: false
        }]
    }
  },
  methods: {
    active_title(e) {
      console.log(e.target)
    }
  }
}
</script>

<style scoped>
.header-container {
  width: calc(100% - 200px);
  background-color: rgb(71, 69, 69);
  position: fixed;
  right: 0;
  z-index: 1;
}

.title-container {
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.title {
  margin-left: 5%;
  margin-right: 5%;
  line-height: 4em;
  color: aliceblue;
  white-space: nowrap;
  font-size: 1em;
  transition: 2s;
  text-align: center;
}

.title-box {
  width: 3em;
  height: 4em;

}

.link {
  text-decoration: none;
  color: white;
}
</style>
