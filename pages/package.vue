<template>
  <section class="max-w-2xl mx-auto p-4 break-all">
    <code>{{ PackageJson }}</code>
  </section>
</template>

<script>
import PackageJson from '~/package.json'

export default {
  data() {
    return {
      PackageJson,
    }
  },
}
</script>
