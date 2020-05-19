<template>
  <ul class="max-w-2xl mx-auto py-8 flex justify-center">
    <li class="px-3"><Home /></li>
    <li class="px-3"><Package /></li>
    <li class="px-3"><NuxtConfig /></li>
    <li class="px-3"><TailwindConfig /></li>
  </ul>
</template>

<script>
import Home from '~/components/atoms/links/Home'
import Package from '~/components/atoms/links/Package'
import NuxtConfig from '~/components/atoms/links/NuxtConfig'
import TailwindConfig from '~/components/atoms/links/TailwindConfig'
export default {
  components: {
    Home,
    Package,
    NuxtConfig,
    TailwindConfig,
  },
}
</script>
