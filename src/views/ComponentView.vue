<template>
    <div v-if="componentIsInitialized">
        <component-info :component="component"/>
    </div>
</template>

<script>
import ComponentInfo from '../components/ComponentInfo.vue'

import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
    name: 'ComponentSeriesView',
    setup() {
        let component = reactive({});
        let componentIsInitialized = ref(false);

        return {
            component,
            componentIsInitialized
        }
    },
    methods: {
        renderComponent(){
            axios.get(`https://localhost:44353/api/components/get-component-by-id/${useRoute().params.id}`)
                .then( response => {
                    this.component = response.data;
                    console.log(this.component);
                    this.componentIsInitialized = true;
                })
        }
        
    },
    created() {
        this.renderComponent();
    },
    components: {
        ComponentInfo
    }
}
</script>