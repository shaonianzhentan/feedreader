import { LitElement, css, html } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import * as DOMPurify from 'dompurify';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import { throttle } from 'mdui/functions/throttle.js';

setColorScheme('#C7EDCC');

import 'mdui/components/bottom-app-bar.js';
import 'mdui/components/button-icon.js';
import 'mdui/components/dialog.js';

import '@mdui/icons/arrow-back.js';
import '@mdui/icons/arrow-forward.js';
import '@mdui/icons/close.js';

class FeedReader extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      stateObj: { type: Object },
      list: { type: Array },
      index: { type: Number },
      loading: { type: Boolean },
      page: { type: String },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --mdc-list-side-padding: 0;
      }
      .content img{
        max-width: 100%;
        height: auto;
      }
    `
  }

  dialogRef = createRef()
  appBarRef = createRef()


  constructor() {
    super()
    this.index = -1

    const styleElement = document.head.querySelector('#mdui-style')
    if (!styleElement) {
      const style = document.createElement('style')
      style.id = 'mdui-style'
      style.textContent = `
      html {
        --mdui-breakpoint-xs: 0px;
        --mdui-breakpoint-sm: 600px;
        --mdui-breakpoint-md: 840px;
        --mdui-breakpoint-lg: 1080px;
        --mdui-breakpoint-xl: 1440px;
        --mdui-breakpoint-xxl: 1920px
      }
      
      html {
        --mdui-color-primary-light: 103, 80, 164;
        --mdui-color-primary-container-light: 234, 221, 255;
        --mdui-color-on-primary-light: 255, 255, 255;
        --mdui-color-on-primary-container-light: 33, 0, 94;
        --mdui-color-inverse-primary-light: 208, 188, 255;
        --mdui-color-secondary-light: 98, 91, 113;
        --mdui-color-secondary-container-light: 232, 222, 248;
        --mdui-color-on-secondary-light: 255, 255, 255;
        --mdui-color-on-secondary-container-light: 30, 25, 43;
        --mdui-color-tertiary-light: 125, 82, 96;
        --mdui-color-tertiary-container-light: 255, 216, 228;
        --mdui-color-on-tertiary-light: 255, 255, 255;
        --mdui-color-on-tertiary-container-light: 55, 11, 30;
        --mdui-color-surface-light: 254, 247, 255;
        --mdui-color-surface-dim-light: 222, 216, 225;
        --mdui-color-surface-bright-light: 254, 247, 255;
        --mdui-color-surface-container-lowest-light: 255, 255, 255;
        --mdui-color-surface-container-low-light: 247, 242, 250;
        --mdui-color-surface-container-light: 243, 237, 247;
        --mdui-color-surface-container-high-light: 236, 230, 240;
        --mdui-color-surface-container-highest-light: 230, 224, 233;
        --mdui-color-surface-variant-light: 231, 224, 236;
        --mdui-color-on-surface-light: 28, 27, 31;
        --mdui-color-on-surface-variant-light: 73, 69, 78;
        --mdui-color-inverse-surface-light: 49, 48, 51;
        --mdui-color-inverse-on-surface-light: 244, 239, 244;
        --mdui-color-background-light: 254, 247, 255;
        --mdui-color-on-background-light: 28, 27, 31;
        --mdui-color-error-light: 179, 38, 30;
        --mdui-color-error-container-light: 249, 222, 220;
        --mdui-color-on-error-light: 255, 255, 255;
        --mdui-color-on-error-container-light: 65, 14, 11;
        --mdui-color-outline-light: 121, 116, 126;
        --mdui-color-outline-variant-light: 196, 199, 197;
        --mdui-color-shadow-light: 0, 0, 0;
        --mdui-color-surface-tint-color-light: 103, 80, 164;
        --mdui-color-scrim-light: 0, 0, 0;
        --mdui-color-primary-dark: 208, 188, 255;
        --mdui-color-primary-container-dark: 79, 55, 139;
        --mdui-color-on-primary-dark: 55, 30, 115;
        --mdui-color-on-primary-container-dark: 234, 221, 255;
        --mdui-color-inverse-primary-dark: 103, 80, 164;
        --mdui-color-secondary-dark: 204, 194, 220;
        --mdui-color-secondary-container-dark: 74, 68, 88;
        --mdui-color-on-secondary-dark: 51, 45, 65;
        --mdui-color-on-secondary-container-dark: 232, 222, 248;
        --mdui-color-tertiary-dark: 239, 184, 200;
        --mdui-color-tertiary-container-dark: 99, 59, 72;
        --mdui-color-on-tertiary-dark: 73, 37, 50;
        --mdui-color-on-tertiary-container-dark: 255, 216, 228;
        --mdui-color-surface-dark: 20, 18, 24;
        --mdui-color-surface-dim-dark: 20, 18, 24;
        --mdui-color-surface-bright-dark: 59, 56, 62;
        --mdui-color-surface-container-lowest-dark: 15, 13, 19;
        --mdui-color-surface-container-low-dark: 29, 27, 32;
        --mdui-color-surface-container-dark: 33, 31, 38;
        --mdui-color-surface-container-high-dark: 43, 41, 48;
        --mdui-color-surface-container-highest-dark: 54, 52, 59;
        --mdui-color-surface-variant-dark: 73, 69, 79;
        --mdui-color-on-surface-dark: 230, 225, 229;
        --mdui-color-on-surface-variant-dark: 202, 196, 208;
        --mdui-color-inverse-surface-dark: 230, 225, 229;
        --mdui-color-inverse-on-surface-dark: 49, 48, 51;
        --mdui-color-background-dark: 20, 18, 24;
        --mdui-color-on-background-dark: 230, 225, 229;
        --mdui-color-error-dark: 242, 184, 181;
        --mdui-color-error-container-dark: 140, 29, 24;
        --mdui-color-on-error-dark: 96, 20, 16;
        --mdui-color-on-error-container-dark: 249, 222, 220;
        --mdui-color-outline-dark: 147, 143, 153;
        --mdui-color-outline-variant-dark: 68, 71, 70;
        --mdui-color-shadow-dark: 0, 0, 0;
        --mdui-color-surface-tint-color-dark: 208, 188, 255;
        --mdui-color-scrim-dark: 0, 0, 0;
        font-size: 16px
      }
      
      html {
        color-scheme: light;
        --mdui-color-primary: var(--mdui-color-primary-light);
        --mdui-color-primary-container: var(--mdui-color-primary-container-light);
        --mdui-color-on-primary: var(--mdui-color-on-primary-light);
        --mdui-color-on-primary-container: var(--mdui-color-on-primary-container-light);
        --mdui-color-inverse-primary: var(--mdui-color-inverse-primary-light);
        --mdui-color-secondary: var(--mdui-color-secondary-light);
        --mdui-color-secondary-container: var(--mdui-color-secondary-container-light);
        --mdui-color-on-secondary: var(--mdui-color-on-secondary-light);
        --mdui-color-on-secondary-container: var(--mdui-color-on-secondary-container-light);
        --mdui-color-tertiary: var(--mdui-color-tertiary-light);
        --mdui-color-tertiary-container: var(--mdui-color-tertiary-container-light);
        --mdui-color-on-tertiary: var(--mdui-color-on-tertiary-light);
        --mdui-color-on-tertiary-container: var(--mdui-color-on-tertiary-container-light);
        --mdui-color-surface: var(--mdui-color-surface-light);
        --mdui-color-surface-dim: var(--mdui-color-surface-dim-light);
        --mdui-color-surface-bright: var(--mdui-color-surface-bright-light);
        --mdui-color-surface-container-lowest: var(--mdui-color-surface-container-lowest-light);
        --mdui-color-surface-container-low: var(--mdui-color-surface-container-low-light);
        --mdui-color-surface-container: var(--mdui-color-surface-container-light);
        --mdui-color-surface-container-high: var(--mdui-color-surface-container-high-light);
        --mdui-color-surface-container-highest: var(--mdui-color-surface-container-highest-light);
        --mdui-color-surface-variant: var(--mdui-color-surface-variant-light);
        --mdui-color-on-surface: var(--mdui-color-on-surface-light);
        --mdui-color-on-surface-variant: var(--mdui-color-on-surface-variant-light);
        --mdui-color-inverse-surface: var(--mdui-color-inverse-surface-light);
        --mdui-color-inverse-on-surface: var(--mdui-color-inverse-on-surface-light);
        --mdui-color-background: var(--mdui-color-background-light);
        --mdui-color-on-background: var(--mdui-color-on-background-light);
        --mdui-color-error: var(--mdui-color-error-light);
        --mdui-color-error-container: var(--mdui-color-error-container-light);
        --mdui-color-on-error: var(--mdui-color-on-error-light);
        --mdui-color-on-error-container: var(--mdui-color-on-error-container-light);
        --mdui-color-outline: var(--mdui-color-outline-light);
        --mdui-color-outline-variant: var(--mdui-color-outline-variant-light);
        --mdui-color-shadow: var(--mdui-color-shadow-light);
        --mdui-color-surface-tint-color: var(--mdui-color-surface-tint-color-light);
        --mdui-color-scrim: var(--mdui-color-scrim-light);
        color: rgb(var(--mdui-color-on-background));
        background-color: rgb(var(--mdui-color-background))
      }
                  
      html {
        --mdui-elevation-level0: none;
        --mdui-elevation-level1: 0 .5px 1.5px 0 rgba(var(--mdui-color-shadow), 19%), 0 0 1px 0 rgba(var(--mdui-color-shadow), 3.9%);
        --mdui-elevation-level2: 0 .85px 3px 0 rgba(var(--mdui-color-shadow), 19%), 0 .25px 1px 0 rgba(var(--mdui-color-shadow), 3.9%);
        --mdui-elevation-level3: 0 1.25px 5px 0 rgba(var(--mdui-color-shadow), 19%), 0 .3333px 1.5px 0 rgba(var(--mdui-color-shadow), 3.9%);
        --mdui-elevation-level4: 0 1.85px 6.25px 0 rgba(var(--mdui-color-shadow), 19%), 0 .5px 1.75px 0 rgba(var(--mdui-color-shadow), 3.9%);
        --mdui-elevation-level5: 0 2.75px 9px 0 rgba(var(--mdui-color-shadow), 19%), 0 .25px 3px 0 rgba(var(--mdui-color-shadow), 3.9%)
      }
      
      html {
        --mdui-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
        --mdui-motion-easing-standard: cubic-bezier(.2, 0, 0, 1);
        --mdui-motion-easing-standard-accelerate: cubic-bezier(.3, 0, 1, 1);
        --mdui-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
        --mdui-motion-easing-emphasized: var(--mdui-motion-easing-standard);
        --mdui-motion-easing-emphasized-accelerate: cubic-bezier(.3, 0, .8, .15);
        --mdui-motion-easing-emphasized-decelerate: cubic-bezier(.05, .7, .1, 1);
        --mdui-motion-duration-short1: 50ms;
        --mdui-motion-duration-short2: .1s;
        --mdui-motion-duration-short3: .15s;
        --mdui-motion-duration-short4: .2s;
        --mdui-motion-duration-medium1: .25s;
        --mdui-motion-duration-medium2: .3s;
        --mdui-motion-duration-medium3: .35s;
        --mdui-motion-duration-medium4: .4s;
        --mdui-motion-duration-long1: .45s;
        --mdui-motion-duration-long2: .5s;
        --mdui-motion-duration-long3: .55s;
        --mdui-motion-duration-long4: .6s;
        --mdui-motion-duration-extra-long1: .7s;
        --mdui-motion-duration-extra-long2: .8s;
        --mdui-motion-duration-extra-long3: .9s;
        --mdui-motion-duration-extra-long4: 1s
      }
      
      .mdui-prose {
        line-height: 1.75;
        word-wrap: break-word
      }
      
      .mdui-prose :first-child {
        margin-top: 0
      }
      
      .mdui-prose :last-child {
        margin-bottom: 0
      }
      
      .mdui-prose code,
      .mdui-prose kbd,
      .mdui-prose pre,
      .mdui-prose pre tt,
      .mdui-prose samp {
        font-family: Consolas, Courier, Courier New, monospace
      }
      
      .mdui-prose caption {
        text-align: left
      }
      
      .mdui-prose [draggable=true],
      .mdui-prose [draggable] {
        cursor: move
      }
      
      .mdui-prose [draggable=false] {
        cursor: inherit
      }
      
      .mdui-prose dl,
      .mdui-prose form,
      .mdui-prose ol,
      .mdui-prose p,
      .mdui-prose ul {
        margin-top: 1.25em;
        margin-bottom: 1.25em
      }
      
      .mdui-prose a {
        text-decoration: none;
        outline: 0;
        color: rgb(var(--mdui-color-primary))
      }
      
      .mdui-prose a:focus,
      .mdui-prose a:hover {
        border-bottom: .0625rem solid rgb(var(--mdui-color-primary))
      }
      
      .mdui-prose small {
        font-size: .875em
      }
      
      .mdui-prose strong {
        font-weight: 600
      }
      
      .mdui-prose blockquote {
        margin: 1.6em 2em;
        padding-left: 1em;
        border-left: .25rem solid rgb(var(--mdui-color-surface-variant))
      }
      
      @media only screen and (max-width:599.98px) {
        .mdui-prose blockquote {
          margin: 1.6em 0
        }
      }
      
      .mdui-prose blockquote footer {
        font-size: 86%;
        color: rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose mark {
        color: inherit;
        background-color: rgb(var(--mdui-color-secondary-container));
        border-bottom: .0625rem solid rgb(var(--mdui-color-secondary));
        margin: 0 .375rem;
        padding: .125rem
      }
      
      .mdui-prose h1,
      .mdui-prose h2,
      .mdui-prose h3,
      .mdui-prose h4,
      .mdui-prose h5,
      .mdui-prose h6 {
        font-weight: 400
      }
      
      .mdui-prose h1 small,
      .mdui-prose h2 small,
      .mdui-prose h3 small,
      .mdui-prose h4 small,
      .mdui-prose h5 small,
      .mdui-prose h6 small {
        font-weight: inherit;
        font-size: 65%;
        color: rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose h1 strong,
      .mdui-prose h2 strong,
      .mdui-prose h3 strong,
      .mdui-prose h4 strong,
      .mdui-prose h5 strong,
      .mdui-prose h6 strong {
        font-weight: 600
      }
      
      .mdui-prose h1 {
        font-size: 2.5em;
        margin-top: 0;
        margin-bottom: 1.25em;
        line-height: 1.1111
      }
      
      .mdui-prose h2 {
        font-size: 1.875em;
        margin-top: 2.25em;
        margin-bottom: 1.125em;
        line-height: 1.3333
      }
      
      .mdui-prose h3 {
        font-size: 1.5em;
        margin-top: 2em;
        margin-bottom: 1em;
        line-height: 1.6
      }
      
      .mdui-prose h4 {
        font-size: 1.25em;
        margin-top: 1.875em;
        margin-bottom: .875em;
        line-height: 1.5
      }
      
      .mdui-prose h2+*,
      .mdui-prose h3+*,
      .mdui-prose h4+*,
      .mdui-prose hr+* {
        margin-top: 0
      }
      
      .mdui-prose code,
      .mdui-prose kbd {
        font-size: .875em;
        color: rgb(var(--mdui-color-on-surface-container));
        background-color: rgba(var(--mdui-color-surface-variant), .28);
        padding: .125rem .375rem;
        border-radius: var(--mdui-shape-corner-extra-small)
      }
      
      .mdui-prose kbd {
        font-size: .9em
      }
      
      .mdui-prose abbr[title] {
        text-decoration: none;
        cursor: help;
        border-bottom: .0625rem dotted rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose ins,
      .mdui-prose u {
        text-decoration: none;
        border-bottom: .0625rem solid rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose del {
        text-decoration: line-through
      }
      
      .mdui-prose hr {
        margin-top: 3em;
        margin-bottom: 3em;
        border: none;
        border-bottom: .0625rem solid rgb(var(--mdui-color-surface-variant))
      }
      
      .mdui-prose pre {
        margin-top: 1.7143em;
        margin-bottom: 1.7143em
      }
      
      .mdui-prose pre code {
        padding: .8571em 1.1429em;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        background-color: rgb(var(--mdui-color-surface-container));
        color: rgb(var(--mdui-color-on-surface-container));
        border-radius: var(--mdui-shape-corner-extra-small)
      }
      
      .mdui-prose ol,
      .mdui-prose ul {
        padding-left: 1.625em
      }
      
      .mdui-prose ul {
        list-style-type: disc
      }
      
      .mdui-prose ol {
        list-style-type: decimal
      }
      
      .mdui-prose ol[type=A] {
        list-style-type: upper-alpha
      }
      
      .mdui-prose ol[type=a] {
        list-style-type: lower-alpha
      }
      
      .mdui-prose ol[type=I] {
        list-style-type: upper-roman
      }
      
      .mdui-prose ol[type=i] {
        list-style-type: lower-roman
      }
      
      .mdui-prose ol[type="1"] {
        list-style-type: decimal
      }
      
      .mdui-prose li {
        margin-top: .5em;
        margin-bottom: .5em
      }
      
      .mdui-prose ol>li,
      .mdui-prose ul>li {
        padding-left: .375em
      }
      
      .mdui-prose ol>li>p,
      .mdui-prose ul>li>p {
        margin-top: .75em;
        margin-bottom: .75em
      }
      
      .mdui-prose ol>li>:first-child,
      .mdui-prose ul>li>:first-child {
        margin-top: 1.25em
      }
      
      .mdui-prose ol>li>:last-child,
      .mdui-prose ul>li>:last-child {
        margin-bottom: 1.25em
      }
      
      .mdui-prose ol>li::marker {
        font-weight: 400;
        color: rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose ul>li::marker {
        color: rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose ol ol,
      .mdui-prose ol ul,
      .mdui-prose ul ol,
      .mdui-prose ul ul {
        margin-top: .75em;
        margin-bottom: .75em
      }
      
      .mdui-prose fieldset,
      .mdui-prose img {
        border: none
      }
      
      .mdui-prose figure,
      .mdui-prose img,
      .mdui-prose video {
        margin-top: 2em;
        margin-bottom: 2em;
        max-width: 100%
      }
      
      .mdui-prose figure>* {
        margin-top: 0;
        margin-bottom: 0
      }
      
      .mdui-prose figcaption {
        font-size: .875em;
        line-height: 1.4286;
        margin-top: .8571em;
        color: rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose figcaption:empty:before {
        z-index: -1;
        cursor: text;
        content: attr(placeholder);
        color: rgb(var(--mdui-color-on-surface-variant))
      }
      
      .mdui-prose table {
        margin-top: 2em;
        margin-bottom: 2em;
        border: .0625rem solid rgb(var(--mdui-color-surface-variant));
        border-radius: var(--mdui-shape-corner-large)
      }
      
      .mdui-table {
        width: 100%;
        overflow-x: auto;
        margin-top: 2em;
        margin-bottom: 2em;
        border: .0625rem solid rgb(var(--mdui-color-surface-variant));
        border-radius: var(--mdui-shape-corner-large)
      }
      
      .mdui-table table {
        margin-top: 0;
        margin-bottom: 0;
        border: none;
        border-radius: 0
      }
      
      .mdui-prose table,
      .mdui-table table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        border-spacing: 0
      }
      
      .mdui-prose td,
      .mdui-prose th,
      .mdui-table td,
      .mdui-table th {
        border-top: .0625rem solid rgb(var(--mdui-color-surface-variant))
      }
      
      .mdui-prose td:not(:first-child),
      .mdui-prose th:not(:first-child),
      .mdui-table td:not(:first-child),
      .mdui-table th:not(:first-child) {
        border-left: .0625rem solid rgb(var(--mdui-color-surface-variant))
      }
      
      .mdui-prose td:not(:last-child),
      .mdui-prose th:not(:last-child),
      .mdui-table td:not(:last-child),
      .mdui-table th:not(:last-child) {
        border-right: .0625rem solid rgb(var(--mdui-color-surface-variant))
      }
      
      .mdui-prose tbody:first-child tr:first-child td,
      .mdui-prose thead:first-child tr:first-child th,
      .mdui-table tbody:first-child tr:first-child td,
      .mdui-table thead:first-child tr:first-child th {
        border-top: 0
      }
      
      .mdui-prose tfoot td,
      .mdui-prose tfoot th,
      .mdui-prose thead td,
      .mdui-prose thead th,
      .mdui-table tfoot td,
      .mdui-table tfoot th,
      .mdui-table thead td,
      .mdui-table thead th {
        position: relative;
        vertical-align: middle;
        padding: 1.125rem 1rem;
        font-weight: var(--mdui-typescale-title-medium-weight);
        letter-spacing: var(--mdui-typescale-title-medium-tracking);
        line-height: var(--mdui-typescale-title-medium-line-height);
        color: rgb(var(--mdui-color-on-surface-variant));
        box-shadow: var(--mdui-elevation-level1)
      }
      
      .mdui-prose tbody td,
      .mdui-prose tbody th,
      .mdui-table tbody td,
      .mdui-table tbody th {
        padding: .875rem 1rem
      }
      
      .mdui-prose tbody th,
      .mdui-table tbody th {
        vertical-align: middle;
        font-weight: inherit
      }
      
      .mdui-prose tbody td,
      .mdui-table tbody td {
        vertical-align: baseline
      }
      
      html {
        --mdui-shape-corner-none: 0;
        --mdui-shape-corner-extra-small: .25rem;
        --mdui-shape-corner-small: .5rem;
        --mdui-shape-corner-medium: .75rem;
        --mdui-shape-corner-large: 1rem;
        --mdui-shape-corner-extra-large: 1.75rem;
        --mdui-shape-corner-full: 1000rem
      }
      
      html {
        --mdui-state-layer-hover: .08;
        --mdui-state-layer-focus: .12;
        --mdui-state-layer-pressed: .12;
        --mdui-state-layer-dragged: .16
      }
      
      html {
        --mdui-typescale-display-large-weight: 400;
        --mdui-typescale-display-medium-weight: 400;
        --mdui-typescale-display-small-weight: 400;
        --mdui-typescale-display-large-line-height: 4rem;
        --mdui-typescale-display-medium-line-height: 3.25rem;
        --mdui-typescale-display-small-line-height: 2.75rem;
        --mdui-typescale-display-large-size: 3.5625rem;
        --mdui-typescale-display-medium-size: 2.8125rem;
        --mdui-typescale-display-small-size: 2.25rem;
        --mdui-typescale-display-large-tracking: 0rem;
        --mdui-typescale-display-medium-tracking: 0rem;
        --mdui-typescale-display-small-tracking: 0rem;
        --mdui-typescale-headline-large-weight: 400;
        --mdui-typescale-headline-medium-weight: 400;
        --mdui-typescale-headline-small-weight: 400;
        --mdui-typescale-headline-large-line-height: 2.5rem;
        --mdui-typescale-headline-medium-line-height: 2.25rem;
        --mdui-typescale-headline-small-line-height: 2rem;
        --mdui-typescale-headline-large-size: 2rem;
        --mdui-typescale-headline-medium-size: 1.75rem;
        --mdui-typescale-headline-small-size: 1.5rem;
        --mdui-typescale-headline-large-tracking: 0rem;
        --mdui-typescale-headline-medium-tracking: 0rem;
        --mdui-typescale-headline-small-tracking: 0rem;
        --mdui-typescale-title-large-weight: 400;
        --mdui-typescale-title-medium-weight: 500;
        --mdui-typescale-title-small-weight: 500;
        --mdui-typescale-title-large-line-height: 1.75rem;
        --mdui-typescale-title-medium-line-height: 1.5rem;
        --mdui-typescale-title-small-line-height: 1.25rem;
        --mdui-typescale-title-large-size: 1.375rem;
        --mdui-typescale-title-medium-size: 1rem;
        --mdui-typescale-title-small-size: .875rem;
        --mdui-typescale-title-large-tracking: 0rem;
        --mdui-typescale-title-medium-tracking: .009375rem;
        --mdui-typescale-title-small-tracking: .00625rem;
        --mdui-typescale-label-large-weight: 500;
        --mdui-typescale-label-medium-weight: 500;
        --mdui-typescale-label-small-weight: 500;
        --mdui-typescale-label-large-line-height: 1.25rem;
        --mdui-typescale-label-medium-line-height: 1rem;
        --mdui-typescale-label-small-line-height: .375rem;
        --mdui-typescale-label-large-size: .875rem;
        --mdui-typescale-label-medium-size: .75rem;
        --mdui-typescale-label-small-size: .6875rem;
        --mdui-typescale-label-large-tracking: .00625rem;
        --mdui-typescale-label-medium-tracking: .03125rem;
        --mdui-typescale-label-small-tracking: .03125rem;
        --mdui-typescale-body-large-weight: 400;
        --mdui-typescale-body-medium-weight: 400;
        --mdui-typescale-body-small-weight: 400;
        --mdui-typescale-body-large-line-height: 1.5rem;
        --mdui-typescale-body-medium-line-height: 1.25rem;
        --mdui-typescale-body-small-line-height: 1rem;
        --mdui-typescale-body-large-size: 1rem;
        --mdui-typescale-body-medium-size: .875rem;
        --mdui-typescale-body-small-size: .75rem;
        --mdui-typescale-body-large-tracking: .009375rem;
        --mdui-typescale-body-medium-tracking: .015625rem;
        --mdui-typescale-body-small-tracking: .025rem
      }
      
      .mdui-lock-screen {
        overflow: hidden !important
      }
      `
      document.head.appendChild(style)
    }
  }

  post(url, data) {
    return this.hass.fetchWithAuth(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  render() {
    if (this.list == null) {
      this.loading = true
      this.list = []
      const { url } = this.stateObj.attributes
      this.post('/api/feedreader', { url }).then(res => res.json()).then((list) => {
        this.list = list
      }).finally(() => {
        this.loading = false
      })
    }

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

    let tabHtml
    switch (this.page) {
      case 'attributes':
        tabHtml = html`<ha-more-info-logbook
                        .hass=${this.hass}
                        .entityId=${this.stateObj.entity_id}
                      ></ha-more-info-logbook>
                      <ha-attributes .hass=${this.hass} .stateObj=${this.stateObj}></ha-attributes>`
        break;
      default:
        tabHtml = html`${this.loading ? html`<div style="text-align: center;"><ha-circular-progress size="large" active></ha-circular-progress></div>` : ''}
  
                ${this.list.map((item, index) => html`<ha-list-item twoline
                ?activated=${index === this.selectIndex}
                @click=${() => this._openClick(index)}>
            
                <span>${item.title}</span>
                <span slot="secondary">${item.updated}</span>       
                <span slot="graphic" >${index + 1}</span>
                </ha-list-item>`)}
                `
        break;
    }

    return html`${previewHtml}
    <paper-tabs attr-for-selected="page-name" .selected=${this.page} @selected-changed=${(ev) => this.page = ev.detail.value}>
      <paper-tab page-name="default">列表</paper-tab>
      <paper-tab page-name="attributes">属性</paper-tab>
      <paper-tab page-name="config" @click=${this._configClick}>配置</paper-tab>
    </paper-tabs>${tabHtml}`
  }

  _configClick() {
    this.post('/api/template', { template: '{{config_entry_id("' + this.stateObj.entity_id + '")}}' }).then(res => res.text()).then((config_entry_id) => {
      const url = `/config/integrations/integration/feedreader#config_entry=${config_entry_id}`
      history.pushState(null, "", url)
      this.fireEvent('location-changed', { replace: false })

      const dialog = document.querySelector('home-assistant').shadowRoot.querySelector('ha-more-info-dialog')
      this.fireEvent.call(dialog, 'close-dialog')
    })
  }

  _openClick(index) {
    this.selectIndex = index
    this.index = index
    setTimeout(() => {
      const body = this.dialogRef.value.bodyRef.value
      const appBar = this.appBarRef.value
      appBar.scrollTarget = body
      body.onscroll = throttle(() => {
        if (body.scrollTop + body.clientHeight >= body.scrollHeight - 40) {
          appBar.removeAttribute('hide')
        }
      }, 100)
    }, 500)
  }

  _closeClick() {
    this.index = -1
  }

  goTop() {
    this.selectIndex = this.index
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

  fireEvent(type, data = {}) {
    const event = new Event(type, {
      bubbles: true,
      cancelable: false,
      composed: true
    });
    event.detail = data;
    this.dispatchEvent(event);
  }
}

window.customElements.define('feed-reader', FeedReader)