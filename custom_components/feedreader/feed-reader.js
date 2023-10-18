var ki=Object.defineProperty;var $i=(e,t,r)=>t in e?ki(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var kr=(e,t,r)=>($i(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=window,lo=or.ShadowRoot&&(or.ShadyCSS===void 0||or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,co=Symbol(),Zo=new WeakMap;let Sn=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==co)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(lo&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Zo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Zo.set(r,t))}return t}toString(){return this.cssText}};const xi=e=>new Sn(typeof e=="string"?e:e+"",void 0,co),St=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new Sn(r,e,co)},Si=(e,t)=>{lo?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),n=or.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},Qo=lo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return xi(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r;const sr=window,tn=sr.trustedTypes,Mi=tn?tn.emptyScript:"",en=sr.reactiveElementPolyfillSupport,qr={toAttribute(e,t){switch(t){case Boolean:e=e?Mi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Mn=(e,t)=>t!==e&&(t==t||e==e),xr={attribute:!0,type:String,converter:qr,reflect:!1,hasChanged:Mn},Gr="finalized";let me=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const n=this._$Ep(o,r);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,r=xr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){const i=this[t];this[r]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||xr}static finalize(){if(this.hasOwnProperty(Gr))return!1;this[Gr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of o)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(Qo(n))}else t!==void 0&&r.push(Qo(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Si(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=xr){var n;const i=this.constructor._$Ep(t,o);if(i!==void 0&&o.reflect===!0){const s=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:qr).toAttribute(r,o.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,r){var o;const n=this.constructor,i=n._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=n.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:qr;this._$El=i,this[i]=a.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Mn)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};me[Gr]=!0,me.elementProperties=new Map,me.elementStyles=[],me.shadowRootOptions={mode:"open"},en==null||en({ReactiveElement:me}),(($r=sr.reactiveElementVersions)!==null&&$r!==void 0?$r:sr.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sr;const ar=window,ge=ar.trustedTypes,rn=ge?ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yr="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,Pn="?"+Ht,Pi=`<${Pn}>`,te=document,Oe=()=>te.createComment(""),Ne=e=>e===null||typeof e!="object"&&typeof e!="function",Dn=Array.isArray,Di=e=>Dn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Mr=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,on=/-->/g,nn=/>/g,Kt=RegExp(`>|${Mr}(?:([^\\s"'>=/]+)(${Mr}*=${Mr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sn=/'/g,an=/"/g,Rn=/^(?:script|style|textarea|title)$/i,Ri=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),N=Ri(1),kt=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),ln=new WeakMap,Xt=te.createTreeWalker(te,129,null,!1);function Ln(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rn!==void 0?rn.createHTML(t):t}const Li=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":"",s=$e;for(let a=0;a<r;a++){const l=e[a];let c,d,m=-1,f=0;for(;f<l.length&&(s.lastIndex=f,d=s.exec(l),d!==null);)f=s.lastIndex,s===$e?d[1]==="!--"?s=on:d[1]!==void 0?s=nn:d[2]!==void 0?(Rn.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=Kt):d[3]!==void 0&&(s=Kt):s===Kt?d[0]===">"?(s=n??$e,m=-1):d[1]===void 0?m=-2:(m=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Kt:d[3]==='"'?an:sn):s===an||s===sn?s=Kt:s===on||s===nn?s=$e:(s=Kt,n=void 0);const _=s===Kt&&e[a+1].startsWith("/>")?" ":"";i+=s===$e?l+Pi:m>=0?(o.push(c),l.slice(0,m)+Yr+l.slice(m)+Ht+_):l+Ht+(m===-2?(o.push(void 0),a):_)}return[Ln(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),o]};class Fe{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[c,d]=Li(t,r);if(this.el=Fe.createElement(c,o),Xt.currentNode=this.el.content,r===2){const m=this.el.content,f=m.firstChild;f.remove(),m.append(...f.childNodes)}for(;(n=Xt.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const m=[];for(const f of n.getAttributeNames())if(f.endsWith(Yr)||f.startsWith(Ht)){const _=d[s++];if(m.push(f),_!==void 0){const C=n.getAttribute(_.toLowerCase()+Yr).split(Ht),k=/([.?@])?(.*)/.exec(_);l.push({type:1,index:i,name:k[2],strings:C,ctor:k[1]==="."?Oi:k[1]==="?"?Fi:k[1]==="@"?Bi:mr})}else l.push({type:6,index:i})}for(const f of m)n.removeAttribute(f)}if(Rn.test(n.tagName)){const m=n.textContent.split(Ht),f=m.length-1;if(f>0){n.textContent=ge?ge.emptyScript:"";for(let _=0;_<f;_++)n.append(m[_],Oe()),Xt.nextNode(),l.push({type:2,index:++i});n.append(m[f],Oe())}}}else if(n.nodeType===8)if(n.data===Pn)l.push({type:2,index:i});else{let m=-1;for(;(m=n.data.indexOf(Ht,m+1))!==-1;)l.push({type:7,index:i}),m+=Ht.length-1}i++}}static createElement(t,r){const o=te.createElement("template");return o.innerHTML=t,o}}function ye(e,t,r=e,o){var n,i,s,a;if(t===kt)return t;let l=o!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[o]:r._$Cl;const c=Ne(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,o)),o!==void 0?((s=(a=r)._$Co)!==null&&s!==void 0?s:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=ye(e,l._$AS(e,t.values),l,o)),t}class Ii{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:o},parts:n}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:te).importNode(o,!0);Xt.currentNode=i;let s=Xt.nextNode(),a=0,l=0,c=n[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Ve(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new zi(s,this,t)),this._$AV.push(d),c=n[++l]}a!==(c==null?void 0:c.index)&&(s=Xt.nextNode(),a++)}return Xt.currentNode=te,i}v(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class Ve{constructor(t,r,o,n){var i;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cp=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ye(this,t,r),Ne(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==kt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Di(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&Ne(this._$AH)?this._$AA.nextSibling.data=t:this.$(te.createTextNode(t)),this._$AH=t}g(t){var r;const{values:o,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Fe.createElement(Ln(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(o);else{const s=new Ii(i,this),a=s.u(this.options);s.v(o),this.$(a),this._$AH=s}}_$AC(t){let r=ln.get(t.strings);return r===void 0&&ln.set(t.strings,r=new Fe(t)),r}T(t){Dn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of t)n===r.length?r.push(o=new Ve(this.k(Oe()),this.k(Oe()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class mr{constructor(t,r,o,n,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)t=ye(this,t,r,0),s=!Ne(t)||t!==this._$AH&&t!==kt,s&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=ye(this,a[o+l],r,l),c===kt&&(c=this._$AH[l]),s||(s=!Ne(c)||c!==this._$AH[l]),c===H?t=H:t!==H&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!n&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Oi extends mr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const Ni=ge?ge.emptyScript:"";class Fi extends mr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,Ni):this.element.removeAttribute(this.name)}}class Bi extends mr{constructor(t,r,o,n,i){super(t,r,o,n,i),this.type=5}_$AI(t,r=this){var o;if((t=(o=ye(this,t,r,0))!==null&&o!==void 0?o:H)===kt)return;const n=this._$AH,i=t===H&&n!==H||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==H&&(n===H||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class zi{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ye(this,t)}}const cn=ar.litHtmlPolyfillSupport;cn==null||cn(Fe,Ve),((Sr=ar.litHtmlVersions)!==null&&Sr!==void 0?Sr:ar.litHtmlVersions=[]).push("2.8.0");const Ui=(e,t,r)=>{var o,n;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=i._$litPart$;if(s===void 0){const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new Ve(t.insertBefore(Oe(),a),a,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pr,Dr;let ft=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ui(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return kt}};ft.finalized=!0,ft._$litElement$=!0,(Pr=globalThis.litElementHydrateSupport)===null||Pr===void 0||Pr.call(globalThis,{LitElement:ft});const un=globalThis.litElementPolyfillSupport;un==null||un({LitElement:ft});((Dr=globalThis.litElementVersions)!==null&&Dr!==void 0?Dr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=e=>e===null||typeof e!="object"&&typeof e!="function",Vi=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ve=e=>(...t)=>({_$litDirective$:e,values:t});let pr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(e,t)=>{var r,o;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(o=(r=i)._$AO)===null||o===void 0||o.call(r,t,!1),Le(i,t);return!0},lr=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},In=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),qi(t)}};function Wi(e){this._$AN!==void 0?(lr(this),this._$AM=e,In(this)):this._$AM=e}function ji(e,t=!1,r=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=r;i<o.length;i++)Le(o[i],!1),lr(o[i]);else o!=null&&(Le(o,!1),lr(o));else Le(this,e)}const qi=e=>{var t,r,o,n;e.type==fr.CHILD&&((t=(o=e)._$AP)!==null&&t!==void 0||(o._$AP=ji),(r=(n=e)._$AQ)!==null&&r!==void 0||(n._$AQ=Wi))};let On=class extends pr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,o){super._$AT(t,r,o),In(this),this.isConnected=t._$AU}_$AO(t,r=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),r&&(Le(this,t),lr(this))}setValue(t){if(Vi(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=()=>new Gi;let Gi=class{};const Rr=new WeakMap,Zt=ve(class extends On{render(e){return H}update(e,[t]){var r;const o=t!==this.G;return o&&this.G!==void 0&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=t,this.dt=(r=e.options)===null||r===void 0?void 0:r.host,this.ot(this.lt=e.element)),H}ot(e){var t;if(typeof this.G=="function"){const r=(t=this.dt)!==null&&t!==void 0?t:globalThis;let o=Rr.get(r);o===void 0&&(o=new WeakMap,Rr.set(r,o)),o.get(this.G)!==void 0&&this.G.call(this.dt,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,r;return typeof this.G=="function"?(t=Rr.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(r=this.G)===null||r===void 0?void 0:r.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cr=class extends pr{constructor(t){if(super(t),this.et=H,t.type!==fr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||t==null)return this.ft=void 0,this.et=t;if(t===kt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};cr.directiveName="unsafeHTML",cr.resultType=1;const Yi=ve(cr);/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:Nn,setPrototypeOf:dn,isFrozen:Ki,getPrototypeOf:Xi,getOwnPropertyDescriptor:Fn}=Object;let{freeze:lt,seal:$t,create:Bn}=Object,{apply:Kr,construct:Xr}=typeof Reflect<"u"&&Reflect;lt||(lt=function(t){return t});$t||($t=function(t){return t});Kr||(Kr=function(t,r,o){return t.apply(r,o)});Xr||(Xr=function(t,r){return new t(...r)});const Ze=Et(Array.prototype.forEach),hn=Et(Array.prototype.pop),xe=Et(Array.prototype.push),nr=Et(String.prototype.toLowerCase),Lr=Et(String.prototype.toString),Ji=Et(String.prototype.match),Se=Et(String.prototype.replace),Zi=Et(String.prototype.indexOf),Qi=Et(String.prototype.trim),yt=Et(RegExp.prototype.test),Me=ts(TypeError);function Et(e){return function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return Kr(e,t,o)}}function ts(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return Xr(e,r)}}function P(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:nr;dn&&dn(e,null);let o=t.length;for(;o--;){let n=t[o];if(typeof n=="string"){const i=r(n);i!==n&&(Ki(t)||(t[o]=i),n=i)}e[n]=!0}return e}function ue(e){const t=Bn(null);for(const[r,o]of Nn(e))Fn(e,r)!==void 0&&(t[r]=o);return t}function Qe(e,t){for(;e!==null;){const o=Fn(e,t);if(o){if(o.get)return Et(o.get);if(typeof o.value=="function")return Et(o.value)}e=Xi(e)}function r(o){return console.warn("fallback value for",o),null}return r}const mn=lt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ir=lt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Or=lt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),es=lt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Nr=lt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),rs=lt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),fn=lt(["#text"]),pn=lt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Fr=lt(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gn=lt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),tr=lt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),os=$t(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ns=$t(/<%[\w\W]*|[\w\W]*%>/gm),is=$t(/\${[\w\W]*}/gm),ss=$t(/^data-[\-\w.\u00B7-\uFFFF]/),as=$t(/^aria-[\-\w]+$/),zn=$t(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ls=$t(/^(?:\w+script|data):/i),cs=$t(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Un=$t(/^html$/i);var yn=Object.freeze({__proto__:null,MUSTACHE_EXPR:os,ERB_EXPR:ns,TMPLIT_EXPR:is,DATA_ATTR:ss,ARIA_ATTR:as,IS_ALLOWED_URI:zn,IS_SCRIPT_OR_DATA:ls,ATTR_WHITESPACE:cs,DOCTYPE_NAME:Un});const us=function(){return typeof window>"u"?null:window},ds=function(t,r){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const n="data-tt-policy-suffix";r&&r.hasAttribute(n)&&(o=r.getAttribute(n));const i="dompurify"+(o?"#"+o:"");try{return t.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function Hn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:us();const t=E=>Hn(E);if(t.version="3.0.6",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let{document:r}=e;const o=r,n=o.currentScript,{DocumentFragment:i,HTMLTemplateElement:s,Node:a,Element:l,NodeFilter:c,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:f,trustedTypes:_}=e,C=l.prototype,k=Qe(C,"cloneNode"),D=Qe(C,"nextSibling"),R=Qe(C,"childNodes"),O=Qe(C,"parentNode");if(typeof s=="function"){const E=r.createElement("template");E.content&&E.content.ownerDocument&&(r=E.content.ownerDocument)}let w,F="";const{implementation:x,createNodeIterator:U,createDocumentFragment:M,getElementsByTagName:V}=r,{importNode:L}=o;let S={};t.isSupported=typeof Nn=="function"&&typeof O=="function"&&x&&x.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Z,ERB_EXPR:q,TMPLIT_EXPR:A,DATA_ATTR:G,ARIA_ATTR:Y,IS_SCRIPT_OR_DATA:ct,ATTR_WHITESPACE:K}=yn;let{IS_ALLOWED_URI:At}=yn,W=null;const re=P({},[...mn,...Ir,...Or,...Nr,...fn]);let j=null;const oe=P({},[...pn,...Fr,...gn,...tr]);let B=Object.seal(Bn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Nt=null,ne=null,je=!0,_e=!0,Te=!1,qe=!0,Ft=!1,jt=!1,yr=!1,br=!1,ie=!1,Ge=!1,Ye=!1,Lo=!0,Io=!1;const yi="user-content-";let vr=!0,Ce=!1,se={},ae=null;const Oo=P({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let No=null;const Fo=P({},["audio","video","img","source","image","track"]);let wr=null;const Bo=P({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ke="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",Mt="http://www.w3.org/1999/xhtml";let le=Mt,Ar=!1,Er=null;const bi=P({},[Ke,Xe,Mt],Lr);let qt=null;const vi=["application/xhtml+xml","text/html"],wi="text/html";let Q=null,ce=null;const Ai=r.createElement("form"),zo=function(u){return u instanceof RegExp||u instanceof Function},_r=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ce&&ce===u)){if((!u||typeof u!="object")&&(u={}),u=ue(u),qt=vi.indexOf(u.PARSER_MEDIA_TYPE)===-1?qt=wi:qt=u.PARSER_MEDIA_TYPE,Q=qt==="application/xhtml+xml"?Lr:nr,W="ALLOWED_TAGS"in u?P({},u.ALLOWED_TAGS,Q):re,j="ALLOWED_ATTR"in u?P({},u.ALLOWED_ATTR,Q):oe,Er="ALLOWED_NAMESPACES"in u?P({},u.ALLOWED_NAMESPACES,Lr):bi,wr="ADD_URI_SAFE_ATTR"in u?P(ue(Bo),u.ADD_URI_SAFE_ATTR,Q):Bo,No="ADD_DATA_URI_TAGS"in u?P(ue(Fo),u.ADD_DATA_URI_TAGS,Q):Fo,ae="FORBID_CONTENTS"in u?P({},u.FORBID_CONTENTS,Q):Oo,Nt="FORBID_TAGS"in u?P({},u.FORBID_TAGS,Q):{},ne="FORBID_ATTR"in u?P({},u.FORBID_ATTR,Q):{},se="USE_PROFILES"in u?u.USE_PROFILES:!1,je=u.ALLOW_ARIA_ATTR!==!1,_e=u.ALLOW_DATA_ATTR!==!1,Te=u.ALLOW_UNKNOWN_PROTOCOLS||!1,qe=u.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ft=u.SAFE_FOR_TEMPLATES||!1,jt=u.WHOLE_DOCUMENT||!1,ie=u.RETURN_DOM||!1,Ge=u.RETURN_DOM_FRAGMENT||!1,Ye=u.RETURN_TRUSTED_TYPE||!1,br=u.FORCE_BODY||!1,Lo=u.SANITIZE_DOM!==!1,Io=u.SANITIZE_NAMED_PROPS||!1,vr=u.KEEP_CONTENT!==!1,Ce=u.IN_PLACE||!1,At=u.ALLOWED_URI_REGEXP||zn,le=u.NAMESPACE||Mt,B=u.CUSTOM_ELEMENT_HANDLING||{},u.CUSTOM_ELEMENT_HANDLING&&zo(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(B.tagNameCheck=u.CUSTOM_ELEMENT_HANDLING.tagNameCheck),u.CUSTOM_ELEMENT_HANDLING&&zo(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(B.attributeNameCheck=u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),u.CUSTOM_ELEMENT_HANDLING&&typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(B.allowCustomizedBuiltInElements=u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ft&&(_e=!1),Ge&&(ie=!0),se&&(W=P({},[...fn]),j=[],se.html===!0&&(P(W,mn),P(j,pn)),se.svg===!0&&(P(W,Ir),P(j,Fr),P(j,tr)),se.svgFilters===!0&&(P(W,Or),P(j,Fr),P(j,tr)),se.mathMl===!0&&(P(W,Nr),P(j,gn),P(j,tr))),u.ADD_TAGS&&(W===re&&(W=ue(W)),P(W,u.ADD_TAGS,Q)),u.ADD_ATTR&&(j===oe&&(j=ue(j)),P(j,u.ADD_ATTR,Q)),u.ADD_URI_SAFE_ATTR&&P(wr,u.ADD_URI_SAFE_ATTR,Q),u.FORBID_CONTENTS&&(ae===Oo&&(ae=ue(ae)),P(ae,u.FORBID_CONTENTS,Q)),vr&&(W["#text"]=!0),jt&&P(W,["html","head","body"]),W.table&&(P(W,["tbody"]),delete Nt.tbody),u.TRUSTED_TYPES_POLICY){if(typeof u.TRUSTED_TYPES_POLICY.createHTML!="function")throw Me('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof u.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Me('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=u.TRUSTED_TYPES_POLICY,F=w.createHTML("")}else w===void 0&&(w=ds(_,n)),w!==null&&typeof F=="string"&&(F=w.createHTML(""));lt&&lt(u),ce=u}},Uo=P({},["mi","mo","mn","ms","mtext"]),Ho=P({},["foreignobject","desc","title","annotation-xml"]),Ei=P({},["title","style","font","a","script"]),Je=P({},Ir);P(Je,Or),P(Je,es);const Tr=P({},Nr);P(Tr,rs);const _i=function(u){let g=O(u);(!g||!g.tagName)&&(g={namespaceURI:le,tagName:"template"});const v=nr(u.tagName),z=nr(g.tagName);return Er[u.namespaceURI]?u.namespaceURI===Xe?g.namespaceURI===Mt?v==="svg":g.namespaceURI===Ke?v==="svg"&&(z==="annotation-xml"||Uo[z]):!!Je[v]:u.namespaceURI===Ke?g.namespaceURI===Mt?v==="math":g.namespaceURI===Xe?v==="math"&&Ho[z]:!!Tr[v]:u.namespaceURI===Mt?g.namespaceURI===Xe&&!Ho[z]||g.namespaceURI===Ke&&!Uo[z]?!1:!Tr[v]&&(Ei[v]||!Je[v]):!!(qt==="application/xhtml+xml"&&Er[u.namespaceURI]):!1},Gt=function(u){xe(t.removed,{element:u});try{u.parentNode.removeChild(u)}catch{u.remove()}},Cr=function(u,g){try{xe(t.removed,{attribute:g.getAttributeNode(u),from:g})}catch{xe(t.removed,{attribute:null,from:g})}if(g.removeAttribute(u),u==="is"&&!j[u])if(ie||Ge)try{Gt(g)}catch{}else try{g.setAttribute(u,"")}catch{}},Vo=function(u){let g=null,v=null;if(br)u="<remove></remove>"+u;else{const st=Ji(u,/^[\r\n\t ]+/);v=st&&st[0]}qt==="application/xhtml+xml"&&le===Mt&&(u='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+u+"</body></html>");const z=w?w.createHTML(u):u;if(le===Mt)try{g=new f().parseFromString(z,qt)}catch{}if(!g||!g.documentElement){g=x.createDocument(le,"template",null);try{g.documentElement.innerHTML=Ar?F:z}catch{}}const it=g.body||g.documentElement;return u&&v&&it.insertBefore(r.createTextNode(v),it.childNodes[0]||null),le===Mt?V.call(g,jt?"html":"body")[0]:jt?g.documentElement:it},Wo=function(u){return U.call(u.ownerDocument||u,u,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null)},Ti=function(u){return u instanceof m&&(typeof u.nodeName!="string"||typeof u.textContent!="string"||typeof u.removeChild!="function"||!(u.attributes instanceof d)||typeof u.removeAttribute!="function"||typeof u.setAttribute!="function"||typeof u.namespaceURI!="string"||typeof u.insertBefore!="function"||typeof u.hasChildNodes!="function")},jo=function(u){return typeof a=="function"&&u instanceof a},Pt=function(u,g,v){S[u]&&Ze(S[u],z=>{z.call(t,g,v,ce)})},qo=function(u){let g=null;if(Pt("beforeSanitizeElements",u,null),Ti(u))return Gt(u),!0;const v=Q(u.nodeName);if(Pt("uponSanitizeElement",u,{tagName:v,allowedTags:W}),u.hasChildNodes()&&!jo(u.firstElementChild)&&yt(/<[/\w]/g,u.innerHTML)&&yt(/<[/\w]/g,u.textContent))return Gt(u),!0;if(!W[v]||Nt[v]){if(!Nt[v]&&Yo(v)&&(B.tagNameCheck instanceof RegExp&&yt(B.tagNameCheck,v)||B.tagNameCheck instanceof Function&&B.tagNameCheck(v)))return!1;if(vr&&!ae[v]){const z=O(u)||u.parentNode,it=R(u)||u.childNodes;if(it&&z){const st=it.length;for(let ut=st-1;ut>=0;--ut)z.insertBefore(k(it[ut],!0),D(u))}}return Gt(u),!0}return u instanceof l&&!_i(u)||(v==="noscript"||v==="noembed"||v==="noframes")&&yt(/<\/no(script|embed|frames)/i,u.innerHTML)?(Gt(u),!0):(Ft&&u.nodeType===3&&(g=u.textContent,Ze([Z,q,A],z=>{g=Se(g,z," ")}),u.textContent!==g&&(xe(t.removed,{element:u.cloneNode()}),u.textContent=g)),Pt("afterSanitizeElements",u,null),!1)},Go=function(u,g,v){if(Lo&&(g==="id"||g==="name")&&(v in r||v in Ai))return!1;if(!(_e&&!ne[g]&&yt(G,g))){if(!(je&&yt(Y,g))){if(!j[g]||ne[g]){if(!(Yo(u)&&(B.tagNameCheck instanceof RegExp&&yt(B.tagNameCheck,u)||B.tagNameCheck instanceof Function&&B.tagNameCheck(u))&&(B.attributeNameCheck instanceof RegExp&&yt(B.attributeNameCheck,g)||B.attributeNameCheck instanceof Function&&B.attributeNameCheck(g))||g==="is"&&B.allowCustomizedBuiltInElements&&(B.tagNameCheck instanceof RegExp&&yt(B.tagNameCheck,v)||B.tagNameCheck instanceof Function&&B.tagNameCheck(v))))return!1}else if(!wr[g]){if(!yt(At,Se(v,K,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&u!=="script"&&Zi(v,"data:")===0&&No[u])){if(!(Te&&!yt(ct,Se(v,K,"")))){if(v)return!1}}}}}}return!0},Yo=function(u){return u.indexOf("-")>0},Ko=function(u){Pt("beforeSanitizeAttributes",u,null);const{attributes:g}=u;if(!g)return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j};let z=g.length;for(;z--;){const it=g[z],{name:st,namespaceURI:ut,value:Yt}=it,ke=Q(st);let dt=st==="value"?Yt:Qi(Yt);if(v.attrName=ke,v.attrValue=dt,v.keepAttr=!0,v.forceKeepAttr=void 0,Pt("uponSanitizeAttribute",u,v),dt=v.attrValue,v.forceKeepAttr||(Cr(st,u),!v.keepAttr))continue;if(!qe&&yt(/\/>/i,dt)){Cr(st,u);continue}Ft&&Ze([Z,q,A],Jo=>{dt=Se(dt,Jo," ")});const Xo=Q(u.nodeName);if(Go(Xo,ke,dt)){if(Io&&(ke==="id"||ke==="name")&&(Cr(st,u),dt=yi+dt),w&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!ut)switch(_.getAttributeType(Xo,ke)){case"TrustedHTML":{dt=w.createHTML(dt);break}case"TrustedScriptURL":{dt=w.createScriptURL(dt);break}}try{ut?u.setAttributeNS(ut,st,dt):u.setAttribute(st,dt),hn(t.removed)}catch{}}}Pt("afterSanitizeAttributes",u,null)},Ci=function E(u){let g=null;const v=Wo(u);for(Pt("beforeSanitizeShadowDOM",u,null);g=v.nextNode();)Pt("uponSanitizeShadowNode",g,null),!qo(g)&&(g.content instanceof i&&E(g.content),Ko(g));Pt("afterSanitizeShadowDOM",u,null)};return t.sanitize=function(E){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=null,v=null,z=null,it=null;if(Ar=!E,Ar&&(E="<!-->"),typeof E!="string"&&!jo(E))if(typeof E.toString=="function"){if(E=E.toString(),typeof E!="string")throw Me("dirty is not a string, aborting")}else throw Me("toString is not a function");if(!t.isSupported)return E;if(yr||_r(u),t.removed=[],typeof E=="string"&&(Ce=!1),Ce){if(E.nodeName){const Yt=Q(E.nodeName);if(!W[Yt]||Nt[Yt])throw Me("root node is forbidden and cannot be sanitized in-place")}}else if(E instanceof a)g=Vo("<!---->"),v=g.ownerDocument.importNode(E,!0),v.nodeType===1&&v.nodeName==="BODY"||v.nodeName==="HTML"?g=v:g.appendChild(v);else{if(!ie&&!Ft&&!jt&&E.indexOf("<")===-1)return w&&Ye?w.createHTML(E):E;if(g=Vo(E),!g)return ie?null:Ye?F:""}g&&br&&Gt(g.firstChild);const st=Wo(Ce?E:g);for(;z=st.nextNode();)qo(z)||(z.content instanceof i&&Ci(z.content),Ko(z));if(Ce)return E;if(ie){if(Ge)for(it=M.call(g.ownerDocument);g.firstChild;)it.appendChild(g.firstChild);else it=g;return(j.shadowroot||j.shadowrootmode)&&(it=L.call(o,it,!0)),it}let ut=jt?g.outerHTML:g.innerHTML;return jt&&W["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&yt(Un,g.ownerDocument.doctype.name)&&(ut="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+ut),Ft&&Ze([Z,q,A],Yt=>{ut=Se(ut,Yt," ")}),w&&Ye?w.createHTML(ut):ut},t.setConfig=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_r(E),yr=!0},t.clearConfig=function(){ce=null,yr=!1},t.isValidAttribute=function(E,u,g){ce||_r({});const v=Q(E),z=Q(u);return Go(v,z,g)},t.addHook=function(E,u){typeof u=="function"&&(S[E]=S[E]||[],xe(S[E],u))},t.removeHook=function(E){if(S[E])return hn(S[E])},t.removeHooks=function(E){S[E]&&(S[E]=[])},t.removeAllHooks=function(){S={}},t}var hs=Hn();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return e<0?-1:e===0?0:1}function Ie(e,t,r){return(1-r)*e+r*t}function ms(e,t,r){return r<e?e:r>t?t:r}function ur(e,t,r){return r<e?e:r>t?t:r}function uo(e){return e=e%360,e<0&&(e=e+360),e}function fs(e,t){return uo(t-e)<=180?1:-1}function ps(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function Jr(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],o=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],n=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,o,n]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],ys=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],bs=[95.047,100,108.883];function ho(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function bn(e){const t=Qt(e[0]),r=Qt(e[1]),o=Qt(e[2]);return ho(t,r,o)}function Vn(e){return e>>16&255}function Wn(e){return e>>8&255}function jn(e){return e&255}function vs(e,t,r){const o=ys,n=o[0][0]*e+o[0][1]*t+o[0][2]*r,i=o[1][0]*e+o[1][1]*t+o[1][2]*r,s=o[2][0]*e+o[2][1]*t+o[2][2]*r,a=Qt(n),l=Qt(i),c=Qt(s);return ho(a,l,c)}function ws(e){const t=pe(Vn(e)),r=pe(Wn(e)),o=pe(jn(e));return Jr([t,r,o],gs)}function As(e){const t=Vt(e),r=Qt(t);return ho(r,r,r)}function Zr(e){const t=ws(e)[1];return 116*qn(t/100)-16}function Vt(e){return 100*_s((e+16)/116)}function Qr(e){return qn(e/100)*116-16}function pe(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function Qt(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,ms(0,255,Math.round(r*255))}function Es(){return bs}function qn(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function _s(e){const t=.008856451679035631,r=24389/27,o=e*e*e;return o>t?o:(116*e-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{static make(t=Es(),r=200/Math.PI*Vt(50)/100,o=50,n=2,i=!1){const s=t,a=s[0]*.401288+s[1]*.650173+s[2]*-.051461,l=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,c=s[0]*-.002079+s[1]*.048952+s[2]*.953127,d=.8+n/10,m=d>=.9?Ie(.59,.69,(d-.9)*10):Ie(.525,.59,(d-.8)*10);let f=i?1:d*(1-1/3.6*Math.exp((-r-42)/92));f=f>1?1:f<0?0:f;const _=d,C=[f*(100/a)+1-f,f*(100/l)+1-f,f*(100/c)+1-f],k=1/(5*r+1),D=k*k*k*k,R=1-D,O=D*r+.1*R*R*Math.cbrt(5*r),w=Vt(o)/t[1],F=1.48+Math.sqrt(w),x=.725/Math.pow(w,.2),U=x,M=[Math.pow(O*C[0]*a/100,.42),Math.pow(O*C[1]*l/100,.42),Math.pow(O*C[2]*c/100,.42)],V=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)],L=(2*V[0]+V[1]+.05*V[2])*x;return new Ct(w,L,x,U,m,_,C,O,Math.pow(O,.25),F)}constructor(t,r,o,n,i,s,a,l,c,d){this.n=t,this.aw=r,this.nbb=o,this.ncb=n,this.c=i,this.nc=s,this.rgbD=a,this.fl=l,this.fLRoot=c,this.z=d}}Ct.DEFAULT=Ct.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,r,o,n,i,s,a,l,c){this.hue=t,this.chroma=r,this.j=o,this.q=n,this.m=i,this.s=s,this.jstar=a,this.astar=l,this.bstar=c}distance(t){const r=this.jstar-t.jstar,o=this.astar-t.astar,n=this.bstar-t.bstar,i=Math.sqrt(r*r+o*o+n*n);return 1.41*Math.pow(i,.63)}static fromInt(t){return et.fromIntInViewingConditions(t,Ct.DEFAULT)}static fromIntInViewingConditions(t,r){const o=(t&16711680)>>16,n=(t&65280)>>8,i=t&255,s=pe(o),a=pe(n),l=pe(i),c=.41233895*s+.35762064*a+.18051042*l,d=.2126*s+.7152*a+.0722*l,m=.01932141*s+.11916382*a+.95034478*l,f=.401288*c+.650173*d-.051461*m,_=-.250268*c+1.204414*d+.045854*m,C=-.002079*c+.048952*d+.953127*m,k=r.rgbD[0]*f,D=r.rgbD[1]*_,R=r.rgbD[2]*C,O=Math.pow(r.fl*Math.abs(k)/100,.42),w=Math.pow(r.fl*Math.abs(D)/100,.42),F=Math.pow(r.fl*Math.abs(R)/100,.42),x=ht(k)*400*O/(O+27.13),U=ht(D)*400*w/(w+27.13),M=ht(R)*400*F/(F+27.13),V=(11*x+-12*U+M)/11,L=(x+U-2*M)/9,S=(20*x+20*U+21*M)/20,Z=(40*x+20*U+M)/20,A=Math.atan2(L,V)*180/Math.PI,G=A<0?A+360:A>=360?A-360:A,Y=G*Math.PI/180,ct=Z*r.nbb,K=100*Math.pow(ct/r.aw,r.c*r.z),At=4/r.c*Math.sqrt(K/100)*(r.aw+4)*r.fLRoot,W=G<20.14?G+360:G,re=.25*(Math.cos(W*Math.PI/180+2)+3.8),oe=5e4/13*re*r.nc*r.ncb*Math.sqrt(V*V+L*L)/(S+.305),B=Math.pow(oe,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Nt=B*Math.sqrt(K/100),ne=Nt*r.fLRoot,je=50*Math.sqrt(B*r.c/(r.aw+4)),_e=(1+100*.007)*K/(1+.007*K),Te=1/.0228*Math.log(1+.0228*ne),qe=Te*Math.cos(Y),Ft=Te*Math.sin(Y);return new et(G,Nt,K,At,ne,je,_e,qe,Ft)}static fromJch(t,r,o){return et.fromJchInViewingConditions(t,r,o,Ct.DEFAULT)}static fromJchInViewingConditions(t,r,o,n){const i=4/n.c*Math.sqrt(t/100)*(n.aw+4)*n.fLRoot,s=r*n.fLRoot,a=r/Math.sqrt(t/100),l=50*Math.sqrt(a*n.c/(n.aw+4)),c=o*Math.PI/180,d=(1+100*.007)*t/(1+.007*t),m=1/.0228*Math.log(1+.0228*s),f=m*Math.cos(c),_=m*Math.sin(c);return new et(o,r,t,i,s,l,d,f,_)}static fromUcs(t,r,o){return et.fromUcsInViewingConditions(t,r,o,Ct.DEFAULT)}static fromUcsInViewingConditions(t,r,o,n){const i=r,s=o,a=Math.sqrt(i*i+s*s),c=(Math.exp(a*.0228)-1)/.0228/n.fLRoot;let d=Math.atan2(s,i)*(180/Math.PI);d<0&&(d+=360);const m=t/(1-(t-100)*.007);return et.fromJchInViewingConditions(m,c,d,n)}toInt(){return this.viewed(Ct.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),n=this.hue*Math.PI/180,i=.25*(Math.cos(n+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),a=i*(5e4/13)*t.nc*t.ncb,l=s/t.nbb,c=Math.sin(n),d=Math.cos(n),m=23*(l+.305)*o/(23*a+11*o*d+108*o*c),f=m*d,_=m*c,C=(460*l+451*f+288*_)/1403,k=(460*l-891*f-261*_)/1403,D=(460*l-220*f-6300*_)/1403,R=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),O=ht(C)*(100/t.fl)*Math.pow(R,1/.42),w=Math.max(0,27.13*Math.abs(k)/(400-Math.abs(k))),F=ht(k)*(100/t.fl)*Math.pow(w,1/.42),x=Math.max(0,27.13*Math.abs(D)/(400-Math.abs(D))),U=ht(D)*(100/t.fl)*Math.pow(x,1/.42),M=O/t.rgbD[0],V=F/t.rgbD[1],L=U/t.rgbD[2],S=1.86206786*M-1.01125463*V+.14918677*L,Z=.38752654*M+.62144744*V-.00897398*L,q=-.0158415*M-.03412294*V+1.04996444*L;return vs(S,Z,q)}static fromXyzInViewingConditions(t,r,o,n){const i=.401288*t+.650173*r-.051461*o,s=-.250268*t+1.204414*r+.045854*o,a=-.002079*t+.048952*r+.953127*o,l=n.rgbD[0]*i,c=n.rgbD[1]*s,d=n.rgbD[2]*a,m=Math.pow(n.fl*Math.abs(l)/100,.42),f=Math.pow(n.fl*Math.abs(c)/100,.42),_=Math.pow(n.fl*Math.abs(d)/100,.42),C=ht(l)*400*m/(m+27.13),k=ht(c)*400*f/(f+27.13),D=ht(d)*400*_/(_+27.13),R=(11*C+-12*k+D)/11,O=(C+k-2*D)/9,w=(20*C+20*k+21*D)/20,F=(40*C+20*k+D)/20,U=Math.atan2(O,R)*180/Math.PI,M=U<0?U+360:U>=360?U-360:U,V=M*Math.PI/180,L=F*n.nbb,S=100*Math.pow(L/n.aw,n.c*n.z),Z=4/n.c*Math.sqrt(S/100)*(n.aw+4)*n.fLRoot,q=M<20.14?M+360:M,A=1/4*(Math.cos(q*Math.PI/180+2)+3.8),Y=5e4/13*A*n.nc*n.ncb*Math.sqrt(R*R+O*O)/(w+.305),ct=Math.pow(Y,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),K=ct*Math.sqrt(S/100),At=K*n.fLRoot,W=50*Math.sqrt(ct*n.c/(n.aw+4)),re=(1+100*.007)*S/(1+.007*S),j=Math.log(1+.0228*At)/.0228,oe=j*Math.cos(V),B=j*Math.sin(V);return new et(M,K,S,Z,At,W,re,oe,B)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),n=this.hue*Math.PI/180,i=.25*(Math.cos(n+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),a=i*(5e4/13)*t.nc*t.ncb,l=s/t.nbb,c=Math.sin(n),d=Math.cos(n),m=23*(l+.305)*o/(23*a+11*o*d+108*o*c),f=m*d,_=m*c,C=(460*l+451*f+288*_)/1403,k=(460*l-891*f-261*_)/1403,D=(460*l-220*f-6300*_)/1403,R=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),O=ht(C)*(100/t.fl)*Math.pow(R,1/.42),w=Math.max(0,27.13*Math.abs(k)/(400-Math.abs(k))),F=ht(k)*(100/t.fl)*Math.pow(w,1/.42),x=Math.max(0,27.13*Math.abs(D)/(400-Math.abs(D))),U=ht(D)*(100/t.fl)*Math.pow(x,1/.42),M=O/t.rgbD[0],V=F/t.rgbD[1],L=U/t.rgbD[2],S=1.86206786*M-1.01125463*V+.14918677*L,Z=.38752654*M+.62144744*V-.00897398*L,q=-.0158415*M-.03412294*V+1.04996444*L;return[S,Z,q]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let o=0;return r<=.0031308?o=r*12.92:o=1.055*Math.pow(r,1/2.4)-.055,o*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return ht(t)*400*r/(r+27.13)}static hueOf(t){const r=Jr(t,T.SCALED_DISCOUNT_FROM_LINRGB),o=T.chromaticAdaptation(r[0]),n=T.chromaticAdaptation(r[1]),i=T.chromaticAdaptation(r[2]),s=(11*o+-12*n+i)/11,a=(o+n-2*i)/9;return Math.atan2(a,s)}static areInCyclicOrder(t,r,o){const n=T.sanitizeRadians(r-t),i=T.sanitizeRadians(o-t);return n<i}static intercept(t,r,o){return(r-t)/(o-t)}static lerpPoint(t,r,o){return[t[0]+(o[0]-t[0])*r,t[1]+(o[1]-t[1])*r,t[2]+(o[2]-t[2])*r]}static setCoordinate(t,r,o,n){const i=T.intercept(t[n],r,o[n]);return T.lerpPoint(t,i,o)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const o=T.Y_FROM_LINRGB[0],n=T.Y_FROM_LINRGB[1],i=T.Y_FROM_LINRGB[2],s=r%4<=1?0:100,a=r%2===0?0:100;if(r<4){const l=s,c=a,d=(t-l*n-c*i)/o;return T.isBounded(d)?[d,l,c]:[-1,-1,-1]}else if(r<8){const l=s,c=a,d=(t-c*o-l*i)/n;return T.isBounded(d)?[c,d,l]:[-1,-1,-1]}else{const l=s,c=a,d=(t-l*o-c*n)/i;return T.isBounded(d)?[l,c,d]:[-1,-1,-1]}}static bisectToSegment(t,r){let o=[-1,-1,-1],n=o,i=0,s=0,a=!1,l=!0;for(let c=0;c<12;c++){const d=T.nthVertex(t,c);if(d[0]<0)continue;const m=T.hueOf(d);if(!a){o=d,n=d,i=m,s=m,a=!0;continue}(l||T.areInCyclicOrder(i,m,s))&&(l=!1,T.areInCyclicOrder(i,r,m)?(n=d,s=m):(o=d,i=m))}return[o,n]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const o=T.bisectToSegment(t,r);let n=o[0],i=T.hueOf(n),s=o[1];for(let a=0;a<3;a++)if(n[a]!==s[a]){let l=-1,c=255;n[a]<s[a]?(l=T.criticalPlaneBelow(T.trueDelinearized(n[a])),c=T.criticalPlaneAbove(T.trueDelinearized(s[a]))):(l=T.criticalPlaneAbove(T.trueDelinearized(n[a])),c=T.criticalPlaneBelow(T.trueDelinearized(s[a])));for(let d=0;d<8&&!(Math.abs(c-l)<=1);d++){const m=Math.floor((l+c)/2),f=T.CRITICAL_PLANES[m],_=T.setCoordinate(n,f,s,a),C=T.hueOf(_);T.areInCyclicOrder(i,r,C)?(s=_,c=m):(n=_,i=C,l=m)}}return T.midpoint(n,s)}static inverseChromaticAdaptation(t){const r=Math.abs(t),o=Math.max(0,27.13*r/(400-r));return ht(t)*Math.pow(o,1/.42)}static findResultByJ(t,r,o){let n=Math.sqrt(o)*11;const i=Ct.DEFAULT,s=1/Math.pow(1.64-Math.pow(.29,i.n),.73),l=.25*(Math.cos(t+2)+3.8)*(5e4/13)*i.nc*i.ncb,c=Math.sin(t),d=Math.cos(t);for(let m=0;m<5;m++){const f=n/100,_=r===0||n===0?0:r/Math.sqrt(f),C=Math.pow(_*s,1/.9),D=i.aw*Math.pow(f,1/i.c/i.z)/i.nbb,R=23*(D+.305)*C/(23*l+11*C*d+108*C*c),O=R*d,w=R*c,F=(460*D+451*O+288*w)/1403,x=(460*D-891*O-261*w)/1403,U=(460*D-220*O-6300*w)/1403,M=T.inverseChromaticAdaptation(F),V=T.inverseChromaticAdaptation(x),L=T.inverseChromaticAdaptation(U),S=Jr([M,V,L],T.LINRGB_FROM_SCALED_DISCOUNT);if(S[0]<0||S[1]<0||S[2]<0)return 0;const Z=T.Y_FROM_LINRGB[0],q=T.Y_FROM_LINRGB[1],A=T.Y_FROM_LINRGB[2],G=Z*S[0]+q*S[1]+A*S[2];if(G<=0)return 0;if(m===4||Math.abs(G-o)<.002)return S[0]>100.01||S[1]>100.01||S[2]>100.01?0:bn(S);n=n-(G-o)*n/(2*G)}return 0}static solveToInt(t,r,o){if(r<1e-4||o<1e-4||o>99.9999)return As(o);t=uo(t);const n=t/180*Math.PI,i=Vt(o),s=T.findResultByJ(n,r,i);if(s!==0)return s;const a=T.bisectToLimit(i,n);return bn(a)}static solveToCam(t,r,o){return et.fromInt(T.solveToInt(t,r,o))}}T.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];T.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];T.Y_FROM_LINRGB=[.2126,.7152,.0722];T.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static from(t,r,o){return new rt(T.solveToInt(t,r,o))}static fromInt(t){return new rt(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(T.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(T.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(T.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=et.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Zr(t),this.argb=t}setInternalState(t){const r=et.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Zr(t),this.argb=t}inViewingConditions(t){const o=et.fromInt(this.toInt()).xyzInViewingConditions(t),n=et.fromXyzInViewingConditions(o[0],o[1],o[2],Ct.make());return rt.from(n.hue,n.chroma,Qr(o[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static harmonize(t,r){const o=rt.fromInt(t),n=rt.fromInt(r),i=ps(o.hue,n.hue),s=Math.min(i*.5,15),a=uo(o.hue+s*fs(o.hue,n.hue));return rt.from(a,o.chroma,o.tone).toInt()}static hctHue(t,r,o){const n=mo.cam16Ucs(t,r,o),i=et.fromInt(n),s=et.fromInt(t);return rt.from(i.hue,s.chroma,Zr(t)).toInt()}static cam16Ucs(t,r,o){const n=et.fromInt(t),i=et.fromInt(r),s=n.jstar,a=n.astar,l=n.bstar,c=i.jstar,d=i.astar,m=i.bstar,f=s+(c-s)*o,_=a+(d-a)*o,C=l+(m-l)*o;return et.fromUcs(f,_,C).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{static ratioOfTones(t,r){return t=ur(0,100,t),r=ur(0,100,r),tt.ratioOfYs(Vt(t),Vt(r))}static ratioOfYs(t,r){const o=t>r?t:r,n=o===r?t:r;return(o+5)/(n+5)}static lighter(t,r){if(t<0||t>100)return-1;const o=Vt(t),n=r*(o+5)-5,i=tt.ratioOfYs(n,o),s=Math.abs(i-r);if(i<r&&s>.04)return-1;const a=Qr(n)+.4;return a<0||a>100?-1:a}static darker(t,r){if(t<0||t>100)return-1;const o=Vt(t),n=(o+5)/r-5,i=tt.ratioOfYs(o,n),s=Math.abs(i-r);if(i<r&&s>.04)return-1;const a=Qr(n)-.4;return a<0||a>100?-1:a}static lighterUnsafe(t,r){const o=tt.lighter(t,r);return o<0?100:o}static darkerUnsafe(t,r){const o=tt.darker(t,r);return o<0?0:o}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,o=Math.round(t.chroma)>16,n=Math.round(t.tone)<65;return r&&o&&n}static fixIfDisliked(t){return fo.isDisliked(t)?rt.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{static fromPalette(t){return new y(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,o,n,i,s,a,l){if(this.name=t,this.palette=r,this.tone=o,this.isBackground=n,this.background=i,this.secondBackground=s,this.contrastCurve=a,this.toneDeltaPair=l,this.hctCache=new Map,!i&&s)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!i&&a)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(i&&!a)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const o=this.getTone(t),n=this.palette(t).getHct(o);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,n),n}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const o=this.toneDeltaPair(t),n=o.roleA,i=o.roleB,s=o.delta,a=o.polarity,l=o.stayTogether,d=this.background(t).getTone(t),m=a==="nearer"||a==="lighter"&&!t.isDark||a==="darker"&&t.isDark,f=m?n:i,_=m?i:n,C=this.name===f.name,k=t.isDark?1:-1,D=f.contrastCurve.getContrast(t.contrastLevel),R=_.contrastCurve.getContrast(t.contrastLevel),O=f.tone(t);let w=tt.ratioOfTones(d,O)>=D?O:y.foregroundTone(d,D);const F=_.tone(t);let x=tt.ratioOfTones(d,F)>=R?F:y.foregroundTone(d,R);return r&&(w=y.foregroundTone(d,D),x=y.foregroundTone(d,R)),(x-w)*k>=s||(x=ur(0,100,w+s*k),(x-w)*k>=s||(w=ur(0,100,x-s*k))),50<=w&&w<60?k>0?(w=60,x=Math.max(x,w+s*k)):(w=49,x=Math.min(x,w+s*k)):50<=x&&x<60&&(l?k>0?(w=60,x=Math.max(x,w+s*k)):(w=49,x=Math.min(x,w+s*k)):k>0?x=60:x=49),C?w:x}else{let o=this.tone(t);if(this.background==null)return o;const n=this.background(t).getTone(t),i=this.contrastCurve.getContrast(t.contrastLevel);if(tt.ratioOfTones(n,o)>=i||(o=y.foregroundTone(n,i)),r&&(o=y.foregroundTone(n,i)),this.isBackground&&50<=o&&o<60&&(tt.ratioOfTones(49,n)>=i?o=49:o=60),this.secondBackground){const[s,a]=[this.background,this.secondBackground],[l,c]=[s(t).getTone(t),a(t).getTone(t)],[d,m]=[Math.max(l,c),Math.min(l,c)];if(tt.ratioOfTones(d,o)>=i&&tt.ratioOfTones(m,o)>=i)return o;const f=tt.lighter(d,i),_=tt.darker(m,i),C=[];return f!==-1&&C.push(f),_!==-1&&C.push(_),y.tonePrefersLightForeground(l)||y.tonePrefersLightForeground(c)?f<0?100:f:C.length===1?C[0]:_<0?0:_}return o}}static foregroundTone(t,r){const o=tt.lighterUnsafe(t,r),n=tt.darkerUnsafe(t,r),i=tt.ratioOfTones(o,t),s=tt.ratioOfTones(n,t);if(y.tonePrefersLightForeground(t)){const l=Math.abs(i-s)<.1&&i<r&&s<r;return i>=r||i>=s||l?o:n}else return s>=r||s>=i?n:o}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return y.tonePrefersLightForeground(t)&&!y.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(Be||(Be={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,r,o,n){this.low=t,this.normal=r,this.medium=o,this.high=n}getContrast(t){return t<=-1?this.low:t<0?Ie(this.low,this.normal,(t- -1)/1):t<.5?Ie(this.normal,this.medium,(t-0)/.5):t<1?Ie(this.medium,this.high,(t-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,r,o,n,i){this.roleA=t,this.roleB=r,this.delta=o,this.polarity=n,this.stayTogether=i}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){return e.variant===Be.FIDELITY||e.variant===Be.CONTENT}function X(e){return e.variant===Be.MONOCHROME}function Ts(e,t,r,o){let n=r,i=rt.from(e,t,r);if(i.chroma<t){let s=i.chroma;for(;i.chroma<t;){n+=o?-1:1;const a=rt.from(e,t,n);if(s>a.chroma||Math.abs(a.chroma-t)<.4)break;const l=Math.abs(a.chroma-t),c=Math.abs(i.chroma-t);l<c&&(i=a),s=Math.max(s,a.chroma)}}return n}function Cs(e){return Ct.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}function po(e,t){const r=e.inViewingConditions(Cs(t));return y.tonePrefersLightForeground(e.tone)&&!y.toneAllowsLightForeground(r.tone)?y.enableLightForeground(e.tone):y.enableLightForeground(r.tone)}class h{static highestSurface(t){return t.isDark?h.surfaceBright:h.surfaceDim}}h.contentAccentToneDelta=15;h.primaryPaletteKeyColor=y.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});h.secondaryPaletteKeyColor=y.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});h.tertiaryPaletteKeyColor=y.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});h.neutralPaletteKeyColor=y.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});h.neutralVariantPaletteKeyColor=y.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});h.background=y.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});h.onBackground=y.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>h.background,contrastCurve:new I(3,3,4.5,7)});h.surface=y.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});h.surfaceDim=y.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87,isBackground:!0});h.surfaceBright=y.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98,isBackground:!0});h.surfaceContainerLowest=y.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100,isBackground:!0});h.surfaceContainerLow=y.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96,isBackground:!0});h.surfaceContainer=y.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94,isBackground:!0});h.surfaceContainerHigh=y.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92,isBackground:!0});h.surfaceContainerHighest=y.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90,isBackground:!0});h.onSurface=y.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>h.highestSurface(e),contrastCurve:new I(4.5,7,11,21)});h.surfaceVariant=y.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});h.onSurfaceVariant=y.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>h.highestSurface(e),contrastCurve:new I(3,4.5,7,11)});h.inverseSurface=y.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});h.inverseOnSurface=y.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>h.inverseSurface,contrastCurve:new I(4.5,7,11,21)});h.outline=y.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>h.highestSurface(e),contrastCurve:new I(1.5,3,4.5,7)});h.outlineVariant=y.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7)});h.shadow=y.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});h.scrim=y.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});h.surfaceTint=y.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});h.primary=y.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>X(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(3,4.5,7,11),toneDeltaPair:e=>new pt(h.primaryContainer,h.primary,15,"nearer",!1)});h.onPrimary=y.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>X(e)?e.isDark?10:90:e.isDark?20:100,background:e=>h.primary,contrastCurve:new I(4.5,7,11,21)});h.primaryContainer=y.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>we(e)?po(e.sourceColorHct,e):X(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.primaryContainer,h.primary,15,"nearer",!1)});h.onPrimaryContainer=y.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>we(e)?y.foregroundTone(h.primaryContainer.tone(e),4.5):X(e)?e.isDark?0:100:e.isDark?90:10,background:e=>h.primaryContainer,contrastCurve:new I(4.5,7,11,21)});h.inversePrimary=y.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>h.inverseSurface,contrastCurve:new I(3,4.5,7,11)});h.secondary=y.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(3,4.5,7,11),toneDeltaPair:e=>new pt(h.secondaryContainer,h.secondary,15,"nearer",!1)});h.onSecondary=y.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>X(e)?e.isDark?10:100:e.isDark?20:100,background:e=>h.secondary,contrastCurve:new I(4.5,7,11,21)});h.secondaryContainer=y.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;if(X(e))return e.isDark?30:85;if(!we(e))return t;let r=Ts(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return r=po(e.secondaryPalette.getHct(r),e),r},isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.secondaryContainer,h.secondary,15,"nearer",!1)});h.onSecondaryContainer=y.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>we(e)?y.foregroundTone(h.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>h.secondaryContainer,contrastCurve:new I(4.5,7,11,21)});h.tertiary=y.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>X(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(3,4.5,7,11),toneDeltaPair:e=>new pt(h.tertiaryContainer,h.tertiary,15,"nearer",!1)});h.onTertiary=y.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>X(e)?e.isDark?10:90:e.isDark?20:100,background:e=>h.tertiary,contrastCurve:new I(4.5,7,11,21)});h.tertiaryContainer=y.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(X(e))return e.isDark?60:49;if(!we(e))return e.isDark?30:90;const t=po(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),r=e.tertiaryPalette.getHct(t);return fo.fixIfDisliked(r).tone},isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.tertiaryContainer,h.tertiary,15,"nearer",!1)});h.onTertiaryContainer=y.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>X(e)?e.isDark?0:100:we(e)?y.foregroundTone(h.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>h.tertiaryContainer,contrastCurve:new I(4.5,7,11,21)});h.error=y.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(3,4.5,7,11),toneDeltaPair:e=>new pt(h.errorContainer,h.error,15,"nearer",!1)});h.onError=y.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>h.error,contrastCurve:new I(4.5,7,11,21)});h.errorContainer=y.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.errorContainer,h.error,15,"nearer",!1)});h.onErrorContainer=y.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>h.errorContainer,contrastCurve:new I(4.5,7,11,21)});h.primaryFixed=y.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>X(e)?40:90,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.primaryFixed,h.primaryFixedDim,10,"lighter",!0)});h.primaryFixedDim=y.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>X(e)?30:80,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.primaryFixed,h.primaryFixedDim,10,"lighter",!0)});h.onPrimaryFixed=y.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>X(e)?100:10,background:e=>h.primaryFixedDim,secondBackground:e=>h.primaryFixed,contrastCurve:new I(4.5,7,11,21)});h.onPrimaryFixedVariant=y.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>X(e)?90:30,background:e=>h.primaryFixedDim,secondBackground:e=>h.primaryFixed,contrastCurve:new I(3,4.5,7,11)});h.secondaryFixed=y.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>X(e)?80:90,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.secondaryFixed,h.secondaryFixedDim,10,"lighter",!0)});h.secondaryFixedDim=y.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>X(e)?70:80,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.secondaryFixed,h.secondaryFixedDim,10,"lighter",!0)});h.onSecondaryFixed=y.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>h.secondaryFixedDim,secondBackground:e=>h.secondaryFixed,contrastCurve:new I(4.5,7,11,21)});h.onSecondaryFixedVariant=y.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>X(e)?25:30,background:e=>h.secondaryFixedDim,secondBackground:e=>h.secondaryFixed,contrastCurve:new I(3,4.5,7,11)});h.tertiaryFixed=y.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>X(e)?40:90,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.tertiaryFixed,h.tertiaryFixedDim,10,"lighter",!0)});h.tertiaryFixedDim=y.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>X(e)?30:80,isBackground:!0,background:e=>h.highestSurface(e),contrastCurve:new I(1,1,3,7),toneDeltaPair:e=>new pt(h.tertiaryFixed,h.tertiaryFixedDim,10,"lighter",!0)});h.onTertiaryFixed=y.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>X(e)?100:10,background:e=>h.tertiaryFixedDim,secondBackground:e=>h.tertiaryFixed,contrastCurve:new I(4.5,7,11,21)});h.onTertiaryFixedVariant=y.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>X(e)?90:30,background:e=>h.tertiaryFixedDim,secondBackground:e=>h.tertiaryFixed,contrastCurve:new I(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static fromInt(t){const r=rt.fromInt(t);return at.fromHct(r)}static fromHct(t){return new at(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){return new at(t,r,at.createKeyColor(t,r))}constructor(t,r,o){this.hue=t,this.chroma=r,this.keyColor=o,this.cache=new Map}static createKeyColor(t,r){let n=rt.from(t,r,50),i=Math.abs(n.chroma-r);for(let s=1;s<50;s+=1){if(Math.round(r)===Math.round(n.chroma))return n;const a=rt.from(t,r,50+s),l=Math.abs(a.chroma-r);l<i&&(i=l,n=a);const c=rt.from(t,r,50-s),d=Math.abs(c.chroma-r);d<i&&(i=d,n=c)}return n}tone(t){let r=this.cache.get(t);return r===void 0&&(r=rt.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return rt.fromInt(this.tone(t))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static of(t){return new ot(t,!1)}static contentOf(t){return new ot(t,!0)}static fromColors(t){return ot.createPaletteFromColors(!1,t)}static contentFromColors(t){return ot.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,r){const o=new ot(r.primary,t);if(r.secondary){const n=new ot(r.secondary,t);o.a2=n.a1}if(r.tertiary){const n=new ot(r.tertiary,t);o.a3=n.a1}if(r.error){const n=new ot(r.error,t);o.error=n.a1}if(r.neutral){const n=new ot(r.neutral,t);o.n1=n.n1}if(r.neutralVariant){const n=new ot(r.neutralVariant,t);o.n2=n.n2}return o}constructor(t,r){const o=rt.fromInt(t),n=o.hue,i=o.chroma;r?(this.a1=at.fromHueAndChroma(n,i),this.a2=at.fromHueAndChroma(n,i/3),this.a3=at.fromHueAndChroma(n+60,i/2),this.n1=at.fromHueAndChroma(n,Math.min(i/12,4)),this.n2=at.fromHueAndChroma(n,Math.min(i/6,8))):(this.a1=at.fromHueAndChroma(n,Math.max(48,i)),this.a2=at.fromHueAndChroma(n,16),this.a3=at.fromHueAndChroma(n+60,24),this.n1=at.fromHueAndChroma(n,4),this.n2=at.fromHueAndChroma(n,8)),this.error=at.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return Rt.lightFromCorePalette(ot.of(t))}static dark(t){return Rt.darkFromCorePalette(ot.of(t))}static lightContent(t){return Rt.lightFromCorePalette(ot.contentOf(t))}static darkContent(t){return Rt.darkFromCorePalette(ot.contentOf(t))}static lightFromCorePalette(t){return new Rt({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new Rt({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e){e=e.replace("#","");const t=e.length===3,r=e.length===6,o=e.length===8;if(!t&&!r&&!o)throw new Error("unexpected hex "+e);let n=0,i=0,s=0;return t?(n=Dt(e.slice(0,1).repeat(2)),i=Dt(e.slice(1,2).repeat(2)),s=Dt(e.slice(2,3).repeat(2))):r?(n=Dt(e.slice(0,2)),i=Dt(e.slice(2,4)),s=Dt(e.slice(4,6))):o&&(n=Dt(e.slice(2,4)),i=Dt(e.slice(4,6)),s=Dt(e.slice(6,8))),(255<<24|(n&255)<<16|(i&255)<<8|s&255)>>>0}function Dt(e){return parseInt(e,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e,t){let r=t.value;const o=r,n=e;t.blend&&(r=mo.harmonize(o,n));const s=ot.of(r).a1;return{color:t,value:r,light:{color:s.tone(40),onColor:s.tone(100),colorContainer:s.tone(90),onColorContainer:s.tone(10)},dark:{color:s.tone(80),onColor:s.tone(20),colorContainer:s.tone(30),onColorContainer:s.tone(90)}}}function vn(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function go(e={},t={}){Object.keys(t).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:vn(t[r])&&vn(e[r])&&Object.keys(t[r]).length>0&&go(e[r],t[r])})}const Yn={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function It(){const e=typeof document<"u"?document:{};return go(e,Yn),e}const $s={document:Yn,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ae(){const e=typeof window<"u"?window:{};return go(e,$s),e}const yo=(e,t)=>(e==null?void 0:e.nodeName.toLowerCase())===t.toLowerCase(),bt=e=>typeof e=="function",_t=e=>typeof e=="string",bo=e=>typeof e=="number",xs=e=>typeof e=="boolean",xt=e=>typeof e>"u",Kn=e=>e===null,vo=e=>typeof Window<"u"&&e instanceof Window,wo=e=>typeof Document<"u"&&e instanceof Document,We=e=>typeof Element<"u"&&e instanceof Element,Ss=e=>typeof Node<"u"&&e instanceof Node,fe=e=>!bt(e)&&!vo(e)&&bo(e.length),Wt=e=>typeof e=="object"&&e!==null,to=e=>wo(e)?e.documentElement:e,Ao=e=>e.replace(/-([a-z])/g,(t,r)=>r.toUpperCase()),dr=e=>e&&e.replace(/^./,e[0].toLowerCase()).replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Xn=()=>!1,J=(e,t)=>{for(let r=0;r<e.length;r+=1)if(t.call(e[r],e[r],r)===!1)return e;return e},vt=(e,t)=>{const r=Object.keys(e);for(let o=0;o<r.length;o+=1){const n=r[o];if(t.call(e[n],n,e[n])===!1)return e}return e};class mt{constructor(t){return this.length=0,t?(J(t,(r,o)=>{this[o]=r}),this.length=t.length,this):this}}const Eo=e=>It().createElement(e),Jn=(e,t)=>e.appendChild(t),Zn=e=>e.parentNode?e.parentNode.removeChild(e):e,Qn=(e,t)=>{const r=Eo(t);return r.innerHTML=e,[].slice.call(r.childNodes)},Ms=()=>{const e=function(t){const r=It();if(!t)return new mt;if(t instanceof mt)return t;if(bt(t))return/complete|loaded|interactive/.test(r.readyState)&&r.body?t.call(r,e):r.addEventListener("DOMContentLoaded",()=>t.call(r,e),!1),new mt([r]);if(_t(t)){const o=t.trim();if(o.startsWith("<")&&o.endsWith(">")){let n="div";return vt({li:"ul",tr:"tbody",td:"tr",th:"tr",tbody:"table",option:"select"},(s,a)=>{if(o.startsWith(`<${s}`))return n=a,!1}),new mt(Qn(o,n))}return new mt(r.querySelectorAll(t))}return fe(t)&&!Ss(t)?new mt(t):new mt([t])};return e.fn=mt.prototype,e},p=Ms(),_o=e=>[...new Set(e)],ti=(e,t,r)=>{const o=e.getAttribute(t);return Kn(o)?r:o},ei=(e,t)=>{e.removeAttribute(t)},ri=(e,t,r)=>{Kn(r)?ei(e,t):e.setAttribute(t,r)};p.fn.each=function(e){return J(this,(t,r)=>e.call(t,r,t))};J(["add","remove","toggle"],e=>{p.fn[`${e}Class`]=function(t){return e==="remove"&&!arguments.length?this.each((r,o)=>{ri(o,"class","")}):this.each((r,o)=>{if(!We(o))return;const n=(bt(t)?t.call(o,r,ti(o,"class","")):t).split(" ").filter(i=>i);J(n,i=>{o.classList[e](i)})})}});p.fn.get=function(e){return e===void 0?[].slice.call(this):this[e>=0?e:e+this.length]};J(["insertBefore","insertAfter"],(e,t)=>{p.fn[e]=function(r){const o=t?p(this.get().reverse()):this,n=p(r),i=[];return n.each((s,a)=>{a.parentNode&&o.each((l,c)=>{const d=s?c.cloneNode(!0):c,m=t?a.nextSibling:a;i.push(d),a.parentNode.insertBefore(d,m)})}),p(t?i.reverse():i)}});const Ps=e=>_t(e)&&!(e.startsWith("<")&&e.endsWith(">"));J(["before","after"],(e,t)=>{p.fn[e]=function(...r){return t===1&&(r=r.reverse()),this.each((o,n)=>{const i=bt(r[0])?[r[0].call(n,o,n.innerHTML)]:r;J(i,s=>{let a;Ps(s)?a=p(Qn(s,"div")):o&&We(s)?a=p(s.cloneNode(!0)):a=p(s),a[t?"insertAfter":"insertBefore"](n)})})}});function Ds(e,t){return fe(e)?J(e,(r,o)=>t.call(r,o,r)):vt(e,t)}function Rs(e,t){const r=Ae();let o;const n=[];return Ds(e,(i,s)=>{o=t.call(r,s,i),o!=null&&n.push(o)}),[].concat(...n)}p.fn.map=function(e){return new mt(Rs(this,(t,r)=>e.call(t,r,t)))};p.fn.clone=function(){return this.map(function(){return this.cloneNode(!0)})};p.fn.is=function(e){let t=!1;if(bt(e))return this.each((o,n)=>{e.call(n,o,n)&&(t=!0)}),t;if(_t(e))return this.each((o,n)=>{wo(n)||vo(n)||n.matches.call(n,e)&&(t=!0)}),t;const r=p(e);return this.each((o,n)=>{r.each((i,s)=>{n===s&&(t=!0)})}),t};p.fn.remove=function(e){return this.each((t,r)=>{(!e||p(r).is(e))&&Zn(r)})};J(["prepend","append"],(e,t)=>{p.fn[e]=function(...r){return this.each((o,n)=>{const i=n.childNodes,s=i.length,a=s?i[t?s-1:0]:Eo("div");s||Jn(n,a);let l=bt(r[0])?[r[0].call(n,o,n.innerHTML)]:r;o&&(l=l.map(c=>_t(c)?c:p(c).clone())),p(a)[t?"after":"before"](...l),s||Zn(a)})}});const Ls=["light","dark"],oi="mdui-custom-color-scheme-";let Is=0;const Os=e=>{const t=Vn(e),r=Wn(e),o=jn(e);return[t,r,o].join(", ")},Ns=e=>{const t=p(e);let r=t.get().map(n=>Array.from(n.classList)).flat();r=_o(r).filter(n=>n.startsWith(oi)),t.removeClass(r.join(" "));const o=r.filter(n=>p(`.${n}`).length===0);p(o.map(n=>`#${n}`).join(",")).remove()},Fs=(e,t)=>{const r=It(),o=p((t==null?void 0:t.target)||r.documentElement),n={light:Rt.light(e).toJSON(),dark:Rt.dark(e).toJSON()},i=ot.of(e);Object.assign(n.light,{"surface-dim":i.n1.tone(87),"surface-bright":i.n1.tone(98),"surface-container-lowest":i.n1.tone(100),"surface-container-low":i.n1.tone(96),"surface-container":i.n1.tone(94),"surface-container-high":i.n1.tone(92),"surface-container-highest":i.n1.tone(90),"surface-tint-color":n.light.primary}),Object.assign(n.dark,{"surface-dim":i.n1.tone(6),"surface-bright":i.n1.tone(24),"surface-container-lowest":i.n1.tone(4),"surface-container-low":i.n1.tone(10),"surface-container":i.n1.tone(12),"surface-container-high":i.n1.tone(17),"surface-container-highest":i.n1.tone(22),"surface-tint-color":n.dark.primary}),((t==null?void 0:t.customColors)||[]).map(c=>{const d=dr(c.name),m=ks(e,{name:d,value:Gn(c.value),blend:!0});Ls.forEach(f=>{n[f][d]=m[f].color,n[f][`on-${d}`]=m[f].onColor,n[f][`${d}-container`]=m[f].colorContainer,n[f][`on-${d}-container`]=m[f].onColorContainer})});const s=(c,d)=>Object.entries(n[c]).map(([m,f])=>d(dr(m),Os(f))).join(""),a=oi+`${e}-${Is++}`,l=`.${a} {
  ${s("light",(c,d)=>`--mdui-color-${c}-light: ${d};`)}
  ${s("dark",(c,d)=>`--mdui-color-${c}-dark: ${d};`)}
  ${s("light",c=>`--mdui-color-${c}: var(--mdui-color-${c}-light);`)}

  color: rgb(var(--mdui-color-on-background));
  background-color: rgb(var(--mdui-color-background));
}

.mdui-theme-dark .${a},
.mdui-theme-dark.${a} {
  ${s("dark",c=>`--mdui-color-${c}: var(--mdui-color-${c}-dark);`)}
}

@media (prefers-color-scheme: dark) {
  .mdui-theme-auto .${a},
  .mdui-theme-auto.${a} {
    ${s("dark",c=>`--mdui-color-${c}: var(--mdui-color-${c}-dark);`)}
  }
}`;Ns(o),p(r.head).append(`<style id="${a}">${l}</style>`),o.addClass(a)},Bs=(e,t)=>{const r=Gn(e);Fs(r,t)};function b(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Us=(e,t,r)=>{t.constructor.createProperty(r,e)};function $(e){return(t,r)=>r!==void 0?Us(e,t,r):zs(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function To(e){return $({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=({finisher:e,descriptor:t})=>(r,o)=>{var n;if(o===void 0){const i=(n=r.originalKey)!==null&&n!==void 0?n:r.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:{...r,key:i};return e!=null&&(s.finisher=function(a){e(a,i)}),s}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(i,o)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Br;const Vs=((Br=window.HTMLSlotElement)===null||Br===void 0?void 0:Br.prototype.assignedElements)!=null?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter(r=>r.nodeType===Node.ELEMENT_NODE);function Ws(e){const{slot:t,selector:r}=e??{};return Hs({descriptor:o=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i),a=s!=null?Vs(s,e):[];return r?a.filter(l=>l.matches(r)):a},enumerable:!0,configurable:!0})})}const nt=e=>e!==null&&e!=="false",Tt=(e,t,r)=>{const o=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...r});return e.dispatchEvent(o),o},Ee=St`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}:host :focus,:host :focus-visible,:host(:focus),:host(:focus-visible){outline:0}[hidden]{display:none!important}`,gr=(e,t)=>Ae().getComputedStyle(e).getPropertyValue(dr(t)),ni=e=>gr(e,"box-sizing")==="border-box",eo=(e,t,r)=>{const o=t==="width"?["Left","Right"]:["Top","Bottom"];return[0,1].reduce((n,i,s)=>{let a=r+o[s];return r==="border"&&(a+="Width"),n+parseFloat(gr(e,a)||"0")},0)},js=(e,t)=>{if(t==="width"||t==="height"){const r=e.getBoundingClientRect()[t];return ni(e)?`${r}px`:`${r-eo(e,t,"border")-eo(e,t,"padding")}px`}return gr(e,t)},qs=["animation-iteration-count","column-count","fill-opacity","flex-grow","flex-shrink","font-weight","grid-area","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","line-height","opacity","order","orphans","widows","z-index","zoom"];J(["attr","prop","css"],(e,t)=>{const r=(n,i,s)=>{if(xt(s))return;if(t===0)return ri(n,i,s);if(t===1){n[i]=s;return}i=dr(i);const a=()=>i.startsWith("--")||qs.includes(i)?"":"px";n.style.setProperty(i,bo(s)?`${s}${a()}`:s)},o=(n,i)=>t===0?ti(n,i):t===1?n[i]:js(n,i);p.fn[e]=function(n,i){if(Wt(n))return vt(n,(s,a)=>{this[e](s,a)}),this;if(arguments.length===1){const s=this[0];return We(s)?o(s,n):void 0}return this.each((s,a)=>{r(a,n,bt(i)?i.call(a,s,o(a,n)):i)})}});function ze(e,t=!1){return(r,o)=>{const{update:n}=r;e in r&&(r.update=function(i){if(i.has(e)){const s=i.get(e),a=this[e];s!==a&&(!t||this.hasUpdated)&&this[o](s,a)}n.call(this,i)})}}const Gs=e=>{class t extends e{constructor(...o){super(...o),this.lastScrollTopThreshold=0,this.lastScrollTopNoThreshold=0,this.isParentLayout=!1,this.onListeningScroll=this.onListeningScroll.bind(this)}get scrollPaddingPosition(){throw new Error("Must implement scrollPaddingPosition getter")}onScrollTargetChange(o,n){if((o&&!n||!o&&n)&&this.updateContainerPadding(),!this.scrollBehavior)return;const i=this.getListening(o);i&&i.removeEventListener("scroll",this.onListeningScroll);const s=this.getListening(n);s&&(this.updateScrollTop(s),s.addEventListener("scroll",this.onListeningScroll))}onScrollBehaviorChange(o,n){(o&&!n||!o&&n)&&this.updateContainerPadding();const i=this.getListening(this.scrollTarget);i&&(this.scrollBehavior?(this.updateScrollTop(i),i.addEventListener("scroll",this.onListeningScroll)):i.removeEventListener("scroll",this.onListeningScroll))}connectedCallback(){super.connectedCallback(),this.isParentLayout=yo(this.parentElement,"mdui-layout"),this.updateContainerPadding()}disconnectedCallback(){super.disconnectedCallback(),this.updateContainerPadding(!1)}hasScrollBehavior(o){var n,i;const s=(i=(n=this.scrollBehavior)===null||n===void 0?void 0:n.split(" "))!==null&&i!==void 0?i:[];return Array.isArray(o)?!!s.filter(a=>o.includes(a)).length:s.includes(o)}runScrollThreshold(o,n){}runScrollNoThreshold(o,n){}updateContainerPadding(o=!0){const n=this.getContainer(this.scrollTarget);if(!n||this.isParentLayout)return;const i=this.scrollPaddingPosition==="top"?"paddingTop":"paddingBottom";if(o){const s=this.getListening(this.scrollTarget)&&["fixed","absolute"].includes(p(this).css("position"))?this.offsetHeight:null;p(n).css({[i]:s})}else p(n).css({[i]:null})}onListeningScroll(){const o=this.getListening(this.scrollTarget);window.requestAnimationFrame(()=>this.onScroll(o))}onScroll(o){var n;const i=(n=o.scrollY)!==null&&n!==void 0?n:o.scrollTop;this.lastScrollTopNoThreshold!==i&&(this.runScrollNoThreshold(i<this.lastScrollTopNoThreshold,i),this.lastScrollTopNoThreshold=i),Math.abs(i-this.lastScrollTopThreshold)>(this.scrollThreshold||0)&&(this.runScrollThreshold(i<this.lastScrollTopThreshold,i),this.lastScrollTopThreshold=i)}updateScrollTop(o){var n;this.lastScrollTopThreshold=this.lastScrollTopNoThreshold=(n=o.scrollY)!==null&&n!==void 0?n:o.scrollTop}getListening(o){return o?p(o)[0]:window}getContainer(o){return o?p(o)[0]:document.body}}return b([$({attribute:"scroll-target"})],t.prototype,"scrollTarget",void 0),b([$({reflect:!0,attribute:"scroll-behavior"})],t.prototype,"scrollBehavior",void 0),b([$({type:Number,reflect:!0,attribute:"scroll-threshold"})],t.prototype,"scrollThreshold",void 0),b([ze("scrollTarget")],t.prototype,"onScrollTargetChange",null),b([ze("scrollBehavior")],t.prototype,"onScrollBehaviorChange",null),t};p.fn.children=function(e){const t=[];return this.each((r,o)=>{J(o.childNodes,n=>{We(n)&&(!e||p(n).is(e))&&t.push(n)})}),new mt(_o(t))};let Ys=0;const Ks=()=>++Ys;let Bt,zr;const Xs=(e,t)=>{const r=p(e),o=Ks(),n={unobserve:()=>{r.each((i,s)=>{var a;const l=(a=Bt.get(s))!==null&&a!==void 0?a:[],c=l.findIndex(d=>d.key===o);c!==-1&&l.splice(c,1),l.length?Bt.set(s,l):(zr.unobserve(s),Bt.delete(s))})}};return Bt||(Bt=new WeakMap,zr=new ResizeObserver(i=>{i.forEach(s=>{const a=s.target;Bt.get(a).forEach(c=>{c.callback.call(n,s,n)})})})),r.each((i,s)=>{var a;zr.observe(s);const l=(a=Bt.get(s))!==null&&a!==void 0?a:[];l.push({callback:t,key:o}),Bt.set(s,l)}),n};class Js{constructor(t){this.states=[],this.$layout=p(t)}registerMain(t){this.$main=p(t)}unregisterMain(){this.$main=void 0}registerItem(t){const r={element:t};this.states.push(r),r.observeResize=Xs(r.element,()=>{yo(r.element,"mdui-navigation-drawer")&&r.element.isModal?this.updateLayout(r.element,{width:0}):this.updateLayout(r.element)}),this.items=void 0,this.resort(),this.updateLayout()}unregisterItem(t){var r;const o=this.states.findIndex(i=>i.element===t);if(o<0)return;(r=this.states[o].observeResize)===null||r===void 0||r.unobserve(),this.items=void 0,this.states.splice(o,1),this.states[o]&&this.updateLayout(this.states[o].element)}getItems(){return this.items||(this.items=this.$layout.children(["mdui-navigation-bar","mdui-navigation-drawer","mdui-navigation-rail","mdui-bottom-app-bar","mdui-top-app-bar","mdui-layout-item"].join(",")).get()),this.items}getMain(){return this.$main?this.$main[0]:void 0}getItemsAndMain(){return[...this.getItems(),this.getMain()].filter(t=>t)}hasItem(t){return this.getItems().includes(t)}updateOrder(){this.resort(),this.updateLayout()}updateLayout(t,r){const o=t?{element:t,width:r==null?void 0:r.width,height:r==null?void 0:r.height}:void 0,n=o?this.states.findIndex(s=>s.element===o.element):0;if(n<0)return;Object.assign(this.states[n],o),this.states.forEach((s,a)=>{var l,c,d,m,f,_,C,k;if(a<n)return;const D=s.element.layoutPlacement,R=a>0?this.states[a-1]:void 0,O=(l=R==null?void 0:R.top)!==null&&l!==void 0?l:0,w=(c=R==null?void 0:R.right)!==null&&c!==void 0?c:0,F=(d=R==null?void 0:R.bottom)!==null&&d!==void 0?d:0,x=(m=R==null?void 0:R.left)!==null&&m!==void 0?m:0;switch(Object.assign(s,{top:O,right:w,bottom:F,left:x}),D){case"top":s.top+=(f=s.height)!==null&&f!==void 0?f:s.element.offsetHeight;break;case"right":s.right+=(_=s.width)!==null&&_!==void 0?_:s.element.offsetWidth;break;case"bottom":s.bottom+=(C=s.height)!==null&&C!==void 0?C:s.element.offsetHeight;break;case"left":s.left+=(k=s.width)!==null&&k!==void 0?k:s.element.offsetWidth;break}s.height=s.width=void 0,p(s.element).css({position:"absolute",top:D==="bottom"?null:O,right:D==="left"?null:w,bottom:D==="top"?null:F,left:D==="right"?null:x})});const i=this.states[this.states.length-1];this.$main&&this.$main.css({paddingTop:i.top,paddingRight:i.right,paddingBottom:i.bottom,paddingLeft:i.left})}resort(){const t=this.getItems();this.states.sort((r,o)=>{var n,i;const s=(n=r.element.order)!==null&&n!==void 0?n:0,a=(i=o.element.order)!==null&&i!==void 0?i:0;return s>a?1:s<a?-1:t.indexOf(r.element)>t.indexOf(o.element)?1:t.indexOf(r.element)<t.indexOf(o.element)?-1:0})}}const Ur=new WeakMap,Zs=e=>(Ur.has(e)||Ur.set(e,new Js(e)),Ur.get(e));class Co extends ft{constructor(){super(...arguments),this.isParentLayout=!1}get layoutPlacement(){throw new Error("Must implement placement getter!")}onOrderChange(){var t;(t=this.layoutManager)===null||t===void 0||t.updateOrder()}connectedCallback(){super.connectedCallback();const t=this.parentElement;this.isParentLayout=yo(t,"mdui-layout"),this.isParentLayout&&(this.layoutManager=Zs(t),this.layoutManager.registerItem(this))}disconnectedCallback(){super.disconnectedCallback(),this.layoutManager&&this.layoutManager.unregisterItem(this)}}b([$({type:Number,reflect:!0})],Co.prototype,"order",void 0);b([ze("order",!0)],Co.prototype,"onOrderChange",null);const Qs=St`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;right:0;bottom:0;left:0;display:flex;flex:0 0 auto;align-items:center;justify-content:flex-start;border-radius:var(--shape-corner) var(--shape-corner) 0 0;z-index:var(--z-index);transition:bottom var(--mdui-motion-duration-long2) var(--mdui-motion-easing-emphasized);padding:0 1rem;height:5rem;background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2)}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([hide]){transition-duration:var(--mdui-motion-duration-short4);bottom:-5.625rem}::slotted(:not(:first-child)){margin-left:.5rem}::slotted(mdui-fab){box-shadow:var(--mdui-elevation-level0)}:host([fab-detach]) ::slotted(mdui-fab){position:absolute;transition:bottom var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard);right:1rem;bottom:.75rem}:host([fab-detach][hide][scroll-behavior~=hide]) ::slotted(mdui-fab){transition-duration:var(--mdui-motion-duration-short4);bottom:1rem;box-shadow:var(--mdui-elevation-level2)}:host([fab-detach][hide][scroll-behavior~=hide][scroll-target]:not([scroll-target=''])) ::slotted(mdui-fab){bottom:6.625rem}:host([hide]) ::slotted(:not(mdui-fab)),:host([hide]:not([fab-detach])) ::slotted(mdui-fab){transform:translateY(8.75rem);transition:transform var(--mdui-motion-duration-0) var(--mdui-motion-easing-emphasized-accelerate) var(--mdui-motion-duration-short4)}::slotted(:first-child){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short1)}::slotted(:nth-child(2)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short3)}::slotted(:nth-child(3)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short4)}::slotted(:nth-child(4)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium1)}::slotted(:nth-child(5)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium2)}::slotted(:nth-child(6)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium3)}`;let be=class extends Gs(Co){constructor(){super(...arguments),this.hide=!1,this.fabDetach=!1}get scrollPaddingPosition(){return"bottom"}get layoutPlacement(){return"bottom"}connectedCallback(){super.connectedCallback(),this.addEventListener("transitionend",t=>{t.target===this&&Tt(this,this.hide?"hidden":"shown")})}render(){return N`<slot></slot>`}runScrollThreshold(t){!t&&!this.hide&&(Tt(this,"hide").defaultPrevented||(this.hide=!0)),t&&this.hide&&(Tt(this,"show").defaultPrevented||(this.hide=!1))}};be.styles=[Ee,Qs];b([$({type:Boolean,reflect:!0,converter:nt})],be.prototype,"hide",void 0);b([$({type:Boolean,reflect:!0,converter:nt,attribute:"fab-detach"})],be.prototype,"fabDetach",void 0);b([$({reflect:!0,attribute:"scroll-behavior"})],be.prototype,"scrollBehavior",void 0);be=b([Ot("mdui-bottom-app-bar")],be);class ko{constructor(t,...r){this.slotNames=[],(this.host=t).addController(this),this.slotNames=r,this.onSlotChange=this.onSlotChange.bind(this)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.onSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.onSlotChange)}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>t.nodeType===t.TEXT_NODE&&t.textContent.trim()!==""||t.nodeType===t.ELEMENT_NODE&&!t.hasAttribute("slot"))}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}onSlotChange(t){const r=t.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()}}const $o=N`${H}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=e=>e??H;function ii(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let r=0,o;r<e.length;r++)(o=ii(e[r]))!==""&&(t+=(t&&" ")+o);else for(let r in e)e[r]&&(t+=(t&&" ")+r);return t}const Pe=new WeakMap,De=new WeakMap,Hr=new WeakMap;class ta{constructor(t,r){(this.host=t).addController(this),this.options={form:o=>{const n=p(o).attr("form");return n?o.getRootNode().getElementById(n):o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,setValue:(o,n)=>o.value=n,disabled:o=>o.disabled,reportValidity:o=>bt(o.reportValidity)?o.reportValidity():!0,...r},this.onFormData=this.onFormData.bind(this),this.onFormSubmit=this.onFormSubmit.bind(this),this.onFormReset=this.onFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&this.attachForm(this.form)}hostDisconnected(){this.detachForm()}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t))}getForm(){var t;return(t=this.form)!==null&&t!==void 0?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}attachForm(t){if(!t){this.form=void 0;return}this.form=t,Pe.has(this.form)?Pe.get(this.form).add(this.host):Pe.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.onFormData),this.form.addEventListener("submit",this.onFormSubmit),this.form.addEventListener("reset",this.onFormReset),De.has(this.form)||(De.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())}detachForm(){this.form&&(Pe.get(this.form).delete(this.host),this.form.removeEventListener("formdata",this.onFormData),this.form.removeEventListener("submit",this.onFormSubmit),this.form.removeEventListener("reset",this.onFormReset),De.has(this.form)&&!Pe.get(this.form).size&&(this.form.reportValidity=De.get(this.form),De.delete(this.form)))}doAction(t,r){if(!this.form)return;const o=p(`<button type="${t}">`).css({position:"absolute",width:0,height:0,clipPath:"inset(50%)",overflow:"hidden",whiteSpace:"nowrap"}),n=o[0];r&&(n.name=r.name,n.value=r.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{o.attr(i,p(r).attr(i))})),this.form.append(n),n.click(),n.remove()}onFormData(t){const r=this.options.disabled(this.host),o=this.options.name(this.host),n=this.options.value(this.host),i=["mdui-button","mdui-button-icon","mdui-chip","mdui-fab","mdui-segmented-button"].includes(this.host.tagName.toLowerCase());!r&&!i&&_t(o)&&o&&!xt(n)&&(Array.isArray(n)?n.forEach(s=>{t.formData.append(o,s.toString())}):t.formData.append(o,n.toString()))}onFormSubmit(t){const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}onFormReset(){this.form&&(this.options.setValue(this.host,this.options.defaultValue(this.host)),this.host.invalid=!1,Hr.has(this.form)?Hr.get(this.form).add(this.host):Hr.set(this.form,new Set([this.host])))}reportFormValidity(){if(this.form&&!this.form.noValidate){for(const t of this.form.querySelectorAll("*"))if(bt(t.reportValidity)&&!t.reportValidity())return!1}return!0}}const ea=e=>{class t extends e{renderAnchor({id:o,className:n,part:i,content:s=N`<slot></slot>`,refDirective:a}){return N`<a ${a} id="${Ut(o)}" class="_a ${n||""}" part="${Ut(i)}" href="${Ut(this.href)}" download="${Ut(this.download)}" target="${Ut(this.target)}" rel="${Ut(this.rel)}">${s}</a>`}}return b([$({reflect:!0})],t.prototype,"href",void 0),b([$({reflect:!0})],t.prototype,"download",void 0),b([$({reflect:!0})],t.prototype,"target",void 0),b([$({reflect:!0})],t.prototype,"rel",void 0),t};p.fn.removeAttr=function(e){const t=e.split(" ").filter(r=>r);return this.each(function(){J(t,r=>{ei(this,r)})})};let xo=!0;const si=It();si.addEventListener("pointerdown",()=>{xo=!0});si.addEventListener("keydown",()=>{xo=!1});const ra=e=>{class t extends e{constructor(){super(...arguments),this.autofocus=!1,this.focused=!1,this.focusVisible=!1,this._manipulatingTabindex=!1,this._tabIndex=0}get tabIndex(){const o=p(this);if(this.focusElement===this)return Number(o.attr("tabindex")||-1);const n=Number(o.attr("tabindex")||0);return this.focusDisabled||n<0?-1:this.focusElement?this.focusElement.tabIndex:n}set tabIndex(o){if(this._manipulatingTabindex){this._manipulatingTabindex=!1;return}const n=p(this);if(this.focusElement===this){o!==null&&(this._tabIndex=o),n.attr("tabindex",this.focusDisabled?null:o);return}const i=()=>{this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}))};if(o===-1?this.addEventListener("pointerdown",i):(this._manipulatingTabindex=!0,this.removeEventListener("pointerdown",i)),o===-1||this.focusDisabled){n.attr("tabindex",-1),o!==-1&&this.manageFocusElementTabindex(o);return}this.hasAttribute("tabindex")||(this._manipulatingTabindex=!1),this.manageFocusElementTabindex(o)}get focusDisabled(){throw new Error("Must implement focusDisabled getter!")}get focusElement(){throw new Error("Must implement focusElement getter!")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.manageAutoFocus()})})}click(){this.focusDisabled||(this.focusElement!==this?this.focusElement.click():HTMLElement.prototype.click.apply(this))}focus(o){this.focusDisabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(o):HTMLElement.prototype.focus.apply(this,[o]))}blur(){this.focusElement!==this?this.focusElement.blur():HTMLElement.prototype.blur.apply(this)}firstUpdated(o){super.firstUpdated(o),this.focusElement.addEventListener("focus",()=>{this.focused=!0,this.focusVisible=!xo}),this.focusElement.addEventListener("blur",()=>{this.focused=!1,this.focusVisible=!1})}update(o){if(this._lastFocusDisabled===void 0||this._lastFocusDisabled!==this.focusDisabled){this._lastFocusDisabled=this.focusDisabled;const n=p(this);this.focusDisabled?n.removeAttr("tabindex"):this.focusElement===this?(this._manipulatingTabindex=!0,n.attr("tabindex",this._tabIndex)):this.tabIndex>-1&&n.removeAttr("tabindex")}super.update(o)}updated(o){super.updated(o),this.focused&&this.focusDisabled&&this.blur()}async manageFocusElementTabindex(o){this.focusElement||await this.updateComplete,o===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=o}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}}return b([$({type:Boolean,reflect:!0,converter:nt})],t.prototype,"autofocus",void 0),b([$({type:Boolean,reflect:!0,converter:nt})],t.prototype,"focused",void 0),b([$({type:Boolean,reflect:!0,converter:nt,attribute:"focus-visible"})],t.prototype,"focusVisible",void 0),b([$({type:Number,reflect:!0,attribute:"tabindex"})],t.prototype,"tabIndex",null),t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const So=ve(class extends pr{constructor(e){var t;if(super(e),e.type!==fr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const n=e.element.classList;this.it.forEach(i=>{i in t||(n.remove(i),this.it.delete(i))});for(const i in t){const s=!!t[i];s===this.it.has(i)||!((o=this.nt)===null||o===void 0)&&o.has(i)||(s?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return kt}}),oa=St`:host{position:relative;display:inline-block;width:2.5rem;height:2.5rem;stroke:rgb(var(--mdui-color-primary))}.progress{position:relative;display:inline-block;width:100%;height:100%;text-align:left;transition:opacity var(--mdui-motion-duration-medium1) var(--mdui-motion-easing-linear)}.determinate svg{transform:rotate(-90deg);fill:transparent}.determinate .track{stroke:transparent}.determinate .circle{stroke:inherit;transition:stroke-dashoffset var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard)}.indeterminate{font-size:0;letter-spacing:0;white-space:nowrap;animation:mdui-comp-circular-progress-rotate 1568ms var(--mdui-motion-easing-linear) infinite}.indeterminate .circle,.indeterminate .layer{position:absolute;width:100%;height:100%}.indeterminate .layer{animation:mdui-comp-circular-progress-layer-rotate 5332ms var(--mdui-motion-easing-standard) infinite both}.indeterminate .circle{fill:transparent;stroke:inherit}.indeterminate .gap-patch{position:absolute;top:0;left:47.5%;width:5%;height:100%;overflow:hidden}.indeterminate .gap-patch .circle{left:-900%;width:2000%;transform:rotate(180deg)}.indeterminate .clipper{position:relative;display:inline-block;width:50%;height:100%;overflow:hidden}.indeterminate .clipper .circle{width:200%}.indeterminate .clipper.left .circle{animation:mdui-comp-circular-progress-left-spin 1333ms var(--mdui-motion-easing-standard) infinite both}.indeterminate .clipper.right .circle{left:-100%;animation:mdui-comp-circular-progress-right-spin 1333ms var(--mdui-motion-easing-standard) infinite both}@keyframes mdui-comp-circular-progress-rotate{to{transform:rotate(360deg)}}@keyframes mdui-comp-circular-progress-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdui-comp-circular-progress-left-spin{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes mdui-comp-circular-progress-right-spin{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}100%{transform:rotate(-265deg)}}`;let Ue=class extends ft{constructor(){super(...arguments),this.max=1}render(){const t=!xt(this.value);return N`<div class="progress ${So({determinate:t,indeterminate:!t})}">${t?this.renderDeterminate():this.renderInDeterminate()}</div>`}renderDeterminate(){var t;const r=this.value,o=4,n=18,i=3.1415926,s=n+o/2,a=2*i*n,l=(1-r/Math.max((t=this.max)!==null&&t!==void 0?t:r,r))*a;return N`<svg viewBox="0 0 ${s*2} ${s*2}"><circle class="track" cx="${s}" cy="${s}" r="${n}" stroke-width="${o}"></circle><circle class="circle" cx="${s}" cy="${s}" r="${n}" stroke-dasharray="${2*i*n}" stroke-dashoffset="${l}" stroke-width="${o}"></circle></svg>`}renderInDeterminate(){const o=3.1415926,n=18+4/2,i=2*o*18,s=.5*i,a=l=>N`<svg class="circle" viewBox="0 0 ${n*2} ${n*2}"><circle cx="${n}" cy="${n}" r="${18}" stroke-dasharray="${i}" stroke-dashoffset="${s}" stroke-width="${l}"></circle></svg>`;return N`<div class="layer"><div class="clipper left">${a(4)}</div><div class="gap-patch">${a(4*.8)}</div><div class="clipper right">${a(4)}</div></div>`}};Ue.styles=[Ee,oa];b([$({type:Number,reflect:!0})],Ue.prototype,"max",void 0);b([$({type:Number})],Ue.prototype,"value",void 0);Ue=b([Ot("mdui-circular-progress")],Ue);p.fn.slice=function(...e){return new mt([].slice.apply(this,e))};p.fn.eq=function(e){const t=e===-1?this.slice(e):this.slice(e,+e+1);return new mt(t)};const na=(e,t,r,o,n)=>{const i=[];let s;return e.each((a,l)=>{for(s=l[r];s&&We(s);){if(t===2){if(o&&p(s).is(o))break;(!n||p(s).is(n))&&i.push(s)}else if(t===0){(!o||p(s).is(o))&&i.push(s);break}else(!o||p(s).is(o))&&i.push(s);s=s[r]}}),new mt(_o(i))};J(["","s","sUntil"],(e,t)=>{p.fn[`parent${e}`]=function(r,o){const n=t?p(this.get().reverse()):this;return na(n,t,"parentNode",r,o)}});p.fn.index=function(e){return arguments.length?_t(e)?p(e).get().indexOf(this[0]):this.get().indexOf(p(e)[0]):this.eq(0).parent().children().get().indexOf(this[0])};const ai=new WeakMap,Mo=e=>{var t;return(t=ai.get(e))!==null&&t!==void 0?t:{}},ia=(e,t)=>{const r=Mo(e),o=Ao(t);return o in r?r[o]:void 0},li=(e,t)=>{const r=Mo(e);vt(t,(o,n)=>{r[Ao(o)]=n}),ai.set(e,r)},sa=(e,t,r)=>{li(e,{[t]:r})},aa=/^(?:{[\w\W]*\}|\[[\w\W]*\])$/,la=e=>e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:aa.test(e)?JSON.parse(e):e,wn=(e,t,r)=>{if(xt(r)&&e.nodeType===1&&(r=e.dataset[t],_t(r)))try{r=la(r)}catch{}return r};p.fn.data=function(e,t){if(xt(e)){if(!this.length)return;const r=this[0],o=Mo(r);return r.nodeType!==1||vt(r.dataset,n=>{o[n]=wn(r,n,o[n])}),o}if(Wt(e))return this.each(function(){li(this,e)});if(arguments.length===2&&xt(t))return this;if(!xt(t))return this.each(function(){sa(this,e,t)});if(this.length)return wn(this[0],Ao(e),ia(this[0],e))};p.fn.filter=function(e){if(bt(e))return this.map((r,o)=>e.call(o,r,o)?o:void 0);if(_t(e))return this.map((r,o)=>p(o).is(e)?o:void 0);const t=p(e);return this.map((r,o)=>t.get().includes(o)?o:void 0)};const ci=(e,t,r,o,n,i)=>{const s=a=>eo(e,t.toLowerCase(),a)*i;return o===2&&n&&(r+=s("margin")),ni(e)?(o===0&&(r-=s("border")),o===1&&(r-=s("border"),r-=s("padding"))):(o===0&&(r+=s("padding")),o===2&&(r+=s("border"),r+=s("padding"))),r},ui=(e,t,r,o)=>{const n=It(),i=`client${t}`,s=`scroll${t}`,a=`offset${t}`,l=`inner${t}`;if(vo(e))return r===2?e[l]:to(n)[i];if(wo(e)){const d=to(e);return Math.max(e.body[s],d[s],e.body[a],d[a],d[i])}const c=parseFloat(gr(e,t.toLowerCase())||"0");return ci(e,t,c,r,o,1)},ca=(e,t,r,o,n,i)=>{let s=bt(i)?i.call(e,t,ui(e,r,o,n)):i;if(s==null)return;const a=p(e),l=r.toLowerCase();if(_t(s)&&["auto","inherit",""].includes(s)){a.css(l,s);return}const c=s.toString().replace(/\b[0-9.]*/,""),d=parseFloat(s);s=ci(e,r,d,o,n,-1)+(c||"px"),a.css(l,s)};J(["Width","Height"],e=>{J([`inner${e}`,e.toLowerCase(),`outer${e}`],(t,r)=>{p.fn[t]=function(o,n){const i=arguments.length&&(r<2||!xs(o)),s=o===!0||n===!0;return i?this.each((a,l)=>ca(l,a,e,r,s,o)):this.length?ui(this[0],e,r,s):void 0}})});function di(e,...t){return J(t,r=>{vt(r,(o,n)=>{xt(n)||(e[o]=n)})}),e}p.fn.offsetParent=function(){const e=It();return this.map(function(){let t=this.offsetParent;for(;t&&p(t).css("position")==="static";)t=t.offsetParent;return t||e.documentElement})};const er=(e,t)=>parseFloat(e.css(t));p.fn.position=function(){if(!this.length)return;const e=this.eq(0);let t,r={left:0,top:0};if(e.css("position")==="fixed")t=e[0].getBoundingClientRect();else{t=e.offset();const o=e.offsetParent();r=o.offset(),r.top+=er(o,"border-top-width"),r.left+=er(o,"border-left-width")}return{top:t.top-r.top-er(e,"margin-top"),left:t.left-r.left-er(e,"margin-left")}};const hi=e=>{if(!e.getClientRects().length)return{top:0,left:0};const{top:t,left:r}=e.getBoundingClientRect(),{pageYOffset:o,pageXOffset:n}=e.ownerDocument.defaultView;return{top:t+o,left:r+n}},ua=(e,t,r)=>{const o=p(e),n=o.css("position");n==="static"&&o.css("position","relative");const i=hi(e),s=o.css("top"),a=o.css("left");let l,c;if((n==="absolute"||n==="fixed")&&(s+a).includes("auto")){const f=o.position();l=f.top,c=f.left}else l=parseFloat(s),c=parseFloat(a);const m=bt(t)?t.call(e,r,di({},i)):t;o.css({top:m.top!=null?m.top-i.top+l:void 0,left:m.left!=null?m.left-i.left+c:void 0})};p.fn.offset=function(e){return arguments.length?this.each(function(t){ua(this,e,t)}):this.length?hi(this[0]):void 0};const da=(e,t)=>e!==t&&to(e).contains(t),ha=(e,t)=>(J(t,r=>{e.push(r)}),e);p.fn.find=function(e){const t=[];return this.each((r,o)=>{ha(t,p(o.querySelectorAll(e)).get())}),new mt(t)};const ma=Ae().CustomEvent;class fa extends ma{constructor(t,r){super(t,r),this.data=r.data,this.namespace=r.namespace}}const Vr=new WeakMap;let pa=1;const ro=e=>(Vr.has(e)||Vr.set(e,++pa),Vr.get(e)),An=new Map,hr=e=>{const t=ro(e);return An.get(t)||An.set(t,[]).get(t)},Po=e=>{const t=e.split(".");return{type:t[0],namespace:t.slice(1).sort().join(" ")}},mi=e=>new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)"),ga=(e,t,r,o)=>{const n=Po(t);return hr(e).filter(i=>i&&(!n.type||i.type===n.type)&&(!n.namespace||mi(n.namespace).test(i.namespace))&&(!r||ro(i.func)===ro(r))&&(!o||i.selector===o))},ya=(e,t,r,o,n)=>{let i=!1;Wt(o)&&o.useCapture&&(i=!0),t.split(" ").forEach(s=>{if(!s)return;const a=Po(s),l=(m,f)=>{r.apply(f,m.detail===null?[m]:[m].concat(m.detail))===!1&&(m.preventDefault(),m.stopPropagation())},c=m=>{m.namespace&&!mi(m.namespace).test(a.namespace)||(m.data=o,n?p(e).find(n).get().reverse().forEach(f=>{(f===m.target||da(f,m.target))&&l(m,f)}):l(m,e))},d={type:a.type,namespace:a.namespace,func:r,selector:n,id:hr(e).length,proxy:c};hr(e).push(d),e.addEventListener(d.type,c,i)})},ba=(e,t,r,o)=>{const n=hr(e),i=s=>{delete n[s.id],e.removeEventListener(s.type,s.proxy,!1)};t?t.split(" ").forEach(s=>{s&&ga(e,s,r,o).forEach(a=>{i(a)})}):n.forEach(s=>{i(s)})};p.fn.off=function(e,t,r){return Wt(e)?(vt(e,(o,n)=>{this.off(o,t,n)}),this):((t===!1||bt(t))&&(r=t,t=void 0),r===!1&&(r=Xn),this.each(function(){ba(this,e,r,t)}))};p.fn.on=function(e,t,r,o,n){if(Wt(e))return _t(t)||(r=r||t,t=void 0),vt(e,(i,s)=>{this.on(i,t,r,s,n)}),this;if(r==null&&o==null?(o=t,r=t=void 0):o==null&&(_t(t)?(o=r,r=void 0):(o=r,r=t,t=void 0)),o===!1)o=Xn;else if(!o)return this;if(n){const i=this,s=o;o=function(a,...l){return i.off(a.type,t,o),s.call(this,a,...l)}}return this.each(function(){ya(this,e,o,r,t)})};J(["appendTo","prependTo"],(e,t)=>{p.fn[e]=function(r){const o=[],n=p(r).map((s,a)=>{const l=a.childNodes,c=l.length;if(c)return l[t?0:c-1];const d=Eo("div");return Jn(a,d),o.push(d),d}),i=this[t?"insertBefore":"insertAfter"](n);return p(o).remove(),i}});const va=St`:host{position:absolute;top:0;left:0;display:block;width:100%;height:100%;overflow:hidden;pointer-events:none}.surface{position:absolute;top:0;left:0;width:100%;height:100%;transition-duration:280ms;transition-property:background-color;pointer-events:none;transition-timing-function:var(--mdui-motion-easing-standard)}.hover{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-hover))}:host-context([focus-visible]) .focused{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-focus))}.dragged{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-dragged))}.wave{position:absolute;z-index:1;background-color:rgb(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)));border-radius:50%;transform:translate3d(0,0,0) scale(.4);opacity:0;animation:225ms ease 0s 1 normal forwards running mdui-comp-ripple-radius-in,75ms ease 0s 1 normal forwards running mdui-comp-ripple-opacity-in;pointer-events:none}.out{transform:translate3d(var(--mdui-comp-ripple-transition-x,0),var(--mdui-comp-ripple-transition-y,0),0) scale(1);animation:150ms ease 0s 1 normal none running mdui-comp-ripple-opacity-out}@keyframes mdui-comp-ripple-radius-in{from{transform:translate3d(0,0,0) scale(.4);animation-timing-function:var(--mdui-motion-easing-standard)}to{transform:translate3d(var(--mdui-comp-ripple-transition-x,0),var(--mdui-comp-ripple-transition-y,0),0) scale(1)}}@keyframes mdui-comp-ripple-opacity-in{from{opacity:0;animation-timing-function:linear}to{opacity:var(--mdui-state-layer-pressed)}}@keyframes mdui-comp-ripple-opacity-out{from{animation-timing-function:linear;opacity:var(--mdui-state-layer-pressed)}to{opacity:0}}`;let ee=class extends ft{constructor(){super(...arguments),this.noRipple=!1,this.hover=!1,this.focused=!1,this.dragged=!1,this.surfaceRef=Jt()}startPress(t){if(this.noRipple)return;const r=p(this.surfaceRef.value),o=r.innerHeight(),n=r.innerWidth();let i,s;if(!t)i=n/2,s=o/2;else{const m=typeof TouchEvent<"u"&&t instanceof TouchEvent&&t.touches.length?t.touches[0]:t,f=r.offset();if(m.pageX<f.left||m.pageX>f.left+n||m.pageY<f.top||m.pageY>f.top+o)return;i=m.pageX-f.left,s=m.pageY-f.top}const a=Math.max(Math.pow(Math.pow(o,2)+Math.pow(n,2),.5),48),l=`${-i+n/2}px`,c=`${-s+o/2}px`,d=`translate3d(${l}, ${c}, 0) scale(1)`;p('<div class="wave"></div>').css({width:a,height:a,marginTop:-a/2,marginLeft:-a/2,left:i,top:s}).each((m,f)=>{f.style.setProperty("--mdui-comp-ripple-transition-x",l),f.style.setProperty("--mdui-comp-ripple-transition-y",c)}).prependTo(this.surfaceRef.value).each((m,f)=>f.clientLeft).css("transform",d).on("animationend",function(m){m.animationName==="mdui-comp-ripple-radius-in"&&p(this).data("filled",!0)})}endPress(){const t=p(this.surfaceRef.value).children().filter((o,n)=>!p(n).data("removing")).data("removing",!0),r=o=>{o.addClass("out").each((n,i)=>i.clientLeft).on("animationend",function(){p(this).remove()})};t.filter((o,n)=>!p(n).data("filled")).on("animationend",function(o){o.animationName==="mdui-comp-ripple-radius-in"&&r(p(this))}),r(t.filter((o,n)=>!!p(n).data("filled")))}startHover(){this.hover=!0}endHover(){this.hover=!1}startFocus(){this.focused=!0}endFocus(){this.focused=!1}startDrag(){this.dragged=!0}endDrag(){this.dragged=!1}render(){return N`<div ${Zt(this.surfaceRef)} class="surface ${So({hover:this.hover,focused:this.focused,dragged:this.dragged})}"></div>`}};ee.styles=[Ee,va];b([$({type:Boolean,reflect:!0,converter:nt,attribute:"no-ripple"})],ee.prototype,"noRipple",void 0);b([To()],ee.prototype,"hover",void 0);b([To()],ee.prototype,"focused",void 0);b([To()],ee.prototype,"dragged",void 0);ee=b([Ot("mdui-ripple")],ee);const wa=e=>{class t extends e{constructor(){super(...arguments),this.noRipple=!1,this.rippleIndex=void 0,this.getRippleIndex=()=>this.rippleIndex}get rippleElement(){throw new Error("Must implement rippleElement getter!")}get rippleDisabled(){throw new Error("Must implement rippleDisabled getter!")}get rippleTarget(){return this}firstUpdated(o){super.firstUpdated(o);const n=p(this.rippleTarget),i=a=>{fe(this.rippleTarget)&&(this.rippleIndex=n.index(a.target))};(fe(this.rippleTarget)?this.rippleTarget:[this.rippleTarget]).forEach(a=>{a.addEventListener("pointerdown",l=>{i(l),this.startPress(l)}),a.addEventListener("pointerenter",l=>{i(l),this.startHover(l)}),a.addEventListener("pointerleave",l=>{i(l),this.endHover(l)}),a.addEventListener("focus",l=>{i(l),this.startFocus()}),a.addEventListener("blur",l=>{i(l),this.endFocus()})})}startHover(o){o.pointerType!=="mouse"||this.isRippleDisabled()||(this.getRippleTarget().setAttribute("hover",""),this.getRippleElement().startHover())}endHover(o){o.pointerType!=="mouse"||this.isRippleDisabled()||(this.getRippleTarget().removeAttribute("hover"),this.getRippleElement().endHover())}isRippleDisabled(){const o=this.rippleDisabled;if(!Array.isArray(o))return o;const n=this.getRippleIndex();return n!==void 0?o[n]:o.length?o[0]:!1}getRippleElement(){const o=this.rippleElement;if(!fe(o))return o;const n=this.getRippleIndex();return n!==void 0?o[n]:o[0]}getRippleTarget(){const o=this.rippleTarget;if(!fe(o))return o;const n=this.getRippleIndex();return n!==void 0?o[n]:o[0]}startFocus(){this.isRippleDisabled()||this.getRippleElement().startFocus()}endFocus(){this.isRippleDisabled()||this.getRippleElement().endFocus()}startPress(o){if(this.isRippleDisabled()||o.button)return;const n=this.getRippleTarget();if(n.setAttribute("pressed",""),["touch","pen"].includes(o.pointerType)){let i=!1,s=setTimeout(()=>{s=0,this.getRippleElement().startPress(o)},70);const a=()=>{s&&(clearTimeout(s),s=0,this.getRippleElement().startPress(o)),i||(i=!0,this.endPress()),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a)},l=()=>{s&&(clearTimeout(s),s=0),n.removeEventListener("touchmove",l)};n.addEventListener("touchmove",l),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a)}if(o.pointerType==="mouse"&&o.button===0){const i=()=>{this.endPress(),n.removeEventListener("pointerup",i),n.removeEventListener("pointercancel",i),n.removeEventListener("pointerleave",i)};this.getRippleElement().startPress(o),n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("pointerleave",i)}}endPress(){this.isRippleDisabled()||(this.getRippleTarget().removeAttribute("pressed"),this.getRippleElement().endPress())}startDrag(){this.isRippleDisabled()||this.getRippleElement().startDrag()}endDrag(){this.isRippleDisabled()||this.getRippleElement().endDrag()}}return b([$({type:Boolean,reflect:!0,converter:nt,attribute:"no-ripple"})],t.prototype,"noRipple",void 0),t},Aa=St`.button{position:relative;display:inline-flex;align-items:center;justify-content:center;height:100%;padding:0;overflow:hidden;color:inherit;font-size:inherit;font-family:inherit;letter-spacing:inherit;white-space:nowrap;text-align:center;text-decoration:none;vertical-align:middle;background:0 0;border:none;outline:0;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}`;class gt extends ea(wa(ra(ft))){constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.name="",this.value="",this.type="button",this.formNoValidate=!1,this.formController=new ta(this)}get validity(){if(this.isButton())return this.focusElement.validity}get validationMessage(){if(this.isButton())return this.focusElement.validationMessage}get rippleDisabled(){return this.disabled||this.loading}get focusElement(){var t,r;return this.isButton()?(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector("._button"):(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector("._a")}get focusDisabled(){return this.disabled||this.loading}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.type==="submit"&&this.formController.submit(this),this.type==="reset"&&this.formController.reset(this)})}checkValidity(){if(this.isButton()){const t=this.focusElement.checkValidity();return t||Tt(this,"invalid",{bubbles:!1,cancelable:!0,composed:!1}),t}return!0}reportValidity(){if(this.isButton()){const t=!this.focusElement.reportValidity();return t&&Tt(this,"invalid",{bubbles:!1,cancelable:!0,composed:!1}),!t}return!0}setCustomValidity(t){this.isButton()&&this.focusElement.setCustomValidity(t)}renderLoading(){return this.loading?N`<mdui-circular-progress part="loading"></mdui-circular-progress>`:$o}renderButton({id:t,className:r,part:o,content:n=N`<slot></slot>`}){return N`<button id="${Ut(t)}" class="${ii(["_button",r])}" part="${Ut(o)}" ?disabled="${this.rippleDisabled||this.focusDisabled}">${n}</button>`}isButton(){return!this.href}}gt.styles=[Ee,Aa];b([$({type:Boolean,reflect:!0,converter:nt})],gt.prototype,"disabled",void 0);b([$({type:Boolean,reflect:!0,converter:nt})],gt.prototype,"loading",void 0);b([$({reflect:!0})],gt.prototype,"name",void 0);b([$({reflect:!0})],gt.prototype,"value",void 0);b([$({reflect:!0})],gt.prototype,"type",void 0);b([$({reflect:!0})],gt.prototype,"form",void 0);b([$({reflect:!0,attribute:"formaction"})],gt.prototype,"formAction",void 0);b([$({reflect:!0,attribute:"formenctype"})],gt.prototype,"formEnctype",void 0);b([$({reflect:!0,attribute:"formmethod"})],gt.prototype,"formMethod",void 0);b([$({type:Boolean,reflect:!0,converter:nt,attribute:"formnovalidate"})],gt.prototype,"formNoValidate",void 0);b([$({reflect:!0,attribute:"formtarget"})],gt.prototype,"formTarget",void 0);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi="important",Ea=" !"+fi,_a=ve(class extends pr{constructor(e){var t;if(super(e),e.type!==fr.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ht===void 0){this.ht=new Set;for(const o in t)this.ht.add(o);return this.render(t)}this.ht.forEach(o=>{t[o]==null&&(this.ht.delete(o),o.includes("-")?r.removeProperty(o):r[o]="")});for(const o in t){const n=t[o];if(n!=null){this.ht.add(o);const i=typeof n=="string"&&n.endsWith(Ea);o.includes("-")||i?r.setProperty(o,i?n.slice(0,-11):n,i?fi:""):r[o]=n}}return kt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class oo extends cr{}oo.directiveName="unsafeSVG",oo.resultType=2;const pi=ve(oo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ta{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Ca{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;(t=this.Y)!==null&&t!==void 0||(this.Y=new Promise(r=>this.Z=r))}resume(){var t;(t=this.Z)===null||t===void 0||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=e=>!Hi(e)&&typeof e.then=="function",_n=1073741823;class ka extends On{constructor(){super(...arguments),this._$C_t=_n,this._$Cwt=[],this._$Cq=new Ta(this),this._$CK=new Ca}render(...t){var r;return(r=t.find(o=>!En(o)))!==null&&r!==void 0?r:kt}update(t,r){const o=this._$Cwt;let n=o.length;this._$Cwt=r;const i=this._$Cq,s=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$C_t);a++){const l=r[a];if(!En(l))return this._$C_t=a,l;a<n&&l===o[a]||(this._$C_t=_n,n=0,Promise.resolve(l).then(async c=>{for(;s.get();)await s.get();const d=i.deref();if(d!==void 0){const m=d._$Cwt.indexOf(l);m>-1&&m<d._$C_t&&(d._$C_t=m,d.setValue(c))}}))}return kt}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const $a=ve(ka);p.fn.trigger=function(e,t=null,r){const{type:o,namespace:n}=Po(e),i=new fa(o,{detail:t,data:null,namespace:n,bubbles:!0,cancelable:!1,composed:!0,...r});return this.each((s,a)=>{a.dispatchEvent(i)})};const xa="ajaxStart",Tn="ajaxSuccess",rr="ajaxError",Wr="ajaxComplete",ir={},Sa=e=>["GET","HEAD"].includes(e),Cn=(e,t)=>`${e}&${t}`.replace(/[&?]{1,2}/,"?"),Ma=e=>{const t=Ae();return/^([\w-]+:)?\/\/([^/]+)/.test(e)&&RegExp.$2!==t.location.host},Pa=e=>e>=200&&e<300||[0,304].includes(e),Da=e=>{const t={url:"",method:"GET",data:"",processData:!0,async:!0,cache:!0,username:"",password:"",headers:{},xhrFields:{},statusCode:{},dataType:"",contentType:"application/x-www-form-urlencoded",timeout:0,global:!0};return vt(ir,(r,o)=>{!["beforeSend","success","error","complete","statusCode"].includes(r)&&!xt(o)&&(t[r]=o)}),di({},t,e)},Ra=e=>{if(!Wt(e)&&!Array.isArray(e))return"";const t=[],r=(o,n)=>{let i;Wt(n)?vt(n,(s,a)=>{i=Array.isArray(n)&&!Wt(a)?"":s,r(`${o}[${i}]`,a)}):(i=n==null||n===""?"=":`=${encodeURIComponent(n)}`,t.push(encodeURIComponent(o)+i))};return Array.isArray(e)?J(e,({name:o,value:n})=>r(o,n)):vt(e,r),t.join("&")},La=e=>{const t=It(),r=Ae();let o=!1;const n={},i={},s=Da(e),a=s.method.toUpperCase();let{data:l,url:c}=s;c=c||r.location.toString();const{processData:d,async:m,cache:f,username:_,password:C,headers:k,xhrFields:D,statusCode:R,dataType:O,contentType:w,timeout:F,global:x}=s,U=Sa(a);l&&(U||d)&&!_t(l)&&!(l instanceof ArrayBuffer)&&!(l instanceof Blob)&&!(l instanceof Document)&&!(l instanceof FormData)&&(l=Ra(l)),l&&U&&(c=Cn(c,l),l=null);const M=(L,S,...Z)=>{x&&p(t).trigger(L,S==="success"?i:n);let q,A;S in ir&&(q=ir[S](...Z)),s[S]&&(A=s[S](...Z)),S==="beforeSend"&&[q,A].includes(!1)&&(o=!0)};return(()=>{let L;return new Promise((S,Z)=>{const q=Y=>Z(new Error(Y));U&&!f&&(c=Cn(c,`_=${Date.now()}`));const A=new XMLHttpRequest;A.open(a,c,m,_,C),(w||l&&!U&&w!==!1)&&A.setRequestHeader("Content-Type",w),O==="json"&&A.setRequestHeader("Accept","application/json, text/javascript"),vt(k,(Y,ct)=>{xt(ct)||A.setRequestHeader(Y,ct+"")}),Ma(c)||A.setRequestHeader("X-Requested-With","XMLHttpRequest"),vt(D,(Y,ct)=>{A[Y]=ct}),n.xhr=i.xhr=A,n.options=i.options=s;let G;if(A.onload=()=>{var Y;G&&clearTimeout(G);const ct=Pa(A.status);let K;if(ct)if(L=A.status===204||a==="HEAD"?"nocontent":A.status===304?"notmodified":"success",O==="json"||!O&&(A.getResponseHeader("content-type")||"").includes("json")){try{K=a==="HEAD"?void 0:JSON.parse(A.responseText),i.response=K}catch{L="parsererror",M(rr,"error",A,L),q(L)}L!=="parsererror"&&(M(Tn,"success",K,L,A),S(K))}else K=a==="HEAD"?void 0:A.responseType==="text"||A.responseType===""?A.responseText:A.response,i.response=K,M(Tn,"success",K,L,A),S(K);else L="error",M(rr,"error",A,L),q(L);J([(Y=ir.statusCode)!==null&&Y!==void 0?Y:{},R],At=>{At[A.status]&&(ct?At[A.status](K,L,A):At[A.status](A,L))}),M(Wr,"complete",A,L)},A.onerror=()=>{G&&clearTimeout(G),M(rr,"error",A,A.statusText),M(Wr,"complete",A,"error"),q(A.statusText)},A.onabort=()=>{let Y="abort";G&&(Y="timeout",clearTimeout(G)),M(rr,"error",A,Y),M(Wr,"complete",A,Y),q(Y)},M(xa,"beforeSend",A,s),o)return q("cancel");F>0&&(G=r.setTimeout(()=>A.abort(),F)),A.send(l)})})()},Ia=St`:host{display:inline-block;width:1em;height:1em;font-weight:400;font-family:'Material Icons';font-style:normal;line-height:1;direction:ltr;letter-spacing:normal;white-space:nowrap;text-transform:none;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-size:1.5rem}::slotted(svg),svg{width:100%;height:100%;fill:currentcolor}`;let He=class extends ft{constructor(){super(...arguments),this.hasSlotController=new ko(this,"[default]")}render(){const t=()=>{if(this.name){const[r,o]=this.name.split("--");return N`<span style="${_a({fontFamily:new Map([["outlined","Material Icons Outlined"],["filled","Material Icons"],["rounded","Material Icons Round"],["sharp","Material Icons Sharp"],["two-tone","Material Icons Two Tone"]]).get(o)})}">${r}</span>`}return this.src?N`${$a(La({url:this.src}).then(pi))}`:N``};return this.hasSlotController.test("[default]")?N`<slot></slot>`:t()}};He.styles=[Ee,Ia];b([$({reflect:!0})],He.prototype,"name",void 0);b([$({reflect:!0})],He.prototype,"src",void 0);He=b([Ot("mdui-icon")],He);const Oa=St`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-block;overflow:hidden;text-align:center;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;font-size:1.5rem;width:2.5rem;min-width:2.5rem;height:2.5rem}:host([variant=standard]){color:rgb(var(--mdui-color-on-surface-variant));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=filled]){color:rgb(var(--mdui-color-primary));background-color:rgb(var(--mdui-color-surface-container-highest));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=tonal]){color:rgb(var(--mdui-color-on-surface-variant));background-color:rgb(var(--mdui-color-surface-container-highest));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=outlined]){border:.0625rem solid rgb(var(--mdui-color-outline));color:rgb(var(--mdui-color-on-surface-variant));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=outlined][pressed]){color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([variant=standard][selected]){color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=filled]:not([selectable])),:host([variant=filled][selected]){color:rgb(var(--mdui-color-on-primary));background-color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-primary)}:host([variant=tonal]:not([selectable])),:host([variant=tonal][selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=outlined][selected]){border:none;color:rgb(var(--mdui-color-inverse-on-surface));background-color:rgb(var(--mdui-color-inverse-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}:host([variant=filled][disabled]),:host([variant=outlined][disabled]),:host([variant=tonal][disabled]){background-color:rgba(var(--mdui-color-on-surface),.12);border-color:rgba(var(--mdui-color-on-surface),.12)}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),.38)!important}:host([loading]) .button,:host([loading]) mdui-ripple{opacity:0}.button{float:left;width:100%}.icon,.selected-icon mdui-icon,::slotted(*){font-size:inherit}mdui-circular-progress{display:flex;position:absolute;top:calc(50% - 1.5rem / 2);left:calc(50% - 1.5rem / 2);width:1.5rem;height:1.5rem}:host([variant=filled]:not([disabled])) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-primary))}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;let Lt=class extends gt{constructor(){super(...arguments),this.variant="standard",this.selectable=!1,this.selected=!1,this.rippleRef=Jt(),this.hasSlotController=new ko(this,"[default]","selected-icon")}get rippleElement(){return this.rippleRef.value}onSelectedChange(){Tt(this,"change")}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",()=>{!this.selectable||this.disabled||(this.selected=!this.selected)})}render(){return N`<mdui-ripple ${Zt(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton()?this.renderButton({className:"button",part:"button",content:this.renderIcon()}):this.disabled||this.loading?N`<span part="button" class="button _a">${this.renderIcon()}</span>`:this.renderAnchor({className:"button",part:"button",content:this.renderIcon()})} ${this.renderLoading()}`}renderIcon(){const t=()=>this.hasSlotController.test("[default]")?N`<slot></slot>`:this.icon?N`<mdui-icon part="icon" class="icon" name="${this.icon}"></mdui-icon>`:$o,r=()=>this.hasSlotController.test("selected-icon")||this.selectedIcon?N`<slot name="selected-icon" part="selected-icon" class="selected-icon"><mdui-icon name="${this.selectedIcon}"></mdui-icon></slot>`:t();return this.selected?r():t()}};Lt.styles=[gt.styles,Oa];b([$({reflect:!0})],Lt.prototype,"variant",void 0);b([$({reflect:!0})],Lt.prototype,"icon",void 0);b([$({reflect:!0,attribute:"selected-icon"})],Lt.prototype,"selectedIcon",void 0);b([$({type:Boolean,reflect:!0,converter:nt})],Lt.prototype,"selectable",void 0);b([$({type:Boolean,reflect:!0,converter:nt})],Lt.prototype,"selected",void 0);b([ze("selected",!0)],Lt.prototype,"onSelectedChange",null);Lt=b([Ot("mdui-button-icon")],Lt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e,t,r){return e?t():r==null?void 0:r()}function zt(e,t,r){return e?new Promise(o=>{if(r.duration===1/0)throw new Error("Promise-based animations must be finite.");bo(r.duration)&&isNaN(r.duration)&&(r.duration=0),r.easing===""&&(r.easing="linear");const n=e.animate(t,r);n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})}):Promise.resolve()}function he(e){return e?Promise.all(e.getAnimations().map(t=>new Promise(r=>{const o=requestAnimationFrame(r);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()}))):Promise.resolve()}function kn(e){const t=Ae(),r=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||r==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||t.getComputedStyle(e).visibility==="hidden"?!1:(r==="audio"||r==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(r)}function Na(e){var t,r;const o=[];function n(a){a instanceof HTMLElement&&(o.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&n(a.shadowRoot)),[...a.children].forEach(c=>n(c))}n(e);const i=(t=o.find(a=>kn(a)))!==null&&t!==void 0?t:null,s=(r=o.reverse().find(a=>kn(a)))!==null&&r!==void 0?r:null;return{start:i,end:s}}let Re=[];class Fa{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Re.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Re=Re.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Re[Re.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:r}=Na(this.element),o=this.tabDirection==="forward"?t:r;typeof(o==null?void 0:o.focus)=="function"&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}}const jr=(e,t)=>{const r=`--mdui-motion-easing-${t}`;return p(e).css(r).trim()},$n=(e,t)=>{const r=`--mdui-motion-duration-${t}`,o=p(e).css(r).trim().toLowerCase();return o.endsWith("ms")?parseFloat(o):parseFloat(o)*1e3},no=new Set,gi="mdui-lock-screen",Ba=(e,t)=>{const r=It();no.add(e),p(t||r.body).addClass(gi)},xn=(e,t)=>{const r=It();no.delete(e),no.size===0&&p(t||r.body).removeClass(gi)},za=St`:host{--shape-corner:var(--mdui-shape-corner-extra-large);--z-index:2300;position:fixed;z-index:var(--z-index);display:none;align-items:center;justify-content:center;inset:0;padding:3rem}::slotted(mdui-top-app-bar[slot=header]){position:absolute;border-top-left-radius:var(--mdui-shape-corner-extra-large);border-top-right-radius:var(--mdui-shape-corner-extra-large);background-color:rgb(var(--mdui-color-surface-container-high))}:host([fullscreen]){--shape-corner:var(--mdui-shape-corner-none);padding:0}:host([fullscreen]) ::slotted(mdui-top-app-bar[slot=header]){border-top-left-radius:var(--mdui-shape-corner-none);border-top-right-radius:var(--mdui-shape-corner-none)}.overlay{position:fixed;inset:0;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{position:relative;display:flex;flex-direction:column;max-height:100%;border-radius:var(--shape-corner);outline:0;transform-origin:top;min-width:17.5rem;max-width:35rem;padding:1.5rem;background-color:rgb(var(--mdui-color-surface-container-high));box-shadow:var(--mdui-elevation-level3)}:host([fullscreen]) .panel{width:100%;max-width:100%;height:100%;max-height:100%;box-shadow:var(--mdui-elevation-level0)}.header{display:flex;flex-direction:column}.has-icon .header{align-items:center}.icon{display:flex;color:rgb(var(--mdui-color-secondary));font-size:1.5rem}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}.headline{display:flex;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.icon+.headline{padding-top:1rem}.body{overflow:auto}.header+.body{margin-top:1rem}.description{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([fullscreen]) .description{color:rgb(var(--mdui-color-on-surface))}.has-description.has-default .description{margin-bottom:1rem}.action{display:flex;justify-content:flex-end;padding-top:1.5rem}.action::slotted(:not(:first-child)){margin-left:.5rem}:host([stacked-actions]) .action{flex-direction:column;align-items:end}:host([stacked-actions]) .action::slotted(:not(:first-child)){margin-left:0;margin-top:.5rem}`;let wt=class extends ft{constructor(){super(...arguments),this.open=!1,this.fullscreen=!1,this.closeOnEsc=!1,this.closeOnOverlayClick=!1,this.stackedActions=!1,this.overlayRef=Jt(),this.panelRef=Jt(),this.bodyRef=Jt(),this.hasSlotController=new ko(this,"header","icon","headline","description","action","[default]")}async onOpenChange(){var t;const r=this.hasUpdated;r||await this.updateComplete;const o=Array.from(this.panelRef.value.querySelectorAll(".header, .body, .actions")),n=jr(this,"linear"),i=jr(this,"emphasized-decelerate"),s=jr(this,"emphasized-accelerate");if(this.open){if(r&&Tt(this,"open",{cancelable:!0}).defaultPrevented)return;this.style.display="flex";const a=(t=this.topAppBarElements)!==null&&t!==void 0?t:[];if(a.length){const c=a[0];c.scrollTarget||(c.scrollTarget=this.bodyRef.value),this.bodyRef.value.style.marginTop="0"}this.originalTrigger=document.activeElement,this.modalHelper.activate(),Ba(this),await Promise.all([he(this.overlayRef.value),he(this.panelRef.value),...o.map(c=>he(c))]),requestAnimationFrame(()=>{const c=this.querySelector("[autofocus]");c?c.focus({preventScroll:!0}):this.panelRef.value.focus({preventScroll:!0})});const l=$n(this,"medium4");await Promise.all([zt(this.overlayRef.value,[{opacity:0},{opacity:1,offset:.3},{opacity:1}],{duration:r?l:0,easing:n}),zt(this.panelRef.value,[{transform:"translateY(-1.875rem) scaleY(0)"},{transform:"translateY(0) scaleY(1)"}],{duration:r?l:0,easing:i}),zt(this.panelRef.value,[{opacity:0},{opacity:1,offset:.1},{opacity:1}],{duration:r?l:0,easing:n}),...o.map(c=>zt(c,[{opacity:0},{opacity:0,offset:.2},{opacity:1,offset:.8},{opacity:1}],{duration:r?l:0,easing:n}))]),r&&Tt(this,"opened");return}if(!this.open&&r){if(Tt(this,"close",{cancelable:!0}).defaultPrevented)return;this.modalHelper.deactivate(),await Promise.all([he(this.overlayRef.value),he(this.panelRef.value),...o.map(d=>he(d))]);const l=$n(this,"short4");await Promise.all([zt(this.overlayRef.value,[{opacity:1},{opacity:0}],{duration:l,easing:n}),zt(this.panelRef.value,[{transform:"translateY(0) scaleY(1)"},{transform:"translateY(-1.875rem) scaleY(0.6)"}],{duration:l,easing:s}),zt(this.panelRef.value,[{opacity:1},{opacity:1,offset:.75},{opacity:0}],{duration:l,easing:n}),...o.map(d=>zt(d,[{opacity:1},{opacity:0,offset:.75},{opacity:0}],{duration:l,easing:n}))]),this.style.display="none",xn(this);const c=this.originalTrigger;typeof(c==null?void 0:c.focus)=="function"&&setTimeout(()=>c.focus()),Tt(this,"closed");return}}connectedCallback(){super.connectedCallback(),this.modalHelper=new Fa(this),this.addEventListener("keydown",t=>{this.open&&this.closeOnEsc&&t.key==="Escape"&&(t.stopPropagation(),this.open=!1)})}disconnectedCallback(){super.disconnectedCallback(),xn(this)}render(){const t=this.hasSlotController.test("action"),r=this.hasSlotController.test("[default]"),o=!!this.icon||this.hasSlotController.test("icon"),n=!!this.headline||this.hasSlotController.test("headline"),i=!!this.description||this.hasSlotController.test("description"),s=o||n||this.hasSlotController.test("header"),a=i||r;return N`<div ${Zt(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}" tabindex="-1"></div><div ${Zt(this.panelRef)} part="panel" class="panel ${So({"has-icon":o,"has-description":i,"has-default":r})}" tabindex="0">${de(s,()=>N`<slot name="header" part="header" class="header">${de(o,()=>this.renderIcon())} ${de(n,()=>this.renderHeadline())}</slot>`)} ${de(a,()=>N`<div ${Zt(this.bodyRef)} part="body" class="body">${de(i,()=>this.renderDescription())}<slot></slot></div>`)} ${de(t,()=>N`<slot name="action" part="action" class="action"></slot>`)}</div>`}onOverlayClick(){Tt(this,"overlay-click"),this.closeOnOverlayClick&&(this.open=!1)}renderIcon(){return N`<slot name="icon" part="icon" class="icon">${this.icon?N`<mdui-icon name="${this.icon}"></mdui-icon>`:$o}</slot>`}renderHeadline(){return N`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`}renderDescription(){return N`<slot name="description" part="description" class="description">${this.description}</slot>`}};wt.styles=[Ee,za];b([$({reflect:!0})],wt.prototype,"icon",void 0);b([$({reflect:!0})],wt.prototype,"headline",void 0);b([$({reflect:!0})],wt.prototype,"description",void 0);b([$({type:Boolean,reflect:!0,converter:nt})],wt.prototype,"open",void 0);b([$({type:Boolean,reflect:!0,converter:nt})],wt.prototype,"fullscreen",void 0);b([$({type:Boolean,reflect:!0,converter:nt,attribute:"close-on-esc"})],wt.prototype,"closeOnEsc",void 0);b([$({type:Boolean,reflect:!0,converter:nt,attribute:"close-on-overlay-click"})],wt.prototype,"closeOnOverlayClick",void 0);b([$({type:Boolean,reflect:!0,converter:nt,attribute:"stacked-actions"})],wt.prototype,"stackedActions",void 0);b([Ws({slot:"header",selector:"mdui-top-app-bar",flatten:!0})],wt.prototype,"topAppBarElements",void 0);b([ze("open")],wt.prototype,"onOpenChange",null);wt=b([Ot("mdui-dialog")],wt);const Do=St`:host{display:inline-block;width:1em;height:1em;line-height:1;font-size:1.5rem}`,Ro=e=>N`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">${pi(e)}</svg>`;let io=class extends ft{render(){return Ro('<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>')}};io.styles=Do;io=b([Ot("mdui-icon-arrow-back")],io);let so=class extends ft{render(){return Ro('<path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>')}};so.styles=Do;so=b([Ot("mdui-icon-arrow-forward")],so);let ao=class extends ft{render(){return Ro('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>')}};ao.styles=Do;ao=b([Ot("mdui-icon-close")],ao);Bs("#C7EDCC");class Ua extends ft{constructor(){super();kr(this,"dialogRef",Jt());kr(this,"appBarRef",Jt());if(this.index=-1,!document.head.querySelector("#mdui-style")){const o=document.createElement("style");o.id="mdui-style",o.textContent=`
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
      `,document.head.appendChild(o)}}static get properties(){return{hass:{type:Object},stateObj:{type:Object},list:{type:Array},index:{type:Number},loading:{type:Boolean}}}static get styles(){return St`
      :host {
        display: block;
        --mdc-list-side-padding: 0;
      }
      .content img{
        max-width: 100%;
        height: auto;
      }
    `}setConfig(){}render(){if(this.list==null){this.loading=!0,this.list=[];const{url:o}=this.stateObj.attributes;this.hass.fetchWithAuth("/api/feedreader",{method:"POST",body:JSON.stringify({url:o}),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{this.list=n}).finally(()=>{this.loading=!1})}let r="";if(this.index>=0&&this.list.length>0){const o=this.list[this.index];r=N`<mdui-dialog open fullscreen ${Zt(this.dialogRef)}
      headline="${o.title}">
      <span slot="description">
        ${o.updated}
      </span>
      <div class="content">
        ${Yi(hs.sanitize(o.content))}
      </div>
      <mdui-bottom-app-bar ${Zt(this.appBarRef)} scroll-behavior="hide" scroll-threshold="30">
          <span>${this.index+1}/${this.list.length}</span>
          <div style="flex-grow: 1"></div>
  
          <mdui-button-icon ?disabled=${this.index<=0} @click=${this._prevClick.bind(this)}>        
            <mdui-icon-arrow-back></mdui-icon-arrow-back>
          </mdui-button-icon>

          <mdui-button-icon ?disabled=${this.index>=this.list.length-1} @click=${this._nextClick.bind(this)}>
            <mdui-icon-arrow-forward></mdui-icon-arrow-forward>
          </mdui-button-icon>
  
          <mdui-button-icon @click=${this._closeClick.bind(this)}>
            <mdui-icon-close></mdui-icon-close>
          </mdui-button-icon>
  
      </mdui-bottom-app-bar>
  
    </mdui-dialog>`}return N`<ha-attributes .hass=${this.hass} .stateObj=${this.stateObj}></ha-attributes>

    ${this.loading?N`<div style="text-align: center;"><ha-circular-progress size="large" active></ha-circular-progress></div>`:""}
  
    ${this.list.map((o,n)=>N`<ha-list-item twoline
    ?activated=${n===this.selectIndex}
    @click=${()=>this._openClick(n)}>

    <span>${o.title}</span>
    <span slot="secondary">${o.updated}</span>       
    <span slot="graphic" >${n+1}</span>
    </ha-list-item>`)}
  
  
  ${r}`}_openClick(r){this.selectIndex=r,this.index=r,setTimeout(()=>{const o=this.appBarRef.value;o.scrollTarget=this.dialogRef.value.bodyRef.value},500)}_closeClick(){this.index=-1}goTop(){this.dialogRef.value.bodyRef.value.scrollTop=0}_prevClick(){this.index>0&&(this.index-=1),this.goTop()}_nextClick(){this.index<this.list.length-1&&(this.index+=1),this.goTop()}}window.customElements.define("feed-reader",Ua);
