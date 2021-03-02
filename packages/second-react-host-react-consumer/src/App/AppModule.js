import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

class AppModule extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('app-module-test', AppModule);