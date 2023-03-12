<template>
    <div>
        <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post>
    </div>
</template>

<script>
import BlogPost from "./BlogPost";
export default {
    components: { BlogPost },
    data () {
        return {
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>