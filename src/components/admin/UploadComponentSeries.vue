<template>
    <section>
        <h3>Last opp komponent serie</h3>
        <label>Serienavn: </label>
        <input type="text" v-model="ComponentSeries.name">

        <h4>Markedsperiode</h4>
        <label for="">Fra: </label>
        <input type="datetime-local" name="" id="" v-model="ComponentSeries.producedFrom">

        <label for="">Til: </label>
        <input type="datetime-local" name="" id="" v-model="ComponentSeries.producedUntil">

        <label for="">Produsent: </label>
        <select
            v-model="ComponentSeries.brandId"
            @click="renderBrandList"
        >
            <option
                v-for="brand in brandList"
                :key="brand.id"
                :value="brand.id"    
            >{{ brand.name }}</option>
        </select>

        <input type="button" value="Last opp" @click="postComponentSeries">
    </section>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
    name: 'UploadComponentSeries',
    setup() {
        let ComponentSeries = reactive({
            name: "",
            producedFrom: "",
            producedUntil: "",
            brandId: 0
        });

        let brandList = ref();

        return {
            ComponentSeries,
            brandList
        }
    },
    methods: {
        postComponentSeries() {
            axios.post( "https://localhost:44353/api/ComponentSeries/add-ComponentSeries/", this.ComponentSeries )
                .then( () => {                   
                    alert(`${this.ComponentSeries.name} ble lagt til`);
                    this.ComponentSeries = {
                        name: "",
                        producedFrom: "",
                        producedUntil: "",
                        brandId: 0
                    };
                })
        },
        renderBrandList(){
            axios.get("https://localhost:44353/api/brand/get-brand-list")
                .then( response => {
                    this.brandList = response.data;
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