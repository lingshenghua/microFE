import { createStore, createLogger } from 'vuex'

import Base from './modules/base'

const store = createStore({
  state: {
    namespace: 'store',

    counter: 0,
    list: [1]
  },
  mutations: {
    increment (state) {
      state.counter ++
    },
    decrenebt (state) {
      state.counter --
    },

    addRow (state, payload) {
      state.list = state.list.concat(payload.data)
    }
  },

  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementAysc: async ({ commit }) => setTimeout(() => {
      commit('increment')
    }, 3000),
    addRowAsyc: async ({ commit }) => setTimeout(() => {
      commit('addRow', { data: [1, 2, 3] })
    }, 300)
  },
  plugins: [createLogger]
})

store.registerModule('base', Base)

export default store