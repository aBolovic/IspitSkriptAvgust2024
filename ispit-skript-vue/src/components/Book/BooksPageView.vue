<template>
    <div>
        <div id="main-container">
        <button @click="prev()" :disabled="currentPage === 0">
          <img src='@/assets/left.png' alt="Previous"/>
        </button>
      <div id="booksContainer">
        <BooksView v-if="bookIds.length" :bookIds="bookIds.slice(currentPage*8, currentPage*8 +8)"/>
        <h4 v-else>
          ucitavaju se knjige
        </h4>
      </div>
      <button @click="next()" :disabled="isNextDisabled">
        <img src='@/assets/right.png' alt="Next"/>
      </button>
    </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BooksView from './BooksView.vue';
export default {
    name: 'BooksPageView',
    components: {
        BooksView
    },
    data() {
      return {
        currentPage: 0,
      };
    },
    computed: {
      ...mapState(['bookIds']),
      paginatedBookIds() {
        const start = this.currentPage * 8;
        return this.bookIds.slice(start, start + 8);
      },
      isNextDisabled() {
        return (this.currentPage + 1) * 8 >= this.bookIds.length;
      }
    },
    methods: {
        ...mapActions(['fetchBookIds']),
        prev() {
        if(this.currentPage > 0)
            this.currentPage--;
        },
        next() {
          if(!this.isNextDisabled) this.currentPage++;
        }
    },
    mounted() {
        this.fetchBookIds();
    }

}
</script>
    
<style scoped>
    #main-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
    }
    button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    }

    button img {
    width: 30px; 
    height: 30px;
    }

    button:disabled {
    opacity: 0.5; 
    cursor: not-allowed;
    }
    #booksContainer {
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;
    padding: 20px;
    gap: 20px; 
    flex-grow: 1;
    }
</style>