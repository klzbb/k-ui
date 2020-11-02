import VueRouter from 'vue-router';
import Vue from 'vue';
// import Doc from '../../test/form.md';
const routes = [
  {
    path: "/",
    name: "LayoutA",
    redirect: "/guide",
    component: () => import("examples/layout/layout-a.vue"),
    children: [
      {
        path: 'guide',
        name: "Guide",
        component: () => import("examples/views/guide/index.md")
      }
      // {
      //   path: 'components',
      //   name: "Components",
      //   component: Doc
      // }
    ]
  }
]

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: routes
})