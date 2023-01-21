import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/homepage/HomePage.vue';
import BlogPage from './components/blog/BlogPage.vue';
import BlogPosts from './markdowns/blogposts.json';

const blogRoutes = BlogPosts["blogposts"].map(child => ({
      path: child.id,
      name: "blog." + child.id,
      component: () => import(`./markdowns/${child.id}.md`)
    }))

console.log(blogRoutes);

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "root", component: HomePage},
        { path: '/blog', name: "blog", component: BlogPage, children: [
            ...blogRoutes
        ]}
    ]
})