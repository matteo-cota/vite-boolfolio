import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProjectDetail from '../components/ProjectDetail.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/projects/:id', name: 'project-detail', component: ProjectDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
