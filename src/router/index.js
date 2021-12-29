import { createRouter, createWebHistory } from "vue-router";
import { Auth } from '../helpers/auth';

const routes = [
    {
        path: "/",
        component: () => import("../components/HelloWorld.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/login",
        component: () => import('../layout/LoginLayout.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (Auth.isLoggedIn()) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath },
            });
        }
    } else {
        next();
    }
});

export default router;
