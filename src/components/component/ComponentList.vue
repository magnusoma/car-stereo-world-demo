<template>
    <section>
        <component-list-item
            v-for="component in componentList"
            :key="component.id"

            :component="component"
        />
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'

import ComponentListItem from './ComponentListItem.vue'

export default {
    name: 'ComponentList',
    setup() {
        let componentList = ref([]);

        return {
            componentList
        }
    },
    methods: {
        renderComponentList(){
            axios.get("https://localhost:44353/api/components/get-all-components")
                .then( response => {
                    this.componentList = response.data;
                })
        }
    },
    created() {
        this.renderComponentList();
    },
    components: { 
        ComponentListItem
    },
}
</script>