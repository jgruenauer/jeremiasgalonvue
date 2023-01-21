<template>
    <div>
        <router-view v-slot="{route}">
            <BlogOverview v-if="route.name === 'blog'"></BlogOverview>
        </router-view>
        <router-view style="background-color: white"></router-view>
    </div>
    
</template>

<script>
import BlogOverview from './BlogOverview.vue';

    

    export default{
    name: "BlogPage",
    components: { BlogOverview }
}
</script>

<style scoped>
    div{
        text-align: center;
    }
    span{
        color: white;
    }
</style>