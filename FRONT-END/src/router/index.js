// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Books from '../views/Books.vue';
import Books from '../views/Borrowings.vue';
import Publishers from '../views/Publishers.vue';
import Readers from '../views/Readers.vue';


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  // Thêm các route cho sách, nhà xuất bản, và độc giả ở đây
  { path: '/borrowings', component: Borrowings },
  { path: '/books', component: Books },
  { path: '/publishers', component: Publishers },
  { path: '/readers', component: Readers },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
