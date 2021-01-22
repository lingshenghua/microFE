const state = {
  namespace: 'base',

  micorList: []
}

const mutations = {
  setState (state, { payload }) {
    state.micorList = state.micorList.concat(payload.data)
  },
  remove (state, { payload }) {
    state.micorList = payload.data
  }
}

const actions = {
  async updateMicorList ({ commit }, payload) {
    await commit('setState', payload)
  },
  async removeMicorList ({ commit }, payload) {
    await commit('remove', payload)
  }
}

export default {
  state,
  mutations,
  actions
}