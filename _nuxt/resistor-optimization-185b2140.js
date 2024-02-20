(function(){"use strict";var u=typeof u<"u"?u:{},He=Object.assign({},u),Te="./this.program",te=(e,r)=>{throw r},Me=typeof window=="object",L=typeof importScripts=="function",Ye=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",A="";function Sr(e){return u.locateFile?u.locateFile(e,A):A+e}var Ce,ne,ie;if(Ye){var xe=require("fs"),Pe=require("path");L?A=Pe.dirname(A)+"/":A=__dirname+"/",Ce=(e,r)=>(e=oe(e)?new URL(e):Pe.normalize(e),xe.readFileSync(e,r?void 0:"utf8")),ie=e=>{var r=Ce(e,!0);return r.buffer||(r=new Uint8Array(r)),r},ne=(e,r,t,n=!0)=>{e=oe(e)?new URL(e):Pe.normalize(e),xe.readFile(e,n?void 0:"utf8",(i,s)=>{i?t(i):r(n?s.buffer:s)})},!u.thisProgram&&process.argv.length>1&&(Te=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),typeof module<"u"&&(module.exports=u),process.on("uncaughtException",e=>{if(e!=="unwind"&&!(e instanceof ue)&&!(e.context instanceof ue))throw e}),te=(e,r)=>{throw process.exitCode=e,r}}else(Me||L)&&(L?A=self.location.href:typeof document<"u"&&document.currentScript&&(A=document.currentScript.src),A.startsWith("blob:")?A="":A=A.substr(0,A.replace(/[?#].*/,"").lastIndexOf("/")+1),Ce=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},L&&(ie=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),ne=(e,r,t)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{if(n.status==200||n.status==0&&n.response){r(n.response);return}t()},n.onerror=t,n.send(null)});u.print||console.log.bind(console);var B=u.printErr||console.error.bind(console);Object.assign(u,He),He=null,u.arguments&&u.arguments,u.thisProgram&&(Te=u.thisProgram),u.quit&&(te=u.quit);var N;u.wasmBinary&&(N=u.wasmBinary),typeof WebAssembly!="object"&&X("no native wasm support detected");var Ve,Ae=!1,ae,R,b,q,se,$,y,ze,Le;function Rr(){var e=Ve.buffer;u.HEAP8=R=new Int8Array(e),u.HEAP16=q=new Int16Array(e),u.HEAPU8=b=new Uint8Array(e),u.HEAPU16=se=new Uint16Array(e),u.HEAP32=$=new Int32Array(e),u.HEAPU32=y=new Uint32Array(e),u.HEAPF32=ze=new Float32Array(e),u.HEAPF64=Le=new Float64Array(e)}var Be=[],Ne=[],Fr=[],qe=[];function Dr(){if(u.preRun)for(typeof u.preRun=="function"&&(u.preRun=[u.preRun]);u.preRun.length;)Ir(u.preRun.shift());le(Be)}function Or(){le(Ne)}function Wr(){le(Fr)}function kr(){if(u.postRun)for(typeof u.postRun=="function"&&(u.postRun=[u.postRun]);u.postRun.length;)jr(u.postRun.shift());le(qe)}function Ir(e){Be.unshift(e)}function Ur(e){Ne.unshift(e)}function jr(e){qe.unshift(e)}var U=0,G=null;function Hr(e){var r;U++,(r=u.monitorRunDependencies)==null||r.call(u,U)}function Mr(e){var t;if(U--,(t=u.monitorRunDependencies)==null||t.call(u,U),U==0&&G){var r=G;G=null,r()}}function X(e){var t;(t=u.onAbort)==null||t.call(u,e),e="Aborted("+e+")",B(e),Ae=!0,ae=1,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw r}var Yr="data:application/octet-stream;base64,",Ge=e=>e.startsWith(Yr),oe=e=>e.startsWith("file://"),M;M="resistor-optimization.wasm",Ge(M)||(M=Sr(M));function Xe(e){if(e==M&&N)return new Uint8Array(N);if(ie)return ie(e);throw"both async and sync fetching of the wasm failed"}function xr(e){if(!N&&(Me||L)){if(typeof fetch=="function"&&!oe(e))return fetch(e,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw`failed to load wasm binary file at '${e}'`;return r.arrayBuffer()}).catch(()=>Xe(e));if(ne)return new Promise((r,t)=>{ne(e,n=>r(new Uint8Array(n)),t)})}return Promise.resolve().then(()=>Xe(e))}function Je(e,r,t){return xr(e).then(n=>WebAssembly.instantiate(n,r)).then(t,n=>{B(`failed to asynchronously prepare wasm: ${n}`),X(n)})}function Vr(e,r,t,n){return!e&&typeof WebAssembly.instantiateStreaming=="function"&&!Ge(r)&&!oe(r)&&!Ye&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(i=>{var s=WebAssembly.instantiateStreaming(i,t);return s.then(n,function(o){return B(`wasm streaming compile failed: ${o}`),B("falling back to ArrayBuffer instantiation"),Je(r,t,n)})}):Je(r,t,n)}function zr(){var e={a:wn};function r(n,i){return T=n.exports,Ve=T.B,Rr(),or=T.G,Ur(T.C),Mr(),T}Hr();function t(n){r(n.instance)}if(u.instantiateWasm)try{return u.instantiateWasm(e,r)}catch(n){return B(`Module.instantiateWasm callback failed with error: ${n}`),!1}return Vr(N,M,e,t),{}}function ue(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var le=e=>{for(;e.length>0;)e.shift()(u)},Lr=u.noExitRuntime||!0,Ke=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Br=(e,r,t)=>{for(var n=r+t,i=r;e[i]&&!(i>=n);)++i;if(i-r>16&&e.buffer&&Ke)return Ke.decode(e.subarray(r,i));for(var s="";r<i;){var o=e[r++];if(!(o&128)){s+=String.fromCharCode(o);continue}var a=e[r++]&63;if((o&224)==192){s+=String.fromCharCode((o&31)<<6|a);continue}var l=e[r++]&63;if((o&240)==224?o=(o&15)<<12|a<<6|l:o=(o&7)<<18|a<<12|l<<6|e[r++]&63,o<65536)s+=String.fromCharCode(o);else{var c=o-65536;s+=String.fromCharCode(55296|c>>10,56320|c&1023)}}return s},Y=(e,r)=>e?Br(b,e,r):"",Nr=(e,r,t,n)=>{X(`Assertion failed: ${Y(e)}, at: `+[r?Y(r):"unknown filename",t,n?Y(n):"unknown function"])};class qr{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){y[this.ptr+4>>2]=r}get_type(){return y[this.ptr+4>>2]}set_destructor(r){y[this.ptr+8>>2]=r}get_destructor(){return y[this.ptr+8>>2]}set_caught(r){r=r?1:0,R[this.ptr+12]=r}get_caught(){return R[this.ptr+12]!=0}set_rethrown(r){r=r?1:0,R[this.ptr+13]=r}get_rethrown(){return R[this.ptr+13]!=0}init(r,t){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(t)}set_adjusted_ptr(r){y[this.ptr+16>>2]=r}get_adjusted_ptr(){return y[this.ptr+16>>2]}get_exception_ptr(){var r=Tr(this.get_type());if(r)return y[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}var Qe=0,Gr=(e,r,t)=>{var n=new qr(e);throw n.init(r,t),Qe=e,Qe},fe={},Ze=e=>{for(;e.length;){var r=e.pop(),t=e.pop();t(r)}};function J(e){return this.fromWireType(y[e>>2])}var x={},j={},ce={},er,ve=e=>{throw new er(e)},V=(e,r,t)=>{e.forEach(function(a){ce[a]=r});function n(a){var l=t(a);l.length!==e.length&&ve("Mismatched type converter count");for(var c=0;c<e.length;++c)O(e[c],l[c])}var i=new Array(r.length),s=[],o=0;r.forEach((a,l)=>{j.hasOwnProperty(a)?i[l]=j[a]:(s.push(a),x.hasOwnProperty(a)||(x[a]=[]),x[a].push(()=>{i[l]=j[a],++o,o===s.length&&n(i)}))}),s.length===0&&n(i)},Xr=e=>{var r=fe[e];delete fe[e];var t=r.rawConstructor,n=r.rawDestructor,i=r.fields,s=i.map(o=>o.getterReturnType).concat(i.map(o=>o.setterArgumentType));V([e],s,o=>{var a={};return i.forEach((l,c)=>{var v=l.fieldName,p=o[c],h=l.getter,m=l.getterContext,_=o[c+i.length],D=l.setter,E=l.setterContext;a[v]={read:S=>p.fromWireType(h(m,S)),write:(S,f)=>{var d=[];D(E,S,_.toWireType(d,f)),Ze(d)}}}),[{name:r.name,fromWireType:l=>{var c={};for(var v in a)c[v]=a[v].read(l);return n(l),c},toWireType:(l,c)=>{for(var v in a)if(!(v in c))throw new TypeError(`Missing field: "${v}"`);var p=t();for(v in a)a[v].write(p,c[v]);return l!==null&&l.push(n,p),p},argPackAdvance:W,readValueFromPointer:J,destructorFunction:n}]})},Jr=(e,r,t,n,i)=>{},Kr=()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);rr=e},rr,P=e=>{for(var r="",t=e;b[t];)r+=rr[b[t++]];return r},z,g=e=>{throw new z(e)};function Qr(e,r,t={}){var n=r.name;if(e||g(`type "${n}" must have a positive integer typeid pointer`),j.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;g(`Cannot register type '${n}' twice`)}if(j[e]=r,delete ce[e],x.hasOwnProperty(e)){var i=x[e];delete x[e],i.forEach(s=>s())}}function O(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Qr(e,r,t)}var W=8,Zr=(e,r,t,n)=>{r=P(r),O(e,{name:r,fromWireType:function(i){return!!i},toWireType:function(i,s){return s?t:n},argPackAdvance:W,readValueFromPointer:function(i){return this.fromWireType(b[i])},destructorFunction:null})},et=e=>({count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}),Ee=e=>{function r(t){return t.$$.ptrType.registeredClass.name}g(r(e)+" instance already deleted")},Se=!1,tr=e=>{},rt=e=>{e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)},nr=e=>{e.count.value-=1;var r=e.count.value===0;r&&rt(e)},ir=(e,r,t)=>{if(r===t)return e;if(t.baseClass===void 0)return null;var n=ir(e,r,t.baseClass);return n===null?null:t.downcast(n)},ar={},tt=()=>Object.keys(Z).length,nt=()=>{var e=[];for(var r in Z)Z.hasOwnProperty(r)&&e.push(Z[r]);return e},K=[],Re=()=>{for(;K.length;){var e=K.pop();e.$$.deleteScheduled=!1,e.delete()}},Q,it=e=>{Q=e,K.length&&Q&&Q(Re)},at=()=>{u.getInheritedInstanceCount=tt,u.getLiveInheritedInstances=nt,u.flushPendingDeletes=Re,u.setDelayFunction=it},Z={},st=(e,r)=>{for(r===void 0&&g("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r},ot=(e,r)=>(r=st(e,r),Z[r]),de=(e,r)=>{(!r.ptrType||!r.ptr)&&ve("makeClassHandle requires ptr and ptrType");var t=!!r.smartPtrType,n=!!r.smartPtr;return t!==n&&ve("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ee(Object.create(e,{$$:{value:r,writable:!0}}))};function ut(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=ot(this.registeredClass,r);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var n=t.clone();return this.destructor(e),n}function i(){return this.isSmartPointer?de(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):de(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var s=this.registeredClass.getActualType(r),o=ar[s];if(!o)return i.call(this);var a;this.isConst?a=o.constPointerType:a=o.pointerType;var l=ir(r,this.registeredClass,a.registeredClass);return l===null?i.call(this):this.isSmartPointer?de(a.registeredClass.instancePrototype,{ptrType:a,ptr:l,smartPtrType:this,smartPtr:e}):de(a.registeredClass.instancePrototype,{ptrType:a,ptr:l})}var ee=e=>typeof FinalizationRegistry>"u"?(ee=r=>r,e):(Se=new FinalizationRegistry(r=>{nr(r.$$)}),ee=r=>{var t=r.$$,n=!!t.smartPtr;if(n){var i={$$:t};Se.register(r,i,r)}return r},tr=r=>Se.unregister(r),ee(e)),lt=()=>{Object.assign(pe.prototype,{isAliasOf(e){if(!(this instanceof pe)||!(e instanceof pe))return!1;var r=this.$$.ptrType.registeredClass,t=this.$$.ptr;e.$$=e.$$;for(var n=e.$$.ptrType.registeredClass,i=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return r===n&&t===i},clone(){if(this.$$.ptr||Ee(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ee(Object.create(Object.getPrototypeOf(this),{$$:{value:et(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},delete(){this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&g("Object already scheduled for deletion"),tr(this),nr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&g("Object already scheduled for deletion"),K.push(this),K.length===1&&Q&&Q(Re),this.$$.deleteScheduled=!0,this}})};function pe(){}var he=(e,r)=>Object.defineProperty(r,"name",{value:e}),sr=(e,r,t)=>{if(e[r].overloadTable===void 0){var n=e[r];e[r]=function(...i){return e[r].overloadTable.hasOwnProperty(i.length)||g(`Function '${t}' called with an invalid number of arguments (${i.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[i.length].apply(this,i)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},ft=(e,r,t)=>{u.hasOwnProperty(e)?((t===void 0||u[e].overloadTable!==void 0&&u[e].overloadTable[t]!==void 0)&&g(`Cannot register public name '${e}' twice`),sr(u,e,e),u.hasOwnProperty(t)&&g(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),u[e].overloadTable[t]=r):(u[e]=r,t!==void 0&&(u[e].numArguments=t))},ct=48,vt=57,dt=e=>{if(e===void 0)return"_unknown";e=e.replace(/[^a-zA-Z0-9_]/g,"$");var r=e.charCodeAt(0);return r>=ct&&r<=vt?`_${e}`:e};function pt(e,r,t,n,i,s,o,a){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=i,this.getActualType=s,this.upcast=o,this.downcast=a,this.pureVirtualFunctions=[]}var Fe=(e,r,t)=>{for(;r!==t;)r.upcast||g(`Expected null or instance of ${t.name}, got an instance of ${r.name}`),e=r.upcast(e),r=r.baseClass;return e};function ht(e,r){if(r===null)return this.isReference&&g(`null is not a valid ${this.name}`),0;r.$$||g(`Cannot pass "${We(r)}" as a ${this.name}`),r.$$.ptr||g(`Cannot pass deleted object as a pointer of type ${this.name}`);var t=r.$$.ptrType.registeredClass,n=Fe(r.$$.ptr,t,this.registeredClass);return n}function gt(e,r){var t;if(r===null)return this.isReference&&g(`null is not a valid ${this.name}`),this.isSmartPointer?(t=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,t),t):0;(!r||!r.$$)&&g(`Cannot pass "${We(r)}" as a ${this.name}`),r.$$.ptr||g(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&r.$$.ptrType.isConst&&g(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);var n=r.$$.ptrType.registeredClass;if(t=Fe(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(r.$$.smartPtr===void 0&&g("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:g(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var i=r.clone();t=this.rawShare(t,me.toHandle(()=>i.delete())),e!==null&&e.push(this.rawDestructor,t)}break;default:g("Unsupporting sharing policy")}return t}function yt(e,r){if(r===null)return this.isReference&&g(`null is not a valid ${this.name}`),0;r.$$||g(`Cannot pass "${We(r)}" as a ${this.name}`),r.$$.ptr||g(`Cannot pass deleted object as a pointer of type ${this.name}`),r.$$.ptrType.isConst&&g(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);var t=r.$$.ptrType.registeredClass,n=Fe(r.$$.ptr,t,this.registeredClass);return n}var mt=()=>{Object.assign(ge.prototype,{getPointee(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e},destructor(e){var r;(r=this.rawDestructor)==null||r.call(this,e)},argPackAdvance:W,readValueFromPointer:J,fromWireType:ut})};function ge(e,r,t,n,i,s,o,a,l,c,v){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=n,this.isSmartPointer=i,this.pointeeType=s,this.sharingPolicy=o,this.rawGetPointee=a,this.rawConstructor=l,this.rawShare=c,this.rawDestructor=v,!i&&r.baseClass===void 0?n?(this.toWireType=ht,this.destructorFunction=null):(this.toWireType=yt,this.destructorFunction=null):this.toWireType=gt}var _t=(e,r,t)=>{u.hasOwnProperty(e)||ve("Replacing nonexistant public symbol"),u[e].overloadTable!==void 0&&t!==void 0?u[e].overloadTable[t]=r:(u[e]=r,u[e].argCount=t)},wt=(e,r,t)=>{var n=u["dynCall_"+e];return n(r,...t)},ye=[],or,ur=e=>{var r=ye[e];return r||(e>=ye.length&&(ye.length=e+1),ye[e]=r=or.get(e)),r},$t=(e,r,t=[])=>{if(e.includes("j"))return wt(e,r,t);var n=ur(r)(...t);return n},bt=(e,r)=>(...t)=>$t(e,r,t),F=(e,r)=>{e=P(e);function t(){return e.includes("j")?bt(e,r):ur(r)}var n=t();return typeof n!="function"&&g(`unknown function pointer with signature ${e}: ${r}`),n},Tt=(e,r)=>{var t=he(r,function(n){this.name=r,this.message=n;var i=new Error(n).stack;i!==void 0&&(this.stack=this.toString()+`
`+i.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},lr,fr=e=>{var r=br(e),t=P(r);return I(r),t},De=(e,r)=>{var t=[],n={};function i(s){if(!n[s]&&!j[s]){if(ce[s]){ce[s].forEach(i);return}t.push(s),n[s]=!0}}throw r.forEach(i),new lr(`${e}: `+t.map(fr).join([", "]))},Ct=(e,r,t,n,i,s,o,a,l,c,v,p,h)=>{v=P(v),s=F(i,s),a&&(a=F(o,a)),c&&(c=F(l,c)),h=F(p,h);var m=dt(v);ft(m,function(){De(`Cannot construct ${v} due to unbound types`,[n])}),V([e,r,t],n?[n]:[],_=>{var be;_=_[0];var D,E;n?(D=_.registeredClass,E=D.instancePrototype):E=pe.prototype;var S=he(v,function(...je){if(Object.getPrototypeOf(this)!==f)throw new z("Use 'new' to construct "+v);if(d.constructor_body===void 0)throw new z(v+" has no accessible constructor");var Er=d.constructor_body[je.length];if(Er===void 0)throw new z(`Tried to invoke ctor of ${v} with invalid number of parameters (${je.length}) - expected (${Object.keys(d.constructor_body).toString()}) parameters instead!`);return Er.apply(this,je)}),f=Object.create(E,{constructor:{value:S}});S.prototype=f;var d=new pt(v,S,f,h,D,s,a,c);d.baseClass&&((be=d.baseClass).__derivedClasses??(be.__derivedClasses=[]),d.baseClass.__derivedClasses.push(d));var C=new ge(v,d,!0,!1,!1),w=new ge(v+"*",d,!1,!1,!1),H=new ge(v+" const*",d,!1,!0,!1);return ar[e]={pointerType:w,constPointerType:H},_t(m,S),[C,w,H]})},cr=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(y[r+n*4>>2]);return t};function vr(e){for(var r=1;r<e.length;++r)if(e[r]!==null&&e[r].destructorFunction===void 0)return!0;return!1}function Pt(e,r){if(!(e instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);var t=he(e.name||"unknownFunctionName",function(){});t.prototype=e.prototype;var n=new t,i=e.apply(n,r);return i instanceof Object?i:n}function At(e,r,t,n){for(var i=vr(e),s=e.length,o="",a="",l=0;l<s-2;++l)o+=(l!==0?", ":"")+"arg"+l,a+=(l!==0?", ":"")+"arg"+l+"Wired";var c=`
        return function (${o}) {
        if (arguments.length !== ${s-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${s-2}');
        }`;i&&(c+=`var destructors = [];
`);var v=i?"destructors":"null",p=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];r&&(c+="var thisWired = classParam['toWireType']("+v+`, this);
`);for(var l=0;l<s-2;++l)c+="var arg"+l+"Wired = argType"+l+"['toWireType']("+v+", arg"+l+`);
`,p.push("argType"+l);if(r&&(a="thisWired"+(a.length>0?", ":"")+a),c+=(t||n?"var rv = ":"")+"invoker(fn"+(a.length>0?", ":"")+a+`);
`,i)c+=`runDestructors(destructors);
`;else for(var l=r?1:2;l<e.length;++l){var h=l===1?"thisWired":"arg"+(l-2)+"Wired";e[l].destructorFunction!==null&&(c+=`${h}_dtor(${h});
`,p.push(`${h}_dtor`))}return t&&(c+=`var ret = retType['fromWireType'](rv);
return ret;
`),c+=`}
`,[p,c]}function dr(e,r,t,n,i,s){var o=r.length;o<2&&g("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=r[1]!==null&&t!==null,l=vr(r),c=r[0].name!=="void",v=[e,g,n,i,Ze,r[0],r[1]],p=0;p<o-2;++p)v.push(r[p+2]);if(!l)for(var p=a?1:2;p<r.length;++p)r[p].destructorFunction!==null&&v.push(r[p].destructorFunction);let[h,m]=At(r,a,c,s);h.push(m);var _=Pt(Function,h)(...v);return he(e,_)}var Et=(e,r,t,n,i,s)=>{var o=cr(r,t);i=F(n,i),V([],[e],a=>{a=a[0];var l=`constructor ${a.name}`;if(a.registeredClass.constructor_body===void 0&&(a.registeredClass.constructor_body=[]),a.registeredClass.constructor_body[r-1]!==void 0)throw new z(`Cannot register multiple constructors with identical number of parameters (${r-1}) for class '${a.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return a.registeredClass.constructor_body[r-1]=()=>{De(`Cannot construct ${a.name} due to unbound types`,o)},V([],o,c=>(c.splice(1,0,null),a.registeredClass.constructor_body[r-1]=dr(l,c,null,i,s),[])),[]})},St=e=>{e=e.trim();const r=e.indexOf("(");return r!==-1?e.substr(0,r):e},Rt=(e,r,t,n,i,s,o,a,l)=>{var c=cr(t,n);r=P(r),r=St(r),s=F(i,s),V([],[e],v=>{v=v[0];var p=`${v.name}.${r}`;r.startsWith("@@")&&(r=Symbol[r.substring(2)]),a&&v.registeredClass.pureVirtualFunctions.push(r);function h(){De(`Cannot call ${p} due to unbound types`,c)}var m=v.registeredClass.instancePrototype,_=m[r];return _===void 0||_.overloadTable===void 0&&_.className!==v.name&&_.argCount===t-2?(h.argCount=t-2,h.className=v.name,m[r]=h):(sr(m,r,p),m[r].overloadTable[t-2]=h),V([],c,D=>{var E=dr(p,D,v,s,o,l);return m[r].overloadTable===void 0?(E.argCount=t-2,m[r]=E):m[r].overloadTable[t-2]=E,[]}),[]})},Oe=[],k=[],pr=e=>{e>9&&--k[e+1]===0&&(k[e]=void 0,Oe.push(e))},Ft=()=>k.length/2-5-Oe.length,Dt=()=>{k.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=Ft},me={toValue:e=>(e||g("Cannot use deleted val. handle = "+e),k[e]),toHandle:e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const r=Oe.pop()||k.length;return k[r]=e,k[r+1]=1,r}}}},Ot={name:"emscripten::val",fromWireType:e=>{var r=me.toValue(e);return pr(e),r},toWireType:(e,r)=>me.toHandle(r),argPackAdvance:W,readValueFromPointer:J,destructorFunction:null},hr=e=>O(e,Ot),We=e=>{if(e===null)return"null";var r=typeof e;return r==="object"||r==="array"||r==="function"?e.toString():""+e},Wt=(e,r)=>{switch(r){case 4:return function(t){return this.fromWireType(ze[t>>2])};case 8:return function(t){return this.fromWireType(Le[t>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},kt=(e,r,t)=>{r=P(r),O(e,{name:r,fromWireType:n=>n,toWireType:(n,i)=>i,argPackAdvance:W,readValueFromPointer:Wt(r,t),destructorFunction:null})},It=(e,r,t)=>{switch(r){case 1:return t?n=>R[n]:n=>b[n];case 2:return t?n=>q[n>>1]:n=>se[n>>1];case 4:return t?n=>$[n>>2]:n=>y[n>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Ut=(e,r,t,n,i)=>{r=P(r);var s=v=>v;if(n===0){var o=32-8*t;s=v=>v<<o>>>o}var a=r.includes("unsigned"),l=(v,p)=>{},c;a?c=function(v,p){return l(p,this.name),p>>>0}:c=function(v,p){return l(p,this.name),p},O(e,{name:r,fromWireType:s,toWireType:c,argPackAdvance:W,readValueFromPointer:It(r,t,n!==0),destructorFunction:null})},jt=(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],i=n[r];function s(o){var a=y[o>>2],l=y[o+4>>2];return new i(R.buffer,l,a)}t=P(t),O(e,{name:t,fromWireType:s,argPackAdvance:W,readValueFromPointer:s},{ignoreDuplicateRegistrations:!0})},Ht=(e,r)=>{hr(e)},gr=(e,r,t,n)=>{if(!(n>0))return 0;for(var i=t,s=t+n-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343){var l=e.charCodeAt(++o);a=65536+((a&1023)<<10)|l&1023}if(a<=127){if(t>=s)break;r[t++]=a}else if(a<=2047){if(t+1>=s)break;r[t++]=192|a>>6,r[t++]=128|a&63}else if(a<=65535){if(t+2>=s)break;r[t++]=224|a>>12,r[t++]=128|a>>6&63,r[t++]=128|a&63}else{if(t+3>=s)break;r[t++]=240|a>>18,r[t++]=128|a>>12&63,r[t++]=128|a>>6&63,r[t++]=128|a&63}}return r[t]=0,t-i},Mt=(e,r,t)=>gr(e,b,r,t),yr=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},Yt=(e,r)=>{r=P(r);var t=r==="std::string";O(e,{name:r,fromWireType(n){var i=y[n>>2],s=n+4,o;if(t)for(var a=s,l=0;l<=i;++l){var c=s+l;if(l==i||b[c]==0){var v=c-a,p=Y(a,v);o===void 0?o=p:(o+=String.fromCharCode(0),o+=p),a=c+1}}else{for(var h=new Array(i),l=0;l<i;++l)h[l]=String.fromCharCode(b[s+l]);o=h.join("")}return I(n),o},toWireType(n,i){i instanceof ArrayBuffer&&(i=new Uint8Array(i));var s,o=typeof i=="string";o||i instanceof Uint8Array||i instanceof Uint8ClampedArray||i instanceof Int8Array||g("Cannot pass non-string to std::string"),t&&o?s=yr(i):s=i.length;var a=Ie(4+s+1),l=a+4;if(y[a>>2]=s,t&&o)Mt(i,l,s+1);else if(o)for(var c=0;c<s;++c){var v=i.charCodeAt(c);v>255&&(I(l),g("String has UTF-16 code units that do not fit in 8 bits")),b[l+c]=v}else for(var c=0;c<s;++c)b[l+c]=i[c];return n!==null&&n.push(I,a),a},argPackAdvance:W,readValueFromPointer:J,destructorFunction(n){I(n)}})},mr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,xt=(e,r)=>{for(var t=e,n=t>>1,i=n+r/2;!(n>=i)&&se[n];)++n;if(t=n<<1,t-e>32&&mr)return mr.decode(b.subarray(e,t));for(var s="",o=0;!(o>=r/2);++o){var a=q[e+o*2>>1];if(a==0)break;s+=String.fromCharCode(a)}return s},Vt=(e,r,t)=>{if(t??(t=2147483647),t<2)return 0;t-=2;for(var n=r,i=t<e.length*2?t/2:e.length,s=0;s<i;++s){var o=e.charCodeAt(s);q[r>>1]=o,r+=2}return q[r>>1]=0,r-n},zt=e=>e.length*2,Lt=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var i=$[e+t*4>>2];if(i==0)break;if(++t,i>=65536){var s=i-65536;n+=String.fromCharCode(55296|s>>10,56320|s&1023)}else n+=String.fromCharCode(i)}return n},Bt=(e,r,t)=>{if(t??(t=2147483647),t<4)return 0;for(var n=r,i=n+t-4,s=0;s<e.length;++s){var o=e.charCodeAt(s);if(o>=55296&&o<=57343){var a=e.charCodeAt(++s);o=65536+((o&1023)<<10)|a&1023}if($[r>>2]=o,r+=4,r+4>i)break}return $[r>>2]=0,r-n},Nt=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},qt=(e,r,t)=>{t=P(t);var n,i,s,o;r===2?(n=xt,i=Vt,o=zt,s=a=>se[a>>1]):r===4&&(n=Lt,i=Bt,o=Nt,s=a=>y[a>>2]),O(e,{name:t,fromWireType:a=>{for(var l=y[a>>2],c,v=a+4,p=0;p<=l;++p){var h=a+4+p*r;if(p==l||s(h)==0){var m=h-v,_=n(v,m);c===void 0?c=_:(c+=String.fromCharCode(0),c+=_),v=h+r}}return I(a),c},toWireType:(a,l)=>{typeof l!="string"&&g(`Cannot pass non-string to C++ string type ${t}`);var c=o(l),v=Ie(4+c+r);return y[v>>2]=c/r,i(l,v+4,c+r),a!==null&&a.push(I,v),v},argPackAdvance:W,readValueFromPointer:J,destructorFunction(a){I(a)}})},Gt=(e,r,t,n,i,s)=>{fe[e]={name:P(r),rawConstructor:F(t,n),rawDestructor:F(i,s),fields:[]}},Xt=(e,r,t,n,i,s,o,a,l,c)=>{fe[e].fields.push({fieldName:P(r),getterReturnType:t,getter:F(n,i),getterContext:s,setterArgumentType:o,setter:F(a,l),setterContext:c})},Jt=(e,r)=>{r=P(r),O(e,{isVoid:!0,name:r,argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},Kt=e=>{e>9&&(k[e+1]+=1)},Qt=(e,r)=>{var t=j[e];return t===void 0&&g(`${r} has unknown type ${fr(e)}`),t},Zt=(e,r)=>{e=Qt(e,"_emval_take_value");var t=e.readValueFromPointer(r);return me.toHandle(t)},en=()=>{X("")},rn=(e,r,t)=>b.copyWithin(e,r,r+t),tn=e=>{X("OOM")},nn=e=>{b.length,tn()},ke={},an=()=>Te||"./this.program",re=()=>{if(!re.strings){var e=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:e,_:an()};for(var t in ke)ke[t]===void 0?delete r[t]:r[t]=ke[t];var n=[];for(var t in r)n.push(`${t}=${r[t]}`);re.strings=n}return re.strings},sn=(e,r)=>{for(var t=0;t<e.length;++t)R[r++]=e.charCodeAt(t);R[r]=0},on=(e,r)=>{var t=0;return re().forEach((n,i)=>{var s=r+t;y[e+i*4>>2]=s,sn(n,s),t+=n.length+1}),0},un=(e,r)=>{var t=re();y[e>>2]=t.length;var n=0;return t.forEach(i=>n+=i.length+1),y[r>>2]=n,0},_e=e=>e%4===0&&(e%100!==0||e%400===0),ln=(e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t},_r=[31,29,31,30,31,30,31,31,30,31,30,31],wr=[31,28,31,30,31,30,31,31,30,31,30,31],fn=(e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=_e(t.getFullYear()),i=t.getMonth(),s=(n?_r:wr)[i];if(r>s-t.getDate())r-=s-t.getDate()+1,t.setDate(1),i<11?t.setMonth(i+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1));else return t.setDate(t.getDate()+r),t}return t};function cn(e,r,t){var n=t>0?t:yr(e)+1,i=new Array(n),s=gr(e,i,0,i.length);return r&&(i.length=s),i}var vn=(e,r)=>{R.set(e,r)},dn=(e,r,t,n)=>{var i=y[n+40>>2],s={tm_sec:$[n>>2],tm_min:$[n+4>>2],tm_hour:$[n+8>>2],tm_mday:$[n+12>>2],tm_mon:$[n+16>>2],tm_year:$[n+20>>2],tm_wday:$[n+24>>2],tm_yday:$[n+28>>2],tm_isdst:$[n+32>>2],tm_gmtoff:$[n+36>>2],tm_zone:i?Y(i):""},o=Y(t),a={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var l in a)o=o.replace(new RegExp(l,"g"),a[l]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=["January","February","March","April","May","June","July","August","September","October","November","December"];function p(f,d,C){for(var w=typeof f=="number"?f.toString():f||"";w.length<d;)w=C[0]+w;return w}function h(f,d){return p(f,d,"0")}function m(f,d){function C(H){return H<0?-1:H>0?1:0}var w;return(w=C(f.getFullYear()-d.getFullYear()))===0&&(w=C(f.getMonth()-d.getMonth()))===0&&(w=C(f.getDate()-d.getDate())),w}function _(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function D(f){var d=fn(new Date(f.tm_year+1900,0,1),f.tm_yday),C=new Date(d.getFullYear(),0,4),w=new Date(d.getFullYear()+1,0,4),H=_(C),be=_(w);return m(H,d)<=0?m(be,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var E={"%a":f=>c[f.tm_wday].substring(0,3),"%A":f=>c[f.tm_wday],"%b":f=>v[f.tm_mon].substring(0,3),"%B":f=>v[f.tm_mon],"%C":f=>{var d=f.tm_year+1900;return h(d/100|0,2)},"%d":f=>h(f.tm_mday,2),"%e":f=>p(f.tm_mday,2," "),"%g":f=>D(f).toString().substring(2),"%G":D,"%H":f=>h(f.tm_hour,2),"%I":f=>{var d=f.tm_hour;return d==0?d=12:d>12&&(d-=12),h(d,2)},"%j":f=>h(f.tm_mday+ln(_e(f.tm_year+1900)?_r:wr,f.tm_mon-1),3),"%m":f=>h(f.tm_mon+1,2),"%M":f=>h(f.tm_min,2),"%n":()=>`
`,"%p":f=>f.tm_hour>=0&&f.tm_hour<12?"AM":"PM","%S":f=>h(f.tm_sec,2),"%t":()=>"	","%u":f=>f.tm_wday||7,"%U":f=>{var d=f.tm_yday+7-f.tm_wday;return h(Math.floor(d/7),2)},"%V":f=>{var d=Math.floor((f.tm_yday+7-(f.tm_wday+6)%7)/7);if((f.tm_wday+371-f.tm_yday-2)%7<=2&&d++,d){if(d==53){var w=(f.tm_wday+371-f.tm_yday)%7;w!=4&&(w!=3||!_e(f.tm_year))&&(d=1)}}else{d=52;var C=(f.tm_wday+7-f.tm_yday-1)%7;(C==4||C==5&&_e(f.tm_year%400-1))&&d++}return h(d,2)},"%w":f=>f.tm_wday,"%W":f=>{var d=f.tm_yday+7-(f.tm_wday+6)%7;return h(Math.floor(d/7),2)},"%y":f=>(f.tm_year+1900).toString().substring(2),"%Y":f=>f.tm_year+1900,"%z":f=>{var d=f.tm_gmtoff,C=d>=0;return d=Math.abs(d)/60,d=d/60*100+d%60,(C?"+":"-")+("0000"+d).slice(-4)},"%Z":f=>f.tm_zone,"%%":()=>"%"};o=o.replace(/%%/g,"\0\0");for(var l in E)o.includes(l)&&(o=o.replace(new RegExp(l,"g"),E[l](s)));o=o.replace(/\0\0/g,"%");var S=cn(o,!1);return S.length>r?0:(vn(S,e),S.length-1)},pn=(e,r,t,n,i)=>dn(e,r,t,n),hn=0,gn=()=>Lr||hn>0,yn=e=>{var r;ae=e,gn()||((r=u.onExit)==null||r.call(u,e),Ae=!0),te(e,new ue(e))},mn=(e,r)=>{ae=e,yn(e)},_n=e=>{if(e instanceof ue||e=="unwind")return ae;te(1,e)};er=u.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},Kr(),z=u.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},lt(),at(),mt(),lr=u.UnboundTypeError=Tt(Error,"UnboundTypeError"),Dt();var wn={d:Nr,e:Gr,A:Xr,q:Jr,y:Zr,i:Ct,h:Et,c:Rt,x:hr,k:kt,b:Ut,a:jt,w:Ht,l:Yt,f:qt,n:Gt,m:Xt,z:Jt,o:pr,g:Kt,p:Zt,j:en,v:rn,u:nn,s:on,t:un,r:pn},T=zr(),$r=u._main=(e,r)=>($r=u._main=T.D)(e,r),Ie=e=>(Ie=T.E)(e),br=e=>(br=T.F)(e),I=e=>(I=T.H)(e),Tr=e=>(Tr=T.I)(e);u.dynCall_viijii=(e,r,t,n,i,s,o)=>(u.dynCall_viijii=T.J)(e,r,t,n,i,s,o),u.dynCall_iiiiij=(e,r,t,n,i,s,o)=>(u.dynCall_iiiiij=T.K)(e,r,t,n,i,s,o),u.dynCall_iiiiijj=(e,r,t,n,i,s,o,a,l)=>(u.dynCall_iiiiijj=T.L)(e,r,t,n,i,s,o,a,l),u.dynCall_iiiiiijj=(e,r,t,n,i,s,o,a,l,c)=>(u.dynCall_iiiiiijj=T.M)(e,r,t,n,i,s,o,a,l,c);var we;G=function e(){we||Cr(),we||(G=e)};function $n(){var e=$r,r=0,t=0;try{var n=e(r,t);return mn(n,!0),n}catch(i){return _n(i)}}function Cr(){if(U>0||(Dr(),U>0))return;function e(){we||(we=!0,u.calledRun=!0,!Ae&&(Or(),Wr(),u.onRuntimeInitialized&&u.onRuntimeInitialized(),Pr&&$n(),kr()))}u.setStatus?(u.setStatus("Running..."),setTimeout(function(){setTimeout(function(){u.setStatus("")},1),e()},1)):e()}if(u.preInit)for(typeof u.preInit=="function"&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();var Pr=!0;u.noInitialRun&&(Pr=!1),Cr();let $e=null,Ue=[];u.onRuntimeInitialized=function(){for(const e of Ue)Ar(e);Ue=[]},self.addEventListener("message",function(e){u.calledRun?Ar(e):Ue.push(e)});function Ar(e){if(e.data.type==="updateResistorList"){$e!==null&&$e.delete();const r=new u.DoubleVector;for(const t of new Set(e.data.resistors))r.push_back(t);$e=new u.ResistanceOptimizer(r),r.delete()}else if(e.data.type==="calculate"){const r=$e.optimize(e.data.targetResistance,e.data.maxResistors);postMessage(r)}}})();
