<template>
  <div class="product">
    <div>
      <img class="product__image" :src="imageUrl" alt="Product Image" />
    </div>
    <div>
      <h1 class="product__title">{{ product.title }}</h1>
      <span class="product__category">{{ product.category }}</span>
      <span class="product__price">${{ product.price }}</span>
      <ratingComponent />
      <p class="product__description">{{ product.description }}</p>
      <div v-if="product_total">
        <p class="product_quanity">
          Quantity<span class="product_counter">{{ product_total }}</span>
        </p>
      </div>
      <v-snackbar :timeout="2000"
      location="top right"
      class="vueToast">
        <template v-slot:activator="{ props }">
          <a
            v-bind="props"
            class="product__button button--addToCart"
            href="#"
            @click="addToCart()"
            >Add to Cart</a
          >
        </template>

        Product Added to Cart
      </v-snackbar>
      <!-- <a class="product__button button--addToCart" href="#" @click="addToCart()"
        >Add to Cart</a
      > -->
      <a
        class="product__button button--buyNow"
        href="/cart"
        @click="addToCart()"
        >Buy Now</a
      >
    </div>
  </div>
</template>

<script>
import ratingComponent from "../../components/ratingComponent.vue";

export default {
  props: ["categories"],
  components: { ratingComponent },
  data() {
    return {
      product: {},
      compareArray: [],
      imageUrl: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.categories.find((item) => item.id == this.id);
    this.imageUrl = this.product.images[0];
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    getRating(rating) {
      let i,
        rate = "";
      for (i = 1; i <= rating; i++) {
        rate += `<span class="each-star pink-star"><i class="fa fa-star fa-lg  checked" aria-hidden="true"></i></span>`;
      }
      for (i = rating + 1; i <= 5; i++) {
        rate += `<span class="each-star"><i class="fa fa-star fa-lg grey-star" aria-hidden="true"></i></span>`;
      }
      return rate;
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
};
</script>

<style scoped>
.vueToast {
  position: absolute;
  top: 80px;
  right: 50px;
}
.product {
  display: flex;
  justify-content: center;
  gap: 2em;
}

.product__image {
  height: 400px;
  margin: 20px 0;
}

.product__title {
  font-size: 1em;
  font-weight: 800;
  margin: 20px auto;
}

.product__price {
  display: block;
  margin: 20px auto;
}

.product__description {
  margin: 20px auto;
  width: 500px;
  line-height: 20px;
}
.product_quanity {
  margin: 20px auto;
}

.product_counter {
  display: inline-block;
  margin-left: 20px;
}

.product__button {
  text-align: center;
  display: inline-block;
  height: auto;
  width: 150px;
  margin: 0 20px;
  padding: 10px;
  margin-left: 0;
  text-decoration: none;
}

.button--addToCart {
  color: black;
  background-color: white;
  border: 1px solid black;
}

.button--buyNow {
  color: white;
  background-color: #463f5f;
}
</style>
