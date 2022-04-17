import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodsView.vue'
import FoodDetail from '../views/FoodDetail.vue'
import KeranjangView from '../views/KeranjangView.vue'
import SuccessOrder from '../views/SuccessOrder.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/daftar-makanan',
    name: 'Daftar Makanan',
    component: FoodView
  },
  {
    path: '/detail-makanan/:id',
    name: 'Detail Makanan',
    component: FoodDetail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: KeranjangView
  },
  {
    path: '/terimakasih',
    name: 'Sukses Order',
    component: SuccessOrder
  }
]

const router = new VueRouter({
  routes
})

export default router
