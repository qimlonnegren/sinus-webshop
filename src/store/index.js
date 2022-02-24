import Vue from 'vue'
import Vuex from 'vuex'
import * as API from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: []

    },

    mutations: {
        saveItems(state, response) {
            state.items = response;
        },
    },

    actions: {
        async fetchItems(context) {
            const response = await API.getItems();
            context.commit("saveItems", response.data);
        },
    },

    modules: {}
})