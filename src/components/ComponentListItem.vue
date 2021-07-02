<template>
    <article>
        <h3>{{ component.name }}</h3>
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