import{d as r,c as m,b as t,t as n,a as l,e as k,g as c,o as _,p as F,h as B,_ as h,r as b,j as x,q as D,n as E,F as A,i as T,T as d,f as I}from"./index.b59b35ee.js";import{a as w,d as S}from"./task.59c7b2dc.js";import"./request.9fb191dc.js";const N="/assets/details-guarantee.f69c554e.png",o=e=>(F("data-v-8925e311"),e=e(),B(),e),V={class:"task-detail"},j={class:"task-h3-text"},$=o(()=>t("p",null,"\u4EFB\u52A1\u9884\u7B97",-1)),R=o(()=>t("p",null,"\u4EFB\u52A1\u5468\u671F",-1)),q=o(()=>t("p",null,"\u670D\u52A1\u65B9\u5F0F",-1)),z=o(()=>t("h4",null,"\u4EFB\u52A1\u4FE1\u606F",-1)),L=o(()=>t("h5",null,"\u4EFB\u52A1\u8981\u6C42",-1)),M={class:"task-h5-text"},O=o(()=>t("h4",null,"\u5DE5\u4F5C\u4FDD\u969C",-1)),G=o(()=>t("img",{class:"task-job",src:N},null,-1)),H=o(()=>t("h4",null,"\u4EFB\u52A1\u6765\u6E90",-1)),J=["src"],K=r({__name:"TaskDetail",props:{item:{type:Object,default:()=>[]}},setup(e){return(i,u)=>{const s=c("router-link");return _(),m("div",V,[t("h3",null,n(e.item.task_name),1),t("p",j,n(e.item.position_name),1),t("dl",null,[t("dt",null,[$,t("strong",null,n(e.item.task_budget)+"\u5143",1)]),t("dt",null,[R,t("strong",null,n(e.item.task_cycle)+"\u5929",1)]),t("dt",null,[q,t("strong",null,n(e.item.service_mode),1)])]),z,L,t("p",M,n(e.item.task_ask),1),O,G,H,l(s,{class:"task-source",to:"/task/companySource/"+e.item.company_id},{default:k(()=>[t("img",{src:e.item.head_img},null,8,J),t("div",null,[t("h5",null,n(e.item.company_name),1),t("p",null,n(e.item.user_name)+" . "+n(e.item.city),1)])]),_:1},8,["to"])])}}});const P=h(K,[["__scopeId","data-v-8925e311"]]),Q={class:"task-detail-footer"},U=I("\u7ACB\u5373\u6C9F\u901A"),W=r({__name:"details",setup(e){const i=T(),u=i.currentRoute.value.params.id,s=b({item:"",status:0,loading:!1}),p=()=>history.back(),g=()=>{i.push("/message/talk/"+s.item.task_id+"/"+s.item.user_id)};(async()=>{s.loading=!0;const a=await w({task_id:u});a?(s.item=a.records[0],s.status=a.records[0].status,s.loading=!1):(d(a.msg),s.loading=!1)})();const v=async()=>{s.loading=!0;const a=await S({task_id:u});a&&(s.status=a.data.status),s.loading=!1,d(a.msg)};return(a,Y)=>{const f=c("van-nav-bar"),y=c("van-action-bar-icon"),C=c("van-button");return _(),m(A,null,[l(f,{title:"\u4EFB\u52A1\u8BE6\u60C5","left-arrow":"",onClickLeft:p}),s.item?(_(),x(P,{key:0,item:s.item},null,8,["item"])):D("",!0),t("div",Q,[l(y,{class:E(s.status==1?"active":""),icon:"star-o",text:"\u6536\u85CF",onClick:v},null,8,["class"]),l(C,{type:"primary",block:"",onClick:g},{default:k(()=>[U]),_:1})])],64)}}});const st=h(W,[["__scopeId","data-v-b28d1d9c"]]);export{st as default};