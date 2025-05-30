import { createApp } from 'vue'
import App from './App.vue'

import MozaicVue from '@mozaic-ds/vue-3';
import '@mozaic-ds/vue-3/dist/mozaic-vue.adeo.css';

const app = createApp(App);
app.use(MozaicVue);
app.mount('#app');