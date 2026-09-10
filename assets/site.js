/* Shared behaviour for every page.
   Each block is guarded: a page that lacks the element simply skips it. */
(function(){
"use strict";

/* ---------- mobile nav ---------- */
var nav=document.getElementById("nav"),mb=document.getElementById("menuBtn");
if(nav&&mb){
  var setNav=function(o){nav.classList.toggle("open",o);mb.setAttribute("aria-expanded",String(o))};
  setNav(false);
  mb.addEventListener("click",function(){setNav(!nav.classList.contains("open"))});
  nav.addEventListener("click",function(e){if(e.target.tagName==="A")setNav(false)});
}

/* ---------- footer year ---------- */
var yr=document.getElementById("yr");
if(yr)yr.textContent=new Date().getFullYear();

/* ---------- card grids ---------- */
var P=[
["enamelled","Enamelled Copper Wire","ETP-grade copper with polyester, polyesterimide or amide-imide covering for motors, generators and transformers."],
["submersible","Submersible Copper Winding Wire","Poly-wrapped conductor for deep-well pump motors. Moisture and corrosion resistant, stable to 200 °C."],
["aluminium","Aluminium Winding Wire","High-purity aluminium for weight- and cost-sensitive windings, with the same coating discipline as our copper lines."],
["bare","Bare Copper Wire","Uncoated electrolytic copper, cadmium free. Used in overhead power sources, light poles, heavy appliances and machinery."],
["colored","Colored Copper Wire","Colour-coded enamel for fast circuit identification in the field, and for decorative and craft applications."]
];
var A=[
["emobility","E-Mobility","Demand to electrify mobility keeps growing. We support the shift with sustainable, high-performance winding solutions."],
["automotive","Automotive","From window regulators and electrified steering to ABS and transmission control: wire for every electric component."],
["drive","Drive Technology","Inverter-controlled motors keep conveyor belts and production lines moving, reliably and efficiently."],
["energy","Energy Transmission","Sustainable energy systems, climate protection and security of supply demand new answers in transmission."],
["renewable","Renewable Energy","Responsible use of resources, affordability and supply security. Renewables are more in demand than ever."],
["white","White Goods & Power Tools","Longevity under high load turns white goods into precious goods. Quality is what makes that promise hold."]
];

function card(cls,href,r){
  return '<a class="'+cls+'" href="'+href+'">'+
    '<div class="ph"><img src="assets/img/'+r[0]+'.jpg" alt="'+r[1]+'" loading="lazy"></div>'+
    '<h3>'+r[1]+'</h3><p>'+r[2]+'</p></a>';
}
/* the one-pager points its cards at #contact, subpages at contact.html */
function fill(id,rows,cls){
  var el=document.getElementById(id);
  if(!el)return;
  var href=el.getAttribute("data-href")||"contact.html";
  el.innerHTML=rows.map(function(r){return card(cls,href,r)}).join("");
}
fill("pgrid",P,"pcard");
fill("agrid",A,"acard");

/* ---------- enquiry form (composes a mailto:) ---------- */
var enq=document.getElementById("enq");
if(enq)enq.addEventListener("submit",function(e){
  e.preventDefault();
  var d=new FormData(e.target),g=function(k){return (d.get(k)||"").toString().trim()};
  var body=["Name: "+g("name"),"Company: "+g("company"),"City: "+g("city"),"Email: "+g("email"),
            "Mobile: "+g("mobile"),"Product: "+g("product"),"","Specification & volume:",g("message")].join("\n");
  window.location.href="mailto:info@ramacopper.com?subject="+
    encodeURIComponent("Enquiry: "+g("product")+(g("company")?", "+g("company"):""))+
    "&body="+encodeURIComponent(body);
  var fn=document.getElementById("formnote");
  if(fn)fn.innerHTML='Opening your mail client. If nothing happens, write to <a href="mailto:info@ramacopper.com">info@ramacopper.com</a>.';
});
})();
