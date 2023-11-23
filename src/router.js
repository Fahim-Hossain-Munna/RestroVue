import { createWebHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import signUp from "./components/signUp.vue";

const routes = [
    {
        name : "signUp",
        path:'/',
        component: signUp
    },
    {
        name: "Home",
        path:'/home',
        component: Home
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;