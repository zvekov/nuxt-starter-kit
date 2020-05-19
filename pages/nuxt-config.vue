<template>
  <section class="max-w-2xl mx-auto p-4 break-all">
    <code>{{ NuxtConfig }}</code>
  </section>
</template>

<script>
import NuxtConfig from '~/nuxt.config.js'

export default {
  data() {
    return {
      NuxtConfig,
    }
  },
}
</script>
