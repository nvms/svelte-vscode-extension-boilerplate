var I = Object.defineProperty;
var P = (t, e, n) => e in t ? I(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var p = (t, e, n) => (P(t, typeof e != "symbol" ? e + "" : e, n), n);
function i() {
}
function A(t) {
  return t();
}
function E() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(A);
}
function O(t) {
  return typeof t == "function";
}
function H(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function L(t) {
  return Object.keys(t).length === 0;
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function C(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function R(t) {
  return document.createElement(t);
}
function U(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function V(t) {
  return Array.from(t.childNodes);
}
let y;
function a(t) {
  y = t;
}
const u = [], S = [];
let l = [];
const j = [], q = /* @__PURE__ */ Promise.resolve();
let g = !1;
function z() {
  g || (g = !0, q.then(N));
}
function m(t) {
  l.push(t);
}
const $ = /* @__PURE__ */ new Set();
let s = 0;
function N() {
  if (s !== 0)
    return;
  const t = y;
  do {
    try {
      for (; s < u.length; ) {
        const e = u[s];
        s++, a(e), D(e.$$);
      }
    } catch (e) {
      throw u.length = 0, s = 0, e;
    }
    for (a(null), u.length = 0, s = 0; S.length; )
      S.pop()();
    for (let e = 0; e < l.length; e += 1) {
      const n = l[e];
      $.has(n) || ($.add(n), n());
    }
    l.length = 0;
  } while (u.length);
  for (; j.length; )
    j.pop()();
  g = !1, $.clear(), a(t);
}
function D(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(m);
  }
}
function F(t) {
  const e = [], n = [];
  l.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), l = e;
}
const G = /* @__PURE__ */ new Set();
function J(t, e) {
  t && t.i && (G.delete(t), t.i(e));
}
function K(t, e, n) {
  const { fragment: r, after_update: c } = t.$$;
  r && r.m(e, n), m(() => {
    const d = t.$$.on_mount.map(A).filter(O);
    t.$$.on_destroy ? t.$$.on_destroy.push(...d) : _(d), t.$$.on_mount = [];
  }), c.forEach(m);
}
function Q(t, e) {
  const n = t.$$;
  n.fragment !== null && (F(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function T(t, e) {
  t.$$.dirty[0] === -1 && (u.push(t), z(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function W(t, e, n, r, c, d, x = null, B = [-1]) {
  const h = y;
  a(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: d,
    update: i,
    not_equal: c,
    bound: E(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: E(),
    dirty: B,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  x && x(o.root);
  let b = !1;
  if (o.ctx = n ? n(t, e.props || {}, (f, w, ...k) => {
    const v = k.length ? k[0] : w;
    return o.ctx && c(o.ctx[f], o.ctx[f] = v) && (!o.skip_bound && o.bound[f] && o.bound[f](v), b && T(t, f)), w;
  }) : [], o.update(), b = !0, _(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = V(e.target);
      o.fragment && o.fragment.l(f), f.forEach(C);
    } else
      o.fragment && o.fragment.c();
    e.intro && J(t.$$.fragment), K(t, e.target, e.anchor), N();
  }
  a(h);
}
class X {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    p(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    p(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Q(this, 1), this.$destroy = i;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!O(n))
      return i;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !L(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Y = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Y);
function Z(t) {
  let e;
  return {
    c() {
      e = R("div"), e.textContent = "Hello from Svelte.", U(e, "class", "h-full flex justify-center items-center text-2xl");
    },
    m(n, r) {
      M(n, e, r);
    },
    p: i,
    i,
    o: i,
    d(n) {
      n && C(e);
    }
  };
}
class tt extends X {
  constructor(e) {
    super(), W(this, e, null, Z, H, {});
  }
}
const nt = new tt({ target: document.getElementById("app") });
export {
  nt as default
};
