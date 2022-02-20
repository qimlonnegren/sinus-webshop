<template>
  <div class="modalContainer">
    <div class="modalWrapper">
      <img class="profileIcon" src="@/assets/Profile-icon-black.svg" />
      <div class="modeContainer">
        <h2 class="header" @click="switchMode(true)" v-bind:class="{ active: isLogin }">Log in</h2>
        <h2 class="header" @click="switchMode(false)" v-bind:class="{ active: !isLogin }">
          Register
        </h2>
      </div>
      <div class="line"></div>
      <form v-if="isLogin" class="form">
        <input class="input" type="text" placeholder="Username" />
        <input class="input" type="text" placeholder="Password" />
        <p v-on:click="toggleForgotPasswordResponse" class="forgotPassword">I forgot my password</p>
        <p v-if="forgotPasswordResponse" class="forgotPasswordResponse">Sucks to be you!</p>
      </form>
      <form v-if="!isLogin && !registerSuccess" class="form">
        <input class="input" type="text" placeholder="Email" />
        <input class="input" type="text" placeholder="Password" />
        <input class="input" type="text" placeholder="Name" />
        <input class="input" type="text" placeholder="Adress" />
        <div class="inputRow">
          <input class="input" type="text" placeholder="Zip" />
          <input class="input" type="text" placeholder="City" />
        </div>
      </form>
      <div class="registerSuccess" v-if="registerSuccess">
        <h2>Registration was a success!</h2>
        <h2>Log in to view account.</h2>
      </div>
      <div class="line"></div>
      <div v-if="!registerSuccess" class="buttonContainer">
        <button v-if="isLogin" class="button" v-on:click="login">Login</button>
        <button v-if="!isLogin" class="button" v-on:click="register">Register</button>
        <button class="button" v-on:click="closeModal">Close</button>
      </div>
      <img class="sinusLogo" src="@/assets/Sinus-Logo.svg" />
    </div>
  </div>
</template>

<script>
import Actions from "../store/action.types";
export default {
  name: "LoginRegistrationModal",
  data() {
    return {
      isLogin: true,
      registerSuccess: false,
      forgotPasswordResponse: false,
    };
  },

  methods: {
    closeModal() {
      this.$store.dispatch(Actions.CLOSE_LOGIN_REGISTRATION_MODAL);
    },
    login() {
      this.$store.dispatch(Actions.LOGIN);
    },
    switchMode(boolean) {
      this.registerSuccess = false;
      this.isLogin = boolean;
    },
    async register() {
      const response = await this.$store.dispatch(Actions.REGISTER);
      if (response === "success") {
        this.registerSuccess = true;
      }
    },
    toggleForgotPasswordResponse() {
      this.forgotPasswordResponse = !this.forgotPasswordResponse;
    },
  },
};
</script>

<style scoped lang="scss">
.modalContainer {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
}
.modalWrapper {
  max-height: 1000px;
  width: 550px;
  height: auto;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 20px;
  background-image: linear-gradient(to bottom left, #f6d4d5, #fdebd5);
}

.profileIcon {
  height: 80px;
  width: 80px;
  margin: 0;
  //   margin-top: 50px;
  margin-bottom: 10px;
}

.modeContainer {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.header {
  color: black;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid black;
}

.line {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 250px;
  margin-top: 35px;
  margin-bottom: 35px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 422px;
  position: relative;
}

.inputRow {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: -38px;
}

.input {
  width: 100%;
  height: 50px;
}

.forgotPassword {
  margin-top: -30px;
  align-self: flex-end;
  cursor: pointer;
}

.forgotPasswordResponse {
  align-self: flex-end;
  cursor: pointer;
  position: absolute;
  bottom: -20px;
  color: red;
}

.input:not(:last-child) {
  margin-bottom: 38px;
}

.buttonContainer {
  width: 420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button {
  width: 200px;
  height: 50px;
  border-radius: 32px;
  border: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%), #0fa81f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.sinusLogo {
  width: 116px;
  height: 41px;
  margin: 0;
  align-self: flex-start;
  margin-top: 41px;
  margin-left: 20px;
  cursor: default;
}
</style>
