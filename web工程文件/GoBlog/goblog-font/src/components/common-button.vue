<template>
  <div class="button-container">
    <button
      :class="color==='colorful'?'button colorful-button':'button'"

    > 咸 鱼 润
    </button>
  </div>
</template>

<script>
export default {
  name: 'common-button',
  props: {
    color: String || null,
  },
  data() {
    return {}
  },
  methods: {
    click() {
      this.$router.push({
          path: '/home'
        }
      )
    },
  }
}
</script>

<style scoped>
@import './css/components.css';


</style>
