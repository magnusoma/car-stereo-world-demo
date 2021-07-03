<template>
    <div v-if="brandIsInitialized">
        <brand-info :brand="brand"/>

        <component-series-list-item
            v-for="componentSeries in brand.componentSeries"
            :key="componentSeries.id"
            :componentSeries="componentSeries"
        />
    </div>    
</template>

<script>
import BrandInfo from '../../components/brand/BrandInfo.vue'
import ComponentSeriesListItem from '../../components/ComponentSeries/ComponentSeriesListItem.vue'

import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
    name: 'BrandView',
    setup() {
        let brand = reactive({});
        let brandIsInitialized = ref(false);

        return {
            brand,
            brandIsInitialized
        }
    },
    methods: {
        renderBrand(){
            axios.get(`https://localhost:44353/api/brand/get-brand-with-component-series-list/${useRoute().params.id}`)
                .then( response => {
                    this.brand = response.data;
                    this.brandIsInitialized = true;
                })
        }
    },
    created() {
        this.renderBrand();
    },
    components: {
        BrandInfo,
        ComponentSeriesListItem
    }
}
</script>