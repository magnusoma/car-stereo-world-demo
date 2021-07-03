<template>
    <section>
        <h1>{{ component.brandName }} {{ component.name }}</h1>
        <h3>Model: {{ component.model }}</h3>
        <h3>Serie: {{ component.componentSeries }}</h3>
        <p>Salg periode: {{ component.availableFrom }} - {{ component.availableUntil }}</p>

        <ul>
            <li>Ny pris {{ component.priceNew }}</li>
            <li>Value100 {{ component.value100 }}</li>
            <li>Value80 {{ component.value80 }}</li>
            <li>Value60 {{ component.value60 }}</li>
            <li>Value40 {{ component.value40 }}</li>
            <li>Value20 {{ component.value20 }}</li>
        </ul>

        <h3>Info</h3>
        <p>{{ component.description }}</p>
    </section>
</template>

<script>
export default {
    name: 'ComponentInfo',
    setup() {
        
    },
    props: {
        component: {
            type: Object
        }
    }
}
</script>