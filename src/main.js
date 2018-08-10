import Vue from 'vue'
import App from './App.vue'

import VueDisqusCount from '@/js/VueDisqusCount'

import VueGithubCorners from 'vue-gh-corners/'
import 'vue-gh-corners/dist/vue-github-corners.css';

Vue.config.productionTip = false

Vue.use(VueGithubCorners)

Vue.use(VueDisqusCount, {
  shortname: 'vue-disqus'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
