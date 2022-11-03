import type { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
]
