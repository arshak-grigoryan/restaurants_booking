(this.webpackJsonprestaurants_booking=this.webpackJsonprestaurants_booking||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(13),i=c.n(r),s=c(2),a=c(15),u=c(30),j=c(4),o=c(20),l="ADD_RESTAURANTS",d="ADD_SEARCH_NAME",b="SELECT_CUISINE",O="OPEN_CART",h="CLOSE_CART",f="CART_OPENING_ANIMATION",m="CART_CLOSING_ANIMATION",x="ADD_CART_ITEM",p="DELETE_CART_ITEM",v="INCREASE_CART_ITEM",N="DECREASE_CART_ITEM",C="ORDER",g="INVOICE_MODAL",y={cart:[],isCart:!1,isCartAnimating:!1,isInvoiceModal:!1},E=Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case O:return e.isCart=!0,e;case h:return e.isCart=!1,e;case f:return e.isCartAnimating=!0,e;case m:return e.isCartAnimating=!1,e;case x:var r=e.cart.find((function(e){return e.ruiid===n.item.ruiid}));return r?e.cart.forEach((function(e){e.ruiid===n.item.ruiid&&(e=Object(j.a)(Object(j.a)({},e),{},{count:e.count++}))})):e.cart.push(Object(j.a)(Object(j.a)({},n.item),{},{ruiid:n.item.ruiid,count:1})),e;case p:return e.cart.forEach((function(t,c){t.ruiid===n.ruiid&&e.cart.splice(c,1)})),e;case v:return e.cart.forEach((function(e){e.ruiid===n.ruiid&&(e=Object(j.a)(Object(j.a)({},e),{},{count:e.count++}))})),e;case N:return e.cart.forEach((function(t,c){t.ruiid===n.ruiid&&(t.count>1?t=Object(j.a)(Object(j.a)({},t),{},{count:t.count--}):e.cart.splice(c,1))})),e;case C:return e.cart=[],e;case g:return e.isInvoiceModal=!e.isInvoiceModal,e;default:return e}})),I={restaurants:[],searchedName:"",selectedCuisine:"all"},A={cartReducer:E,otherReducer:Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case l:return n.restaurants.forEach((function(t){e.restaurants.push(t)})),e;case d:return e.searchedName=n.name.toLowerCase(),e;case b:return e.selectedCuisine=n.cuisine,e;default:return e}}))},S=Object(a.createStore)(Object(a.combineReducers)(A),Object(u.composeWithDevTools)()),R=(c(40),function(e){return e.cartReducer.cart}),k=function(e){return e.cartReducer.isCart},w=function(e){return e.cartReducer.isCartAnimating},T=function(e){return e.cartReducer.isInvoiceModal},M=function(e){return e.otherReducer.restaurants},_=function(e){return e.otherReducer.searchedName},D=function(e){return e.otherReducer.selectedCuisine},F=c(12),W=c(5),L=(c(41),c(0)),P=function(){return Object(L.jsx)("div",{className:"notFound",children:"Not Found"})},$="".concat("/restaurants_booking","/mock/restaurants.json"),B="".concat("/restaurants_booking","/mock/cuisines.json"),U="fas fa-shopping-cart",J="fas fa-times",H="fas fa-arrow-left",G="fas fa-minus",z="fas fa-plus",V=300,Y="300px",q=["January","February","March","April","May","June","July","August","September","October","November","December"],K=c(6),Q=c(18),X=c.n(Q),Z=c(25);var ee=function(e){Object(n.useEffect)(e,[])},te=new Map,ce=function(){var e=Object(Z.a)(X.a.mark((function e(t){var c,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!te.has(t)){e.next=2;break}return e.abrupt("return",te.get(t));case 2:return e.prev=2,e.next=5,fetch(t);case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,te.set(t,n),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(e){var t=Object(W.g)(),c=Object(n.useState)(),r=Object(K.a)(c,2),i=r[0],s=r[1];return ee((function(){Object(Z.a)(X.a.mark((function c(){var n;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ce(e);case 2:(n=c.sent)instanceof Error?t.replace("/notfound"):s(n);case 4:case"end":return c.stop()}}),c)})))()})),i},re=function(){return{type:h}},ie=function(e){return{type:d,payload:{name:e}}},se=function(e){return{type:b,payload:{cuisine:e}}},ae=function(){return{type:m}},ue=function(){return{type:g}},je=(c(45),function(){var e=Object(s.b)(),t=ne(B),c=Object(s.c)((function(e){return{selectCusine:D(e)}})).selectedCuisine;return ee((function(){"all"!==c&&e(se("all"))})),Object(L.jsx)("div",{className:"selectOptions",children:Object(L.jsxs)("select",{onChange:function(t){return function(t){e(se(t.target.value))}(t)},children:[Object(L.jsx)("option",{value:"all",children:"All"}),t&&t.map((function(e,t){return Object(L.jsx)("option",{value:e.abbr,children:e.name},t)}))]})})}),oe=(c(46),function(e){var t=e.placeholder,c=void 0===t?"search":t,n=e.isRestaurantsSearch,r=void 0!==n&&n,i=Object(s.b)(),a=Object(s.c)((function(e){return{searchedName:_(e)}})).searchedName;ee((function(){""!==a&&i(ie(""))}));return Object(L.jsx)("div",{className:r?"search restaurantsSearch":"search",children:Object(L.jsx)("input",{type:"text",placeholder:c,onChange:function(e){return function(e){i(ie(e.target.value))}(e)}})})});c(47);var le=function(e){var t=e.type,c=e.style,n=void 0===c?{}:c;return Object(L.jsx)("div",{className:"faicon",children:Object(L.jsx)("i",{className:t,style:n})})},de=(c(48),function(){var e=Object(n.useState)(),t=Object(K.a)(e,2),c=t[0],r=t[1],i=Object(s.b)(),a=Object(s.c)((function(e){return{cart:R(e)}})).cart;Object(n.useEffect)((function(){var e=0;a.forEach((function(t){var c=t.count;e+=c})),r(e)}),[a]);return c?Object(L.jsxs)("div",{className:"shoppingCart",onClick:function(){i({type:O}),setTimeout((function(){return i({type:f})}))},children:[Object(L.jsx)(le,{type:U,style:{fontSize:"20px"}}),Object(L.jsx)("sup",{children:c})]}):null}),be=(c(49),function(e){var t=e.isSelectOptionExist,c=void 0!==t&&t,n=e.placeholder,r=e.isBackExist,i=void 0!==r&&r,a=e.isRestaurantsSearch,u=Object(W.g)(),j=Object(s.c)((function(e){return{isCart:k(e)}})).isCart;return Object(L.jsxs)("div",{className:"header",children:[Object(L.jsx)("div",{className:"left",children:i&&Object(L.jsx)("button",{onClick:function(){u.push("/")},children:Object(L.jsx)(le,{type:H,style:{color:"#2c3e50"}})})}),Object(L.jsxs)("div",{className:"searchFilter",children:[c&&Object(L.jsx)(je,{}),Object(L.jsx)(oe,{placeholder:n,isRestaurantsSearch:a})]}),Object(L.jsx)("div",{className:"cart",children:!j&&Object(L.jsx)(de,{})})]})}),Oe=c(11),he=(c(50),function(e){var t=e.id,c=e.name,n=e.photoUrl,r=e.cuisines,i=Object(W.g)();return Object(L.jsx)("div",{className:"restaurantItemWrapper",children:Object(L.jsxs)("div",{className:"restaurantItem",onClick:function(){i.push("/restaurants/".concat(t))},children:[Object(L.jsx)("div",{className:"photo",style:{backgroundImage:"url(".concat(n,")")}}),Object(L.jsx)("h2",{children:c}),Object(L.jsx)("div",{className:"cuisines",children:r.map((function(e,t){return Object(L.jsx)("div",{className:"cuisineWrapper",children:Object(L.jsx)("div",{className:"cuisine",children:e})},t)}))})]})})}),fe=(c(51),function(){var e=Object(s.b)(),t=ne($),c=Object(s.c)((function(e){return{restaurants:M(e),searchedName:_(e),selectedCuisine:D(e)}})),r=c.restaurants,i=c.searchedName,a=c.selectedCuisine;return Object(n.useEffect)((function(){r.length||t&&e(function(e){return{type:l,payload:{restaurants:e}}}(t))}),[e,t,r]),Object(L.jsx)("div",{className:"restaurants",children:r.filter((function(e){var t=e.cuisines;return"all"===a||t.includes(a)})).filter((function(e){return e.name.toLowerCase().includes(i)})).map((function(e){var t=e.id,c=Object(Oe.a)(e,["id"]);return Object(L.jsx)(he,Object(j.a)({id:t},c),t)}))})}),me=(c(52),function(e){var t=e.name,c=e.photoUrl,n=e.price,r=e.count,i=e.ruiid,a=Object(s.b)();return Object(L.jsxs)("div",{className:"cartItem",children:[Object(L.jsxs)("div",{className:"nameDeleteItem",children:[Object(L.jsx)("div",{className:"name",children:Object(L.jsx)("h3",{children:t})}),Object(L.jsx)("div",{className:"deleteItem",onClick:function(){a(function(e){return{type:p,payload:{ruiid:e}}}(i))},children:Object(L.jsx)(le,{type:J})})]}),Object(L.jsxs)("div",{className:"wrapper",children:[Object(L.jsx)("div",{className:"photo",children:Object(L.jsx)("img",{src:c,alt:"img"})}),Object(L.jsxs)("div",{className:"priceCounter",children:[Object(L.jsx)("div",{className:"price",children:Object(L.jsxs)("h3",{children:["$ ",n]})}),Object(L.jsxs)("div",{className:"counter",children:[Object(L.jsx)("div",{className:"decrease",onClick:function(){a(function(e){return{type:N,payload:{ruiid:e}}}(i))},children:Object(L.jsx)(le,{type:G})}),Object(L.jsx)("div",{className:"currentCount",children:Object(L.jsx)("p",{children:r})}),Object(L.jsx)("div",{className:"increase",onClick:function(){a(function(e){return{type:v,payload:{ruiid:e}}}(i))},children:Object(L.jsx)(le,{type:z})})]})]})]})]})}),xe=(c(53),function(e){var t=e.style,c=Object(n.useState)(0),r=Object(K.a)(c,2),i=r[0],a=r[1],u=Object(s.b)(),o=Object(s.c)((function(e){return{cart:R(e)}})).cart;Object(n.useEffect)((function(){if(o){var e=0;o.forEach((function(t){var c=t.price,n=t.count;e+=c*n})),a(e)}}),[o]),Object(n.useEffect)((function(){return function(){u(re()),u(ae())}}),[u]);return Object(L.jsx)("div",{className:"cartRightWrapper",style:Object(j.a)(Object(j.a)({},t),{},{width:Y,transition:"".concat(V,"ms")}),children:Object(L.jsxs)("div",{className:"cartRight",children:[Object(L.jsxs)("div",{className:"top",children:[Object(L.jsx)("div",{className:"totalPrice",children:Object(L.jsx)("h3",{children:i?"Total $ ".concat(i):"Cart is Empty"})}),Object(L.jsx)("div",{className:"closeCart",onClick:function(){u(ae()),setTimeout((function(){return u(re())}),V)},children:Object(L.jsx)(le,{type:J})})]}),Object(L.jsx)("div",{className:"cartItems",children:o&&o.map((function(e){var t=e.ruiid,c=Object(Oe.a)(e,["ruiid"]);return Object(L.jsx)(me,Object(j.a)({ruiid:t},c),t)}))}),i?Object(L.jsx)("div",{className:"order",children:Object(L.jsx)("div",{onClick:function(){u(ae()),setTimeout((function(){return u(re())}),V),u(ue())},children:"Order"})}):null]})})}),pe=(c(54),function(){var e=Object(s.c)((function(e){return{isCart:k(e),isCartAnimating:w(e)}})),t=e.isCart,c=e.isCartAnimating;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:"home",style:{width:c?"calc(100% - ".concat(Y,")"):"100%",transition:c?"".concat(V,"ms"):"0"},children:[Object(L.jsx)(be,{isSelectOptionExist:!0,placeholder:"Search Restaurants",isRestaurantsSearch:!0}),Object(L.jsx)(fe,{})]}),t&&Object(L.jsx)(xe,{style:{right:c?"0":"-".concat(Y)}})]})}),ve=c(31),Ne=(c(55),function(e){var t=e.id,c=e.ruiid,n=e.name,r=e.photoUrl,i=e.price,a=Object(s.b)();return Object(L.jsx)("div",{className:"menuItemWrapper",children:Object(L.jsxs)("div",{className:"menuItem",children:[Object(L.jsx)("div",{className:"photo",style:{backgroundImage:"url(".concat(r,")")}}),Object(L.jsx)("h2",{children:n}),Object(L.jsxs)("div",{className:"priceCart",children:[Object(L.jsxs)("div",{className:"price",children:["$ ",i]}),Object(L.jsx)("div",{className:"cart",onClick:function(){a({type:x,payload:{item:{id:t,name:n,photoUrl:r,price:i,ruiid:c}}})},children:Object(L.jsx)(le,{type:U})})]})]})})}),Ce=(c(56),function(){var e=Object(n.useState)(0),t=Object(K.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(999999999),a=Object(K.a)(i,2),u=a[0],o=a[1],l=Object(n.useState)(),d=Object(K.a)(l,2),b=d[0],O=d[1],h=Object(n.useState)(),f=Object(K.a)(h,2),m=f[0],x=f[1],p=Object(n.useState)(),v=Object(K.a)(p,2),N=v[0],C=v[1],g=Object(W.h)(),y=ne("/mock/menus/".concat(g.id,".json")),E=ne($),I=Object(s.c)((function(e){return{searchedName:_(e),isCart:k(e),isCartAnimating:w(e)}})),A=I.searchedName,S=I.isCart,R=I.isCartAnimating;Object(n.useEffect)((function(){if(E&&y){C(y);var e=E.find((function(e){return e.id===Number(g.id)}));e&&(x(e),b||O(e.cuisines))}}),[E,g,y,b]),Object(n.useEffect)((function(){return function(){return C(y)}}),[y]);return Object(L.jsxs)(L.Fragment,{children:[S&&Object(L.jsx)(xe,{style:{right:R?"0":"-".concat(Y)}}),Object(L.jsxs)("div",{className:"restaurant",style:{width:R?"calc(100% - ".concat(Y,")"):"100%",transition:R?"".concat(V,"ms"):"0"},children:[Object(L.jsx)(be,{placeholder:"Search Menu Items",isBackExist:!0}),Object(L.jsxs)("div",{className:"menuWrapper",children:[Object(L.jsx)("div",{className:"menuFilterWrapper",children:Object(L.jsxs)("div",{className:"menuFilter",children:[Object(L.jsxs)("div",{className:"cuisine",children:[Object(L.jsx)("h2",{children:"Cuisine"}),Object(L.jsx)("div",{className:"chechkboxItemsWrapper",children:m&&m.cuisines.map((function(e,t){return Object(L.jsxs)("div",{className:"chechkboxItem",children:[Object(L.jsx)("input",{type:"checkbox",id:e,name:e,value:e,onChange:function(e){return function(e){var t=e.target.checked,c=e.target.value;b.includes(c)&&t?O([c]):b.includes(c)&&!1===t?O((function(e){return e.filter((function(e){return e!==c}))})):!b.includes(c)&&t?O((function(e){return[].concat(Object(ve.a)(e),[c])})):O((function(e){return e}))}(e)}}),Object(L.jsx)("label",{htmlFor:e,children:e})]},t)}))})]}),Object(L.jsxs)("div",{className:"price",children:[Object(L.jsx)("h2",{children:"Price"}),Object(L.jsxs)("div",{className:"inputsWrapper",children:[Object(L.jsxs)("div",{className:"priceInput",children:[Object(L.jsx)("label",{htmlFor:"min",children:"Min $"}),Object(L.jsx)("input",{id:"min",type:"number",value:0===c?"":c,onChange:function(e){return function(e){r(e.target.value)}(e)}})]}),Object(L.jsxs)("div",{className:"priceInput",children:[Object(L.jsx)("label",{htmlFor:"min",children:"Max $"}),Object(L.jsx)("input",{id:"max",type:"number",value:999999999===u?"":u,onChange:function(e){return function(e){o(e.target.value)}(e)}})]})]})]})]})}),Object(L.jsx)("div",{className:"restaurantMenu",children:N&&N.filter((function(e){return e.name.toLowerCase().includes(A)})).filter((function(e){var t=e.cuisine;return!b||(!b.length||b.includes(t))})).filter((function(e){var t=e.price;return t>=c&&t<=u})).map((function(e){var t=e.id,c=e.name,n=Object(Oe.a)(e,["id","name"]);return Object(L.jsx)(Ne,Object(j.a)({ruiid:g.id+c+t,id:t,name:c},n),t)}))})]})]})]})});c(57);var ge=function(){return Object(L.jsx)("div",{className:"loadingWrapper",children:Object(L.jsxs)("div",{className:"lds-spinner",children:[Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{}),Object(L.jsx)("div",{})]})})},ye=function(e){var t=e.children,c=e.Fallback,r=void 0===c?ge:c;return Object(L.jsx)(n.Suspense,{fallback:Object(L.jsx)(r,{}),children:t})},Ee=function(e){var t=e.component,c=e.children,n=Object(Oe.a)(e,["component","children"]);return t?Object(L.jsx)(W.b,Object(j.a)(Object(j.a)({},n),{},{children:Object(L.jsx)(ye,{children:Object(L.jsx)(t,{})})})):Object(L.jsx)(W.b,Object(j.a)(Object(j.a)({},n),{},{children:Object(L.jsx)(ye,{children:c})}))},Ie=function(){return Object(L.jsx)(F.a,{children:Object(L.jsxs)(W.d,{children:[Object(L.jsx)(Ee,{exact:!0,path:"/restaurants",component:pe}),Object(L.jsx)(Ee,{exact:!0,path:"/restaurants/:id",component:Ce}),Object(L.jsx)(W.b,{exact:!0,path:"/notfound",component:P}),Object(L.jsx)(W.a,{from:"/",to:"/restaurants"}),Object(L.jsx)(W.a,{to:"/notfound"})]})})},Ae=(c(58),document.getElementById("modal")),Se=function(e){var t=e.children,c=document.createElement("div");return Object(n.useEffect)((function(){return Ae.appendChild(c),function(){return Ae.removeChild(c)}}),[t,c]),i.a.createPortal(t,c)},Re=(c(59),function(){var e=Object(s.b)(),t=Object(n.useState)(0),c=Object(K.a)(t,2),r=c[0],i=c[1],a=Object(n.useState)(),u=Object(K.a)(a,2),j=u[0],o=u[1],l=Object(n.useState)(),d=Object(K.a)(l,2),b=d[0],O=d[1],h=Object(s.c)((function(e){return{cart:R(e)}})).cart;Object(n.useEffect)((function(){if(j){var e=j.getBoundingClientRect().height;O(e)}else{var t=document.getElementById("modalTable");o(t)}}),[j]),Object(n.useEffect)((function(){var e=0;h.forEach((function(t){var c=t.price,n=t.count;e+=c*n})),i(e)}),[h]);return Object(L.jsx)("div",{className:"modalPopup",children:Object(L.jsxs)("div",{className:"order",children:[Object(L.jsxs)("div",{className:"top",children:[Object(L.jsxs)("div",{className:"w",children:[Object(L.jsxs)("span",{children:[(new Date).getHours(),":"]}),Object(L.jsxs)("span",{children:[(new Date).getMinutes(),":"]}),Object(L.jsx)("span",{children:(new Date).getSeconds()}),Object(L.jsx)("span",{className:"type",children:"AM"})]}),Object(L.jsxs)("div",{className:"dmy",children:[Object(L.jsx)("span",{children:(new Date).getDate()}),Object(L.jsx)("span",{children:q[(new Date).getMonth()]}),Object(L.jsx)("span",{children:(new Date).getFullYear()})]})]}),Object(L.jsx)("h1",{children:"Order"}),Object(L.jsx)("div",{id:"modalTable",className:"table",style:{height:b>window.innerHeight/2?window.innerHeight/2:b},children:Object(L.jsxs)("table",{children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:"Name"}),Object(L.jsx)("th",{children:"Price $"}),Object(L.jsx)("th",{children:"Count"}),Object(L.jsx)("th",{children:"Total $"})]})}),Object(L.jsxs)("tbody",{children:[h.map((function(e){var t=e.ruiid,c=e.name,n=e.price,r=e.count;return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:c}),Object(L.jsx)("td",{children:n}),Object(L.jsx)("td",{children:r}),Object(L.jsx)("td",{children:n*r})]},t)})),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{}),Object(L.jsx)("td",{}),Object(L.jsx)("td",{}),Object(L.jsx)("td",{children:r})]},"total")]})]})}),Object(L.jsx)("div",{className:"buttons",children:Object(L.jsx)("div",{className:"closeOrder",onClick:function(){e({type:C}),e(ue())},children:"Close"})})]})})}),ke=(c(60),function(){var e=Object(s.c)((function(e){return{isInvoiceModal:T(e)}})).isInvoiceModal;return Object(L.jsxs)("div",{className:"app",children:[Object(L.jsx)(Ie,{}),Object(L.jsx)(Se,{children:e&&Object(L.jsx)(Re,{})})]})});i.a.render(Object(L.jsx)(s.a,{store:S,children:Object(L.jsx)(ke,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f0400c4d.chunk.js.map