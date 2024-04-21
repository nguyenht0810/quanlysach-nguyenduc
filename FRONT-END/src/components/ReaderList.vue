<template>
  <div class="reader-list-container">
    <h2>Danh Sách Độc Giả</h2>
    <div class="search-container">
      <input type="text" v-model="searchKeyword" placeholder="Tìm kiếm...">
    </div>
    <div class="reader-table-container">
      <table class="reader-table">
        <thead>
          <tr>
            <th>Mã Độc Giả</th>
            <th>Họ Lót</th>
            <th>Tên</th>
            <th>Ngày Sinh</th>
            <th>Phái</th>
            <th>Địa Chỉ</th>
            <th>Điện Thoại</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredReaders.length === 0" class="no-results-row">
            <!-- <td colspan="8">Không có kết quả tìm kiếm</td> -->
          </tr>
          <tr v-for="reader in filteredReaders.length ? filteredReaders : readersWithFormattedDate" :key="reader.MaDocGia">
            <td>{{ reader.MaDocGia }}</td>
            <td>{{ reader.HoLot }}</td>
            <td>{{ reader.Ten }}</td>
            <td>{{ reader.formattedNgaySinh }}</td>
            <td>{{ reader.Phai }}</td>
            <td>{{ reader.DiaChi }}</td>
            <td>{{ reader.DienThoai }}</td>
            <td>
              <button class="action-btn" @click="editReader(reader)">Chỉnh Sửa</button>
              <button class="action-btn delete-btn" @click="deleteReader(reader.MaDocGia)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import dateMixin from '@/mixins/dateMixin.js';
import axios from 'axios';

export default {
  mixins: [dateMixin],
  props: {
    readers: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    readersWithFormattedDate() {
      return this.readers.map(reader => ({
        ...reader,
        formattedNgaySinh: this.formatDate(reader.NgaySinh),
      }));
    },
    filteredReaders() {
      if (!this.searchKeyword) {
        return [];
      }
      return this.readersWithFormattedDate.filter(reader => 
        reader.MaDocGia.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        reader.HoLot.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        reader.Ten.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        reader.formattedNgaySinh.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        reader.Phai.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        reader.DiaChi.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        reader.DienThoai.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  },
  data() {
    return {
      searchKeyword: ''
    };
  },
  methods: {
    async deleteReader(MaDocGia) {
      if (confirm('Bạn Có Chắc Liệu Là Muốn Xóa Độc Giả Này Không?')) {
        try {
          await axios.delete(`http://localhost:3000/readers/${MaDocGia}`);
          alert('Xóa Độc Giả Thành Công');
          this.$emit('readerDeleted');
        } catch (error) {
          console.error(error);
          alert('Xóa Độc Giả Không Thành Công');
        }
      }
    },
    editReader(reader) {
      this.$emit('editReader', reader);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

.reader-list-container {
  font-family: 'Quicksand', sans-serif;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.reader-table {
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

.action-btn {
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

.delete-btn {
  background-color: #f44336;
}

.action-btn:hover {
  background-color: #45a049;
}

.delete-btn:hover {
  background-color: #da190b;
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

.reader-table-container {
  max-height: 300px;
  overflow-y: auto;
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
