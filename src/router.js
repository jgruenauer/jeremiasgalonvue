import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/homepage/HomePage.vue';
import BlogPage from './components/blog/BlogPage.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/blog', component: BlogPage}
    ]
})