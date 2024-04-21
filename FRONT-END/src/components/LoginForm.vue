<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email:</label>
        <input type="MSNV" v-model="user.MSNV" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="Password" v-model="user.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        MSNV: '',
        Password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', this.user);
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/dashboard'); // Chuyển hướng đến trang dashboard sau khi đăng nhập thành công
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred');
      }
    },
  },
};
</script>
