<template>
  <div class="signupPage__heading">CREATE YOUR ACCOUNT AND START EXPLORING</div>

  <v-sheet width="300" class="mx-auto">
    <v-alert
      class="signUpPage__errorAlert"
      v-if="error"
      justify-center
      density="compact"
      type="error"
      title="SignUp Error"
      >{{ error }}</v-alert
    >
    <v-form fast-fail @submit.prevent="signUp()">
      <v-text-field v-model="Email" label="Email"></v-text-field>

      <!-- <v-text-field v-model="FirstName" label="FirstName"></v-text-field>
      <v-text-field v-model="LastName" label="LastName"></v-text-field> -->

      <v-text-field
        v-model="Password"
        label="Password"
        :rules="PasswordRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">SIGNUP</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    Email: "",
    Password: "",
    PasswordRules: [
      (value) => {
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
        )
          return true;

        return "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      },
    ],
    FirstName: "",
    LastName: "",
    error: false,
  }),
  methods: {
    signUp() {
      this.$store
        .dispatch("signUp", {
          email: this.Email,
          password: this.Password,
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
  },
};
</script>

<style>
.signupPage__heading {
  text-align: center;
  width: 300px;
  margin: 20px auto;
  font-size: 25px;
  font-weight: 600;
}
.signUpPage__errorAlert {
  margin-bottom: 20px;
}
</style>
