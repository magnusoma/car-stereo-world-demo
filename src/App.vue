<template>
    <navbar-main/>
    
    <main>
        <router-view/>
    </main>
</template>

<script>
import NavbarMain from './components/NavbarMain.vue'

export default {
    name: 'App',
    setup() {
        
    },
    components: {
        NavbarMain
    }
}
</script>