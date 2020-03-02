<template>
    <div id="all-friends">
        <h2>All Friends Component</h2>
        <h5>{{msg}}</h5>
        <div class="all-friend-data container" v-for="(friendData , index) in friendProps" v-bind:key="index">
            {{friendData.name}} And
            <span class="status-show" @click="unfriend(friendData.name)"> Status is {{(friendData.online) ? "ONLINE" : "Offline"}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    props: ["msg", "friendProps"],
    data() {
        return {
            
        }
    },
    methods: {
        unfriend(name){
            this.$emit('delete' , { name })
        }
    }
}
</script>

<style scoped>
    .all-friend-data {
        margin-top: 5px;
    }
    .status-show {
        display: block;
        margin-left: 5rem;
        font-weight: 5rem;
        cursor: pointer;
    }
    
    h2 {
        margin: 20px;
    }
    h5 {
        color: grey;
    }
</style>