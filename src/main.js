import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutMe from './components/AboutMe.vue'
import ExperiencePage from './components/ExperiencePage.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/experience', component: ExperiencePage },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

createApp(App).mount('#app')
