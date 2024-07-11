import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/pages/MainPage'
import CardPage from '@/pages/CardPage' 

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/card/:id',
    component: CardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
