import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: localStorage.getItem('authToken') || null,
    isLoggedIn: !!localStorage.getItem('authToken'),
    bookIds: [],
    books: []
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
      state.isLoggedIn = true;
      localStorage.setItem('authToken', token); 
    },
    logout(state) {
        state.authToken = null;
        state.isLoggedIn = false;
        localStorage.removeItem('authToken');

    },
    setBookIds(state, bookIds) {
        state.bookIds = bookIds;
    },
    setBooks(state, books) {
      state.books = books;
    },
    deleteBook(state, id) {
      state.books = state.books.filter(book => book.id !== id);
      state.bookIds = state.bookIds.filter(bookId => bookId !== id);
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setAuthToken', token);
    },
    logout({ commit }) {
      commit('logout');
    },
    async fetchBookIds({ commit }) {
        try {
            const response = await axios.get('http://localhost:8110/admin/book');
            const bookIds = response.data.map(book => book.id);
            commit('setBookIds', bookIds);
        } catch (error) {
            console.error('Failed to fetch books:', error);
        }
    },
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get('http://localhost:8110/admin/book');
        commit('setBooks', response.data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    },
    async deleteBook({ commit, state }, id) {
      try {
        await axios.delete(`http://localhost:8110/admin/book/${id}`, {
          headers: { Authorization: `Bearer ${state.authToken}` }
        });
        commit('deleteBook', id);
      } catch (error) {
        console.error('Failed to delete book:', error);
      }
    },
  },
  getters: {
    isAuthenticated: state => !!state.authToken,
    bookIds: state => state.bookIds,
    books: state => state.books
  }
});
