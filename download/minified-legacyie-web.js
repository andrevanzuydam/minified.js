/^u/.test(typeof define)&&function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function w(a){return a!=g?""+a:""}function y(a){return"string"==typeof a}function t(a){return a&&a.nodeType}function L(a){return a}function G(a,b){l(a,function(a){a(b)})}function u(a,b){for(var c in a)b(c,a[c])}function E(a,b){var c=[];return l(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function s(a,b,c){var d=[];return a(b,function(a,e){l(c.call(b,a,e),function(a){d.push(a)})}),d}function n(a,b,c){return w(a).replace(b,c||"")}function l(a,b){if(C(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function T(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function q(a){return"function"==typeof a&&!a.item}function C(a){return a&&a.length!=g&&!y(a)&&!t(a)&&!q(a)&&a!==r}function U(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function H(a){return parseFloat(n(a,/^[^\d-]+/))}function I(a){return a.Nia=a.Nia||++V}function M(a,b){var c,d=[],e={};return l(a,function(a){l(b(a),function(a){e[c=I(a)]||(d.push(a),e[c]=!0)})}),d}function W(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function ba(a,b,c,d,e,f){return function(g,h){var i,j=g||r.event,k=!f,l=h||j.target||j.srcElement;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(p(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.preventDefault&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=!0),!i}}function N(a,b){l(b,function(a){a.element.detachEvent("on"+a.a,a.b)})}function Y(a){F?F.push(a):setTimeout(a,0)}function O(a){return s(l,a,function(a){return C(a)?O(a):(t(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function p(a,b,c){return q(a)?Y(a):new x(z(a,b,c))}function z(a,b,c){function d(a){return a=s(l,a,function b(a){return C(a)?s(l,a,b):a}),f?E(a,function(a){for(;a=a.parentNode;)if(a==f||c)return a==f}):a}function e(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var f,g,h,i;return b&&1!=(b=z(b)).length?M(b,function(b){return z(a,b,c)}):(f=b&&b[0],y(a)?1<(b=a.split(/\s*,\s*/)).length?M(b,function(a){return z(a,f,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?z(b[2],z(b[1],f),c):a!=(b=n(a,/^#/))?d(document.getElementById(b)):(g=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(h=document.getElementsByClassName&&i)?(f||document).getElementsByClassName(i):(f||document).getElementsByTagName(g||"*"),(g=h?g:i)&&(b=E(b,e(g,h?"tagName":"className"))),c?d(b):b):d(a))}function J(a,b){function c(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var d,e,f={},h=f;return q(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||y(a)&&(h=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(d=c(h[1],"tagName"),e=c(h[2],"className"),function(a){return 1==t(a)&&d(a)&&e(a)}):b?function(c){return p(a,b).find(c)!=g}:(p(a).each(function(a){f[I(a)]=!0}),function(a){return f[I(a)]})}function Z(a){var b=J(a);return function(a){return b(a)?g:!0}}function P(){function a(a,e){b==g&&(b=a,c=e,setTimeout(function(){G(d)},0))}var b,c,d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,q(d)?(f=d.apply($,c),f&&f.then?f.then(function(a){h(!0,[a])},function(a){h(!1,[a])}):h(!0,[f])):h(b,c)}catch(g){h(!1,[g])}}var h=P();return b==g?d.push(f):setTimeout(f,0),h};return a.error=function(a){return e(0,a)},a}function x(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var $,aa,g=null,r=this,Q={},R={},V=1,A={},F=/^[ic]/.test(document.readyState)?g:[],K={},S=0,v=!!document.all&&!document.addEventListener;return u({each:function(a){return l(this,a)},filter:function(a){return new x(E(this,a))},collect:function(a){return new x(s(l,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new x(E(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=q(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){l(this,function(a){v&&1==t(a)&&(l(z("*",a),function(a){N(0,A[a.Nia]),delete A[a.Nia]}),N(0,A[a.Nia]),delete A[a.Nia]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=t(b);return 1==c?s(l,b.childNodes,a):5>c?b.data:g}return s(l,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=J(d?g:b),f=d?b:c;return new x(M(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return p(a,this,b)},is:function(a){return!this.find(Z(a))},only:function(a){return new x(E(this,J(a)))},not:function(a){return new x(E(this,Z(a)))},get:function(a,b){var c,d,e,f=this,h=f[0];return h?y(a)?(c=/^(\W*)(.*)/.exec(n(a,/^%/,"@data-")),d=c[1],h=R[d]?R[d](this,c[2]):"$"==a?f.get("className"):"$$"==a?v?h.style.cssText:f.get("@style"):"$$slide"==a?f.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==f.get("$visibility")||"none"==f.get("$display")?0:"$$fade"==a?v?isNaN(f.get("$filter",!0))?1:f.get("$filter",!0)/100:isNaN(f.get("$opacity",!0))?1:f.get("$opacity",!0):1:"$$scrollX"==a?r.pageXOffset!=g?r.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft:"$$scrollY"==a?r.pageXOffset!=g?r.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:"$"==d?r.getComputedStyle?r.getComputedStyle(h,g).getPropertyValue(n(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(h.currentStyle||h.style)[n(c[2],/^float$/,"cssFloat")]:"@"==d?h.getAttribute(c[2]):h[c[2]],b?H(h):h):(e={},(C(a)?l:u)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){var c,d,e=this;return b!==$?(c=/^(\W*)(.*)/.exec(n(n(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),d=c[1],Q[d]?Q[d](this,c[2],b):"$$fade"==a?e.set({$visibility:b?"visible":"hidden"}).set(v?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?e.set({$visibility:b?"visible":"hidden",$overflow:"hidden",$height:/px/.test(b)?b:function(a,c,d){return W(p(d),b)}}):"$$show"==a?b?e.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):e.set({$display:"none"}):"$$"==a?v?e.set("$cssText",b):e.set("@style",b):l(this,function(e,f){var h=q(b)?b(p(e).get(a),f,e):b;"$"==d?c[2]?e.style[c[2]]=h:l(h&&h.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=e.className||"",d=n(c,RegExp("(^|\\s+)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==d)&&(d+=" "+b),e.className=n(d,/^\s+/g)}):"$$scrollX"==a?e.scroll(h,p(e).get("$$scrollY")):"$$scrollY"==a?e.scroll(p(e).get("$$scrollX"),h):"@"==d?h==g?e.removeAttribute(c[2]):e.setAttribute(c[2],h):e[c[2]]=h})):y(a)||q(a)?e.set("$",a):u(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){function e(a){C(a)?l(a,e):q(a)?e(a(c,d)):a!=g&&(a=t(a)?a:document.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),f=a)}var f;e(d&&!q(a)?O(a):a)})},fill:function(a){return this.each(function(a){p(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new x(O(this))},animate:function(a,b,c){var d,e=P(),f=this,g=s(l,this,function(b,d){var e,f=p(b),g={};return u(e=f.get(a),function(c,e){var h=a[c];g[c]=q(h)?h(e,d,b):"$$slide"==c?W(f,h):h}),f.dial(e,g,c)}),h=b||500;return e.stop=function(){return e(!1),d()},d=p.loop(function(a){G(g,a/h),a>=h&&(d(),e(!0,[f]))}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):H(a.split(",")[b])}var e=this,f=c||0,g=q(f)?f:function(a,b,c){return c*(b-a)*(f+(1-f)*c*(3-2*c))+a};return function(c){u(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":n(h,/-?[\d.]+/,w(g(H(f),H(h),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=!1;return b?(h.set(a),function(j){j!==i&&(f=(i=!0===j||!1===j?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f))}):h.toggle(n(a,/\b(?=\w)/g,"-"),n(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name||a.id,d=w(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)p(a.elements[c]).values(b);else!c||/ox|io/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:s(l,[b[c],d],L))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return q(b)?this.on(g,a,b,c,e):y(d)?this.on(a,b,c,g,d):this.each(function(f,g){l(a?z(a,f):f,function(a){l(w(b).split(/\s/),function(b){var f=n(b,/[?|]/),h=!!e&&("blur"==f||"focus"==f),i=ba(c,a,d,g,n(b,/[^?|]/g),e&&J(e,a));b={element:a,b:i,a:f,capture:h},(c.M=c.M||[]).push(b),v?(a.attachEvent("on"+b.a+(h?"in":""),i),f=I(a),(A[f]=A[f]||[]).push(b)):(a.addEventListener(f,i,h),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return q(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||p(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(g,a)},onFocus:function(a,b,c){return q(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(g,a,b)},onChange:function(a,b,c){return q(b)?this.each(function(d,e){p(d).on(a,v?"|propertychange |change |keyup |clicked":"|input |change |clicked",function(){var a,c=this[0];a=v&&/select/i.test(c.tagName)?c.options[c.selectedIndex].text:/ox|io/i.test(c.type)?c.checked:c.value,a!=c.NiaP&&b.call(this,c.NiaP=a,e)},c)}):this.onChange(g,a,b)},onClick:function(a,b,c,d){return q(b)?this.on(a,"click",b,c,d):this.onClick(g,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)l(v?A[e.Nia]:e.M,function(e){e.a==a&&(d=d||!e.b(b,c))}),e=e.parentNode})}},function(a,b){x.prototype[a]=b}),u({request:function(a,b,c,d){d=d||{};var e,f=0,h=P(),i=c&&c.constructor==d.constructor;try{h.xhr=e=r.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),h.stop=function(){e.abort()},i&&(c=s(u,c,function(a,b){return s(l,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,!0,d.user,d.pass),i&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u(d.headers,function(a,b){e.setRequestHeader(a,b)}),u(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?h(!0,[e.responseText,e]):h(!1,[e.status,e.responseText,e]))},e.send(c)}catch(j){f||h(!1,[0,g,w(j)])}return h},toJSON:function a(b){return b==g?""+b:y(b=b.valueOf())?'"'+n(b,/[\\\"\x00-\x1f\u2028\u2029]/g,T)+'"':C(b)?"["+s(l,b,a).join()+"]":"object"==typeof b?"{"+s(u,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":w(b)},parseJSON:r.JSON?r.JSON.parse:function(c){return c=n(c,/[\x00\xad\u0600-\uffff]/g,T),/^[[\],:{}\s]*$/.test(n(n(c,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+c+")"):void 0},ready:Y,loop:function(a){function b(a){u(K,function(b,c){c(a)}),S&&g(b)}function c(){return K[f]&&(delete K[f],S--),e}var d,e=0,f=V++,g=r.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return K[f]=function(b){d=d||b,a(e=b-d,c)},S++||g(b),c},off:function(a){l(a.M,function(a){v?(a.element.detachEvent("on"+a.a+(a.capture?"in":""),a.b),U(A[a.element.Nia],a)):(a.element.removeEventListener(a.a,a.b,a.capture),U(a.element.M,a))}),a.M=g}},function(a,b){p[a]=b}),v?(aa=function(){G(F),F=g},document.attachEvent("onreadystatechange",function(){/^[ic]/.test(document.readyState)&&aa()}),r.attachEvent("onload",aa)):document.addEventListener("DOMContentLoaded",function(){G(F),F=g},!1),r.c=function(){l(A,N)},{$:p,$$:function(a,b,c){return z(a,b,c)[0]},EE:function(a,b,c){return a=p(document.createElement(a)),C(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:x,getter:R,setter:Q}});