import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import AdminPages from '../components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path:'/',
    component: Home
}, {
    name: 'AdminPages',
    path: '/admin',
    component: AdminPages
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router