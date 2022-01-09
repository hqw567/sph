<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <Rank />
        <Like />
        <Floor />
        <Floor />
        <Brand />
        <button @click="add">+</button>
        {{ count }}
        <button @click="rdd">-</button>
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from 'vuex'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState(['count'])
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        add() {
            this.$store.dispatch('add')
        },
        rdd() {
            this.$store.dispatch('rdd')
        }
    },
    components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
};
</script>

<style scoped lang="scss">
</style>
