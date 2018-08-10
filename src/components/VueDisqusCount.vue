<template>
  <span 
    :data-disqus-identifier="identifier" 
    :data-disqus-url="url" 
    class="disqus-comment-count" />
</template>

<script>
// https://github.com/disqus/disqus-react/blob/master/src/CommentCount.jsx

export default {
  name: 'vue-disqus-count',
  props: {
    identifier: {
      type: String,
      default: undefined,
    },
    url: {
      type: String,
      default: undefined,
    },
  },
  created () {
    this.$watch(
      (vm) => (vm.identifier, vm.url, Date.now()),
      this.resetInstance.bind(this)
    )
  },
  mounted () {
    this.resetInstance()
  },
  methods: {
    resetInstance () {
      if (this.url && this.url.indexOf('#/') !== -1) {
        throw 'VueDisqusCount: `url` can not in `hash` mode, can not contain `#/`'
      }

      if (this.identifier || this.url) {
        this.$disqus_count.load()
      }
    }
  }
}

</script>