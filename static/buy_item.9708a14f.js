import{r as s,f as S,j as C,g as q,m as D,c as v,a as e,F as V,h as F,n,v as i,t as h,q as N,o as b}from"./entry.bc5b7c15.js";const U={class:"buy_item produce p_3"},$=e("section",{class:"py-2 text-center banner"},[e("div",{class:"row py-lg-5"},[e("div",{class:""},[e("h1",null,"結帳頁面"),e("p",null,"Checkout screen")])])],-1),H={class:"container"},B=e("div",{class:"produce_introduce"},[e("p",null,"商品照片"),e("p",null,"商品名稱"),e("p",null,"商品數量"),e("p",null,"商品價錢"),e("p")],-1),J={class:"produce_item"},L={class:"image"},O=["src"],M={class:"quantity_item"},P=["onClick"],R=["onClick"],T={class:"price"},j=["onClick"],z=e("p",null,null,-1),A={class:"produce_form"},G={class:"d-flex form_main"},K={class:"form_item"},Q=e("p",{class:"title"},"聯絡資訊",-1),W={class:"row"},X={class:"col-6"},Y=e("label",{for:"exampleInputEmail1",class:"form-label"},"訂購姓名 :",-1),Z={class:"row"},ee={class:"col-6"},te=e("label",{for:"exampleInputEmail1",class:"form-label"},"手機 :",-1),le={class:"row"},oe={class:"col-6"},ae=e("label",{for:"exampleInputEmail1",class:"form-label"},"Email :",-1),se={class:"row"},ne={class:"col-6"},ie=e("label",{for:"exampleInputEmail1",class:"form-label"},"地址 :",-1),ce=e("label",{for:"exampleInputEmail2",class:"form-label"},"其他訊息 :",-1),re={key:0,class:"error"},pe={__name:"buy_item",setup(ue){const a=s([]);s("");const c=s(""),r=s(""),u=s(""),d=s(""),p=s(""),m=s(""),x=()=>{if(!c.value||!r.value||!u.value||!p.value||!m.value)d.value="所有欄位皆為必填";else{d.value="";const o=a.value.reduce((t,l)=>t+parseFloat(l.productDescription),0);f.push({path:"/Checkout",query:{name:c.value,telephone:r.value,email:m.value,location:p.value,textarea:u.value,items:JSON.stringify(a.value),total:o}})}};S();const f=C(),k=()=>{try{if(typeof window<"u"&&window.localStorage){const o=localStorage.getItem("cartData");o&&(a.value=JSON.parse(o))}}catch(o){console.error("Failed to load cart data from localStorage",o)}},y=()=>{try{typeof window<"u"&&window.localStorage&&localStorage.setItem("cartData",JSON.stringify(a.value))}catch(o){console.error("Failed to save cart data to localStorage",o)}};q(()=>{k(),D(a,y,{deep:!0})});const w=o=>{a.value.splice(o,1),y(),a.value.length===0&&f.push("/produce_item")},I=o=>{const t=a.value[o];t.quantity++,t.productDescription=`${t.unitPrice*t.quantity}`},E=o=>{const t=a.value[o];t.quantity>1&&(t.quantity--,t.productDescription=`${t.unitPrice*t.quantity}`)};return(o,t)=>(b(),v("main",U,[$,e("div",H,[e("ul",null,[e("li",null,[B,(b(!0),v(V,null,F(a.value,(l,_)=>(b(),v("div",{class:"product_li",key:_},[e("div",J,[e("div",L,[e("img",{src:l.imagee},null,8,O)]),e("p",null,[e("b",null,h(l.productName),1)]),e("div",M,[e("button",{class:"btn btn-outline-dark",onClick:g=>E(_)},"-",8,P),e("span",null,h(l.quantity),1),e("button",{class:"btn btn-outline-dark",onClick:g=>I(_)},"+",8,R)]),e("p",T,h(l.productDescription)+"元",1),e("button",{class:"btn btn-dark",onClick:g=>w(_)},"刪除",8,j)])]))),128))]),z]),e("div",A,[e("div",G,[e("div",K,[Q,e("div",W,[e("div",X,[Y,n(e("input",{type:"text",class:"name form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l)},null,512),[[i,c.value]])])]),e("div",Z,[e("div",ee,[te,n(e("input",{type:"text",class:"phone form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l)},null,512),[[i,r.value]])])]),e("div",le,[e("div",oe,[ae,n(e("input",{type:"email",class:"email form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[2]||(t[2]=l=>m.value=l)},null,512),[[i,m.value]])])]),e("div",se,[e("div",ne,[ie,n(e("input",{type:"text",class:"loaction form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[3]||(t[3]=l=>p.value=l)},null,512),[[i,p.value]])])]),ce,n(e("textarea",{id:"exampleInputEmail2",class:"",cols:"",rows:"6","onUpdate:modelValue":t[4]||(t[4]=l=>u.value=l)},null,512),[[i,u.value]]),e("button",{class:"btn btn-dark",onClick:x},"確認送出"),d.value?(b(),v("p",re,h(d.value),1)):N("",!0)])])])])]))}};export{pe as default};
