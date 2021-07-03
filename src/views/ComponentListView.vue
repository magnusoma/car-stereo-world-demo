<template>
    <div>
        <h2>Komponenter</h2>
    </div>
    <component-list/>
</template>

<script>
import ComponentList from '../components/component/ComponentList.vue'
export default {
    name: 'ComponentListView',
    setup() {
        
    },
    components: {
        ComponentList
    }
}
</script>