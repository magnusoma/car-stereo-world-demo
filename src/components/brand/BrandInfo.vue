<template>
    <section>
        <h1>{{ brand.name }}</h1>
    </section>
</template>

<script>
export default {
    name: 'BrandInfo',
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
    section {
        border-bottom: 2px solid black;
    }
</style>