import{_ as A}from"./shopping-cart.ce8078b0.js";import{u as _}from"./fetch.ee8f5985.js";import{_ as B,j as E,k as f,c as n,a as t,F as G,h as q,l as y,o as c,t as l,p as b,e as z}from"./entry.be3f225a.js";const g=a=>(b("data-v-fbb8a3b0"),a=a(),z(),a),v={class:"produce p_1 item_img"},F=g(()=>t("section",{class:"py-5 text-center banner"},[t("div",{class:"row py-lg-5"},[t("div",{class:""},[t("h1",null,"產品種類"),t("p",{class:"lead"}," Product Category ")])])],-1)),S={class:"row container main_block"},R={class:"col-md-12"},D={class:"album mb-3"},W={class:"container"},X={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},x={class:"card shadow-sm"},C=["src"],P={class:"product-name"},j={class:"card-body"},M={class:"product-price"},V={class:"d-flex justify-content-between align-items-center"},k={class:"btn-group"},L=["onClick"],O=g(()=>t("img",{src:A},null,-1)),T=[O],$={__name:"produce_item",async setup(a){let i,o;const s=E(),{data:p,error:r}=([i,o]=f(()=>_("/api/product","$0qAsNpifuG")),i=await i,o(),i);r.value&&(console.error("Failed to fetch products:",r.value),p.value=[{id:1,name:"GA-2140RX-7A",price:4900,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GA/GA1/ga-114rx-7a/assets/GA-114RX-7A.png",quantity:1},{id:2,name:"GW-9560-1A4",price:1200,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GW/GW9/gw-9500-1a4/assets/GW-9500-1A4_front.jpg.transform/main-visual-pc/image.jpg",quantity:0},{id:3,name:"DWE-5640RX-7",price:7700,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/D/DW/DWE/dwe-5640rx-7/assets/DWE-5640RX-7.png",quantity:2},{id:4,name:"GA-B011SF-7A",price:4500,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GA/gab/ga-b001sf-7a/assets/GA-B001SF-7A_front.jpg",quantity:3},{id:5,name:"GA-2140RX-8A",price:2e3,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GM/GM5/gm-5600cl-3/assets/GM-5600CL-3.png.transform/product-panel/image.png",quantity:2},{id:6,name:"GW-9510-1A4",price:1e3,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/D/DW/DW5/dw-5600ff-8/assets/DW-5600FF-8.png.transform/product-panel/image.png",quantity:1},{id:7,name:"DWE-5641RX-7",price:6700,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GM/GM1/gm-110cl-6a/assets/GM-110CL-6A.png.transform/product-panel/image.png",quantity:3},{id:8,name:"GA-B661SF-7A",price:4900,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/M/MT/MTG/mtg-b3000prb-1a/assets/MTG-B3000PRB-1A.png.transform/product-panel/image.png",quantity:2},{id:9,name:"GA-2200RX-7A",price:6600,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GA/GA1/ga-110jt-2a/assets/GA-110JT-2A.png.transform/product-panel/image.png",quantity:1},{id:10,name:"GW-2300-1A4'",price:8800,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GM/GMA/gma-s120tb-8a/assets/GMA-S120TB-8A.png.transform/product-panel/image.png",quantity:0},{id:11,name:"DWE-5620RX-7",price:2e3,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/G/GA/GA2/ga-2100ff-8a/assets/GA-2100FF-8A.png.transform/product-panel/image.png",quantity:0},{id:12,name:"GA-B011SF-7A",price:2230,image:"https://www.casio.com/content/dam/casio/product-info/locales/tw/zh-tw/timepiece/product/watch/D/DW/dwh/dw-h5600ex-1/assets/DW-H5600EX-1.png.transform/product-panel/image.png",quantity:0},{id:13,name:"BA-2140RX-7A",price:900,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8713462/0/638143993657530000?v=1",quantity:0},{id:14,name:"BA-9560-1A4",price:1200,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7772689/0/638223301805070000?v=1",quantity:0},{id:15,name:"DWA-5640RX-7",price:700,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8921297/0/638218364435900000?v=1",quantity:0},{id:16,name:"BA-B011SF-7A",price:500,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8921118/0/638218364435900000?v=1",quantity:0},{id:17,name:"BA-2140RX-8A",price:800,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5400262/0/638034335426930000?v=1",quantity:0},{id:18,name:"GA-9510-1A4",price:650,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8973914/0/638235684193700000?v=1",quantity:0},{id:19,name:"DWA-5641RX-7",price:700,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7228701/0/638030042337800000?v=1",quantity:0},{id:20,name:"BA-B661SF-7A",price:900,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5006494/0/638167428523930000?v=1",quantity:0},{id:21,name:"BA-2200RX-7A",price:600,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/4962852/0/638017073124270000?v=1",quantity:0},{id:22,name:"GA-2300-1A4",price:800,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8993179/0/638240791628530000?v=1",quantity:0},{id:23,name:"DWA-5620RX-7",price:1200,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8985095/0/638237414208500000?v=1",quantity:0},{id:24,name:"BA-B011SF-7A",price:830,image:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8973763/0/638235684193700000?v=1",quantity:0},{id:25,name:"BL-2140RX-7A",price:800,image:"https://shenjih.com/wp-content/uploads/2019/07/Patek-Philippe-%E8%A8%82%E8%A3%BD%E4%B8%89%E5%95%8F%E5%A0%B1%E6%99%82%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:26,name:"BL-956RR-1A4",price:700,image:"https://shenjih.com/wp-content/uploads/2019/07/1860%E5%B9%B4%E4%BA%BA%E5%81%B6%E5%A0%B1%E6%99%82%E9%8C%B6-335x335.png",quantity:0},{id:27,name:"DWL-5640RX-7",price:1e3,image:"https://shenjih.com/wp-content/uploads/2019/07/%E9%9B%99%E7%A7%92%E8%BF%BD%E9%87%9D%E5%A5%A7%E9%81%8B%E7%B4%80%E5%BF%B5%E9%8C%B6-335x335.png",quantity:0},{id:28,name:"BL-B011SF-7A",price:1500,image:"https://shenjih.com/wp-content/uploads/2019/07/1890%E9%9B%95%E8%8A%B1%E7%90%BA%E7%91%AF%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:29,name:"GL-2140RX-8A",price:2e3,image:"https://shenjih.com/wp-content/uploads/2019/07/Tiffany-Patek-Philippe%E8%A4%87%E9%9B%9C%E5%8A%9F%E8%83%BD%E5%8F%A4%E8%91%A3%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:30,name:"GL-951RR-1A4",price:1850,image:"https://shenjih.com/wp-content/uploads/2019/07/%E8%B6%85%E8%96%84%E9%8F%A4%E7%A9%BA%E9%9B%95%E8%8A%B1%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:31,name:"DWL-5641RX-7",price:1700,image:"https://shenjih.com/wp-content/uploads/2019/07/1907%E5%B9%B4%E6%A5%B5%E7%B7%BB%E5%8F%A4%E8%91%A3%E6%87%B7%E9%8C%B6-335x335.png",quantity:0},{id:32,name:"GL-B661SF-7A",price:1300,image:"https://shenjih.com/wp-content/uploads/2019/07/Gruen10-335x335.png",quantity:0},{id:33,name:"GL-2200RX-7A",price:2100,image:"https://shenjih.com/wp-content/uploads/2019/07/%E7%91%9E%E5%A3%AB%E5%8F%A4%E8%91%A3%E7%90%BA%E7%91%AF%E6%87%B7%E9%8C%B6-335x335.png",quantity:0}]);const u=(d,m,e)=>{s.push({path:"/item",query:{name:d,description:m,image:e}})},h=()=>{s.push({path:"/buy_item"})};return(d,m)=>(c(),n("main",v,[F,t("div",S,[t("div",R,[t("div",D,[t("div",W,[t("div",X,[(c(!0),n(G,null,q(y(p),(e,w)=>(c(),n("div",{class:"col col_item",key:w},[t("div",x,[t("img",{src:e.image,alt:"",class:"product-image"},null,8,C),t("h3",P,l(e.name),1),t("div",j,[t("p",M,"價錢:"+l(e.price),1),t("div",V,[t("div",k,[t("button",{class:"btn btn-dark",onClick:I=>u(`${e.name}`,`${e.price}`,`${e.image}`)},"點擊購買",8,L)])])])])]))),128))])])])])]),t("div",{class:"cart_car",onClick:h},T)]))}},K=B($,[["__scopeId","data-v-fbb8a3b0"]]);export{K as default};