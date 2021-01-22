import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './micor/index'
import App from './App.vue'
import routes from './routes'
import store from './store'

const render = () => {
  const app = createApp(App)
  app.use(routes)
  app.use(Antd)
  // app.use(Button)
  // app.use(Menu)
  // app.use(Table)
  // app.use(Form)
  // app.use(Input)
  // app.use(Select)
  app.use(store)
  app.mount('#main')
}

render()