import { LitElement, css, html, safe } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js';

import 'mdui/mdui.css';

import 'mdui/components/dropdown.js';

import 'mdui/components/navigation-drawer.js';
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';
import 'mdui/components/list-subheader.js'
import 'mdui/components/bottom-app-bar.js';
import 'mdui/components/button-icon.js';
import 'mdui/components/dialog.js';
import 'mdui/components/button.js';
import 'mdui/components/menu.js';
import 'mdui/components/menu-item.js';

import '@mdui/icons/menu.js';
import '@mdui/icons/arrow-back.js';
import '@mdui/icons/arrow-forward.js';
import '@mdui/icons/close.js';
import '@mdui/icons/home.js';

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
        display: block;
        width: 100%;
      }


      .block {
        width: 100%;
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
  }

  setConfig() {

  }

  render() {
    console.log(this.hass)

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

    if (!this.selected) {
      this.selected = entities[0]
      this._selectClick(this.selected)
    }
    // 预览
    let previewHtml = ''
    if (this.index >= 0 && this.list.length > 0) {
      const item = this.list[this.index]
      previewHtml = html`<mdui-dialog open fullscreen ${ref(this.dialogRef)}
      headline="${item.title}">
      <span slot="description">
        Images will be permenantly removed from you account and all synced devices.
      </span>
      ${safe(item.content)}
      <mdui-bottom-app-bar ${ref(this.appBarRef)} scroll-behavior="hide" scroll-threshold="30">
          <mdui-button-icon @click=${this._homeClick.bind(this)}>
            <mdui-icon-home></mdui-icon-home>
          </mdui-button-icon>
  
          <div style="flex-grow: 1"></div>
  
          <mdui-button-icon disabled=${this.index <= 0} @click=${this._prevClick.bind(this)}>        
            <mdui-icon-arrow-back></mdui-icon-arrow-back>
          </mdui-button-icon>

          <mdui-button-icon disabled=${this.index >= this.list.length - 1} @click=${this._nextClick.bind(this)}>
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
    <mdui-button slot="trigger" class="block">${this.selected.title}</mdui-button>
    <mdui-menu value="${this.selected.url}">${entities.map(item =>
    html`<mdui-menu-item value="${item.url}" @click=${() => this._selectClick(item)}>${item.title}</mdui-menu-item>`)}</mdui-menu>
  </mdui-dropdown>

  <mdui-list>
    ${this.list.map((item, index) => html`<mdui-list-item headline="Headline" description="Supporting text" @click=${() => this._openClick(index)}>${item.title}</mdui-list-item>`)}
  </mdui-list>
  
  ${previewHtml}`
  }

  _selectClick(item) {
    this.selected = item
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

  _homeClick() {

  }

  _openClick(index) {
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

  _prevClick() {
    this.index -= 1
  }

  _nextClick() {
    this.index += 1
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