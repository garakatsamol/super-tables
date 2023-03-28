export default defineNuxtConfig({
    css: [
      '~/assets/style/main.css',
      '~/assets/style/robots.scss'
       ],
       modules: ['nuxt-icon'],
       
    buildModules: [
      '@nuxtjs/style-resources',
      '@nuxtjs/tailwindcss',
      '@nuxt/typescript-build',
     ],
   
    styleResources: {
      scss: [
        '~/assets/style/_mixins.scss',
        '~/assets/style/variables.scss',
    
        
      ],
    },
    postcss: {
         
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
      
    },

  })
  