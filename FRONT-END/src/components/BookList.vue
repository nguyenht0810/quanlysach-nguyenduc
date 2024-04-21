<template>
  <div>
    <h2>Danh Mục Sách</h2>
    <div class="search-container">
      <input type="text" v-model="searchKeyword" placeholder="Tìm kiếm...">
    </div>
    <div class="table-container">
      <table>
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
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredBooks.length === 0" class="no-results-row">
            <!-- <td colspan="9">Không có kết quả tìm kiếm</td> -->
          </tr>
          <tr v-for="book in filteredBooks.length ? filteredBooks : books" :key="book.MaSach">
            <td>{{ book.MaSach }}</td>
            <td>{{ book.TenSach }}</td>
            <td>{{ book.DonGia }}</td>
            <td>{{ book.SoQuyen }}</td>
            <td>{{ book.NamXuatBan }}</td>
            <td>{{ book.MaNXB }}</td>
            <td>{{ book.NguonGoc }}</td>
            <td>{{ book.TacGia }}</td>
            <td>
              <button @click="editBook(book)">Chỉnh Sửa</button>
              <button @click="deleteBook(book.MaSach)">Xóa</button>
            </td>
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
  methods: {
    editBook(book) {
      this.$emit('editBook', book);
    },
    async deleteBook(bookId) {
      try {
        await axios.delete(`http://localhost:3000/books/${bookId}`);
        alert('Xóa Sách Thành Công');
        this.fetchBooks();
      } catch (error) {
        console.error(error);
        alert('Xóa Sách Không Thành Công');
      }
    },
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/books');
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Quicksand', sans-serif;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

h2 {
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

.table-container {
  max-height: 300px;
  overflow-y: auto;
}

.no-results-row {
  text-align: center;
  font-weight: bold;
  color: red;
}
</style>
