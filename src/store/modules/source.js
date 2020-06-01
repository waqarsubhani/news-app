export const TYPES = {
  FETCH_SOURCES: 'FETCH_SOURCES',
}

const state = {
  sources: [],
}

const actions = {
  fetch_sources({ commit }, params) {
    commit(TYPES.FETCH_SOURCES, params)
  },
}

const mutations = {
  [TYPES.FETCH_SOURCES](state, data) {
    state.sources = data.sources
  },
}

export default {
  state,
  actions,
  mutations,
}
