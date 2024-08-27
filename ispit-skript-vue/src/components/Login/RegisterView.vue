<template>
    <div class="register-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="First Name" required />
        <input v-model="lastName" type="text" placeholder="Last Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
        <select v-model="role" required>
          <option value="" disabled>Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
        </select>
        <button type="submit">Register</button>
        <p v-if="error">{{ error }}</p> 
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link>.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        error: null 
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          this.error = "Passwords do not match!";
          return;
        }
  
        try {
          await axios.post('http://localhost:8110/auth/register', {
            name: this.name,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            role: this.role
          });
          this.$router.push('/login'); 
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input, select {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
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
  