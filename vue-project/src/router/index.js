import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../acceuil.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/a-propos',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projets',
    name: 'Projects',
    component: Projects
  },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // For contact page, always scroll to top
    if (to.name === 'Contact') {
      return { top: 0, behavior: 'smooth' }
    }
    
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Add some offset from top if needed
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
