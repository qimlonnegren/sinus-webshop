/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import Actions from "./action.types";
import Mutations from "./mutation.types";
import UserModule from "./modules/user.module";
import * as API from "../api/index.mock";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginRegistrationModalVisible: false,
  },
  mutations: {
    [Mutations.OPEN_LOGIN_REGISTRATION_MODAL](state) {
      state.loginRegistrationModalVisible = true;
    },
    [Mutations.CLOSE_LOGIN_REGISTRATION_MODAL](state) {
      state.loginRegistrationModalVisible = false;
    },
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
  },
  modules: {
    userModule: UserModule,
  },
});
