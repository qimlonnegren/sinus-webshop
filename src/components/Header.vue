<template>
  <div class="wrapper">
    <img src="@/assets/Sinus-Logo.svg" />
    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/products"> Products </router-link>
      <router-link to="/contact"> Contact </router-link>

      <img class="icon" src="@/assets/Search-icon.svg" width="30" />
      <img class="icon" src="@/assets/Heart-icon.svg" width="30" />
      <div class="profileButtonContainer" v-if="isLoggedIn">
        <img
          class="profileIcon"
          src="@/assets/Profile-icon.svg"
          width="30"
          v-on:click="openProfileMenu"
        />
        <div class="profileMenuContainer" v-if="profileMenuIsOpen">
          <router-link to="/my-account" class="profileMenuItem">My account</router-link>
          <p class="profileMenuItem" v-on:click="logOut">Log out</p>
        </div>
      </div>
      <img
        v-if="!isLoggedIn"
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
  data() {
    return {
      profileMenuIsOpen: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.userModule.token !== null;
    },
  },
  methods: {
    openLoginRegistrationModal() {
      this.$store.dispatch(Actions.OPEN_LOGIN_REGISTRATION_MODAL, "register");
    },
    openProfileMenu() {
      this.profileMenuIsOpen = !this.profileMenuIsOpen;
    },
    logOut() {
      this.$store.dispatch(Actions.LOGOUT);
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

  .profileIcon {
    height: min-content;
  }

  .profileButtonContainer {
    display: flex;
    align-items: center;
    position: relative;
  }

  .profileMenuContainer {
    position: absolute;
    top: 110px;
    background-color: white;
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  .profileMenuItem {
    color: black;
    font-size: 1rem;
    margin: 0;
    cursor: pointer;
  }
}
</style>
