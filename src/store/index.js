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
        attire: [],
        skateboards: [],
        accessories: [],
        singleProduct: [],

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
            state.items = products;
            for (let product of products) {
                Vue.set(state.products, product.id, product);
            }
        },
        saveSingleProduct(state, data) {
            state.singleProduct = data;
            Vue.set(state.products, product.id, product)
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
        saveAttireCategory(state, response) {
            state.attire = response;
        },
        saveSkateboardCategory(state, response) {
            state.skateboards = response;
        },
        saveAccessoriesCategory(state, response) {
            state.accessories = response;
        },
        // saveMoreAttire(state, res){
        //     res.forEach((product) => {
        //         state.attire.push(product);
        //     });
        // },

    },

    actions: {
        [Actions.OPEN_LOGIN_REGISTRATION_MODAL](context) {
            context.commit(Mutations.OPEN_LOGIN_REGISTRATION_MODAL);
        },
        [Actions.CLOSE_LOGIN_REGISTRATION_MODAL](context) {
            context.commit(Mutations.CLOSE_LOGIN_REGISTRATION_MODAL);
        },
        async fetchItems(context, payload) {
            const response = await API.getItems(payload.page);
            context.commit("saveItems", response.data);
        },
        async getSingleProduct(context, id) {
            const res = await API.getSingleProduct(id)
            context.commit("saveSingleProduct", res.data.post)
        },
        async getAttireCategory(context, payload) {
            const response = await API.getAttireCategory(payload.page);
            context.commit("saveAttireCategory", response.data);
        },
        async getSkateboardsCategory(context, payload) {
            const response = await API.getSkateboardsCategory(payload.page);
            context.commit("saveSkateboardCategory", response.data);
        },
        async getAccessoriesCategory(context, payload) {
            const response = await API.getAccessoriesCategory(payload.page);
            context.commit("saveAccessoriesCategory", response.data);
        },
        // async getMoreAttire(context){
        //     const res = await API.getMoreAttire(context.state.page);
        //     if (context.state.page <= 3){
        //         context.commit("getMore");
        //         context.commit("saveMoreAttire", res.data)
        //     }
        // },

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

    },
    getters: {
        cartTotal(state) {
            return state.cart.reduce((total, product) => {
                return total + product.amount * state.products[product.id].price;
            }, 0);
        },
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
    },
    modules: {
        userModule: UserModule,
    },
});