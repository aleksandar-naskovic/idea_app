import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AddIdea from '../views/AddIdea.vue';
import EditIdea from '../views/EditIdea.vue';
import CategoriesPage from '../views/CategoriesPage.vue';
import Tree from '../components/Tree.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  { path: '/add_idea', name: 'add_idea', component: AddIdea },
  { path: '/edit_idea/:id', name: 'edit_idea', component: EditIdea },
  { path: '/categories', name: 'categories', component: CategoriesPage },
  { path: '/tree', name: 'tree', component: Tree },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
