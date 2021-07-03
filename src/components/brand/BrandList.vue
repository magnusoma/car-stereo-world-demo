<template>
    <section>
        <brand-list-item
            v-for="brand in BrandList"
            :key="brand.id"
            :brand="brand"
        />
    </section>
</template>

<script>
import BrandListItem from './BrandListItem.vue'
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'BrandList',
    setup() {
        let BrandList = ref();

        return {
            BrandList
        }
    },
    methods: {
        renderBrandList(){
            axios.get("https://localhost:44353/api/brand/get-brand-list")
                .then( response => {
                    this.BrandList = response.data;
                })
        }
    },
    created() {
        this.renderBrandList();
    },
    components: {
        BrandListItem
    }
}
</script>