import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/components/Main.vue'
import Information from '@/components/Information.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/information',
        component: Information
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;