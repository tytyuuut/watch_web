import{r as d,s as x,c as o,a as t,F as r,k as p,l as L,n as f,o as n,t as l}from"./entry.2668c076.js";import{_ as k}from"./shopping-cart.e5dfc3ed.js";const w={class:"produce p_3"},C=t("section",{class:"py-5 text-center banner"},[t("div",{class:"row py-lg-5"},[t("div",{class:"col-lg-6 col-md-8 mx-auto"},[t("h1",null,"Album example"),t("p",{class:"lead"}," Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely. ")])])],-1),q={class:"row container main_block"},R={class:"col-md-9"},F={class:"album bg-light mb-3"},D={class:"container"},j={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},G={class:"card shadow-sm"},X=["src","alt"],$={class:"product-name"},S={class:"card-body"},M={class:"product-price"},I={class:"d-flex justify-content-between align-items-center"},P={class:"btn-group"},W=["onClick"],Q=["onClick","disabled"],T={class:"col-md-3"},V={class:"position-sticky",style:{top:"2rem"}},N={class:"p-4"},U=t("h2",null,"商品列表",-1),z=["href","aria-controls"],H=["id"],J={class:"card card-body"},K=t("div",{class:"cart_car","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[t("img",{src:k})],-1),O={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Y={class:"modal-dialog"},Z={class:"modal-content"},tt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"購買紀錄"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),st={class:"modal-body"},et={class:"produce_name"},at={class:"produce_price"},ot={class:"produce_quantity"},nt=["onClick"],it=["onClick"],lt=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),t("button",{type:"button",class:"btn btn-primary"},"Save changes")],-1),pt={__name:"produce_3",setup(ct){const m=d([{id:1,name:"BL-2140RX-7A",price:800,image:"https://shenjih.com/wp-content/uploads/2019/07/Patek-Philippe-%E8%A8%82%E8%A3%BD%E4%B8%89%E5%95%8F%E5%A0%B1%E6%99%82%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:2,name:"BL-956RR-1A4",price:700,image:"https://shenjih.com/wp-content/uploads/2019/07/1860%E5%B9%B4%E4%BA%BA%E5%81%B6%E5%A0%B1%E6%99%82%E9%8C%B6-335x335.png",quantity:0},{id:3,name:"DWL-5640RX-7",price:1e3,image:"https://shenjih.com/wp-content/uploads/2019/07/%E9%9B%99%E7%A7%92%E8%BF%BD%E9%87%9D%E5%A5%A7%E9%81%8B%E7%B4%80%E5%BF%B5%E9%8C%B6-335x335.png",quantity:0},{id:4,name:"BL-B011SF-7A",price:1500,image:"https://shenjih.com/wp-content/uploads/2019/07/1890%E9%9B%95%E8%8A%B1%E7%90%BA%E7%91%AF%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:5,name:"GL-2140RX-8A",price:2e3,image:"https://shenjih.com/wp-content/uploads/2019/07/Tiffany-Patek-Philippe%E8%A4%87%E9%9B%9C%E5%8A%9F%E8%83%BD%E5%8F%A4%E8%91%A3%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:6,name:"GL-951RR-1A4",price:1850,image:"https://shenjih.com/wp-content/uploads/2019/07/%E8%B6%85%E8%96%84%E9%8F%A4%E7%A9%BA%E9%9B%95%E8%8A%B1%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:7,name:"DWL-5641RX-7",price:1700,image:"https://shenjih.com/wp-content/uploads/2019/07/1907%E5%B9%B4%E6%A5%B5%E7%B7%BB%E5%8F%A4%E8%91%A3%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:8,name:"GL-B661SF-7A",price:1300,image:"https://shenjih.com/wp-content/uploads/2019/07/Gruen10-335x335.png",quantity:0},{id:9,name:"GL-2200RX-7A",price:2100,image:"https://shenjih.com/wp-content/uploads/2019/07/%E7%91%9E%E5%A3%AB%E5%8F%A4%E8%91%A3%E7%90%BA%E7%91%AF%E6%87%B7%E9%8C%B6-335x335.png",quantity:0}]),_=d([{name:"BL系列手錶",class:"collapseExample1",price:["BL-2140RX-7A","BL-956RR-1A4","BL-B011SF-7A"]},{name:"GL系列手錶",class:"collapseExample2",price:["GL-2140RX-8A","GL-951RR-1A4","GL-B661SF-7A","GL-2200RX-7A"]},{name:"DWL系列手錶",class:"collapseExample3",price:["DWL-5640RX-7","DWL-5641RX-7"]}]),i=d([]),u=d(""),h=e=>{const a=i.value.find(s=>s.id===e.id);a?a.quantity++:i.value.push({...e,quantity:1})},E=e=>{const a=i.value.findIndex(s=>s.id===e.id);if(a>-1){const s=i.value[a];s.quantity>1?s.quantity--:i.value.splice(a,1)}},B=e=>{e.quantity++},b=e=>{e.quantity>1&&e.quantity--},v=x(()=>m.value.filter(e=>e.name.toLowerCase().includes(u.value.toLowerCase()))),y=e=>i.value.some(a=>a.id===e.id);return(e,a)=>(n(),o("main",w,[C,t("div",q,[t("div",R,[t("div",F,[t("div",D,[t("div",j,[(n(!0),o(r,null,p(v.value,s=>(n(),o("div",{class:"col",key:s.id},[t("div",G,[t("img",{src:s.image,alt:s.name,class:"product-image"},null,8,X),t("h3",$,l(s.name),1),t("div",S,[t("p",M,"價錢 : "+l(s.price),1),t("div",I,[t("div",P,[t("button",{onClick:c=>h(s),type:"button",class:"btn btn-dark"},"加入購物車",8,W),t("button",{onClick:c=>E(s),disabled:!y(s),type:"button",class:"btn btn-outline-dark"},"從購物車移除",8,Q)])])])])]))),128))])])])]),t("div",T,[t("div",V,[t("div",N,[t("div",null,[L(t("input",{class:"w-100 mb-4",type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s),placeholder:"搜尋商品"},null,512),[[f,u.value]])]),U,t("div",null,[t("ul",null,[(n(!0),o(r,null,p(_.value,(s,c)=>(n(),o("li",{key:c},[t("a",{class:"btn","data-bs-toggle":"collapse",href:`#${s.class}`,role:"button","aria-expanded":"false","aria-controls":`${s.class}`},l(s.name),9,z),t("div",{class:"collapse show",id:`${s.class}`},[t("ul",J,[(n(!0),o(r,null,p(s.price,(A,g)=>(n(),o("li",{key:g},l(A),1))),128))])],8,H)]))),128))])])])])])]),K,t("div",O,[t("div",Y,[t("div",Z,[tt,t("ul",st,[(n(!0),o(r,null,p(i.value,s=>(n(),o("li",{key:s.id,class:"cart-item d-flex"},[t("div",et,l(s.name),1),t("div",at,"$ "+l(s.price),1),t("div",ot,"x "+l(s.quantity),1),t("button",{onClick:c=>B(s)},"+",8,nt),t("button",{onClick:c=>b(s)},"-",8,it)]))),128))]),lt])])])]))}};export{pt as default};
