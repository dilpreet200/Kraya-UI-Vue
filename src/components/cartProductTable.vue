<template>
  <table class="cart-table">
    <thead class="cart-table__header">
      <tr>
        <th class="cart-table__headings">PRODUCTS</th>
        <th class="cart-table__headings">PRICE</th>
        <th class="cart-table__headings">QUANTITY</th>
        <th class="cart-table__headings">TOTAL PRICE</th>
      </tr>
    </thead>
    <tr
      class="product-detail_row"
      v-for="product in cartItems"
      :key="product.id"
    >
      <td class="product-detail">
        <img class="product_image" :src="product.images[0]" alt="" />{{
          product.title
        }}
      </td>
      <td class="product-detail">${{ product.price }}</td>
      <td class="product-detail quantityAddRemoveFlex">
        <button class="btn--quantityAdd" @click="addToCart(product)">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
        <div class="product-quantity">{{ product.quantity }}</div>
        <button class="btn--quantityRemove" @click="removeFromCart(product)">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
      </td>
      <td>${{ product.quantity * product.price }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["categories"],
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },
  },
};
</script>

<style scoped>
.cart-table {
  width: 60%;
  margin: 0 auto;
}

.cart-table__header {
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}

.cart-table__headings {
  padding: 20px 0;
  text-align: left;
  font-size: 14px;
  color: #b7bdc1;
}

.product-detail_row {
  border-bottom: 1px solid #f2f2f2;
}
.product-detail {
  padding: 20px 0;
}
.product-quantity {
  padding: 10px;
}

.quantityAddRemoveFlex {
  /* padding: 5px; */
  padding: 0;
  width: fit-content;
  display: flex;
  border: 1px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px grey;
}
.btn--quantityAdd {
  border-right: 1px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px grey;
  padding: 10px;
}
.btn--quantityRemove {
  border-left: 1px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px grey;
  padding: 10px;
}
.product_image {
  height: 50px;
  width: 50px;
  border: 1px solid #f2f2f2;
  margin-right: 30px;
}
</style>
