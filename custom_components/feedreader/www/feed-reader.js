customElements.whenDefined('ha-panel-lovelace').then(() => {
  const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
  const html = LitElement.prototype.html;
  const css = LitElement.prototype.css;

  customElements.define('feed-reader', class extends LitElement {

    static properties = {
      panel: {},
      hass: {},
      narrow: {}
    };

    constructor() {
      super();
    }

    static styles = css`
    :host {
      display: block;
      height: 100%;
      background-color: var(--primary-background-color);
      overflow: hidden;
      position: relative;
    }

    :host([narrow]) {
      width: 100%;
      position: fixed;
    }

    .toolbar {
      display: flex;
      align-items: center;
      font-size: 20px;
      height: var(--header-height);
      padding: 8px 12px;
      pointer-events: none;
      background-color: var(--app-header-background-color);
      font-weight: 400;
      color: var(--app-header-text-color, white);
      border-bottom: var(--app-header-border-bottom, none);
      box-sizing: border-box;
    }
    @media (max-width: 599px) {
      .toolbar {
        padding: 4px;
      }
    }
    .toolbar a {
      color: var(--sidebar-text-color);
      text-decoration: none;
    }

    ha-menu-button,
    ha-icon-button-arrow-prev,
    ::slotted([slot="toolbar-icon"]) {
      pointer-events: auto;
    }

    .main-title {
      margin: 0 0 0 24px;
      line-height: 20px;
      flex-grow: 1;
    }

    .content {
      position: relative;
      width: 100%;
      height: calc(100% - 1px - var(--header-height));
    }

    #fab {
      position: absolute;
      right: calc(16px + env(safe-area-inset-right));
      bottom: calc(16px + env(safe-area-inset-bottom));
      z-index: 1;
    }
    :host([narrow]) #fab.tabs {
      bottom: calc(84px + env(safe-area-inset-bottom));
    }
    #fab[is-wide] {
      bottom: 24px;
      right: 24px;
    }
    :host([rtl]) #fab {
      right: auto;
      left: calc(16px + env(safe-area-inset-left));
    }
    :host([rtl][is-wide]) #fab {
      bottom: 24px;
      left: 24px;
      right: auto;
    }

    iframe{border:none;width:100%;height:100%;}
    .nav-button{
      position:fixed;
      bottom:5px;
      right: 5px;
    }`;

    fireEvent(type, data) {
      const event = new Event(type, {
        bubbles: true,
        cancelable: false,
        composed: true
      });
      event.detail = data;
      this.dispatchEvent(event);
    }

    _toggleMenu(event) {
      this.fireEvent('hass-toggle-menu')
      event.stopPropagation()
    }

    render() {
      const { config, title } = this.panel
      // 列表显示
      
      // 内置显示
      return html`<div class="toolbar">
          <ha-menu-button
            .hass=${this.hass}
            .narrow=${this.narrow}
          ></ha-menu-button>
          <div class="main-title"><slot name="header">${title}</slot></div>
          <slot name="toolbar-icon"></slot>
        </div>
        <div class="content ha-scrollbar">
          
        </div>
      `;
    }
  });
})