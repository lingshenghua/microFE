import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

const render = (props = {}) => {
  const { container } = props
  const app = createApp(App)
  // const router = createRouter({
  //   base: '/fms',
  //   history: createWebHistory(),
  // })

  // app.use(router)
  app.mount(container ? container.querySelector('#fms') : '#fms')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render ()
}

export async function bootstrap () {
  console.log('current is bootstrap in fms')
}

export async function mount (props) {
  console.log('current is mount in [fms]: ', props)
  render(props)
}

export async function unmount () {
  console.log('current is unmount')
}