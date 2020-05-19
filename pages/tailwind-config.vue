<template>
  <section class="max-w-2xl mx-auto p-4 break-all">
    <code>{{ TailwindConfig }}</code>
  </section>
</template>

<script>
import TailwindConfig from '~/tailwind.config.js'

export default {
  data() {
    return {
      TailwindConfig,
    }
  },
}
</script>
