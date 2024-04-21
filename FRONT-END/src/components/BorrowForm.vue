<template>
  <div class="borrow-form-container">
    <h2> Đăng Ký Mượn Sách</h2>
    <form class="borrow-form" @submit.prevent="borrowBook">
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã Độc Giả:</label>
            <input class="form-control neumorphic" v-model="borrowing.MaDocGia" required />
          </div>
          <div class="form-group">
            <label class="form-label">Ngày Mượn:</label>
            <input class="form-control neumorphic" type="date" v-model="borrowing.NgayMuon" required />
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã Sách:</label>
            <input class="form-control neumorphic" v-model="borrowing.MaSach" required />
          </div>
          <div class="form-group">
            <label class="form-label">Ngày Trả:</label>
            <input class="form-control neumorphic" type="date" v-model="borrowing.NgayTra" required />
          </div>
        </div>
      </div>
      <button class="btn btn-primary neumorphic" type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      borrowing: {
        MaDocGia: '',
        MaSach: '',
        NgayMuon: '',
        NgayTra: '',
      },
    };
  },
  methods: {
    async borrowBook() {
      try {
        await axios.post('http://localhost:3000/borrowings', this.borrowing);
        alert('Đăng Ký Mượn Sách Thành Công');
        this.$emit('bookBorrowed');
      } catch (error) {
        console.error(error);
        alert('Đăng Ký Mượn Sách Không Thành Công');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
.borrow-form-container {
  background-color: #EDE8F5;
  padding: 20px;
  border-radius: 20px;
}

.borrow-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.form-column {
  flex: 1;
  margin-right: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
  color: #8697C4;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #ADBBDA, 
              -5px -5px 10px #ffffff;
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.btn-primary {
  background-color: #3D52A0;
  color: white;
}

.neumorphic:focus {
  outline: none;
}
</style>