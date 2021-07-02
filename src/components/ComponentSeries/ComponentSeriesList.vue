<template>
    <component-series-list-item
        :componentSeries="cs"
    />
</template>

<script>
import { reactive } from '@vue/reactivity'
import ComponentSeriesListItem from './ComponentSeriesListItem.vue'

export default {
    name: 'ComponentSeriesList',
    setup() {
        const cs = reactive({
            name: "testName",
            brandName: "brandTestName",
            producedFrom: 2001,
            producedUntil: 2010
        });

        return {
            cs
        }
    },
    components: { 
        ComponentSeriesListItem
    },
}
</script>