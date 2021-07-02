<template>
    <div>
        <h1>{{ componentSeries.brandName }} {{ componentSeries.name }}</h1>
        <p>Produksjonsperiode: {{ componentSeries.producedFrom }} - {{ componentSeries.producedUntil }}</p>
    </div>
</template>

<script>
export default {
    name: 'ComponentSeriesInfo',
    setup() {
        
    },
    props: {
        componentSeries: {
            type: Object
        }
    }
}
</script>