import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Chat from './components/Chat.vue'

const routes = [{
	path: '/chat',
	component: Chat
}]

const router = new VueRouter({
	routes
})


Vue.config.productionTip = false

new Vue({
	
	router,
	render: h => h(App),
}).$mount('#app')
