import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {routes} from "vue-router/auto-routes";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081';
app.use(router).mount('#app')
// createApp(App).use(router).mount('#app')
