import Main from "@/pages/Main";
import Projects from "@/pages/Projects";
import Science from "@/pages/Science";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/science',
        component: Science
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;