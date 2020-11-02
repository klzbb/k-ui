import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index.js';
import demoBlock from './components/demo-block';

Vue.component('demo-block', demoBlock);
Vue.use(VueRouter);
import './router/routingHook.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
