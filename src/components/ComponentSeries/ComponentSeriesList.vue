<template>
    <section>
        <component-series-list-item
            v-for="componentSeries in componentSeriesList"
            :key="componentSeries.id"

            :componentSeries="componentSeries"
        />
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'

import ComponentSeriesListItem from './ComponentSeriesListItem.vue'

export default {
    name: 'ComponentSeriesList',
    setup() {
        let componentSeriesList = ref([]);

        return {
            componentSeriesList
        }
    },
    methods: {
        renderComponentSeriesList(){
            axios.get("https://localhost:44353/api/componentseries/get-component-series-list")
                .then( response => {
                    this.componentSeriesList = response.data;
                })
        }
    },
    created() {
        this.renderComponentSeriesList();
    },
    components: { 
        ComponentSeriesListItem
    },
}
</script>