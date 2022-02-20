<template>
  <div class="wrapper">
    <img src="@/assets/Sinus-Logo.svg" />
    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/products"> Products </router-link>
      <router-link to="/contact"> Contact </router-link>

      <img class="icon" src="@/assets/Search-icon.svg" width="30" />
      <img class="icon" src="@/assets/Heart-icon.svg" width="30" />
      <img
        v-on:click="openLoginRegistrationModal"
        class="icon"
        src="@/assets/Profile-icon.svg"
        width="30"
      />
      <img class="icon" src="@/assets/Bag-icon.svg" width="30" />
    </nav>
  </div>
</template>

<script>
import Actions from "../store/action.types";
export default {
  name: "Header",
  computed: {},
  methods: {
    openLoginRegistrationModal() {
      this.$store.dispatch(Actions.OPEN_LOGIN_REGISTRATION_MODAL, "register");
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  background: #333333;
  color: #ffffff;
  height: 160px;
}

img {
  margin: 1rem;
  display: flex;
  justify-content: right;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    margin: 1rem;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 100;
  }

  .icon {
    margin: 1rem;
    display: flex;
  }
}
</style>
