<template>
  <div class="container__heading">HOME DECOR</div>
  <div class="container">
    <div
      v-for="item of homeDecoration"
      :key="item.id"
      class="container__product-cards"
    >
      <categoryBox :categories="item"></categoryBox>
    </div>
  </div>
</template>

<script>
import categoryBox from "../components/categoryBox.vue";
export default {
  props: ["categories"],
  computed: {
    homeDecoration: function () {
      return this.categories.filter((item) => item.category === "home-decoration");
    },
  },
  components: { categoryBox },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 33.3333333%);
  gap: 2em;
}
.container__heading {
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 40px;
}
</style>
