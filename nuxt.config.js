module.exports = {
  srcDir: 'src/client/',
  head: {
    title: "tt1",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: ["~/assets/css/main.css"],
  build: {},
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {}
}


// module.exports = {
//   srcDir: 'src/client/',
//   /*
//   ** Headers of the page
//   */
//   head: {
//     title: 'starter',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: 'Nuxt.js project' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
//     ]
//   },
//   /*
//    ** Customize the progress-bar color
//    */
//   loading: { color: '#3B8070' },
//   /*
//   ** Build configuration
//   */
//   build: {
//     vendor: ['axios'],
//   },
//   modules: [
//     ['@nuxtjs/axios'],
//     // [
//     //   'nuxtjs-extensions/typescript',
//     //   {
//     //     tsconfig: resolve(__dirname, 'src/client', 'tsconfig.json'),
//     //     tslint: resolve(__dirname, 'tslint.json')
//     //   }
//     // ],
//   ],
//   plugins: [],
//   css: [
//     { src: './src/client/assets/css/main.css'}
//   ]
// }
