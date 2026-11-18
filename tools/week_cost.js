// Usage: node tools/week_cost.js week.json
// Prints each dinner's cost and the week's shopping total (whole packs) at Willys and ICA Maxi,
// plus any ingredients that are not in prices.js (priced from their costSEK instead).
const fs = require("fs"), path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
require(path.join(root, "recipes.js"));
require(path.join(root, "prices.js"));
const L = require(path.join(root, "logic.js"));
L.setPrices(window.PRICES, window.ICA_FACTOR);
const week = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const lib = {}; window.LIBRARY.forEach(r => { lib[r.id] = r; });
const all = Object.assign({}, lib, week.recipes || {});
const f = L.scaleFactor(week.settings || { adults: 2, toddlers: 1 });
const days = week.plan.days.map((id, i) => ({ day: L.DAYS[i], recipe: all[id] }));
const missing = days.filter(d => !d.recipe).map(d => d.day);
if (missing.length) { console.error("Missing recipes for: " + missing.join(", ")); process.exit(1); }
const unpriced = [];
days.forEach(d => {
  const c = L.recipeCost(d.recipe, f, "willys");
  console.log(d.day.padEnd(10), d.recipe.name.padEnd(55), L.kr(c.total));
  d.recipe.ingredients.forEach(i => { if (!L.priceEntry(i.item, i.unit, "willys")) unpriced.push(d.day.slice(0, 3) + ": " + i.item + " [" + i.unit + "]" + (typeof i.costSEK === "number" ? " costSEK " + i.costSEK : " NO PRICE")); });
});
const agg = L.aggregate(days, f);
const total = st => { let t = 0; L.SECTIONS.forEach(s => agg[s].forEach(r => { const c = L.shopRowCost(r, st); if (c) t += c.cost; })); return t; };
const w = total("willys"), ic = total("ica"), b = (week.settings && week.settings.budget) || 1300;
console.log("\nShop total: Willys " + L.kr(w) + " · ICA Maxi " + L.kr(ic) + " · budget " + L.kr(b) + (w > b ? "  OVER BUDGET" : "  within budget"));
if (unpriced.length) console.log("\nNot in prices.js (using costSEK):\n  " + unpriced.join("\n  "));
