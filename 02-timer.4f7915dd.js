!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".js-conteiner");function u(e,n){e.textContent=n}document.querySelector(".js-start").addEventListener("click",(function(){for(var e=function(e){var o,c,f,l=i.children[e];l.textContent="",(o="😎",c="😡",f=500*e,new Promise((function(e,n){var t=Math.random()>.5;setTimeout((function(){t?e(o):n(c)}),f)}))).then((function(e){u(l,e),n.push(1)})).catch((function(e){u(l,e),n.push(0)})).finally((function(){setTimeout((function(){n.length===t&&(n.every((function(e){return e}))?r.Notify.success("Winner"):r.Notify.failure("loser"))}),100)}))},n=[],t=i.children.length,o=0;o<t;o+=1)e(o)}))}();
//# sourceMappingURL=02-timer.4f7915dd.js.map