<template>
    <div id="booksContainer">
        <BookView v-for="book in books" :key="book.id" :book="book"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BookView from './BookView.vue';
export default {
    name: 'BooksView',
    components: {
        BookView
    },
    props: {
        bookIds: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters(['books'])
    },
    methods: {
        ...mapActions(['fetchBooks', 'deleteBook']),
        handleDeleteBook(id) {
            this.deleteBook(id);
        }
    },
    mounted() {
        this.fetchBooks();
    },
    data() {
        return {
            fetchedBooks: []
        }
    },
    watch: {
    bookIds: {
      immediate: true,
      handler(newBookIds) {
        this.fetchedBooks = [];
        newBookIds.forEach(id => {
          fetch('http://localhost:8110/admin/book/' + id)
            .then(res => res.json())
            .then(data => {
              this.fetchedBooks.push(data);
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
        });
      }
    },
    mounted() {
        console.log('bookIds in BooksView:', this.bookIds);

        if (Array.isArray(this.bookIds)) {
        this.bookIds.forEach(id => {
            fetch(`http://localhost:8110/admin/book/${id}`)
            .then(res => res.json())
            .then(data => {
                this.books.push(data);
            })
            .catch(error => console.error('Fetch error:', error));
        });
        } else {
        console.error('bookIds is not an array:', this.bookIds);
        }
      
    }
    }}
</script>

<style scoped>
#booksContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}
</style>