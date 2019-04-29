import api from '../../api'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  cateposts: [],
  loaded: false
};

// getters
const getters = {
  // Returns an array all categories
  allCategories: state => state.all,
  allCategoriesLoaded: state => state.loaded,
  categorizedPosts: state => {
    return state.cateposts;
  },
};

// actions
const actions = {
  getCategorizedPosts ({ commit }, { categoryid }) {
    api.getCategorizedPosts(categoryid, categories => {
      commit(types.STORE_FETCHED_CATEGORIZED_POSTS, { categories });
    });
  },

  getAllCategories ({ commit }) {
    api.getCategories(categories => {
      commit(types.STORE_FETCHED_CATEGORIES, { categories })
      commit(types.CATEGORIES_LOADED, true)
      commit(types.INCREMENT_LOADING_PROGRESS)
    })
  },
};

// mutations
const mutations = {
  [types.STORE_FETCHED_CATEGORIZED_POSTS] (state, { categories }) {
    state.cateposts = categories
  },

  [types.STORE_FETCHED_CATEGORIES] (state, { categories }) {
    state.all = categories
  },

  [types.CATEGORIES_LOADED] (state, bool) {
    state.loaded = bool
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
