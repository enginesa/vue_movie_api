<template>

    <b-container>
        <Card :item="item" v-if="item"></Card>
    </b-container>
</template>

<script>
    import Card from '../components/Card';

    export default {

        components: {
            Card
        },
        data() {
            return {
                item: {},
            }
        }
        , created() {
            this.$store.dispatch("fetchDetail", this.$route.params.id).then((par) => {
                if (par) this.item = par;
            });
        }
    }
</script>