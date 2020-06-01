export const TYPES = {
  FETCH_TOP_HEADLINES: 'FETCH_TOP_HEADLINES',
  SET_LOADER_HEADLINE: 'SET_LOADER_HEADLINE',
  UPDATE_HEADLINE: 'UPDATE_HEADLINE',
};

const state = {
  articles: [],
  totalResults: 0,
  isLoading: false,
};

const actions = {
  fetch_headlines ({commit}, params) {
    commit (TYPES.FETCH_TOP_HEADLINES, params);
  },
  update_headline ({commit}, params) {
    commit (TYPES.UPDATE_HEADLINE, params);
  },
  set_loader_headline ({commit}, params) {
    commit (TYPES.SET_LOADER_HEADLINE, params);
  },

};

const mutations = {
  [TYPES.FETCH_TOP_HEADLINES] (state, data) {
    state.articles = data.articles;
    state.totalResults = data.totalResults;
  },
  [TYPES.UPDATE_HEADLINE] (state, params) {
    if (params.index !== -1)
      state.articles.splice (params.index, 1, params.article);
  },
  [TYPES.SET_LOADER_HEADLINE] (state, value) {
    state.isLoading = value;
  },
};

export default {
  state,
  actions,
  mutations,
};
