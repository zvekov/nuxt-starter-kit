<template>
  <div class="z-50">
    <nav class="main-nav">
      <burger></burger>
    </nav>
    <sidebar>
      <Navigation
        class="pb-16 flex flex-col text-center uppercase font-bold leading-loose text-xl xs:text-2xl"
        @click.native="closeSidebarPanel"
      />
    </sidebar>
  </div>
</template>

<script>
import Sidebar from './NavSidebar'
import Navigation from './NavLinks'
import Burger from './NavBurger'
import { store, mutations } from '~/store/burger.js'
export default {
  components: {
    Navigation,
    Burger,
    Sidebar,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    },
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
}
</script>
<style lang="postcss">
.sidebar-panel {
  @apply flex items-center justify-center flex-col;
}
</style>
