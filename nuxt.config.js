export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "web-panorama",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      {
        rel: "preload",
        href: "/360_view_chinh_du_an.jpg",
      },
      {
        rel: "preload",
        href: "/360_view_phu_du_an.jpg",
      },
      {
        rel: "preload",
        href: "/360_view_biet_thu.jpg",
      },
      {
        rel: "preload",
        href: "/360_cau_my_thuan.jpg",
      },
      {
        rel: "preload",
        href: "/360_trung_tam_vinh_long.jpg",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  image: {
    presets: {
      panorama: {
        modifiers: {
          width: 6000,
          height: 3000,
        },
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //
    "@nuxt/image",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
  },

  // target: "static",

  // router: {
  //   base: "/web-panorama/",
  // },
};
