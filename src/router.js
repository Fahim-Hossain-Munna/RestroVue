import { createWebHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import signUp from "./components/signUp.vue";
import nopage from "./components/404.vue";

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
    {
        name: "404",
        path:'/:PathMatch(.*)*',
        component: nopage
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;