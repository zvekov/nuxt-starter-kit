const isDev = process.env.NODE_ENV !== 'production'
export default {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client',
  }),
  /*
   ** Headers of the page
   */
  head: {
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  // PWA metadata
  manifest: {
    name: 'Nuxt Starter Kit',
    short_name: 'Nuxt Starter Kit',
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Load nuxt modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // LAST MODULE!!!!!!! Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],
  /*
   ** Load nuxt build-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://www.npmjs.com/package/@nuxtjs/tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://www.npmjs.com/package/@nuxtjs/gtm
    '@nuxtjs/gtm',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false,
        },
      },
      // Change the postcss-preset-env settings
      preset: {
        autoprefixer: {
          cascade: false,
          grid: false,
        },
      },
    },

    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {},
    /*
     ** Build config
     */
    // Сhange path for static assets
    publicPath: '/assets/',
    // Extract CSS to one file
    extractCSS: true,
    // Optimization rules
    optimization: {
      splitChunks: {
        chunks: 'async',
      },
    },
    // Add chunks
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|vue)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash].js'),
      app: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[name].[contenthash].css'),
    },
  },
  // Add render rules
  render: {
    bundleRenderer: {
      shouldPrefetch: (file, type) =>
        ['script', 'style', 'font'].includes(type) && !file.includes('admin'),
    },
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles.map(
          (f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`
        ),
    },
    compressor: false,
    resourceHints: false,
    etag: true,
    static: {
      etag: true,
    },
  },
  // Config for Webfont Loader
  webfontloader: {
    events: false,
    google: {
      families: ['Jost:300,700&display=swap'],
    },
    timeout: 5000,
  },
  // Config for Google Tag Manager
  gtm: {
    id: process.env.GTM_ID,
    layer: 'dataLayer',
    variables: {},

    pageTracking: false,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: true,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
  },
  // Config for Robots.txt
  robots: [
    {
      UserAgent: '*',
    },
    {
      UserAgent: 'YandexBot',
    },
    {
      Host: process.env.APP_URL,
    },
    {
      Sitemap: process.env.APP_URL + '/sitemap.xml',
    },
    {
      Sitemap: process.env.APP_URL + '/sitemap.xml.gz',
    },
  ],
  // Config for Sitemap.xml
  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
    trailingSlash: true,
    exclude: [],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },
}
