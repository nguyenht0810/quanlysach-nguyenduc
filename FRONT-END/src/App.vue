<template>
  <div id="app">
    <header>
      <h1>Quản Lý Mượn Sách</h1>
      <!-- Thêm routing links nếu bạn sử dụng Vue Router -->
      <router-link to="/">Nhân Viên</router-link> |
      <router-link to="/borrowings">Mượn Sách</router-link> |
      <router-link to="/books">Sách</router-link> |
      <router-link to="/publishers">Nhà Xuất Bản</router-link> |
      <router-link to="/readers">Độc Giả</router-link> |
      <!-- Liên kết đến trang cho người dùng -->
      <router-link to="/user-dashboard">Người Dùng</router-link>
    </header>

    <main>
      <!-- Sử dụng Vue Router để hiển thị views -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// Không cần import gì ở đây vì bạn đã cấu hình router trong main.js

export default {
  name: "App",
  components: {
    // Khai báo các component ở đây nếu cần
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
/* Global Styles */
body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Quicksand", sans-serif;
}

/* Header Styles */
header {
  background-color: #3d52a0;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2rem;
}

header a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
}

header a:hover {
  color: #ccc;
}

/* Main Content Styles */
main {
  flex-grow: 1;
  padding: 2rem;
}

/* Routing Links Styles */
.router-link-active {
  font-weight: bold;
}

.book-form,
.borrow-form,
.publisher-form,
.reader-form,
.return-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive Styles */
@media (max-width: 768px) {
  header {
    padding: 0.5rem;
  }

  header h1 {
    font-size: 1.5rem;
  }

  header a {
    margin: 0 0.25rem;
  }

  main {
    padding: 1rem;
  }
}
</style>
