(this["webpackJsonpfood-online-order"]=this["webpackJsonpfood-online-order"]||[]).push([[0],{63:function(e,c,t){},64:function(e,c,t){},69:function(e,c,t){"use strict";t.r(c);var s=t(18),i=t(8),n=t(11),r=t(1),a=t(4),j=t(9),l=t(5),d=t(7),b=t(23),o=(t(63),t(0)),O=function(e){var c=e.name,t=e.photoUrl,s=e.price,i=e.count,n=e.ruiid,r=Object(a.b)();return Object(o.jsxs)("div",{className:"cartItem",children:[Object(o.jsxs)("div",{className:"nameDeleteItem",children:[Object(o.jsx)("div",{className:"name",children:Object(o.jsx)("h3",{children:c})}),Object(o.jsx)("div",{className:"deleteItem",onClick:function(){r(Object(j.f)(n))},children:Object(o.jsx)(b.a,{type:d.b.close})})]}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:"photo",children:Object(o.jsx)("img",{src:t,alt:"img"})}),Object(o.jsxs)("div",{className:"priceCounter",children:[Object(o.jsx)("div",{className:"price",children:Object(o.jsxs)("h3",{children:["$ ",s]})}),Object(o.jsxs)("div",{className:"counter",children:[Object(o.jsx)("div",{className:"decrease",onClick:function(){r(Object(j.e)(n))},children:Object(o.jsx)(b.a,{type:d.b.minus})}),Object(o.jsx)("div",{className:"currentCount",children:Object(o.jsx)("p",{children:i})}),Object(o.jsx)("div",{className:"increase",onClick:function(){r(Object(j.g)(n))},children:Object(o.jsx)(b.a,{type:d.b.plus})})]})]})]})]})};t(64),c.default=function(e){var c=e.style,t=Object(r.useState)(0),u=Object(n.a)(t,2),h=u[0],m=u[1],f=Object(a.b)(),x=Object(a.c)((function(e){return{cart:Object(l.a)(e)}})).cart;Object(r.useEffect)((function(){if(x){var e=0;x.forEach((function(c){var t=c.price,s=c.count;e+=t*s})),m(e)}}),[x]),Object(r.useEffect)((function(){return function(){f(Object(j.d)()),f(Object(j.l)())}}),[f]);return Object(o.jsx)("div",{className:"cartRightWrapper",style:Object(i.a)(Object(i.a)({},c),{},{width:d.a,transition:"".concat(d.f,"ms")}),children:Object(o.jsxs)("div",{className:"cartRight",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("div",{className:"totalPrice",children:Object(o.jsx)("h3",{children:h?"Total $ ".concat(h):"Cart is Empty"})}),Object(o.jsx)("div",{className:"closeCart",onClick:function(){f(Object(j.l)()),setTimeout((function(){return f(Object(j.d)())}),d.f)},children:Object(o.jsx)(b.a,{type:d.b.close})})]}),Object(o.jsx)("div",{className:"cartItems",children:x&&x.map((function(e){var c=e.ruiid,t=Object(s.a)(e,["ruiid"]);return Object(o.jsx)(O,Object(i.a)({ruiid:c},t),c)}))}),h?Object(o.jsx)("div",{className:"order",children:Object(o.jsx)("div",{onClick:function(){f(Object(j.l)()),setTimeout((function(){return f(Object(j.d)())}),d.f),f(Object(j.h)())},children:"Order"})}):null]})})}}}]);
//# sourceMappingURL=0.e50d65a3.chunk.js.map