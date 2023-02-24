<template>
  <h1 class="cart-heading">CART</h1>
  <div>
    <cartProductTable />
  </div>
  <div class="cart-buttons_conatainer">
    <button class="cart-buttons btn--shopping">
      <i class="fa fa-arrow-left pd-right" aria-hidden="true"></i>Shopping
    </button>
    <button class="cart-buttons btn--checkout">
      Checkout<i class="fa fa-arrow-right pd-left" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
import cartProductTable from "../components/cartProductTable.vue";

export default {
  components: { cartProductTable },
};
</script>

<style scoped>
.cart-heading {
  text-align: center;
  margin: 20px;
  font-size: 14px;
  color: #463f5f;
  font-weight: 800;
}
.cart-buttons_conatainer {
  text-align: center;
  margin: 20px;
}
.cart-buttons {
  text-align: center;
  display: inline-block;
  height: auto;
  width: 150px;
  margin: 0 20px;
  padding: 10px;
  margin-left: 0;
  text-decoration: none;
}

.btn--shopping {
  border: 1px solid black;
}
.btn--checkout {
  color: white;
  background-color: #463f5f;
}

.pd-left {
  padding-left: 10px;
}
.pd-right {
  padding-right: 10px;
}
</style>
