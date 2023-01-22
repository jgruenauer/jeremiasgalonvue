<template>
    <div class="blogoverview">
        <div class="blogentry" v-for="post in posts" :key="post.id" :style="{ backgroundImage: 'url(' + post.picture + ')' }"> 
            <h1 class="blogpost-header" @click="$router.push({path: '/blog/' + post.id})">{{ post.id }}</h1>
            <p class="blogpost-date">{{ post.date }}</p>
        </div>
    </div>
    
</template>

<script>
    import BLOGPOSTS from "./../../markdowns/blogposts.json";

    export default{
        name: "BlogOverview",
        computed: {
            posts(){
                return BLOGPOSTS['blogposts']
            }
        }
    }

    console.log(BLOGPOSTS)
</script>

<style scoped>
    .blogoverview{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .blogentry{
        width: 400px;
        height: 250px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-bottom: solid 1px white;
    }
    .blogpost-header{
        font-size: 20;
        color: white;
    }
    .blogpost-header:hover{
        color: yellow;
        cursor: pointer;
    }

    .blogpost-date{
        color: white;
    }
</style>
