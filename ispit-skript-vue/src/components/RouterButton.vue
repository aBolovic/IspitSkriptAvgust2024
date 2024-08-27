<template>
    <button @click="navigate" :class="buttonClass">
      <slot></slot> 
    </button>
  </template>
  
  <script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      },
      buttonClass: {
        type: String,
        default: ''
      }
    },
    methods: {
      navigate() {
      if (this.$route.path !== this.to) {
        this.$router.push(this.to).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            console.error('Navigation error:', err);
          }
        });
      }
    }
    }
  };
  </script>
  
  <style scoped>
  button {
    font-size: 16px;
    width: 100px;
    height: 25px;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    display: inline-block;
    background-color: #000000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
  
  </style>
  