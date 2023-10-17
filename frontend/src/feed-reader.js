import { LitElement, css, html } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js';

import 'mdui/mdui.css';

import 'mdui/components/dropdown.js';
import 'mdui/components/layout.js';
import 'mdui/components/layout-item.js';
import 'mdui/components/layout-main.js';
import 'mdui/components/top-app-bar.js';
import 'mdui/components/top-app-bar-title.js';
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

export class FeedReader extends LitElement {
  static get properties() {
    return {
      selected: { type: Object },
      list: { type: Array },
      index: { type: Number },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden
      }

      .layout-main{
        height: 100vh;
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

  render() {

    const entities = [
      {
        title: 'Home Assistant',
        url: '1'
      },
      {
        title: 'Home Assistant 2',
        url: '2'
      },
      {
        title: 'Home Assistant 3',
        url: '3'
      },
      {
        title: 'Home Assistant 4',
        url: '4'
      }
    ]

    if(!this.selected){
      this.selected = entities[0]
      this._selectClick(this.selected)
    }
    // 预览
    let previewHtml = ''
    if(this.index >= 0){
      previewHtml = html`<mdui-dialog fullscreen ${ref(this.dialogRef)}>
      ${this.item.content}
      <mdui-bottom-app-bar ${ref(this.appBarRef)} scroll-behavior="hide" scroll-threshold="30">
          <mdui-button-icon @click=${this._homeClick.bind(this)}>
            <mdui-icon-home></mdui-icon-home>
          </mdui-button-icon>
  
          <div style="flex-grow: 1"></div>
  
          <mdui-button-icon @click=${this._prevClick.bind(this)}>        
            <mdui-icon-arrow-back></mdui-icon-arrow-back>
          </mdui-button-icon>
  
          <mdui-button-icon @click=${this._nextClick.bind(this)}>        
            <mdui-icon-arrow-forward></mdui-icon-arrow-forward>
          </mdui-button-icon>
  
          <mdui-button-icon @click=${this._closeClick.bind(this)}>
            <mdui-icon-close></mdui-icon-close>
          </mdui-button-icon>
  
      </mdui-bottom-app-bar>
  
    </mdui-dialog>`
    }


    return html`
<mdui-layout>
  
  <mdui-top-app-bar>
    <mdui-dropdown>
      <mdui-button slot="trigger" class="block">${this.selected.title}</mdui-button>
      <mdui-menu selects="single" value="${this.selected.url}">${entities.map(item=>
        html`<mdui-menu-item value="${item.url}" @click=${() => this._selectClick(item)}>${item.title}</mdui-menu-item>`)}</mdui-menu>
    </mdui-dropdown>
  </mdui-top-app-bar>

  <mdui-layout-main class="layout-main">

    <mdui-list>
      ${this.list.map(item => html`<mdui-list-item headline="Headline" description="Supporting text" @click=${() => this._openClick(item)}>Item 1</mdui-list-item>`)}
    </mdui-list>
  
  </mdui-layout-main>
</mdui-layout>
  ${previewHtml}`
  }

  _selectClick(item) {
    this.selected = item
    console.log(item)
    this.list = [
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title},
      { title: item.title}
    ]
  }

  _homeClick() {

  }

  _openClick(item) {
    console.log(item)
    this.dialogRef.value.open = true
    setTimeout(() => {
      const appBar = this.appBarRef.value
      appBar.scrollTarget = this.dialogRef.value.bodyRef.value
    }, 1000)
  }

  _closeClick() {
    this.dialogRef.value.open = false

  }

  _prevClick() {

  }

  _nextClick() {

  }
}

window.customElements.define('feed-reader', FeedReader)
