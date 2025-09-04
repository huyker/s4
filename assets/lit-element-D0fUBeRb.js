import {aX as St, aY as Pt, aZ as xt, a_ as Ct, a$ as Mt} from "./main-CVc-xj4y.js";
function he(e, t={}) {
    const {key: s="fallback", name: i="Fallback", rank: r=!1, shouldThrow: n=Rt, retryCount: o, retryDelay: h} = t;
    return ({chain: c, pollingInterval: a=4e3, timeout: f, ...l}) => {
        let $ = e
          , _ = () => {}
        ;
        const w = St({
            key: s,
            name: i,
            async request({method: u, params: p}) {
                let m;
                const y = async (A=0) => {
                    const v = $[A]({
                        ...l,
                        chain: c,
                        retryCount: 0,
                        timeout: f
                    });
                    try {
                        const E = await v.request({
                            method: u,
                            params: p
                        });
                        return _({
                            method: u,
                            params: p,
                            response: E,
                            transport: v,
                            status: "success"
                        }),
                        E
                    } catch (E) {
                        if (_({
                            error: E,
                            method: u,
                            params: p,
                            transport: v,
                            status: "error"
                        }),
                        n(E) || A === $.length - 1 || (m ??= $.slice(A + 1).some(S => {
                            const {include: T, exclude: rt} = S({
                                chain: c
                            }).config.methods || {};
                            return T ? T.includes(u) : rt ? !rt.includes(u) : !0
                        }
                        ),
                        !m))
                            throw E;
                        return y(A + 1)
                    }
                }
                ;
                return y()
            },
            retryCount: o,
            retryDelay: h,
            type: "fallback"
        }, {
            onResponse: u => _ = u,
            transports: $.map(u => u({
                chain: c,
                retryCount: 0
            }))
        });
        if (r) {
            const u = typeof r == "object" ? r : {};
            Nt({
                chain: c,
                interval: u.interval ?? a,
                onTransports: p => $ = p,
                ping: u.ping,
                sampleCount: u.sampleCount,
                timeout: u.timeout,
                transports: $,
                weights: u.weights
            })
        }
        return w
    }
}
function Rt(e) {
    return !!("code"in e && typeof e.code == "number" && (e.code === Pt.code || e.code === xt.code || Ct.nodeMessage.test(e.message) || e.code === 5e3))
}
function Nt({chain: e, interval: t=4e3, onTransports: s, ping: i, sampleCount: r=10, timeout: n=1e3, transports: o, weights: h={}}) {
    const {stability: c=.7, latency: a=.3} = h
      , f = []
      , l = async () => {
        const $ = await Promise.all(o.map(async u => {
            const p = u({
                chain: e,
                retryCount: 0,
                timeout: n
            })
              , m = Date.now();
            let y, A;
            try {
                await (i ? i({
                    transport: p
                }) : p.request({
                    method: "net_listening"
                })),
                A = 1
            } catch {
                A = 0
            } finally {
                y = Date.now()
            }
            return {
                latency: y - m,
                success: A
            }
        }
        ));
        f.push($),
        f.length > r && f.shift();
        const _ = Math.max(...f.map(u => Math.max(...u.map( ({latency: p}) => p))))
          , w = o.map( (u, p) => {
            const m = f.map(S => S[p].latency)
              , A = 1 - m.reduce( (S, T) => S + T, 0) / m.length / _
              , v = f.map(S => S[p].success)
              , E = v.reduce( (S, T) => S + T, 0) / v.length;
            return E === 0 ? [0, p] : [a * A + c * E, p]
        }
        ).sort( (u, p) => p[0] - u[0]);
        s(w.map( ([,u]) => o[u])),
        await Mt(t),
        l()
    }
    ;
    l()
}
var Ut = 20
  , Ot = 1
  , M = 1e6 
  , nt = 1e6
  , Tt = -7
  , Ht = 21
  , kt = !1
  , z = "[big.js] "
  , N = z + "Invalid "
  , J = N + "decimal places"
  , Dt = N + "rounding mode"
  , _t = z + "Division by zero"
  , d = {}
  , b = void 0
  , jt = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function gt() {
    function e(t) {
        var s = this;
        if (!(s instanceof e))
            return t === b ? gt() : new e(t);
        if (t instanceof e)
            s.s = t.s,
            s.e = t.e,
            s.c = t.c.slice();
        else {
            if (typeof t != "string") {
                if (e.strict === !0 && typeof t != "bigint")
                    throw TypeError(N + "value");
                t = t === 0 && 1 / t < 0 ? "-0" : String(t)
            }
            Bt(s, t)
        }
        s.constructor = e
    }
    return e.prototype = d,
    e.DP = Ut,
    e.RM = Ot,
    e.NE = Tt,
    e.PE = Ht,
    e.strict = kt,
    e.roundDown = 0,
    e.roundHalfUp = 1,
    e.roundHalfEven = 2,
    e.roundUp = 3,
    e
}
function Bt(e, t) {
    var s, i, r;
    if (!jt.test(t))
        throw Error(N + "number");
    for (e.s = t.charAt(0) == "-" ? (t = t.slice(1),
    -1) : 1,
    (s = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
    (i = t.search(/e/i)) > 0 ? (s < 0 && (s = i),
    s += +t.slice(i + 1),
    t = t.substring(0, i)) : s < 0 && (s = t.length),
    r = t.length,
    i = 0; i < r && t.charAt(i) == "0"; )
        ++i;
    if (i == r)
        e.c = [e.e = 0];
    else {
        for (; r > 0 && t.charAt(--r) == "0"; )
            ;
        for (e.e = s - i - 1,
        e.c = [],
        s = 0; i <= r; )
            e.c[s++] = +t.charAt(i++)
    }
    return e
}
function U(e, t, s, i) {
    var r = e.c;
    if (s === b && (s = e.constructor.RM),
    s !== 0 && s !== 1 && s !== 2 && s !== 3)
        throw Error(Dt);
    if (t < 1)
        i = s === 3 && (i || !!r[0]) || t === 0 && (s === 1 && r[0] >= 5 || s === 2 && (r[0] > 5 || r[0] === 5 && (i || r[1] !== b))),
        r.length = 1,
        i ? (e.e = e.e - t + 1,
        r[0] = 1) : r[0] = e.e = 0;
    else if (t < r.length) {
        if (i = s === 1 && r[t] >= 5 || s === 2 && (r[t] > 5 || r[t] === 5 && (i || r[t + 1] !== b || r[t - 1] & 1)) || s === 3 && (i || !!r[0]),
        r.length = t,
        i) {
            for (; ++r[--t] > 9; )
                if (r[t] = 0,
                t === 0) {
                    ++e.e,
                    r.unshift(1);
                    break
                }
        }
        for (t = r.length; !r[--t]; )
            r.pop()
    }
    return e
}
function O(e, t, s) {
    var i = e.e
      , r = e.c.join("")
      , n = r.length;
    if (t)
        r = r.charAt(0) + (n > 1 ? "." + r.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
    else if (i < 0) {
        for (; ++i; )
            r = "0" + r;
        r = "0." + r
    } else if (i > 0)
        if (++i > n)
            for (i -= n; i--; )
                r += "0";
        else
            i < n && (r = r.slice(0, i) + "." + r.slice(i));
    else
        n > 1 && (r = r.charAt(0) + "." + r.slice(1));
    return e.s < 0 && s ? "-" + r : r
}
d.abs = function() {
    var e = new this.constructor(this);
    return e.s = 1,
    e
}
;
d.cmp = function(e) {
    var t, s = this, i = s.c, r = (e = new s.constructor(e)).c, n = s.s, o = e.s, h = s.e, c = e.e;
    if (!i[0] || !r[0])
        return i[0] ? n : r[0] ? -o : 0;
    if (n != o)
        return n;
    if (t = n < 0,
    h != c)
        return h > c ^ t ? 1 : -1;
    for (o = (h = i.length) < (c = r.length) ? h : c,
    n = -1; ++n < o; )
        if (i[n] != r[n])
            return i[n] > r[n] ^ t ? 1 : -1;
    return h == c ? 0 : h > c ^ t ? 1 : -1
}
;
d.div = function(e) {
    var t = this
      , s = t.constructor
      , i = t.c
      , r = (e = new s(e)).c
      , n = t.s == e.s ? 1 : -1
      , o = s.DP;
    if (o !== ~~o || o < 0 || o > M)
        throw Error(J);
    if (!r[0])
        throw Error(_t);
    if (!i[0])
        return e.s = n,
        e.c = [e.e = 0],
        e;
    var h, c, a, f, l, $ = r.slice(), _ = h = r.length, w = i.length, u = i.slice(0, h), p = u.length, m = e, y = m.c = [], A = 0, v = o + (m.e = t.e - e.e) + 1;
    for (m.s = n,
    n = v < 0 ? 0 : v,
    $.unshift(0); p++ < h; )
        u.push(0);
    do {
        for (a = 0; a < 10; a++) {
            if (h != (p = u.length))
                f = h > p ? 1 : -1;
            else
                for (l = -1,
                f = 0; ++l < h; )
                    if (r[l] != u[l]) {
                        f = r[l] > u[l] ? 1 : -1;
                        break
                    }
            if (f < 0) {
                for (c = p == h ? r : $; p; ) {
                    if (u[--p] < c[p]) {
                        for (l = p; l && !u[--l]; )
                            u[l] = 9;
                        --u[l],
                        u[p] += 10
                    }
                    u[p] -= c[p]
                }
                for (; !u[0]; )
                    u.shift()
            } else
                break
        }
        y[A++] = f ? a : ++a,
        u[0] && f ? u[p] = i[_] || 0 : u = [i[_]]
    } while ((_++ < w || u[0] !== b) && n--);
    return !y[0] && A != 1 && (y.shift(),
    m.e--,
    v--),
    A > v && U(m, v, s.RM, u[0] !== b),
    m
}
;
d.eq = function(e) {
    return this.cmp(e) === 0
}
;
d.gt = function(e) {
    return this.cmp(e) > 0
}
;
d.gte = function(e) {
    return this.cmp(e) > -1
}
;
d.lt = function(e) {
    return this.cmp(e) < 0
}
;
d.lte = function(e) {
    return this.cmp(e) < 1
}
;
d.minus = d.sub = function(e) {
    var t, s, i, r, n = this, o = n.constructor, h = n.s, c = (e = new o(e)).s;
    if (h != c)
        return e.s = -c,
        n.plus(e);
    var a = n.c.slice()
      , f = n.e
      , l = e.c
      , $ = e.e;
    if (!a[0] || !l[0])
        return l[0] ? e.s = -c : a[0] ? e = new o(n) : e.s = 1,
        e;
    if (h = f - $) {
        for ((r = h < 0) ? (h = -h,
        i = a) : ($ = f,
        i = l),
        i.reverse(),
        c = h; c--; )
            i.push(0);
        i.reverse()
    } else
        for (s = ((r = a.length < l.length) ? a : l).length,
        h = c = 0; c < s; c++)
            if (a[c] != l[c]) {
                r = a[c] < l[c];
                break
            }
    if (r && (i = a,
    a = l,
    l = i,
    e.s = -e.s),
    (c = (s = l.length) - (t = a.length)) > 0)
        for (; c--; )
            a[t++] = 0;
    for (c = t; s > h; ) {
        if (a[--s] < l[s]) {
            for (t = s; t && !a[--t]; )
                a[t] = 9;
            --a[t],
            a[s] += 10
        }
        a[s] -= l[s]
    }
    for (; a[--c] === 0; )
        a.pop();
    for (; a[0] === 0; )
        a.shift(),
        --$;
    return a[0] || (e.s = 1,
    a = [$ = 0]),
    e.c = a,
    e.e = $,
    e
}
;
d.mod = function(e) {
    var t, s = this, i = s.constructor, r = s.s, n = (e = new i(e)).s;
    if (!e.c[0])
        throw Error(_t);
    return s.s = e.s = 1,
    t = e.cmp(s) == 1,
    s.s = r,
    e.s = n,
    t ? new i(s) : (r = i.DP,
    n = i.RM,
    i.DP = i.RM = 0,
    s = s.div(e),
    i.DP = r,
    i.RM = n,
    this.minus(s.times(e)))
}
;
d.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s,
    e
}
;
d.plus = d.add = function(e) {
    var t, s, i, r = this, n = r.constructor;
    if (e = new n(e),
    r.s != e.s)
        return e.s = -e.s,
        r.minus(e);
    var o = r.e
      , h = r.c
      , c = e.e
      , a = e.c;
    if (!h[0] || !a[0])
        return a[0] || (h[0] ? e = new n(r) : e.s = r.s),
        e;
    if (h = h.slice(),
    t = o - c) {
        for (t > 0 ? (c = o,
        i = a) : (t = -t,
        i = h),
        i.reverse(); t--; )
            i.push(0);
        i.reverse()
    }
    for (h.length - a.length < 0 && (i = a,
    a = h,
    h = i),
    t = a.length,
    s = 0; t; h[t] %= 10)
        s = (h[--t] = h[t] + a[t] + s) / 10 | 0;
    for (s && (h.unshift(s),
    ++c),
    t = h.length; h[--t] === 0; )
        h.pop();
    return e.c = h,
    e.e = c,
    e
}
;
d.pow = function(e) {
    var t = this
      , s = new t.constructor("1")
      , i = s
      , r = e < 0;
    if (e !== ~~e || e < -nt || e > nt)
        throw Error(N + "exponent");
    for (r && (e = -e); e & 1 && (i = i.times(t)),
    e >>= 1,
    !!e; )
        t = t.times(t);
    return r ? s.div(i) : i
}
;
d.prec = function(e, t) {
    if (e !== ~~e || e < 1 || e > M)
        throw Error(N + "precision");
    return U(new this.constructor(this), e, t)
}
;
d.round = function(e, t) {
    if (e === b)
        e = 0;
    else if (e !== ~~e || e < -M || e > M)
        throw Error(J);
    return U(new this.constructor(this), e + this.e + 1, t)
}
;
d.sqrt = function() {
    var e, t, s, i = this, r = i.constructor, n = i.s, o = i.e, h = new r("0.5");
    if (!i.c[0])
        return new r(i);
    if (n < 0)
        throw Error(z + "No square root");
    n = Math.sqrt(+O(i, !0, !0)),
    n === 0 || n === 1 / 0 ? (t = i.c.join(""),
    t.length + o & 1 || (t += "0"),
    n = Math.sqrt(t),
    o = ((o + 1) / 2 | 0) - (o < 0 || o & 1),
    e = new r((n == 1 / 0 ? "5e" : (n = n.toExponential()).slice(0, n.indexOf("e") + 1)) + o)) : e = new r(n + ""),
    o = e.e + (r.DP += 4);
    do
        s = e,
        e = h.times(s.plus(i.div(s)));
    while (s.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
    return U(e, (r.DP -= 4) + e.e + 1, r.RM)
}
;
d.times = d.mul = function(e) {
    var t, s = this, i = s.constructor, r = s.c, n = (e = new i(e)).c, o = r.length, h = n.length, c = s.e, a = e.e;
    if (e.s = s.s == e.s ? 1 : -1,
    !r[0] || !n[0])
        return e.c = [e.e = 0],
        e;
    for (e.e = c + a,
    o < h && (t = r,
    r = n,
    n = t,
    a = o,
    o = h,
    h = a),
    t = new Array(a = o + h); a--; )
        t[a] = 0;
    for (c = h; c--; ) {
        for (h = 0,
        a = o + c; a > c; )
            h = t[a] + n[c] * r[a - c - 1] + h,
            t[a--] = h % 10,
            h = h / 10 | 0;
        t[a] = h
    }
    for (h ? ++e.e : t.shift(),
    c = t.length; !t[--c]; )
        t.pop();
    return e.c = t,
    e
}
;
d.toExponential = function(e, t) {
    var s = this
      , i = s.c[0];
    if (e !== b) {
        if (e !== ~~e || e < 0 || e > M)
            throw Error(J);
        for (s = U(new s.constructor(s), ++e, t); s.c.length < e; )
            s.c.push(0)
    }
    return O(s, !0, !!i)
}
;
d.toFixed = function(e, t) {
    var s = this
      , i = s.c[0];
    if (e !== b) {
        if (e !== ~~e || e < 0 || e > M)
            throw Error(J);
        for (s = U(new s.constructor(s), e + s.e + 1, t),
        e = e + s.e + 1; s.c.length < e; )
            s.c.push(0)
    }
    return O(s, !1, !!i)
}
;
d[Symbol.for("nodejs.util.inspect.custom")] = d.toJSON = d.toString = function() {
    var e = this
      , t = e.constructor;
    return O(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
}
;
d.toNumber = function() {
    var e = +O(this, !0, !0);
    if (this.constructor.strict === !0 && !this.eq(e.toString()))
        throw Error(z + "Imprecise conversion");
    return e
}
;
d.toPrecision = function(e, t) {
    var s = this
      , i = s.constructor
      , r = s.c[0];
    if (e !== b) {
        if (e !== ~~e || e < 1 || e > M)
            throw Error(N + "precision");
        for (s = U(new i(s), e, t); s.c.length < e; )
            s.c.push(0)
    }
    return O(s, e <= s.e || s.e <= i.NE || s.e >= i.PE, !!r)
}
;
d.valueOf = function() {
    var e = this
      , t = e.constructor;
    if (t.strict === !0)
        throw Error(z + "valueOf disallowed");
    return O(e, e.e <= t.NE || e.e >= t.PE, !0)
}
;
var ae = gt();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis
  , Q = W.ShadowRoot && (W.ShadyCSS === void 0 || W.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
  , tt = Symbol()
  , ot = new WeakMap;
let mt = class {
    constructor(t, s, i) {
        if (this._$cssResult$ = !0,
        i !== tt)
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t,
        this.t = s
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (Q && t === void 0) {
            const i = s !== void 0 && s.length === 1;
            i && (t = ot.get(s)),
            t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
            i && ot.set(s, t))
        }
        return t
    }
    toString() {
        return this.cssText
    }
}
;
const It = e => new mt(typeof e == "string" ? e : e + "",void 0,tt)
  , ue = (e, ...t) => {
    const s = e.length === 1 ? e[0] : t.reduce( (i, r, n) => i + (o => {
        if (o._$cssResult$ === !0)
            return o.cssText;
        if (typeof o == "number")
            return o;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    }
    )(r) + e[n + 1], e[0]);
    return new mt(s,e,tt)
}
  , Lt = (e, t) => {
    if (Q)
        e.adoptedStyleSheets = t.map(s => s instanceof CSSStyleSheet ? s : s.styleSheet);
    else
        for (const s of t) {
            const i = document.createElement("style")
              , r = W.litNonce;
            r !== void 0 && i.setAttribute("nonce", r),
            i.textContent = s.cssText,
            e.appendChild(i)
        }
}
  , ct = Q ? e => e : e => e instanceof CSSStyleSheet ? (t => {
    let s = "";
    for (const i of t.cssRules)
        s += i.cssText;
    return It(s)
}
)(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {is: qt, defineProperty: zt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Wt, getOwnPropertySymbols: Ft, getPrototypeOf: Zt} = Object
  , X = globalThis
  , ht = X.trustedTypes
  , Jt = ht ? ht.emptyScript : ""
  , Xt = X.reactiveElementPolyfillSupport
  , B = (e, t) => e
  , G = {
    toAttribute(e, t) {
        switch (t) {
        case Boolean:
            e = e ? Jt : null;
            break;
        case Object:
        case Array:
            e = e == null ? e : JSON.stringify(e)
        }
        return e
    },
    fromAttribute(e, t) {
        let s = e;
        switch (t) {
        case Boolean:
            s = e !== null;
            break;
        case Number:
            s = e === null ? null : Number(e);
            break;
        case Object:
        case Array:
            try {
                s = JSON.parse(e)
            } catch {
                s = null
            }
        }
        return s
    }
}
  , At = (e, t) => !qt(e, t)
  , at = {
    attribute: !0,
    type: String,
    converter: G,
    reflect: !1,
    useDefault: !1,
    hasChanged: At
};
Symbol.metadata ??= Symbol("metadata"),
X.litPropertyMetadata ??= new WeakMap;
let H = class extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(),
        (this.l ??= []).push(t)
    }
    static get observedAttributes() {
        return this.finalize(),
        this._$Eh && [...this._$Eh.keys()]
    }
    static createProperty(t, s=at) {
        if (s.state && (s.attribute = !1),
        this._$Ei(),
        this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0),
        this.elementProperties.set(t, s),
        !s.noAccessor) {
            const i = Symbol()
              , r = this.getPropertyDescriptor(t, i, s);
            r !== void 0 && zt(this.prototype, t, r)
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const {get: r, set: n} = Vt(this.prototype, t) ?? {
            get() {
                return this[s]
            },
            set(o) {
                this[s] = o
            }
        };
        return {
            get: r,
            set(o) {
                const h = r?.call(this);
                n?.call(this, o),
                this.requestUpdate(t, h, i)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? at
    }
    static _$Ei() {
        if (this.hasOwnProperty(B("elementProperties")))
            return;
        const t = Zt(this);
        t.finalize(),
        t.l !== void 0 && (this.l = [...t.l]),
        this.elementProperties = new Map(t.elementProperties)
    }
    static finalize() {
        if (this.hasOwnProperty(B("finalized")))
            return;
        if (this.finalized = !0,
        this._$Ei(),
        this.hasOwnProperty(B("properties"))) {
            const s = this.properties
              , i = [...Wt(s), ...Ft(s)];
            for (const r of i)
                this.createProperty(r, s[r])
        }
        const t = this[Symbol.metadata];
        if (t !== null) {
            const s = litPropertyMetadata.get(t);
            if (s !== void 0)
                for (const [i,r] of s)
                    this.elementProperties.set(i, r)
        }
        this._$Eh = new Map;
        for (const [s,i] of this.elementProperties) {
            const r = this._$Eu(s, i);
            r !== void 0 && this._$Eh.set(r, s)
        }
        this.elementStyles = this.finalizeStyles(this.styles)
    }
    static finalizeStyles(t) {
        const s = [];
        if (Array.isArray(t)) {
            const i = new Set(t.flat(1 / 0).reverse());
            for (const r of i)
                s.unshift(ct(r))
        } else
            t !== void 0 && s.push(ct(t));
        return s
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0
    }
    constructor() {
        super(),
        this._$Ep = void 0,
        this.isUpdatePending = !1,
        this.hasUpdated = !1,
        this._$Em = null,
        this._$Ev()
    }
    _$Ev() {
        this._$ES = new Promise(t => this.enableUpdating = t),
        this._$AL = new Map,
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach(t => t(this))
    }
    addController(t) {
        (this._$EO ??= new Set).add(t),
        this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.()
    }
    removeController(t) {
        this._$EO?.delete(t)
    }
    _$E_() {
        const t = new Map
          , s = this.constructor.elementProperties;
        for (const i of s.keys())
            this.hasOwnProperty(i) && (t.set(i, this[i]),
            delete this[i]);
        t.size > 0 && (this._$Ep = t)
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return Lt(t, this.constructor.elementStyles),
        t
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(),
        this.enableUpdating(!0),
        this._$EO?.forEach(t => t.hostConnected?.())
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach(t => t.hostDisconnected?.())
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i)
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t)
          , r = this.constructor._$Eu(t, i);
        if (r !== void 0 && i.reflect === !0) {
            const n = (i.converter?.toAttribute !== void 0 ? i.converter : G).toAttribute(s, i.type);
            this._$Em = t,
            n == null ? this.removeAttribute(r) : this.setAttribute(r, n),
            this._$Em = null
        }
    }
    _$AK(t, s) {
        const i = this.constructor
          , r = i._$Eh.get(t);
        if (r !== void 0 && this._$Em !== r) {
            const n = i.getPropertyOptions(r)
              , o = typeof n.converter == "function" ? {
                fromAttribute: n.converter
            } : n.converter?.fromAttribute !== void 0 ? n.converter : G;
            this._$Em = r,
            this[r] = o.fromAttribute(s, n.type) ?? this._$Ej?.get(r) ?? null,
            this._$Em = null
        }
    }
    requestUpdate(t, s, i) {
        if (t !== void 0) {
            const r = this.constructor
              , n = this[t];
            if (i ??= r.getPropertyOptions(t),
            !((i.hasChanged ?? At)(n, s) || i.useDefault && i.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i))))
                return;
            this.C(t, s, i)
        }
        this.isUpdatePending === !1 && (this._$ES = this._$EP())
    }
    C(t, s, {useDefault: i, reflect: r, wrapped: n}, o) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, o ?? s ?? this[t]),
        n !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0),
        this._$AL.set(t, s)),
        r === !0 && this._$Em !== t && (this._$Eq ??= new Set).add(t))
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES
        } catch (s) {
            Promise.reject(s)
        }
        const t = this.scheduleUpdate();
        return t != null && await t,
        !this.isUpdatePending
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        if (!this.isUpdatePending)
            return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(),
            this._$Ep) {
                for (const [r,n] of this._$Ep)
                    this[r] = n;
                this._$Ep = void 0
            }
            const i = this.constructor.elementProperties;
            if (i.size > 0)
                for (const [r,n] of i) {
                    const {wrapped: o} = n
                      , h = this[r];
                    o !== !0 || this._$AL.has(r) || h === void 0 || this.C(r, void 0, n, h)
                }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s),
            t ? (this.willUpdate(s),
            this._$EO?.forEach(i => i.hostUpdate?.()),
            this.update(s)) : this._$EM()
        } catch (i) {
            throw t = !1,
            this._$EM(),
            i
        }
        t && this._$AE(s)
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach(s => s.hostUpdated?.()),
        this.hasUpdated || (this.hasUpdated = !0,
        this.firstUpdated(t)),
        this.updated(t)
    }
    _$EM() {
        this._$AL = new Map,
        this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$ES
    }
    shouldUpdate(t) {
        return !0
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach(s => this._$ET(s, this[s])),
        this._$EM()
    }
    updated(t) {}
    firstUpdated(t) {}
}
;
H.elementStyles = [],
H.shadowRootOptions = {
    mode: "open"
},
H[B("elementProperties")] = new Map,
H[B("finalized")] = new Map,
Xt?.({
    ReactiveElement: H
}),
(X.reactiveElementVersions ??= []).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = globalThis
  , Z = et.trustedTypes
  , lt = Z ? Z.createPolicy("lit-html", {
    createHTML: e => e
}) : void 0
  , vt = "$lit$"
  , P = `lit$${Math.random().toFixed(9).slice(2)}$`
  , Et = "?" + P
  , Kt = `<${Et}>`
  , R = document
  , I = () => R.createComment("")
  , L = e => e === null || typeof e != "object" && typeof e != "function"
  , st = Array.isArray
  , Yt = e => st(e) || typeof e?.[Symbol.iterator] == "function"
  , Y = `[ 	
\f\r]`
  , j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
  , ut = /-->/g
  , ft = />/g
  , x = RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g")
  , pt = /'/g
  , dt = /"/g
  , wt = /^(?:script|style|textarea|title)$/i
  , yt = e => (t, ...s) => ({
    _$litType$: e,
    strings: t,
    values: s
})
  , pe = yt(1)
  , de = yt(2)
  , k = Symbol.for("lit-noChange")
  , g = Symbol.for("lit-nothing")
  , $t = new WeakMap
  , C = R.createTreeWalker(R, 129);
function bt(e, t) {
    if (!st(e) || !e.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
    return lt !== void 0 ? lt.createHTML(t) : t
}
const Gt = (e, t) => {
    const s = e.length - 1
      , i = [];
    let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = j;
    for (let h = 0; h < s; h++) {
        const c = e[h];
        let a, f, l = -1, $ = 0;
        for (; $ < c.length && (o.lastIndex = $,
        f = o.exec(c),
        f !== null); )
            $ = o.lastIndex,
            o === j ? f[1] === "!--" ? o = ut : f[1] !== void 0 ? o = ft : f[2] !== void 0 ? (wt.test(f[2]) && (r = RegExp("</" + f[2], "g")),
            o = x) : f[3] !== void 0 && (o = x) : o === x ? f[0] === ">" ? (o = r ?? j,
            l = -1) : f[1] === void 0 ? l = -2 : (l = o.lastIndex - f[2].length,
            a = f[1],
            o = f[3] === void 0 ? x : f[3] === '"' ? dt : pt) : o === dt || o === pt ? o = x : o === ut || o === ft ? o = j : (o = x,
            r = void 0);
        const _ = o === x && e[h + 1].startsWith("/>") ? " " : "";
        n += o === j ? c + Kt : l >= 0 ? (i.push(a),
        c.slice(0, l) + vt + c.slice(l) + P + _) : c + P + (l === -2 ? h : _)
    }
    return [bt(e, n + (e[s] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i]
}
;
class q {
    constructor({strings: t, _$litType$: s}, i) {
        let r;
        this.parts = [];
        let n = 0
          , o = 0;
        const h = t.length - 1
          , c = this.parts
          , [a,f] = Gt(t, s);
        if (this.el = q.createElement(a, i),
        C.currentNode = this.el.content,
        s === 2 || s === 3) {
            const l = this.el.content.firstChild;
            l.replaceWith(...l.childNodes)
        }
        for (; (r = C.nextNode()) !== null && c.length < h; ) {
            if (r.nodeType === 1) {
                if (r.hasAttributes())
                    for (const l of r.getAttributeNames())
                        if (l.endsWith(vt)) {
                            const $ = f[o++]
                              , _ = r.getAttribute(l).split(P)
                              , w = /([.?@])?(.*)/.exec($);
                            c.push({
                                type: 1,
                                index: n,
                                name: w[2],
                                strings: _,
                                ctor: w[1] === "." ? te : w[1] === "?" ? ee : w[1] === "@" ? se : K
                            }),
                            r.removeAttribute(l)
                        } else
                            l.startsWith(P) && (c.push({
                                type: 6,
                                index: n
                            }),
                            r.removeAttribute(l));
                if (wt.test(r.tagName)) {
                    const l = r.textContent.split(P)
                      , $ = l.length - 1;
                    if ($ > 0) {
                        r.textContent = Z ? Z.emptyScript : "";
                        for (let _ = 0; _ < $; _++)
                            r.append(l[_], I()),
                            C.nextNode(),
                            c.push({
                                type: 2,
                                index: ++n
                            });
                        r.append(l[$], I())
                    }
                }
            } else if (r.nodeType === 8)
                if (r.data === Et)
                    c.push({
                        type: 2,
                        index: n
                    });
                else {
                    let l = -1;
                    for (; (l = r.data.indexOf(P, l + 1)) !== -1; )
                        c.push({
                            type: 7,
                            index: n
                        }),
                        l += P.length - 1
                }
            n++
        }
    }
    static createElement(t, s) {
        const i = R.createElement("template");
        return i.innerHTML = t,
        i
    }
}
function D(e, t, s=e, i) {
    if (t === k)
        return t;
    let r = i !== void 0 ? s._$Co?.[i] : s._$Cl;
    const n = L(t) ? void 0 : t._$litDirective$;
    return r?.constructor !== n && (r?._$AO?.(!1),
    n === void 0 ? r = void 0 : (r = new n(e),
    r._$AT(e, s, i)),
    i !== void 0 ? (s._$Co ??= [])[i] = r : s._$Cl = r),
    r !== void 0 && (t = D(e, r._$AS(e, t.values), r, i)),
    t
}
class Qt {
    constructor(t, s) {
        this._$AV = [],
        this._$AN = void 0,
        this._$AD = t,
        this._$AM = s
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(t) {
        const {el: {content: s}, parts: i} = this._$AD
          , r = (t?.creationScope ?? R).importNode(s, !0);
        C.currentNode = r;
        let n = C.nextNode()
          , o = 0
          , h = 0
          , c = i[0];
        for (; c !== void 0; ) {
            if (o === c.index) {
                let a;
                c.type === 2 ? a = new V(n,n.nextSibling,this,t) : c.type === 1 ? a = new c.ctor(n,c.name,c.strings,this,t) : c.type === 6 && (a = new ie(n,this,t)),
                this._$AV.push(a),
                c = i[++h]
            }
            o !== c?.index && (n = C.nextNode(),
            o++)
        }
        return C.currentNode = R,
        r
    }
    p(t) {
        let s = 0;
        for (const i of this._$AV)
            i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, s),
            s += i.strings.length - 2) : i._$AI(t[s])),
            s++
    }
}
class V {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv
    }
    constructor(t, s, i, r) {
        this.type = 2,
        this._$AH = g,
        this._$AN = void 0,
        this._$AA = t,
        this._$AB = s,
        this._$AM = i,
        this.options = r,
        this._$Cv = r?.isConnected ?? !0
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const s = this._$AM;
        return s !== void 0 && t?.nodeType === 11 && (t = s.parentNode),
        t
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(t, s=this) {
        t = D(this, t, s),
        L(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(),
        this._$AH = g) : t !== this._$AH && t !== k && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Yt(t) ? this.k(t) : this._(t)
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB)
    }
    T(t) {
        this._$AH !== t && (this._$AR(),
        this._$AH = this.O(t))
    }
    _(t) {
        this._$AH !== g && L(this._$AH) ? this._$AA.nextSibling.data = t : this.T(R.createTextNode(t)),
        this._$AH = t
    }
    $(t) {
        const {values: s, _$litType$: i} = t
          , r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = q.createElement(bt(i.h, i.h[0]), this.options)),
        i);
        if (this._$AH?._$AD === r)
            this._$AH.p(s);
        else {
            const n = new Qt(r,this)
              , o = n.u(this.options);
            n.p(s),
            this.T(o),
            this._$AH = n
        }
    }
    _$AC(t) {
        let s = $t.get(t.strings);
        return s === void 0 && $t.set(t.strings, s = new q(t)),
        s
    }
    k(t) {
        st(this._$AH) || (this._$AH = [],
        this._$AR());
        const s = this._$AH;
        let i, r = 0;
        for (const n of t)
            r === s.length ? s.push(i = new V(this.O(I()),this.O(I()),this,this.options)) : i = s[r],
            i._$AI(n),
            r++;
        r < s.length && (this._$AR(i && i._$AB.nextSibling, r),
        s.length = r)
    }
    _$AR(t=this._$AA.nextSibling, s) {
        for (this._$AP?.(!1, !0, s); t && t !== this._$AB; ) {
            const i = t.nextSibling;
            t.remove(),
            t = i
        }
    }
    setConnected(t) {
        this._$AM === void 0 && (this._$Cv = t,
        this._$AP?.(t))
    }
}
class K {
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    constructor(t, s, i, r, n) {
        this.type = 1,
        this._$AH = g,
        this._$AN = void 0,
        this.element = t,
        this.name = s,
        this._$AM = r,
        this.options = n,
        i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String),
        this.strings = i) : this._$AH = g
    }
    _$AI(t, s=this, i, r) {
        const n = this.strings;
        let o = !1;
        if (n === void 0)
            t = D(this, t, s, 0),
            o = !L(t) || t !== this._$AH && t !== k,
            o && (this._$AH = t);
        else {
            const h = t;
            let c, a;
            for (t = n[0],
            c = 0; c < n.length - 1; c++)
                a = D(this, h[i + c], s, c),
                a === k && (a = this._$AH[c]),
                o ||= !L(a) || a !== this._$AH[c],
                a === g ? t = g : t !== g && (t += (a ?? "") + n[c + 1]),
                this._$AH[c] = a
        }
        o && !r && this.j(t)
    }
    j(t) {
        t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "")
    }
}
class te extends K {
    constructor() {
        super(...arguments),
        this.type = 3
    }
    j(t) {
        this.element[this.name] = t === g ? void 0 : t
    }
}
class ee extends K {
    constructor() {
        super(...arguments),
        this.type = 4
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== g)
    }
}
class se extends K {
    constructor(t, s, i, r, n) {
        super(t, s, i, r, n),
        this.type = 5
    }
    _$AI(t, s=this) {
        if ((t = D(this, t, s, 0) ?? g) === k)
            return;
        const i = this._$AH
          , r = t === g && i !== g || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive
          , n = t !== g && (i === g || r);
        r && this.element.removeEventListener(this.name, this, i),
        n && this.element.addEventListener(this.name, this, t),
        this._$AH = t
    }
    handleEvent(t) {
        typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t)
    }
}
class ie {
    constructor(t, s, i) {
        this.element = t,
        this.type = 6,
        this._$AN = void 0,
        this._$AM = s,
        this.options = i
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(t) {
        D(this, t)
    }
}
const re = et.litHtmlPolyfillSupport;
re?.(q, V),
(et.litHtmlVersions ??= []).push("3.3.0");
const ne = (e, t, s) => {
    const i = s?.renderBefore ?? t;
    let r = i._$litPart$;
    if (r === void 0) {
        const n = s?.renderBefore ?? null;
        i._$litPart$ = r = new V(t.insertBefore(I(), n),n,void 0,s ?? {})
    }
    return r._$AI(e),
    r
}
;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis;
class F extends H {
    constructor() {
        super(...arguments),
        this.renderOptions = {
            host: this
        },
        this._$Do = void 0
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild,
        t
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        this._$Do = ne(s, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        super.connectedCallback(),
        this._$Do?.setConnected(!0)
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this._$Do?.setConnected(!1)
    }
    render() {
        return k
    }
}
F._$litElement$ = !0,
F.finalized = !0,
it.litElementHydrateSupport?.({
    LitElement: F
});
const oe = it.litElementPolyfillSupport;
oe?.({
    LitElement: F
});
(it.litElementVersions ??= []).push("4.2.0");
export {ae as B, g as E, k as T, F as a, de as b, At as c, he as f, ue as i, It as r, G as u, pe as x};
//# sourceMappingURL=lit-element-D0fUBeRb.js.map
