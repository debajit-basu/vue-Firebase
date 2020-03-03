<template>
    <div class="blog-title">
        <h1>{{blogTitle}}</h1>
        <button class="btn btn-info p-3 m-5" @click="changeTitle">Change Blog Title</button>
        <div class="container mb-5">
            <div v-for="(post , index) in posts" :key="post.id">
                <h4 class="mt-4">{{index+=1}}. {{post.title}}</h4>
                <span class="post-body mt-2">{{post.body}}</span>
            </div>
            <h1 class="mt-5">If Else With V-Directive</h1>
            <div v-if="vType == 'a'">
                <span v-bind:style="{color: 'green'}">Inside if with value {{vType}}</span>
            </div>
            <div v-else-if="vType == 'b'">
                <span  v-bind:style="{color: 'blue'}">Inside else-if with value {{vType}}</span>
            </div>
            <div v-else>
                <span  v-bind:style="{color: 'red'}">Inside else where type is not a/b/c</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Blogs',
    data(){
        return {
            blogTitle: "Simple blog",
            posts: [],
            vType: "a"
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = "Awesome blog title"
        }
    },
    beforeCreate(){
        //alert(" beforeCreate hook")
    },
    created(){
        alert(" created hook")
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
            console.log(resp);
            if(resp.status === 200 && resp.data.length > 0){
                this.posts = resp.data;
            }else{
                console.log('Something wrong with response');
            }
        }).catch((err) => {
            console.log(err.message)
        })
    },
    beforeUpdate(){
        //alert(" beforeUpdate hook")
    },
    updated(){
        //alert("updated hook")
    },
}
</script>

<style scoped>
    .blog-title {
        color: pink;
    }
    .post-body {
        line-height: 2px;
        color: black;
        font-weight: 20px;
    }

    h4 {
        color: rebeccapurple
    }
</style>


