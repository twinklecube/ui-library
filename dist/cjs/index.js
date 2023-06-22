"use strict";var e=require("react"),n=require("styled-components");function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=function(e){return e&&e.Math==Math&&e},u=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof i&&i)||function(){return this}()||Function("return this")(),l={},a=function(e){try{return!!e()}catch(e){return!0}},s=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!a((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),p=f,d=Function.prototype.call,m=p?d.bind(d):function(){return d.apply(d,arguments)},v={},h={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,b=g&&!h.call({1:2},1);v.f=b?function(e){var n=g(this,e);return!!n&&n.enumerable}:h;var y,C,E=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},S=f,x=Function.prototype,A=x.call,O=S&&x.bind.bind(A,A),k=S?O:function(e){return function(){return A.apply(e,arguments)}},w=k,I=w({}.toString),R=w("".slice),T=function(e){return R(I(e),8,-1)},z=T,N=k,_=function(e){if("Function"===z(e))return N(e)},j=a,D=T,M=Object,B=_("".split),L=j((function(){return!M("z").propertyIsEnumerable(0)}))?function(e){return"String"==D(e)?B(e,""):M(e)}:M,F=function(e){return null==e},P=F,W=TypeError,Y=function(e){if(P(e))throw W("Can't call method on "+e);return e},K=L,H=Y,G=function(e){return K(H(e))},V="object"==typeof document&&document.all,U={all:V,IS_HTMLDDA:void 0===V&&void 0!==V},q=U.all,X=U.IS_HTMLDDA?function(e){return"function"==typeof e||e===q}:function(e){return"function"==typeof e},$=X,Z=U.all,J=U.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:$(e)||e===Z}:function(e){return"object"==typeof e?null!==e:$(e)},Q=u,ee=X,ne=function(e){return ee(e)?e:void 0},te=function(e,n){return arguments.length<2?ne(Q[e]):Q[e]&&Q[e][n]},re=_({}.isPrototypeOf),oe=te("navigator","userAgent")||"",ie=u,ce=oe,ue=ie.process,le=ie.Deno,ae=ue&&ue.versions||le&&le.version,se=ae&&ae.v8;se&&(C=(y=se.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!C&&ce&&(!(y=ce.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=ce.match(/Chrome\/(\d+)/))&&(C=+y[1]);var fe=C,pe=fe,de=a,me=!!Object.getOwnPropertySymbols&&!de((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&pe&&pe<41})),ve=me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,he=te,ge=X,be=re,ye=Object,Ce=ve?function(e){return"symbol"==typeof e}:function(e){var n=he("Symbol");return ge(n)&&be(n.prototype,ye(e))},Ee=String,Se=X,xe=function(e){try{return Ee(e)}catch(e){return"Object"}},Ae=TypeError,Oe=function(e){if(Se(e))return e;throw Ae(xe(e)+" is not a function")},ke=Oe,we=F,Ie=m,Re=X,Te=J,ze=TypeError,Ne={exports:{}},_e=u,je=Object.defineProperty,De=function(e,n){try{je(_e,e,{value:n,configurable:!0,writable:!0})}catch(t){_e[e]=n}return n},Me=De,Be=u["__core-js_shared__"]||Me("__core-js_shared__",{}),Le=Be;(Ne.exports=function(e,n){return Le[e]||(Le[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Fe=Y,Pe=Object,We=function(e){return Pe(Fe(e))},Ye=We,Ke=_({}.hasOwnProperty),He=Object.hasOwn||function(e,n){return Ke(Ye(e),n)},Ge=_,Ve=0,Ue=Math.random(),qe=Ge(1..toString),Xe=function(e){return"Symbol("+(void 0===e?"":e)+")_"+qe(++Ve+Ue,36)},$e=u,Ze=Ne.exports,Je=He,Qe=Xe,en=me,nn=ve,tn=Ze("wks"),rn=$e.Symbol,on=rn&&rn.for,cn=nn?rn:rn&&rn.withoutSetter||Qe,un=function(e){if(!Je(tn,e)||!en&&"string"!=typeof tn[e]){var n="Symbol."+e;en&&Je(rn,e)?tn[e]=rn[e]:tn[e]=nn&&on?on(n):cn(n)}return tn[e]},ln=m,an=J,sn=Ce,fn=function(e,n){var t=e[n];return we(t)?void 0:ke(t)},pn=function(e,n){var t,r;if("string"===n&&Re(t=e.toString)&&!Te(r=Ie(t,e)))return r;if(Re(t=e.valueOf)&&!Te(r=Ie(t,e)))return r;if("string"!==n&&Re(t=e.toString)&&!Te(r=Ie(t,e)))return r;throw ze("Can't convert object to primitive value")},dn=TypeError,mn=un("toPrimitive"),vn=function(e,n){if(!an(e)||sn(e))return e;var t,r=fn(e,mn);if(r){if(void 0===n&&(n="default"),t=ln(r,e,n),!an(t)||sn(t))return t;throw dn("Can't convert object to primitive value")}return void 0===n&&(n="number"),pn(e,n)},hn=Ce,gn=function(e){var n=vn(e,"string");return hn(n)?n:n+""},bn=J,yn=u.document,Cn=bn(yn)&&bn(yn.createElement),En=function(e){return Cn?yn.createElement(e):{}},Sn=En,xn=!s&&!a((function(){return 7!=Object.defineProperty(Sn("div"),"a",{get:function(){return 7}}).a})),An=s,On=m,kn=v,wn=E,In=G,Rn=gn,Tn=He,zn=xn,Nn=Object.getOwnPropertyDescriptor;l.f=An?Nn:function(e,n){if(e=In(e),n=Rn(n),zn)try{return Nn(e,n)}catch(e){}if(Tn(e,n))return wn(!On(kn.f,e,n),e[n])};var _n={},jn=s&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Dn=J,Mn=String,Bn=TypeError,Ln=function(e){if(Dn(e))return e;throw Bn(Mn(e)+" is not an object")},Fn=s,Pn=xn,Wn=jn,Yn=Ln,Kn=gn,Hn=TypeError,Gn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor;_n.f=Fn?Wn?function(e,n,t){if(Yn(e),n=Kn(n),Yn(t),"function"==typeof e&&"prototype"===n&&"value"in t&&"writable"in t&&!t.writable){var r=Vn(e,n);r&&r.writable&&(e[n]=t.value,t={configurable:"configurable"in t?t.configurable:r.configurable,enumerable:"enumerable"in t?t.enumerable:r.enumerable,writable:!1})}return Gn(e,n,t)}:Gn:function(e,n,t){if(Yn(e),n=Kn(n),Yn(t),Pn)try{return Gn(e,n,t)}catch(e){}if("get"in t||"set"in t)throw Hn("Accessors not supported");return"value"in t&&(e[n]=t.value),e};var Un=_n,qn=E,Xn=s?function(e,n,t){return Un.f(e,n,qn(1,t))}:function(e,n,t){return e[n]=t,e},$n={exports:{}},Zn=s,Jn=He,Qn=Function.prototype,et=Zn&&Object.getOwnPropertyDescriptor,nt=Jn(Qn,"name"),tt={EXISTS:nt,PROPER:nt&&"something"===function(){}.name,CONFIGURABLE:nt&&(!Zn||Zn&&et(Qn,"name").configurable)},rt=X,ot=Be,it=_(Function.toString);rt(ot.inspectSource)||(ot.inspectSource=function(e){return it(e)});var ct,ut,lt,at=ot.inspectSource,st=X,ft=u.WeakMap,pt=st(ft)&&/native code/.test(String(ft)),dt=Ne.exports,mt=Xe,vt=dt("keys"),ht=function(e){return vt[e]||(vt[e]=mt(e))},gt={},bt=pt,yt=u,Ct=J,Et=Xn,St=He,xt=Be,At=ht,Ot=gt,kt=yt.TypeError,wt=yt.WeakMap;if(bt||xt.state){var It=xt.state||(xt.state=new wt);It.get=It.get,It.has=It.has,It.set=It.set,ct=function(e,n){if(It.has(e))throw kt("Object already initialized");return n.facade=e,It.set(e,n),n},ut=function(e){return It.get(e)||{}},lt=function(e){return It.has(e)}}else{var Rt=At("state");Ot[Rt]=!0,ct=function(e,n){if(St(e,Rt))throw kt("Object already initialized");return n.facade=e,Et(e,Rt,n),n},ut=function(e){return St(e,Rt)?e[Rt]:{}},lt=function(e){return St(e,Rt)}}var Tt={set:ct,get:ut,has:lt,enforce:function(e){return lt(e)?ut(e):ct(e,{})},getterFor:function(e){return function(n){var t;if(!Ct(n)||(t=ut(n)).type!==e)throw kt("Incompatible receiver, "+e+" required");return t}}},zt=a,Nt=X,_t=He,jt=s,Dt=tt.CONFIGURABLE,Mt=at,Bt=Tt.enforce,Lt=Tt.get,Ft=Object.defineProperty,Pt=jt&&!zt((function(){return 8!==Ft((function(){}),"length",{value:8}).length})),Wt=String(String).split("String"),Yt=$n.exports=function(e,n,t){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(n="get "+n),t&&t.setter&&(n="set "+n),(!_t(e,"name")||Dt&&e.name!==n)&&(jt?Ft(e,"name",{value:n,configurable:!0}):e.name=n),Pt&&t&&_t(t,"arity")&&e.length!==t.arity&&Ft(e,"length",{value:t.arity});try{t&&_t(t,"constructor")&&t.constructor?jt&&Ft(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Bt(e);return _t(r,"source")||(r.source=Wt.join("string"==typeof n?n:"")),e};Function.prototype.toString=Yt((function(){return Nt(this)&&Lt(this).source||Mt(this)}),"toString");var Kt=X,Ht=_n,Gt=$n.exports,Vt=De,Ut=function(e,n,t,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:n;if(Kt(t)&&Gt(t,i,r),r.global)o?e[n]=t:Vt(n,t);else{try{r.unsafe?e[n]&&(o=!0):delete e[n]}catch(e){}o?e[n]=t:Ht.f(e,n,{value:t,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},qt={},Xt=Math.ceil,$t=Math.floor,Zt=Math.trunc||function(e){var n=+e;return(n>0?$t:Xt)(n)},Jt=function(e){var n=+e;return n!=n||0===n?0:Zt(n)},Qt=Jt,er=Math.max,nr=Math.min,tr=Jt,rr=Math.min,or=function(e){return e>0?rr(tr(e),9007199254740991):0},ir=or,cr=function(e){return ir(e.length)},ur=G,lr=function(e,n){var t=Qt(e);return t<0?er(t+n,0):nr(t,n)},ar=cr,sr=function(e){return function(n,t,r){var o,i=ur(n),c=ar(i),u=lr(r,c);if(e&&t!=t){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}},fr={includes:sr(!0),indexOf:sr(!1)},pr=He,dr=G,mr=fr.indexOf,vr=gt,hr=_([].push),gr=function(e,n){var t,r=dr(e),o=0,i=[];for(t in r)!pr(vr,t)&&pr(r,t)&&hr(i,t);for(;n.length>o;)pr(r,t=n[o++])&&(~mr(i,t)||hr(i,t));return i},br=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],yr=gr,Cr=br.concat("length","prototype");qt.f=Object.getOwnPropertyNames||function(e){return yr(e,Cr)};var Er={};Er.f=Object.getOwnPropertySymbols;var Sr=te,xr=qt,Ar=Er,Or=Ln,kr=_([].concat),wr=Sr("Reflect","ownKeys")||function(e){var n=xr.f(Or(e)),t=Ar.f;return t?kr(n,t(e)):n},Ir=He,Rr=wr,Tr=l,zr=_n,Nr=a,_r=X,jr=/#|\.prototype\./,Dr=function(e,n){var t=Br[Mr(e)];return t==Fr||t!=Lr&&(_r(n)?Nr(n):!!n)},Mr=Dr.normalize=function(e){return String(e).replace(jr,".").toLowerCase()},Br=Dr.data={},Lr=Dr.NATIVE="N",Fr=Dr.POLYFILL="P",Pr=Dr,Wr=u,Yr=l.f,Kr=Xn,Hr=Ut,Gr=De,Vr=function(e,n,t){for(var r=Rr(n),o=zr.f,i=Tr.f,c=0;c<r.length;c++){var u=r[c];Ir(e,u)||t&&Ir(t,u)||o(e,u,i(n,u))}},Ur=Pr,qr=function(e,n){var t,r,o,i,c,u=e.target,l=e.global,a=e.stat;if(t=l?Wr:a?Wr[u]||Gr(u,{}):(Wr[u]||{}).prototype)for(r in n){if(i=n[r],o=e.dontCallGetSet?(c=Yr(t,r))&&c.value:t[r],!Ur(l?r:u+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Vr(i,o)}(e.sham||o&&o.sham)&&Kr(i,"sham",!0),Hr(t,r,i,e)}},Xr=f,$r=Function.prototype,Zr=$r.apply,Jr=$r.call,Qr="object"==typeof Reflect&&Reflect.apply||(Xr?Jr.bind(Zr):function(){return Jr.apply(Zr,arguments)}),eo=_([].slice),no=TypeError,to=u,ro=Qr,oo=X,io=eo,co=function(e,n){if(e<n)throw no("Not enough arguments");return e},uo=/MSIE .\./.test(oe),lo=to.Function,ao=function(e){return uo?function(n,t){var r=co(arguments.length,1)>2,o=oo(n)?n:lo(n),i=r?io(arguments,2):void 0;return e(r?function(){ro(o,this,i)}:o,t)}:e},so={setTimeout:ao(to.setTimeout),setInterval:ao(to.setInterval)},fo=so.setInterval;qr({global:!0,bind:!0,forced:u.setInterval!==fo},{setInterval:fo});var po,mo=so.setTimeout;qr({global:!0,bind:!0,forced:u.setTimeout!==mo},{setTimeout:mo});var vo,ho=n.div(po||(po=t(["\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"])),(function(e){return e.backgroundColor})),go=function(n){var t=n.children,r=n.backgroundColor,o=void 0===r?"#00000080":r,i=n.onClick;return e.createElement(ho,{backgroundColor:o,onClick:i},t)};exports.Colors=void 0,(vo=exports.Colors||(exports.Colors={})).WHITE="#ffffff",vo.BLACK="#000000",vo.SECONDARY="#fc861d",vo.SECONDARY_DARKER="#b96011",vo.DISABLED="#d9d9d9",vo.GREY="#595959";var bo={SETTINGS:["M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"],ADMIN_PANEL:["M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z","M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"],CHEVRON_RIGHT:["M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"],CHEVRON_DOWN:["M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"],ARROW_BACK:["M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"],COOKIE:["M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z"]},yo=T,Co=Array.isArray||function(e){return"Array"==yo(e)},Eo=TypeError,So=gn,xo=_n,Ao=E,Oo={};Oo[un("toStringTag")]="z";var ko="[object z]"===String(Oo),wo=ko,Io=X,Ro=T,To=un("toStringTag"),zo=Object,No="Arguments"==Ro(function(){return arguments}()),_o=wo?Ro:function(e){var n,t,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=zo(e),To))?t:No?Ro(n):"Object"==(r=Ro(n))&&Io(n.callee)?"Arguments":r},jo=_,Do=a,Mo=X,Bo=_o,Lo=at,Fo=function(){},Po=[],Wo=te("Reflect","construct"),Yo=/^\s*(?:class|function)\b/,Ko=jo(Yo.exec),Ho=!Yo.exec(Fo),Go=function(e){if(!Mo(e))return!1;try{return Wo(Fo,Po,e),!0}catch(e){return!1}},Vo=function(e){if(!Mo(e))return!1;switch(Bo(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ho||!!Ko(Yo,Lo(e))}catch(e){return!0}};Vo.sham=!0;var Uo=!Wo||Do((function(){var e;return Go(Go.call)||!Go(Object)||!Go((function(){e=!0}))||e}))?Vo:Go,qo=Co,Xo=Uo,$o=J,Zo=un("species"),Jo=Array,Qo=function(e){var n;return qo(e)&&(n=e.constructor,(Xo(n)&&(n===Jo||qo(n.prototype))||$o(n)&&null===(n=n[Zo]))&&(n=void 0)),void 0===n?Jo:n},ei=function(e,n){return new(Qo(e))(0===n?0:n)},ni=a,ti=fe,ri=un("species"),oi=function(e){return ti>=51||!ni((function(){var n=[];return(n.constructor={})[ri]=function(){return{foo:1}},1!==n[e](Boolean).foo}))},ii=qr,ci=a,ui=Co,li=J,ai=We,si=cr,fi=function(e){if(e>9007199254740991)throw Eo("Maximum allowed index exceeded");return e},pi=function(e,n,t){var r=So(n);r in e?xo.f(e,r,Ao(0,t)):e[r]=t},di=ei,mi=oi,vi=fe,hi=un("isConcatSpreadable"),gi=vi>=51||!ci((function(){var e=[];return e[hi]=!1,e.concat()[0]!==e})),bi=mi("concat"),yi=function(e){if(!li(e))return!1;var n=e[hi];return void 0!==n?!!n:ui(e)};ii({target:"Array",proto:!0,arity:1,forced:!gi||!bi},{concat:function(e){var n,t,r,o,i,c=ai(this),u=di(c,0),l=0;for(n=-1,r=arguments.length;n<r;n++)if(yi(i=-1===n?c:arguments[n]))for(o=si(i),fi(l+o),t=0;t<o;t++,l++)t in i&&pi(u,l,i[t]);else fi(l+1),pi(u,l++,i);return u.length=l,u}});var Ci=Oe,Ei=f,Si=_(_.bind),xi=function(e,n){return Ci(e),void 0===n?e:Ei?Si(e,n):function(){return e.apply(n,arguments)}},Ai=L,Oi=We,ki=cr,wi=ei,Ii=_([].push),Ri=function(e){var n=1==e,t=2==e,r=3==e,o=4==e,i=6==e,c=7==e,u=5==e||i;return function(l,a,s,f){for(var p,d,m=Oi(l),v=Ai(m),h=xi(a,s),g=ki(v),b=0,y=f||wi,C=n?y(l,g):t||c?y(l,0):void 0;g>b;b++)if((u||b in v)&&(d=h(p=v[b],b,m),e))if(n)C[b]=d;else if(d)switch(e){case 3:return!0;case 5:return p;case 6:return b;case 2:Ii(C,p)}else switch(e){case 4:return!1;case 7:Ii(C,p)}return i?-1:r||o?o:C}},Ti={forEach:Ri(0),map:Ri(1),filter:Ri(2),some:Ri(3),every:Ri(4),find:Ri(5),findIndex:Ri(6),filterReject:Ri(7)},zi={},Ni=gr,_i=br,ji=Object.keys||function(e){return Ni(e,_i)},Di=s,Mi=jn,Bi=_n,Li=Ln,Fi=G,Pi=ji;zi.f=Di&&!Mi?Object.defineProperties:function(e,n){Li(e);for(var t,r=Fi(n),o=Pi(n),i=o.length,c=0;i>c;)Bi.f(e,t=o[c++],r[t]);return e};var Wi,Yi=te("document","documentElement"),Ki=Ln,Hi=zi,Gi=br,Vi=gt,Ui=Yi,qi=En,Xi=ht("IE_PROTO"),$i=function(){},Zi=function(e){return"<script>"+e+"<\/script>"},Ji=function(e){e.write(Zi("")),e.close();var n=e.parentWindow.Object;return e=null,n},Qi=function(){try{Wi=new ActiveXObject("htmlfile")}catch(e){}var e,n;Qi="undefined"!=typeof document?document.domain&&Wi?Ji(Wi):((n=qi("iframe")).style.display="none",Ui.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(Zi("document.F=Object")),e.close(),e.F):Ji(Wi);for(var t=Gi.length;t--;)delete Qi.prototype[Gi[t]];return Qi()};Vi[Xi]=!0;var ec=un,nc=Object.create||function(e,n){var t;return null!==e?($i.prototype=Ki(e),t=new $i,$i.prototype=null,t[Xi]=e):t=Qi(),void 0===n?t:Hi.f(t,n)},tc=_n.f,rc=ec("unscopables"),oc=Array.prototype;null==oc[rc]&&tc(oc,rc,{configurable:!0,value:nc(null)});var ic=qr,cc=Ti.find,uc=function(e){oc[rc][e]=!0},lc=!0;"find"in[]&&Array(1).find((function(){lc=!1})),ic({target:"Array",proto:!0,forced:lc},{find:function(e){return cc(this,e,arguments.length>1?arguments[1]:void 0)}}),uc("find");var ac=_o,sc=ko?{}.toString:function(){return"[object "+ac(this)+"]"};ko||Ut(Object.prototype,"toString",sc,{unsafe:!0});var fc,pc,dc=_o,mc=String,vc=J,hc=T,gc=un("match"),bc=function(e){var n;return vc(e)&&(void 0!==(n=e[gc])?!!n:"RegExp"==hc(e))},yc=TypeError,Cc=un("match"),Ec=qr,Sc=_,xc=l.f,Ac=or,Oc=function(e){if("Symbol"===dc(e))throw TypeError("Cannot convert a Symbol value to a string");return mc(e)},kc=function(e){if(bc(e))throw yc("The method doesn't accept regular expressions");return e},wc=Y,Ic=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[Cc]=!1,"/./"[e](n)}catch(e){}}return!1},Rc=Sc("".startsWith),Tc=Sc("".slice),zc=Math.min,Nc=Ic("startsWith");Ec({target:"String",proto:!0,forced:!!(Nc||(fc=xc(String.prototype,"startsWith"),!fc||fc.writable))&&!Nc},{startsWith:function(e){var n=Oc(wc(this));kc(e);var t=Ac(zc(arguments.length>1?arguments[1]:void 0,n.length)),r=Oc(e);return Rc?Rc(n,r,t):Tc(n,t,t+r.length)===r}}),exports.CookieNames=void 0,(pc=exports.CookieNames||(exports.CookieNames={})).TC_COOKIE_CONSENT="tc_cookie_consent",pc.TC_COOKIE_NECESSARY="tc_cookie_necessary",pc.TC_COOKIE_FUNCTIONAL="tc_cookie_functional",pc.TC_COOKIE_ANALYSIS="tc_cookie_analysis",pc.TC_COOKIE_ADVERTISEMENT="tc_cookie_advertisement";var _c,jc,Dc,Mc,Bc,Lc,Fc,Pc,Wc,Yc,Kc,Hc=function(e,n){document.cookie="".concat(e,"=").concat(n,"; max-age=").concat(15552e3,"; sameSite=none; Secure")},Gc=function(e,n,t){Hc(exports.CookieNames.TC_COOKIE_CONSENT,!0),Hc(exports.CookieNames.TC_COOKIE_NECESSARY,!0),Hc(exports.CookieNames.TC_COOKIE_FUNCTIONAL,e),Hc(exports.CookieNames.TC_COOKIE_ANALYSIS,n),Hc(exports.CookieNames.TC_COOKIE_ADVERTISEMENT,t)},Vc=function(e){var n,t=null===(n=document.cookie.split("; ").find((function(n){return n.startsWith("".concat(e,"="))})))||void 0===n?void 0:n.split("=")[1];return!!t&&"true"===t},Uc=function(){return{functional:Vc(exports.CookieNames.TC_COOKIE_FUNCTIONAL),analysis:Vc(exports.CookieNames.TC_COOKIE_ANALYSIS),advertisement:Vc(exports.CookieNames.TC_COOKIE_ADVERTISEMENT)}},qc=n.div(_c||(_c=t(["\n  width: 80%;\n  max-width: 400px;\n  max-height: 60vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  font-family: Arial,serif;\n"])),exports.Colors.WHITE),Xc=n.div(jc||(jc=t(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),$c=n.div(Dc||(Dc=t(["\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),Zc=n.div(Mc||(Mc=t(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: space-around;\n  \n"]))),Jc=n.div(Bc||(Bc=t(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),Qc=n.div(Lc||(Lc=t(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n"]))),eu=n.div(Fc||(Fc=t(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n"]))),nu=n.div(Pc||(Pc=t(["\n  display: flex;\n  justify-content: flex-end;\n"])));exports.ButtonType=void 0,(Wc=exports.ButtonType||(exports.ButtonType={})).PRIMARY="PRIMARY",Wc.PRIMARY_INVERSE="PRIMARY_INVERSE",exports.ButtonSize=void 0,(Yc=exports.ButtonSize||(exports.ButtonSize={})).SMALL="SMALL",Yc.MEDIUM="MEDIUM",Yc.LARGE="LARGE";var tu,ru,ou=function(e){var n,t,r,o,i,c;switch(e){case exports.ButtonType.PRIMARY:n=exports.Colors.SECONDARY,o=exports.Colors.SECONDARY_DARKER,t=exports.Colors.WHITE,r="none";break;case exports.ButtonType.PRIMARY_INVERSE:n=exports.Colors.WHITE,t=exports.Colors.SECONDARY,r="solid 2px ".concat(exports.Colors.SECONDARY),i=exports.Colors.SECONDARY_DARKER,c="solid 2px ".concat(exports.Colors.SECONDARY_DARKER);break;default:n=exports.Colors.SECONDARY,o=exports.Colors.SECONDARY_DARKER,t=exports.Colors.WHITE,r="none"}return{backgroundColor:n,color:t,border:r,hoverColor:i,hoverBorder:c,hoverBackgroundColor:o}},iu=function(e){var n,t,r;switch(e){case exports.ButtonSize.SMALL:n="2rem",t="1.5rem",r="1.2rem";break;case exports.ButtonSize.MEDIUM:n="2.5rem",t="2rem",r="2rem";break;case exports.ButtonSize.LARGE:n="3.5rem",t="3rem",r="2.5rem";break;default:n="2rem",t="1.5rem",r="1.2rem"}return{height:n,paddingLeftAndRight:t,fontSize:r}},cu=n.button(Kc||(Kc=t(["\n  flex: ",";\n  white-space: nowrap;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  height: ",";\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n  border: ",";\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: ",";\n    background-color: ",";\n    border: ",";\n  }\n"])),(function(e){return e.streched&&"1"}),(function(e){return"0 ".concat(iu(e.buttonSize).paddingLeftAndRight)}),(function(e){return iu(e.buttonSize).height}),(function(e){return iu(e.buttonSize).fontSize}),(function(e){return ou(e.buttonType).backgroundColor}),(function(e){return ou(e.buttonType).color}),(function(e){return ou(e.buttonType).border}),(function(e){return ou(e.buttonType).hoverColor}),(function(e){return ou(e.buttonType).hoverBackgroundColor}),(function(e){return ou(e.buttonType).hoverBorder})),uu=function(n){var t=n.children,r=n.buttonType,o=void 0===r?exports.ButtonType.PRIMARY:r,i=n.buttonSize,c=void 0===i?exports.ButtonSize.MEDIUM:i,u=n.onClick,l=n.streched;return e.createElement(cu,{buttonType:o,buttonSize:c,onClick:u,streched:l},t)},lu=n.a(tu||(tu=t(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: ","px;\n  color: ",";\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.3s;\n  &:hover {\n    color: ",";\n  }\n\n  &:hover svg path {\n    fill: ",";\n  }\n"])),(function(e){var n;return null!==(n=e.fontSize)&&void 0!==n?n:16}),(function(e){var n;return null!==(n=e.color)&&void 0!==n?n:exports.Colors.BLACK}),(function(e){var n;return null!==(n=e.hoverColor)&&void 0!==n?n:exports.Colors.GREY}),(function(e){var n;return null!==(n=e.hoverColor)&&void 0!==n?n:exports.Colors.GREY})),au=Ti.map;qr({target:"Array",proto:!0,forced:!oi("map")},{map:function(e){return au(this,e,arguments.length>1?arguments[1]:void 0)}});var su,fu,pu,du,mu,vu,hu,gu,bu=n.svg(ru||(ru=t(["\n  width: ","px;\n  height: ","px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  path {\n    transition: all 0.3s;\n    fill: ",";;\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(e){var n;return null!==(n=e.size)&&void 0!==n?n:24}),(function(e){var n;return null!==(n=e.size)&&void 0!==n?n:24}),(function(e){var n;return null!==(n=e.color)&&void 0!==n?n:exports.Colors.BLACK}),(function(e){var n;return null!==(n=e.hoverColor)&&void 0!==n?n:exports.Colors.GREY})),yu=function(n){var t=n.size,r=n.color,o=n.hoverColor,i=n.icon;return e.createElement(bu,{viewBox:"0 0 24 24",size:t,color:r,hoverColor:o},i.map((function(n,t){return e.createElement("path",{key:t,d:n})})))},Cu=function(n){var t=n.children,r=n.url,o=n.onClick,i=n.icon,c=n.iconSize,u=n.color,l=n.hoverColor,a=n.fontSize;return e.createElement(lu,{href:r,onClick:o,color:u,hoverColor:l,fontSize:a},i&&e.createElement(yu,{icon:i,color:u,hoverColor:l,size:null!=c?c:18}),t)},Eu=n.div(su||(su=t(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n"]))),Su=n.div(fu||(fu=t(["\n  display: flex;\n  justify-content: space-between;\n"]))),xu=n.div(pu||(pu=t(["\n  font-size: 12px;\n  color: ",";\n  margin: 0.5rem;\n  text-align: justify;\n  \n  & p {\n    margin-top: 0.5rem;\n  }\n"])),exports.Colors.GREY),Au=n.input.attrs({type:"checkbox"})(du||(du=t(["\n  display: none;\n  width: 0;\n  height: 0;\n"]))),Ou=n.label(mu||(mu=t(["\n  width: 30px;\n  min-width: 30px;\n  height: 20px;\n  display: inline-block;\n  background-color: ",';\n  border-radius: 13px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.5s;\n  //box-shadow: 0 0 20px #477a8550;\n\n  &::after {\n    content: "";\n    width: 16px;\n    height: 16px;\n    background-color: ',";\n    position: absolute;\n    border-radius: 11px;\n    top: 2px;\n    left: ","px;\n    transition: 0.5s;\n  }\n"])),(function(e){return e.checked?e.enabledBackgroundColor:e.disabledBackgroundColor}),(function(e){return e.checked?e.enabledForegroundColor:e.disabledForegroundColor}),(function(e){return e.checked?12:2})),ku=function(n){var t=n.id,o=n.onClick,i=n.enabled,c=void 0!==i&&i,u=n.disabledBackgroundColor,l=void 0===u?exports.Colors.DISABLED:u,a=n.disabledForegroundColor,s=void 0===a?exports.Colors.WHITE:a,f=n.enabledBackgroundColor,p=void 0===f?exports.Colors.SECONDARY:f,d=n.enabledForegroundColor,m=void 0===d?exports.Colors.WHITE:d,v=r(e.useState(c),2),h=v[0],g=v[1];return e.createElement(e.Fragment,null,e.createElement(Ou,{htmlFor:t,checked:h,disabledBackgroundColor:l,disabledForegroundColor:s,enabledBackgroundColor:p,enabledForegroundColor:m}),e.createElement(Au,{id:t,checked:h,onChange:function(){g((function(e){return!e})),o()}}))},wu=function(n){var t=n.sectionName,o=n.alwaysActive,i=n.toggleId,c=n.toggleOnClick,u=n.sectionDescription,l=n.toggleEnabled,a=r(e.useState(!1),2),s=a[0],f=a[1];return e.createElement(Eu,null,e.createElement(Su,null,e.createElement(Cu,{icon:s?bo.CHEVRON_DOWN:bo.CHEVRON_RIGHT,iconSize:22,onClick:function(){f((function(e){return!e}))},fontSize:14},t),e.createElement(e.Fragment,null,o&&"Immer aktiv",i&&c&&e.createElement(ku,{id:i,onClick:c,enabled:null!=l&&l}))),s&&e.createElement(xu,null,u))},Iu=function(n){var t=n.onCookieAccept,o=r(e.useState(!1),2),i=o[0],c=o[1],u=r(e.useState(!1),2),l=u[0],a=u[1],s=r(e.useState(!1),2),f=s[0],p=s[1],d=r(e.useState(!1),2),m=d[0],v=d[1];e.useEffect((function(){var e=Uc(),n=e.functional,t=e.analysis,r=e.advertisement;a(n),p(t),v(r)}),[]);return e.createElement(go,null,e.createElement(qc,null,e.createElement(Xc,null,"Wir respektieren Ihre Privatsphäre"),e.createElement($c,null,e.createElement("p",null,'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte einzusetzen und unseren Datenverkehr zu analysieren. Wenn Sie auf „Alle akzeptieren" klicken, stimmen Sie der Anwendung von Cookies zu.'),e.createElement(Zc,null,e.createElement(Cu,{icon:i?bo.ARROW_BACK:bo.SETTINGS,color:exports.Colors.SECONDARY,hoverColor:exports.Colors.SECONDARY_DARKER,onClick:function(){c((function(e){return!e}))},fontSize:14},"Anpassen"),e.createElement(Cu,{url:"/legal/datenschutz",fontSize:14},"Datenschutz"),e.createElement(Cu,{url:"/legal/impressum",fontSize:14},"Impressum")),i&&e.createElement(eu,null,e.createElement(wu,{sectionName:"Notwendig",sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Notwendige Cookies sind für die Grundfunktionen der Website von entscheidender Bedeutung. Ohne sie kann die Website nicht in der vorgesehenen Weise funktionieren."),e.createElement("p",null,"Diese Cookies speichern keine personenbezogenen Daten.")),alwaysActive:!0}),e.createElement(wu,{sectionName:"Funktionale",toggleId:"functionale",toggleOnClick:function(){return a((function(e){return!e}))},toggleEnabled:l,sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Funktionale Cookies unterstützen bei der Ausführung bestimmter Funktionen, z. B. beim Teilen des Inhalts der Website auf Social Media-Plattformen, beim Sammeln von Feedbacks und anderen Funktionen von Drittanbietern."))}),e.createElement(wu,{sectionName:"Analyse",toggleId:"analyse",toggleOnClick:function(){return p((function(e){return!e}))},toggleEnabled:f,sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Analyse-Cookies werden verwendet um zu verstehen, wie Besucher mit der Website interagieren. Diese Cookies dienen zu Aussagen über die Anzahl der Besucher, Absprungrate, Herkunft der Besucher usw."))}),e.createElement(wu,{sectionName:"Werbe",toggleId:"werbe",toggleOnClick:function(){return v((function(e){return!e}))},toggleEnabled:m,sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Werbe-Cookies werden verwendet, um Besuchern auf der Grundlage der von ihnen zuvor besuchten Seiten maßgeschneiderte Werbung zu liefern und die Wirksamkeit von Werbekampagne nzu analysieren."))}),e.createElement(nu,null,e.createElement(Cu,{fontSize:14,color:exports.Colors.SECONDARY,hoverColor:exports.Colors.SECONDARY_DARKER,onClick:function(){t(),Gc(l,f,m)}},"Ausgewählte akzeptieren")))),e.createElement(Jc,null,e.createElement(Qc,null,e.createElement(uu,{buttonSize:exports.ButtonSize.SMALL,buttonType:exports.ButtonType.PRIMARY_INVERSE,streched:!0,onClick:function(){t(),Gc(!1,!1,!1)}},"Alle ablehnen"),e.createElement(uu,{buttonSize:exports.ButtonSize.SMALL,streched:!0,onClick:function(){t(),Gc(!0,!0,!0)}},"Alle zulassen")),e.createElement(Cu,{url:"/legal/cookieuebersicht",fontSize:14},"Cookieübersicht"))))},Ru=n.div(vu||(vu=t(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n  gap: 0.5rem;\n"]))),Tu=n.div(hu||(hu=t(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n"]))),zu=n.div(gu||(gu=t(["\n  display: flex;\n  justify-content: center;\n  font-size: 0.6rem;\n  color: ",";\n"])),exports.Colors.GREY);exports.Footer=function(){var n=r(e.useState(!1),2),t=n[0],o=n[1];e.useEffect((function(){setTimeout((function(){o(!Vc(exports.CookieNames.TC_COOKIE_CONSENT))}),500)}),[]);return e.createElement(Ru,null,t&&e.createElement(Iu,{onCookieAccept:function(){o(!1)}}),e.createElement(Tu,null,e.createElement(Cu,{fontSize:12,url:"/legal/impressum",color:exports.Colors.WHITE},"Impressum"),e.createElement(Cu,{fontSize:12,url:"/legal/datenschutz",color:exports.Colors.WHITE},"Datenschutz"),e.createElement(Cu,{fontSize:12,url:"/legal/cookieuebersicht",color:exports.Colors.WHITE},"Cookieübersicht"),e.createElement(Cu,{fontSize:12,onClick:function(){o(!0)},icon:bo.COOKIE,color:exports.Colors.SECONDARY,hoverColor:exports.Colors.SECONDARY_DARKER},"Cookie Einstellungen")),e.createElement(zu,null,"© 2023 Twinklecube. Alle Rechte vorbehalten."))},exports.Icons=bo,exports.getCookie=Vc,exports.getCookieConsentCookies=Uc,exports.setCookie=Hc,exports.setCookieConsentCookies=Gc;
