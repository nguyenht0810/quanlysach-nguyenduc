<template>
  <div class="book-list-container">
    <h2>Danh Mục Sách</h2>
    <div class="search-container">
      <input type="text" v-model="searchKeyword" placeholder="Tìm kiếm...">
    </div>
    <div class="table-container">
      <table class="book-table">
        <thead>
          <tr>
            <th>Mã Sách</th>
            <th>Tên Sách</th>
            <th>Đơn Giá</th>
            <th>Số Quyển</th>
            <th>Năm Xuất Bản</th>
            <th>Mã NXB</th>
            <th>Nguồn Gốc</th>
            <th>Tác Giả</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredBooks.length === 0" class="no-results-row">
            <!-- <td colspan="8">Không có kết quả tìm kiếm</td> -->
          </tr>
          <tr v-for="book in filteredBooks.length ? filteredBooks : books" :key="book.MaSach" class="book-row">
            <td>{{ book.MaSach }}</td>
            <td>{{ book.TenSach }}</td>
            <td>{{ book.DonGia }}</td>
            <td>{{ book.SoQuyen }}</td>
            <td>{{ book.NamXuatBan }}</td>
            <td>{{ book.MaNXB }}</td>
            <td>{{ book.NguonGoc }}</td>
            <td>{{ book.TacGia }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      searchKeyword: ''
    };
  },
  computed: {
    filteredBooks() {
      if (!this.searchKeyword) {
        return [];
      }
      return this.books.filter(book => 
        book.MaSach.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        book.TenSach.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        book.TacGia.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        book.NamXuatBan.toString().includes(this.searchKeyword) ||
        book.MaNXB.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        book.NguonGoc.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/books');
      this.books = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

.book-list-container {
  font-family: 'Quicksand', sans-serif;
  /* max-width: 800px; */
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.table-container {
  max-height: 300px;
  overflow-y: auto;
}

.book-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.book-row:hover {
  background-color: #f2f2f2;
}

.no-results-row {
  text-align: center;
  font-weight: bold;
  color: red;
}

h2 {
  font-family: 'Quicksand', sans-serif;
  margin-top: 20px;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
