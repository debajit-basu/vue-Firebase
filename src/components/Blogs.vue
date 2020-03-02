<template>
    <div class="blog-title">
        <h1>{{blogTitle}}</h1>
        <button class="btn btn-info p-3 m-5" @click="changeTitle">Change Blog Title</button>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data(){
        return {
            blogTitle: "Simple blog"
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = "Awesome blog title"
        }
    },
    beforeCreate(){
        alert(" beforeCreate hook")
    },
    created(){
        alert(" created hook")
    },
    beforeUpdate(){
        alert(" beforeUpdate hook")
    },
    updated(){
        alert("updated hook")
    },
}
</script>

<style scoped>
    .blog-title {
        color: pink;
    }
</style>


