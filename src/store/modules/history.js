export const TYPES = {
  ADD_HISTORY_HEADLINE: 'ADD_HISTORY_HEADLINE',
};

const state = {
  articles: [],
};

const actions = {
  add_history_headline ({commit}, article) {
    commit (TYPES.ADD_HISTORY_HEADLINE, article);
  },
};

const mutations = {
  [TYPES.ADD_HISTORY_HEADLINE] (state, article) {
    state.articles = [...state.articles, article];
  },
};

export default {
  state,
  actions,
  mutations,
};
