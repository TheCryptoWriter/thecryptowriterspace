import './style.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'


document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')