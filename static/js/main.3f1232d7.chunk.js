(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports={contact:"Contact_contact__31l3j",form:"Contact_form__3i2rf",field:"Contact_field__2nasJ",focus:"Contact_focus__1O-Nh",fieldTitle:"Contact_fieldTitle__o5rb-",filled:"Contact_filled__1vFKT",btn:"Contact_btn__3Ja9k",title:"Contact_title__f6Gvl index_title__jFlUs",contactBox:"Contact_contactBox__2Irh0 index_container__1fgwU"}},function(e,a,t){e.exports={skills:"Skills_skills__1WyTe",title:"Skills_title__2xoug index_title__jFlUs",skillsBox:"Skills_skillsBox__1GFOt index_container__1fgwU",skillDescription:"Skills_skillDescription__2GlSL",skillImg:"Skills_skillImg__3x_o3",skillTitle:"Skills_skillTitle__1sAmk",skillText:"Skills_skillText__19QFY"}},function(e,a,t){e.exports={work:"Work_work__3wRwu",workGallery:"Work_workGallery__a6DS- index_container__1fgwU",workDescription:"Work_workDescription__1FSC-",workInfo:"Work_workInfo__3hJrB",title:"Work_title__1_v4u",animate1:"Work_animate1__2q_z0",animate2:"Work_animate2__12d-Y",animate3:"Work_animate3__1eZYv",animate4:"Work_animate4__1jb6p",workImg:"Work_workImg__2PXy4",description:"Work_description__feSP1",workTitle:"Work_workTitle__3cJ9x index_title__jFlUs"}},,function(e,a,t){e.exports={footer:"Footer_footer__201Fb",contacts:"Footer_contacts__288iH index_container__1fgwU",list:"Footer_list__3350N",icon:"Footer_icon__190kD",link:"Footer_link__e_zsu",copyright:"Footer_copyright__355ee"}},,,function(e,a,t){e.exports={nav:"Nav_nav__28buN",list:"Nav_list__Fv8_x",active:"Nav_active__3l6ju",burgerMenu:"Nav_burgerMenu__2jwDg"}},function(e,a,t){e.exports={switcherContainer:"ThemeSwitcher_switcherContainer__3c4SU",switcher:"ThemeSwitcher_switcher__3Pr24",icon:"ThemeSwitcher_icon__3FAxN",active:"ThemeSwitcher_active__pdTWM"}},function(e,a,t){e.exports={main:"Main_main__OqtTb index_container__1fgwU",description:"Main_description__1RV_4",avatar:"Main_avatar__2Rpoq"}},,,,,function(e,a,t){e.exports={header:"Header_header__2O9oQ",headerWrapper:"Header_headerWrapper__18iYE index_container__1fgwU"}},function(e,a,t){e.exports=t.p+"static/media/work1.3d856333.jpg"},function(e,a,t){e.exports={preloader:"Preloader_preloader__1teC1",preloaderTitle:"Preloader_preloaderTitle__1C-zl",animate:"Preloader_animate__324wo"}},,function(e,a,t){},,,function(e,a,t){e.exports={app:"App_app__3ho77"}},,function(e,a,t){e.exports=t.p+"static/media/avatar.c3f042ec.jpeg"},function(e,a,t){e.exports=t.p+"static/media/logo-javascript.891a71b9.svg"},function(e,a,t){e.exports=t.p+"static/media/react.4009eef3.svg"},function(e,a,t){e.exports=t.p+"static/media/redux.aa0a3376.svg"},function(e,a,t){e.exports=t.p+"static/media/work2.b48116ab.jpg"},function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),i=(t(37),t(7)),o=t(25),s=t.n(o),m=t(11),_=t.n(m),u=t(10);t(22);function p(e){var a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){n?document.querySelector("body").classList.add("lock"):document.querySelector("body").classList.remove("lock")}),[n]),r.a.createElement("div",{className:_.a.nav},r.a.createElement("div",{className:"".concat(_.a.burgerMenu," ").concat(n?"icon-close":"icon-list-ul"),onClick:function(){return l((function(e){return!e}))}}," "),r.a.createElement("ul",{className:"".concat(_.a.list," ").concat(n?_.a.active:"")},["Home","Skills","Work","Contacts"].map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(u.b,{to:"Home"===e?"/":e.toLowerCase()},e))}))))}var d=t(18),E=t.n(d),f=t(12),k=t.n(f);function v(e){var a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:k.a.switcherContainer},r.a.createElement("label",{className:k.a.switcher},r.a.createElement("span",{className:"".concat(k.a.icon," ").concat(n?"icon-moon ".concat(k.a.active):"icon-sun")}," "),r.a.createElement("input",{onChange:function(){return l((function(e){return!e}))},checked:n,type:"checkbox"})))}function N(e){return r.a.createElement("header",{className:E.a.header},r.a.createElement("div",{className:E.a.headerWrapper},r.a.createElement(v,null),r.a.createElement(p,null)))}var h=t(13),g=t.n(h),x=t(27),w=t.n(x);function S(e){return r.a.createElement("main",{className:g.a.main},r.a.createElement("div",{className:g.a.description},r.a.createElement("span",null,"Hi"),r.a.createElement("h1",null,"I am ",r.a.createElement("span",null,"Andy")),r.a.createElement("p",null,"a ",r.a.createElement("span",null,"Frontend developer"))),r.a.createElement("div",{className:g.a.avatar},r.a.createElement("img",{src:w.a,alt:"Avatar"})))}var y=t(5),b=t.n(y),T=t(28),C=t.n(T),W=t(29),F=t.n(W),j=t(30),D=t.n(j);function I(e){var a=[{id:1,skill:"JavaScript",imgUrl:C.a,description:"Some txt"},{id:2,skill:"React",imgUrl:F.a,description:"Some txtSome txtSome txtSome txtSome txt"},{id:3,skill:"Redux",imgUrl:D.a,description:"Some txt"}];return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement("div",{key:e.id,className:b.a.skillDescription},r.a.createElement("div",{className:b.a.skillImg},r.a.createElement("img",{src:e.imgUrl,alt:e.skill})),r.a.createElement("div",{className:b.a.skillContent},r.a.createElement("h3",{className:b.a.skillTitle},e.skill),r.a.createElement("p",{className:b.a.skillText},e.description)))})))}function U(e){return r.a.createElement("section",{className:b.a.skills},r.a.createElement("h3",{className:b.a.title},"Skills"),r.a.createElement("div",{className:b.a.skillsBox},r.a.createElement(I,null)))}var A=t(6),G=t.n(A),O=t(19),B=t.n(O),M=t(31),q=t.n(M);function H(e){var a=[{id:1,title:"Title 1",description:"Description 1",imgUrl:B.a},{id:2,title:"Title 2",description:"Description 2 Description 2 Description 2 Description 2 Description 2",imgUrl:q.a},{id:3,title:"Title 3",description:"Description 3",imgUrl:B.a}];return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement("div",{key:e.id,className:G.a.workDescription},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("div",{className:G.a.workImg},r.a.createElement("img",{src:e.imgUrl,alt:e.title})),r.a.createElement("div",{className:G.a.workInfo},r.a.createElement("h3",{className:G.a.title},e.title),r.a.createElement("p",{className:G.a.description},e.description)),r.a.createElement("a",{href:"/"},"Demo"))})))}function R(e){return r.a.createElement("section",{className:G.a.work},r.a.createElement("h3",{className:G.a.workTitle},"My Work"),r.a.createElement("div",{className:G.a.workGallery},r.a.createElement(H,null)))}var J=t(4),L=t.n(J);function P(e){var a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],l=t[1],c=r.a.useState(""),o=Object(i.a)(c,2),s=o[0],m=o[1];return r.a.createElement("section",{className:L.a.contact},r.a.createElement("h3",{className:L.a.title},"Contact"),r.a.createElement("div",{className:L.a.contactBox},r.a.createElement("form",{className:L.a.form,action:""},r.a.createElement("div",{className:"".concat(L.a.field," ").concat(n?L.a.focus:"")},r.a.createElement("span",{className:L.a.fieldTitle},"Name"),r.a.createElement("input",{onBlur:function(){""===s.trim()&&(l(!1),m(""))},onFocus:function(){l(!0)},onChange:function(e){m(e.currentTarget.value)},value:s,className:s.trim()?L.a.filled:"",type:"text",required:!0})),r.a.createElement("div",{className:L.a.field},r.a.createElement("input",{type:"text",required:!0})),r.a.createElement("div",{className:L.a.field},r.a.createElement("textarea",{required:!0})),r.a.createElement("div",{className:L.a.btn},r.a.createElement("button",{type:"submit"},"Send")))))}var Y=t(8),z=t.n(Y);function Q(e){var a=function(e){switch(e){case"LinkedIn":return"www.linkedin.com/in/andyprudius";case"GitHub":return"github.com/AndIReyf";case"Instagram":return"www.instagram.com/reactrey/";case"Telegram":return"t.me/andyfrontdev";case"WhatsApp":return"wa.me/393278538537";case"Skype":return"join.skype.com/invite/hvTeW0GjQhyN"}};return r.a.createElement("footer",{className:z.a.footer},r.a.createElement("div",{className:z.a.contacts},r.a.createElement("ul",{className:z.a.list},[{id:"1",name:"WhatsApp",className:"icon-whatsapp"},{id:"2",name:"Skype",className:"icon-skype"},{id:"3",name:"LinkedIn",className:"icon-linkedin"},{id:"4",name:"GitHub",className:"icon-github"},{id:"5",name:"Instagram",className:"icon-instagram"},{id:"6",name:"Telegram",className:"icon-telegram"}].map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{className:z.a.link,href:"http://".concat(a(e.name)),target:"_blank"},r.a.createElement("i",{className:"".concat(z.a.icon," ").concat(e.className)}," ")))})))),r.a.createElement("div",{className:z.a.copyright},r.a.createElement("p",null,"\xa9 2020, All Rights Reserved.")))}var K=t(1),V=t(20),X=t.n(V);function Z(){return r.a.createElement("div",{className:X.a.preloader},r.a.createElement("h1",{className:X.a.preloaderTitle},r.a.createElement("span",null,"L"),r.a.createElement("span",null,"O"),r.a.createElement("span",null,"A"),r.a.createElement("span",null,"D"),r.a.createElement("span",null,"I"),r.a.createElement("span",null,"N"),r.a.createElement("span",null,"G")))}function $(){var e=r.a.useState(!1),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){var e=setTimeout((function(){n(!1)}),4e3);return function(){return clearTimeout(e)}}),[t]),r.a.createElement(r.a.Fragment,null,t?r.a.createElement(Z,null):r.a.createElement("div",{className:s.a.app},r.a.createElement(N,null),r.a.createElement(K.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(K.a,{path:"/skills",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(K.a,{path:"/work",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(K.a,{path:"/contacts",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(Q,null)))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement($,null))),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.3f1232d7.chunk.js.map