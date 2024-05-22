import{_ as A}from"./nuxt-link.9640f736.js";import{r as a,q as g,c as s,a as t,F as i,l,i as v,k as x,o,t as n,b as w,w as y,d as L}from"./entry.0b1181e2.js";import{_ as b}from"./shopping-cart.8bbdd86c.js";const R={class:"produce p_3"},f=t("section",{class:"py-5 text-center banner"},[t("div",{class:"row py-lg-5"},[t("div",{class:"col-lg-6 col-md-8 mx-auto"},[t("h1",null,"Album example"),t("p",{class:"lead"}," Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely. ")])])],-1),F={class:"row container main_block"},k={class:"col-md-9"},C={class:"album bg-light mb-3"},D={class:"container"},G={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},j={class:"card shadow-sm"},q=["src","alt"],X={class:"product-name"},P={class:"card-body"},S={class:"product-price"},W={class:"d-flex justify-content-between align-items-center"},N={class:"btn-group"},V={class:"col-md-3"},M={class:"position-sticky",style:{top:"2rem"}},T={class:"p-4"},$=t("h2",null,"商品列表",-1),I=["href","aria-controls"],Q=["id"],U={class:"card card-body"},z=t("div",{class:"cart_car","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[t("img",{src:b})],-1),Y={__name:"produce_4",setup(H){const p=a([{id:1,name:"BL-2140RX-7A",price:800,image:"https://shenjih.com/wp-content/uploads/2019/07/Patek-Philippe-%E8%A8%82%E8%A3%BD%E4%B8%89%E5%95%8F%E5%A0%B1%E6%99%82%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:2,name:"BL-956RR-1A4",price:700,image:"https://shenjih.com/wp-content/uploads/2019/07/1860%E5%B9%B4%E4%BA%BA%E5%81%B6%E5%A0%B1%E6%99%82%E9%8C%B6-335x335.png",quantity:0},{id:3,name:"DWL-5640RX-7",price:1e3,image:"https://shenjih.com/wp-content/uploads/2019/07/%E9%9B%99%E7%A7%92%E8%BF%BD%E9%87%9D%E5%A5%A7%E9%81%8B%E7%B4%80%E5%BF%B5%E9%8C%B6-335x335.png",quantity:0},{id:4,name:"BL-B011SF-7A",price:1500,image:"https://shenjih.com/wp-content/uploads/2019/07/1890%E9%9B%95%E8%8A%B1%E7%90%BA%E7%91%AF%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:5,name:"GL-2140RX-8A",price:2e3,image:"https://shenjih.com/wp-content/uploads/2019/07/Tiffany-Patek-Philippe%E8%A4%87%E9%9B%9C%E5%8A%9F%E8%83%BD%E5%8F%A4%E8%91%A3%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:6,name:"GL-951RR-1A4",price:1850,image:"https://shenjih.com/wp-content/uploads/2019/07/%E8%B6%85%E8%96%84%E9%8F%A4%E7%A9%BA%E9%9B%95%E8%8A%B1%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:7,name:"DWL-5641RX-7",price:1700,image:"https://shenjih.com/wp-content/uploads/2019/07/1907%E5%B9%B4%E6%A5%B5%E7%B7%BB%E5%8F%A4%E8%91%A3%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:8,name:"GL-B661SF-7A",price:1300,image:"https://shenjih.com/wp-content/uploads/2019/07/Gruen10-335x335.png",quantity:0},{id:9,name:"GL-2200RX-7A",price:2100,image:"https://shenjih.com/wp-content/uploads/2019/07/%E7%91%9E%E5%A3%AB%E5%8F%A4%E8%91%A3%E7%90%BA%E7%91%AF%E6%87%B7%E9%8C%B6-335x335.png",quantity:0}]),m=a([{name:"BL系列手錶",class:"collapseExample1",price:["BL-2140RX-7A","BL-956RR-1A4","BL-B011SF-7A"]},{name:"GL系列手錶",class:"collapseExample2",price:["GL-2140RX-8A","GL-951RR-1A4","GL-B661SF-7A","GL-2200RX-7A"]},{name:"DWL系列手錶",class:"collapseExample3",price:["DWL-5640RX-7","DWL-5641RX-7"]}]);a([]);const c=a(""),u=g(()=>p.value.filter(d=>d.name.toLowerCase().includes(c.value.toLowerCase())));return(d,r)=>{const h=A;return o(),s("main",R,[f,t("div",F,[t("div",k,[t("div",C,[t("div",D,[t("div",G,[(o(!0),s(i,null,l(u.value,e=>(o(),s("div",{class:"col",key:e.id},[t("div",j,[t("img",{src:e.image,alt:e.name,class:"product-image"},null,8,q),t("h3",X,n(e.name),1),t("div",P,[t("p",S,"價錢 : "+n(e.price),1),t("div",W,[t("div",N,[w(h,{to:"/produce_item"},{default:y(()=>[L("Go to Next Page")]),_:1})])])])])]))),128))])])])]),t("div",V,[t("div",M,[t("div",T,[t("div",null,[v(t("input",{class:"w-100 mb-4",type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>c.value=e),placeholder:"搜尋商品"},null,512),[[x,c.value]])]),$,t("div",null,[t("ul",null,[(o(!0),s(i,null,l(m.value,(e,_)=>(o(),s("li",{key:_},[t("a",{class:"btn","data-bs-toggle":"collapse",href:`#${e.class}`,role:"button","aria-expanded":"false","aria-controls":`${e.class}`},n(e.name),9,I),t("div",{class:"collapse show",id:`${e.class}`},[t("ul",U,[(o(!0),s(i,null,l(e.price,(E,B)=>(o(),s("li",{key:B},n(E),1))),128))])],8,Q)]))),128))])])])])])]),z])}}};export{Y as default};
