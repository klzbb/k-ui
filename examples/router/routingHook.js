/**
 * 路由钩子函数
 */
import router from './index.js';

/**
 * 全局前置守卫
 * 常用于页面权限控制
 */
router.beforeEach(async (to, from, next) => {
  next();
})


/**
 * 全局后置钩子
 */
router.afterEach((to, from) => {

})