import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './router';

import 'normalize.css';
import './assets/css/style.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
