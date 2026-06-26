/*
 * MBC Marketplace — data layer (PLACEHOLDER, database-ready)
 * ---------------------------------------------------------
 * Replace MBC_DATA below with live API responses, and swap each MBCApi.*
 * method for a fetch('/api/...') call when the backend is ready.
 * IMPORTANT: contactPrivate and any buyer/supplier contact data must stay
 * server-side in production. The public API must return sanitised records
 * only. All communication is routed through MBC.
 */
window.MBC_DATA = {
  "suppliers": [],
  "products": [],
  "services": []
};

window.esc = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
window.waMP = function (msg) { return "https://wa.me/919733329822?text=" + encodeURIComponent(msg); };

/* Read API — swap for fetch() in production. Honours admin approval overrides (demo: localStorage). */
window.MBCApi = {
  _ovr: function () { try { return JSON.parse(localStorage.getItem("mbc_admin_status")) || {}; } catch (e) { return {}; } },
  _status: function (item) { var o = this._ovr(); return o[item.id] || item.status; },
  products: function () { var s = this; return MBC_DATA.products.filter(function (p) { return s._status(p) === "approved"; }); },
  product: function (id) { return MBC_DATA.products.find(function (p) { return p.id === id; }); },
  services: function () { var s = this; return MBC_DATA.services.filter(function (x) { return s._status(x) === "approved"; }); },
  service: function (id) { return MBC_DATA.services.find(function (x) { return x.id === id; }); },
  suppliers: function () { return MBC_DATA.suppliers; },
  supplier: function (id) { return MBC_DATA.suppliers.find(function (x) { return x.id === id; }); },
  productsBySupplier: function (id) { return this.products().filter(function (p) { return p.supplierId === id; }); },
  servicesBySupplier: function (id) { return this.services().filter(function (x) { return x.supplierId === id; }); },
  featuredProducts: function () { return this.products().filter(function (p) { return p.featured; }); },
  newProducts: function () { return this.products().filter(function (p) { return p.isNew; }); },
  featuredServices: function () { return this.services().filter(function (x) { return x.featured; }); },
  productCategories: function () { return Array.from(new Set(MBC_DATA.products.map(function (p) { return p.category; }))); },
  serviceIndustries: function () { return Array.from(new Set(MBC_DATA.services.map(function (x) { return x.industry; }))); }
};

/* User state (saved items, supplier uploads, buyer requests, admin actions).
 * DEMO ONLY via localStorage — replace with authenticated user storage / API. */
window.MBCStore = {
  get: function (k) { try { return JSON.parse(localStorage.getItem("mbc_" + k)) || []; } catch (e) { return []; } },
  set: function (k, v) { localStorage.setItem("mbc_" + k, JSON.stringify(v)); },
  has: function (k, id) { return this.get(k).indexOf(id) > -1; },
  toggle: function (k, id) { var a = this.get(k); var i = a.indexOf(id); if (i > -1) a.splice(i, 1); else a.push(id); this.set(k, a); return i < 0; },
  push: function (k, obj) { var a = this.get(k); a.unshift(obj); this.set(k, a); },
  setMap: function (k, id, val) { var m = {}; try { m = JSON.parse(localStorage.getItem("mbc_" + k)) || {}; } catch (e) {} m[id] = val; localStorage.setItem("mbc_" + k, JSON.stringify(m)); }
};
