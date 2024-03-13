// src/index.js
import { render } from 'solid-js/web';
import ChatComponent from './components/chat-widget';

class ChatComponentElement extends HTMLElement {
  connectedCallback() {
    render(ChatComponent, this);
  }
}
document.getElementsByTagName('body').appendChild(ChatComponentElement);
// customElements.define('chat-widget', ChatComponentElement);
