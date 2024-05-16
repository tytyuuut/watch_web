import{r as u,g,h as E,i as N,c as r,a as e,t as m,j as f,v,k as _,f as b,o as p}from"./entry.0f159df8.js";const q={class:"buy_item produce p_3"},S=e("section",{class:"py-2 text-center banner"},[e("div",{class:"row py-lg-5"},[e("div",{class:""},[e("h1",null,"結帳頁面"),e("p",null,"Checkout screen")])])],-1),w={class:"container"},O=e("div",{class:"produce_introduce"},[e("p",null,"商品照片"),e("p",null,"商品名稱"),e("p",null,"商品數量"),e("p",null,"商品價錢"),e("p")],-1),V={class:"produce"},C={class:"image"},H=["src"],B={class:"quantity_item"},U={class:"price"},$={class:"produce_form"},J={class:"d-flex form_main"},L={class:"form_item"},j=e("p",{class:"title"},"運送方式",-1),F={class:"form-check"},K=e("label",{class:"form-check-label",for:"flexRadioDefault1"}," 超商取貨付款 ",-1),M={class:"form-check"},T=e("label",{class:"form-check-label",for:"flexRadioDefault2"}," 超商取貨 ",-1),z={class:"form-check"},A=e("label",{class:"form-check-label",for:"flexRadioDefault2"}," 郵寄 ",-1),G={key:0,class:"pickup"},P=b('<hr><ul><li><input class="form-check-input" type="radio" name="flexRadioDefaultt" id="flexRadioDefault3"><label class="form-check-label" for="flexRadioDefault3"><p>7-11取貨付款</p><p>運費:60元</p></label></li><li><input class="form-check-input" type="radio" name="flexRadioDefaultt" id="flexRadioDefault4"><label class="form-check-label" for="flexRadioDefault4"><p>全家取貨付款</p><p>運費:60元</p></label></li><li><input class="form-check-input" type="radio" name="flexRadioDefaultt" id="flexRadioDefault4"><label class="form-check-label" for="flexRadioDefault4"><p>OK取貨付款</p><p>運費:60元</p></label></li></ul>',2),Q=[P],W={key:1,class:"payment"},X=b('<hr><p>新增信用卡</p><input type="text" placeholder="持有人姓名"><input type="text" placeholder="卡號"><div class="d-flex item"><input type="text" placeholder="月份"><input type="text" placeholder="西元"><input type="text" placeholder="安全碼"></div><button class="btn btn-dark">確認</button>',6),Y=[X],Z={key:2,class:"mail"},ee=e("hr",null,null,-1),le=e("p",null,"收件人地址 :",-1),ae=e("input",{type:"text"},null,-1),te=[ee,le,ae],oe=b('<div class="form_item"><p class="title">聯絡資訊</p><div class="row"><div class="col-6"><label for="exampleInputEmail1" class="form-label">名稱 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><div class="col-6"><label for="exampleInputEmail1" class="form-label">地址 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div></div><div class="row"><div class="col-6"><label for="exampleInputEmail1" class="form-label">手機 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><div class="col-6"><label for="exampleInputEmail1" class="form-label">地址 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div></div><label for="exampleInputEmail2" class="form-label">訊息 :</label><textarea id="exampleInputEmail2" class="" cols="" rows="6"></textarea><button class="btn btn-dark">確認送出</button></div>',1),ce={__name:"buy_item",setup(se){const s=u(""),t=u(""),o=u(""),i=u(""),l=u(""),d=g(),y=E(),x=()=>{const c=localStorage.getItem("productData");if(c){const a=JSON.parse(c);s.value=a.productName,t.value=a.productDescription,o.value=a.quantity,i.value=a.imageee,l.value=a.selectedOption}},k=()=>{const c={productName:s.value,productDescription:t.value,quantity:o.value,imageee:i.value,selectedOption:l.value};localStorage.setItem("productData",JSON.stringify(c))};x(),N([s,t,o,i,l],k,{deep:!0});const D=()=>{s.value="",t.value="",o.value="",i.value="",l.value="",localStorage.removeItem("productData"),y.push("/kind")};s.value=d.query.productName,t.value=d.query.productDescription,o.value=d.query.quantity,i.value=d.query.imagee;const h=`${parseInt(t.value)/parseInt(o.value)}`,R=()=>{o.value++,t.value=`${parseInt(t.value)+Number(h)}`},I=()=>{o.value>1&&(o.value--,t.value=`${parseInt(t.value)-Number(h)}`)};return(c,a)=>(p(),r("main",q,[S,e("div",w,[e("ul",null,[e("li",null,[O,e("div",V,[e("div",C,[e("img",{src:i.value},null,8,H)]),e("p",null,[e("b",null,m(s.value),1)]),e("div",B,[e("button",{class:"btn btn-outline-dark",onClick:I},"-"),e("span",null,m(o.value),1),e("button",{class:"btn btn-outline-dark",onClick:R},"+")]),e("p",U,m(t.value),1),e("button",{class:"btn btn-dark",onClick:D},"刪除")])])]),e("div",$,[e("div",J,[e("div",L,[j,e("div",F,[f(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:"pickup","onUpdate:modelValue":a[0]||(a[0]=n=>l.value=n)},null,512),[[v,l.value]]),K]),e("div",M,[f(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"payment","onUpdate:modelValue":a[1]||(a[1]=n=>l.value=n)},null,512),[[v,l.value]]),T]),e("div",z,[f(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"mail","onUpdate:modelValue":a[2]||(a[2]=n=>l.value=n)},null,512),[[v,l.value]]),A]),l.value==="pickup"?(p(),r("div",G,Q)):_("",!0),l.value==="payment"?(p(),r("div",W,Y)):_("",!0),l.value==="mail"?(p(),r("div",Z,te)):_("",!0)]),oe])])])]))}};export{ce as default};
