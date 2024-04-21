<template>
  <div class="book-form-container">
    <h2>{{ isEditMode ? "Edit Book" : "Thêm Sách Mới" }}</h2>
    <form class="book-form" @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã Sách:</label>
            <input
              class="form-control neumorphic"
              v-model="book.MaSach"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Tên Sách:</label>
            <input
              class="form-control neumorphic"
              v-model="book.TenSach"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Đơn Giá:</label>
            <input
              class="form-control neumorphic"
              type="number"
              v-model="book.DonGia"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Số Quyển:</label>
            <input
              class="form-control neumorphic"
              type="number"
              v-model="book.SoQuyen"
              required
            />
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Năm Xuất Bản:</label>
            <input
              class="form-control neumorphic"
              type="number"
              v-model="book.NamXuatBan"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Mã NXB:</label>
            <input
              class="form-control neumorphic"
              v-model="book.MaNXB"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Nguồn Gốc:</label>
            <input
              class="form-control neumorphic"
              v-model="book.NguonGoc"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Tác Giả:</label>
            <input
              class="form-control neumorphic"
              v-model="book.TacGia"
              required
            />
          </div>
        </div>
      </div>
      <button class="btn btn-primary neumorphic" type="submit">
        {{ isEditMode ? "Cập Nhật Sách" : "Thêm Sách" }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    initialBook: {
      type: Object,
      default: () => ({
        MaSach: "",
        TenSach: "",
        DonGia: 0,
        SoQuyen: 0,
        NamXuatBan: 0,
        MaNXB: "",
        NguonGoc: "",
        TacGia: "",
      }),
    },
  },
  data() {
    return {
      book: { ...this.initialBook },
      isEditMode: false,
    };
  },
  watch: {
    initialBook(newVal) {
      this.book = { ...newVal };
      this.isEditMode = !!newVal.MaSach;
    },
  },
  methods: {
    async handleSubmit() {
      if (this.isEditMode) {
        await this.updateBook();
      } else {
        await this.addBook();
      }
    },
    async addBook() {
      try {
        await axios.post("http://localhost:3000/books", this.book);
        alert("Thêm Sách Thành Công");
        this.$emit("bookAdded");
      } catch (error) {
        console.error(error);
        alert("Thêm Sách Không Thành Công");
      }
    },
    async updateBook() {
      try {
        await axios.put(
          `http://localhost:3000/books/${this.book.MaSach}`,
          this.book
        );
        alert("Cập Nhật Sách Thành Công");
        this.$emit("bookUpdated");
      } catch (error) {
        console.error(error);
        alert("Cập Nhật Sách Không Thành Công");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
.book-form-container {
  background-color: #ede8f5;
  padding: 20px;
  border-radius: 20px;
}

.book-form {
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
  color: #8697c4;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #adbbda, -5px -5px 10px #ffffff;
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
  background-color: #3d52a0;
  color: white;
}

.neumorphic:focus {
  outline: none;
}
</style>
