/* gallery lightbox: click a tile, arrow keys or buttons to move, Esc to close */
(function(){
var tiles=[].slice.call(document.querySelectorAll(".gi")),lb=document.getElementById("lb");
if(!tiles.length||!lb)return;
var img=document.getElementById("lbImg"),cap=document.getElementById("lbCap"),i=0;
function show(n){
  i=(n+tiles.length)%tiles.length;
  img.src=tiles[i].getAttribute("href");img.alt=tiles[i].getAttribute("data-cap")||"";
  cap.textContent=img.alt;
  var pre=new Image();pre.src=tiles[(i+1)%tiles.length].getAttribute("href");
}
function open(n){show(n);lb.hidden=false;document.body.style.overflow="hidden";document.getElementById("lbX").focus()}
function close(){lb.hidden=true;document.body.style.overflow="";tiles[i].focus()}
tiles.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault();open(n)})});
document.getElementById("lbX").addEventListener("click",close);
document.getElementById("lbP").addEventListener("click",function(){show(i-1)});
document.getElementById("lbN").addEventListener("click",function(){show(i+1)});
lb.addEventListener("click",function(e){if(e.target===lb)close()});
document.addEventListener("keydown",function(e){
  if(lb.hidden)return;
  if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(i-1);else if(e.key==="ArrowRight")show(i+1);
});
var x0=null;
lb.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(d)>50)show(d<0?i+1:i-1)});
})();
