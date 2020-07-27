<template>
    <b-card :title="item.title" :img-src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+item.poster_path" img-alt="Image" img-top>
        <b-card-text>
            {{item.overview}}
        </b-card-text>
        <b-card-text class="small text-muted">Release Date {{item.release_date}}</b-card-text>
    </b-card>
</template>
<script>
    export default {
        props: ["item"],
        created() {
            console.log(this.item)
        }
    }
</script>


<style scoped>
    .card {
        margin-top: 5px;
    }
</style>