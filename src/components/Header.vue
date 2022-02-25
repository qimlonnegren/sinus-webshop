<template>
  <div class="wrapper">
    <img src="@/assets/Sinus-Logo.svg" />
    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/products"> Products </router-link>
      <router-link to="/contact"> Contact </router-link>

      <img class="icon" src="@/assets/Search-icon.svg" width="30" />
      <img
        class="icon"
        src="@/assets/Heart-icon.svg"
        width="30"
        alt="Heart icon"
        @click="showList = true"
      />
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
      <Wishlist v-if="showList" @back="showList = false" @list="showList = false" />
      <!-- <img class="icon" src="@/assets/Bag-icon.svg" width="30" /> -->
      <router-link class="link" to="/Cart"
        ><img class="icon" src="@/assets/Bag-icon.svg" width="30"
      /></router-link>
    </nav>
    <SearchField v-if="isOpen" />
  </div>
  <!-- <section class="nav-top">
            <router-link v-if="!isOpen" to="/"> Home </router-link>
            <router-link v-if="!isOpen" to="/products"> Products </router-link>
            <router-link v-if="!isOpen" to="/contact"> Contact </router-link>

            <img class="icon" src="@/assets/Search-icon.svg" @click="isOpen =!isOpen"/>
            <img 
            class="icon" 
            src="@/assets/Heart-icon.svg" 
            width="30"
            alt="Heart icon"
            @click="showList=true"
            />
            
            
            <img class="icon" src="@/assets/Profile-icon.svg" />
            
        
        </section>
        
        <section class="nav-bottom">
            <a>Attire</a>
            <a>Skateboards</a>
            <a>Sale</a>
        </section> -->
  <!-- </nav> -->
  <!-- <SearchField v-if="isOpen"/>
 </div> -->
</template>

<script>
import Actions from "../store/action.types";
import SearchField from "../components/SearchField.vue";
import Wishlist from "../components/Wishlist.vue";
export default {
  name: "Header",
  components: {
    SearchField,
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

<style lang="scss">
.wrapper {
  //  display: flex;
  // background: #333333;
  // color: #ffffff;
  // height: 160px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  background: #333333;
  color: #ffffff;
  height: 138px;
  width: 100%;
}

img {
  margin: 1rem;
  display: flex;
  // justify-content: right;
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
  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70px;

    .nav-top {
      display: flex;
      justify-content: flex-end;
    }
    .nav-bottom {
      display: flex;
      justify-content: flex-end;
      background-image: linear-gradient(to left, black, #333333);
    }

    .nav-bottom a {
      margin: 1rem 4rem;
    }

    a {
      text-decoration: none;
      margin: 1rem 2rem;
      color: #ffffff;
      font-size: 2rem;
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

    .link {
      margin: 0px;
      padding: 0px;
      // margin: 1rem;
    }
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
