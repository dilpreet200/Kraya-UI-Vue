<template>
  <div>
    <section class="sub_header">
      <div class="sub_header_container">
        <a class="sub_header_links" href="#"
          >WISHLIST&nbsp;<i class="fa fa-heart-o pd-left" aria-hidden="true"></i
        ></a>
        <a class="sub_header_links" href="/cart"
          >CART&nbsp;<i
            class="fa fa-shopping-bag pd-left"
            aria-hidden="true"
          ></i
          ><span class="cart-count">{{ cartCount }}</span></a
        >
        <!-- <a class="sub_header_links" href="#"
          ><i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; ACCOUNT &nbsp;<i
            class="fa fa-angle-down pd-left"
            aria-hidden="true"
          ></i>
        </a> -->
        <navDropdown />
      </div>
    </section>
    <section class="navigation_header">
      <div class="logo">
        <a class="kraya-link" href="/"><span>KRAYA.</span></a>
      </div>
      <div class="navbar">
        <a href="/smartphones">PHONE</a>
        <a href="/laptops">LAPTOPS</a>
        <a href="/fragrances">FRAGRANCES</a>
        <a href="/home-decoration">HOME DECORATION</a>
      </div>
      <!-- <div class="search"><i class="fa fa-search" aria-hidden="true"></i></div> -->
    </section>
  </div>
</template>

<script>
import navDropdown from "../components/navDropdown.vue";
export default {
  components: {
    navDropdown
  },
  computed: {
    cartCount() {
      let cart = this.$store.getters.cartItems;
      let count = 0;
      for (const items of cart) {
        count += items.quantity;
      }
      return count;
    },
  },
};
</script>

<style scoped>
.sub_header {
  text-align: right;
  width: 100%;
  height: 35px;
  background-color: #1d1d1d;
  opacity: 0.9;
  padding-top: 10px;
}

.sub_header_links {
  color: #aaaaaa;
  text-decoration: none;
  margin: 0 15px;
  font-size: 12px;
}

.sub_header_container {
  width: 90%;
  margin: 0 auto;
}

/* .sub_header span:nth-child(-n + 2) {
  border-right: 1px solid white;
} */

.sub_header span:last-child {
  padding-right: 0;
}
.pd-left {
  padding-left: 5px;
}
.sub_header span {
  color: white;
  /* padding: 0 1rem 0 2rem; */
  font-size: 12px;
}

.navigation_header {
  display: flex;
  width: 90%;
  margin: 1.75rem auto;
  background-color: white;
}

.logo {
  flex: 15%;
  text-decoration: none;
}

.kraya-link {
  text-decoration: none;
  color: #1d1d1d;
}

.navbar {
  flex: 89%;
  margin-left: 1.5rem;
}

.logo span {
  font-size: 25px;
  font-weight: bolder;
  letter-spacing: 1px;
  border: 3px solid black;
  padding: 0 5px;
}

.navbar a {
  text-decoration: none;
  color: black;
  margin-right: 4.75em;
  font-weight: 600;
  font-size: 15px;
}

.search {
  flex: 2%;
}

.cart-count {
  display: inline-block;
  background-color: #ff3465;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  text-align: left;
  padding: 2px;
  padding-left: 4px;
  position: relative;
  bottom: 6px;
  right: 3px;
}
</style>
