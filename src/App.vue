<template>
  <div id="app">
    <github-corners repo="alijaya/vue-disqus-count" bg-color="teal" />
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <a :href="website">Check vue-disqus-embed too</a>
    </nav>
    <h2>Identifier only</h2>
    <nav>
      <a
        v-for="(page, index) in pages" 
        :key="index"
        :href="website + page" >
        <vue-disqus-count :identifier="page" />
      </a>
    </nav>
    <h2>Url only</h2>
    <nav>
      <a
        v-for="(page, index) in pages" 
        :key="index"
        :href="website + page" >
        <vue-disqus-count :url="website + page" />
      </a>
    </nav>
    <h2>Identifier and Url</h2>
    <nav>
      <a
        v-for="(page, index) in pages" 
        :key="index"
        :href="website + page" >
        <vue-disqus-count :identifier="page" :url="website + page" />
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      website: 'https://alijaya.github.io/vue-disqus-embed/',
      pages: [
        'page-1',
        'page-2',
        'page-3',
        'page-4'
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: teal;
  margin: 1rem;
}

.github-corner {
  display: block;
}
</style>
