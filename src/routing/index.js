import {createWebHistory, createRouter} from 'vue-router'

import ComponentSeriesListView from '/src/views/ComponentSeriesListView.vue'
import ComponentSeriesView from '/src/views/ComponentSeriesView.vue'
import ComponentListView from '/src/views/ComponentListView.vue'
import ComponentView from '/src/views/ComponentView.vue'
/*import AdminArtistList from '/src/views/admin/AdminArtistList.vue'
import AdminJobList from '/src/views/admin/AdminJobList.vue'
import HomePageView from '/src/views/HomePageView.vue'
import ArtistView from '/src/views/ArtistView.vue'
import JobView from '/src/views/JobView.vue'*/


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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router