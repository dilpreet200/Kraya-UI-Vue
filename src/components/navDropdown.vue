<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <a class="sub_header_links" v-bind="props"
        ><i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; ACCOUNT
        <i class="fa fa-angle-down pd-left" aria-hidden="true"></i
      ></a>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index" router :to="item.route">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "LOGIN", route: '/loginPage' },
      { title: "SIGN UP", route: '/signupPage' },
    ],
  }),
};
</script>

<style>
.sub_header_links {
  color: #aaaaaa;
  text-decoration: none;
  margin: 0 15px;
  font-size: 12px;
  cursor: pointer;
  padding-bottom: 10px;
}
</style>
