<template>
  <div class="return-form-container">
    <h2>Đăng Ký Trả Sách</h2>
    <form class="return-form" @submit.prevent="returnBook">
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã Độc giả:</label>
            <input class="form-control neumorphic" v-model="borrowing.MaDocGia" required />
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã Sách:</label>
            <input class="form-control neumorphic" v-model="borrowing.MaSach" required />
          </div>
        </div>
      </div>
      <button class="btn btn-primary neumorphic" type="submit">Đăng Ký</button>
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
      },
    };
  },
  methods: {
    async returnBook() {
      try {
        await axios.delete(`http://localhost:3000/borrowings/${this.borrowing.MaDocGia}/${this.borrowing.MaSach}`);
        alert('Trả Sách Thành Công');
        this.$emit('returned');
      } catch (error) {
        console.error(error);
        alert('Trả Sách Không Thành Công');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
.return-form-container {
  background-color: #EDE8F5;
  padding: 20px;
  border-radius: 20px;
}

.return-form {
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