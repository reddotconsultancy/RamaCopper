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
["enamelled-copper-wire","enamelled","Enamelled Copper Wire","ETP grade copper with polyester, polyesterimide or amide-imide covering for motors, generators and transformers."],
["submersible-copper-winding-wire","submersible","Submersible Copper Winding Wire","Polyester wrapped conductor for deep well pump motors. Moisture and corrosion resistant, stable to 200 °C."],
["aluminium-winding-wire","aluminium","Aluminium Winding Wire","High purity aluminium for windings where weight and cost matter, with the same coating discipline as our copper lines."],
["bare-copper-wire","bare","Bare Copper Wire","Uncoated electrolytic copper, cadmium free. Used in overhead power sources, light poles, heavy appliances and machinery."],
["colored-copper-wire","colored","Colored Copper Wire","Colour coded enamel for fast circuit identification in the field, and for decorative and craft applications."]
];
var A=[
["electric-mobility","emobility","Electric Mobility","Demand to electrify mobility keeps growing. We support the shift with sustainable, high performance winding solutions."],
["automotive","automotive","Automotive","From window regulators and electrified steering to ABS and transmission control: wire for every electric component."],
["drive-technology","drive","Drive Technology","Inverter controlled motors keep conveyor belts and production lines moving, reliably and efficiently."],
["energy-transmission","energy","Energy Transmission","Sustainable energy systems, climate protection and security of supply demand new answers in transmission."],
["renewable-energy","renewable","Renewable Energy","Responsible use of resources, affordability and supply security. Renewables are more in demand than ever."],
["white-goods-power-tools","white","White Goods & Power Tools","Longevity under high load turns white goods into precious goods. Quality is what makes that promise hold."]
];

function card(cls,r){
  return '<a class="'+cls+'" href="'+r[0]+'.html">'+
    '<div class="ph"><img src="assets/img/'+r[1]+'.jpg" alt="'+r[2]+'" loading="lazy"></div>'+
    '<h3>'+r[2]+'</h3><p>'+r[3]+'</p></a>';
}
/* every card opens its own detail page (which ends with the contact block) */
function fill(id,rows,cls){
  var el=document.getElementById(id);
  if(!el||el.children.length)return;   /* the pages ship these cards as static HTML */
  el.innerHTML=rows.map(function(r){return card(cls,r)}).join("");
}
fill("pgrid",P,"pcard");
fill("agrid",A,"acard");

/* ---------- copy-to-clipboard on the contact cards ---------- */
document.querySelectorAll("[data-copy]").forEach(function(b){
  b.addEventListener("click",function(){
    var lbl=b.querySelector("span"),txt=b.getAttribute("data-copy");
    function done(){b.classList.add("copied");lbl.textContent="Copied";
      setTimeout(function(){b.classList.remove("copied");lbl.textContent="Copy"},1600)}
    /* the async clipboard is refused outright in some browsers and webviews,
       so a rejection has to fall through to the old method rather than
       leaving the button silent and nothing on the clipboard */
    function fallback(){
      var t=document.createElement("textarea");t.value=txt;t.setAttribute("readonly","");
      t.style.cssText="position:fixed;top:0;left:-9999px";document.body.appendChild(t);
      t.select();t.setSelectionRange(0,t.value.length);
      var ok=false;try{ok=document.execCommand("copy")}catch(e){}
      t.remove();if(ok)done();
    }
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done,fallback);
    else fallback();
  });
});
})();

/* "Delivering excellence" tabs on the homepage: same contract as the
   technical tables — one button per panel, aria-selected drives the rule. */
(function(){
  var tabs=[].slice.call(document.querySelectorAll("[data-xtab]"));
  if(!tabs.length)return;
  var panels=[].slice.call(document.querySelectorAll("[data-xpanel]"));
  function show(key){
    tabs.forEach(function(t){t.setAttribute("aria-selected",String(t.dataset.xtab===key))});
    panels.forEach(function(p){p.hidden=p.dataset.xpanel!==key});
  }
  tabs.forEach(function(t){
    t.addEventListener("click",function(){show(t.dataset.xtab)});
    t.addEventListener("keydown",function(e){
      var i=tabs.indexOf(t),n=null;
      if(e.key==="ArrowRight")n=tabs[(i+1)%tabs.length];
      else if(e.key==="ArrowLeft")n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();show(n.dataset.xtab);n.focus()}
    });
  });
})();
