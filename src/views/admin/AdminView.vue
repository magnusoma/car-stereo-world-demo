<template>
    <h1>Admin</h1>
    <upload-brand/>
    <upload-component-series/>
    <upload-component/>
</template>

<script>
import UploadBrand from '../../components/admin/UploadBrand.vue'
import UploadComponentSeries from '../../components/admin/UploadComponentSeries.vue'
import UploadComponent from '../../components/admin/UploadComponent.vue'

export default {
    name: 'AdminView',
    setup() {
        

        return {}
    },
    methods: {

    },
    created() {

    },
    components: {
        UploadBrand,
        UploadComponentSeries,
        UploadComponent
    }
}
</script>