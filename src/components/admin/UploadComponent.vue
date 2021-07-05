<template>
    <section>
        <h3>Last opp komponent</h3>
        <label>Komponentnavn: </label>
        <input type="text" v-model="component.name">

        <label for="">Model: </label>
        <input type="text" v-model="component.model">

        <h4>Markedsperiode</h4>
        <label for="">Fra: </label>
        <input type="datetime-local" name="" id="" v-model="component.availableFrom">

        <label for="">Til: </label>
        <input type="datetime-local" name="" id="" v-model="component.availableUntil">

        <h4>Priser</h4>
        <label for="">Ny pris</label>
        <input type="number" v-model="component.priceNew">

        <label for="">Verdistatus 100%</label>
        <input type="number" v-model="component.value100">
        <label for="">Verdistatus 80%</label>
        <input type="number" v-model="component.value80">
        <label for="">Verdistatus 60%</label>
        <input type="number" v-model="component.value60">
        <label for="">Verdistatus 40%</label>
        <input type="number" v-model="component.value40">
        <label for="">Verdistatus 20%</label>
        <input type="number" v-model="component.value20">

        <label for="">Beskrivelse: </label>
        <textarea name="" id="" cols="30" rows="10" v-model="component.description"></textarea>

        <label for="">Produsent: </label>
        <select
            v-model="component.brandId"
            @click="renderBrandList"
        >
            <option
                v-for="brand in brandList"
                :key="brand.id"
                :value="brand.id"    
            >{{ brand.name }}</option>
        </select>

        <label for="">Komponentserie: </label>
        <select
            v-model="component.componentSeriesId"
            @click="renderComponentSeriesList"
        >
            <option
                v-for="componentSeries in componentSeriesList"
                :key="componentSeries.id"
                :value="componentSeries.id"    
            >{{ componentSeries.name }}</option>
        </select>

        <input type="button" value="Last opp" @click="postComponent">
    </section>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
    name: 'UploadComponent',
    setup() {
        let component = reactive({
            name: "",
            model: "",
            availableFrom: "",
            availableUntil: "",
            priceNew: 0,
            value100: 0,
            value80: 0,
            value60: 0,
            value40: 0,
            value20: 0,
            description: "",
            brandId: 0,
            componentSeriesId: 0
        });

        let brandList = ref();
        let componentSeriesList = ref();

        return {
            component,
            brandList,
            componentSeriesList
        }
    },
    methods: {
        postComponent() {
            axios.post( "https://localhost:44353/api/Components/add-Component/", this.component )
                .then( () => {                   
                    alert(`${this.component.name} ble lagt til`);
                    
                })
        },
        renderBrandList(){
            axios.get("https://localhost:44353/api/brand/get-brand-list")
                .then( response => {
                    this.brandList = response.data;
                })
        },
        renderComponentSeriesList(){
            axios.get("https://localhost:44353/api/componentseries/get-component-series-list")
                .then( response => {
                    this.componentSeriesList = response.data;
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