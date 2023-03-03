<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> COMPARE </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Product Comparison</span>
      </v-card-title>
      <v-card-text>
        <v-container class="Popup">
          <v-col v-for="item in compareArrayItems" :key="item.id">
            <img
              class="popup__product__image"
              :src="item.images[0]"
              alt="product image"
            />
            <h1 class="popup__product__heading">{{ item.title }}</h1>
            <span class="popup__product__price">${{ item.price }}</span>
            <p class="popup__product__description">{{ item.description }}</p>
          </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["compareArrayItems"],
};
</script>

<style scoped>
.Popup {
  display: flex;
}
.popup__product__image {
  height: 100px;
}
.popup__product__heading {
  padding: 1em;
  padding-left: 0;
}
.popup__product__price {
  display: block;
  padding-bottom: 1em;
  padding-left: 0;
}
</style>
