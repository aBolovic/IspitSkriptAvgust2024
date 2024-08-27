<template>
    <div id="loginContainer">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p v-if="error">{{ error }}</p> 
      </form>
      <p>Don't have an account? <router-link to="/register">Register here</router-link>.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null 
      };
    },
    methods: {
      ...mapActions(['login']),
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:8110/auth/login', {
            email: this.email,
            password: this.password
          });
          this.login(response.data.token);
          this.$router.push('/books');
        } catch (error) {
          this.error = error.response.data.error; 
        }
      }
    }
  };
  </script>
  
  <style scoped>
  #loginContainer {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-family: 'Times New Roman', Times, serif;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  p {
    color: grey; 
  }
  </style>
  