import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },{
        path: '/detay/:id',
        name: 'Detail',
        component: () => import('../views/Detail'),
    },

    {path: '*', redirect: {name: 'Home'}}

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
