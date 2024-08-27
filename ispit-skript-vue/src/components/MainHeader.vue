<template>
    <div id="main">
      <h4 id="title">
        Online library
      </h4>
    <nav id="nav">
      <router-button to="/">Home</router-button>
      <router-button to="/books">Books</router-button>
      <router-button to="/categories">Categories</router-button>
      <router-button v-if="!isLoggedIn" to="/login">Login</router-button>
      <router-button v-if="isLoggedIn" to="/logout">Logout</router-button>
    </nav>
    <h1 id="line"></h1>
    <p>{{ isLoggedIn ? 'Logged in' : 'Logged out' }}</p>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RouterButton from './RouterButton.vue'

export default {
    name: 'MainHeader',
    components: {
      RouterButton
    },
    computed: {
    ...mapGetters(['isAuthenticated']),
    isLoggedIn() {
      return !!this.isAuthenticated; 
    }
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
#main {  
  align-items: center;
}
#nav {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  font-family: 'Times New Roman', Times, serif;
}
#title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 36px;
}
#line {
  content: "";
  width: 100%;
  border-bottom: 2px solid darkgrey;
}
</style>