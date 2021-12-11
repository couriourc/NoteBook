# Vue 一次执行顺序的记录

```javascript
  mounted() {
    console.log(this.$store.state);
    this.getThresholdData();
    console.log(this.$store.state.normalData);
  },
```

```javascript
method:{
    getThresholdData() {
      console.log("mounted3");
      const id = ~~this.$route.params.id + 1;
      // console.log(id);
      this.$axios
        .get(`http://localhost:5000/threshold/${id}`)
        .then((res) => {
          // console.log(
          // `🚀 ~ file: ItemposChart.vue ~ line 250 ~ .then ~ res`,
          // res
          // );
          // console.log(res.data);
          // this.$store.dispatch("actionsStorgeAllThresholdData", res.data);
          this.$store.commit("storgeAllThresholdData", res.data);
        })
        .catch((e) => {
          console.log("this is getThreshold err", e);
        });
    },
}
```
