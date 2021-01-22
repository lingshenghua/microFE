import React from 'react';
import ReactDOM from 'react-dom';
import './public-path';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render (props = {}) {
  const { container } = props

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}

if (!window.__POWERED_BY_QIANKUN) {
  render();
}

export async function bootstrap() {
  console.log('[react] current is in react')
}

export async function mount (props) {
  console.log('[react] current is in mount', props)
  render(props)
}

export async function unmount () {
  console.log('[react] current is in unmount')
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
