<template>
    <div>
        <h2>Komponent Serier</h2>
    </div>
    <component-series-list/>
</template>

<script>
import ComponentSeriesList from '../components/ComponentSeries/ComponentSeriesList.vue'
export default {
    name: 'ComponentSeriesListView',
    setup() {
        
    },
    components: {
        ComponentSeriesList
    }
}
</script>