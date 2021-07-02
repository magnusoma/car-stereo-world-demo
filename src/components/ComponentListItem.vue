<template>
    <article>
        <h3>{{ component.brandName }} {{ component.name }}</h3>
        <p>Model: {{ component.model }}</p>
        <p>Salg periode: {{ component.availableFrom }} - {{ component.availableUntil }}</p>
    </article>
</template>

<script>
export default {
    name: 'ComponentListItem',
    setup() {
        
    },
    props: {
        component: {
            type: Object
        }
    }
}
</script>

<style scoped>
article {
    border: 2px solid black;
    margin-bottom: 1rem;
}
</style>