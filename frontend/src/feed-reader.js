import { LitElement, css, html } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import * as DOMPurify from 'dompurify';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';

setColorScheme('#C7EDCC');

import 'mdui/mdui.css';

import 'mdui/components/dropdown.js';
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';
import 'mdui/components/list-subheader.js'
import 'mdui/components/bottom-app-bar.js';
import 'mdui/components/button-icon.js';
import 'mdui/components/dialog.js';
import 'mdui/components/button.js';
import 'mdui/components/menu.js';
import 'mdui/components/menu-item.js';

import '@mdui/icons/arrow-back.js';
import '@mdui/icons/arrow-forward.js';
import '@mdui/icons/close.js';

class FeedReader extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      selected: { type: Object },
      list: { type: Array },
      index: { type: Number },
    }
  }

  static get styles() {
    return css`
      :host {
        padding: 10px;
        display: block;
      }
      .content img{
        max-width: 100%;
      }
    `
  }

  dialogRef = createRef()
  navigationDrawerRef = createRef()
  layoutMainRef = createRef()
  appBarRef = createRef()

  constructor() {
    super()
    this.list = []
    this.index = -1
    this.selected = {
      title: '订阅列表',
      url: ''
    }
  }

  setConfig() {

  }

  render() {

    const entities = []
    Object.entries(this.hass.states).forEach(([key, state]) => {
      const attrs = state.attributes
      if (key.startsWith('sensor.') && attrs.source == 'rss') {
        entities.push({
          title: attrs.friendly_name,
          url: attrs.url
        })
      }
    })

    // 预览
    let previewHtml = ''
    if (this.index >= 0 && this.list.length > 0) {
      const item = this.list[this.index]
      previewHtml = html`<mdui-dialog open fullscreen ${ref(this.dialogRef)}
      headline="${item.title}">
      <span slot="description">
        ${item.updated}
      </span>
      <div class="content">
        ${unsafeHTML(DOMPurify.default.sanitize(item.content))}
      </div>
      <mdui-bottom-app-bar ${ref(this.appBarRef)} scroll-behavior="hide" scroll-threshold="30">
          <span>${this.index + 1}/${this.list.length}</span>
          <div style="flex-grow: 1"></div>
  
          <mdui-button-icon ?disabled=${this.index <= 0} @click=${this._prevClick.bind(this)}>        
            <mdui-icon-arrow-back></mdui-icon-arrow-back>
          </mdui-button-icon>

          <mdui-button-icon ?disabled=${this.index >= this.list.length - 1} @click=${this._nextClick.bind(this)}>
            <mdui-icon-arrow-forward></mdui-icon-arrow-forward>
          </mdui-button-icon>
  
          <mdui-button-icon @click=${this._closeClick.bind(this)}>
            <mdui-icon-close></mdui-icon-close>
          </mdui-button-icon>
  
      </mdui-bottom-app-bar>
  
    </mdui-dialog>`
    }


    return html`
  <mdui-dropdown>
    <mdui-button slot="trigger"  full-width>${this.selected.title}</mdui-button>
    <mdui-menu value="${this.selected.url}">${entities.map(item =>
      html`<mdui-menu-item value="${item.url}" @click=${() => this._selectClick(item)}>${item.title}</mdui-menu-item>`)}</mdui-menu>
  </mdui-dropdown>

  <mdui-list>
    ${this.list.map((item, index) => html`<mdui-list-item 
    ?active=${index === this.selectIndex}
    headline=${item.title} 
    description=${item.updated} @click=${() => this._openClick(index)}>
    <span slot="icon">${index + 1}</span>
    </mdui-list-item>`)}
  </mdui-list>
  
  ${previewHtml}`
  }

  _selectClick(item) {
    this.selected = item
    this.list = []
    this.selectIndex = -1
    this.hass.fetchWithAuth('/api/feedreader', {
      method: 'POST',
      body: JSON.stringify({
        url: item.url
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).then((list) => {
      this.list = list
    })
  }


  _openClick(index) {
    this.selectIndex = index
    this.index = index
    setTimeout(() => {
      const appBar = this.appBarRef.value
      appBar.scrollTarget = this.dialogRef.value.bodyRef.value
    }, 500)
  }

  _closeClick() {
    this.dialogRef.value.open = false
    setTimeout(() => {
      this.index = -1
    }, 500)
  }

  goTop() {
    this.dialogRef.value.bodyRef.value.scrollTop = 0
  }

  _prevClick() {
    if (this.index > 0) this.index -= 1
    this.goTop()
  }

  _nextClick() {
    if (this.index < this.list.length - 1) this.index += 1;
    this.goTop()
  }
}

window.customElements.define('feed-reader', FeedReader)
window.customCards = window.customCards || [];
window.customCards.push({
  type: "feed-reader",
  name: "RSS阅读器",
  preview: false,
  description: "显示RSS订阅内容"
});