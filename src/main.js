import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'

const vuetify = createVuetify({
  theme: { defaultTheme: 'light' },
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  components,
  directives,
})
const pinia = createPinia()
const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.mount('#app')
