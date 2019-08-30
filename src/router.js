// Dependencies
import Vue from 'vue';
import Router from 'vue-router';

// Routes
import TodoView from './views/TodoView.vue';
import AboutView from './views/About.vue';

// Router
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Todo List',
      component: TodoView,
    },
    {
      path: '/about',
      name: 'About of App',
      component: AboutView,
    },
  ],
});
