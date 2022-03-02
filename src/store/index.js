/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import Actions from "./action.types";
import Mutations from "./mutation.types";
import UserModule from "./modules/user.module";
import * as API from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginRegistrationModalVisible: false,
    items: [],
    products: {},
    cart: [],
    wishlist: [],
  },
  mutations: {
    [Mutations.OPEN_LOGIN_REGISTRATION_MODAL](state) {
      state.loginRegistrationModalVisible = true;
    },
    [Mutations.CLOSE_LOGIN_REGISTRATION_MODAL](state) {
      state.loginRegistrationModalVisible = false;
    },
    // here
    saveItems(state, products) {
      for (let product of products) {
        state.items.push(product);
        Vue.set(state.products, product.id, product);
      }
    },
    saveProductsInCart(state, product) {
      const inCart = state.cart.find((cartItem) => cartItem.id == product.id);
      if (inCart) {
        inCart.amount++;
      } else {
        state.cart.push({
          id: product.id,
          amount: 1,
        });
      }
    },
    updateCart(state, { id, amount }) {
      const inCart = state.cart.find((cartItem) => cartItem.id == id);
      inCart.amount = amount;
    },
    removeProduct(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1);
    },
    incItemButton(state, product) {
      state.cart[state.cart.indexOf(product)].amount++;
    },
    decItemButton(state, product) {
      state.cart[state.cart.indexOf(product)].amount--;
    },
    addToWishlist(state, product) {
      if (!state.wishlist.includes(product)) {
        state.wishlist.push(product);
      }
    },
  },
  actions: {
    [Actions.OPEN_LOGIN_REGISTRATION_MODAL](context) {
      context.commit(Mutations.OPEN_LOGIN_REGISTRATION_MODAL);
    },
    [Actions.CLOSE_LOGIN_REGISTRATION_MODAL](context) {
      context.commit(Mutations.CLOSE_LOGIN_REGISTRATION_MODAL);
    },
    async fetchItems(context) {
      const response = await API.getItems();
      context.commit("saveItems", response.data);
    },
    addToCart({ commit }, product) {
      commit("saveProductsInCart", product);
    },
    updateCartAmount({ commit }, { id, amount }) {
      commit("updateCart", { id, amount });
    },
    incItemButton(context, product) {
      context.commit("incItemButton", product);
    },
    decItemButton(context, product) {
      context.commit("decItemButton", product);
    },
    removeCartProduct({ commit }, product) {
      commit("removeProduct", product);
    },
    addToWishlist({ commit }, product) {
      commit("addToWishlist", product);
    },

    async fetchItems(context) {
      const response = await API.getItems();
      context.commit("saveItems", response.data);
    },
    addToCart({ commit }, product) {
      commit("saveProductsInCart", product);
    },
    updateCartAmount({ commit }, { id, amount }) {
      commit("updateCart", { id, amount });
    },
    incItemButton(context, product) {
      context.commit("incItemButton", product);
    },
    decItemButton(context, product) {
      context.commit("decItemButton", product);
    },
  },
  getters: {
    cart(state) {
      return state.cart.map((product) => ({
        id: product.id,
        title: state.products[product.id].title,
        category: state.products[product.id].category,
        imgFile: state.products[product.id].imgFile,
        amount: product.amount,
        price: state.products[product.id].price,
      }));
    },
    cartTotal(state) {
      return state.cart.reduce((total, product) => {
        return total + product.amount * state.products[product.id].price;
      }, 0);
    },
    // cartAmount (state){
    //     let totalAmount = 0;
    //     state.cart.forEach(cartItem => {
    //         totalAmount += cartItem.amount
    //     })
    //     return totalAmount;
    // },
  },
  modules: {
    userModule: UserModule,
  },
});
