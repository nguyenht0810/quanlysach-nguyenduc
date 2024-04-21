<template>
  <div class="reader-form-container">
    <h2>{{ isEditMode ? 'Chỉnh Sửa Độc Giả' : 'Thêm Độc Giả' }}</h2>
    <form class="reader-form" @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã Độc Giả:</label>
            <input class="form-control neumorphic" v-model="reader.MaDocGia" required />
          </div>
          <div class="form-group">
            <label class="form-label">Tên:</label>
            <input class="form-control neumorphic" v-model="reader.Ten" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phái:</label>
            <select class="form-control neumorphic" v-model="reader.Phai" required>
              <option value="Nam">Nam</option>
              <option value="Nu">Nữ</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Địa Chỉ:</label>
            <input class="form-control neumorphic" v-model="reader.DiaChi" required />
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <div style="height: 70px;">&nbsp;</div>
          </div>
          <div class="form-group">
            <label class="form-label">Họ Lót:</label>
            <input class="form-control neumorphic" v-model="reader.HoLot" required />
          </div>
          <div class="form-group">
            <label class="form-label">Ngày Sinh:</label>
            <input class="form-control neumorphic" type="date" v-model="reader.NgaySinh" required />
          </div>
          <div class="form-group">
            <label class="form-label">Điện Thoại:</label>
            <input class="form-control neumorphic" v-model="reader.DienThoai" required />
          </div>
        </div>
      </div>
      <button class="btn btn-primary neumorphic" type="submit">{{ isEditMode ? 'Cập Nhật' : 'Thêm Độc Giả' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    initialReader: {
      type: Object,
      default: () => ({
        MaDocGia: '',
        HoLot: '',
        Ten: '',
        NgaySinh: '',
        Phai: '',
        DiaChi: '',
        DienThoai: '',
      }),
    },
  },
  data() {
    return {
      reader: { ...this.initialReader },
      isEditMode: false,
    };
  },
  watch: {
    initialReader(newVal) {
      this.reader = { ...newVal };
      this.isEditMode = !!newVal.MaDocGia;
    },
  },
  methods: {
    async handleSubmit() {
      if (this.isEditMode) {
        await this.updateReader();
      } else {
        await this.addReader();
      }
    },
    async addReader() {
      try {
        await axios.post('http://localhost:3000/readers', this.reader);
        alert('Thêm Độc Giả Thành Công');
        this.$emit('readerAdded');
      } catch (error) {
        console.error(error);
        alert('Lỗi Thêm Độc Giả');
      }
    },
    async updateReader() {
      try {
        await axios.put(`http://localhost:3000/readers/${this.reader.MaDocGia}`, this.reader);
        alert('Cập Nhật Độc Giả Thành Công');
        this.$emit('readerUpdated');
      } catch (error) {
        console.error(error);
        alert('Cập Nhật Độc Giả Thất Bại');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
.reader-form-container {
  background-color: #EDE8F5;
  padding: 20px;
  border-radius: 20px;
}

.reader-form {
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