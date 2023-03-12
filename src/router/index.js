import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'HelloWorld',
        component: () => import('../views/HelloWorld.vue'),
      },
      {
        path: 'vuebasics',
        name: 'VueBasics',
        component: () => import('../views/vue2/basics/Index.vue'),
        children: [
          {
            // Vue实例
            path: 'instance',
            name: 'Instance',
            component: () => import('../views/vue2/basics/Instance/Index.vue'),
          },
          {
            //模板语法
            path: 'syntax',
            name: 'Syntax',
            component: () => import('../views/vue2/basics/Syntax/Index.vue'),
          },
          {
            //计算属性和侦听器
            path: 'computed',
            name: 'Computed',
            component: () => import('../views/vue2/basics/Computed/Index.vue'),
          },
          {
            // 条件渲染
            path: 'conditional',
            name: 'Conditional',
            component: () => import('../views/vue2/basics/Conditional/Index.vue'),
          },
          {
            // 列表渲染
            path: 'list',
            name: 'List',
            component: () => import('../views/vue2/basics/List/Index.vue'),
          },
          {
            //事件处理
            path: 'events',
            name: 'Events',
            component: () => import('../views/vue2/basics/Events/Index.vue'),
          },
          {
            //表单输入绑定
            path: 'forms',
            name: 'Forms',
            component: () => import('../views/vue2/basics/Forms/Index.vue'),
          },
          {
            //组件基础
            path: 'components',
            name: 'Components',
            component: () => import('../views/vue2/basics/Components/Index.vue'),
          },
        ]
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
