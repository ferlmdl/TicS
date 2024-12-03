import './polyfills.server.mjs';
import{c as H}from"./chunk-W4K67AG2.mjs";import{a as U,b as m,c as Z,d as z,f as J,g as K,h as Q,i as _,j as W,k as y}from"./chunk-PPSJKQ7V.mjs";import{Ea as q,Fa as B,Ga as j,H as l,I as g,Ja as O,K as w,Ka as P,La as M,N as c,O as s,R as o,S as t,T as d,U as D,V as b,W as T,X as i,_ as f,ga as G,h as N,m as u,n as E,na as V,r as A,s as L,ta as h,ua as F}from"./chunk-VMBMVSWH.mjs";var R=class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=u({type:e,selectors:[["app-home"]],standalone:!0,features:[f],decls:0,vars:0,template:function(r,n){}})};function re(e,a){e&1&&(o(0,"div",11),i(1," El nombre de usuario es obligatorio. "),t())}function ie(e,a){e&1&&(o(0,"div",11),i(1," Ingresa un correo electr\xF3nico v\xE1lido. "),t())}function ne(e,a){e&1&&(o(0,"div",11),i(1," La contrase\xF1a debe tener al menos 6 caracteres. "),t())}var x=class e{constructor(a){this.fb=a;this.registerForm=this.fb.group({username:["",m.required],email:["",[m.required,m.email]],password:["",[m.required,m.minLength(6)]]})}registerForm;onSubmit(){this.registerForm.valid&&console.log("Formulario enviado:",this.registerForm.value)}static \u0275fac=function(r){return new(r||e)(g(_))};static \u0275cmp=u({type:e,selectors:[["app-register"]],standalone:!0,features:[f],decls:21,vars:5,consts:[[1,"container","mt-5"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","username",1,"form-label"],["type","text","id","username","formControlName","username",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"]],template:function(r,n){if(r&1&&(o(0,"div",0)(1,"h2"),i(2,"Registro"),t(),o(3,"form",1),b("ngSubmit",function(){return n.onSubmit()}),o(4,"div",2)(5,"label",3),i(6,"Nombre de usuario"),t(),d(7,"input",4),c(8,re,2,0,"div",5),t(),o(9,"div",2)(10,"label",6),i(11,"Correo electr\xF3nico"),t(),d(12,"input",7),c(13,ie,2,0,"div",5),t(),o(14,"div",2)(15,"label",8),i(16,"Contrase\xF1a"),t(),d(17,"input",9),c(18,ne,2,0,"div",5),t(),o(19,"button",10),i(20,"Registrarse"),t()()()),r&2){let p,v,C;l(3),s("formGroup",n.registerForm),l(5),s("ngIf",((p=n.registerForm.get("username"))==null?null:p.invalid)&&((p=n.registerForm.get("username"))==null?null:p.touched)),l(5),s("ngIf",((v=n.registerForm.get("email"))==null?null:v.invalid)&&((v=n.registerForm.get("email"))==null?null:v.touched)),l(5),s("ngIf",((C=n.registerForm.get("password"))==null?null:C.invalid)&&((C=n.registerForm.get("password"))==null?null:C.touched)),l(),s("disabled",n.registerForm.invalid)}},dependencies:[y,J,U,Z,z,K,Q,F,h]})};var ae=[{path:"home",component:R},{path:"login",loadChildren:()=>import("./chunk-VCM4I4Z3.mjs").then(e=>e.LoginModule)},{path:"user",loadChildren:()=>import("./chunk-YZXMI6FE.mjs").then(e=>e.UserModule)},{path:"recetas",loadChildren:()=>import("./chunk-GQDDMD4D.mjs").then(e=>e.RecetasModule)},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"register",component:x},{path:"**",redirectTo:"/home"}],S=class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=E({type:e});static \u0275inj=N({imports:[M.forRoot(ae),M]})};function me(e,a){e&1&&(o(0,"li",7)(1,"a",12),i(2,"Iniciar sesi\xF3n"),t()())}function le(e,a){if(e&1){let r=D();o(0,"li",7)(1,"a",13),b("click",function(){A(r);let p=T();return L(p.logout())}),i(2,"Cerrar sesi\xF3n"),t()()}}var I=class e{constructor(a,r){this.renderer=a;this.fb=r;this.registerForm=this.fb.group({username:["",m.required],email:["",[m.required,m.email]],password:["",[m.required,m.minLength(6)]]})}title="Angular-tics";city="santiago";isLoggedIn=!1;darkMode=!1;registerForm;ngOnInit(){document.body.classList.add("dark-mode")}toggleDarkMode(){this.darkMode=!this.darkMode,console.log("Dark Mode toggled: ",this.darkMode),this.darkMode?this.renderer.addClass(document.body,"dark-mode"):this.renderer.removeClass(document.body,"dark-mode")}login(){this.isLoggedIn=!0}logout(){this.isLoggedIn=!1}static \u0275fac=function(r){return new(r||e)(g(w),g(_))};static \u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:20,vars:2,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/home",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","/recetas",1,"nav-link","active"],["routerLink","/user",1,"nav-link"],["routerLink","/recetas",1,"nav-link"],["class","nav-item",4,"ngIf"],["routerLink","/login",1,"nav-link"],[1,"nav-link",3,"click"]],template:function(r,n){r&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),i(3,"Home"),t(),o(4,"button",3),d(5,"span",4),t(),o(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),i(10,"Recetas"),t()(),o(11,"li",7)(12,"a",9),i(13,"Perfil"),t()(),o(14,"li",7)(15,"a",10),i(16,"Recetas"),t()(),c(17,me,3,0,"li",11)(18,le,3,0,"li",11),t()()()(),d(19,"router-outlet")),r&2&&(l(17),s("ngIf",!n.isLoggedIn),l(),s("ngIf",n.isLoggedIn))},dependencies:[F,h,j,W,y,S,O]})};var Y=[];var $={providers:[G({eventCoalescing:!0}),P(Y),B()]};var se={providers:[H()]},ee=V($,se);var pe=()=>q(I,ee),Ze=pe;export{Ze as a};