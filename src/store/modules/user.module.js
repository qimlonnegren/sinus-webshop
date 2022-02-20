/* eslint-disable */
import Actions from "@/store/action.types";
import Mutations from "@/store/mutation.types";
import Vue from "vue";
import * as API from "../../api/index.mock";
import store from "@/store";

const state = () => ({
  token: null,
  userData: {},
});

const getters = {};

const actions = {
  async [Actions.LOGIN](context, credentials) {
    const { status, data } = await API.authUser();
    if (status === 200) {
      context.commit(Mutations.SAVE_LOGIN, data);
      context.commit(Mutations.CLOSE_LOGIN_REGISTRATION_MODAL);
    }
  },
  [Actions.LOGOUT](context) {
    context.commit(Mutations.CLEAR_USER_DATA);
  },
  async [Actions.REGISTER](context) {
    const { status } = await API.registerUser();
    if (status === 200) {
      return "success";
    }

    context.commit(Mutations.REGISTER);
  },
};

const mutations = {
  async [Mutations.SAVE_LOGIN](state, token) {
    state.token = token;
    const { status, data } = await API.getUser();
    state.userData = data;
  },
  [Mutations.CLEAR_USER_DATA](state) {
    state.user = null;
    state.token = null;
  },
  [Mutations.REGISTER](state) {},
};

export default {
  state,
  getters,
  actions,
  mutations,
};
