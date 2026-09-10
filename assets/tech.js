/* Specification tables, transcribed from the Rama datasheets.
   Loaded only by the pages that show them; exits quietly elsewhere. */
(function(){
"use strict";
var tbl=document.getElementById("tbl");
if(!tbl)return;

/* ============ DATA (transcribed from Rama specification sheets) ============ */
var COVERING=[
[ 8,4.064,0.041,0.049,4.155,0.092,4.201,0.138,4.245,0.001317,null,null],
[ 9,3.657,0.037,0.047,3.745,0.089,3.790,0.134,3.833,0.001627,null,null],
[10,3.251,0.033,0.046,3.336,0.086,3.380,0.130,3.422,0.002069,null,null],
[11,2.946,0.030,0.045,3.029,0.084,3.072,0.127,3.112,0.002508,null,null],
[12,2.642,0.027,0.043,2.772,0.081,2.764,0.123,2.783,0.003118,null,null],
[13,2.337,0.024,0.042,2.415,0.079,2.455,0.119,2.493,0.003985,null,null],
[14,2.032,0.020,0.041,2.108,0.077,2.147,0.116,2.184,0.005271,null,null],
[15,1.829,0.019,0.040,1.903,0.075,1.941,0.113,1.977,0.006506,null,null],
[16,1.626,0.017,0.039,1.698,0.073,1.735,0.110,1.770,0.008232,null,null],
[17,1.422,0.015,0.038,1.492,0.071,1.528,0.107,1.562,0.01076,null,null],
[18,1.219,0.013,0.035,1.285,0.067,1.318,0.100,1.350,0.01465,null,null],
[19,1.016,0.011,0.034,1.080,0.065,1.113,0.098,1.144,0.02108,null,null],
[20,0.914,0.010,0.034,0.976,0.063,1.008,0.095,1.038,0.02605,0.02686,0.02528],
[21,0.813,0.009,0.032,0.872,0.060,0.902,0.090,0.931,0.03293,0.03396,0.03194],
[22,0.711,0.008,0.030,0.766,0.056,0.795,0.085,0.822,0.04305,0.04442,0.04175],
[23,0.610,0.006,0.027,0.659,0.050,0.684,0.075,0.708,0.05848,0.06017,0.05687],
[24,0.559,0.006,0.025,0.605,0.047,0.629,0.071,0.652,0.06965,0.07178,0.06760],
[25,0.508,0.006,0.025,0.554,0.047,0.578,0.071,0.601,0.08434,0.08711,0.08168],
[26,0.457,0.005,0.024,0.501,0.045,0.523,0.067,0.544,0.1042,0.1075,0.1011],
[27,0.417,0.005,0.022,0.458,0.042,0.480,0.064,0.500,0.1252,0.1293,0.1212],
[28,0.376,0.005,0.021,0.417,0.040,0.435,0.060,0.454,0.1539,0.1595,0.1487],
[29,0.345,0.005,0.020,0.382,0.038,0.401,0.057,0.418,0.1879,0.1888,0.1772],
[30,0.315,0.004,0.019,0.349,0.035,0.367,0.053,0.384,0.2193,0.2269,0.2121],
[31,0.295,0.004,0.019,0.329,0.035,0.347,0.053,0.364,0.2501,0.2592,0.2414],
[32,0.274,0.004,0.018,0.306,0.033,0.323,0.050,0.339,0.2899,0.3011,0.2792],
[33,0.254,0.004,0.018,0.286,0.033,0.303,0.050,0.319,0.3374,0.3512,0.3242],
[34,0.234,0.004,0.017,0.265,0.032,0.281,0.048,0.296,0.3974,0.4149,0.3809],
[35,0.213,0.003,0.015,0.241,0.029,0.255,0.043,0.269,0.4798,0.4978,0.4625],
[36,0.193,0.003,0.014,0.219,0.027,0.232,0.039,0.245,0.5842,0.6081,0.5618],
[37,0.173,0.003,0.013,0.197,0.025,0.210,0.036,0.222,0.7271,0.7596,0.6967],
[38,0.152,0.003,0.012,0.174,0.023,0.186,0.033,0.197,0.9418,0.9888,0.8982],
[39,0.132,0.003,0.011,0.152,0.021,0.162,0.030,0.171,1.2496,1.3192,1.1841],
[40,0.122,0.003,0.010,0.141,0.019,0.151,0.028,0.160,1.4623,1.5502,1.3811],
[41,0.112,0.003,0.009,0.130,0.017,0.139,0.026,0.147,1.7354,1.8477,1.6318],
[42,0.102,0.003,0.009,0.119,0.017,0.128,0.026,0.136,2.0923,2.2398,1.9574],
[43,0.091,0.003,0.008,0.107,0.016,0.115,0.023,0.122,2.6298,2.8348,2.4423]
];
var SUBM=[
[0.40,0.004,137.15,0.80,1.467,24],[0.50,0.005,87.78,0.90,2.154,25],[0.60,0.006,60.96,1.00,2.980,26],
[0.70,0.007,44.78,1.10,3.946,28],[0.80,0.008,34.29,1.20,5.052,28],[0.90,0.009,27.09,1.30,6.298,29],
[1.00,0.010,21.94,1.40,7.683,30],[1.10,0.011,18.14,1.50,9.208,30],[1.20,0.012,15.24,1.60,10.873,31],
[1.30,0.013,12.98,1.70,12.678,32],[1.40,0.014,11.20,1.90,14.891,32],[1.50,0.015,9.75,2.00,16.989,32],
[1.60,0.016,8.57,2.10,19.227,32],[1.70,0.017,7.59,2.20,21.605,32],[1.80,0.018,6.77,2.30,24.122,32],
[1.90,0.019,6.08,2.40,26.780,32],[2.00,0.020,5.49,2.50,29.576,33],[2.10,0.021,4.98,2.60,32.513,33],
[2.20,0.022,4.53,2.70,35.589,33],[2.30,0.023,4.15,2.80,38.850,33],[2.40,0.024,3.81,2.90,42.161,33],
[2.50,0.025,3.51,3.00,45.656,33],[2.60,0.026,3.25,3.10,49.291,34],[2.70,0.027,3.01,3.20,53.066,34],
[2.80,0.028,2.80,3.30,56.980,34],[2.90,0.029,2.61,3.40,61.035,34],[3.00,0.030,2.44,3.50,65.228,34]
];
var ALU=[
[8,4.064,3.264],[9,3.658,2.906],[10,3.251,2.588],[11,2.946,2.305],[12,2.642,2.053],[13,2.337,1.828],
[14,2.032,1.628],[15,1.829,1.450],[16,1.626,1.291],[17,1.422,1.150],[18,1.219,1.023],[19,1.016,0.911],
[20,0.914,0.811],[21,0.813,0.723],[22,0.711,0.643],[23,0.610,0.573],[24,0.559,0.510],[25,0.508,0.454],
[26,0.457,0.404],[27,0.417,0.360],[28,0.376,0.321],[29,0.345,0.287],[30,0.315,0.254],[31,0.295,0.226],
[32,0.274,0.203],[33,0.254,0.180],[34,0.234,0.160],[35,0.213,0.142],[36,0.193,0.127],[37,0.173,0.114],
[38,0.152,0.102]
];
var THERMAL=[
["Polyester","Class 130","IS 13730 Part-9","IEC 60317-9","-","Fine, Medium, Heavy"],
["Modified Polyester","Class 155","IS 13730-24","IEC 60317-24","MW-24A","Fine, Medium, Heavy"],
["Polyesterimide","Class 180","IS 13730 Part-15","IEC 60317-15","MW-76A","Fine, Medium, Heavy"],
["Polyesterimide + amide-imide / DC","Class 220","IS 13730 Part-25","IEC 60317-25","MW-35A / 73A (Hermetic)","Fine, Medium, Heavy"],
["Self Solderable","Class 155, 180","IS 13730-51","IEC 60317-51","MW-80A","Fine, Medium, Heavy"]
];

var f=function(v,d){return v===null||v===undefined?"-":Number(v).toFixed(d)};

var TABLES={
 covering:{
  note:"Covering gradewise of copper winding wires. Conductor resistance at 20 °C for 1 metre. A dash means the value is not published for that gauge.",
  head:'<tr class="grp"><th></th><th></th><th colspan="2">Fine · Grade 1</th><th colspan="2">Medium · Grade 2</th><th colspan="2">Thick · Grade 3</th><th colspan="3">Conductor resistance @ 20 °C (Ω/m)</th></tr>'+
       '<tr><th>SWG / mm</th><th>Cond. tol. mm</th><th>Min. inc. mm</th><th>Max. o/a mm</th><th>Min. inc. mm</th><th>Max. o/a mm</th><th>Min. inc. mm</th><th>Max. o/a mm</th><th>Nominal</th><th>Maximum</th><th>Minimum</th></tr>',
  rows:COVERING.map(function(r){
   return '<td class="k">SWG '+r[0]+' &middot; '+f(r[1],3)+'</td><td>'+f(r[2],3)+'</td>'+
     '<td>'+f(r[3],3)+'</td><td class="k">'+f(r[4],3)+'</td>'+
     '<td>'+f(r[5],3)+'</td><td class="k">'+f(r[6],3)+'</td>'+
     '<td>'+f(r[7],3)+'</td><td class="k">'+f(r[8],3)+'</td>'+
     '<td>'+(r[9]===null?'<span class="dim">-</span>':r[9])+'</td>'+
     '<td class="'+(r[10]===null?'dim':'')+'">'+(r[10]===null?'-':r[10])+'</td>'+
     '<td class="'+(r[11]===null?'dim':'')+'">'+(r[11]===null?'-':r[11])+'</td>';
  })},
 submersible:{
  note:"Submersible copper winding wires. * Indicative values; improvement is an ongoing process and efforts are made to exceed average value.",
  head:'<tr><th>Sr.</th><th>Nominal conductor dia. mm</th><th>Tolerance ± mm</th><th>Nominal resistance Ω/km @ 20 °C</th><th>Overall dia. mm</th><th>Weight of poly wrapped kg/km</th><th>Elongation min. %</th></tr>',
  rows:SUBM.map(function(r,i){
   return '<td class="dim">'+(i+1)+'</td><td class="k">'+f(r[0],2)+'</td><td>'+f(r[1],3)+'</td><td>'+f(r[2],2)+'</td><td>'+f(r[3],2)+'</td><td>'+f(r[4],3)+'</td><td>'+r[5]+'</td>';
  })},
 aluminium:{
  note:"Range of sizes of aluminium winding wire, as SWG and AWG equivalents in millimetres.",
  head:'<tr><th>Gauge number</th><th>SWG (mm)</th><th>AWG (mm)</th><th>SWG (inch)</th></tr>',
  rows:ALU.map(function(r){
   return '<td class="k">'+r[0]+'</td><td>'+f(r[1],3)+'</td><td>'+f(r[2],3)+'</td><td class="dim">'+(r[1]/25.4).toFixed(4)+'</td>';
  })},
 thermal:{
  note:"Types of enamel covering, thermal class and the specifications each is manufactured against. All types available in fine, medium and heavy grades.",
  head:'<tr><th>Name</th><th>Thermal class</th><th>IS</th><th>IEC</th><th>NEMA</th><th>Grade</th></tr>',
  rows:THERMAL.map(function(r){
   return '<td class="k wide">'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td><td class="wide">'+r[5]+'</td>';
  })}
};

var current="covering",
    tnote=document.getElementById("tnote"),
    tcount=document.getElementById("tcount"),
    tsearch=document.getElementById("tsearch");

function renderTable(){
  var t=TABLES[current],q=tsearch.value.trim().toLowerCase(),shown=0;
  var body=t.rows.map(function(c){
    var plain=c.replace(/<[^>]+>/g," ").replace(/&middot;/g," ").replace(/(^|\s)-(?=\s|$)/g," ").toLowerCase();
    if(q&&plain.indexOf(q)===-1)return "";
    shown++;return "<tr>"+c+"</tr>";
  }).join("");
  tbl.className="spec spec-"+current;
  tbl.innerHTML="<thead>"+t.head+"</thead><tbody>"+
    (shown?body:'<tr><td colspan="12" style="text-align:center;padding:32px;color:var(--ink-3)">No rows match “'+tsearch.value.replace(/[<>&]/g,"")+'”</td></tr>')+"</tbody>";
  tnote.textContent=t.note;
  tcount.textContent=shown+" of "+t.rows.length+" rows";
}
document.querySelectorAll('.tabs button').forEach(function(b){
  b.addEventListener("click",function(){
    document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute("aria-selected","false")});
    b.setAttribute("aria-selected","true");current=b.dataset.tab;renderTable();
  });
});
tsearch.addEventListener("input",renderTable);
renderTable();
})();
