import{d as E,r as b,c as a,a as l,b as i,F as m,k as f,l as R,q as v,w as U,z as A,e as k,n as $,f as q,i as j,T as y,g as r,o,t as S,p as G,h as J,_ as K}from"./index.b59b35ee.js";import{t as M}from"./task.1fc562b9.js";import{h as O,t as P}from"./task.59c7b2dc.js";import{T as Q}from"./TaskList.bd7a9774.js";import"./request.9fb191dc.js";const W=c=>(G("data-v-928ca728"),c=c(),J(),c),X={class:"search-cont"},Y={key:0,class:"search-item"},Z=q("\u641C\u7D22\u5386\u53F2"),ee=["onClick"],se=W(()=>i("h3",null,"\u70ED\u95E8\u641C\u7D22",-1)),te=["onClick"],ae={class:"search-list"},oe={key:0,class:"wy-no-data"},ne=E({__name:"search",setup(c){const L=j(),u=M();L.currentRoute.value.params.id;const _=localStorage.getItem("searchHistory"),e=b({value:"",searchFlag:!1,loading:!1,finished:!1,taskList:[],pageNum:1,pageSize:10,searchHistory:_?_.split(","):[]}),C=()=>history.back(),p=s=>{!s||(e.searchFlag=!0,e.searchHistory.includes(s)||(e.searchHistory.push(s),localStorage.setItem("searchHistory",e.searchHistory)),d())},F=()=>{e.searchFlag=!1,e.value=""},g=s=>{e.value=s,p(s)},H=()=>{e.searchHistory=[],localStorage.removeItem("searchHistory")},N=async()=>{const s=await O({type:1});s?u.setHotSearchList(s.data):y(s.msg)};u.hotSearchList.length<=0&&N();const d=async()=>{e.loading=!0,e.pageNum==1&&(e.taskList=[]);const s=await P({position_name:e.value,pageNum:e.pageNum,pageSize:e.pageSize});s?(e.taskList=e.taskList.concat(s.records),e.loading=!1,e.taskList.length>=s.total?e.finished=!0:e.finished=!1):(y(s.msg),e.loading=!1)},w=()=>{e.pageNum=1,d()},V=()=>{e.pageNum=e.pageNum+1,d()};return(s,n)=>{const D=r("van-nav-bar"),x=r("van-search"),I=r("van-icon"),T=r("van-list"),z=r("van-pull-refresh");return o(),a("div",{class:$(e.searchFlag?"search-page":"")},[l(D,{title:"\u641C\u7D22","left-arrow":"",onClickLeft:C}),i("div",X,[l(x,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),"show-action":"",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u7684\u804C\u4F4D",onSearch:p,onCancel:F},null,8,["modelValue"]),e.searchFlag?v("",!0):(o(),a("div",Y,[i("h3",null,[Z,l(I,{name:"delete-o",onClick:H})]),i("dl",null,[(o(!0),a(m,null,f(e.searchHistory,(t,h)=>(o(),a("dt",{key:h,onClick:B=>g(t)},S(t),9,ee))),128))]),se,i("dl",null,[(o(!0),a(m,null,f(R(u).hotSearchList,(t,h)=>(o(),a("dt",{key:h,onClick:B=>g(t.title)},S(t.title),9,te))),128))])])),U(i("div",ae,[l(z,{modelValue:e.loading,"onUpdate:modelValue":n[2]||(n[2]=t=>e.loading=t),onRefresh:w},{default:k(()=>[l(T,{loading:e.loading,"onUpdate:loading":n[1]||(n[1]=t=>e.loading=t),finished:e.finished,"finished-text":"",onLoad:V},{default:k(()=>[l(Q,{taskList:e.taskList},null,8,["taskList"]),!e.loading&&e.taskList.length==0?(o(),a("div",oe,"\u6682\u65E0\u6570\u636E")):v("",!0)]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])],512),[[A,e.searchFlag]])])],2)}}});const de=K(ne,[["__scopeId","data-v-928ca728"]]);export{de as default};
