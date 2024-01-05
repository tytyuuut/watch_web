import{r as d,h as w,c as i,a as e,F as r,g as u,i as z,v as B,o as n,t as l}from"./entry.c078206c.js";import{_ as x}from"./shopping-cart.ac7343a2.js";const k={class:"produce p_2"},S=e("section",{class:"py-5 text-center banner"},[e("div",{class:"row py-lg-5"},[e("div",{class:"col-lg-6 col-md-8 mx-auto"},[e("h1",null,"Album example"),e("p",{class:"lead"}," Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely. ")])])],-1),C={class:"row container main_block"},V={class:"col-md-9"},P={class:"album bg-light mb-3"},O={class:"container"},R={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},X={class:"card shadow-sm"},D=["src","alt"],F={class:"product-name"},$={class:"card-body"},W={class:"product-price"},G={class:"d-flex justify-content-between align-items-center"},M={class:"btn-group"},I=["onClick"],L=["onClick","disabled"],E={class:"col-md-3"},Q={class:"position-sticky",style:{top:"2rem"}},T={class:"p-4"},j=e("h2",null,"商品列表",-1),N=["href","aria-controls"],U=["id"],H={class:"card card-body"},J=e("div",{class:"cart_car","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[e("img",{src:x})],-1),K={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Y={class:"modal-dialog"},Z={class:"modal-content"},ee=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"購買紀錄"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),te={class:"modal-body"},ae={class:"produce_name"},se={class:"produce_price"},ie={class:"produce_quantity"},ne=["onClick"],oe=["onClick"],le=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e("button",{type:"button",class:"btn btn-primary"},"Save changes")],-1),ue={__name:"produce_2",setup(ce){const p=d([{id:1,name:"BA-2140RX-7A",price:900,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8713462/0/638143993657530000?v=1",quantity:0},{id:2,name:"BA-9560-1A4",price:1200,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7772689/0/638223301805070000?v=1",quantity:0},{id:3,name:"DWA-5640RX-7",price:700,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8921297/0/638218364435900000?v=1",quantity:0},{id:4,name:"BA-B011SF-7A",price:500,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8921118/0/638218364435900000?v=1",quantity:0},{id:5,name:"BA-2140RX-8A",price:800,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5400262/0/638034335426930000?v=1",quantity:0},{id:6,name:"GA-9510-1A4",price:650,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8973914/0/638235684193700000?v=1",quantity:0},{id:7,name:"DWA-5641RX-7",price:700,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7228701/0/638030042337800000?v=1",quantity:0},{id:8,name:"BA-B661SF-7A",price:900,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5006494/0/638167428523930000?v=1",quantity:0},{id:9,name:"BA-2200RX-7A",price:600,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/4962852/0/638017073124270000?v=1",quantity:0},{id:10,name:"GA-2300-1A4",price:800,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8993179/0/638240791628530000?v=1",quantity:0},{id:11,name:"DWA-5620RX-7",price:1200,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8985095/0/638237414208500000?v=1",quantity:0},{id:12,name:"BA-B011SF-7A",price:830,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8973763/0/638235684193700000?v=1",quantity:0}]),_=d([{name:"BA系列手錶",class:"collapseExample1",price:["BA-2140RX-7A","BA-B011SF-7A","BA-2140RX-8A","BA-B661SF-7A","BA-2200RX-7A","BA-B011SF-7A"]},{name:"GA系列手錶",class:"collapseExample2",price:["GA-9560-1A4","GA-9510-1A4","GA-2300-1A4"]},{name:"DWA系列手錶",class:"collapseExample3",price:["DWA-5640RX-7","DWA-5641RX-7","DWA-5620RX-7"]}]),o=d([]),m=d(""),g=a=>{const s=o.value.find(t=>t.id===a.id);s?s.quantity++:o.value.push({...a,quantity:1})},h=a=>{const s=o.value.findIndex(t=>t.id===a.id);if(s>-1){const t=o.value[s];t.quantity>1?t.quantity--:o.value.splice(s,1)}},b=a=>{a.quantity++},v=a=>{a.quantity>1&&a.quantity--},y=w(()=>p.value.filter(a=>a.name.toLowerCase().includes(m.value.toLowerCase()))),A=a=>o.value.some(s=>s.id===a.id);return(a,s)=>(n(),i("main",k,[S,e("div",C,[e("div",V,[e("div",P,[e("div",O,[e("div",R,[(n(!0),i(r,null,u(y.value,t=>(n(),i("div",{class:"col",key:t.id},[e("div",X,[e("img",{src:t.image,alt:t.name,class:"product-image"},null,8,D),e("h3",F,l(t.name),1),e("div",$,[e("p",W,"價錢 : "+l(t.price),1),e("div",G,[e("div",M,[e("button",{onClick:c=>g(t),type:"button",class:"btn btn-dark"},"加入購物車",8,I),e("button",{onClick:c=>h(t),disabled:!A(t),type:"button",class:"btn btn-outline-dark"},"從購物車移除",8,L)])])])])]))),128))])])])]),e("div",E,[e("div",Q,[e("div",T,[e("div",null,[z(e("input",{class:"w-100 mb-4",type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>m.value=t),placeholder:"搜尋商品"},null,512),[[B,m.value]])]),j,e("div",null,[e("ul",null,[(n(!0),i(r,null,u(_.value,(t,c)=>(n(),i("li",{key:c},[e("a",{class:"btn","data-bs-toggle":"collapse",href:`#${t.class}`,role:"button","aria-expanded":"false","aria-controls":`${t.class}`},l(t.name),9,N),e("div",{class:"collapse show",id:`${t.class}`},[e("ul",H,[(n(!0),i(r,null,u(t.price,(f,q)=>(n(),i("li",{key:q},l(f),1))),128))])],8,U)]))),128))])])])])])]),J,e("div",K,[e("div",Y,[e("div",Z,[ee,e("ul",te,[(n(!0),i(r,null,u(o.value,t=>(n(),i("li",{key:t.id,class:"cart-item d-flex"},[e("div",ae,l(t.name),1),e("div",se,"$ "+l(t.price),1),e("div",ie,"x "+l(t.quantity),1),e("button",{onClick:c=>b(t)},"+",8,ne),e("button",{onClick:c=>v(t)},"-",8,oe)]))),128))]),le])])])]))}};export{ue as default};
