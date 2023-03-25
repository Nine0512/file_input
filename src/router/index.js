import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/book/:id',
            name: 'book',
            component: () => import('../views/Book.vue')
        },
        {
            path: '/all',
            name: 'all',
            component: () => import('../views/AllBook.vue'),
            children: [
                {
                    path: ':name',
                    name: 'bookLike',
                    component: () => import('../views/AllBook.vue')
                }
            ]
        },
        {
            path: '/manage',
            name: 'manage',
            component: () => import('../views/ManageBook.vue'),
            children: [
                {
                    path: 'update/:id',
                    name: 'update',
                    component: () => import('../views/ManageBook.vue')
                }
            ]
        }
    ]
})

export default router
