import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',            name: 'home',         component: () => import('../views/Home.vue') },
    { path: '/about',       name: 'about',        component: () => import('../views/About.vue') },
    { path: '/skills',      name: 'skills',       component: () => import('../views/Skills.vue') },
    { path: '/education',   name: 'education',    component: () => import('../views/Education.vue') },
    { path: '/projects',    name: 'projects',     component: () => import('../views/Projects.vue') },
    { path: '/certificates',name: 'certificates', component: () => import('../views/Certificates.vue') },
    { path: '/hobbies',     name: 'hobbies',      component: () => import('../views/Hobbies.vue') },
    { path: '/gallery',     name: 'gallery',      component: () => import('../views/Gallery.vue') },
    { path: '/guestbook',   name: 'guestbook',    component: () => import('../views/Guestbook.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
