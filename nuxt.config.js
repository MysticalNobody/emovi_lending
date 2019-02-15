module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'emovi — рекомендации фильмов по настроению',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Теперь вам есть что посмотреть. Найдите фильм под ваше настроение, кликнув на пару emoji, или выберите из умных рекомендаций и подборок в персональной ленте.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.tildacdn.com/tild3032-3334-4536-b565-643030333236/favicon.ico' },
      { rel: 'stylesheet', href: 'main.css' }
    ]
  },
  plugins: ['plugins/scroll.js'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

