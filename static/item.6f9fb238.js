import{r as u,g as h,m as b,c as g,a as t,t as c,o as y}from"./entry.0f159df8.js";const k={class:"item_img produce p_2"},f=t("section",{class:"py-2 text-center banner"},[t("div",{class:"row py-lg-5"},[t("div",{class:""},[t("h1",null,"產品頁面"),t("p",null,"product page")])])],-1),$={class:"container"},q={class:"d-flex item_main"},N={class:"left"},x={class:"image"},B=["src"],C={class:"right"},D={class:"top"},I=t("p",null,[t("b",null,"商品名稱：")],-1),R={class:""},w=t("p",null,[t("b",null,"商品價錢：")],-1),E=t("li",null,[t("p",null,[t("b",null,"商品介紹：")]),t("p",null," 手錶的普及化要推遲至二十世紀初。在1904年，經營珠寶的法國商人路易斯·弗朗索瓦·卡地亞接到飛行員好友亞伯托·桑托斯·杜蒙的抱怨：當駕駛飛機時要把懷錶從口袋裡拿出來十分困難，希望他協助解決這個問題，以便在飛行途中也能看到時間。因此卡地亞便想出了用皮帶及扣，將懷錶綁在手上的方法，以解決好友的難題。而這種綁在手上的懷錶，就是現今的手錶 ")],-1),S=t("p",null,[t("b",null,"商品數量：")],-1),V={class:"bottom"},j=t("hr",null,null,-1),H={__name:"item",setup(z){const s=u(""),e=u(""),n=u(""),a=h(),_=b(),i=a.query.name,o=a.query.description,r=a.query.image;i&&o&&r&&(s.value=i,e.value=o,n.value=r);const l=u(1),p=()=>{l.value++,e.value=`${parseInt(e.value)+Number(o)}`},v=()=>{l.value>1&&(l.value--,e.value=`${parseInt(e.value)-Number(o)}`)},m=()=>{_.push({path:"/buy_item",query:{productName:s.value,productDescription:e.value,quantity:l.value,imagee:n.value}})};return(A,d)=>(y(),g("main",k,[f,t("div",$,[t("div",q,[t("div",N,[t("div",x,[t("img",{src:n.value},null,8,B)])]),t("div",C,[t("div",D,[t("li",null,[I,t("p",R,[t("b",null,c(s.value),1)])]),t("li",null,[w,t("p",null,[t("b",null,c(e.value)+"元",1)])]),E,t("li",null,[S,t("div",null,[t("button",{class:"btn btn-outline-dark",onClick:v},"-"),t("span",null,c(l.value),1),t("button",{class:"btn btn-outline-dark",onClick:p},"+")])])]),t("div",V,[j,t("button",{class:"btn btn-dark",onClick:d[0]||(d[0]=F=>m(`${n.value}`,`${s.value}`,`${e.value}`,`${l.value}`))},"購買此商品")])])])])]))}};export{H as default};
