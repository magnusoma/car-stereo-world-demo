<template>
    <nav>
        <ul>
            <li><router-link to="/component-series">Komponent Serier</router-link></li>
            <li><router-link to="/component">Komponenter</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavbarMain",
    setup() {
        
    },
}
</script>

<style scoped>
    nav {
        border-bottom: 2px solid black;
    }

    li {
    list-style-type: none;
}
</style>