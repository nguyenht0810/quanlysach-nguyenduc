<template>
  <div>
    <h2>Danh Sách Nhà Xuất Bản</h2>
    <div class="search-container">
      <input type="text" v-model="searchKeyword" placeholder="Tìm kiếm...">
    </div>
    <div class="publisher-table-container">
      <table>
        <thead>
          <tr>
            <th>Mã NXB</th>
            <th>Tên NXB</th>
            <th>Địa Chỉ</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredPublishers.length === 0" class="no-results-row">
            <!-- <td colspan="4">Không có kết quả tìm kiếm</td> -->
          </tr>
          <tr v-for="publisher in filteredPublishers.length ? filteredPublishers : publishers" :key="publisher.MaNXB">
            <td>{{ publisher.MaNXB }}</td>
            <td>{{ publisher.TenNXB }}</td>
            <td>{{ publisher.DiaChi }}</td>
            <td>
              <button class="action-btn" @click="editPublisher(publisher)">Chỉnh Sửa</button>
              <button class="action-btn" @click="deletePublisher(publisher.MaNXB)">Xóa</button>
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
  props: {
    publishers: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredPublishers() {
      if (!this.searchKeyword) {
        return [];
      }
      return this.publishers.filter(publisher => 
        publisher.MaNXB.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        publisher.TenNXB.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        publisher.DiaChi.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  },
  data() {
    return {
      searchKeyword: ''
    };
  },
  methods: {
    async deletePublisher(MaNXB) {
      if (confirm('Bạn Có Thật Sự Muốn Xóa Nhà Xuất Bản Này Không?')) {
        try {
          await axios.delete(`http://localhost:3000/publishers/${MaNXB}`);
          alert('Xóa Nhà Xuất Bản Thành Công');
          this.$emit('publisherDeleted');
        } catch (error) {
          console.error(error);
          alert('Xóa Nhà Xuất Bản Không Thành Công');
        }
      }
    },
    editPublisher(publisher) {
      this.$emit('editPublisher', publisher);
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

.action-btn:hover {
  background-color: #45a049;
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

.publisher-table-container {
  max-height: 300px;
  overflow-y: auto;
}

.no-results-row {
  text-align: center;
  font-weight: bold;
  color: red;
}
</style>
