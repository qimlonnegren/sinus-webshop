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
        
    },

    actions: {
        async fetchItems(context) {
            const response = await API.getItems();
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
        }
    },

    modules: {}
})