var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,c=f||s||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return c.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=r.test(e);return f||l.test(e)?u(e.slice(2),f?2:8):a.test(e)?i:+e}t=function(e,t,i){var o=!0,a=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),function(e,t,i){var o,a,r,l,u,f,s=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=o,i=a;return o=a=void 0,s=t,l=e.apply(i,n)}function j(e){var n=e-f,i=e-s;return void 0===f||n>=t||n<0||m&&i>=r}function S(){var e,n,i,o=v();if(j(o))return w(o);u=setTimeout(S,(e=o-f,n=o-s,i=t-e,m?g(i,r-n):i))}function w(e){return(u=void 0,b&&o)?h(e):(o=a=void 0,l)}function O(){var e,n=v(),i=j(n);if(o=arguments,a=this,f=n,i){if(void 0===u)return s=e=f,u=setTimeout(S,t),c?h(e):l;if(m)return u=setTimeout(S,t),h(f)}return void 0===u&&(u=setTimeout(S,t)),l}return t=y(t)||0,p(i)&&(c=!!i.leading,r=(m="maxWait"in i)?d(y(i.maxWait)||0,t):r,b="trailing"in i?!!i.trailing:b),O.cancel=function(){void 0!==u&&clearTimeout(u),s=0,o=f=a=u=void 0},O.flush=function(){return void 0===u?l:w(v())},O}(e,t,{leading:o,maxWait:t,trailing:a})};const b=document.querySelector(".feedback-form"),h={email:b.querySelector('input[name="email"]'),message:b.querySelector('textarea[name="message"]')},j="feedback-form-state",S={},w=localStorage.getItem(j);window.addEventListener("load",function(){if(null!==w)try{let e=JSON.parse(w);(function({email:e,message:t}){h.email.value=e,h.message.value=t})(e)}catch(e){console.log(e.name),console.log(e.message),console.log("We apologise, there is no stored data or the stored data has been corrupted. Please, fill out the form again.")}}),b.addEventListener("input",function(){S.email=h.email.value.trim(),S.message=h.message.value.trim(),O()}),b.addEventListener("submit",function(e){if(e.preventDefault(),""===h.email.value||""===h.message.value){alert("Please fill in all the fields!");let e=""===h.email.value?h.email:h.message;e.focus();return}console.log(S),localStorage.removeItem(j),b.reset()});const O=(function(e){return e&&e.__esModule?e.default:e})(t)(function(){localStorage.setItem(j,JSON.stringify(S))},500);
//# sourceMappingURL=03-feedback.5cfb493b.js.map