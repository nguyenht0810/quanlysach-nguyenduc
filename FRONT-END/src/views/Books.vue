<template>
  <div>
    <h1>Quản Lý Sách</h1>
    <BookForm 
      @bookAdded="handleBookAdded"
      @bookUpdated="handleBookUpdated"
      :initialBook="selectedBook" 
    />
    <BookList 
      :books="books" 
      @editBook="handleEditBook"
      @deleteBook="handleDeleteBook"
    />
  </div>
</template>

<script>
import BookForm from '@/components/BookForm.vue';
import BookList from '@/components/BookList.vue';
import axios from 'axios';

export default {
  name: 'Books',
  components: {
    BookForm,
    BookList,
  },
  data() {
    return {
      books: [],
      selectedBook: null,
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/books');
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    handleBookAdded() {
      this.fetchBooks();
      this.selectedBook = null; // Reset selected book after adding
    },
    handleBookUpdated() {
      this.fetchBooks();
      this.selectedBook = null; // Reset selected book after updating
    },
    handleEditBook(book) {
      this.selectedBook = book; // Set the selected book to the one being edited
    },
    async handleDeleteBook(bookId) {
      try {
        await axios.delete(`http://localhost:3000/books/${bookId}`);
        alert('Book deleted successfully');
        this.fetchBooks();
      } catch (error) {
        console.error(error);
        alert('Error deleting book');
      }
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header Styles */
h1 {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

.book-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.book-form input,
.book-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
}

.book-form button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.book-form button:hover {
  background-color: #45a049;
}

/* Book List Styles */
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.book-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.book-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.book-card p {
  margin-bottom: 10px;
}

.book-card button {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 5px;
}

.book-card button:hover {
  background-color: #45a049;
}
</style>