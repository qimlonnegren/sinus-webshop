<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link>
    </div>
    <router-view />
    <footer></footer>
    <LoginRegistrationModal v-show="LoginRegistrationModalIsOpen" />
  </div>
</template>

<script>
import LoginRegistrationModal from "./components/LoginRegistrationModal.vue";

export default {
  name: "App",
  components: {
    LoginRegistrationModal,
  },
  computed: {
    LoginRegistrationModalIsOpen() {
      return this.$store.state.loginRegistrationModalVisible;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&family=Quicksand&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mulish {
  font-family: "Mulish", sans-serif;
  font-weight: 400;
}
.mulishBold {
  font-family: "Mulish", sans-serif;
  font-weight: 700;
}
</style>
