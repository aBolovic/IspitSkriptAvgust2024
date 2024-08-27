<template>
    <div id="bookContainer">
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        <p>{{ book.year_of_publication }}</p>
        <p>{{ book.genre }}</p>
        <button @click="deleteBook(book.id)">
            <img src='@/assets/delete.png' alt="Delete"/>
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'BookView',
    props: {
        book: Object
    },
    methods: {
        ...mapActions(['deleteBook'])
    }
    
}
</script>

<style scoped>
#bookContainer {
    position: relative;
    font-family: 'Times New Roman', Times, serif;
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 150px;
    text-align: left;
} 
button {
    position: absolute;
    bottom: 5px;
    left: 10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}
button img {
    width: 20px; 
    height: 20px; 
}

</style>