<template>
  <div class="borrowed-books-container">
    <h2>Danh Sách Các Độc Giả Đang Mượn Sách </h2>
    <div class="search-container">
      <input type="text" v-model="searchKeyword" placeholder="Tìm kiếm...">
    </div>
    <div class="borrowed-books-list-container">
      <ul class="borrowed-books-list">
        <li v-if="filteredBorrowings.length === 0" class="no-results-item">
          <!-- Không có kết quả tìm kiếm -->
        </li>
        <li v-for="borrowing in filteredBorrowings.length ? filteredBorrowings : borrowingsWithFormattedDate" :key="borrowing._id" class="borrowed-book-item">
          {{ borrowing.MaDocGia }} đã mượn sách có mã là: {{ borrowing.MaSach }} vào ngày: {{ borrowing.formattedNgayMuon }} và sẽ trả vào ngày: {{ borrowing.formattedNgayTra }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dateMixin from '@/mixins/dateMixin.js';
import axios from 'axios';
export default {
  mixins: [dateMixin],
  data() {
    return {
      borrowings: [],
      searchKeyword: ''
    };
  },
  computed: {
    borrowingsWithFormattedDate() {
      return this.borrowings.map(borrowing => ({
        ...borrowing,
        formattedNgayMuon: this.formatDate(borrowing.NgayMuon),
        formattedNgayTra: this.formatDate(borrowing.NgayTra),
      }));
    },
    filteredBorrowings() {
      if (!this.searchKeyword) {
        return [];
      }
      return this.borrowingsWithFormattedDate.filter(borrowing => 
        borrowing.MaDocGia.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        borrowing.MaSach.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        borrowing.formattedNgayMuon.includes(this.searchKeyword) ||
        borrowing.formattedNgayTra.includes(this.searchKeyword)
      );
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/borrowings');
      this.borrowings = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

.borrowed-books-container {
  font-family: 'Quicksand', sans-serif;
  /* max-width: 800px; */
  margin: 0 auto;
  margin-top: 50px;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.borrowed-books-list {
  list-style-type: none;
  padding: 0;
}

.borrowed-book-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.borrowed-book-item:hover {
  background-color: #f2f2f2;
}

h2 {
  font-family: 'Quicksand', sans-serif;
  margin-top: 20px;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.search-container {
  margin-bottom: 20px;
}

.search-container input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.borrowed-books-list-container {
  max-height: 300px;
  overflow-y: auto;
}

.no-results-item {
  text-align: center;
  font-weight: bold;
  color: red;
}
</style>
