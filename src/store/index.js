import Vue from 'vue';
import Vuex from 'vuex';


import headline from './modules/headline';
import source from './modules/source';
import history from './modules/history';

Vue.use (Vuex);

export default new Vuex.Store ({

  modules: {
    headline,
    source,
    history,
  },
});
