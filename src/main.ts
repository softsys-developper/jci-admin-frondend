import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query';

import { router } from './routes/index.route';
import './assets/index.css';
import App from './App.vue';
import 'remixicon/fonts/remixicon.css'
import { authentificateApp } from './app/authentificate.app';



const app = createApp(App);
const pinia = createPinia()
app.use(router);
app.use(VueQueryPlugin);
app.use(pinia)
authentificateApp().then(() => {
    app.mount('#app');
 });
