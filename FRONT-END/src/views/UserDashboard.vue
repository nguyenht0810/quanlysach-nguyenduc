<template>
  <div>
    <h1>Mượn Sách</h1>
    <UserBookList :books="books" />
    <BorrowForm @bookBorrowed="fetchBorrowings" />
    <div class="my-4"></div>
    <ReturnForm @bookReturned="fetchBorrowings" />
  </div>
</template>

<script>
import UserBookList from "@/components/UserBookList.vue";
import BorrowForm from "@/components/BorrowForm.vue";
import ReturnForm from "@/components/ReturnForm.vue";
import axios from "axios";

export default {
  name: "Borrowings",
  components: {
    UserBookList,
    BorrowForm,
    ReturnForm,
  },
  data() {
    return {
      borrowings: [],
    };
  },
  methods: {
    async fetchBorrowings() {
      try {
        const response = await axios.get("http://localhost:3000/borrowings");
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
