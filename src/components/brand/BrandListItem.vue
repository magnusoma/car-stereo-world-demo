<template>
    <article>
        <router-link :to="`/brand/${ brand.id }`">
            <h2>{{ brand.name }}</h2>
        </router-link>        
    </article>
</template>

<script>
export default {
    name: 'BrandListItem',
    setup() {
        
    },
    props: {
        brand: {
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