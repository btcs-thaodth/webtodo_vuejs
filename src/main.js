import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";

loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
