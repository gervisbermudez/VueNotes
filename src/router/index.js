import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import LoginLayout from '../layout/LoginLayout.vue'

const routes = [
    {
        path: "/",
        component: HelloWorld,
    },
    {
        path: "/login",
        component: LoginLayout,
    },
    {
        path: "/register",
        component: LoginLayout,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
