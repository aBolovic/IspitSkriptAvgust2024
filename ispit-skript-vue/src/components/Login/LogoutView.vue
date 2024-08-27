<template>
    <div id="logoutContainer">
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions(['logout']),
      async handleLogout() {
        try {
          await this.logout(); 
          this.$router.push('/login');
        } catch (error) {
          console.error('Logout failed:', error);
        }
      }
    }
  };
  </script>

  <style scoped>
  #logoutContainer {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {    
    width: 100%;
    padding: 10px;
    font-family: 'Times New Roman', Times, serif;
    background-color: #000000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
  </style>
  