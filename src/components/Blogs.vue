<template>
    <div class="blog-title">
        <h1>{{blogTitle}}</h1>        
        <button class="btn btn-info p-3 m-5" @click="changeTitle">Change Blog Title</button>
        <div class="d-flex flex-row justify-content-center container">
            <label for="search" class="mr-3" :style="{color: 'green'}">Search blog post:</label>
            <input type="text" v-model="searchTitle">
        </div>
        <div class="container mb-5">
            <dir v-if="searchTitle !='' ">
                <div v-for="(post , index) in matchedPost" :key="post.id">
                    <h4 class="mt-4">{{index+=1}}. {{post.title}}</h4>
                    <span class="post-body mt-2" v-if="post.body.length > 200">{{post.body | snipet}}</span>
                    <span class="post-body mt-2" v-else>{{post.body}}</span>
                </div>
            </dir>
            <div v-else>
                <div v-for="(post , index) in posts" :key="post.id">
                    <h4 class="mt-4">{{index+=1}}. {{post.title}}</h4>
                    <span class="post-body mt-2" v-if="post.body.length > 200">{{post.body | snipet}}</span>
                    <span class="post-body mt-2" v-else>{{post.body}}</span>
                </div>
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
            vType: "a",
            searchTitle: ''
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = "Awesome blog title"
        }
    },
    computed: {
        matchedPost(){
            return this.posts.filter((post) => {
                return post.title.match(this.searchTitle)
            })
        }
    },
    beforeCreate(){
        //alert(" beforeCreate hook")
    },
    created(){
        // alert(" created hook")
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
        console.log("searchTitle: -- " + this.searchTitle)
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


