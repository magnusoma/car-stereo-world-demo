import {createWebHistory, createRouter} from 'vue-router'

import ComponentSeriesListView from '/src/views/ComponentSeriesListView.vue'
import ComponentSeriesView from '/src/views/ComponentSeriesView.vue'
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
    
    /*{
        name: "ArtistView",
        path: "/info/:id/",
        component: ArtistView
    },
    {
        name: "JobView",
        path: "/mission",
        component: JobView
    },

    {
        name: "AdminArtistList",
        path: "/admin",
        component: AdminArtistList
    },
    
    {
        name: "AdminArtistInfo",
        path: "/Admin/:id",
        component: AdminArtistInfo
    },
    {
        name: "AdminJobList",
        path: "/admin/job",
        component: AdminJobList
    }*/
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router