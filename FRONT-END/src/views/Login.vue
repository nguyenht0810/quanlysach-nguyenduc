<template>
  <div class="login-container">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Tên đăng nhập:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Đăng Nhập</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Đơn giản hóa việc đăng nhập ở đây
      // Bạn cần thay thế phần này với xác thực thực sự
      if (this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('isAuthenticated', 'true'); // Đánh dấu đã đăng nhập
        this.$router.push('/'); // Chuyển hướng về trang Dashboard
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
