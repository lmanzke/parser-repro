import { createApp } from 'vue';
import App from './App.vue';

const a = <T>(v: T): T => {
  return v;
};

createApp(App).mount('#app');
