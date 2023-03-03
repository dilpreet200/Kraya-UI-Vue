<template>
  <div class="loginPage__heading">LOGIN HERE</div>
  <v-sheet  width="300" class="mx-auto">
    <v-form  class="loginPage__form" fast-fail @submit.prevent="onLogin()">
      <v-text-field
        v-model="Username"
        label="Username"
        :rules="UsernameRules"
      ></v-text-field>

      <v-text-field
        v-model="Password"
        label="Password"
        :rules="PasswordRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">LOGIN</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    Username: "",
    UsernameRules: [
      (value) => {
        if (value?.length > 5) return true;

        return "User name must be at least 5 characters.";
      },
    ],
    Password: "",
    PasswordRules: [
      (value) => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) return true;

        return "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      },
    ],
  }),
};
</script>

<style>
.loginPage__heading {
  text-align: center;
  margin: 20px;
  font-size: 25px;
  font-weight: 600;
}
</style>
