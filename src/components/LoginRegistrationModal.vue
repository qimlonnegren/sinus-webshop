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
        <input v-model="login.email" class="input" type="email" placeholder="Username" required />
        <input
          v-model="login.password"
          class="input"
          placeholder="Password"
          type="password"
          required
        />
        <p v-on:click="toggleForgotPasswordResponse" class="forgotPassword">I forgot my password</p>
        <p v-if="forgotPasswordResponse" class="forgotPasswordResponse">Sucks to be you!</p>
      </form>
      <form v-if="!isLogin && !registerSuccess" class="form">
        <input v-model="register.email" class="input" type="email" placeholder="Email" required />
        <input
          v-model="register.password"
          class="input"
          placeholder="Password"
          type="password"
          required
        />
        <input v-model="register.name" class="input" type="text" placeholder="Name" required />
        <input
          v-model="register.address.street"
          class="input"
          type="text"
          placeholder="Address"
          required
        />
        <div class="inputRow">
          <input
            v-model="register.address.zip"
            class="input"
            type="text"
            placeholder="Zip"
            required
          />
          <input
            v-model="register.address.city"
            class="input"
            type="text"
            placeholder="City"
            required
          />
        </div>
      </form>
      <div class="registerSuccess" v-if="registerSuccess">
        <h2>Registration was a success!</h2>
        <h2>Log in to view account.</h2>
      </div>
      <div class="line"></div>
      <div v-if="!registerSuccess" class="buttonContainer">
        <button v-if="isLogin" class="button greenButton" v-on:click="handleLogin">Login</button>
        <button v-if="!isLogin" class="button greenButton" v-on:click="handleRegister">
          Register
        </button>
        <button class="button greyButton" v-on:click="closeModal">Close</button>
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
      login: {
        email: "",
        password: "",
      },
      register: {
        email: "",
        password: "",
        name: "",
        address: {
          city: "",
          street: "",
          zip: null,
        },
      },
    };
  },

  methods: {
    closeModal() {
      this.$store.dispatch(Actions.CLOSE_LOGIN_REGISTRATION_MODAL);
    },
    handleLogin() {
      this.$store.dispatch(Actions.LOGIN, this.login);
      this.login = {
        email: "",
        password: "",
      };
    },
    switchMode(boolean) {
      this.registerSuccess = false;
      this.isLogin = boolean;
    },
    async handleRegister() {
      const response = await this.$store.dispatch(Actions.REGISTER, this.register);
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
  cursor: default;
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

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 20px;
}

.greenButton {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%), #0fa81f;
  color: white;
}

.greyButton {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3045) 0%, rgba(255, 255, 255, 0) 100%), #dbdbdb;
  color: black;
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
