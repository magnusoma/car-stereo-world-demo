<template>
    <section>
        <component-series-list-item
            v-for="(componentSeries, index) in componentSeriesList"
            :key="index"

            :componentSeries="componentSeries"
        />
    </section>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import axios from 'axios'

import ComponentSeriesListItem from './ComponentSeriesListItem.vue'

export default {
    name: 'ComponentSeriesList',
    setup() {
        let componentSeriesList = ref([]);
        const cs = reactive({
            name: "testName",
            brandName: "brandTestName",
            producedFrom: 2001,
            producedUntil: 2010
        });

        return {
            cs,
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