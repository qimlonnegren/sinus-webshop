<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>

    <LoginRegistrationModal v-show="LoginRegistrationModalIsOpen" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LoginRegistrationModal from "./components/LoginRegistrationModal.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
  margin: 0px;
}

body {
  margin: 0px;
}

#nav {
  padding: 0px;
  margin: 0px;

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
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
