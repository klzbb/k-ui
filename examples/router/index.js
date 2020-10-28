import VueRouter from 'vue-router';
import Vue from 'vue';

const routes = [
  {
    path: "/",
    name: "LayoutA",
    component: () => import("examples/layout/layout-a.vue"),
    children: [
      {
        path: 'guide',
        name: "Guide",
        component: () => import("examples/views/guide/index.vue")
      },
      // {
      //   path: 'components',
      //   name: "Components",
      //   component: () => import("examples/views/components/index.vue")
      // }
    ]
  }
]

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: routes
})