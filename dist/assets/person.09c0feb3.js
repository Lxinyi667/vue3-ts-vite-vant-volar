import{x as _}from"./my.3f31c08e.js";import{d as c,r as D,c as C,b as l,a as n,e as A,F as f,T as t,g as r,o as V,p as x,h,_ as v}from"./index.b59b35ee.js";import"./request.9fb191dc.js";const s=d=>(x("data-v-c288c3f9"),d=d(),h(),d),w=s(()=>l("div",{class:"person-top"},[l("h3",null,"IT\u4F01\u4E1A\u4EBA\u624D"),l("h4",null,"\u4E00\u7AD9\u5F0F\u9A7B\u573A/\u8FDC\u7A0B\u7075\u6D3B\u7528\u5DE5")],-1)),b=s(()=>l("div",{class:"person-adv"},[l("h5",null,"\u6211\u4EEC\u7684\u4F18\u52BF"),l("p",null,"\u53EF\u5C1D\u8BD5\u521B\u4E1A\u9879\u76EE\u5E76\u4EAB\u53D7\u521B\u4E1A\u6276\u6301"),l("p",null,"\u53EF\u5E26\u56E2\u961F10-20\u4EBA\u4E3A\u4F60\u8D5A\u94B1")],-1)),S={class:"person-form"},k=s(()=>l("h5",null,"\u5E94\u8058\u767B\u8BB0\u8868",-1)),y=s(()=>l("p",null,"\u6CE8\uFF1A\u5FC5\u987B\u586B\u5199\u771F\u5B9E\u4FE1\u606F\uFF0C\u53D1\u73B0\u586B\u5199\u9020\u5047\uFF0C\u4E00\u5F8B\u53D6\u6D88\u5E94 \u8058\u8D44\u683C\u3002\u5982\u679C\u60A8\u7684\u7B80\u5386\u7B26\u5408\u8981\u6C42\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u53D6 \u5F97\u8054\u7CFB\uFF0C\u8C22\u8C22\uFF01",-1)),g=s(()=>l("button",{"native-type":"submit"},"\u63D0\u4EA4\u7533\u8BF7",-1)),U=c({__name:"person",setup(d){const u=D({showSex:!1,it_name:"",sex:"",address:"",age:"",phone:"",introduce:"",work_data:""}),p=[{name:"\u7537"},{name:"\u5973"}],B=async()=>{if(!u.it_name){t("\u8BF7\u8F93\u5165\u59D3\u540D");return}if(!u.sex){t("\u8BF7\u9009\u62E9\u6027\u522B");return}if(!u.phone){t("\u8BF7\u8F93\u5165\u7535\u8BDD");return}if(!u.age){t("\u8BF7\u8F93\u5165\u5E74\u9F84");return}if(!u.address){t("\u8BF7\u8F93\u5165\u4F4F\u5740");return}if(!u.work_data){t("\u8BF7\u8F93\u5165\u5DE5\u4F5C\u5E74\u9650");return}if(!u.introduce){t("\u8BF7\u8F93\u5165\u4ECB\u7ECD");return}await _(u)&&(t("\u60A8\u7684\u7533\u8BF7\u5DF2\u6536\u5230\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E3A\u60A8\u5BA1\u6838"),u.it_name="",u.sex="",u.work_data="",u.introduce="",u.age="",u.phone="",u.address="")},m=F=>{u.sex=F.name};return(F,e)=>{const a=r("van-field"),E=r("van-action-sheet"),i=r("van-form");return V(),C(f,null,[w,b,l("div",S,[k,n(i,{onSubmit:B,class:"form"},{default:A(()=>[n(a,{modelValue:u.it_name,"onUpdate:modelValue":e[0]||(e[0]=o=>u.it_name=o),label:"\u59D3\u540D:",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"},null,8,["modelValue"]),n(a,{modelValue:u.sex,"onUpdate:modelValue":e[1]||(e[1]=o=>u.sex=o),onClick:e[2]||(e[2]=o=>u.showSex=!0),readonly:"",label:"\u6027\u522B:",placeholder:"\u8BF7\u9009\u62E9\u60A8\u7684\u6027\u522B"},null,8,["modelValue"]),n(E,{show:u.showSex,"onUpdate:show":e[3]||(e[3]=o=>u.showSex=o),actions:p,"cancel-text":"\u53D6\u6D88","close-on-click-action":"",onSelect:m},null,8,["show"]),n(a,{modelValue:u.phone,"onUpdate:modelValue":e[4]||(e[4]=o=>u.phone=o),label:"\u7535\u8BDD:",type:"number",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u7535\u8BDD"},null,8,["modelValue"]),n(a,{modelValue:u.age,"onUpdate:modelValue":e[5]||(e[5]=o=>u.age=o),label:"\u5E74\u9F84:",type:"number",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5E74\u9F84"},null,8,["modelValue"]),n(a,{modelValue:u.address,"onUpdate:modelValue":e[6]||(e[6]=o=>u.address=o),label:"\u4F4F\u5740:",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u4F4F\u5740"},null,8,["modelValue"]),n(a,{modelValue:u.work_data,"onUpdate:modelValue":e[7]||(e[7]=o=>u.work_data=o),label:"\u7ECF\u5386:",type:"number",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5DE5\u4F5C\u5E74\u9650"},null,8,["modelValue"]),n(a,{modelValue:u.introduce,"onUpdate:modelValue":e[8]||(e[8]=o=>u.introduce=o),label:"\u4ECB\u7ECD:",type:"textarea",rows:"8",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u4ECB\u7ECD"},null,8,["modelValue"]),y,g]),_:1})])],64)}}});const P=v(U,[["__scopeId","data-v-c288c3f9"]]);export{P as default};