function _(){}function me(e,t){for(const n in t)e[n]=t[n];return e}function pe(e){return e&&typeof e=="object"&&typeof e.then=="function"}function I(e){return e()}function z(){return Object.create(null)}function p(e){e.forEach(I)}function H(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function O(e,...t){if(e==null)return _;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(e){let t;return O(e,n=>t=n)(),t}function Rt(e,t,n){e.$$.on_destroy.push(O(t,n))}function Nt(e,t,n,u){if(e){const r=Z(e,t,n,u);return e[0](r)}}function Z(e,t,n,u){return e[1]&&u?me(n.ctx.slice(),e[1](u(t))):n.ctx}function Mt(e,t,n,u){if(e[2]&&u){const r=e[2](u(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(t.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=t.dirty[s]|r[s];return l}return t.dirty|r}return t.dirty}function Ut(e,t,n,u,r,l){if(r){const o=Z(t,n,u,l);e.p(o,r)}}function It(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let u=0;u<n;u++)t[u]=-1;return t}return-1}let S=!1;function Ae(){S=!0}function ke(){S=!1}function Se(e,t,n,u){for(;e<t;){const r=e+(t-e>>1);n(r)<=u?e=r+1:t=r}return e}function we(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let c=0;c<t.length;c++){const a=t[c];a.claim_order!==void 0&&i.push(a)}t=i}const n=new Int32Array(t.length+1),u=new Int32Array(t.length);n[0]=-1;let r=0;for(let i=0;i<t.length;i++){const c=t[i].claim_order,a=(r>0&&t[n[r]].claim_order<=c?r+1:Se(1,r,d=>t[n[d]].claim_order,c))-1;u[i]=n[a]+1;const f=a+1;n[f]=i,r=Math.max(f,r)}const l=[],o=[];let s=t.length-1;for(let i=n[r]+1;i!=0;i=u[i-1]){for(l.push(t[i-1]);s>=i;s--)o.push(t[s]);s--}for(;s>=0;s--)o.push(t[s]);l.reverse(),o.sort((i,c)=>i.claim_order-c.claim_order);for(let i=0,c=0;i<o.length;i++){for(;c<l.length&&o[i].claim_order>=l[c].claim_order;)c++;const a=c<l.length?l[c]:null;e.insertBefore(o[i],a)}}function Ee(e,t){if(S){for(we(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function je(e,t,n){e.insertBefore(t,n||null)}function ve(e,t,n){S&&!n?Ee(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function zt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function D(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function Ht(){return T(" ")}function Zt(){return T("")}function Dt(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function Wt(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Gt(e){return e===""?null:+e}function $e(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function G(e,t,n,u,r=!1){W(e);const l=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const s=e[o];if(t(s)){const i=n(s);return i===void 0?e.splice(o,1):e[o]=i,r||(e.claim_info.last_index=o),s}}for(let o=e.claim_info.last_index-1;o>=0;o--){const s=e[o];if(t(s)){const i=n(s);return i===void 0?e.splice(o,1):e[o]=i,r?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,s}}return u()})();return l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,l}function Oe(e,t,n,u){return G(e,r=>r.nodeName===t,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>u(t))}function Pt(e,t,n){return Oe(e,t,n,D)}function Te(e,t){return G(e,n=>n.nodeType===3,n=>{const u=""+t;if(n.data.startsWith(u)){if(n.data.length!==u.length)return n.splitText(u.length)}else n.data=u},()=>T(t),!0)}function qt(e){return Te(e," ")}function P(e,t,n){for(let u=n;u<e.length;u+=1){const r=e[u];if(r.nodeType===8&&r.textContent.trim()===t)return u}return e.length}function Bt(e){const t=P(e,"HTML_TAG_START",0),n=P(e,"HTML_TAG_END",t);if(t===n)return new q;W(e);const u=e.splice(t,n+1);w(u[0]),w(u[u.length-1]);const r=u.slice(1,u.length-1);for(const l of r)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new q(r)}function Ft(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Jt(e,t){e.value=t==null?"":t}function Yt(e,t,n){e.classList[n?"add":"remove"](t)}function Vt(e,t=document.body){return Array.from(t.querySelectorAll(e))}class Ce{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,n,u=null){this.e||(this.e=D(n.nodeName),this.t=n,this.c(t)),this.i(u)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)je(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(w)}}class q extends Ce{constructor(t){super();this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)ve(this.t,this.n[n],t)}}let E;function x(e){E=e}function A(){if(!E)throw new Error("Function called outside component initialization");return E}function Kt(e){A().$$.on_mount.push(e)}function Qt(e){A().$$.after_update.push(e)}function Xt(e,t){A().$$.context.set(e,t)}function en(e){return A().$$.context.get(e)}const k=[],B=[],j=[],F=[],Le=Promise.resolve();let C=!1;function Re(){C||(C=!0,Le.then(M))}function L(e){j.push(e)}let R=!1;const N=new Set;function M(){if(!R){R=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];x(t),Ne(t.$$)}for(x(null),k.length=0;B.length;)B.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];N.has(t)||(N.add(t),t())}j.length=0}while(k.length);for(;F.length;)F.pop()();C=!1,R=!1,N.clear()}}function Ne(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const v=new Set;let b;function Me(){b={r:0,c:[],p:b}}function Ue(){b.r||p(b.c),b=b.p}function J(e,t){e&&e.i&&(v.delete(e),e.i(t))}function Ie(e,t,n,u){if(e&&e.o){if(v.has(e))return;v.add(e),b.c.push(()=>{v.delete(e),u&&(n&&e.d(1),u())}),e.o(t)}}function tn(e,t){const n=t.token={};function u(r,l,o,s){if(t.token!==n)return;t.resolved=s;let i=t.ctx;o!==void 0&&(i=i.slice(),i[o]=s);const c=r&&(t.current=r)(i);let a=!1;t.block&&(t.blocks?t.blocks.forEach((f,d)=>{d!==l&&f&&(Me(),Ie(f,1,1,()=>{t.blocks[d]===f&&(t.blocks[d]=null)}),Ue())}):t.block.d(1),c.c(),J(c,1),c.m(t.mount(),t.anchor),a=!0),t.block=c,t.blocks&&(t.blocks[l]=c),a&&M()}if(pe(e)){const r=A();if(e.then(l=>{x(r),u(t.then,1,t.value,l),x(null)},l=>{if(x(r),u(t.catch,2,t.error,l),x(null),!t.hasCatch)throw l}),t.current!==t.pending)return u(t.pending,0),!0}else{if(t.current!==t.then)return u(t.then,1,t.value,e),!0;t.resolved=e}}function nn(e,t,n){const u=t.slice(),{resolved:r}=e;e.current===e.then&&(u[e.value]=r),e.current===e.catch&&(u[e.error]=r),e.block.p(u,n)}function un(e,t){const n={},u={},r={$$scope:1};let l=e.length;for(;l--;){const o=e[l],s=t[l];if(s){for(const i in o)i in s||(u[i]=1);for(const i in s)r[i]||(n[i]=s[i],r[i]=1);e[l]=s}else for(const i in o)r[i]=1}for(const o in u)o in n||(n[o]=void 0);return n}function rn(e){return typeof e=="object"&&e!==null?e:{}}function cn(e){e&&e.c()}function on(e,t){e&&e.l(t)}function ze(e,t,n,u){const{fragment:r,on_mount:l,on_destroy:o,after_update:s}=e.$$;r&&r.m(t,n),u||L(()=>{const i=l.map(I).filter(H);o?o.push(...i):p(i),e.$$.on_mount=[]}),s.forEach(L)}function He(e,t){const n=e.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(e,t){e.$$.dirty[0]===-1&&(k.push(e),Re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function sn(e,t,n,u,r,l,o,s=[-1]){const i=E;x(e);const c=e.$$={fragment:null,ctx:null,props:l,update:_,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:z(),dirty:s,skip_bound:!1,root:t.target||i.$$.root};o&&o(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(f,d,...h)=>{const m=h.length?h[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),a&&Ze(e,f)),d}):[],c.update(),a=!0,p(c.before_update),c.fragment=u?u(c.ctx):!1,t.target){if(t.hydrate){Ae();const f=$e(t.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();t.intro&&J(e.$$.fragment),ze(e,t.target,t.anchor,t.customElement),ke(),M()}x(i)}class ln{$destroy(){He(this,1),this.$destroy=_}$on(t,n){const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const r=u.indexOf(n);r!==-1&&u.splice(r,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const g=[];function De(e,t){return{subscribe:We(e,t).subscribe}}function We(e,t=_){let n;const u=new Set;function r(s){if(ge(e,s)&&(e=s,n)){const i=!g.length;for(const c of u)c[1](),g.push(c,e);if(i){for(let c=0;c<g.length;c+=2)g[c][0](g[c+1]);g.length=0}}}function l(s){r(s(e))}function o(s,i=_){const c=[s,i];return u.add(c),u.size===1&&(n=t(r)||_),s(e),()=>{u.delete(c),u.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:o}}function fn(e,t,n){const u=!Array.isArray(e),r=u?[e]:e,l=t.length<2;return De(n,o=>{let s=!1;const i=[];let c=0,a=_;const f=()=>{if(c)return;a();const h=t(u?i[0]:i,o);l?o(h):a=H(h)?h:_},d=r.map((h,m)=>O(h,be=>{i[m]=be,c&=~(1<<m),s&&f()},()=>{c|=1<<m}));return s=!0,f(),function(){p(d),a()}})}var $=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ge=1/0,Pe="[object Symbol]",qe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y="\\ud800-\\udfff",Fe="\\u0300-\\u036f\\ufe20-\\ufe23",Je="\\u20d0-\\u20f0",V="\\u2700-\\u27bf",K="a-z\\xdf-\\xf6\\xf8-\\xff",Ye="\\xac\\xb1\\xd7\\xf7",Ve="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ke="\\u2000-\\u206f",Qe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="A-Z\\xc0-\\xd6\\xd8-\\xde",Xe="\\ufe0e\\ufe0f",X=Ye+Ve+Ke+Qe,U="['\u2019]",ee="["+X+"]",te="["+Fe+Je+"]",ne="\\d+",et="["+V+"]",ue="["+K+"]",re="[^"+Y+X+ne+V+K+Q+"]",tt="\\ud83c[\\udffb-\\udfff]",nt="(?:"+te+"|"+tt+")",ut="[^"+Y+"]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ce="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+Q+"]",rt="\\u200d",oe="(?:"+ue+"|"+re+")",it="(?:"+y+"|"+re+")",se="(?:"+U+"(?:d|ll|m|re|s|t|ve))?",le="(?:"+U+"(?:D|LL|M|RE|S|T|VE))?",fe=nt+"?",ae="["+Xe+"]?",ct="(?:"+rt+"(?:"+[ut,ie,ce].join("|")+")"+ae+fe+")*",ot=ae+fe+ct,st="(?:"+[et,ie,ce].join("|")+")"+ot,lt=RegExp(U,"g"),ft=RegExp(te,"g"),at=RegExp([y+"?"+ue+"+"+se+"(?="+[ee,y,"$"].join("|")+")",it+"+"+le+"(?="+[ee,y+oe,"$"].join("|")+")",y+"?"+oe+"+"+se,y+"+"+le,ne,st].join("|"),"g"),dt=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ht={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},_t=typeof $=="object"&&$&&$.Object===Object&&$,xt=typeof self=="object"&&self&&self.Object===Object&&self,bt=_t||xt||Function("return this")();function mt(e,t,n,u){var r=-1,l=e?e.length:0;for(u&&l&&(n=e[++r]);++r<l;)n=t(n,e[r],r,e);return n}function pt(e){return e.match(qe)||[]}function gt(e){return function(t){return e==null?void 0:e[t]}}var yt=gt(ht);function At(e){return dt.test(e)}function kt(e){return e.match(at)||[]}var St=Object.prototype,wt=St.toString,de=bt.Symbol,he=de?de.prototype:void 0,_e=he?he.toString:void 0;function Et(e){if(typeof e=="string")return e;if($t(e))return _e?_e.call(e):"";var t=e+"";return t=="0"&&1/e==-Ge?"-0":t}function jt(e){return function(t){return mt(Ct(Ot(t).replace(lt,"")),e,"")}}function vt(e){return!!e&&typeof e=="object"}function $t(e){return typeof e=="symbol"||vt(e)&&wt.call(e)==Pe}function xe(e){return e==null?"":Et(e)}function Ot(e){return e=xe(e),e&&e.replace(Be,yt).replace(ft,"")}var Tt=jt(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});function Ct(e,t,n){return e=xe(e),t=n?void 0:t,t===void 0?At(e)?kt(e):pt(e):e.match(t)||[]}var an=Tt;function dn(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}export{$,Kt as A,me as B,We as C,nn as D,Nt as E,Vt as F,Ee as G,Ut as H,It as I,Mt as J,zt as K,tn as L,_ as M,an as N,Yt as O,en as P,q as Q,Bt as R,ln as S,fn as T,Lt as U,dn as V,Jt as W,Dt as X,Gt as Y,p as Z,Rt as _,$e as a,Wt as b,Pt as c,w as d,D as e,ve as f,Te as g,Ft as h,sn as i,cn as j,Ht as k,Zt as l,on as m,qt as n,ze as o,un as p,rn as q,Me as r,ge as s,T as t,Ie as u,He as v,Ue as w,J as x,Xt as y,Qt as z};
