import Axios from "axios";
import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateLocalStorageForCompareProducts(compareArray) {
  localStorage.setItem("compareArray", JSON.stringify(compareArray));
}

const store = createStore({
  state: {
    cart: [],
    compareArray: [],
    signUpData: {
      token: "",
      email: "",
      userId: "",
      refreshToken: "",
      expiresIn: "",
    },
  },
  mutations: {

    // cart mutations

    addToCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
      }
      updateLocalStorage(state.cart);
    },
    updateCartfromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },

    // compare products mutations

    addToCompare(state, product) {
      let item = state.compareArray.find((i) => i.id === product.id);
      if (item) {
        alert("cannot add same product twice");
      } else if (state.compareArray.length === 3) {
        alert("cannot add more than three products");
      } else {
        state.compareArray.push({ ...product });
      }
      updateLocalStorageForCompareProducts(state.compareArray);
    },

    removeFromCompare(state, product) {
      let item = state.compareArray.find((i) => i.id === product.id);
      if (item) {
        state.compareArray = state.compareArray.filter(
          (i) => i.id !== product.id
        );
      }
      updateLocalStorageForCompareProducts(state.compareArray);
    },

    updatecompareArrayfromLocalStorage(state) {
      const compareArray = localStorage.getItem("compareArray");
      if (compareArray) {
        state.compareArray = JSON.parse(compareArray);
      }
    },

    //signUp mutations

    setUserData(state, payload) {
      state.email= payload.email,
      state.token= payload.token,
      state.userId= payload.userId,
      state.refreshToken= payload.refreshToken,
      state.expiresIn= payload.expiresIn
    }
  },

  getters: {
    appname(state) {
      return state.appname;
    },
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return null;
    },
    cartItems: (state) => {
      return state.cart;
    },
    compareArrayItems: (state) => {
      if (state.compareArray) {
        return state.compareArray;
      } else return null;
    },
  },
  actions: {
    /**
     * signUp functionality
     * @param {object} context 
     * @param {ojbect} payload 
     */
    async signUp(context, payload) {
      console.log(context)
      let postData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      let response= '';
      try {
        response = await Axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDa5nB79rMA8dT2SgvquYM3dJbEC5YmaKQ",
          postData
        );
      } catch (err) {
        let errorMessge= err.response.data.error.message;
        throw errorMessge
      }
      
      if (response.status === 200) {
        context.commit('setUserData', {
          email: response.data.email,
          token: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
          userId: response.data.localId,
        })
      }
    },
  },
});

export default store;
