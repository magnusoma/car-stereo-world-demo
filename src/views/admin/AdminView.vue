<template>
    <h1>Admin</h1>
    <upload-brand/>
    <upload-component-series/>
</template>

<script>
import UploadBrand from '../../components/admin/UploadBrand.vue'
import UploadComponentSeries from '../../components/admin/UploadComponentSeries.vue'

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
        UploadComponentSeries
    }
}
</script>