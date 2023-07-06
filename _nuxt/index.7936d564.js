import{_ as d,k as a,l as r,z as g,A as h,m as e,x as v,y as x,F as V,B as k,v as b,C as R,t as L,q as m}from"./entry.73149179.js";const $={props:{modelValue:{type:Number,default:null}},emits:["update:modelValue"],data(){return{resistance:this.modelValue}},watch:{resistance(t){localStorage.setItem("targetResistance",JSON.stringify(t)),this.$emit("update:modelValue",parseFloat(t))}}},N=t=>(v("data-v-648000fe"),t=t(),x(),t),M={class:"input-container"},E=N(()=>e("h2",null,"Target resistance",-1));function J(t,s,l,_,n,o){return a(),r("div",M,[E,g(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>n.resistance=i),class:"input-field",type:"number",min:"0.01",step:"0.01"},null,512),[[h,n.resistance]])])}const w=d($,[["render",J],["__scopeId","data-v-648000fe"]]);const O={props:{modelValue:{type:Number,default:null}},emits:["update:modelValue"],data(){return{maxResistors:this.modelValue}},watch:{maxResistors(t){localStorage.setItem("maxResistors",JSON.stringify(t)),this.$emit("update:modelValue",parseInt(t))}}},W=t=>(v("data-v-5df5ddc0"),t=t(),x(),t),T={class:"input-container"},U=W(()=>e("h2",null,"Max resistors",-1));function B(t,s,l,_,n,o){return a(),r("div",T,[U,g(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>n.maxResistors=i),class:"input-field",type:"number",min:"1",step:"1"},null,512),[[h,n.maxResistors]])])}const I=d(O,[["render",B],["__scopeId","data-v-5df5ddc0"]]);const z={props:{modelValue:{type:Array,default:()=>[0]}},emits:["update:modelValue"],data(){return{resistors:this.modelValue,e12:[1,1.2,1.5,1.8,2.2,2.7,3.3,3.9,4.7,5.6,6.8,8.2],currentE12Index:JSON.parse(localStorage.getItem("currentE12Index")||1)}},watch:{resistors:{handler(){this.$emit("update:modelValue",this.resistors)},deep:!0}},methods:{addResistor(){this.resistors.push(this.e12[this.currentE12Index]),localStorage.setItem("resistors",JSON.stringify([...new Set(this.resistors)])),this.$emit("update:modelValue",this.resistors),this.currentE12Index<this.e12.length-1?this.currentE12Index++:this.currentE12Index=0,localStorage.setItem("currentE12Index",JSON.stringify(this.currentE12Index))},removeResistor(t){this.resistors.length>1&&(this.resistors.splice(t,1),localStorage.setItem("resistors",JSON.stringify([...new Set(this.resistors)])),this.$emit("update:modelValue",this.resistors))}}},f=t=>(v("data-v-35cae2cf"),t=t(),x(),t),A=f(()=>e("h2",null,"Resistor values",-1)),F={id:"list"},D=["onUpdate:modelValue"],H=["onClick"],j=f(()=>e("g",null,[e("g",null,[e("path",{d:"M500,10C229.3,10,10,229.4,10,500s219.3,490,490,490c270.7,0,490-219.4,490-490S770.7,10,500,10z M727.1,640.4c23.9,23.9,23.9,62.7,0,86.6C715.1,739,699.4,745,683.8,745s-31.4-6-43.3-17.9L500,586.6L359.6,727.1C347.6,739,331.9,745,316.3,745s-31.4-6-43.3-17.9c-23.9-23.9-23.9-62.7,0-86.6L413.4,500L272.9,359.6c-23.9-23.9-23.9-62.7,0-86.6s62.7-23.9,86.6,0L500,413.4l140.4-140.4c23.9-23.9,62.7-23.9,86.6,0c23.9,23.9,23.9,62.7,0,86.6L586.6,500L727.1,640.4z"})]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")],-1)),q=[j],G=f(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 122.875 122.875","enable-background":"new 0 0 122.875 122.648","xml:space":"preserve"},[e("g",null,[e("path",{"fill-rule":"evenodd",fill:"white","clip-rule":"evenodd",d:"M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"})])],-1)),K=[G];function P(t,s,l,_,n,o){return a(),r("div",null,[A,e("div",F,[(a(!0),r(V,null,k(n.resistors,(i,u)=>(a(),r("div",{key:u},[g(e("input",{"onUpdate:modelValue":p=>n.resistors[u]=p,class:"input-field",type:"number",min:"0.01",step:"0.01"},null,8,D),[[h,n.resistors[u],void 0,{number:!0}]]),(a(),r("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"12px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve",class:"del-icon",onClick:p=>o.removeResistor(u)},q,8,H))]))),128)),e("button",{id:"add-button",onClick:s[0]||(s[0]=(...i)=>o.addResistor&&o.addResistor(...i))},K)])])}const C=d(z,[["render",P],["__scopeId","data-v-35cae2cf"]]);const Q={props:{svgCode:{type:String,default:""},calculating:{type:Boolean,default:!1},resistance:{type:Number,default:null}},emits:["cancel:calculation"],methods:{cancelCalculation(){this.$emit("cancel:calculation")}}},X={class:"result-container"},Y={key:0,class:"calculating"},Z={key:1,class:"resistance-info"},ee=["innerHTML"];function te(t,s,l,_,n,o){return a(),r("div",X,[l.calculating?(a(),r("div",Y,[b(" Calculating... "),e("button",{class:"cancel-button",onClick:s[0]||(s[0]=(...i)=>o.cancelCalculation&&o.cancelCalculation(...i))}," Cancel ")])):R("",!0),l.svgCode!==""?(a(),r("p",Z," Resistance: "+L(l.resistance),1)):R("",!0),e("div",{class:"svg-code",innerHTML:l.svgCode},null,8,ee)])}const S=d(Q,[["render",te],["__scopeId","data-v-43fee675"]]);function se(){return new Worker(""+new URL("resistor-optimization-6f757161.js",import.meta.url).href)}const ne={components:{ResistorInputList:C,ResistanceTargetInput:w,MaxResistorCountInput:I,ResultSchematic:S},data(){return{resistors:JSON.parse(localStorage.getItem("resistors"))||[1],targetResistance:JSON.parse(localStorage.getItem("targetResistance"))||null,maxResistors:JSON.parse(localStorage.getItem("maxResistors"))||3,svgCalculating:!1,svgCode:"",resistance:0,wasm:null,worker:null}},computed:{isFilled(){return this.resistors.length>0&&!this.resistors.includes(0)&&this.targetResistance>0&&this.maxResistors>0}},watch:{resistors:{deep:!0,handler(t){this.updateResistorList(t)}}},created(){this.initWASMWorker()},methods:{initWASMWorker(){this.worker=new se,this.worker.onmessage=t=>{this.svgCode=t.data.svg,this.resistance=t.data.resistance,this.svgCalculating=!1},this.updateResistorList(this.resistors)},updateResistorList(t){this.worker.postMessage({type:"updateResistorList",resistors:[...t]})},calculate(){this.svgCalculating=!0,this.svgCode="",this.worker.postMessage({type:"calculate",targetResistance:this.targetResistance,maxResistors:this.maxResistors})},cancelCalculation(){this.worker.terminate(),this.initWASMWorker(),this.svgCalculating=!1}}},oe={class:"container"},ie={class:"input-fields"},ae=["disabled"];function re(t,s,l,_,n,o){const i=w,u=I,p=C,y=S;return a(),r("div",oe,[e("div",ie,[m(i,{modelValue:n.targetResistance,"onUpdate:modelValue":s[0]||(s[0]=c=>n.targetResistance=c)},null,8,["modelValue"]),m(u,{modelValue:n.maxResistors,"onUpdate:modelValue":s[1]||(s[1]=c=>n.maxResistors=c)},null,8,["modelValue"]),m(p,{modelValue:n.resistors,"onUpdate:modelValue":s[2]||(s[2]=c=>n.resistors=c)},null,8,["modelValue"]),e("button",{class:"calculate-button",disabled:!o.isFilled,onClick:s[3]||(s[3]=(...c)=>o.calculate&&o.calculate(...c))}," Calculate ",8,ae)]),m(y,{calculating:n.svgCalculating,"svg-code":n.svgCode,resistance:n.resistance,"onCancel:calculation":s[4]||(s[4]=c=>o.cancelCalculation())},null,8,["calculating","svg-code","resistance"])])}const ce=d(ne,[["render",re],["__scopeId","data-v-b9041023"]]);export{ce as default};
