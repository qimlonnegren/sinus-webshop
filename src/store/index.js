import Vue from 'vue'
import Vuex from 'vuex'
import * as API from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        cart: [],

    },

    mutations: {
        saveItems(state, response) {
            state.items = response;
        },
        saveProductInCart(state, product){
            const inCart = state.cart.find(cartItem => cartItem.id == product.id)
            if(inCart){
                inCart.amount++
            } else {
                state.cart.push({id: product.id, amount: 1})
            }
        },
        
    },

    actions: {
        async fetchItems(context) {
            const response = await API.getItems();
            context.commit("saveItems", response.data);
        },
        addToCart({commit}, product){
            commit('saveProductInCart', product)
        },
    },

    modules: {}
})