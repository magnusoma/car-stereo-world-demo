<template>
    <article>
        <h3>{{ componentSeries.name }}</h3>
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