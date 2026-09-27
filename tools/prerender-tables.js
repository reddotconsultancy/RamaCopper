/* Writes the four specification tables from assets/tech.js into technical.html as
   static HTML, between the <!-- tables:start --> and <!-- tables:end --> markers,
   so crawlers and readers without JavaScript get the full datasheet.
   Run after editing the data in tech.js:  node tools/prerender-tables.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "assets/tech.js"), "utf8");

/* Run tech.js against a stub DOM and click each tab to collect every table. */
const el = () => ({ innerHTML: "", textContent: "", className: "", value: "", addEventListener() {} });
const tbl = el(), tnote = el(), tcount = el(), tsearch = el();
const tabs = ["covering", "submersible", "aluminium", "thermal"].map(t => ({
  dataset: { tab: t }, setAttribute() {}, addEventListener(_, fn) { this.click = fn; }
}));
const ids = { tbl, tnote, tcount, tsearch };
vm.runInNewContext(src, {
  document: {
    getElementById: id => ids[id] || null,
    querySelectorAll: s => (s === ".tabs button" ? tabs : [])
  }
});

const CAPTIONS = {
  covering: "Copper winding wire covering thickness by grade, SWG 8 to 43",
  submersible: "Submersible copper winding wire parameters",
  aluminium: "Aluminium winding wire sizes, SWG and AWG in millimetres",
  thermal: "Enamel coverings, thermal classes and standards"
};
const out = tabs.map((t, i) => {
  t.click();
  const tab = t.dataset.tab;
  const note = tnote.textContent.replace(/"/g, "&quot;");
  const table = tbl.innerHTML.replace("<thead>", `<caption>${CAPTIONS[tab]}</caption><thead>`);
  return `    <div class="tscroll" data-panel="${tab}" data-note="${note}"${i ? " hidden" : ""}>` +
    `<table class="spec spec-${tab}">${table}</table></div>`;
}).join("\n");

const file = path.join(root, "technical.html");
const html = fs.readFileSync(file, "utf8");
const re = /(<!-- tables:start -->)[\s\S]*?(\n\s*<!-- tables:end -->)/;
if (!re.test(html)) throw new Error("tables markers not found in technical.html");
fs.writeFileSync(file, html.replace(re, (_, a, b) => a + "\n" + out + b));
console.log("technical.html: wrote", tabs.length, "tables");
