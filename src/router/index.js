import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import HomeView from '../views/Home/HomeView.vue'
import Students from '../views/Students/Students.vue'
import Teachers from '../views/Teachers/Teachers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'asosiy',
          component: HomeView
        },
        {
          path: '/students',
          name: 'students',
          component: Students
        },
        {
          path: '/teachers',
          name: 'teachers',
          component: Teachers
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

export default router
