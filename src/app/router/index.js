import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsPage from './../pages/NewsPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: NewsPage
        },
    ]
})