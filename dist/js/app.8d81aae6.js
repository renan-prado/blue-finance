(function(e){function t(t){for(var a,s,r=t[0],c=t[1],l=t[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0079":function(e,t,n){"use strict";var a=n("9258"),i=n.n(a);i.a},"206d":function(e,t,n){"use strict";var a=n("e50d"),i=n.n(a);i.a},"2efd":function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyC35jfcP53X6z6cLphTbz8QGWaNfk5mpmI","authDomain":"bluefinance.firebaseapp.com","databaseURL":"https://bluefinance.firebaseio.com","projectId":"bluefinance","storageBucket":"","messagingSenderId":"428977053117","appId":"1:428977053117:web:8608a9257755ba046186d4","measurementId":"G-9KFF4TBZL0"}')},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),r={},c=Object(s["a"])(r,i,o,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("This is an home page")])])}],p=n("d225"),m=n("bd86"),g=n("b0b4"),v=n("8aa5"),h=n.n(v),w=(n("bc3a"),n("2efd")),_=function(){function e(){Object(p["a"])(this,e),h.a.apps.length||h.a.initializeApp(w)}return Object(g["a"])(e,[{key:"userLogged",value:function(e){h.a.auth().onAuthStateChanged((function(t){e&&e(t||!1)}))}},{key:"save",value:function(e,t,n){this.userLogged((function(a){a?h.a.database().ref((e?"/users/":"/")+a.uid+e).set(t,n):n(!1)}))}},{key:"saveFinance",value:function(e,t,n){this.userLogged((function(a){a?h.a.database().ref("/finance/"+e).set(t,n):n(!1)}))}},{key:"get",value:function(e,t){var n=h.a.database().ref(e);n.on("value",(function(e){return t(e.val())}))}},{key:"createUser",value:function(e,t,n){h.a.auth().createUserWithEmailAndPassword(e,t).catch((function(e){var t=e.code,a=t.code,i=t.message;n&&(a?n(a,i):n(!1))}))}},{key:"login",value:function(e,t,n){h.a.auth().signInWithEmailAndPassword(e,t).catch((function(e){var t=e.code,a=t.code,i=t.message;n&&(a?n(a,i):n(!1))}))}},{key:"logout",value:function(){h.a.auth().signOut().then((function(){window.location.href="/#/login"})).catch((function(e){console.warn("Erro ao fazer logout")}))}},{key:"verifyEmail",value:function(e,t){h.a.auth().fetchSignInMethodsForEmail(e).then((function(e){t(e.length>0)}))}}]),e}(),b=new _,y=function e(){Object(p["a"])(this,e),Object(m["a"])(this,"authPage",(function(){b.userLogged((function(e){e||(window.location.href="/#/login")}))})),Object(m["a"])(this,"authPageLogin",(function(){b.userLogged((function(e){e&&(window.location.href="/#/")}))}))},C=new y,O={name:"home",created:function(){C.authPage()}},j=O,x=Object(s["a"])(j,d,f,!1,null,null,null),E=x.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"container"},[n("Loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),n("div",{staticClass:"login"},[n("div",{staticClass:"login__container"},[e._m(0),n("div",{staticClass:"login__content"},[n("div",{staticClass:"login__content-section"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Digite seu email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"login__content-section"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Digite sua senha"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"login__content-section"},[n("button",{on:{click:e.toLogin}},[e._v(" Entrar ")])])]),n("div",{staticClass:"login__footer"},[n("router-link",{attrs:{to:"/signup"}},[e._v("Criar uma conta")])],1)])])],1)])},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login__header"},[n("h1",[e._v(" Entrar ")])])}],k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})])}],$={name:"Loading"},A=$,N=(n("9d0c"),Object(s["a"])(A,k,S,!1,null,"33db014e",null)),I=N.exports,z=n("3d20"),U=n.n(z),T={name:"login",data:function(){return{email:"renanprado96@gmail.com",password:"egtsejbegtsejb",loading:!1}},created:function(){C.authPageLogin()},components:{Loading:I},methods:{toLogin:function(){var e=this;this.loading=!0;var t=this.email,n=this.password,a=U.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3});b.login(t,n,(function(t,n){e.loading=!1,a.fire({type:"warning",title:"O email ou a senha estão incorretos"})}))}}},D=T,M=(n("206d"),Object(s["a"])(D,P,L,!1,null,null,null)),B=M.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"container"},[n("Loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),n("div",{staticClass:"login"},[n("div",{staticClass:"login__container"},[e._m(0),n("div",{staticClass:"login__content"},[n("div",{staticClass:"login__content-section"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Digite o seu email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"login__content-section"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Digite a sua senha"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"login__content-section"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"password",placeholder:"Confirme a sua senha"},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value)}}})]),n("div",{staticClass:"login__content-section"},[n("button",{on:{click:e.signUp}},[e._v(" Cadastrar ")])])]),n("div",{staticClass:"login__footer"},[n("router-link",{attrs:{to:"/login"}},[e._v("Voltar á página de Login")])],1)])])],1)])},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login__header"},[n("h1",[e._v(" Cadastrar ")])])}],W=U.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3}),Z={name:"signup",data:function(){return{emailExisting:!1,email:"",password:"",passwordConfirm:"",loading:!1}},created:function(){C.authPageLogin()},components:{Loading:I},methods:{verifyEmail:function(e){var t=this;this.validateEmail(this.email)?b.verifyEmail(this.email,(function(n){t.emailExisting=n,n?(W.fire({type:"warning",title:"Email já cadastrado"}),t.loading=!1):e()})):(W.fire({type:"warning",title:"O email está em um formato incorreto"}),this.loading=!1)},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())},verifyPassword:function(e){var t=this.password==this.passwordConfirm;t?this.password.length<8?(W.fire({type:"warning",title:"A senha tem que conter pelo menos 8 caracteres"}),this.loading=!1):e():(W.fire({type:"warning",title:"As senhas estão diferentes"}),this.loading=!1)},signUp:function(){var e=this;this.loading=!0,this.verifyEmail((function(){e.verifyPassword((function(){b.createUser(e.email,e.password)}))}))}}},G=Z,K=(n("0079"),Object(s["a"])(G,F,J,!1,null,null,null)),q=K.exports;a["a"].use(u["a"]);var Q=new u["a"]({routes:[{path:"/",name:"home",component:E},{path:"/login",name:"login",component:B},{path:"/signup",name:"SignUp",component:q}]});a["a"].config.productionTip=!1,new a["a"]({router:Q,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),i=n.n(a);i.a},9258:function(e,t,n){},"9d0c":function(e,t,n){"use strict";var a=n("c701"),i=n.n(a);i.a},c701:function(e,t,n){},cf1c:function(e,t,n){e.exports=n.p+"img/loading.48d7fbe8.gif"},e332:function(e,t,n){},e50d:function(e,t,n){}});
//# sourceMappingURL=app.8d81aae6.js.map