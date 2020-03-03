import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

//global variable

Vue.filter('snipet' , (val) => {
  if(!val || typeof(val) !== 'string'){
    return ''
  }else{
    return val.slice(0,30) + '........'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
