export default {
  state: {
    detailId: null
  },
  mutations: {
    setDetailId(state, payload){{
      state.detailId = payload
    }}
  },
  actions: {
    setDetailId({commit}, payload){
      commit('setDetailId', payload)
    }
  },
  getters: {
    detailId(state){
      return state.detailId
    }
  }
}