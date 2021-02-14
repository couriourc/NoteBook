<template>
  <i :class="'iconfont '+icon" :title="title"></i>
</template>

<script>
export default {
  name: 'circle-button',
  props: {
    icon: String || null,
    title: String || null
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
