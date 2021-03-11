import Vue from 'vue'
import App from './App.vue'
import EventBus from './event-bus'
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getCounter(count){
      EventBus.$emit("count",count)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
