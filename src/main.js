import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from "@/router/router";

const app = createApp(App);

components.forEach(element => {
    app.component(element.name, element);
    console.log(element.name);
});

app
    .use(router)
    .mount('#app');