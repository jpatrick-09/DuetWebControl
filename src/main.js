'use strict'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import './components'

import App from './App.vue'
import plugins from './plugins'
import i18n from './i18n'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

Vue.use(plugins)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	i18n,
	render: h => h(App),
	router,
	store,
	vuetify: new Vuetify({
		icons: {
			iconfont: 'mdiSvg',
		},
		theme:{
			themes: {
				light: {
					primary: '#2b3340',
					secondary: '#e83338',
					accent: '#333',
					info: '#2b3340'
						},
				dark: {
					primary: '#fff',
					secondary: '#e83338',
					accent: '#e83338',
					info: '#2b3340'
				},
					},
				},
	lang: { t: (key, ...params) => i18n.t(key, params) }
	})
})