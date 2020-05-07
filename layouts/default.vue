<template>
  <div>
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/molecules/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>
<style lang="postcss">
code {
  @apply flex flex-col;
}
</style>
