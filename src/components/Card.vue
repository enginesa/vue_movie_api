<template>

    <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+item.poster_path" alt="Image"
                            class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="item.title">
                    <b-card-text>
                        {{item.overview | maxLength(getCommentMaxLength)}}
                    </b-card-text>

                    <router-link :to="{name:'Detail',params: { id: item.id }}" v-if="isDetail==='1'">
                        <b-button variant="outline-primary">Devam</b-button>
                    </router-link>

                    <div>
                        <b-embed v-for="(item,index) in item.WTvideo" :key="index"
                                 type="iframe"
                                 aspect="16by9"
                                 :src="'https://www.youtube.com/embed/'+item.key"
                                 allowfullscreen
                        ></b-embed>
                    </div>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>

</template>
<script>
    export default {
        props: ["item", "isDetail"],
        data() {
            return {
                commentMaxLength: 200
            }
        },
        computed: {
            getCommentMaxLength() {
                return this.isDetail === '1' ? 200 : 1000;
            }
        }

    }
</script>
<style scoped>
    .card {
        margin-top: 5px;
    }
</style>