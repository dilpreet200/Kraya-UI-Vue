<template>
  <v-card class="mx-auto product-card" max-width="344">
    <v-img :src="categories.images[0]" height="200px"></v-img>
    <router-link
      class="title-links"
      :to="{ name: 'showDetails', params: { id: categories.id } }"
    >
      <v-card-title> {{ categories.title }} </v-card-title>
    </router-link>
    <v-card-subtitle> {{ categories.description }} </v-card-subtitle>
    <v-card-actions>
      <v-btn text @click="addToCart(categories)">Add to cart</v-btn>
      <v-btn text @click="addToCompare(categories)" class="btn--compare"
        >Compare</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      compareArray: [],
    };
  },
  props: ["categories", "show"],
  methods: {
    addToCompare(categories) {
      this.$store.commit("addToCompare", categories);
    },
    addToCart(categories) {
      this.$store.commit("addToCart", categories);
    },
  },
};
</script>

<style scoped>
.product-card {
  padding-bottom: 1em;
}
.title-links {
  text-decoration: none;
  color: black;
}
.btn--compare {
  text-decoration: none;
  color: red;
}
</style>


