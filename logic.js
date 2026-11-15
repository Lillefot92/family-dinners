// Pure helpers: quantities, scaling, shopping aggregation, dates, recipe validation.
(function (root) {
  const SECTIONS = ["Fruit & veg", "Meat & fish", "Dairy & eggs", "Bakery", "Frozen", "Pantry"];
  const UNITS = ["g", "ml", "pcs", "tbsp", "tsp", "can", "pack", "jar", "bunch", "clove", ""];
  const BASE_PORTIONS = 5;
  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  function slug(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80) || "x";
  }

  // Portions per day: dinner + next-day lunch. A toddler eats about half an adult portion.
  function portionsFor(settings) {
    const a = Math.max(0, Number(settings && settings.adults) || 0);
    const t = Math.max(0, Number(settings && settings.toddlers) || 0);
    return (a + 0.5 * t) * 2;
  }
  function scaleFactor(settings) {
    const p = portionsFor(settings);
    return p > 0 ? p / BASE_PORTIONS : 1;
  }

  const WHOLE_UNITS = { can: 1, pack: 1, jar: 1, bunch: 1 };
  const PLURAL = { can: "cans", pack: "packs", jar: "jars", bunch: "bunches", clove: "cloves" };

  function trimNum(n) {
    return String(Math.round(n * 10) / 10).replace(/\.0$/, "");
  }

  // Human-readable quantity. Whole-pack units round up so the shopping list is buyable.
  function fmtQty(q, unit) {
    if (q == null || isNaN(q) || q <= 0) return "";
    unit = unit || "";
    if (unit === "g") {
      if (q >= 1000) return trimNum(q / 1000) + " kg";
      return (q < 50 ? Math.max(5, Math.round(q / 5) * 5) : Math.round(q / 10) * 10) + " g";
    }
    if (unit === "ml") {
      if (q >= 1000) return trimNum(q / 1000) + " l";
      return (q < 50 ? Math.max(5, Math.round(q / 5) * 5) : Math.round(q / 10) * 10) + " ml";
    }
    if (unit === "tbsp" || unit === "tsp") {
      return trimNum(Math.max(0.5, Math.round(q * 2) / 2)) + " " + unit;
    }
    if (WHOLE_UNITS[unit]) {
      const n = Math.max(1, Math.ceil(q - 0.05));
      return n + " " + (n === 1 ? unit : PLURAL[unit]);
    }
    if (unit === "clove") {
      const n = Math.max(1, Math.round(q));
      return n + " " + (n === 1 ? "clove" : "cloves");
    }
    // pcs or no unit: round up to the nearest half, at least 1
    const n = Math.max(1, Math.ceil(q * 2 - 0.1) / 2);
    return trimNum(n);
  }

  function itemKey(ing) {
    return slug(ing.item) + "--" + (ing.unit || "pcs");
  }

  // Combine the week's ingredients into one list grouped by section.
  // days: [{day, recipe}] ; returns {section: [{key, item, qty, unit, days:[...]}]}
  function aggregate(days, factor) {
    const map = new Map();
    days.forEach(function (d) {
      if (!d || !d.recipe) return;
      (d.recipe.ingredients || []).forEach(function (ing) {
        const key = itemKey(ing);
        let row = map.get(key);
        if (!row) {
          row = { key: key, item: ing.item, unit: ing.unit || "pcs", qty: 0, hasQty: false, est: 0,
                  section: SECTIONS.indexOf(ing.section) >= 0 ? ing.section : "Pantry", days: [] };
          map.set(key, row);
        }
        if (typeof ing.qty === "number" && ing.qty > 0) { row.qty += ing.qty * factor; row.hasQty = true; }
        if (typeof ing.costSEK === "number" && ing.costSEK > 0) row.est += ing.costSEK * factor;
        const short = (d.day || "").slice(0, 3);
        if (short && row.days.indexOf(short) < 0) row.days.push(short);
      });
    });
    const out = {};
    SECTIONS.forEach(function (s) { out[s] = []; });
    map.forEach(function (row) { out[row.section].push(row); });
    SECTIONS.forEach(function (s) { out[s].sort(function (a, b) { return a.item.localeCompare(b.item); }); });
    return out;
  }

  // Monday the plan starts: next Monday from Friday–Sunday, otherwise this week's Monday.
  function planStart(now) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dow = (d.getDay() + 6) % 7; // 0 = Monday
    if (dow >= 4) d.setDate(d.getDate() + (7 - dow));
    else d.setDate(d.getDate() - dow);
    return d;
  }
  function isoDate(d) {
    const p = function (n) { return String(n).padStart(2, "0"); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }
  function parseIso(s) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || "");
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
  }
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function weekLabel(startIso) {
    const s = parseIso(startIso);
    if (!s) return "This week";
    const e = new Date(s); e.setDate(e.getDate() + 6);
    if (s.getMonth() === e.getMonth()) return s.getDate() + "–" + e.getDate() + " " + MONTHS[s.getMonth()];
    return s.getDate() + " " + MONTHS[s.getMonth()] + " – " + e.getDate() + " " + MONTHS[e.getMonth()];
  }
  function dayDate(startIso, i) {
    const s = parseIso(startIso);
    if (!s) return "";
    const d = new Date(s); d.setDate(d.getDate() + i);
    return d.getDate() + " " + MONTHS[d.getMonth()];
  }
  // Index 0–6 of today within the plan, or -1.
  function todayIndex(startIso, now) {
    const s = parseIso(startIso);
    if (!s) return -1;
    const t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = Math.round((t - s) / 86400000);
    return diff >= 0 && diff < 7 ? diff : -1;
  }

  function str(v, max) {
    return typeof v === "string" ? v.trim().slice(0, max || 300) : "";
  }

  // Clean a recipe that came back from Claude. Returns null if unusable.
  function normalizeRecipe(r, id) {
    if (!r || typeof r !== "object") return null;
    const name = str(r.name, 90);
    if (!name || !Array.isArray(r.ingredients) || !Array.isArray(r.steps)) return null;
    const ingredients = r.ingredients.slice(0, 25).map(function (i) {
      if (!i || typeof i !== "object") return null;
      const item = str(i.item, 60);
      if (!item) return null;
      let unit = str(i.unit, 10).toLowerCase();
      if (unit === "pc" || unit === "piece" || unit === "pieces") unit = "pcs";
      if (unit === "cans") unit = "can";
      if (unit === "packs") unit = "pack";
      if (unit === "jars") unit = "jar";
      if (unit === "cloves") unit = "clove";
      if (unit === "kg") { unit = "g"; i.qty = Number(i.qty) * 1000; }
      if (unit === "l") { unit = "ml"; i.qty = Number(i.qty) * 1000; }
      if (unit === "dl") { unit = "ml"; i.qty = Number(i.qty) * 100; }
      if (UNITS.indexOf(unit) < 0) unit = "pcs";
      if (unit === "") unit = "pcs";
      const qty = Number(i.qty);
      const section = SECTIONS.indexOf(i.section) >= 0 ? i.section : "Pantry";
      const cost = Number(i.costSEK);
      const out = { item: item, qty: isFinite(qty) && qty > 0 ? qty : null, unit: unit, section: section };
      if (isFinite(cost) && cost >= 0 && cost < 2000) out.costSEK = Math.round(cost * 10) / 10;
      return out;
    }).filter(Boolean);
    const steps = r.steps.map(function (s) { return str(s, 400); }).filter(Boolean).slice(0, 10);
    if (!ingredients.length || !steps.length) return null;
    const minutes = Math.round(Number(r.minutes));
    return {
      id: id, name: name, protein: str(r.protein, 40) || "Protein", minutes: isFinite(minutes) && minutes > 0 ? minutes : null,
      summary: str(r.summary, 200), ingredients: ingredients, steps: steps,
      toddler: str(r.toddler, 400), lunch: str(r.lunch, 200), source: "claude"
    };
  }


  // ---------- prices ----------
  let PRICES = {}, ICA_FACTOR = 1.05;
  function setPrices(table, icaFactor) { PRICES = table || {}; if (icaFactor) ICA_FACTOR = icaFactor; }
  function priceEntry(item, unit, store) {
    const e = PRICES[slug(item)];
    if (!e || e.unit !== (unit || "pcs")) return null;
    let p = e.w, estimated = false;
    if (store === "ica") {
      if (e.i) p = e.i;
      else if (e.w) { p = [e.w[0], e.w[1] * ICA_FACTOR, e.w[2]]; estimated = true; }
    }
    if (!p) return null;
    return { size: p[0], price: p[1], label: p[2], loose: !!e.loose, estimated: estimated };
  }
  // Cost of the amount a recipe uses (what the dinner "costs"), SEK.
  function ingredientCost(ing, factor, store) {
    const pe = priceEntry(ing.item, ing.unit, store);
    if (pe && typeof ing.qty === "number" && ing.qty > 0) return (ing.qty * factor / pe.size) * pe.price;
    if (typeof ing.costSEK === "number" && ing.costSEK >= 0) return ing.costSEK * factor * (store === "ica" ? ICA_FACTOR : 1);
    return null;
  }
  function recipeCost(recipe, factor, store) {
    let total = 0, unknown = 0;
    ((recipe && recipe.ingredients) || []).forEach(function (ing) {
      const c = ingredientCost(ing, factor, store);
      if (c == null) unknown++; else total += c;
    });
    return { total: total, unknown: unknown };
  }
  // What you pay at the till for one shopping row: whole packs, or by weight for loose items.
  function shopRowCost(row, store) {
    const pe = priceEntry(row.item, row.unit, store);
    if (pe && row.hasQty) {
      if (pe.loose) return { cost: row.qty / pe.size * pe.price, packs: null, label: pe.label, estimated: pe.estimated };
      const packs = Math.max(1, Math.ceil(row.qty / pe.size - 0.05));
      return { cost: packs * pe.price, packs: packs, label: pe.label, estimated: pe.estimated };
    }
    if (row.est > 0) return { cost: row.est * (store === "ica" ? ICA_FACTOR : 1), packs: null, label: "", estimated: true };
    return null;
  }
  function priceListText() {
    return Object.keys(PRICES).map(function (k) {
      const e = PRICES[k];
      if (!e.w) return null;
      const per = e.w[1] / e.w[0];
      const unitTxt = e.unit === "g" ? "kr per kg" : e.unit === "ml" ? "kr per litre" : "kr per " + e.unit;
      const val = (e.unit === "g" || e.unit === "ml") ? per * 1000 : per;
      return k.replace(/-/g, " ") + " [" + e.unit + "]: " + (Math.round(val * 10) / 10) + " " + unitTxt;
    }).filter(Boolean).join("; ");
  }
  function kr(n) {
    if (n == null || isNaN(n)) return "–";
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " kr";
  }

  const api = { SECTIONS, DAYS, BASE_PORTIONS, slug, portionsFor, scaleFactor, fmtQty, itemKey, aggregate,
                planStart, isoDate, parseIso, weekLabel, dayDate, todayIndex, normalizeRecipe,
                setPrices, priceEntry, ingredientCost, recipeCost, shopRowCost, priceListText, kr };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Logic = api;
})(this);
