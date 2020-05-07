<template>
  <section class="max-w-2xl mx-auto">
    <div class="flex flex-col items-center">
      <Logo class="mt-12 mb-8" />
      <h1 class="text-4xl font-bold mb-4">
        Nuxt Starter Kit
      </h1>
      <ul v-for="tool in tools" :key="tool.id">
        <li class="font-light">
          <a :href="tool.link" target="_blank">{{ tool.name }} </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/atoms/Logo'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      tools: [
        { name: 'TailwindCSS', link: '' },
        { name: 'PurgeCSS', link: '' },
        { name: 'Google Tag Manager', link: '' },
        { name: 'Sitemap', link: '' },
        { name: 'Robots.txt', link: '' },
        { name: 'DotEnv', link: '' },
        { name: 'PWA', link: '' },
        { name: 'Axios', link: '' },
        { name: 'Webfont Loader', link: '' },
      ],
    }
  },
}
</script>
