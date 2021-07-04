<template>
    <section>
        <h3>Last opp produsent</h3>
        <label>Produsent navn: </label>
        <input type="text" v-model="brand.name">
        <input type="button" value="Last opp" @click="postBrand">
    </section>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'

export default {
    name: 'UploadBrand',
    setup() {
        let brand = reactive({
            name: ""
        })

        return {
            brand
        }
    },
    methods: {
        postBrand() {
            axios.post( "https://localhost:44353/api/brand/add-brand/", this.brand )
                .then( () => {                   
                    alert(`${this.brand.name} ble lagt til`);
                    this.brand.name = "";
                })
        }
    },
}
</script>

<style scoped>
    section {
        border: 2px solid black;
        margin-bottom: 1rem;
    }
</style>