<template>
  <div>
    <h1>Quản Lý Nhà Xuất Bản</h1>
    <PublisherForm :initialPublisher="selectedPublisher" @publisherAdded="fetchPublishers" @publisherUpdated="fetchPublishers" />
    <PublisherList :publishers="publishers" @editPublisher="editPublisher" @publisherDeleted="fetchPublishers" />
  </div>
</template>

<script>
import PublisherForm from '@/components/PublisherForm.vue';
import PublisherList from '@/components/PublisherList.vue';
import axios from 'axios';

export default {
  name: 'Publishers',
  components: {
    PublisherForm,
    PublisherList,
  },
  data() {
    return {
      publishers: [],
      selectedPublisher: {},
    };
  },
  methods: {
    async fetchPublishers() {
      try {
        const response = await axios.get('http://localhost:3000/publishers');
        this.publishers = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editPublisher(publisher) {
      this.selectedPublisher = publisher;
    },
  },
  mounted() {
    this.fetchPublishers();
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