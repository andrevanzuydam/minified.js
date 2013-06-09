var j=!0,r=null,u=!1;if(/^u/.test(typeof define)){var H={};this.define=function(s,l){H[s]=l()};this.require=function(s){return H[s]}}define("minified",function(){function s(a){return"string"==typeof a}function l(a){return"function"==typeof a&&!a.item}function y(a){return a&&a.nodeType}function v(a){return a&&a.length!=r&&!s(a)&&!y(a)&&!l(a)}function w(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function f(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function F(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function z(a,b){var c=[];f(a,function(a,e){v(a=b(a,e))?f(a,function(a){c.push(a)}):a!=r&&c.push(a)});return c}function n(a,b,c){return(a!=r?""+a:"").replace(b,c||"")}function x(a){return parseFloat(n(a,/^[^\d-]+/))}function I(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:r},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function J(a){a()}function K(a){D?D.push(a):p.setTimeout(a,0)}function L(a,b,c,d){return function(){var e=q(A.createElement(a));v(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function G(){function a(a,e){b==r&&(b=a,c=e,p.setTimeout(function(){f(d,J)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(l(d)){var g=d.apply(r,c);g&&l(g.then)?g.then(function(a){k(j,[a])},function(a){k(u,[a])}):k(j,[g])}else k(b,c)}catch(f){k(u,[f])}}var k=G();b!=r?p.setTimeout(g,0):d.push(g);return k};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function q(a,b,c){return l(a)?K(a):new B(E(a,b,c))}function E(a,b,c){function d(a){a=function g(a){return v(a)?z(a,g):a}(a);return e?F(a,function(a){for(;a=a.parentNode;){if(a===e)return j;if(c)return u}}):a}var e;if(b&&1!=(b=E(b)).length)return z(b,function(b){return E(a,b,c)});e=b&&b[0];if(!s(a))return d(v(a)?a:[a]);b=(e||A).querySelectorAll(a);return e?d(b):b}function B(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var p=this,A=document,D=[],C=[],M=z(["msR","webkitR","mozR","r"],function(a){return p[a+"equestAnimationFrame"]})[0]||function(a){p.setTimeout(a,33)};w({each:function(a){return f(this,a)},filter:function(a){return new B(F(this,a))},collect:function(a){return new B(z(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return new B(F(this,function(a,b){return b>=c&&b<d}))},find:function(a){for(var b,c=l(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if((b=c(this[d],d))!=r)return b},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:r})},remove:function(){f(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(s(a)){var e=n(a,/^[$@]/),m;m="$"==a?d.className:"$$"==a?d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(m=x(d.style.opacity))?1:m:"$$slide"==a?d.offsetHeight-c.get("$paddingTop",j)-c.get("$paddingBottom",j)+"px":/^\$/.test(a)?p.getComputedStyle(d,r).getPropertyValue(n(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^@/.test(a)?d.getAttribute(e):d[e];return b?x(m):m}var h={};(v(a)?f:w)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=x(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:d}:{$height:/px$/.test(b)?b:function(a,b,c){return d*(d&&I(q(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=n(a,/^[@$]/),g=c.className||"",k=/^\$/.test(a)?c.style:c,t=l(b)?b(q(c).get(a),d,c):b;"$"==a?t!=r&&(f(t.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=g;g=n(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=n(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?t!=r?c.setAttribute("style",t):c.removeAttribute("style"):/^@/.test(a)?t!=r?k.setAttribute(h,t):k.removeAttribute(h):k[h]=t}):s(a)||l(a)?c.set("$",a):w(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return f(this,function(c,d){var e;(function h(a){v(a)?f(a,h):l(a)?h(a(c,d)):a!=r&&(a=y(a)?a:A.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(y(a)&&d?r:a)})},fill:function(a){return f(this,function(a){q(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return new B(z(this,function(b){var c=y(b);if(1==c){var d={};f(b.attributes,function(a){var b=a.name;"id"!=b&&(d["@"+b]=a.value)});return L(b.tagName,d,q(b.childNodes).clone(),a)}return 5>c?b.data:r}))},animate:function(a,b,c,d){var e=this,m=[],h=/-?[\d.]+/,g,k=G(),t=l(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();k(u)};b=b||500;c=c||0;f(e,function(b){var c={a:q(b),c:{}};w(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*I(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?n(e.substr(2),h,x(d)+x(n(e,/\+?=/))):e});m.push(c)});g=q.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(n(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(m,function(a){a.a.set(a.c)}),g(),d.time=r,k(j,[e])):f(m,function(d){w(d.b,function(e,g){var k="rgb(",f=d.c[e],m=a/b;if(/^#|rgb\(/.test(f))for(var l=0;3>l;l++)k+=Math.round(t(c(g,l),c(f,l),m))+(2>l?",":")");else k=t(x(g),x(f),m),k=n(f,h,k!=r?""+k:"");d.a.set(e,k)})})});return k},toggle:function(a,b,c,d){var e=this,f={},h=u,g=/\b(?=\w)/g;return!b?e.toggle(n(a,g,"-"),n(a,g,"+")):e.set(a)&&function(g){g!==h&&(h=g===j||g===u?g:!h,c?e.animate(h?b:a,f.stop?f.stop()||f.time:c,d,f):e.set(h?b:a))}},on:function(a,b,c,d){return f(this,function(e,m){f(a.split(/\s/),function(a){function g(e){e=e||p.event;if((!b.apply(d?c:e.target,d||c||[e,m])||d)&&a==f)e.preventDefault(),e.stopPropagation()}var f=n(a,/\|/);(b.M=b.M||[]).push({e:e,h:g,n:f});e.addEventListener(f,g,j)})})}},function(a,b){B.prototype[a]=b});w({request:function(a,b,c,d,e,m){var h,g=c,k=0,l=G();try{h=new XMLHttpRequest;if(c!=r){d=d||{};if(!s(c)&&!y(c)){var n=function N(a,b){return v(b)?z(b,function(b){return N(a,b)}):encodeURIComponent(a)+(b!=r?"="+encodeURIComponent(b):"")},p=[];w(c,function(a,b){v(a=n(a,b))?f(a,function(a){p.push(a)}):a!=r&&p.push(a)});g=p.join("&")}/post/i.test(a)?!y(c)&&!s(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=r)}h.open(a,b,j,e,m);w(d,function(a,b){h.setRequestHeader(a,b)});h.onreadystatechange=function(){4==h.readyState&&!k++&&(200==h.status?l(j,[h.responseText,h.responseXML]):l(u,[h.status,h.statusText,h.responseText]))};h.send(g);return l}catch(q){k||l(u,[0,r,q!=r?""+q:""])}},toJSON:p.JSON&&JSON.stringify,parseJSON:p.JSON&&JSON.parse,ready:K,setCookie:function(a,b,c,d,e,f){A.cookie=a+"="+(f?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(A.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={d:a,f:(new Date).getTime(),b:function(){for(var a=0;a<C.length;a++)C[a]===b&&C.splice(a--,1)}};2>C.push(b)&&function d(){f(C,function(a){a.d(Math.max(0,(new Date).getTime()-a.f),a.b)}).length&&M(d)}();return b.b},off:function(a){f(a.M,function(a){a.e.removeEventListener(a.n,a.h,j)});a.M=r}},function(a,b){q[a]=b});A.addEventListener("DOMContentLoaded",function(){f(D,J);D=r},u);return{$:q,$$:function(a){return E(a)[0]},EE:L}});