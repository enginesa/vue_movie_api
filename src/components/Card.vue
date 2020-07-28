<template>

    <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+item.poster_path" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="item.title">
                    <b-card-text>
                        {{item.overview | maxLength(200)}}
                    </b-card-text>

                    <router-link :to="{name:'Detail',params: { id: item.id }}">
                        <b-button variant="outline-primary">Devam</b-button>
                    </router-link>

                </b-card-body>
            </b-col>
        </b-row>
    </b-card>

</template>
<script>
    export default {
        props: ["item"],
    }
</script>
<style scoped>
    .card {
        margin-top: 5px;
    }
</style>