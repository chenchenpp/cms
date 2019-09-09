export default {
  namespaced: true,
  state: {
    moudleA: 'moudleA1111111111111'
  },
  getters: {
    get_moudleA(state) {
      console.log(state);
      return state.moudleA;
    }
  },
  mutations: {
    set_moudleA(state, value) {
      state.moudleA = value;
    }
  },
  actions: {
    change_moudleA({ commit }, value) {
      commit('set_moudleA', value);
    }
  }
};
