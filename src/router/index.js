import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/fragrances',
    name: 'Fragrances',
    component: () => import('../views/fragranceSection.vue')
  },
  {
    path: '/home-decoration',
    name: 'Home-decoration',
    component: () => import('../views/homeDecorSection.vue')
  },
  {
    path: '/laptops',
    name: 'Laptops',
    component: () => import('../views/laptopSection.vue')
  },
  {
    path: '/smartphones',
    name: 'Smartphones',
    component: () => import('../views/smartPhoneSection.vue')
  },
  // Details of product
  {
    path: '/product/show/:id',
    name: 'showDetails',
    component: () => import('../views/Product/showDetails.vue')
  },
  // cart page
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cartPage.vue')
  },
  // authentication page
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/signupPage',
    name: 'SignupPage',
    component: () => import('../views/signupPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
