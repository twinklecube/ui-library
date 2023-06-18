import e,{useState as n,useEffect as t}from"react";import r from"styled-components";function o(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=function(e){return e&&e.Math==Math&&e},a=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof u&&u)||function(){return this}()||Function("return this")(),f={},s=function(e){try{return!!e()}catch(e){return!0}},d=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),p=!s((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),m=p,v=Function.prototype.call,g=m?v.bind(v):function(){return v.apply(v,arguments)},h={},b={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,E=y&&!b.call({1:2},1);h.f=E?function(e){var n=y(this,e);return!!n&&n.enumerable}:b;var C,S,A=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},O=p,k=Function.prototype,w=k.call,I=O&&k.bind.bind(w,w),R=O?I:function(e){return function(){return w.apply(e,arguments)}},T=R,z=T({}.toString),x=T("".slice),_=function(e){return x(z(e),8,-1)},j=_,N=R,D=function(e){if("Function"===j(e))return N(e)},M=s,L=_,F=Object,P=D("".split),W=M((function(){return!F("z").propertyIsEnumerable(0)}))?function(e){return"String"==L(e)?P(e,""):F(e)}:F,Y=function(e){return null==e},K=Y,B=TypeError,H=function(e){if(K(e))throw B("Can't call method on "+e);return e},G=W,V=H,U=function(e){return G(V(e))},X="object"==typeof document&&document.all,$={all:X,IS_HTMLDDA:void 0===X&&void 0!==X},q=$.all,Z=$.IS_HTMLDDA?function(e){return"function"==typeof e||e===q}:function(e){return"function"==typeof e},J=Z,Q=$.all,ee=$.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:J(e)||e===Q}:function(e){return"object"==typeof e?null!==e:J(e)},ne=a,te=Z,re=function(e){return te(e)?e:void 0},oe=function(e,n){return arguments.length<2?re(ne[e]):ne[e]&&ne[e][n]},ie=D({}.isPrototypeOf),ce=oe("navigator","userAgent")||"",ue=a,le=ce,ae=ue.process,fe=ue.Deno,se=ae&&ae.versions||fe&&fe.version,de=se&&se.v8;de&&(S=(C=de.split("."))[0]>0&&C[0]<4?1:+(C[0]+C[1])),!S&&le&&(!(C=le.match(/Edge\/(\d+)/))||C[1]>=74)&&(C=le.match(/Chrome\/(\d+)/))&&(S=+C[1]);var pe=S,me=pe,ve=s,ge=!!Object.getOwnPropertySymbols&&!ve((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&me&&me<41})),he=ge&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,be=oe,ye=Z,Ee=ie,Ce=Object,Se=he?function(e){return"symbol"==typeof e}:function(e){var n=be("Symbol");return ye(n)&&Ee(n.prototype,Ce(e))},Ae=String,Oe=Z,ke=function(e){try{return Ae(e)}catch(e){return"Object"}},we=TypeError,Ie=function(e){if(Oe(e))return e;throw we(ke(e)+" is not a function")},Re=Ie,Te=Y,ze=g,xe=Z,_e=ee,je=TypeError,Ne={exports:{}},De=a,Me=Object.defineProperty,Le=function(e,n){try{Me(De,e,{value:n,configurable:!0,writable:!0})}catch(t){De[e]=n}return n},Fe=Le,Pe=a["__core-js_shared__"]||Fe("__core-js_shared__",{}),We=Pe;(Ne.exports=function(e,n){return We[e]||(We[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ye=H,Ke=Object,Be=function(e){return Ke(Ye(e))},He=Be,Ge=D({}.hasOwnProperty),Ve=Object.hasOwn||function(e,n){return Ge(He(e),n)},Ue=D,Xe=0,$e=Math.random(),qe=Ue(1..toString),Ze=function(e){return"Symbol("+(void 0===e?"":e)+")_"+qe(++Xe+$e,36)},Je=a,Qe=Ne.exports,en=Ve,nn=Ze,tn=ge,rn=he,on=Qe("wks"),cn=Je.Symbol,un=cn&&cn.for,ln=rn?cn:cn&&cn.withoutSetter||nn,an=function(e){if(!en(on,e)||!tn&&"string"!=typeof on[e]){var n="Symbol."+e;tn&&en(cn,e)?on[e]=cn[e]:on[e]=rn&&un?un(n):ln(n)}return on[e]},fn=g,sn=ee,dn=Se,pn=function(e,n){var t=e[n];return Te(t)?void 0:Re(t)},mn=function(e,n){var t,r;if("string"===n&&xe(t=e.toString)&&!_e(r=ze(t,e)))return r;if(xe(t=e.valueOf)&&!_e(r=ze(t,e)))return r;if("string"!==n&&xe(t=e.toString)&&!_e(r=ze(t,e)))return r;throw je("Can't convert object to primitive value")},vn=TypeError,gn=an("toPrimitive"),hn=function(e,n){if(!sn(e)||dn(e))return e;var t,r=pn(e,gn);if(r){if(void 0===n&&(n="default"),t=fn(r,e,n),!sn(t)||dn(t))return t;throw vn("Can't convert object to primitive value")}return void 0===n&&(n="number"),mn(e,n)},bn=Se,yn=function(e){var n=hn(e,"string");return bn(n)?n:n+""},En=ee,Cn=a.document,Sn=En(Cn)&&En(Cn.createElement),An=function(e){return Sn?Cn.createElement(e):{}},On=An,kn=!d&&!s((function(){return 7!=Object.defineProperty(On("div"),"a",{get:function(){return 7}}).a})),wn=d,In=g,Rn=h,Tn=A,zn=U,xn=yn,_n=Ve,jn=kn,Nn=Object.getOwnPropertyDescriptor;f.f=wn?Nn:function(e,n){if(e=zn(e),n=xn(n),jn)try{return Nn(e,n)}catch(e){}if(_n(e,n))return Tn(!In(Rn.f,e,n),e[n])};var Dn={},Mn=d&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ln=ee,Fn=String,Pn=TypeError,Wn=function(e){if(Ln(e))return e;throw Pn(Fn(e)+" is not an object")},Yn=d,Kn=kn,Bn=Mn,Hn=Wn,Gn=yn,Vn=TypeError,Un=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor;Dn.f=Yn?Bn?function(e,n,t){if(Hn(e),n=Gn(n),Hn(t),"function"==typeof e&&"prototype"===n&&"value"in t&&"writable"in t&&!t.writable){var r=Xn(e,n);r&&r.writable&&(e[n]=t.value,t={configurable:"configurable"in t?t.configurable:r.configurable,enumerable:"enumerable"in t?t.enumerable:r.enumerable,writable:!1})}return Un(e,n,t)}:Un:function(e,n,t){if(Hn(e),n=Gn(n),Hn(t),Kn)try{return Un(e,n,t)}catch(e){}if("get"in t||"set"in t)throw Vn("Accessors not supported");return"value"in t&&(e[n]=t.value),e};var $n=Dn,qn=A,Zn=d?function(e,n,t){return $n.f(e,n,qn(1,t))}:function(e,n,t){return e[n]=t,e},Jn={exports:{}},Qn=d,et=Ve,nt=Function.prototype,tt=Qn&&Object.getOwnPropertyDescriptor,rt=et(nt,"name"),ot={EXISTS:rt,PROPER:rt&&"something"===function(){}.name,CONFIGURABLE:rt&&(!Qn||Qn&&tt(nt,"name").configurable)},it=Z,ct=Pe,ut=D(Function.toString);it(ct.inspectSource)||(ct.inspectSource=function(e){return ut(e)});var lt,at,ft,st=ct.inspectSource,dt=Z,pt=a.WeakMap,mt=dt(pt)&&/native code/.test(String(pt)),vt=Ne.exports,gt=Ze,ht=vt("keys"),bt=function(e){return ht[e]||(ht[e]=gt(e))},yt={},Et=mt,Ct=a,St=ee,At=Zn,Ot=Ve,kt=Pe,wt=bt,It=yt,Rt=Ct.TypeError,Tt=Ct.WeakMap;if(Et||kt.state){var zt=kt.state||(kt.state=new Tt);zt.get=zt.get,zt.has=zt.has,zt.set=zt.set,lt=function(e,n){if(zt.has(e))throw Rt("Object already initialized");return n.facade=e,zt.set(e,n),n},at=function(e){return zt.get(e)||{}},ft=function(e){return zt.has(e)}}else{var xt=wt("state");It[xt]=!0,lt=function(e,n){if(Ot(e,xt))throw Rt("Object already initialized");return n.facade=e,At(e,xt,n),n},at=function(e){return Ot(e,xt)?e[xt]:{}},ft=function(e){return Ot(e,xt)}}var _t={set:lt,get:at,has:ft,enforce:function(e){return ft(e)?at(e):lt(e,{})},getterFor:function(e){return function(n){var t;if(!St(n)||(t=at(n)).type!==e)throw Rt("Incompatible receiver, "+e+" required");return t}}},jt=s,Nt=Z,Dt=Ve,Mt=d,Lt=ot.CONFIGURABLE,Ft=st,Pt=_t.enforce,Wt=_t.get,Yt=Object.defineProperty,Kt=Mt&&!jt((function(){return 8!==Yt((function(){}),"length",{value:8}).length})),Bt=String(String).split("String"),Ht=Jn.exports=function(e,n,t){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(n="get "+n),t&&t.setter&&(n="set "+n),(!Dt(e,"name")||Lt&&e.name!==n)&&(Mt?Yt(e,"name",{value:n,configurable:!0}):e.name=n),Kt&&t&&Dt(t,"arity")&&e.length!==t.arity&&Yt(e,"length",{value:t.arity});try{t&&Dt(t,"constructor")&&t.constructor?Mt&&Yt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Pt(e);return Dt(r,"source")||(r.source=Bt.join("string"==typeof n?n:"")),e};Function.prototype.toString=Ht((function(){return Nt(this)&&Wt(this).source||Ft(this)}),"toString");var Gt=Z,Vt=Dn,Ut=Jn.exports,Xt=Le,$t=function(e,n,t,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:n;if(Gt(t)&&Ut(t,i,r),r.global)o?e[n]=t:Xt(n,t);else{try{r.unsafe?e[n]&&(o=!0):delete e[n]}catch(e){}o?e[n]=t:Vt.f(e,n,{value:t,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},qt={},Zt=Math.ceil,Jt=Math.floor,Qt=Math.trunc||function(e){var n=+e;return(n>0?Jt:Zt)(n)},er=function(e){var n=+e;return n!=n||0===n?0:Qt(n)},nr=er,tr=Math.max,rr=Math.min,or=er,ir=Math.min,cr=function(e){return e>0?ir(or(e),9007199254740991):0},ur=cr,lr=function(e){return ur(e.length)},ar=U,fr=function(e,n){var t=nr(e);return t<0?tr(t+n,0):rr(t,n)},sr=lr,dr=function(e){return function(n,t,r){var o,i=ar(n),c=sr(i),u=fr(r,c);if(e&&t!=t){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}},pr={includes:dr(!0),indexOf:dr(!1)},mr=Ve,vr=U,gr=pr.indexOf,hr=yt,br=D([].push),yr=function(e,n){var t,r=vr(e),o=0,i=[];for(t in r)!mr(hr,t)&&mr(r,t)&&br(i,t);for(;n.length>o;)mr(r,t=n[o++])&&(~gr(i,t)||br(i,t));return i},Er=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Cr=yr,Sr=Er.concat("length","prototype");qt.f=Object.getOwnPropertyNames||function(e){return Cr(e,Sr)};var Ar={};Ar.f=Object.getOwnPropertySymbols;var Or=oe,kr=qt,wr=Ar,Ir=Wn,Rr=D([].concat),Tr=Or("Reflect","ownKeys")||function(e){var n=kr.f(Ir(e)),t=wr.f;return t?Rr(n,t(e)):n},zr=Ve,xr=Tr,_r=f,jr=Dn,Nr=s,Dr=Z,Mr=/#|\.prototype\./,Lr=function(e,n){var t=Pr[Fr(e)];return t==Yr||t!=Wr&&(Dr(n)?Nr(n):!!n)},Fr=Lr.normalize=function(e){return String(e).replace(Mr,".").toLowerCase()},Pr=Lr.data={},Wr=Lr.NATIVE="N",Yr=Lr.POLYFILL="P",Kr=Lr,Br=a,Hr=f.f,Gr=Zn,Vr=$t,Ur=Le,Xr=function(e,n,t){for(var r=xr(n),o=jr.f,i=_r.f,c=0;c<r.length;c++){var u=r[c];zr(e,u)||t&&zr(t,u)||o(e,u,i(n,u))}},$r=Kr,qr=function(e,n){var t,r,o,i,c,u=e.target,l=e.global,a=e.stat;if(t=l?Br:a?Br[u]||Ur(u,{}):(Br[u]||{}).prototype)for(r in n){if(i=n[r],o=e.dontCallGetSet?(c=Hr(t,r))&&c.value:t[r],!$r(l?r:u+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Xr(i,o)}(e.sham||o&&o.sham)&&Gr(i,"sham",!0),Vr(t,r,i,e)}},Zr=p,Jr=Function.prototype,Qr=Jr.apply,eo=Jr.call,no="object"==typeof Reflect&&Reflect.apply||(Zr?eo.bind(Qr):function(){return eo.apply(Qr,arguments)}),to=D([].slice),ro=TypeError,oo=a,io=no,co=Z,uo=to,lo=function(e,n){if(e<n)throw ro("Not enough arguments");return e},ao=/MSIE .\./.test(ce),fo=oo.Function,so=function(e){return ao?function(n,t){var r=lo(arguments.length,1)>2,o=co(n)?n:fo(n),i=r?uo(arguments,2):void 0;return e(r?function(){io(o,this,i)}:o,t)}:e},po={setTimeout:so(oo.setTimeout),setInterval:so(oo.setInterval)},mo=po.setInterval;qr({global:!0,bind:!0,forced:a.setInterval!==mo},{setInterval:mo});var vo,go=po.setTimeout;qr({global:!0,bind:!0,forced:a.setTimeout!==go},{setTimeout:go});var ho,bo,yo,Eo,Co,So,Ao,Oo,ko,wo=r.div(vo||(vo=o(["\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"])),(function(e){return e.backgroundColor})),Io=function(n){var t=n.children,r=n.backgroundColor,o=void 0===r?"#00000080":r,i=n.onClick;return e.createElement(wo,{backgroundColor:o,onClick:i},t)};!function(e){e.WHITE="#ffffff",e.BLACK="#000000",e.SECONDARY="#fc861d",e.SECONDARY_DARKER="#b96011",e.DISABLED="#d9d9d9",e.GREY="#595959"}(ho||(ho={}));var Ro,To,zo,xo=r.div(bo||(bo=o(["\n  width: 80%;\n  max-width: 400px;\n  max-height: 60vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  font-family: Arial;\n"])),ho.WHITE),_o=r.div(yo||(yo=o(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),jo=r.div(Eo||(Eo=o(["\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),No=r.div(Co||(Co=o(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: space-around;\n  \n"]))),Do=r.div(So||(So=o(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),Mo=r.div(Ao||(Ao=o(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n"]))),Lo=r.div(Oo||(Oo=o(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n"]))),Fo=r.div(ko||(ko=o(["\n  display: flex;\n  justify-content: flex-end;\n"])));!function(e){e.PRIMARY="PRIMARY",e.PRIMARY_INVERSE="PRIMARY_INVERSE"}(Ro||(Ro={})),function(e){e.SMALL="SMALL",e.MEDIUM="MEDIUM",e.LARGE="LARGE"}(To||(To={}));var Po,Wo=function(e){var n,t,r,o,i,c;switch(e){case Ro.PRIMARY:n=ho.SECONDARY,o=ho.SECONDARY_DARKER,t=ho.WHITE,r="none";break;case Ro.PRIMARY_INVERSE:n=ho.WHITE,t=ho.SECONDARY,r="solid 2px ".concat(ho.SECONDARY),i=ho.SECONDARY_DARKER,c="solid 2px ".concat(ho.SECONDARY_DARKER);break;default:n=ho.SECONDARY,o=ho.SECONDARY_DARKER,t=ho.WHITE,r="none"}return{backgroundColor:n,color:t,border:r,hoverColor:i,hoverBorder:c,hoverBackgroundColor:o}},Yo=function(e){var n,t,r;switch(e){case To.SMALL:n="2rem",t="1.5rem",r="1.2rem";break;case To.MEDIUM:n="2.5rem",t="2rem",r="2rem";break;case To.LARGE:n="3.5rem",t="3rem",r="2.5rem";break;default:n="2rem",t="1.5rem",r="1.2rem"}return{height:n,paddingLeftAndRight:t,fontSize:r}},Ko=r.button(zo||(zo=o(["\n  flex: ",";\n  white-space: nowrap;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  height: ",";\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n  border: ",";\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: ",";\n    background-color: ",";\n    border: ",";\n  }\n"])),(function(e){return e.streched&&"1"}),(function(e){return"0 ".concat(Yo(e.buttonSize).paddingLeftAndRight)}),(function(e){return Yo(e.buttonSize).height}),(function(e){return Yo(e.buttonSize).fontSize}),(function(e){return Wo(e.buttonType).backgroundColor}),(function(e){return Wo(e.buttonType).color}),(function(e){return Wo(e.buttonType).border}),(function(e){return Wo(e.buttonType).hoverColor}),(function(e){return Wo(e.buttonType).hoverBackgroundColor}),(function(e){return Wo(e.buttonType).hoverBorder})),Bo=function(n){var t=n.children,r=n.buttonType,o=void 0===r?Ro.PRIMARY:r,i=n.buttonSize,c=void 0===i?To.MEDIUM:i,u=n.onClick,l=n.streched;return e.createElement(Ko,{buttonType:o,buttonSize:c,onClick:u,streched:l},t)},Ho=r.a(Po||(Po=o(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: ","px;\n  color: ",";\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.3s;\n  &:hover {\n    color: ",";\n  }\n\n  &:hover svg path {\n    fill: ",";\n  }\n"])),(function(e){var n;return null!==(n=e.fontSize)&&void 0!==n?n:16}),(function(e){var n;return null!==(n=e.color)&&void 0!==n?n:ho.BLACK}),(function(e){var n;return null!==(n=e.hoverColor)&&void 0!==n?n:ho.GREY}),(function(e){var n;return null!==(n=e.hoverColor)&&void 0!==n?n:ho.GREY})),Go=Ie,Vo=p,Uo=D(D.bind),Xo=_,$o=Array.isArray||function(e){return"Array"==Xo(e)},qo={};qo[an("toStringTag")]="z";var Zo="[object z]"===String(qo),Jo=Zo,Qo=Z,ei=_,ni=an("toStringTag"),ti=Object,ri="Arguments"==ei(function(){return arguments}()),oi=Jo?ei:function(e){var n,t,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=ti(e),ni))?t:ri?ei(n):"Object"==(r=ei(n))&&Qo(n.callee)?"Arguments":r},ii=D,ci=s,ui=Z,li=oi,ai=st,fi=function(){},si=[],di=oe("Reflect","construct"),pi=/^\s*(?:class|function)\b/,mi=ii(pi.exec),vi=!pi.exec(fi),gi=function(e){if(!ui(e))return!1;try{return di(fi,si,e),!0}catch(e){return!1}},hi=function(e){if(!ui(e))return!1;switch(li(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return vi||!!mi(pi,ai(e))}catch(e){return!0}};hi.sham=!0;var bi=!di||ci((function(){var e;return gi(gi.call)||!gi(Object)||!gi((function(){e=!0}))||e}))?hi:gi,yi=$o,Ei=bi,Ci=ee,Si=an("species"),Ai=Array,Oi=function(e){var n;return yi(e)&&(n=e.constructor,(Ei(n)&&(n===Ai||yi(n.prototype))||Ci(n)&&null===(n=n[Si]))&&(n=void 0)),void 0===n?Ai:n},ki=function(e,n){return new(Oi(e))(0===n?0:n)},wi=function(e,n){return Go(e),void 0===n?e:Vo?Uo(e,n):function(){return e.apply(n,arguments)}},Ii=W,Ri=Be,Ti=lr,zi=ki,xi=D([].push),_i=function(e){var n=1==e,t=2==e,r=3==e,o=4==e,i=6==e,c=7==e,u=5==e||i;return function(l,a,f,s){for(var d,p,m=Ri(l),v=Ii(m),g=wi(a,f),h=Ti(v),b=0,y=s||zi,E=n?y(l,h):t||c?y(l,0):void 0;h>b;b++)if((u||b in v)&&(p=g(d=v[b],b,m),e))if(n)E[b]=p;else if(p)switch(e){case 3:return!0;case 5:return d;case 6:return b;case 2:xi(E,d)}else switch(e){case 4:return!1;case 7:xi(E,d)}return i?-1:r||o?o:E}},ji={forEach:_i(0),map:_i(1),filter:_i(2),some:_i(3),every:_i(4),find:_i(5),findIndex:_i(6),filterReject:_i(7)},Ni=s,Di=pe,Mi=an("species"),Li=function(e){return Di>=51||!Ni((function(){var n=[];return(n.constructor={})[Mi]=function(){return{foo:1}},1!==n[e](Boolean).foo}))},Fi=ji.map;qr({target:"Array",proto:!0,forced:!Li("map")},{map:function(e){return Fi(this,e,arguments.length>1?arguments[1]:void 0)}});var Pi,Wi,Yi,Ki,Bi,Hi,Gi={SETTINGS:["M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"],ADMIN_PANEL:["M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z","M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"],CHEVRON_RIGHT:["M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"],CHEVRON_DOWN:["M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"],ARROW_BACK:["M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"],COOKIE:["M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z"]},Vi=r.svg(Pi||(Pi=o(["\n  width: ","px;\n  height: ","px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  path {\n    transition: all 0.3s;\n    fill: ",";;\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(e){var n;return null!==(n=e.size)&&void 0!==n?n:24}),(function(e){var n;return null!==(n=e.size)&&void 0!==n?n:24}),(function(e){var n;return null!==(n=e.color)&&void 0!==n?n:ho.BLACK}),(function(e){var n;return null!==(n=e.hoverColor)&&void 0!==n?n:ho.GREY})),Ui=function(n){var t=n.size,r=n.color,o=n.hoverColor,i=n.icon;return e.createElement(Vi,{viewBox:"0 0 24 24",size:t,color:r,hoverColor:o},i.map((function(n,t){return e.createElement("path",{key:t,d:n})})))},Xi=function(n){var t=n.children,r=n.url,o=n.onClick,i=n.icon,c=n.iconSize,u=n.color,l=n.hoverColor,a=n.fontSize;return e.createElement(Ho,{href:r,onClick:o,color:u,hoverColor:l,fontSize:a},i&&e.createElement(Ui,{icon:i,color:u,hoverColor:l,size:null!=c?c:18}),t)},$i=r.div(Wi||(Wi=o(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n"]))),qi=r.div(Yi||(Yi=o(["\n  display: flex;\n  justify-content: space-between;\n"]))),Zi=r.div(Ki||(Ki=o(["\n  font-size: 12px;\n  color: ",";\n  margin: 0.5rem;\n  text-align: justify;\n  \n  & p {\n    margin-top: 0.5rem;\n  }\n"])),ho.GREY),Ji=r.input.attrs({type:"checkbox"})(Bi||(Bi=o(["\n  display: none;\n  width: 0;\n  height: 0;\n"]))),Qi=r.label(Hi||(Hi=o(["\n  width: 30px;\n  min-width: 30px;\n  height: 20px;\n  display: inline-block;\n  background-color: ",';\n  border-radius: 13px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.5s;\n  //box-shadow: 0 0 20px #477a8550;\n\n  &::after {\n    content: "";\n    width: 16px;\n    height: 16px;\n    background-color: ',";\n    position: absolute;\n    border-radius: 11px;\n    top: 2px;\n    left: ","px;\n    transition: 0.5s;\n  }\n"])),(function(e){return e.checked?e.enabledBackgroundColor:e.disabledBackgroundColor}),(function(e){return e.checked?e.enabledForegroundColor:e.disabledForegroundColor}),(function(e){return e.checked?12:2})),ec=function(t){var r=t.id,o=t.onClick,c=t.enabled,u=void 0!==c&&c,l=t.disabledBackgroundColor,a=void 0===l?ho.DISABLED:l,f=t.disabledForegroundColor,s=void 0===f?ho.WHITE:f,d=t.enabledBackgroundColor,p=void 0===d?ho.SECONDARY:d,m=t.enabledForegroundColor,v=void 0===m?ho.WHITE:m,g=i(n(u),2),h=g[0],b=g[1];return e.createElement(e.Fragment,null,e.createElement(Qi,{htmlFor:r,checked:h,disabledBackgroundColor:a,disabledForegroundColor:s,enabledBackgroundColor:p,enabledForegroundColor:v}),e.createElement(Ji,{id:r,checked:h,onChange:function(){b((function(e){return!e})),o()}}))},nc=function(t){var r=t.sectionName,o=t.alwaysActive,c=t.toggleId,u=t.toggleOnClick,l=t.sectionDescription,a=t.toggleEnabled,f=i(n(!1),2),s=f[0],d=f[1];return e.createElement($i,null,e.createElement(qi,null,e.createElement(Xi,{icon:s?Gi.CHEVRON_DOWN:Gi.CHEVRON_RIGHT,iconSize:22,onClick:function(){d((function(e){return!e}))},fontSize:14},r),e.createElement(e.Fragment,null,o&&"Immer aktiv",c&&u&&e.createElement(ec,{id:c,onClick:u,enabled:null!=a&&a}))),s&&e.createElement(Zi,null,l))},tc=TypeError,rc=yn,oc=Dn,ic=A,cc=qr,uc=s,lc=$o,ac=ee,fc=Be,sc=lr,dc=function(e){if(e>9007199254740991)throw tc("Maximum allowed index exceeded");return e},pc=function(e,n,t){var r=rc(n);r in e?oc.f(e,r,ic(0,t)):e[r]=t},mc=ki,vc=Li,gc=pe,hc=an("isConcatSpreadable"),bc=gc>=51||!uc((function(){var e=[];return e[hc]=!1,e.concat()[0]!==e})),yc=vc("concat"),Ec=function(e){if(!ac(e))return!1;var n=e[hc];return void 0!==n?!!n:lc(e)};cc({target:"Array",proto:!0,arity:1,forced:!bc||!yc},{concat:function(e){var n,t,r,o,i,c=fc(this),u=mc(c,0),l=0;for(n=-1,r=arguments.length;n<r;n++)if(Ec(i=-1===n?c:arguments[n]))for(o=sc(i),dc(l+o),t=0;t<o;t++,l++)t in i&&pc(u,l,i[t]);else dc(l+1),pc(u,l++,i);return u.length=l,u}});var Cc={},Sc=yr,Ac=Er,Oc=Object.keys||function(e){return Sc(e,Ac)},kc=d,wc=Mn,Ic=Dn,Rc=Wn,Tc=U,zc=Oc;Cc.f=kc&&!wc?Object.defineProperties:function(e,n){Rc(e);for(var t,r=Tc(n),o=zc(n),i=o.length,c=0;i>c;)Ic.f(e,t=o[c++],r[t]);return e};var xc,_c=oe("document","documentElement"),jc=Wn,Nc=Cc,Dc=Er,Mc=yt,Lc=_c,Fc=An,Pc=bt("IE_PROTO"),Wc=function(){},Yc=function(e){return"<script>"+e+"<\/script>"},Kc=function(e){e.write(Yc("")),e.close();var n=e.parentWindow.Object;return e=null,n},Bc=function(){try{xc=new ActiveXObject("htmlfile")}catch(e){}var e,n;Bc="undefined"!=typeof document?document.domain&&xc?Kc(xc):((n=Fc("iframe")).style.display="none",Lc.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(Yc("document.F=Object")),e.close(),e.F):Kc(xc);for(var t=Dc.length;t--;)delete Bc.prototype[Dc[t]];return Bc()};Mc[Pc]=!0;var Hc=an,Gc=Object.create||function(e,n){var t;return null!==e?(Wc.prototype=jc(e),t=new Wc,Wc.prototype=null,t[Pc]=e):t=Bc(),void 0===n?t:Nc.f(t,n)},Vc=Dn.f,Uc=Hc("unscopables"),Xc=Array.prototype;null==Xc[Uc]&&Vc(Xc,Uc,{configurable:!0,value:Gc(null)});var $c=qr,qc=ji.find,Zc=function(e){Xc[Uc][e]=!0},Jc=!0;"find"in[]&&Array(1).find((function(){Jc=!1})),$c({target:"Array",proto:!0,forced:Jc},{find:function(e){return qc(this,e,arguments.length>1?arguments[1]:void 0)}}),Zc("find");var Qc=oi,eu=Zo?{}.toString:function(){return"[object "+Qc(this)+"]"};Zo||$t(Object.prototype,"toString",eu,{unsafe:!0});var nu,tu,ru=oi,ou=String,iu=ee,cu=_,uu=an("match"),lu=function(e){var n;return iu(e)&&(void 0!==(n=e[uu])?!!n:"RegExp"==cu(e))},au=TypeError,fu=an("match"),su=qr,du=D,pu=f.f,mu=cr,vu=function(e){if("Symbol"===ru(e))throw TypeError("Cannot convert a Symbol value to a string");return ou(e)},gu=function(e){if(lu(e))throw au("The method doesn't accept regular expressions");return e},hu=H,bu=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[fu]=!1,"/./"[e](n)}catch(e){}}return!1},yu=du("".startsWith),Eu=du("".slice),Cu=Math.min,Su=bu("startsWith");su({target:"String",proto:!0,forced:!!(Su||(nu=pu(String.prototype,"startsWith"),!nu||nu.writable))&&!Su},{startsWith:function(e){var n=vu(hu(this));gu(e);var t=mu(Cu(arguments.length>1?arguments[1]:void 0,n.length)),r=vu(e);return yu?yu(n,r,t):Eu(n,t,t+r.length)===r}}),function(e){e.TC_COOKIE_CONSENT="tc_cookie_consent",e.TC_COOKIE_NECESSARY="tc_cookie_necessary",e.TC_COOKIE_FUNCTIONAL="tc_cookie_functional",e.TC_COOKIE_ANALYSIS="tc_cookie_analysis",e.TC_COOKIE_ADVERTISEMENT="tc_cookie_advertisement"}(tu||(tu={}));var Au,Ou,ku,wu=function(e,n){document.cookie="".concat(e,"=").concat(n,"; max-age=").concat(15552e3,"; sameSite=none; Secure")},Iu=function(e,n,t){wu(tu.TC_COOKIE_CONSENT,!0),wu(tu.TC_COOKIE_NECESSARY,!0),wu(tu.TC_COOKIE_FUNCTIONAL,e),wu(tu.TC_COOKIE_ANALYSIS,n),wu(tu.TC_COOKIE_ADVERTISEMENT,t)},Ru=function(e){var n,t=null===(n=document.cookie.split("; ").find((function(n){return n.startsWith("".concat(e,"="))})))||void 0===n?void 0:n.split("=")[1];return!!t&&"true"===t},Tu=function(r){var o=r.onCookieAccept,c=i(n(!1),2),u=c[0],l=c[1],a=i(n(!1),2),f=a[0],s=a[1],d=i(n(!1),2),p=d[0],m=d[1],v=i(n(!1),2),g=v[0],h=v[1];t((function(){var e={functional:Ru(tu.TC_COOKIE_FUNCTIONAL),analysis:Ru(tu.TC_COOKIE_ANALYSIS),advertisement:Ru(tu.TC_COOKIE_ADVERTISEMENT)},n=e.analysis,t=e.advertisement;s(e.functional),m(n),h(t)}),[]);return e.createElement(Io,null,e.createElement(xo,null,e.createElement(_o,null,"Wir respektieren Ihre Privatsphäre"),e.createElement(jo,null,e.createElement("p",null,'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte einzusetzen und unseren Datenverkehr zu analysieren. Wenn Sie auf „Alle akzeptieren" klicken, stimmen Sie der Anwendung von Cookies zu.'),e.createElement(No,null,e.createElement(Xi,{icon:u?Gi.ARROW_BACK:Gi.SETTINGS,color:ho.SECONDARY,hoverColor:ho.SECONDARY_DARKER,onClick:function(){l((function(e){return!e}))},fontSize:14},"Anpassen"),e.createElement(Xi,{url:"/legal/datenschutz",fontSize:14},"Datenschutz"),e.createElement(Xi,{url:"/legal/impressum",fontSize:14},"Impressum")),u&&e.createElement(Lo,null,e.createElement(nc,{sectionName:"Notwendig",sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Notwendige Cookies sind für die Grundfunktionen der Website von entscheidender Bedeutung. Ohne sie kann die Website nicht in der vorgesehenen Weise funktionieren."),e.createElement("p",null,"Diese Cookies speichern keine personenbezogenen Daten.")),alwaysActive:!0}),e.createElement(nc,{sectionName:"Funktionale",toggleId:"functionale",toggleOnClick:function(){return s((function(e){return!e}))},toggleEnabled:f,sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Funktionale Cookies unterstützen bei der Ausführung bestimmter Funktionen, z. B. beim Teilen des Inhalts der Website auf Social Media-Plattformen, beim Sammeln von Feedbacks und anderen Funktionen von Drittanbietern."))}),e.createElement(nc,{sectionName:"Analyse",toggleId:"analyse",toggleOnClick:function(){return m((function(e){return!e}))},toggleEnabled:p,sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Analyse-Cookies werden verwendet um zu verstehen, wie Besucher mit der Website interagieren. Diese Cookies dienen zu Aussagen über die Anzahl der Besucher, Absprungrate, Herkunft der Besucher usw."))}),e.createElement(nc,{sectionName:"Werbe",toggleId:"werbe",toggleOnClick:function(){return h((function(e){return!e}))},toggleEnabled:g,sectionDescription:e.createElement(e.Fragment,null,e.createElement("p",null,"Werbe-Cookies werden verwendet, um Besuchern auf der Grundlage der von ihnen zuvor besuchten Seiten maßgeschneiderte Werbung zu liefern und die Wirksamkeit von Werbekampagne nzu analysieren."))}),e.createElement(Fo,null,e.createElement(Xi,{fontSize:14,color:ho.SECONDARY,hoverColor:ho.SECONDARY_DARKER,onClick:function(){o(),Iu(f,p,g)}},"Ausgewählte akzeptieren")))),e.createElement(Do,null,e.createElement(Mo,null,e.createElement(Bo,{buttonSize:To.SMALL,buttonType:Ro.PRIMARY_INVERSE,streched:!0,onClick:function(){o(),Iu(!1,!1,!1)}},"Alle ablehnen"),e.createElement(Bo,{buttonSize:To.SMALL,streched:!0,onClick:function(){o(),Iu(!0,!0,!0)}},"Alle zulassen")),e.createElement(Xi,{url:"/legal/cookie-policy",fontSize:14},"Cookie policy"))))},zu=r.div(Au||(Au=o(["\n  display: flex;\n  flex-direction: column;\n  margin: 2rem 0;\n  gap: 0.5rem;\n"]))),xu=r.div(Ou||(Ou=o(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n"]))),_u=r.div(ku||(ku=o(["\n  display: flex;\n  justify-content: center;\n  font-size: 0.6rem;\n  color: ",";\n"])),ho.GREY),ju=function(){var r=i(n(!1),2),o=r[0],c=r[1];t((function(){setTimeout((function(){c(!Ru(tu.TC_COOKIE_CONSENT))}),0)}),[]);return e.createElement(zu,null,o&&e.createElement(Tu,{onCookieAccept:function(){c(!1)}}),e.createElement(xu,null,e.createElement(Xi,{fontSize:12,url:"/legal/impressum",color:ho.WHITE},"Impressum"),e.createElement(Xi,{fontSize:12,url:"/legal/datenschutz",color:ho.WHITE},"Datenschutz"),e.createElement(Xi,{fontSize:12,url:"/legal/cookie-policy",color:ho.WHITE},"Cookie policy"),e.createElement(Xi,{fontSize:12,onClick:function(){c(!0)},icon:Gi.COOKIE,color:ho.SECONDARY,hoverColor:ho.SECONDARY_DARKER},"Cookie Einstellungen")),e.createElement(_u,null,"© 2023 Twinklecube. Alle Rechte vorbehalten."))};export{To as ButtonSize,Ro as ButtonType,ho as Colors,ju as Footer,Gi as Icons};
