var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,g=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=i}function j(){var e=m();if(T(e))return k(e);f=setTimeout(j,function(e){var n=t-(e-u);return g?d(n,i-(e-c)):n}(e))}function k(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function O(){var e=m(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:k(m())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const p=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{},y={feedbackForm:document.querySelector(".feedback-form")};y.feedbackForm.addEventListener("input",t((function(e){console.log("Input"),p[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(p))}),500)),y.feedbackForm.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.currentTarget.elements;""===t.value||""===n.value?alert("Увага! Всі поля мають бути заповнені."):(console.log(p),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"))})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state")),{email:t,message:n}=y.feedbackForm.elements;e&&(t.value=e.email||"",n.value=e.message||"")}();
//# sourceMappingURL=03-feedback.3f9fd21a.js.map
