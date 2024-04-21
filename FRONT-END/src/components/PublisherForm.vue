<template>
  <div class="publisher-form-container">
    <h2>{{ isEditMode ? 'Chỉnh Sửa NXB' : 'Thêm NXB' }}</h2>
    <form class="publisher-form" @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Mã NXB:</label>
            <input class="form-control neumorphic" v-model="publisher.MaNXB" required />
          </div>
          <div class="form-group">
            <label class="form-label">Địa Chỉ:</label>
            <input class="form-control neumorphic" v-model="publisher.DiaChi" required />
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <label class="form-label">Tên NXB:</label>
            <input class="form-control neumorphic" v-model="publisher.TenNXB" required />
          </div>
        </div>
      </div>
      <button class="btn btn-primary neumorphic" type="submit">{{ isEditMode ? 'Cập Nhật NXB' : 'Thêm NXB' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    initialPublisher: {
      type: Object,
      default: () => ({
        MaNXB: '',
        TenNXB: '',
        DiaChi: '',
      }),
    },
  },
  data() {
    return {
      publisher: { ...this.initialPublisher },
      isEditMode: false,
    };
  },
  watch: {
    initialPublisher(newVal) {
      this.publisher = { ...newVal };
      this.isEditMode = !!newVal.MaNXB;
    },
  },
  methods: {
    async handleSubmit() {
      if (this.isEditMode) {
        await this.updatePublisher();
      } else {
        await this.addPublisher();
      }
    },
    async addPublisher() {
      try {
        await axios.post('http://localhost:3000/publishers', this.publisher);
        alert('Thêm Nhà Xuất Bản Thành Công');
        this.$emit('publisherAdded');
      } catch (error) {
        console.error(error);
        alert('Thêm Nhà Xuất Bản Không Thành Công');
      }
    },
    async updatePublisher() {
      try {
        await axios.put(`http://localhost:3000/publishers/${this.publisher.MaNXB}`, this.publisher);
        alert('Cập Nhật Nhà Xuất Bản Thành Công');
        this.$emit('publisherUpdated');
      } catch (error) {
        console.error(error);
        alert('Cập Nhật Nhà Xuất Bản Không Thành Công');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
.publisher-form-container {
  background-color: #EDE8F5;
  padding: 20px;
  border-radius: 20px;
}

.publisher-form {
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