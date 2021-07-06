import Vue from 'vue';
import App from './App.vue';

import VImgPre from './directives/imgPre/index'
Vue.use(VImgPre)

new Vue({
    el: '#app',
    render: h => h(App)
})
