var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".js-conteiner");function l(e,n){e.textContent=n}function c(e,n,t){return new Promise(((o,r)=>{const i=Math.random()>.5;setTimeout((()=>{i?o(e):r(n)}),t)}))}document.querySelector(".js-start").addEventListener("click",(function(){const e=[],n=i.children.length;for(let t=0;t<n;t+=1){const o=i.children[t];o.textContent="",c("😎","😡",500*t).then((n=>{l(o,n),e.push(1)})).catch((n=>{l(o,n),e.push(0)})).finally((()=>{setTimeout((()=>{if(e.length===n){e.every((e=>e))?r.Notify.success("Winner"):r.Notify.failure("loser")}}),100)}))}}));
//# sourceMappingURL=02-timer.8658c845.js.map
