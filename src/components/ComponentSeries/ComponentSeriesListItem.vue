<template>
    <article>
        <router-link :to="`/component-series/${componentSeries.id}`">
            <h3>{{ componentSeries.name }}</h3>
        </router-link>
        
        <h4>{{ componentSeries.brandName }}</h4>

        <p>{{ componentSeries.producedFrom }} - {{ componentSeries.producedUntil }}</p>
    </article>
</template>

<script>
export default {
    name: 'ComponentSeriesListItem',
    setup() {
        
    },
    props: {
        componentSeries: {
            type: Object
        }
    }
}
</script>

<style scoped>
article {
    border: 2px solid black;
}
</style>