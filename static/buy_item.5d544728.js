import{r as i,g as D,h as R,c as n,a as e,t as r,i as m,v as f,j as _,f as v,o as u}from"./entry.0b1181e2.js";const I={class:"buy_item produce p_3"},E=e("section",{class:"py-2 text-center banner"},[e("div",{class:"row py-lg-5"},[e("div",{class:""},[e("h1",null,"結帳頁面"),e("p",null,"Checkout screen")])])],-1),g={class:"container"},q=e("div",{class:"produce_introduce"},[e("p",null,"商品照片"),e("p",null,"商品名稱"),e("p",null,"商品數量"),e("p",null,"商品價錢"),e("p")],-1),N={class:"produce_item"},V={class:"image"},w=["src"],C={class:"quantity_item"},H={class:"price"},B={class:"produce_form"},S={class:"d-flex form_main"},U={class:"form_item"},$=e("p",{class:"title"},"運送方式",-1),O={class:"form-check"},j=e("label",{class:"form-check-label",for:"flexRadioDefault1"}," 超商取貨付款 ",-1),K={class:"form-check"},M=e("label",{class:"form-check-label",for:"flexRadioDefault2"}," 超商取貨 ",-1),z={class:"form-check"},A=e("label",{class:"form-check-label",for:"flexRadioDefault2"}," 郵寄 ",-1),F={key:0,class:"pickup"},G=v('<hr><ul><li><input class="form-check-input" type="radio" name="flexRadioDefaultt" id="flexRadioDefault3"><label class="form-check-label" for="flexRadioDefault3"><p>7-11取貨付款</p><p>運費:60元</p></label></li><li><input class="form-check-input" type="radio" name="flexRadioDefaultt" id="flexRadioDefault4"><label class="form-check-label" for="flexRadioDefault4"><p>全家取貨付款</p><p>運費:60元</p></label></li><li><input class="form-check-input" type="radio" name="flexRadioDefaultt" id="flexRadioDefault4"><label class="form-check-label" for="flexRadioDefault4"><p>OK取貨付款</p><p>運費:60元</p></label></li></ul>',2),J=[G],L={key:1,class:"payment"},P=v('<hr><p>新增信用卡</p><input type="text" placeholder="持有人姓名"><input type="text" placeholder="卡號"><div class="d-flex item"><input type="text" placeholder="月份"><input type="text" placeholder="西元"><input type="text" placeholder="安全碼"></div><button class="btn btn-dark">確認</button>',6),Q=[P],T={key:2,class:"mail"},W=e("hr",null,null,-1),X=e("p",null,"收件人地址 :",-1),Y=e("input",{type:"text"},null,-1),Z=[W,X,Y],ee=v('<div class="form_item"><p class="title">聯絡資訊</p><div class="row"><div class="col-6"><label for="exampleInputEmail1" class="form-label">名稱 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><div class="col-6"><label for="exampleInputEmail1" class="form-label">地址 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div></div><div class="row"><div class="col-6"><label for="exampleInputEmail1" class="form-label">手機 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><div class="col-6"><label for="exampleInputEmail1" class="form-label">地址 :</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div></div><label for="exampleInputEmail2" class="form-label">訊息 :</label><textarea id="exampleInputEmail2" class="" cols="" rows="6"></textarea><button class="btn btn-dark">確認送出</button></div>',1),se={__name:"buy_item",setup(le){const d=i(""),a=i(""),t=i(""),p=i(""),l=i(""),c=D(),h=R(),x=()=>{d.value="",a.value="",t.value="",p.value="",l.value="",localStorage.removeItem("productData"),h.push("/kind")};d.value=c.query.productName,a.value=c.query.productDescription,t.value=c.query.quantity,p.value=c.query.imagee;const b=`${parseInt(a.value)/parseInt(t.value)}`,y=()=>{t.value++,a.value=`${parseInt(a.value)+Number(b)}`},k=()=>{t.value>1&&(t.value--,a.value=`${parseInt(a.value)-Number(b)}`)};return(ae,s)=>(u(),n("main",I,[E,e("div",g,[e("ul",null,[e("li",null,[q,e("div",N,[e("div",V,[e("img",{src:p.value},null,8,w)]),e("p",null,[e("b",null,r(d.value),1)]),e("div",C,[e("button",{class:"btn btn-outline-dark",onClick:k},"-"),e("span",null,r(t.value),1),e("button",{class:"btn btn-outline-dark",onClick:y},"+")]),e("p",H,r(a.value),1),e("button",{class:"btn btn-dark",onClick:x},"刪除")])])]),e("div",B,[e("div",S,[e("div",U,[$,e("div",O,[m(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:"pickup","onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o)},null,512),[[f,l.value]]),j]),e("div",K,[m(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"payment","onUpdate:modelValue":s[1]||(s[1]=o=>l.value=o)},null,512),[[f,l.value]]),M]),e("div",z,[m(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"mail","onUpdate:modelValue":s[2]||(s[2]=o=>l.value=o)},null,512),[[f,l.value]]),A]),l.value==="pickup"?(u(),n("div",F,J)):_("",!0),l.value==="payment"?(u(),n("div",L,Q)):_("",!0),l.value==="mail"?(u(),n("div",T,Z)):_("",!0)]),ee])])])]))}};export{se as default};