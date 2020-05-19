<template>
  <div>
    <NavLinks class="hidden md:flex" />
    <NavMobile class="md:hidden fixed right-0 p-4" />
  </div>
</template>
<script>
import NavLinks from './NavLinks'
import NavMobile from './NavMobile'
export default {
  components: {
    NavLinks,
    NavMobile,
  },
}
</script>
