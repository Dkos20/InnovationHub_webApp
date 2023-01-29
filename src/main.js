import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue';
import router from './router'
import '@formkit/themes/genesis';
import '@formkit/icons';
import './assets/main.css';
import '@meforma/vue-toaster';

const app = createApp(App).use(plugin, defaultConfig);

app.use(router)

app.mount('#app')

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
