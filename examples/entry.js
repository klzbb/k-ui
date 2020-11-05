import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index.js';
import KUi from 'main/index.js';
import demoBlock from './components/demo-block';
import KButton from 'packages/button/src/button.vue'
Vue.use(KUi);
Vue.component(KButton.name, KButton);
Vue.component('demo-block', demoBlock);
Vue.use(VueRouter);
import './router/routingHook.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
