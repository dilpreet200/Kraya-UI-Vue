<template>
  <v-app>
    <siteHeader />
    <v-main>
      <router-view :categories="categories"></router-view>
      <div class="compareBucket" v-if="compareArrayItems.length">
        <div
          class="compareBucket__items"
          v-for="item in compareArrayItems"
          :key="item.id"
        >
          <div class="compareBucket__items__card">
            <img
              class="compareBucket__items__image"
              :src="item.images[0]"
              alt=""
            />
            <h1 class="compareBucket__items__title">
              {{ item.title }}
            </h1>
          </div>
          <button
            class="compareBucket-btn--remove"
            @click="removeFromCompare(item)"
          >
            Remove
          </button>
        </div>
        <div class="comparePopupComp">
          <comparePopup :compareArrayItems="compareArrayItems"></comparePopup>
        </div>
      </div>
    </v-main>
    <siteFooter />
  </v-app>
</template>

<script>
import siteHeader from "./components/siteHeader.vue";
// import categoryBox from "./components/categoryBox.vue";
import siteFooter from "./components/siteFooter.vue";
import comparePopup from "./components/comparePopup.vue";
import axios from "axios";
export default {
  components: { siteHeader, siteFooter, comparePopup },
  data() {
    return {
      products: [],
      categories: [],
      show: false,
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.categories = res.data.products;
        })
        .catch((err) => console.log("error", err));
    },
    removeFromCompare(item) {
      this.$store.commit("removeFromCompare", item);
    },
  },
  mounted() {
    this.fetchData();
    this.$store.commit("updateCartfromLocalStorage");
    this.$store.commit("updatecompareArrayfromLocalStorage");
  },
  computed: {
    compareArrayItems() {
      return this.$store.getters.compareArrayItems;
    },
  },
};
</script>

<style >
@import url("styles/reset.css");

/* compare Functionality */

.compareBucket {
  width: 500px;
  height: 150px;
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: white;
  display: flex;
  margin: 0 auto;
  width: fit-content;
  margin-top: 3em;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: 1px;
  border-radius: 25px;
  box-shadow: 1px 3px 10px grey;
}
.compareBucket__items {
  padding: 1em;
}

.compareBucket__items__image {
  height: 50px;
  margin-bottom: 10px;
}

.compareBucket__items__title {
  font-size: 12px;
  padding: 1em 0;
}
.compareBucket-btn--remove {
  color: red;
}

.comparePopupComp {
  margin: 0 20px 20px 20px;
}

#app {
  font-family: "Work Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
