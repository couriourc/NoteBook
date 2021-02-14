<template>
  <div class="root-container">
    <blog-body></blog-body>
  </div>
</template>

<script>
export default {
  name: "root",
  data() {
    return {};
  },
  methods: {},
  components: {
    "blog-body": () => import("../../components/blogbody"),
  },
};
</script>

<style scoped>
</style>
