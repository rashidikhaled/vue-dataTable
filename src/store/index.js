import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    data: [], // Holds table data
    loading: false, // Loading state
    searchQuery: '', // Search query
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('SET_DATA', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        commit('SET_LOADING', false);
      }



    },
  },
  getters: {
    filteredData(state) {
      const filtered = state.data.filter((item) =>
        item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      console.log('Filtered Data:', filtered);
      return filtered;
    },
  },
});