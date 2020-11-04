/**
 * 路由钩子函数
 */
import Vue from 'vue';
import hljs from 'highlight.js';
import router from './index.js';

/**
 * 全局前置守卫
 * ps:常用于页面权限控制
 */
router.beforeEach(async (to, from, next) => {
  next();
})


/**
 * 全局后置钩子
 * ps: 常用于非页面业务逻辑控制，如：页面埋点、query参数解密
 */
router.afterEach((to, from) => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    // const blocks = document.querySelectorAll('pre code:not(.hljs)');
    // Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
})