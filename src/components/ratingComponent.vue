<template>
  <v-rating
    v-model="rating"
    bg-color="orange-lighten-1"
    color="black"
  ></v-rating>
</template>

<script>
  export default {
    data: () => ({ rating: 3 }),
  }
</script>