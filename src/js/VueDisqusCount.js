import VueDisqusCount from '../components/VueDisqusCount'

let queued = false

export default {
  install (Vue, options) {

    if (!options || !options.shortname) {
      throw 'VueDisqusCount: options.shortname should be exist'
    }

    Vue.prototype.$disqus_count = {
      shortname: options.shortname,
      load () {
        if (!queued) {
          queued = true
          Vue.nextTick(() => {
            if (window.DISQUSWIDGETS && window.document.getElementById('dsq-count-scr')) {
              window.DISQUSWIDGETS.getCount({ reset: true })
            } else {
              const script = window.document.createElement('script')
              script.async = true
              script.src = `https://${this.shortname}.disqus.com/count.js`
              script.id = 'dsq-count-scr'
              window.document.body.appendChild(script)
            }
            queued = false
          })
        }
      }
    }

    Vue.component('vue-disqus-count', VueDisqusCount)
  }
}