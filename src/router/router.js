import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let routerList = [];
function importAll(routerArr) {
  routerArr.keys().forEach(item => {
    routerList.push(routerArr(item).default);
  });
};
importAll(require.context('.', true, /\.router\.js/));
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue')
    },
    ...routerList
  ]
});
