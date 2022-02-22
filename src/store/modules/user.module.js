/* eslint-disable */
import Actions from "@/store/action.types";
import Mutations from "@/store/mutation.types";
import Vue from "vue";
// import * as API from "../../api/index.mock";
import * as API from "../../api/index";
import store from "@/store";

const state = () => ({
  token: null,
  userData: {
    name: "",
    email: "",
    role: "",
    address: {
      street: "",
      city: "",
      zip: null,
    },
  },
});

const getters = {};

const actions = {
  async [Actions.LOGIN](context, credentials) {
    const { status, data } = await API.authUser(credentials);
    if (status === 200) {
      await context.commit(Mutations.SAVE_LOGIN, data);
      await API.getUser(data.token).then((response) => {
        if (response.status === 200) {
          context.commit(Mutations.SAVE_USER_DATA, response.data);
          context.commit(Mutations.CLOSE_LOGIN_REGISTRATION_MODAL);
        }
      });
    }
  },
  [Actions.LOGOUT](context) {
    context.commit(Mutations.CLEAR_USER_DATA);
  },
  async [Actions.REGISTER](context, register) {
    const { status } = await API.registerUser(register);
    if (status === 200) {
      context.commit(Mutations.REGISTER);
      return "success";
    }
  },
};

const mutations = {
  async [Mutations.SAVE_LOGIN](state, token) {
    state.token = token.token;
  },
  [Mutations.SAVE_USER_DATA](state, data) {
    state.userData = data;
  },
  [Mutations.CLEAR_USER_DATA](state) {
    state.userData = null;
    state.token = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
