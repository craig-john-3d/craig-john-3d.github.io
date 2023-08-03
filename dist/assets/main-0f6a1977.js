(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ud={exports:{}};/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */(function(s){(function(e,t){s.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Hm,function(e,t){var n=[],i=Object.getPrototypeOf,r=n.slice,a=n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)},o=n.push,c=n.indexOf,u={},f=u.toString,d=u.hasOwnProperty,m=d.toString,_=m.call(Object),S={},M=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},y=function(h){return h!=null&&h===h.window},v=e.document,A={type:!0,src:!0,nonce:!0,noModule:!0};function T(l,h,g){g=g||v;var x,b,E=g.createElement("script");if(E.text=l,h)for(x in A)b=h[x]||h.getAttribute&&h.getAttribute(x),b&&E.setAttribute(x,b);g.head.appendChild(E).parentNode.removeChild(E)}function R(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?u[f.call(l)]||"object":typeof l}var P="3.7.0",D=/HTML$/i,p=function(l,h){return new p.fn.init(l,h)};p.fn=p.prototype={jquery:P,constructor:p,length:0,toArray:function(){return r.call(this)},get:function(l){return l==null?r.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var h=p.merge(this.constructor(),l);return h.prevObject=this,h},each:function(l){return p.each(this,l)},map:function(l){return this.pushStack(p.map(this,function(h,g){return l.call(h,g,h)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(p.grep(this,function(l,h){return(h+1)%2}))},odd:function(){return this.pushStack(p.grep(this,function(l,h){return h%2}))},eq:function(l){var h=this.length,g=+l+(l<0?h:0);return this.pushStack(g>=0&&g<h?[this[g]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},p.extend=p.fn.extend=function(){var l,h,g,x,b,E,C=arguments[0]||{},H=1,B=arguments.length,j=!1;for(typeof C=="boolean"&&(j=C,C=arguments[H]||{},H++),typeof C!="object"&&!M(C)&&(C={}),H===B&&(C=this,H--);H<B;H++)if((l=arguments[H])!=null)for(h in l)x=l[h],!(h==="__proto__"||C===x)&&(j&&x&&(p.isPlainObject(x)||(b=Array.isArray(x)))?(g=C[h],b&&!Array.isArray(g)?E=[]:!b&&!p.isPlainObject(g)?E={}:E=g,b=!1,C[h]=p.extend(j,E,x)):x!==void 0&&(C[h]=x));return C},p.extend({expando:"jQuery"+(P+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var h,g;return!l||f.call(l)!=="[object Object]"?!1:(h=i(l),h?(g=d.call(h,"constructor")&&h.constructor,typeof g=="function"&&m.call(g)===_):!0)},isEmptyObject:function(l){var h;for(h in l)return!1;return!0},globalEval:function(l,h,g){T(l,{nonce:h&&h.nonce},g)},each:function(l,h){var g,x=0;if(O(l))for(g=l.length;x<g&&h.call(l[x],x,l[x])!==!1;x++);else for(x in l)if(h.call(l[x],x,l[x])===!1)break;return l},text:function(l){var h,g="",x=0,b=l.nodeType;if(b){if(b===1||b===9||b===11)return l.textContent;if(b===3||b===4)return l.nodeValue}else for(;h=l[x++];)g+=p.text(h);return g},makeArray:function(l,h){var g=h||[];return l!=null&&(O(Object(l))?p.merge(g,typeof l=="string"?[l]:l):o.call(g,l)),g},inArray:function(l,h,g){return h==null?-1:c.call(h,l,g)},isXMLDoc:function(l){var h=l&&l.namespaceURI,g=l&&(l.ownerDocument||l).documentElement;return!D.test(h||g&&g.nodeName||"HTML")},merge:function(l,h){for(var g=+h.length,x=0,b=l.length;x<g;x++)l[b++]=h[x];return l.length=b,l},grep:function(l,h,g){for(var x,b=[],E=0,C=l.length,H=!g;E<C;E++)x=!h(l[E],E),x!==H&&b.push(l[E]);return b},map:function(l,h,g){var x,b,E=0,C=[];if(O(l))for(x=l.length;E<x;E++)b=h(l[E],E,g),b!=null&&C.push(b);else for(E in l)b=h(l[E],E,g),b!=null&&C.push(b);return a(C)},guid:1,support:S}),typeof Symbol=="function"&&(p.fn[Symbol.iterator]=n[Symbol.iterator]),p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,h){u["[object "+h+"]"]=h.toLowerCase()});function O(l){var h=!!l&&"length"in l&&l.length,g=R(l);return M(l)||y(l)?!1:g==="array"||h===0||typeof h=="number"&&h>0&&h-1 in l}function w(l,h){return l.nodeName&&l.nodeName.toLowerCase()===h.toLowerCase()}var F=n.pop,te=n.sort,G=n.splice,I="[\\x20\\t\\r\\n\\f]",z=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g");p.contains=function(l,h){var g=h&&h.parentNode;return l===g||!!(g&&g.nodeType===1&&(l.contains?l.contains(g):l.compareDocumentPosition&&l.compareDocumentPosition(g)&16))};var W=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function $(l,h){return h?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}p.escapeSelector=function(l){return(l+"").replace(W,$)};var K=v,ie=o;(function(){var l,h,g,x,b,E=ie,C,H,B,j,oe,he=p.expando,ee=0,ve=0,Je=uo(),bt=uo(),lt=uo(),fn=uo(),nn=function(U,V){return U===V&&(b=!0),0},Mi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Si="(?:\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+I+"*("+Si+")(?:"+I+"*([*^$|!~]?=)"+I+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Si+"))|)"+I+"*\\]",Ur=":("+Si+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",Et=new RegExp(I+"+","g"),jt=new RegExp("^"+I+"*,"+I+"*"),ya=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),Al=new RegExp(I+"|>"),Ti=new RegExp(Ur),xa=new RegExp("^"+Si+"$"),bi={ID:new RegExp("^#("+Si+")"),CLASS:new RegExp("^\\.("+Si+")"),TAG:new RegExp("^("+Si+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Ur),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+Mi+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},lr=/^(?:input|select|textarea|button)$/i,cr=/^h\d$/i,qn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Rl=/[+~]/,zi=new RegExp("\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\([^\\r\\n\\f])","g"),Hi=function(U,V){var J="0x"+U.slice(1)-65536;return V||(J<0?String.fromCharCode(J+65536):String.fromCharCode(J>>10|55296,J&1023|56320))},Nm=function(){ur()},Um=po(function(U){return U.disabled===!0&&w(U,"fieldset")},{dir:"parentNode",next:"legend"});function Om(){try{return C.activeElement}catch{}}try{E.apply(n=r.call(K.childNodes),K.childNodes),n[K.childNodes.length].nodeType}catch{E={apply:function(V,J){ie.apply(V,r.call(J))},call:function(V){ie.apply(V,r.call(arguments,1))}}}function Dt(U,V,J,ae){var fe,Se,Le,ke,De,pt,Ye,tt=V&&V.ownerDocument,mt=V?V.nodeType:9;if(J=J||[],typeof U!="string"||!U||mt!==1&&mt!==9&&mt!==11)return J;if(!ae&&(ur(V),V=V||C,B)){if(mt!==11&&(De=qn.exec(U)))if(fe=De[1]){if(mt===9)if(Le=V.getElementById(fe)){if(Le.id===fe)return E.call(J,Le),J}else return J;else if(tt&&(Le=tt.getElementById(fe))&&Dt.contains(V,Le)&&Le.id===fe)return E.call(J,Le),J}else{if(De[2])return E.apply(J,V.getElementsByTagName(U)),J;if((fe=De[3])&&V.getElementsByClassName)return E.apply(J,V.getElementsByClassName(fe)),J}if(!fn[U+" "]&&(!j||!j.test(U))){if(Ye=U,tt=V,mt===1&&(Al.test(U)||ya.test(U))){for(tt=Rl.test(U)&&Cl(V.parentNode)||V,(tt!=V||!S.scope)&&((ke=V.getAttribute("id"))?ke=p.escapeSelector(ke):V.setAttribute("id",ke=he)),pt=fo(U),Se=pt.length;Se--;)pt[Se]=(ke?"#"+ke:":scope")+" "+ho(pt[Se]);Ye=pt.join(",")}try{return E.apply(J,tt.querySelectorAll(Ye)),J}catch{fn(U,!0)}finally{ke===he&&V.removeAttribute("id")}}}return $u(U.replace(z,"$1"),V,J,ae)}function uo(){var U=[];function V(J,ae){return U.push(J+" ")>h.cacheLength&&delete V[U.shift()],V[J+" "]=ae}return V}function ci(U){return U[he]=!0,U}function ms(U){var V=C.createElement("fieldset");try{return!!U(V)}catch{return!1}finally{V.parentNode&&V.parentNode.removeChild(V),V=null}}function Fm(U){return function(V){return w(V,"input")&&V.type===U}}function km(U){return function(V){return(w(V,"input")||w(V,"button"))&&V.type===U}}function Yu(U){return function(V){return"form"in V?V.parentNode&&V.disabled===!1?"label"in V?"label"in V.parentNode?V.parentNode.disabled===U:V.disabled===U:V.isDisabled===U||V.isDisabled!==!U&&Um(V)===U:V.disabled===U:"label"in V?V.disabled===U:!1}}function Or(U){return ci(function(V){return V=+V,ci(function(J,ae){for(var fe,Se=U([],J.length,V),Le=Se.length;Le--;)J[fe=Se[Le]]&&(J[fe]=!(ae[fe]=J[fe]))})})}function Cl(U){return U&&typeof U.getElementsByTagName<"u"&&U}function ur(U){var V,J=U?U.ownerDocument||U:K;return J==C||J.nodeType!==9||!J.documentElement||(C=J,H=C.documentElement,B=!p.isXMLDoc(C),oe=H.matches||H.webkitMatchesSelector||H.msMatchesSelector,K!=C&&(V=C.defaultView)&&V.top!==V&&V.addEventListener("unload",Nm),S.getById=ms(function(ae){return H.appendChild(ae).id=p.expando,!C.getElementsByName||!C.getElementsByName(p.expando).length}),S.disconnectedMatch=ms(function(ae){return oe.call(ae,"*")}),S.scope=ms(function(){return C.querySelectorAll(":scope")}),S.cssHas=ms(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),S.getById?(h.filter.ID=function(ae){var fe=ae.replace(zi,Hi);return function(Se){return Se.getAttribute("id")===fe}},h.find.ID=function(ae,fe){if(typeof fe.getElementById<"u"&&B){var Se=fe.getElementById(ae);return Se?[Se]:[]}}):(h.filter.ID=function(ae){var fe=ae.replace(zi,Hi);return function(Se){var Le=typeof Se.getAttributeNode<"u"&&Se.getAttributeNode("id");return Le&&Le.value===fe}},h.find.ID=function(ae,fe){if(typeof fe.getElementById<"u"&&B){var Se,Le,ke,De=fe.getElementById(ae);if(De){if(Se=De.getAttributeNode("id"),Se&&Se.value===ae)return[De];for(ke=fe.getElementsByName(ae),Le=0;De=ke[Le++];)if(Se=De.getAttributeNode("id"),Se&&Se.value===ae)return[De]}return[]}}),h.find.TAG=function(ae,fe){return typeof fe.getElementsByTagName<"u"?fe.getElementsByTagName(ae):fe.querySelectorAll(ae)},h.find.CLASS=function(ae,fe){if(typeof fe.getElementsByClassName<"u"&&B)return fe.getElementsByClassName(ae)},j=[],ms(function(ae){var fe;H.appendChild(ae).innerHTML="<a id='"+he+"' href='' disabled='disabled'></a><select id='"+he+"-\r\\' disabled='disabled'><option selected=''></option></select>",ae.querySelectorAll("[selected]").length||j.push("\\["+I+"*(?:value|"+Mi+")"),ae.querySelectorAll("[id~="+he+"-]").length||j.push("~="),ae.querySelectorAll("a#"+he+"+*").length||j.push(".#.+[+~]"),ae.querySelectorAll(":checked").length||j.push(":checked"),fe=C.createElement("input"),fe.setAttribute("type","hidden"),ae.appendChild(fe).setAttribute("name","D"),H.appendChild(ae).disabled=!0,ae.querySelectorAll(":disabled").length!==2&&j.push(":enabled",":disabled"),fe=C.createElement("input"),fe.setAttribute("name",""),ae.appendChild(fe),ae.querySelectorAll("[name='']").length||j.push("\\["+I+"*name"+I+"*="+I+`*(?:''|"")`)}),S.cssHas||j.push(":has"),j=j.length&&new RegExp(j.join("|")),nn=function(ae,fe){if(ae===fe)return b=!0,0;var Se=!ae.compareDocumentPosition-!fe.compareDocumentPosition;return Se||(Se=(ae.ownerDocument||ae)==(fe.ownerDocument||fe)?ae.compareDocumentPosition(fe):1,Se&1||!S.sortDetached&&fe.compareDocumentPosition(ae)===Se?ae===C||ae.ownerDocument==K&&Dt.contains(K,ae)?-1:fe===C||fe.ownerDocument==K&&Dt.contains(K,fe)?1:x?c.call(x,ae)-c.call(x,fe):0:Se&4?-1:1)}),C}Dt.matches=function(U,V){return Dt(U,null,null,V)},Dt.matchesSelector=function(U,V){if(ur(U),B&&!fn[V+" "]&&(!j||!j.test(V)))try{var J=oe.call(U,V);if(J||S.disconnectedMatch||U.document&&U.document.nodeType!==11)return J}catch{fn(V,!0)}return Dt(V,C,null,[U]).length>0},Dt.contains=function(U,V){return(U.ownerDocument||U)!=C&&ur(U),p.contains(U,V)},Dt.attr=function(U,V){(U.ownerDocument||U)!=C&&ur(U);var J=h.attrHandle[V.toLowerCase()],ae=J&&d.call(h.attrHandle,V.toLowerCase())?J(U,V,!B):void 0;return ae!==void 0?ae:U.getAttribute(V)},Dt.error=function(U){throw new Error("Syntax error, unrecognized expression: "+U)},p.uniqueSort=function(U){var V,J=[],ae=0,fe=0;if(b=!S.sortStable,x=!S.sortStable&&r.call(U,0),te.call(U,nn),b){for(;V=U[fe++];)V===U[fe]&&(ae=J.push(fe));for(;ae--;)G.call(U,J[ae],1)}return x=null,U},p.fn.uniqueSort=function(){return this.pushStack(p.uniqueSort(r.apply(this)))},h=p.expr={cacheLength:50,createPseudo:ci,match:bi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(U){return U[1]=U[1].replace(zi,Hi),U[3]=(U[3]||U[4]||U[5]||"").replace(zi,Hi),U[2]==="~="&&(U[3]=" "+U[3]+" "),U.slice(0,4)},CHILD:function(U){return U[1]=U[1].toLowerCase(),U[1].slice(0,3)==="nth"?(U[3]||Dt.error(U[0]),U[4]=+(U[4]?U[5]+(U[6]||1):2*(U[3]==="even"||U[3]==="odd")),U[5]=+(U[7]+U[8]||U[3]==="odd")):U[3]&&Dt.error(U[0]),U},PSEUDO:function(U){var V,J=!U[6]&&U[2];return bi.CHILD.test(U[0])?null:(U[3]?U[2]=U[4]||U[5]||"":J&&Ti.test(J)&&(V=fo(J,!0))&&(V=J.indexOf(")",J.length-V)-J.length)&&(U[0]=U[0].slice(0,V),U[2]=J.slice(0,V)),U.slice(0,3))}},filter:{TAG:function(U){var V=U.replace(zi,Hi).toLowerCase();return U==="*"?function(){return!0}:function(J){return w(J,V)}},CLASS:function(U){var V=Je[U+" "];return V||(V=new RegExp("(^|"+I+")"+U+"("+I+"|$)"))&&Je(U,function(J){return V.test(typeof J.className=="string"&&J.className||typeof J.getAttribute<"u"&&J.getAttribute("class")||"")})},ATTR:function(U,V,J){return function(ae){var fe=Dt.attr(ae,U);return fe==null?V==="!=":V?(fe+="",V==="="?fe===J:V==="!="?fe!==J:V==="^="?J&&fe.indexOf(J)===0:V==="*="?J&&fe.indexOf(J)>-1:V==="$="?J&&fe.slice(-J.length)===J:V==="~="?(" "+fe.replace(Et," ")+" ").indexOf(J)>-1:V==="|="?fe===J||fe.slice(0,J.length+1)===J+"-":!1):!0}},CHILD:function(U,V,J,ae,fe){var Se=U.slice(0,3)!=="nth",Le=U.slice(-4)!=="last",ke=V==="of-type";return ae===1&&fe===0?function(De){return!!De.parentNode}:function(De,pt,Ye){var tt,mt,Ge,kt,An,pn=Se!==Le?"nextSibling":"previousSibling",Yn=De.parentNode,Ei=ke&&De.nodeName.toLowerCase(),gs=!Ye&&!ke,Mn=!1;if(Yn){if(Se){for(;pn;){for(Ge=De;Ge=Ge[pn];)if(ke?w(Ge,Ei):Ge.nodeType===1)return!1;An=pn=U==="only"&&!An&&"nextSibling"}return!0}if(An=[Le?Yn.firstChild:Yn.lastChild],Le&&gs){for(mt=Yn[he]||(Yn[he]={}),tt=mt[U]||[],kt=tt[0]===ee&&tt[1],Mn=kt&&tt[2],Ge=kt&&Yn.childNodes[kt];Ge=++kt&&Ge&&Ge[pn]||(Mn=kt=0)||An.pop();)if(Ge.nodeType===1&&++Mn&&Ge===De){mt[U]=[ee,kt,Mn];break}}else if(gs&&(mt=De[he]||(De[he]={}),tt=mt[U]||[],kt=tt[0]===ee&&tt[1],Mn=kt),Mn===!1)for(;(Ge=++kt&&Ge&&Ge[pn]||(Mn=kt=0)||An.pop())&&!((ke?w(Ge,Ei):Ge.nodeType===1)&&++Mn&&(gs&&(mt=Ge[he]||(Ge[he]={}),mt[U]=[ee,Mn]),Ge===De)););return Mn-=fe,Mn===ae||Mn%ae===0&&Mn/ae>=0}}},PSEUDO:function(U,V){var J,ae=h.pseudos[U]||h.setFilters[U.toLowerCase()]||Dt.error("unsupported pseudo: "+U);return ae[he]?ae(V):ae.length>1?(J=[U,U,"",V],h.setFilters.hasOwnProperty(U.toLowerCase())?ci(function(fe,Se){for(var Le,ke=ae(fe,V),De=ke.length;De--;)Le=c.call(fe,ke[De]),fe[Le]=!(Se[Le]=ke[De])}):function(fe){return ae(fe,0,J)}):ae}},pseudos:{not:ci(function(U){var V=[],J=[],ae=Il(U.replace(z,"$1"));return ae[he]?ci(function(fe,Se,Le,ke){for(var De,pt=ae(fe,null,ke,[]),Ye=fe.length;Ye--;)(De=pt[Ye])&&(fe[Ye]=!(Se[Ye]=De))}):function(fe,Se,Le){return V[0]=fe,ae(V,null,Le,J),V[0]=null,!J.pop()}}),has:ci(function(U){return function(V){return Dt(U,V).length>0}}),contains:ci(function(U){return U=U.replace(zi,Hi),function(V){return(V.textContent||p.text(V)).indexOf(U)>-1}}),lang:ci(function(U){return xa.test(U||"")||Dt.error("unsupported lang: "+U),U=U.replace(zi,Hi).toLowerCase(),function(V){var J;do if(J=B?V.lang:V.getAttribute("xml:lang")||V.getAttribute("lang"))return J=J.toLowerCase(),J===U||J.indexOf(U+"-")===0;while((V=V.parentNode)&&V.nodeType===1);return!1}}),target:function(U){var V=e.location&&e.location.hash;return V&&V.slice(1)===U.id},root:function(U){return U===H},focus:function(U){return U===Om()&&C.hasFocus()&&!!(U.type||U.href||~U.tabIndex)},enabled:Yu(!1),disabled:Yu(!0),checked:function(U){return w(U,"input")&&!!U.checked||w(U,"option")&&!!U.selected},selected:function(U){return U.parentNode&&U.parentNode.selectedIndex,U.selected===!0},empty:function(U){for(U=U.firstChild;U;U=U.nextSibling)if(U.nodeType<6)return!1;return!0},parent:function(U){return!h.pseudos.empty(U)},header:function(U){return cr.test(U.nodeName)},input:function(U){return lr.test(U.nodeName)},button:function(U){return w(U,"input")&&U.type==="button"||w(U,"button")},text:function(U){var V;return w(U,"input")&&U.type==="text"&&((V=U.getAttribute("type"))==null||V.toLowerCase()==="text")},first:Or(function(){return[0]}),last:Or(function(U,V){return[V-1]}),eq:Or(function(U,V,J){return[J<0?J+V:J]}),even:Or(function(U,V){for(var J=0;J<V;J+=2)U.push(J);return U}),odd:Or(function(U,V){for(var J=1;J<V;J+=2)U.push(J);return U}),lt:Or(function(U,V,J){var ae;for(J<0?ae=J+V:J>V?ae=V:ae=J;--ae>=0;)U.push(ae);return U}),gt:Or(function(U,V,J){for(var ae=J<0?J+V:J;++ae<V;)U.push(ae);return U})}},h.pseudos.nth=h.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[l]=Fm(l);for(l in{submit:!0,reset:!0})h.pseudos[l]=km(l);function Ku(){}Ku.prototype=h.filters=h.pseudos,h.setFilters=new Ku;function fo(U,V){var J,ae,fe,Se,Le,ke,De,pt=bt[U+" "];if(pt)return V?0:pt.slice(0);for(Le=U,ke=[],De=h.preFilter;Le;){(!J||(ae=jt.exec(Le)))&&(ae&&(Le=Le.slice(ae[0].length)||Le),ke.push(fe=[])),J=!1,(ae=ya.exec(Le))&&(J=ae.shift(),fe.push({value:J,type:ae[0].replace(z," ")}),Le=Le.slice(J.length));for(Se in h.filter)(ae=bi[Se].exec(Le))&&(!De[Se]||(ae=De[Se](ae)))&&(J=ae.shift(),fe.push({value:J,type:Se,matches:ae}),Le=Le.slice(J.length));if(!J)break}return V?Le.length:Le?Dt.error(U):bt(U,ke).slice(0)}function ho(U){for(var V=0,J=U.length,ae="";V<J;V++)ae+=U[V].value;return ae}function po(U,V,J){var ae=V.dir,fe=V.next,Se=fe||ae,Le=J&&Se==="parentNode",ke=ve++;return V.first?function(De,pt,Ye){for(;De=De[ae];)if(De.nodeType===1||Le)return U(De,pt,Ye);return!1}:function(De,pt,Ye){var tt,mt,Ge=[ee,ke];if(Ye){for(;De=De[ae];)if((De.nodeType===1||Le)&&U(De,pt,Ye))return!0}else for(;De=De[ae];)if(De.nodeType===1||Le)if(mt=De[he]||(De[he]={}),fe&&w(De,fe))De=De[ae]||De;else{if((tt=mt[Se])&&tt[0]===ee&&tt[1]===ke)return Ge[2]=tt[2];if(mt[Se]=Ge,Ge[2]=U(De,pt,Ye))return!0}return!1}}function Pl(U){return U.length>1?function(V,J,ae){for(var fe=U.length;fe--;)if(!U[fe](V,J,ae))return!1;return!0}:U[0]}function Bm(U,V,J){for(var ae=0,fe=V.length;ae<fe;ae++)Dt(U,V[ae],J);return J}function mo(U,V,J,ae,fe){for(var Se,Le=[],ke=0,De=U.length,pt=V!=null;ke<De;ke++)(Se=U[ke])&&(!J||J(Se,ae,fe))&&(Le.push(Se),pt&&V.push(ke));return Le}function Ll(U,V,J,ae,fe,Se){return ae&&!ae[he]&&(ae=Ll(ae)),fe&&!fe[he]&&(fe=Ll(fe,Se)),ci(function(Le,ke,De,pt){var Ye,tt,mt,Ge,kt=[],An=[],pn=ke.length,Yn=Le||Bm(V||"*",De.nodeType?[De]:De,[]),Ei=U&&(Le||!V)?mo(Yn,kt,U,De,pt):Yn;if(J?(Ge=fe||(Le?U:pn||ae)?[]:ke,J(Ei,Ge,De,pt)):Ge=Ei,ae)for(Ye=mo(Ge,An),ae(Ye,[],De,pt),tt=Ye.length;tt--;)(mt=Ye[tt])&&(Ge[An[tt]]=!(Ei[An[tt]]=mt));if(Le){if(fe||U){if(fe){for(Ye=[],tt=Ge.length;tt--;)(mt=Ge[tt])&&Ye.push(Ei[tt]=mt);fe(null,Ge=[],Ye,pt)}for(tt=Ge.length;tt--;)(mt=Ge[tt])&&(Ye=fe?c.call(Le,mt):kt[tt])>-1&&(Le[Ye]=!(ke[Ye]=mt))}}else Ge=mo(Ge===ke?Ge.splice(pn,Ge.length):Ge),fe?fe(null,ke,Ge,pt):E.apply(ke,Ge)})}function Dl(U){for(var V,J,ae,fe=U.length,Se=h.relative[U[0].type],Le=Se||h.relative[" "],ke=Se?1:0,De=po(function(tt){return tt===V},Le,!0),pt=po(function(tt){return c.call(V,tt)>-1},Le,!0),Ye=[function(tt,mt,Ge){var kt=!Se&&(Ge||mt!=g)||((V=mt).nodeType?De(tt,mt,Ge):pt(tt,mt,Ge));return V=null,kt}];ke<fe;ke++)if(J=h.relative[U[ke].type])Ye=[po(Pl(Ye),J)];else{if(J=h.filter[U[ke].type].apply(null,U[ke].matches),J[he]){for(ae=++ke;ae<fe&&!h.relative[U[ae].type];ae++);return Ll(ke>1&&Pl(Ye),ke>1&&ho(U.slice(0,ke-1).concat({value:U[ke-2].type===" "?"*":""})).replace(z,"$1"),J,ke<ae&&Dl(U.slice(ke,ae)),ae<fe&&Dl(U=U.slice(ae)),ae<fe&&ho(U))}Ye.push(J)}return Pl(Ye)}function zm(U,V){var J=V.length>0,ae=U.length>0,fe=function(Se,Le,ke,De,pt){var Ye,tt,mt,Ge=0,kt="0",An=Se&&[],pn=[],Yn=g,Ei=Se||ae&&h.find.TAG("*",pt),gs=ee+=Yn==null?1:Math.random()||.1,Mn=Ei.length;for(pt&&(g=Le==C||Le||pt);kt!==Mn&&(Ye=Ei[kt])!=null;kt++){if(ae&&Ye){for(tt=0,!Le&&Ye.ownerDocument!=C&&(ur(Ye),ke=!B);mt=U[tt++];)if(mt(Ye,Le||C,ke)){E.call(De,Ye);break}pt&&(ee=gs)}J&&((Ye=!mt&&Ye)&&Ge--,Se&&An.push(Ye))}if(Ge+=kt,J&&kt!==Ge){for(tt=0;mt=V[tt++];)mt(An,pn,Le,ke);if(Se){if(Ge>0)for(;kt--;)An[kt]||pn[kt]||(pn[kt]=F.call(De));pn=mo(pn)}E.apply(De,pn),pt&&!Se&&pn.length>0&&Ge+V.length>1&&p.uniqueSort(De)}return pt&&(ee=gs,g=Yn),An};return J?ci(fe):fe}function Il(U,V){var J,ae=[],fe=[],Se=lt[U+" "];if(!Se){for(V||(V=fo(U)),J=V.length;J--;)Se=Dl(V[J]),Se[he]?ae.push(Se):fe.push(Se);Se=lt(U,zm(fe,ae)),Se.selector=U}return Se}function $u(U,V,J,ae){var fe,Se,Le,ke,De,pt=typeof U=="function"&&U,Ye=!ae&&fo(U=pt.selector||U);if(J=J||[],Ye.length===1){if(Se=Ye[0]=Ye[0].slice(0),Se.length>2&&(Le=Se[0]).type==="ID"&&V.nodeType===9&&B&&h.relative[Se[1].type]){if(V=(h.find.ID(Le.matches[0].replace(zi,Hi),V)||[])[0],V)pt&&(V=V.parentNode);else return J;U=U.slice(Se.shift().value.length)}for(fe=bi.needsContext.test(U)?0:Se.length;fe--&&(Le=Se[fe],!h.relative[ke=Le.type]);)if((De=h.find[ke])&&(ae=De(Le.matches[0].replace(zi,Hi),Rl.test(Se[0].type)&&Cl(V.parentNode)||V))){if(Se.splice(fe,1),U=ae.length&&ho(Se),!U)return E.apply(J,ae),J;break}}return(pt||Il(U,Ye))(ae,V,!B,J,!V||Rl.test(U)&&Cl(V.parentNode)||V),J}S.sortStable=he.split("").sort(nn).join("")===he,ur(),S.sortDetached=ms(function(U){return U.compareDocumentPosition(C.createElement("fieldset"))&1}),p.find=Dt,p.expr[":"]=p.expr.pseudos,p.unique=p.uniqueSort,Dt.compile=Il,Dt.select=$u,Dt.setDocument=ur,Dt.escape=p.escapeSelector,Dt.getText=p.text,Dt.isXML=p.isXMLDoc,Dt.selectors=p.expr,Dt.support=p.support,Dt.uniqueSort=p.uniqueSort})();var ce=function(l,h,g){for(var x=[],b=g!==void 0;(l=l[h])&&l.nodeType!==9;)if(l.nodeType===1){if(b&&p(l).is(g))break;x.push(l)}return x},pe=function(l,h){for(var g=[];l;l=l.nextSibling)l.nodeType===1&&l!==h&&g.push(l);return g},Ee=p.expr.match.needsContext,re=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function me(l,h,g){return M(h)?p.grep(l,function(x,b){return!!h.call(x,b,x)!==g}):h.nodeType?p.grep(l,function(x){return x===h!==g}):typeof h!="string"?p.grep(l,function(x){return c.call(h,x)>-1!==g}):p.filter(h,l,g)}p.filter=function(l,h,g){var x=h[0];return g&&(l=":not("+l+")"),h.length===1&&x.nodeType===1?p.find.matchesSelector(x,l)?[x]:[]:p.find.matches(l,p.grep(h,function(b){return b.nodeType===1}))},p.fn.extend({find:function(l){var h,g,x=this.length,b=this;if(typeof l!="string")return this.pushStack(p(l).filter(function(){for(h=0;h<x;h++)if(p.contains(b[h],this))return!0}));for(g=this.pushStack([]),h=0;h<x;h++)p.find(l,b[h],g);return x>1?p.uniqueSort(g):g},filter:function(l){return this.pushStack(me(this,l||[],!1))},not:function(l){return this.pushStack(me(this,l||[],!0))},is:function(l){return!!me(this,typeof l=="string"&&Ee.test(l)?p(l):l||[],!1).length}});var ge,Pe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ue=p.fn.init=function(l,h,g){var x,b;if(!l)return this;if(g=g||ge,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?x=[null,l,null]:x=Pe.exec(l),x&&(x[1]||!h))if(x[1]){if(h=h instanceof p?h[0]:h,p.merge(this,p.parseHTML(x[1],h&&h.nodeType?h.ownerDocument||h:v,!0)),re.test(x[1])&&p.isPlainObject(h))for(x in h)M(this[x])?this[x](h[x]):this.attr(x,h[x]);return this}else return b=v.getElementById(x[2]),b&&(this[0]=b,this.length=1),this;else return!h||h.jquery?(h||g).find(l):this.constructor(h).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(M(l))return g.ready!==void 0?g.ready(l):l(p)}return p.makeArray(l,this)};Ue.prototype=p.fn,ge=p(v);var We=/^(?:parents|prev(?:Until|All))/,ct={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({has:function(l){var h=p(l,this),g=h.length;return this.filter(function(){for(var x=0;x<g;x++)if(p.contains(this,h[x]))return!0})},closest:function(l,h){var g,x=0,b=this.length,E=[],C=typeof l!="string"&&p(l);if(!Ee.test(l)){for(;x<b;x++)for(g=this[x];g&&g!==h;g=g.parentNode)if(g.nodeType<11&&(C?C.index(g)>-1:g.nodeType===1&&p.find.matchesSelector(g,l))){E.push(g);break}}return this.pushStack(E.length>1?p.uniqueSort(E):E)},index:function(l){return l?typeof l=="string"?c.call(p(l),this[0]):c.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,h){return this.pushStack(p.uniqueSort(p.merge(this.get(),p(l,h))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function Ke(l,h){for(;(l=l[h])&&l.nodeType!==1;);return l}p.each({parent:function(l){var h=l.parentNode;return h&&h.nodeType!==11?h:null},parents:function(l){return ce(l,"parentNode")},parentsUntil:function(l,h,g){return ce(l,"parentNode",g)},next:function(l){return Ke(l,"nextSibling")},prev:function(l){return Ke(l,"previousSibling")},nextAll:function(l){return ce(l,"nextSibling")},prevAll:function(l){return ce(l,"previousSibling")},nextUntil:function(l,h,g){return ce(l,"nextSibling",g)},prevUntil:function(l,h,g){return ce(l,"previousSibling",g)},siblings:function(l){return pe((l.parentNode||{}).firstChild,l)},children:function(l){return pe(l.firstChild)},contents:function(l){return l.contentDocument!=null&&i(l.contentDocument)?l.contentDocument:(w(l,"template")&&(l=l.content||l),p.merge([],l.childNodes))}},function(l,h){p.fn[l]=function(g,x){var b=p.map(this,h,g);return l.slice(-5)!=="Until"&&(x=g),x&&typeof x=="string"&&(b=p.filter(x,b)),this.length>1&&(ct[l]||p.uniqueSort(b),We.test(l)&&b.reverse()),this.pushStack(b)}});var At=/[^\x20\t\r\n\f]+/g;function gt(l){var h={};return p.each(l.match(At)||[],function(g,x){h[x]=!0}),h}p.Callbacks=function(l){l=typeof l=="string"?gt(l):p.extend({},l);var h,g,x,b,E=[],C=[],H=-1,B=function(){for(b=b||l.once,x=h=!0;C.length;H=-1)for(g=C.shift();++H<E.length;)E[H].apply(g[0],g[1])===!1&&l.stopOnFalse&&(H=E.length,g=!1);l.memory||(g=!1),h=!1,b&&(g?E=[]:E="")},j={add:function(){return E&&(g&&!h&&(H=E.length-1,C.push(g)),function oe(he){p.each(he,function(ee,ve){M(ve)?(!l.unique||!j.has(ve))&&E.push(ve):ve&&ve.length&&R(ve)!=="string"&&oe(ve)})}(arguments),g&&!h&&B()),this},remove:function(){return p.each(arguments,function(oe,he){for(var ee;(ee=p.inArray(he,E,ee))>-1;)E.splice(ee,1),ee<=H&&H--}),this},has:function(oe){return oe?p.inArray(oe,E)>-1:E.length>0},empty:function(){return E&&(E=[]),this},disable:function(){return b=C=[],E=g="",this},disabled:function(){return!E},lock:function(){return b=C=[],!g&&!h&&(E=g=""),this},locked:function(){return!!b},fireWith:function(oe,he){return b||(he=he||[],he=[oe,he.slice?he.slice():he],C.push(he),h||B()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!x}};return j};function Q(l){return l}function Wt(l){throw l}function Xe(l,h,g,x){var b;try{l&&M(b=l.promise)?b.call(l).done(h).fail(g):l&&M(b=l.then)?b.call(l,h,g):h.apply(void 0,[l].slice(x))}catch(E){g.apply(void 0,[E])}}p.extend({Deferred:function(l){var h=[["notify","progress",p.Callbacks("memory"),p.Callbacks("memory"),2],["resolve","done",p.Callbacks("once memory"),p.Callbacks("once memory"),0,"resolved"],["reject","fail",p.Callbacks("once memory"),p.Callbacks("once memory"),1,"rejected"]],g="pending",x={state:function(){return g},always:function(){return b.done(arguments).fail(arguments),this},catch:function(E){return x.then(null,E)},pipe:function(){var E=arguments;return p.Deferred(function(C){p.each(h,function(H,B){var j=M(E[B[4]])&&E[B[4]];b[B[1]](function(){var oe=j&&j.apply(this,arguments);oe&&M(oe.promise)?oe.promise().progress(C.notify).done(C.resolve).fail(C.reject):C[B[0]+"With"](this,j?[oe]:arguments)})}),E=null}).promise()},then:function(E,C,H){var B=0;function j(oe,he,ee,ve){return function(){var Je=this,bt=arguments,lt=function(){var nn,Mi;if(!(oe<B)){if(nn=ee.apply(Je,bt),nn===he.promise())throw new TypeError("Thenable self-resolution");Mi=nn&&(typeof nn=="object"||typeof nn=="function")&&nn.then,M(Mi)?ve?Mi.call(nn,j(B,he,Q,ve),j(B,he,Wt,ve)):(B++,Mi.call(nn,j(B,he,Q,ve),j(B,he,Wt,ve),j(B,he,Q,he.notifyWith))):(ee!==Q&&(Je=void 0,bt=[nn]),(ve||he.resolveWith)(Je,bt))}},fn=ve?lt:function(){try{lt()}catch(nn){p.Deferred.exceptionHook&&p.Deferred.exceptionHook(nn,fn.error),oe+1>=B&&(ee!==Wt&&(Je=void 0,bt=[nn]),he.rejectWith(Je,bt))}};oe?fn():(p.Deferred.getErrorHook?fn.error=p.Deferred.getErrorHook():p.Deferred.getStackHook&&(fn.error=p.Deferred.getStackHook()),e.setTimeout(fn))}}return p.Deferred(function(oe){h[0][3].add(j(0,oe,M(H)?H:Q,oe.notifyWith)),h[1][3].add(j(0,oe,M(E)?E:Q)),h[2][3].add(j(0,oe,M(C)?C:Wt))}).promise()},promise:function(E){return E!=null?p.extend(E,x):x}},b={};return p.each(h,function(E,C){var H=C[2],B=C[5];x[C[1]]=H.add,B&&H.add(function(){g=B},h[3-E][2].disable,h[3-E][3].disable,h[0][2].lock,h[0][3].lock),H.add(C[3].fire),b[C[0]]=function(){return b[C[0]+"With"](this===b?void 0:this,arguments),this},b[C[0]+"With"]=H.fireWith}),x.promise(b),l&&l.call(b,b),b},when:function(l){var h=arguments.length,g=h,x=Array(g),b=r.call(arguments),E=p.Deferred(),C=function(H){return function(B){x[H]=this,b[H]=arguments.length>1?r.call(arguments):B,--h||E.resolveWith(x,b)}};if(h<=1&&(Xe(l,E.done(C(g)).resolve,E.reject,!h),E.state()==="pending"||M(b[g]&&b[g].then)))return E.then();for(;g--;)Xe(b[g],C(g),E.reject);return E.promise()}});var ut=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;p.Deferred.exceptionHook=function(l,h){e.console&&e.console.warn&&l&&ut.test(l.name)&&e.console.warn("jQuery.Deferred exception: "+l.message,l.stack,h)},p.readyException=function(l){e.setTimeout(function(){throw l})};var je=p.Deferred();p.fn.ready=function(l){return je.then(l).catch(function(h){p.readyException(h)}),this},p.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--p.readyWait:p.isReady)||(p.isReady=!0,!(l!==!0&&--p.readyWait>0)&&je.resolveWith(v,[p]))}}),p.ready.then=je.then;function wt(){v.removeEventListener("DOMContentLoaded",wt),e.removeEventListener("load",wt),p.ready()}v.readyState==="complete"||v.readyState!=="loading"&&!v.documentElement.doScroll?e.setTimeout(p.ready):(v.addEventListener("DOMContentLoaded",wt),e.addEventListener("load",wt));var Ze=function(l,h,g,x,b,E,C){var H=0,B=l.length,j=g==null;if(R(g)==="object"){b=!0;for(H in g)Ze(l,h,H,g[H],!0,E,C)}else if(x!==void 0&&(b=!0,M(x)||(C=!0),j&&(C?(h.call(l,x),h=null):(j=h,h=function(oe,he,ee){return j.call(p(oe),ee)})),h))for(;H<B;H++)h(l[H],g,C?x:x.call(l[H],H,h(l[H],g)));return b?l:j?h.call(l):B?h(l[0],g):E},at=/^-ms-/,Rt=/-([a-z])/g;function tn(l,h){return h.toUpperCase()}function It(l){return l.replace(at,"ms-").replace(Rt,tn)}var k=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function L(){this.expando=p.expando+L.uid++}L.uid=1,L.prototype={cache:function(l){var h=l[this.expando];return h||(h={},k(l)&&(l.nodeType?l[this.expando]=h:Object.defineProperty(l,this.expando,{value:h,configurable:!0}))),h},set:function(l,h,g){var x,b=this.cache(l);if(typeof h=="string")b[It(h)]=g;else for(x in h)b[It(x)]=h[x];return b},get:function(l,h){return h===void 0?this.cache(l):l[this.expando]&&l[this.expando][It(h)]},access:function(l,h,g){return h===void 0||h&&typeof h=="string"&&g===void 0?this.get(l,h):(this.set(l,h,g),g!==void 0?g:h)},remove:function(l,h){var g,x=l[this.expando];if(x!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(It):(h=It(h),h=h in x?[h]:h.match(At)||[]),g=h.length;g--;)delete x[h[g]];(h===void 0||p.isEmptyObject(x))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var h=l[this.expando];return h!==void 0&&!p.isEmptyObject(h)}};var q=new L,_e=new L,ye=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/[A-Z]/g;function ze(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:ye.test(l)?JSON.parse(l):l}function Re(l,h,g){var x;if(g===void 0&&l.nodeType===1)if(x="data-"+h.replace(Ae,"-$&").toLowerCase(),g=l.getAttribute(x),typeof g=="string"){try{g=ze(g)}catch{}_e.set(l,h,g)}else g=void 0;return g}p.extend({hasData:function(l){return _e.hasData(l)||q.hasData(l)},data:function(l,h,g){return _e.access(l,h,g)},removeData:function(l,h){_e.remove(l,h)},_data:function(l,h,g){return q.access(l,h,g)},_removeData:function(l,h){q.remove(l,h)}}),p.fn.extend({data:function(l,h){var g,x,b,E=this[0],C=E&&E.attributes;if(l===void 0){if(this.length&&(b=_e.get(E),E.nodeType===1&&!q.get(E,"hasDataAttrs"))){for(g=C.length;g--;)C[g]&&(x=C[g].name,x.indexOf("data-")===0&&(x=It(x.slice(5)),Re(E,x,b[x])));q.set(E,"hasDataAttrs",!0)}return b}return typeof l=="object"?this.each(function(){_e.set(this,l)}):Ze(this,function(H){var B;if(E&&H===void 0)return B=_e.get(E,l),B!==void 0||(B=Re(E,l),B!==void 0)?B:void 0;this.each(function(){_e.set(this,l,H)})},null,h,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){_e.remove(this,l)})}}),p.extend({queue:function(l,h,g){var x;if(l)return h=(h||"fx")+"queue",x=q.get(l,h),g&&(!x||Array.isArray(g)?x=q.access(l,h,p.makeArray(g)):x.push(g)),x||[]},dequeue:function(l,h){h=h||"fx";var g=p.queue(l,h),x=g.length,b=g.shift(),E=p._queueHooks(l,h),C=function(){p.dequeue(l,h)};b==="inprogress"&&(b=g.shift(),x--),b&&(h==="fx"&&g.unshift("inprogress"),delete E.stop,b.call(l,C,E)),!x&&E&&E.empty.fire()},_queueHooks:function(l,h){var g=h+"queueHooks";return q.get(l,g)||q.access(l,g,{empty:p.Callbacks("once memory").add(function(){q.remove(l,[h+"queue",g])})})}}),p.fn.extend({queue:function(l,h){var g=2;return typeof l!="string"&&(h=l,l="fx",g--),arguments.length<g?p.queue(this[0],l):h===void 0?this:this.each(function(){var x=p.queue(this,l,h);p._queueHooks(this,l),l==="fx"&&x[0]!=="inprogress"&&p.dequeue(this,l)})},dequeue:function(l){return this.each(function(){p.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,h){var g,x=1,b=p.Deferred(),E=this,C=this.length,H=function(){--x||b.resolveWith(E,[E])};for(typeof l!="string"&&(h=l,l=void 0),l=l||"fx";C--;)g=q.get(E[C],l+"queueHooks"),g&&g.empty&&(x++,g.empty.add(H));return H(),b.promise(h)}});var de=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,He=new RegExp("^(?:([+-])=|)("+de+")([a-z%]*)$","i"),Fe=["Top","Right","Bottom","Left"],Be=v.documentElement,Ie=function(l){return p.contains(l.ownerDocument,l)},Oe={composed:!0};Be.getRootNode&&(Ie=function(l){return p.contains(l.ownerDocument,l)||l.getRootNode(Oe)===l.ownerDocument});var ot=function(l,h){return l=h||l,l.style.display==="none"||l.style.display===""&&Ie(l)&&p.css(l,"display")==="none"};function Ct(l,h,g,x){var b,E,C=20,H=x?function(){return x.cur()}:function(){return p.css(l,h,"")},B=H(),j=g&&g[3]||(p.cssNumber[h]?"":"px"),oe=l.nodeType&&(p.cssNumber[h]||j!=="px"&&+B)&&He.exec(p.css(l,h));if(oe&&oe[3]!==j){for(B=B/2,j=j||oe[3],oe=+B||1;C--;)p.style(l,h,oe+j),(1-E)*(1-(E=H()/B||.5))<=0&&(C=0),oe=oe/E;oe=oe*2,p.style(l,h,oe+j),g=g||[]}return g&&(oe=+oe||+B||0,b=g[1]?oe+(g[1]+1)*g[2]:+g[2],x&&(x.unit=j,x.start=oe,x.end=b)),b}var X={};function we(l){var h,g=l.ownerDocument,x=l.nodeName,b=X[x];return b||(h=g.body.appendChild(g.createElement(x)),b=p.css(h,"display"),h.parentNode.removeChild(h),b==="none"&&(b="block"),X[x]=b,b)}function se(l,h){for(var g,x,b=[],E=0,C=l.length;E<C;E++)x=l[E],x.style&&(g=x.style.display,h?(g==="none"&&(b[E]=q.get(x,"display")||null,b[E]||(x.style.display="")),x.style.display===""&&ot(x)&&(b[E]=we(x))):g!=="none"&&(b[E]="none",q.set(x,"display",g)));for(E=0;E<C;E++)b[E]!=null&&(l[E].style.display=b[E]);return l}p.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){ot(this)?p(this).show():p(this).hide()})}});var Me=/^(?:checkbox|radio)$/i,Ce=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,yt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=v.createDocumentFragment(),h=l.appendChild(v.createElement("div")),g=v.createElement("input");g.setAttribute("type","radio"),g.setAttribute("checked","checked"),g.setAttribute("name","t"),h.appendChild(g),S.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",S.option=!!h.lastChild})();var xt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};xt.tbody=xt.tfoot=xt.colgroup=xt.caption=xt.thead,xt.th=xt.td,S.option||(xt.optgroup=xt.option=[1,"<select multiple='multiple'>","</select>"]);function Mt(l,h){var g;return typeof l.getElementsByTagName<"u"?g=l.getElementsByTagName(h||"*"):typeof l.querySelectorAll<"u"?g=l.querySelectorAll(h||"*"):g=[],h===void 0||h&&w(l,h)?p.merge([l],g):g}function ai(l,h){for(var g=0,x=l.length;g<x;g++)q.set(l[g],"globalEval",!h||q.get(h[g],"globalEval"))}var Bt=/<|&#?\w+;/;function On(l,h,g,x,b){for(var E,C,H,B,j,oe,he=h.createDocumentFragment(),ee=[],ve=0,Je=l.length;ve<Je;ve++)if(E=l[ve],E||E===0)if(R(E)==="object")p.merge(ee,E.nodeType?[E]:E);else if(!Bt.test(E))ee.push(h.createTextNode(E));else{for(C=C||he.appendChild(h.createElement("div")),H=(Ce.exec(E)||["",""])[1].toLowerCase(),B=xt[H]||xt._default,C.innerHTML=B[1]+p.htmlPrefilter(E)+B[2],oe=B[0];oe--;)C=C.lastChild;p.merge(ee,C.childNodes),C=he.firstChild,C.textContent=""}for(he.textContent="",ve=0;E=ee[ve++];){if(x&&p.inArray(E,x)>-1){b&&b.push(E);continue}if(j=Ie(E),C=Mt(he.appendChild(E),"script"),j&&ai(C),g)for(oe=0;E=C[oe++];)yt.test(E.type||"")&&g.push(E)}return he}var an=/^([^.]*)(?:\.(.+)|)/;function Oi(){return!0}function Fi(){return!1}function ha(l,h,g,x,b,E){var C,H;if(typeof h=="object"){typeof g!="string"&&(x=x||g,g=void 0);for(H in h)ha(l,H,g,x,h[H],E);return l}if(x==null&&b==null?(b=g,x=g=void 0):b==null&&(typeof g=="string"?(b=x,x=void 0):(b=x,x=g,g=void 0)),b===!1)b=Fi;else if(!b)return l;return E===1&&(C=b,b=function(B){return p().off(B),C.apply(this,arguments)},b.guid=C.guid||(C.guid=p.guid++)),l.each(function(){p.event.add(this,h,b,x,g)})}p.event={global:{},add:function(l,h,g,x,b){var E,C,H,B,j,oe,he,ee,ve,Je,bt,lt=q.get(l);if(k(l))for(g.handler&&(E=g,g=E.handler,b=E.selector),b&&p.find.matchesSelector(Be,b),g.guid||(g.guid=p.guid++),(B=lt.events)||(B=lt.events=Object.create(null)),(C=lt.handle)||(C=lt.handle=function(fn){return typeof p<"u"&&p.event.triggered!==fn.type?p.event.dispatch.apply(l,arguments):void 0}),h=(h||"").match(At)||[""],j=h.length;j--;)H=an.exec(h[j])||[],ve=bt=H[1],Je=(H[2]||"").split(".").sort(),ve&&(he=p.event.special[ve]||{},ve=(b?he.delegateType:he.bindType)||ve,he=p.event.special[ve]||{},oe=p.extend({type:ve,origType:bt,data:x,handler:g,guid:g.guid,selector:b,needsContext:b&&p.expr.match.needsContext.test(b),namespace:Je.join(".")},E),(ee=B[ve])||(ee=B[ve]=[],ee.delegateCount=0,(!he.setup||he.setup.call(l,x,Je,C)===!1)&&l.addEventListener&&l.addEventListener(ve,C)),he.add&&(he.add.call(l,oe),oe.handler.guid||(oe.handler.guid=g.guid)),b?ee.splice(ee.delegateCount++,0,oe):ee.push(oe),p.event.global[ve]=!0)},remove:function(l,h,g,x,b){var E,C,H,B,j,oe,he,ee,ve,Je,bt,lt=q.hasData(l)&&q.get(l);if(!(!lt||!(B=lt.events))){for(h=(h||"").match(At)||[""],j=h.length;j--;){if(H=an.exec(h[j])||[],ve=bt=H[1],Je=(H[2]||"").split(".").sort(),!ve){for(ve in B)p.event.remove(l,ve+h[j],g,x,!0);continue}for(he=p.event.special[ve]||{},ve=(x?he.delegateType:he.bindType)||ve,ee=B[ve]||[],H=H[2]&&new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"),C=E=ee.length;E--;)oe=ee[E],(b||bt===oe.origType)&&(!g||g.guid===oe.guid)&&(!H||H.test(oe.namespace))&&(!x||x===oe.selector||x==="**"&&oe.selector)&&(ee.splice(E,1),oe.selector&&ee.delegateCount--,he.remove&&he.remove.call(l,oe));C&&!ee.length&&((!he.teardown||he.teardown.call(l,Je,lt.handle)===!1)&&p.removeEvent(l,ve,lt.handle),delete B[ve])}p.isEmptyObject(B)&&q.remove(l,"handle events")}},dispatch:function(l){var h,g,x,b,E,C,H=new Array(arguments.length),B=p.event.fix(l),j=(q.get(this,"events")||Object.create(null))[B.type]||[],oe=p.event.special[B.type]||{};for(H[0]=B,h=1;h<arguments.length;h++)H[h]=arguments[h];if(B.delegateTarget=this,!(oe.preDispatch&&oe.preDispatch.call(this,B)===!1)){for(C=p.event.handlers.call(this,B,j),h=0;(b=C[h++])&&!B.isPropagationStopped();)for(B.currentTarget=b.elem,g=0;(E=b.handlers[g++])&&!B.isImmediatePropagationStopped();)(!B.rnamespace||E.namespace===!1||B.rnamespace.test(E.namespace))&&(B.handleObj=E,B.data=E.data,x=((p.event.special[E.origType]||{}).handle||E.handler).apply(b.elem,H),x!==void 0&&(B.result=x)===!1&&(B.preventDefault(),B.stopPropagation()));return oe.postDispatch&&oe.postDispatch.call(this,B),B.result}},handlers:function(l,h){var g,x,b,E,C,H=[],B=h.delegateCount,j=l.target;if(B&&j.nodeType&&!(l.type==="click"&&l.button>=1)){for(;j!==this;j=j.parentNode||this)if(j.nodeType===1&&!(l.type==="click"&&j.disabled===!0)){for(E=[],C={},g=0;g<B;g++)x=h[g],b=x.selector+" ",C[b]===void 0&&(C[b]=x.needsContext?p(b,this).index(j)>-1:p.find(b,this,null,[j]).length),C[b]&&E.push(x);E.length&&H.push({elem:j,handlers:E})}}return j=this,B<h.length&&H.push({elem:j,handlers:h.slice(B)}),H},addProp:function(l,h){Object.defineProperty(p.Event.prototype,l,{enumerable:!0,configurable:!0,get:M(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(g){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:g})}})},fix:function(l){return l[p.expando]?l:new p.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var h=this||l;return Me.test(h.type)&&h.click&&w(h,"input")&&ki(h,"click",!0),!1},trigger:function(l){var h=this||l;return Me.test(h.type)&&h.click&&w(h,"input")&&ki(h,"click"),!0},_default:function(l){var h=l.target;return Me.test(h.type)&&h.click&&w(h,"input")&&q.get(h,"click")||w(h,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function ki(l,h,g){if(!g){q.get(l,h)===void 0&&p.event.add(l,h,Oi);return}q.set(l,h,!1),p.event.add(l,h,{namespace:!1,handler:function(x){var b,E=q.get(this,h);if(x.isTrigger&1&&this[h]){if(E)(p.event.special[h]||{}).delegateType&&x.stopPropagation();else if(E=r.call(arguments),q.set(this,h,E),this[h](),b=q.get(this,h),q.set(this,h,!1),E!==b)return x.stopImmediatePropagation(),x.preventDefault(),b}else E&&(q.set(this,h,p.event.trigger(E[0],E.slice(1),this)),x.stopPropagation(),x.isImmediatePropagationStopped=Oi)}})}p.removeEvent=function(l,h,g){l.removeEventListener&&l.removeEventListener(h,g)},p.Event=function(l,h){if(!(this instanceof p.Event))return new p.Event(l,h);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?Oi:Fi,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,h&&p.extend(this,h),this.timeStamp=l&&l.timeStamp||Date.now(),this[p.expando]=!0},p.Event.prototype={constructor:p.Event,isDefaultPrevented:Fi,isPropagationStopped:Fi,isImmediatePropagationStopped:Fi,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=Oi,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=Oi,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=Oi,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},p.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},p.event.addProp),p.each({focus:"focusin",blur:"focusout"},function(l,h){function g(x){if(v.documentMode){var b=q.get(this,"handle"),E=p.event.fix(x);E.type=x.type==="focusin"?"focus":"blur",E.isSimulated=!0,b(x),E.target===E.currentTarget&&b(E)}else p.event.simulate(h,x.target,p.event.fix(x))}p.event.special[l]={setup:function(){var x;if(ki(this,l,!0),v.documentMode)x=q.get(this,h),x||this.addEventListener(h,g),q.set(this,h,(x||0)+1);else return!1},trigger:function(){return ki(this,l),!0},teardown:function(){var x;if(v.documentMode)x=q.get(this,h)-1,x?q.set(this,h,x):(this.removeEventListener(h,g),q.remove(this,h));else return!1},_default:function(x){return q.get(x.target,l)},delegateType:h},p.event.special[h]={setup:function(){var x=this.ownerDocument||this.document||this,b=v.documentMode?this:x,E=q.get(b,h);E||(v.documentMode?this.addEventListener(h,g):x.addEventListener(l,g,!0)),q.set(b,h,(E||0)+1)},teardown:function(){var x=this.ownerDocument||this.document||this,b=v.documentMode?this:x,E=q.get(b,h)-1;E?q.set(b,h,E):(v.documentMode?this.removeEventListener(h,g):x.removeEventListener(l,g,!0),q.remove(b,h))}}}),p.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,h){p.event.special[l]={delegateType:h,bindType:h,handle:function(g){var x,b=this,E=g.relatedTarget,C=g.handleObj;return(!E||E!==b&&!p.contains(b,E))&&(g.type=C.origType,x=C.handler.apply(this,arguments),g.type=h),x}}}),p.fn.extend({on:function(l,h,g,x){return ha(this,l,h,g,x)},one:function(l,h,g,x){return ha(this,l,h,g,x,1)},off:function(l,h,g){var x,b;if(l&&l.preventDefault&&l.handleObj)return x=l.handleObj,p(l.delegateTarget).off(x.namespace?x.origType+"."+x.namespace:x.origType,x.selector,x.handler),this;if(typeof l=="object"){for(b in l)this.off(b,h,l[b]);return this}return(h===!1||typeof h=="function")&&(g=h,h=void 0),g===!1&&(g=Fi),this.each(function(){p.event.remove(this,l,g,h)})}});var oo=/<script|<style|<link/i,fs=/checked\s*(?:[^=]|=\s*.checked.)/i,lo=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function co(l,h){return w(l,"table")&&w(h.nodeType!==11?h:h.firstChild,"tr")&&p(l).children("tbody")[0]||l}function vl(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function yl(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function N(l,h){var g,x,b,E,C,H,B;if(h.nodeType===1){if(q.hasData(l)&&(E=q.get(l),B=E.events,B)){q.remove(h,"handle events");for(b in B)for(g=0,x=B[b].length;g<x;g++)p.event.add(h,b,B[b][g])}_e.hasData(l)&&(C=_e.access(l),H=p.extend({},C),_e.set(h,H))}}function ne(l,h){var g=h.nodeName.toLowerCase();g==="input"&&Me.test(l.type)?h.checked=l.checked:(g==="input"||g==="textarea")&&(h.defaultValue=l.defaultValue)}function le(l,h,g,x){h=a(h);var b,E,C,H,B,j,oe=0,he=l.length,ee=he-1,ve=h[0],Je=M(ve);if(Je||he>1&&typeof ve=="string"&&!S.checkClone&&fs.test(ve))return l.each(function(bt){var lt=l.eq(bt);Je&&(h[0]=ve.call(this,bt,lt.html())),le(lt,h,g,x)});if(he&&(b=On(h,l[0].ownerDocument,!1,l,x),E=b.firstChild,b.childNodes.length===1&&(b=E),E||x)){for(C=p.map(Mt(b,"script"),vl),H=C.length;oe<he;oe++)B=b,oe!==ee&&(B=p.clone(B,!0,!0),H&&p.merge(C,Mt(B,"script"))),g.call(l[oe],B,oe);if(H)for(j=C[C.length-1].ownerDocument,p.map(C,yl),oe=0;oe<H;oe++)B=C[oe],yt.test(B.type||"")&&!q.access(B,"globalEval")&&p.contains(j,B)&&(B.src&&(B.type||"").toLowerCase()!=="module"?p._evalUrl&&!B.noModule&&p._evalUrl(B.src,{nonce:B.nonce||B.getAttribute("nonce")},j):T(B.textContent.replace(lo,""),B,j))}return l}function Z(l,h,g){for(var x,b=h?p.filter(h,l):l,E=0;(x=b[E])!=null;E++)!g&&x.nodeType===1&&p.cleanData(Mt(x)),x.parentNode&&(g&&Ie(x)&&ai(Mt(x,"script")),x.parentNode.removeChild(x));return l}p.extend({htmlPrefilter:function(l){return l},clone:function(l,h,g){var x,b,E,C,H=l.cloneNode(!0),B=Ie(l);if(!S.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!p.isXMLDoc(l))for(C=Mt(H),E=Mt(l),x=0,b=E.length;x<b;x++)ne(E[x],C[x]);if(h)if(g)for(E=E||Mt(l),C=C||Mt(H),x=0,b=E.length;x<b;x++)N(E[x],C[x]);else N(l,H);return C=Mt(H,"script"),C.length>0&&ai(C,!B&&Mt(l,"script")),H},cleanData:function(l){for(var h,g,x,b=p.event.special,E=0;(g=l[E])!==void 0;E++)if(k(g)){if(h=g[q.expando]){if(h.events)for(x in h.events)b[x]?p.event.remove(g,x):p.removeEvent(g,x,h.handle);g[q.expando]=void 0}g[_e.expando]&&(g[_e.expando]=void 0)}}}),p.fn.extend({detach:function(l){return Z(this,l,!0)},remove:function(l){return Z(this,l)},text:function(l){return Ze(this,function(h){return h===void 0?p.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,l,arguments.length)},append:function(){return le(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=co(this,l);h.appendChild(l)}})},prepend:function(){return le(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=co(this,l);h.insertBefore(l,h.firstChild)}})},before:function(){return le(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return le(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,h=0;(l=this[h])!=null;h++)l.nodeType===1&&(p.cleanData(Mt(l,!1)),l.textContent="");return this},clone:function(l,h){return l=l??!1,h=h??l,this.map(function(){return p.clone(this,l,h)})},html:function(l){return Ze(this,function(h){var g=this[0]||{},x=0,b=this.length;if(h===void 0&&g.nodeType===1)return g.innerHTML;if(typeof h=="string"&&!oo.test(h)&&!xt[(Ce.exec(h)||["",""])[1].toLowerCase()]){h=p.htmlPrefilter(h);try{for(;x<b;x++)g=this[x]||{},g.nodeType===1&&(p.cleanData(Mt(g,!1)),g.innerHTML=h);g=0}catch{}}g&&this.empty().append(h)},null,l,arguments.length)},replaceWith:function(){var l=[];return le(this,arguments,function(h){var g=this.parentNode;p.inArray(this,l)<0&&(p.cleanData(Mt(this)),g&&g.replaceChild(h,this))},l)}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,h){p.fn[l]=function(g){for(var x,b=[],E=p(g),C=E.length-1,H=0;H<=C;H++)x=H===C?this:this.clone(!0),p(E[H])[h](x),o.apply(b,x.get());return this.pushStack(b)}});var ue=new RegExp("^("+de+")(?!px)[a-z%]+$","i"),Ne=/^--/,Ve=function(l){var h=l.ownerDocument.defaultView;return(!h||!h.opener)&&(h=e),h.getComputedStyle(l)},qe=function(l,h,g){var x,b,E={};for(b in h)E[b]=l.style[b],l.style[b]=h[b];x=g.call(l);for(b in h)l.style[b]=E[b];return x},Qe=new RegExp(Fe.join("|"),"i");(function(){function l(){if(j){B.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Be.appendChild(B).appendChild(j);var oe=e.getComputedStyle(j);g=oe.top!=="1%",H=h(oe.marginLeft)===12,j.style.right="60%",E=h(oe.right)===36,x=h(oe.width)===36,j.style.position="absolute",b=h(j.offsetWidth/3)===12,Be.removeChild(B),j=null}}function h(oe){return Math.round(parseFloat(oe))}var g,x,b,E,C,H,B=v.createElement("div"),j=v.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=j.style.backgroundClip==="content-box",p.extend(S,{boxSizingReliable:function(){return l(),x},pixelBoxStyles:function(){return l(),E},pixelPosition:function(){return l(),g},reliableMarginLeft:function(){return l(),H},scrollboxSize:function(){return l(),b},reliableTrDimensions:function(){var oe,he,ee,ve;return C==null&&(oe=v.createElement("table"),he=v.createElement("tr"),ee=v.createElement("div"),oe.style.cssText="position:absolute;left:-11111px;border-collapse:separate",he.style.cssText="border:1px solid",he.style.height="1px",ee.style.height="9px",ee.style.display="block",Be.appendChild(oe).appendChild(he).appendChild(ee),ve=e.getComputedStyle(he),C=parseInt(ve.height,10)+parseInt(ve.borderTopWidth,10)+parseInt(ve.borderBottomWidth,10)===he.offsetHeight,Be.removeChild(oe)),C}}))})();function rt(l,h,g){var x,b,E,C,H=Ne.test(h),B=l.style;return g=g||Ve(l),g&&(C=g.getPropertyValue(h)||g[h],H&&C&&(C=C.replace(z,"$1")||void 0),C===""&&!Ie(l)&&(C=p.style(l,h)),!S.pixelBoxStyles()&&ue.test(C)&&Qe.test(h)&&(x=B.width,b=B.minWidth,E=B.maxWidth,B.minWidth=B.maxWidth=B.width=C,C=g.width,B.width=x,B.minWidth=b,B.maxWidth=E)),C!==void 0?C+"":C}function et(l,h){return{get:function(){if(l()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var st=["Webkit","Moz","ms"],Lt=v.createElement("div").style,zt={};function Fn(l){for(var h=l[0].toUpperCase()+l.slice(1),g=st.length;g--;)if(l=st[g]+h,l in Lt)return l}function kn(l){var h=p.cssProps[l]||zt[l];return h||(l in Lt?l:zt[l]=Fn(l)||l)}var Xt=/^(none|table(?!-c[ea]).+)/,_t={position:"absolute",visibility:"hidden",display:"block"},hs={letterSpacing:"0",fontWeight:"400"};function Kt(l,h,g){var x=He.exec(h);return x?Math.max(0,x[2]-(g||0))+(x[3]||"px"):h}function oi(l,h,g,x,b,E){var C=h==="width"?1:0,H=0,B=0,j=0;if(g===(x?"border":"content"))return 0;for(;C<4;C+=2)g==="margin"&&(j+=p.css(l,g+Fe[C],!0,b)),x?(g==="content"&&(B-=p.css(l,"padding"+Fe[C],!0,b)),g!=="margin"&&(B-=p.css(l,"border"+Fe[C]+"Width",!0,b))):(B+=p.css(l,"padding"+Fe[C],!0,b),g!=="padding"?B+=p.css(l,"border"+Fe[C]+"Width",!0,b):H+=p.css(l,"border"+Fe[C]+"Width",!0,b));return!x&&E>=0&&(B+=Math.max(0,Math.ceil(l["offset"+h[0].toUpperCase()+h.slice(1)]-E-B-H-.5))||0),B+j}function da(l,h,g){var x=Ve(l),b=!S.boxSizingReliable()||g,E=b&&p.css(l,"boxSizing",!1,x)==="border-box",C=E,H=rt(l,h,x),B="offset"+h[0].toUpperCase()+h.slice(1);if(ue.test(H)){if(!g)return H;H="auto"}return(!S.boxSizingReliable()&&E||!S.reliableTrDimensions()&&w(l,"tr")||H==="auto"||!parseFloat(H)&&p.css(l,"display",!1,x)==="inline")&&l.getClientRects().length&&(E=p.css(l,"boxSizing",!1,x)==="border-box",C=B in l,C&&(H=l[B])),H=parseFloat(H)||0,H+oi(l,h,g||(E?"border":"content"),C,x,H)+"px"}p.extend({cssHooks:{opacity:{get:function(l,h){if(h){var g=rt(l,"opacity");return g===""?"1":g}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(l,h,g,x){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var b,E,C,H=It(h),B=Ne.test(h),j=l.style;if(B||(h=kn(H)),C=p.cssHooks[h]||p.cssHooks[H],g!==void 0){if(E=typeof g,E==="string"&&(b=He.exec(g))&&b[1]&&(g=Ct(l,h,b),E="number"),g==null||g!==g)return;E==="number"&&!B&&(g+=b&&b[3]||(p.cssNumber[H]?"":"px")),!S.clearCloneStyle&&g===""&&h.indexOf("background")===0&&(j[h]="inherit"),(!C||!("set"in C)||(g=C.set(l,g,x))!==void 0)&&(B?j.setProperty(h,g):j[h]=g)}else return C&&"get"in C&&(b=C.get(l,!1,x))!==void 0?b:j[h]}},css:function(l,h,g,x){var b,E,C,H=It(h),B=Ne.test(h);return B||(h=kn(H)),C=p.cssHooks[h]||p.cssHooks[H],C&&"get"in C&&(b=C.get(l,!0,g)),b===void 0&&(b=rt(l,h,x)),b==="normal"&&h in hs&&(b=hs[h]),g===""||g?(E=parseFloat(b),g===!0||isFinite(E)?E||0:b):b}}),p.each(["height","width"],function(l,h){p.cssHooks[h]={get:function(g,x,b){if(x)return Xt.test(p.css(g,"display"))&&(!g.getClientRects().length||!g.getBoundingClientRect().width)?qe(g,_t,function(){return da(g,h,b)}):da(g,h,b)},set:function(g,x,b){var E,C=Ve(g),H=!S.scrollboxSize()&&C.position==="absolute",B=H||b,j=B&&p.css(g,"boxSizing",!1,C)==="border-box",oe=b?oi(g,h,b,j,C):0;return j&&H&&(oe-=Math.ceil(g["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(C[h])-oi(g,h,"border",!1,C)-.5)),oe&&(E=He.exec(x))&&(E[3]||"px")!=="px"&&(g.style[h]=x,x=p.css(g,h)),Kt(g,x,oe)}}}),p.cssHooks.marginLeft=et(S.reliableMarginLeft,function(l,h){if(h)return(parseFloat(rt(l,"marginLeft"))||l.getBoundingClientRect().left-qe(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),p.each({margin:"",padding:"",border:"Width"},function(l,h){p.cssHooks[l+h]={expand:function(g){for(var x=0,b={},E=typeof g=="string"?g.split(" "):[g];x<4;x++)b[l+Fe[x]+h]=E[x]||E[x-2]||E[0];return b}},l!=="margin"&&(p.cssHooks[l+h].set=Kt)}),p.fn.extend({css:function(l,h){return Ze(this,function(g,x,b){var E,C,H={},B=0;if(Array.isArray(x)){for(E=Ve(g),C=x.length;B<C;B++)H[x[B]]=p.css(g,x[B],!1,E);return H}return b!==void 0?p.style(g,x,b):p.css(g,x)},l,h,arguments.length>1)}});function Zt(l,h,g,x,b){return new Zt.prototype.init(l,h,g,x,b)}p.Tween=Zt,Zt.prototype={constructor:Zt,init:function(l,h,g,x,b,E){this.elem=l,this.prop=g,this.easing=b||p.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=x,this.unit=E||(p.cssNumber[g]?"":"px")},cur:function(){var l=Zt.propHooks[this.prop];return l&&l.get?l.get(this):Zt.propHooks._default.get(this)},run:function(l){var h,g=Zt.propHooks[this.prop];return this.options.duration?this.pos=h=p.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=h=l,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),g&&g.set?g.set(this):Zt.propHooks._default.set(this),this}},Zt.prototype.init.prototype=Zt.prototype,Zt.propHooks={_default:{get:function(l){var h;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(h=p.css(l.elem,l.prop,""),!h||h==="auto"?0:h)},set:function(l){p.fx.step[l.prop]?p.fx.step[l.prop](l):l.elem.nodeType===1&&(p.cssHooks[l.prop]||l.elem.style[kn(l.prop)]!=null)?p.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},Zt.propHooks.scrollTop=Zt.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},p.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},p.fx=Zt.prototype.init,p.fx.step={};var xi,Qt,Bi=/^(?:toggle|show|hide)$/,pa=/queueHooks$/;function un(){Qt&&(v.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(un):e.setTimeout(un,p.fx.interval),p.fx.tick())}function ds(){return e.setTimeout(function(){xi=void 0}),xi=Date.now()}function ps(l,h){var g,x=0,b={height:l};for(h=h?1:0;x<4;x+=2-h)g=Fe[x],b["margin"+g]=b["padding"+g]=l;return h&&(b.opacity=b.width=l),b}function ma(l,h,g){for(var x,b=(li.tweeners[h]||[]).concat(li.tweeners["*"]),E=0,C=b.length;E<C;E++)if(x=b[E].call(g,h,l))return x}function dm(l,h,g){var x,b,E,C,H,B,j,oe,he="width"in h||"height"in h,ee=this,ve={},Je=l.style,bt=l.nodeType&&ot(l),lt=q.get(l,"fxshow");g.queue||(C=p._queueHooks(l,"fx"),C.unqueued==null&&(C.unqueued=0,H=C.empty.fire,C.empty.fire=function(){C.unqueued||H()}),C.unqueued++,ee.always(function(){ee.always(function(){C.unqueued--,p.queue(l,"fx").length||C.empty.fire()})}));for(x in h)if(b=h[x],Bi.test(b)){if(delete h[x],E=E||b==="toggle",b===(bt?"hide":"show"))if(b==="show"&&lt&&lt[x]!==void 0)bt=!0;else continue;ve[x]=lt&&lt[x]||p.style(l,x)}if(B=!p.isEmptyObject(h),!(!B&&p.isEmptyObject(ve))){he&&l.nodeType===1&&(g.overflow=[Je.overflow,Je.overflowX,Je.overflowY],j=lt&&lt.display,j==null&&(j=q.get(l,"display")),oe=p.css(l,"display"),oe==="none"&&(j?oe=j:(se([l],!0),j=l.style.display||j,oe=p.css(l,"display"),se([l]))),(oe==="inline"||oe==="inline-block"&&j!=null)&&p.css(l,"float")==="none"&&(B||(ee.done(function(){Je.display=j}),j==null&&(oe=Je.display,j=oe==="none"?"":oe)),Je.display="inline-block")),g.overflow&&(Je.overflow="hidden",ee.always(function(){Je.overflow=g.overflow[0],Je.overflowX=g.overflow[1],Je.overflowY=g.overflow[2]})),B=!1;for(x in ve)B||(lt?"hidden"in lt&&(bt=lt.hidden):lt=q.access(l,"fxshow",{display:j}),E&&(lt.hidden=!bt),bt&&se([l],!0),ee.done(function(){bt||se([l]),q.remove(l,"fxshow");for(x in ve)p.style(l,x,ve[x])})),B=ma(bt?lt[x]:0,x,ee),x in lt||(lt[x]=B.start,bt&&(B.end=B.start,B.start=0))}}function pm(l,h){var g,x,b,E,C;for(g in l)if(x=It(g),b=h[x],E=l[g],Array.isArray(E)&&(b=E[1],E=l[g]=E[0]),g!==x&&(l[x]=E,delete l[g]),C=p.cssHooks[x],C&&"expand"in C){E=C.expand(E),delete l[x];for(g in E)g in l||(l[g]=E[g],h[g]=b)}else h[x]=b}function li(l,h,g){var x,b,E=0,C=li.prefilters.length,H=p.Deferred().always(function(){delete B.elem}),B=function(){if(b)return!1;for(var he=xi||ds(),ee=Math.max(0,j.startTime+j.duration-he),ve=ee/j.duration||0,Je=1-ve,bt=0,lt=j.tweens.length;bt<lt;bt++)j.tweens[bt].run(Je);return H.notifyWith(l,[j,Je,ee]),Je<1&&lt?ee:(lt||H.notifyWith(l,[j,1,0]),H.resolveWith(l,[j]),!1)},j=H.promise({elem:l,props:p.extend({},h),opts:p.extend(!0,{specialEasing:{},easing:p.easing._default},g),originalProperties:h,originalOptions:g,startTime:xi||ds(),duration:g.duration,tweens:[],createTween:function(he,ee){var ve=p.Tween(l,j.opts,he,ee,j.opts.specialEasing[he]||j.opts.easing);return j.tweens.push(ve),ve},stop:function(he){var ee=0,ve=he?j.tweens.length:0;if(b)return this;for(b=!0;ee<ve;ee++)j.tweens[ee].run(1);return he?(H.notifyWith(l,[j,1,0]),H.resolveWith(l,[j,he])):H.rejectWith(l,[j,he]),this}}),oe=j.props;for(pm(oe,j.opts.specialEasing);E<C;E++)if(x=li.prefilters[E].call(j,l,oe,j.opts),x)return M(x.stop)&&(p._queueHooks(j.elem,j.opts.queue).stop=x.stop.bind(x)),x;return p.map(oe,ma,j),M(j.opts.start)&&j.opts.start.call(l,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),p.fx.timer(p.extend(B,{elem:l,anim:j,queue:j.opts.queue})),j}p.Animation=p.extend(li,{tweeners:{"*":[function(l,h){var g=this.createTween(l,h);return Ct(g.elem,l,He.exec(h),g),g}]},tweener:function(l,h){M(l)?(h=l,l=["*"]):l=l.match(At);for(var g,x=0,b=l.length;x<b;x++)g=l[x],li.tweeners[g]=li.tweeners[g]||[],li.tweeners[g].unshift(h)},prefilters:[dm],prefilter:function(l,h){h?li.prefilters.unshift(l):li.prefilters.push(l)}}),p.speed=function(l,h,g){var x=l&&typeof l=="object"?p.extend({},l):{complete:g||!g&&h||M(l)&&l,duration:l,easing:g&&h||h&&!M(h)&&h};return p.fx.off?x.duration=0:typeof x.duration!="number"&&(x.duration in p.fx.speeds?x.duration=p.fx.speeds[x.duration]:x.duration=p.fx.speeds._default),(x.queue==null||x.queue===!0)&&(x.queue="fx"),x.old=x.complete,x.complete=function(){M(x.old)&&x.old.call(this),x.queue&&p.dequeue(this,x.queue)},x},p.fn.extend({fadeTo:function(l,h,g,x){return this.filter(ot).css("opacity",0).show().end().animate({opacity:h},l,g,x)},animate:function(l,h,g,x){var b=p.isEmptyObject(l),E=p.speed(h,g,x),C=function(){var H=li(this,p.extend({},l),E);(b||q.get(this,"finish"))&&H.stop(!0)};return C.finish=C,b||E.queue===!1?this.each(C):this.queue(E.queue,C)},stop:function(l,h,g){var x=function(b){var E=b.stop;delete b.stop,E(g)};return typeof l!="string"&&(g=h,h=l,l=void 0),h&&this.queue(l||"fx",[]),this.each(function(){var b=!0,E=l!=null&&l+"queueHooks",C=p.timers,H=q.get(this);if(E)H[E]&&H[E].stop&&x(H[E]);else for(E in H)H[E]&&H[E].stop&&pa.test(E)&&x(H[E]);for(E=C.length;E--;)C[E].elem===this&&(l==null||C[E].queue===l)&&(C[E].anim.stop(g),b=!1,C.splice(E,1));(b||!g)&&p.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var h,g=q.get(this),x=g[l+"queue"],b=g[l+"queueHooks"],E=p.timers,C=x?x.length:0;for(g.finish=!0,p.queue(this,l,[]),b&&b.stop&&b.stop.call(this,!0),h=E.length;h--;)E[h].elem===this&&E[h].queue===l&&(E[h].anim.stop(!0),E.splice(h,1));for(h=0;h<C;h++)x[h]&&x[h].finish&&x[h].finish.call(this);delete g.finish})}}),p.each(["toggle","show","hide"],function(l,h){var g=p.fn[h];p.fn[h]=function(x,b,E){return x==null||typeof x=="boolean"?g.apply(this,arguments):this.animate(ps(h,!0),x,b,E)}}),p.each({slideDown:ps("show"),slideUp:ps("hide"),slideToggle:ps("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,h){p.fn[l]=function(g,x,b){return this.animate(h,g,x,b)}}),p.timers=[],p.fx.tick=function(){var l,h=0,g=p.timers;for(xi=Date.now();h<g.length;h++)l=g[h],!l()&&g[h]===l&&g.splice(h--,1);g.length||p.fx.stop(),xi=void 0},p.fx.timer=function(l){p.timers.push(l),p.fx.start()},p.fx.interval=13,p.fx.start=function(){Qt||(Qt=!0,un())},p.fx.stop=function(){Qt=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(l,h){return l=p.fx&&p.fx.speeds[l]||l,h=h||"fx",this.queue(h,function(g,x){var b=e.setTimeout(g,l);x.stop=function(){e.clearTimeout(b)}})},function(){var l=v.createElement("input"),h=v.createElement("select"),g=h.appendChild(v.createElement("option"));l.type="checkbox",S.checkOn=l.value!=="",S.optSelected=g.selected,l=v.createElement("input"),l.value="t",l.type="radio",S.radioValue=l.value==="t"}();var ku,ga=p.expr.attrHandle;p.fn.extend({attr:function(l,h){return Ze(this,p.attr,l,h,arguments.length>1)},removeAttr:function(l){return this.each(function(){p.removeAttr(this,l)})}}),p.extend({attr:function(l,h,g){var x,b,E=l.nodeType;if(!(E===3||E===8||E===2)){if(typeof l.getAttribute>"u")return p.prop(l,h,g);if((E!==1||!p.isXMLDoc(l))&&(b=p.attrHooks[h.toLowerCase()]||(p.expr.match.bool.test(h)?ku:void 0)),g!==void 0){if(g===null){p.removeAttr(l,h);return}return b&&"set"in b&&(x=b.set(l,g,h))!==void 0?x:(l.setAttribute(h,g+""),g)}return b&&"get"in b&&(x=b.get(l,h))!==null?x:(x=p.find.attr(l,h),x??void 0)}},attrHooks:{type:{set:function(l,h){if(!S.radioValue&&h==="radio"&&w(l,"input")){var g=l.value;return l.setAttribute("type",h),g&&(l.value=g),h}}}},removeAttr:function(l,h){var g,x=0,b=h&&h.match(At);if(b&&l.nodeType===1)for(;g=b[x++];)l.removeAttribute(g)}}),ku={set:function(l,h,g){return h===!1?p.removeAttr(l,g):l.setAttribute(g,g),g}},p.each(p.expr.match.bool.source.match(/\w+/g),function(l,h){var g=ga[h]||p.find.attr;ga[h]=function(x,b,E){var C,H,B=b.toLowerCase();return E||(H=ga[B],ga[B]=C,C=g(x,b,E)!=null?B:null,ga[B]=H),C}});var mm=/^(?:input|select|textarea|button)$/i,gm=/^(?:a|area)$/i;p.fn.extend({prop:function(l,h){return Ze(this,p.prop,l,h,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[p.propFix[l]||l]})}}),p.extend({prop:function(l,h,g){var x,b,E=l.nodeType;if(!(E===3||E===8||E===2))return(E!==1||!p.isXMLDoc(l))&&(h=p.propFix[h]||h,b=p.propHooks[h]),g!==void 0?b&&"set"in b&&(x=b.set(l,g,h))!==void 0?x:l[h]=g:b&&"get"in b&&(x=b.get(l,h))!==null?x:l[h]},propHooks:{tabIndex:{get:function(l){var h=p.find.attr(l,"tabindex");return h?parseInt(h,10):mm.test(l.nodeName)||gm.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(p.propHooks.selected={get:function(l){var h=l.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(l){var h=l.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){p.propFix[this.toLowerCase()]=this});function Ir(l){var h=l.match(At)||[];return h.join(" ")}function Nr(l){return l.getAttribute&&l.getAttribute("class")||""}function xl(l){return Array.isArray(l)?l:typeof l=="string"?l.match(At)||[]:[]}p.fn.extend({addClass:function(l){var h,g,x,b,E,C;return M(l)?this.each(function(H){p(this).addClass(l.call(this,H,Nr(this)))}):(h=xl(l),h.length?this.each(function(){if(x=Nr(this),g=this.nodeType===1&&" "+Ir(x)+" ",g){for(E=0;E<h.length;E++)b=h[E],g.indexOf(" "+b+" ")<0&&(g+=b+" ");C=Ir(g),x!==C&&this.setAttribute("class",C)}}):this)},removeClass:function(l){var h,g,x,b,E,C;return M(l)?this.each(function(H){p(this).removeClass(l.call(this,H,Nr(this)))}):arguments.length?(h=xl(l),h.length?this.each(function(){if(x=Nr(this),g=this.nodeType===1&&" "+Ir(x)+" ",g){for(E=0;E<h.length;E++)for(b=h[E];g.indexOf(" "+b+" ")>-1;)g=g.replace(" "+b+" "," ");C=Ir(g),x!==C&&this.setAttribute("class",C)}}):this):this.attr("class","")},toggleClass:function(l,h){var g,x,b,E,C=typeof l,H=C==="string"||Array.isArray(l);return M(l)?this.each(function(B){p(this).toggleClass(l.call(this,B,Nr(this),h),h)}):typeof h=="boolean"&&H?h?this.addClass(l):this.removeClass(l):(g=xl(l),this.each(function(){if(H)for(E=p(this),b=0;b<g.length;b++)x=g[b],E.hasClass(x)?E.removeClass(x):E.addClass(x);else(l===void 0||C==="boolean")&&(x=Nr(this),x&&q.set(this,"__className__",x),this.setAttribute&&this.setAttribute("class",x||l===!1?"":q.get(this,"__className__")||""))}))},hasClass:function(l){var h,g,x=0;for(h=" "+l+" ";g=this[x++];)if(g.nodeType===1&&(" "+Ir(Nr(g))+" ").indexOf(h)>-1)return!0;return!1}});var _m=/\r/g;p.fn.extend({val:function(l){var h,g,x,b=this[0];return arguments.length?(x=M(l),this.each(function(E){var C;this.nodeType===1&&(x?C=l.call(this,E,p(this).val()):C=l,C==null?C="":typeof C=="number"?C+="":Array.isArray(C)&&(C=p.map(C,function(H){return H==null?"":H+""})),h=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,C,"value")===void 0)&&(this.value=C))})):b?(h=p.valHooks[b.type]||p.valHooks[b.nodeName.toLowerCase()],h&&"get"in h&&(g=h.get(b,"value"))!==void 0?g:(g=b.value,typeof g=="string"?g.replace(_m,""):g??"")):void 0}}),p.extend({valHooks:{option:{get:function(l){var h=p.find.attr(l,"value");return h??Ir(p.text(l))}},select:{get:function(l){var h,g,x,b=l.options,E=l.selectedIndex,C=l.type==="select-one",H=C?null:[],B=C?E+1:b.length;for(E<0?x=B:x=C?E:0;x<B;x++)if(g=b[x],(g.selected||x===E)&&!g.disabled&&(!g.parentNode.disabled||!w(g.parentNode,"optgroup"))){if(h=p(g).val(),C)return h;H.push(h)}return H},set:function(l,h){for(var g,x,b=l.options,E=p.makeArray(h),C=b.length;C--;)x=b[C],(x.selected=p.inArray(p.valHooks.option.get(x),E)>-1)&&(g=!0);return g||(l.selectedIndex=-1),E}}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]={set:function(l,h){if(Array.isArray(h))return l.checked=p.inArray(p(l).val(),h)>-1}},S.checkOn||(p.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})});var _a=e.location,Bu={guid:Date.now()},Ml=/\?/;p.parseXML=function(l){var h,g;if(!l||typeof l!="string")return null;try{h=new e.DOMParser().parseFromString(l,"text/xml")}catch{}return g=h&&h.getElementsByTagName("parsererror")[0],(!h||g)&&p.error("Invalid XML: "+(g?p.map(g.childNodes,function(x){return x.textContent}).join(`
`):l)),h};var zu=/^(?:focusinfocus|focusoutblur)$/,Hu=function(l){l.stopPropagation()};p.extend(p.event,{trigger:function(l,h,g,x){var b,E,C,H,B,j,oe,he,ee=[g||v],ve=d.call(l,"type")?l.type:l,Je=d.call(l,"namespace")?l.namespace.split("."):[];if(E=he=C=g=g||v,!(g.nodeType===3||g.nodeType===8)&&!zu.test(ve+p.event.triggered)&&(ve.indexOf(".")>-1&&(Je=ve.split("."),ve=Je.shift(),Je.sort()),B=ve.indexOf(":")<0&&"on"+ve,l=l[p.expando]?l:new p.Event(ve,typeof l=="object"&&l),l.isTrigger=x?2:3,l.namespace=Je.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=g),h=h==null?[l]:p.makeArray(h,[l]),oe=p.event.special[ve]||{},!(!x&&oe.trigger&&oe.trigger.apply(g,h)===!1))){if(!x&&!oe.noBubble&&!y(g)){for(H=oe.delegateType||ve,zu.test(H+ve)||(E=E.parentNode);E;E=E.parentNode)ee.push(E),C=E;C===(g.ownerDocument||v)&&ee.push(C.defaultView||C.parentWindow||e)}for(b=0;(E=ee[b++])&&!l.isPropagationStopped();)he=E,l.type=b>1?H:oe.bindType||ve,j=(q.get(E,"events")||Object.create(null))[l.type]&&q.get(E,"handle"),j&&j.apply(E,h),j=B&&E[B],j&&j.apply&&k(E)&&(l.result=j.apply(E,h),l.result===!1&&l.preventDefault());return l.type=ve,!x&&!l.isDefaultPrevented()&&(!oe._default||oe._default.apply(ee.pop(),h)===!1)&&k(g)&&B&&M(g[ve])&&!y(g)&&(C=g[B],C&&(g[B]=null),p.event.triggered=ve,l.isPropagationStopped()&&he.addEventListener(ve,Hu),g[ve](),l.isPropagationStopped()&&he.removeEventListener(ve,Hu),p.event.triggered=void 0,C&&(g[B]=C)),l.result}},simulate:function(l,h,g){var x=p.extend(new p.Event,g,{type:l,isSimulated:!0});p.event.trigger(x,null,h)}}),p.fn.extend({trigger:function(l,h){return this.each(function(){p.event.trigger(l,h,this)})},triggerHandler:function(l,h){var g=this[0];if(g)return p.event.trigger(l,h,g,!0)}});var vm=/\[\]$/,Vu=/\r?\n/g,ym=/^(?:submit|button|image|reset|file)$/i,xm=/^(?:input|select|textarea|keygen)/i;function Sl(l,h,g,x){var b;if(Array.isArray(h))p.each(h,function(E,C){g||vm.test(l)?x(l,C):Sl(l+"["+(typeof C=="object"&&C!=null?E:"")+"]",C,g,x)});else if(!g&&R(h)==="object")for(b in h)Sl(l+"["+b+"]",h[b],g,x);else x(l,h)}p.param=function(l,h){var g,x=[],b=function(E,C){var H=M(C)?C():C;x[x.length]=encodeURIComponent(E)+"="+encodeURIComponent(H??"")};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!p.isPlainObject(l))p.each(l,function(){b(this.name,this.value)});else for(g in l)Sl(g,l[g],h,b);return x.join("&")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=p.prop(this,"elements");return l?p.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!p(this).is(":disabled")&&xm.test(this.nodeName)&&!ym.test(l)&&(this.checked||!Me.test(l))}).map(function(l,h){var g=p(this).val();return g==null?null:Array.isArray(g)?p.map(g,function(x){return{name:h.name,value:x.replace(Vu,`\r
`)}}):{name:h.name,value:g.replace(Vu,`\r
`)}}).get()}});var Mm=/%20/g,Sm=/#.*$/,Tm=/([?&])_=[^&]*/,bm=/^(.*?):[ \t]*([^\r\n]*)$/mg,Em=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,wm=/^(?:GET|HEAD)$/,Am=/^\/\//,Gu={},Tl={},Wu="*/".concat("*"),bl=v.createElement("a");bl.href=_a.href;function Xu(l){return function(h,g){typeof h!="string"&&(g=h,h="*");var x,b=0,E=h.toLowerCase().match(At)||[];if(M(g))for(;x=E[b++];)x[0]==="+"?(x=x.slice(1)||"*",(l[x]=l[x]||[]).unshift(g)):(l[x]=l[x]||[]).push(g)}}function ju(l,h,g,x){var b={},E=l===Tl;function C(H){var B;return b[H]=!0,p.each(l[H]||[],function(j,oe){var he=oe(h,g,x);if(typeof he=="string"&&!E&&!b[he])return h.dataTypes.unshift(he),C(he),!1;if(E)return!(B=he)}),B}return C(h.dataTypes[0])||!b["*"]&&C("*")}function El(l,h){var g,x,b=p.ajaxSettings.flatOptions||{};for(g in h)h[g]!==void 0&&((b[g]?l:x||(x={}))[g]=h[g]);return x&&p.extend(!0,l,x),l}function Rm(l,h,g){for(var x,b,E,C,H=l.contents,B=l.dataTypes;B[0]==="*";)B.shift(),x===void 0&&(x=l.mimeType||h.getResponseHeader("Content-Type"));if(x){for(b in H)if(H[b]&&H[b].test(x)){B.unshift(b);break}}if(B[0]in g)E=B[0];else{for(b in g){if(!B[0]||l.converters[b+" "+B[0]]){E=b;break}C||(C=b)}E=E||C}if(E)return E!==B[0]&&B.unshift(E),g[E]}function Cm(l,h,g,x){var b,E,C,H,B,j={},oe=l.dataTypes.slice();if(oe[1])for(C in l.converters)j[C.toLowerCase()]=l.converters[C];for(E=oe.shift();E;)if(l.responseFields[E]&&(g[l.responseFields[E]]=h),!B&&x&&l.dataFilter&&(h=l.dataFilter(h,l.dataType)),B=E,E=oe.shift(),E){if(E==="*")E=B;else if(B!=="*"&&B!==E){if(C=j[B+" "+E]||j["* "+E],!C){for(b in j)if(H=b.split(" "),H[1]===E&&(C=j[B+" "+H[0]]||j["* "+H[0]],C)){C===!0?C=j[b]:j[b]!==!0&&(E=H[0],oe.unshift(H[1]));break}}if(C!==!0)if(C&&l.throws)h=C(h);else try{h=C(h)}catch(he){return{state:"parsererror",error:C?he:"No conversion from "+B+" to "+E}}}}return{state:"success",data:h}}p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_a.href,type:"GET",isLocal:Em.test(_a.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wu,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,h){return h?El(El(l,p.ajaxSettings),h):El(p.ajaxSettings,l)},ajaxPrefilter:Xu(Gu),ajaxTransport:Xu(Tl),ajax:function(l,h){typeof l=="object"&&(h=l,l=void 0),h=h||{};var g,x,b,E,C,H,B,j,oe,he,ee=p.ajaxSetup({},h),ve=ee.context||ee,Je=ee.context&&(ve.nodeType||ve.jquery)?p(ve):p.event,bt=p.Deferred(),lt=p.Callbacks("once memory"),fn=ee.statusCode||{},nn={},Mi={},Si="canceled",vt={readyState:0,getResponseHeader:function(Et){var jt;if(B){if(!E)for(E={};jt=bm.exec(b);)E[jt[1].toLowerCase()+" "]=(E[jt[1].toLowerCase()+" "]||[]).concat(jt[2]);jt=E[Et.toLowerCase()+" "]}return jt==null?null:jt.join(", ")},getAllResponseHeaders:function(){return B?b:null},setRequestHeader:function(Et,jt){return B==null&&(Et=Mi[Et.toLowerCase()]=Mi[Et.toLowerCase()]||Et,nn[Et]=jt),this},overrideMimeType:function(Et){return B==null&&(ee.mimeType=Et),this},statusCode:function(Et){var jt;if(Et)if(B)vt.always(Et[vt.status]);else for(jt in Et)fn[jt]=[fn[jt],Et[jt]];return this},abort:function(Et){var jt=Et||Si;return g&&g.abort(jt),Ur(0,jt),this}};if(bt.promise(vt),ee.url=((l||ee.url||_a.href)+"").replace(Am,_a.protocol+"//"),ee.type=h.method||h.type||ee.method||ee.type,ee.dataTypes=(ee.dataType||"*").toLowerCase().match(At)||[""],ee.crossDomain==null){H=v.createElement("a");try{H.href=ee.url,H.href=H.href,ee.crossDomain=bl.protocol+"//"+bl.host!=H.protocol+"//"+H.host}catch{ee.crossDomain=!0}}if(ee.data&&ee.processData&&typeof ee.data!="string"&&(ee.data=p.param(ee.data,ee.traditional)),ju(Gu,ee,h,vt),B)return vt;j=p.event&&ee.global,j&&p.active++===0&&p.event.trigger("ajaxStart"),ee.type=ee.type.toUpperCase(),ee.hasContent=!wm.test(ee.type),x=ee.url.replace(Sm,""),ee.hasContent?ee.data&&ee.processData&&(ee.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ee.data=ee.data.replace(Mm,"+")):(he=ee.url.slice(x.length),ee.data&&(ee.processData||typeof ee.data=="string")&&(x+=(Ml.test(x)?"&":"?")+ee.data,delete ee.data),ee.cache===!1&&(x=x.replace(Tm,"$1"),he=(Ml.test(x)?"&":"?")+"_="+Bu.guid+++he),ee.url=x+he),ee.ifModified&&(p.lastModified[x]&&vt.setRequestHeader("If-Modified-Since",p.lastModified[x]),p.etag[x]&&vt.setRequestHeader("If-None-Match",p.etag[x])),(ee.data&&ee.hasContent&&ee.contentType!==!1||h.contentType)&&vt.setRequestHeader("Content-Type",ee.contentType),vt.setRequestHeader("Accept",ee.dataTypes[0]&&ee.accepts[ee.dataTypes[0]]?ee.accepts[ee.dataTypes[0]]+(ee.dataTypes[0]!=="*"?", "+Wu+"; q=0.01":""):ee.accepts["*"]);for(oe in ee.headers)vt.setRequestHeader(oe,ee.headers[oe]);if(ee.beforeSend&&(ee.beforeSend.call(ve,vt,ee)===!1||B))return vt.abort();if(Si="abort",lt.add(ee.complete),vt.done(ee.success),vt.fail(ee.error),g=ju(Tl,ee,h,vt),!g)Ur(-1,"No Transport");else{if(vt.readyState=1,j&&Je.trigger("ajaxSend",[vt,ee]),B)return vt;ee.async&&ee.timeout>0&&(C=e.setTimeout(function(){vt.abort("timeout")},ee.timeout));try{B=!1,g.send(nn,Ur)}catch(Et){if(B)throw Et;Ur(-1,Et)}}function Ur(Et,jt,ya,Al){var Ti,xa,bi,lr,cr,qn=jt;B||(B=!0,C&&e.clearTimeout(C),g=void 0,b=Al||"",vt.readyState=Et>0?4:0,Ti=Et>=200&&Et<300||Et===304,ya&&(lr=Rm(ee,vt,ya)),!Ti&&p.inArray("script",ee.dataTypes)>-1&&p.inArray("json",ee.dataTypes)<0&&(ee.converters["text script"]=function(){}),lr=Cm(ee,lr,vt,Ti),Ti?(ee.ifModified&&(cr=vt.getResponseHeader("Last-Modified"),cr&&(p.lastModified[x]=cr),cr=vt.getResponseHeader("etag"),cr&&(p.etag[x]=cr)),Et===204||ee.type==="HEAD"?qn="nocontent":Et===304?qn="notmodified":(qn=lr.state,xa=lr.data,bi=lr.error,Ti=!bi)):(bi=qn,(Et||!qn)&&(qn="error",Et<0&&(Et=0))),vt.status=Et,vt.statusText=(jt||qn)+"",Ti?bt.resolveWith(ve,[xa,qn,vt]):bt.rejectWith(ve,[vt,qn,bi]),vt.statusCode(fn),fn=void 0,j&&Je.trigger(Ti?"ajaxSuccess":"ajaxError",[vt,ee,Ti?xa:bi]),lt.fireWith(ve,[vt,qn]),j&&(Je.trigger("ajaxComplete",[vt,ee]),--p.active||p.event.trigger("ajaxStop")))}return vt},getJSON:function(l,h,g){return p.get(l,h,g,"json")},getScript:function(l,h){return p.get(l,void 0,h,"script")}}),p.each(["get","post"],function(l,h){p[h]=function(g,x,b,E){return M(x)&&(E=E||b,b=x,x=void 0),p.ajax(p.extend({url:g,type:h,dataType:E,data:x,success:b},p.isPlainObject(g)&&g))}}),p.ajaxPrefilter(function(l){var h;for(h in l.headers)h.toLowerCase()==="content-type"&&(l.contentType=l.headers[h]||"")}),p._evalUrl=function(l,h,g){return p.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(x){p.globalEval(x,h,g)}})},p.fn.extend({wrapAll:function(l){var h;return this[0]&&(M(l)&&(l=l.call(this[0])),h=p(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var g=this;g.firstElementChild;)g=g.firstElementChild;return g}).append(this)),this},wrapInner:function(l){return M(l)?this.each(function(h){p(this).wrapInner(l.call(this,h))}):this.each(function(){var h=p(this),g=h.contents();g.length?g.wrapAll(l):h.append(l)})},wrap:function(l){var h=M(l);return this.each(function(g){p(this).wrapAll(h?l.call(this,g):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){p(this).replaceWith(this.childNodes)}),this}}),p.expr.pseudos.hidden=function(l){return!p.expr.pseudos.visible(l)},p.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},p.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Pm={0:200,1223:204},va=p.ajaxSettings.xhr();S.cors=!!va&&"withCredentials"in va,S.ajax=va=!!va,p.ajaxTransport(function(l){var h,g;if(S.cors||va&&!l.crossDomain)return{send:function(x,b){var E,C=l.xhr();if(C.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(E in l.xhrFields)C[E]=l.xhrFields[E];l.mimeType&&C.overrideMimeType&&C.overrideMimeType(l.mimeType),!l.crossDomain&&!x["X-Requested-With"]&&(x["X-Requested-With"]="XMLHttpRequest");for(E in x)C.setRequestHeader(E,x[E]);h=function(H){return function(){h&&(h=g=C.onload=C.onerror=C.onabort=C.ontimeout=C.onreadystatechange=null,H==="abort"?C.abort():H==="error"?typeof C.status!="number"?b(0,"error"):b(C.status,C.statusText):b(Pm[C.status]||C.status,C.statusText,(C.responseType||"text")!=="text"||typeof C.responseText!="string"?{binary:C.response}:{text:C.responseText},C.getAllResponseHeaders()))}},C.onload=h(),g=C.onerror=C.ontimeout=h("error"),C.onabort!==void 0?C.onabort=g:C.onreadystatechange=function(){C.readyState===4&&e.setTimeout(function(){h&&g()})},h=h("abort");try{C.send(l.hasContent&&l.data||null)}catch(H){if(h)throw H}},abort:function(){h&&h()}}}),p.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return p.globalEval(l),l}}}),p.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),p.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var h,g;return{send:function(x,b){h=p("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",g=function(E){h.remove(),g=null,E&&b(E.type==="error"?404:200,E.type)}),v.head.appendChild(h[0])},abort:function(){g&&g()}}}});var qu=[],wl=/(=)\?(?=&|$)|\?\?/;p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=qu.pop()||p.expando+"_"+Bu.guid++;return this[l]=!0,l}}),p.ajaxPrefilter("json jsonp",function(l,h,g){var x,b,E,C=l.jsonp!==!1&&(wl.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&wl.test(l.data)&&"data");if(C||l.dataTypes[0]==="jsonp")return x=l.jsonpCallback=M(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,C?l[C]=l[C].replace(wl,"$1"+x):l.jsonp!==!1&&(l.url+=(Ml.test(l.url)?"&":"?")+l.jsonp+"="+x),l.converters["script json"]=function(){return E||p.error(x+" was not called"),E[0]},l.dataTypes[0]="json",b=e[x],e[x]=function(){E=arguments},g.always(function(){b===void 0?p(e).removeProp(x):e[x]=b,l[x]&&(l.jsonpCallback=h.jsonpCallback,qu.push(x)),E&&M(b)&&b(E[0]),E=b=void 0}),"script"}),S.createHTMLDocument=function(){var l=v.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),p.parseHTML=function(l,h,g){if(typeof l!="string")return[];typeof h=="boolean"&&(g=h,h=!1);var x,b,E;return h||(S.createHTMLDocument?(h=v.implementation.createHTMLDocument(""),x=h.createElement("base"),x.href=v.location.href,h.head.appendChild(x)):h=v),b=re.exec(l),E=!g&&[],b?[h.createElement(b[1])]:(b=On([l],h,E),E&&E.length&&p(E).remove(),p.merge([],b.childNodes))},p.fn.load=function(l,h,g){var x,b,E,C=this,H=l.indexOf(" ");return H>-1&&(x=Ir(l.slice(H)),l=l.slice(0,H)),M(h)?(g=h,h=void 0):h&&typeof h=="object"&&(b="POST"),C.length>0&&p.ajax({url:l,type:b||"GET",dataType:"html",data:h}).done(function(B){E=arguments,C.html(x?p("<div>").append(p.parseHTML(B)).find(x):B)}).always(g&&function(B,j){C.each(function(){g.apply(this,E||[B.responseText,j,B])})}),this},p.expr.pseudos.animated=function(l){return p.grep(p.timers,function(h){return l===h.elem}).length},p.offset={setOffset:function(l,h,g){var x,b,E,C,H,B,j,oe=p.css(l,"position"),he=p(l),ee={};oe==="static"&&(l.style.position="relative"),H=he.offset(),E=p.css(l,"top"),B=p.css(l,"left"),j=(oe==="absolute"||oe==="fixed")&&(E+B).indexOf("auto")>-1,j?(x=he.position(),C=x.top,b=x.left):(C=parseFloat(E)||0,b=parseFloat(B)||0),M(h)&&(h=h.call(l,g,p.extend({},H))),h.top!=null&&(ee.top=h.top-H.top+C),h.left!=null&&(ee.left=h.left-H.left+b),"using"in h?h.using.call(l,ee):he.css(ee)}},p.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(b){p.offset.setOffset(this,l,b)});var h,g,x=this[0];if(x)return x.getClientRects().length?(h=x.getBoundingClientRect(),g=x.ownerDocument.defaultView,{top:h.top+g.pageYOffset,left:h.left+g.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var l,h,g,x=this[0],b={top:0,left:0};if(p.css(x,"position")==="fixed")h=x.getBoundingClientRect();else{for(h=this.offset(),g=x.ownerDocument,l=x.offsetParent||g.documentElement;l&&(l===g.body||l===g.documentElement)&&p.css(l,"position")==="static";)l=l.parentNode;l&&l!==x&&l.nodeType===1&&(b=p(l).offset(),b.top+=p.css(l,"borderTopWidth",!0),b.left+=p.css(l,"borderLeftWidth",!0))}return{top:h.top-b.top-p.css(x,"marginTop",!0),left:h.left-b.left-p.css(x,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&p.css(l,"position")==="static";)l=l.offsetParent;return l||Be})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,h){var g=h==="pageYOffset";p.fn[l]=function(x){return Ze(this,function(b,E,C){var H;if(y(b)?H=b:b.nodeType===9&&(H=b.defaultView),C===void 0)return H?H[h]:b[E];H?H.scrollTo(g?H.pageXOffset:C,g?C:H.pageYOffset):b[E]=C},l,x,arguments.length)}}),p.each(["top","left"],function(l,h){p.cssHooks[h]=et(S.pixelPosition,function(g,x){if(x)return x=rt(g,h),ue.test(x)?p(g).position()[h]+"px":x})}),p.each({Height:"height",Width:"width"},function(l,h){p.each({padding:"inner"+l,content:h,"":"outer"+l},function(g,x){p.fn[x]=function(b,E){var C=arguments.length&&(g||typeof b!="boolean"),H=g||(b===!0||E===!0?"margin":"border");return Ze(this,function(B,j,oe){var he;return y(B)?x.indexOf("outer")===0?B["inner"+l]:B.document.documentElement["client"+l]:B.nodeType===9?(he=B.documentElement,Math.max(B.body["scroll"+l],he["scroll"+l],B.body["offset"+l],he["offset"+l],he["client"+l])):oe===void 0?p.css(B,j,H):p.style(B,j,oe,H)},h,C?b:void 0,C)}})}),p.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,h){p.fn[h]=function(g){return this.on(h,g)}}),p.fn.extend({bind:function(l,h,g){return this.on(l,null,h,g)},unbind:function(l,h){return this.off(l,null,h)},delegate:function(l,h,g,x){return this.on(h,l,g,x)},undelegate:function(l,h,g){return arguments.length===1?this.off(l,"**"):this.off(h,l||"**",g)},hover:function(l,h){return this.mouseenter(l).mouseleave(h||l)}}),p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,h){p.fn[h]=function(g,x){return arguments.length>0?this.on(h,null,g,x):this.trigger(h)}});var Lm=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;p.proxy=function(l,h){var g,x,b;if(typeof h=="string"&&(g=l[h],h=l,l=g),!!M(l))return x=r.call(arguments,2),b=function(){return l.apply(h||this,x.concat(r.call(arguments)))},b.guid=l.guid=l.guid||p.guid++,b},p.holdReady=function(l){l?p.readyWait++:p.ready(!0)},p.isArray=Array.isArray,p.parseJSON=JSON.parse,p.nodeName=w,p.isFunction=M,p.isWindow=y,p.camelCase=It,p.type=R,p.now=Date.now,p.isNumeric=function(l){var h=p.type(l);return(h==="number"||h==="string")&&!isNaN(l-parseFloat(l))},p.trim=function(l){return l==null?"":(l+"").replace(Lm,"$1")};var Dm=e.jQuery,Im=e.$;return p.noConflict=function(l){return e.$===p&&(e.$=Im),l&&e.jQuery===p&&(e.jQuery=Dm),p},typeof t>"u"&&(e.jQuery=e.$=p),p})})(ud);var Gm=ud.exports;const Te=Vm(Gm);function $i(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fd(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},iu,yn,qt,ni=1e8,Ot=1/ni,wc=Math.PI*2,Wm=wc/4,Xm=0,hd=Math.sqrt,jm=Math.cos,qm=Math.sin,cn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},rr=function(e){return typeof e=="number"},ru=function(e){return typeof e>"u"},Di=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},su=function(){return typeof window<"u"},go=function(e){return Yt(e)||cn(e)},dd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,Ac=/(?:-?\.?\d|\.)+/gi,pd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,md=/[+-]=-?[.\d]+/,gd=/[^,'"\[\]\s]+/gi,Ym=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Qn,Rc,au,jn={},$o={},_d,vd=function(e){return($o=as(e,jn))&&Un},ou=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Zo=function(e,t){return!t&&console.warn(e)},yd=function(e,t){return e&&(jn[e]=t)&&$o&&($o[e]=t)||jn},Va=function(){return 0},Km={suppressEvents:!0,isStart:!0,kill:!1},Vo={suppressEvents:!0,kill:!1},$m={suppressEvents:!0},lu={},br=[],Cc={},xd,Hn={},Ul={},Zu=30,Go=[],cu="",uu=function(e){var t=e[0],n,i;if(Di(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Go.length;i--&&!Go[i].targetTest(t););n=Go[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wd(e[i],n)))||e.splice(i,1);return e},Qr=function(e){return e._gsap||uu(ii(e))[0]._gsap},Md=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():ru(n)&&e.getAttribute&&e.getAttribute(t)||n},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},hn=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Zm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Qo=function(){var e=br.length,t=br.slice(0),n,i;for(Cc={},br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sd=function(e,t,n,i){br.length&&!yn&&Qo(),e.render(t,n,i||yn&&t<0&&(e._initted||e._startAt)),br.length&&!yn&&Qo()},Td=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gd).length<2?t:cn(e)?e.trim():e},bd=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},as=function(e,t){for(var n in t)e[n]=t[n];return e},Qu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Di(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Jo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Oa=function(e){var t=e.parent||Ht,n=e.keyframes?Qm(xn(e.keyframes)):si;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ed=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ul=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},eg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pc=function(e,t,n,i){return e._startAt&&(yn?e._startAt.revert(Vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},tg=function s(e){return!e||e._ts&&s(e.parent)},Ju=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},el=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fl=function(e){return e._end=hn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=hn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fl(e),n._dirty||Jr(n,e)),e},wd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=el(e.rawTime(),t),(!t._dur||to(0,t.totalDuration(),n)-t._tTime>Ot)&&t.render(n,!0)),Jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ot}},Ai=function(e,t,n,i){return t.parent&&Rr(t),t._start=hn((rr(n)?n:n||e!==Ht?Zn(e,n,t):e._time)+t._delay),t._end=hn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ed(e,t,"_first","_last",e._sort?"_start":0),Lc(t)||(e._recent=t),i||wd(e,t),e._ts<0&&hl(e,e._tTime),e},Ad=function(e,t){return(jn.ScrollTrigger||ou("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},Rd=function(e,t,n,i,r){if(hu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xd!==Vn.frame)return br.push(e),e._lazy=[r,i],1},ng=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Lc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ig=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&ng(e)&&!(!e._initted&&Lc(e))||(e._ts<0||e._dp._ts<0)&&!Lc(e))?0:1,o=e._rDelay,c=0,u,f,d;if(o&&e._repeat&&(c=to(0,e._tDur,t),f=Ks(c,o),e._yoyo&&f&1&&(a=1-a),f!==Ks(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||yn||i||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&Rd(e,t,i,n,c))return;for(d=e._zTime,e._zTime=t||(n?Ot:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Pc(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Rr(e,1),!n&&!yn&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$s=function(e,t,n,i){var r=e._repeat,a=hn(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:hn(a*(r+1)+e._rDelay*r):a,o>0&&!i&&hl(e,e._tTime=e._tDur*o),e.parent&&fl(e),n||Jr(e.parent,e),e},ef=function(e){return e instanceof Pn?Jr(e):$s(e,e._dur)},sg={_start:0,endTime:Va,totalDuration:Va},Zn=function s(e,t,n){var i=e.labels,r=e._recent||sg,a=e.duration()>=ni?r.endTime(!1):e._dur,o,c,u;return cn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&n&&(c=c/100*(xn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Fa=function(e,t,n){var i=rr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Ln(c.vars.inherit)&&c.parent;a.immediateRender=Ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new en(t[0],a,t[r+1])},Pr=function(e,t){return e||e===0?t(e):t},to=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!cn(e)||!(t=Ym.exec(e))?"":t[1]},ag=function(e,t,n){return Pr(n,function(i){return to(e,t,i)})},Dc=[].slice,Cd=function(e,t){return e&&Di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Di(e[0]))&&!e.nodeType&&e!==Qn},og=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return cn(i)&&!t||Cd(i,1)?(r=n).push.apply(r,ii(i)):n.push(i)})||n},ii=function(e,t,n){return qt&&!t&&qt.selector?qt.selector(e):cn(e)&&!n&&(Rc||!Zs())?Dc.call((t||au).querySelectorAll(e),0):xn(e)?og(e,n):Cd(e)?Dc.call(e,0):e?[e]:[]},Ic=function(e){return e=ii(e)[0]||Zo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?Zo("Invalid scope")||au.createElement("div"):e)}},Pd=function(e){return e.sort(function(){return .5-Math.random()})},Ld=function(e){if(Yt(e))return e;var t=Di(e)?e:{each:e},n=es(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,u=t.axis,f=i,d=i;return cn(i)?f=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(f=i[0],d=i[1]),function(m,_,S){var M=(S||t).length,y=a[M],v,A,T,R,P,D,p,O,w;if(!y){if(w=t.grid==="auto"?0:(t.grid||[1,ni])[1],!w){for(p=-ni;p<(p=S[w++].getBoundingClientRect().left)&&w<M;);w--}for(y=a[M]=[],v=c?Math.min(w,M)*f-.5:i%w,A=w===ni?0:c?M*d/w-.5:i/w|0,p=0,O=ni,D=0;D<M;D++)T=D%w-v,R=A-(D/w|0),y[D]=P=u?Math.abs(u==="y"?R:T):hd(T*T+R*R),P>p&&(p=P),P<O&&(O=P);i==="random"&&Pd(y),y.max=p-O,y.min=O,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(w>M?M-1:u?u==="y"?M/w:w:Math.max(w,M/w))||0)*(i==="edges"?-1:1),y.b=M<0?r-M:r,y.u=vn(t.amount||t.each)||0,n=n&&M<0?Hd(n):n}return M=(y[m]-y.min)/y.max||0,hn(y.b+(n?n(M):M)*y.v)+y.u}},Nc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=hn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(rr(n)?0:vn(n))}},Dd=function(e,t){var n=xn(e),i,r;return!n&&Di(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(r=!rr(e[0]))&&(i*=i)):e=Nc(e.increment)),Pr(t,n?Yt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),u=ni,f=0,d=e.length,m,_;d--;)r?(m=e[d].x-o,_=e[d].y-c,m=m*m+_*_):m=Math.abs(e[d]-o),m<u&&(u=m,f=d);return f=!i||u<=i?e[f]:a,r||f===a||rr(a)?f:f+vn(a)}:Nc(e))},Id=function(e,t,n,i){return Pr(xn(e)?!t:n===!0?!!(n=0):!i,function(){return xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},lg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},cg=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},ug=function(e,t,n){return Ud(e,t,0,1,n)},Nd=function(e,t,n){return Pr(n,function(i){return e[~~t(i)]})},fg=function s(e,t,n){var i=t-e;return xn(e)?Nd(e,s(0,e.length),t):Pr(n,function(r){return(i+(r-e)%i)%i+e})},hg=function s(e,t,n){var i=t-e,r=i*2;return xn(e)?Nd(e,s(0,e.length-1),t):Pr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ga=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?gd:Ac),n+=e.substr(t,i-t)+Id(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ud=function(e,t,n,i,r){var a=t-e,o=i-n;return Pr(r,function(c){return n+((c-e)/a*o||0)})},dg=function s(e,t,n,i){var r=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!r){var a=cn(e),o={},c,u,f,d,m;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(f=[],d=e.length,m=d-2,u=1;u<d;u++)f.push(s(e[u-1],e[u]));d--,r=function(S){S*=d;var M=Math.min(m,~~S);return f[M](S-M)},n=t}else i||(e=as(xn(e)?[]:{},e));if(!f){for(c in t)fu.call(o,e,c,"get",t[c]);r=function(S){return mu(S,o)||(a?e.p:e)}}}return Pr(n,r)},tf=function(e,t,n){var i=e.labels,r=ni,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},ri=function(e,t,n){var i=e.vars,r=i[t],a=qt,o=e._ctx,c,u,f;if(r)return c=i[t+"Params"],u=i.callbackScope||e,n&&br.length&&Qo(),o&&(qt=o),f=c?r.apply(u,c):r.call(u),qt=a,f},La=function(e){return Rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&ri(e,"onInterrupt"),e},Bs,Od=[],Fd=function(e){if(su()&&e){e=!e.name&&e.default||e;var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Va,render:mu,add:fu,kill:Cg,modifier:Rg,rawVars:0},a={targetTest:0,get:0,getSetter:pu,aliases:{},register:0};if(Zs(),e!==i){if(Hn[t])return;si(i,si(Jo(e,r),a)),as(i.prototype,as(r,Jo(e,a))),Hn[i.prop=t]=i,e.targetTest&&(Go.push(i),lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yd(t,i),e.register&&e.register(Un,i,In)}else e&&Od.push(e)},Nt=255,Da={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Ol=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Nt+.5|0},kd=function(e,t,n){var i=e?rr(e)?[e>>16,e>>8&Nt,e&Nt]:0:Da.black,r,a,o,c,u,f,d,m,_,S;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Da[e])i=Da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Nt,i&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)==="hsl"){if(i=S=e.match(Ac),!t)c=+i[0]%360/360,u=+i[1]/100,f=+i[2]/100,a=f<=.5?f*(u+1):f+u-f*u,r=f*2-a,i.length>3&&(i[3]*=1),i[0]=Ol(c+1/3,r,a),i[1]=Ol(c,r,a),i[2]=Ol(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(pd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ac)||Da.transparent;i=i.map(Number)}return t&&!S&&(r=i[0]/Nt,a=i[1]/Nt,o=i[2]/Nt,d=Math.max(r,a,o),m=Math.min(r,a,o),f=(d+m)/2,d===m?c=u=0:(_=d-m,u=f>.5?_/(2-d-m):_/(d+m),c=d===r?(a-o)/_+(a<o?6:0):d===a?(o-r)/_+2:(r-a)/_+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Bd=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(r){var a=r.match(ks)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},nf=function(e,t,n){var i="",r=(e+i).match(Er),a=t?"hsla(":"rgba(",o=0,c,u,f,d;if(!r)return e;if(r=r.map(function(m){return(m=kd(m,t,1))&&a+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(f=Bd(e),c=n.c,c.join(i)!==f.c.join(i)))for(u=e.replace(Er,"1").split(ks),d=u.length-1;o<d;o++)i+=u[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(f.length?f:r.length?r:n).shift());if(!u)for(u=e.split(Er),d=u.length-1;o<d;o++)i+=u[o]+r[o];return i+u[d]},Er=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Da)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),pg=/hsl[a]?\(/,zd=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=pg.test(t),e[1]=nf(e[1],n),e[0]=nf(e[0],n,Bd(e[1])),!0},Wa,Vn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,u,f,d,m,_,S=function M(y){var v=s()-i,A=y===!0,T,R,P,D;if(v>e&&(n+=v-t),i+=v,P=i-n,T=P-a,(T>0||A)&&(D=++d.frame,m=P-d.time*1e3,d.time=P=P/1e3,a+=T+(T>=r?4:r-T),R=1),A||(c=u(M)),R)for(_=0;_<o.length;_++)o[_](P,m,D,y)};return d={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(y){return m/(1e3/(y||60))},wake:function(){_d&&(!Rc&&su()&&(Qn=Rc=window,au=Qn.document||{},jn.gsap=Un,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(Un.version),vd($o||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),f=Qn.requestAnimationFrame,Od.forEach(Fd)),c&&d.sleep(),u=f||function(y){return setTimeout(y,a-d.time*1e3+1|0)},Wa=1,S(2))},sleep:function(){(f?Qn.cancelAnimationFrame:clearTimeout)(c),Wa=0,u=Va},lagSmoothing:function(y,v){e=y||1/0,t=Math.min(v||33,e)},fps:function(y){r=1e3/(y||240),a=d.time*1e3+r},add:function(y,v,A){var T=v?function(R,P,D,p){y(R,P,D,p),d.remove(T)}:y;return d.remove(y),o[A?"unshift":"push"](T),Zs(),T},remove:function(y,v){~(v=o.indexOf(y))&&o.splice(v,1)&&_>=v&&_--},_listeners:o},d}(),Zs=function(){return!Wa&&Vn.wake()},Tt={},mg=/^[\d.\-M][\d.\-,\s]/,gg=/["']/g,_g=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,u;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,u=c.substr(0,o),t[i]=isNaN(u)?u.replace(gg,"").trim():+u,i=c.substr(o+1).trim();return t},vg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yg=function(e){var t=(e+"").split("("),n=Tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_g(t[1])]:vg(e).split(",").map(Td)):Tt._CE&&mg.test(e)?Tt._CE("",e):n},Hd=function(e){return function(t){return 1-e(1-t)}},Vd=function s(e,t){for(var n=e._first,i;n;)n instanceof Pn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},es=function(e,t){return e&&(Yt(e)?e:Tt[e]||yg(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Dn(e,function(o){Tt[o]=jn[o]=r,Tt[a=o.toLowerCase()]=n;for(var c in r)Tt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Tt[o+"."+c]=r[c]}),r},Gd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/wc*(Math.asin(1/i)||0),o=function(f){return f===1?1:i*Math.pow(2,-10*f)*qm((f-a)*r)+1},c=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:Gd(o);return r=wc/r,c.config=function(u,f){return s(e,u,f)},c},kl=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Gd(n);return i.config=function(r){return s(e,r)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;us(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;us("Elastic",Fl("in"),Fl("out"),Fl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);us("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});us("Circ",function(s){return-(hd(1-s*s)-1)});us("Sine",function(s){return s===1?1:-jm(s*Wm)+1});us("Back",kl("in"),kl("out"),kl());Tt.SteppedEase=Tt.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ot;return function(o){return((i*to(0,a,o)|0)+r)*n}}};Ys.ease=Tt["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return cu+=s+","+s+"Params,"});var Wd=function(e,t){this.id=Xm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Md,this.set=t?t.getSetter:pu},Xa=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$s(this,+t.duration,1,1),this.data=t.data,qt&&(this._ctx=qt,qt.data.push(this)),Wa||Vn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(hl(this,n),!r._dp||r.parent||wd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ju(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ju(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ks(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ot?0:this._rts,this.totalTime(to(-Math.abs(this._delay),this._tDur,i),!0),fl(this),eg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$m);var i=yn;return yn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ef(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ef(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ot)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Yt(n)?n:bd,o=function(){var u=i.then;i.then=null,Yt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),r(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){La(this)},s}();si(Xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var Pn=function(s){fd(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ln(n.sortChildren),Ht&&Ai(n.parent||Ht,$i(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ad($i(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Fa(0,arguments,this),this},t.from=function(i,r,a){return Fa(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Fa(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Oa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new en(i,r,Zn(this,a),1),this},t.call=function(i,r,a){return Ai(this,en.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,u,f){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=f,a.parent=this,new en(i,a,Zn(this,c)),this},t.staggerFrom=function(i,r,a,o,c,u,f){return a.runBackwards=1,Oa(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,r,a,o,c,u,f)},t.staggerFromTo=function(i,r,a,o,c,u,f,d){return o.startAt=a,Oa(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,r,o,c,u,f,d)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,f=i<=0?0:hn(i),d=this._zTime<0!=i<0&&(this._initted||!u),m,_,S,M,y,v,A,T,R,P,D,p;if(this!==Ht&&f>c&&i>=0&&(f=c),f!==this._tTime||a||d){if(o!==this._time&&u&&(f+=this._time-o,i+=this._time-o),m=f,R=this._start,T=this._ts,v=!T,d&&(u||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,y=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(y*100+i,r,a);if(m=hn(f%y),f===c?(M=this._repeat,m=u):(M=~~(f/y),M&&M===f/y&&(m=u,M--),m>u&&(m=u)),P=Ks(this._tTime,y),!o&&this._tTime&&P!==M&&this._tTime-P*y-this._dur<=0&&(P=M),D&&M&1&&(m=u-m,p=1),M!==P&&!this._lock){var O=D&&P&1,w=O===(D&&M&1);if(M<P&&(O=!O),o=O?0:f%u?u:f,this._lock=1,this.render(o||(p?0:hn(M*y)),r,!u)._lock=0,this._tTime=f,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,w&&(this._lock=2,o=O?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Vd(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=rg(this,hn(o),hn(m)),A&&(f-=m-(m=A._start))),this._tTime=f,this._time=m,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&m&&!r&&!M&&(ri(this,"onStart"),this._tTime!==f))return this;if(m>=o&&i>=0)for(_=this._first;_;){if(S=_._next,(_._act||m>=_._start)&&_._ts&&A!==_){if(_.parent!==this)return this.render(i,r,a);if(_.render(_._ts>0?(m-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(m-_._start)*_._ts,r,a),m!==this._time||!this._ts&&!v){A=0,S&&(f+=this._zTime=-Ot);break}}_=S}else{_=this._last;for(var F=i<0?i:m;_;){if(S=_._prev,(_._act||F<=_._end)&&_._ts&&A!==_){if(_.parent!==this)return this.render(i,r,a);if(_.render(_._ts>0?(F-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(F-_._start)*_._ts,r,a||yn&&(_._initted||_._startAt)),m!==this._time||!this._ts&&!v){A=0,S&&(f+=this._zTime=F?-Ot:Ot);break}}_=S}}if(A&&!r&&(this.pause(),A.render(m>=o?0:-Ot)._zTime=m>=o?1:-1,this._ts))return this._start=R,fl(this),this.render(i,r,a);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(f===c&&this._tTime>=this.totalDuration()||!f&&o)&&(R===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(f===c&&this._ts>0||!f&&this._ts<0)&&Rr(this,1),!r&&!(i<0&&!o)&&(f||o||!c)&&(ri(this,f===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(rr(r)||(r=Zn(this,r,i)),!(i instanceof Xa)){if(xn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(cn(i))return this.addLabel(i,r);if(Yt(i))i=en.delayedCall(0,i);else return this}return this!==i?Ai(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var c=[],u=this._first;u;)u._start>=o&&(u instanceof en?r&&c.push(u):(a&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,r,a)))),u=u._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return cn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(ul(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=hn(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=en.delayedCall(0,r||Va,a);return o.data="isPause",this._hasPause=1,Ai(this,o,Zn(this,i))},t.removePause=function(i){var r=this._first;for(i=Zn(this,i);r;)r._start===i&&r.data==="isPause"&&Rr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)yr!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=ii(i),c=this._first,u=rr(r),f;c;)c instanceof en?Zm(c._targets,o)&&(u?(!yr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(f=c.getTweensOf(o,r)).length&&a.push.apply(a,f),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Zn(a,i),c=r,u=c.startAt,f=c.onStart,d=c.onStartParams,m=c.immediateRender,_,S=en.to(a,si({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||Ot,onStart:function(){if(a.pause(),!_){var y=r.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());S._dur!==y&&$s(S,y,0,1).render(S._time,!0,!0),_=1}f&&f.apply(S,d||[])}},r));return m?S.render(0):S},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,si({startAt:{time:Zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),tf(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),tf(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,u;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(u in c)c[u]>=a&&(c[u]+=i);return Jr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=ni,u,f,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ai(a,o,f-o._delay,1)._lock=0):c=f,f<0&&o._ts&&(r-=f,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=f/a._ts,a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=u;$s(a,a===Ht&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ht._ts&&(Sd(Ht,el(i,Ht)),xd=Vn.frame),Vn.frame>=Zu){Zu+=Xn.autoSleep||120;var r=Ht._first;if((!r||!r._ts)&&Xn.autoSleep&&Vn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Vn.sleep()}}},e}(Xa);si(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var xg=function(e,t,n,i,r,a,o){var c=new In(this._pt,e,t,0,1,$d,null,r),u=0,f=0,d,m,_,S,M,y,v,A;for(c.b=n,c.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=Ga(i)),a&&(A=[n,i],a(A,e,t),n=A[0],i=A[1]),m=n.match(Nl)||[];d=Nl.exec(i);)S=d[0],M=i.substring(u,d.index),_?_=(_+1)%5:M.substr(-5)==="rgba("&&(_=1),S!==m[f++]&&(y=parseFloat(m[f-1])||0,c._pt={_next:c._pt,p:M||f===1?M:",",s:y,c:S.charAt(1)==="="?Hs(y,S)-y:parseFloat(S)-y,m:_&&_<4?Math.round:0},u=Nl.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=o,(md.test(i)||v)&&(c.e=0),this._pt=c,c},fu=function(e,t,n,i,r,a,o,c,u,f){Yt(i)&&(i=i(r||0,e,a));var d=e[t],m=n!=="get"?n:Yt(d)?u?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,_=Yt(d)?u?Eg:Yd:du,S;if(cn(i)&&(~i.indexOf("random(")&&(i=Ga(i)),i.charAt(1)==="="&&(S=Hs(m,i)+(vn(m)||0),(S||S===0)&&(i=S))),!f||m!==i||Uc)return!isNaN(m*i)&&i!==""?(S=new In(this._pt,e,t,+m||0,i-(m||0),typeof d=="boolean"?Ag:Kd,0,_),u&&(S.fp=u),o&&S.modifier(o,this,e),this._pt=S):(!d&&!(t in e)&&ou(t,i),xg.call(this,e,t,m,i,_,c||Xn.stringFilter,u))},Mg=function(e,t,n,i,r){if(Yt(e)&&(e=ka(e,r,t,n,i)),!Di(e)||e.style&&e.nodeType||xn(e)||dd(e))return cn(e)?ka(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ka(e[o],r,t,n,i);return a},Xd=function(e,t,n,i,r,a){var o,c,u,f;if(Hn[e]&&(o=new Hn[e]).init(r,o.rawVars?t[e]:Mg(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new In(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Bs))for(u=n._ptLookup[n._targets.indexOf(r)],f=o._props.length;f--;)u[o._props[f]]=c;return o},yr,Uc,hu=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,u=i.onUpdate,f=i.onUpdateParams,d=i.callbackScope,m=i.runBackwards,_=i.yoyoEase,S=i.keyframes,M=i.autoRevert,y=e._dur,v=e._startAt,A=e._targets,T=e.parent,R=T&&T.data==="nested"?T.vars.targets:A,P=e._overwrite==="auto"&&!iu,D=e.timeline,p,O,w,F,te,G,I,z,W,$,K,ie,ce;if(D&&(!S||!r)&&(r="none"),e._ease=es(r,Ys.ease),e._yEase=_?Hd(es(_===!0?r:_,Ys.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!D&&!!i.runBackwards,!D||S&&!i.stagger){if(z=A[0]?Qr(A[0]).harness:0,ie=z&&i[z.prop],p=Jo(i,lu),v&&(v._zTime<0&&v.progress(1),t<0&&m&&o&&!M?v.render(-1,!0):v.revert(m&&y?Vo:Km),v._lazy=0),a){if(Rr(e._startAt=en.set(A,si({data:"isStart",overwrite:!1,parent:T,immediateRender:!0,lazy:!v&&Ln(c),startAt:null,delay:0,onUpdate:u,onUpdateParams:f,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!o&&!M)&&e._startAt.revert(Vo),o&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(m&&y&&!v){if(t&&(o=!1),w=si({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Ln(c),immediateRender:o,stagger:0,parent:T},p),ie&&(w[z.prop]=ie),Rr(e._startAt=en.set(A,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Vo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,c=y&&Ln(c)||c&&!y,O=0;O<A.length;O++){if(te=A[O],I=te._gsap||uu(A)[O]._gsap,e._ptLookup[O]=$={},Cc[I.id]&&br.length&&Qo(),K=R===A?O:R.indexOf(te),z&&(W=new z).init(te,ie||p,e,K,R)!==!1&&(e._pt=F=new In(e._pt,te,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(pe){$[pe]=F}),W.priority&&(G=1)),!z||ie)for(w in p)Hn[w]&&(W=Xd(w,p,e,K,te,R))?W.priority&&(G=1):$[w]=F=fu.call(e,te,w,"get",p[w],K,R,0,i.stringFilter);e._op&&e._op[O]&&e.kill(te,e._op[O]),P&&e._pt&&(yr=e,Ht.killTweensOf(te,$,e.globalTime(t)),ce=!e.parent,yr=0),e._pt&&c&&(Cc[I.id]=1)}G&&Zd(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ce,S&&t<=0&&D.render(ni,!0,!0)},Sg=function(e,t,n,i,r,a,o){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uc=1,e.vars[t]="+=0",hu(e,o),Uc=0,1;c.push(u)}for(m=c.length;m--;)f=c[m],u=f._pt||f,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=$t(n)+vn(f.e)),f.b&&(f.b=u.s+vn(f.b))},Tg=function(e,t){var n=e[0]?Qr(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=as({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},bg=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(xn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,u){return o.push({t:u/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ka=function(e,t,n,i,r){return Yt(e)?e.call(t,n,i,r):cn(e)&&~e.indexOf("random(")?Ga(e):e},jd=cu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qd={};Dn(jd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return qd[s]=1});var en=function(s){fd(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Oa(i))||this;var c=o.vars,u=c.duration,f=c.delay,d=c.immediateRender,m=c.stagger,_=c.overwrite,S=c.keyframes,M=c.defaults,y=c.scrollTrigger,v=c.yoyoEase,A=i.parent||Ht,T=(xn(n)||dd(n)?rr(n[0]):"length"in i)?[n]:ii(n),R,P,D,p,O,w,F,te;if(o._targets=T.length?uu(T):Zo("GSAP target "+n+" not found. https://greensock.com",!Xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=_,S||m||go(u)||go(f)){if(i=o.vars,R=o.timeline=new Pn({data:"nested",defaults:M||{},targets:A&&A.data==="nested"?A.vars.targets:T}),R.kill(),R.parent=R._dp=$i(o),R._start=0,m||go(u)||go(f)){if(p=T.length,F=m&&Ld(m),Di(m))for(O in m)~jd.indexOf(O)&&(te||(te={}),te[O]=m[O]);for(P=0;P<p;P++)D=Jo(i,qd),D.stagger=0,v&&(D.yoyoEase=v),te&&as(D,te),w=T[P],D.duration=+ka(u,$i(o),P,w,T),D.delay=(+ka(f,$i(o),P,w,T)||0)-o._delay,!m&&p===1&&D.delay&&(o._delay=f=D.delay,o._start+=f,D.delay=0),R.to(w,D,F?F(P,w,T):0),R._ease=Tt.none;R.duration()?u=f=0:o.timeline=0}else if(S){Oa(si(R.vars.defaults,{ease:"none"})),R._ease=es(S.ease||i.ease||"none");var G=0,I,z,W;if(xn(S))S.forEach(function($){return R.to(T,$,">")}),R.duration();else{D={};for(O in S)O==="ease"||O==="easeEach"||bg(O,S[O],D,S.easeEach);for(O in D)for(I=D[O].sort(function($,K){return $.t-K.t}),G=0,P=0;P<I.length;P++)z=I[P],W={ease:z.e,duration:(z.t-(P?I[P-1].t:0))/100*u},W[O]=z.v,R.to(T,W,G),G+=W.duration;R.duration()<u&&R.to({},{duration:u-R.duration()})}}u||o.duration(u=R.duration())}else o.timeline=0;return _===!0&&!iu&&(yr=$i(o),Ht.killTweensOf(T),yr=0),Ai(A,$i(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!u&&!S&&o._start===hn(A._time)&&Ln(d)&&tg($i(o))&&A.data!=="nested")&&(o._tTime=-Ot,o.render(Math.max(0,-f)||0)),y&&Ad($i(o),y),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,u=this._dur,f=i<0,d=i>c-Ot&&!f?c:i<Ot?0:i,m,_,S,M,y,v,A,T,R;if(!u)ig(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(m=d,T=this.timeline,this._repeat){if(M=u+this._rDelay,this._repeat<-1&&f)return this.totalTime(M*100+i,r,a);if(m=hn(d%M),d===c?(S=this._repeat,m=u):(S=~~(d/M),S&&S===d/M&&(m=u,S--),m>u&&(m=u)),v=this._yoyo&&S&1,v&&(R=this._yEase,m=u-m),y=Ks(this._tTime,M),m===o&&!a&&this._initted)return this._tTime=d,this;S!==y&&(T&&this._yEase&&Vd(T,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=a=1,this.render(hn(M*S),!0).invalidate()._lock=0))}if(!this._initted){if(Rd(this,f?i:m,a,r,d))return this._tTime=0,this;if(o!==this._time)return this;if(u!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(R||this._ease)(m/u),this._from&&(this.ratio=A=1-A),m&&!o&&!r&&!S&&(ri(this,"onStart"),this._tTime!==d))return this;for(_=this._pt;_;)_.r(A,_.d),_=_._next;T&&T.render(i<0?i:!m&&v?-Ot:T._dur*T._ease(m/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(f&&Pc(this,i,r,a),ri(this,"onUpdate")),this._repeat&&S!==y&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&Pc(this,i,!0,!0),(i||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Rr(this,1),!r&&!(f&&!o)&&(d||o||v)&&(ri(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Wa||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hu(this,c),u=this._ease(c/this._dur),Sg(this,i,r,a,o,u,c)?this.resetTo(i,r,a,o):(hl(this,0),this.parent||Ed(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?La(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,yr&&yr.vars.overwrite!==!0)._first||La(this),this.parent&&a!==this.timeline.totalDuration()&&$s(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?ii(i):o,u=this._ptLookup,f=this._pt,d,m,_,S,M,y,v;if((!r||r==="all")&&Jm(o,c))return r==="all"&&(this._pt=0),La(this);for(d=this._op=this._op||[],r!=="all"&&(cn(r)&&(M={},Dn(r,function(A){return M[A]=1}),r=M),r=Tg(o,r)),v=o.length;v--;)if(~c.indexOf(o[v])){m=u[v],r==="all"?(d[v]=r,S=m,_={}):(_=d[v]=d[v]||{},S=r);for(M in S)y=m&&m[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&ul(this,y,"_pt"),delete m[M]),_!=="all"&&(_[M]=1)}return this._initted&&!this._pt&&f&&La(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Fa(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Fa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ht.killTweensOf(i,r,a)},e}(Xa);si(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(s){en[s]=function(){var e=new Pn,t=Dc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var du=function(e,t,n){return e[t]=n},Yd=function(e,t,n){return e[t](n)},Eg=function(e,t,n,i){return e[t](i.fp,n)},wg=function(e,t,n){return e.setAttribute(t,n)},pu=function(e,t){return Yt(e[t])?Yd:ru(e[t])&&e.setAttribute?wg:du},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ag=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$d=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},mu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rg=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Cg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ul(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Pg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Zd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},In=function(){function s(t,n,i,r,a,o,c,u,f){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Kd,this.d=c||this,this.set=u||du,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Pg,this.m=n,this.mt=r,this.tween=i},s}();Dn(cu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return lu[s]=1});jn.TweenMax=jn.TweenLite=en;jn.TimelineLite=jn.TimelineMax=Pn;Ht=new Pn({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=zd;var ts=[],Wo={},Lg=[],rf=0,Dg=0,Bl=function(e){return(Wo[e]||Lg).map(function(t){return t()})},Oc=function(){var e=Date.now(),t=[];e-rf>2&&(Bl("matchMediaInit"),ts.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,u;for(o in i)a=Qn.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,u=1);u&&(n.revert(),c&&t.push(n))}),Bl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),rf=e,Bl("matchMedia"))},Qd=function(){function s(t,n){this.selector=n&&Ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Dg++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Yt(n)&&(r=i,i=n,n=Yt);var a=this,o=function(){var u=qt,f=a.selector,d;return u&&u!==a&&u.data.push(a),r&&(a.selector=Ic(r)),qt=a,d=i.apply(a,arguments),Yt(d)&&a._r.push(d),qt=u,a.selector=f,a.isReverted=!1,d};return a.last=o,n===Yt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=qt;qt=null,n(this),qt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}))}),a.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof en)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),Ig=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Di(n)||(n={matches:n});var a=new Qd(0,r||this.scope),o=a.conditions={},c,u,f;qt&&!a.selector&&(a.selector=qt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?f=1:(c=Qn.matchMedia(n[u]),c&&(ts.indexOf(a)<0&&ts.push(a),(o[u]=c.matches)&&(f=1),c.addListener?c.addListener(Oc):c.addEventListener("change",Oc)));return f&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),tl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fd(i)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=ii(e)[0]);var r=Qr(e||{}).get,a=n?bd:Td;return n==="native"&&(n=""),e&&(t?a((Hn[t]&&Hn[t].get||r)(e,t,n,i)):function(o,c,u){return a((Hn[o]&&Hn[o].get||r)(e,o,c,u))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(f){return Un.quickSetter(f,t,n)}),r=i.length;return function(f){for(var d=r;d--;)i[d](f)}}e=e[0]||{};var a=Hn[t],o=Qr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(f){var d=new a;Bs._pt=0,d.init(e,n?f+n:f,Bs,0,[e]),d.render(1,d),Bs._pt&&mu(1,Bs)}:o.set(e,c);return a?u:function(f){return u(e,c,n?f+n:f,o,1)}},quickTo:function(e,t,n){var i,r=Un.to(e,as((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,u,f){return r.resetTo(t,c,u,f)};return a.tween=r,a},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Ys.ease)),Qu(Ys,e||{})},config:function(e){return Qu(Xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Hn[o]&&!jn[o]&&Zo(t+" effect requires "+o+" plugin.")}),Ul[t]=function(o,c,u){return n(ii(o),si(c||{},r),u)},a&&(Pn.prototype[t]=function(o,c,u){return this.add(Ul[t](o,Di(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){Tt[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):Tt},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),i,r;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)r=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=r;return Ai(Ht,n,0),n},context:function(e,t){return e?new Qd(e,t):qt},matchMedia:function(e){return new Ig(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Oc()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fg,wrapYoyo:hg,distribute:Ld,random:Id,snap:Dd,normalize:ug,getUnit:vn,clamp:ag,splitColor:kd,toArray:ii,selector:Ic,mapRange:Ud,pipe:lg,unitize:cg,interpolate:dg,shuffle:Pd},install:vd,effects:Ul,ticker:Vn,updateRoot:Pn.updateRoot,plugins:Hn,globalTimeline:Ht,core:{PropTween:In,globals:yd,Tween:en,Timeline:Pn,Animation:Xa,getCache:Qr,_removeLinkedListItem:ul,reverting:function(){return yn},context:function(e){return e&&qt&&(qt.data.push(e),e._ctx=qt),qt},suppressOverwrites:function(e){return iu=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return tl[s]=en[s]});Vn.add(Pn.updateRoot);Bs=tl.to({},{duration:0});var Ng=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ug=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Ng(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},zl=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,u;if(cn(r)&&(c={},Dn(r,function(f){return c[f]=1}),r=c),t){c={};for(u in r)c[u]=t(r[u]);r=c}Ug(o,r)}}}},Un=tl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zl("roundProps",Nc),zl("modifiers"),zl("snap",Dd))||tl;en.version=Pn.version=Un.version="3.12.2";_d=1;su()&&Zs();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sf,xr,Vs,gu,$r,af,_u,Og=function(){return typeof window<"u"},sr={},Xr=180/Math.PI,Gs=Math.PI/180,_s=Math.atan2,of=1e8,vu=/([A-Z])/g,Fg=/(left|right|width|margin|padding|x)/i,kg=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ep=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vg=function(e,t,n){return e.style[t]=n},Gg=function(e,t,n){return e.style.setProperty(t,n)},Wg=function(e,t,n){return e._gsap[t]=n},Xg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jg=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},qg=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Vt="transform",mi=Vt+"Origin",Yg=function s(e,t){var n=this,i=this.target,r=i.style;if(e in sr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Zi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Zi(i,e);else return Ci.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mi,t,"")),e=Vt}(r||t)&&this.props.push(e,t,r[e])},tp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(vu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=_u(),(!r||!r.isStart)&&!n[Vt]&&(tp(n),i.uncache=1)}},np=function(e,t){var n={target:e,props:[],revert:Kg,save:Yg};return e._gsap||Un.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},ip,kc=function(e,t){var n=xr.createElementNS?xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return n.style?n:xr.createElement(e)},Pi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Qs(t)||t,1)||""},lf="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||$r,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lf[a]+e in r););return a<0?null:(a===3?"ms":a>=0?lf[a]:"")+e},Bc=function(){Og()&&window.document&&(sf=window,xr=sf.document,Vs=xr.documentElement,$r=kc("div")||{style:{}},kc("div"),Vt=Qs(Vt),mi=Vt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ip=!!Qs("perspective"),_u=Un.core.reverting,gu=1)},Hl=function s(e){var t=kc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Vs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Vs.removeChild(t),this.style.cssText=r,a},cf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rp=function(e){var t;try{t=e.getBBox()}catch{t=Hl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hl||(t=Hl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+cf(e,["x","cx","x1"])||0,y:+cf(e,["y","cy","y1"])||0,width:0,height:0}:t},sp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rp(e))},ja=function(e,t){if(t){var n=e.style;t in sr&&t!==mi&&(t=Vt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(vu,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,r,a){var o=new In(e._pt,t,n,0,1,a?ep:Jd);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},uf={deg:1,rad:1,turn:1},$g={grid:1,flex:1},Cr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=$r.style,c=Fg.test(t),u=e.tagName.toLowerCase()==="svg",f=(u?"client":"offset")+(c?"Width":"Height"),d=100,m=i==="px",_=i==="%",S,M,y,v;return i===a||!r||uf[i]||uf[a]?r:(a!=="px"&&!m&&(r=s(e,t,n,"px")),v=e.getCTM&&sp(e),(_||a==="%")&&(sr[t]||~t.indexOf("adius"))?(S=v?e.getBBox()[c?"width":"height"]:e[f],$t(_?r/S*d:r/100*S)):(o[c?"width":"height"]=d+(m?a:i),M=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===xr||!M.appendChild)&&(M=xr.body),y=M._gsap,y&&_&&y.width&&c&&y.time===Vn.time&&!y.uncache?$t(r/y.width*d):((_||a==="%")&&!$g[Pi(M,"display")]&&(o.position=Pi(e,"position")),M===e&&(o.position="static"),M.appendChild($r),S=$r[f],M.removeChild($r),o.position="absolute",c&&_&&(y=Qr(M),y.time=Vn.time,y.width=M[f]),$t(m?S*r/d:S&&r?d/S*r:0))))},Zi=function(e,t,n,i){var r;return gu||Bc(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),sr[t]&&t!=="transform"?(r=Ya(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:il(Pi(e,mi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=nl[t]&&nl[t](e,t,n)||Pi(e,t)||Md(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Cr(e,t,r,n)+n:r},Zg=function(e,t,n,i){if(!n||n==="none"){var r=Qs(t,e,1),a=r&&Pi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Pi(e,"borderTopColor"))}var o=new In(this._pt,e.style,t,0,1,$d),c=0,u=0,f,d,m,_,S,M,y,v,A,T,R,P;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Pi(e,t)||i,e.style[t]=n),f=[n,i],zd(f),n=f[0],i=f[1],m=n.match(ks)||[],P=i.match(ks)||[],P.length){for(;d=ks.exec(i);)y=d[0],A=i.substring(c,d.index),S?S=(S+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(S=1),y!==(M=m[u++]||"")&&(_=parseFloat(M)||0,R=M.substr((_+"").length),y.charAt(1)==="="&&(y=Hs(_,y)+R),v=parseFloat(y),T=y.substr((v+"").length),c=ks.lastIndex-T.length,T||(T=T||Xn.units[t]||R,c===i.length&&(i+=T,o.e+=T)),R!==T&&(_=Cr(e,t,M,T)||0),o._pt={_next:o._pt,p:A||u===1?A:",",s:_,c:v-_,m:S&&S<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?ep:Jd;return md.test(i)&&(o.e=0),this._pt=o,o},ff={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ff[n]||n,t[1]=ff[i]||i,t.join(" ")},Jg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,u;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),u=r.length;--u>-1;)o=r[u],sr[o]&&(c=1,o=o==="transformOrigin"?mi:Vt),ja(n,o);c&&(ja(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),Ya(n,1),a.uncache=1,tp(i)))}},nl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new In(e._pt,t,n,0,0,Jg);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},qa=[1,0,0,1,0,0],ap={},op=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hf=function(e){var t=Pi(e,Vt);return op(t)?qa:t.substr(7).match(pd).map($t)},yu=function(e,t){var n=e._gsap||Qr(e),i=e.style,r=hf(e),a,o,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?qa:r):(r===qa&&!e.offsetParent&&e!==Vs&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,o=e.nextElementSibling,Vs.appendChild(e)),r=hf(e),c?i.display=c:ja(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Vs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},zc=function(e,t,n,i,r,a){var o=e._gsap,c=r||yu(e,!0),u=o.xOrigin||0,f=o.yOrigin||0,d=o.xOffset||0,m=o.yOffset||0,_=c[0],S=c[1],M=c[2],y=c[3],v=c[4],A=c[5],T=t.split(" "),R=parseFloat(T[0])||0,P=parseFloat(T[1])||0,D,p,O,w;n?c!==qa&&(p=_*y-S*M)&&(O=R*(y/p)+P*(-M/p)+(M*A-y*v)/p,w=R*(-S/p)+P*(_/p)-(_*A-S*v)/p,R=O,P=w):(D=rp(e),R=D.x+(~T[0].indexOf("%")?R/100*D.width:R),P=D.y+(~(T[1]||T[0]).indexOf("%")?P/100*D.height:P)),i||i!==!1&&o.smooth?(v=R-u,A=P-f,o.xOffset=d+(v*_+A*M)-v,o.yOffset=m+(v*S+A*y)-A):o.xOffset=o.yOffset=0,o.xOrigin=R,o.yOrigin=P,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[mi]="0px 0px",a&&(Mr(a,o,"xOrigin",u,R),Mr(a,o,"yOrigin",f,P),Mr(a,o,"xOffset",d,o.xOffset),Mr(a,o,"yOffset",m,o.yOffset)),e.setAttribute("data-svg-origin",R+" "+P)},Ya=function(e,t){var n=e._gsap||new Wd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),u=Pi(e,mi)||"0",f,d,m,_,S,M,y,v,A,T,R,P,D,p,O,w,F,te,G,I,z,W,$,K,ie,ce,pe,Ee,re,me,ge,Pe;return f=d=m=M=y=v=A=T=R=0,_=S=1,n.svg=!!(e.getCTM&&sp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Vt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Vt]!=="none"?c[Vt]:"")),i.scale=i.rotate=i.translate="none"),p=yu(e,n.svg),n.svg&&(n.uncache?(ie=e.getBBox(),u=n.xOrigin-ie.x+"px "+(n.yOrigin-ie.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),zc(e,K||u,!!K||n.originIsAbsolute,n.smooth!==!1,p)),P=n.xOrigin||0,D=n.yOrigin||0,p!==qa&&(te=p[0],G=p[1],I=p[2],z=p[3],f=W=p[4],d=$=p[5],p.length===6?(_=Math.sqrt(te*te+G*G),S=Math.sqrt(z*z+I*I),M=te||G?_s(G,te)*Xr:0,A=I||z?_s(I,z)*Xr+M:0,A&&(S*=Math.abs(Math.cos(A*Gs))),n.svg&&(f-=P-(P*te+D*I),d-=D-(P*G+D*z))):(Pe=p[6],me=p[7],pe=p[8],Ee=p[9],re=p[10],ge=p[11],f=p[12],d=p[13],m=p[14],O=_s(Pe,re),y=O*Xr,O&&(w=Math.cos(-O),F=Math.sin(-O),K=W*w+pe*F,ie=$*w+Ee*F,ce=Pe*w+re*F,pe=W*-F+pe*w,Ee=$*-F+Ee*w,re=Pe*-F+re*w,ge=me*-F+ge*w,W=K,$=ie,Pe=ce),O=_s(-I,re),v=O*Xr,O&&(w=Math.cos(-O),F=Math.sin(-O),K=te*w-pe*F,ie=G*w-Ee*F,ce=I*w-re*F,ge=z*F+ge*w,te=K,G=ie,I=ce),O=_s(G,te),M=O*Xr,O&&(w=Math.cos(O),F=Math.sin(O),K=te*w+G*F,ie=W*w+$*F,G=G*w-te*F,$=$*w-W*F,te=K,W=ie),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,v=180-v),_=$t(Math.sqrt(te*te+G*G+I*I)),S=$t(Math.sqrt($*$+Pe*Pe)),O=_s(W,$),A=Math.abs(O)>2e-4?O*Xr:0,R=ge?1/(ge<0?-ge:ge):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!op(Pi(e,Vt)),K&&e.setAttribute("transform",K))),Math.abs(A)>90&&Math.abs(A)<270&&(r?(_*=-1,A+=M<=0?180:-180,M+=M<=0?180:-180):(S*=-1,A+=A<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=m+a,n.scaleX=$t(_),n.scaleY=$t(S),n.rotation=$t(M)+o,n.rotationX=$t(y)+o,n.rotationY=$t(v)+o,n.skewX=A+o,n.skewY=T+o,n.transformPerspective=R+a,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[mi]=il(u)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?t_:ip?lp:e_,n.uncache=0,n},il=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vl=function(e,t,n){var i=vn(t);return $t(parseFloat(t)+parseFloat(Cr(e,"x",n+"px",i)))+i},e_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lp(e,t)},Fr="0deg",Ma="0px",kr=") ",lp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,u=n.rotation,f=n.rotationY,d=n.rotationX,m=n.skewX,_=n.skewY,S=n.scaleX,M=n.scaleY,y=n.transformPerspective,v=n.force3D,A=n.target,T=n.zOrigin,R="",P=v==="auto"&&e&&e!==1||v===!0;if(T&&(d!==Fr||f!==Fr)){var D=parseFloat(f)*Gs,p=Math.sin(D),O=Math.cos(D),w;D=parseFloat(d)*Gs,w=Math.cos(D),a=Vl(A,a,p*w*-T),o=Vl(A,o,-Math.sin(D)*-T),c=Vl(A,c,O*w*-T+T)}y!==Ma&&(R+="perspective("+y+kr),(i||r)&&(R+="translate("+i+"%, "+r+"%) "),(P||a!==Ma||o!==Ma||c!==Ma)&&(R+=c!==Ma||P?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+kr),u!==Fr&&(R+="rotate("+u+kr),f!==Fr&&(R+="rotateY("+f+kr),d!==Fr&&(R+="rotateX("+d+kr),(m!==Fr||_!==Fr)&&(R+="skew("+m+", "+_+kr),(S!==1||M!==1)&&(R+="scale("+S+", "+M+kr),A.style[Vt]=R||"translate(0, 0)"},t_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,u=n.skewX,f=n.skewY,d=n.scaleX,m=n.scaleY,_=n.target,S=n.xOrigin,M=n.yOrigin,y=n.xOffset,v=n.yOffset,A=n.forceCSS,T=parseFloat(a),R=parseFloat(o),P,D,p,O,w;c=parseFloat(c),u=parseFloat(u),f=parseFloat(f),f&&(f=parseFloat(f),u+=f,c+=f),c||u?(c*=Gs,u*=Gs,P=Math.cos(c)*d,D=Math.sin(c)*d,p=Math.sin(c-u)*-m,O=Math.cos(c-u)*m,u&&(f*=Gs,w=Math.tan(u-f),w=Math.sqrt(1+w*w),p*=w,O*=w,f&&(w=Math.tan(f),w=Math.sqrt(1+w*w),P*=w,D*=w)),P=$t(P),D=$t(D),p=$t(p),O=$t(O)):(P=d,O=m,D=p=0),(T&&!~(a+"").indexOf("px")||R&&!~(o+"").indexOf("px"))&&(T=Cr(_,"x",a,"px"),R=Cr(_,"y",o,"px")),(S||M||y||v)&&(T=$t(T+S-(S*P+M*p)+y),R=$t(R+M-(S*D+M*O)+v)),(i||r)&&(w=_.getBBox(),T=$t(T+i/100*w.width),R=$t(R+r/100*w.height)),w="matrix("+P+","+D+","+p+","+O+","+T+","+R+")",_.setAttribute("transform",w),A&&(_.style[Vt]=w)},n_=function(e,t,n,i,r){var a=360,o=cn(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Xr:1),u=c-i,f=i+u+"deg",d,m;return o&&(d=r.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*of)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*of)%a-~~(u/a)*a)),e._pt=m=new In(e._pt,t,n,i,u,Bg),m.e=f,m.u="deg",e._props.push(n),m},df=function(e,t){for(var n in t)e[n]=t[n];return e},i_=function(e,t,n){var i=df({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,u,f,d,m,_,S;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=Ya(n,1),ja(n,Vt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Vt],a[Vt]=t,o=Ya(n,1),a[Vt]=u);for(c in sr)u=i[c],f=o[c],u!==f&&r.indexOf(c)<0&&(_=vn(u),S=vn(f),d=_!==S?Cr(n,c,u,S):parseFloat(u),m=parseFloat(f),e._pt=new In(e._pt,o,c,d,m-d,Fc),e._pt.u=S||0,e._props.push(c));df(o,i)};Dn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});nl[e>1?"border"+s:s]=function(o,c,u,f,d){var m,_;if(arguments.length<4)return m=a.map(function(S){return Zi(o,S,u)}),_=m.join(" "),_.split(m[0]).length===5?m[0]:_;m=(f+"").split(" "),_={},a.forEach(function(S,M){return _[S]=m[M]=m[M]||m[(M-1)/2|0]}),o.init(c,_,d)}});var cp={name:"css",register:Bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,u,f,d,m,_,S,M,y,v,A,T,R,P,D,p,O;gu||Bc(),this.styles=this.styles||np(e),O=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(f=t[M],!(Hn[M]&&Xd(M,t,n,i,e,r)))){if(_=typeof f,S=nl[M],_==="function"&&(f=f.call(n,i,e,r),_=typeof f),_==="string"&&~f.indexOf("random(")&&(f=Ga(f)),S)S(this,e,M,f,n)&&(p=1);else if(M.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(M)+"").trim(),f+="",Er.lastIndex=0,Er.test(u)||(y=vn(u),v=vn(f)),v?y!==v&&(u=Cr(e,M,u,v)+v):y&&(f+=y),this.add(o,"setProperty",u,f,i,r,0,0,M),a.push(M),O.push(M,0,o[M]);else if(_!=="undefined"){if(c&&M in c?(u=typeof c[M]=="function"?c[M].call(n,i,e,r):c[M],cn(u)&&~u.indexOf("random(")&&(u=Ga(u)),vn(u+"")||(u+=Xn.units[M]||vn(Zi(e,M))||""),(u+"").charAt(1)==="="&&(u=Zi(e,M))):u=Zi(e,M),m=parseFloat(u),A=_==="string"&&f.charAt(1)==="="&&f.substr(0,2),A&&(f=f.substr(2)),d=parseFloat(f),M in Ci&&(M==="autoAlpha"&&(m===1&&Zi(e,"visibility")==="hidden"&&d&&(m=0),O.push("visibility",0,o.visibility),Mr(this,o,"visibility",m?"inherit":"hidden",d?"inherit":"hidden",!d)),M!=="scale"&&M!=="transform"&&(M=Ci[M],~M.indexOf(",")&&(M=M.split(",")[0]))),T=M in sr,T){if(this.styles.save(M),R||(P=e._gsap,P.renderTransform&&!t.parseTransform||Ya(e,t.parseTransform),D=t.smoothOrigin!==!1&&P.smooth,R=this._pt=new In(this._pt,o,Vt,0,1,P.renderTransform,P,0,-1),R.dep=1),M==="scale")this._pt=new In(this._pt,P,"scaleY",P.scaleY,(A?Hs(P.scaleY,A+d):d)-P.scaleY||0,Fc),this._pt.u=0,a.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push(mi,0,o[mi]),f=Qg(f),P.svg?zc(e,f,0,D,0,this):(v=parseFloat(f.split(" ")[2])||0,v!==P.zOrigin&&Mr(this,P,"zOrigin",P.zOrigin,v),Mr(this,o,M,il(u),il(f)));continue}else if(M==="svgOrigin"){zc(e,f,1,D,0,this);continue}else if(M in ap){n_(this,P,M,m,A?Hs(m,A+f):f);continue}else if(M==="smoothOrigin"){Mr(this,P,"smooth",P.smooth,f);continue}else if(M==="force3D"){P[M]=f;continue}else if(M==="transform"){i_(this,f,e);continue}}else M in o||(M=Qs(M)||M);if(T||(d||d===0)&&(m||m===0)&&!kg.test(f)&&M in o)y=(u+"").substr((m+"").length),d||(d=0),v=vn(f)||(M in Xn.units?Xn.units[M]:y),y!==v&&(m=Cr(e,M,u,v)),this._pt=new In(this._pt,T?P:o,M,m,(A?Hs(m,A+d):d)-m,!T&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?Hg:Fc),this._pt.u=v||0,y!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=zg);else if(M in o)Zg.call(this,e,M,u,A?A+f:f);else if(M in e)this.add(e,M,u||e[M],A?A+f:f,i,r);else if(M!=="parseTransform"){ou(M,f);continue}T||(M in o?O.push(M,0,o[M]):O.push(M,1,u||e[M])),a.push(M)}}p&&Zd(this)},render:function(e,t){if(t.tween._time||!_u())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zi,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in sr&&t!==mi&&(e._gsap.x||Zi(e,"x"))?n&&af===n?t==="scale"?Xg:Wg:(af=n||{})&&(t==="scale"?jg:qg):e.style&&!ru(e.style[t])?Vg:~t.indexOf("-")?Gg:pu(e,t)},core:{_removeProperty:ja,_getMatrix:yu}};Un.utils.checkPrefix=Qs;Un.core.getStyleSaver=np;(function(s,e,t,n){var i=Dn(s+","+e+","+t,function(r){sr[r]=1});Dn(e,function(r){Xn.units[r]="deg",ap[r]=1}),Ci[i[13]]=s+","+e,Dn(n,function(r){var a=r.split(":");Ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Xn.units[s]="px"});Un.registerPlugin(cp);var _r=Un.registerPlugin(cp)||Un;_r.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="153",r_=0,pf=1,s_=2,up=1,a_=2,Ki=3,ar=0,Nn=1,Ri=2,wr=0,Ws=1,Hc=2,mf=3,gf=4,o_=5,Fs=100,l_=101,c_=102,_f=103,vf=104,u_=200,f_=201,h_=202,d_=203,fp=204,hp=205,p_=206,m_=207,g_=208,__=209,v_=210,y_=0,x_=1,M_=2,Vc=3,S_=4,T_=5,b_=6,E_=7,dp=0,w_=1,A_=2,tr=0,R_=1,C_=2,pp=3,P_=4,L_=5,mp=300,Js=301,ea=302,Gc=303,Wc=304,dl=306,ta=1e3,ei=1001,rl=1002,ln=1003,Xc=1004,Xo=1005,Cn=1006,gp=1007,os=1008,Ar=1009,D_=1010,I_=1011,Mu=1012,_p=1013,Sr=1014,Qi=1015,nr=1016,vp=1017,yp=1018,ns=1020,N_=1021,ti=1023,U_=1024,O_=1025,is=1026,na=1027,F_=1028,xp=1029,k_=1030,Mp=1031,Sp=1033,Gl=33776,Wl=33777,Xl=33778,jl=33779,yf=35840,xf=35841,Mf=35842,Sf=35843,B_=36196,Tf=37492,bf=37496,Ef=37808,wf=37809,Af=37810,Rf=37811,Cf=37812,Pf=37813,Lf=37814,Df=37815,If=37816,Nf=37817,Uf=37818,Of=37819,Ff=37820,kf=37821,ql=36492,z_=36283,Bf=36284,zf=36285,Hf=36286,Ka=2300,ia=2301,Yl=2302,Vf=2400,Gf=2401,Wf=2402,H_=2500,V_=0,Tp=1,jc=2,bp=3e3,rs=3001,G_=3200,W_=3201,Ep=0,X_=1,ss="",nt="srgb",Ii="srgb-linear",wp="display-p3",Kl=7680,j_=519,q_=512,Y_=513,K_=514,$_=515,Z_=516,Q_=517,J_=518,ev=519,qc=35044,Xf="300 es",Yc=1035,Ji=2e3,sl=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jf=1234567;const Ba=Math.PI/180,ra=180/Math.PI;function gi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function _n(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function tv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function nv(s,e,t){return s!==e?(t-s)/(e-s):0}function za(s,e,t){return(1-t)*s+t*e}function iv(s,e,t,n){return za(s,e,1-Math.exp(-t*n))}function rv(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function sv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function av(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ov(s,e){return s+Math.floor(Math.random()*(e-s+1))}function lv(s,e){return s+Math.random()*(e-s)}function cv(s){return s*(.5-Math.random())}function uv(s){s!==void 0&&(jf=s);let e=jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(s){return s*Ba}function hv(s){return s*ra}function Kc(s){return(s&s-1)===0&&s!==0}function Ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function al(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dv(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),u=r((e+n)/2),f=a((e+n)/2),d=r((e-n)/2),m=a((e-n)/2),_=r((n-e)/2),S=a((n-e)/2);switch(i){case"XYX":s.set(o*f,c*d,c*m,o*u);break;case"YZY":s.set(c*m,o*f,c*d,o*u);break;case"ZXZ":s.set(c*d,c*m,o*f,o*u);break;case"XZX":s.set(o*f,c*S,c*_,o*u);break;case"YXY":s.set(c*_,o*f,c*S,o*u);break;case"ZYZ":s.set(c*S,c*_,o*f,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function er(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ia={DEG2RAD:Ba,RAD2DEG:ra,generateUUID:gi,clamp:_n,euclideanModulo:Su,mapLinear:tv,inverseLerp:nv,lerp:za,damp:iv,pingpong:rv,smoothstep:sv,smootherstep:av,randInt:ov,randFloat:lv,randFloatSpread:cv,seededRandom:uv,degToRad:fv,radToDeg:hv,isPowerOfTwo:Kc,ceilPowerOfTwo:Ap,floorPowerOfTwo:al,setQuaternionFromProperEuler:dv,normalize:Ut,denormalize:er};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,r,a,o,c,u){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,u)}set(e,t,n,i,r,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],f=n[4],d=n[7],m=n[2],_=n[5],S=n[8],M=i[0],y=i[3],v=i[6],A=i[1],T=i[4],R=i[7],P=i[2],D=i[5],p=i[8];return r[0]=a*M+o*A+c*P,r[3]=a*y+o*T+c*D,r[6]=a*v+o*R+c*p,r[1]=u*M+f*A+d*P,r[4]=u*y+f*T+d*D,r[7]=u*v+f*R+d*p,r[2]=m*M+_*A+S*P,r[5]=m*y+_*T+S*D,r[8]=m*v+_*R+S*p,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-n*r*f+n*o*c+i*r*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],d=f*a-o*u,m=o*c-f*r,_=u*r-a*c,S=t*d+n*m+i*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=d*M,e[1]=(i*u-f*n)*M,e[2]=(o*n-i*a)*M,e[3]=m*M,e[4]=(f*t-i*c)*M,e[5]=(i*r-o*t)*M,e[6]=_*M,e[7]=(n*c-u*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-i*u,i*c,-i*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new ht;function Rp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $a(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const qf={};function Ha(s){s in qf||(qf[s]=!0,console.warn(s))}function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pv=new ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mv=new ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gv(s){return s.convertSRGBToLinear().applyMatrix3(mv)}function _v(s){return s.applyMatrix3(pv).convertLinearToSRGB()}const vv={[Ii]:s=>s,[nt]:s=>s.convertSRGBToLinear(),[wp]:gv},yv={[Ii]:s=>s,[nt]:s=>s.convertLinearToSRGB(),[wp]:_v},ui={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ii},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=vv[e],i=yv[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let vs;class Cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=$a("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$a("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ql(i[a].image)):r.push(Ql(i[a]))}else r=Ql(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ql(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class dn extends la{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=ei,i=ei,r=Cn,a=os,o=ti,c=Ar,u=dn.DEFAULT_ANISOTROPY,f=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=gi(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===rs?nt:ss),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?rs:bp}set encoding(e){Ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rs?nt:ss}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=mp;dn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],f=c[4],d=c[8],m=c[1],_=c[5],S=c[9],M=c[2],y=c[6],v=c[10];if(Math.abs(f-m)<.01&&Math.abs(d-M)<.01&&Math.abs(S-y)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+M)<.1&&Math.abs(S+y)<.1&&Math.abs(u+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,R=(_+1)/2,P=(v+1)/2,D=(f+m)/4,p=(d+M)/4,O=(S+y)/4;return T>R&&T>P?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=D/n,r=p/n):R>P?R<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(R),n=D/i,r=O/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=p/r,i=O/r),this.set(n,i,r,t),this}let A=Math.sqrt((y-S)*(y-S)+(d-M)*(d-M)+(m-f)*(m-f));return Math.abs(A)<.001&&(A=1),this.x=(y-S)/A,this.y=(d-M)/A,this.z=(m-f)/A,this.w=Math.acos((u+_+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends la{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ha("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rs?nt:ss),this.texture=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lp extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sv extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],u=n[i+1],f=n[i+2],d=n[i+3];const m=r[a+0],_=r[a+1],S=r[a+2],M=r[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=S,e[t+3]=M;return}if(d!==M||c!==m||u!==_||f!==S){let y=1-o;const v=c*m+u*_+f*S+d*M,A=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const P=Math.sqrt(T),D=Math.atan2(P,v*A);y=Math.sin(y*D)/P,o=Math.sin(o*D)/P}const R=o*A;if(c=c*y+m*R,u=u*y+_*R,f=f*y+S*R,d=d*y+M*R,y===1-o){const P=1/Math.sqrt(c*c+u*u+f*f+d*d);c*=P,u*=P,f*=P,d*=P}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],u=n[i+2],f=n[i+3],d=r[a],m=r[a+1],_=r[a+2],S=r[a+3];return e[t]=o*S+f*d+c*_-u*m,e[t+1]=c*S+f*m+u*d-o*_,e[t+2]=u*S+f*_+o*m-c*d,e[t+3]=f*S-o*d-c*m-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),f=o(i/2),d=o(r/2),m=c(n/2),_=c(i/2),S=c(r/2);switch(a){case"XYZ":this._x=m*f*d+u*_*S,this._y=u*_*d-m*f*S,this._z=u*f*S+m*_*d,this._w=u*f*d-m*_*S;break;case"YXZ":this._x=m*f*d+u*_*S,this._y=u*_*d-m*f*S,this._z=u*f*S-m*_*d,this._w=u*f*d+m*_*S;break;case"ZXY":this._x=m*f*d-u*_*S,this._y=u*_*d+m*f*S,this._z=u*f*S+m*_*d,this._w=u*f*d-m*_*S;break;case"ZYX":this._x=m*f*d-u*_*S,this._y=u*_*d+m*f*S,this._z=u*f*S-m*_*d,this._w=u*f*d+m*_*S;break;case"YZX":this._x=m*f*d+u*_*S,this._y=u*_*d+m*f*S,this._z=u*f*S-m*_*d,this._w=u*f*d-m*_*S;break;case"XZY":this._x=m*f*d-u*_*S,this._y=u*_*d-m*f*S,this._z=u*f*S+m*_*d,this._w=u*f*d+m*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],f=t[6],d=t[10],m=n+o+d;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(f-c)*_,this._y=(r-u)*_,this._z=(a-i)*_}else if(n>o&&n>d){const _=2*Math.sqrt(1+n-o-d);this._w=(f-c)/_,this._x=.25*_,this._y=(i+a)/_,this._z=(r+u)/_}else if(o>d){const _=2*Math.sqrt(1+o-n-d);this._w=(r-u)/_,this._x=(i+a)/_,this._y=.25*_,this._z=(c+f)/_}else{const _=2*Math.sqrt(1+d-n-o);this._w=(a-i)/_,this._x=(r+u)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+a*o+i*u-r*c,this._y=i*f+a*c+r*o-n*u,this._z=r*f+a*u+n*c-i*o,this._w=a*f-n*o-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*i+t*this._y,this._z=_*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),d=Math.sin((1-t)*f)/u,m=Math.sin(t*f)/u;return this._w=a*d+this._w*m,this._x=n*d+this._x*m,this._y=i*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=c*t+a*i-o*n,f=c*n+o*t-r*i,d=c*i+r*n-a*t,m=-r*t-a*n-o*i;return this.x=u*c+m*-r+f*-o-d*-a,this.y=f*c+m*-a+d*-r-u*-o,this.z=d*c+m*-o+u*-a-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new Y,Yf=new Lr;class or{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox),ys.applyMatrix4(e.matrixWorld),this.union(ys);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Gi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gi)}else i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),_o.subVectors(this.max,Sa),xs.subVectors(e.a,Sa),Ms.subVectors(e.b,Sa),Ss.subVectors(e.c,Sa),fr.subVectors(Ms,xs),hr.subVectors(Ss,Ms),Br.subVectors(xs,Ss);let t=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!ec(t,xs,Ms,Ss,_o)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,xs,Ms,Ss,_o))?!1:(vo.crossVectors(fr,hr),t=[vo.x,vo.y,vo.z],ec(t,xs,Ms,Ss,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Gi=new Y,ys=new or,xs=new Y,Ms=new Y,Ss=new Y,fr=new Y,hr=new Y,Br=new Y,Sa=new Y,_o=new Y,vo=new Y,zr=new Y;function ec(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zr.fromArray(s,r);const o=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),c=e.dot(zr),u=t.dot(zr),f=n.dot(zr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const Tv=new or,Ta=new Y,tc=new Y;class Ni{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ta,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(tc)),this.expandByPoint(Ta.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new Y,nc=new Y,yo=new Y,dr=new Y,ic=new Y,xo=new Y,rc=new Y;class no{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nc.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(nc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=dr.dot(this.direction),c=-dr.dot(yo),u=dr.lengthSq(),f=Math.abs(1-a*a);let d,m,_,S;if(f>0)if(d=a*c-o,m=a*o-c,S=r*f,d>=0)if(m>=-S)if(m<=S){const M=1/f;d*=M,m*=M,_=d*(d+a*m+2*o)+m*(a*d+m+2*c)+u}else m=r,d=Math.max(0,-(a*m+o)),_=-d*d+m*(m+2*c)+u;else m=-r,d=Math.max(0,-(a*m+o)),_=-d*d+m*(m+2*c)+u;else m<=-S?(d=Math.max(0,-(-a*r+o)),m=d>0?-r:Math.min(Math.max(-r,-c),r),_=-d*d+m*(m+2*c)+u):m<=S?(d=0,m=Math.min(Math.max(-r,-c),r),_=m*(m+2*c)+u):(d=Math.max(0,-(a*r+o)),m=d>0?r:Math.min(Math.max(-r,-c),r),_=-d*d+m*(m+2*c)+u);else m=a>0?-r:r,d=Math.max(0,-(a*m+o)),_=-d*d+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(nc).addScaledVector(yo,m),_}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);const n=Wi.dot(this.direction),i=Wi.dot(Wi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,i=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,i=(e.min.x-m.x)*u),f>=0?(r=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-m.z)*d,c=(e.max.z-m.z)*d):(o=(e.max.z-m.z)*d,c=(e.min.z-m.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,i,r){ic.subVectors(t,e),xo.subVectors(n,e),rc.crossVectors(ic,xo);let a=this.direction.dot(rc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dr.subVectors(this.origin,e);const c=o*this.direction.dot(xo.crossVectors(dr,xo));if(c<0)return null;const u=o*this.direction.dot(ic.cross(dr));if(u<0||c+u>a)return null;const f=-o*dr.dot(rc);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,i,r,a,o,c,u,f,d,m,_,S,M,y){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,u,f,d,m,_,S,M,y)}set(e,t,n,i,r,a,o,c,u,f,d,m,_,S,M,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=a,v[9]=o,v[13]=c,v[2]=u,v[6]=f,v[10]=d,v[14]=m,v[3]=_,v[7]=S,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const m=a*f,_=a*d,S=o*f,M=o*d;t[0]=c*f,t[4]=-c*d,t[8]=u,t[1]=_+S*u,t[5]=m-M*u,t[9]=-o*c,t[2]=M-m*u,t[6]=S+_*u,t[10]=a*c}else if(e.order==="YXZ"){const m=c*f,_=c*d,S=u*f,M=u*d;t[0]=m+M*o,t[4]=S*o-_,t[8]=a*u,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=_*o-S,t[6]=M+m*o,t[10]=a*c}else if(e.order==="ZXY"){const m=c*f,_=c*d,S=u*f,M=u*d;t[0]=m-M*o,t[4]=-a*d,t[8]=S+_*o,t[1]=_+S*o,t[5]=a*f,t[9]=M-m*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const m=a*f,_=a*d,S=o*f,M=o*d;t[0]=c*f,t[4]=S*u-_,t[8]=m*u+M,t[1]=c*d,t[5]=M*u+m,t[9]=_*u-S,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,_=a*u,S=o*c,M=o*u;t[0]=c*f,t[4]=M-m*d,t[8]=S*d+_,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=_*d+S,t[10]=m-M*d}else if(e.order==="XZY"){const m=a*c,_=a*u,S=o*c,M=o*u;t[0]=c*f,t[4]=-d,t[8]=u*f,t[1]=m*d+M,t[5]=a*f,t[9]=_*d-S,t[2]=S*d-_,t[6]=o*f,t[10]=M*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bv,e,Ev)}lookAt(e,t,n){const i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),pr.crossVectors(n,Bn),pr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),pr.crossVectors(n,Bn)),pr.normalize(),Mo.crossVectors(Bn,pr),i[0]=pr.x,i[4]=Mo.x,i[8]=Bn.x,i[1]=pr.y,i[5]=Mo.y,i[9]=Bn.y,i[2]=pr.z,i[6]=Mo.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],f=n[1],d=n[5],m=n[9],_=n[13],S=n[2],M=n[6],y=n[10],v=n[14],A=n[3],T=n[7],R=n[11],P=n[15],D=i[0],p=i[4],O=i[8],w=i[12],F=i[1],te=i[5],G=i[9],I=i[13],z=i[2],W=i[6],$=i[10],K=i[14],ie=i[3],ce=i[7],pe=i[11],Ee=i[15];return r[0]=a*D+o*F+c*z+u*ie,r[4]=a*p+o*te+c*W+u*ce,r[8]=a*O+o*G+c*$+u*pe,r[12]=a*w+o*I+c*K+u*Ee,r[1]=f*D+d*F+m*z+_*ie,r[5]=f*p+d*te+m*W+_*ce,r[9]=f*O+d*G+m*$+_*pe,r[13]=f*w+d*I+m*K+_*Ee,r[2]=S*D+M*F+y*z+v*ie,r[6]=S*p+M*te+y*W+v*ce,r[10]=S*O+M*G+y*$+v*pe,r[14]=S*w+M*I+y*K+v*Ee,r[3]=A*D+T*F+R*z+P*ie,r[7]=A*p+T*te+R*W+P*ce,r[11]=A*O+T*G+R*$+P*pe,r[15]=A*w+T*I+R*K+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],d=e[6],m=e[10],_=e[14],S=e[3],M=e[7],y=e[11],v=e[15];return S*(+r*c*d-i*u*d-r*o*m+n*u*m+i*o*_-n*c*_)+M*(+t*c*_-t*u*m+r*a*m-i*a*_+i*u*f-r*c*f)+y*(+t*u*d-t*o*_-r*a*d+n*a*_+r*o*f-n*u*f)+v*(-i*o*f-t*c*d+t*o*m+i*a*d-n*a*m+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],d=e[9],m=e[10],_=e[11],S=e[12],M=e[13],y=e[14],v=e[15],A=d*y*u-M*m*u+M*c*_-o*y*_-d*c*v+o*m*v,T=S*m*u-f*y*u-S*c*_+a*y*_+f*c*v-a*m*v,R=f*M*u-S*d*u+S*o*_-a*M*_-f*o*v+a*d*v,P=S*d*c-f*M*c-S*o*m+a*M*m+f*o*y-a*d*y,D=t*A+n*T+i*R+r*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const p=1/D;return e[0]=A*p,e[1]=(M*m*r-d*y*r-M*i*_+n*y*_+d*i*v-n*m*v)*p,e[2]=(o*y*r-M*c*r+M*i*u-n*y*u-o*i*v+n*c*v)*p,e[3]=(d*c*r-o*m*r-d*i*u+n*m*u+o*i*_-n*c*_)*p,e[4]=T*p,e[5]=(f*y*r-S*m*r+S*i*_-t*y*_-f*i*v+t*m*v)*p,e[6]=(S*c*r-a*y*r-S*i*u+t*y*u+a*i*v-t*c*v)*p,e[7]=(a*m*r-f*c*r+f*i*u-t*m*u-a*i*_+t*c*_)*p,e[8]=R*p,e[9]=(S*d*r-f*M*r-S*n*_+t*M*_+f*n*v-t*d*v)*p,e[10]=(a*M*r-S*o*r+S*n*u-t*M*u-a*n*v+t*o*v)*p,e[11]=(f*o*r-a*d*r-f*n*u+t*d*u+a*n*_-t*o*_)*p,e[12]=P*p,e[13]=(f*M*i-S*d*i+S*n*m-t*M*m-f*n*y+t*d*y)*p,e[14]=(S*o*i-a*M*i-S*n*c+t*M*c+a*n*y-t*o*y)*p,e[15]=(a*d*i-f*o*i+f*n*c-t*d*c-a*n*m+t*o*m)*p,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,f=r*o;return this.set(u*a+n,u*o-i*c,u*c+i*o,0,u*o+i*c,f*o+n,f*c-i*a,0,u*c-i*o,f*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,f=a+a,d=o+o,m=r*u,_=r*f,S=r*d,M=a*f,y=a*d,v=o*d,A=c*u,T=c*f,R=c*d,P=n.x,D=n.y,p=n.z;return i[0]=(1-(M+v))*P,i[1]=(_+R)*P,i[2]=(S-T)*P,i[3]=0,i[4]=(_-R)*D,i[5]=(1-(m+v))*D,i[6]=(y+A)*D,i[7]=0,i[8]=(S+T)*p,i[9]=(y-A)*p,i[10]=(1-(m+M))*p,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ts.set(i[0],i[1],i[2]).length();const a=Ts.set(i[4],i[5],i[6]).length(),o=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],fi.copy(this);const u=1/r,f=1/a,d=1/o;return fi.elements[0]*=u,fi.elements[1]*=u,fi.elements[2]*=u,fi.elements[4]*=f,fi.elements[5]*=f,fi.elements[6]*=f,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ji){const c=this.elements,u=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let _,S;if(o===Ji)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===sl)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ji){const c=this.elements,u=1/(t-e),f=1/(n-i),d=1/(a-r),m=(t+e)*u,_=(n+i)*f;let S,M;if(o===Ji)S=(a+r)*d,M=-2*d;else if(o===sl)S=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=M,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ts=new Y,fi=new dt,bv=new Y(0,0,0),Ev=new Y(1,1,1),pr=new Y,Mo=new Y,Bn=new Y,Kf=new dt,$f=new Lr;class pl{constructor(e=0,t=0,n=0,i=pl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],u=i[5],f=i[9],d=i[2],m=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(_n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $f.setFromEuler(this),this.setFromQuaternion($f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pl.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wv=0;const Zf=new Y,bs=new Lr,Xi=new dt,So=new Y,ba=new Y,Av=new Y,Rv=new Lr,Qf=new Y(1,0,0),Jf=new Y(0,1,0),eh=new Y(0,0,1),Cv={type:"added"},th={type:"removed"};class Gt extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new Y,t=new pl,n=new Lr,i=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new ht}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Qf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ba,So,this.up):Xi.lookAt(So,ba,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(Xi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(th)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(th)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const d=c[u];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),d=a(e.shapes),m=a(e.skeletons),_=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=i,n;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new Y(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new Y,ji=new Y,sc=new Y,qi=new Y,Es=new Y,ws=new Y,nh=new Y,ac=new Y,oc=new Y,lc=new Y;let To=!1;class pi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){hi.subVectors(i,t),ji.subVectors(n,t),sc.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(ji),c=hi.dot(sc),u=ji.dot(ji),f=ji.dot(sc),d=a*u-o*o;if(d===0)return r.set(-2,-1,-1);const m=1/d,_=(u*c-o*f)*m,S=(a*f-o*c)*m;return r.set(1-_-S,S,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi),qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,n,i,r,a,o,c){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,qi),c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),ji.subVectors(e,t),hi.cross(ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Es.subVectors(i,n),ws.subVectors(r,n),ac.subVectors(e,n);const c=Es.dot(ac),u=ws.dot(ac);if(c<=0&&u<=0)return t.copy(n);oc.subVectors(e,i);const f=Es.dot(oc),d=ws.dot(oc);if(f>=0&&d<=f)return t.copy(i);const m=c*d-f*u;if(m<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Es,a);lc.subVectors(e,r);const _=Es.dot(lc),S=ws.dot(lc);if(S>=0&&_<=S)return t.copy(r);const M=_*u-c*S;if(M<=0&&u>=0&&S<=0)return o=u/(u-S),t.copy(n).addScaledVector(ws,o);const y=f*S-_*d;if(y<=0&&d-f>=0&&_-S>=0)return nh.subVectors(r,i),o=(d-f)/(d-f+(_-S)),t.copy(i).addScaledVector(nh,o);const v=1/(y+M+m);return a=M*v,o=m*v,t.copy(n).addScaledVector(Es,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Pv=0;class Li extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Ws,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fp,this.blendDst=hp,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kl,this.stencilZFail=Kl,this.stencilZPass=Kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},bo={h:0,s:0,l:0};function cc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ui.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ui.workingColorSpace){return this.r=e,this.g=t,this.b=n,ui.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ui.workingColorSpace){if(e=Su(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cc(a,r,e+1/3),this.g=cc(a,r,e),this.b=cc(a,r,e-1/3)}return ui.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const n=Dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Zl(e.r),this.g=Zl(e.g),this.b=Zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return ui.fromWorkingColorSpace(gn.copy(this),e),Math.round(_n(gn.r*255,0,255))*65536+Math.round(_n(gn.g*255,0,255))*256+Math.round(_n(gn.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ui.workingColorSpace){ui.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,r=gn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const d=a-o;switch(u=f<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=ui.workingColorSpace){return ui.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=nt){ui.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),di.h+=e,di.s+=t,di.l+=n,this.setHSL(di.h,di.s,di.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(bo);const n=za(di.h,bo.h,t),i=za(di.s,bo.s,t),r=za(di.l,bo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new it;it.NAMES=Dp;class Tr extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new Y,Eo=new $e;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRange={offset:0,count:-1},this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ip extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Np extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vi extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lv=0;const Kn=new dt,uc=new Gt,As=new Y,zn=new or,Ea=new or,on=new Y;class yi extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Np:Ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(zn.min,Ea.min),zn.expandByPoint(on),on.addVectors(zn.max,Ea.max),zn.expandByPoint(on)):(zn.expandByPoint(Ea.min),zn.expandByPoint(Ea.max))}zn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)on.fromBufferAttribute(o,u),c&&(As.fromBufferAttribute(e,u),on.add(As)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],f=[];for(let F=0;F<o;F++)u[F]=new Y,f[F]=new Y;const d=new Y,m=new Y,_=new Y,S=new $e,M=new $e,y=new $e,v=new Y,A=new Y;function T(F,te,G){d.fromArray(i,F*3),m.fromArray(i,te*3),_.fromArray(i,G*3),S.fromArray(a,F*2),M.fromArray(a,te*2),y.fromArray(a,G*2),m.sub(d),_.sub(d),M.sub(S),y.sub(S);const I=1/(M.x*y.y-y.x*M.y);isFinite(I)&&(v.copy(m).multiplyScalar(y.y).addScaledVector(_,-M.y).multiplyScalar(I),A.copy(_).multiplyScalar(M.x).addScaledVector(m,-y.x).multiplyScalar(I),u[F].add(v),u[te].add(v),u[G].add(v),f[F].add(A),f[te].add(A),f[G].add(A))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let F=0,te=R.length;F<te;++F){const G=R[F],I=G.start,z=G.count;for(let W=I,$=I+z;W<$;W+=3)T(n[W+0],n[W+1],n[W+2])}const P=new Y,D=new Y,p=new Y,O=new Y;function w(F){p.fromArray(r,F*3),O.copy(p);const te=u[F];P.copy(te),P.sub(p.multiplyScalar(p.dot(te))).normalize(),D.crossVectors(O,te);const I=D.dot(f[F])<0?-1:1;c[F*4]=P.x,c[F*4+1]=P.y,c[F*4+2]=P.z,c[F*4+3]=I}for(let F=0,te=R.length;F<te;++F){const G=R[F],I=G.start,z=G.count;for(let W=I,$=I+z;W<$;W+=3)w(n[W+0]),w(n[W+1]),w(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const i=new Y,r=new Y,a=new Y,o=new Y,c=new Y,u=new Y,f=new Y,d=new Y;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),M=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,S),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),f.subVectors(a,r),d.subVectors(i,r),f.cross(d),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),o.add(f),c.add(f),u.add(f),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let m=0,_=t.count;m<_;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,r),d.subVectors(i,r),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,d=o.normalized,m=new u.constructor(c.length*f);let _=0,S=0;for(let M=0,y=c.length;M<y;M++){o.isInterleavedBufferAttribute?_=c[M]*o.data.stride+o.offset:_=c[M]*f;for(let v=0;v<f;v++)m[S++]=u[_++]}return new wn(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=e(c,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let f=0,d=u.length;f<d;f++){const m=u[f],_=e(m,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let d=0,m=u.length;d<m;d++){const _=u[d];f.push(_.toJSON(e.data))}f.length>0&&(i[c]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],d=r[u];for(let m=0,_=d.length;m<_;m++)f.push(d[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new dt,Hr=new no,wo=new Ni,rh=new Y,Rs=new Y,Cs=new Y,Ps=new Y,fc=new Y,Ao=new Y,Ro=new $e,Co=new $e,Po=new $e,sh=new Y,ah=new Y,oh=new Y,Lo=new Y,Do=new Y;class Gn extends Gt{constructor(e=new yi,t=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ao.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const f=o[c],d=r[c];f!==0&&(fc.fromBufferAttribute(d,e),a?Ao.addScaledVector(fc,f):Ao.addScaledVector(fc.sub(t),f))}t.add(Ao)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),Hr.copy(e.ray).recast(e.near),!(wo.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(wo,rh)===null||Hr.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,m=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,M=m.length;S<M;S++){const y=m[S],v=a[y.materialIndex],A=Math.max(y.start,_.start),T=Math.min(o.count,Math.min(y.start+y.count,_.start+_.count));for(let R=A,P=T;R<P;R+=3){const D=o.getX(R),p=o.getX(R+1),O=o.getX(R+2);i=Io(this,v,e,n,u,f,d,D,p,O),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),M=Math.min(o.count,_.start+_.count);for(let y=S,v=M;y<v;y+=3){const A=o.getX(y),T=o.getX(y+1),R=o.getX(y+2);i=Io(this,a,e,n,u,f,d,A,T,R),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,M=m.length;S<M;S++){const y=m[S],v=a[y.materialIndex],A=Math.max(y.start,_.start),T=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let R=A,P=T;R<P;R+=3){const D=R,p=R+1,O=R+2;i=Io(this,v,e,n,u,f,d,D,p,O),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let y=S,v=M;y<v;y+=3){const A=y,T=y+1,R=y+2;i=Io(this,a,e,n,u,f,d,A,T,R),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function Dv(s,e,t,n,i,r,a,o){let c;if(e.side===Nn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ar,o),c===null)return null;Do.copy(o),Do.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(Do);return u<t.near||u>t.far?null:{distance:u,point:Do.clone(),object:s}}function Io(s,e,t,n,i,r,a,o,c,u){s.getVertexPosition(o,Rs),s.getVertexPosition(c,Cs),s.getVertexPosition(u,Ps);const f=Dv(s,e,t,n,Rs,Cs,Ps,Lo);if(f){i&&(Ro.fromBufferAttribute(i,o),Co.fromBufferAttribute(i,c),Po.fromBufferAttribute(i,u),f.uv=pi.getInterpolation(Lo,Rs,Cs,Ps,Ro,Co,Po,new $e)),r&&(Ro.fromBufferAttribute(r,o),Co.fromBufferAttribute(r,c),Po.fromBufferAttribute(r,u),f.uv1=pi.getInterpolation(Lo,Rs,Cs,Ps,Ro,Co,Po,new $e),f.uv2=f.uv1),a&&(sh.fromBufferAttribute(a,o),ah.fromBufferAttribute(a,c),oh.fromBufferAttribute(a,u),f.normal=pi.getInterpolation(Lo,Rs,Cs,Ps,sh,ah,oh,new Y),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new Y,materialIndex:0};pi.getNormal(Rs,Cs,Ps,d.normal),f.face=d}return f}class io extends yi{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],f=[],d=[];let m=0,_=0;S("z","y","x",-1,-1,n,t,e,a,r,0),S("z","y","x",1,-1,n,t,-e,a,r,1),S("x","z","y",1,1,e,n,t,i,a,2),S("x","z","y",1,-1,e,n,-t,i,a,3),S("x","y","z",1,-1,e,t,n,i,r,4),S("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new vi(u,3)),this.setAttribute("normal",new vi(f,3)),this.setAttribute("uv",new vi(d,2));function S(M,y,v,A,T,R,P,D,p,O,w){const F=R/p,te=P/O,G=R/2,I=P/2,z=D/2,W=p+1,$=O+1;let K=0,ie=0;const ce=new Y;for(let pe=0;pe<$;pe++){const Ee=pe*te-I;for(let re=0;re<W;re++){const me=re*F-G;ce[M]=me*A,ce[y]=Ee*T,ce[v]=z,u.push(ce.x,ce.y,ce.z),ce[M]=0,ce[y]=0,ce[v]=D>0?1:-1,f.push(ce.x,ce.y,ce.z),d.push(re/p),d.push(1-pe/O),K+=1}}for(let pe=0;pe<O;pe++)for(let Ee=0;Ee<p;Ee++){const re=m+Ee+W*pe,me=m+Ee+W*(pe+1),ge=m+(Ee+1)+W*(pe+1),Pe=m+(Ee+1)+W*pe;c.push(re,me,Pe),c.push(me,ge,Pe),ie+=6}o.addGroup(_,ie,w),_+=ie,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const n=sa(s[t]);for(const i in n)e[i]=n[i]}return e}function Iv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Up(s){return s.getRenderTarget()===null?s.outputColorSpace:Ii}const ol={clone:sa,merge:Tn};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Op extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends Op{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Ds=1;class Ov extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new En(Ls,Ds,e,t);i.layers=this.layers,this.add(i);const r=new En(Ls,Ds,e,t);r.layers=this.layers,this.add(r);const a=new En(Ls,Ds,e,t);a.layers=this.layers,this.add(a);const o=new En(Ls,Ds,e,t);o.layers=this.layers,this.add(o);const c=new En(Ls,Ds,e,t);c.layers=this.layers,this.add(c);const u=new En(Ls,Ds,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const u of t)this.remove(u);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,c,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,m=e.xr.enabled;e.toneMapping=tr,e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Fp extends dn{constructor(e,t,n,i,r,a,o,c,u,f){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,i,r,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fv extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ha("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rs?nt:ss),this.texture=new Fp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new io(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:wr});r.uniforms.tEquirect.value=t;const a=new Gn(i,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=Cn),new Ov(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const hc=new Y,kv=new Y,Bv=new ht;class jr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hc.subVectors(n,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bv.getNormalMatrix(e),i=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Ni,No=new Y;class bu{constructor(e=new jr,t=new jr,n=new jr,i=new jr,r=new jr,a=new jr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],u=i[4],f=i[5],d=i[6],m=i[7],_=i[8],S=i[9],M=i[10],y=i[11],v=i[12],A=i[13],T=i[14],R=i[15];if(n[0].setComponents(c-r,m-u,y-_,R-v).normalize(),n[1].setComponents(c+r,m+u,y+_,R+v).normalize(),n[2].setComponents(c+a,m+f,y+S,R+A).normalize(),n[3].setComponents(c-a,m-f,y-S,R-A).normalize(),n[4].setComponents(c-o,m-d,y-M,R-T).normalize(),t===Ji)n[5].setComponents(c+o,m+d,y+M,R+T).normalize();else if(t===sl)n[5].setComponents(o,d,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(No.x=i.normal.x>0?e.max.x:e.min.x,No.y=i.normal.y>0?e.max.y:e.min.y,No.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zv(s,e){const t=e.isWebGL2,n=new WeakMap;function i(u,f){const d=u.array,m=u.usage,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,d,m),u.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)S=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function r(u,f,d){const m=f.array,_=f.updateRange;s.bindBuffer(d,u),_.count===-1?s.bufferSubData(d,0,m):(t?s.bufferSubData(d,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):s.bufferSubData(d,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f&&(s.deleteBuffer(f.buffer),n.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const m=n.get(u);(!m||m.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,i(u,f)):d.version<u.version&&(r(d.buffer,u,f),d.version=u.version)}return{get:a,remove:o,update:c}}class Eu extends yi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),u=o+1,f=c+1,d=e/o,m=t/c,_=[],S=[],M=[],y=[];for(let v=0;v<f;v++){const A=v*m-a;for(let T=0;T<u;T++){const R=T*d-r;S.push(R,-A,0),M.push(0,0,1),y.push(T/o),y.push(1-v/c)}}for(let v=0;v<c;v++)for(let A=0;A<o;A++){const T=A+u*v,R=A+u*(v+1),P=A+1+u*(v+1),D=A+1+u*v;_.push(T,R,D),_.push(R,P,D)}this.setIndex(_),this.setAttribute("position",new vi(S,3)),this.setAttribute("normal",new vi(M,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv="vec3 transformed = vec3( position );",Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,W0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,my=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,My=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dy=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iy=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ny=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$y=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ft={alphamap_fragment:Hv,alphamap_pars_fragment:Vv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:jv,begin_vertex:qv,beginnormal_vertex:Yv,bsdfs:Kv,iridescence_fragment:$v,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:Jv,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:r0,color_vertex:s0,common:a0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:u0,emissivemap_fragment:f0,emissivemap_pars_fragment:h0,encodings_fragment:d0,encodings_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:P0,envmap_vertex:y0,fog_vertex:x0,fog_pars_vertex:M0,fog_fragment:S0,fog_pars_fragment:T0,gradientmap_pars_fragment:b0,lightmap_fragment:E0,lightmap_pars_fragment:w0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:I0,lights_phong_pars_fragment:N0,lights_physical_fragment:U0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:k0,lights_fragment_end:B0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:j0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:K0,morphcolor_vertex:$0,morphnormal_vertex:Z0,morphtarget_pars_vertex:Q0,morphtarget_vertex:J0,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:ny,normal_pars_vertex:iy,normal_vertex:ry,normalmap_pars_fragment:sy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ly,iridescence_pars_fragment:cy,output_fragment:uy,packing:fy,premultiplied_alpha_fragment:hy,project_vertex:dy,dithering_fragment:py,dithering_pars_fragment:my,roughnessmap_fragment:gy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:yy,shadowmap_vertex:xy,shadowmask_pars_fragment:My,skinbase_vertex:Sy,skinning_pars_vertex:Ty,skinning_vertex:by,skinnormal_vertex:Ey,specularmap_fragment:wy,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Py,transmission_pars_fragment:Ly,uv_pars_fragment:Dy,uv_pars_vertex:Iy,uv_vertex:Ny,worldpos_vertex:Uy,background_vert:Oy,background_frag:Fy,backgroundCube_vert:ky,backgroundCube_frag:By,cube_vert:zy,cube_frag:Hy,depth_vert:Vy,depth_frag:Gy,distanceRGBA_vert:Wy,distanceRGBA_frag:Xy,equirect_vert:jy,equirect_frag:qy,linedashed_vert:Yy,linedashed_frag:Ky,meshbasic_vert:$y,meshbasic_frag:Zy,meshlambert_vert:Qy,meshlambert_frag:Jy,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:rx,meshphong_frag:sx,meshphysical_vert:ax,meshphysical_frag:ox,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:ux,points_frag:fx,shadow_vert:hx,shadow_frag:dx,sprite_vert:px,sprite_frag:mx},be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new it(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([be.points,be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([be.common,be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([be.sprite,be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Tn([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Tn([be.lights,be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Uo={r:0,b:0,g:0};function gx(s,e,t,n,i,r,a){const o=new it(0);let c=r===!0?0:1,u,f,d=null,m=0,_=null;function S(y,v){let A=!1,T=v.isScene===!0?v.background:null;switch(T&&T.isTexture&&(T=(v.backgroundBlurriness>0?t:e).get(T)),T===null?M(o,c):T&&T.isColor&&(M(T,1),A=!0),s.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),A=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),A=!0;break}(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),T&&(T.isCubeTexture||T.mapping===dl)?(f===void 0&&(f=new Gn(new io(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:sa(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,p,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=T.colorSpace!==nt,(d!==T||m!==T.version||_!==s.toneMapping)&&(f.material.needsUpdate=!0,d=T,m=T.version,_=s.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Gn(new Eu(2,2),new Wn({name:"BackgroundMaterial",uniforms:sa(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=T.colorSpace!==nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||m!==T.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,d=T,m=T.version,_=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function M(y,v){y.getRGB(Uo,Up(s)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,M(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,M(o,c)},render:S}}function _x(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=y(null);let u=c,f=!1;function d(z,W,$,K,ie){let ce=!1;if(a){const pe=M(K,$,W);u!==pe&&(u=pe,_(u.object)),ce=v(z,K,$,ie),ce&&A(z,K,$,ie)}else{const pe=W.wireframe===!0;(u.geometry!==K.id||u.program!==$.id||u.wireframe!==pe)&&(u.geometry=K.id,u.program=$.id,u.wireframe=pe,ce=!0)}ie!==null&&t.update(ie,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,O(z,W,$,K),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function _(z){return n.isWebGL2?s.bindVertexArray(z):r.bindVertexArrayOES(z)}function S(z){return n.isWebGL2?s.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function M(z,W,$){const K=$.wireframe===!0;let ie=o[z.id];ie===void 0&&(ie={},o[z.id]=ie);let ce=ie[W.id];ce===void 0&&(ce={},ie[W.id]=ce);let pe=ce[K];return pe===void 0&&(pe=y(m()),ce[K]=pe),pe}function y(z){const W=[],$=[],K=[];for(let ie=0;ie<i;ie++)W[ie]=0,$[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:K,object:z,attributes:{},index:null}}function v(z,W,$,K){const ie=u.attributes,ce=W.attributes;let pe=0;const Ee=$.getAttributes();for(const re in Ee)if(Ee[re].location>=0){const ge=ie[re];let Pe=ce[re];if(Pe===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(Pe=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(Pe=z.instanceColor)),ge===void 0||ge.attribute!==Pe||Pe&&ge.data!==Pe.data)return!0;pe++}return u.attributesNum!==pe||u.index!==K}function A(z,W,$,K){const ie={},ce=W.attributes;let pe=0;const Ee=$.getAttributes();for(const re in Ee)if(Ee[re].location>=0){let ge=ce[re];ge===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor));const Pe={};Pe.attribute=ge,ge&&ge.data&&(Pe.data=ge.data),ie[re]=Pe,pe++}u.attributes=ie,u.attributesNum=pe,u.index=K}function T(){const z=u.newAttributes;for(let W=0,$=z.length;W<$;W++)z[W]=0}function R(z){P(z,0)}function P(z,W){const $=u.newAttributes,K=u.enabledAttributes,ie=u.attributeDivisors;$[z]=1,K[z]===0&&(s.enableVertexAttribArray(z),K[z]=1),ie[z]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),ie[z]=W)}function D(){const z=u.newAttributes,W=u.enabledAttributes;for(let $=0,K=W.length;$<K;$++)W[$]!==z[$]&&(s.disableVertexAttribArray($),W[$]=0)}function p(z,W,$,K,ie,ce,pe){pe===!0?s.vertexAttribIPointer(z,W,$,ie,ce):s.vertexAttribPointer(z,W,$,K,ie,ce)}function O(z,W,$,K){if(n.isWebGL2===!1&&(z.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ie=K.attributes,ce=$.getAttributes(),pe=W.defaultAttributeValues;for(const Ee in ce){const re=ce[Ee];if(re.location>=0){let me=ie[Ee];if(me===void 0&&(Ee==="instanceMatrix"&&z.instanceMatrix&&(me=z.instanceMatrix),Ee==="instanceColor"&&z.instanceColor&&(me=z.instanceColor)),me!==void 0){const ge=me.normalized,Pe=me.itemSize,Ue=t.get(me);if(Ue===void 0)continue;const We=Ue.buffer,ct=Ue.type,Ke=Ue.bytesPerElement,At=n.isWebGL2===!0&&(ct===s.INT||ct===s.UNSIGNED_INT||me.gpuType===_p);if(me.isInterleavedBufferAttribute){const gt=me.data,Q=gt.stride,Wt=me.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<re.locationSize;Xe++)P(re.location+Xe,gt.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<re.locationSize;Xe++)R(re.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Xe=0;Xe<re.locationSize;Xe++)p(re.location+Xe,Pe/re.locationSize,ct,ge,Q*Ke,(Wt+Pe/re.locationSize*Xe)*Ke,At)}else{if(me.isInstancedBufferAttribute){for(let gt=0;gt<re.locationSize;gt++)P(re.location+gt,me.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let gt=0;gt<re.locationSize;gt++)R(re.location+gt);s.bindBuffer(s.ARRAY_BUFFER,We);for(let gt=0;gt<re.locationSize;gt++)p(re.location+gt,Pe/re.locationSize,ct,ge,Pe*Ke,Pe/re.locationSize*gt*Ke,At)}}else if(pe!==void 0){const ge=pe[Ee];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(re.location,ge);break;case 3:s.vertexAttrib3fv(re.location,ge);break;case 4:s.vertexAttrib4fv(re.location,ge);break;default:s.vertexAttrib1fv(re.location,ge)}}}}D()}function w(){G();for(const z in o){const W=o[z];for(const $ in W){const K=W[$];for(const ie in K)S(K[ie].object),delete K[ie];delete W[$]}delete o[z]}}function F(z){if(o[z.id]===void 0)return;const W=o[z.id];for(const $ in W){const K=W[$];for(const ie in K)S(K[ie].object),delete K[ie];delete W[$]}delete o[z.id]}function te(z){for(const W in o){const $=o[W];if($[z.id]===void 0)continue;const K=$[z.id];for(const ie in K)S(K[ie].object),delete K[ie];delete $[z.id]}}function G(){I(),f=!0,u!==c&&(u=c,_(u.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:F,releaseStatesOfProgram:te,initAttributes:T,enableAttribute:R,disableUnusedAttributes:D}}function vx(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,f){s.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,d){if(d===0)return;let m,_;if(i)m=s,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,f,d),t.update(f,r,d)}this.setMode=a,this.render=o,this.renderInstances=c}function yx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const p=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(p){if(p==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,R=a||e.has("OES_texture_float"),P=T&&R,D=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:A,vertexTextures:T,floatFragmentTextures:R,floatVertexTextures:P,maxSamples:D}}function xx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new jr,o=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const _=d.length!==0||m||n!==0||i;return i=m,n=d.length,_},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){t=f(d,m,0)},this.setState=function(d,m,_){const S=d.clippingPlanes,M=d.clipIntersection,y=d.clipShadows,v=s.get(d);if(!i||S===null||S.length===0||r&&!y)r?f(null):u();else{const A=r?0:n,T=A*4;let R=v.clippingState||null;c.value=R,R=f(S,m,T,_);for(let P=0;P!==T;++P)R[P]=t[P];v.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,m,_,S){const M=d!==null?d.length:0;let y=null;if(M!==0){if(y=c.value,S!==!0||y===null){const v=_+M*4,A=m.matrixWorldInverse;o.getNormalMatrix(A),(y===null||y.length<v)&&(y=new Float32Array(v));for(let T=0,R=_;T!==M;++T,R+=4)a.copy(d[T]).applyMatrix4(A,o),a.normal.toArray(y,R),y[R+3]=a.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function Mx(s){let e=new WeakMap;function t(a,o){return o===Gc?a.mapping=Js:o===Wc&&(a.mapping=ea),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Gc||o===Wc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Fv(c.height/2);return u.fromEquirectangularTexture(s,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ml extends Op{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,lh=[.125,.215,.35,.446,.526,.582],Kr=20,dc=new ml,ch=new it;let pc=null;const qr=(1+Math.sqrt(5))/2,Is=1/qr,uh=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,qr,Is),new Y(0,qr,-Is),new Y(Is,0,qr),new Y(-Is,0,qr),new Y(qr,Is,0),new Y(-qr,Is,0)];class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:nr,format:ti,colorSpace:Ii,depthBuffer:!1},i=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(r)),this._blurMaterial=Tx(r,e,t)}return i}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,i){const o=new En(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(ch),f.toneMapping=tr,f.autoClear=!1;const _=new Tr({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),S=new Gn(new io,_);let M=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,M=!0):(_.color.copy(ch),M=!0);for(let v=0;v<6;v++){const A=v%3;A===0?(o.up.set(0,c[v],0),o.lookAt(u[v],0,0)):A===1?(o.up.set(0,0,c[v]),o.lookAt(0,u[v],0)):(o.up.set(0,c[v],0),o.lookAt(0,0,u[v]));const T=this._cubeSize;Oo(i,A*T,v>2?T:0,T,T),f.setRenderTarget(i),M&&f.render(S,o),f.render(e,o)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===ea;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Gn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Oo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=uh[(i-1)%uh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Gn(this._lodPlanes[i],u),m=u.uniforms,_=this._sizeLods[n]-1,S=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Kr-1),M=r/S,y=isFinite(r)?1+Math.floor(f*M):Kr;y>Kr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const v=[];let A=0;for(let p=0;p<Kr;++p){const O=p/M,w=Math.exp(-O*O/2);v.push(w),p===0?A+=w:p<y&&(A+=2*w)}for(let p=0;p<v.length;p++)v[p]=v[p]/A;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=v,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:T}=this;m.dTheta.value=S,m.mipInt.value=T-n;const R=this._sizeLods[i],P=3*R*(i>T-zs?i-T+zs:0),D=4*(this._cubeSize-R);Oo(t,P,D,3*R,2*R),c.setRenderTarget(t),c.render(d,dc)}}function Sx(s){const e=[],t=[],n=[];let i=s;const r=s-zs+1+lh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-zs?c=lh[a-s+zs-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),f=-u,d=1+u,m=[f,f,d,f,d,d,f,f,d,d,f,d],_=6,S=6,M=3,y=2,v=1,A=new Float32Array(M*S*_),T=new Float32Array(y*S*_),R=new Float32Array(v*S*_);for(let D=0;D<_;D++){const p=D%3*2/3-1,O=D>2?0:-1,w=[p,O,0,p+2/3,O,0,p+2/3,O+1,0,p,O,0,p+2/3,O+1,0,p,O+1,0];A.set(w,M*S*D),T.set(m,y*S*D);const F=[D,D,D,D,D,D];R.set(F,v*S*D)}const P=new yi;P.setAttribute("position",new wn(A,M)),P.setAttribute("uv",new wn(T,y)),P.setAttribute("faceIndex",new wn(R,v)),e.push(P),i>zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(s,e,t){const n=new _i(s,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Tx(s,e,t){const n=new Float32Array(Kr),i=new Y(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function dh(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function ph(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Gc||c===Wc,f=c===Js||c===ea;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new fh(s)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(u&&d&&d.height>0||f&&d&&i(d)){t===null&&(t=new fh(s));const m=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,m),o.addEventListener("dispose",r),m.texture}else return null}}}return o}function i(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ex(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wx(s,e,t,n){const i={},r=new WeakMap;function a(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const M=m.morphAttributes[S];for(let y=0,v=M.length;y<v;y++)e.remove(M[y])}m.removeEventListener("dispose",a),delete i[m.id];const _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(d,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function c(d){const m=d.attributes;for(const S in m)e.update(m[S],s.ARRAY_BUFFER);const _=d.morphAttributes;for(const S in _){const M=_[S];for(let y=0,v=M.length;y<v;y++)e.update(M[y],s.ARRAY_BUFFER)}}function u(d){const m=[],_=d.index,S=d.attributes.position;let M=0;if(_!==null){const A=_.array;M=_.version;for(let T=0,R=A.length;T<R;T+=3){const P=A[T+0],D=A[T+1],p=A[T+2];m.push(P,D,D,p,p,P)}}else{const A=S.array;M=S.version;for(let T=0,R=A.length/3-1;T<R;T+=3){const P=T+0,D=T+1,p=T+2;m.push(P,D,D,p,p,P)}}const y=new(Rp(m)?Np:Ip)(m,1);y.version=M;const v=r.get(d);v&&e.remove(v),r.set(d,y)}function f(d){const m=r.get(d);if(m){const _=d.index;_!==null&&m.version<_.version&&u(d)}else u(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:f}}function Ax(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,c;function u(m){o=m.type,c=m.bytesPerElement}function f(m,_){s.drawElements(r,_,o,m*c),t.update(_,r,1)}function d(m,_,S){if(S===0)return;let M,y;if(i)M=s,y="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[y](r,_,o,m*c,S),t.update(_,r,S)}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=d}function Rx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cx(s,e){return s[0]-e[0]}function Px(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Lx(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ft,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let M=r.get(f);if(M===void 0||M.count!==S){let z=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",z)};M!==void 0&&M.texture.dispose();const A=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,P=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],p=f.morphAttributes.color||[];let O=0;A===!0&&(O=1),T===!0&&(O=2),R===!0&&(O=3);let w=f.attributes.position.count*O,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const te=new Float32Array(w*F*4*S),G=new Lp(te,w,F,S);G.type=Qi,G.needsUpdate=!0;const I=O*4;for(let W=0;W<S;W++){const $=P[W],K=D[W],ie=p[W],ce=w*F*4*W;for(let pe=0;pe<$.count;pe++){const Ee=pe*I;A===!0&&(a.fromBufferAttribute($,pe),te[ce+Ee+0]=a.x,te[ce+Ee+1]=a.y,te[ce+Ee+2]=a.z,te[ce+Ee+3]=0),T===!0&&(a.fromBufferAttribute(K,pe),te[ce+Ee+4]=a.x,te[ce+Ee+5]=a.y,te[ce+Ee+6]=a.z,te[ce+Ee+7]=0),R===!0&&(a.fromBufferAttribute(ie,pe),te[ce+Ee+8]=a.x,te[ce+Ee+9]=a.y,te[ce+Ee+10]=a.z,te[ce+Ee+11]=ie.itemSize===4?a.w:1)}}M={count:S,texture:G,size:new $e(w,F)},r.set(f,M),f.addEventListener("dispose",z)}let y=0;for(let A=0;A<m.length;A++)y+=m[A];const v=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",M.size)}else{const _=m===void 0?0:m.length;let S=n[f.id];if(S===void 0||S.length!==_){S=[];for(let T=0;T<_;T++)S[T]=[T,0];n[f.id]=S}for(let T=0;T<_;T++){const R=S[T];R[0]=T,R[1]=m[T]}S.sort(Px);for(let T=0;T<8;T++)T<_&&S[T][1]?(o[T][0]=S[T][0],o[T][1]=S[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Cx);const M=f.morphAttributes.position,y=f.morphAttributes.normal;let v=0;for(let T=0;T<8;T++){const R=o[T],P=R[0],D=R[1];P!==Number.MAX_SAFE_INTEGER&&D?(M&&f.getAttribute("morphTarget"+T)!==M[P]&&f.setAttribute("morphTarget"+T,M[P]),y&&f.getAttribute("morphNormal"+T)!==y[P]&&f.setAttribute("morphNormal"+T,y[P]),i[T]=D,v+=D):(M&&f.hasAttribute("morphTarget"+T)===!0&&f.deleteAttribute("morphTarget"+T),y&&f.hasAttribute("morphNormal"+T)===!0&&f.deleteAttribute("morphNormal"+T),i[T]=0)}const A=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Dx(s,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,f=c.geometry,d=e.get(c,f);return i.get(d)!==u&&(e.update(d),i.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),d}function a(){i=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const Bp=new dn,zp=new Lp,Hp=new Sv,Vp=new Fp,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function ca(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=mh[i];if(r===void 0&&(r=new Float32Array(i),mh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function gl(s,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function Ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function Ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function Fx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;yh.set(n),s.uniformMatrix2fv(this.addr,!1,yh),sn(t,n)}}function kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;vh.set(n),s.uniformMatrix3fv(this.addr,!1,vh),sn(t,n)}}function Bx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;_h.set(n),s.uniformMatrix4fv(this.addr,!1,_h),sn(t,n)}}function zx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function Vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function Wx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function Yx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Bp,i)}function Kx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hp,i)}function $x(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vp,i)}function Zx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zp,i)}function Qx(s){switch(s){case 5126:return Ix;case 35664:return Nx;case 35665:return Ux;case 35666:return Ox;case 35674:return Fx;case 35675:return kx;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return jx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Zx}}function Jx(s,e){s.uniform1fv(this.addr,e)}function eM(s,e){const t=ca(e,this.size,2);s.uniform2fv(this.addr,t)}function tM(s,e){const t=ca(e,this.size,3);s.uniform3fv(this.addr,t)}function nM(s,e){const t=ca(e,this.size,4);s.uniform4fv(this.addr,t)}function iM(s,e){const t=ca(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rM(s,e){const t=ca(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sM(s,e){const t=ca(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function aM(s,e){s.uniform1iv(this.addr,e)}function oM(s,e){s.uniform2iv(this.addr,e)}function lM(s,e){s.uniform3iv(this.addr,e)}function cM(s,e){s.uniform4iv(this.addr,e)}function uM(s,e){s.uniform1uiv(this.addr,e)}function fM(s,e){s.uniform2uiv(this.addr,e)}function hM(s,e){s.uniform3uiv(this.addr,e)}function dM(s,e){s.uniform4uiv(this.addr,e)}function pM(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Bp,r[a])}function mM(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hp,r[a])}function gM(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vp,r[a])}function _M(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||zp,r[a])}function vM(s){switch(s){case 5126:return Jx;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return aM;case 35667:case 35671:return oM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return fM;case 36295:return hM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class yM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qx(t.type)}}class xM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vM(t.type)}}class MM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function xh(s,e){s.seq.push(e),s.map[e.id]=e}function SM(s,e,t){const n=s.name,i=n.length;for(mc.lastIndex=0;;){const r=mc.exec(n),a=mc.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){xh(t,u===void 0?new yM(o,s,e):new xM(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new MM(o),xh(t,d)),t=d}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);SM(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Mh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let TM=0;function bM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function EM(s){switch(s){case Ii:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Sh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+bM(s.getShaderSource(e),a)}else return i}function wM(s,e){const t=EM(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function AM(s,e){let t;switch(e){case R_:t="Linear";break;case C_:t="Reinhard";break;case pp:t="OptimizedCineon";break;case P_:t="ACESFilmic";break;case L_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function RM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Na).join(`
`)}function CM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Na(s){return s!==""}function Th(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(s){return s.replace(LM,DM)}function DM(s,e){const t=ft[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $c(t)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(s){return s.replace(IM,NM)}function NM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case ea:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function kM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function BM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=UM(t),u=OM(t),f=FM(t),d=kM(t),m=BM(t),_=t.isWebGL2?"":RM(t),S=CM(r),M=i.createProgram();let y,v,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Na).join(`
`),y.length>0&&(y+=`
`),v=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Na).join(`
`),v.length>0&&(v+=`
`)):(y=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),v=[_,wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ft.tonemapping_pars_fragment:"",t.toneMapping!==tr?AM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.encodings_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),a=$c(a),a=Th(a,t),a=bh(a,t),o=$c(o),o=Th(o,t),o=bh(o,t),a=Eh(a),o=Eh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=A+y+a,R=A+v+o,P=Mh(i,i.VERTEX_SHADER,T),D=Mh(i,i.FRAGMENT_SHADER,R);if(i.attachShader(M,P),i.attachShader(M,D),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(M).trim(),F=i.getShaderInfoLog(P).trim(),te=i.getShaderInfoLog(D).trim();let G=!0,I=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,P,D);else{const z=Sh(i,P,"vertex"),W=Sh(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+z+`
`+W)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(F===""||te==="")&&(I=!1);I&&(this.diagnostics={runnable:G,programLog:w,vertexShader:{log:F,prefix:y},fragmentShader:{log:te,prefix:v}})}i.deleteShader(P),i.deleteShader(D);let p;this.getUniforms=function(){return p===void 0&&(p=new jo(i,M)),p};let O;return this.getAttributes=function(){return O===void 0&&(O=PM(i,M)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=D,this}let HM=0;class VM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GM(e),t.set(e,n)),n}}class GM{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}}function WM(s,e,t,n,i,r,a){const o=new Tu,c=new VM,u=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let _=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return w===0?"uv":`uv${w}`}function y(w,F,te,G,I){const z=G.fog,W=I.geometry,$=w.isMeshStandardMaterial?G.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),ie=K&&K.mapping===dl?K.image.height:null,ce=S[w.type];w.precision!==null&&(_=i.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ee=pe!==void 0?pe.length:0;let re=0;W.morphAttributes.position!==void 0&&(re=1),W.morphAttributes.normal!==void 0&&(re=2),W.morphAttributes.color!==void 0&&(re=3);let me,ge,Pe,Ue;if(ce){const Mt=wi[ce];me=Mt.vertexShader,ge=Mt.fragmentShader}else me=w.vertexShader,ge=w.fragmentShader,c.update(w),Pe=c.getVertexShaderID(w),Ue=c.getFragmentShaderID(w);const We=s.getRenderTarget(),ct=I.isInstancedMesh===!0,Ke=!!w.map,At=!!w.matcap,gt=!!K,Q=!!w.aoMap,Wt=!!w.lightMap,Xe=!!w.bumpMap,ut=!!w.normalMap,je=!!w.displacementMap,wt=!!w.emissiveMap,Ze=!!w.metalnessMap,at=!!w.roughnessMap,Rt=w.anisotropy>0,tn=w.clearcoat>0,It=w.iridescence>0,k=w.sheen>0,L=w.transmission>0,q=Rt&&!!w.anisotropyMap,_e=tn&&!!w.clearcoatMap,ye=tn&&!!w.clearcoatNormalMap,Ae=tn&&!!w.clearcoatRoughnessMap,ze=It&&!!w.iridescenceMap,Re=It&&!!w.iridescenceThicknessMap,de=k&&!!w.sheenColorMap,He=k&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,Be=!!w.specularColorMap,Ie=!!w.specularIntensityMap,Oe=L&&!!w.transmissionMap,ot=L&&!!w.thicknessMap,Ct=!!w.gradientMap,X=!!w.alphaMap,we=w.alphaTest>0,se=!!w.extensions,Me=!!W.attributes.uv1,Ce=!!W.attributes.uv2,yt=!!W.attributes.uv3;return{isWebGL2:f,shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:me,fragmentShader:ge,defines:w.defines,customVertexShaderID:Pe,customFragmentShaderID:Ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,instancing:ct,instancingColor:ct&&I.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:We===null?s.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Ii,map:Ke,matcap:At,envMap:gt,envMapMode:gt&&K.mapping,envMapCubeUVHeight:ie,aoMap:Q,lightMap:Wt,bumpMap:Xe,normalMap:ut,displacementMap:m&&je,emissiveMap:wt,normalMapObjectSpace:ut&&w.normalMapType===X_,normalMapTangentSpace:ut&&w.normalMapType===Ep,metalnessMap:Ze,roughnessMap:at,anisotropy:Rt,anisotropyMap:q,clearcoat:tn,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ae,iridescence:It,iridescenceMap:ze,iridescenceThicknessMap:Re,sheen:k,sheenColorMap:de,sheenRoughnessMap:He,specularMap:Fe,specularColorMap:Be,specularIntensityMap:Ie,transmission:L,transmissionMap:Oe,thicknessMap:ot,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===Ws,alphaMap:X,alphaTest:we,combine:w.combine,mapUv:Ke&&M(w.map.channel),aoMapUv:Q&&M(w.aoMap.channel),lightMapUv:Wt&&M(w.lightMap.channel),bumpMapUv:Xe&&M(w.bumpMap.channel),normalMapUv:ut&&M(w.normalMap.channel),displacementMapUv:je&&M(w.displacementMap.channel),emissiveMapUv:wt&&M(w.emissiveMap.channel),metalnessMapUv:Ze&&M(w.metalnessMap.channel),roughnessMapUv:at&&M(w.roughnessMap.channel),anisotropyMapUv:q&&M(w.anisotropyMap.channel),clearcoatMapUv:_e&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:ye&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:de&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&M(w.sheenRoughnessMap.channel),specularMapUv:Fe&&M(w.specularMap.channel),specularColorMapUv:Be&&M(w.specularColorMap.channel),specularIntensityMapUv:Ie&&M(w.specularIntensityMap.channel),transmissionMapUv:Oe&&M(w.transmissionMap.channel),thicknessMapUv:ot&&M(w.thicknessMap.channel),alphaMapUv:X&&M(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ut||Rt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Ce,vertexUv3s:yt,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(Ke||X),fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:re,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&te.length>0,shadowMapType:s.shadowMap.type,toneMapping:w.toneMapped?s.toneMapping:tr,useLegacyLights:s.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ri,flipSided:w.side===Nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:se&&w.extensions.derivatives===!0,extensionFragDepth:se&&w.extensions.fragDepth===!0,extensionDrawBuffers:se&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const F=[];if(w.shaderID?F.push(w.shaderID):(F.push(w.customVertexShaderID),F.push(w.customFragmentShaderID)),w.defines!==void 0)for(const te in w.defines)F.push(te),F.push(w.defines[te]);return w.isRawShaderMaterial===!1&&(A(F,w),T(F,w),F.push(s.outputColorSpace)),F.push(w.customProgramCacheKey),F.join()}function A(w,F){w.push(F.precision),w.push(F.outputColorSpace),w.push(F.envMapMode),w.push(F.envMapCubeUVHeight),w.push(F.mapUv),w.push(F.alphaMapUv),w.push(F.lightMapUv),w.push(F.aoMapUv),w.push(F.bumpMapUv),w.push(F.normalMapUv),w.push(F.displacementMapUv),w.push(F.emissiveMapUv),w.push(F.metalnessMapUv),w.push(F.roughnessMapUv),w.push(F.anisotropyMapUv),w.push(F.clearcoatMapUv),w.push(F.clearcoatNormalMapUv),w.push(F.clearcoatRoughnessMapUv),w.push(F.iridescenceMapUv),w.push(F.iridescenceThicknessMapUv),w.push(F.sheenColorMapUv),w.push(F.sheenRoughnessMapUv),w.push(F.specularMapUv),w.push(F.specularColorMapUv),w.push(F.specularIntensityMapUv),w.push(F.transmissionMapUv),w.push(F.thicknessMapUv),w.push(F.combine),w.push(F.fogExp2),w.push(F.sizeAttenuation),w.push(F.morphTargetsCount),w.push(F.morphAttributeCount),w.push(F.numDirLights),w.push(F.numPointLights),w.push(F.numSpotLights),w.push(F.numSpotLightMaps),w.push(F.numHemiLights),w.push(F.numRectAreaLights),w.push(F.numDirLightShadows),w.push(F.numPointLightShadows),w.push(F.numSpotLightShadows),w.push(F.numSpotLightShadowsWithMaps),w.push(F.shadowMapType),w.push(F.toneMapping),w.push(F.numClippingPlanes),w.push(F.numClipIntersection),w.push(F.depthPacking)}function T(w,F){o.disableAll(),F.isWebGL2&&o.enable(0),F.supportsVertexTextures&&o.enable(1),F.instancing&&o.enable(2),F.instancingColor&&o.enable(3),F.matcap&&o.enable(4),F.envMap&&o.enable(5),F.normalMapObjectSpace&&o.enable(6),F.normalMapTangentSpace&&o.enable(7),F.clearcoat&&o.enable(8),F.iridescence&&o.enable(9),F.alphaTest&&o.enable(10),F.vertexColors&&o.enable(11),F.vertexAlphas&&o.enable(12),F.vertexUv1s&&o.enable(13),F.vertexUv2s&&o.enable(14),F.vertexUv3s&&o.enable(15),F.vertexTangents&&o.enable(16),F.anisotropy&&o.enable(17),w.push(o.mask),o.disableAll(),F.fog&&o.enable(0),F.useFog&&o.enable(1),F.flatShading&&o.enable(2),F.logarithmicDepthBuffer&&o.enable(3),F.skinning&&o.enable(4),F.morphTargets&&o.enable(5),F.morphNormals&&o.enable(6),F.morphColors&&o.enable(7),F.premultipliedAlpha&&o.enable(8),F.shadowMapEnabled&&o.enable(9),F.useLegacyLights&&o.enable(10),F.doubleSided&&o.enable(11),F.flipSided&&o.enable(12),F.useDepthPacking&&o.enable(13),F.dithering&&o.enable(14),F.transmission&&o.enable(15),F.sheen&&o.enable(16),F.opaque&&o.enable(17),F.pointsUvs&&o.enable(18),w.push(o.mask)}function R(w){const F=S[w.type];let te;if(F){const G=wi[F];te=ol.clone(G.uniforms)}else te=w.uniforms;return te}function P(w,F){let te;for(let G=0,I=u.length;G<I;G++){const z=u[G];if(z.cacheKey===F){te=z,++te.usedTimes;break}}return te===void 0&&(te=new zM(s,F,w,r),u.push(te)),te}function D(w){if(--w.usedTimes===0){const F=u.indexOf(w);u[F]=u[u.length-1],u.pop(),w.destroy()}}function p(w){c.remove(w)}function O(){c.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:P,releaseProgram:D,releaseShaderCache:p,programs:u,dispose:O}}function XM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function jM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ah(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,m,_,S,M,y){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:_,groupOrder:S,renderOrder:d.renderOrder,z:M,group:y},s[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=_,v.groupOrder=S,v.renderOrder=d.renderOrder,v.z=M,v.group=y),e++,v}function o(d,m,_,S,M,y){const v=a(d,m,_,S,M,y);_.transmission>0?n.push(v):_.transparent===!0?i.push(v):t.push(v)}function c(d,m,_,S,M,y){const v=a(d,m,_,S,M,y);_.transmission>0?n.unshift(v):_.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,m){t.length>1&&t.sort(d||jM),n.length>1&&n.sort(m||Ah),i.length>1&&i.sort(m||Ah)}function f(){for(let d=e,m=s.length;d<m;d++){const _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:f,sort:u}}function qM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Rh,s.set(n,[a])):i>=r.length?(a=new Rh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function YM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new it};break;case"SpotLight":t={position:new Y,direction:new Y,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function KM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $M=0;function ZM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QM(s,e){const t=new YM,n=KM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new Y);const r=new Y,a=new dt,o=new dt;function c(f,d){let m=0,_=0,S=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let M=0,y=0,v=0,A=0,T=0,R=0,P=0,D=0,p=0,O=0;f.sort(ZM);const w=d===!0?Math.PI:1;for(let te=0,G=f.length;te<G;te++){const I=f[te],z=I.color,W=I.intensity,$=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)m+=z.r*W*w,_+=z.g*W*w,S+=z.b*W*w;else if(I.isLightProbe)for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(I.sh.coefficients[ie],W);else if(I.isDirectionalLight){const ie=t.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const ce=I.shadow,pe=n.get(I);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,i.directionalShadow[M]=pe,i.directionalShadowMap[M]=K,i.directionalShadowMatrix[M]=I.shadow.matrix,R++}i.directional[M]=ie,M++}else if(I.isSpotLight){const ie=t.get(I);ie.position.setFromMatrixPosition(I.matrixWorld),ie.color.copy(z).multiplyScalar(W*w),ie.distance=$,ie.coneCos=Math.cos(I.angle),ie.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ie.decay=I.decay,i.spot[v]=ie;const ce=I.shadow;if(I.map&&(i.spotLightMap[p]=I.map,p++,ce.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[v]=ce.matrix,I.castShadow){const pe=n.get(I);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,i.spotShadow[v]=pe,i.spotShadowMap[v]=K,D++}v++}else if(I.isRectAreaLight){const ie=t.get(I);ie.color.copy(z).multiplyScalar(W),ie.halfWidth.set(I.width*.5,0,0),ie.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=ie,A++}else if(I.isPointLight){const ie=t.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity*w),ie.distance=I.distance,ie.decay=I.decay,I.castShadow){const ce=I.shadow,pe=n.get(I);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,pe.shadowCameraNear=ce.camera.near,pe.shadowCameraFar=ce.camera.far,i.pointShadow[y]=pe,i.pointShadowMap[y]=K,i.pointShadowMatrix[y]=I.shadow.matrix,P++}i.point[y]=ie,y++}else if(I.isHemisphereLight){const ie=t.get(I);ie.skyColor.copy(I.color).multiplyScalar(W*w),ie.groundColor.copy(I.groundColor).multiplyScalar(W*w),i.hemi[T]=ie,T++}}A>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=S;const F=i.hash;(F.directionalLength!==M||F.pointLength!==y||F.spotLength!==v||F.rectAreaLength!==A||F.hemiLength!==T||F.numDirectionalShadows!==R||F.numPointShadows!==P||F.numSpotShadows!==D||F.numSpotMaps!==p)&&(i.directional.length=M,i.spot.length=v,i.rectArea.length=A,i.point.length=y,i.hemi.length=T,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=D+p-O,i.spotLightMap.length=p,i.numSpotLightShadowsWithMaps=O,F.directionalLength=M,F.pointLength=y,F.spotLength=v,F.rectAreaLength=A,F.hemiLength=T,F.numDirectionalShadows=R,F.numPointShadows=P,F.numSpotShadows=D,F.numSpotMaps=p,i.version=$M++)}function u(f,d){let m=0,_=0,S=0,M=0,y=0;const v=d.matrixWorldInverse;for(let A=0,T=f.length;A<T;A++){const R=f[A];if(R.isDirectionalLight){const P=i.directional[m];P.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(v),m++}else if(R.isSpotLight){const P=i.spot[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(v),P.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(v),S++}else if(R.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(v),o.identity(),a.copy(R.matrixWorld),a.premultiply(v),o.extractRotation(a),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),M++}else if(R.isPointLight){const P=i.point[_];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(v),_++}else if(R.isHemisphereLight){const P=i.hemi[y];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(v),y++}}}return{setup:c,setupView:u,state:i}}function Ch(s,e){const t=new QM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function JM(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Ch(s,e),t.set(r,[c])):a>=o.length?(c=new Ch(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class eS extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tS extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rS(s,e,t){let n=new bu;const i=new $e,r=new $e,a=new Ft,o=new eS({depthPacking:W_}),c=new tS,u={},f=t.maxTextureSize,d={[ar]:Nn,[Nn]:ar,[Ri]:Ri},m=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:nS,fragmentShader:iS}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new yi;S.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Gn(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let v=this.type;this.render=function(P,D,p){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const O=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),te=s.state;te.setBlending(wr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const G=v!==Ki&&this.type===Ki,I=v===Ki&&this.type!==Ki;for(let z=0,W=P.length;z<W;z++){const $=P[z],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const ie=K.getFrameExtents();if(i.multiply(ie),r.copy(K.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/ie.x),i.x=r.x*ie.x,K.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/ie.y),i.y=r.y*ie.y,K.mapSize.y=r.y)),K.map===null||G===!0||I===!0){const pe=this.type!==Ki?{minFilter:ln,magFilter:ln}:{};K.map!==null&&K.map.dispose(),K.map=new _i(i.x,i.y,pe),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const ce=K.getViewportCount();for(let pe=0;pe<ce;pe++){const Ee=K.getViewport(pe);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),te.viewport(a),K.updateMatrices($,pe),n=K.getFrustum(),R(D,p,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Ki&&A(K,p),K.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(O,w,F)};function A(P,D){const p=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _i(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(D,null,p,m,M,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(D,null,p,_,M,null)}function T(P,D,p,O){let w=null;const F=p.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)w=F;else if(w=p.isPointLight===!0?c:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const te=w.uuid,G=D.uuid;let I=u[te];I===void 0&&(I={},u[te]=I);let z=I[G];z===void 0&&(z=w.clone(),I[G]=z),w=z}if(w.visible=D.visible,w.wireframe=D.wireframe,O===Ki?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:d[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,p.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=s.properties.get(w);te.light=p}return w}function R(P,D,p,O,w){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Ki)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,P.matrixWorld);const G=e.update(P),I=P.material;if(Array.isArray(I)){const z=G.groups;for(let W=0,$=z.length;W<$;W++){const K=z[W],ie=I[K.materialIndex];if(ie&&ie.visible){const ce=T(P,ie,O,w);s.renderBufferDirect(p,null,G,ce,P,K)}}}else if(I.visible){const z=T(P,I,O,w);s.renderBufferDirect(p,null,G,z,P,null)}}const te=P.children;for(let G=0,I=te.length;G<I;G++)R(te[G],D,p,O,w)}}function sS(s,e,t){const n=t.isWebGL2;function i(){let X=!1;const we=new Ft;let se=null;const Me=new Ft(0,0,0,0);return{setMask:function(Ce){se!==Ce&&!X&&(s.colorMask(Ce,Ce,Ce,Ce),se=Ce)},setLocked:function(Ce){X=Ce},setClear:function(Ce,yt,xt,Mt,ai){ai===!0&&(Ce*=Mt,yt*=Mt,xt*=Mt),we.set(Ce,yt,xt,Mt),Me.equals(we)===!1&&(s.clearColor(Ce,yt,xt,Mt),Me.copy(we))},reset:function(){X=!1,se=null,Me.set(-1,0,0,0)}}}function r(){let X=!1,we=null,se=null,Me=null;return{setTest:function(Ce){Ce?We(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(Ce){we!==Ce&&!X&&(s.depthMask(Ce),we=Ce)},setFunc:function(Ce){if(se!==Ce){switch(Ce){case y_:s.depthFunc(s.NEVER);break;case x_:s.depthFunc(s.ALWAYS);break;case M_:s.depthFunc(s.LESS);break;case Vc:s.depthFunc(s.LEQUAL);break;case S_:s.depthFunc(s.EQUAL);break;case T_:s.depthFunc(s.GEQUAL);break;case b_:s.depthFunc(s.GREATER);break;case E_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Ce}},setLocked:function(Ce){X=Ce},setClear:function(Ce){Me!==Ce&&(s.clearDepth(Ce),Me=Ce)},reset:function(){X=!1,we=null,se=null,Me=null}}}function a(){let X=!1,we=null,se=null,Me=null,Ce=null,yt=null,xt=null,Mt=null,ai=null;return{setTest:function(Bt){X||(Bt?We(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(Bt){we!==Bt&&!X&&(s.stencilMask(Bt),we=Bt)},setFunc:function(Bt,On,an){(se!==Bt||Me!==On||Ce!==an)&&(s.stencilFunc(Bt,On,an),se=Bt,Me=On,Ce=an)},setOp:function(Bt,On,an){(yt!==Bt||xt!==On||Mt!==an)&&(s.stencilOp(Bt,On,an),yt=Bt,xt=On,Mt=an)},setLocked:function(Bt){X=Bt},setClear:function(Bt){ai!==Bt&&(s.clearStencil(Bt),ai=Bt)},reset:function(){X=!1,we=null,se=null,Me=null,Ce=null,yt=null,xt=null,Mt=null,ai=null}}}const o=new i,c=new r,u=new a,f=new WeakMap,d=new WeakMap;let m={},_={},S=new WeakMap,M=[],y=null,v=!1,A=null,T=null,R=null,P=null,D=null,p=null,O=null,w=!1,F=null,te=null,G=null,I=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),$=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),$=K>=2);let ce=null,pe={};const Ee=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),me=new Ft().fromArray(Ee),ge=new Ft().fromArray(re);function Pe(X,we,se,Me){const Ce=new Uint8Array(4),yt=s.createTexture();s.bindTexture(X,yt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<se;xt++)n&&(X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(we+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return yt}const Ue={};Ue[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),We(s.DEPTH_TEST),c.setFunc(Vc),je(!1),wt(pf),We(s.CULL_FACE),Xe(wr);function We(X){m[X]!==!0&&(s.enable(X),m[X]=!0)}function ct(X){m[X]!==!1&&(s.disable(X),m[X]=!1)}function Ke(X,we){return _[X]!==we?(s.bindFramebuffer(X,we),_[X]=we,n&&(X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function At(X,we){let se=M,Me=!1;if(X)if(se=S.get(we),se===void 0&&(se=[],S.set(we,se)),X.isWebGLMultipleRenderTargets){const Ce=X.texture;if(se.length!==Ce.length||se[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,xt=Ce.length;yt<xt;yt++)se[yt]=s.COLOR_ATTACHMENT0+yt;se.length=Ce.length,Me=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,Me=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function gt(X){return y!==X?(s.useProgram(X),y=X,!0):!1}const Q={[Fs]:s.FUNC_ADD,[l_]:s.FUNC_SUBTRACT,[c_]:s.FUNC_REVERSE_SUBTRACT};if(n)Q[_f]=s.MIN,Q[vf]=s.MAX;else{const X=e.get("EXT_blend_minmax");X!==null&&(Q[_f]=X.MIN_EXT,Q[vf]=X.MAX_EXT)}const Wt={[u_]:s.ZERO,[f_]:s.ONE,[h_]:s.SRC_COLOR,[fp]:s.SRC_ALPHA,[v_]:s.SRC_ALPHA_SATURATE,[g_]:s.DST_COLOR,[p_]:s.DST_ALPHA,[d_]:s.ONE_MINUS_SRC_COLOR,[hp]:s.ONE_MINUS_SRC_ALPHA,[__]:s.ONE_MINUS_DST_COLOR,[m_]:s.ONE_MINUS_DST_ALPHA};function Xe(X,we,se,Me,Ce,yt,xt,Mt){if(X===wr){v===!0&&(ct(s.BLEND),v=!1);return}if(v===!1&&(We(s.BLEND),v=!0),X!==o_){if(X!==A||Mt!==w){if((T!==Fs||D!==Fs)&&(s.blendEquation(s.FUNC_ADD),T=Fs,D=Fs),Mt)switch(X){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hc:s.blendFunc(s.ONE,s.ONE);break;case mf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,P=null,p=null,O=null,A=X,w=Mt}return}Ce=Ce||we,yt=yt||se,xt=xt||Me,(we!==T||Ce!==D)&&(s.blendEquationSeparate(Q[we],Q[Ce]),T=we,D=Ce),(se!==R||Me!==P||yt!==p||xt!==O)&&(s.blendFuncSeparate(Wt[se],Wt[Me],Wt[yt],Wt[xt]),R=se,P=Me,p=yt,O=xt),A=X,w=!1}function ut(X,we){X.side===Ri?ct(s.CULL_FACE):We(s.CULL_FACE);let se=X.side===Nn;we&&(se=!se),je(se),X.blending===Ws&&X.transparent===!1?Xe(wr):Xe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),o.setMask(X.colorWrite);const Me=X.stencilWrite;u.setTest(Me),Me&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),at(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?We(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(X){F!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),F=X)}function wt(X){X!==r_?(We(s.CULL_FACE),X!==te&&(X===pf?s.cullFace(s.BACK):X===s_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),te=X}function Ze(X){X!==G&&($&&s.lineWidth(X),G=X)}function at(X,we,se){X?(We(s.POLYGON_OFFSET_FILL),(I!==we||z!==se)&&(s.polygonOffset(we,se),I=we,z=se)):ct(s.POLYGON_OFFSET_FILL)}function Rt(X){X?We(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function tn(X){X===void 0&&(X=s.TEXTURE0+W-1),ce!==X&&(s.activeTexture(X),ce=X)}function It(X,we,se){se===void 0&&(ce===null?se=s.TEXTURE0+W-1:se=ce);let Me=pe[se];Me===void 0&&(Me={type:void 0,texture:void 0},pe[se]=Me),(Me.type!==X||Me.texture!==we)&&(ce!==se&&(s.activeTexture(se),ce=se),s.bindTexture(X,we||Ue[X]),Me.type=X,Me.texture=we)}function k(){const X=pe[ce];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(X){me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),me.copy(X))}function Ie(X){ge.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),ge.copy(X))}function Oe(X,we){let se=d.get(we);se===void 0&&(se=new WeakMap,d.set(we,se));let Me=se.get(X);Me===void 0&&(Me=s.getUniformBlockIndex(we,X.name),se.set(X,Me))}function ot(X,we){const Me=d.get(we).get(X);f.get(we)!==Me&&(s.uniformBlockBinding(we,Me,X.__bindingPointIndex),f.set(we,Me))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ce=null,pe={},_={},S=new WeakMap,M=[],y=null,v=!1,A=null,T=null,R=null,P=null,D=null,p=null,O=null,w=!1,F=null,te=null,G=null,I=null,z=null,me.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:We,disable:ct,bindFramebuffer:Ke,drawBuffers:At,useProgram:gt,setBlending:Xe,setMaterial:ut,setFlipSided:je,setCullFace:wt,setLineWidth:Ze,setPolygonOffset:at,setScissorTest:Rt,activeTexture:tn,bindTexture:It,unbindTexture:k,compressedTexImage2D:L,compressedTexImage3D:q,texImage2D:He,texImage3D:Fe,updateUBOMapping:Oe,uniformBlockBinding:ot,texStorage2D:Re,texStorage3D:de,texSubImage2D:_e,texSubImage3D:ye,compressedTexSubImage2D:Ae,compressedTexSubImage3D:ze,scissor:Be,viewport:Ie,reset:Ct}}function aS(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,u=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let M;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,L){return v?new OffscreenCanvas(k,L):$a("canvas")}function T(k,L,q,_e){let ye=1;if((k.width>_e||k.height>_e)&&(ye=_e/Math.max(k.width,k.height)),ye<1||L===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const Ae=L?al:Math.floor,ze=Ae(ye*k.width),Re=Ae(ye*k.height);M===void 0&&(M=A(ze,Re));const de=q?A(ze,Re):M;return de.width=ze,de.height=Re,de.getContext("2d").drawImage(k,0,0,ze,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+ze+"x"+Re+")."),de}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function R(k){return Kc(k.width)&&Kc(k.height)}function P(k){return o?!1:k.wrapS!==ei||k.wrapT!==ei||k.minFilter!==ln&&k.minFilter!==Cn}function D(k,L){return k.generateMipmaps&&L&&k.minFilter!==ln&&k.minFilter!==Cn}function p(k){s.generateMipmap(k)}function O(k,L,q,_e,ye=!1){if(o===!1)return L;if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ae=L;return L===s.RED&&(q===s.FLOAT&&(Ae=s.R32F),q===s.HALF_FLOAT&&(Ae=s.R16F),q===s.UNSIGNED_BYTE&&(Ae=s.R8)),L===s.RG&&(q===s.FLOAT&&(Ae=s.RG32F),q===s.HALF_FLOAT&&(Ae=s.RG16F),q===s.UNSIGNED_BYTE&&(Ae=s.RG8)),L===s.RGBA&&(q===s.FLOAT&&(Ae=s.RGBA32F),q===s.HALF_FLOAT&&(Ae=s.RGBA16F),q===s.UNSIGNED_BYTE&&(Ae=_e===nt&&ye===!1?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(Ae=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(Ae=s.RGB5_A1)),(Ae===s.R16F||Ae===s.R32F||Ae===s.RG16F||Ae===s.RG32F||Ae===s.RGBA16F||Ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ae}function w(k,L,q){return D(k,q)===!0||k.isFramebufferTexture&&k.minFilter!==ln&&k.minFilter!==Cn?Math.log2(Math.max(L.width,L.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?L.mipmaps.length:1}function F(k){return k===ln||k===Xc||k===Xo?s.NEAREST:s.LINEAR}function te(k){const L=k.target;L.removeEventListener("dispose",te),I(L),L.isVideoTexture&&S.delete(L)}function G(k){const L=k.target;L.removeEventListener("dispose",G),W(L)}function I(k){const L=n.get(k);if(L.__webglInit===void 0)return;const q=k.source,_e=y.get(q);if(_e){const ye=_e[L.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&z(k),Object.keys(_e).length===0&&y.delete(q)}n.remove(k)}function z(k){const L=n.get(k);s.deleteTexture(L.__webglTexture);const q=k.source,_e=y.get(q);delete _e[L.__cacheKey],a.memory.textures--}function W(k){const L=k.texture,q=n.get(k),_e=n.get(L);if(_e.__webglTexture!==void 0&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++)s.deleteFramebuffer(q.__webglFramebuffer[ye]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ye]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ye=0;ye<q.__webglColorRenderbuffer.length;ye++)q.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[ye]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let ye=0,Ae=L.length;ye<Ae;ye++){const ze=n.get(L[ye]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),a.memory.textures--),n.remove(L[ye])}n.remove(L),n.remove(k)}let $=0;function K(){$=0}function ie(){const k=$;return k>=c&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+c),$+=1,k}function ce(k){const L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.wrapR||0),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.colorSpace),L.join()}function pe(k,L){const q=n.get(k);if(k.isVideoTexture&&tn(k),k.isRenderTargetTexture===!1&&k.version>0&&q.__version!==k.version){const _e=k.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(q,k,L);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+L)}function Ee(k,L){const q=n.get(k);if(k.version>0&&q.__version!==k.version){Ke(q,k,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+L)}function re(k,L){const q=n.get(k);if(k.version>0&&q.__version!==k.version){Ke(q,k,L);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+L)}function me(k,L){const q=n.get(k);if(k.version>0&&q.__version!==k.version){At(q,k,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+L)}const ge={[ta]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[rl]:s.MIRRORED_REPEAT},Pe={[ln]:s.NEAREST,[Xc]:s.NEAREST_MIPMAP_NEAREST,[Xo]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[gp]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},Ue={[q_]:s.NEVER,[ev]:s.ALWAYS,[Y_]:s.LESS,[$_]:s.LEQUAL,[K_]:s.EQUAL,[J_]:s.GEQUAL,[Z_]:s.GREATER,[Q_]:s.NOTEQUAL};function We(k,L,q){if(q?(s.texParameteri(k,s.TEXTURE_WRAP_S,ge[L.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ge[L.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ge[L.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,Pe[L.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,Pe[L.minFilter])):(s.texParameteri(k,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(k,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(L.wrapS!==ei||L.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(k,s.TEXTURE_MAG_FILTER,F(L.magFilter)),s.texParameteri(k,s.TEXTURE_MIN_FILTER,F(L.minFilter)),L.minFilter!==ln&&L.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,Ue[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===ln||L.minFilter!==Xo&&L.minFilter!==os||L.type===Qi&&e.has("OES_texture_float_linear")===!1||o===!1&&L.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(s.texParameterf(k,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function ct(k,L){let q=!1;k.__webglInit===void 0&&(k.__webglInit=!0,L.addEventListener("dispose",te));const _e=L.source;let ye=y.get(_e);ye===void 0&&(ye={},y.set(_e,ye));const Ae=ce(L);if(Ae!==k.__cacheKey){ye[Ae]===void 0&&(ye[Ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ye[Ae].usedTimes++;const ze=ye[k.__cacheKey];ze!==void 0&&(ye[k.__cacheKey].usedTimes--,ze.usedTimes===0&&z(L)),k.__cacheKey=Ae,k.__webglTexture=ye[Ae].texture}return q}function Ke(k,L,q){let _e=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(_e=s.TEXTURE_3D);const ye=ct(k,L),Ae=L.source;t.bindTexture(_e,k.__webglTexture,s.TEXTURE0+q);const ze=n.get(Ae);if(Ae.version!==ze.__version||ye===!0){t.activeTexture(s.TEXTURE0+q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Re=P(L)&&R(L.image)===!1;let de=T(L.image,Re,!1,f);de=It(L,de);const He=R(de)||o,Fe=r.convert(L.format,L.colorSpace);let Be=r.convert(L.type),Ie=O(L.internalFormat,Fe,Be,L.colorSpace);We(_e,L,He);let Oe;const ot=L.mipmaps,Ct=o&&L.isVideoTexture!==!0,X=ze.__version===void 0||ye===!0,we=w(L,de,He);if(L.isDepthTexture)Ie=s.DEPTH_COMPONENT,o?L.type===Qi?Ie=s.DEPTH_COMPONENT32F:L.type===Sr?Ie=s.DEPTH_COMPONENT24:L.type===ns?Ie=s.DEPTH24_STENCIL8:Ie=s.DEPTH_COMPONENT16:L.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===is&&Ie===s.DEPTH_COMPONENT&&L.type!==Mu&&L.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Sr,Be=r.convert(L.type)),L.format===na&&Ie===s.DEPTH_COMPONENT&&(Ie=s.DEPTH_STENCIL,L.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=ns,Be=r.convert(L.type))),X&&(Ct?t.texStorage2D(s.TEXTURE_2D,1,Ie,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,Ie,de.width,de.height,0,Fe,Be,null));else if(L.isDataTexture)if(ot.length>0&&He){Ct&&X&&t.texStorage2D(s.TEXTURE_2D,we,Ie,ot[0].width,ot[0].height);for(let se=0,Me=ot.length;se<Me;se++)Oe=ot[se],Ct?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Be,Oe.data):t.texImage2D(s.TEXTURE_2D,se,Ie,Oe.width,Oe.height,0,Fe,Be,Oe.data);L.generateMipmaps=!1}else Ct?(X&&t.texStorage2D(s.TEXTURE_2D,we,Ie,de.width,de.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,de.width,de.height,Fe,Be,de.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,de.width,de.height,0,Fe,Be,de.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Ct&&X&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ie,ot[0].width,ot[0].height,de.depth);for(let se=0,Me=ot.length;se<Me;se++)Oe=ot[se],L.format!==ti?Fe!==null?Ct?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,de.depth,Fe,Oe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Ie,Oe.width,Oe.height,de.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,de.depth,Fe,Be,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Ie,Oe.width,Oe.height,de.depth,0,Fe,Be,Oe.data)}else{Ct&&X&&t.texStorage2D(s.TEXTURE_2D,we,Ie,ot[0].width,ot[0].height);for(let se=0,Me=ot.length;se<Me;se++)Oe=ot[se],L.format!==ti?Fe!==null?Ct?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Ie,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Be,Oe.data):t.texImage2D(s.TEXTURE_2D,se,Ie,Oe.width,Oe.height,0,Fe,Be,Oe.data)}else if(L.isDataArrayTexture)Ct?(X&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ie,de.width,de.height,de.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Fe,Be,de.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,Fe,Be,de.data);else if(L.isData3DTexture)Ct?(X&&t.texStorage3D(s.TEXTURE_3D,we,Ie,de.width,de.height,de.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Fe,Be,de.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,Fe,Be,de.data);else if(L.isFramebufferTexture){if(X)if(Ct)t.texStorage2D(s.TEXTURE_2D,we,Ie,de.width,de.height);else{let se=de.width,Me=de.height;for(let Ce=0;Ce<we;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Ie,se,Me,0,Fe,Be,null),se>>=1,Me>>=1}}else if(ot.length>0&&He){Ct&&X&&t.texStorage2D(s.TEXTURE_2D,we,Ie,ot[0].width,ot[0].height);for(let se=0,Me=ot.length;se<Me;se++)Oe=ot[se],Ct?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,Be,Oe):t.texImage2D(s.TEXTURE_2D,se,Ie,Fe,Be,Oe);L.generateMipmaps=!1}else Ct?(X&&t.texStorage2D(s.TEXTURE_2D,we,Ie,de.width,de.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Be,de)):t.texImage2D(s.TEXTURE_2D,0,Ie,Fe,Be,de);D(L,He)&&p(_e),ze.__version=Ae.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function At(k,L,q){if(L.image.length!==6)return;const _e=ct(k,L),ye=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+q);const Ae=n.get(ye);if(ye.version!==Ae.__version||_e===!0){t.activeTexture(s.TEXTURE0+q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ze=L.isCompressedTexture||L.image[0].isCompressedTexture,Re=L.image[0]&&L.image[0].isDataTexture,de=[];for(let se=0;se<6;se++)!ze&&!Re?de[se]=T(L.image[se],!1,!0,u):de[se]=Re?L.image[se].image:L.image[se],de[se]=It(L,de[se]);const He=de[0],Fe=R(He)||o,Be=r.convert(L.format,L.colorSpace),Ie=r.convert(L.type),Oe=O(L.internalFormat,Be,Ie,L.colorSpace),ot=o&&L.isVideoTexture!==!0,Ct=Ae.__version===void 0||_e===!0;let X=w(L,He,Fe);We(s.TEXTURE_CUBE_MAP,L,Fe);let we;if(ze){ot&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,X,Oe,He.width,He.height);for(let se=0;se<6;se++){we=de[se].mipmaps;for(let Me=0;Me<we.length;Me++){const Ce=we[Me];L.format!==ti?Be!==null?ot?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Ce.width,Ce.height,Be,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Oe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Ce.width,Ce.height,Be,Ie,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Oe,Ce.width,Ce.height,0,Be,Ie,Ce.data)}}}else{we=L.mipmaps,ot&&Ct&&(we.length>0&&X++,t.texStorage2D(s.TEXTURE_CUBE_MAP,X,Oe,de[0].width,de[0].height));for(let se=0;se<6;se++)if(Re){ot?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de[se].width,de[se].height,Be,Ie,de[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,de[se].width,de[se].height,0,Be,Ie,de[se].data);for(let Me=0;Me<we.length;Me++){const yt=we[Me].image[se].image;ot?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,yt.width,yt.height,Be,Ie,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Oe,yt.width,yt.height,0,Be,Ie,yt.data)}}else{ot?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Ie,de[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,Be,Ie,de[se]);for(let Me=0;Me<we.length;Me++){const Ce=we[Me];ot?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,Be,Ie,Ce.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Oe,Be,Ie,Ce.image[se])}}}D(L,Fe)&&p(s.TEXTURE_CUBE_MAP),Ae.__version=ye.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function gt(k,L,q,_e,ye){const Ae=r.convert(q.format,q.colorSpace),ze=r.convert(q.type),Re=O(q.internalFormat,Ae,ze,q.colorSpace);n.get(L).__hasExternalTextures||(ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,Re,L.width,L.height,L.depth,0,Ae,ze,null):t.texImage2D(ye,0,Re,L.width,L.height,0,Ae,ze,null)),t.bindFramebuffer(s.FRAMEBUFFER,k),Rt(L)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,n.get(q).__webglTexture,0,at(L)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,n.get(q).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(k,L,q){if(s.bindRenderbuffer(s.RENDERBUFFER,k),L.depthBuffer&&!L.stencilBuffer){let _e=s.DEPTH_COMPONENT16;if(q||Rt(L)){const ye=L.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Qi?_e=s.DEPTH_COMPONENT32F:ye.type===Sr&&(_e=s.DEPTH_COMPONENT24));const Ae=at(L);Rt(L)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,_e,L.width,L.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,_e,L.width,L.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,L.width,L.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,k)}else if(L.depthBuffer&&L.stencilBuffer){const _e=at(L);q&&Rt(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,L.width,L.height):Rt(L)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,k)}else{const _e=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ye=0;ye<_e.length;ye++){const Ae=_e[ye],ze=r.convert(Ae.format,Ae.colorSpace),Re=r.convert(Ae.type),de=O(Ae.internalFormat,ze,Re,Ae.colorSpace),He=at(L);q&&Rt(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,de,L.width,L.height):Rt(L)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,de,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,de,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Wt(k,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),pe(L.depthTexture,0);const _e=n.get(L.depthTexture).__webglTexture,ye=at(L);if(L.depthTexture.format===is)Rt(L)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(L.depthTexture.format===na)Rt(L)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Xe(k){const L=n.get(k),q=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!L.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Wt(L.__webglFramebuffer,k)}else if(q){L.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[_e]),L.__webglDepthbuffer[_e]=s.createRenderbuffer(),Q(L.__webglDepthbuffer[_e],k,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),Q(L.__webglDepthbuffer,k,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(k,L,q){const _e=n.get(k);L!==void 0&&gt(_e.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),q!==void 0&&Xe(k)}function je(k){const L=k.texture,q=n.get(k),_e=n.get(L);k.addEventListener("dispose",G),k.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=L.version,a.memory.textures++);const ye=k.isWebGLCubeRenderTarget===!0,Ae=k.isWebGLMultipleRenderTargets===!0,ze=R(k)||o;if(ye){q.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)q.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),Ae)if(i.drawBuffers){const Re=k.texture;for(let de=0,He=Re.length;de<He;de++){const Fe=n.get(Re[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&k.samples>0&&Rt(k)===!1){const Re=Ae?L:[L];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let de=0;de<Re.length;de++){const He=Re[de];q.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const Fe=r.convert(He.format,He.colorSpace),Be=r.convert(He.type),Ie=O(He.internalFormat,Fe,Be,He.colorSpace,k.isXRRenderTarget===!0),Oe=at(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ie,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,q.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(q.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),We(s.TEXTURE_CUBE_MAP,L,ze);for(let Re=0;Re<6;Re++)gt(q.__webglFramebuffer[Re],k,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re);D(L,ze)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){const Re=k.texture;for(let de=0,He=Re.length;de<He;de++){const Fe=Re[de],Be=n.get(Fe);t.bindTexture(s.TEXTURE_2D,Be.__webglTexture),We(s.TEXTURE_2D,Fe,ze),gt(q.__webglFramebuffer,k,Fe,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D),D(Fe,ze)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(o?Re=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,_e.__webglTexture),We(Re,L,ze),gt(q.__webglFramebuffer,k,L,s.COLOR_ATTACHMENT0,Re),D(L,ze)&&p(Re),t.unbindTexture()}k.depthBuffer&&Xe(k)}function wt(k){const L=R(k)||o,q=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let _e=0,ye=q.length;_e<ye;_e++){const Ae=q[_e];if(D(Ae,L)){const ze=k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(Ae).__webglTexture;t.bindTexture(ze,Re),p(ze),t.unbindTexture()}}}function Ze(k){if(o&&k.samples>0&&Rt(k)===!1){const L=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],q=k.width,_e=k.height;let ye=s.COLOR_BUFFER_BIT;const Ae=[],ze=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(k),de=k.isWebGLMultipleRenderTargets===!0;if(de)for(let He=0;He<L.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let He=0;He<L.length;He++){Ae.push(s.COLOR_ATTACHMENT0+He),k.depthBuffer&&Ae.push(ze);const Fe=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Fe===!1&&(k.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[He]),Fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ze])),de){const Be=n.get(L[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,q,_e,0,0,q,_e,ye,s.NEAREST),_&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let He=0;He<L.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,Re.__webglColorRenderbuffer[He]);const Fe=n.get(L[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function at(k){return Math.min(d,k.samples)}function Rt(k){const L=n.get(k);return o&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function tn(k){const L=a.render.frame;S.get(k)!==L&&(S.set(k,L),k.update())}function It(k,L){const q=k.colorSpace,_e=k.format,ye=k.type;return k.isCompressedTexture===!0||k.format===Yc||q!==Ii&&q!==ss&&(q===nt?o===!1?e.has("EXT_sRGB")===!0&&_e===ti?(k.format=Yc,k.minFilter=Cn,k.generateMipmaps=!1):L=Cp.sRGBToLinear(L):(_e!==ti||ye!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),L}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.setTexture2D=pe,this.setTexture2DArray=Ee,this.setTexture3D=re,this.setTextureCube=me,this.rebindTextures=ut,this.setupRenderTarget=je,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Rt}function oS(s,e,t){const n=t.isWebGL2;function i(r,a=ss){let o;if(r===Ar)return s.UNSIGNED_BYTE;if(r===vp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===D_)return s.BYTE;if(r===I_)return s.SHORT;if(r===Mu)return s.UNSIGNED_SHORT;if(r===_p)return s.INT;if(r===Sr)return s.UNSIGNED_INT;if(r===Qi)return s.FLOAT;if(r===nr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===N_)return s.ALPHA;if(r===ti)return s.RGBA;if(r===U_)return s.LUMINANCE;if(r===O_)return s.LUMINANCE_ALPHA;if(r===is)return s.DEPTH_COMPONENT;if(r===na)return s.DEPTH_STENCIL;if(r===Yc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===F_)return s.RED;if(r===xp)return s.RED_INTEGER;if(r===k_)return s.RG;if(r===Mp)return s.RG_INTEGER;if(r===Sp)return s.RGBA_INTEGER;if(r===Gl||r===Wl||r===Xl||r===jl)if(a===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Gl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Gl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===xf||r===Mf||r===Sf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===B_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tf||r===bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Tf)return a===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===bf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ef||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===Lf||r===Df||r===If||r===Nf||r===Uf||r===Of||r===Ff||r===kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ef)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Af)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Df)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===If)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Of)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ff)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ql)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ql)return a===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===z_||r===Bf||r===zf||r===Hf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ql)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Bf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ns?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class lS extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cS={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),v=this._getHandJoint(u,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=f.position.distanceTo(d.position),_=.02,S=.005;u.inputState.pinching&&m>_+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=_-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class uS extends dn{constructor(e,t,n,i,r,a,o,c,u,f){if(f=f!==void 0?f:is,f!==is&&f!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===is&&(n=Sr),n===void 0&&f===na&&(n=ns),super(null,i,r,a,o,c,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fS extends la{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,u=null,f=null,d=null,m=null,_=null,S=null;const M=t.getContextAttributes();let y=null,v=null;const A=[],T=[];let R=null;const P=new En;P.layers.enable(1),P.viewport=new Ft;const D=new En;D.layers.enable(2),D.viewport=new Ft;const p=[P,D],O=new lS;O.layers.enable(1),O.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(re){R=re},this.getController=function(re){let me=A[re];return me===void 0&&(me=new gc,A[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=A[re];return me===void 0&&(me=new gc,A[re]=me),me.getGripSpace()},this.getHand=function(re){let me=A[re];return me===void 0&&(me=new gc,A[re]=me),me.getHandSpace()};function te(re){const me=T.indexOf(re.inputSource);if(me===-1)return;const ge=A[me];ge!==void 0&&(ge.update(re.inputSource,re.frame,u||a),ge.dispatchEvent({type:re.type,data:re.inputSource}))}function G(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",I);for(let re=0;re<A.length;re++){const me=T[re];me!==null&&(T[re]=null,A[re].disconnect(me))}w=null,F=null,e.setRenderTarget(y),_=null,m=null,d=null,i=null,v=null,Ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(re){u=re},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",G),i.addEventListener("inputsourceschange",I),M.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const me={antialias:i.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:_}),v=new _i(_.framebufferWidth,_.framebufferHeight,{format:ti,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let me=null,ge=null,Pe=null;M.depth&&(Pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?na:is,ge=M.stencil?ns:Sr);const Ue={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=new XRWebGLBinding(i,t),m=d.createProjectionLayer(Ue),i.updateRenderState({layers:[m]}),v=new _i(m.textureWidth,m.textureHeight,{format:ti,type:Ar,depthTexture:new uS(m.textureWidth,m.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const We=e.properties.get(v);We.__ignoreDepthValues=m.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(o),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(re){for(let me=0;me<re.removed.length;me++){const ge=re.removed[me],Pe=T.indexOf(ge);Pe>=0&&(T[Pe]=null,A[Pe].disconnect(ge))}for(let me=0;me<re.added.length;me++){const ge=re.added[me];let Pe=T.indexOf(ge);if(Pe===-1){for(let We=0;We<A.length;We++)if(We>=T.length){T.push(ge),Pe=We;break}else if(T[We]===null){T[We]=ge,Pe=We;break}if(Pe===-1)break}const Ue=A[Pe];Ue&&Ue.connect(ge)}}const z=new Y,W=new Y;function $(re,me,ge){z.setFromMatrixPosition(me.matrixWorld),W.setFromMatrixPosition(ge.matrixWorld);const Pe=z.distanceTo(W),Ue=me.projectionMatrix.elements,We=ge.projectionMatrix.elements,ct=Ue[14]/(Ue[10]-1),Ke=Ue[14]/(Ue[10]+1),At=(Ue[9]+1)/Ue[5],gt=(Ue[9]-1)/Ue[5],Q=(Ue[8]-1)/Ue[0],Wt=(We[8]+1)/We[0],Xe=ct*Q,ut=ct*Wt,je=Pe/(-Q+Wt),wt=je*-Q;me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(wt),re.translateZ(je),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const Ze=ct+je,at=Ke+je,Rt=Xe-wt,tn=ut+(Pe-wt),It=At*Ke/at*Ze,k=gt*Ke/at*Ze;re.projectionMatrix.makePerspective(Rt,tn,It,k,Ze,at),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function K(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCameraXR=function(re){if(i===null)return re;R&&(re=R),O.near=D.near=P.near=re.near,O.far=D.far=P.far=re.far,(w!==O.near||F!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),w=O.near,F=O.far);const me=re.parent,ge=O.cameras;K(O,me);for(let Pe=0;Pe<ge.length;Pe++)K(ge[Pe],me);return ge.length===2?$(O,P,D):O.projectionMatrix.copy(P.projectionMatrix),R&&ie(O,me),O};function ie(re,me){const ge=R;me===null?ge.matrix.copy(re.matrixWorld):(ge.matrix.copy(me.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(re.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0);const Pe=ge.children;for(let Ue=0,We=Pe.length;Ue<We;Ue++)Pe[Ue].updateMatrixWorld(!0);ge.projectionMatrix.copy(re.projectionMatrix),ge.projectionMatrixInverse.copy(re.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=ra*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getFoveation=function(){if(!(m===null&&_===null))return c},this.setFoveation=function(re){c=re,m!==null&&(m.fixedFoveation=re),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=re)};let ce=null;function pe(re,me){if(f=me.getViewerPose(u||a),S=me,f!==null){const ge=f.views;_!==null&&(e.setRenderTargetFramebuffer(v,_.framebuffer),e.setRenderTarget(v));let Pe=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let Ue=0;Ue<ge.length;Ue++){const We=ge[Ue];let ct=null;if(_!==null)ct=_.getViewport(We);else{const At=d.getViewSubImage(m,We);ct=At.viewport,Ue===0&&(e.setRenderTargetTextures(v,At.colorTexture,m.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(v))}let Ke=p[Ue];Ke===void 0&&(Ke=new En,Ke.layers.enable(Ue),Ke.viewport=new Ft,p[Ue]=Ke),Ke.matrix.fromArray(We.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(We.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ct.x,ct.y,ct.width,ct.height),Ue===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(Ke)}}for(let ge=0;ge<A.length;ge++){const Pe=T[ge],Ue=A[ge];Pe!==null&&Ue!==void 0&&Ue.update(Pe,me,u||a)}ce&&ce(re,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),S=null}const Ee=new kp;Ee.setAnimationLoop(pe),this.setAnimationLoop=function(re){ce=re},this.dispose=function(){}}}function hS(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,Up(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function i(y,v,A,T,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?r(y,v):v.isMeshToonMaterial?(r(y,v),d(y,v)):v.isMeshPhongMaterial?(r(y,v),f(y,v)):v.isMeshStandardMaterial?(r(y,v),m(y,v),v.isMeshPhysicalMaterial&&_(y,v,R)):v.isMeshMatcapMaterial?(r(y,v),S(y,v)):v.isMeshDepthMaterial?r(y,v):v.isMeshDistanceMaterial?(r(y,v),M(y,v)):v.isMeshNormalMaterial?r(y,v):v.isLineBasicMaterial?(a(y,v),v.isLineDashedMaterial&&o(y,v)):v.isPointsMaterial?c(y,v,A,T):v.isSpriteMaterial?u(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Nn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Nn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const A=e.get(v).envMap;if(A&&(y.envMap.value=A,y.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const T=s.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*T,t(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function a(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function o(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function c(y,v,A,T){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*A,y.scale.value=T*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function d(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function m(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function _(y,v,A){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const A=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dS(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,T){const R=T.program;n.uniformBlockBinding(A,R)}function u(A,T){let R=i[A.id];R===void 0&&(S(A),R=f(A),i[A.id]=R,A.addEventListener("dispose",y));const P=T.program;n.updateUBOMapping(A,P);const D=e.render.frame;r[A.id]!==D&&(m(A),r[A.id]=D)}function f(A){const T=d();A.__bindingPointIndex=T;const R=s.createBuffer(),P=A.__size,D=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,P,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,R),R}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const T=i[A.id],R=A.uniforms,P=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let D=0,p=R.length;D<p;D++){const O=R[D];if(_(O,D,P)===!0){const w=O.__offset,F=Array.isArray(O.value)?O.value:[O.value];let te=0;for(let G=0;G<F.length;G++){const I=F[G],z=M(I);typeof I=="number"?(O.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,w+te,O.__data)):I.isMatrix3?(O.__data[0]=I.elements[0],O.__data[1]=I.elements[1],O.__data[2]=I.elements[2],O.__data[3]=I.elements[0],O.__data[4]=I.elements[3],O.__data[5]=I.elements[4],O.__data[6]=I.elements[5],O.__data[7]=I.elements[0],O.__data[8]=I.elements[6],O.__data[9]=I.elements[7],O.__data[10]=I.elements[8],O.__data[11]=I.elements[0]):(I.toArray(O.__data,te),te+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,O.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(A,T,R){const P=A.value;if(R[T]===void 0){if(typeof P=="number")R[T]=P;else{const D=Array.isArray(P)?P:[P],p=[];for(let O=0;O<D.length;O++)p.push(D[O].clone());R[T]=p}return!0}else if(typeof P=="number"){if(R[T]!==P)return R[T]=P,!0}else{const D=Array.isArray(R[T])?R[T]:[R[T]],p=Array.isArray(P)?P:[P];for(let O=0;O<D.length;O++){const w=D[O];if(w.equals(p[O])===!1)return w.copy(p[O]),!0}}return!1}function S(A){const T=A.uniforms;let R=0;const P=16;let D=0;for(let p=0,O=T.length;p<O;p++){const w=T[p],F={boundary:0,storage:0},te=Array.isArray(w.value)?w.value:[w.value];for(let G=0,I=te.length;G<I;G++){const z=te[G],W=M(z);F.boundary+=W.boundary,F.storage+=W.storage}if(w.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=R,p>0){D=R%P;const G=P-D;D!==0&&G-F.boundary<0&&(R+=P-D,w.__offset=R)}R+=F.storage}return D=R%P,D>0&&(R+=P-D),A.__size=R,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function y(A){const T=A.target;T.removeEventListener("dispose",y);const R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function v(){for(const A in i)s.deleteBuffer(i[A]);a=[],i={},r={}}return{bind:c,update:u,dispose:v}}function pS(){const s=$a("canvas");return s.style.display="block",s}class Gp{constructor(e={}){const{canvas:t=pS(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const _=new Uint32Array(4),S=new Int32Array(4);let M=null,y=null;const v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=nt,this.useLegacyLights=!0,this.toneMapping=tr,this.toneMappingExposure=1;const T=this;let R=!1,P=0,D=0,p=null,O=-1,w=null;const F=new Ft,te=new Ft;let G=null;const I=new it(0);let z=0,W=t.width,$=t.height,K=1,ie=null,ce=null;const pe=new Ft(0,0,W,$),Ee=new Ft(0,0,W,$);let re=!1;const me=new bu;let ge=!1,Pe=!1,Ue=null;const We=new dt,ct=new $e,Ke=new Y,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return p===null?K:1}let Q=n;function Wt(N,ne){for(let le=0;le<N.length;le++){const Z=N[le],ue=t.getContext(Z,ne);if(ue!==null)return ue}return null}try{const N={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),Q===null){const ne=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&ne.shift(),Q=Wt(ne,N),Q===null)throw Wt(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Xe,ut,je,wt,Ze,at,Rt,tn,It,k,L,q,_e,ye,Ae,ze,Re,de,He,Fe,Be,Ie,Oe,ot;function Ct(){Xe=new Ex(Q),ut=new yx(Q,Xe,e),Xe.init(ut),Ie=new oS(Q,Xe,ut),je=new sS(Q,Xe,ut),wt=new Rx(Q),Ze=new XM,at=new aS(Q,Xe,je,Ze,ut,Ie,wt),Rt=new Mx(T),tn=new bx(T),It=new zv(Q,ut),Oe=new _x(Q,Xe,It,ut),k=new wx(Q,It,wt,Oe),L=new Dx(Q,k,It,wt),He=new Lx(Q,ut,at),ze=new xx(Ze),q=new WM(T,Rt,tn,Xe,ut,Oe,ze),_e=new hS(T,Ze),ye=new qM,Ae=new JM(Xe,ut),de=new gx(T,Rt,tn,je,L,m,c),Re=new rS(T,L,ut),ot=new dS(Q,wt,ut,je),Fe=new vx(Q,Xe,wt,ut),Be=new Ax(Q,Xe,wt,ut),wt.programs=q.programs,T.capabilities=ut,T.extensions=Xe,T.properties=Ze,T.renderLists=ye,T.shadowMap=Re,T.state=je,T.info=wt}Ct();const X=new fS(T,Q);this.xr=X,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const N=Xe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Xe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(N){N!==void 0&&(K=N,this.setSize(W,$,!1))},this.getSize=function(N){return N.set(W,$)},this.setSize=function(N,ne,le=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=N,$=ne,t.width=Math.floor(N*K),t.height=Math.floor(ne*K),le===!0&&(t.style.width=N+"px",t.style.height=ne+"px"),this.setViewport(0,0,N,ne)},this.getDrawingBufferSize=function(N){return N.set(W*K,$*K).floor()},this.setDrawingBufferSize=function(N,ne,le){W=N,$=ne,K=le,t.width=Math.floor(N*le),t.height=Math.floor(ne*le),this.setViewport(0,0,N,ne)},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(pe)},this.setViewport=function(N,ne,le,Z){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,ne,le,Z),je.viewport(F.copy(pe).multiplyScalar(K).floor())},this.getScissor=function(N){return N.copy(Ee)},this.setScissor=function(N,ne,le,Z){N.isVector4?Ee.set(N.x,N.y,N.z,N.w):Ee.set(N,ne,le,Z),je.scissor(te.copy(Ee).multiplyScalar(K).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(N){je.setScissorTest(re=N)},this.setOpaqueSort=function(N){ie=N},this.setTransparentSort=function(N){ce=N},this.getClearColor=function(N){return N.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(N=!0,ne=!0,le=!0){let Z=0;if(N){let ue=!1;if(p!==null){const Ne=p.texture.format;ue=Ne===Sp||Ne===Mp||Ne===xp}if(ue){const Ne=p.texture.type,Ve=Ne===Ar||Ne===Sr||Ne===Mu||Ne===ns||Ne===vp||Ne===yp,qe=de.getClearColor(),Qe=de.getClearAlpha(),rt=qe.r,et=qe.g,st=qe.b,Lt=Ze.get(p).__webglFramebuffer;Ve?(_[0]=rt,_[1]=et,_[2]=st,_[3]=Qe,Q.clearBufferuiv(Q.COLOR,Lt,_)):(S[0]=rt,S[1]=et,S[2]=st,S[3]=Qe,Q.clearBufferiv(Q.COLOR,Lt,S))}else Z|=Q.COLOR_BUFFER_BIT}ne&&(Z|=Q.DEPTH_BUFFER_BIT),le&&(Z|=Q.STENCIL_BUFFER_BIT),Q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ye.dispose(),Ae.dispose(),Ze.dispose(),Rt.dispose(),tn.dispose(),L.dispose(),Oe.dispose(),ot.dispose(),q.dispose(),X.dispose(),X.removeEventListener("sessionstart",Bt),X.removeEventListener("sessionend",On),Ue&&(Ue.dispose(),Ue=null),an.stop()};function we(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const N=wt.autoReset,ne=Re.enabled,le=Re.autoUpdate,Z=Re.needsUpdate,ue=Re.type;Ct(),wt.autoReset=N,Re.enabled=ne,Re.autoUpdate=le,Re.needsUpdate=Z,Re.type=ue}function Me(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ce(N){const ne=N.target;ne.removeEventListener("dispose",Ce),yt(ne)}function yt(N){xt(N),Ze.remove(N)}function xt(N){const ne=Ze.get(N).programs;ne!==void 0&&(ne.forEach(function(le){q.releaseProgram(le)}),N.isShaderMaterial&&q.releaseShaderCache(N))}this.renderBufferDirect=function(N,ne,le,Z,ue,Ne){ne===null&&(ne=At);const Ve=ue.isMesh&&ue.matrixWorld.determinant()<0,qe=co(N,ne,le,Z,ue);je.setMaterial(Z,Ve);let Qe=le.index,rt=1;Z.wireframe===!0&&(Qe=k.getWireframeAttribute(le),rt=2);const et=le.drawRange,st=le.attributes.position;let Lt=et.start*rt,zt=(et.start+et.count)*rt;Ne!==null&&(Lt=Math.max(Lt,Ne.start*rt),zt=Math.min(zt,(Ne.start+Ne.count)*rt)),Qe!==null?(Lt=Math.max(Lt,0),zt=Math.min(zt,Qe.count)):st!=null&&(Lt=Math.max(Lt,0),zt=Math.min(zt,st.count));const Fn=zt-Lt;if(Fn<0||Fn===1/0)return;Oe.setup(ue,Z,qe,le,Qe);let kn,Xt=Fe;if(Qe!==null&&(kn=It.get(Qe),Xt=Be,Xt.setIndex(kn)),ue.isMesh)Z.wireframe===!0?(je.setLineWidth(Z.wireframeLinewidth*gt()),Xt.setMode(Q.LINES)):Xt.setMode(Q.TRIANGLES);else if(ue.isLine){let _t=Z.linewidth;_t===void 0&&(_t=1),je.setLineWidth(_t*gt()),ue.isLineSegments?Xt.setMode(Q.LINES):ue.isLineLoop?Xt.setMode(Q.LINE_LOOP):Xt.setMode(Q.LINE_STRIP)}else ue.isPoints?Xt.setMode(Q.POINTS):ue.isSprite&&Xt.setMode(Q.TRIANGLES);if(ue.isInstancedMesh)Xt.renderInstances(Lt,Fn,ue.count);else if(le.isInstancedBufferGeometry){const _t=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,hs=Math.min(le.instanceCount,_t);Xt.renderInstances(Lt,Fn,hs)}else Xt.render(Lt,Fn)},this.compile=function(N,ne){function le(Z,ue,Ne){Z.transparent===!0&&Z.side===Ri&&Z.forceSinglePass===!1?(Z.side=Nn,Z.needsUpdate=!0,fs(Z,ue,Ne),Z.side=ar,Z.needsUpdate=!0,fs(Z,ue,Ne),Z.side=Ri):fs(Z,ue,Ne)}y=Ae.get(N),y.init(),A.push(y),N.traverseVisible(function(Z){Z.isLight&&Z.layers.test(ne.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights(T.useLegacyLights),N.traverse(function(Z){const ue=Z.material;if(ue)if(Array.isArray(ue))for(let Ne=0;Ne<ue.length;Ne++){const Ve=ue[Ne];le(Ve,N,Z)}else le(ue,N,Z)}),A.pop(),y=null};let Mt=null;function ai(N){Mt&&Mt(N)}function Bt(){an.stop()}function On(){an.start()}const an=new kp;an.setAnimationLoop(ai),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(N){Mt=N,X.setAnimationLoop(N),N===null?an.stop():an.start()},X.addEventListener("sessionstart",Bt),X.addEventListener("sessionend",On),this.render=function(N,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(ne=X.updateCameraXR(ne)),N.isScene===!0&&N.onBeforeRender(T,N,ne,p),y=Ae.get(N,A.length),y.init(),A.push(y),We.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),me.setFromProjectionMatrix(We),Pe=this.localClippingEnabled,ge=ze.init(this.clippingPlanes,Pe),M=ye.get(N,v.length),M.init(),v.push(M),Oi(N,ne,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(ie,ce),ge===!0&&ze.beginShadows();const le=y.state.shadowsArray;if(Re.render(le,N,ne),ge===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,de.render(M,N),y.setupLights(T.useLegacyLights),ne.isArrayCamera){const Z=ne.cameras;for(let ue=0,Ne=Z.length;ue<Ne;ue++){const Ve=Z[ue];Fi(M,N,Ve,Ve.viewport)}}else Fi(M,N,ne);p!==null&&(at.updateMultisampleRenderTarget(p),at.updateRenderTargetMipmap(p)),N.isScene===!0&&N.onAfterRender(T,N,ne),Oe.resetDefaultState(),O=-1,w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function Oi(N,ne,le,Z){if(N.visible===!1)return;if(N.layers.test(ne.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ne);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||me.intersectsSprite(N)){Z&&Ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);const Ve=L.update(N),qe=N.material;qe.visible&&M.push(N,Ve,qe,le,Ke.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||me.intersectsObject(N))){N.isSkinnedMesh&&N.skeleton.frame!==wt.render.frame&&(N.skeleton.update(),N.skeleton.frame=wt.render.frame);const Ve=L.update(N),qe=N.material;if(Z&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ke.copy(N.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ke.copy(Ve.boundingSphere.center)),Ke.applyMatrix4(N.matrixWorld).applyMatrix4(We)),Array.isArray(qe)){const Qe=Ve.groups;for(let rt=0,et=Qe.length;rt<et;rt++){const st=Qe[rt],Lt=qe[st.materialIndex];Lt&&Lt.visible&&M.push(N,Ve,Lt,le,Ke.z,st)}}else qe.visible&&M.push(N,Ve,qe,le,Ke.z,null)}}const Ne=N.children;for(let Ve=0,qe=Ne.length;Ve<qe;Ve++)Oi(Ne[Ve],ne,le,Z)}function Fi(N,ne,le,Z){const ue=N.opaque,Ne=N.transmissive,Ve=N.transparent;y.setupLightsView(le),ge===!0&&ze.setGlobalState(T.clippingPlanes,le),Ne.length>0&&ha(ue,Ne,ne,le),Z&&je.viewport(F.copy(Z)),ue.length>0&&ki(ue,ne,le),Ne.length>0&&ki(Ne,ne,le),Ve.length>0&&ki(Ve,ne,le),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ha(N,ne,le,Z){const ue=ut.isWebGL2;Ue===null&&(Ue=new _i(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?nr:Ar,minFilter:os,samples:ue&&o===!0?4:0})),T.getDrawingBufferSize(ct),ue?Ue.setSize(ct.x,ct.y):Ue.setSize(al(ct.x),al(ct.y));const Ne=T.getRenderTarget();T.setRenderTarget(Ue),T.getClearColor(I),z=T.getClearAlpha(),z<1&&T.setClearColor(16777215,.5),T.clear();const Ve=T.toneMapping;T.toneMapping=tr,ki(N,le,Z),at.updateMultisampleRenderTarget(Ue),at.updateRenderTargetMipmap(Ue);let qe=!1;for(let Qe=0,rt=ne.length;Qe<rt;Qe++){const et=ne[Qe],st=et.object,Lt=et.geometry,zt=et.material,Fn=et.group;if(zt.side===Ri&&st.layers.test(Z.layers)){const kn=zt.side;zt.side=Nn,zt.needsUpdate=!0,oo(st,le,Z,Lt,zt,Fn),zt.side=kn,zt.needsUpdate=!0,qe=!0}}qe===!0&&(at.updateMultisampleRenderTarget(Ue),at.updateRenderTargetMipmap(Ue)),T.setRenderTarget(Ne),T.setClearColor(I,z),T.toneMapping=Ve}function ki(N,ne,le){const Z=ne.isScene===!0?ne.overrideMaterial:null;for(let ue=0,Ne=N.length;ue<Ne;ue++){const Ve=N[ue],qe=Ve.object,Qe=Ve.geometry,rt=Z===null?Ve.material:Z,et=Ve.group;qe.layers.test(le.layers)&&oo(qe,ne,le,Qe,rt,et)}}function oo(N,ne,le,Z,ue,Ne){N.onBeforeRender(T,ne,le,Z,ue,Ne),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ue.onBeforeRender(T,ne,le,Z,N,Ne),ue.transparent===!0&&ue.side===Ri&&ue.forceSinglePass===!1?(ue.side=Nn,ue.needsUpdate=!0,T.renderBufferDirect(le,ne,Z,ue,N,Ne),ue.side=ar,ue.needsUpdate=!0,T.renderBufferDirect(le,ne,Z,ue,N,Ne),ue.side=Ri):T.renderBufferDirect(le,ne,Z,ue,N,Ne),N.onAfterRender(T,ne,le,Z,ue,Ne)}function fs(N,ne,le){ne.isScene!==!0&&(ne=At);const Z=Ze.get(N),ue=y.state.lights,Ne=y.state.shadowsArray,Ve=ue.state.version,qe=q.getParameters(N,ue.state,Ne,ne,le),Qe=q.getProgramCacheKey(qe);let rt=Z.programs;Z.environment=N.isMeshStandardMaterial?ne.environment:null,Z.fog=ne.fog,Z.envMap=(N.isMeshStandardMaterial?tn:Rt).get(N.envMap||Z.environment),rt===void 0&&(N.addEventListener("dispose",Ce),rt=new Map,Z.programs=rt);let et=rt.get(Qe);if(et!==void 0){if(Z.currentProgram===et&&Z.lightsStateVersion===Ve)return lo(N,qe),et}else qe.uniforms=q.getUniforms(N),N.onBuild(le,qe,T),N.onBeforeCompile(qe,T),et=q.acquireProgram(qe,Qe),rt.set(Qe,et),Z.uniforms=qe.uniforms;const st=Z.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(st.clippingPlanes=ze.uniform),lo(N,qe),Z.needsLights=yl(N),Z.lightsStateVersion=Ve,Z.needsLights&&(st.ambientLightColor.value=ue.state.ambient,st.lightProbe.value=ue.state.probe,st.directionalLights.value=ue.state.directional,st.directionalLightShadows.value=ue.state.directionalShadow,st.spotLights.value=ue.state.spot,st.spotLightShadows.value=ue.state.spotShadow,st.rectAreaLights.value=ue.state.rectArea,st.ltc_1.value=ue.state.rectAreaLTC1,st.ltc_2.value=ue.state.rectAreaLTC2,st.pointLights.value=ue.state.point,st.pointLightShadows.value=ue.state.pointShadow,st.hemisphereLights.value=ue.state.hemi,st.directionalShadowMap.value=ue.state.directionalShadowMap,st.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,st.spotShadowMap.value=ue.state.spotShadowMap,st.spotLightMatrix.value=ue.state.spotLightMatrix,st.spotLightMap.value=ue.state.spotLightMap,st.pointShadowMap.value=ue.state.pointShadowMap,st.pointShadowMatrix.value=ue.state.pointShadowMatrix);const Lt=et.getUniforms(),zt=jo.seqWithValue(Lt.seq,st);return Z.currentProgram=et,Z.uniformsList=zt,et}function lo(N,ne){const le=Ze.get(N);le.outputColorSpace=ne.outputColorSpace,le.instancing=ne.instancing,le.skinning=ne.skinning,le.morphTargets=ne.morphTargets,le.morphNormals=ne.morphNormals,le.morphColors=ne.morphColors,le.morphTargetsCount=ne.morphTargetsCount,le.numClippingPlanes=ne.numClippingPlanes,le.numIntersection=ne.numClipIntersection,le.vertexAlphas=ne.vertexAlphas,le.vertexTangents=ne.vertexTangents,le.toneMapping=ne.toneMapping}function co(N,ne,le,Z,ue){ne.isScene!==!0&&(ne=At),at.resetTextureUnits();const Ne=ne.fog,Ve=Z.isMeshStandardMaterial?ne.environment:null,qe=p===null?T.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:Ii,Qe=(Z.isMeshStandardMaterial?tn:Rt).get(Z.envMap||Ve),rt=Z.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),st=!!le.morphAttributes.position,Lt=!!le.morphAttributes.normal,zt=!!le.morphAttributes.color,Fn=Z.toneMapped?T.toneMapping:tr,kn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Xt=kn!==void 0?kn.length:0,_t=Ze.get(Z),hs=y.state.lights;if(ge===!0&&(Pe===!0||N!==w)){const un=N===w&&Z.id===O;ze.setState(Z,N,un)}let Kt=!1;Z.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==hs.state.version||_t.outputColorSpace!==qe||ue.isInstancedMesh&&_t.instancing===!1||!ue.isInstancedMesh&&_t.instancing===!0||ue.isSkinnedMesh&&_t.skinning===!1||!ue.isSkinnedMesh&&_t.skinning===!0||_t.envMap!==Qe||Z.fog===!0&&_t.fog!==Ne||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==ze.numPlanes||_t.numIntersection!==ze.numIntersection)||_t.vertexAlphas!==rt||_t.vertexTangents!==et||_t.morphTargets!==st||_t.morphNormals!==Lt||_t.morphColors!==zt||_t.toneMapping!==Fn||ut.isWebGL2===!0&&_t.morphTargetsCount!==Xt)&&(Kt=!0):(Kt=!0,_t.__version=Z.version);let oi=_t.currentProgram;Kt===!0&&(oi=fs(Z,ne,ue));let da=!1,Zt=!1,xi=!1;const Qt=oi.getUniforms(),Bi=_t.uniforms;if(je.useProgram(oi.program)&&(da=!0,Zt=!0,xi=!0),Z.id!==O&&(O=Z.id,Zt=!0),da||w!==N){if(Qt.setValue(Q,"projectionMatrix",N.projectionMatrix),ut.logarithmicDepthBuffer&&Qt.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),w!==N&&(w=N,Zt=!0,xi=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const un=Qt.map.cameraPosition;un!==void 0&&un.setValue(Q,Ke.setFromMatrixPosition(N.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Qt.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||ue.isSkinnedMesh)&&Qt.setValue(Q,"viewMatrix",N.matrixWorldInverse)}if(ue.isSkinnedMesh){Qt.setOptional(Q,ue,"bindMatrix"),Qt.setOptional(Q,ue,"bindMatrixInverse");const un=ue.skeleton;un&&(ut.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Qt.setValue(Q,"boneTexture",un.boneTexture,at),Qt.setValue(Q,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pa=le.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&ut.isWebGL2===!0)&&He.update(ue,le,oi),(Zt||_t.receiveShadow!==ue.receiveShadow)&&(_t.receiveShadow=ue.receiveShadow,Qt.setValue(Q,"receiveShadow",ue.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bi.envMap.value=Qe,Bi.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Zt&&(Qt.setValue(Q,"toneMappingExposure",T.toneMappingExposure),_t.needsLights&&vl(Bi,xi),Ne&&Z.fog===!0&&_e.refreshFogUniforms(Bi,Ne),_e.refreshMaterialUniforms(Bi,Z,K,$,Ue),jo.upload(Q,_t.uniformsList,Bi,at)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(jo.upload(Q,_t.uniformsList,Bi,at),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Qt.setValue(Q,"center",ue.center),Qt.setValue(Q,"modelViewMatrix",ue.modelViewMatrix),Qt.setValue(Q,"normalMatrix",ue.normalMatrix),Qt.setValue(Q,"modelMatrix",ue.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let ds=0,ps=un.length;ds<ps;ds++)if(ut.isWebGL2){const ma=un[ds];ot.update(ma,oi),ot.bind(ma,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function vl(N,ne){N.ambientLightColor.needsUpdate=ne,N.lightProbe.needsUpdate=ne,N.directionalLights.needsUpdate=ne,N.directionalLightShadows.needsUpdate=ne,N.pointLights.needsUpdate=ne,N.pointLightShadows.needsUpdate=ne,N.spotLights.needsUpdate=ne,N.spotLightShadows.needsUpdate=ne,N.rectAreaLights.needsUpdate=ne,N.hemisphereLights.needsUpdate=ne}function yl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(N,ne,le){Ze.get(N.texture).__webglTexture=ne,Ze.get(N.depthTexture).__webglTexture=le;const Z=Ze.get(N);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=le===void 0,Z.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,ne){const le=Ze.get(N);le.__webglFramebuffer=ne,le.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(N,ne=0,le=0){p=N,P=ne,D=le;let Z=!0,ue=null,Ne=!1,Ve=!1;if(N){const Qe=Ze.get(N);Qe.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(Q.FRAMEBUFFER,null),Z=!1):Qe.__webglFramebuffer===void 0?at.setupRenderTarget(N):Qe.__hasExternalTextures&&at.rebindTextures(N,Ze.get(N.texture).__webglTexture,Ze.get(N.depthTexture).__webglTexture);const rt=N.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ve=!0);const et=Ze.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(ue=et[ne],Ne=!0):ut.isWebGL2&&N.samples>0&&at.useMultisampledRTT(N)===!1?ue=Ze.get(N).__webglMultisampledFramebuffer:ue=et,F.copy(N.viewport),te.copy(N.scissor),G=N.scissorTest}else F.copy(pe).multiplyScalar(K).floor(),te.copy(Ee).multiplyScalar(K).floor(),G=re;if(je.bindFramebuffer(Q.FRAMEBUFFER,ue)&&ut.drawBuffers&&Z&&je.drawBuffers(N,ue),je.viewport(F),je.scissor(te),je.setScissorTest(G),Ne){const Qe=Ze.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Qe.__webglTexture,le)}else if(Ve){const Qe=Ze.get(N.texture),rt=ne||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qe.__webglTexture,le||0,rt)}O=-1},this.readRenderTargetPixels=function(N,ne,le,Z,ue,Ne,Ve){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){je.bindFramebuffer(Q.FRAMEBUFFER,qe);try{const Qe=N.texture,rt=Qe.format,et=Qe.type;if(rt!==ti&&Ie.convert(rt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=et===nr&&(Xe.has("EXT_color_buffer_half_float")||ut.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(et!==Ar&&Ie.convert(et)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===Qi&&(ut.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=N.width-Z&&le>=0&&le<=N.height-ue&&Q.readPixels(ne,le,Z,ue,Ie.convert(rt),Ie.convert(et),Ne)}finally{const Qe=p!==null?Ze.get(p).__webglFramebuffer:null;je.bindFramebuffer(Q.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(N,ne,le=0){const Z=Math.pow(2,-le),ue=Math.floor(ne.image.width*Z),Ne=Math.floor(ne.image.height*Z);at.setTexture2D(ne,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,le,0,0,N.x,N.y,ue,Ne),je.unbindTexture()},this.copyTextureToTexture=function(N,ne,le,Z=0){const ue=ne.image.width,Ne=ne.image.height,Ve=Ie.convert(le.format),qe=Ie.convert(le.type);at.setTexture2D(le,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,le.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,le.unpackAlignment),ne.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Z,N.x,N.y,ue,Ne,Ve,qe,ne.image.data):ne.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Z,N.x,N.y,ne.mipmaps[0].width,ne.mipmaps[0].height,Ve,ne.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,Z,N.x,N.y,Ve,qe,ne.image),Z===0&&le.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(N,ne,le,Z,ue=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=N.max.x-N.min.x+1,Ve=N.max.y-N.min.y+1,qe=N.max.z-N.min.z+1,Qe=Ie.convert(Z.format),rt=Ie.convert(Z.type);let et;if(Z.isData3DTexture)at.setTexture3D(Z,0),et=Q.TEXTURE_3D;else if(Z.isDataArrayTexture)at.setTexture2DArray(Z,0),et=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,Z.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,Z.unpackAlignment);const st=Q.getParameter(Q.UNPACK_ROW_LENGTH),Lt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),zt=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Fn=Q.getParameter(Q.UNPACK_SKIP_ROWS),kn=Q.getParameter(Q.UNPACK_SKIP_IMAGES),Xt=le.isCompressedTexture?le.mipmaps[0]:le.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Xt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Xt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,N.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,N.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,N.min.z),le.isDataTexture||le.isData3DTexture?Q.texSubImage3D(et,ue,ne.x,ne.y,ne.z,Ne,Ve,qe,Qe,rt,Xt.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(et,ue,ne.x,ne.y,ne.z,Ne,Ve,qe,Qe,Xt.data)):Q.texSubImage3D(et,ue,ne.x,ne.y,ne.z,Ne,Ve,qe,Qe,rt,Xt),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,st),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Lt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,zt),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Fn),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,kn),ue===0&&Z.generateMipmaps&&Q.generateMipmap(et),je.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?at.setTextureCube(N,0):N.isData3DTexture?at.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?at.setTexture2DArray(N,0):at.setTexture2D(N,0),je.unbindTexture()},this.resetState=function(){P=0,D=0,p=null,je.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?rs:bp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rs?nt:Ii}}class mS extends Gp{}mS.prototype.isWebGL1Renderer=!0;class gS extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _S{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new Y;class Au{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=er(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=er(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=er(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=er(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ph=new Y,Lh=new Ft,Dh=new Ft,vS=new Y,Ih=new dt,Ns=new Y,_c=new Ni,Nh=new dt,vc=new no;class yS extends Gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new or),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ns.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ns),this.boundingBox.expandByPoint(Ns)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ns.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ns),this.boundingSphere.expandByPoint(Ns)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_c.copy(this.boundingSphere),_c.applyMatrix4(i),e.ray.intersectsSphere(_c)!==!1&&(Nh.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Nh),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lh.fromBufferAttribute(i.attributes.skinIndex,e),Dh.fromBufferAttribute(i.attributes.skinWeight,e),Ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Dh.getComponent(r);if(a!==0){const o=Lh.getComponent(r);Ih.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vS.copy(Ph).applyMatrix4(Ih),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Wp extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xS extends dn{constructor(e=null,t=1,n=1,i,r,a,o,c,u=ln,f=ln,d,m){super(null,a,o,c,u,f,i,r,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uh=new dt,MS=new dt;class Ru{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new dt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:MS;Uh.multiplyMatrices(o,t[r]),Uh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ap(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xS(t,e,e,ti,Qi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Wp),this.bones.push(a),this.boneInverses.push(new dt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Oh extends wn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new dt,Fh=new dt,Fo=[],kh=new or,SS=new dt,wa=new Gn,Aa=new Ni;class TS extends Gn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,SS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),kh.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Aa.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(n),e.ray.intersectsSphere(Aa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Us),Fh.multiplyMatrices(n,Us),wa.matrixWorld=Fh,wa.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){const c=Fo[a];c.instanceId=r,c.object=this,t.push(c)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Xp extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bh=new Y,zh=new Y,Hh=new dt,yc=new no,ko=new Ni;class Cu extends Gt{constructor(e=new yi,t=new Xp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bh.fromBufferAttribute(t,i-1),zh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bh.distanceTo(zh);e.setAttribute("lineDistance",new vi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Hh.copy(i).invert(),yc.copy(e.ray).applyMatrix4(Hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new Y,f=new Y,d=new Y,m=new Y,_=this.isLineSegments?2:1,S=n.index,y=n.attributes.position;if(S!==null){const v=Math.max(0,a.start),A=Math.min(S.count,a.start+a.count);for(let T=v,R=A-1;T<R;T+=_){const P=S.getX(T),D=S.getX(T+1);if(u.fromBufferAttribute(y,P),f.fromBufferAttribute(y,D),yc.distanceSqToSegment(u,f,m,d)>c)continue;m.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(m);O<e.near||O>e.far||t.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),A=Math.min(y.count,a.start+a.count);for(let T=v,R=A-1;T<R;T+=_){if(u.fromBufferAttribute(y,T),f.fromBufferAttribute(y,T+1),yc.distanceSqToSegment(u,f,m,d)>c)continue;m.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(m);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Vh=new Y,Gh=new Y;class bS extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new vi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ES extends Cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jp extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new dt,Zc=new no,Bo=new Ni,zo=new Y;class wS extends Gt{constructor(e=new yi,t=new jp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Wh.copy(i).invert(),Zc.copy(e.ray).applyMatrix4(Wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=m,M=_;S<M;S++){const y=u.getX(S);zo.fromBufferAttribute(d,y),Xh(zo,y,c,i,e,t,this)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=m,M=_;S<M;S++)zo.fromBufferAttribute(d,S),Xh(zo,S,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xh(s,e,t,n,i,r,a){const o=Zc.distanceSqToPoint(s);if(o<t){const c=new Y;Zc.closestPointToPoint(s,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Pu extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dr extends Pu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mr(s,e,t){return qp(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Ho(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function AS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Yp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ro{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class RS extends ro{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vf,endingEnd:Vf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gf:r=e,o=2*t-n;break;case Wf:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gf:a=e,c=2*n-t;break;case Wf:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,_=this._weightNext,S=(n-t)/(i-t),M=S*S,y=M*S,v=-m*y+2*m*M-m*S,A=(1+m)*y+(-1.5-2*m)*M+(-.5+m)*S+1,T=(-1-_)*y+(1.5+_)*M+.5*S,R=_*y-_*M;for(let P=0;P!==o;++P)r[P]=v*a[f+P]+A*a[u+P]+T*a[c+P]+R*a[d+P];return r}}class CS extends ro{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=(n-t)/(i-t),d=1-f;for(let m=0;m!==o;++m)r[m]=a[u+m]*d+a[c+m]*f;return r}}class PS extends ro{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(t,this.TimeBufferType),this.values=Ho(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new PS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new CS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new RS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Yl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=mr(n,r,a),this.values=mr(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&qp(i))for(let o=0,c=i.length;o!==c;++o){const u=i[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=mr(this.times),t=mr(this.values),n=this.getValueSize(),i=this.getInterpolation()===Yl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)c=!0;else{const d=o*n,m=d-n,_=d+n;for(let S=0;S!==n;++S){const M=t[d+S];if(M!==t[m+S]||M!==t[_+S]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,m=a*n;for(let _=0;_!==n;++_)t[m+_]=t[d+_]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=mr(e,0,a),this.values=mr(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=mr(this.times,0),t=mr(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=ia;class ua extends Ui{}ua.prototype.ValueTypeName="bool";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=Ka;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Kp extends Ui{}Kp.prototype.ValueTypeName="color";class Za extends Ui{}Za.prototype.ValueTypeName="number";class LS extends ro{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let u=e*o;for(let f=u+o;u!==f;u+=4)Lr.slerpFlat(r,0,a,u-o,a,u,c);return r}}class ls extends Ui{InterpolantFactoryMethodLinear(e){return new LS(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.DefaultInterpolation=ia;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class fa extends Ui{}fa.prototype.ValueTypeName="string";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=Ka;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;class Qa extends Ui{}Qa.prototype.ValueTypeName="vector";class DS{constructor(e,t=-1,n,i=H_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(NS(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],u=[];c.push((o+r-1)%r,o,(o+1)%r),u.push(0,1,0);const f=AS(c);c=jh(c,1,f),u=jh(u,1,f),!i&&c[0]===0&&(c.push(r),u.push(u[0])),a.push(new Za(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const u=e[o],f=u.name.match(r);if(f&&f.length>1){const d=f[1];let m=i[d];m||(i[d]=m=[]),m.push(u)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,m,_,S,M){if(_.length!==0){const y=[],v=[];Yp(_,y,v,S),y.length!==0&&M.push(new d(m,y,v))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const m=u[d].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let S;for(S=0;S<m.length;S++)if(m[S].morphTargets)for(let M=0;M<m[S].morphTargets.length;M++)_[m[S].morphTargets[M]]=-1;for(const M in _){const y=[],v=[];for(let A=0;A!==m[S].morphTargets.length;++A){const T=m[S];y.push(T.time),v.push(T.morphTarget===M?1:0)}i.push(new Za(".morphTargetInfluence["+M+"]",y,v))}c=_.length*a}else{const _=".bones["+t[d].name+"]";n(Qa,_+".position",m,"pos",i),n(ls,_+".quaternion",m,"rot",i),n(Qa,_+".scale",m,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function IS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Za;case"vector":case"vector2":case"vector3":case"vector4":return Qa;case"color":return Kp;case"quaternion":return ls;case"bool":case"boolean":return ua;case"string":return fa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function NS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=IS(s.type);if(s.times===void 0){const t=[],n=[];Yp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const aa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $p{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&i.onStart!==void 0&&i.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,m=u.length;d<m;d+=2){const _=u[d],S=u[d+1];if(_.global&&(_.lastIndex=0),_.test(f))return S}return null}}}const US=new $p;class so{constructor(e){this.manager=e!==void 0?e:US,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Yi={};class OS extends Error{constructor(e,t){super(e),this.response=t}}class Zp extends so{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=aa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:i});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=Yi[e],d=u.body.getReader(),m=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),_=m?parseInt(m):0,S=_!==0;let M=0;const y=new ReadableStream({start(v){A();function A(){d.read().then(({done:T,value:R})=>{if(T)v.close();else{M+=R.byteLength;const P=new ProgressEvent("progress",{lengthComputable:S,loaded:M,total:_});for(let D=0,p=f.length;D<p;D++){const O=f[D];O.onProgress&&O.onProgress(P)}v.enqueue(R),A()}})}}});return new Response(y)}else throw new OS(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return u.json();default:if(o===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),m=d&&d[1]?d[1].toLowerCase():void 0,_=new TextDecoder(m);return u.arrayBuffer().then(S=>_.decode(S))}}}).then(u=>{aa.add(e,u);const f=Yi[e];delete Yi[e];for(let d=0,m=f.length;d<m;d++){const _=f[d];_.onLoad&&_.onLoad(u)}}).catch(u=>{const f=Yi[e];if(f===void 0)throw this.manager.itemError(e),u;delete Yi[e];for(let d=0,m=f.length;d<m;d++){const _=f[d];_.onError&&_.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class FS extends so{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=aa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=$a("img");function c(){f(),aa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){f(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class kS extends so{constructor(e){super(e)}load(e,t,n,i){const r=new dn,a=new FS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Lu extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xc=new dt,qh=new Y,Yh=new Y;class Du{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(qh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BS extends Du{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ra*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zS extends Lu{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new BS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kh=new dt,Ra=new Y,Mc=new Y;class HS extends Du{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ra),Mc.copy(n.position),Mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mc),n.updateMatrixWorld(),i.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class VS extends Lu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new HS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GS extends Du{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ua extends Lu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new GS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class WS extends so{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=aa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){aa.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $h(){return(typeof performance>"u"?Date:performance).now()}const Iu="\\[\\]\\.:\\/",XS=new RegExp("["+Iu+"]","g"),Nu="[^"+Iu+"]",jS="[^"+Iu.replace("\\.","")+"]",qS=/((?:WC+[\/:])*)/.source.replace("WC",Nu),YS=/(WCOD+)?/.source.replace("WCOD",jS),KS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),$S=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),ZS=new RegExp("^"+qS+YS+KS+$S+"$"),QS=["material","materials","bones","map"];class JS{constructor(e,t,n){const i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XS,"")}static parseTrackName(e){const t=ZS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);QS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[i];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=JS;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class eT{constructor(e,t,n=0,i=1/0){this.ray=new no(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(Zh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jc(e[i],this,n,t);return n.sort(Zh),n}}function Zh(s,e){return s.distance-e.distance}function Jc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Jc(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);function Qh(s,e){if(e===V_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===jc||e===Tp){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===jc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class tT extends so{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new aT(t)}),this.register(function(t){return new pT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new vT(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Qc.extractUrlBase(e),this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Zp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,a,function(f){t(f),r.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jp){try{a[St.KHR_BINARY_GLTF]=new yT(e)}catch(d){i&&i(d);return}r=JSON.parse(a[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new DT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const d=this.pluginCallbacks[f](u);o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const d=r.extensionsUsed[f],m=r.extensionsRequired||[];switch(d){case St.KHR_MATERIALS_UNLIT:a[d]=new rT;break;case St.KHR_DRACO_MESH_COMPRESSION:a[d]=new xT(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:a[d]=new MT;break;case St.KHR_MESH_QUANTIZATION:a[d]=new ST;break;default:m.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function nT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class iT{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const f=new it(16777215);c.color!==void 0&&f.fromArray(c.color);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Ua(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new VS(f),u.distance=d;break;case"spot":u=new zS(f),u.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,vr(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class rT{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Tr}extendParams(e,t,n){const i=[];e.color=new it(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}}class sT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class aT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(o,o)}return Promise.all(r)}}class oT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class lT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class cT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class uT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new it(o[0],o[1],o[2]),Promise.all(r)}}class fT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new it(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,nt)),Promise.all(r)}}class dT{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class pT{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class mT{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gT{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _T{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,u=i.byteLength||0,f=i.count,d=i.byteStride,m=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,d,m,i.mode,i.filter).then(function(_){return _.buffer}):a.ready.then(function(){const _=new ArrayBuffer(f*d);return a.decodeGltfBuffer(new Uint8Array(_),f,d,m,i.mode,i.filter),_})})}else return null}}class vT{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Jn.TRIANGLES&&u.mode!==Jn.TRIANGLE_STRIP&&u.mode!==Jn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(f=>(c[u]=f,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const f=u.pop(),d=f.isGroup?f.children:[f],m=u[0].count,_=[];for(const S of d){const M=new dt,y=new Y,v=new Lr,A=new Y(1,1,1),T=new TS(S.geometry,S.material,m);for(let R=0;R<m;R++)c.TRANSLATION&&y.fromBufferAttribute(c.TRANSLATION,R),c.ROTATION&&v.fromBufferAttribute(c.ROTATION,R),c.SCALE&&A.fromBufferAttribute(c.SCALE,R),T.setMatrixAt(R,M.compose(y,v,A));for(const R in c)R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&S.geometry.setAttribute(R,c[R]);Gt.prototype.copy.call(T,S),this.parser.assignFinalMaterial(T),_.push(T)}return f.isGroup?(f.clear(),f.add(..._),f):_[0]}))}}const Jp="glTF",Ca=12,Jh={JSON:1313821514,BIN:5130562};class yT{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ca,r=new DataView(e,Ca);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Jh.JSON){const u=new Uint8Array(e,Ca+a,o);this.content=n.decode(u)}else if(c===Jh.BIN){const u=Ca+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(const f in a){const d=eu[f]||f.toLowerCase();o[d]=a[f]}for(const f in e.attributes){const d=eu[f]||f.toLowerCase();if(a[f]!==void 0){const m=n.accessors[e.attributes[f]],_=js[m.componentType];u[d]=_.name,c[d]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(d){i.decodeDracoFile(f,function(m){for(const _ in m.attributes){const S=m.attributes[_],M=c[_];M!==void 0&&(S.normalized=M)}d(m)},o,u)})})}}class MT{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ST{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class em extends ro{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,f=i-t,d=(n-t)/f,m=d*d,_=m*d,S=e*u,M=S-u,y=-2*_+3*m,v=_-m,A=1-y,T=v-m+d;for(let R=0;R!==o;R++){const P=a[M+R+o],D=a[M+R+c]*f,p=a[S+R+o],O=a[S+R]*f;r[R]=A*P+T*D+y*p+v*O}return r}}const TT=new Lr;class bT extends em{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return TT.fromArray(r).normalize().toArray(r),r}}const Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ed={9728:ln,9729:Cn,9984:Xc,9985:gp,9986:Xo,9987:os},td={33071:ei,33648:rl,10497:ta},Sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ET={CUBICSPLINE:void 0,LINEAR:ia,STEP:Ka},Tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Pu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),s.DefaultMaterial}function Gr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AT(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,f=e.length;u<f;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];if(n){const m=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(m)}if(i){const m=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(m)}if(r){const m=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(m)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const f=u[0],d=u[1],m=u[2];return n&&(s.morphAttributes.position=f),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function RT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CT(s){let e;const t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bc(t.attributes):e=s.indices+":"+bc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bc(s.targets[n]);return e}function bc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function tu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const LT=new dt;class DT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new kS(this.options.manager):this.textureLoader=new WS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Gr(r,o,i),vr(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,f]of a.children.entries())r(f,o.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Qc.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Sc[i.type],o=js[i.componentType],c=i.normalized===!0,u=new o(i.count*a);return Promise.resolve(new wn(u,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Sc[i.type],u=js[i.componentType],f=u.BYTES_PER_ELEMENT,d=f*c,m=i.byteOffset||0,_=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let M,y;if(_&&_!==d){const v=Math.floor(m/_),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let T=t.cache.get(A);T||(M=new u(o,v*_,i.count*_/f),T=new _S(M,_/f),t.cache.add(A,T)),y=new Au(T,c,m%_/f,S)}else o===null?M=new u(i.count*c):M=new u(o,m,i.count*c),y=new wn(M,c,S);if(i.sparse!==void 0){const v=Sc.SCALAR,A=js[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,R=i.sparse.values.byteOffset||0,P=new A(a[1],T,i.sparse.count*v),D=new u(a[2],R,i.sparse.count*c);o!==null&&(y=new wn(y.array.slice(),y.itemSize,y.normalized));for(let p=0,O=P.length;p<O;p++){const w=P[p];if(y.setX(w,D[p*c]),c>=2&&y.setY(w,D[p*c+1]),c>=3&&y.setZ(w,D[p*c+2]),c>=4&&y.setW(w,D[p*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const m=(r.samplers||{})[a.sampler]||{};return f.magFilter=ed[m.magFilter]||Cn,f.minFilter=ed[m.minFilter]||os,f.wrapS=td[m.wrapS]||ta,f.wrapT=td[m.wrapT]||ta,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){u=!0;const m=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(m),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(d){return new Promise(function(m,_){let S=m;t.isImageBitmapLoader===!0&&(S=function(M){const y=new dn(M);y.needsUpdate=!0,m(y)}),t.load(Qc.resolveURL(d,r.path),S,void 0,_)})}).then(function(d){return u===!0&&o.revokeObjectURL(c),d.userData.mimeType=a.mimeType||PT(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new jp,Li.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Xp,Li.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Pu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},u=[];if(c[St.KHR_MATERIALS_UNLIT]){const d=i[St.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),u.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const m=d.baseColorFactor;o.color.fromArray(m),o.opacity=m[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",d.baseColorTexture,nt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ri);const f=r.alphaMode||Tc.OPAQUE;if(f===Tc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Tc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Tr&&(u.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&a!==Tr&&(u.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Tr&&(o.emissive=new it().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Tr&&u.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,nt)),Promise.all(u).then(function(){const d=new a(o);return r.name&&(d.name=r.name),vr(d,r),t.associations.set(d,{materials:e}),r.extensions&&Gr(i,d,r),d})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return nd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o],f=CT(u),d=i[f];if(d)a.push(d.promise);else{let m;u.extensions&&u.extensions[St.KHR_DRACO_MESH_COMPRESSION]?m=r(u):m=nd(new yi,u,t),i[f]={primitive:u,promise:m},a.push(m)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const f=a[c].material===void 0?wT(this.cache):this.getDependency("material",a[c].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const u=c.slice(0,c.length-1),f=c[c.length-1],d=[];for(let _=0,S=f.length;_<S;_++){const M=f[_],y=a[_];let v;const A=u[_];if(y.mode===Jn.TRIANGLES||y.mode===Jn.TRIANGLE_STRIP||y.mode===Jn.TRIANGLE_FAN||y.mode===void 0)v=r.isSkinnedMesh===!0?new yS(M,A):new Gn(M,A),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),y.mode===Jn.TRIANGLE_STRIP?v.geometry=Qh(v.geometry,Tp):y.mode===Jn.TRIANGLE_FAN&&(v.geometry=Qh(v.geometry,jc));else if(y.mode===Jn.LINES)v=new bS(M,A);else if(y.mode===Jn.LINE_STRIP)v=new Cu(M,A);else if(y.mode===Jn.LINE_LOOP)v=new ES(M,A);else if(y.mode===Jn.POINTS)v=new wS(M,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(v.geometry.morphAttributes).length>0&&RT(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),vr(v,r),y.extensions&&Gr(i,v,y),t.assignFinalMaterial(v),d.push(v)}for(let _=0,S=d.length;_<S;_++)t.associations.set(d[_],{meshes:e,primitives:_});if(d.length===1)return r.extensions&&Gr(i,d[0],r),d[0];const m=new Zr;r.extensions&&Gr(i,m,r),t.associations.set(m,{meshes:e});for(let _=0,S=d.length;_<S;_++)m.add(d[_]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new En(Ia.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ml(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let u=0,f=a.length;u<f;u++){const d=a[u];if(d){o.push(d);const m=new dt;r!==null&&m.fromArray(r.array,u*16),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Ru(o,c)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],o=[],c=[],u=[];for(let f=0,d=n.channels.length;f<d;f++){const m=n.channels[f],_=n.samplers[m.sampler],S=m.target,M=S.node,y=n.parameters!==void 0?n.parameters[_.input]:_.input,v=n.parameters!==void 0?n.parameters[_.output]:_.output;S.node!==void 0&&(r.push(this.getDependency("node",M)),a.push(this.getDependency("accessor",y)),o.push(this.getDependency("accessor",v)),c.push(_),u.push(S))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],m=f[1],_=f[2],S=f[3],M=f[4],y=[];for(let v=0,A=d.length;v<A;v++){const T=d[v],R=m[v],P=_[v],D=S[v],p=M[v];if(T===void 0)continue;T.updateMatrix();let O;switch(gr[p.path]){case gr.weights:O=Za;break;case gr.rotation:O=ls;break;case gr.position:case gr.scale:default:O=Qa;break}const w=T.name?T.name:T.uuid,F=D.interpolation!==void 0?ET[D.interpolation]:ia,te=[];gr[p.path]===gr.weights?T.traverse(function(I){I.morphTargetInfluences&&te.push(I.name?I.name:I.uuid)}):te.push(w);let G=P.array;if(P.normalized){const I=tu(G.constructor),z=new Float32Array(G.length);for(let W=0,$=G.length;W<$;W++)z[W]=G[W]*I;G=z}for(let I=0,z=te.length;I<z;I++){const W=new O(te[I]+"."+gr[p.path],R.array,G,F);D.interpolation==="CUBICSPLINE"&&(W.createInterpolant=function(K){const ie=this instanceof ls?bT:em;return new ie(this.times,this.values,this.getValueSize()/3,K)},W.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(W)}}return new DS(i,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=i.weights.length;c<u;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let u=0,f=o.length;u<f;u++)a.push(n.getDependency("node",o[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(u){const f=u[0],d=u[1],m=u[2];m!==null&&f.traverse(function(_){_.isSkinnedMesh&&_.bind(m,LT)});for(let _=0,S=d.length;_<S;_++)f.add(d[_]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let f;if(r.isBone===!0?f=new Wp:u.length>1?f=new Zr:u.length===1?f=u[0]:f=new Gt,f!==u[0])for(let d=0,m=u.length;d<m;d++)f.add(u[d]);if(r.name&&(f.userData.name=r.name,f.name=a),vr(f,r),r.extensions&&Gr(n,f,r),r.matrix!==void 0){const d=new dt;d.fromArray(r.matrix),f.applyMatrix4(d)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Zr;n.name&&(r.name=i.createUniqueName(n.name)),vr(r,n),n.extensions&&Gr(t,r,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let f=0,d=c.length;f<d;f++)r.add(c[f]);const u=f=>{const d=new Map;for(const[m,_]of i.associations)(m instanceof Li||m instanceof dn)&&d.set(m,_);return f.traverse(m=>{const _=i.associations.get(m);_!=null&&d.set(m,_)}),d};return i.associations=u(r),r})}}function IT(s,e,t){const n=e.attributes,i=new or;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(i.set(new Y(c[0],c[1],c[2]),new Y(u[0],u[1],u[2])),o.normalized){const f=tu(js[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new Y,c=new Y;for(let u=0,f=r.length;u<f;u++){const d=r[u];if(d.POSITION!==void 0){const m=t.json.accessors[d.POSITION],_=m.min,S=m.max;if(_!==void 0&&S!==void 0){if(c.setX(Math.max(Math.abs(_[0]),Math.abs(S[0]))),c.setY(Math.max(Math.abs(_[1]),Math.abs(S[1]))),c.setZ(Math.max(Math.abs(_[2]),Math.abs(S[2]))),m.normalized){const M=tu(js[m.componentType]);c.multiplyScalar(M)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ni;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function nd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=eu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return vr(s,e),IT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?AT(s,e.targets,t):s})}class ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NT=new ml(-1,1,1,-1,0,1),Uu=new yi;Uu.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3));Uu.setAttribute("uv",new vi([0,2,0,0,2,0],2));class tm{constructor(e){this._mesh=new Gn(Uu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class UT extends ao{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}class nm extends ao{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ol.clone(e.uniforms),this.material=new Wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const im={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class id extends ao{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class OT extends ao{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class FT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new _i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nm(im),this.clock=new Qp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}id!==void 0&&(a instanceof id?n=!0:a instanceof OT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const kT={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class oa extends ao{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new it(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _i(r,a,{type:nr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const m=new _i(r,a,{type:nr});m.texture.name="UnrealBloomPass.h"+d,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const _=new _i(r,a,{type:nr});_.texture.name="UnrealBloomPass.v"+d,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),r=Math.round(r/2),a=Math.round(a/2)}const o=kT;this.highPassUniforms=ol.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new $e(r,a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=im;this.copyUniforms=ol.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Wn({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Hc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new it,this.oldClearAlpha=1,this.basic=new Tr,this.fsQuad=new tm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new $e(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=oa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=oa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Wn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Wn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}oa.BlurDirectionX=new $e(1,0);oa.BlurDirectionY=new $e(0,1);const BT={uniforms:{tDiffuse:{value:null},resolution:{value:new $e(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},xe={},zT=new URL("assets/CUBE.aa7d5a24.glb",location.href).href;/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */function rd(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function sd(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rd(Object(t),!0).forEach(function(n){qo(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):rd(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}function bn(){bn=function(){return s};var s={},e=Object.prototype,t=e.hasOwnProperty,n=Object.defineProperty||function(G,I,z){G[I]=z.value},i=typeof Symbol=="function"?Symbol:{},r=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(G,I,z){return Object.defineProperty(G,I,{value:z,enumerable:!0,configurable:!0,writable:!0}),G[I]}try{c({},"")}catch{c=function(I,z,W){return I[z]=W}}function u(G,I,z,W){var $=I&&I.prototype instanceof m?I:m,K=Object.create($.prototype),ie=new w(W||[]);return n(K,"_invoke",{value:P(G,z,ie)}),K}function f(G,I,z){try{return{type:"normal",arg:G.call(I,z)}}catch(W){return{type:"throw",arg:W}}}s.wrap=u;var d={};function m(){}function _(){}function S(){}var M={};c(M,r,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(F([])));v&&v!==e&&t.call(v,r)&&(M=v);var A=S.prototype=m.prototype=Object.create(M);function T(G){["next","throw","return"].forEach(function(I){c(G,I,function(z){return this._invoke(I,z)})})}function R(G,I){function z($,K,ie,ce){var pe=f(G[$],G,K);if(pe.type!=="throw"){var Ee=pe.arg,re=Ee.value;return re&&typeof re=="object"&&t.call(re,"__await")?I.resolve(re.__await).then(function(me){z("next",me,ie,ce)},function(me){z("throw",me,ie,ce)}):I.resolve(re).then(function(me){Ee.value=me,ie(Ee)},function(me){return z("throw",me,ie,ce)})}ce(pe.arg)}var W;n(this,"_invoke",{value:function($,K){function ie(){return new I(function(ce,pe){z($,K,ce,pe)})}return W=W?W.then(ie,ie):ie()}})}function P(G,I,z){var W="suspendedStart";return function($,K){if(W==="executing")throw new Error("Generator is already running");if(W==="completed"){if($==="throw")throw K;return te()}for(z.method=$,z.arg=K;;){var ie=z.delegate;if(ie){var ce=D(ie,z);if(ce){if(ce===d)continue;return ce}}if(z.method==="next")z.sent=z._sent=z.arg;else if(z.method==="throw"){if(W==="suspendedStart")throw W="completed",z.arg;z.dispatchException(z.arg)}else z.method==="return"&&z.abrupt("return",z.arg);W="executing";var pe=f(G,I,z);if(pe.type==="normal"){if(W=z.done?"completed":"suspendedYield",pe.arg===d)continue;return{value:pe.arg,done:z.done}}pe.type==="throw"&&(W="completed",z.method="throw",z.arg=pe.arg)}}}function D(G,I){var z=I.method,W=G.iterator[z];if(W===void 0)return I.delegate=null,z==="throw"&&G.iterator.return&&(I.method="return",I.arg=void 0,D(G,I),I.method==="throw")||z!=="return"&&(I.method="throw",I.arg=new TypeError("The iterator does not provide a '"+z+"' method")),d;var $=f(W,G.iterator,I.arg);if($.type==="throw")return I.method="throw",I.arg=$.arg,I.delegate=null,d;var K=$.arg;return K?K.done?(I[G.resultName]=K.value,I.next=G.nextLoc,I.method!=="return"&&(I.method="next",I.arg=void 0),I.delegate=null,d):K:(I.method="throw",I.arg=new TypeError("iterator result is not an object"),I.delegate=null,d)}function p(G){var I={tryLoc:G[0]};1 in G&&(I.catchLoc=G[1]),2 in G&&(I.finallyLoc=G[2],I.afterLoc=G[3]),this.tryEntries.push(I)}function O(G){var I=G.completion||{};I.type="normal",delete I.arg,G.completion=I}function w(G){this.tryEntries=[{tryLoc:"root"}],G.forEach(p,this),this.reset(!0)}function F(G){if(G){var I=G[r];if(I)return I.call(G);if(typeof G.next=="function")return G;if(!isNaN(G.length)){var z=-1,W=function $(){for(;++z<G.length;)if(t.call(G,z))return $.value=G[z],$.done=!1,$;return $.value=void 0,$.done=!0,$};return W.next=W}}return{next:te}}function te(){return{value:void 0,done:!0}}return _.prototype=S,n(A,"constructor",{value:S,configurable:!0}),n(S,"constructor",{value:_,configurable:!0}),_.displayName=c(S,o,"GeneratorFunction"),s.isGeneratorFunction=function(G){var I=typeof G=="function"&&G.constructor;return!!I&&(I===_||(I.displayName||I.name)==="GeneratorFunction")},s.mark=function(G){return Object.setPrototypeOf?Object.setPrototypeOf(G,S):(G.__proto__=S,c(G,o,"GeneratorFunction")),G.prototype=Object.create(A),G},s.awrap=function(G){return{__await:G}},T(R.prototype),c(R.prototype,a,function(){return this}),s.AsyncIterator=R,s.async=function(G,I,z,W,$){$===void 0&&($=Promise);var K=new R(u(G,I,z,W),$);return s.isGeneratorFunction(I)?K:K.next().then(function(ie){return ie.done?ie.value:K.next()})},T(A),c(A,o,"Generator"),c(A,r,function(){return this}),c(A,"toString",function(){return"[object Generator]"}),s.keys=function(G){var I=Object(G),z=[];for(var W in I)z.push(W);return z.reverse(),function $(){for(;z.length;){var K=z.pop();if(K in I)return $.value=K,$.done=!1,$}return $.done=!0,$}},s.values=F,w.prototype={constructor:w,reset:function(G){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!G)for(var I in this)I.charAt(0)==="t"&&t.call(this,I)&&!isNaN(+I.slice(1))&&(this[I]=void 0)},stop:function(){this.done=!0;var G=this.tryEntries[0].completion;if(G.type==="throw")throw G.arg;return this.rval},dispatchException:function(G){if(this.done)throw G;var I=this;function z(pe,Ee){return K.type="throw",K.arg=G,I.next=pe,Ee&&(I.method="next",I.arg=void 0),!!Ee}for(var W=this.tryEntries.length-1;W>=0;--W){var $=this.tryEntries[W],K=$.completion;if($.tryLoc==="root")return z("end");if($.tryLoc<=this.prev){var ie=t.call($,"catchLoc"),ce=t.call($,"finallyLoc");if(ie&&ce){if(this.prev<$.catchLoc)return z($.catchLoc,!0);if(this.prev<$.finallyLoc)return z($.finallyLoc)}else if(ie){if(this.prev<$.catchLoc)return z($.catchLoc,!0)}else{if(!ce)throw new Error("try statement without catch or finally");if(this.prev<$.finallyLoc)return z($.finallyLoc)}}}},abrupt:function(G,I){for(var z=this.tryEntries.length-1;z>=0;--z){var W=this.tryEntries[z];if(W.tryLoc<=this.prev&&t.call(W,"finallyLoc")&&this.prev<W.finallyLoc){var $=W;break}}$&&(G==="break"||G==="continue")&&$.tryLoc<=I&&I<=$.finallyLoc&&($=null);var K=$?$.completion:{};return K.type=G,K.arg=I,$?(this.method="next",this.next=$.finallyLoc,d):this.complete(K)},complete:function(G,I){if(G.type==="throw")throw G.arg;return G.type==="break"||G.type==="continue"?this.next=G.arg:G.type==="return"?(this.rval=this.arg=G.arg,this.method="return",this.next="end"):G.type==="normal"&&I&&(this.next=I),d},finish:function(G){for(var I=this.tryEntries.length-1;I>=0;--I){var z=this.tryEntries[I];if(z.finallyLoc===G)return this.complete(z.completion,z.afterLoc),O(z),d}},catch:function(G){for(var I=this.tryEntries.length-1;I>=0;--I){var z=this.tryEntries[I];if(z.tryLoc===G){var W=z.completion;if(W.type==="throw"){var $=W.arg;O(z)}return $}}throw new Error("illegal catch attempt")},delegateYield:function(G,I,z){return this.delegate={iterator:F(G),resultName:I,nextLoc:z},this.method==="next"&&(this.arg=void 0),d}},s}function ad(s,e,t,n,i,r,a){try{var o=s[r](a),c=o.value}catch(u){t(u);return}o.done?e(c):Promise.resolve(c).then(n,i)}function Yr(s){return function(){var e=this,t=arguments;return new Promise(function(n,i){var r=s.apply(e,t);function a(c){ad(r,n,i,a,o,"next",c)}function o(c){ad(r,n,i,a,o,"throw",c)}a(void 0)})}}function rm(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function od(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,om(n.key),n)}}function sm(s,e,t){return e&&od(s.prototype,e),t&&od(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function qo(s,e,t){return e=om(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function HT(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&eo(s,e)}function Ja(s){return Ja=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ja(s)}function eo(s,e){return eo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},eo(s,e)}function am(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yo(s,e,t){return am()?Yo=Reflect.construct.bind():Yo=function(i,r,a){var o=[null];o.push.apply(o,r);var c=Function.bind.apply(i,o),u=new c;return a&&eo(u,a.prototype),u},Yo.apply(null,arguments)}function VT(s){return Function.toString.call(s).indexOf("[native code]")!==-1}function nu(s){var e=typeof Map=="function"?new Map:void 0;return nu=function(n){if(n===null||!VT(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return Yo(n,arguments,Ja(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),eo(i,n)},nu(s)}function Ko(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function GT(s,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ko(s)}function WT(s){var e=am();return function(){var n=Ja(s),i;if(e){var r=Ja(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return GT(this,i)}}function XT(s,e){if(typeof s!="object"||s===null)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function om(s){var e=XT(s,"string");return typeof e=="symbol"?e:String(e)}var lm=typeof global<"u"&&{}.toString.call(global)==="[object global]";function ld(s,e){return s.indexOf(e.toLowerCase())===0?s:"".concat(e.toLowerCase()).concat(s.substr(0,1).toUpperCase()).concat(s.substr(1))}function jT(s){return!!(s&&s.nodeType===1&&"nodeName"in s&&s.ownerDocument&&s.ownerDocument.defaultView)}function qT(s){return!isNaN(parseFloat(s))&&isFinite(s)&&Math.floor(s)==s}function cs(s){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(s)}function cm(s){var e=/^https:\/\/player\.vimeo\.com\/video\/\d+/;return e.test(s)}function um(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=s.id,t=s.url,n=e||t;if(!n)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(qT(n))return"https://vimeo.com/".concat(n);if(cs(n))return n.replace("http:","https:");throw e?new TypeError("“".concat(e,"” is not a valid video id.")):new TypeError("“".concat(n,"” is not a vimeo.com url."))}var cd=function(e,t,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"addEventListener",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"removeEventListener",a=typeof t=="string"?[t]:t;return a.forEach(function(o){e[i](o,n)}),{cancel:function(){return a.forEach(function(c){return e[r](c,n)})}}},YT=typeof Array.prototype.indexOf<"u",KT=typeof window<"u"&&typeof window.postMessage<"u";if(!lm&&(!YT||!KT))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $T(s,e){return e={exports:{}},s(e,e.exports),e.exports}/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */(function(s){if(s.WeakMap)return;var e=Object.prototype.hasOwnProperty,t=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{value:1}).x===1}catch{}}(),n=function(r,a,o){t?Object.defineProperty(r,a,{configurable:!0,writable:!0,value:o}):r[a]=o};s.WeakMap=function(){function r(){if(this===void 0)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",o("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}n(r.prototype,"delete",function(u){if(a(this,"delete"),!i(u))return!1;var f=u[this._id];return f&&f[0]===u?(delete u[this._id],!0):!1}),n(r.prototype,"get",function(u){if(a(this,"get"),!!i(u)){var f=u[this._id];if(f&&f[0]===u)return f[1]}}),n(r.prototype,"has",function(u){if(a(this,"has"),!i(u))return!1;var f=u[this._id];return!!(f&&f[0]===u)}),n(r.prototype,"set",function(u,f){if(a(this,"set"),!i(u))throw new TypeError("Invalid value used as weak map key");var d=u[this._id];return d&&d[0]===u?(d[1]=f,this):(n(u,this._id,[u,f]),this)});function a(u,f){if(!i(u)||!e.call(u,"_id"))throw new TypeError(f+" method called on incompatible receiver "+typeof u)}function o(u){return u+"_"+c()+"."+c()}function c(){return Math.random().toString().substring(2)}return n(r,"_polyfill",!0),r}();function i(r){return Object(r)===r}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:qs);var $n=$T(function(s){/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/(function(t,n,i){n[t]=n[t]||i(),s.exports&&(s.exports=n[t])})("Promise",qs,function(){var t,n,i,r=Object.prototype.toString,a=typeof setImmediate<"u"?function(T){return setImmediate(T)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(T,R,P,D){return Object.defineProperty(T,R,{value:P,writable:!0,configurable:D!==!1})}}catch{t=function(R,P,D){return R[P]=D,R}}i=function(){var T,R,P;function D(p,O){this.fn=p,this.self=O,this.next=void 0}return{add:function(O,w){P=new D(O,w),R?R.next=P:T=P,R=P,P=void 0},drain:function(){var O=T;for(T=R=n=void 0;O;)O.fn.call(O.self),O=O.next}}}();function o(A,T){i.add(A,T),n||(n=a(i.drain))}function c(A){var T,R=typeof A;return A!=null&&(R=="object"||R=="function")&&(T=A.then),typeof T=="function"?T:!1}function u(){for(var A=0;A<this.chain.length;A++)f(this,this.state===1?this.chain[A].success:this.chain[A].failure,this.chain[A]);this.chain.length=0}function f(A,T,R){var P,D;try{T===!1?R.reject(A.msg):(T===!0?P=A.msg:P=T.call(void 0,A.msg),P===R.promise?R.reject(TypeError("Promise-chain cycle")):(D=c(P))?D.call(P,R.resolve,R.reject):R.resolve(P))}catch(p){R.reject(p)}}function d(A){var T,R=this;if(!R.triggered){R.triggered=!0,R.def&&(R=R.def);try{(T=c(A))?o(function(){var P=new S(R);try{T.call(A,function(){d.apply(P,arguments)},function(){m.apply(P,arguments)})}catch(D){m.call(P,D)}}):(R.msg=A,R.state=1,R.chain.length>0&&o(u,R))}catch(P){m.call(new S(R),P)}}}function m(A){var T=this;T.triggered||(T.triggered=!0,T.def&&(T=T.def),T.msg=A,T.state=2,T.chain.length>0&&o(u,T))}function _(A,T,R,P){for(var D=0;D<T.length;D++)(function(O){A.resolve(T[O]).then(function(F){R(O,F)},P)})(D)}function S(A){this.def=A,this.triggered=!1}function M(A){this.promise=A,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(A){if(typeof A!="function")throw TypeError("Not a function");if(this.__NPO__!==0)throw TypeError("Not a promise");this.__NPO__=1;var T=new M(this);this.then=function(P,D){var p={success:typeof P=="function"?P:!0,failure:typeof D=="function"?D:!1};return p.promise=new this.constructor(function(w,F){if(typeof w!="function"||typeof F!="function")throw TypeError("Not a function");p.resolve=w,p.reject=F}),T.chain.push(p),T.state!==0&&o(u,T),p.promise},this.catch=function(P){return this.then(void 0,P)};try{A.call(void 0,function(P){d.call(T,P)},function(P){m.call(T,P)})}catch(R){m.call(T,R)}}var v=t({},"constructor",y,!1);return y.prototype=v,t(v,"__NPO__",0,!1),t(y,"resolve",function(T){var R=this;return T&&typeof T=="object"&&T.__NPO__===1?T:new R(function(D,p){if(typeof D!="function"||typeof p!="function")throw TypeError("Not a function");D(T)})}),t(y,"reject",function(T){return new this(function(P,D){if(typeof P!="function"||typeof D!="function")throw TypeError("Not a function");D(T)})}),t(y,"all",function(T){var R=this;return r.call(T)!="[object Array]"?R.reject(TypeError("Not an array")):T.length===0?R.resolve([]):new R(function(D,p){if(typeof D!="function"||typeof p!="function")throw TypeError("Not a function");var O=T.length,w=Array(O),F=0;_(R,T,function(G,I){w[G]=I,++F===O&&D(w)},p)})}),t(y,"race",function(T){var R=this;return r.call(T)!="[object Array]"?R.reject(TypeError("Not an array")):new R(function(D,p){if(typeof D!="function"||typeof p!="function")throw TypeError("Not a function");_(R,T,function(w,F){D(F)},p)})}),y})}),ir=new WeakMap;function Pa(s,e,t){var n=ir.get(s.element)||{};e in n||(n[e]=[]),n[e].push(t),ir.set(s.element,n)}function ll(s,e){var t=ir.get(s.element)||{};return t[e]||[]}function cl(s,e,t){var n=ir.get(s.element)||{};if(!n[e])return!0;if(!t)return n[e]=[],ir.set(s.element,n),!0;var i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),ir.set(s.element,n),n[e]&&n[e].length===0}function ZT(s,e){var t=ll(s,e);if(t.length<1)return!1;var n=t.shift();return cl(s,e,n),n}function QT(s,e){var t=ir.get(s);ir.set(e,t),ir.delete(s)}function _l(s){if(typeof s=="string")try{s=JSON.parse(s)}catch(e){return console.warn(e),{}}return s}function Wr(s,e,t){if(!(!s.element.contentWindow||!s.element.contentWindow.postMessage)){var n={method:e};t!==void 0&&(n.value=t);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(n=JSON.stringify(n)),s.element.contentWindow.postMessage(n,s.origin)}}function JT(s,e){e=_l(e);var t=[],n;if(e.event){if(e.event==="error"){var i=ll(s,e.data.method);i.forEach(function(a){var o=new Error(e.data.message);o.name=e.data.name,a.reject(o),cl(s,e.data.method,a)})}t=ll(s,"event:".concat(e.event)),n=e.data}else if(e.method){var r=ZT(s,e.method);r&&(t.push(r),n=e.value)}t.forEach(function(a){try{if(typeof a=="function"){a.call(s,n);return}a.resolve(n)}catch{}})}var eb=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function fm(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return eb.reduce(function(t,n){var i=s.getAttribute("data-vimeo-".concat(n));return(i||i==="")&&(t[n]=i===""?1:i),t},e)}function Ou(s,e){var t=s.html;if(!e)throw new TypeError("An element must be provided");if(e.getAttribute("data-vimeo-initialized")!==null)return e.querySelector("iframe");var n=document.createElement("div");return n.innerHTML=t,e.appendChild(n.firstChild),e.setAttribute("data-vimeo-initialized","true"),e.querySelector("iframe")}function hm(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return new Promise(function(n,i){if(!cs(s))throw new TypeError("“".concat(s,"” is not a vimeo.com url."));var r="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(s));for(var a in e)e.hasOwnProperty(a)&&(r+="&".concat(a,"=").concat(encodeURIComponent(e[a])));var o="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;o.open("GET",r,!0),o.onload=function(){if(o.status===404){i(new Error("“".concat(s,"” was not found.")));return}if(o.status===403){i(new Error("“".concat(s,"” is not embeddable.")));return}try{var c=JSON.parse(o.responseText);if(c.domain_status_code===403){Ou(c,t),i(new Error("“".concat(s,"” is not embeddable.")));return}n(c)}catch(u){i(u)}},o.onerror=function(){var c=o.status?" (".concat(o.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(c,".")))},o.send()})}function tb(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document,e=[].slice.call(s.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),t=function(i){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(i))};e.forEach(function(n){try{if(n.getAttribute("data-vimeo-defer")!==null)return;var i=fm(n),r=um(i);hm(r,i,n).then(function(a){return Ou(a,n)}).catch(t)}catch(a){t(a)}})}function nb(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var e=function(n){if(cs(n.origin)&&!(!n.data||n.data.event!=="spacechange")){for(var i=s.querySelectorAll("iframe"),r=0;r<i.length;r++)if(i[r].contentWindow===n.source){var a=i[r].parentElement;a.style.paddingBottom="".concat(n.data.data[0].bottom,"px");break}}};window.addEventListener("message",e)}}function ib(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var e=function(n){if(cs(n.origin)){var i=_l(n.data);if(!(!i||i.event!=="ready"))for(var r=s.querySelectorAll("iframe"),a=0;a<r.length;a++){var o=r[a],c=o.contentWindow===n.source;if(cm(o.src)&&c){var u=new Fu(o);u.callMethod("appendVideoMetadata",window.location.href)}}}};window.addEventListener("message",e)}}function rb(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var e=function(i){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(i))},t=function(i){if(cs(i.origin)){var r=_l(i.data);if(!(!r||r.event!=="ready"))for(var a=s.querySelectorAll("iframe"),o=function(){var f=a[c],d=f.contentWindow===i.source;if(cm(f.src)&&d){var m=new Fu(f);m.getVideoId().then(function(_){var S=new RegExp("[?&]vimeo_t_".concat(_,"=([^&#]*)")).exec(window.location.href);if(S&&S[1]){var M=decodeURI(S[1]);m.setCurrentTime(M)}}).catch(e)}},c=0;c<a.length;c++)o()}};window.addEventListener("message",t)}}function sb(){var s=function(){for(var n,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,a=i.length,o={};r<a;r++)if(n=i[r],n&&n[1]in document){for(r=0;r<n.length;r++)o[i[0][r]]=n[r];return o}return!1}(),e={fullscreenchange:s.fullscreenchange,fullscreenerror:s.fullscreenerror},t={request:function(i){return new Promise(function(r,a){var o=function u(){t.off("fullscreenchange",u),r()};t.on("fullscreenchange",o),i=i||document.documentElement;var c=i[s.requestFullscreen]();c instanceof Promise&&c.then(o).catch(a)})},exit:function(){return new Promise(function(i,r){if(!t.isFullscreen){i();return}var a=function c(){t.off("fullscreenchange",c),i()};t.on("fullscreenchange",a);var o=document[s.exitFullscreen]();o instanceof Promise&&o.then(a).catch(r)})},on:function(i,r){var a=e[i];a&&document.addEventListener(a,r)},off:function(i,r){var a=e[i];a&&document.removeEventListener(a,r)}};return Object.defineProperties(t,{isFullscreen:{get:function(){return!!document[s.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!document[s.fullscreenEnabled]}}}),t}var ab={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},ob=function(s){HT(t,s);var e=WT(t);function t(n,i){var r,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;return rm(this,t),r=e.call(this),qo(Ko(r),"logger",void 0),qo(Ko(r),"speedAdjustment",0),qo(Ko(r),"adjustSpeed",function(){var c=Yr(bn().mark(function u(f,d){var m;return bn().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(r.speedAdjustment!==d){S.next=2;break}return S.abrupt("return");case 2:return S.next=4,f.getPlaybackRate();case 4:return S.t0=S.sent,S.t1=r.speedAdjustment,S.t2=S.t0-S.t1,S.t3=d,m=S.t2+S.t3,r.log("New playbackRate:  ".concat(m)),S.next=12,f.setPlaybackRate(m);case 12:r.speedAdjustment=d;case 13:case"end":return S.stop()}},u)}));return function(u,f){return c.apply(this,arguments)}}()),r.logger=o,r.init(i,n,sd(sd({},ab),a)),r}return sm(t,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:function(){var n=Yr(bn().mark(function r(a,o,c){var u=this,f,d,m;return bn().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,this.waitForTOReadyState(a,"open");case 2:if(c.role!=="viewer"){S.next=10;break}return S.next=5,this.updatePlayer(a,o,c);case 5:f=cd(a,"change",function(){return u.updatePlayer(a,o,c)}),d=this.maintainPlaybackPosition(a,o,c),this.addEventListener("disconnect",function(){d.cancel(),f.cancel()}),S.next=14;break;case 10:return S.next=12,this.updateTimingObject(a,o);case 12:m=cd(o,["seeked","play","pause","ratechange"],function(){return u.updateTimingObject(a,o)},"on","off"),this.addEventListener("disconnect",function(){return m.cancel()});case 14:case"end":return S.stop()}},r,this)}));function i(r,a,o){return n.apply(this,arguments)}return i}()},{key:"updateTimingObject",value:function(){var n=Yr(bn().mark(function r(a,o){return bn().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.t0=a,u.next=3,o.getCurrentTime();case 3:return u.t1=u.sent,u.next=6,o.getPaused();case 6:if(!u.sent){u.next=10;break}u.t2=0,u.next=13;break;case 10:return u.next=12,o.getPlaybackRate();case 12:u.t2=u.sent;case 13:u.t3=u.t2,u.t4={position:u.t1,velocity:u.t3},u.t0.update.call(u.t0,u.t4);case 16:case"end":return u.stop()}},r)}));function i(r,a){return n.apply(this,arguments)}return i}()},{key:"updatePlayer",value:function(){var n=Yr(bn().mark(function r(a,o,c){var u,f,d;return bn().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(u=a.query(),f=u.position,d=u.velocity,typeof f=="number"&&o.setCurrentTime(f),typeof d!="number"){_.next=25;break}if(d!==0){_.next=11;break}return _.next=6,o.getPaused();case 6:if(_.t0=_.sent,_.t0!==!1){_.next=9;break}o.pause();case 9:_.next=25;break;case 11:if(!(d>0)){_.next=25;break}return _.next=14,o.getPaused();case 14:if(_.t1=_.sent,_.t1!==!0){_.next=19;break}return _.next=18,o.play().catch(function(){var S=Yr(bn().mark(function M(y){return bn().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(!(y.name==="NotAllowedError"&&c.autoPlayMuted)){A.next=5;break}return A.next=3,o.setMuted(!0);case 3:return A.next=5,o.play().catch(function(T){return console.error("Couldn't play the video from TimingSrcConnector. Error:",T)});case 5:case"end":return A.stop()}},M)}));return function(M){return S.apply(this,arguments)}}());case 18:this.updatePlayer(a,o,c);case 19:return _.next=21,o.getPlaybackRate();case 21:if(_.t2=_.sent,_.t3=d,_.t2===_.t3){_.next=25;break}o.setPlaybackRate(d);case 25:case"end":return _.stop()}},r,this)}));function i(r,a,o){return n.apply(this,arguments)}return i}()},{key:"maintainPlaybackPosition",value:function(i,r,a){var o=this,c=a.allowedDrift,u=a.maxAllowedDrift,f=a.minCheckInterval,d=a.maxRateAdjustment,m=a.maxTimeToCatchUp,_=Math.min(m,Math.max(f,u))*1e3,S=function(){var y=Yr(bn().mark(function v(){var A,T,R,P,D;return bn().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(O.t0=i.query().velocity===0,O.t0){O.next=6;break}return O.next=4,r.getPaused();case 4:O.t1=O.sent,O.t0=O.t1===!0;case 6:if(!O.t0){O.next=8;break}return O.abrupt("return");case 8:return O.t2=i.query().position,O.next=11,r.getCurrentTime();case 11:if(O.t3=O.sent,A=O.t2-O.t3,T=Math.abs(A),o.log("Drift: ".concat(A)),!(T>u)){O.next=22;break}return O.next=18,o.adjustSpeed(r,0);case 18:r.setCurrentTime(i.query().position),o.log("Resync by currentTime"),O.next=29;break;case 22:if(!(T>c)){O.next=29;break}return R=T/m,P=d,D=R<P?(P-R)/2:P,O.next=28,o.adjustSpeed(r,D*Math.sign(A));case 28:o.log("Resync by playbackRate");case 29:case"end":return O.stop()}},v)}));return function(){return y.apply(this,arguments)}}(),M=setInterval(function(){return S()},_);return{cancel:function(){return clearInterval(M)}}}},{key:"log",value:function(i){var r;(r=this.logger)===null||r===void 0||r.call(this,"TimingSrcConnector: ".concat(i))}},{key:"waitForTOReadyState",value:function(i,r){return new Promise(function(a){var o=function c(){i.readyState===r?a():i.addEventListener("readystatechange",c,{once:!0})};o()})}}]),t}(nu(EventTarget)),Os=new WeakMap,Ec=new WeakMap,Rn={},Fu=function(){function s(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(rm(this,s),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),typeof document<"u"&&typeof e=="string"&&(e=document.getElementById(e)),!jT(e))throw new TypeError("You must pass either a valid element or a valid id.");if(e.nodeName!=="IFRAME"){var i=e.querySelector("iframe");i&&(e=i)}if(e.nodeName==="IFRAME"&&!cs(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(Os.has(e))return Os.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var r=new $n(function(o,c){if(t._onMessage=function(d){if(!(!cs(d.origin)||t.element.contentWindow!==d.source)){t.origin==="*"&&(t.origin=d.origin);var m=_l(d.data),_=m&&m.event==="error",S=_&&m.data&&m.data.method==="ready";if(S){var M=new Error(m.data.message);M.name=m.data.name,c(M);return}var y=m&&m.event==="ready",v=m&&m.method==="ping";if(y||v){t.element.setAttribute("data-ready","true"),o();return}JT(t,m)}},t._window.addEventListener("message",t._onMessage),t.element.nodeName!=="IFRAME"){var u=fm(e,n),f=um(u);hm(f,u,e).then(function(d){var m=Ou(d,e);return t.element=m,t._originalElement=e,QT(e,m),Os.set(t.element,t),d}).catch(c)}});if(Ec.set(this,r),Os.set(this.element,this),this.element.nodeName==="IFRAME"&&Wr(this,"ping"),Rn.isEnabled){var a=function(){return Rn.exit()};this.fullscreenchangeHandler=function(){Rn.isFullscreen?Pa(t,"event:exitFullscreen",a):cl(t,"event:exitFullscreen",a),t.ready().then(function(){Wr(t,"fullscreenchange",Rn.isFullscreen)})},Rn.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return sm(s,[{key:"callMethod",value:function(t){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new $n(function(r,a){return n.ready().then(function(){Pa(n,t,{resolve:r,reject:a}),Wr(n,t,i)}).catch(a)})}},{key:"get",value:function(t){var n=this;return new $n(function(i,r){return t=ld(t,"get"),n.ready().then(function(){Pa(n,t,{resolve:i,reject:r}),Wr(n,t)}).catch(r)})}},{key:"set",value:function(t,n){var i=this;return new $n(function(r,a){if(t=ld(t,"set"),n==null)throw new TypeError("There must be a value to set.");return i.ready().then(function(){Pa(i,t,{resolve:r,reject:a}),Wr(i,t,n)}).catch(a)})}},{key:"on",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(!n)throw new TypeError("You must pass a callback function.");if(typeof n!="function")throw new TypeError("The callback must be a function.");var i=ll(this,"event:".concat(t));i.length===0&&this.callMethod("addEventListener",t).catch(function(){}),Pa(this,"event:".concat(t),n)}},{key:"off",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(n&&typeof n!="function")throw new TypeError("The callback must be a function.");var i=cl(this,"event:".concat(t),n);i&&this.callMethod("removeEventListener",t).catch(function(r){})}},{key:"loadVideo",value:function(t){return this.callMethod("loadVideo",t)}},{key:"ready",value:function(){var t=Ec.get(this)||new $n(function(n,i){i(new Error("Unknown player. Probably unloaded."))});return $n.resolve(t)}},{key:"addCuePoint",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.callMethod("addCuePoint",{time:t,data:n})}},{key:"removeCuePoint",value:function(t){return this.callMethod("removeCuePoint",t)}},{key:"enableTextTrack",value:function(t,n){if(!t)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:t,kind:n})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return Rn.isEnabled?Rn.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return Rn.isEnabled?Rn.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return Rn.isEnabled?$n.resolve(Rn.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new $n(function(n){if(Ec.delete(t),Os.delete(t.element),t._originalElement&&(Os.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&t.element.nodeName==="IFRAME"&&t.element.parentNode&&(t.element.parentNode.parentNode&&t._originalElement&&t._originalElement!==t.element.parentNode?t.element.parentNode.parentNode.removeChild(t.element.parentNode):t.element.parentNode.removeChild(t.element)),t.element&&t.element.nodeName==="DIV"&&t.element.parentNode){t.element.removeAttribute("data-vimeo-initialized");var i=t.element.querySelector("iframe");i&&i.parentNode&&(i.parentNode.parentNode&&t._originalElement&&t._originalElement!==i.parentNode?i.parentNode.parentNode.removeChild(i.parentNode):i.parentNode.removeChild(i))}t._window.removeEventListener("message",t._onMessage),Rn.isEnabled&&Rn.off("fullscreenchange",t.fullscreenchangeHandler),n()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(t){return this.set("autopause",t)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(t){return this.set("cameraProps",t)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return $n.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(t){return this.set("color",t)}},{key:"setColors",value:function(t){if(!Array.isArray(t))return new $n(function(r,a){return a(new TypeError("Argument must be an array."))});var n=new $n(function(r){return r(null)}),i=[t[0]?this.set("colorOne",t[0]):n,t[1]?this.set("colorTwo",t[1]):n,t[2]?this.set("colorThree",t[2]):n,t[3]?this.set("colorFour",t[3]):n];return $n.all(i)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(t){return this.set("currentTime",t)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(t){return this.set("loop",t)}},{key:"setMuted",value:function(t){return this.set("muted",t)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(t){return this.set("playbackRate",t)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(t){return this.set("quality",t)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(t){return this.set("volume",t)}},{key:"setTimingSrc",value:function(){var e=Yr(bn().mark(function n(i,r){var a=this,o;return bn().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(i){u.next=2;break}throw new TypeError("A Timing Object must be provided.");case 2:return u.next=4,this.ready();case 4:return o=new ob(this,i,r),Wr(this,"notifyTimingObjectConnect"),o.addEventListener("disconnect",function(){return Wr(a,"notifyTimingObjectDisconnect")}),u.abrupt("return",o);case 8:case"end":return u.stop()}},n,this)}));function t(n,i){return e.apply(this,arguments)}return t}()}]),s}();lm||(Rn=sb(),tb(),nb(),ib(),rb());xe.home={_this:globalThis,init:function(){console.log("init home")},show:function(s){console.log("show home"),xe.showPage(Te(".home")),setTimeout(function(){Te(".home .page-title").addClass("aos-animate")},500),setTimeout(function(){Te(".home .page-subtitle").addClass("aos-animate")},500)},hide:function(s){xe.hidePage(Te(".home")),console.log("hide home")}};xe.projects={_this:globalThis,init:function(){Te(".projects .list-item").on("click",function(){var s=Te(this).attr("data-link");console.log("project item clicked : "+s),xe.go(s,!0)})},show:function(s){console.log("show projects"),xe.showPage(Te(".projects")),Te(".projects .page-title").removeClass("aos-animate"),Te(".projects .page-subtitle").removeClass("aos-animate"),setTimeout(function(){Te(".projects .page-title").addClass("aos-animate")},500),setTimeout(function(){Te(".projects .page-subtitle").addClass("aos-animate")},500)},hide:function(s){console.log("hide projects"),xe.hidePage(Te(".projects")),Te(".projects .page-title").removeClass("aos-animate"),Te(".projects .page-subtitle").removeClass("aos-animate")}};xe.projectsDetail={_this:globalThis,init:function(){console.log("init project detail")},show:function(s){console.log("show project detail"),xe.showPage(Te(".projects-detail")),Te(".projects-detail .page-title").removeClass("aos-animate"),Te(".projects-detail .page-subtitle").removeClass("aos-animate"),Te(".projects-detail .role").removeClass("aos-animate"),Te(".projects-detail .big").removeClass("aos-animate"),setTimeout(function(){Te(".projects-detail .page-title").addClass("aos-animate")},500),setTimeout(function(){Te(".projects-detail .page-subtitle").addClass("aos-animate")},500),setTimeout(function(){Te(".projects-detail .role").addClass("aos-animate")},500),setTimeout(function(){Te(".projects-detail .big").addClass("aos-animate")},500)},hide:function(s){console.log("hide project detail",s),xe.hidePage(Te(".projects-detail"),s),Te(".projects-detail .page-title").removeClass("aos-animate"),Te(".projects-detail .page-subtitle").removeClass("aos-animate")},load:function(s){switch(console.log("project.title",s.title),Te(".projects-detail .page-title").html(s.title),Te(".projects-detail .page-subtitle").html(s.subtitle),Te(".projects-detail .role").html(s.role),Te(".projects-detail .content").html(s.description+s.dev),console.log(s.id),s.feature){case"video":var n="<div class = 'feature-video sixteen-nine' id = 'feature-video'></div>";Te(".projects-detail .feature-content").html(n);var e={id:s.id,responsive:!0,loop:!1,autoplay:!1,byline:!0,title:!0},t=new Fu("feature-video",e);t.setVolume(1),t.on("play",function(){console.log("video played")}),t.on("pause",function(){console.log("video paused")}),t.on("loaded",function(){console.log("video loaded")});break;case"gallery":let c=function(f){i.hide(),i.eq(f).fadeIn()},u=function(){var f=Te(".slide:visible").index(),d=(f+1)%i.length;c(d)};var n=`
                    <div class="gallery">
                    <div class="slideshow-container">
                `;s.images.forEach(function(f){n+=`
                    <div class="slide">
                        <img src="${f.src}" alt="${f.alt}">
                    </div>
                    `}),n+=`
                    </div>
                    <div class="tabs"></div>
                    </div>
                `,Te(".projects-detail .feature-content").html(n);for(var i=Te(".slide"),r=Te(".tabs"),a=0;a<i.length;a++){var o=Te('<div class="tab"></div>');r.append(o)}c(0),setInterval(u,6e3);break}}};xe.about={_this:globalThis,init:function(){console.log("about init")},show:function(){console.log("show about"),xe.showPage(Te(".about")),Te(".about .page-title").removeClass("aos-animate"),Te(".about .big").removeClass("aos-animate"),Te(".about .content").removeClass("aos-animate"),setTimeout(function(){Te(".about .page-title").addClass("aos-animate"),Te(".about .big").addClass("aos-animate"),Te(".about .content").addClass("aos-animate")},800)},hide:function(){console.log("hide about"),xe.hidePage(Te(".about")),Te(".about .page-title").removeClass("aos-animate"),Te(".about .page-subtitle").removeClass("aos-animate")}},xe.menu={_this:globalThis,init:function(){console.log("init menu"),Te(".menu-item").on("click",function(){var s=Te(this).attr("data-link");console.log("menu-item clicked : "+s),xe.go(s,!0)}),Te(".menu-button").on("click",function(){Te(".menu").toggleClass("active"),Te(".bar1").toggleClass("change"),Te(".bar2").toggleClass("change"),Te(".bar3").toggleClass("change")})},show:function(){console.log("show menu"),Te(".menu").addClass("active")},hide:function(){console.log("hide menu"),Te(".menu").removeClass("active")}};xe.header={_this:globalThis,init:function(){console.log("init header"),Te(window).on("scroll",function(){var s=parseInt(Te(this).scrollTop());s>30?Te(".header").addClass("shade"):Te(".header").removeClass("shade")})},show:function(){console.log("show header"),Te(".header").addClass("show")},hide:function(){console.log("hide header"),Te(".header").removeClass("show")}};xe.footer={_this:globalThis,init:function(){console.log("init footer")},show:function(){console.log("show footer"),Te(".footer-menu").addClass("show"),Te(".footer-menu").removeClass("hide")},hide:function(){console.log("hide footer"),Te(".footer-menu").removeClass("show"),Te(".footer-menu").addClass("hide")}};xe.hidePage=function(s){Te(s).removeClass("show"),setTimeout(function(){Te(s).addClass("hide")},1e3)};xe.showPage=function(s){setTimeout(function(){Te(s).addClass("show"),AOS.refresh()},100),Te(s).removeClass("hide"),setTimeout(function(){Te(s).addClass("show")},100)};const lb=xe.hidePage;xe.webGL={_this:globalThis,mouse:new $e,windowHalfX:window.innerWidth/2,windowHalfY:window.innerHeight/2,raycaster:new eT,clock:new Qp,intersectCube:!1,particleCount:300,particles:[],init:function(){this.canvas=document.querySelector("canvas.webgl"),this.camera=new En(50,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,0,5),this.scene=new gS,this.scene.background=null,this.renderer=new Gp({canvas:this.canvas,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=pp,this.renderer.toneMappingExposure=.33;const s=new UT(this.scene,this.camera),e=new nm(BT);this.composer=new FT(this.renderer),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(s);const t=this.renderer.getPixelRatio();e.material.uniforms.resolution.value.x=1/(window.innerWidth*t),e.material.uniforms.resolution.value.y=1/(window.innerHeight*t),this.bloomPass=new oa(new $e(window.innerWidth,window.innerHeight),1,1.1,.1),this.composer.addPass(e),this.composer.addPass(this.bloomPass);const n=new Ua(16777215,.3),i=new Ua(16777215,.6),r=new Ua(16777215,.6),a=new Ua(16777215,.6);n.position.set(-5,.38,-1.03),i.position.set(-4.38,1.35,.7),r.position.set(2.15,1.03,-.92),a.position.set(.81,-.16,-.48),this.scene.add(n),this.scene.add(i),this.scene.add(r),this.scene.add(a),this.manager=new $p,this.manager.onProgress=function(o,c,u){},this.manager.onLoad=function(){xe.webGL.initObjects()},this.gltfLoader=new tT(this.manager),this.gltfLoader.load(zT,o=>{o.scene.scale.set(1,1,1),o.scene.rotation.set(-.1,-2.35,0),o.scene.position.set(0,0,.3),o.scene.name="cube",this.scene.add(o.scene)}),window.onresize=this.resize},onMouseMove:function(s){console.log("Mouse move webGL");var e=xe.webGL;s.preventDefault(),e.mouse.x=s.clientX/window.innerWidth*2-1,e.mouse.y=-(s.clientY/window.innerHeight)*2+1,e.raycaster.setFromCamera(e.mouse,e.camera);var t=e.raycaster.intersectObjects(e.scene.children);t.length>0?(this.intersectCube=!0,Te(".webgl").css("cursor","pointer"),t[0],console.log("intersects"),_r.to(e.bloomPass,{strength:1.8,duration:1,repeat:-1,yoyo:!0,ease:"power1.inOut"}),_r.killTweensOf(e.bloomPass,"strengthReset")):(this.intersectCube=!1,Te(".webgl").css("cursor","auto"),_r.to(e.bloomPass,{strength:1,duration:.5,ease:"power1.inOut",overwrite:"auto",onComplete:function(){e.bloomPass.strength=1},onInterrupt:function(){e.bloomPass.strength=1},id:"strengthReset"}))},onClick:function(s){var e=xe.webGL;if(console.log("clicked"),s.preventDefault(),this.intersectCube){var t=Te("<div>").addClass("white").css("opacity",0);Te("body").append(t);var n=e.scene.getObjectByName("cube");setTimeout(function(){_r.to(t,{opacity:1,duration:1,onComplete:function(){Te(".webgl").css("cursor","auto"),xe.go("home",!0),_r.to(t,{opacity:0,duration:2,onComplete:function(){t.remove()}})}})},1e3),_r.to(e.bloomPass,{strength:50,duration:2,ease:"power1.inOut",onComplete:function(){e.scene.remove(n),lb(".webgl")}})}},resize:function(){var s=xe.webGL,e=window.innerWidth,t=window.innerHeight;s.camera.aspect=e/t,s.camera.updateProjectionMatrix(),s.renderer.setSize(e,t),s.windowHalfX=e/2,s.windowHalfY=t/2,console.log("resize")},tick:function(){var s=xe.webGL;s.scene,s.camera,s.renderer;var e=s.scene.getObjectByName("cube"),t,n,i=s.composer;i.render(),t=s.mouse.x*.1,n=-s.mouse.y*.1;const r=-.2,a=.1,o=-2.35,c=-2.3,u=-.4,f=.4,d=Ia.mapLinear(n,-1,1,u,f),m=e.rotation.x+.5*(t-e.rotation.x),_=e.rotation.y+.5*(n-e.rotation.y),S=e.rotation.z+.5*(d-e.rotation.z);e.rotation.x=Ia.clamp(m,r,a),e.rotation.y=Ia.clamp(_,o,c),e.rotation.z=Ia.clamp(S,u,f),window.requestAnimationFrame(s.tick)},initObjects:function(){var s=xe.webGL,e=s.scene.getObjectByName("cube");window.addEventListener("mousemove",xe.webGL.onMouseMove),window.addEventListener("click",xe.webGL.onClick),_r.to(e.position,{y:"-=.08",duration:3,repeat:-1,yoyo:!0,ease:"power1.inOut"}),s.tick()},show:function(){console.log("show webgl"),Te(".webgl").addClass("show")},hide:function(){window.removeEventListener("click",xe.webGL.onClick),window.removeEventListener("mousemove",xe.webGL.onMouseMove),console.log("hide webgl"),Te(".webgl").removeClass("show")}};const cb=""+new URL("01-1ced5cb4.jpg",import.meta.url).href,ub=""+new URL("02-9f56560e.jpg",import.meta.url).href,fb=""+new URL("03-002db482.jpg",import.meta.url).href,hb=""+new URL("04-d4496141.jpg",import.meta.url).href,db=""+new URL("01-2c053552.jpg",import.meta.url).href,pb=""+new URL("01-30e3ff1b.png",import.meta.url).href,mb=""+new URL("02-05321c0b.png",import.meta.url).href,gb=""+new URL("03-c24546bf.png",import.meta.url).href,_b=""+new URL("04-57b9776c.png",import.meta.url).href;xe.data={title:"Craig John","page-title":"Craig John | Portfolio",home:{title:"Craig John","page-title":"Craig John | Portfolio",subtitle:"3D Artist | Web Designer",link:"home"},webgl:{title:"...","page-title":"..."},about:{title:"About","page-title":"Craig John | About"},projects:{title:"projects","page-title":"Craig John | Projects",subtitle:"University Projects | Work Projects",list:[{"page-title":"Craig John | Chasing Trains",title:"Chasing Trains",subtitle:"HTML | CSS | JavaScript",thumbnail:"assets/projects/chasing-trains/ct-thumbnail.jpg",link:"projects/chasingtrains",description:"<p>'Chasing Trains' is an interactive story experience that follows a young teen grappling with the trials of adolescence. After waking up in an unfamiliar mindscape with no memory of the past 24 hours, the protagonist, Micah, is in a race against time to escape the mysterious beast haunting the realm. Along with their family dog Beef, they must untangle the mystery while coming to terms with the end of their childhood.</p><br>",role:"Lead Developer",dev:"<p>As the Lead Developer for the project 'Chasing Trains' within my Collaborative Studio class at Penn State, I played a crucial role in bringing our vision of a narrative-driven game to life. Our project delved into the 2008 financial crisis, drawing inspiration from personal experiences to create a captivating coming-of-age narrative within the given timeframe.</p><br><p>My responsibilities encompassed translating the game concept into a functional and engaging web-based experience. Leveraging my expertise in HTML, CSS, and JavaScript, I coded the game to ensure seamless playability on any web browser. Through my technical prowess, I designed an interactive environment where players navigate through various settings, seeking out corrupted 'memory items' as they progress</p><br><p>To enhance the immersive storytelling, I employed JavaScript to create dynamic revealing text boxes, allowing players to uncover hidden details and immerse themselves further in the narrative. Additionally, I developed a sophisticated system using JavaScript that adjusted character sprites based on their emotions during dialogue exchanges, heightening the emotional impact of the game. To create a visually captivating experience, I utilized Three.js to integrate 2D painted environments into a 3D space, providing the illusion of depth and enhancing the overall immersion of each level. This attention to detail added layers of richness to the player's journey. Furthermore, I integrated GSAP (GreenSock Animation Platform) to implement dynamic animations, ensuring fluid transitions between scenes and adding visual polish to the game. The inclusion of immersive sound effects and an original score, achieved through Howler.js, further heightened the player's engagement, creating a captivating and memorable audiovisual experience.</p><p><br><a href='https://youtu.be/nb0_vh99mE8'>Full Playthrough</a></p><br>",feature:"video",id:"841020128"},{"page-title":"Craig John | Crosswalk",title:"Crosswalk",subtitle:"Blender | Premiere Pro",thumbnail:"assets/projects/crosswalk/crosswalk-thumbnail.jpg",link:"projects/crosswalk",description:"<p>'Crosswalk' is an animated short film that follows a man, anxious about getting to work on time, who stands at a crosswalk and imagines increasingly absurd scenarios that would make him late for work.</p><br>",role:"Director",dev:"<p>This film is a personal story that explores themes of anxiety and the unpredictable nature of life. By highlighting the character’s mental journey, I aimed to emphasize the ways in which our thoughts can sometime spiral out of control, leading to unnecessary stress and anxiety. Through the character’s vivid imagination, I wanted to illustrate how our minds conjure up unlikely scenarios, further fueling our fears and worries. Despite the serious subject matter, I wanted to convey this in a light and comedic way. By finding humor in the character’s struggles, I hoped to provide a moment of levity and relief to those who may be grappling with similar feelings. Ultimately, my goal was to create a piece that was both entertaining and thought-provoking, encouraging viewers to laugh at the outrageous scenarios while still acknowledging the seriousness of anxiety.</p><br><p>'Crosswalk' was created as the final for my 'Animation Studio' class taught by John Summerson in my junior year at Penn State. To create this short, I worked in Blender to design and model a character that fit the 'everyday man'. I wanted the film to have a painterly look to emphasize the dreamlike quality of the scenarios, utilizing shaders to accomplish this. The protagonist's clothes change every few frames in order to illustrate the burden of anxiety and highlight his rapid flowing thoughts. Moreover, many of the exteriors feature hand-drawn details using Blender's Grease Pencil tool.</p>",feature:"video",id:"841008615"},{"page-title":"Craig John | Oasis",title:"Oasis",subtitle:"Blender | Photoshop",link:"projects/oasis",description:"<p>'Oasis' is a speculative design project aimed at imagining sustainable housing to combat desertification. Desertification is the process in which once fertile land becomes a desert. This is typically caused by poor agriculture, deforestation, and drought. 40% of the Earth's surface is susceptible to this type of land degradation, but not many are aware of this.</p><br>",role:"Designer",dev:"<p>'Oasis' was my first attempt at doing architectural visualization with a heavy emphasis on research. I used Blender to design and model the house with nature in mind, taking inspiration from natural mushroom growth and the Dracaena Cinnabari tree. It features speculative elements such as a geometric patterned roof in order to eliminate heat gain, as well as tree-like supports that trap heat. I further textured the house to make it look as if it were built with 3D printed materials, ultimately fostering a sustainable environment. I created my own and modified existing nature assets based off of the Sonoran Desert in Arizona, employing the use of the Geo-Scatter addon to achieve this.</p>",feature:"gallery",images:[{src:cb,alt:"OASIS Render 01"},{src:ub,alt:"OASIS Render 02"},{src:fb,alt:"OASIS Render 03"},{src:hb,alt:"OASIS Render 04"}]},{"page-title":"Craig John | Rebirth",title:"Rebirth",subtitle:"Blender | Adobe Premiere",link:"projects/rebirth",description:"<p>'Rebirth' is an animated short film that tells the life cycle of a cherry blossom tree, from blossoming, to its eventual death.</p><br>",role:"Director",dev:"This project was created for my '3D Studio' class taught by Michael Collins during my sophomore year at Penn State. The original goal of the project was to create a journey. As I was not familiar with character design, I wanted to base this journey in nature, telling a short story using visuals alone. Every asset was meticiously created in Blender, taking inspiration from real life cherry blossom trees and their blossoming patterns.</p>",feature:"video",id:"703997273"},{"page-title":"Craig John | Fantascapes",title:"Fantascapes",subtitle:"Blender | Photoshop | InDesign",link:"projects/fantascapes",role:"Designer | Author",description:"<p>'Fantascapes: Excerpts From Distant Lands' is a short book that includes 3D renderings of fantastical landscapes. Each landscape is accompanied by an excerpt from a fictional, in-universe book that gives context and a story to the landscape.</p><br>",dev:"</p>Fantasy is one of my favorite genres, so I was eager to create my own fantasy world. It was important that each landscape felt distinct from one another, but could still exist within one big world; I wanted each one to have a different visual tone. The visuals of the landscapes were inspired by various fantastical worlds, including 'The Lord of the Rings' and 'The Witcher'.</p><br><p>Taking inspiration from Frank Herbert's acclaimed science fiction novel, 'Dune', I incorporated a similar approach in 'Fantascapes'. Like 'Dune', where each chapter begins with a short passage from a book within the story, my book features accompanying excerpts that provide context and background for each landscape. This idea works particularly well for my book, offering readers a glimpse into the world's richness despite its concise nature. With each passage, accompanied by its corresponding landscape, a distinct tone emerges, showcasing the diverse inhabitants and locations within this captivating realm.</p>",feature:"gallery",images:[{src:db,alt:"The Wizard's House"},{src:pb,alt:"The Floating Islands"},{src:mb,alt:"The Gate"},{src:gb,alt:"The Tree"},{src:_b,alt:"The Willow"}]}]}};xe.init=function(){var s=window.location.pathname,e=s.split("/");Te(".page").addClass("hide");var t=e[1]||"webgl",n=e[2]||"";if(console.log("init"),xe.home.init(),xe.projects.init(),xe.menu.init(),xe.footer.init(),xe.header.init(),xe.projectsDetail.init(),this.state=t,n&&(this.state+="/"+n),console.log(this.state),e[1]=="projects"&&n){console.log("page",n);var i=this.getProjectByLink(n);xe.projectsDetail.load(i),xe.showPage(".projects-detail")}else xe.showPage("."+this.state);this.state=="home"?(xe.footer.show(),xe.header.hide(),xe.menu.hide()):(xe.header.show(),xe.footer.hide()),this.state=="webgl"&&(xe.header.hide(),xe.webGL.init()),xe.go(this.state,!1)};window.onpopstate=function(s){var e=s.state;e||(e="home"),e=="/"&&(e="home"),xe.go(e,!1)};window.onresize=function(){window.innerWidth>=801&&xe.menu.hide()};xe.go=function(s,e){if(this.state==s)return!1;console.log("state",s),console.log("this.state",this.state),console.log("Change state");var t=s.split("/");if(console.log("path",t),t[0]&&(this.section=t[0]),t[1])var n=t[1];var i=this.state.split("/");if(i[0])var r=i[0];if(i[1])var a=i[1];var o="./";switch(a&&(o="../"),this.section&&console.log("section",this.section),n&&console.log("page",n),console.log("From Section",r),r){case"webgl":xe.webGL.hide();break;case"home":xe.home.hide();break;case"about":xe.about.hide();break;case"projects":a?xe.projectsDetail.hide():xe.projects.hide();break}switch(this.section){case"webgl":var c=xe.data.splash.title;document.title=xe.data.splash["page-title"],e&&history.pushState(s,c,o),xe.state=s,xe.webGL.show();break;case"home":var c=xe.data.home.title;document.title=xe.data.home["page-title"],e&&history.pushState(s,c,o+s),xe.state=s,xe.home.show();break;case"about":var c=xe.data.about.title;document.title=xe.data.about["page-title"],e&&history.pushState(s,c,o+s),xe.state=s,xe.about.show();break;case"projects":if(n){var u=this.getProjectByLink(n);console.log(u),u&&setTimeout(function(){xe.projectsDetail.load(u)},800),e&&(history.pushState(s,c,o+s),xe.state=s,document.title=u["page-title"],setTimeout(function(){xe.projectsDetail.show()},1e3))}else{var c=xe.data.projects.title;document.title=xe.data.projects["page-title"],setTimeout(function(){xe.projects.show()},0),e&&history.pushState(s,c,o+s),xe.state=s}break}this.state=="home"?setTimeout(function(){xe.footer.show(),xe.header.hide(),xe.menu.hide()},500):setTimeout(function(){xe.footer.hide(),xe.header.show()},500),setTimeout(function(){Te("html,body").animate({scrollTop:0},1e3)},50)};xe.getProjectByLink=function(s){for(var e=xe.data.projects.list,t=0;t<e.length;t++)if(e[t].link.split("/")[1]===s)return e[t];return null};xe.init();
//# sourceMappingURL=main-0f6a1977.js.map
