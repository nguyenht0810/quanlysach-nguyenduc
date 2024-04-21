import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import Dashboard from './views/Dashboard.vue';
import Books from './views/Books.vue';
import Publishers from './views/Publishers.vue';
import Readers from './views/Readers.vue';
import Borrowings from './views/Borrowings.vue';
import UserDashboard from './views/UserDashboard.vue'; // Trang cho người dùng

const routes = [
  { path: '/', component: Dashboard },
  { path: '/books', component: Books },
  { path: '/publishers', component: Publishers },
  { path: '/readers', component: Readers },
  { path: '/borrowings', component: Borrowings },
  { path: '/user-dashboard', component: UserDashboard }, // Trang dashboard cho người dùng
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
