# vue-disqus-count
Vue Plugin for embedding Disqus comment count.

[See here the Demo](https://alijaya.github.io/vue-disqus-count)

[See here for vue-disqus-embed](https://github.com/alijaya/vue-disqus-embed)

## Installation

```bash
npm install --save vue-disqus-count
```

or

```bash
yarn add vue-disqus-count
```

## Import

### Global Registration

```javascript
import Vue from 'vue'
import VueDisqusCount from 'vue-disqus-count'

Vue.use(VueDisqusCount, {
  shortname: YOUR_DISQUS_SHORTNAME
})
```

### Not Using Webpack

If you don't use webpack (for example in CodePen etc):

```html
<script src="node-modules/vue-disqus-count/dist/vue-disqus-count.umd.js"></script>
```

or use unpkg

```html
<script src="https://unpkg.com/vue-disqus-count/dist/vue-disqus-count.umd.js"></script>
```

and then you still need to install it:

```javascript
Vue.use(VueDisqusCount, {
  shortname: YOUR_DISQUS_SHORTNAME
})
```

## Basic Usage

Create an account at [Disqus](https://disqus.com/) and obtain the `shortname` for your app, 
it's **required** when you register the plugin.

```javascript
Vue.use(VueDisqusCount, {
  shortname: YOUR_DISQUS_SHORTNAME
})
```

The next thing that is **important** is, you **can not** use `url` with `hash` mode (if your url have `#/` this thing, it won't work).
So if you use `vue-router`, **make sure it's in `history` mode**.

It is caused by Disqus doesn't support `#/`, but they support `#!/` path.

You can use only `identifier` or only `url`, or both.

```html
<template>
  ...
  <vue-disqus-count :identifier="identifier"/>
  <vue-disqus-count :url="url" />
  <vue-disqus-count :identifier="identifier" :url="url" />
  ...
</template>

<script>
  export default {
    data () {
      return {
        identifier: '',
        url: '',
      }
    },
    mounted() {
      // Could work with async data
      // It needs identifier and url not empty before updated
      fetchData().then((response) => {
        this.identifier = response.identifer
        this.url = response.url
      })
    }
  }
</script>
```

## Example

[See the Demo](https://alijaya.github.io/vue-disqus-count) and [the corresponding code](https://github.com/alijaya/vue-disqus-count/blob/master/src/App.vue)

## Caveats

As I have said before, you can not use `hash` mode. Use `history` mode. Or if you really want to use `hash` mode, 
you need to use `hashbang` (`#!/`) rather than `hash` (`#/`).

## Question?

If you have question, just post in [issues](https://github.com/alijaya/vue-disqus-count/issues).