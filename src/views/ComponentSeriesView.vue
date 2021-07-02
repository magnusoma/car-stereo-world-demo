<template>
    <div>
        <h2>Komponent Series</h2>
    </div>
    <component-series-list/>
</template>

<script>
import ComponentSeriesList from '../components/ComponentSeries/ComponentSeriesList.vue'
export default {
    name: 'ComponentSeriesView',
    setup() {
        
    },
    components: {
        ComponentSeriesList
    }
}
</script>