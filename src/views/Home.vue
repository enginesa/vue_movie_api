<template>
    <b-container>
        <b-row>

            <b-col md="6" v-for="(item,index) in getTopRated" :key="index">
                <Card :item="item" is-detail="1"></Card>
            </b-col>


        </b-row>
    </b-container>
</template>

<script>
    import Card from '../components/Card';

    import {mapGetters, mapActions} from 'vuex';

    export default {
        name:"Home",
        components: {
            Card
        },
        data(){
            return{
                topRatedPage:1,
            }
        },
        computed: {
            ...mapGetters([
                "getTopRated"
            ])
        },
        methods: {
            ...mapActions([
                "fetchTopRated"
            ]),
            handleScroll: function () {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    this.topRatedPage+=1;
                    this.fetchTopRated(this.topRatedPage);
                    console.log("geldi");

                }
            }
        },


        created() {
            this.fetchTopRated(this.topRatedPage);

            window.addEventListener('scroll', this.handleScroll);

        },
        destroyed: function () {
            window.removeEventListener('scroll', this.handleScroll);
        }

    }
</script>