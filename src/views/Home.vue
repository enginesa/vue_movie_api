<template>
    <b-container>
        <b-row>

            <b-col md="6" v-for="(item,index) in getTopRated" :key="index">
                <Card :item="item"></Card>
            </b-col>


        </b-row>
    </b-container>
</template>

<script>
    import Card from '../components/Card';

    import {mapGetters,mapActions} from 'vuex';

    export default {
        components: {
            Card
        },
        computed:{
            ...mapGetters([
                "getTopRated"
            ])
        },
        methods:{
            ...mapActions([
                "fetchTopRated"
            ])
        },

        created() {
            this.fetchTopRated();
        }
    }
</script>