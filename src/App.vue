<template>
  <div id="app container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ title }}</h1>
    <Navbar />
    <FormComponent />
    <AllFriends msg="Inside All Friend Component I Am Prop" />
    <OnlineFriends :friendProps="friends" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar';
import AllFriends from './components/AllFriends';
import OnlineFriends from './components/OnlineFriends';
import FormComponent from './components/FormComponent';


export default {
  name: 'App',
  components:{
    Navbar: Navbar,
    OnlineFriends,
    AllFriends,
    FormComponent
  },
  data() {
    return {
      title: 'My first vue app,Debajit',
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

<style>

h1 {
  color: #444;
  text-align: center;
  font-weight: nornal;
}
</style>
