import './polyfills.server.mjs';
import{d as f,e as x,f as b,j as C}from"./chunk-PPSJKQ7V.mjs";import{La as c,R as o,S as n,T as m,X as i,_ as g,h as r,m as u,n as a,ua as s}from"./chunk-VMBMVSWH.mjs";import"./chunk-5XUXGTUW.mjs";var p=class e{email="";password="";errorMessage="";login(){console.log("Intentando iniciar sesi\xF3n con",this.email,this.password)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["app-login"]],standalone:!0,features:[g],decls:12,vars:0,consts:[[1,"login-container"],["for","username"],["type","text","id","username","placeholder","Nombre de usuario"],["for","password"],["type","password","id","password","placeholder","Clave"],["type","submit"],["href","/register",1,"register-link"]],template:function(t,w){t&1&&(o(0,"div",0)(1,"form")(2,"label",1),i(3,"Nombre de usuario"),n(),m(4,"input",2),o(5,"label",3),i(6,"Clave"),n(),m(7,"input",4),o(8,"button",5),i(9,"Ingresar"),n(),o(10,"a",6),i(11,"Crea una cuenta"),n()()())},dependencies:[C,b,f,x,s],styles:[".login-container[_ngcontent-%COMP%]{width:300px;margin:50px auto;padding:20px;border:1px solid #ccc;border-radius:8px;box-shadow:0 4px 8px #0000001a}label[_ngcontent-%COMP%]{display:block;font-size:14px;margin-bottom:5px;color:#555}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:8px;margin-bottom:15px;border:1px solid #ccc;border-radius:4px}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#007bff;color:#fff;font-size:16px;border:none;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.register-link[_ngcontent-%COMP%]{display:block;margin-top:15px;text-align:center;font-size:14px;color:#007bff;text-decoration:none}.register-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var h=[{path:"",component:p}],l=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[c.forChild(h),c]})};var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[s,l]})};export{y as LoginModule};
