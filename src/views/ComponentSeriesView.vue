<template>
    <div v-if="componentSeriesIsInitialized">
        <component-series-info :componentSeries="componentSeries"
        />

        <component-list-item
            v-for="component in componentSeries.components"
            :key="component.id"

            :component="component"
        />
    </div>
</template>

<script>
import ComponentListItem from '../components/component/ComponentListItem.vue'
import ComponentSeriesInfo from '../components/ComponentSeries/ComponentSeriesInfo.vue'

import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
    name: 'ComponentSeriesView',
    setup() {
        let componentSeries = reactive({});
        let componentSeriesIsInitialized = ref(false);

        return {
            componentSeries,
            componentSeriesIsInitialized
        }
    },
    methods: {
        renderComponentSeries(){
            axios.get(`https://localhost:44353/api/componentseries/get-component-series-by-id/${useRoute().params.id}`)
                .then( response => {
                    this.componentSeries = response.data;
                    console.log(this.componentSeries);
                    this.componentSeriesIsInitialized = true;
                })
        }
        
    },
    created() {
        this.renderComponentSeries();
    },
    components: {
        ComponentSeriesInfo,
        ComponentListItem
    }
}
</script>