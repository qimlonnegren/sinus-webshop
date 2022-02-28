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
        cart: [],
    },
    mutations: {
        [Mutations.OPEN_LOGIN_REGISTRATION_MODAL](state) {
            state.loginRegistrationModalVisible = true;
        },
        [Mutations.CLOSE_LOGIN_REGISTRATION_MODAL](state) {
            state.loginRegistrationModalVisible = false;
        },
        saveItems(state, response) {
            state.items = response;
        },
        saveProductsInCart(state, product){
            const inCart = state.cart.find(cartItem => cartItem.id == product.id)
            if(inCart){
                inCart.amount++
            } else {
                state.cart.push({id: product.id, amount: 1})
            }
        },
        // saveCart(state){
        //     window.localStorage.setItem('cart', JSON.stringify(state.cart));
        // }
        
        // async [Mutations.SAVE_LOGIN](state, token) {
        //   state.userModule.token = token;
        //   const { status, data } = await API.getUser();
        //   state.userModule.userData = data;
        //   state.loginRegistrationModalVisible = false;
        // },
        // [Mutations.CLEAR_USER_DATA](state) {
        //   state.userModule.user = null;
        //   state.userModule.token = null;
        // },
        // [Mutations.REGISTER](state) {},
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
            console.log(response.data)
            context.commit("saveItems", response.data);
        },
        addToCart({commit}, product){
            commit('saveProductsInCart', product)
        },
    },

    getters: {
        cart(state){
            return state.cart.map( cartItem => ({
                id: cartItem.id,
                title: state.items[cartItem.id].title,
                imgFile: state.items[cartItem.id].imgFile,
                amount: cartItem.amount
            }))
        },
    },
        // async [Actions.LOGIN](context, credentials) {
        //   const { status, data } = await API.authUser();
        //   context.commit(Mutations.SAVE_LOGIN, data);
        // },
        // [Actions.LOGOUT](context) {
        //   context.commit(Mutations.CLEAR_USER_DATA);
        // },
        // async [Actions.REGISTER](context) {
        //   const { status } = await API.registerUser();
        //   if (status === 200) {
        //     return "success";
        //   }

        //   context.commit(Mutations.REGISTER);
        // },
    modules: {
        userModule: UserModule,
    },
});