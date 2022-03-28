import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import TvView from "../views/TvView"
import MovieView from "../views/MovieView"
import VarietyView from "../views/VarietyView"
import AnimeView from "../views/AnimeView"
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/Tv",
        name: "Tv",
        component: TvView
    },
    {
        path: "/Movie",
        name: "Movie",
        component: MovieView
    },
    {
        path: "/Variety",
        name: "Variety",
        component: VarietyView
    },
    {
        path: "/Anime",
        name: "Anime",
        component: AnimeView
    },
];

const router = new VueRouter({
    routes,
});

export default router;