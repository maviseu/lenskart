import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router'
import Routescomp from './routes.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(IconsPlugin);

const myRouter =  new VueRouter({
  routes:Routescomp,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
