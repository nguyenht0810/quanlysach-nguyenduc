<template>
  <div>
    <h1>Mượn Sách</h1>
    <BorrowForm @bookBorrowed="fetchBorrowings" />
    <div class="my-5"></div>
    <ReturnForm @bookReturned="fetchBorrowings" />
    <BorrowedList :borrowings="borrowings" />
  </div>
</template>

<script>
import BorrowForm from '@/components/BorrowForm.vue';
import ReturnForm from '@/components/ReturnForm.vue';
import BorrowedList from '@/components/BorrowedList.vue';
import axios from 'axios';

export default {
  name: 'Borrowings',
  components: {
    BorrowForm,
    ReturnForm,
    BorrowedList,
  },
  data() {
    return {
      borrowings: [],
    };
  },
  methods: {
    async fetchBorrowings() {
      try {
        const response = await axios.get('http://localhost:3000/borrowings');
        this.borrowings = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchBorrowings();
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
h1 {
  font-family: 'Quicksand', sans-serif;
  font-size: 32px;
  margin-top: 20px;
  text-align: center;
}
</style>