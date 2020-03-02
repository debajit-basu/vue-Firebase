<template>
    <div class="form-style">
        <h3>Form Component</h3>
        <div v-once>Original message was[ {{message}} ]</div><br/>
        <div>{{message}}</div><br/>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <button class="mt-3" v-on:click="reverseMsg()">Reverse Last String</button>
        <input class="m-2" v-model="message"><br/>
    </div>
</template>
<script>
export default {
    name: 'FormComponent',
    data(){
        return {
            message: 'Vue Js App',
            reverseMsg: () => {
                console.log("------------------")
                this.message = this.message.split(' ').reverse().join(' ')
            }            
        }
        // Object.freeze(obj)
    },
    computed: {
    // a computed getter
        reversedMessage: function () {
        // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },

    created: function (){
        console.log("FormComponent created and data is: " + this.message);
    },
    mounted: function () {
        console.log("FormComponent mounted and data is: " + this.message);
    },
    updated: function () {
        console.log("FormComponent updated and data is: " + this.message);
    },
    destroyed: function () {
        console.log("FormComponent destroyed and data is: " + this.message);
    }
}
</script>


<style scoped>
    h3 {
        color: red;
    }
    .form-style {
        text-align: center
    }
</style>