<template>
    <div id="online-friends">
        <h2>Online Friends Component</h2>
        <div class="online-friend-data" v-for="(friendData , index) in friendProps" v-bind:key="index">

            <span class="data-show" v-if="friendData.online">{{friendData.name}}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'OnlineFriends',
    props: ['friendProps'],
    data() {
        return {
            
        }
        
    }
}
</script>

<style scoped>
     .online-friend-data {
        margin-top: 5px;
    }
    .data-show {
        color: green;
    }
</style>