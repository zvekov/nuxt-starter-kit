<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/organisms/Header'
export default {
  components: {
    Header,
  },
}
</script>
<style lang="postcss">
code {
  @apply flex flex-col;
}
</style>
