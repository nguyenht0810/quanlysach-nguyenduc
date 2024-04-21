<template>
  <div>
    <h1>Quản Lý Độc Giả</h1>
    <ReaderForm :initialReader="selectedReader" @readerAdded="fetchReaders" @readerUpdated="fetchReaders" />
    <ReaderList :readers="readers" @editReader="editReader" @readerDeleted="fetchReaders" />
  </div>
</template>

<script>
import ReaderForm from '@/components/ReaderForm.vue';
import ReaderList from '@/components/ReaderList.vue';
import axios from 'axios';

export default {
  name: 'Readers',
  components: {
    ReaderForm,
    ReaderList,
  },
  data() {
    return {
      readers: [],
      selectedReader: {},
    };
  },
  methods: {
    async fetchReaders() {
      try {
        const response = await axios.get('http://localhost:3000/readers');
        this.readers = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editReader(reader) {
      this.selectedReader = reader;
    },
  },
  mounted() {
    this.fetchReaders();
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
h1 {
  font-family: 'Quicksand', sans-serif;
  font-size: 32px;
  margin-top: 20px;
  text-align: center;
}
</style>