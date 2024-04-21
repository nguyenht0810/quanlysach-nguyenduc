<template>
  <div>
    <h1>Chào mừng đến với Hệ Thống</h1>

    <div class="my-5">
      <div class="text-right" style="margin-bottom: -38px">
        <router-link to="/borrowings">Chuyển đến trang &gt;&gt;</router-link>
      </div>
      <BorrowedList />
    </div>

    <div class="my-5">
      <div class="text-right" style="margin-bottom: -46px">
        <router-link to="/books">Chuyển đến trang &gt;&gt;</router-link>
      </div>
      <BookList />
    </div>

    <div class="my-5">
      <div class="text-right" style="margin-bottom: -46px">
        <router-link to="/publishers">Chuyển đến trang &gt;&gt;</router-link>
      </div>
      <PublisherList />
    </div>

    <div class="my-5">
      <div class="text-right" style="margin-bottom: -18px">
        <router-link to="/readers">Chuyển đến trang &gt;&gt;</router-link>
      </div>
      <ReaderList />
    </div>
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";
import BorrowedList from "../components/BorrowedList.vue";
import PublisherList from "../components/PublisherList.vue";
import ReaderList from "../components/ReaderList.vue";

export default {
  name: "Dashboard",
  components: {
    BorrowedList,
    BookList,
    PublisherList,
    ReaderList,
  },
  data() {
    return {};
  },
  created() {
    // this.tab = this.tabs[0].id; // Set the first tab as active by default
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
h1 {
  font-family: "Quicksand", sans-serif;
  font-size: 32px;
  margin-top: 20px;
  text-align: center;
}
</style>
