<template>
  <div>
    <div class='single-header'>

    </div>
    <h1>{{ date }}</h1>
  </div>
</template>

<script>
export default {
  name: "single",
  data() {
    return {
      date: this.$route.params.date
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
