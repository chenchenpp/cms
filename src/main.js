import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './plugins/element.js';
import './assets/iconfont/iconfont.js';
import { get, post } from './util/request/http';
import './components/global';
require('./assets/sass/reset.scss');
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
