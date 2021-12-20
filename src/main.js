import { createApp } from 'vue';
import App from './App.vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.component(Button.name, Button);

app.config.productionTip = false;
app.mount('#app');