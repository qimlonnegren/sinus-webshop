<template>
  <div class="wrapper">
    <img src="@/assets/Sinus-Logo.svg" />
    <nav>
      <section class="nav-top">
        <span class="span-left">
          <router-link v-if="!isOpen" to="/"> Home </router-link>
          <router-link v-if="!isOpen" to="/products"> Products </router-link>
          <router-link v-if="!isOpen" to="/contact"> Contact </router-link>
        </span>

        <span class="span-right">
          <img
            class="icon"
            src="@/assets/Heart-icon.svg"
            width="30"
            alt="Heart icon"
            @click="showList = true"
          />
          <img
            v-if="!isLoggedIn"
            v-on:click="openLoginRegistrationModal"
            class="icon"
            src="@/assets/Profile-icon.svg"
            width="30"
          />
          <Wishlist
            v-if="showList"
            @back="showList = false"
            @list="showList = false"
          />
          <router-link class="link" to="/Cart"
            ><img class="icon" src="@/assets/Bag-icon.svg" width="30"
          /></router-link>
        </span>

        <div class="profileButtonContainer" v-if="isLoggedIn">
          <img
            class="profile-icon"
            src="@/assets/Profile-icon.svg"
            width="30"
            v-on:click="openProfileMenu"
          />
          <div class="profileMenuContainer" v-if="profileMenuIsOpen">
            <router-link to="/profile" class="profileMenuItem"
              >My account</router-link
            >
            <p class="profileMenuItem" v-on:click="logOut">Log out</p>
          </div>
        </div>
      </section>

      <section class="nav-bottom">
        <a>Attire</a>
        <a>Skateboards</a>
        <a>Accessories</a>
      </section>
    </nav>
  </div>
</template>

<script>
import Actions from "../store/action.types";
import Wishlist from "../components/Wishlist.vue";

export default {
  name: "Header",
  components: {
    Wishlist,
  },

  data() {
    return {
      profileMenuIsOpen: false,
      isOpen: false,
      showList: false,
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

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  background: #333333;
  color: #ffffff;
  height: 138px;
  width: 100%;
  // margin-bottom: 35px;
}

img {
  margin: 1rem;
  display: flex;
}

nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 138px;

  .nav-top {
    display: flex;
    justify-content: flex-end;
    height: 55%;
  }
  .nav-bottom {
    display: flex;
    justify-content: flex-end;
    background-image: linear-gradient(to left, black, #333333);
    height: 45%;
  }

  .nav-bottom a {
    margin: 1rem 4rem;
  }

  a {
    text-decoration: none;
    margin: 1rem 2rem;
    color: #ffffff;
    // font-size: 2rem;
    font-weight: 100;
  }

  .icons {
    display: flex;
    justify-content: flex-end;
  }

  .icon {
    width: 25px;
    margin: 1.4rem 1rem;
    display: flex;
    cursor: pointer;
  }
}

.link {
  margin: 0px;
}

.span-right {
  display: flex;
}

.profile-icon {
  height: 30px;
}

// .wrapper {
//   //  display: flex;
//   // background: #333333;
//   // color: #ffffff;
//   // height: 160px;
//   display: flex;
//   justify-content: flex-end;
//   flex-direction: row;
//   background: #333333;
//   color: #ffffff;
//   height: 138px;
//   width: 100%;
// }

// img {
//   margin: 1rem;
//   display: flex;
//   // justify-content: right;
//   cursor: pointer;
// }

// nav {
//   display: flex;
//   justify-content: space-evenly;

//   a {
//     text-decoration: none;
//     margin: 1rem;
//     color: #ffffff;
//     font-size: 2rem;
//     font-weight: 100;
//   }

//   .icon {
//     margin: 1rem;
//     display: flex;
//   }
//   nav {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 70px;

//     .nav-top {
//       display: flex;
//       justify-content: flex-end;
//     }
//     .nav-bottom {
//       display: flex;
//       justify-content: flex-end;
//       background-image: linear-gradient(to left, black, #333333);
//     }

//     .nav-bottom a {
//       margin: 1rem 4rem;
//     }

//     a {
//       text-decoration: none;
//       margin: 1rem 2rem;
//       color: #ffffff;
//       font-size: 2rem;
//       font-weight: 100;
//     }

//     .icons {
//       display: flex;
//       justify-content: flex-end;
//     }

//     .icon {
//       width: 25px;
//       margin: 1.4rem 1rem;
//       display: flex;
//       cursor: pointer;
//     }

//     .link {
//       margin: 0px;
//       padding: 0px;
//       // margin: 1rem;
//     }
//   }

//   .profileIcon {
//     height: min-content;
//   }

//   .profileButtonContainer {
//     display: flex;
//     align-items: center;
//     position: relative;
//   }

//   .profileMenuContainer {
//     position: absolute;
//     top: 110px;
//     background-color: white;
//     width: max-content;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//     padding: 15px;
//   }

//   .profileMenuItem {
//     color: black;
//     font-size: 1rem;
//     margin: 0;
//     cursor: pointer;
//   }
// }
</style>
