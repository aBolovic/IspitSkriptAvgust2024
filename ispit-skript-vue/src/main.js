import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import BooksPageView from './components/Book/BooksPageView.vue';
import HomeView from './components/HomeView.vue'
import CategoriesPageView from './components/Category/CategoriesPageView.vue'
import LoginView from './components/Login/LoginView.vue'
import RegisterView from './components/Login/RegisterView.vue'
import store from './store';
import LogoutView from './components/Login/LogoutView.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/books', component: BooksPageView, meta: { requiresAuth: true }},
  { path: '/login', component: LoginView },
  { path: '/logout', component: LogoutView },
  { path: '/register', component: RegisterView },
  { path: '/categories', component: CategoriesPageView, meta: { requiresAuth: true } },
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  console.log('isAuthenticated:', isAuthenticated); //proveri token
  if(to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login'); 
  }
  else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

