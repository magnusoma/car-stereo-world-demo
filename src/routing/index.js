import {createWebHistory, createRouter} from 'vue-router'

import ComponentSeriesListView from '/src/views/componentSeries/ComponentSeriesListView.vue'
import ComponentSeriesView from '/src/views/componentSeries/ComponentSeriesView.vue'

import ComponentListView from '/src/views/component/ComponentListView.vue'
import ComponentView from '/src/views/component/ComponentView.vue'

import BrandListView from '/src/views/brand/BrandListView.vue'

import AboutView from '/src/views/AboutView.vue'
import LinksView from '/src/views/LinksView.vue'


const routes = [
    {
        name: "ComponentSeriesListView",
        path: "/component-series",
        component: ComponentSeriesListView
    },
    {
        name: "ComponentSeriesView",
        path: "/component-series/:id/",
        component: ComponentSeriesView
    },
    {
        name: "ComponentListView",
        path: "/component",
        component: ComponentListView
    },
    {
        name: "ComponentView",
        path: "/component/:id/",
        component: ComponentView
    },
    {
        name: "AboutView",
        path: "/About/",
        component: AboutView
    },
    {
        name: "BrandListView",
        path: "/Brand/",
        component: BrandListView
    },    
    {
        name: "LinksView",
        path: "/Links/",
        component: LinksView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router