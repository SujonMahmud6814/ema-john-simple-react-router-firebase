(this["webpackJsonpema-john-simple"]=this["webpackJsonpema-john-simple"]||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},55:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c.n(n),i=c(37),s=c.n(i),a=(c(51),c(17)),j=c(14),o=(c(52),c(9)),l=c(29),u=c(38),b={apiKey:"AIzaSyD6ODzJ7ulQphHzM1_AeShy8qvPnOcgTHo",authDomain:"ema-john-simple-229ae.firebaseapp.com",projectId:"ema-john-simple-229ae",storageBucket:"ema-john-simple-229ae.appspot.com",messagingSenderId:"441293931645",appId:"1:441293931645:web:e0eead17b61eb3ba065d14"};(function(){Object(u.a)(b)})();var d=new l.a,O=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(l.b)();return Object(n.useEffect)((function(){var e=Object(l.c)(i,(function(e){e&&r(e)}));return e}),[]),{user:c,signInUsingGoogle:function(){return Object(l.d)(i,d)},logOut:function(){Object(l.e)(i).then((function(){r({})}))}}},h=c(3),p=Object(n.createContext)(),x=function(e){var t=e.children,c=O();return Object(h.jsx)(p.Provider,{value:c,children:t})},f=function(){return Object(n.useContext)(p)},m=c.p+"static/media/logo.0dd9a510.png",v=(c(55),function(){var e=f(),t=e.user,c=e.logOut;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("img",{className:"logo",src:m,alt:""}),Object(h.jsxs)("nav",{children:[Object(h.jsx)(a.c,{to:"/shop",children:"Shop"}),Object(h.jsx)(a.c,{to:"/review",children:"Order Review"}),Object(h.jsx)(a.c,{to:"/inventory",children:"Manage Inventory"}),t.displayName&&Object(h.jsxs)("span",{style:{color:"white"},children:["Hello: ",t.displayName]}),t.displayName?Object(h.jsx)("button",{onClick:c,children:"Log Out"}):Object(h.jsx)(a.c,{to:"/login",children:"Login"})]})]})}),g=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"This is Inventory"})})},y=(c(63),function(){var e,t=f().signInUsingGoogle,c=Object(j.h)(),n=Object(j.g)(),r=(null===(e=c.state)||void 0===e?void 0:e.from)||"/shop";return Object(h.jsx)("div",{className:"login-form",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"email",name:"",id:"",placeholder:"Your Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"",id:"",placeholder:"Your password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Submit",id:""})," "]}),Object(h.jsxs)("p",{children:["new to ema-john website?"," ",Object(h.jsx)(a.b,{to:"/register",children:"Create Account"})]}),Object(h.jsx)("div",{children:"-----------------or----------------------"}),Object(h.jsx)("button",{onClick:function(){t().then((function(e){n.push(r)}))},className:"btn-regular",children:"Google Sign In"})]})})}),N=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"404"}),Object(h.jsx)("h3",{children:"The page you are looking for is not available"})]})},S=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("./products.json").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),[c,r]},k=function(){return localStorage.getItem("shopping_cart")},w=function(e){localStorage.setItem("shopping_cart",JSON.stringify(e))},C=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){if(e.length){var t=function(){var e=k();return e?JSON.parse(e):{}}(),c=[],n=function(n){var r=e.find((function(e){return e.key===n}));if(r){var i=t[n];r.quantity=i,c.push(r)}};for(var r in t)n(r);i(c)}}),[e]),[r,i]},I=c(11),q=(c(64),function(e){var t,c=e.cart,n=0,r=0,i=Object(I.a)(c);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.quantity||(s.quantity=1),r+=s.price*s.quantity,n+=s.quantity}}catch(l){i.e(l)}finally{i.f()}var a=r>0?15:0,j=.1*(r+a),o=r+a+j;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Order Summary"}),Object(h.jsxs)("h5",{children:["Items Ordered: ",n]}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["Total: ",r.toFixed(2)]}),Object(h.jsxs)("p",{children:["Shipping: ",a]}),Object(h.jsxs)("p",{children:["tax: ",j.toFixed(2)]}),Object(h.jsxs)("p",{children:["Grand Total: ",o.toFixed(2)]}),e.children]})}),P=function(e){var t=e.product,c=t.name,n=t.price,r=t.quantity,i=t.key,s=e.handleRemove;return Object(h.jsx)("div",{className:"product",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"product-name",children:c}),Object(h.jsxs)("p",{children:["Price: ",n]}),Object(h.jsxs)("p",{children:["Quantity: ",r]}),Object(h.jsx)("button",{onClick:function(){return s(i)},className:"btn-regular",children:"Remove"})]})})},T=function(){var e=S(),t=Object(o.a)(e,1)[0],c=C(t),n=Object(o.a)(c,2),r=n[0],i=n[1],s=Object(j.g)(),a=function(e){var t=r.filter((function(t){return t.key!==e}));i(t),function(e){var t=k();if(t){var c=JSON.parse(t);delete c[e],w(c)}}(e)};return Object(h.jsxs)("div",{className:"shop-container",children:[Object(h.jsx)("div",{className:"product-container",children:r.map((function(e){return Object(h.jsx)(P,{product:e,handleRemove:a},e.key)}))}),Object(h.jsx)("div",{className:"cart-container",children:Object(h.jsx)(q,{cart:r,children:Object(h.jsx)("button",{onClick:function(){s.push("/shipping")},className:"btn-regular",children:"Proceed to Shipping"})})})]})},A=c.p+"static/media/giphy.46a86830.gif",E=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:A,alt:""})})},F=c(22),L=c(46),R=["children"],J=function(e){var t=e.children,c=Object(L.a)(e,R),n=f().user;return Object(h.jsx)(j.b,Object(F.a)(Object(F.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(h.jsx)(j.a,{to:{pathname:"/login",state:{from:c}}})}}))},G=(c(65),function(){return Object(h.jsx)("div",{className:"register-form",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Register: Create Account"}),Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("input",{type:"email",placeholder:"Your Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"",id:"",placeholder:"Your Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"",id:"",placeholder:"Re Enter Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]}),Object(h.jsxs)("p",{children:["Already have an account? ",Object(h.jsx)(a.b,{to:"login",children:"Login"})]}),Object(h.jsx)("div",{children:"-----------------or----------------------"}),Object(h.jsx)("button",{className:"btn-regular",children:"Google Sign In"})]})})}),V=c(41),Y=(c(66),function(){var e=Object(V.a)(),t=e.register,c=e.handleSubmit,n=e.formState.errors,r=f().user;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"shipping-form",onSubmit:c((function(e){return console.log(e)})),children:[Object(h.jsx)("input",Object(F.a)({defaultValue:r.displayName},t("name"))),Object(h.jsx)("input",Object(F.a)({defaultValue:r.email},t("email",{required:!0}))),n.email&&Object(h.jsx)("span",{className:"error",children:"This field is required"}),Object(h.jsx)("input",Object(F.a)(Object(F.a)({defaultValue:""},t("Address")),{},{placeholder:"Address"})),Object(h.jsx)("input",Object(F.a)({defaultValue:""},t("Phone"))),Object(h.jsx)("input",Object(F.a)(Object(F.a)({defaultValue:""},t("City")),{},{placeholder:"phone Number"})),Object(h.jsx)("input",{type:"submit"})]})})}),D=c(10),z=c(42),B=c(44),H=(c(70),c(43)),M=function(e){var t=e.product,c=t.name,n=t.img,r=t.seller,i=t.price,s=t.stock,a=t.star;return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:n,alt:""})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"product-name",children:c}),Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:["by: ",r]})}),Object(h.jsxs)("p",{children:["Price: ",i]}),Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:["only ",s," left in stock - order soon"]})}),Object(h.jsx)(H.a,{initialRating:a,emptySymbol:"far fa-star icon-color",fullSymbol:"fas fa-star icon-color",readonly:!0}),Object(h.jsx)("br",{}),Object(h.jsxs)("button",{onClick:function(){return e.handleAddToCart(e.product)},className:"btn-regular",children:[Object(h.jsx)(z.a,{icon:B.a})," add to cart"]})]})]})},_=(c(71),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],i=C(c),s=Object(o.a)(i,2),j=s[0],l=s[1],u=Object(n.useState)([]),b=Object(o.a)(u,2),d=b[0],O=b[1];Object(n.useEffect)((function(){fetch("./products.json").then((function(e){return e.json()})).then((function(e){r(e),O(e)}))}),[]);var p=function(e){var t=j.find((function(t){return t.key===e.key})),c=[];if(t){var n=j.filter((function(t){return t.key!==e.key}));t.quantity=t.quantity+1,c=[].concat(Object(D.a)(n),[e])}else e.quantity=1,c=[].concat(Object(D.a)(j),[e]);l(c),function(e){var t=k(),c={};if(t)if((c=JSON.parse(t))[e]){var n=c[e]+1;c[e]=n}else c[e]=1;else c[e]=1;w(c)}(e.key)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"search-container",children:Object(h.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value,n=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));O(n)},placeholder:"Search Product"})}),Object(h.jsxs)("div",{className:"shop-container",children:[Object(h.jsx)("div",{className:"product-container",children:d.map((function(e){return Object(h.jsx)(M,{product:e,handleAddToCart:p},e.key)}))}),Object(h.jsx)("div",{className:"cart-container",children:Object(h.jsx)(q,{cart:j,children:Object(h.jsx)(a.b,{to:"/review",children:Object(h.jsx)("button",{className:"btn-regular",children:"Review Your Order"})})})})]})]})});var Q=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(x,{children:Object(h.jsxs)(a.a,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",children:Object(h.jsx)(_,{})}),Object(h.jsx)(j.b,{path:"/shop",children:Object(h.jsx)(_,{})}),Object(h.jsx)(j.b,{path:"/review",children:Object(h.jsx)(T,{})}),Object(h.jsx)(J,{path:"/inventory",children:Object(h.jsx)(g,{})}),Object(h.jsx)(J,{path:"/shipping",children:Object(h.jsx)(Y,{})}),Object(h.jsx)(J,{path:"/placeorder",children:Object(h.jsx)(E,{})}),Object(h.jsx)(j.b,{path:"/login",children:Object(h.jsx)(y,{})}),Object(h.jsx)(j.b,{path:"/register",children:Object(h.jsx)(G,{})}),Object(h.jsx)(j.b,{path:"*",children:Object(h.jsx)(N,{})})]})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.9d67f7b8.chunk.js.map