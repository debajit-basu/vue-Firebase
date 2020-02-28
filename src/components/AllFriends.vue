<template>
    <div id="all-friends">
        <h2>All Friends Component</h2>
        <h3>{{msg}}</h3>
        <div class="all-friend-data" v-for="(friendData , index) in friends" v-bind:key="index">
            {{friendData.name}} And
            <span class="status-show"> Status is {{(friendData.online) ? "ONLINE" : "Offline"}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    props: ["msg"],
    data() {
        return {
            friends: [
                {name: "Debajit Basu" , online: false},
                {name: "suresh mahato" , online: true},
                {name: "ram sarkar pal" , online: true},
                {name: "suresh mahato" , online: true},
                {name: "Debajit Basu1" , online: false},
                {name: "suresh mahato1" , online: false},
                {name: "ram sarkar pal1" , online: true},
                {name: "suresh mahato1" , online: false}
            ]
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
    }
</style>