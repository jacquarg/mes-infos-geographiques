(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

;//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
;(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/
;//     (c) 2012 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.
//
!function(e){"use strict";function t(e){e=e||{},this.phrases=e.phrases||{},this.currentLocale=e.locale||"en",this.allowMissing=!!e.allowMissing}function s(e){var t,n,r,i={};for(t in e)if(e.hasOwnProperty(t)){n=e[t];for(r in n)i[n[r]]=t}return i}function o(e){var t=/^\s+|\s+$/g;return e.replace(t,"")}function u(e,t,r){var i,s,u;return r!=null&&e?(s=e.split(n),u=s[f(t,r)]||s[0],i=o(u)):i=e,i}function a(e){var t=s(i);return t[e]||t.en}function f(e,t){return r[a(e)](t)}function l(e,t){for(var n in t)n!=="_"&&t.hasOwnProperty(n)&&(e=e.replace(new RegExp("%\\{"+n+"\\}","g"),t[n]));return e}function c(t){e.console&&e.console.warn&&e.console.warn("WARNING: "+t)}function h(e){var t={};for(var n in e)t[n]=e[n];return t}t.VERSION="0.2.0",t.prototype.locale=function(e){return e&&(this.currentLocale=e),this.currentLocale},t.prototype.extend=function(e){for(var t in e)e.hasOwnProperty(t)&&(this.phrases[t]=e[t])},t.prototype.clear=function(){this.phrases={}},t.prototype.replace=function(e){this.clear(),this.extend(e)},t.prototype.t=function(e,t){var n;t=t==null?{}:t,typeof t=="number"&&(t={smart_count:t});var r=this.phrases[e]||t._||(this.allowMissing?e:"");return r===""?(c('Missing translation for key: "'+e+'"'),n=e):(t=h(t),n=u(r,this.currentLocale,t.smart_count),n=l(n,t)),n};var n="||||",r={chinese:function(e){return 0},german:function(e){return e!==1?1:0},french:function(e){return e>1?1:0},russian:function(e){return e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},czech:function(e){return e===1?0:e>=2&&e<=4?1:2},polish:function(e){return e===1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},icelandic:function(e){return e%10!==1||e%100===11?1:0}},i={chinese:["id","ja","ko","ms","th","tr","zh"],german:["da","de","en","es","fi","el","he","hu","it","nl","no","pt","sv"],french:["fr","tl"],russian:["hr","ru"],czech:["cs"],polish:["pl"],icelandic:["is"]};typeof module!="undefined"&&module.exports?module.exports=t:e.Polyglot=t}(this);
;/*
 * heatmap.js 1.0 -    JavaScript Heatmap Library
 *
 * Copyright (c) 2011, Patrick Wied (http://www.patrick-wied.at)
 * Dual-licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and the Beerware (http://en.wikipedia.org/wiki/Beerware) license.
 */

(function(w){
    // the heatmapFactory creates heatmap instances
    var heatmapFactory = (function(){

    // store object constructor
    // a heatmap contains a store
    // the store has to know about the heatmap in order to trigger heatmap updates when datapoints get added
    var store = function store(hmap){

        var _ = {
            // data is a two dimensional array
            // a datapoint gets saved as data[point-x-value][point-y-value]
            // the value at [point-x-value][point-y-value] is the occurrence of the datapoint
            data: [],
            // tight coupling of the heatmap object
            heatmap: hmap
        };
        // the max occurrence - the heatmaps radial gradient alpha transition is based on it
        this.max = 1;

        this.get = function(key){
            return _[key];
        };
        this.set = function(key, value){
            _[key] = value;
        };
    }

    store.prototype = {
        // function for adding datapoints to the store
        // datapoints are usually defined by x and y but could also contain a third parameter which represents the occurrence
        addDataPoint: function(x, y){
            if(x < 0 || y < 0)
                return;

            var me = this,
                heatmap = me.get("heatmap"),
                data = me.get("data");

            if(!data[x])
                data[x] = [];

            if(!data[x][y])
                data[x][y] = 0;

            // if count parameter is set increment by count otherwise by 1
            data[x][y]+=(arguments.length<3)?1:arguments[2];
            
            me.set("data", data);
            // do we have a new maximum?
            if(me.max < data[x][y]){
                // max changed, we need to redraw all existing(lower) datapoints
                heatmap.get("actx").clearRect(0,0,heatmap.get("width"),heatmap.get("height"));
                me.setDataSet({ max: data[x][y], data: data }, true);
                return;
            }
            heatmap.drawAlpha(x, y, data[x][y], true);
        },
        setDataSet: function(obj, internal){
            var me = this,
                heatmap = me.get("heatmap"),
                data = [],
                d = obj.data,
                dlen = d.length;
            // clear the heatmap before the data set gets drawn
            heatmap.clear();
            this.max = obj.max;
            // if a legend is set, update it
            heatmap.get("legend") && heatmap.get("legend").update(obj.max);
            
            if(internal != null && internal){
                for(var one in d){
                    // jump over undefined indexes
                    if(one === undefined)
                        continue;
                    for(var two in d[one]){
                        if(two === undefined)
                            continue;
                        // if both indexes are defined, push the values into the array
                        heatmap.drawAlpha(one, two, d[one][two], false);   
                    }
                }
            }else{
                while(dlen--){
                    var point = d[dlen];
                    heatmap.drawAlpha(point.x, point.y, point.count, false);
                    if(!data[point.x])
                        data[point.x] = [];

                    if(!data[point.x][point.y])
                        data[point.x][point.y] = 0;

                    data[point.x][point.y] = point.count;
                }
            }
            heatmap.colorize();
            this.set("data", d);
        },
        exportDataSet: function(){
            var me = this,
                data = me.get("data"),
                exportData = [];

            for(var one in data){
                // jump over undefined indexes
                if(one === undefined)
                    continue;
                for(var two in data[one]){
                    if(two === undefined)
                        continue;
                    // if both indexes are defined, push the values into the array
                    exportData.push({x: parseInt(one, 10), y: parseInt(two, 10), count: data[one][two]});
                }
            }

            return { max: me.max, data: exportData };
        },
        generateRandomDataSet: function(points){
            var heatmap = this.get("heatmap"),
            w = heatmap.get("width"),
            h = heatmap.get("height");
            var randomset = {},
            max = Math.floor(Math.random()*1000+1);
            randomset.max = max;
            var data = [];
            while(points--){
                data.push({x: Math.floor(Math.random()*w+1), y: Math.floor(Math.random()*h+1), count: Math.floor(Math.random()*max+1)});
            }
            randomset.data = data;
            this.setDataSet(randomset);
        }
    };

    var legend = function legend(config){
        this.config = config;

        var _ = {
            element: null,
            labelsEl: null,
            gradientCfg: null,
            ctx: null
        };
        this.get = function(key){
            return _[key];
        };
        this.set = function(key, value){
            _[key] = value;
        };
        this.init();
    };
    legend.prototype = {
        init: function(){
            var me = this,
                config = me.config,
                title = config.title || "Legend",
                position = config.position,
                offset = config.offset || 10,
                gconfig = config.gradient,
                labelsEl = document.createElement("ul"),
                labelsHtml = "",
                grad, element, gradient, positionCss = "";
 
            me.processGradientObject();
            
            // Positioning

            // top or bottom
            if(position.indexOf('t') > -1){
                positionCss += 'top:'+offset+'px;';
            }else{
                positionCss += 'bottom:'+offset+'px;';
            }

            // left or right
            if(position.indexOf('l') > -1){
                positionCss += 'left:'+offset+'px;';
            }else{
                positionCss += 'right:'+offset+'px;';
            }

            element = document.createElement("div");
            element.style.cssText = "border-radius:5px;position:absolute;"+positionCss+"font-family:Helvetica; width:256px;z-index:10000000000; background:rgba(255,255,255,1);padding:10px;border:1px solid black;margin:0;";
            element.innerHTML = "<h3 style='padding:0;margin:0;text-align:center;font-size:16px;'>"+title+"</h3>";
            // create gradient in canvas
            labelsEl.style.cssText = "position:relative;font-size:12px;display:block;list-style:none;list-style-type:none;margin:0;height:15px;";
            

            // create gradient element
            gradient = document.createElement("div");
            gradient.style.cssText = ["position:relative;display:block;width:256px;height:15px;border-bottom:1px solid black; background-image:url(",me.createGradientImage(),");"].join("");

            element.appendChild(labelsEl);
            element.appendChild(gradient);
            
            me.set("element", element);
            me.set("labelsEl", labelsEl);

            me.update(1);
        },
        processGradientObject: function(){
            // create array and sort it
            var me = this,
                gradientConfig = this.config.gradient,
                gradientArr = [];

            for(var key in gradientConfig){
                if(gradientConfig.hasOwnProperty(key)){
                    gradientArr.push({ stop: key, value: gradientConfig[key] });
                }
            }
            gradientArr.sort(function(a, b){
                return (a.stop - b.stop);
            });
            gradientArr.unshift({ stop: 0, value: 'rgba(0,0,0,0)' });

            me.set("gradientArr", gradientArr);
        },
        createGradientImage: function(){
            var me = this,
                gradArr = me.get("gradientArr"),
                length = gradArr.length,
                canvas = document.createElement("canvas"),
                ctx = canvas.getContext("2d"),
                grad;
            // the gradient in the legend including the ticks will be 256x15px
            canvas.width = "256";
            canvas.height = "15";

            grad = ctx.createLinearGradient(0,5,256,10);

            for(var i = 0; i < length; i++){
                grad.addColorStop(1/(length-1) * i, gradArr[i].value);
            }

            ctx.fillStyle = grad;
            ctx.fillRect(0,5,256,10);
            ctx.strokeStyle = "black";
            ctx.beginPath();
 
            for(var i = 0; i < length; i++){
                ctx.moveTo(((1/(length-1)*i*256) >> 0)+.5, 0);
                ctx.lineTo(((1/(length-1)*i*256) >> 0)+.5, (i==0)?15:5);
            }
            ctx.moveTo(255.5, 0);
            ctx.lineTo(255.5, 15);
            ctx.moveTo(255.5, 4.5);
            ctx.lineTo(0, 4.5);
            
            ctx.stroke();

            // we re-use the context for measuring the legends label widths
            me.set("ctx", ctx);

            return canvas.toDataURL();
        },
        getElement: function(){
            return this.get("element");
        },
        update: function(max){
            var me = this,
                gradient = me.get("gradientArr"),
                ctx = me.get("ctx"),
                labels = me.get("labelsEl"),
                labelText, labelsHtml = "", offset;

            for(var i = 0; i < gradient.length; i++){

                labelText = max*gradient[i].stop >> 0;
                offset = (ctx.measureText(labelText).width/2) >> 0;

                if(i == 0){
                    offset = 0;
                }
                if(i == gradient.length-1){
                    offset *= 2;
                }
                labelsHtml += '<li style="position:absolute;left:'+(((((1/(gradient.length-1)*i*256) || 0)) >> 0)-offset+.5)+'px">'+labelText+'</li>';
            }       
            labels.innerHTML = labelsHtml;
        }
    };

    // heatmap object constructor
    var heatmap = function heatmap(config){
        // private variables
        var _ = {
            radius : 40,
            element : {},
            canvas : {},
            acanvas: {},
            ctx : {},
            actx : {},
            legend: null,
            visible : true,
            width : 0,
            height : 0,
            max : false,
            gradient : false,
            opacity: 180,
            premultiplyAlpha: false,
            bounds: {
                l: 1000,
                r: 0,
                t: 1000,
                b: 0
            },
            debug: false
        };
        // heatmap store containing the datapoints and information about the maximum
        // accessible via instance.store
        this.store = new store(this);

        this.get = function(key){
            return _[key];
        };
        this.set = function(key, value){
            _[key] = value;
        };
        // configure the heatmap when an instance gets created
        this.configure(config);
        // and initialize it
        this.init();
    };

    // public functions
    heatmap.prototype = {
        configure: function(config){
                var me = this,
                    rout, rin;

                me.set("radius", config["radius"] || 40);
                me.set("element", (config.element instanceof Object)?config.element:document.getElementById(config.element));
                me.set("visible", (config.visible != null)?config.visible:true);
                me.set("max", config.max || false);
                me.set("gradient", config.gradient || { 0.45: "rgb(0,0,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow", 1.0: "rgb(255,0,0)"});    // default is the common blue to red gradient
                me.set("opacity", parseInt(255/(100/config.opacity), 10) || 180);
                me.set("width", config.width || 0);
                me.set("height", config.height || 0);
                me.set("debug", config.debug);

                if(config.legend){
                    var legendCfg = config.legend;
                    legendCfg.gradient = me.get("gradient");
                    me.set("legend", new legend(legendCfg));
                }
                
        },
        resize: function () {
                var me = this,
                    element = me.get("element"),
                    canvas = me.get("canvas"),
                    acanvas = me.get("acanvas");
                canvas.width = acanvas.width = me.get("width") || element.style.width.replace(/px/, "") || me.getWidth(element);
                this.set("width", canvas.width);
                canvas.height = acanvas.height = me.get("height") || element.style.height.replace(/px/, "") || me.getHeight(element);
                this.set("height", canvas.height);
        },

        init: function(){
                var me = this,
                    canvas = document.createElement("canvas"),
                    acanvas = document.createElement("canvas"),
                    ctx = canvas.getContext("2d"),
                    actx = acanvas.getContext("2d"),
                    element = me.get("element");

                
                me.initColorPalette();

                me.set("canvas", canvas);
                me.set("ctx", ctx);
                me.set("acanvas", acanvas);
                me.set("actx", actx);

                me.resize();
                canvas.style.cssText = acanvas.style.cssText = "position:absolute;top:0;left:0;z-index:10000000;";
                
                if(!me.get("visible"))
                    canvas.style.display = "none";

                element.appendChild(canvas);
                if(me.get("legend")){
                    element.appendChild(me.get("legend").getElement());
                }
                
                // debugging purposes only
                if(me.get("debug"))
                    document.body.appendChild(acanvas);
                
                actx.shadowOffsetX = 15000; 
                actx.shadowOffsetY = 15000; 
                actx.shadowBlur = 15; 
        },
        initColorPalette: function(){

            var me = this,
                canvas = document.createElement("canvas"),
                gradient = me.get("gradient"),
                ctx, grad, testData;

            canvas.width = "1";
            canvas.height = "256";
            ctx = canvas.getContext("2d");
            grad = ctx.createLinearGradient(0,0,1,256);

            // Test how the browser renders alpha by setting a partially transparent pixel
            // and reading the result.  A good browser will return a value reasonably close
            // to what was set.  Some browsers (e.g. on Android) will return a ridiculously wrong value.
            testData = ctx.getImageData(0,0,1,1);
            testData.data[0] = testData.data[3] = 64; // 25% red & alpha
            testData.data[1] = testData.data[2] = 0; // 0% blue & green
            ctx.putImageData(testData, 0, 0);
            testData = ctx.getImageData(0,0,1,1);
            me.set("premultiplyAlpha", (testData.data[0] < 60 || testData.data[0] > 70));
            
            for(var x in gradient){
                grad.addColorStop(x, gradient[x]);
            }

            ctx.fillStyle = grad;
            ctx.fillRect(0,0,1,256);

            me.set("gradient", ctx.getImageData(0,0,1,256).data);
        },
        getWidth: function(element){
            var width = element.offsetWidth;
            if(element.style.paddingLeft){
                width+=element.style.paddingLeft;
            }
            if(element.style.paddingRight){
                width+=element.style.paddingRight;
            }

            return width;
        },
        getHeight: function(element){
            var height = element.offsetHeight;
            if(element.style.paddingTop){
                height+=element.style.paddingTop;
            }
            if(element.style.paddingBottom){
                height+=element.style.paddingBottom;
            }

            return height;
        },
        colorize: function(x, y){
                // get the private variables
                var me = this,
                    width = me.get("width"),
                    radius = me.get("radius"),
                    height = me.get("height"),
                    actx = me.get("actx"),
                    ctx = me.get("ctx"),
                    x2 = radius * 3,
                    premultiplyAlpha = me.get("premultiplyAlpha"),
                    palette = me.get("gradient"),
                    opacity = me.get("opacity"),
                    bounds = me.get("bounds"),
                    left, top, bottom, right, 
                    image, imageData, length, alpha, offset, finalAlpha;
                
                if(x != null && y != null){
                    if(x+x2>width){
                        x=width-x2;
                    }
                    if(x<0){
                        x=0;
                    }
                    if(y<0){
                        y=0;
                    }
                    if(y+x2>height){
                        y=height-x2;
                    }
                    left = x;
                    top = y;
                    right = x + x2;
                    bottom = y + x2;

                }else{
                    if(bounds['l'] < 0){
                        left = 0;
                    }else{
                        left = bounds['l'];
                    }
                    if(bounds['r'] > width){
                        right = width;
                    }else{
                        right = bounds['r'];
                    }
                    if(bounds['t'] < 0){
                        top = 0;
                    }else{
                        top = bounds['t'];
                    }
                    if(bounds['b'] > height){
                        bottom = height;
                    }else{
                        bottom = bounds['b'];
                    }    
                }

                image = actx.getImageData(left, top, right-left, bottom-top);
                imageData = image.data;
                length = imageData.length;
                // loop thru the area
                for(var i=3; i < length; i+=4){

                    // [0] -> r, [1] -> g, [2] -> b, [3] -> alpha
                    alpha = imageData[i],
                    offset = alpha*4;

                    if(!offset)
                        continue;

                    // we ve started with i=3
                    // set the new r, g and b values
                    finalAlpha = (alpha < opacity)?alpha:opacity;
                    imageData[i-3]=palette[offset];
                    imageData[i-2]=palette[offset+1];
                    imageData[i-1]=palette[offset+2];
                    
                    if (premultiplyAlpha) {
                    	// To fix browsers that premultiply incorrectly, we'll pass in a value scaled
                    	// appropriately so when the multiplication happens the correct value will result.
                    	imageData[i-3] /= 255/finalAlpha;
                    	imageData[i-2] /= 255/finalAlpha;
                    	imageData[i-1] /= 255/finalAlpha;
                    }
                    
                    // we want the heatmap to have a gradient from transparent to the colors
                    // as long as alpha is lower than the defined opacity (maximum), we'll use the alpha value
                    imageData[i] = finalAlpha;
                }
                // the rgb data manipulation didn't affect the ImageData object(defined on the top)
                // after the manipulation process we have to set the manipulated data to the ImageData object
                image.data = imageData;
                ctx.putImageData(image, left, top);
        },
        drawAlpha: function(x, y, count, colorize){
                // storing the variables because they will be often used
                var me = this,
                    radius = me.get("radius"),
                    ctx = me.get("actx"),
                    max = me.get("max"),
                    bounds = me.get("bounds"),
                    xb = x - (1.5 * radius) >> 0, yb = y - (1.5 * radius) >> 0,
                    xc = x + (1.5 * radius) >> 0, yc = y + (1.5 * radius) >> 0;

                ctx.shadowColor = ('rgba(0,0,0,'+((count)?(count/me.store.max):'0.1')+')');

                ctx.shadowOffsetX = 15000; 
                ctx.shadowOffsetY = 15000; 
                ctx.shadowBlur = 15; 

                ctx.beginPath();
                ctx.arc(x - 15000, y - 15000, radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                if(colorize){
                    // finally colorize the area
                    me.colorize(xb,yb);
                }else{
                    // or update the boundaries for the area that then should be colorized
                    if(xb < bounds["l"]){
                        bounds["l"] = xb;
                    }
                    if(yb < bounds["t"]){
                        bounds["t"] = yb;
                    }
                    if(xc > bounds['r']){
                        bounds['r'] = xc;
                    }
                    if(yc > bounds['b']){
                        bounds['b'] = yc;
                    }
                }
        },
        toggleDisplay: function(){
                var me = this,
                    visible = me.get("visible"),
                canvas = me.get("canvas");

                if(!visible)
                    canvas.style.display = "block";
                else
                    canvas.style.display = "none";

                me.set("visible", !visible);
        },
        // dataURL export
        getImageData: function(){
                return this.get("canvas").toDataURL();
        },
        clear: function(){
            var me = this,
                w = me.get("width"),
                h = me.get("height");

            me.store.set("data",[]);
            // @TODO: reset stores max to 1
            //me.store.max = 1;
            me.get("ctx").clearRect(0,0,w,h);
            me.get("actx").clearRect(0,0,w,h);
        },
        cleanup: function(){
            var me = this;
            me.get("element").removeChild(me.get("canvas"));
        }
    };

    return {
            create: function(config){
                return new heatmap(config);
            }, 
            util: {
                mousePosition: function(ev){
                    // this doesn't work right
                    // rather use
                    /*
                        // this = element to observe
                        var x = ev.pageX - this.offsetLeft;
                        var y = ev.pageY - this.offsetTop;

                    */
                    var x, y;

                    if (ev.layerX) { // Firefox
                        x = ev.layerX;
                        y = ev.layerY;
                    } else if (ev.offsetX) { // Opera
                        x = ev.offsetX;
                        y = ev.offsetY;
                    }
                    if(typeof(x)=='undefined')
                        return;

                    return [x,y];
                }
            }
        };
    })();
    w.h337 = w.heatmapFactory = heatmapFactory;
})(window);

;
jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

;/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
;/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
!function(t,e,i){var n=t.L,o={};o.version="0.7.2","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints&&!t.PointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled&&t.navigator.maxTouchPoints||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return s=e&&e.maxZoom?Math.min(e.maxZoom,s):s,this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("viewreset",{hard:!i}),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;
return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;i.width=i.height=e.detectRetina&&o.Browser.retina?2*n:n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i=o.point("shadow"===e?n.shadowAnchor||n.iconAnchor:n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())
},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):"",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&1e3>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!(t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.DomEvent.stopPropagation(t),o.Draggable._disabled||(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),o.DomUtil.addClass(t.target||t.srcElement,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(t){o.DomUtil.removeClass(e.body,"leaflet-dragging"),o.DomUtil.removeClass(t.target||t.srcElement,"leaflet-drag-target");for(var i in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[i],this._onMove).off(e,o.Draggable.END[i],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);
break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a){this._animatingZoom=!0,o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
;/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
!function(){"use strict";function t(i){return this instanceof t?(this._canvas=i="string"==typeof i?document.getElementById(i):i,this._ctx=i.getContext("2d"),this._width=i.width,this._height=i.height,this._max=1,void this.clear()):new t(i)}t.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,i){i=i||15;var a=this._circle=document.createElement("canvas"),e=a.getContext("2d"),s=this._r=t+i;return a.width=a.height=2*s,e.shadowOffsetX=e.shadowOffsetY=200,e.shadowBlur=i,e.shadowColor="black",e.beginPath(),e.arc(s-200,s-200,t,0,2*Math.PI,!0),e.closePath(),e.fill(),this},gradient:function(t){var i=document.createElement("canvas"),a=i.getContext("2d"),e=a.createLinearGradient(0,0,0,256);i.width=1,i.height=256;for(var s in t)e.addColorStop(s,t[s]);return a.fillStyle=e,a.fillRect(0,0,1,256),this._grad=a.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var i=this._ctx;i.clearRect(0,0,this._width,this._height);for(var a,e=0,s=this._data.length;s>e;e++)a=this._data[e],i.globalAlpha=Math.max(a[2]/this._max,t||.05),i.drawImage(this._circle,a[0]-this._r,a[1]-this._r);var n=i.getImageData(0,0,this._width,this._height);return this._colorize(n.data,this._grad),i.putImageData(n,0,0),this},_colorize:function(t,i){for(var a,e=3,s=t.length;s>e;e+=4)a=4*t[e],a&&(t[e-3]=i[a],t[e-2]=i[a+1],t[e-1]=i[a+2])}},window.simpleheat=t}(),/*
 (c) 2014, Vladimir Agafonkin
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/Leaflet/Leaflet.heat
*/
L.HeatLayer=L.Class.extend({initialize:function(t,i){this._latlngs=t,L.setOptions(this,i)},setLatLngs:function(t){return this._latlngs=t,this.redraw()},addLatLng:function(t){return this._latlngs.push(t),this.redraw()},setOptions:function(t){return L.setOptions(this,t),this._heat&&this._updateOptions(),this.redraw()},redraw:function(){return this._heat&&!this._frame&&(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this},onAdd:function(t){this._map=t,this._canvas||this._initCanvas(),t._panes.overlayPane.appendChild(this._canvas),t.on("moveend",this._reset,this),t.options.zoomAnimation&&L.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._canvas),t.off("moveend",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},_initCanvas:function(){var t=this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer"),i=this._map.getSize();t.width=i.x,t.height=i.y;var a=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(t,"leaflet-zoom-"+(a?"animated":"hide")),this._heat=simpleheat(t),this._updateOptions()},_updateOptions:function(){this._heat.radius(this.options.radius||this._heat.defaultRadius,this.options.blur),this.options.gradient&&this._heat.gradient(this.options.gradient),this.options.max&&this._heat.max(this.options.max)},_reset:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t);var i=this._map.getSize();this._heat._width!==i.x&&(this._canvas.width=this._heat._width=i.x),this._heat._height!==i.y&&(this._canvas.height=this._heat._height=i.y),this._redraw()},_redraw:function(){var t,i,a,e,s,n,h,o,r,d=[],_=this._heat._r,l=this._map.getSize(),m=new L.LatLngBounds(this._map.containerPointToLatLng(L.point([-_,-_])),this._map.containerPointToLatLng(l.add([_,_]))),c=void 0===this.options.maxZoom?this._map.getMaxZoom():this.options.maxZoom,u=1/Math.pow(2,Math.max(0,Math.min(c-this._map.getZoom(),12))),g=_/2,f=[],p=this._map._getMapPanePos(),v=p.x%g,w=p.y%g;for(t=0,i=this._latlngs.length;i>t;t++)m.contains(this._latlngs[t])&&(a=this._map.latLngToContainerPoint(this._latlngs[t]),s=Math.floor((a.x-v)/g)+2,n=Math.floor((a.y-w)/g)+2,r=(this._latlngs[t].alt||1)*u,f[n]=f[n]||[],e=f[n][s],e?(e[0]=(e[0]*e[2]+a.x*r)/(e[2]+r),e[1]=(e[1]*e[2]+a.y*r)/(e[2]+r),e[2]+=r):f[n][s]=[a.x,a.y,r]);for(t=0,i=f.length;i>t;t++)if(f[t])for(h=0,o=f[t].length;o>h;h++)e=f[t][h],e&&d.push([Math.round(e[0]),Math.round(e[1]),Math.min(e[2],1)]);this._heat.data(d).draw(),this._frame=null},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),a=this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());this._canvas.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(a)+" scale("+i+")"}}),L.heatLayer=function(t,i){return new L.HeatLayer(t,i)};
;/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);
;﻿/**
* @preserve CanvasJS HTML5 & JavaScript Charts - v1.3.0 GA - http://canvasjs.com/ 
* Copyright 2013 fenopix
*/

/*
* CanvasJS Charts follows Dual Licensing Model as mentioned below. 
* 
* ---------------------Free for Non-Commercial Use--------------------
* 
* For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License. Refer to the following link for further details on the same.
*     http://creativecommons.org/licenses/by-nc/3.0/deed.en_US
* 
* ---------------------Commercial License--------------------
* Commercial use of CanvasJS requires you to purchase a license. Without a commercial license you can use it for evaluation purposes only. Please refer to the following link for further details.
*     http://canvasjs.com/
* 
*/

/* jshint -W099 */ //Ignore warning "Mixed Spaces and Tabs"

(function () {

	var isDebugMode = false;

	var isCanvasSupported = !!document.createElement("canvas").getContext;
	//isCanvasSupported = false;

	//Default values for all Chart Elements that can be set by the user. CanvasJSObject.setOptions looks into this while setting the default/user-defined values.
	var defaultOptions = {
		Chart: {
			width: 500,
			height: 400,
			zoomEnabled: false,
			backgroundColor: "white",
			theme: "theme1",
			animationEnabled: isCanvasSupported ? true : false,
			colorSet: "colorSet1",
			culture: "en",
			creditHref: "http://canvasjs.com/",
			creditText: "CanvasJS.com"
		},

		CultureInfo: {
			decimalSeparator: ".",
			digitGroupSeparator: ",",
			zoomText: "Zoom",
			panText: "Pan",
			resetText: "Reset",
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},

		Title: {
			padding: 0,
			text: null,
			verticalAlign: "top",//top, center, bottom
			horizontalAlign: "center",//left, center, right
			fontSize: 20,//in pixels
			fontFamily: "Calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			margin: 5
			//toolTipContent: null//string - To be implemented (TBI)
		},
		DataSeries: {
			name: null,
			dataPoints: null,
			label: "",
			bevelEnabled: false,

			cursor: null,

			indexLabel: "",
			indexLabelPlacement: "outside",  //inside, outside       
			indexLabelOrientation: "horizontal",
			indexLabelFontColor: "black",
			indexLabelFontSize: 12,
			indexLabelFontStyle: "normal", //   italic ,oblique, normal 
			indexLabelFontFamily: "Arial", 	// fx: Arial Verdana "Courier New" Serif 
			indexLabelFontWeight: "normal", 	// bold ,bolder, lighter, normal 
			indexLabelBackgroundColor: null,
			indexLabelLineColor: null,
			indexLabelLineThickness: 1,
			indexLabelMaxWidth: null,
			indexLabelWrap: true,

			lineThickness: 2,

			color: null,

			startAngle: 0,

			type: "column", //line, column, bar, area, scatter stackedColumn, stackedBar, stackedArea, stackedColumn100, stackedBar100, stackedArea100, pie, doughnut
			xValueType: "number", //number, dateTime
			axisYType: "primary",

			xValueFormatString: null,
			yValueFormatString: null,

			showInLegend: null,
			legendMarkerType: null,
			legendMarkerColor: null,
			legendText: null,

			markerType: "circle", //none, circle, square, cross, triangle, line
			markerColor: null,
			markerSize: null,
			markerBorderColor: null,
			markerBorderThickness: null,
			//animationEnabled: true,
			mouseover: null,
			mouseout: null,
			mousemove: null,
			click: null,
			toolTipContent: null
		},

		Axis: {
			minimum: null, //Minimum value to be shown on the Axis
			maximum: null, //Minimum value to be shown on the Axis
			interval: null, // Interval for tick marks and grid lines
			intervalType: null, //number, millisecond, second, minute, hour, day, month, year

			title: null, // string
			titleFontColor: "black",
			titleFontSize: 20,
			titleFontFamily: "arial",
			titleFontWeight: "normal",
			titleFontStyle: "normal",

			labelAngle: 0,
			labelFontFamily: "arial",
			labelFontColor: "black",
			labelFontSize: 12,
			labelFontWeight: "normal",
			labelFontStyle: "normal",
			labelAutoFit: false,
			labelWrap: true,
			labelMaxWidth: null,//null for auto

			prefix: "",
			suffix: "",

			includeZero: true, //Applies only for axisY. Ignored in axisX.

			tickLength: 5,
			tickColor: "black",
			tickThickness: 1,

			lineColor: "black",
			lineThickness: 1,

			gridColor: "A0A0A0",
			gridThickness: 0,

			interlacedColor: null,

			valueFormatString: null,

			margin: 2
		},

		Legend: {
			name: null,
			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			verticalAlign: "center",
			horizontalAlign: "right",
			//dockInsidePlotArea: false,

			fontSize: 14,//in pixels
			fontFamily: "calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal" // normal, italic, oblique
		},

		ToolTip: {
			enabled: true,
			borderColor: null,
			shared: false,
			animationEnabled: true,
			content: null
		},

		//Private
		TextBlock: {
			x: 0,
			y: 0,
			width: null,//read only
			height: null,//read only
			maxWidth: null,
			maxHeight: null,
			padding: 0,
			angle: 0,
			text: "",
			horizontalAlign: "center",//left, center, right
			fontSize: 12,//in pixels
			fontFamily: "calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			textBaseline: "top"
		}
	}

	//#region Cultures

	var cultures = {
		"en": {
			//Derives from the default options
		}//,
		//"es": {
		//    decimalSeparator: ",",
		//    digitGroupSeparator: ".",
		//    zoomText: "zoom",
		//    panText: "pan",
		//    resetText: "reset",
		//    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
		//}
	}

	//#endregion Cultures

	//#region Themes

	var colorSets = {

		"colorSet1": [
			"#369EAD",
			"#C24642",
			"#7F6084",
			//"#96C412",
			"#86B402",
			"#A2D1CF",
			//"#D8C641",
			"#C8B631",
			"#6DBCEB",
			//"#4A4946",
			"#52514E",
			"#4F81BC",
			"#A064A1",
			"#F79647"
		],
		"colorSet2": [
			"#4F81BC",
			"#C0504E",
			"#9BBB58",
			"#23BFAA",
			//"#FAA586",
			"#8064A1",
			"#4AACC5",
			"#F79647",
			//"#77AA33",
			//"#7F6084"
			"#33558B"
		],
		"colorSet3": [
			"#8CA1BC",
			"#36845C",
			"#017E82",
			"#8CB9D0",
			"#708C98",
			"#94838D",
			"#F08891",
			"#0366A7",
			"#008276",
			"#EE7757",
			"#E5BA3A",
			"#F2990B",
			"#03557B",
			"#782970"
		]//,
		//"colorSet4": [
		//    "#3698C5",
		//    "#009B8D",
		//    "#F1D691",
		//    "#F8B90C",
		//    "#0081B8",
		//    "#5B5A96",
		//    "#ACBDD1",
		//    "#88A891",
		//    "#39969D",
		//    "#AECEDD",
		//    "#A0B2BC",
		//    "#BBAEB7",
		//    "#A0C65F",
		//    "#EEA6AA",
		//    "#3798C5"
		//],
		//"colorSet5": [
		//    "#88ADBF",
		//    "#84C336",
		//    "#7B91C3",
		//    "#4661EE",
		//    "#EC5657",
		//    "#1BCDD1",
		//    "#8FAABB",
		//    "#B08BEB",
		//    "#3EA0DD",
		//    "#F5A52A",
		//    "#23BFAA",
		//    "#FAA586",
		//    "#EB8CC6"
		//]

	};

	var themes =
		{
			"theme1": {
				Chart:
					{
						colorSet: colorSets[0]
					},
				Title: {
					fontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					fontSize: 33,
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 10
				},
				Axis: {
					titleFontSize: 26,
					//titleFontColor: "rgb(98,98,98)",
					titleFontColor: "#666666",
					//titleFontFamily: "arial black",
					//titleFontFamily: "Verdana, Geneva, Calibri, sans-serif",
					titleFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//titleFontWeight: "bold",

					//labelFontFamily: "Times New Roman, Times, serif",
					labelFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 18,
					labelFontColor: "grey",
					//labelFontWeight: "bold",
					tickColor: "#BBBBBB",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "#BBBBBB",
					lineThickness: 2,
					lineColor: "#BBBBBB"
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "calibri"
				},
				DataSeries: {
					//bevelEnabled: true,
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					//indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 1
				}
			},

			"theme2": {
				Chart:
					{
						colorSet: "colorSet2"
					},
				Title: {
					fontFamily: "impact, charcoal, arial black, sans-serif",
					fontSize: 32,//fontColor: "rgb(58,58,58)",
					fontColor: "#333333",
					//fontFamily: "arial black", fontSize: 30,//fontColor: "rgb(58,58,58)",
					//fontFamily: "arial black",
					//fontFamily: "Helvetica Neue, Helvetica", fontSize: 35,// fontColor: "rgb(58,58,58)",
					//fontWeight: "bold",
					verticalAlign: "top",
					margin: 10
				},
				Axis: {
					titleFontSize: 22,
					titleFontColor: "rgb(98,98,98)",
					//titleFontFamily: "arial black",
					titleFontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "arial",
					titleFontWeight: "bold",


					labelFontFamily: isCanvasSupported ? "monospace, Courier New, Courier" : "arial",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 16,
					labelFontColor: "grey",
					labelFontWeight: "bold",
					tickColor: "grey",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "grey",
					lineThickness: 0
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "arial"
				},
				DataSeries: {
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: isCanvasSupported ? "Courier New, Courier, monospace" : "arial",
					indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					//indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 1
				}
			},

			"theme3": {
				Chart:
					{
						colorSet: "colorSet1"
					},
				Title: {
					//fontFamily: "impact, charcoal, arial black, sans-serif", fontSize: 30,//fontColor: "rgb(58,58,58)",
					//fontFamily: "arial black", fontSize: 30,//fontColor: "rgb(58,58,58)",
					//fontFamily: "arial black",
					fontFamily: isCanvasSupported ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
					fontSize: 32,
					//fontFamily: "Palatino Linotype, Book Antiqua, Palatino, serif", fontSize: 30,
					//fontFamily: "Lucida Sans Unicode, Lucida Grande, Trebuchet MS, sans-serif", fontSize: 30,
					fontColor: "rgb(68,78,58)",
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 10
				},
				Axis: {
					titleFontSize: 22,
					titleFontColor: "rgb(98,98,98)",
					//titleFontFamily: "arial black",
					titleFontFamily: isCanvasSupported ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
					//titleFontWeight: "bold",

					//labelFontFamily: "Times New Roman, Times, serif",
					labelFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 18,
					labelFontColor: "grey",
					//labelFontWeight: "bold",
					tickColor: "grey",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "grey",
					lineThickness: 2,
					lineColor: "grey"
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "calibri"
				},
				DataSeries: {
					bevelEnabled: true,
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: isCanvasSupported ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
					//indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 2
				}
			}
		}

	//#endregion Themes

	var constants = {
		numberDuration: 1,
		yearDuration: 1000 * 60 * 60 * 24 * 364,
		monthDuration: 1000 * 60 * 60 * 24 * 30,
		weekDuration: 1000 * 60 * 60 * 24 * 7,
		dayDuration: 1000 * 60 * 60 * 24,
		hourDuration: 1000 * 60 * 60,
		minuteDuration: 1000 * 60,
		secondDuration: 1000,
		millisecondDuration: 1,

		dayOfWeekFromInt: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	};

	//#region Static Methods

	function extend(Child, Parent) {
		Child.prototype = inherit(Parent.prototype)
		Child.prototype.constructor = Child
		Child.parent = Parent.prototype
	}

	function inherit(proto) {
		function F() { }
		F.prototype = proto
		return new F
	}

	function addToDateTime(dateTime, num, type) {

		if (type === "millisecond")
			dateTime.setMilliseconds(dateTime.getMilliseconds() + 1 * num);
		else if (type === "second")
			dateTime.setSeconds(dateTime.getSeconds() + 1 * num);
		else if (type === "minute")
			dateTime.setMinutes(dateTime.getMinutes() + 1 * num);
		else if (type === "hour")
			dateTime.setHours(dateTime.getHours() + 1 * num);
		else if (type === "day")
			dateTime.setDate(dateTime.getDate() + 1 * num);
		else if (type === "week")
			dateTime.setDate(dateTime.getDate() + 7 * num);
		else if (type === "month")
			dateTime.setMonth(dateTime.getMonth() + 1 * num);
		else if (type === "year")
			dateTime.setFullYear(dateTime.getFullYear() + 1 * num);

		return dateTime;
	}

	function convertToNumber(num, type) {
		return constants[type + "Duration"] * num;
	}

	function pad(value, length) {
		var isNegative = false;
		if (value < 0) {
			isNegative = true;
			value *= -1;
		}

		value = "" + value;
		length = !length ? 1 : length;

		while (value.length < length) value = "0" + value;

		return isNegative ? "-" + value : value;
	}

	function trimString(str) {
		var str = str.replace(/^\s\s*/, ''),
			ws = /\s/,
			i = str.length;
		while (ws.test(str.charAt(--i))) { };
		return str.slice(0, i + 1);
	}

	function extendCtx(context) {
		context.roundRect = function (x, y, width, height, radius, borderThickness, backgroundColor, borderColor) {
			///<signature>
			///<summary>Creates a rounded rectangle with given fill/stroke parameters</summary>
			///<param name="x" type="number">x value</param>
			///<param name="y" type="number">y value</param>
			///<param name="width" type="number">Border Width</param>
			///<param name="height" type="number">Border Height</param>
			///<param name="radius" type="number">Border CornerRadius</param>
			///<param name="borderThickness" type="number">Border Thickess</param>
			///<param name="backgroundColor" type="number">Background Color</param>
			///<param name="borderColor" type="number">Border Color</param>
			///</signature>

			if (backgroundColor) {
				this.fillStyle = backgroundColor;
			}

			if (borderColor) {
				this.strokeStyle = borderColor
			}

			if (typeof stroke == "undefined") {
				stroke = true;
			}
			if (typeof radius === "undefined") {
				radius = 5;
			}

			this.lineWidth = borderThickness;

			this.beginPath();
			this.moveTo(x + radius, y);
			this.lineTo(x + width - radius, y);
			this.quadraticCurveTo(x + width, y, x + width, y + radius);
			this.lineTo(x + width, y + height - radius);
			this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			this.lineTo(x + radius, y + height);
			this.quadraticCurveTo(x, y + height, x, y + height - radius);
			this.lineTo(x, y + radius);
			this.quadraticCurveTo(x, y, x + radius, y);
			this.closePath();

			if (backgroundColor) {
				this.fill();
			}

			if (borderColor && borderThickness > 0) {
				this.stroke();
			}
		}
	}

	function compareNumbers(a, b) {
		return a - b;
	}

	function compareDataPointX(dataPoint1, dataPoint2) {
		return dataPoint1.x - dataPoint2.x;
	}

	function intToHexColorString(num) {
		var r = ((num & 0xFF0000) >> 16).toString(16);
		var g = ((num & 0x00FF00) >> 8).toString(16);
		var b = ((num & 0x0000FF) >> 0).toString(16);

		r = r.length < 2 ? "0" + r : r;
		g = g.length < 2 ? "0" + g : g;
		b = b.length < 2 ? "0" + b : b;

		return "#" + r + g + b;
	}

	function RGBToInt(r, g, b) {
		var num = (r << 16) | (g << 8) | (b);

		return num;
	}

	function intToRGB(num) {
		var rgb = [];
		var r = ((num & 0xFF0000) >> 16);
		var g = ((num & 0x00FF00) >> 8);
		var b = ((num & 0x0000FF) >> 0);

		//r = r.length < 2 ? "0" + r : r;
		//g = g.length < 2 ? "0" + g : g;
		//b = b.length < 2 ? "0" + b : b;

		rgb[0] = r;
		rgb[1] = g
		rgb[2] = b;

		return rgb;
	}

	var fontHeightInPixels = {};
	var textMeasureEl = null;
	function getFontHeightInPixels(fontFamily, fontSize, fontWeight) {

		//return fontSize;

		fontWeight = fontWeight || "normal";

		var entry = fontFamily + "_" + fontSize + "_" + fontWeight;
		var height = fontHeightInPixels[entry];

		if (isNaN(height)) {
			try {
				var style = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;" + "font-family:" + fontFamily + "; " + "font-size:" + fontSize + "px; font-weight:" + fontWeight + ";";
				//console.log(style);
				if (!textMeasureEl) {
					var body = document.body;
					textMeasureEl = document.createElement("span");
					textMeasureEl.innerHTML = "";
					var textNode = document.createTextNode("Mpgyi");
					textMeasureEl.appendChild(textNode);
					body.appendChild(textMeasureEl);
				}

				textMeasureEl.style.display = "";
				textMeasureEl.setAttribute("style", style);

				height = Math.round(textMeasureEl.offsetHeight);
				textMeasureEl.style.display = "none";
				//body.removeChild(tempDiv);

				//if (window.console)
				//	window.console.log(fontSize + ": " + height);
			}
			catch (e) {
				height = Math.ceil(fontSize * 1.1);
			}

			height = Math.max(height, fontSize);

			fontHeightInPixels[entry] = height;
		}

		return height;
	}

	//userCapture is optional. Defaults to false
	function addEvent(obj, eventType, fn, useCapture) {
		if (obj.addEventListener) {
			obj.addEventListener(eventType, fn, useCapture || false);
		}
		else if (obj.attachEvent) {
			obj.attachEvent("on" + eventType, function (e) {
				var e = e || window.event;
				e.preventDefault = e.preventDefault || function () { e.returnValue = false }
				e.stopPropagation = e.stopPropagation || function () { e.cancelBubble = true }
				fn.call(obj, e);
			});
		} else
			return false;
	}

	//#region formatting functions/methods
	var dateFormat = function () {
		var reg = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g;

		var defDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var defShortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		var defMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var defShortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
		var timezoneClip = /[^-+\dA-Z]/g;

		return function (dt, formatString, cultureInfo) {

			var days = cultureInfo ? cultureInfo.days : defDays;
			var months = cultureInfo ? cultureInfo.months : defMonths;

			var shortDays = cultureInfo ? cultureInfo.shortDays : defShortDays;
			var shortMonths = cultureInfo ? cultureInfo.shortMonths : defShortMonths;

			var result = "";
			var utc = false;

			dt = dt && dt.getTime ? dt : dt ? new Date(dt) : new Date;
			if (isNaN(dt)) throw SyntaxError("invalid date");

			if (formatString.slice(0, 4) == "UTC:") {
				formatString = formatString.slice(4);
				utc = true;
			}

			var pre = utc ? "getUTC" : "get";
			var date = dt[pre + "Date"]();
			var day = dt[pre + "Day"]();
			var month = dt[pre + "Month"]();
			var year = dt[pre + "FullYear"]();
			var hours = dt[pre + "Hours"]();
			var minutes = dt[pre + "Minutes"]();
			var seconds = dt[pre + "Seconds"]();
			var milliseconds = dt[pre + "Milliseconds"]();
			var offset = utc ? 0 : dt.getTimezoneOffset();

			result = formatString.replace(reg, function (key) {

				switch (key) {

					case "D":
						return date;
					case "DD":
						return pad(date, 2);
					case "DDD":
						return shortDays[day];
					case "DDDD":
						return days[day];


					case "M":
						return month + 1;
					case "MM":
						return pad(month + 1, 2);
					case "MMM":
						return shortMonths[month];
					case "MMMM":
						return months[month];


					case "Y":
						return parseInt(String(year).slice(-2));
					case "YY":
						return pad(String(year).slice(-2), 2);
					case "YYY":
						return pad(String(year).slice(-3), 3);
					case "YYYY":
						return pad(year, 4);


					case "h":
						return hours % 12 || 12;
					case "hh":
						return pad(hours % 12 || 12, 2);


					case "H":
						return hours;
					case "HH":
						return pad(hours, 2);

					case "m":
						return minutes;
					case "mm":
						return pad(minutes, 2);


					case "s":
						return seconds;
					case "ss":
						return pad(seconds, 2);

					case "f":
						return String(milliseconds).slice(0, 1);
					case "ff":
						return pad(String(milliseconds).slice(0, 2), 2);
					case "fff":
						return pad(String(milliseconds).slice(0, 3), 3);


					case "t":
						return hours < 12 ? "a" : "p";
					case "tt":
						return hours < 12 ? "am" : "pm";
					case "T":
						return hours < 12 ? "A" : "P";
					case "TT":
						return hours < 12 ? "AM" : "PM";


					case "K":
						return utc ? "UTC" : (String(dt).match(timezone) || [""]).pop().replace(timezoneClip, ""); // Time Zone;
					case "z":
						return (offset > 0 ? "-" : "+") + Math.floor(Math.abs(offset) / 60); // Hour Offset from UTC without padding
					case "zz":
						return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2); // Hour Offset from UTC with padding
					case "zzz":
						return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + pad(Math.abs(offset) % 60, 2) // Hour and Minute Offset from UTC with padding

					default:
						return key.slice(1, key.length - 1);

				}
			});

			return result;
		}
	}();


	var numberFormat = function (v, fs, cultureInfo) {
		v = Number(v);
		var isNegative = v < 0 ? true : false;
		if (isNegative) v *= -1;

		decimalSeparator = cultureInfo ? cultureInfo.decimalSeparator : ".";
		digitGroupSeparator = cultureInfo ? cultureInfo.digitGroupSeparator : ",";

		var vString = "";
		fs = String(fs);
		var multiplier = 1;
		var temp;
		var result = "";

		var matches = "";
		var decimalPosition = -1;
		var fsBeforeDecimal = [];
		var fsAfterDecimal = [];
		var noPhBeforeDecimal = 0; // Number of Placeholders before Decimal
		var noPhAfterDecimal = 0; // Number of Placeholders after Decimal
		var noComma = 0;
		var multiplier = 1;
		var isScientificNotation = false;
		var exponent = 0;

		var matches = fs.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g);
		//window.console.log(matches + " = " + matches.length);

		for (var i = 0; matches && i < matches.length; i++) {
			var match = matches[i];

			if (match === "." && decimalPosition < 0) {
				decimalPosition = i;
				continue;
			} else if (match === "%") {
				multiplier *= 100;
			} else if (match === "‰") {
				multiplier *= 1000;
				continue;
			} else if (match[0] === "," && match[match.length - 1] === ".") {
				multiplier /= Math.pow(1000, match.length - 1);
				decimalPosition = i + match.length - 1;
				continue;
			} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0") {
				isScientificNotation = true;
			}

			if (decimalPosition < 0) {
				fsBeforeDecimal.push(match);
				if (match === "#" || match === "0")
					noPhBeforeDecimal++;
				else if (match === ",")
					noComma++;
			}
			else {
				fsAfterDecimal.push(match);
				if (match === "#" || match === "0")
					noPhAfterDecimal++;
			}
		}

		if (isScientificNotation) {
			var integer = Math.floor(v);
			exponent = (integer === 0 ? "" : String(integer)).length - noPhBeforeDecimal;
			multiplier /= Math.pow(10, exponent);
		}

		v *= multiplier;

		if (decimalPosition < 0)
			decimalPosition = i;

		vString = v.toFixed(noPhAfterDecimal);
		var split = vString.split(".");
		//window.console.log(split);
		var vStringBeforeDecimal = (split[0] + "").split("");
		var vStringAfterDecimal = (split[1] + "").split("");

		if (vStringBeforeDecimal && vStringBeforeDecimal[0] === "0")
			vStringBeforeDecimal.shift();

		//window.console.log(fsBeforeDecimal + "<---------->" + fsAfterDecimal + " &        " + vStringBeforeDecimal + "<---------->" + vStringAfterDecimal);

		var noPhProcessed = 0;
		var noDigitsAdded = 0;
		var noCommaAdded = 0;
		var commaDistance = 0;
		var distanceFromLastComma = 0;

		while (fsBeforeDecimal.length > 0) {
			var match = fsBeforeDecimal.pop();

			if (match === "#" || match === "0") {
				noPhProcessed++;

				if (noPhProcessed === noPhBeforeDecimal) {
					var digits = vStringBeforeDecimal;
					vStringBeforeDecimal = [];

					if (match === "0") {
						//var totalDigits = result.match(/[0-9]/g).length;
						var toPad = noPhBeforeDecimal - noDigitsAdded - (digits ? digits.length : 0);

						while (toPad > 0) {
							digits.unshift("0");
							toPad--;
						}
					}

					while (digits.length > 0) {
						result = digits.pop() + result;
						distanceFromLastComma++;

						if (distanceFromLastComma % commaDistance === 0 && noCommaAdded === noComma && digits.length > 0)
							result = digitGroupSeparator + result;
					}

					if (isNegative)
						result = "-" + result;

				} else {
					if (vStringBeforeDecimal.length > 0) {
						result = vStringBeforeDecimal.pop() + result;
						noDigitsAdded++;
						distanceFromLastComma++;
					}
					else if (match === "0") {
						result = "0" + result;
						noDigitsAdded++;
						distanceFromLastComma++;
					}

					if (distanceFromLastComma % commaDistance === 0 && noCommaAdded === noComma && vStringBeforeDecimal.length > 0)
						result = digitGroupSeparator + result;
				}


			} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0" && /[eE][+-]*[0]+/.test(match)) {
				if (exponent < 0)
					match = match.replace("+", "").replace("-", "");
				else
					match = match.replace("-", "")

				result += match.replace(/[0]+/, function ($0) {
					return pad(exponent, $0.length);
				});


			} else {
				if (match === ",") {
					noCommaAdded++;
					commaDistance = distanceFromLastComma;
					distanceFromLastComma = 0;

					if (vStringBeforeDecimal.length > 0)
						result = digitGroupSeparator + result;
				} else if (match.length > 1 && ((match[0] === "\"" && match[match.length - 1] === "\"") || (match[0] === "'" && match[match.length - 1] === "'"))) {
					result = match.slice(1, match.length - 1) + result;
				}
				else
					result = match + result;
			}
		}

		var charCount = 0;

		while (fsAfterDecimal.length > 0) {
			match = fsAfterDecimal.shift();

			if (match === "#" || match === "0") {
				if (vStringAfterDecimal.length > 0 && Number(vStringAfterDecimal.join("")) !== 0) {
					result += (charCount++ === 0 ? decimalSeparator : "") + vStringAfterDecimal.shift();
				}
				else if (match === "0") {
					result += (charCount++ === 0 ? decimalSeparator : "") + "0";
				}
			} else if (match.length > 1 && ((match[0] === "\"" && match[match.length - 1] === "\"") || (match[0] === "'" && match[match.length - 1] === "'"))) {
				result += (charCount++ === 0 ? decimalSeparator : "") + match.slice(1, match.length - 1);
			} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0" && /[eE][+-]*[0]+/.test(match)) {
				if (exponent < 0)
					match = match.replace("+", "").replace("-", "");
				else
					match = match.replace("-", "")
				result += match.replace(/[0]+/, function ($0) {
					return pad(exponent, $0.length);
				});
			} else {
				result += (charCount++ === 0 ? decimalSeparator : "") + match;
			}
		}

		//window.console.log(result);
		return result;
	}

	//#endregion formatting functions/methods

	function getObjectId(x, y, ctx) {
		x *= devicePixelBackingStoreRatio;
		y *= devicePixelBackingStoreRatio;
		var pixels = ctx.getImageData(x, y, 2, 2).data;
		var isObject = true;

		for (var i = 0; i < 4; i++) {

			if (pixels[i] !== pixels[i + 4] | pixels[i] !== pixels[i + 8] | pixels[i] !== pixels[i + 12]) {
				isObject = false;
				break;
			}
		}

		if (isObject) {
			return RGBToInt(pixels[0], pixels[1], pixels[2]);
		} else {
			return 0;
		}

		//window.console.log(pixels);
	}

	//extracts mouse coordinates from the event parameters
	var getMouseCoordinates = function (ev) {
		var x = 0;
		var y = 0;

		if (!ev) var ev = window.event;

		if (ev.offsetX || ev.offsetX === 0) {
			x = ev.offsetX;
			y = ev.offsetY;
		} else if (ev.layerX || ev.layerX == 0) { // Firefox
			x = ev.layerX;
			y = ev.layerY;
		}
		else {
			x = ev.pageX - ev.target.offsetLeft;
			y = ev.pageY - ev.target.offsetTop;
		}

		return { x: x, y: y };
	}

	function getFontString(prefix, object, fallbackObject) {
		var fontString = "";

		var fontStyleString = prefix ? prefix + "FontStyle" : "fontStyle";
		var fontWeightString = prefix ? prefix + "FontWeight" : "fontWeight";
		var fontSizeString = prefix ? prefix + "FontSize" : "fontSize";
		var fontFamilyString = prefix ? prefix + "FontFamily" : "fontFamily";



		fontString += object[fontStyleString] ? object[fontStyleString] + " " : (fallbackObject && fallbackObject[fontStyleString]) ? (fallbackObject[fontStyleString] + " ") : "";
		fontString += object[fontWeightString] ? object[fontWeightString] + " " : (fallbackObject && fallbackObject[fontWeightString]) ? (fallbackObject[fontWeightString] + " ") : "";
		fontString += object[fontSizeString] ? object[fontSizeString] + "px " : (fallbackObject && fallbackObject[fontSizeString]) ? (fallbackObject[fontSizeString] + "px ") : "";


		var fontFamily = object[fontFamilyString] ? object[fontFamilyString] + "" : (fallbackObject && fallbackObject[fontFamilyString]) ? (fallbackObject[fontFamilyString] + "") : "";

		if (!isCanvasSupported && fontFamily) {
			var firstFontFamily = fontFamily.split(",")[0];

			if (firstFontFamily[0] !== "'" && firstFontFamily[0] !== "\"")
				firstFontFamily = "'" + firstFontFamily + "'";

			fontString += firstFontFamily;
		} else
			fontString += fontFamily;

		return fontString;
	}

	function getProperty(propertyName, object, fallbackObject) {

		var value = propertyName in object ? object[propertyName] : fallbackObject[propertyName];

		return value;
	}

	var optimizeForHiDPI = true;
	//optimizeForHiDPI = false;

	var devicePixelRatio = window.devicePixelRatio || 1;
	var backingStoreRatio = 1;
	var devicePixelBackingStoreRatio = optimizeForHiDPI ? devicePixelRatio / backingStoreRatio : 1;



	function setCanvasSize(canvas, width, height) {

		if (isCanvasSupported && !!optimizeForHiDPI) {
			var ctx = canvas.getContext("2d");
			backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
								ctx.mozBackingStorePixelRatio ||
								ctx.msBackingStorePixelRatio ||
								ctx.oBackingStorePixelRatio ||
								ctx.backingStorePixelRatio || 1;


			devicePixelBackingStoreRatio = devicePixelRatio / backingStoreRatio;

			canvas.width = width * devicePixelBackingStoreRatio;
			canvas.height = height * devicePixelBackingStoreRatio;

			if (devicePixelRatio !== backingStoreRatio) {

				canvas.style.width = width + 'px';
				canvas.style.height = height + 'px';

				ctx.scale(devicePixelBackingStoreRatio, devicePixelBackingStoreRatio);

			}

			//window.alert(backingStoreRatio);
			//window.alert(devicePixelRatio);

		} else {
			canvas.width = width;
			canvas.height = height;
		}

	}


	function createCanvas(width, height) {
		var canvas = document.createElement("canvas");
		canvas.setAttribute("class", "canvasjs-chart-canvas");

		setCanvasSize(canvas, width, height);

		if (!isCanvasSupported && typeof (G_vmlCanvasManager) !== "undefined") {
			G_vmlCanvasManager.initElement(canvas);
		}

		return canvas;
	}
	//#endregion Static Methods

	//#region Class Definitions

	//#region Class CanvasJSObject
	function CanvasJSObject(defaultsKey, options, theme) {
		this._defaultsKey = defaultsKey;

		currentTheme = {};

		if (theme && themes[theme] && themes[theme][defaultsKey])
			currentTheme = themes[theme][defaultsKey];

		this._options = options ? options : {};
		this.setOptions(this._options, currentTheme);
	};
	CanvasJSObject.prototype.setOptions = function (options, currentTheme) {

		if (!defaultOptions[this._defaultsKey]) {
			if (isDebugMode && window.console)
				console.log("defaults not set");
		}
		else {
			var defaults = defaultOptions[this._defaultsKey];

			for (prop in defaults) {
				if (options && prop in options)
					this[prop] = options[prop];
				else if (currentTheme && prop in currentTheme)
					this[prop] = currentTheme[prop]
				else this[prop] = defaults[prop];

				//if (typeof this[prop] === "function") {
				//    alert("function");
				//    this[prop] = this[prop]();
				//}
			}
		}
	}

	//Stores values in _oldOptions so that it can be tracked for any changes
	CanvasJSObject.prototype.trackChanges = function (option) {
		if (!this._options._oldOptions)
			this._options._oldOptions = {};

		this._options._oldOptions[option] = this._options[option];
	}

	CanvasJSObject.prototype.isBeingTracked = function (option) {
		if (!this._options._oldOptions)
			this._options._oldOptions = {};

		if (this._options._oldOptions[option])
			return true;
		else
			return false;
	}

	CanvasJSObject.prototype.hasOptionChanged = function (option) {
		if (!this._options._oldOptions)
			this._options._oldOptions = {};

		//if (!this._options._oldOptions[option])
		//    this._options._oldOptions[option] = null;

		var hasChanged = !(this._options._oldOptions[option] === this._options[option]);

		return hasChanged;
	}
	//#endregion Class CanvasJSObject

	//#region Class Chart
	function Chart(containerId, options) {
		options = options || {};

		Chart.parent.constructor.call(this, "Chart", options, options.theme ? options.theme : "theme1");

		var _this = this;


		this._containerId = containerId;
		this._objectsInitialized = false;
		this.ctx = null;
		this.overlaidCanvasCtx = null;
		this._indexLabels = [];
		this._panTimerId = 0;
		this._lastTouchEventType = "";
		this.panEnabled = false;
		this._defaultCursor = "default";
		this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
		this._dataInRenderedOrder = [];

		//this._maxZIndex = 0;

		this._container = $(this._containerId)[0];

		if (!this._container) {
			if (window.console)
				window.console.log("CanvasJS Error: Chart Container with id \"" + this._containerId + "\" was not found");
			return;
		}

		this._container.innerHTML = "";

		var width = 0;
		var height = 0;

		if (this._options.width)
			width = this.width;
		else
			width = this._container.clientWidth > 0 ? this._container.clientWidth : this.width;

		if (this._options.height)
			height = this.height;
		else
			height = this._container.clientHeight > 0 ? this._container.clientHeight : this.height;

		this.width = width;
		this.height = height;

		this._canvasJSContainer = document.createElement("div");
		this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");

		this._canvasJSContainer.style.position = "relative";
		if (!isCanvasSupported) {
			this._canvasJSContainer.style.height = "0px";//In IE6 toolTip doesn't show at proper position if not set.
		}
		this._container.appendChild(this._canvasJSContainer);


		this.canvas = createCanvas(width, height);

		this.canvas.style.position = "absolute";
		if (this.canvas.getContext) {
			try {
				this.canvas.style.background = this.backgroundColor;
			} catch (e) { };
			this._canvasJSContainer.appendChild(this.canvas);
			this.ctx = this.canvas.getContext("2d");
			this.ctx.textBaseline = "top";
			extendCtx(this.ctx);
		} else
			return;

		//this.canvas.style.cursor = "pointer";

		if (!isCanvasSupported) {
			this.plotArea.canvas = createCanvas(width, height);
			this.plotArea.canvas.style.position = "absolute";
			this.plotArea.canvas.setAttribute("class", "plotAreaCanvas");
			this._canvasJSContainer.appendChild(this.plotArea.canvas);

			this.plotArea.ctx = this.plotArea.canvas.getContext("2d");
		} else {
			this.plotArea.ctx = this.ctx;
		}

		this.overlaidCanvas = createCanvas(width, height);
		this.overlaidCanvas.style.position = "absolute";
		this._canvasJSContainer.appendChild(this.overlaidCanvas);
		this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d");
		this.overlaidCanvasCtx.textBaseline = "top";

		this._eventManager = new EventManager(this);

		this._toolBar = document.createElement("div");
		this._toolBar.setAttribute("class", "canvasjs-chart-toolbar");
		this._toolBar.style.position = "absolute";
		this._toolBar.style.top = "0px";
		this._toolBar.style.right = "0px";
		this._canvasJSContainer.appendChild(this._toolBar);

		if (this.zoomEnabled) {
			this._zoomButton = document.createElement("button");
			this._zoomButton.appendChild(document.createTextNode("Pan"));
			this._toolBar.appendChild(this._zoomButton);
			addEvent(this._zoomButton, "click", function () {
				if (_this.zoomEnabled) {
					_this.zoomEnabled = false;
					_this.panEnabled = true;

					_this._zoomButton.innerHTML = _this._cultureInfo.zoomText;

					//_this._defaultCursor = "move";
					//_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				} else {
					_this.zoomEnabled = true;
					_this.panEnabled = false;

					_this._zoomButton.innerHTML = _this._cultureInfo.panText;

					//_this._defaultCursor = "default";
					//_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				}
				_this.render();
			});


			//this._panButton = document.createElement("button");
			//this._panButton.appendChild(document.createTextNode("Pan"));
			//this._toolBar.appendChild(this._panButton);
			//this._panButton.addEventListener("click", function () {
			//    _this.zoomEnabled = false;
			//    _this.panEnabled = true;
			//    _this.render();
			//}, false);
		}

		if (this.zoomEnabled) {

			this._resetButton = document.createElement("button");
			this._resetButton.appendChild(document.createTextNode("Reset"));
			this._toolBar.appendChild(this._resetButton);

			if (this._options.zoomEnabled) {
				this.zoomEnabled = true;
				this.panEnabled = false;
			} else {
				this.zoomEnabled = false;
				this.panEnabled = false;
			}

			this.overlaidCanvas.style.cursor = _this._defaultCursor;

			addEvent(this._resetButton, "click", function () {

				_this._toolTip.hide();

				if (_this.zoomEnabled || _this.panEnabled) {
					_this.zoomEnabled = true;
					_this.panEnabled = false;
					_this._zoomButton.innerHTML = _this._cultureInfo.panText;

					_this._defaultCursor = "default";
					_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				} else {
					_this.zoomEnabled = false;
					_this.panEnabled = false;
				}

				if (_this._options.axisX && _this._options.axisX.minimum)
					_this.sessionVariables.axisX.internalMinimum = _this._options.axisX.minimum;
				else
					_this.sessionVariables.axisX.internalMinimum = null;

				if (_this._options.axisX && _this._options.axisX.maximum)
					_this.sessionVariables.axisX.internalMaximum = _this._options.axisX.maximum;
				else
					_this.sessionVariables.axisX.internalMaximum = null;

				_this.resetOverlayedCanvas();

				_this._toolBar.style.display = "none";

				_this.render();
			});
		}

		addEvent(window, "resize", function () {
			//this._container.addEventListener("DOMSubtreeModified", function () {

			var width = 0;
			var height = 0;

			if (_this._options.width)
				width = _this.width;
			else
				_this.width = width = _this._container.clientWidth > 0 ? _this._container.clientWidth : _this.width;

			if (_this._options.height)
				height = _this.height;
			else
				_this.height = height = _this._container.clientHeight > 0 ? _this._container.clientHeight : _this.height;

			if (_this.canvas.width !== width * devicePixelBackingStoreRatio || _this.canvas.height !== height * devicePixelBackingStoreRatio) {
				//_this.renderCount--;

				//_this.canvas.width = width;
				//_this.canvas.height = height;
				setCanvasSize(_this.canvas, width, height);

				//_this.overlaidCanvas.width = width;
				//_this.overlaidCanvas.height = height;
				setCanvasSize(_this.overlaidCanvas, width, height);
				setCanvasSize(_this._eventManager.ghostCanvas, width, height);


				_this.render();
			}
		});

		this._toolBar.style.display = "none";

		this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height };

		var _this = this;

		addEvent(this.overlaidCanvas, 'click', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mousemove', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mouseup', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mousedown', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mouseout', function (e) {
			_this._mouseEventHandler(e);
		});


		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (e) {
			_this._touchEventHandler(e);
		});

		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : 'touchmove', function (e) {
			_this._touchEventHandler(e);
		});

		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : 'touchend', function (e) {
			_this._touchEventHandler(e);
		});

		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : 'touchcancel', function (e) {
			_this._touchEventHandler(e);
		});



		this._toolTip = new ToolTip(this, this._options.toolTip, this.theme);

		this.layoutManager = new LayoutManager(this);
		this.data = null;
		this.axisX = null;
		this.axisY = null;
		this.axisY2 = null;
		this.renderCount = 0;

		if (this.creditText && this.creditHref) {
			this._creditLink = document.createElement("a");
			this._creditLink.setAttribute("class", "canvasjs-chart-credit");
			this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif");

			this._creditLink.setAttribute("tabIndex", -1);
			this._creditLink.setAttribute("href", this.creditHref);
			this._creditLink.innerHTML = this.creditText;
			this._creditLink.setAttribute("target", "_blank");

			//this._creditLink.style.


			//var creditLinkString = "<a style='' href='" + (this.creditHref.indexOf("http://") === 0 ? this.creditHref : "http://" + this.creditHref) + "'>" + this.creditHref + "</a>";
			//var xmlDoc;


			//if (window.DOMParser) {
			//    var parser = new DOMParser();
			//    xmlDoc = parser.parseFromString(creditLinkString, "text/xml");
			//    this._creditLink = xmlDoc.firstChild;
			//}
			//else // Internet Explorer
			//{
			//    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			//    xmlDoc.async = false;
			//    xmlDoc.loadXML(creditLinkString);
			//    this._creditLink = xmlDoc.firstChild;
			//}
			this._canvasJSContainer.appendChild(this._creditLink);
		}


		this.sessionVariables = {
			axisX: {
				internalMinimum: null,
				internalMaximum: null
			},
			axisY: {
				internalMinimum: null,
				internalMaximum: null
			},
			axisY2: {
				internalMinimum: null,
				internalMaximum: null
			}
		};
	};
	extend(Chart, CanvasJSObject);

	// initialize chart objects
	Chart.prototype._initialize = function () {
		///<signature>
		///<summary>Initializes Chart objects/state. Creates DataSeries class instance for each DataSeries provided by ther user. Sets the Axis Type based on the user data</summary>
		///</signature>
		//this.width = this.width;

		this._selectedColorSet = typeof (colorSets[this.colorSet]) !== "undefined" ? colorSets[this.colorSet] : colorSets["colorSet1"];

		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.beginPath();

		this.axisX = null;
		this.axisY = null;
		this.axisY2 = null;
		this._indexLabels = [];
		this._dataInRenderedOrder = [];

		this._events = [];
		if (this._eventManager)
			this._eventManager.reset();

		this.plotInfo = {
			//xMin: Infinity, xMax: -Infinity,
			//yMin: Infinity, yMax: -Infinity,
			//viewPortXMin: Infinity, viewPortXMax: -Infinity,
			//viewPortYMin: Infinity, viewPortYMax: -Infinity,
			//xMinDiff: Infinity,
			axisPlacement: null,
			axisXValueType: null,
			plotTypes: []//array of plotType: {type:"", axisYType: "primary", dataSeriesIndexes:[]}
		};

		this.layoutManager.reset();

		this._cultureInfo = new CultureInfo(this, this._options.culture);

		this.data = [];
		var dataSeriesIndex = 0;

		for (var series = 0; series < this._options.data.length; series++) {
			//for (series in this._options.data) {

			dataSeriesIndex++;

			if (!(!this._options.data[series].type || Chart._supportedChartTypes.indexOf(this._options.data[series].type) >= 0))
				continue;

			var dataSeries = new DataSeries(this, this._options.data[series], this.theme, dataSeriesIndex - 1, ++this._eventManager.lastObjectId);
			if (dataSeries.name === null)
				dataSeries.name = "DataSeries " + (dataSeriesIndex);

			if (dataSeries.color === null) {
				if (this._options.data.length > 1) {
					dataSeries._colorSet = [this._selectedColorSet[dataSeries.index % this._selectedColorSet.length]];
					dataSeries.color = this._selectedColorSet[dataSeries.index % this._selectedColorSet.length];
				} else {
					if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
						dataSeries._colorSet = [this._selectedColorSet[0]];
					}
					else
						dataSeries._colorSet = this._selectedColorSet;
				}
			} else {
				dataSeries._colorSet = [dataSeries.color];
			}

			if (dataSeries.markerSize === null) {
				if (((dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline") && dataSeries.dataPoints && dataSeries.dataPoints.length < this.width / 16) || dataSeries.type === "scatter") {
					//if (dataSeries.type === "line") {
					dataSeries.markerSize = 8;
				}
			}

			if ((dataSeries.type === "bubble" || dataSeries.type === "scatter") && dataSeries.dataPoints) {
				dataSeries.dataPoints.sort(compareDataPointX)
			}

			//if (dataSeries.markerBorderThickness === null && dataSeries.type === "scatter") {
			//    dataSeries.markerBorderThickness = 2;
			//}

			//if (dataSeries.markerType === null) {
			//    if (dataSeries.type === "line" & dataSeries.dataPoints.length < 500) {
			//        dataSeries.markerType = "circle";
			//    }
			//}

			this.data.push(dataSeries);

			var seriesAxisPlacement = dataSeries.axisPlacement;

			//if (isDebugMode && window.console)
			//    window.console.log(dataSeries.type);

			var errorMessage;

			if (seriesAxisPlacement === "normal") {

				if (this.plotInfo.axisPlacement === "xySwapped") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with bar chart";
				} else if (this.plotInfo.axisPlacement === "none") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with pie chart";
				} else if (this.plotInfo.axisPlacement === null)
					this.plotInfo.axisPlacement = "normal";
			}
			else if (seriesAxisPlacement === "xySwapped") {

				if (this.plotInfo.axisPlacement === "normal") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with line, area, column or pie chart";
				} else if (this.plotInfo.axisPlacement === "none") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with pie chart";
				} else if (this.plotInfo.axisPlacement === null)
					this.plotInfo.axisPlacement = "xySwapped";
			}
			else if (seriesAxisPlacement == "none") {

				if (this.plotInfo.axisPlacement === "normal") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with line, area, column or bar chart";
				} else if (this.plotInfo.axisPlacement === "xySwapped") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with bar chart";
				} else if (this.plotInfo.axisPlacement === null)
					this.plotInfo.axisPlacement = "none";
			}

			if (errorMessage && window.console) {
				window.console.log(errorMessage);
				return;
			}
		}

		//if (isDebugMode && window.console) {
		//    window.console.log("xMin: " + this.plotInfo.viewPortXMin + "; xMax: " + this.plotInfo.viewPortXMax + "; yMin: " + this.plotInfo.yMin + "; yMax: " + this.plotInfo.yMax);
		//}

		this._objectsInitialized = true;
	}

	Chart._supportedChartTypes = ["line", "stepLine", "spline", "column", "area", "stepArea", "splineArea", "bar", "bubble", "scatter",
		"stackedColumn", "stackedColumn100", "stackedBar", "stackedBar100",
		"stackedArea", "stackedArea100",
		"pie", "doughnut"
	];

	//indexOf is not supported in IE8-
	if (!Chart._supportedChartTypes.indexOf) {
		Chart._supportedChartTypes.indexOf = function (elt /*, from*/) {
			var len = this.length >>> 0;

			var from = Number(arguments[1]) || 0;
			from = (from < 0)
				 ? Math.ceil(from)
				 : Math.floor(from);
			if (from < 0)
				from += len;

			for (; from < len; from++) {
				if (from in this &&
					this[from] === elt)
					return from;
			}
			return -1;
		};
	}

	Chart.prototype.render = function () {
		//var dt = Date.now();

		//var fontHeight = getFontHeightInPixels("'Nato Sans'", 18, false);

		//console.log(fontHeight);

		this._initialize();

		//Create Primary and Secondary axis and assign them to the series
		for (var i = 0; i < this.data.length; i++) {

			if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
				if (!this.data[i].axisYType || this.data[i].axisYType === "primary") {
					if (!this.axisY) {

						if (this.plotInfo.axisPlacement === "normal") {
							this.axisY = new Axis(this, this._options.axisY, "axisY", "left");
						}
						else if (this.plotInfo.axisPlacement === "xySwapped") {
							this.axisY = new Axis(this, this._options.axisY, "axisY", "bottom");
						}
					}
					this.data[i].axisY = this.axisY;
				}
				else if (this.data[i].axisYType === "secondary") {
					if (!this.axisY2) {
						if (this.plotInfo.axisPlacement === "normal") {
							this.axisY2 = new Axis(this, this._options.axisY2, "axisY", "right");
						}
						else if (this.plotInfo.axisPlacement === "xySwapped") {
							this.axisY2 = new Axis(this, this._options.axisY2, "axisY", "top");
						}
					}
					this.data[i].axisY = this.axisY2;
				}

				if (!this.axisX) {
					if (this.plotInfo.axisPlacement === "normal") {
						this.axisX = new Axis(this, this._options.axisX, "axisX", "bottom");
					} else if (this.plotInfo.axisPlacement === "xySwapped") {
						this.axisX = new Axis(this, this._options.axisX, "axisX", "left");
					}
				}

				this.data[i].axisX = this.axisX;
			}
		}

		this._processData();// Categorises the dataSeries and calculates min, max and other values

		if (this._options.title) {
			this._title = new Title(this, this._options.title);
			this._title.render();
		}

		this.legend = new Legend(this, this._options.legend, this.theme);
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].showInLegend)
				this.legend.dataSeries.push(this.data[i]);
		}
		this.legend.render();

		//TBI: Revisit and check if the functionality is enough.
		if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
			var freeSpace = this.layoutManager.getFreeSpace();

			//window.alert(freeSpace.width + "; " + freeSpace.height);
			//window.alert(this.width + "; " + this.height);
			//window.alert(this._canvasJSContainer.clientWidth + "; " + this._canvasJSContainer.clientHeight);


			Axis.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
		} else if (this.plotInfo.axisPlacement === "none") {
			//In case of charts with axis this method is called inside setLayoutAndRender
			this.preparePlotArea();
		}
		else {
			return;
		}

		for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
			var plotType = this.plotInfo.plotTypes[i];

			for (var j = 0; j < plotType.plotUnits.length; j++) {

				var plotUnit = plotType.plotUnits[j];

				if (plotUnit.type === "line")
					this.renderLine(plotUnit);
				else if (plotUnit.type === "stepLine")
					this.renderStepLine(plotUnit);
				else if (plotUnit.type === "spline")
					this.renderSpline(plotUnit);
				else if (plotUnit.type === "column")
					this.renderColumn(plotUnit);
				else if (plotUnit.type === "bar")
					this.renderBar(plotUnit);
				else if (plotUnit.type === "area")
					this.renderArea(plotUnit);
				else if (plotUnit.type === "stepArea")
					this.renderStepArea(plotUnit);
				else if (plotUnit.type === "splineArea")
					this.renderSplineArea(plotUnit);
				else if (plotUnit.type === "stackedColumn")
					this.renderStackedColumn(plotUnit);
				else if (plotUnit.type === "stackedColumn100")
					this.renderStackedColumn100(plotUnit);
				else if (plotUnit.type === "stackedBar")
					this.renderStackedBar(plotUnit);
				else if (plotUnit.type === "stackedBar100")
					this.renderStackedBar100(plotUnit);
				else if (plotUnit.type === "stackedArea")
					this.renderStackedArea(plotUnit);
				else if (plotUnit.type === "stackedArea100")
					this.renderStackedArea100(plotUnit);
				else if (plotUnit.type === "bubble")
					this.renderBubble(plotUnit);
				else if (plotUnit.type === "scatter")
					this.renderScatter(plotUnit);
				else if (plotUnit.type === "pie")
					this.renderPie(plotUnit);
				else if (plotUnit.type === "doughnut")
					this.renderPie(plotUnit);

				for (var k = 0; k < plotUnit.dataSeriesIndexes.length; k++) {
					this._dataInRenderedOrder.push(this.data[plotUnit.dataSeriesIndexes[k]]);
				}
			}
		}

		if (this._indexLabels.length > 0)
			this.renderIndexLabels();

		this.attachPlotAreaEventHandlers();

		if (!this.zoomEnabled && !this.panEnabled && this._toolBar.style.display !== "none") {
			this._toolBar.style.display = "none";
		}

		this._toolTip._updateToolTip();

		this.renderCount++;

		//if (window.console) {
		//    window.console.log(new Date().getTime() - dt);
		//}

		if (isDebugMode) {

			var _this = this;
			setTimeout(function () {
				var ghostCanvasCopy = document.getElementById("ghostCanvasCopy");

				if (ghostCanvasCopy) {
					//console.log(ghostCanvasCopy.clientWidth);
					setCanvasSize(ghostCanvasCopy, _this.width, _this.height);
					var ghostCanvasCopyCtx = ghostCanvasCopy.getContext("2d");

					//ghostCanvasCopyCtx.scale(1, 1);
					//var imageData = this._eventManager.ghostCtx.getImageData(0, 0, this._container.clientWidth, this._container.clientHeight);
					//this._eventManager.ghostCtx.drawImage(this._eventManager.ghostCanvas, 0, 0);
					//this.ctx.drawImage(this._eventManager.ghostCanvas, 0, 0);

					ghostCanvasCopyCtx.drawImage(_this._eventManager.ghostCanvas, 0, 0);
					//_this._canvasJSContainer.appendChild(_this._eventManager.ghostCanvas);
					//_this.overlaidCanvasCtx.drawImage(_this._eventManager.ghostCanvas, 0, 0);
				}
			}, 2000);
		}
	}

	Chart.prototype.attachPlotAreaEventHandlers = function () {

		//this._toolBar.style.display = "inline";

		this.attachEvent({
			context: this,
			chart: this,
			mousedown: this._plotAreaMouseDown,
			mouseup: this._plotAreaMouseUp,
			mousemove: this._plotAreaMouseMove,
			cursor: this.zoomEnabled ? "col-resize" : "move",
			cursor: this.panEnabled ? "move" : "default",
			capture: true,
			bounds: this.plotArea
		});

	}

	Chart.prototype.categoriseDataSeries = function () {
		var dataSeries = "";

		for (var i = 0; i < this.data.length; i++) {
			dataSeries = this.data[i]
			if (!dataSeries.dataPoints || dataSeries.dataPoints.length === 0)
				continue;

			if (Chart._supportedChartTypes.indexOf(dataSeries.type) >= 0) {

				var plotType = null;
				var plotTypeExists = false;

				var plotUnit = null;
				var plotUnitExists = false;

				for (var j = 0; j < this.plotInfo.plotTypes.length; j++) {
					if (this.plotInfo.plotTypes[j].type === dataSeries.type) {
						plotTypeExists = true;
						var plotType = this.plotInfo.plotTypes[j];
						break;
					}
				}

				if (!plotTypeExists) {
					plotType = {
						type: dataSeries.type,
						totalDataSeries: 0,
						plotUnits: []
					};
					this.plotInfo.plotTypes.push(plotType)
				}

				for (var j = 0; j < plotType.plotUnits.length; j++) {
					if (plotType.plotUnits[j].axisYType === dataSeries.axisYType) {
						plotUnitExists = true;
						var plotUnit = plotType.plotUnits[j];
						break;
					}
				}

				if (!plotUnitExists) {
					plotUnit = {
						type: dataSeries.type,
						previousDataSeriesCount: 0, //to be set next
						index: plotType.plotUnits.length,
						plotType: plotType,
						axisYType: dataSeries.axisYType,
						axisY: dataSeries.axisYType === "primary" ? this.axisY : this.axisY2,
						axisX: this.axisX,
						dataSeriesIndexes: [] //index of dataSeries
					}
					plotType.plotUnits.push(plotUnit);
				}

				plotType.totalDataSeries++;

				plotUnit.dataSeriesIndexes.push(i);
			}
		}

		for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
			var plotType = this.plotInfo.plotTypes[i];
			var previousDataSeriesCount = 0;

			for (var j = 0; j < plotType.plotUnits.length; j++) {

				plotType.plotUnits[j].previousDataSeriesCount = previousDataSeriesCount;

				previousDataSeriesCount += plotType.plotUnits[j].dataSeriesIndexes.length;
			}
		}
	}

	Chart.prototype.assignIdToDataPoints = function () {

		for (var i = 0; i < this.data.length; i++) {
			var dataSeries = this.data[i];

			if (!dataSeries.dataPoints)
				continue;

			var length = dataSeries.dataPoints.length;

			for (var j = 0; j < length; j++) {
				dataSeries.dataPointIds[j] = ++this._eventManager.lastObjectId;
			}
		}
	}

	Chart.prototype._processData = function () {
		this.assignIdToDataPoints();
		this.categoriseDataSeries();

		for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
			var plotType = this.plotInfo.plotTypes[i];

			for (var j = 0; j < plotType.plotUnits.length; j++) {

				var plotUnit = plotType.plotUnits[j];

				if (plotUnit.type === "line" || plotUnit.type === "stepLine" || plotUnit.type === "spline" || plotUnit.type === "column" || plotUnit.type === "area" || plotUnit.type === "stepArea" || plotUnit.type === "splineArea" || plotUnit.type === "bar" || plotUnit.type === "bubble" || plotUnit.type === "scatter")
					this._processMultiseriesPlotUnit(plotUnit);
				else if (plotUnit.type === "stackedColumn" || plotUnit.type === "stackedBar" || plotUnit.type === "stackedArea")
					this._processStackedPlotUnit(plotUnit);
				else if (plotUnit.type === "stackedColumn100" || plotUnit.type === "stackedBar100" || plotUnit.type === "stackedArea100")
					this._processStacked100PlotUnit(plotUnit);
			}
		}

	}

	Chart.prototype._processMultiseriesPlotUnit = function (plotUnit) {
		if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
			return;

		var axisYDataInfo = plotUnit.axisY.dataInfo;
		var axisXDataInfo = plotUnit.axisX.dataInfo;
		var dataPointX, dataPointY;
		var isDateTime = false;


		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
			var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
			var i = 0;
			var isFirstDPInViewPort = false;
			var isLastDPInViewPort = false;

			if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

				var plotAreaXMin = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;
				var plotAreaXMax = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
			}


			if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
				isDateTime = true;
			}

			for (i = 0; i < dataSeries.dataPoints.length; i++) {

				if (typeof dataSeries.dataPoints[i].x === "undefined") {
					dataSeries.dataPoints[i].x = i;
				}

				if (dataSeries.dataPoints[i].x.getTime) {
					isDateTime = true;
					dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
				}
				else
					dataPointX = dataSeries.dataPoints[i].x;

				dataPointY = dataSeries.dataPoints[i].y;


				if (dataPointX < axisXDataInfo.min)
					axisXDataInfo.min = dataPointX;
				if (dataPointX > axisXDataInfo.max)
					axisXDataInfo.max = dataPointX;

				if (dataPointY < axisYDataInfo.min)
					axisYDataInfo.min = dataPointY;

				if (dataPointY > axisYDataInfo.max)
					axisYDataInfo.max = dataPointY;


				if (i > 0) {
					var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
					xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

					if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
						axisXDataInfo.minDiff = xDiff;
					}
				}

				// This section makes sure that partially visible dataPoints are included in the begining
				if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
					continue;
				} else if (!isFirstDPInViewPort) {
					isFirstDPInViewPort = true;

					if (i > 0) {
						i -= 2;
						continue;
					}
				}

				// This section makes sure that partially visible dataPoints are included at the end
				if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
					isLastDPInViewPort = true;
				} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
					continue;
				}

				if (dataSeries.dataPoints[i].label)
					plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;


				if (dataPointX < axisXDataInfo.viewPortMin)
					axisXDataInfo.viewPortMin = dataPointX;
				if (dataPointX > axisXDataInfo.viewPortMax)
					axisXDataInfo.viewPortMax = dataPointX;

				if (dataPointY < axisYDataInfo.viewPortMin)
					axisYDataInfo.viewPortMin = dataPointY;
				if (dataPointY > axisYDataInfo.viewPortMax)
					axisYDataInfo.viewPortMax = dataPointY;
			}

			this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
		}

		//this.dataPoints.sort(compareDataPointX);
		//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });
	}

	Chart.prototype._processStackedPlotUnit = function (plotUnit) {
		if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
			return;

		var axisYDataInfo = plotUnit.axisY.dataInfo;
		var axisXDataInfo = plotUnit.axisX.dataInfo;

		var dataPointX, dataPointY;
		var isDateTime = false;

		var dataPointYPositiveSums = [];
		var dataPointYNegativeSums = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
			var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
			var i = 0;
			var isFirstDPInViewPort = false;
			var isLastDPInViewPort = false;

			if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

				var plotAreaXMin = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;
				var plotAreaXMax = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
			}


			if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
				isDateTime = true;
			}

			for (i = 0; i < dataSeries.dataPoints.length; i++) {

				// Requird when no x values are provided 
				if (typeof dataSeries.dataPoints[i].x === "undefined") {
					dataSeries.dataPoints[i].x = i;
				}

				if (dataSeries.dataPoints[i].x.getTime) {
					isDateTime = true;
					dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
				}
				else
					dataPointX = dataSeries.dataPoints[i].x;

				dataPointY = dataSeries.dataPoints[i].y;



				if (dataPointX < axisXDataInfo.min)
					axisXDataInfo.min = dataPointX;
				if (dataPointX > axisXDataInfo.max)
					axisXDataInfo.max = dataPointX;

				if (i > 0) {
					var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
					xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

					if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
						axisXDataInfo.minDiff = xDiff;
					}
				}

				// This section makes sure that partially visible dataPoints are included in the begining
				if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
					continue;
				} else if (!isFirstDPInViewPort) {
					isFirstDPInViewPort = true;

					if (i > 0) {
						i -= 2;
						continue;
					}
				}

				// This section makes sure that partially visible dataPoints are included at the end
				if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
					isLastDPInViewPort = true;
				} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
					continue;
				}


				if (dataSeries.dataPoints[i].label)
					plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;

				if (dataPointX < axisXDataInfo.viewPortMin)
					axisXDataInfo.viewPortMin = dataPointX;
				if (dataPointX > axisXDataInfo.viewPortMax)
					axisXDataInfo.viewPortMax = dataPointX;

				if (dataPointY >= 0) {
					if (dataPointYPositiveSums[dataPointX])
						dataPointYPositiveSums[dataPointX] += dataPointY;
					else
						dataPointYPositiveSums[dataPointX] = dataPointY;
				} else {
					if (dataPointYNegativeSums[dataPointX])
						dataPointYNegativeSums[dataPointX] += dataPointY;
					else
						dataPointYNegativeSums[dataPointX] = dataPointY;
				}
			}

			this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
		}

		for (i in dataPointYPositiveSums) {

			if (isNaN(i)) {
				continue;
			}
			var ySum = dataPointYPositiveSums[i];

			if (ySum < axisYDataInfo.min)
				axisYDataInfo.min = ySum;

			if (ySum > axisYDataInfo.max)
				axisYDataInfo.max = ySum;

			if (i < axisXDataInfo.viewPortMin || i > axisXDataInfo.viewPortMax)
				continue;

			if (ySum < axisYDataInfo.viewPortMin)
				axisYDataInfo.viewPortMin = ySum;
			if (ySum > axisYDataInfo.viewPortMax)
				axisYDataInfo.viewPortMax = ySum;
		}

		for (i in dataPointYNegativeSums) {

			if (isNaN(i)) {
				continue;
			}

			var ySum = dataPointYNegativeSums[i];

			if (ySum < axisYDataInfo.min)
				axisYDataInfo.min = ySum;

			if (ySum > axisYDataInfo.max)
				axisYDataInfo.max = ySum;

			if (i < axisXDataInfo.viewPortMin || i > axisXDataInfo.viewPortMax)
				continue;

			if (ySum < axisYDataInfo.viewPortMin)
				axisYDataInfo.viewPortMin = ySum;
			if (ySum > axisYDataInfo.viewPortMax)
				axisYDataInfo.viewPortMax = ySum;
		}


		//this.dataPoints.sort(compareDataPointX);
		//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });

		//window.console.log("viewPortYMin: " + plotInfo.viewPortYMin + "; viewPortYMax: " + plotInfo.viewPortYMax);
	}

	Chart.prototype._processStacked100PlotUnit = function (plotUnit) {
		if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
			return;

		var axisYDataInfo = plotUnit.axisY.dataInfo;
		var axisXDataInfo = plotUnit.axisX.dataInfo;

		var dataPointX, dataPointY;
		var isDateTime = false;
		var containsPositiveY = false;
		var containsNegativeY = false;

		var dataPointYSums = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
			var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
			var i = 0;
			var isFirstDPInViewPort = false;
			var isLastDPInViewPort = false;

			if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

				var plotAreaXMin = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;
				var plotAreaXMax = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
			}


			if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
				isDateTime = true;
			}

			for (i = 0; i < dataSeries.dataPoints.length; i++) {

				// Requird when no x values are provided 
				if (typeof dataSeries.dataPoints[i].x === "undefined") {
					dataSeries.dataPoints[i].x = i;
				}

				if (dataSeries.dataPoints[i].x.getTime) {
					isDateTime = true;
					dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
				}
				else
					dataPointX = dataSeries.dataPoints[i].x;

				dataPointY = dataSeries.dataPoints[i].y;



				if (dataPointX < axisXDataInfo.min)
					axisXDataInfo.min = dataPointX;
				if (dataPointX > axisXDataInfo.max)
					axisXDataInfo.max = dataPointX;

				if (i > 0) {
					var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
					xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

					if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
						axisXDataInfo.minDiff = xDiff;
					}
				}

				// This section makes sure that partially visible dataPoints are included in the begining
				if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
					continue;
				} else if (!isFirstDPInViewPort) {
					isFirstDPInViewPort = true;

					if (i > 0) {
						i -= 2;
						continue;
					}
				}

				// This section makes sure that partially visible dataPoints are included at the end
				if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
					isLastDPInViewPort = true;
				} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
					continue;
				}

				if (dataSeries.dataPoints[i].label)
					plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;

				if (dataPointX < axisXDataInfo.viewPortMin)
					axisXDataInfo.viewPortMin = dataPointX;
				if (dataPointX > axisXDataInfo.viewPortMax)
					axisXDataInfo.viewPortMax = dataPointX;

				if (dataPointY >= 0) {
					containsPositiveY = true;
				} else {
					containsNegativeY = true;
				}

				if (dataPointYSums[dataPointX])
					dataPointYSums[dataPointX] += Math.abs(dataPointY);
				else
					dataPointYSums[dataPointX] = Math.abs(dataPointY);
			}

			this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
		}


		if (containsPositiveY && !containsNegativeY) {
			axisYDataInfo.max = 99;
			axisYDataInfo.min = 1;
		} else if (containsPositiveY && containsNegativeY) {
			axisYDataInfo.max = 99;
			axisYDataInfo.min = -99;
		} else if (!containsPositiveY && containsNegativeY) {
			axisYDataInfo.max = -1;
			axisYDataInfo.min = -99;
		}

		axisYDataInfo.viewPortMin = axisYDataInfo.min;
		axisYDataInfo.viewPortMax = axisYDataInfo.max;

		plotUnit.dataPointYSums = dataPointYSums;

		//this.dataPoints.sort(compareDataPointX);
		//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });

		//window.console.log("viewPortYMin: " + plotInfo.viewPortYMin + "; viewPortYMax: " + plotInfo.viewPortYMax);
	}

	Chart.prototype.getDataPointAtXY = function (mouseX, mouseY, getClosest) {

		getClosest = getClosest || false;
		var results = [];

		for (var i = this._dataInRenderedOrder.length - 1; i >= 0; i--) {
			var dataSeries = this._dataInRenderedOrder[i];

			var result = null;

			result = dataSeries.getDataPointAtXY(mouseX, mouseY, getClosest);
			if (result)
				results.push(result);
		}

		var closestResult = null;
		var onlyLineAreaTypes = false;

		for (var m = 0; m < results.length; m++) {

			if (results[m].dataSeries.type === "line" || results[m].dataSeries.type === "stepLine" || results[m].dataSeries.type === "area" || results[m].dataSeries.type === "stepArea") {
				var markerSize = getProperty("markerSize", results[m].dataPoint, results[m].dataSeries) || 8;
				if (results[m].distance <= markerSize / 2) {
					onlyLineAreaTypes = true;
					break;
				}
			}
		}

		for (m = 0; m < results.length; m++) {

			if (onlyLineAreaTypes && results[m].dataSeries.type !== "line" && results[m].dataSeries.type !== "stepLine" && results[m].dataSeries.type !== "area" && results[m].dataSeries.type !== "stepArea")
				continue;

			if (!closestResult) {
				closestResult = results[m];
			} else if (results[m].distance <= closestResult.distance) {
				closestResult = results[m];
			}
		}

		return closestResult;
	}


	/// <summary>Calculates Font Size based on standardSize and Chart Size</summary>
	/// <param name="standardSize" type="Number">Standard font size for a Chart with min(width,height) = 400px</param>
	/// <returns type="Number">The area.</returns>	
	Chart.prototype.getAutoFontSize = function (standardSize, width, height) {

		width = width || this.width;
		height = height || this.height;

		var fontSizeScaleFactor = standardSize / 400;

		return Math.round(Math.min(this.width, this.height) * fontSizeScaleFactor);
	}

	//#region Events

	Chart.prototype.resetOverlayedCanvas = function () {
		//var width = this.overlaidCanvas.width;
		//this.overlaidCanvas.width = 0;
		//this.overlaidCanvas.width = width;
		this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
	}

	Chart.prototype.attachEvent = function (param) {
		this._events.push(param);
	}

	Chart.prototype._touchEventHandler = function (ev) {
		if (!ev.changedTouches)
			return;

		var mouseEvents = [];
		var touches = ev.changedTouches;
		first = touches ? touches[0] : ev;

		switch (ev.type) {
			case "touchstart": case "MSPointerDown": mouseEvents = ["mousemove", "mousedown"]; break;
			case "touchmove": case "MSPointerMove": mouseEvents = ["mousemove"]; break;
			case "touchend": case "MSPointerUp": mouseEvents = (this._lastTouchEventType === "touchstart" || this._lastTouchEventType === "MSPointerDown") ? ["mouseup", "click"] : ["mouseup"];
				break;
			default: return;
		}

		this._lastTouchEventType = ev.type;

		for (var i = 0; i < mouseEvents.length; i++) {

			var type = mouseEvents[i];
			var simulatedEvent = document.createEvent("MouseEvent");
			simulatedEvent.initMouseEvent(type, true, true, window, 1,
									  first.screenX, first.screenY,
									  first.clientX, first.clientY, false,
									  false, false, false, 0/*left*/, null);

			first.target.dispatchEvent(simulatedEvent);

			if (ev.preventManipulation) {
				//alert("preventManipulation");
				ev.preventManipulation();
			}

			if (ev.preventDefault) {
				//alert("preventDefault");
				ev.preventDefault();
			}
		}
	}

	Chart.prototype._mouseEventHandler = function (ev) {
		// stop panning and zooming so we can draw
		if (ev.preventManipulation) {
			//alert("preventManipulation");
			ev.preventManipulation();
		}

		// we are handling this event
		if (ev.preventDefault) {
			//alert("preventDefault");
			ev.preventDefault();
		}

		//IE8- uses srcElement instead of target. So instead of checking this condition everytime, its better to create a reference called target.
		if (typeof (ev.target) === "undefined" && ev.srcElement)
			ev.target = ev.srcElement;

		//console.log(ev.type);

		var xy = getMouseCoordinates(ev);
		var type = ev.type;
		var eventParam;
		var rightclick;

		if (!ev) var e = window.event;
		if (ev.which) rightclick = (ev.which == 3);
		else if (ev.button) rightclick = (ev.button == 2);

		//window.console.log(type + " --> x: " + xy.x + "; y:" + xy.y);

		//if (type === "mouseout") {
		//    this._toolTip.hide();
		//}

		if (isDebugMode && window.console) {
			window.console.log(type + " --> x: " + xy.x + "; y:" + xy.y);
			if (rightclick)
				window.console.log(ev.which);

			if (type === "mouseup")
				window.console.log("mouseup");
		}

		if (rightclick)
			return;

		//if (this.plotInfo.axisPlacement === "xySwapped") {
		//    //var temp = xy.x;
		//    //xy.x = xy.y;
		//    //xy.y = temp;
		//    xy = {x: xy.y, y: xy.x};
		//}

		if (Chart.capturedEventParam) {
			eventParam = Chart.capturedEventParam;

			if (type === "mouseup") {
				Chart.capturedEventParam = null;

				if (eventParam.chart.overlaidCanvas.releaseCapture)
					eventParam.chart.overlaidCanvas.releaseCapture();
				else
					document.body.removeEventListener("mouseup", eventParam.chart._mouseEventHandler, false);

			}

			if (eventParam.hasOwnProperty(type))
				eventParam[type].call(eventParam.context, xy.x, xy.y);



		}
		else if (this._events) {

			for (var i = 0; i < this._events.length; i++) {
				if (!this._events[i].hasOwnProperty(type))
					continue;

				eventParam = this._events[i];
				var bounds = eventParam.bounds;

				if (xy.x >= bounds.x1 && xy.x <= bounds.x2 && xy.y >= bounds.y1 && xy.y <= bounds.y2) {
					eventParam[type].call(eventParam.context, xy.x, xy.y);

					if (type === "mousedown" && eventParam.capture === true) {
						Chart.capturedEventParam = eventParam;

						if (this.overlaidCanvas.setCapture)
							this.overlaidCanvas.setCapture();
						else {
							document.body.addEventListener("mouseup", this._mouseEventHandler, false);
							//addEvent(document.body, "mouseup", this._mouseEventHandler);
						}
					} else if (type === "mouseup") {
						if (eventParam.chart.overlaidCanvas.releaseCapture)
							eventParam.chart.overlaidCanvas.releaseCapture();
						else
							document.body.removeEventListener("mouseup", this._mouseEventHandler, false);
					}

					break;
				}
				else
					eventParam = null;
			}

			if (eventParam && eventParam.cursor) {
				ev.target.style.cursor = eventParam.cursor;
			}
			else
				ev.target.style.cursor = this._defaultCursor;

			//eventParam = 
		}

		if (this._toolTip && this._toolTip.enabled) {

			var plotArea = this.plotArea;

			if (xy.x < plotArea.x1 || xy.x > plotArea.x2 || xy.y < plotArea.y1 || xy.y > plotArea.y2)
				this._toolTip.hide();
		}


		if ((!this.isDrag || !this.zoomEnabled) && this._eventManager) {
			this._eventManager.mouseEventHandler(ev);
			//this._updateToolTip(ev.x, ev.y);            
		}

		//if (this._toolTip.enabled)
		//    this._toolTip.mouseMoveHandler(ev.x, ev.y);
	}

	Chart.prototype._plotAreaMouseDown = function (x, y) {
		this.isDrag = true;

		if (this.plotInfo.axisPlacement !== "none") {
			this.dragStartPoint = { x: x, y: y, xMinimum: this.axisX.minimum, xMaximum: this.axisX.maximum };
		} else {
			this.dragStartPoint = { x: x, y: y };
		}

	}

	Chart.prototype._plotAreaMouseUp = function (x, y) {

		if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
			if (this.isDrag) {

				var dragDelta = 0;
				var dragValue = 0;
				var axisXProps = this.axisX.lineCoordinates;

				if (this.plotInfo.axisPlacement === "xySwapped") {
					dragDelta = y - this.dragStartPoint.y;
					dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.height * dragDelta;
				}
				else {
					dragDelta = this.dragStartPoint.x - x;
					dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.width * dragDelta;
				}

				if (Math.abs(dragDelta) > 2) {
					if (this.panEnabled) {

						var reRender = false;
						var overFlow = 0;

						//If the user has panned beyond the minimum/maximum value of axisX, then take it back to minimum/maximum.
						if (this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum) {

							overFlow = this.axisX._absoluteMinimum - this.axisX.sessionVariables.internalMinimum;

							this.axisX.sessionVariables.internalMinimum += overFlow;
							this.axisX.sessionVariables.internalMaximum += overFlow;
							reRender = true;
						} else if (this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum) {

							overFlow = this.axisX.sessionVariables.internalMaximum - this.axisX._absoluteMaximum;
							this.axisX.sessionVariables.internalMaximum -= overFlow;
							this.axisX.sessionVariables.internalMinimum -= overFlow;

							reRender = true;
						}
						//}


						//this.overlaidCanvas.style.cursor = this._defaultCursor;


						if (reRender)
							this.render();

					} else if (this.zoomEnabled) {

						this.resetOverlayedCanvas();

						//alert("mouse UP");
						if (!this.dragStartPoint)
							return;

						if (this.plotInfo.axisPlacement === "xySwapped") {
							//In Pixels
							var selectedRegion = { y1: Math.min(this.dragStartPoint.y, y), y2: Math.max(this.dragStartPoint.y, y) };

							if (Math.abs(selectedRegion.y1 - selectedRegion.y2) > 1) {
								var axisXProps = this.axisX.lineCoordinates;

								var minX = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / axisXProps.height * (selectedRegion.y2 - axisXProps.y1);
								var maxX = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / axisXProps.height * (selectedRegion.y1 - axisXProps.y1);

								minX = Math.max(minX, this.axisX.dataInfo.min);
								maxX = Math.min(maxX, this.axisX.dataInfo.max);

								if (Math.abs((maxX - minX) / this.axisX.dataInfo.minDiff) >= 4 / 500 * this.height) {

									this.axisX.sessionVariables.internalMinimum = minX;
									this.axisX.sessionVariables.internalMaximum = maxX;

									this.render();
								}
							}
						} else if (this.plotInfo.axisPlacement === "normal") {
							var selectedRegion = { x1: Math.min(this.dragStartPoint.x, x), x2: Math.max(this.dragStartPoint.x, x) };

							if (Math.abs(selectedRegion.x1 - selectedRegion.x2) > 1) {
								var axisXProps = this.axisX.lineCoordinates;

								var minX = (this.axisX.maximum - this.axisX.minimum) / axisXProps.width * (selectedRegion.x1 - axisXProps.x1) + this.axisX.minimum;
								var maxX = (this.axisX.maximum - this.axisX.minimum) / axisXProps.width * (selectedRegion.x2 - axisXProps.x1) + this.axisX.minimum;

								minX = Math.max(minX, this.axisX.dataInfo.min);
								maxX = Math.min(maxX, this.axisX.dataInfo.max);

								if (Math.abs((maxX - minX) / this.axisX.dataInfo.minDiff) >= 5 / 500 * this.width) {

									this.axisX.sessionVariables.internalMinimum = minX;
									this.axisX.sessionVariables.internalMaximum = maxX;

									this.render();
								}
							}
						}
					}

					if (this.zoomEnabled && this._toolBar.style.display === "none") {
						this._toolBar.style.display = "inline";
						this._zoomButton.innerHTML = this._cultureInfo.panText;
						this._resetButton.innerHTML = this._cultureInfo.resetText;
					}
				}
			}

		}

		this.isDrag = false;

		//this.dragStartPoint = null;
	}

	Chart.prototype._plotAreaMouseMove = function (x, y) {
		if (this.isDrag && this.plotInfo.axisPlacement !== "none") {

			var dragDelta = 0;
			var dragValue = 0;
			var axisXProps = this.axisX.lineCoordinates;

			if (this.plotInfo.axisPlacement === "xySwapped") {
				dragDelta = y - this.dragStartPoint.y;
				dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.height * dragDelta;
			}
			else {
				dragDelta = this.dragStartPoint.x - x;
				dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.width * dragDelta;
			}

			if (Math.abs(dragDelta) > 2 && Math.abs(dragDelta) < 8 && (this.panEnabled || this.zoomEnabled)) {
				this._toolTip.hide();
			} else if (this._toolTip.enabled && !this.panEnabled && !this.zoomEnabled) {
				this._toolTip.mouseMoveHandler(x, y);
			}

			if (Math.abs(dragDelta) > 2 && (this.panEnabled || this.zoomEnabled)) {
				if (this.panEnabled) {

					this.axisX.sessionVariables.internalMinimum = this.dragStartPoint.xMinimum + dragValue;
					this.axisX.sessionVariables.internalMaximum = this.dragStartPoint.xMaximum + dragValue;

					var overFlow = 0;

					// This is to stop the user from dragging chart beyond some limit (this.axisX._absoluteMinimum - this.axisX.interval)
					if (this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum - convertToNumber(this.axisX.interval, this.axisX.intervalType)) {

						overFlow = (this.axisX._absoluteMinimum - convertToNumber(this.axisX.interval, this.axisX.intervalType)) - this.axisX.sessionVariables.internalMinimum;
						this.axisX.sessionVariables.internalMinimum += overFlow;
						this.axisX.sessionVariables.internalMaximum += overFlow;
					} else if (this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum + convertToNumber(this.axisX.interval, this.axisX.intervalType)) {
						overFlow = this.axisX.sessionVariables.internalMaximum - (this.axisX._absoluteMaximum + convertToNumber(this.axisX.interval, this.axisX.intervalType));
						this.axisX.sessionVariables.internalMaximum -= overFlow;
						this.axisX.sessionVariables.internalMinimum -= overFlow;
					}

					//this.dragStartPoint.x = x;

					//this.render();
					var _this = this;

					clearTimeout(this._panTimerId);
					this._panTimerId = setTimeout(function () {
						_this.render();
					}, 0);

				} else if (this.zoomEnabled) {
					var plotAreaBounds = this.plotArea;

					this.resetOverlayedCanvas();

					var alpha = this.overlaidCanvasCtx.globalAlpha;

					this.overlaidCanvasCtx.globalAlpha = .7;
					this.overlaidCanvasCtx.fillStyle = "#A0ABB8";

					if (this.plotInfo.axisPlacement === "xySwapped") {
						this.overlaidCanvasCtx.fillRect(plotAreaBounds.x1, this.dragStartPoint.y, plotAreaBounds.x2 - plotAreaBounds.x1, y - this.dragStartPoint.y);
					}
					else if (this.plotInfo.axisPlacement === "normal") {
						this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x, plotAreaBounds.y1, x - this.dragStartPoint.x, plotAreaBounds.y2 - plotAreaBounds.y1);
					}

					this.overlaidCanvasCtx.globalAlpha = alpha;
				}
			}

			//if (dragDelta > 5) {
			//    this._toolTip.hide();
			//    return;
			//} else if (this._toolTip.enabled)
			//    this._toolTip.mouseMoveHandler(x, y);

		} else if (this._toolTip.enabled)
			this._toolTip.mouseMoveHandler(x, y);
	}

	//#endregion Events

	Chart.prototype.preparePlotArea = function () {

		var plotArea = this.plotArea;

		var yAxis = this.axisY ? this.axisY : this.axisY2;

		if (!isCanvasSupported && (plotArea.x1 > 0 || plotArea.y1 > 0)) {
			plotArea.ctx.translate(plotArea.x1, plotArea.y1);
		}

		if (this.axisX && yAxis) {
			plotArea.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : yAxis.lineCoordinates.x1;
			plotArea.y1 = (this.axisX.lineCoordinates.y1 < yAxis.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : yAxis.lineCoordinates.y1);

			plotArea.x2 = (this.axisX.lineCoordinates.x2 > yAxis.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : yAxis.lineCoordinates.x2);
			plotArea.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : yAxis.lineCoordinates.y2;

			plotArea.width = plotArea.x2 - plotArea.x1;
			plotArea.height = plotArea.y2 - plotArea.y1;
			//plotArea = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
		} else {
			//ToDo: @sunil
			var freeSpace = this.layoutManager.getFreeSpace();
			plotArea.x1 = freeSpace.x1;
			plotArea.x2 = freeSpace.x2;
			plotArea.y1 = freeSpace.y1;
			plotArea.y2 = freeSpace.y2;

			plotArea.width = freeSpace.width;
			plotArea.height = freeSpace.height;
		}

		if (!isCanvasSupported) {

			plotArea.canvas.width = plotArea.width;
			plotArea.canvas.height = plotArea.height;

			plotArea.canvas.style.left = plotArea.x1 + "px";
			plotArea.canvas.style.top = plotArea.y1 + "px";

			if (plotArea.x1 > 0 || plotArea.y1 > 0) {
				plotArea.ctx.translate(-plotArea.x1, -plotArea.y1);
			}
		}
	}

	Chart.prototype.getPixelCoordinatesOnPlotArea = function (x, y) {
		return { x: this.axisX.getPixelCoordinatesOnAxis(x).x, y: this.axisY.getPixelCoordinatesOnAxis(y).y }
		//return { x: 5, y: 10 };
	}

	//#region Render Methods

	Chart.prototype.renderIndexLabels = function () {
		var ctx = this.plotArea.ctx;

		ctx.textBaseline = "middle";
		var plotArea = this.plotArea;

		for (var i = 0; i < this._indexLabels.length; i++) {

			var indexLabel = this._indexLabels[i];

			var x, y, angle;

			ctx.fillStyle = getProperty("indexLabelFontColor", indexLabel.dataPoint, indexLabel.dataSeries);
			ctx.font = getFontString("indexLabel", indexLabel.dataPoint, indexLabel.dataSeries);
			var indexLabelText = this.replaceKeywordsWithValue(getProperty("indexLabel", indexLabel.dataPoint, indexLabel.dataSeries), indexLabel.dataPoint, indexLabel.dataSeries);
			var textSize = { width: ctx.measureText(indexLabelText).width, height: getProperty("indexLabelFontSize", indexLabel.dataPoint, indexLabel.dataSeries) };
			var placement = getProperty("indexLabelPlacement", indexLabel.dataPoint, indexLabel.dataSeries);
			var orientation = getProperty("indexLabelOrientation", indexLabel.dataPoint, indexLabel.dataSeries);
			var angle = 0;

			var yMinLimit = 0;
			var yMaxLimit = 0;
			var xMinLimit = 0;
			var xMaxLimit = 0;

			//So that indexLabel is skipped once the point is outside of plotArea
			if (indexLabel.point.x < plotArea.x1 || indexLabel.point.x > plotArea.x2 || indexLabel.point.y < plotArea.y1 || indexLabel.point.y > plotArea.y2)
				continue;

			if (indexLabel.chartType === "column" || indexLabel.chartType === "stackedColumn" || indexLabel.chartType === "stackedColumn100"
				|| indexLabel.chartType === "bar" || indexLabel.chartType === "stackedBar" || indexLabel.chartType === "stackedBar100") {

				var width = Math.abs(indexLabel.bounds.x1, indexLabel.bounds.x2)
				var height = Math.abs(indexLabel.bounds.y1, indexLabel.bounds.y2)

				if (this.plotInfo.axisPlacement === "normal") {

					if (placement === "outside") {

						yMinLimit = plotArea.y1;
						yMaxLimit = plotArea.y2;

					} else if (placement === "inside") {

						yMinLimit = indexLabel.bounds.y1;
						yMaxLimit = indexLabel.bounds.y2;

					}

					if (orientation === "horizontal") {
						x = indexLabel.point.x - textSize.width / 2;

						if (indexLabel.dataPoint.y >= 0)
							y = Math.min((Math.max(indexLabel.point.y - textSize.height / 2 - 5, yMinLimit + textSize.height / 2 + 5)), yMaxLimit - textSize.height / 2 - 5);
						else
							y = Math.max((Math.min(indexLabel.point.y + textSize.height / 2 + 5, yMaxLimit - textSize.height / 2)), yMinLimit + textSize.height / 2 + 5);
					}
					else if (orientation === "vertical") {
						x = indexLabel.point.x;
						if (indexLabel.dataPoint.y >= 0)
							y = Math.min(Math.max(indexLabel.point.y - 5, yMinLimit + textSize.width + 5), yMaxLimit);
						else
							y = Math.max(Math.min(indexLabel.point.y + textSize.width + 5, yMaxLimit - 5), yMinLimit);

						angle = -90;
					}

				} else if (this.plotInfo.axisPlacement === "xySwapped") {

					if (placement === "outside") {

						xMinLimit = plotArea.x1;
						xMaxLimit = plotArea.x2;

					} else if (placement === "inside") {

						xMinLimit = indexLabel.bounds.x1;
						xMaxLimit = indexLabel.bounds.x2;

					}

					if (orientation === "horizontal") {
						y = indexLabel.point.y;

						if (indexLabel.dataPoint.y >= 0)
							x = Math.max((Math.min(indexLabel.point.x + 5, xMaxLimit - textSize.width)), xMinLimit);
						else
							x = Math.min((Math.max(indexLabel.point.x - textSize.width - 5, xMinLimit)), xMaxLimit);
					}
					else if (orientation === "vertical") {
						y = indexLabel.point.y + textSize.width / 2;

						if (indexLabel.dataPoint.y >= 0)
							x = Math.max(Math.min(indexLabel.point.x + textSize.height / 2 + 5, xMaxLimit - textSize.height / 2), xMinLimit);
						else
							x = Math.min(Math.max(indexLabel.point.x - textSize.height / 2 - 5, xMinLimit + textSize.height / 2), xMaxLimit + textSize.height / 2);

						angle = -90;
					}

				}

			} else {

				if (orientation === "horizontal") {

					x = indexLabel.point.x - textSize.width / 2;

					if (indexLabel.dataPoint.y >= 0)
						y = Math.max(indexLabel.point.y - textSize.height / 2 - 5, plotArea.y1 + textSize.height / 2);
					else
						y = Math.min(indexLabel.point.y + textSize.height / 2 + 5, plotArea.y2 - textSize.height / 2);

				} else if (orientation === "vertical") {

					x = indexLabel.point.x;

					if (indexLabel.dataPoint.y >= 0)
						y = Math.max(indexLabel.point.y - 5, plotArea.y1 + textSize.width);
					else
						y = Math.min(indexLabel.point.y + textSize.width + 5, plotArea.y2);

					angle = -90;
				}

			}

			ctx.save();

			ctx.translate(x, y);
			ctx.rotate(Math.PI / 180 * angle);

			ctx.fillText(indexLabelText, 0, 0);

			ctx.restore();
		}
	}

	Chart.prototype.renderLine = function (plotUnit) {

		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;
		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;
		//var ghostCtx = this.overlaidCanvasCtx;

		ctx.save();

		var plotArea = this.plotArea;

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		var markers = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			ctx.lineWidth = dataSeries.lineThickness;
			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.strokeStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

			colorSet = dataSeries._colorSet;
			color = colorSet[0];
			ctx.strokeStyle = color;

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
			//    dataSeries.markerSize = 8;

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				//dataSeries.noDataPointsInPlotArea = 0

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
						continue;

					//if (!isFinite(dataPoints[i].y))
					//    continue;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };


					//dataSeries.noDataPointsInPlotArea++;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					} else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 500 == 0) {
							ctx.stroke();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.stroke();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}
						}
					}

					//Render Marker
					if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

						var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
						markers.push(markerProps);

						if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
							dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
						}

						var markerColor = intToHexColorString(id);

						//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);

						if (isCanvasSupported) {
							markers.push({
								x: x, y: y, ctx: ghostCtx,
								type: markerProps.type,
								size: markerProps.size,
								color: markerColor,
								borderColor: markerColor,
								borderThickness: markerProps.borderThickness
							});
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "line",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}

				}

				ctx.stroke();

				if (isCanvasSupported)
					ghostCtx.stroke();

				//if (!dataSeries._options.markerSize && dataSeries.noDataPointsInPlotArea > plotArea.width / 16)
				//    continue;

				//if (dataSeries.markerType && dataSeries.markerSize > 0) {
				//    for (i = 0; i < dataPoints.length; i++) {

				//        dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

				//        if (dataPointX < this.plotInfo.viewPortXMin || dataPointX > this.plotInfo.viewPortXMax)
				//            continue;

				//        x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
				//        y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

				//        markers.push({ x: x, y: y, ctx: ctx, type: dataSeries.markerType, size: dataSeries.markerSize, color: color, borderColor: dataSeries.markerBorderColor, borderThickness: dataSeries.markerBorderThickness });
				//    }
				//}
			}

		}


		RenderHelper.drawMarkers(markers);
		ctx.restore();

		ctx.beginPath();

		if (isCanvasSupported)
			ghostCtx.beginPath();
	}

	Chart.prototype.renderStepLine = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;
		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;
		//var ghostCtx = this.overlaidCanvasCtx;

		ctx.save();

		var plotArea = this.plotArea;

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		var markers = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			ctx.lineWidth = dataSeries.lineThickness;
			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.strokeStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

			colorSet = dataSeries._colorSet;
			color = colorSet[0];
			ctx.strokeStyle = color;

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
			//    dataSeries.markerSize = 8;

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				//dataSeries.noDataPointsInPlotArea = 0

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
						continue;

					//if (!isFinite(dataPoints[i].y))
					//    continue;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					var prevY = y;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };


					//dataSeries.noDataPointsInPlotArea++;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					} else {

						ctx.lineTo(x, prevY);
						if (isCanvasSupported)
							ghostCtx.lineTo(x, prevY);

						ctx.lineTo(x, y);
						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 500 == 0) {
							ctx.stroke();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.stroke();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}
						}
					}

					//Render Marker
					if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

						var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
						markers.push(markerProps);

						if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
							dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
						}

						var markerColor = intToHexColorString(id);

						//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);
						if (isCanvasSupported) {
							markers.push({
								x: x, y: y, ctx: ghostCtx,
								type: markerProps.type,
								size: markerProps.size,
								color: markerColor,
								borderColor: markerColor,
								borderThickness: markerProps.borderThickness
							});
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stepLine",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}

				}

				ctx.stroke();
				if (isCanvasSupported)
					ghostCtx.stroke();
			}
		}


		RenderHelper.drawMarkers(markers);
		ctx.restore();

		ctx.beginPath();

		if (isCanvasSupported)
			ghostCtx.beginPath();
	}

	function getBezierPoints(points, tension) {
		var bezierPoints = [];

		for (var i = 0; i < points.length; i++) {

			if (i == 0) {
				bezierPoints.push(points[0]);
				continue;
			}

			var i1, i2, pointIndex;

			pointIndex = i - 1;
			i1 = pointIndex === 0 ? 0 : pointIndex - 1;
			i2 = pointIndex === points.length - 1 ? pointIndex : pointIndex + 1;

			var drv1 = { x: (points[i2].x - points[i1].x) / tension, y: (points[i2].y - points[i1].y) / tension }
			var cp1 = { x: points[pointIndex].x + drv1.x / 3, y: points[pointIndex].y + drv1.y / 3 }
			bezierPoints[bezierPoints.length] = cp1;


			pointIndex = i;
			i1 = pointIndex === 0 ? 0 : pointIndex - 1;
			i2 = pointIndex === points.length - 1 ? pointIndex : pointIndex + 1;

			var drv2 = { x: (points[i2].x - points[i1].x) / tension, y: (points[i2].y - points[i1].y) / tension }
			var cp2 = { x: points[pointIndex].x - drv2.x / 3, y: points[pointIndex].y - drv2.y / 3 }
			bezierPoints[bezierPoints.length] = cp2;

			bezierPoints[bezierPoints.length] = points[i];
		}

		return bezierPoints;
	}

	Chart.prototype.renderSpline = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;
		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		ctx.save();

		var plotArea = this.plotArea;

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		var markers = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			ctx.lineWidth = dataSeries.lineThickness;
			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.strokeStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

			colorSet = dataSeries._colorSet;
			color = colorSet[0];
			ctx.strokeStyle = color;

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
			//    dataSeries.markerSize = 8;

			var pixels = [];

			if (dataPoints.length > 0) {

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
						continue;

					//if (!isFinite(dataPoints[i].y))
					//    continue;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };


					pixels[pixels.length] = { x: x, y: y };


					//Add Markers
					if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

						var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
						markers.push(markerProps);

						if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
							dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
						}

						var markerColor = intToHexColorString(id);

						//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);
						if (isCanvasSupported) {
							markers.push({
								x: x, y: y, ctx: ghostCtx,
								type: markerProps.type,
								size: markerProps.size,
								color: markerColor,
								borderColor: markerColor,
								borderThickness: markerProps.borderThickness
							});
						}
					}

					//Add Labels
					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "spline",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}

				}
			}

			var bp = getBezierPoints(pixels, 2);

			if (bp.length > 0) {
				ctx.beginPath();
				if (isCanvasSupported)
					ghostCtx.beginPath();

				ctx.moveTo(bp[0].x, bp[0].y);
				if (isCanvasSupported)
					ghostCtx.moveTo(bp[0].x, bp[0].y);

				for (var i = 0; i < bp.length - 3; i += 3) {

					ctx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

					if (isCanvasSupported)
						ghostCtx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

					if (i > 0 && i % 3000 === 0) {
						ctx.stroke();
						ctx.beginPath();
						ctx.moveTo(bp[i + 3].x, bp[i + 3].y);

						if (isCanvasSupported) {
							ghostCtx.stroke();
							ghostCtx.beginPath();
							ghostCtx.moveTo(bp[i + 3].x, bp[i + 3].y);
						}
					}
				}

				ctx.stroke();

				if (isCanvasSupported)
					ghostCtx.stroke();
			}

		}


		RenderHelper.drawMarkers(markers);
		ctx.restore();

		ctx.beginPath();

		if (isCanvasSupported)
			ghostCtx.beginPath();
	}

	var drawRect = function (ctx, x1, y1, x2, y2, color, top, bottom, left, right) {
		//alert("top"+ top + "bottom" + bottom + " lt" + left+ "rt" + right )
		var a1 = x1, a2 = x2, b1 = y1, b2 = y2, edgeY, edgeX;
		if (x2 - x1 > 15 && y2 - y1 > 15)
			var bevelDepth = 8;
		else
			var bevelDepth = 0.35 * Math.min((x2 - x1), (y2 - y1));
		//alert(a1 + "" + a2);
		color2 = "rgba(255, 255, 255, .4)";
		color3 = "rgba(255, 255, 255, 0.1)";
		//color1 = "rgba(" + r + "," + g + ", " + b + ",1)";
		color1 = color;

		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.save();
		ctx.fillStyle = color1;
		//  ctx.moveTo(x1, y1);
		ctx.fillRect(x1, y1, x2 - x1, y2 - y1)
		ctx.restore();
		//   ctx.beginPath();
		if (top === true) {
			// alert(x1 + "" + x2 + " " + bevelDepth);
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x1 + bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x2 - bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x2, y1);
			ctx.closePath();
			var grd = ctx.createLinearGradient((x2 + x1) / 2, b1 + bevelDepth, (x2 + x1) / 2, b1);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color2);
			ctx.fillStyle = grd;
			ctx.fill();
			//              ctx.stroke();
			ctx.restore();
		}


		if (bottom === true) {
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1, y2);
			ctx.lineTo(x1 + bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x2 - bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x2, y2);
			ctx.closePath();
			var grd = ctx.createLinearGradient((x2 + x1) / 2, b2 - bevelDepth, (x2 + x1) / 2, b2);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color2);
			ctx.fillStyle = grd;
			//       ctx.stroke();
			ctx.fill();
			ctx.restore();
		}

		if (left === true) {
			//   alert(x1)
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1, y1)
			ctx.lineTo(x1 + bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x1 + bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x1, y2);
			ctx.closePath();
			var grd = ctx.createLinearGradient(a1 + bevelDepth, (y2 + y1) / 2, a1, (y2 + y1) / 2);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color3);
			ctx.fillStyle = grd;
			ctx.fill();
			//     ctx.stroke();
			ctx.restore();
		}


		if (right === true) {
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x2, y1)
			ctx.lineTo(x2 - bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x2 - bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x2, y2);
			var grd = ctx.createLinearGradient(a2 - bevelDepth, (y2 + y1) / 2, a2, (y2 + y1) / 2);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color3);
			ctx.fillStyle = grd;
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color3);
			ctx.fillStyle = grd;
			ctx.fill();
			ctx.closePath();
			//          ctx.stroke();
			ctx.restore();
		}
		//	

	}

	Chart.prototype.renderColumn = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = (this.width * .15);
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.totalDataSeries * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}
		//ctx.beginPath();

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;
						

			// Reducing pixelPerUnit by 1 just to overcome any problems due to rounding off of pixels.
			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);

			//var offsetX = barWidth * plotUnit.index << 0;


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				for (i = 0; i < dataPoints.length; i++) {

					dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var x1 = x - (plotUnit.plotType.totalDataSeries * barWidth / 2) + ((plotUnit.previousDataSeriesCount + j) * barWidth) << 0;
					var x2 = x1 + barWidth << 0;
					var y1;
					var y2;

					if (dataPoints[i].y >= 0) {
						y1 = y;

						y2 = yZeroToPixel;

						if (y1 > y2) {
							var temp = y1;
							y1 = y2;
							y2 = y1;
						}

					} else {
						y2 = y;

						y1 = yZeroToPixel;

						if (y1 > y2) {
							var temp = y1;
							y1 = y2;
							y2 = y1;
						}
					}

					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled && (dataPoints[i].y >= 0), (dataPoints[i].y < 0) && bevelEnabled, false, false);

					//if (dataSeries.markerType && dataSeries.markerSize > 0) {
					//    RenderHelper.drawMarker(x1 + (x2 - x1) / 2, y, ctx, dataSeries.markerType, dataSeries.markerSize, color, dataSeries.markerBorderColor, dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : 1);
					//}

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };

					color = intToHexColorString(id);
					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "column",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x1 + (x2 - x1) / 2, y: dataPoints[i].y >= 0 ? y1 : y2 },
							bounds: { x1: x1, y1: Math.min(y1, y2), x2: x2, y2: Math.max(y1, y2) },
							color: color
						});

					}
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedColumn = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;



		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			// Reducing pixelPerUnit by 1 just to overcome any problems due to rounding off of pixels.
			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var x1 = x - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var x2 = x1 + barWidth << 0;
					var y1;
					var y2;


					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						y1 = y - offset;
						y2 = yZeroToPixel - offset;

						offsetPositiveY[dataPointX] = offset + (y2 - y1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						y2 = y + offset;
						y1 = yZeroToPixel + offset;

						offsetNegativeY[dataPointX] = offset + (y2 - y1);
					}

					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];

					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled && (dataPoints[i].y >= 0), (dataPoints[i].y < 0) && bevelEnabled, false, false);

					//if (dataSeries.markerType && dataSeries.markerSize > 0) {
					//    RenderHelper.drawMarker(x1 + (x2 - x1)/2, y1, ctx, dataSeries.markerType, dataSeries.markerSize, color, dataSeries.markerBorderColor, dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : 1);
					//}

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedColumn",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: dataPoints[i].y >= 0 ? y1 : y2 },
							bounds: { x1: x1, y1: Math.min(y1, y2), x2: x2, y2: Math.max(y1, y2) },
							color: color
						});

					}
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedColumn100 = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;


			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				//ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;

					var yPercent;
					if (plotUnit.dataPointYSums[dataPointX] !== 0)
						yPercent = dataPoints[i].y / plotUnit.dataPointYSums[dataPointX] * 100;
					else
						yPercent = 0;

					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (yPercent - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var x1 = x - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var x2 = x1 + barWidth << 0;
					var y1;
					var y2;


					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						y1 = y - offset;
						y2 = yZeroToPixel - offset;

						offsetPositiveY[dataPointX] = offset + (y2 - y1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						y2 = y + offset;
						y1 = yZeroToPixel + offset;

						offsetNegativeY[dataPointX] = offset + (y2 - y1);
					}


					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled && (dataPoints[i].y >= 0), (dataPoints[i].y < 0) && bevelEnabled, false, false);

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedColumn100",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: dataPoints[i].y >= 0 ? y1 : y2 },
							bounds: { x1: x1, y1: Math.min(y1, y2), x2: x2, y2: Math.max(y1, y2) },
							color: color
						});

					}
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderBar = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		//In case of Bar Chart, yZeroToPixel is x co-ordinate!
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.height * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		//var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / totalDataSeries * .9) << 0;

		var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.totalDataSeries * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;


			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					//x and y are pixel co-ordinates of point and should not be confused with X and Y values
					y = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					x = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;


					var y1 = (y - (plotUnit.plotType.totalDataSeries * barWidth / 2) + ((plotUnit.previousDataSeriesCount + j) * barWidth)) << 0;
					var y2 = y1 + barWidth << 0;
					var x1;
					var x2;

					if (dataPoints[i].y >= 0) {
						x1 = yZeroToPixel;
						x2 = x;
					} else {
						x1 = x;
						x2 = yZeroToPixel;
					}

					//drawRect(ctx, x1, y1, plotArea.x2, y2, "#EEEEEE", false, false, false, false);
					//drawRect(ctx, x1, y1, plotArea.x2, y2, "#BDCED3", false, false, false, false);

					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					//color = "#1B4962";
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled, false, false, false);


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					this._indexLabels.push({
						chartType: "bar",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: { x: dataPoints[i].y >= 0 ? x2 : x1, y: y1 + (y2 - y1) / 2 },
						bounds: { x1: Math.min(x1, x2), y1: y1, x2: Math.max(x1, x2), y2: y2 },
						color: color
					});
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedBar = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					y = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					x = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					//var x1 = x - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;

					var y1 = y - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var y2 = y1 + barWidth << 0;
					var x1;
					var x2;

					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						x1 = yZeroToPixel + offset;
						x2 = x + offset;

						offsetPositiveY[dataPointX] = offset + (x2 - x1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						x1 = x - offset;
						x2 = yZeroToPixel - offset;

						offsetNegativeY[dataPointX] = offset + (x2 - x1);
					}


					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled, false, false, false);

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					this._indexLabels.push({
						chartType: "stackedBar",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: { x: dataPoints[i].y >= 0 ? x2 : x1, y: y },
						bounds: { x1: Math.min(x1, x2), y1: y1, x2: Math.max(x1, x2), y2: y2 },
						color: color
					});
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedBar100 = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					y = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;

					var yPercent;
					if (plotUnit.dataPointYSums[dataPointX] !== 0)
						yPercent = dataPoints[i].y / plotUnit.dataPointYSums[dataPointX] * 100;
					else
						yPercent = 0;

					x = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (yPercent - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var y1 = y - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var y2 = y1 + barWidth << 0;
					var x1;
					var x2;


					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						x1 = yZeroToPixel + offset;
						x2 = x + offset;

						offsetPositiveY[dataPointX] = offset + (x2 - x1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						x1 = x - offset;
						x2 = yZeroToPixel - offset;

						offsetNegativeY[dataPointX] = offset + (x2 - x1);
					}


					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled, false, false, false);

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					this._indexLabels.push({
						chartType: "stackedBar100",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: { x: dataPoints[i].y >= 0 ? x2 : x1, y: y },
						bounds: { x1: Math.min(x1, x2), y1: y1, x2: Math.max(x1, x2), y2: y2 },
						color: color
					});
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		var axisXProps = plotUnit.axisX.lineCoordinates;
		var axisYProps = plotUnit.axisY.lineCoordinates;
		var markers = [];

		var plotArea = this.plotArea;
		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];

			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };

			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			//ghostCtx.lineWidth = 20;

			markers = [];

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;
			var baseY;

			var startPoint = null;

			if (dataPoints.length > 0) {
				//ctx.strokeStyle = "#4572A7 ";                
				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);
						startPoint = { x: x, y: y };

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
								baseY = yZeroToPixel;
							}
							else if (plotUnit.axisY.maximum < 0)
								baseY = axisYProps.y1;
							else if (plotUnit.axisY.minimum > 0)
								baseY = axisXProps.y2;

							ctx.lineTo(x, baseY);
							ctx.lineTo(startPoint.x, baseY);
							ctx.closePath();
							ctx.fill();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.lineTo(x, baseY);
								ghostCtx.lineTo(startPoint.x, baseY);
								ghostCtx.closePath();
								ghostCtx.fill();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							startPoint = { x: x, y: y };
						}
					}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };

					//Render Marker
					if (dataPoints[i].markerSize !== 0) {
						if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "area",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
					baseY = yZeroToPixel;
				}
				else if (plotUnit.axisY.maximum < 0)
					baseY = axisYProps.y1;
				else if (plotUnit.axisY.minimum > 0)
					baseY = axisXProps.y2;

				ctx.lineTo(x, baseY);
				ctx.lineTo(startPoint.x, baseY);
				ctx.closePath();
				ctx.fill();

				if (isCanvasSupported) {
					ghostCtx.lineTo(x, baseY);
					ghostCtx.lineTo(startPoint.x, baseY);
					ghostCtx.closePath();
					ghostCtx.fill();
				}

				startPoint = { x: x, y: y };
				RenderHelper.drawMarkers(markers);
			}
		}

		ctx.restore();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderSplineArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		var axisXProps = plotUnit.axisX.lineCoordinates;
		var axisYProps = plotUnit.axisY.lineCoordinates;
		var markers = [];

		var plotArea = this.plotArea;
		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];

			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };

			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			//ghostCtx.lineWidth = 20;

			markers = [];

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;
			var baseY;

			var startPoint = null;

			var pixels = [];

			if (dataPoints.length > 0) {
				//ctx.strokeStyle = "#4572A7 ";                
				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					//if (isFirstDataPointInPlotArea) {
					//    ctx.beginPath();
					//    ctx.moveTo(x, y);
					//    startPoint = { x: x, y: y };

					//    ghostCtx.beginPath();
					//    ghostCtx.moveTo(x, y);

					//    isFirstDataPointInPlotArea = false;
					//}
					//else {

					//    ctx.lineTo(x, y);
					//    ghostCtx.lineTo(x, y);

					//    if (i % 250 == 0) {

					//        if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
					//            baseY = yZeroToPixel;
					//        }
					//        else if (plotUnit.axisY.maximum < 0)
					//            baseY = axisYProps.y1;
					//        else if (plotUnit.axisY.minimum > 0)
					//            baseY = axisXProps.y2;

					//        ctx.lineTo(x, baseY);
					//        ctx.lineTo(startPoint.x, baseY);
					//        ctx.closePath();
					//        ctx.fill();
					//        ctx.beginPath();
					//        ctx.moveTo(x, y);


					//        ghostCtx.lineTo(x, baseY);
					//        ghostCtx.lineTo(startPoint.x, baseY);
					//        ghostCtx.closePath();
					//        ghostCtx.fill();
					//        ghostCtx.beginPath();
					//        ghostCtx.moveTo(x, y);

					//        startPoint = { x: x, y: y };
					//    }
					//}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };

					pixels[pixels.length] = { x: x, y: y };

					//Render Marker
					if (dataPoints[i].markerSize !== 0) {
						if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}


					//Render Index Labels
					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "splineArea",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				var bp = getBezierPoints(pixels, 2);

				if (bp.length > 0) {
					ctx.beginPath();
					ctx.moveTo(bp[0].x, bp[0].y);

					if (isCanvasSupported) {
						ghostCtx.beginPath();
						ghostCtx.moveTo(bp[0].x, bp[0].y);
					}


					for (var i = 0; i < bp.length - 3; i += 3) {

						ctx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

						if (isCanvasSupported)
							ghostCtx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

					}

					if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
						baseY = yZeroToPixel;
					}
					else if (plotUnit.axisY.maximum < 0)
						baseY = axisYProps.y1;
					else if (plotUnit.axisY.minimum > 0)
						baseY = axisXProps.y2;

					startPoint = { x: bp[0].x, y: bp[0].y };

					ctx.lineTo(bp[bp.length - 1].x, baseY);
					ctx.lineTo(startPoint.x, baseY);
					ctx.closePath();
					ctx.fill();

					if (isCanvasSupported) {
						ghostCtx.lineTo(bp[bp.length - 1].x, baseY);
						ghostCtx.lineTo(startPoint.x, baseY);
						ghostCtx.closePath();
						ghostCtx.fill();
					}
				}


				RenderHelper.drawMarkers(markers);
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStepArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		var axisXProps = plotUnit.axisX.lineCoordinates;
		var axisYProps = plotUnit.axisY.lineCoordinates;
		var markers = [];

		var plotArea = this.plotArea;
		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];

			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };

			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			//ghostCtx.lineWidth = 20;

			markers = [];

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;
			var baseY;

			var startPoint = null;

			if (dataPoints.length > 0) {
				//ctx.strokeStyle = "#4572A7 ";                
				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					var prevY = y;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);
						startPoint = { x: x, y: y };

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, prevY);
						if (isCanvasSupported)
							ghostCtx.lineTo(x, prevY);

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
								baseY = yZeroToPixel;
							}
							else if (plotUnit.axisY.maximum < 0)
								baseY = axisYProps.y1;
							else if (plotUnit.axisY.minimum > 0)
								baseY = axisXProps.y2;

							ctx.lineTo(x, baseY);
							ctx.lineTo(startPoint.x, baseY);
							ctx.closePath();
							ctx.fill();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.lineTo(x, baseY);
								ghostCtx.lineTo(startPoint.x, baseY);
								ghostCtx.closePath();
								ghostCtx.fill();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							startPoint = { x: x, y: y };
						}
					}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };

					//Render Marker
					if (dataPoints[i].markerSize !== 0) {
						if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stepArea",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
					baseY = yZeroToPixel;
				}
				else if (plotUnit.axisY.maximum < 0)
					baseY = axisYProps.y1;
				else if (plotUnit.axisY.minimum > 0)
					baseY = axisXProps.y2;

				ctx.lineTo(x, baseY);
				ctx.lineTo(startPoint.x, baseY);
				ctx.closePath();
				ctx.fill();

				if (isCanvasSupported) {
					ghostCtx.lineTo(x, baseY);
					ghostCtx.lineTo(startPoint.x, baseY);
					ghostCtx.closePath();
					ghostCtx.fill();
				}

				startPoint = { x: x, y: y };
				RenderHelper.drawMarkers(markers);
			}
		}

		ctx.restore();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;
		var markers = [];

		var plotArea = this.plotArea;

		var offsetY = [];

		var allXValues = [];
		//var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;

		var ghostCtx = this._eventManager.ghostCtx;

		if (isCanvasSupported)
			ghostCtx.beginPath();

		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		xValuePresent = [];
		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var xValue;

			dataSeries.dataPointIndexes = [];

			for (i = 0; i < dataPoints.length; i++) {
				xValue = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;
				dataSeries.dataPointIndexes[xValue] = i;

				if (!xValuePresent[xValue]) {
					allXValues.push(xValue);
					xValuePresent[xValue] = true;
				}
			}

			allXValues.sort(compareNumbers);
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			var currentBaseValues = [];


			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;



			if (allXValues.length > 0) {

				color = dataSeries._colorSet[0];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (i = 0; i < allXValues.length; i++) {

					dataPointX = allXValues[i];
					var dataPoint = null;

					if (dataSeries.dataPointIndexes[dataPointX] >= 0)
						dataPoint = dataPoints[dataSeries.dataPointIndexes[dataPointX]];
					else
						dataPoint = { x: dataPointX, y: 0 };

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoint.y) !== "number")
						continue;

					var x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					var y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoint.y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var offset = offsetY[dataPointX] ? offsetY[dataPointX] : 0;

					y = y - offset;
					currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
					offsetY[dataPointX] = yZeroToPixel - y;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							while (currentBaseValues.length > 0) {
								var point = currentBaseValues.pop();
								ctx.lineTo(point.x, point.y);

								if (isCanvasSupported)
									ghostCtx.lineTo(point.x, point.y);

							}

							ctx.closePath();
							ctx.fill();

							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.closePath();
								ghostCtx.fill();

								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
						}

					}

					if (dataSeries.dataPointIndexes[dataPointX] >= 0) {
						var id = dataSeries.dataPointIds[dataSeries.dataPointIndexes[dataPointX]];
						this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: dataSeries.dataPointIndexes[dataPointX], x1: x, y1: y };
					}

					//Render Marker
					if (dataSeries.dataPointIndexes[dataPointX] >= 0 && dataPoint.markerSize !== 0) {
						if (dataPoint.markerSize > 0 || dataSeries.markerSize > 0) {

							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoint.indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedArea",
							dataPoint: dataPoint,
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				while (currentBaseValues.length > 0) {
					var point = currentBaseValues.pop();
					ctx.lineTo(point.x, point.y);

					if (isCanvasSupported)
						ghostCtx.lineTo(point.x, point.y);
				}

				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(x, y);

				if (isCanvasSupported) {
					ghostCtx.closePath();
					ghostCtx.fill();
					ghostCtx.beginPath();
					ghostCtx.moveTo(x, y);
				}
			}

			delete (dataSeries.dataPointIndexes);
		}

		RenderHelper.drawMarkers(markers);


		ctx.restore();

		if (isCanvasSupported)
			ghostCtx.restore();
	}

	Chart.prototype.renderStackedArea100 = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;
		var markers = [];

		var offsetY = [];

		var allXValues = [];
		//var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.


		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) * .9) << 0;

		var ghostCtx = this._eventManager.ghostCtx;

		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();


		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		xValuePresent = [];
		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var xValue;

			dataSeries.dataPointIndexes = [];

			for (i = 0; i < dataPoints.length; i++) {
				xValue = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;
				dataSeries.dataPointIndexes[xValue] = i;

				if (!xValuePresent[xValue]) {
					allXValues.push(xValue);
					xValuePresent[xValue] = true;
				}
			}

			allXValues.sort(compareNumbers);
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;


			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;

			if (dataPoints.length == 1)
				barWidth = maxBarWidth;

			if (barWidth < 1)
				barWidth = 1;
			else if (barWidth > maxBarWidth)
				barWidth = maxBarWidth;

			var currentBaseValues = [];

			if (allXValues.length > 0) {

				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				var bevelEnabled = (barWidth > 5) ? false : false;

				//ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < allXValues.length; i++) {

					dataPointX = allXValues[i];
					var dataPoint = null;

					if (dataSeries.dataPointIndexes[dataPointX] >= 0)
						dataPoint = dataPoints[dataSeries.dataPointIndexes[dataPointX]];
					else
						dataPoint = { x: dataPointX, y: 0 };

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoint.y) !== "number")
						continue;

					var yPercent;
					if (plotUnit.dataPointYSums[dataPointX] !== 0)
						yPercent = dataPoint.y / plotUnit.dataPointYSums[dataPointX] * 100;
					else
						yPercent = 0;

					var x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					var y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (yPercent - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var offset = offsetY[dataPointX] ? offsetY[dataPointX] : 0;

					y = y - offset;
					currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
					offsetY[dataPointX] = yZeroToPixel - y;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							while (currentBaseValues.length > 0) {
								var point = currentBaseValues.pop();
								ctx.lineTo(point.x, point.y);

								if (isCanvasSupported)
									ghostCtx.lineTo(point.x, point.y);
							}

							ctx.closePath();
							ctx.fill();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.closePath();
								ghostCtx.fill();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
						}
					}


					if (dataSeries.dataPointIndexes[dataPointX] >= 0) {
						var id = dataSeries.dataPointIds[dataSeries.dataPointIndexes[dataPointX]];
						this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: dataSeries.dataPointIndexes[dataPointX], x1: x, y1: y };
					}

					//Render Marker
					if (dataSeries.dataPointIndexes[dataPointX] >= 0 && dataPoint.markerSize !== 0) {
						if (dataPoint.markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoint.indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedArea100",
							dataPoint: dataPoint,
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				while (currentBaseValues.length > 0) {
					var point = currentBaseValues.pop();
					ctx.lineTo(point.x, point.y);

					if (isCanvasSupported)
						ghostCtx.lineTo(point.x, point.y);
				}

				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(x, y);

				if (isCanvasSupported) {
					ghostCtx.closePath();
					ghostCtx.fill();
					ghostCtx.beginPath();
					ghostCtx.moveTo(x, y);
				}
			}

			delete (dataSeries.dataPointIndexes);
		}

		RenderHelper.drawMarkers(markers);

		ctx.restore();

		if (isCanvasSupported)
			ghostCtx.restore();
	}

	Chart.prototype.renderBubble = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / totalDataSeries * .9) << 0;


		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		var maxZ = -Infinity;
		var minZ = Infinity;

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var z = 0;

			for (var i = 0; i < dataPoints.length; i++) {

				dataPointX = dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

				if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
					continue;
				}

				if (typeof (dataPoints[i].z) !== "undefined") {

					z = dataPoints[i].z;

					if (z > maxZ)
						maxZ = z;

					if (z < minZ)
						minZ = z;
				}
			}
		}

		var minArea = Math.PI * 5 * 5;
		var maxArea = Math.max(Math.pow(Math.min(plotArea.height, plotArea.width) * .25 / 2, 2) * Math.PI, minArea);

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			if (dataPoints.length == 1)
				barWidth = maxBarWidth;

			if (barWidth < 1)
				barWidth = 1;
			else if (barWidth > maxBarWidth)
				barWidth = maxBarWidth;

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);
				//var bevelEnabled = (barWidth > 5) ? false : false;

				ctx.strokeStyle = "#4572A7 ";



				for (var i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var z = dataPoints[i].z;

					var area = minArea + (maxArea - minArea) / (maxZ - minZ) * (z - minZ);
					var radius = Math.max(Math.sqrt(area / Math.PI) << 0, 1);

					var markerSize = radius * 2;
					var markerProps = dataSeries.getMarkerProperties(i, ctx);
					markerProps.size = markerSize;
					//markers.push(markerProps);

					//color = dataSeries._colorSet[i % dataSeries._colorSet.length];

					//var markerType = dataSeries.markerType ? dataSeries.markerType : "circle";


					RenderHelper.drawMarker(x, y, ctx, markerProps.type, markerProps.size, markerProps.color, markerProps.borderColor, markerProps.borderThickness);
					//RenderHelper.drawMarker(x, y, ctx, "square", radius * 2, color);
					//RenderHelper.drawMarker(x, y, ctx, "triangle", radius * 2, color, "#000000", 0);
					//RenderHelper.drawMarker(x, y, ctx, "cross", radius * 2, color, "#000000", 2);

					//ctx.moveTo(x, y);
					//ctx.beginPath();
					//ctx.arc(x, y, radius, 0, 360, false);
					//ctx.fill();

					if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
						dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
					}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y, size: markerSize };
					var markerColor = intToHexColorString(id);
					//RenderHelper.drawMarker(x, y, this._eventManager.ghostCtx, markerType, markerSize, markerColor, markerColor, dataSeries.markerBorderThickness);
					if (isCanvasSupported)
						RenderHelper.drawMarker(x, y, this._eventManager.ghostCtx, markerProps.type, markerProps.size, markerColor, markerColor, markerProps.borderThickness);

				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderScatter = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / totalDataSeries * .9) << 0;


		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			if (dataPoints.length == 1)
				barWidth = maxBarWidth;

			if (barWidth < 1)
				barWidth = 1;
			else if (barWidth > maxBarWidth)
				barWidth = maxBarWidth;

			if (dataPoints.length > 0) {
				//var bevelEnabled = (barWidth > 5) ? false : false;

				ctx.strokeStyle = "#4572A7 ";

				var maxArea = Math.pow(Math.min(plotArea.height, plotArea.width) * .3 / 2, 2) * Math.PI;

				var prevDataPointX = 0;
				var prevDataPointY = 0;

				for (var i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
					RenderHelper.drawMarker(markerProps.x, markerProps.y, markerProps.ctx, markerProps.type, markerProps.size, markerProps.color, markerProps.color, markerProps.thickness);

					//if (Math.abs(prevDataPointX - x) < markerProps.size / 2 && Math.abs(prevDataPointY - y) < markerProps.size / 2) {
					//    continue;
					//}

					if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
						dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
					}

					if (Math.sqrt((prevDataPointX - x) * (prevDataPointX - x) + (prevDataPointY - y) * (prevDataPointY - y)) < Math.min(markerProps.size, 5)) {
						continue;
					}

					//Render ID on Ghost Canvas - for event handling
					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };
					var markerColor = intToHexColorString(id);

					if (isCanvasSupported) {
						RenderHelper.drawMarker(
								markerProps.x, markerProps.y, this._eventManager.ghostCtx,
								markerProps.type,
								markerProps.size,
								markerColor,
								markerColor,
								markerProps.borderThickness
							);
					}
					//markers.push();

					prevDataPointX = x;
					prevDataPointY = y;
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	//#region pieChart

	var drawSegment = function (ctx, center, radius, color, type, theta1, theta2) {


		ctx.save();

		if (type === "pie") {
			ctx.beginPath();
			ctx.moveTo(center.x, center.y);
			ctx.arc(center.x, center.y, radius, theta1, theta2, false);
			ctx.fillStyle = color;
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			//    ctx.shadowOffsetX = 2;
			//    ctx.shadowOffsetY = 1;
			//     ctx.shadowBlur = 2;
			//    ctx.shadowColor = '#BFBFBF';
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
		}
		else if (type === "doughnut") {
			var widthPercentage = 0.60;
			ctx.beginPath();
			ctx.arc(center.x, center.y, radius, theta1, theta2, false);
			ctx.arc(center.x, center.y, widthPercentage * radius, theta2, theta1, true);
			ctx.closePath();
			ctx.fillStyle = color;
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			// shadow properties
			//     ctx.shadowOffsetX = 1;
			//    ctx.shadowOffsetY = 1;
			//     ctx.shadowBlur = 1;
			//    ctx.shadowColor = '#BFBFBF';  //grey shadow
			ctx.stroke();
			ctx.fill();
		}

		ctx.restore();
	};

	Chart.prototype.renderPie = function (plotUnit) {

		var _this = this;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var dataSeriesIndex = plotUnit.dataSeriesIndexes[0];
		var dataSeries = this.data[dataSeriesIndex];
		var dataPoints = dataSeries.dataPoints;
		var indexLabelLineEdgeLength = 10;

		var plotArea = this.plotArea;

		//var maxFrame = isCanvasSupported ? 300 : 4;
		var totalRecursions = 0;
		var animationParameter = { frame: 0, maxFrames: 1 };
		var dataPointEOs = []; //dataPoint Extension Objects Behaves like a storage place for all additional data relating to dataPoints. Requred because actual dataPoints should not be modified.


		var minDistanceBetweenLabels = 2;
		var indexLabelRadiusToRadiusRatio = 1.3;
		var poleAnglularDistance = (20 / 180) * Math.PI; //Anglular Distance from 90 & 270 to be considered pole
		var precision = 6;

		var center = { x: (plotArea.x2 + plotArea.x1) / 2, y: (plotArea.y2 + plotArea.y1) / 2 };
		var outerRadius = dataSeries.indexLabelPlacement === "inside" ? (Math.min(plotArea.width, plotArea.height) * 0.95) / 2 : (Math.min(plotArea.width, plotArea.height) * 0.8) / 2;
		var innerRadius = outerRadius * .6;

		var indexLabelRadius = outerRadius * indexLabelRadiusToRadiusRatio;
		var newPieRadius = outerRadius;

		function resetAnimationFrame(maxFrames) {
			maxFrames = maxFrames || 1;

			animationParameter.frame = 0;
			animationParameter.maxFrames = maxFrames;
		}

		function initLabels() {

			if (!dataSeries || !dataPoints)
				return;

			var sum = 0;
			for (var j = 0; j < dataPoints.length; j++) {
				sum += Math.abs(dataPoints[j].y);
			}

			var noDPNearSouthPole = 0;
			var noDPNearNorthPole = 0;
			var firstDPCloseToSouth = 0;
			var firstDPCloseToNorth = 0;

			for (j = 0; j < dataPoints.length; j++) {

				var dataPoint = dataPoints[j];
				var dataPointEO = { objectType: "dataPoint", dataPointIndex: j, dataSeriesIndex: 0 };
				dataPointEOs.push(dataPointEO);
				var indexLabelText = dataPoint.indexLabel ? dataPoint.indexLabel : dataSeries.indexLabel ? dataSeries.indexLabel : dataPoint.label ? dataPoint.label : dataSeries.label ? dataSeries.label : '';

				var id = dataSeries.dataPointIds[j];

				_this._eventManager.objectMap[id] = dataPointEO;

				//dataPointEO.indexLabelText = j.toString() + " " + "kingfisher: " + dataPoint.y.toString();;
				dataPointEO.center = { x: center.x, y: center.y };
				dataPointEO.y = dataPoint.y;
				dataPointEO.radius = outerRadius;
				dataPointEO.indexLabelText = _this.replaceKeywordsWithValue(indexLabelText, dataPoint, dataSeries, j)
				dataPointEO.indexLabelPlacement = dataSeries.indexLabelPlacement;
				dataPointEO.indexLabelLineColor = dataPoint.indexLabelLineColor ? dataPoint.indexLabelLineColor : dataSeries.indexLabelLineColor ? dataSeries.indexLabelLineColor : dataPoint.color ? dataPoint.color : dataSeries._colorSet[j % dataSeries._colorSet.length];
				dataPointEO.indexLabelLineThickness = dataPoint.indexLabelLineThickness ? dataPoint.indexLabelLineThickness : dataSeries.indexLabelLineThickness;
				dataPointEO.indexLabelFontColor = dataPoint.indexLabelFontColor ? dataPoint.indexLabelFontColor : dataSeries.indexLabelFontColor;
				dataPointEO.indexLabelFontStyle = dataPoint.indexLabelFontStyle ? dataPoint.indexLabelFontStyle : dataSeries.indexLabelFontStyle;
				dataPointEO.indexLabelFontWeight = dataPoint.indexLabelFontWeight ? dataPoint.indexLabelFontWeight : dataSeries.indexLabelFontWeight;
				dataPointEO.indexLabelFontSize = dataPoint.indexLabelFontSize ? dataPoint.indexLabelFontSize : dataSeries.indexLabelFontSize;
				dataPointEO.indexLabelFontFamily = dataPoint.indexLabelFontFamily ? dataPoint.indexLabelFontFamily : dataSeries.indexLabelFontFamily;
				dataPointEO.indexLabelBackgroundColor = dataPoint.indexLabelBackgroundColor ? dataPoint.indexLabelBackgroundColor : dataSeries.indexLabelBackgroundColor ? dataSeries.indexLabelBackgroundColor : null;
				dataPointEO.indexLabelMaxWidth = dataPoint.indexLabelMaxWidth ? dataPoint.indexLabelMaxWidth : dataSeries.indexLabelMaxWidth ? dataSeries.indexLabelMaxWidth : plotArea.width * .33;
				dataPointEO.indexLabelWrap = dataPoint.indexLabelWrap ? dataPoint.indexLabelWrap : dataSeries.indexLabelWrap;

				dataPointEO.startAngle = j === 0 ? dataSeries.startAngle ? (dataSeries.startAngle / 180) * Math.PI : 0 : dataPointEOs[j - 1].endAngle;

				dataPointEO.startAngle = (dataPointEO.startAngle + (2 * Math.PI)) % (2 * Math.PI);

				dataPointEO.endAngle = dataPointEO.startAngle + ((2 * Math.PI / sum) * Math.abs(dataPoint.y));

				//var midAngle = dataPointEO.startAngle + Math.abs(dataPointEO.endAngle - dataPointEO.startAngle) / 2;
				var midAngle = (dataPointEO.endAngle + dataPointEO.startAngle) / 2;

				//var midAngle = (180 / Math.PI * midAngle);

				midAngle = (midAngle + (2 * Math.PI)) % (2 * Math.PI);

				dataPointEO.midAngle = midAngle;

				if (dataPointEO.midAngle > (Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (Math.PI / 2) + poleAnglularDistance) {
					if (noDPNearSouthPole === 0 || dataPointEOs[firstDPCloseToSouth].midAngle > dataPointEO.midAngle)
						firstDPCloseToSouth = j;

					noDPNearSouthPole++;
				}
				else if (dataPointEO.midAngle > (3 * Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (3 * Math.PI / 2) + poleAnglularDistance) {
					if (noDPNearNorthPole === 0 || dataPointEOs[firstDPCloseToNorth].midAngle > dataPointEO.midAngle)
						firstDPCloseToNorth = j;

					noDPNearNorthPole++;
				}


				if (midAngle > (Math.PI / 2) && midAngle <= (3 * Math.PI / 2))
					dataPointEO.hemisphere = "left";
				else
					dataPointEO.hemisphere = "right";

				//dataPointEO.indexLabelText = j.toString() + "; " + dataPoint.y.toString() + "; " + midAngle.toString() + "; junk";				
				dataPointEO.indexLabelTextBlock = new TextBlock(_this.plotArea.ctx, {
					fontSize: dataPointEO.indexLabelFontSize, fontFamily: dataPointEO.indexLabelFontFamily, fontColor: dataPointEO.indexLabelFontColor,
					fontStyle: dataPointEO.indexLabelFontStyle, fontWeight: dataPointEO.indexLabelFontWeight,
					horizontalAlign: "left",
					backgroundColor: dataPointEO.indexLabelBackgroundColor,
					maxWidth: dataPointEO.indexLabelMaxWidth, maxHeight: dataPointEO.indexLabelWrap ? dataPointEO.indexLabelFontSize * 5 : dataPointEO.indexLabelFontSize * 1.5,
					text: dataPointEO.indexLabelText,
					padding: 0,
					textBaseline: dataPointEO.indexLabelBackgroundColor ? "middle" : "top"
				});

				dataPointEO.indexLabelTextBlock.measureText();

				//dataPoint.labelWidth = ctx.measureText(j.toString() + "; " + dataPoint.label).width;

				//console.log(dataPoint.label);
			}

			var noOfDPToRightOfSouthPole = 0;
			var noOfDPToLeftOfNorthPole = 0;
			var keepSameDirection = false; // once a dataPoint's hemisphere is changed, others should follow the same so that there are no labes near pole pointing in opposite direction.

			for (j = 0; j < dataPoints.length; j++) {

				var dataPointEO = dataPointEOs[(firstDPCloseToSouth + j) % dataPoints.length];

				if (noDPNearSouthPole > 1 && dataPointEO.midAngle > (Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (Math.PI / 2) + poleAnglularDistance) {

					if (noOfDPToRightOfSouthPole <= noDPNearSouthPole / 2 && !keepSameDirection) {
						dataPointEO.hemisphere = "right";
						noOfDPToRightOfSouthPole++;
					}
					else {
						dataPointEO.hemisphere = "left";
						keepSameDirection = true;
					}
				}
			}

			keepSameDirection = false;
			for (j = 0; j < dataPoints.length; j++) {

				var dataPointEO = dataPointEOs[(firstDPCloseToNorth + j) % dataPoints.length];

				//if (dataPoint.hemisphere = "right")
				//	break;

				if (noDPNearNorthPole > 1 && dataPointEO.midAngle > (3 * Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (3 * Math.PI / 2) + poleAnglularDistance) {

					if (noOfDPToLeftOfNorthPole <= noDPNearNorthPole / 2 && !keepSameDirection) {
						dataPointEO.hemisphere = "left";
						noOfDPToLeftOfNorthPole++;
					}
					else {
						dataPointEO.hemisphere = "right";
						keepSameDirection = true;
					}
				}
			}
		}//End of initLabels()

		function renderLabels() {

			var ctx = _this.plotArea.ctx;
			ctx.fillStyle = "black";
			ctx.strokeStyle = "grey";
			var fontSize = 16;
			//ctx.font = fontSize + "px Arial";
			ctx.textBaseline = "middle";
			ctx.lineJoin = "round";
			var i = 0, j = 0;

			for (i = 0; i < dataPoints.length; i++) {
				var dataPointEO = dataPointEOs[i];

				if (!dataPointEO.indexLabelText)
					continue;

				dataPointEO.indexLabelTextBlock.y -= dataPointEO.indexLabelTextBlock.height / 2;

				var xOffset = 0;

				if (dataPointEO.hemisphere === "left") {
					var xOffset = dataSeries.indexLabelPlacement === "outside" ? -(dataPointEO.indexLabelTextBlock.width + indexLabelLineEdgeLength) : -dataPointEO.indexLabelTextBlock.width / 2;
				}
				else {
					var xOffset = dataSeries.indexLabelPlacement === "outside" ? indexLabelLineEdgeLength : -dataPointEO.indexLabelTextBlock.width / 2;
				}

				dataPointEO.indexLabelTextBlock.x += xOffset;
				dataPointEO.indexLabelTextBlock.render(true);
				dataPointEO.indexLabelTextBlock.x -= xOffset;

				//if (i < 4)
				//	customPrompt(i + "; " + center.y + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2));

				dataPointEO.indexLabelTextBlock.y += dataPointEO.indexLabelTextBlock.height / 2;

				if (dataPointEO.indexLabelPlacement === "outside") {
					var indexLabelLineStartX = dataPointEO.center.x + outerRadius * Math.cos(dataPointEO.midAngle);
					var indexLabelLineStartY = dataPointEO.center.y + outerRadius * Math.sin(dataPointEO.midAngle);

					//ctx.strokeStyle = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					ctx.strokeStyle = dataPointEO.indexLabelLineColor;
					ctx.lineWidth = dataPointEO.indexLabelLineThickness;
					//ctx.lineWidth = 4;
					ctx.beginPath();
					ctx.moveTo(indexLabelLineStartX, indexLabelLineStartY);
					ctx.lineTo(dataPointEO.indexLabelTextBlock.x, dataPointEO.indexLabelTextBlock.y);
					ctx.lineTo(dataPointEO.indexLabelTextBlock.x + (dataPointEO.hemisphere === "left" ? -indexLabelLineEdgeLength : indexLabelLineEdgeLength), dataPointEO.indexLabelTextBlock.y);
					ctx.stroke();
					//ctx.closePath();
					//window.alert("contine??");
					//animate();
				}

				ctx.lineJoin = "miter";
			}
		}

		function animate() {

			var ctx = _this.plotArea.ctx;

			if (animationParameter !== null && animationParameter.frame < animationParameter.maxFrames) {
				if (animationParameter.frame === 0)
					animationParameter.prevMaxAngle = dataPointEOs[0].startAngle;

				ctx.clearRect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);

				var maxAngle = animationParameter.prevMaxAngle + (2 * Math.PI / animationParameter.maxFrames);

				for (var i = 0; i < dataPoints.length; i++) {

					var startAngle = i === 0 ? dataPointEOs[i].startAngle : endAngle;
					var endAngle = startAngle + (dataPointEOs[i].endAngle - dataPointEOs[i].startAngle);

					var shouldBreak = false;

					if (endAngle > maxAngle) {
						endAngle = maxAngle;
						shouldBreak = true;
					}

					var color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];

					if (endAngle > startAngle)
						drawSegment(_this.plotArea.ctx, dataPointEOs[i].center, dataPointEOs[i].radius, color, dataSeries.type, startAngle, endAngle);

					if (shouldBreak)
						break;
				}

				animationParameter.frame++;
				animationParameter.prevMaxAngle = maxAngle;

				if (animationParameter.frame < animationParameter.maxFrames) {
					_this.requestAnimFrame.call(window, animate);
				} else {
					//renderLabels();
					resetAnimationFrame(isCanvasSupported ? 15 : 4);
					explodeToggle();
				}

				//console.log(animationParameter.frame);

			}
		}

		function explodeToggle() {

			var ctx = _this.plotArea.ctx;
			var prevEndAngle = 0;

			if (animationParameter !== null && animationParameter.frame < animationParameter.maxFrames) {

				ctx.clearRect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);

				//var maxAngle = animationParameter.prevMaxAngle + (2 * Math.PI / animationParameter.maxFrames);

				for (var i = 0; i < dataPoints.length; i++) {

					var startAngle = dataPointEOs[i].startAngle;
					var endAngle = dataPointEOs[i].endAngle;

					if (endAngle > startAngle) {


						var offsetX = (outerRadius * .07 * Math.cos(dataPointEOs[i].midAngle));
						var offsetY = (outerRadius * .07 * Math.sin(dataPointEOs[i].midAngle));
						var isInTransition = false;

						if (dataPoints[i].exploded) {
							if (Math.abs(dataPointEOs[i].center.x - (center.x + offsetX)) > Math.abs(.5 * offsetX / animationParameter.maxFrames) || Math.abs(dataPointEOs[i].center.y - (center.y + offsetY)) > Math.abs(.5 * offsetY / animationParameter.maxFrames)) {
								dataPointEOs[i].center.x += (offsetX / animationParameter.maxFrames);
								dataPointEOs[i].center.y += (offsetY / animationParameter.maxFrames);

								isInTransition = true;
							}
						} else if (Math.abs(dataPointEOs[i].center.x - center.x) >= Math.abs(.5 * offsetX / animationParameter.maxFrames) || Math.abs(dataPointEOs[i].center.y - center.y) >= Math.abs(.5 * offsetY / animationParameter.maxFrames)) {
							dataPointEOs[i].center.x -= (offsetX / animationParameter.maxFrames);
							dataPointEOs[i].center.y -= (offsetY / animationParameter.maxFrames);
							isInTransition = true;
						}

						if (isInTransition) {
							var entry = {};
							entry.dataSeries = dataSeries;
							entry.dataPoint = dataSeries.dataPoints[i];
							entry.index = i;
							_this._toolTip.highlightObjects([entry]);
						}

						var color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];

						drawSegment(_this.plotArea.ctx, dataPointEOs[i].center, dataPointEOs[i].radius, color, dataSeries.type, startAngle, endAngle);
					}
				}

				animationParameter.frame++;

				//window.alert("next??");
				renderLabels();

				//ctx.lineWidth = 4;

				if (animationParameter.frame < animationParameter.maxFrames) {
					_this.requestAnimFrame.call(window, explodeToggle);
				}


				//console.log(animationParameter.frame);

			}
		}

		function getVerticalDistanceBetweenLabels(first, second) {

			var distance = 0;
			var label1 = { y: first.indexLabelTextBlock.y, y1: first.indexLabelTextBlock.y - first.indexLabelTextBlock.height / 2, y2: first.indexLabelTextBlock.y + first.indexLabelTextBlock.height / 2 };
			var label2 = { y: second.indexLabelTextBlock.y, y1: second.indexLabelTextBlock.y - second.indexLabelTextBlock.height / 2, y2: second.indexLabelTextBlock.y + second.indexLabelTextBlock.height / 2 };

			if (label2.y > label1.y) {
				distance = label2.y1 - label1.y2;
			}
			else {
				distance = label1.y1 - label2.y2;
			}

			return distance;
		}

		function getNextLabelIndex(currentLabelIndex) {
			var nextLabelIndex = null;

			for (var i = 1; i < dataPoints.length; i++) {

				nextLabelIndex = (currentLabelIndex + i + dataPointEOs.length) % dataPointEOs.length;

				if (dataPointEOs[nextLabelIndex].hemisphere !== dataPointEOs[currentLabelIndex].hemisphere) {
					nextLabelIndex = null;
					break;
				}
				else if ((dataPointEOs[nextLabelIndex].indexLabelText) && (nextLabelIndex !== currentLabelIndex)
					&& ((getVerticalDistanceBetweenLabels(dataPointEOs[nextLabelIndex], dataPointEOs[currentLabelIndex]) < 0) || (dataPointEOs[currentLabelIndex].hemisphere === "right" ? dataPointEOs[nextLabelIndex].indexLabelTextBlock.y >= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y : dataPointEOs[nextLabelIndex].indexLabelTextBlock.y <= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y)))
					break;
				else {
					nextLabelIndex = null;
				}
			}

			return nextLabelIndex;
		}

		function getPreviousLabelIndex(currentLabelIndex) {
			var prevLabelIndex = null;

			for (var i = 1; i < dataPoints.length; i++) {

				prevLabelIndex = (currentLabelIndex - i + dataPointEOs.length) % dataPointEOs.length;

				if (dataPointEOs[prevLabelIndex].hemisphere !== dataPointEOs[currentLabelIndex].hemisphere) {
					prevLabelIndex = null;
					break;
				}
				else if ((dataPointEOs[prevLabelIndex].indexLabelText) && (dataPointEOs[prevLabelIndex].hemisphere === dataPointEOs[currentLabelIndex].hemisphere) && (prevLabelIndex !== currentLabelIndex)
					&& ((getVerticalDistanceBetweenLabels(dataPointEOs[prevLabelIndex], dataPointEOs[currentLabelIndex]) < 0) || (dataPointEOs[currentLabelIndex].hemisphere === "right" ? dataPointEOs[prevLabelIndex].indexLabelTextBlock.y <= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y : dataPointEOs[prevLabelIndex].indexLabelTextBlock.y >= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y)))
					break;
				else {
					prevLabelIndex = null;
				}

			}

			return prevLabelIndex;
		}

		function rePositionLabels(dataPointIndex, offset) {

			offset = offset || 0;

			var actualOffset = 0;

			//var labelYMin = 2;
			//var labelYMax = ctx.canvas.height - 2;
			//var labelYMin = _this.plotArea.ctx.canvas.height / 2 - indexLabelRadius * 1;
			//var labelYMax = _this.plotArea.ctx.canvas.height / 2 + indexLabelRadius * 1;

			var labelYMin = center.y - indexLabelRadius * 1;
			var labelYMax = center.y + indexLabelRadius * 1;

			//console.log(totalRecursions);

			if (dataPointIndex >= 0 && dataPointIndex < dataPoints.length) {

				var dataPointEO = dataPointEOs[dataPointIndex];

				//if (dataPointIndex === 0)
				//	customPrompt(labelYMin.toFixed(2) + "; " + labelYMax.toFixed(2) + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2));

				// If label is already outside the bounds, return
				if ((offset < 0 && dataPointEO.indexLabelTextBlock.y < labelYMin) || (offset > 0 && dataPointEO.indexLabelTextBlock.y > labelYMax))
					return 0;


				var validOffset = offset;


				//Check if the offset falls within the bounds (labelYMin, labelYMax, tangential bounds) without considering overlap. Else use the closest offset that is possible - validOffset.
				{
					var distFromIndexLineStart = 0;
					var indexLabelLineStartX = 0;
					var indexLabelLineStartY = 0;
					var indexLabelAngle = 0;
					var indexLabelAngleWhenTangent = 0;

					if (validOffset < 0) {
						if (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 > labelYMin && dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 + validOffset < labelYMin)
							validOffset = -(labelYMin - (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 + validOffset));
					} else {
						if (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 < labelYMin && dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + validOffset > labelYMax)
							validOffset = (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + validOffset) - labelYMax;
					}

					var newlabelY = dataPointEO.indexLabelTextBlock.y + validOffset;
					var newlabelX = 0;

					if (dataPointEO.hemisphere === "right") {
						newlabelX = center.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newlabelY - center.y, 2));
					}
					else
						newlabelX = center.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newlabelY - center.y, 2));


					indexLabelLineStartX = center.x + outerRadius * Math.cos(dataPointEO.midAngle);
					indexLabelLineStartY = center.y + outerRadius * Math.sin(dataPointEO.midAngle);

					distFromIndexLineStart = Math.sqrt(Math.pow(newlabelX - indexLabelLineStartX, 2) + Math.pow(newlabelY - indexLabelLineStartY, 2));

					indexLabelAngleWhenTangent = Math.acos(outerRadius / indexLabelRadius);

					//indexLabelAngle = Math.acos((outerRadius * outerRadius + distFromIndexLineStart * distFromIndexLineStart - indexLabelRadius * indexLabelRadius) / (2 * outerRadius * distFromIndexLineStart));
					indexLabelAngle = Math.acos((indexLabelRadius * indexLabelRadius + outerRadius * outerRadius - distFromIndexLineStart * distFromIndexLineStart) / (2 * outerRadius * indexLabelRadius));

					if (indexLabelAngle < indexLabelAngleWhenTangent) {
						validOffset = newlabelY - dataPointEO.indexLabelTextBlock.y;
						//dataPointEO.indexLabelTextBlock.x = newlabelX;
					}
					else {

						validOffset = 0;

						//dataPointEO.indexLabelTextBlock.x = newlabelX;

						//Index Line is overlapping the pie. So lets find out the point where indexline becomes a tangent.

						//distFromIndexLineStart = Math.sqrt(indexLabelRadius * indexLabelRadius - outerRadius * outerRadius);
						////distFromIndexLineStart *= offset < 0 ? -1 : 1;
						////indexLabelAngle = Math.acos((indexLabelRadius * indexLabelRadius + outerRadius * outerRadius - distFromIndexLineStart * distFromIndexLineStart) / (2 * outerRadius * indexLabelRadius));
						//indexLabelAngle = Math.atan2(distFromIndexLineStart, outerRadius);

						//newlabelX = center.x + indexLabelRadius * Math.cos(indexLabelAngle);
						//newlabelY = center.y + indexLabelRadius * Math.sin(indexLabelAngle);

						//actualOffset = newlabelY - dataPointEO.indexLabelTextBlock.y;

						//dataPointEO.indexLabelTextBlock.y = newlabelY;
						//dataPointEO.indexLabelTextBlock.x = newlabelX;

					}
				}

				//var tempIndex = (dataPointIndex + dataPointEOs.length - 1) % dataPointEOs.length;

				//var prevDataPointIndex = dataPointEOs[tempIndex].hemisphere === dataPointEO.hemisphere ? tempIndex : null;

				var prevDataPointIndex = getPreviousLabelIndex(dataPointIndex);

				//tempIndex = (dataPointIndex + dataPointEOs.length + 1) % dataPointEOs.length;

				//var nextDataPointIndex = dataPointEOs[tempIndex].hemisphere === dataPointEO.hemisphere ? tempIndex : null;

				var nextDataPointIndex = getNextLabelIndex(dataPointIndex);

				var otherdataPointEO, otherDataPointIndex, distanceFromOtherLabel;
				var otherDataPointOffset = 0;
				var otherDataPointActualOffset = 0;


				if (validOffset < 0) {

					otherDataPointIndex = dataPointEO.hemisphere === "right" ? prevDataPointIndex : nextDataPointIndex;

					actualOffset = validOffset;

					if (otherDataPointIndex !== null) {

						//if (dataPointIndex < 4)
						//	customPrompt("valid: " + validOffset);

						var tempOffset = -validOffset;

						var distanceFromOtherLabel = (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2) - (dataPointEOs[otherDataPointIndex].indexLabelTextBlock.y + dataPointEOs[otherDataPointIndex].indexLabelTextBlock.height / 2);

						if (distanceFromOtherLabel - tempOffset < minDistanceBetweenLabels) {
							otherDataPointOffset = -tempOffset;
							totalRecursions++;
							otherDataPointActualOffset = rePositionLabels(otherDataPointIndex, otherDataPointOffset);

							//if (dataPointIndex < 4)
							//	customPrompt(dataPointIndex + "; " + "offset: " + otherDataPointOffset);


							if (+otherDataPointActualOffset.toFixed(precision) > +otherDataPointOffset.toFixed(precision)) {

								if (distanceFromOtherLabel > minDistanceBetweenLabels)
									actualOffset = -(distanceFromOtherLabel - minDistanceBetweenLabels);
									//else
									//	actualOffset = 0;
								else
									actualOffset = -(tempOffset - (otherDataPointActualOffset - otherDataPointOffset));
							}

							//if (dataPointIndex < 4)
							//	customPrompt("actual: " + actualOffset);
						}

					}

				} else if (validOffset > 0) {

					otherDataPointIndex = dataPointEO.hemisphere === "right" ? nextDataPointIndex : prevDataPointIndex;

					actualOffset = validOffset;

					if (otherDataPointIndex !== null) {

						var tempOffset = validOffset;

						var distanceFromOtherLabel = (dataPointEOs[otherDataPointIndex].indexLabelTextBlock.y - dataPointEOs[otherDataPointIndex].indexLabelTextBlock.height / 2) - (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2);

						if (distanceFromOtherLabel - tempOffset < minDistanceBetweenLabels) {
							otherDataPointOffset = tempOffset;
							totalRecursions++;
							otherDataPointActualOffset = rePositionLabels(otherDataPointIndex, otherDataPointOffset);

							if (+otherDataPointActualOffset.toFixed(precision) < +otherDataPointOffset.toFixed(precision)) {

								if (distanceFromOtherLabel > minDistanceBetweenLabels)
									actualOffset = distanceFromOtherLabel - minDistanceBetweenLabels;
									//else
									//	actualOffset = 0;
								else
									actualOffset = tempOffset - (otherDataPointOffset - otherDataPointActualOffset);
							}
						}

					}

					//if (!(dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + actualOffset < labelYMax)) {
					//	if (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 < labelYMax) {
					//		actualOffset = labelYMax - (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2);
					//	}
					//	else {
					//		actualOffset = 0;
					//	}
					//}

				}

				if (actualOffset) {

					var newLabelY = dataPointEO.indexLabelTextBlock.y + actualOffset;




					var newLabelX = 0;

					if (dataPointEO.hemisphere === "right") {
						newLabelX = center.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newLabelY - center.y, 2));
					}
					else
						newLabelX = center.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newLabelY - center.y, 2));

					if (dataPointEO.midAngle > (Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (Math.PI / 2) + poleAnglularDistance) {

						var prevDPIndex = (dataPointIndex - 1 + dataPointEOs.length) % dataPointEOs.length;
						var prevDP = dataPointEOs[prevDPIndex];
						var nextDP = dataPointEOs[(dataPointIndex + 1 + dataPointEOs.length) % dataPointEOs.length];

						if (dataPointEO.hemisphere === "left" && prevDP.hemisphere === "right" && newLabelX > prevDP.indexLabelTextBlock.x) {
							newLabelX = prevDP.indexLabelTextBlock.x - 15;
						} else if (dataPointEO.hemisphere === "right" && nextDP.hemisphere === "left" && newLabelX < nextDP.indexLabelTextBlock.x) {
							newLabelX = nextDP.indexLabelTextBlock.x + 15;
						}
					} else if (dataPointEO.midAngle > (3 * Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (3 * Math.PI / 2) + poleAnglularDistance) {

						var prevDPIndex = (dataPointIndex - 1 + dataPointEOs.length) % dataPointEOs.length;
						var prevDP = dataPointEOs[prevDPIndex];
						var nextDP = dataPointEOs[(dataPointIndex + 1 + dataPointEOs.length) % dataPointEOs.length];

						if (dataPointEO.hemisphere === "right" && prevDP.hemisphere === "left" && newLabelX < prevDP.indexLabelTextBlock.x) {
							newLabelX = prevDP.indexLabelTextBlock.x + 15;
						} else if (dataPointEO.hemisphere === "left" && nextDP.hemisphere === "right" && newLabelX > nextDP.indexLabelTextBlock.x) {
							newLabelX = nextDP.indexLabelTextBlock.x - 15;
						}
					}

					//if (actualOffset < 0 && dataPointIndex < 4)
					//	customPrompt(actualOffset.toFixed(2) + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2) + "; " + newLabelY.toFixed(2));

					dataPointEO.indexLabelTextBlock.y = newLabelY;

					dataPointEO.indexLabelTextBlock.x = newLabelX;

					dataPointEO.indexLabelAngle = Math.atan2((dataPointEO.indexLabelTextBlock.y - center.y), (dataPointEO.indexLabelTextBlock.x - center.x));

				}


			}

			return actualOffset;
		}


		function positionLabels() {
			var ctx = _this.plotArea.ctx;

			ctx.fillStyle = "grey";
			ctx.strokeStyle = "grey";
			var fontSize = 16;
			ctx.font = fontSize + "px Arial";
			ctx.textBaseline = "middle";
			var i = 0, j = 0;
			var deltaR = 0;

			for (j = 0; j < 10 && (j < 1 || deltaR > 0) ; j++) {

				//console.log(j);
				outerRadius -= deltaR;
				//indexLabelRadius -= deltaR + deltaR;

				deltaR = 0;

				if (dataSeries.indexLabelPlacement === "outside") {

					indexLabelRadius = outerRadius * indexLabelRadiusToRadiusRatio;

					for (i = 0; i < dataPoints.length; i++) {
						var dataPointEO = dataPointEOs[i];

						dataPointEO.indexLabelTextBlock.x = center.x + indexLabelRadius * Math.cos(dataPointEO.midAngle);
						dataPointEO.indexLabelTextBlock.y = center.y + indexLabelRadius * Math.sin(dataPointEO.midAngle);

						dataPointEO.indexLabelAngle = dataPointEO.midAngle;
						dataPointEO.radius = outerRadius;
						//dataPointEO.indexLabelFontSize = dataPoint.indexLabelFontSize ? dataPoint.indexLabelFontSize : dataSeries.indexLabelFontSize;
					}

					var currentDataPoint, nextDataPoint;
					for (i = 0; i < dataPoints.length; i++) {

						var dataPointEO = dataPointEOs[i];
						//dataPointEO.lab
						//resetAnimationFrame();
						//animate();
						//renderLabels();

						//var prevDataPointIndex = (i - 1 + dataPointEOs.length) % dataPointEOs.length;

						//var nextDataPointIndex = (i + 1 + dataPointEOs.length) % dataPointEOs.length;
						//nextDataPointIndex = dataPointEOs[nextDataPointIndex].hemisphere === dataPointEO.hemisphere && nextDataPointIndex !== i ? nextDataPointIndex : null;

						var nextDataPointIndex = getNextLabelIndex(i);

						if (nextDataPointIndex === null)
							continue;

						currentDataPoint = dataPointEOs[i];
						nextDataPoint = dataPointEOs[nextDataPointIndex];


						var distanceFromNextLabel = 0;

						//if (dataPointEO.hemisphere === "right")
						//	distanceFromNextLabel = (nextDataPoint.indexLabelTextBlock.y - nextDataPoint.indexLabelTextBlock.height / 2) - (currentDataPoint.indexLabelTextBlock.y + currentDataPoint.indexLabelTextBlock.height / 2) - minDistanceBetweenLabels;
						//else
						//	distanceFromNextLabel = (currentDataPoint.indexLabelTextBlock.y - currentDataPoint.indexLabelTextBlock.height / 2) - (nextDataPoint.indexLabelTextBlock.y + nextDataPoint.indexLabelTextBlock.height / 2) - minDistanceBetweenLabels;

						distanceFromNextLabel = getVerticalDistanceBetweenLabels(currentDataPoint, nextDataPoint) - minDistanceBetweenLabels;


						if (distanceFromNextLabel < 0) {

							var dataPointsAbove = 0;
							var dataPointsBelow = 0;
							//var indexLabelAngleWhenTangent = Math.acos(outerRadius / indexLabelRadius) / Math.PI * 180;


							for (var k = 0; k < dataPoints.length; k++) {

								if (k === i)
									continue;

								//if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere || Math.abs(dataPointEOs[k].midAngle - dataPointEO.midAngle) > 30)
								//	continue;
								//if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere || Math.abs(dataPointEOs[k].labelAngle - dataPointEO.indexLabelAngle) > 30)
								//	continue;
								//if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere || Math.abs(dataPointEOs[k].midAngle - dataPointEO.midAngle) > indexLabelAngleWhenTangent)
								//	continue;
								if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere)
									continue;

								if (dataPointEOs[k].indexLabelTextBlock.y < dataPointEO.indexLabelTextBlock.y)
									dataPointsAbove++;
								else
									dataPointsBelow++;
							}

							//var upWardsOffset = (distanceFromNextLabel) / dataPoints.length * (dataPointsBelow);
							var upWardsOffset = (distanceFromNextLabel) / (dataPointsAbove + dataPointsBelow || 1) * (dataPointsBelow);
							var downWardsOffset = -1 * (distanceFromNextLabel - upWardsOffset);

							var actualUpwardOffset = 0;
							var actualDownwardOffset = 0;

							if (dataPointEO.hemisphere === "right") {
								actualUpwardOffset = rePositionLabels(i, upWardsOffset);

								//if (i < 4 && actualDownwardOffset !== upWardsOffset)
								//	customPrompt(i + "; " + upWardsOffset.toFixed(2) + "; " + actualUpwardOffset.toFixed(2));


								downWardsOffset = -1 * (distanceFromNextLabel - actualUpwardOffset);

								actualDownwardOffset = rePositionLabels(nextDataPointIndex, downWardsOffset);

								//window.alert(typeof +downWardsOffset.toFixed(precision));
								//Setting precision to make sure that they don't become not equal become of minor differences - like a difference of .000001
								if (+actualDownwardOffset.toFixed(precision) < +downWardsOffset.toFixed(precision) && +actualUpwardOffset.toFixed(precision) <= +upWardsOffset.toFixed(precision))
									rePositionLabels(i, -(downWardsOffset - actualDownwardOffset));

							} else {
								actualUpwardOffset = rePositionLabels(nextDataPointIndex, upWardsOffset);

								downWardsOffset = -1 * (distanceFromNextLabel - actualUpwardOffset);

								actualDownwardOffset = rePositionLabels(i, downWardsOffset);

								//Setting precision to make sure that they don't become not equal become of minor differences - like a difference of .000001
								if (+actualDownwardOffset.toFixed(precision) < +downWardsOffset.toFixed(precision) && +actualUpwardOffset.toFixed(precision) <= +upWardsOffset.toFixed(precision))
									rePositionLabels(nextDataPointIndex, -(downWardsOffset - actualDownwardOffset));
							}
						}


						//resetAnimationFrame();
						//animate();
						//renderLabels();
						//window.alert("next??");
					}
				} else {
					for (i = 0; i < dataPoints.length; i++) {

						var dataPointEO = dataPointEOs[i];
						indexLabelRadius = dataSeries.type === "pie" ? outerRadius * .7 : outerRadius * .8;


						var dx = center.x + indexLabelRadius * (Math.cos((dataPointEO.midAngle)));
						var dy = center.y + indexLabelRadius * (Math.sin((dataPointEO.midAngle)));

						dataPointEO.indexLabelTextBlock.x = dx;
						dataPointEO.indexLabelTextBlock.y = dy;
					}
				}

				// Resize Pie based on the label length.
				for (i = 0; i < dataPoints.length; i++) {

					dataPointEO = dataPointEOs[i];

					var size = dataPointEO.indexLabelTextBlock.measureText();

					var xOverFlow = 0;
					var xdr = 0;

					if (dataPointEO.hemisphere === "right") {
						xOverFlow = plotArea.x2 - (dataPointEO.indexLabelTextBlock.x + dataPointEO.indexLabelTextBlock.width + indexLabelLineEdgeLength);
						xOverFlow *= -1;
					} else {
						xOverFlow = plotArea.x1 - (dataPointEO.indexLabelTextBlock.x - dataPointEO.indexLabelTextBlock.width - indexLabelLineEdgeLength);
					}

					if (xOverFlow > 0) {
						if (Math.abs(dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 - center.y) < outerRadius
							|| Math.abs(dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 - center.y) < outerRadius) {

							xdr = xOverFlow / Math.abs(Math.cos(dataPointEO.indexLabelAngle));

							if (xdr > 9)
								xdr = xdr * .3;

							if (xdr > deltaR)
								deltaR = xdr;

						} else {

						}
					}

					var yOverFlow = 0;
					var ydr = 0;

					if (dataPointEO.indexLabelAngle > 0 && dataPointEO.indexLabelAngle < Math.PI) {
						yOverFlow = plotArea.y2 - (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + 5);
						yOverFlow *= -1;
					} else {
						yOverFlow = plotArea.y1 - (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 - 5);
					}

					if (yOverFlow > 0) {
						if (Math.abs(dataPointEO.indexLabelTextBlock.x - center.x) < outerRadius) {

							ydr = yOverFlow / Math.abs(Math.sin(dataPointEO.indexLabelAngle));

							if (ydr > 9)
								ydr = ydr * .3;

							if (ydr > deltaR)
								deltaR = ydr;

						} else {

						}
					} else {
						//if (i < 4)
						//	customPrompt(i + "; " + center.y + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2));
					}

				}

				function removeLabelsForSmallSegments(totalOverlap, startIndex, endIndex) {

					//return;

					var dpEOs = [];
					var totalRemovedLabelHeight = 0;

					for (var i = startIndex; true; i = (i + 1 + dataPoints.length) % dataPoints.length) {
						dpEOs.push(dataPointEOs[i]);

						if (i === endIndex)
							break;
					}

					dpEOs.sort(function (entry1, entry2) {
						return entry1.y - entry2.y;
					});

					for (i = 0; i < dpEOs.length; i++) {
						var dpEO = dpEOs[i];

						if (totalRemovedLabelHeight < totalOverlap) {
							totalRemovedLabelHeight += dpEO.indexLabelTextBlock.height;
							dpEO.indexLabelTextBlock.text = "";
							dpEO.indexLabelText = "";
							dpEO.indexLabelTextBlock.measureText();
						} else
							break;
					}

				}

				//resetAnimationFrame(1);
				//animate();
				//window.alert("next??");

				var overlapStartIndex = -1;
				var overlapEndIndex = -1;
				var totalOverlap = 0;

				for (var k = 0; k < dataPoints.length; k++) {
					currentDataPoint = dataPointEOs[k];

					if (!currentDataPoint.indexLabelText)
						continue;

					var nextLabelIndex = getNextLabelIndex(k);
					if (nextLabelIndex === null)
						continue;

					var nextDataPoint = dataPointEOs[nextLabelIndex];

					distanceFromNextLabel = 0;

					//if (nextDataPoint.indexLabelTextBlock.y > currentDataPoint.indexLabelTextBlock.y)
					//	distanceFromNextLabel = (nextDataPoint.indexLabelTextBlock.y - (nextDataPoint.indexLabelTextBlock.height / 2)) - (currentDataPoint.indexLabelTextBlock.y + (currentDataPoint.indexLabelTextBlock.height / 2));
					//else
					//	distanceFromNextLabel = (currentDataPoint.indexLabelTextBlock.y - (currentDataPoint.indexLabelTextBlock.height / 2)) - (nextDataPoint.indexLabelTextBlock.y + (nextDataPoint.indexLabelTextBlock.height / 2));

					distanceFromNextLabel = getVerticalDistanceBetweenLabels(currentDataPoint, nextDataPoint);

					if (distanceFromNextLabel < 0) {

						if (overlapStartIndex < 0)
							overlapStartIndex = k;

						if (nextLabelIndex !== overlapStartIndex)
							overlapEndIndex = nextLabelIndex;

						totalOverlap += -distanceFromNextLabel;

						//nextDataPoint.indexLabelText = "";
						//nextDataPoint.indexLabelTextBlock.text = "";
						//nextDataPoint.indexLabelTextBlock.measureText();
					} else {

						if (totalOverlap > 0) {
							removeLabelsForSmallSegments(totalOverlap, overlapStartIndex, overlapEndIndex);

							overlapStartIndex = -1;
							overlapEndIndex = -1;
							totalOverlap = 0;
						}
					}

				}

				if (totalOverlap > 0)
					removeLabelsForSmallSegments(totalOverlap, overlapStartIndex, overlapEndIndex);

			}
			//window.alert("next??");

			//maxFrame = 50;
			resetAnimationFrame(_this.animationEnabled && _this.renderCount === 0 ? isCanvasSupported ? 60 : 30 : 1);
			//resetAnimationFrame(1);
			animate();
			//window.alert("next?");
			//renderLabels();

			//console.log("totalRecursions: " + totalRecursions);
		}

		this.pieDoughnutClickHandler = function (e) {

			if (animationParameter.frame !== animationParameter.maxFrames) {
				return;
			}

			var i = e.dataPointIndex;
			var dataPoint = e.dataPoint;


			var id = e.dataSeries.dataPointIds[i];

			//dataPointEO = _this._eventManager.objectMap[id];

			if (dataPoint.exploded)
				dataPoint.exploded = false;
			else
				dataPoint.exploded = true;

			//resetAnimationFrame(_this.animationEnabled ? isCanvasSupported ? 15 : 4 : 1);
			resetAnimationFrame(isCanvasSupported ? 15 : 4);

			explodeToggle();

			return;
		}

		initLabels();

		//resetAnimationFrame();
		positionLabels();

		//this.ctx.strokeRect(plotArea.x1 + 1, plotArea.y1, plotArea.width - 2, plotArea.height);
	}

	//var continuePrompt = true;
	//function customPrompt(msg) {
	//	if (!continuePrompt)
	//		return;

	//	var result = prompt("Custom Prompt", msg);

	//	if (result !== null)
	//		continuePrompt = true;
	//	else
	//		continuePrompt = false;
	//}

	//#endregion pieChart

	//#endregion Render Methods

	Chart.prototype.requestAnimFrame = (function () {
		return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	})();

	//#endregion Class Chart

	//#region Class LayoutManager
	function LayoutManager(chart) {

		this._topOccupied = 0;
		this._bottomOccupied = 0;
		this._leftOccupied = 0;
		this._rightOccupied = 0;
		this.chart = chart;
	}

	LayoutManager.prototype.registerSpace = function (position, size) {
		if (position === "top") {
			this._topOccupied += size.height;
		}
		else if (position === "bottom") {
			this._bottomOccupied += size.height;
		} else if (position === "left") {
			this._leftOccupied += size.width; // this is width when seen upright/vertically
		} else if (position === "right") {
			this._rightOccupied += size.width;// this is width when seen upright/vertically
		}
	}

	LayoutManager.prototype.unRegisterSpace = function (position, size) {
		if (position === "top") {
			this._topOccupied -= size.height;
		}
		else if (position === "bottom") {
			this._bottomOccupied -= size.height;
		} else if (position === "left") {
			this._leftOccupied -= size.width;// this is width when seen upright/vertically
		} else if (position === "right") {
			this._rightOccupied -= size.width;// this is width when seen upright/vertically
		}
	}

	LayoutManager.prototype.getFreeSpace = function () {
		///<signature>
		///<summary>Returns available free space {x1:number, y1:number, x2:number, y2:number}</summary>
		///</signature>

		return {
			x1: this._leftOccupied,
			y1: this._topOccupied,
			x2: this.chart.width - this._rightOccupied,
			y2: this.chart.height - this._bottomOccupied,
			width: (this.chart.width - this._rightOccupied) - this._leftOccupied,
			height: (this.chart.height - this._bottomOccupied) - this._topOccupied
		};
	}

	LayoutManager.prototype.reset = function () {
		this._topOccupied = 0;
		this._bottomOccupied = 3;//so that there is enough padding in the bottom.
		this._leftOccupied = 0;
		this._rightOccupied = 0;
	}
	//#endregion Class LayoutManager

	//#region Class TextBlock
	function TextBlock(ctx, options) {
		TextBlock.parent.constructor.call(this, "TextBlock", options);

		this.ctx = ctx;
		this._isDirty = true;
		this._wrappedText = null;
		this._lineHeight = getFontHeightInPixels(this.fontFamily, this.fontSize, this.fontWeight);
	}
	extend(TextBlock, CanvasJSObject);
	TextBlock.prototype.render = function (preserveContext) {
		if (preserveContext)
			this.ctx.save();

		var font = this.ctx.font;
		this.ctx.textBaseline = this.textBaseline;

		if (this._isDirty)
			this.measureText(this.ctx);

		this.ctx.translate(this.x, this.y);
		this.ctx.font = this._getFontString();

		this.ctx.rotate(Math.PI / 180 * this.angle);

		var textLeft = 0;
		//var textTop = this.textBaseline === "middle" ? this.fontSize / 2 + this.padding : this.padding;
		var textTop = this.padding;
		var line = null;

		if ((this.borderThickness > 0 && this.borderColor) || this.backgroundColor) {
			this.ctx.roundRect(0, 0, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);

			if (this.textBaseline === "middle")
				textTop += this.fontSize / 2;
			//textTop += this._lineHeight / 2;
		}

		this.ctx.fillStyle = this.fontColor;

		for (var i = 0; i < this._wrappedText.lines.length; i++) {

			line = this._wrappedText.lines[i];
			if (this.horizontalAlign === "right")
				textLeft = this.width - line.width - this.padding;
			else if (this.horizontalAlign === "left")
				textLeft = this.padding;
			else if (this.horizontalAlign === "center")
				textLeft = (this.width - this.padding * 2) / 2 - line.width / 2 + this.padding;

			this.ctx.fillText(line.text, textLeft, textTop);

			textTop += line.height;
		}

		this.ctx.font = font;

		if (preserveContext)
			this.ctx.restore();
	}

	TextBlock.prototype.setText = function (text) {
		this.text = text;
		this._isDirty = true;
		this._wrappedText = null;
	}

	TextBlock.prototype.measureText = function () {
		if (this.maxWidth === null) {
			throw ("Please set maxWidth and height for TextBlock");
		}

		this._wrapText(this.ctx);
		this._isDirty = false;

		return { width: this.width, height: this.height }
	}

	TextBlock.prototype._getLineWithWidth = function (text, width, clipWord) {
		text = String(text);
		clipWord = clipWord || false;

		if (!text)
			return { text: "", width: 0 };

		var textWidth = 0,
			min = 0,
			max = text.length - 1,
			mid = Infinity;

		this.ctx.font = this._getFontString();

		while (min <= max) {
			mid = Math.floor((min + max) / 2);
			var tempText = text.substr(0, mid + 1);

			textWidth = this.ctx.measureText(tempText).width;

			if (textWidth < width) {
				min = mid + 1;
			} else if (textWidth > width) {
				max = mid - 1;
			} else {
				break;
			}
		}

		//edge cases
		if (textWidth > width && tempText.length > 1) {
			tempText = tempText.substr(0, tempText.length - 1);
			textWidth = this.ctx.measureText(tempText).width;
		}

		var isClipped = true;

		if (tempText.length === text.length || text[tempText.length] === " ")
			isClipped = false;

		if (isClipped) {
			var resultWords = tempText.split(" ");
			if (resultWords.length > 1)
				resultWords.pop();

			tempText = resultWords.join(" ");
			textWidth = this.ctx.measureText(tempText).width;
		}

		return { text: tempText, width: textWidth };
	}

	TextBlock.prototype._wrapText = function wrapText() {
		//this.ctx.save();
		text = new String(trimString(this.text));
		var lines = [];
		var font = this.ctx.font; // Save the current Font
		var height = 0;
		var width = 0;

		this.ctx.font = this._getFontString();

		while (text.length > 0) {

			var maxWidth = this.maxWidth - this.padding * 2;
			var maxHeight = this.maxHeight - this.padding * 2;

			var line = this._getLineWithWidth(text, maxWidth, false);
			line.height = this._lineHeight;

			lines.push(line);

			width = Math.max(width, line.width);
			height += line.height;
			text = trimString(text.slice(line.text.length, text.length));

			if (maxHeight && height > maxHeight) {
				var line = lines.pop();
				height -= line.height;
			}
		}

		this._wrappedText = { lines: lines, width: width, height: height };
		this.width = width + this.padding * 2;
		this.height = height + this.padding * 2;

		this.ctx.font = font; // Restore the font
	}

	TextBlock.prototype._getFontString = function () {
		//return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily
		return getFontString("", this, null);
	}

	//#endregion Class TextBlock

	//#region Class Title

	function Title(chart, options) {
		Title.parent.constructor.call(this, "Title", options, chart.theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;


		if (typeof (this._options.fontSize) === "undefined") {

			this.fontSize = this.chart.getAutoFontSize(this.fontSize);

			//window.console.log("Chart Title fontSize: " + this.fontSize);
		}

		this.width = null,//read only
		this.height = null//read only
		this.bounds = { x1: null, y1: null, x2: null, y2: null };
	}

	extend(Title, CanvasJSObject);
	Title.prototype.render = function () {

		if (!this.text)
			return;

		var freespace = this.chart.layoutManager.getFreeSpace();
		var left = 0;
		var top = 0;
		var angle = 0;
		var maxWidth = 0;
		var maxHeight = 0;

		var textBlockHorizontalAlign;
		var position;

		if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {
			maxWidth = freespace.width - this.margin * 2;
			maxHeight = freespace.height * .5 - this.margin * 2;
			angle = 0;
		}
		else if (this.verticalAlign === "center") {

			if (this.horizontalAlign === "left" || this.horizontalAlign === "right") {
				maxWidth = freespace.height - this.margin * 2;
				maxHeight = freespace.width * .5 - this.margin * 2;
			} else if (this.horizontalAlign === "center") {
				maxWidth = freespace.width - this.margin * 2;
				maxHeight = freespace.height * .5 - this.margin * 2;
			}
		}

		var textBlock = new TextBlock(this.ctx, {
			fontSize: this.fontSize, fontFamily: this.fontFamily, fontColor: this.fontColor,
			fontStyle: this.fontStyle, fontWeight: this.fontWeight,
			horizontalAlign: this.horizontalAlign, verticalAlign: this.verticalAlign,
			borderColor: this.borderColor, borderThickness: this.borderThickness,
			backgroundColor: this.backgroundColor,
			maxWidth: maxWidth, maxHeight: maxHeight,
			cornerRadius: this.cornerRadius,
			text: this.text,
			padding: this.padding,
			textBaseline: (this.borderColor && this.borderThickness > 0) ? "middle" : "top"
		});

		var textBlockSize = textBlock.measureText();

		if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {

			if (this.verticalAlign === "top") {
				top = this.margin;
				position = "top";
			}
			else if (this.verticalAlign === "bottom") {
				top = freespace.y2 - this.margin - textBlockSize.height;
				position = "bottom";
			}

			if (this.horizontalAlign === "left") {
				left = freespace.x1 + this.margin;
			}
			else if (this.horizontalAlign === "center") {
				left = freespace.x1 + (maxWidth / 2 - textBlockSize.width / 2) + this.margin;
			}
			else if (this.horizontalAlign === "right") {
				left = freespace.x2 - this.margin - textBlockSize.width;
			}

			textBlockHorizontalAlign = this.horizontalAlign;

			this.width = textBlockSize.width;
			this.height = textBlockSize.height;
		}
		else if (this.verticalAlign === "center") {

			if (this.horizontalAlign === "left") {

				left = freespace.x1 + this.margin;
				top = freespace.y2 - this.margin - (maxWidth / 2 - textBlockSize.width / 2);
				angle = -90;

				position = "left";
				this.width = textBlockSize.height;
				this.height = textBlockSize.width;
			}
			else if (this.horizontalAlign === "right") {
				left = freespace.x2 - this.margin;
				top = freespace.y1 + this.margin + (maxWidth / 2 - textBlockSize.width / 2);
				angle = 90;

				position = "right";
				this.width = textBlockSize.height;
				this.height = textBlockSize.width;
			}
			else if (this.horizontalAlign === "center") {
				top = freespace.y1 + (freespace.height / 2 - textBlockSize.height / 2);
				left = freespace.x1 + (freespace.width / 2 - textBlockSize.width / 2);

				position = "center";
				this.width = textBlockSize.width;
				this.height = textBlockSize.height;
			}

			textBlockHorizontalAlign = "center";
		}

		textBlock.x = left;
		textBlock.y = top;
		textBlock.angle = angle;
		textBlock.horizontalAlign = textBlockHorizontalAlign;
		textBlock.render(true);

		this.chart.layoutManager.registerSpace(position, { width: this.width + this.margin * 2, height: this.height + this.margin * 2 });

		this.bounds = { x1: left, y1: top, x2: left + this.width, y2: top + this.height };

		this.ctx.textBaseline = "top";
	}


	//#endregion Class Title

	//#region Legend

	//TBI: Implement Markes for Legend
	function Legend(chart, options, theme) {
		Legend.parent.constructor.call(this, "Legend", options, theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;

		this.width = 0,
		//this.fontSize = 12,
		this.height = 0,
		this.orientation = null,
		this.horizontalSpacing = 10;
		this.dataSeries = [];
		this.bounds = { x1: null, y1: null, x2: null, y2: null };

		if (typeof (this._options.fontSize) === "undefined") {
			this.fontSize = this.chart.getAutoFontSize(this.fontSize);
			//window.console.log("fontSize: " + this.fontSize);
		}

		this.lineHeight = getFontHeightInPixels(this.fontFamily, this.fontSize, this.fontWeight);
	}
	extend(Legend, CanvasJSObject);

	Legend.prototype.render = function () {
		var freeSpace = this.chart.layoutManager.getFreeSpace();
		var position = null;
		var top = 0;
		var left = 0;
		var maxWidth = 0;
		var maxHeight = 0;
		var entryMargin = 5;

		var entries = [];
		var rows = [];



		//this.ctx.font = getFontString("", this, null);
		//this.ctx.fontColor = this.fontColor;

		if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {
			this.orientation = "horizontal";
			position = this.verticalAlign;
			maxWidth = freeSpace.width * .9;
			maxHeight = freeSpace.height * .5;
		}
		else if (this.verticalAlign === "center") {
			this.orientation = "vertical";
			position = this.horizontalAlign;

			maxWidth = freeSpace.width * .5;
			maxHeight = freeSpace.height * .9;
		}

		for (var i = 0; i < this.dataSeries.length; i++) {
			var dataSeries = this.dataSeries[i];

			var markerType = dataSeries.legendMarkerType ? dataSeries.legendMarkerType : (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "scatter" || dataSeries.type === "bubble") && dataSeries.markerType ? dataSeries.markerType : DataSeries.getDefaultLegendMarker(dataSeries.type);
			var legendText = dataSeries.legendText ? dataSeries.legendText : dataSeries.name;
			var markerColor = dataSeries.legendMarkerColor ? dataSeries.legendMarkerColor : dataSeries.markerColor ? dataSeries.markerColor : dataSeries._colorSet[0];
			var markerSize = (!dataSeries.markerSize && (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline")) ? 0 : this.lineHeight * .6;
			var lineColor = dataSeries._colorSet[0];

			if (dataSeries.type !== "pie" && dataSeries.type !== "doughnut") {
				var entry = { markerType: markerType, markerColor: markerColor, text: legendText, textBlock: null, chartType: dataSeries.type, markerSize: markerSize, lineColor: dataSeries._colorSet[0] };

				entries.push(entry);
			} else {
				for (var dataPointIndex = 0; dataPointIndex < dataSeries.dataPoints.length; dataPointIndex++) {

					var dataPoint = dataSeries.dataPoints[dataPointIndex];

					markerType = dataPoint.legendMarkerType ? dataPoint.legendMarkerType : dataSeries.legendMarkerType ? dataSeries.legendMarkerType : DataSeries.getDefaultLegendMarker(dataSeries.type);
					var legendText = dataPoint.legendText ? dataPoint.legendText : dataSeries.legendText ? dataSeries.legendText : dataPoint.name ? dataPoint.name : "DataPoint: " + (dataPointIndex + 1);
					var markerColor = dataPoint.markerColor ? dataPoint.markerColor : dataSeries.markerColor ? dataSeries.markerColor : dataPoint.color ? dataPoint.color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[dataPointIndex % dataSeries._colorSet.length];
					var markerSize = ((dataPoint.markerSize === 0 || (dataSeries.markerSize === 0 && !dataPoint.markerSize)) && (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline")) ? 0 : this.lineHeight * .6;

					var entry = { markerType: markerType, markerColor: markerColor, text: legendText, textBlock: null, chartType: dataSeries.type, markerSize: markerSize };

					entries.push(entry);
				}
			}

			entry = null;
		}


		// Find out the required width and height of Legend and position the entries relative to the container
		if (entries.length > 0) {
			var row = null;
			var rowIndex = 0; // required for vertical orientation
			for (var i = 0; i < entries.length; i++) {
				var entry = entries[i];

				if (this.orientation === "horizontal") {
					entry.textBlock = new TextBlock(this.ctx, {
						x: 0,
						y: 0,//TBI
						maxWidth: maxWidth,
						maxHeight: this.lineHeight, //TBI: FontSize
						angle: 0,
						text: entry.text,
						horizontalAlign: "left",//left, center, right
						fontSize: this.fontSize,//in pixels
						fontFamily: this.fontFamily,
						fontWeight: this.fontWeight, //normal, bold, bolder, lighter,
						fontColor: this.fontColor,
						fontStyle: this.fontStyle, // normal, italic, oblique
						textBaseline: "top"
					});
					entry.textBlock.measureText();


					if (!row || row.width + entry.textBlock.width + (row.width === 0 ? 0 : this.horizontalSpacing) > maxWidth) {
						row = { entries: [], width: 0 };
						rows.push(row);
						this.height = rows.length * (entry.textBlock.height + 5);
					}

					entry.textBlock.x = row.width;
					entry.textBlock.y = 0;

					row.width += Math.round(entry.textBlock.width + entry.textBlock._lineHeight + (row.width === 0 ? 0 : entry.textBlock._lineHeight * .5));
					row.entries.push(entry);

					this.width = Math.max(row.width, this.width);

				} else {
					if (this.height + this.lineHeight < maxHeight) {
						row = { entries: [], width: 0 };
						rows.push(row);
						this.height = rows.length * (this.lineHeight);
					} else {
						row = rows[rowIndex];
						rowIndex = (rowIndex + 1) % rows.length
					}

					entry.textBlock = new TextBlock(this.ctx, {
						x: 0,
						y: 0,//TBI
						maxWidth: maxWidth,
						maxHeight: this.fontSize * 1.5, //TBI: FontSize
						angle: 0,
						text: entry.text,
						horizontalAlign: "left",//left, center, right
						fontSize: this.fontSize,//in pixels
						fontFamily: this.fontFamily,
						fontWeight: this.fontWeight, //normal, bold, bolder, lighter,
						fontColor: this.fontColor,
						fontStyle: this.fontStyle, // normal, italic, oblique
						textBaseline: "top"
					});

					entry.textBlock.measureText();

					entry.textBlock.x = row.width; // relative to the row
					entry.textBlock.y = 0; // relative to the row

					row.width += entry.textBlock.width + entry.textBlock._lineHeight + (row.width === 0 ? 0 : entry.textBlock._lineHeight * .5);
					row.entries.push(entry);

					this.width = Math.max(row.width, this.width);
				}
			}

			this.height = rows.length * (this.lineHeight);

		}

		if (this.verticalAlign === "top") {
			if (this.horizontalAlign === "left")
				left = freeSpace.x1 + 2;
			else if (this.horizontalAlign === "right")
				left = freeSpace.x2 - this.width - 2;
			else
				left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

			top = freeSpace.y1;
		} else if (this.verticalAlign === "center") {
			if (this.horizontalAlign === "left")
				left = freeSpace.x1 + 2;
			else if (this.horizontalAlign === "right")
				left = freeSpace.x2 - this.width - 2;
			else
				left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

			top = freeSpace.y1 + freeSpace.height / 2 - this.height / 2;
		} else if (this.verticalAlign === "bottom") {
			if (this.horizontalAlign === "left")
				left = freeSpace.x1 + 2;
			else if (this.horizontalAlign === "right")
				left = freeSpace.x2 - this.width - 2;
			else
				left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;


			top = freeSpace.y2 - this.height - 5;
		}

		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			for (var entryIndex = 0; entryIndex < row.entries.length; entryIndex++) {
				var entry = row.entries[entryIndex];

				var legendX = entry.textBlock.x + left + (entryIndex === 0 ? markerSize * .2 : (this.lineHeight * .4) + (markerSize * .2));
				var legendY = top + (i * this.lineHeight);

				if (entry.chartType === "line" || entry.chartType === "stepLine" || entry.chartType === "spline") {
					this.ctx.strokeStyle = entry.lineColor;
					this.ctx.lineWidth = Math.ceil(this.lineHeight / 8);
					this.ctx.beginPath();
					this.ctx.moveTo(legendX - this.lineHeight * .1, legendY + this.lineHeight / 2);
					this.ctx.lineTo(legendX + this.lineHeight * .7, legendY + this.lineHeight / 2);
					this.ctx.stroke();
				}

				RenderHelper.drawMarker(legendX + markerSize / 2, legendY + (this.lineHeight / 2), this.ctx, entry.markerType, markerSize, entry.markerColor, null, 0);

				entry.textBlock.x = legendX + Math.round(this.lineHeight * .9);
				entry.textBlock.y = legendY;
				entry.textBlock.render(true);
			}
		}

		//this.ctx.beginPath();
		//this.ctx.lineWidth = 2;
		//this.ctx.strokeStyle = "red";
		//this.ctx.rect(left, top, this.width, this.height);
		//this.ctx.stroke();


		this.chart.layoutManager.registerSpace(position, { width: this.width + 2 + 2, height: this.height + 5 + 5 });

		this.bounds = { x1: left, y1: top, x2: left + this.width, y2: top + this.height };
	}

	//#endregion Legend

	//#region Class PlotArea
	function PlotArea(chart, options) {
		PlotArea.parent.constructor.call(this, options);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;
	}
	extend(PlotArea, CanvasJSObject);

	PlotArea.prototype.render = function () {
		var freeSpace = this.chart.layoutManager.getFreeSpace();

		this.ctx.fillStyle = "red";
		this.ctx.fillRect(freeSpace.x1, freeSpace.y1, freeSpace.x2, freeSpace.y2);
	}
	//#endregion Class PlotArea

	//#region DataSeries

	function DataSeries(chart, options, theme, index, id) {
		DataSeries.parent.constructor.call(this, "DataSeries", options, theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this._ctx = chart.canvas.ctx;
		this.index = index;
		this.noDataPointsInPlotArea = 0;
		this.maxWidthInX = 0;
		this.id = id;
		this.dataPointIds = [];

		this.axisX = null;
		this.axisY = null;

		this.axisPlacement = this.getDefaultAxisPlacement();

		if (typeof (this._options.indexLabelFontSize) === "undefined") {

			this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize);
		}
	}
	extend(DataSeries, CanvasJSObject);

	//Static Method that returns the axisPlacement for a given ChartType. Returns one of "normal", "xySwapped", "none"
	DataSeries.prototype.getDefaultAxisPlacement = function () {

		//type = this.type.toLowerCase();
		type = this.type;

		if (type === "column" || type === "line" || type === "stepLine" || type === "spline" || type === "area" || type === "stepArea" || type === "splineArea" || type === "stackedColumn" || type === "stackedLine" || type === "bubble" || type === "scatter"
			|| type === "stackedArea" || type === "stackedColumn100" || type === "stackedLine100" || type === "stackedArea100") {
			return "normal";
		}
		else if (type === "bar" || type === "stackedBar" || type === "stackedBar100") {

			return "xySwapped";
		}
		else if (type === "pie" || type === "doughnut") {
			return "none";
		} else {
			window.console.log("Unknown Chart Type: " + type);
			return null;
		}
	}

	DataSeries.getDefaultLegendMarker = function (type) {

		//type = type.toLowerCase();

		if (type === "column" || type === "stackedColumn" || type === "stackedLine" || type === "bar" || type === "stackedBar" || type === "stackedBar100"
			|| type === "bubble" || type === "scatter"
			|| type === "stackedColumn100" || type === "stackedLine100" || type === "stepArea") {
			return "square";
		}
		else if (type === "line" || type === "stepLine" || type === "spline" || type === "pie" || type === "doughnut") {
			return "circle";
		} else if (type === "area" || type === "splineArea" || type === "stackedArea" || type === "stackedArea100") {
			return "triangle"
		} else {
			window.console.log("Unknown Chart Type: " + type);
			return null;
		}
	}

	//Finds dataPoint with the given x value. If findClosest is set, finds dataPoint with closest x value. 
	//Returns searchResult object if found, else returns null
	DataSeries.prototype.getDataPointAtX = function (x, findClosest) {

		if (!this.dataPoints || this.dataPoints.length === 0) return null;

		var searchResult = { dataPoint: null, distance: Infinity, index: NaN };
		var dataPoint = null;

		var j = 0;
		var i = 0;
		var direction = 1; // +1 for foward and -1 for backward.

		var minimumXDistance = Infinity;
		var forwardMissCount = 0, backwardMissCount = 0;
		var maxMissCount = 1000;
		var searchStartIndex = 0;

		if (this.chart.plotInfo.axisPlacement !== "none") {
			var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

			if (xRange > 0)
				searchStartIndex = ((this.dataPoints.length - 1) / xRange * (x - this.dataPoints[0].x)) >> 0;
			else
				searchStartIndex = 0;

			//searchStartIndex = ((this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x) / this.dataPoints.length * (x - this.dataPoints[0].x)) >> 0;
		}

		while (true) {

			i = (direction > 0) ? searchStartIndex + j : searchStartIndex - j;

			if (i >= 0 && i < this.dataPoints.length) {

				dataPoint = this.dataPoints[i];

				var distance = Math.abs(dataPoint.x - x);

				if (distance < searchResult.distance) {
					searchResult.dataPoint = dataPoint;
					searchResult.distance = distance;
					searchResult.index = i;
				}

				var xDistance = Math.abs(dataPoint.x - x);
				if (xDistance <= minimumXDistance)
					minimumXDistance = xDistance;
				else {
					if (direction > 0)
						forwardMissCount++;
					else
						backwardMissCount++;
				}

				if (forwardMissCount > maxMissCount && backwardMissCount > maxMissCount)
					break;


			} else if (searchStartIndex - j < 0 && searchStartIndex + j >= this.dataPoints.length)
				break;

			if (direction === -1) {
				j++;
				direction = 1;
			} else
				direction = -1;
		}


		if (!findClosest && searchResult.dataPoint.x === x)
			return searchResult;
		else if (findClosest && searchResult.dataPoint !== null)
			return searchResult;
		else
			return null;
	}

	// x & y should be in pixels. Can be used only after rendering the chart.
	DataSeries.prototype.getDataPointAtXY = function (x, y, getClosest) {

		if (!this.dataPoints || this.dataPoints.length === 0) return null;

		getClosest = getClosest || false;
		var results = [];
		var j = 0, i = 0;
		var direction = 1; // +1 for foward and -1 for backward.
		var foundDataPoint = false;
		var minimumXDistance = Infinity;
		var forwardMissCount = 0, backwardMissCount = 0;
		var maxMissCount = 1000;
		var searchStartIndex = 0;

		if (this.chart.plotInfo.axisPlacement !== "none") {
			var xval = this.chart.axisX.getXValueAt({ x: x, y: y });
			var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

			if (xRange > 0)
				searchStartIndex = ((this.dataPoints.length - 1) / xRange * (xval - this.dataPoints[0].x)) >> 0;
			else
				searchStartIndex = 0;
		}

		while (true) {

			//i = searchStartIndex + (j * direction);
			i = (direction > 0) ? searchStartIndex + j : searchStartIndex - j;

			if (i >= 0 && i < this.dataPoints.length) {

				var id = this.dataPointIds[i];
				var visualInfo = this.chart._eventManager.objectMap[id];
				var dataPoint = this.dataPoints[i];

				if (visualInfo) {

					switch (this.type) {

						case "column":
						case "stackedColumn":
						case "stackedColumn100":
						case "bar":
						case "stackedBar":
						case "stackedBar100":
							if (x >= visualInfo.x1 && x <= visualInfo.x2 && y >= visualInfo.y1 && y <= visualInfo.y2) {
								results.push({
									dataPoint: dataPoint,
									dataPointIndex: i,
									dataSeries: this,
									distance: Math.min(Math.abs(visualInfo.x1 - x), Math.abs(visualInfo.x2 - x), Math.abs(visualInfo.y1 - y), Math.abs(visualInfo.y2 - y))
									//distance:0
								});

								foundDataPoint = true;
							}
							break;

						case "line":
						case "stepLine":
						case "spline":
						case "area":
						case "stepArea":
						case "stackedArea":
						case "stackedArea100":
						case "splineArea":
						case "scatter":
							var markerSize = getProperty("markerSize", dataPoint, this) || 4;
							var snapDistance = getClosest ? 20 : markerSize;

							var distance = Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2));
							if (distance <= snapDistance) {
								results.push({
									dataPoint: dataPoint,
									dataPointIndex: i,
									dataSeries: this,
									distance: distance
								});
							}

							var xDistance = Math.abs(visualInfo.x1 - x);
							if (xDistance <= minimumXDistance)
								minimumXDistance = xDistance;
							else {
								if (direction > 0)
									forwardMissCount++;
								else
									backwardMissCount++;
							}

							if (distance <= markerSize / 2) {
								foundDataPoint = true;
							}

							break;

						case "bubble":
							var markerSize = visualInfo.size;
							var distance = Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2));
							if (distance <= markerSize / 2) {
								results.push({
									dataPoint: dataPoint,
									dataPointIndex: i,
									dataSeries: this,
									distance: distance
								});

								foundDataPoint = true;
							}
							break;

						case "pie":
						case "doughnut":
							var center = visualInfo.center;
							var innerRadius = this.type === "doughnut" ? .6 * visualInfo.radius : 0;

							var distance = Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2));
							if (distance < visualInfo.radius && distance > innerRadius) {

								var deltaY = y - center.y;
								var deltaX = x - center.x;
								var angle = Math.atan2(deltaY, deltaX);

								if (angle < 0)
									angle += Math.PI * 2;

								angle = ((angle / Math.PI * 180 % 360) + 360) % 360;
								var startAngle = ((visualInfo.startAngle / Math.PI * 180 % 360) + 360) % 360;
								var endAngle = ((visualInfo.endAngle / Math.PI * 180 % 360) + 360) % 360;

								if (startAngle > endAngle) {
									endAngle += 360;

									if (angle < startAngle)
										angle += 360;
								}

								if (angle > startAngle && angle < endAngle) {
									results.push({
										dataPoint: dataPoint,
										dataPointIndex: i,
										dataSeries: this,
										distance: 0
									});

									foundDataPoint = true;
								}

							}

							break;

					}

					if (foundDataPoint || (forwardMissCount > maxMissCount && backwardMissCount > maxMissCount))
						break;
				}

			} else if (searchStartIndex - j < 0 && searchStartIndex + j >= this.dataPoints.length)
				break;

			if (direction === -1) {
				j++;
				direction = 1;
			} else
				direction = -1;

		}



		var closestResult = null;

		for (var m = 0; m < results.length; m++) {
			if (!closestResult) {
				closestResult = results[m];
			} else if (results[m].distance <= closestResult.distance) {
				closestResult = results[m];
			}
		}

		//if (window.console && closestResult)
		//    window.console.log(j + ": distance = " + closestResult.distance);

		return closestResult;
	}

	DataSeries.prototype.getMarkerProperties = function (index, x, y, ctx) {
		var dataPoints = this.dataPoints;
		var dataSeries = this;

		var markerColor = dataPoints[index].markerColor ? dataPoints[index].markerColor : dataSeries.markerColor ? dataSeries.markerColor : dataPoints[index].color ? dataPoints[index].color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[index % dataSeries._colorSet.length];
		var markerBorderColor = dataPoints[index].markerBorderColor ? dataPoints[index].markerBorderColor : dataSeries.markerBorderColor ? dataSeries.markerBorderColor : null;
		var markerBorderThickness = dataPoints[index].markerBorderThickness ? dataPoints[index].markerBorderThickness : dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : null;
		var markerType = dataPoints[index].markerType ? dataPoints[index].markerType : dataSeries.markerType;
		var markerSize = dataPoints[index].markerSize ? dataPoints[index].markerSize : dataSeries.markerSize;


		return {
			x: x, y: y, ctx: ctx,
			type: markerType,
			size: markerSize,
			color: markerColor,
			borderColor: markerBorderColor,
			borderThickness: markerBorderThickness
		}
	}
	//#endregion DataSeries

	//#region Axis

	function Axis(chart, options, type, position) {
		Axis.parent.constructor.call(this, "Axis", options, chart.theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = chart.ctx;
		this.maxWidth = 0;
		this.maxHeight = 0;
		this.intervalStartPosition = 0;
		this.labels = [];
		this._labels = null;

		//Processed information about the data that gets plotted against this axis
		this.dataInfo = {
			min: Infinity,
			max: -Infinity,
			viewPortMin: Infinity,
			viewPortMax: -Infinity,
			minDiff: Infinity // Used only in case of axisX
		};

		if (type === "axisX") {
			this.sessionVariables = this.chart.sessionVariables[type];

			if (!this._options.interval)
				this.intervalType = null;
		} else {
			if (position === "left" || position === "top")
				this.sessionVariables = this.chart.sessionVariables["axisY"];
			else {
				this.sessionVariables = this.chart.sessionVariables["axisY2"];
			}
		}



		if (typeof (this._options.titleFontSize) === "undefined") {

			this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize);

			//window.console.log("titleFontSize: " + this.titleFontSize);
		}

		if (typeof (this._options.labelFontSize) === "undefined") {

			this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize);

			//window.console.log("labelFontSize: " + this.labelFontSize);

		}

		//Axis Type : axisX, axisY
		this.type = type;
		if (type === "axisX" && (!options || typeof (options.gridThickness) === "undefined"))
			this.gridThickness = 0;

		this._position = position;

		this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };//{x1:, y1:, x2:, y2:, width:}
		//
		{
			this.labelAngle = ((this.labelAngle % 360) + 360) % 360;

			if (this.labelAngle > 90 && this.labelAngle <= 270)
				this.labelAngle -= 180;
			else if (this.labelAngle > 180 && this.labelAngle <= 270)
				this.labelAngle -= 180
			else if (this.labelAngle > 270 && this.labelAngle <= 360)
				this.labelAngle -= 360
		}

		this._titleTextBlock = null;
		this._absoluteMinimum = null;// Used to determine boundaries while Zooming/Panning
		this._absoluteMaximum = null;// Used to determine boundaries while Zooming/Panning

		if (this.hasOptionChanged("minimum"))
			this.sessionVariables.internalMinimum = this.minimum;

		if (this.hasOptionChanged("maximum"))
			this.sessionVariables.internalMaximum = this.maximum;

		this.trackChanges("minimum");
		this.trackChanges("maximum");
	}
	extend(Axis, CanvasJSObject);

	Axis.prototype.createLabels = function () {
		var textBlock;
		var i = 0;
		var endPoint;

		var labelMaxWidth = 0;
		var labelMaxHeight = 0;
		var intervalInPixels = 0;

		//var intervalInPixels = this.convertionParameters.pixelPerUnit * this.interval;


		if (this._position === "bottom" || this._position === "top") {
			intervalInPixels = this.lineCoordinates.width / Math.abs(this.maximum - this.minimum) * this.interval;

			if (this.labelAutoFit) {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? intervalInPixels * .9 >> 0 : this.labelMaxWidth;
			}
			else {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .7 >> 0 : this.labelMaxWidth;
			}

			labelMaxHeight = typeof (this._options.labelWrap) === "undefined" || this.labelWrap ? this.chart.height * .5 >> 0 : this.labelFontSize * 1.5;
		}
		else if (this._position === "left" || this._position === "right") {

			intervalInPixels = this.lineCoordinates.height / Math.abs(this.maximum - this.minimum) * this.interval;


			if (this.labelAutoFit) {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .3 >> 0 : this.labelMaxWidth;
			}
			else {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .5 >> 0 : this.labelMaxWidth;
			}

			labelMaxHeight = typeof (this._options.labelWrap) === "undefined" || this.labelWrap ? intervalInPixels * 2 >> 0 : this.labelFontSize * 1.5;
		}

		if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {
			endPoint = addToDateTime(new Date(this.maximum), this.interval, this.intervalType)
			//endPoint = this.maximum;

			for (i = this.intervalStartPosition; i < endPoint; addToDateTime(i, this.interval, this.intervalType)) {

				//var text = dateFormat(i, this.valueFormatString);
				var text = this.type === "axisX" && this.labels[i] ? this.labels[i] : dateFormat(i, this.valueFormatString, this.chart._cultureInfo);

				textBlock = new TextBlock(this.ctx, {
					x: 0,
					y: 0,
					//maxWidth: this.maxHeight,
					//maxHeight: this.labelFontSize,
					maxWidth: labelMaxWidth,
					maxHeight: labelMaxHeight,
					angle: this.labelAngle,
					text: this.prefix + text + this.suffix,
					horizontalAlign: "left",//left, center, right
					fontSize: this.labelFontSize,//in pixels
					fontFamily: this.labelFontFamily,
					fontWeight: this.labelFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.labelFontColor,
					fontStyle: this.labelFontStyle, // normal, italic, oblique
					textBaseline: "middle"
				});

				this._labels.push({ position: i.getTime(), textBlock: textBlock, effectiveHeight: null });
			}

		}
		else {
			endPoint = this.maximum;

			//if ((Math.floor(this.interval) < this.interval && !this._options.interval) || true) {

			//Check if it should be rendered as a category axis. If yes, then ceil the interval
			if (this.labels && this.labels.length) {
				var tempInterval = Math.ceil(this.interval);
				var tempStartPoint = Math.ceil(this.intervalStartPosition);
				var hasAllLabels = false;
				for (i = tempStartPoint; i < this.maximum; i += tempInterval) {
					if (this.labels[i]) {
						hasAllLabels = true;
					} else {
						hasAllLabels = false;
						break;
					}
				}

				if (hasAllLabels) {
					this.interval = tempInterval;
					this.intervalStartPosition = tempStartPoint;
				}
			}

			for (i = this.intervalStartPosition; i <= endPoint; i += this.interval) {

				var text = this.type === "axisX" && this.labels[i] ? this.labels[i] : numberFormat(i, this.valueFormatString, this.chart._cultureInfo);

				textBlock = new TextBlock(this.ctx, {
					x: 0,
					y: 0,
					//maxWidth: this.maxHeight,
					//maxHeight: this.labelFontSize,
					maxWidth: labelMaxWidth,
					maxHeight: labelMaxHeight,
					angle: this.labelAngle,
					text: this.prefix + text + this.suffix,
					horizontalAlign: "left",//left, center, right
					fontSize: this.labelFontSize,//in pixels
					fontFamily: this.labelFontFamily,
					fontWeight: this.labelFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.labelFontColor,
					fontStyle: this.labelFontStyle, // normal, italic, oblique
					textBaseline: "middle",
					borderThickness: 0
				});

				this._labels.push({ position: i, textBlock: textBlock, effectiveHeight: null });
			}
		}
	}

	Axis.prototype.createLabelsAndCalculateWidth = function () {

		var maxLabelEffectiveWidth = 0;
		this._labels = [];

		if (this._position === "left" || this._position === "right") {

			this.createLabels();

			for (i = 0; i < this._labels.length; i++) {

				textBlock = this._labels[i].textBlock;

				var size = textBlock.measureText();

				//var hypotenuse = Math.sqrt(Math.pow(size.height / 2, 2) + Math.pow(size.width, 2));
				//labelEffectiveWidth = hypotenuse * Math.cos(Math.abs(Math.PI / 180 * this.labelAngle) - Math.abs(Math.acos(size.width / hypotenuse)));

				if (this.labelAngle === 0)
					labelEffectiveWidth = size.width;
				else
					labelEffectiveWidth = (size.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) + (size.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)));


				if (maxLabelEffectiveWidth < labelEffectiveWidth)
					maxLabelEffectiveWidth = labelEffectiveWidth;

				this._labels[i].effectiveWidth = labelEffectiveWidth;
			}
		}

		//if (isDebugMode && window.console) {
		//    window.console.log(this.type + " --- axisWidth : " + (maxLabelEffectiveWidth + this.tickLength));
		//}

		var titleHeight = this.title ? getFontHeightInPixels(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0;

		return titleHeight + maxLabelEffectiveWidth + this.tickLength + 10;
	}

	Axis.prototype.createLabelsAndCalculateHeight = function () {
		var maxLabelEffectiveHeight = 0;
		this._labels = [];
		var textBlock;
		var i = 0;

		this.createLabels();

		if (this._position === "bottom" || this._position === "top") {

			for (i = 0; i < this._labels.length; i++) {

				textBlock = this._labels[i].textBlock;

				var size = textBlock.measureText();
				//var diagonal = Math.sqrt(Math.pow(size.height, 2) + Math.pow(size.width, 2));

				//var hypotenuse = Math.sqrt(Math.pow(size.height / 2, 2) + Math.pow(size.width, 2));
				//var labelEffectiveHeight = hypotenuse * Math.cos(Math.PI / 2 - (Math.abs(Math.PI / 180 * this.labelAngle) + Math.abs(Math.acos(size.width / hypotenuse))));

				var labelEffectiveHeight = 0;

				if (this.labelAngle === 0)
					labelEffectiveHeight = size.height;
				else
					labelEffectiveHeight = (size.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) + (size.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)));

				if (maxLabelEffectiveHeight < labelEffectiveHeight)
					maxLabelEffectiveHeight = labelEffectiveHeight;

				this._labels[i].effectiveHeight = labelEffectiveHeight;
			}
		}

		//var titleHeight = this.title ? this.titleFontSize + 5 : 0;
		var titleHeight = this.title ? getFontHeightInPixels(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0;

		return titleHeight + maxLabelEffectiveHeight + this.tickLength;
	}

	//Static Method that co-ordinates between axisX, axisY and renders them
	Axis.setLayoutAndRender = function (axisX, axisY, axisY2, axisPlacement, freeSpace) {
		var x1, y1, x2, y2;
		var chart = axisX.chart;
		var ctx = chart.ctx;

		axisX.calculateAxisParameters();

		if (axisY)
			axisY.calculateAxisParameters();

		if (axisY2)
			axisY2.calculateAxisParameters();

		if (axisY && axisY2 && typeof (axisY._options.maximum) === "undefined" && typeof (axisY._options.minimum) === "undefined" && typeof (axisY._options.interval) === "undefined"
				&& typeof (axisY2._options.maximum) === "undefined" && typeof (axisY2._options.minimum) === "undefined" && typeof (axisY2._options.interval) === "undefined") {

			var noTicksY = (axisY.maximum - axisY.minimum) / axisY.interval;

			var noTicksY2 = (axisY2.maximum - axisY2.minimum) / axisY2.interval;

			if (noTicksY > noTicksY2) {
				axisY2.maximum = axisY2.interval * noTicksY + axisY2.minimum;
			} else if (noTicksY2 > noTicksY) {
				axisY.maximum = axisY.interval * noTicksY2 + axisY.minimum;
			}
		}

		var axisYlineThickness = axisY ? axisY.lineThickness ? axisY.lineThickness : 0 : 0;
		var axisY2lineThickness = axisY2 ? axisY2.lineThickness ? axisY2.lineThickness : 0 : 0;

		var axisYGridThickness = axisY ? axisY.gridThickness ? axisY.gridThickness : 0 : 0;
		var axisY2GridThickness = axisY2 ? axisY2.gridThickness ? axisY2.gridThickness : 0 : 0;

		var axisYMargin = axisY ? axisY.margin : 0;
		var axisY2Margin = axisY ? axisY.margin : 0;

		if (axisPlacement === "normal") {

			axisX.lineCoordinates = {};

			var axisYWidth = Math.ceil(axisY ? axisY.createLabelsAndCalculateWidth() : 0);
			x1 = Math.round(freeSpace.x1 + axisYWidth + axisYMargin);
			axisX.lineCoordinates.x1 = x1;

			var axisY2Width = Math.ceil(axisY2 ? axisY2.createLabelsAndCalculateWidth() : 0);
			x2 = Math.round(freeSpace.x2 - axisY2Width > axisX.chart.width - 10 ? axisX.chart.width - 10 : freeSpace.x2 - axisY2Width);
			axisX.lineCoordinates.x2 = x2;

			axisX.lineCoordinates.width = Math.abs(x2 - x1); // required early on inside createLabels of axisX

			var axisXHeight = Math.ceil(axisX.createLabelsAndCalculateHeight());

			// Position axisX based on the available free space, Margin and its height
			//x1 = freeSpace.x1 + axisYWidth + axisYMargin + axisYlineThickness / 2;
			y1 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);
			y2 = Math.round(freeSpace.y2 - axisX.margin);

			//axisX.lineCoordinates = { x1: x1, y1: y1, x2: x2, y2: y1, width: Math.abs(x2 - x1) }
			axisX.lineCoordinates.y1 = y1;
			axisX.lineCoordinates.y2 = y1;

			axisX.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };

			//axisX.ctx.rect(axisX.boundingRect.x1, axisX.boundingRect.y1, axisX.boundingRect.width, axisX.boundingRect.height);
			//axisX.ctx.stroke();

			// Position axisY based on the available free space, Margin and its height
			if (axisY) {
				x1 = Math.round(freeSpace.x1 + axisY.margin);
				y1 = Math.round(freeSpace.y1 < 10 ? 10 : freeSpace.y1);
				x2 = Math.round(freeSpace.x1 + axisYWidth + axisY.margin);
				//y2 = freeSpace.y2 - axisXHeight - axisX.margin - axisX.lineThickness / 2;
				y2 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);

				axisY.lineCoordinates = { x1: x2, y1: y1, x2: x2, y2: y2, height: Math.abs(y2 - y1) }

				axisY.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
			}

			//axisY.ctx.rect(axisY.boundingRect.x1, axisY.boundingRect.y1, axisY.boundingRect.width, axisY.boundingRect.height);
			//axisY.ctx.stroke();

			// Position axisY2 based on the available free space, Margin and its height
			if (axisY2) {
				x1 = Math.round(axisX.lineCoordinates.x2);
				y1 = Math.round(freeSpace.y1 < 10 ? 10 : freeSpace.y1);
				x2 = Math.round(x1 + axisY2Width + axisY2.margin);
				//y2 = freeSpace.y2 - axisXHeight - axisX.margin - axisX.lineThickness / 2;
				y2 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);

				axisY2.lineCoordinates = { x1: x1, y1: y1, x2: x1, y2: y2, height: Math.abs(y2 - y1) }

				axisY2.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
			}


			axisX.calculateValueToPixelConvertionParameters();

			if (axisY)
				axisY.calculateValueToPixelConvertionParameters();

			if (axisY2)
				axisY2.calculateValueToPixelConvertionParameters();


			ctx.save();
			ctx.rect(axisX.boundingRect.x1 - 40, axisX.boundingRect.y1, axisX.boundingRect.width + 80, axisX.boundingRect.height);
			ctx.clip();

			axisX.renderLabelsTicksAndTitle();
			ctx.restore();

			if (axisY)
				axisY.renderLabelsTicksAndTitle();

			if (axisY2)
				axisY2.renderLabelsTicksAndTitle();


			chart.preparePlotArea();
			var plotArea = axisX.chart.plotArea;

			ctx.save();

			ctx.rect(plotArea.x1,
				plotArea.y1 - Math.max(axisY2GridThickness, axisYGridThickness) / 2,
				Math.abs(plotArea.x2 - plotArea.x1),
				Math.abs(plotArea.y2 - plotArea.y1 + Math.max(axisY2GridThickness, axisYGridThickness) / 2 + Math.max(axisY2GridThickness, axisYGridThickness, axisX.lineThickness) / 2));

			ctx.clip();

			axisX.renderInterlacedColors();

			if (axisY)
				axisY.renderInterlacedColors();

			if (axisY2)
				axisY2.renderInterlacedColors();

			ctx.restore();


			axisX.renderGrid();

			if (axisY)
				axisY.renderGrid();

			if (axisY2)
				axisY2.renderGrid();


			axisX.renderAxisLine();

			if (axisY)
				axisY.renderAxisLine();

			if (axisY2)
				axisY2.renderAxisLine();
		}
		else {
			var axisXWidth = Math.ceil(axisX.createLabelsAndCalculateWidth());

			if (axisY) {
				axisY.lineCoordinates = {};

				x1 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
				x2 = Math.round(freeSpace.x2 > axisY.chart.width - 10 ? axisY.chart.width - 10 : freeSpace.x2);

				axisY.lineCoordinates.x1 = x1;
				axisY.lineCoordinates.x2 = x2;
				axisY.lineCoordinates.width = Math.abs(x2 - x1);
			}

			if (axisY2) {
				axisY2.lineCoordinates = {};
				x1 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
				x2 = Math.round(freeSpace.x2 > axisY2.chart.width - 10 ? axisY2.chart.width - 10 : freeSpace.x2);

				axisY2.lineCoordinates.x1 = x1;
				axisY2.lineCoordinates.x2 = x2;
				axisY2.lineCoordinates.width = Math.abs(x2 - x1);
			}



			var axisYHeight = Math.ceil(axisY ? axisY.createLabelsAndCalculateHeight() : 0);
			var axisY2Height = Math.ceil(axisY2 ? axisY2.createLabelsAndCalculateHeight() : 0);


			// Position axisY based on the available free space, Margin and its height
			if (axisY) {
				//x1 = freeSpace.x1 + axisXWidth + axisX.margin + axisX.lineThickness / 2;
				//x2 = freeSpace.x2 > axisY.chart.width - 10 ? axisY.chart.width - 10 : freeSpace.x2;

				y1 = Math.round(freeSpace.y2 - axisYHeight - axisY.margin);
				y2 = Math.round(freeSpace.y2 - axisYMargin > axisY.chart.height - 10 ? axisY.chart.height - 10 : freeSpace.y2 - axisYMargin);

				//axisY.lineCoordinates = { x1: x1, y1: y1, x2: x2, y2: y1, width: Math.abs(x2 - x1) }
				axisY.lineCoordinates.y1 = y1;
				axisY.lineCoordinates.y2 = y1;

				axisY.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: axisYHeight };
			}

			// Position axisY based on the available free space, Margin and its height
			if (axisY2) {
				//x1 = freeSpace.x1 + axisXWidth + axisX.margin + axisX.lineThickness / 2;
				//x2 = freeSpace.x2 > axisY2.chart.width - 10 ? axisY2.chart.width - 10 : freeSpace.x2;

				y1 = Math.round(freeSpace.y1 + axisY2.margin);
				y2 = (freeSpace.y1 + axisY2.margin + axisY2Height);

				//axisY2.lineCoordinates = { x1: x1, y1: y2, x2: x2, y2: y2, width: Math.abs(x2 - x1) }
				axisY2.lineCoordinates.y1 = y2;
				axisY2.lineCoordinates.y2 = y2;

				axisY2.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: axisY2Height };
			}

			//axisY.ctx.rect(axisY.boundingRect.x1, axisY.boundingRect.y1, axisY.boundingRect.width, axisY.boundingRect.height);
			//axisY.ctx.stroke();

			// Position axisX based on the available free space, Margin and its height
			x1 = Math.round(freeSpace.x1 + axisX.margin);
			y1 = Math.round(axisY2 ? axisY2.lineCoordinates.y2 : (freeSpace.y1 < 10 ? 10 : freeSpace.y1));
			x2 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
			y2 = Math.round(axisY ? axisY.lineCoordinates.y1 : (freeSpace.y2 - axisYMargin > axisX.chart.height - 10 ? axisX.chart.height - 10 : freeSpace.y2 - axisYMargin));


			axisX.lineCoordinates = { x1: x2, y1: y1, x2: x2, y2: y2, height: Math.abs(y2 - y1) };

			axisX.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };

			//axisX.ctx.rect(axisX.boundingRect.x1, axisX.boundingRect.y1, axisX.boundingRect.width, axisX.boundingRect.height);
			//axisX.ctx.stroke();

			axisX.calculateValueToPixelConvertionParameters();

			if (axisY)
				axisY.calculateValueToPixelConvertionParameters();
			if (axisY2)
				axisY2.calculateValueToPixelConvertionParameters();


			//ctx.save();
			//ctx.rect(axisY.boundingRect.x1 - 30, axisY.boundingRect.y1, axisY.boundingRect.width + 60, axisY.boundingRect.height);
			//ctx.clip();

			if (axisY)
				axisY.renderLabelsTicksAndTitle();

			if (axisY2)
				axisY2.renderLabelsTicksAndTitle();

			//ctx.restore();

			axisX.renderLabelsTicksAndTitle();

			chart.preparePlotArea();
			var plotArea = axisX.chart.plotArea;

			ctx.save();
			ctx.rect(plotArea.x1 - Math.max(axisX.lineThickness, axisYGridThickness, axisY2GridThickness) / 2,
				plotArea.y1,
				Math.abs(plotArea.x2 - plotArea.x1 + Math.max(axisX.lineThickness, axisYGridThickness, axisY2GridThickness) / 2 + Math.max(axisYGridThickness, axisY2GridThickness) / 2),
				Math.abs(plotArea.y2 - plotArea.y1));

			ctx.clip();

			axisX.renderInterlacedColors();

			if (axisY)
				axisY.renderInterlacedColors();
			if (axisY2)
				axisY2.renderInterlacedColors();

			ctx.restore();


			axisX.renderGrid();


			if (axisY)
				axisY.renderGrid();

			if (axisY2)
				axisY2.renderGrid();


			axisX.renderAxisLine();

			if (axisY)
				axisY.renderAxisLine();

			if (axisY2)
				axisY2.renderAxisLine();
		}

	}

	Axis.prototype.renderLabelsTicksAndTitle = function () {

		var skipLabels = false;
		var totalLabelWidth = 0;
		var thresholdRatio = 1;
		var labelCount = 0;

		var intervalInPixels = this.convertionParameters.pixelPerUnit * this.interval;

		if (this.labelAngle !== 0 && this.labelAngle !== 360)
			thresholdRatio = 1.2;

		//Don't skip labels when interval is explicitely set
		if (typeof (this._options.interval) === "undefined") {
			if (this._position === "bottom" || this._position === "top") {

				//thresholdRatio = .9;// More space is preferred between labels when axis is horizontally aligned

				for (i = 0; i < this._labels.length; i++) {
					label = this._labels[i];
					if (label.position < this.minimum)
						continue;

					var width = label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + label.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle);

					totalLabelWidth += width;
				}

				if (totalLabelWidth > this.lineCoordinates.width * thresholdRatio) {
					skipLabels = true;
				}
			} if (this._position === "left" || this._position === "right") {
				for (i = 0; i < this._labels.length; i++) {
					label = this._labels[i];
					if (label.position < this.minimum)
						continue;

					var width = label.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle);

					totalLabelWidth += width;
				}

				if (totalLabelWidth > this.lineCoordinates.height * thresholdRatio) {
					skipLabels = true;
				}
			}
		}

		if (this._position === "bottom") {
			var i = 0;

			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;

			for (i = 0; i < this._labels.length; i++) {

				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickX = (this.tickThickness % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);
					this.ctx.beginPath();
					this.ctx.moveTo(tickX, xy.y << 0);
					this.ctx.lineTo(tickX, (xy.y + this.tickLength) << 0);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				if (label.textBlock.angle === 0) {
					xy.x -= label.textBlock.width / 2;
					//xy.y += this.tickLength + label.textBlock.height / 2;
					xy.y += this.tickLength + label.textBlock.fontSize / 2;

				} else {
					xy.x -= (this.labelAngle < 0 ? (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) : 0);
					xy.y += this.tickLength + Math.abs((this.labelAngle < 0 ? label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0));
				}
				label.textBlock.x = xy.x;
				label.textBlock.y = xy.y;

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.lineCoordinates.x1,// This is recalculated again
					y: this.boundingRect.y2 - this.titleFontSize - 5,
					maxWidth: this.lineCoordinates.width,
					maxHeight: this.titleFontSize * 1.5,
					angle: 0,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2;
				this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 2;
				this._titleTextBlock.render(true);
			}
		} else if (this._position === "top") {
			var i = 0;

			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;

			for (i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickX = (this.tickThickness % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);
					this.ctx.beginPath();
					this.ctx.moveTo(tickX, xy.y << 0);
					this.ctx.lineTo(tickX, (xy.y - this.tickLength) << 0);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				if (label.textBlock.angle === 0) {
					xy.x -= label.textBlock.width / 2;
					xy.y -= this.tickLength + label.textBlock.height / 2;
				} else {
					xy.x -= (this.labelAngle > 0 ? (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) : 0);
					xy.y -= this.tickLength + Math.abs((this.labelAngle > 0 ? label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5));
				}
				label.textBlock.x = xy.x;
				label.textBlock.y = xy.y;

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.lineCoordinates.x1,// This is recalculated again
					y: this.boundingRect.y1,
					maxWidth: this.lineCoordinates.width,
					maxHeight: this.titleFontSize * 1.5,
					angle: 0,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2;
				this._titleTextBlock.render(true);
			}
		} else if (this._position === "left") {
			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;
			for (var i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickY = (this.tickThickness % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);
					//var tickY = xy.y;
					this.ctx.beginPath();
					this.ctx.moveTo(xy.x << 0, tickY);
					this.ctx.lineTo((xy.x - this.tickLength) << 0, tickY);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				label.textBlock.x = xy.x - (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) - this.tickLength - 5;

				if (this.labelAngle === 0) {
					label.textBlock.y = xy.y - label.textBlock.height / 2 + this.labelFontSize / 2;
				} else
					label.textBlock.y = xy.y - (label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle));

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.boundingRect.x1 + 5,
					y: this.lineCoordinates.y2,
					maxWidth: this.lineCoordinates.height,
					maxHeight: this.titleFontSize * 1.5,
					angle: -90,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.y = (this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1);
				this._titleTextBlock.render(true);

			}
		} else if (this._position === "right") {
			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;

			for (var i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickY = (this.tickThickness % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);
					//tickY = xy.y;
					this.ctx.beginPath();
					this.ctx.moveTo(xy.x << 0, tickY);
					this.ctx.lineTo((xy.x + this.tickLength) << 0, tickY);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				label.textBlock.x = xy.x + this.tickLength + 5;
				//label.textBlock.y = xy.y - (label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle));
				if (this.labelAngle === 0) {
					label.textBlock.y = xy.y - label.textBlock.height / 2 + this.labelFontSize / 2;
				}
				else
					label.textBlock.y = xy.y;

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.boundingRect.x2 - 5,
					y: this.lineCoordinates.y2,
					maxWidth: this.lineCoordinates.height,
					maxHeight: this.titleFontSize * 1.5,
					angle: 90,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.y = (this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1);
				this._titleTextBlock.render(true);

			}
		}
	}

	Axis.prototype.renderInterlacedColors = function () {
		var ctx = this.chart.plotArea.ctx;
		//return;

		var interlacedGridStartPoint;
		var interlacedGridEndPoint;
		var plotAreaCoordinates = this.chart.plotArea;
		if ((this._position === "bottom" || this._position === "top") && this.interlacedColor) {
			var i = 0;

			ctx.fillStyle = this.interlacedColor;

			for (i = 0; i < this._labels.length; i += 2) {
				interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this._labels[i].position);

				if (i + 1 >= this._labels.length)
					interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this.maximum);
				else
					interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this._labels[i + 1].position);

				ctx.fillRect(interlacedGridStartPoint.x, plotAreaCoordinates.y1, Math.abs(interlacedGridEndPoint.x - interlacedGridStartPoint.x), Math.abs(plotAreaCoordinates.y1 - plotAreaCoordinates.y2));
			}

		} else if ((this._position === "left" || this._position === "right") && this.interlacedColor) {

			ctx.fillStyle = this.interlacedColor;

			for (i = 0; i < this._labels.length; i += 2) {
				interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this._labels[i].position);

				if (i + 1 >= this._labels.length)
					interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this.maximum);
				else
					interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this._labels[i + 1].position);

				ctx.fillRect(plotAreaCoordinates.x1, interlacedGridStartPoint.y, Math.abs(plotAreaCoordinates.x1 - plotAreaCoordinates.x2), Math.abs(interlacedGridStartPoint.y - interlacedGridEndPoint.y));
			}
			//throw "123";
		}
	}

	Axis.prototype.renderGrid = function () {
		//var ctx = this.chart.plotArea.ctx;
		var ctx = this.chart.ctx;

		var xy;
		var plotAreaCoordinates = this.chart.plotArea;

		//return;

		if (this._position === "bottom" || this._position === "top") {

			if (this.gridThickness && this.gridThickness > 0) {
				ctx.lineWidth = this.gridThickness;
				ctx.strokeStyle = this.gridColor;

				ctx.beginPath();
				for (i = 0; i < this._labels.length; i++) {

					if (this._labels[i].position < this.minimum || this._labels[i].position > this.maximum)
						continue;

					xy = this.getPixelCoordinatesOnAxis(this._labels[i].position);

					var gridX = (this.gridThickness % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);


					ctx.moveTo(gridX, plotAreaCoordinates.y1 << 0);
					ctx.lineTo(gridX, plotAreaCoordinates.y2 << 0);
					ctx.stroke();

				}
			}

		}
		else if (this._position === "left" || this._position === "right") {

			if (this.gridThickness && this.gridThickness > 0) {
				ctx.lineWidth = this.gridThickness;
				ctx.strokeStyle = this.gridColor;

				ctx.beginPath();
				for (var i = 0; i < this._labels.length; i++) {

					if (this._labels[i].position < this.minimum || this._labels[i].position > this.maximum)
						continue;

					xy = this.getPixelCoordinatesOnAxis(this._labels[i].position);

					var gridY = (this.gridThickness % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);

					ctx.moveTo(plotAreaCoordinates.x1 << 0, gridY);
					ctx.lineTo(plotAreaCoordinates.x2 << 0, gridY);
					ctx.stroke();
				}
			}

		}
	}

	Axis.prototype.renderAxisLine = function () {
		//var ctx = this.chart.plotArea.ctx;
		var ctx = this.chart.ctx;

		if (this._position === "bottom" || this._position === "top") {
			if (this.lineThickness) {
				ctx.lineWidth = this.lineThickness;
				ctx.strokeStyle = this.lineColor ? this.lineColor : "black";

				var lineY = (this.lineThickness % 2 === 1) ? (this.lineCoordinates.y1 << 0) + .5 : (this.lineCoordinates.y1 << 0);

				ctx.beginPath();
				ctx.moveTo(this.lineCoordinates.x1, lineY);
				ctx.lineTo(this.lineCoordinates.x2, lineY);
				ctx.stroke();
			}

		} else if (this._position === "left" || this._position === "right") {
			if (this.lineThickness) {
				ctx.lineWidth = this.lineThickness;
				ctx.strokeStyle = this.lineColor;

				var lineX = (this.lineThickness % 2 === 1) ? (this.lineCoordinates.x1 << 0) + .5 : (this.lineCoordinates.x1 << 0);

				ctx.beginPath();
				ctx.moveTo(lineX, this.lineCoordinates.y1);
				ctx.lineTo(lineX, this.lineCoordinates.y2);
				ctx.stroke();
			}

		}
	}

	Axis.prototype.getPixelCoordinatesOnAxis = function (value) {
		var xy = {};
		var width = this.lineCoordinates.width;
		var height = this.lineCoordinates.height;

		if (this._position === "bottom" || this._position === "top") {
			var pixelPerUnit = width / Math.abs(this.maximum - this.minimum);

			xy.x = this.lineCoordinates.x1 + (pixelPerUnit * (value - this.minimum));
			xy.y = this.lineCoordinates.y1;
		}
		if (this._position === "left" || this._position === "right") {
			var pixelPerUnit = height / Math.abs(this.maximum - this.minimum);

			xy.y = this.lineCoordinates.y2 - (pixelPerUnit * (value - this.minimum));
			xy.x = this.lineCoordinates.x2;
		}

		return xy;
	}

	Axis.prototype.getXValueAt = function (pixel) {
		if (!pixel)
			return null;

		var xval = null;

		if (this._position === "left") {
			xval = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * ((this.chart.axisX.lineCoordinates.y2 - pixel.y)) + this.chart.axisX.minimum;
		}
		else if (this._position === "bottom") {
			xval = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (pixel.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum;
		}

		return xval;
	}

	Axis.prototype.calculateValueToPixelConvertionParameters = function (value) {
		var xy = {};
		var convertionParameters = { pixelPerUnit: null, minimum: null, reference: null };

		var width = this.lineCoordinates.width;
		var height = this.lineCoordinates.height;

		convertionParameters.minimum = this.minimum;

		if (this._position === "bottom" || this._position === "top") {
			convertionParameters.pixelPerUnit = width / Math.abs(this.maximum - this.minimum);
			convertionParameters.reference = this.lineCoordinates.x1;

			//xy.x = this.lineCoordinates.x1 + (pixelPerUnit * (value - this.minimum));
			//xy.y = this.lineCoordinates.y1;
		}
		if (this._position === "left" || this._position === "right") {
			convertionParameters.pixelPerUnit = -1 * height / Math.abs(this.maximum - this.minimum);
			convertionParameters.reference = this.lineCoordinates.y2;

			//xy.y = this.lineCoordinates.y2 + (pixelPerUnit * (value - this.minimum));
			//xy.x = this.lineCoordinates.x2;
		}


		this.convertionParameters = convertionParameters;
	}

	Axis.prototype.calculateAxisParameters = function () {

		var freeSpace = this.chart.layoutManager.getFreeSpace();
		var availableWidth = 0;
		var availableHeight = 0;

		if (this._position === "bottom" || this._position === "top") {
			this.maxWidth = freeSpace.width;
			this.maxHeight = freeSpace.height;
		} else {
			this.maxWidth = freeSpace.height;
			this.maxHeight = freeSpace.width;
		}

		var noTicks = this.type === "axisX" ? (this.maxWidth < 500 ? 8 : Math.max(6, Math.floor(this.maxWidth / 62))) : Math.floor(this.maxWidth / 40);
		//var noTicks = 8;
		var min, max;
		var minDiff;
		var range;

		if (this.type === "axisX") {
			min = (this.sessionVariables.internalMinimum !== null) ? this.sessionVariables.internalMinimum : this.dataInfo.viewPortMin;
			max = (this.sessionVariables.internalMaximum !== null) ? this.sessionVariables.internalMaximum : this.dataInfo.viewPortMax;

			if (max - min === 0) {
				//max += 1;
				max += .4;
				min -= .4;
			}

			if (this.dataInfo.minDiff !== Infinity)
				minDiff = this.dataInfo.minDiff;
			else
				minDiff = 1;

		} else if (this.type === "axisY") {

			min = typeof (this._options.minimum) === "undefined" ? this.dataInfo.viewPortMin : this._options.minimum;
			max = typeof (this._options.maximum) === "undefined" ? this.dataInfo.viewPortMax : this._options.maximum;

			// When there is only a single dataPoint or when all dapoints have same Y Value
			if (max - min === 0) {
				max += 5;
				min -= 5;
			}
			else {
				//var scaleFactor = Math.abs(max - min) * .01;
				if (max !== 0)
					max += Math.abs(.05);
				if (min !== 0)
					min -= Math.abs(.05);
			}


			//Apply includeZero
			if (this.includeZero && typeof (this._options.minimum) === "undefined") {
				if (min > 0)
					min = 0;
			}
			if (this.includeZero && typeof (this._options.maximum) === "undefined") {
				if (max < 0)
					max = 0;
			}
		}

		if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {

			range = max - min;

			if (!this.intervalType) {

				if (range / (1 * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "millisecond";
				} else if (range / (1 * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "millisecond";
				} else if (range / (1 * 5) <= noTicks) {
					this.interval = 5;
					this.intervalType = "millisecond";
				} else if (range / (1 * 10) <= noTicks) {
					this.interval = 10;
					this.intervalType = "millisecond";
				} else if (range / (1 * 20) <= noTicks) {
					this.interval = 20;
					this.intervalType = "millisecond";
				} else if (range / (1 * 50) <= noTicks) {
					this.interval = 50;
					this.intervalType = "millisecond";
				} else if (range / (1 * 100) <= noTicks) {
					this.interval = 100;
					this.intervalType = "millisecond";
				} else if (range / (1 * 200) <= noTicks) {
					this.interval = 200;
					this.intervalType = "millisecond";
				} else if (range / (1 * 250) <= noTicks) {
					this.interval = 250;
					this.intervalType = "millisecond";
				} else if (range / (1 * 300) <= noTicks) {
					this.interval = 300;
					this.intervalType = "millisecond";
				} else if (range / (1 * 400) <= noTicks) {
					this.interval = 400;
					this.intervalType = "millisecond";
				} else if (range / (1 * 500) <= noTicks) {
					this.interval = 500;
					this.intervalType = "millisecond";
				} else if (range / (constants.secondDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 5) <= noTicks) {
					this.interval = 5;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 10) <= noTicks) {
					this.interval = 10;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 15) <= noTicks) {
					this.interval = 15;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 20) <= noTicks) {
					this.interval = 20;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 30) <= noTicks) {
					this.interval = 30;
					this.intervalType = "second";
				} else if (range / (constants.minuteDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 5) <= noTicks) {
					this.interval = 5;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 10) <= noTicks) {
					this.interval = 10;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 15) <= noTicks) {
					this.interval = 15;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 20) <= noTicks) {
					this.interval = 20;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 30) <= noTicks) {
					this.interval = 30;
					this.intervalType = "minute";
				} else if (range / (constants.hourDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "hour";
				} else if (range / (constants.hourDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "hour";
				} else if (range / (constants.hourDuration * 3) <= noTicks) {
					this.interval = 3;
					this.intervalType = "hour";
				} else if (range / (constants.hourDuration * 6) <= noTicks) {
					this.interval = 6;
					this.intervalType = "hour";
				} else if (range / (constants.dayDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "day";
				} else if (range / (constants.dayDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "day";
				} else if (range / (constants.dayDuration * 4) <= noTicks) {
					this.interval = 4;
					this.intervalType = "day";
				} else if (range / (constants.weekDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "week";
				} else if (range / (constants.weekDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "week";
				} else if (range / (constants.weekDuration * 3) <= noTicks) {
					this.interval = 3;
					this.intervalType = "week";
				} else if (range / (constants.monthDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "month";
				} else if (range / (constants.monthDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "month";
				} else if (range / (constants.monthDuration * 3) <= noTicks) {
					this.interval = 3;
					this.intervalType = "month";
				} else if (range / (constants.monthDuration * 6) <= noTicks) {
					this.interval = 6;
					this.intervalType = "month";
				} else if (range / (constants.yearDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "year";
				} else if (range / (constants.yearDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "year";
				} else if (range / (constants.yearDuration * 4) <= noTicks) {
					this.interval = 4;
					this.intervalType = "year";
				} else {
					this.interval = Math.floor(Axis.getNiceNumber(range / (noTicks - 1), true) / constants.yearDuration);
					this.intervalType = "year";
				}

			}

			if (this.sessionVariables.internalMinimum !== null)
				this.minimum = this.sessionVariables.internalMinimum;
			else {
				this.minimum = min - minDiff / 2;
			}

			if (this.sessionVariables.internalMaximum)
				this.maximum = this.sessionVariables.internalMaximum;
			else
				this.maximum = max + minDiff / 2;

			if (!this.valueFormatString) {
				if (this.intervalType === "year") {
					this.valueFormatString = "YYYY";
				} else if (this.intervalType === "month") {
					this.valueFormatString = "MMM YYYY";
				} else if (this.intervalType === "week") {
					this.valueFormatString = "MMM DD YYYY";
				} else if (this.intervalType === "day") {
					this.valueFormatString = "MMM DD YYYY";
				} else if (this.intervalType === "hour") {
					this.valueFormatString = "hh:mm TT";
				} else if (this.intervalType === "minute") {
					this.valueFormatString = "hh:mm TT";
				} else if (this.intervalType === "second") {
					this.valueFormatString = "hh:mm:ss TT";
				} else if (this.intervalType === "millisecond") {
					this.valueFormatString = "fff'ms'";
				}
			}

			this.intervalStartPosition = this.getLabelStartPoint(new Date(this.minimum), this.intervalType, this.interval);

		} else {

			this.intervalType = "number";

			range = Axis.getNiceNumber(max - min, false);

			if (this._options && this._options.interval)
				this.interval = this._options.interval;
			else {
				this.interval = Axis.getNiceNumber(range / (noTicks - 1), true);
			}

			if (this.sessionVariables.internalMinimum !== null)
				this.minimum = this.sessionVariables.internalMinimum;
			else
				this.minimum = Math.floor(min / this.interval) * this.interval;

			if (this.sessionVariables.internalMaximum !== null)
				this.maximum = this.sessionVariables.internalMaximum;
			else
				this.maximum = Math.ceil(max / this.interval) * this.interval;

			//var nfrac = Math.max(-Math.floor(Math.log(d)/Math.LN10), 0); //number of fractional digits to show

			if (this.type === "axisX") {
				if (!(this.sessionVariables.internalMinimum !== null)) {
					this.minimum = min - minDiff / 2;
				}
				if (!this.sessionVariables.internalMaximum) {

					this.maximum = max + minDiff / 2;
				}

				this.intervalStartPosition = Math.floor((this.minimum + (this.interval * .2)) / this.interval) * this.interval;
			} else if (this.type === "axisY") {
				this.intervalStartPosition = this.minimum;
				//Apply includeZero
				//if (!(this._options && this._options.minimum) && this.includeZero) {
				//if (this.includeZero) {
				//    if (this.minimum > 0)
				//        this.minimum = 0;
				//}

				////if (!(this._options && this._options.maximum) && this.includeZero) {
				//if (this.includeZero) {
				//    if (this.maximum < 0)
				//        this.maximum = 0;
				//}
			}


		}

		if (this.type === "axisX") {
			this._absoluteMinimum = this._options && typeof (this._options.minimum) !== "undefined" ? this._options.minimum : this.dataInfo.min - minDiff / 2;
			this._absoluteMaximum = this._options && typeof (this._options.maximum) !== "undefined" ? this._options.maximum : this.dataInfo.max + minDiff / 2;
		}

		//Set valueFormatString
		if (!this.valueFormatString) {
			this.valueFormatString = "#,##0.##";

			range = Math.abs(this.maximum - this.minimum);

			if (range < 1) {
				var numberOfDecimals = Math.floor(Math.abs(Math.log(range) / Math.LN10)) + 2;

				if (numberOfDecimals > 2) {
					for (var i = 0; i < numberOfDecimals - 2; i++)
						this.valueFormatString += "#";
				}
			}

		}

		//if (isDebugMode && window.console) {
		//    window.console.log(this.type + ": Min = " + this.minimum);
		//    window.console.log(this.type + ": Max = " + this.maximum);
		//    window.console.log(this.type + ": Interval = " + this.interval);
		//}
	}

	Axis.getNiceNumber = function (x, round) {

		var exp = Math.floor(Math.log(x) / Math.LN10);
		var f = x / Math.pow(10, exp);
		var nf;

		if (round) {
			if (f < 1.5)
				nf = 1;
			else if (f < 3)
				nf = 2;
			else if (f < 7)
				nf = 5;
			else
				nf = 10;
		}
		else {
			if (f <= 1)
				nf = 1;
			else if (f <= 2)
				nf = 2;
			else if (f <= 5)
				nf = 5;
			else nf = 10;
		}

		return nf * Math.pow(10, exp);
	}

	Axis.prototype.getLabelStartPoint = function () {

		var intervalInMilliseconds = convertToNumber(this.interval, this.intervalType);
		var minimum = Math.floor((this.minimum) / intervalInMilliseconds) * intervalInMilliseconds;
		var dateTime = new Date(minimum);

		if (this.intervalType === "millisecond") {
			//millisecond = dateTime.getMilliSecond();
			//millisecond = Math.floor((millisecond + this.interval) / this.interval) * this.interval;
		}
		else if (this.intervalType === "second") {
			if (dateTime.getMilliseconds() > 0) {
				dateTime.setSeconds(dateTime.getSeconds() + 1);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "minute") {
			if (dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setMinutes(dateTime.getMinutes() + 1);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "hour") {
			if (dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setHours(dateTime.getHours() + 1);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "day") {
			if (dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setDate(dateTime.getDate() + 1);
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "week") {
			if (dateTime.getDay() > 0 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setDate(dateTime.getDate() + (7 - dateTime.getDay()));
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "month") {
			if (dateTime.getDate() > 1 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setMonth(dateTime.getMonth() + 1);
				dateTime.setDate(1);
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "year") {
			if (dateTime.getMonth() > 0 || dateTime.getDate() > 1 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setFullYear(dateTime.getFullYear() + 1);
				dateTime.setMonth(0);
				dateTime.setDate(1);
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}

		return dateTime;
	}

	//#endregion Axis

	//#region ToolTip

	function ToolTip(chart, options, theme) {
		ToolTip.parent.constructor.call(this, "ToolTip", options, theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;
		this.currentSeriesIndex = -1;
		this.currentDataPointIndex = -1;
		this._timerId = 0;
		this._prevX = NaN;
		this._prevY = NaN;

		this._initialize();
	}
	extend(ToolTip, CanvasJSObject);

	ToolTip.prototype._initialize = function () {

		if (this.enabled) {
			this.container = document.createElement("div");
			this.container.setAttribute("class", "canvasjs-chart-tooltip");
			this.container.style.position = "absolute";
			this.container.style.height = "auto";
			this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
			this.container.style.zIndex = "1000";
			//this.container.style.pointerEvents = "none";
			this.container.style.display = "none";
			//this.container.style.whiteSpace = "no-wrap";

			var toolTipHtml = "<div style=\" width: auto;";
			toolTipHtml += "height: auto;";
			toolTipHtml += "min-width: 50px;";
			toolTipHtml += "line-height: 20px;";
			toolTipHtml += "padding: 5px;";
			toolTipHtml += "font-family: Calibri, Arial, Georgia, serif;";
			toolTipHtml += "font-weight: 400;";
			toolTipHtml += "font-style: " + (isCanvasSupported ? "italic;" : "normal;");
			toolTipHtml += "font-size: 14px;";
			toolTipHtml += "color: #000000;";
			toolTipHtml += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
			toolTipHtml += "text-align: left;";
			toolTipHtml += "border: 2px solid gray;";

			//Older browsers like IE8- don't support alpha values
			toolTipHtml += isCanvasSupported ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";

			toolTipHtml += "text-indent: 0px;";
			toolTipHtml += "white-space: nowrap;";
			//toolTipHtml += "pointer-events:none;";
			toolTipHtml += "border-radius: 10px;";
			//toolTipHtml += "opacity: 0;";
			//toolTipHtml += "filter: progid: DXImageTransform.Microsoft.gradient(GradientType = 0, startColorstr = '#4cffffff', endColorstr = '#4cffffff');";

			if (!isCanvasSupported) {
				//toolTipHtml += "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)'";
				//-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
				/* For IE 5.5 - 7 */
				toolTipHtml += "filter: alpha(opacity = 90);";
				toolTipHtml += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');";
			}

			toolTipHtml += "} \"> Sample Tooltip</div>";

			this.container.innerHTML = toolTipHtml;
			this.contentDiv = this.container.firstChild;


			this.container.style.borderRadius = this.contentDiv.style.borderRadius;
			this.chart._canvasJSContainer.appendChild(this.container);
		}
	}

	ToolTip.prototype.mouseMoveHandler = function (x, y) {

		if (!(this._lastUpdated && (new Date().getTime() - this._lastUpdated) < 40)) {
			this._lastUpdated = new Date().getTime();
			this._updateToolTip(x, y);
		}
	}

	ToolTip.prototype._updateToolTip = function (mouseX, mouseY) {
		//return;

		if (!this.enabled)
			return;

		if (typeof (mouseX) === "undefined" || typeof (mouseY) === "undefined") {
			if (isNaN(this._prevX) || isNaN(this._prevY))
				return;
			else {
				mouseX = this._prevX;
				mouseY = this._prevY;
			}
		} else {
			this._prevX = mouseX;
			this._prevY = mouseY;
		}


		var dataPoint = null;
		var dataSeries = null;
		var toolTipContent = "";
		var entries = [];
		var toolTipRight;
		var toolTipBottom;
		var x = 0;

		if (this.shared && this.chart.plotInfo.axisPlacement !== "none") {
			// && this.chart.plotInfo.axisPlacement !== "none"
			if (this.chart.plotInfo.axisPlacement === "xySwapped") {
				x = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * ((this.chart.axisX.lineCoordinates.y2 - mouseY)) + this.chart.axisX.minimum;
			}
			else {
				x = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (mouseX - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum;
			}

			var nearbyEntries = [];

			for (var i = 0; i < this.chart.data.length; i++) {
				var entry = this.chart.data[i].getDataPointAtX(x, true);

				if (entry && entry.index >= 0) {
					entry.dataSeries = this.chart.data[i];

					nearbyEntries.push(entry);
				}
			}

			if (nearbyEntries.length === 0)
				return;

			nearbyEntries.sort(function (entry1, entry2) {
				return entry1.distance - entry2.distance;
			});

			var closest = nearbyEntries[0];

			for (i = 0; i < nearbyEntries.length; i++) {

				if (nearbyEntries[i].dataPoint.x.valueOf() === closest.dataPoint.x.valueOf())
					entries.push(nearbyEntries[i]);
			}

			nearbyEntries = null;

		} else {

			var dataPointInfo = this.chart.getDataPointAtXY(mouseX, mouseY, true);
			//dataPointInfo = null;

			if (dataPointInfo) {
				this.currentDataPointIndex = dataPointInfo.dataPointIndex;
				this.currentSeriesIndex = dataPointInfo.dataSeries.index;
			} else if (isCanvasSupported) {

				var id = getObjectId(mouseX, mouseY, this.chart._eventManager.ghostCtx);
				if (id > 0 && typeof this.chart._eventManager.objectMap[id] !== "undefined") {//DataPoint/DataSeries event
					eventObject = this.chart._eventManager.objectMap[id];

					//if (this.currentSeriesIndex === eventObject.dataSeriesIndex && this.currentDataPointIndex === eventObject.dataPointIndex)
					//  return;
					//else {
					this.currentSeriesIndex = eventObject.dataSeriesIndex;
					this.currentDataPointIndex = eventObject.dataPointIndex >= 0 ? eventObject.dataPointIndex : -1;
					//}

					//window.console.log("id: " + id + "; hex: " + intToHexColorString(id));
				} else
					this.currentDataPointIndex = -1;

			} else
				this.currentDataPointIndex = -1;


			if (this.currentSeriesIndex >= 0) {

				dataSeries = this.chart.data[this.currentSeriesIndex];

				var entry = {};

				if (this.currentDataPointIndex >= 0) {
					dataPoint = dataSeries.dataPoints[this.currentDataPointIndex];

					entry.dataSeries = dataSeries;
					entry.dataPoint = dataPoint;
					entry.index = this.currentDataPointIndex;
					entry.distance = Math.abs(dataPoint.x - x);
				} else if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
					var x = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (mouseX - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum.valueOf();

					entry = dataSeries.getDataPointAtX(x, true);
					entry.dataSeries = dataSeries;
					this.currentDataPointIndex = entry.index;
					dataPoint = entry.dataPoint;
				} else {
					//this.hide();
					return;
				}

				entries.push(entry);
			}
		}


		if (entries.length > 0) {

			this.highlightObjects(entries);


			var toolTipInnerHtml = "";

			toolTipInnerHtml = this.getToolTipInnerHTML({ entries: entries });

			this.contentDiv.innerHTML = toolTipInnerHtml;

			this.contentDiv.innerHTML = toolTipInnerHtml;

			var previouslyHidden = false;
			if (this.container.style.display === "none") {
				previouslyHidden = true;
				this.container.style.display = "block";
			}

			try {
				this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : entries[0].dataPoint.color ? entries[0].dataPoint.color : entries[0].dataSeries.color ? entries[0].dataSeries.color : entries[0].dataSeries._colorSet[entries[0].index % entries[0].dataSeries._colorSet.length];
			} catch (e) { }

			//var toolTipContent = dataSeries.toolTipContent ? dataSeries.toolTipContent : dataPoint.toolTipContent ? dataPoint.toolTipContent : "<strong>{x}</strong><br/><strong style='\"'color:{color};'\"'>{name}</strong>,&nbsp;&nbsp;<strong>y</strong>:{y}";

			//var toolTipInnerHtml = " x: " + (this.chart.plotInfo.axisXValueType === "dateTime" ? dateFormat(searchResult.dataPoint.x, this.chart.axisX.valueFormatString) : numberFormat(searchResult.dataPoint.x, this.chart.axisX.valueFormatString)) + ", y: " + numberFormat(searchResult.dataPoint.y, "#,###0.##");
			if (entries[0].dataSeries.type === "pie" || entries[0].dataSeries.type === "doughnut" || entries[0].dataSeries.type === "bar" || entries[0].dataSeries.type === "stackedBar" || entries[0].dataSeries.type === "stackedBar100") {
				//toolTipRight = mouseX - 10;
				toolTipLeft = mouseX - 10 - this.container.clientWidth;
			} else {
				//toolTipRight = (((this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum)) * Math.abs(entries[0].dataPoint.x - this.chart.axisX.minimum)) + this.chart.axisX.lineCoordinates.x1 + .5) << 0;
				toolTipLeft = (((this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum)) * Math.abs(entries[0].dataPoint.x - this.chart.axisX.minimum)) + this.chart.axisX.lineCoordinates.x1 + .5) - this.container.clientWidth << 0;
				toolTipLeft -= 10;
			}

			//toolTipRight = (toolTipRight - 10 - this.container.clientWidth) > 0 ? (this.chart.width - toolTipRight + 10) + "px" : (this.chart.width - toolTipRight + (toolTipRight - 10 - this.container.clientWidth)) + "px";
			//toolTipRight = (toolTipRight - 10 - this.container.clientWidth) > 0 ? (this.chart.width - toolTipRight + 10) + "px" : (this.chart.width - toolTipRight + (toolTipRight - 10 - this.container.clientWidth)) + "px";
			toolTipLeft = toolTipLeft > 0 ? toolTipLeft + "px" : toolTipLeft + this.container.clientWidth + 20 + "px";


			if (entries.length === 1 && !this.shared && (entries[0].dataSeries.type === "line" || entries[0].dataSeries.type === "stepLine" || entries[0].dataSeries.type === "spline" || entries[0].dataSeries.type === "area" || entries[0].dataSeries.type === "stepArea" || entries[0].dataSeries.type === "splineArea" || entries[0].dataSeries.type === "stackedArea" || entries[0].dataSeries.type === "stackedArea100")) {
				toolTipBottom = (entries[0].dataSeries.axisY.lineCoordinates.y2 - entries[0].dataSeries.axisY.lineCoordinates.height / Math.abs(entries[0].dataSeries.axisY.maximum - entries[0].dataSeries.axisY.minimum) * Math.abs(entries[0].dataPoint.y - entries[0].dataSeries.axisY.minimum) + .5) << 0;
			} else if (entries[0].dataSeries.type === "bar" || entries[0].dataSeries.type === "stackedBar" || entries[0].dataSeries.type === "stackedBar100") {
				toolTipBottom = (entries[0].dataSeries.axisX.lineCoordinates.y2 - entries[0].dataSeries.axisX.lineCoordinates.height / Math.abs(entries[0].dataSeries.axisX.maximum - entries[0].dataSeries.axisX.minimum) * Math.abs(entries[0].dataPoint.x - entries[0].dataSeries.axisX.minimum) + .5) << 0;
			}
			else {
				toolTipBottom = mouseY;
			}

			toolTipBottom = (-toolTipBottom + 10);

			if (toolTipBottom + this.container.clientHeight + 5 > 0) {
				toolTipBottom -= toolTipBottom + this.container.clientHeight + 5 - 0
			}

			toolTipBottom += "px";

			//this.container.style.right = toolTipRight;
			this.container.style.left = toolTipLeft;
			this.container.style.bottom = toolTipBottom;

			if (!this.animationEnabled || previouslyHidden) {
				this.disableAnimation();
			}
			else
				this.enableAnimation();

			//if (isDebugMode)
			//  console.log("searchX: " + x + " x: " + searchResult.dataPoint.x + "; y: " + searchResult.dataPoint.y + "; distance: " + searchResult.distance + "; steps: " + steps);
		}
	}


	ToolTip.prototype.highlightObjects = function (entries) {

		if (!this.enabled)
			return;

		//this.chart.overlaidCanvasCtx.clearRect(0, 0, this.chart.overlaidCanvas.width, this.chart.overlaidCanvas.height);
		var overlaidCanvasCtx = this.chart.overlaidCanvasCtx;
		this.chart.resetOverlayedCanvas();

		overlaidCanvasCtx.save();


		var plotArea = this.chart.plotArea;
		overlaidCanvasCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		overlaidCanvasCtx.clip();
		overlaidCanvasCtx.beginPath();


		for (var i = 0; i < entries.length; i++) {

			var entry = entries[i];

			var eventObject = this.chart._eventManager.objectMap[entry.dataSeries.dataPointIds[entry.index]];

			if (!eventObject || !eventObject.objectType || eventObject.objectType !== "dataPoint")
				continue;

			var dataSeries = this.chart.data[eventObject.dataSeriesIndex];
			var dataPoint = this.chart.data[eventObject.dataPointIndex];
			var index = eventObject.dataPointIndex;

			if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "scatter"
				|| dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
				var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y1, this.chart.overlaidCanvasCtx);
				markerProps.size = Math.max(markerProps.size * 1.5 << 0, 10);

				markerProps.borderColor = markerProps.borderColor || "#FFFFFF";
				markerProps.borderThickness = markerProps.borderThickness || Math.ceil(markerProps.size * .1);

				//overlaidCanvasCtx.globalAlpha = .8;
				RenderHelper.drawMarkers([markerProps]);
				//overlaidCanvasCtx.globalAlpha = .8;
			} else if (dataSeries.type === "bubble") {
				var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y1, this.chart.overlaidCanvasCtx);
				markerProps.size = eventObject.size;
				markerProps.color = "white";
				markerProps.borderColor = "white";
				//markerProps.borderThickness = 2;
				overlaidCanvasCtx.globalAlpha = .3;
				RenderHelper.drawMarkers([markerProps]);
				overlaidCanvasCtx.globalAlpha = 1;
			} else if (dataSeries.type === "column" || dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100"
				|| dataSeries.type === "bar" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100") {
				overlaidCanvasCtx.globalAlpha = .3;
				drawRect(overlaidCanvasCtx, eventObject.x1, eventObject.y1, eventObject.x2, eventObject.y2, "white", false, false, false, false);
				overlaidCanvasCtx.globalAlpha = 1;
			}
			else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
				overlaidCanvasCtx.globalAlpha = .3;
				drawSegment(overlaidCanvasCtx, eventObject.center, eventObject.radius, "white", dataSeries.type, eventObject.startAngle, eventObject.endAngle);
				overlaidCanvasCtx.globalAlpha = 1;
			}
			continue;
		}

		overlaidCanvasCtx.globalAlpha = 1;

		overlaidCanvasCtx.restore();
		return;
	}

	ToolTip.prototype.getToolTipInnerHTML = function (e) {
		var entries = e.entries;
		var toolTipInnerHtml = "";
		var dataSeries = null;
		var dataPoint = null;
		var index = 0;
		var color = null;
		var toolTipContent = "";

		var isToolTipDefinedInData = true;
		for (var i = 0; i < entries.length; i++) {
			if (entries[i].dataSeries.toolTipContent || entries[i].dataPoint.toolTipContent) {
				isToolTipDefinedInData = false;
				break;
			}
		}

		if (isToolTipDefinedInData && this.content && typeof (this.content) === "function") {

			toolTipInnerHtml = this.content({ entries: entries });

		} else {

			if (entries.length > 1) {

				for (var i = 0; i < entries.length; i++) {
					dataSeries = entries[i].dataSeries;
					dataPoint = entries[i].dataPoint;
					index = entries[i].index;

					toolTipContent = "";

					if (i === 0 && isToolTipDefinedInData && !this.content) {
						toolTipContent += typeof (this.chart.axisX.labels[dataPoint.x]) !== "undefined" ? this.chart.axisX.labels[dataPoint.x] : "{x}";
						toolTipContent += "</br>";
					}

					if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "column" || dataSeries.type === "bar" || dataSeries.type === "scatter"
					|| dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
					|| dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
						toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";
					} else if (dataSeries.type === "bubble") {
						toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
					} else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
						toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "&nbsp;&nbsp;{y}";
					}

					toolTipInnerHtml += this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index);

					if (i < entries.length - 1)
						toolTipInnerHtml += "</br>";
				}
			} else {

				dataSeries = entries[0].dataSeries;
				dataPoint = entries[0].dataPoint;
				index = entries[0].index;

				//color = dataPoint.color ? dataPoint.color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[index % dataSeries._colorSet.length];

				if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "column" || dataSeries.type === "bar" || dataSeries.type === "scatter"
					|| dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
					|| dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
					toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y}";
				} else if (dataSeries.type === "bubble") {
					toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
				} else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
					toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : (dataPoint.name ? "{name}:&nbsp;&nbsp;" : dataPoint.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}";
				}

				toolTipInnerHtml += this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index);
			}
		}

		return toolTipInnerHtml;
	}

	ToolTip.prototype.enableAnimation = function () {
		if (this.container.style.WebkitTransition)
			return;

		//this.container.style.WebkitTransition = "right .2s ease-out, bottom .2s ease-out";
		//this.container.style.MozTransition = "right .2s ease-out, bottom .2s ease-out";
		//this.container.style.MsTransition = "right .2s ease-out, bottom .2s ease-out";
		//this.container.style.transition = "right .2s ease-out, bottom .2s ease-out";
		this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out";
		this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out";
		this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out";
		this.container.style.transition = "left .2s ease-out, bottom .2s ease-out";
	}

	ToolTip.prototype.disableAnimation = function () {
		if (!this.container.style.WebkitTransition)
			return;

		this.container.style.WebkitTransition = "";
		this.container.style.MozTransition = "";
		this.container.style.MsTransition = "";
		this.container.style.transition = "";
	}

	ToolTip.prototype.hide = function () {
		if (!this.enabled)
			return;

		this.container.style.display = "none";
		this.currentSeriesIndex = -1;
		this._prevX = NaN;
		this._prevY = NaN;
		//this.chart.overlaidCanvasCtx.clearRect(0, 0, this.chart.overlaidCanvas.width, this.chart.overlaidCanvas.height);
		this.chart.resetOverlayedCanvas();
	}

	Chart.prototype.replaceKeywordsWithValue = function (str, dp, ds, index) {
		var regex = /\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g;
		var chart = this;

		var fcn = function ($0) {
			if (($0[0] === "\"" && $0[$0.length - 1] === "\"") || ($0[0] === "\'" && $0[$0.length - 1] === "\'"))
				return $0.slice(1, $0.length - 1);

			var key = trimString($0.slice(1, $0.length - 1));
			var obj = null;

			if (key === "color") {
				return dp.color ? dp.color : ds.color ? ds.color : ds._colorSet[index % ds._colorSet.length];
			}

			if (dp.hasOwnProperty(key))
				obj = dp;
			else if (ds.hasOwnProperty(key))
				obj = ds;
			else return "";

			if (key === "x") {
				if (chart.axisX && chart.plotInfo.axisXValueType === "dateTime")
					return dateFormat(obj[key], dp.xValueFormatString ? dp.xValueFormatString : ds.xValueFormatString ? ds.xValueFormatString : chart.axisX && chart.axisX.valueFormatString ? chart.axisX.valueFormatString : "DD MMM YY", chart._cultureInfo);
				else
					return numberFormat(obj[key], dp.xValueFormatString ? dp.xValueFormatString : ds.xValueFormatString ? ds.xValueFormatString : "#,##0.########", chart._cultureInfo);
			} else if (key === "y")
				return numberFormat(obj[key], dp.yValueFormatString ? dp.yValueFormatString : ds.yValueFormatString ? ds.yValueFormatString : "#,##0.########", chart._cultureInfo);
			else
				return obj[key];
		}

		return str.replace(regex, fcn);
	}


	//#endregion ToolTip

	//#region Event Manager

	function EventManager(chart) {
		this.chart = chart;
		this.lastObjectId = 0;
		var _this = this;
		this.objectMap = [];
		this.rectangularRegionEventSubscriptions = [];
		this.previousDataPointEventObject = null;
		//this.previousDataSeriesEventObject = null;

		this.ghostCanvas = createCanvas(this.chart.width, this.chart.height);
		//this.ghostCanvas.width = this.chart.width;
		//this.ghostCanvas.height = this.chart.height;

		this.ghostCtx = this.ghostCanvas.getContext("2d");

		var eventHandler = function (ev) {
			_this.mouseEventHandler.call(_this, ev);
		};

		//this.chart.canvas.addEventListener("mouseover", eventHandler);
		//this.chart.canvas.addEventListener("mousemove", eventHandler);
		//this.chart.canvas.addEventListener("mouseout", eventHandler);
		//this.chart.canvas.addEventListener("click", eventHandler);
	}

	EventManager.prototype.reset = function () {
		this.lastObjectId = 0;
		this.objectMap = [];
		this.rectangularRegionEventSubscriptions = [];
		this.previousDataPointEventObject = null;

		//this.ghostCanvas.width = this.chart.width;
		//this.ghostCanvas.height = this.chart.height;

		if (isCanvasSupported) {
			this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height);
			this.ghostCtx.beginPath();
		}
	}

	EventManager.prototype.getNewObjectTrackingId = function () {
		return ++this.lastObjectId;
	}

	EventManager.prototype.mouseEventHandler = function (ev) {

		//return;

		if (ev.type !== "mousemove" && ev.type !== "click")
			return;

		var eventObject = null;
		var dataSeries = null;
		var dataPoint = null;
		var dataPointIndex = -1;
		var mouseOutPreviousDataPoint = false;
		var mouseOutPreviousDataSeries = false;
		var xy = getMouseCoordinates(ev);
		var id = null;

		//console.log(ev.type);

		//var imageData = this.ghostCtx.getImageData(xy.x, xy.y, 1, 1);
		//var pix = imageData.data;
		var dataPointInfo = null;

		dataPointInfo = this.chart.getDataPointAtXY(xy.x, xy.y, false);

		if (dataPointInfo) {
			id = dataPointInfo.dataSeries.dataPointIds[dataPointInfo.dataPointIndex];
		}
		else if (isCanvasSupported) {//IE9+
			id = getObjectId(xy.x, xy.y, this.ghostCtx);
		}

		var plotArea = this.chart.plotArea;

		//Enter only if mouse is inside plotArea. Else file mouseout event for previous dataPoints
		if (id && (xy.x > plotArea.x1 && xy.x < plotArea.x2 && xy.y > plotArea.y1 && xy.y < plotArea.y2)) {//DataPoint/DataSeries event
			//var id = RGBToInt(pix[0], pix[1], pix[2]);

			if (typeof this.objectMap[id] !== "undefined" && (this.objectMap[id].objectType === "dataPoint")) {
				eventObject = this.objectMap[id];
				dataSeries = this.chart.data[eventObject.dataSeriesIndex];
				dataPoint = dataSeries.dataPoints[eventObject.dataPointIndex];
				dataPointIndex = eventObject.dataPointIndex;

				//var logString = xy.x.toString() + ", " + xy.y.toString() + " RGB:" + pix[0].toString() + ", " + pix[1].toString() + ", " + pix[2].toString() + ", " + pix[3].toString()
				//    + " hex: " + intToHexColorString(id) + " dataPoint: [" + dataPoint.x.toString() + ", " + dataPoint.y.toString() + ", " + dataPoint.hexColor + "]";

				//if (this.previousDataPointEventObject) {
				//    logString += "  ds: " + this.previousDataPointEventObject.dataSeriesIndex + " dp: " + this.previousDataPointEventObject.dataPointIndex;
				//}
				//console.log(logString);

				if (this.previousDataPointEventObject === null
					|| this.previousDataPointEventObject.dataSeriesIndex !== eventObject.dataSeriesIndex
					|| this.previousDataPointEventObject.dataPointIndex !== eventObject.dataPointIndex) {

					if (this.previousDataPointEventObject) {
						mouseOutPreviousDataPoint = true;
					}

					if (dataPoint.mouseover) {

						dataPoint.mouseover.call(dataPoint, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });
					}

					if (dataSeries.mouseover && (this.previousDataPointEventObject === null || this.previousDataPointEventObject.dataSeriesIndex !== eventObject.dataSeriesIndex)) {

						if (dataSeries.mouseover)
							dataSeries.mouseover.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

						if (this.previousDataPointEventObject)
							mouseOutPreviousDataSeries = true;
					}
				}


				if (ev.type === "mousemove") {
					if (dataPoint.cursor && dataPoint.cursor !== ev.target.style.cursor) {
						ev.target.style.cursor = dataPoint.cursor;
					} else if (dataSeries.cursor && dataSeries.cursor !== ev.target.style.cursor) {
						ev.target.style.cursor = dataSeries.cursor;
					}

					if (dataPoint.mousemove)
						dataPoint.mousemove.call(dataPoint, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

					if (dataSeries.mousemove)
						dataSeries.mousemove.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

				} else if (ev.type === "click") {

					var distanceTravelled = Math.sqrt(Math.pow(this.chart.dragStartPoint.x - xy.x, 2) + Math.pow(this.chart.dragStartPoint.y - xy.y, 2));
					if (distanceTravelled < 5) {

						if (dataPoint.click)
							dataPoint.click.call(dataPoint, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

						if (dataSeries.click)
							dataSeries.click.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

						if (this.chart.pieDoughnutClickHandler) {
							this.chart.pieDoughnutClickHandler.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });
						}
					}

				}

			} else if (this.previousDataPointEventObject) {
				mouseOutPreviousDataPoint = true;
				mouseOutPreviousDataSeries = true;
			}
		} else if (this.previousDataPointEventObject) {
			mouseOutPreviousDataPoint = true;
			mouseOutPreviousDataSeries = true;
		}


		if (mouseOutPreviousDataPoint || mouseOutPreviousDataSeries) {

			ev.target.style.cursor = this.chart._defaultCursor;

			var previousDataSeries = this.chart.data[this.previousDataPointEventObject.dataSeriesIndex];
			var previousDataPoint = previousDataSeries.dataPoints[this.previousDataPointEventObject.dataPointIndex];
			var previousDataPointIndex = this.previousDataPointEventObject.dataPointIndex;

			if (mouseOutPreviousDataPoint && previousDataPoint.mouseout)
				previousDataPoint.mouseout.call(previousDataPoint, { x: xy.x, y: xy.y, dataPoint: previousDataPoint, dataSeries: previousDataSeries, dataPointIndex: previousDataPointIndex });

			if (mouseOutPreviousDataSeries && previousDataSeries.mouseout)
				previousDataSeries.mouseout.call(previousDataSeries, { x: xy.x, y: xy.y, dataPoint: previousDataPoint, dataSeries: previousDataSeries, dataPointIndex: previousDataPointIndex });
		}

		this.previousDataPointEventObject = eventObject;
	}


	//#endregion Event Manager

	//#region Class CultureInfo

	function CultureInfo(chart, culture) {

		var cultureInfo;

		if (culture && cultures[culture])
			cultureInfo = cultures[culture];


		Title.parent.constructor.call(this, "CultureInfo", cultureInfo, chart.theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;
	}

	extend(CultureInfo, CanvasJSObject);

	//#endregion Class CultureInfo

	//#region Render Helper

	var RenderHelper = {
		drawMarker: function (x, y, ctx, markerType, markerSize, markerColor, markerBorderColor, markerBorderThickness) {

			if (!ctx)
				return;

			var alpha = 1;

			ctx.fillStyle = markerColor ? markerColor : "#000000";
			ctx.strokeStyle = markerBorderColor ? markerBorderColor : "#000000";
			ctx.lineWidth = markerBorderThickness ? markerBorderThickness : 0;


			if (markerType === "circle") {

				ctx.moveTo(x, y);
				ctx.beginPath();
				//return;

				ctx.arc(x, y, markerSize / 2, 0, Math.PI * 2, false);

				if (markerColor)
					ctx.fill();

				if (markerBorderThickness) {

					if (!markerBorderColor) {
						alpha = ctx.globalAlpha;
						ctx.globalAlpha = .15;
						ctx.strokeStyle = "black";
						ctx.stroke();
						ctx.globalAlpha = alpha;
					} else
						ctx.stroke();

				}
			}
			else if (markerType === "square") {

				//ctx.moveTo(x - markerSize / 2, y - markerSize / 2);
				ctx.beginPath();
				ctx.rect(x - markerSize / 2, y - markerSize / 2, markerSize, markerSize);

				if (markerColor)
					ctx.fill();

				if (markerBorderThickness) {

					if (!markerBorderColor) {
						alpha = ctx.globalAlpha;
						ctx.globalAlpha = .15;
						ctx.strokeStyle = "black";
						ctx.stroke();
						ctx.globalAlpha = alpha;
					} else
						ctx.stroke();

				}
			} else if (markerType === "triangle") {

				ctx.beginPath();
				ctx.moveTo(x - markerSize / 2, y + markerSize / 2);
				ctx.lineTo(x + markerSize / 2, y + markerSize / 2);
				ctx.lineTo(x, y - markerSize / 2);
				ctx.closePath();

				if (markerColor)
					ctx.fill();

				if (markerBorderThickness) {

					if (!markerBorderColor) {
						alpha = ctx.globalAlpha;
						ctx.globalAlpha = .15;
						ctx.strokeStyle = "black";
						ctx.stroke();
						ctx.globalAlpha = alpha;
					} else
						ctx.stroke();

				}
				ctx.beginPath();
			} else if (markerType === "cross") {

				ctx.strokeStyle = markerColor;
				markerBorderThickness = markerSize / 4;
				ctx.lineWidth = markerBorderThickness;

				ctx.beginPath();
				ctx.moveTo(x - markerSize / 2, y - markerSize / 2);
				ctx.lineTo(x + markerSize / 2, y + markerSize / 2);
				ctx.stroke();

				ctx.moveTo(x + markerSize / 2, y - markerSize / 2);
				ctx.lineTo(x - markerSize / 2, y + markerSize / 2);
				ctx.stroke();

			}


		},
		drawMarkers: function (markers) {
			for (var i = 0; i < markers.length; i++) {
				var marker = markers[i];

				RenderHelper.drawMarker(marker.x, marker.y, marker.ctx, marker.type, marker.size, marker.color, marker.borderColor, marker.borderThickness);
			}
		}
		//,
		//draw1pxLine: function (x1, y1, x2, y2, color, ctx) {
		//	ctx.beginPath();
		//	ctx.drawRect(x1, y1, x2 - x1, y2 - y1);
		//	ctx.stroke();
		//}
	}

	//#endregion Render Helper

	//#endregion Class Definitions

	//#region Public API
	var CanvasJS = {

		Chart: function (containerId, options) {
			var _chart = new Chart(containerId, options, this);

			this.render = function () { _chart.render() };
			this.options = _chart._options;
		},
		addColorSet: function (name, colorSet) {
			colorSets[name] = colorSet;
		},
		addCultureInfo: function (name, cultureInfo) {
			cultures[name] = cultureInfo;
		}
	}

	CanvasJS.Chart.version = "1.3.0 GA";
	window.CanvasJS = CanvasJS;
	//#endregion Public API

})();
;
//# sourceMappingURL=vendor.js.map