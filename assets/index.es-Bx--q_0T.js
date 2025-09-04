const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/secp256k1-DnIu5m5w.js", "assets/main-CVc-xj4y.js", "assets/config-ewMXOZVY.js", "assets/main-C0iQzFUs.css", "assets/to-string-DV9ssbr2.js", "assets/core-DalZKZG0.js", "assets/lit-element-D0fUBeRb.js"]))) => i.map(i => d[i]);
import {_ as pa, $ as Fc, a0 as C, a1 as L, a2 as Li, a3 as wt, a4 as Gc, a5 as Wc, a6 as ye, a7 as yr, a8 as Jc, a9 as ns, aa as Ps, ab as Wr, ac as Qc, ad as Yc, ae as Zc, af as Xc, ag as eh, ah as pn, ai as Ii, aj as Ot, ak as Ts, al as th, am as Se, an as ih, ao as Ue, ap as kt, aq as _i, ar as Jr, as as He, at as sh, au as Qr, av as Yr, aw as qs, ax as Zr, ay as dn, az as rh, aA as nh, aB as li, aC as da, aD as pt, aE as rt, aF as bt, aG as Ze} from "./main-CVc-xj4y.js";
import {f as Ke, t as Ne, c as Bi} from "./to-string-DV9ssbr2.js";
function $s(i) {
    if (!Number.isSafeInteger(i) || i < 0)
        throw new Error("positive integer expected, got " + i)
}
function oh(i) {
    return i instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array"
}
function js(i, ...e) {
    if (!oh(i))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(i.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + i.length)
}
function qv(i) {
    if (typeof i != "function" || typeof i.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    $s(i.outputLen),
    $s(i.blockLen)
}
function gn(i, e=!0) {
    if (i.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && i.finished)
        throw new Error("Hash#digest() has already been called")
}
function ah(i, e) {
    js(i);
    const t = e.outputLen;
    if (i.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
const Gt = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ch(i) {
    return new Uint32Array(i.buffer,i.byteOffset,Math.floor(i.byteLength / 4))
}
function jv(i) {
    return new DataView(i.buffer,i.byteOffset,i.byteLength)
}
function Dv(i, e) {
    return i << 32 - e | i >>> e
}
const fn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function hh(i) {
    return i << 24 & 4278190080 | i << 8 & 16711680 | i >>> 8 & 65280 | i >>> 24 & 255
}
function yn(i) {
    for (let e = 0; e < i.length; e++)
        i[e] = hh(i[e])
}
function lh(i) {
    if (typeof i != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof i);
    return new Uint8Array(new TextEncoder().encode(i))
}
function ga(i) {
    return typeof i == "string" && (i = lh(i)),
    js(i),
    i
}
function kv(...i) {
    let e = 0;
    for (let s = 0; s < i.length; s++) {
        const r = i[s];
        js(r),
        e += r.length
    }
    const t = new Uint8Array(e);
    for (let s = 0, r = 0; s < i.length; s++) {
        const n = i[s];
        t.set(n, r),
        r += n.length
    }
    return t
}
class uh {
    clone() {
        return this._cloneInto()
    }
}
function ph(i) {
    const e = s => i().update(ga(s)).digest()
      , t = i();
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = () => i(),
    e
}
function Mv(i=32) {
    if (Gt && typeof Gt.getRandomValues == "function")
        return Gt.getRandomValues(new Uint8Array(i));
    if (Gt && typeof Gt.randomBytes == "function")
        return Gt.randomBytes(i);
    throw new Error("crypto.getRandomValues must be defined")
}
function Vi(i, {strict: e=!0}={}) {
    return !i || typeof i != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(i) : i.startsWith("0x")
}
function mn(i) {
    return Vi(i, {
        strict: !1
    }) ? Math.ceil((i.length - 2) / 2) : i.length
}
const fa = "2.23.2";
let Vs = {
    getDocsUrl: ({docsBaseUrl: i, docsPath: e="", docsSlug: t}) => e ? `${i ?? "https://viem.sh"}${e}${t ? `#${t}` : ""}` : void 0,
    version: `viem@${fa}`
};
class Lt extends Error {
    constructor(e, t={}) {
        const s = t.cause instanceof Lt ? t.cause.details : t.cause?.message ? t.cause.message : t.details
          , r = t.cause instanceof Lt && t.cause.docsPath || t.docsPath
          , n = Vs.getDocsUrl?.({
            ...t,
            docsPath: r
        })
          , o = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...n ? [`Docs: ${n}`] : [], ...s ? [`Details: ${s}`] : [], ...Vs.version ? [`Version: ${Vs.version}`] : []].join(`
`);
        super(o, t.cause ? {
            cause: t.cause
        } : void 0),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }),
        this.details = s,
        this.docsPath = r,
        this.metaMessages = t.metaMessages,
        this.name = t.name ?? this.name,
        this.shortMessage = e,
        this.version = fa
    }
    walk(e) {
        return ya(this, e)
    }
}
function ya(i, e) {
    return e?.(i) ? i : i && typeof i == "object" && "cause"in i && i.cause !== void 0 ? ya(i.cause, e) : e ? null : i
}
class ma extends Lt {
    constructor({size: e, targetSize: t, type: s}) {
        super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`, {
            name: "SizeExceedsPaddingSizeError"
        })
    }
}
function Pi(i, {dir: e, size: t=32}={}) {
    return typeof i == "string" ? dh(i, {
        dir: e,
        size: t
    }) : gh(i, {
        dir: e,
        size: t
    })
}
function dh(i, {dir: e, size: t=32}={}) {
    if (t === null)
        return i;
    const s = i.replace("0x", "");
    if (s.length > t * 2)
        throw new ma({
            size: Math.ceil(s.length / 2),
            targetSize: t,
            type: "hex"
        });
    return `0x${s[e === "right" ? "padEnd" : "padStart"](t * 2, "0")}`
}
function gh(i, {dir: e, size: t=32}={}) {
    if (t === null)
        return i;
    if (i.length > t)
        throw new ma({
            size: i.length,
            targetSize: t,
            type: "bytes"
        });
    const s = new Uint8Array(t);
    for (let r = 0; r < t; r++) {
        const n = e === "right";
        s[n ? r : t - r - 1] = i[n ? r : i.length - r - 1]
    }
    return s
}
class fh extends Lt {
    constructor({max: e, min: t, signed: s, size: r, value: n}) {
        super(`Number "${n}" is not in safe ${r ? `${r * 8}-bit ${s ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`, {
            name: "IntegerOutOfRangeError"
        })
    }
}
class yh extends Lt {
    constructor({givenSize: e, maxSize: t}) {
        super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError"
        })
    }
}
function $i(i, {size: e}) {
    if (mn(i) > e)
        throw new yh({
            givenSize: mn(i),
            maxSize: e
        })
}
function mr(i, e={}) {
    const {signed: t} = e;
    e.size && $i(i, {
        size: e.size
    });
    const s = BigInt(i);
    if (!t)
        return s;
    const r = (i.length - 2) / 2
      , n = (1n << BigInt(r) * 8n - 1n) - 1n;
    return s <= n ? s : s - BigInt(`0x${"f".padStart(r * 2, "f")}`) - 1n
}
function mh(i, e={}) {
    return Number(mr(i, e))
}
const wh = Array.from({
    length: 256
}, (i, e) => e.toString(16).padStart(2, "0"));
function wr(i, e={}) {
    return typeof i == "number" || typeof i == "bigint" ? ba(i, e) : typeof i == "string" ? Eh(i, e) : typeof i == "boolean" ? bh(i, e) : wa(i, e)
}
function bh(i, e={}) {
    const t = `0x${Number(i)}`;
    return typeof e.size == "number" ? ($i(t, {
        size: e.size
    }),
    Pi(t, {
        size: e.size
    })) : t
}
function wa(i, e={}) {
    let t = "";
    for (let r = 0; r < i.length; r++)
        t += wh[i[r]];
    const s = `0x${t}`;
    return typeof e.size == "number" ? ($i(s, {
        size: e.size
    }),
    Pi(s, {
        dir: "right",
        size: e.size
    })) : s
}
function ba(i, e={}) {
    const {signed: t, size: s} = e
      , r = BigInt(i);
    let n;
    s ? t ? n = (1n << BigInt(s) * 8n - 1n) - 1n : n = 2n ** (BigInt(s) * 8n) - 1n : typeof i == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof n == "bigint" && t ? -n - 1n : 0;
    if (n && r > n || r < o) {
        const c = typeof i == "bigint" ? "n" : "";
        throw new fh({
            max: n ? `${n}${c}` : void 0,
            min: `${o}${c}`,
            signed: t,
            size: s,
            value: `${i}${c}`
        })
    }
    const a = `0x${(t && r < 0 ? (1n << BigInt(s * 8)) + BigInt(r) : r).toString(16)}`;
    return s ? Pi(a, {
        size: s
    }) : a
}
const vh = new TextEncoder;
function Eh(i, e={}) {
    const t = vh.encode(i);
    return wa(t, e)
}
const Ih = new TextEncoder;
function _h(i, e={}) {
    return typeof i == "number" || typeof i == "bigint" ? $h(i, e) : typeof i == "boolean" ? Ph(i, e) : Vi(i) ? va(i, e) : Ea(i, e)
}
function Ph(i, e={}) {
    const t = new Uint8Array(1);
    return t[0] = Number(i),
    typeof e.size == "number" ? ($i(t, {
        size: e.size
    }),
    Pi(t, {
        size: e.size
    })) : t
}
const lt = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function wn(i) {
    if (i >= lt.zero && i <= lt.nine)
        return i - lt.zero;
    if (i >= lt.A && i <= lt.F)
        return i - (lt.A - 10);
    if (i >= lt.a && i <= lt.f)
        return i - (lt.a - 10)
}
function va(i, e={}) {
    let t = i;
    e.size && ($i(t, {
        size: e.size
    }),
    t = Pi(t, {
        dir: "right",
        size: e.size
    }));
    let s = t.slice(2);
    s.length % 2 && (s = `0${s}`);
    const r = s.length / 2
      , n = new Uint8Array(r);
    for (let o = 0, a = 0; o < r; o++) {
        const c = wn(s.charCodeAt(a++))
          , h = wn(s.charCodeAt(a++));
        if (c === void 0 || h === void 0)
            throw new Lt(`Invalid byte sequence ("${s[a - 2]}${s[a - 1]}" in "${s}").`);
        n[o] = c * 16 + h
    }
    return n
}
function $h(i, e) {
    const t = ba(i, e);
    return va(t)
}
function Ea(i, e={}) {
    const t = Ih.encode(i);
    return typeof e.size == "number" ? ($i(t, {
        size: e.size
    }),
    Pi(t, {
        dir: "right",
        size: e.size
    })) : t
}
const os = BigInt(2 ** 32 - 1)
  , bn = BigInt(32);
function Sh(i, e=!1) {
    return e ? {
        h: Number(i & os),
        l: Number(i >> bn & os)
    } : {
        h: Number(i >> bn & os) | 0,
        l: Number(i & os) | 0
    }
}
function Oh(i, e=!1) {
    let t = new Uint32Array(i.length)
      , s = new Uint32Array(i.length);
    for (let r = 0; r < i.length; r++) {
        const {h: n, l: o} = Sh(i[r], e);
        [t[r],s[r]] = [n, o]
    }
    return [t, s]
}
const xh = (i, e, t) => i << t | e >>> 32 - t
  , Ah = (i, e, t) => e << t | i >>> 32 - t
  , Ch = (i, e, t) => e << t - 32 | i >>> 64 - t
  , Nh = (i, e, t) => i << t - 32 | e >>> 64 - t
  , Ia = []
  , _a = []
  , Pa = []
  , Rh = BigInt(0)
  , Ci = BigInt(1)
  , Th = BigInt(2)
  , qh = BigInt(7)
  , jh = BigInt(256)
  , Dh = BigInt(113);
for (let i = 0, e = Ci, t = 1, s = 0; i < 24; i++) {
    [t,s] = [s, (2 * t + 3 * s) % 5],
    Ia.push(2 * (5 * s + t)),
    _a.push((i + 1) * (i + 2) / 2 % 64);
    let r = Rh;
    for (let n = 0; n < 7; n++)
        e = (e << Ci ^ (e >> qh) * Dh) % jh,
        e & Th && (r ^= Ci << (Ci << BigInt(n)) - Ci);
    Pa.push(r)
}
const [kh,Mh] = Oh(Pa, !0)
  , vn = (i, e, t) => t > 32 ? Ch(i, e, t) : xh(i, e, t)
  , En = (i, e, t) => t > 32 ? Nh(i, e, t) : Ah(i, e, t);
function Uh(i, e=24) {
    const t = new Uint32Array(10);
    for (let s = 24 - e; s < 24; s++) {
        for (let o = 0; o < 10; o++)
            t[o] = i[o] ^ i[o + 10] ^ i[o + 20] ^ i[o + 30] ^ i[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10
              , c = (o + 2) % 10
              , h = t[c]
              , l = t[c + 1]
              , u = vn(h, l, 1) ^ t[a]
              , p = En(h, l, 1) ^ t[a + 1];
            for (let d = 0; d < 50; d += 10)
                i[o + d] ^= u,
                i[o + d + 1] ^= p
        }
        let r = i[2]
          , n = i[3];
        for (let o = 0; o < 24; o++) {
            const a = _a[o]
              , c = vn(r, n, a)
              , h = En(r, n, a)
              , l = Ia[o];
            r = i[l],
            n = i[l + 1],
            i[l] = c,
            i[l + 1] = h
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                t[a] = i[o + a];
            for (let a = 0; a < 10; a++)
                i[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10]
        }
        i[0] ^= kh[s],
        i[1] ^= Mh[s]
    }
    t.fill(0)
}
class Xr extends uh {
    constructor(e, t, s, r=!1, n=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = t,
        this.outputLen = s,
        this.enableXOF = r,
        this.rounds = n,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        $s(s),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = ch(this.state)
    }
    keccak() {
        fn || yn(this.state32),
        Uh(this.state32, this.rounds),
        fn || yn(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        gn(this);
        const {blockLen: t, state: s} = this;
        e = ga(e);
        const r = e.length;
        for (let n = 0; n < r; ) {
            const o = Math.min(t - this.pos, r - n);
            for (let a = 0; a < o; a++)
                s[this.pos++] ^= e[n++];
            this.pos === t && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: t, pos: s, blockLen: r} = this;
        e[s] ^= t,
        (t & 128) !== 0 && s === r - 1 && this.keccak(),
        e[r - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        gn(this, !1),
        js(e),
        this.finish();
        const t = this.state
          , {blockLen: s} = this;
        for (let r = 0, n = e.length; r < n; ) {
            this.posOut >= s && this.keccak();
            const o = Math.min(s - this.posOut, n - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
            this.posOut += o,
            r += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return $s(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (ah(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        this.state.fill(0)
    }
    _cloneInto(e) {
        const {blockLen: t, suffix: s, outputLen: r, rounds: n, enableXOF: o} = this;
        return e || (e = new Xr(t,s,r,o,n)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = n,
        e.suffix = s,
        e.outputLen = r,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
const Lh = (i, e, t) => ph( () => new Xr(e,i,t))
  , Bh = Lh(1, 136, 256 / 8);
function $a(i, e) {
    const t = e || "hex"
      , s = Bh(Vi(i, {
        strict: !1
    }) ? _h(i) : i);
    return t === "bytes" ? s : wr(s)
}
class zh extends Map {
    constructor(e) {
        super(),
        Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.maxSize = e
    }
    get(e) {
        const t = super.get(e);
        return super.has(e) && t !== void 0 && (this.delete(e),
        super.set(e, t)),
        t
    }
    set(e, t) {
        if (super.set(e, t),
        this.maxSize && this.size > this.maxSize) {
            const s = this.keys().next().value;
            s && this.delete(s)
        }
        return this
    }
}
const Fs = new zh(8192);
function Kh(i, e) {
    if (Fs.has(`${i}.${e}`))
        return Fs.get(`${i}.${e}`);
    const t = i.substring(2).toLowerCase()
      , s = $a(Ea(t), "bytes")
      , r = t.split("");
    for (let o = 0; o < 40; o += 2)
        s[o >> 1] >> 4 >= 8 && r[o] && (r[o] = r[o].toUpperCase()),
        (s[o >> 1] & 15) >= 8 && r[o + 1] && (r[o + 1] = r[o + 1].toUpperCase());
    const n = `0x${r.join("")}`;
    return Fs.set(`${i}.${e}`, n),
    n
}
function Hh(i) {
    const e = $a(`0x${i.substring(4)}`).substring(26);
    return Kh(`0x${e}`)
}
async function Vh({hash: i, signature: e}) {
    const t = Vi(i) ? i : wr(i)
      , {secp256k1: s} = await pa(async () => {
        const {secp256k1: o} = await import("./secp256k1-DnIu5m5w.js");
        return {
            secp256k1: o
        }
    }
    , __vite__mapDeps([0, 1, 2, 3, 4]));
    return `0x${( () => {
        if (typeof e == "object" && "r"in e && "s"in e) {
            const {r: h, s: l, v: u, yParity: p} = e
              , d = Number(p ?? u)
              , g = In(d);
            return new s.Signature(mr(h),mr(l)).addRecoveryBit(g)
        }
        const o = Vi(e) ? e : wr(e)
          , a = mh(`0x${o.slice(130)}`)
          , c = In(a);
        return s.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(c)
    }
    )().recoverPublicKey(t.substring(2)).toHex(!1)}`
}
function In(i) {
    if (i === 0 || i === 1)
        return i;
    if (i === 27)
        return 0;
    if (i === 28)
        return 1;
    throw new Error("Invalid yParityOrV value")
}
async function Fh({hash: i, signature: e}) {
    return Hh(await Vh({
        hash: i,
        signature: e
    }))
}
var Gh = {};
const Wh = ":";
function gi(i) {
    const [e,t] = i.split(Wh);
    return {
        namespace: e,
        reference: t
    }
}
function _n(i, e=[]) {
    const t = [];
    return Object.keys(i).forEach(s => {
        if (e.length && !e.includes(s))
            return;
        const r = i[s];
        t.push(...r.accounts)
    }
    ),
    t
}
function Sa(i, e) {
    return i.includes(":") ? [i] : e.chains || []
}
var Jh = Object.defineProperty
  , Qh = Object.defineProperties
  , Yh = Object.getOwnPropertyDescriptors
  , Pn = Object.getOwnPropertySymbols
  , Zh = Object.prototype.hasOwnProperty
  , Xh = Object.prototype.propertyIsEnumerable
  , $n = (i, e, t) => e in i ? Jh(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Sn = (i, e) => {
    for (var t in e || (e = {}))
        Zh.call(e, t) && $n(i, t, e[t]);
    if (Pn)
        for (var t of Pn(e))
            Xh.call(e, t) && $n(i, t, e[t]);
    return i
}
  , el = (i, e) => Qh(i, Yh(e));
const tl = "ReactNative"
  , ke = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}
  , il = "js";
function Ss() {
    return typeof Li < "u" && typeof Li.versions < "u" && typeof Li.versions.node < "u"
}
function xt() {
    return !wt.getDocument() && !!wt.getNavigator() && navigator.product === tl
}
function sl() {
    return xt() && typeof L < "u" && typeof (L == null ? void 0 : L.Platform) < "u" && (L == null ? void 0 : L.Platform.OS) === "android"
}
function rl() {
    return xt() && typeof L < "u" && typeof (L == null ? void 0 : L.Platform) < "u" && (L == null ? void 0 : L.Platform.OS) === "ios"
}
function Si() {
    return !Ss() && !!wt.getNavigator() && !!wt.getDocument()
}
function Yi() {
    return xt() ? ke.reactNative : Ss() ? ke.node : Si() ? ke.browser : ke.unknown
}
function On() {
    var i;
    try {
        return xt() && typeof L < "u" && typeof (L == null ? void 0 : L.Application) < "u" ? (i = L.Application) == null ? void 0 : i.applicationId : void 0
    } catch {
        return
    }
}
function nl(i, e) {
    const t = new URLSearchParams(i);
    for (const s of Object.keys(e).sort())
        if (e.hasOwnProperty(s)) {
            const r = e[s];
            r !== void 0 && t.set(s, r)
        }
    return t.toString()
}
function ol(i) {
    var e, t;
    const s = Oa();
    try {
        return i != null && i.url && s.url && new URL(i.url).host !== new URL(s.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${i.url} differs from the actual page url:${s.url}. This is probably unintended and can lead to issues.`),
        i.url = s.url),
        (e = i?.icons) != null && e.length && i.icons.length > 0 && (i.icons = i.icons.filter(r => r !== "")),
        el(Sn(Sn({}, s), i), {
            url: i?.url || s.url,
            name: i?.name || s.name,
            description: i?.description || s.description,
            icons: (t = i?.icons) != null && t.length && i.icons.length > 0 ? i.icons : s.icons
        })
    } catch (r) {
        return console.warn("Error populating app metadata", r),
        i || s
    }
}
function Oa() {
    return Fc.getWindowMetadata() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function al() {
    if (Yi() === ke.reactNative && typeof L < "u" && typeof (L == null ? void 0 : L.Platform) < "u") {
        const {OS: t, Version: s} = L.Platform;
        return [t, s].join("-")
    }
    const i = Wc();
    if (i === null)
        return "unknown";
    const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
    return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-")
}
function cl() {
    var i;
    const e = Yi();
    return e === ke.browser ? [e, ((i = wt.getLocation()) == null ? void 0 : i.host) || "unknown"].join(":") : e
}
function xa(i, e, t) {
    const s = al()
      , r = cl();
    return [[i, e].join("-"), [il, t].join("-"), s, r].join("/")
}
function hl({protocol: i, version: e, relayUrl: t, sdkVersion: s, auth: r, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c}) {
    const h = t.split("?")
      , l = xa(i, e, s)
      , u = {
        auth: r,
        ua: l,
        projectId: n,
        useOnCloseEvent: o,
        packageName: c || void 0,
        bundleId: a || void 0
    }
      , p = nl(h[1] || "", u);
    return h[0] + "?" + p
}
function Mt(i, e) {
    return i.filter(t => e.includes(t)).length === i.length
}
function br(i) {
    return Object.fromEntries(i.entries())
}
function vr(i) {
    return new Map(Object.entries(i))
}
function Rt(i=C.FIVE_MINUTES, e) {
    const t = C.toMiliseconds(i || C.FIVE_MINUTES);
    let s, r, n, o;
    return {
        resolve: a => {
            n && s && (clearTimeout(n),
            s(a),
            o = Promise.resolve(a))
        }
        ,
        reject: a => {
            n && r && (clearTimeout(n),
            r(a))
        }
        ,
        done: () => new Promise( (a, c) => {
            if (o)
                return a(o);
            n = setTimeout( () => {
                const h = new Error(e);
                o = Promise.reject(h),
                c(h)
            }
            , t),
            s = a,
            r = c
        }
        )
    }
}
function Pt(i, e, t) {
    return new Promise(async (s, r) => {
        const n = setTimeout( () => r(new Error(t)), e);
        try {
            const o = await i;
            s(o)
        } catch (o) {
            r(o)
        }
        clearTimeout(n)
    }
    )
}
function Aa(i, e) {
    if (typeof e == "string" && e.startsWith(`${i}:`))
        return e;
    if (i.toLowerCase() === "topic") {
        if (typeof e != "string")
            throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (i.toLowerCase() === "id") {
        if (typeof e != "number")
            throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${i}`)
}
function ll(i) {
    return Aa("topic", i)
}
function ul(i) {
    return Aa("id", i)
}
function Ca(i) {
    const [e,t] = i.split(":")
      , s = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof t == "string")
        s.topic = t;
    else if (e === "id" && Number.isInteger(Number(t)))
        s.id = Number(t);
    else
        throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
    return s
}
function ce(i, e) {
    return C.fromMiliseconds(Date.now() + C.toMiliseconds(i))
}
function It(i) {
    return Date.now() >= C.toMiliseconds(i)
}
function J(i, e) {
    return `${i}${e ? `:${e}` : ""}`
}
function ot(i=[], e=[]) {
    return [...new Set([...i, ...e])]
}
async function pl({id: i, topic: e, wcDeepLink: t}) {
    var s;
    try {
        if (!t)
            return;
        const r = typeof t == "string" ? JSON.parse(t) : t
          , n = r?.href;
        if (typeof n != "string")
            return;
        const o = dl(n, i, e)
          , a = Yi();
        if (a === ke.browser) {
            if (!((s = wt.getDocument()) != null && s.hasFocus())) {
                console.warn("Document does not have focus, skipping deeplink.");
                return
            }
            gl(o)
        } else
            a === ke.reactNative && typeof (L == null ? void 0 : L.Linking) < "u" && await L.Linking.openURL(o)
    } catch (r) {
        console.error(r)
    }
}
function dl(i, e, t) {
    const s = `requestId=${e}&sessionTopic=${t}`;
    i.endsWith("/") && (i = i.slice(0, -1));
    let r = `${i}`;
    if (i.startsWith("https://t.me")) {
        const n = i.includes("?") ? "&startapp=" : "?startapp=";
        r = `${r}${n}${wl(s, !0)}`
    } else
        r = `${r}/wc?${s}`;
    return r
}
function gl(i) {
    let e = "_self";
    ml() ? e = "_top" : (yl() || i.startsWith("https://") || i.startsWith("http://")) && (e = "_blank"),
    window.open(i, e, "noreferrer noopener")
}
async function fl(i, e) {
    let t = "";
    try {
        if (Si() && (t = localStorage.getItem(e),
        t))
            return t;
        t = await i.getItem(e)
    } catch (s) {
        console.error(s)
    }
    return t
}
function xn(i, e) {
    if (!i.includes(e))
        return null;
    const t = i.split(/([&,?,=])/)
      , s = t.indexOf(e);
    return t[s + 2]
}
function An() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, i => {
        const e = Math.random() * 16 | 0;
        return (i === "x" ? e : e & 3 | 8).toString(16)
    }
    )
}
function en() {
    return typeof Li < "u" && Gh.IS_VITEST === "true"
}
function yl() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto)
}
function ml() {
    try {
        return window.self !== window.top
    } catch {
        return !1
    }
}
function wl(i, e=!1) {
    const t = ye.from(i).toString("base64");
    return e ? t.replace(/[=]/g, "") : t
}
function Na(i) {
    return ye.from(i, "base64").toString("utf-8")
}
function bl(i) {
    return new Promise(e => setTimeout(e, i))
}
function Fi(i) {
    if (!Number.isSafeInteger(i) || i < 0)
        throw new Error("positive integer expected, got " + i)
}
function vl(i) {
    return i instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array"
}
function Zi(i, ...e) {
    if (!vl(i))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(i.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + i.length)
}
function tn(i) {
    if (typeof i != "function" || typeof i.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Fi(i.outputLen),
    Fi(i.blockLen)
}
function fi(i, e=!0) {
    if (i.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && i.finished)
        throw new Error("Hash#digest() has already been called")
}
function Ra(i, e) {
    Zi(i);
    const t = e.outputLen;
    if (i.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
const as = BigInt(2 ** 32 - 1)
  , Cn = BigInt(32);
function El(i, e=!1) {
    return e ? {
        h: Number(i & as),
        l: Number(i >> Cn & as)
    } : {
        h: Number(i >> Cn & as) | 0,
        l: Number(i & as) | 0
    }
}
function Il(i, e=!1) {
    let t = new Uint32Array(i.length)
      , s = new Uint32Array(i.length);
    for (let r = 0; r < i.length; r++) {
        const {h: n, l: o} = El(i[r], e);
        [t[r],s[r]] = [n, o]
    }
    return [t, s]
}
const _l = (i, e, t) => i << t | e >>> 32 - t
  , Pl = (i, e, t) => e << t | i >>> 32 - t
  , $l = (i, e, t) => e << t - 32 | i >>> 64 - t
  , Sl = (i, e, t) => i << t - 32 | e >>> 64 - t
  , Wt = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
function Ol(i) {
    return new Uint32Array(i.buffer,i.byteOffset,Math.floor(i.byteLength / 4))
}
function Gs(i) {
    return new DataView(i.buffer,i.byteOffset,i.byteLength)
}
function et(i, e) {
    return i << 32 - e | i >>> e
}
const Nn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function xl(i) {
    return i << 24 & 4278190080 | i << 8 & 16711680 | i >>> 8 & 65280 | i >>> 24 & 255
}
function Rn(i) {
    for (let e = 0; e < i.length; e++)
        i[e] = xl(i[e])
}
function Al(i) {
    if (typeof i != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof i);
    return new Uint8Array(new TextEncoder().encode(i))
}
function yi(i) {
    return typeof i == "string" && (i = Al(i)),
    Zi(i),
    i
}
function Cl(...i) {
    let e = 0;
    for (let s = 0; s < i.length; s++) {
        const r = i[s];
        Zi(r),
        e += r.length
    }
    const t = new Uint8Array(e);
    for (let s = 0, r = 0; s < i.length; s++) {
        const n = i[s];
        t.set(n, r),
        r += n.length
    }
    return t
}
let sn = class {
    clone() {
        return this._cloneInto()
    }
}
;
function Ta(i) {
    const e = s => i().update(yi(s)).digest()
      , t = i();
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = () => i(),
    e
}
function Oi(i=32) {
    if (Wt && typeof Wt.getRandomValues == "function")
        return Wt.getRandomValues(new Uint8Array(i));
    if (Wt && typeof Wt.randomBytes == "function")
        return Wt.randomBytes(i);
    throw new Error("crypto.getRandomValues must be defined")
}
const qa = []
  , ja = []
  , Da = []
  , Nl = BigInt(0)
  , Ni = BigInt(1)
  , Rl = BigInt(2)
  , Tl = BigInt(7)
  , ql = BigInt(256)
  , jl = BigInt(113);
for (let i = 0, e = Ni, t = 1, s = 0; i < 24; i++) {
    [t,s] = [s, (2 * t + 3 * s) % 5],
    qa.push(2 * (5 * s + t)),
    ja.push((i + 1) * (i + 2) / 2 % 64);
    let r = Nl;
    for (let n = 0; n < 7; n++)
        e = (e << Ni ^ (e >> Tl) * jl) % ql,
        e & Rl && (r ^= Ni << (Ni << BigInt(n)) - Ni);
    Da.push(r)
}
const [Dl,kl] = Il(Da, !0)
  , Tn = (i, e, t) => t > 32 ? $l(i, e, t) : _l(i, e, t)
  , qn = (i, e, t) => t > 32 ? Sl(i, e, t) : Pl(i, e, t);
function Ml(i, e=24) {
    const t = new Uint32Array(10);
    for (let s = 24 - e; s < 24; s++) {
        for (let o = 0; o < 10; o++)
            t[o] = i[o] ^ i[o + 10] ^ i[o + 20] ^ i[o + 30] ^ i[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10
              , c = (o + 2) % 10
              , h = t[c]
              , l = t[c + 1]
              , u = Tn(h, l, 1) ^ t[a]
              , p = qn(h, l, 1) ^ t[a + 1];
            for (let d = 0; d < 50; d += 10)
                i[o + d] ^= u,
                i[o + d + 1] ^= p
        }
        let r = i[2]
          , n = i[3];
        for (let o = 0; o < 24; o++) {
            const a = ja[o]
              , c = Tn(r, n, a)
              , h = qn(r, n, a)
              , l = qa[o];
            r = i[l],
            n = i[l + 1],
            i[l] = c,
            i[l + 1] = h
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                t[a] = i[o + a];
            for (let a = 0; a < 10; a++)
                i[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10]
        }
        i[0] ^= Dl[s],
        i[1] ^= kl[s]
    }
    t.fill(0)
}
let Ul = class ka extends sn {
    constructor(e, t, s, r=!1, n=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = t,
        this.outputLen = s,
        this.enableXOF = r,
        this.rounds = n,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        Fi(s),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Ol(this.state)
    }
    keccak() {
        Nn || Rn(this.state32),
        Ml(this.state32, this.rounds),
        Nn || Rn(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        fi(this);
        const {blockLen: t, state: s} = this;
        e = yi(e);
        const r = e.length;
        for (let n = 0; n < r; ) {
            const o = Math.min(t - this.pos, r - n);
            for (let a = 0; a < o; a++)
                s[this.pos++] ^= e[n++];
            this.pos === t && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: t, pos: s, blockLen: r} = this;
        e[s] ^= t,
        (t & 128) !== 0 && s === r - 1 && this.keccak(),
        e[r - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        fi(this, !1),
        Zi(e),
        this.finish();
        const t = this.state
          , {blockLen: s} = this;
        for (let r = 0, n = e.length; r < n; ) {
            this.posOut >= s && this.keccak();
            const o = Math.min(s - this.posOut, n - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
            this.posOut += o,
            r += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return Fi(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (Ra(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        this.state.fill(0)
    }
    _cloneInto(e) {
        const {blockLen: t, suffix: s, outputLen: r, rounds: n, enableXOF: o} = this;
        return e || (e = new ka(t,s,r,o,n)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = n,
        e.suffix = s,
        e.outputLen = r,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
;
const Ll = (i, e, t) => Ta( () => new Ul(e,i,t))
  , Bl = Ll(1, 136, 256 / 8)
  , zl = "https://rpc.walletconnect.org/v1";
function Ma(i) {
    const e = `Ethereum Signed Message:
${i.length}`
      , t = new TextEncoder().encode(e + i);
    return "0x" + ye.from(Bl(t)).toString("hex")
}
async function Kl(i, e, t, s, r, n) {
    switch (t.t) {
    case "eip191":
        return await Hl(i, e, t.s);
    case "eip1271":
        return await Vl(i, e, t.s, s, r, n);
    default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`)
    }
}
async function Hl(i, e, t) {
    return (await Fh({
        hash: Ma(e),
        signature: t
    })).toLowerCase() === i.toLowerCase()
}
async function Vl(i, e, t, s, r, n) {
    const o = gi(s);
    if (!o.namespace || !o.reference)
        throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${s}`);
    try {
        const a = "0x1626ba7e"
          , c = "0000000000000000000000000000000000000000000000000000000000000040"
          , h = "0000000000000000000000000000000000000000000000000000000000000041"
          , l = t.substring(2)
          , u = Ma(e).substring(2)
          , p = a + u + c + h + l
          , d = await fetch(`${n || zl}/?chainId=${s}&projectId=${r}`, {
            method: "POST",
            body: JSON.stringify({
                id: Fl(),
                jsonrpc: "2.0",
                method: "eth_call",
                params: [{
                    to: i,
                    data: p
                }, "latest"]
            })
        })
          , {result: g} = await d.json();
        return g ? g.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1
    } catch (a) {
        return console.error("isValidEip1271Signature: ", a),
        !1
    }
}
function Fl() {
    return Date.now() + Math.floor(Math.random() * 1e3)
}
function Gl(i) {
    const e = atob(i)
      , t = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++)
        t[o] = e.charCodeAt(o);
    const s = t[0];
    if (s === 0)
        throw new Error("No signatures found");
    const r = 1 + s * 64;
    if (t.length < r)
        throw new Error("Transaction data too short for claimed signature count");
    if (t.length < 100)
        throw new Error("Transaction too short");
    const n = ye.from(i, "base64").slice(1, 65);
    return Jc.encode(n)
}
var Wl = Object.defineProperty
  , Jl = Object.defineProperties
  , Ql = Object.getOwnPropertyDescriptors
  , jn = Object.getOwnPropertySymbols
  , Yl = Object.prototype.hasOwnProperty
  , Zl = Object.prototype.propertyIsEnumerable
  , Dn = (i, e, t) => e in i ? Wl(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Xl = (i, e) => {
    for (var t in e || (e = {}))
        Yl.call(e, t) && Dn(i, t, e[t]);
    if (jn)
        for (var t of jn(e))
            Zl.call(e, t) && Dn(i, t, e[t]);
    return i
}
  , eu = (i, e) => Jl(i, Ql(e));
const tu = "did:pkh:"
  , rn = i => i?.split(":")
  , iu = i => {
    const e = i && rn(i);
    if (e)
        return i.includes(tu) ? e[3] : e[1]
}
  , Er = i => {
    const e = i && rn(i);
    if (e)
        return e[2] + ":" + e[3]
}
  , Os = i => {
    const e = i && rn(i);
    if (e)
        return e.pop()
}
;
async function kn(i) {
    const {cacao: e, projectId: t} = i
      , {s, p: r} = e
      , n = Ua(r, r.iss)
      , o = Os(r.iss);
    return await Kl(o, n, s, Er(r.iss), t)
}
const Ua = (i, e) => {
    const t = `${i.domain} wants you to sign in with your Ethereum account:`
      , s = Os(e);
    if (!i.aud && !i.uri)
        throw new Error("Either `aud` or `uri` is required to construct the message");
    let r = i.statement || void 0;
    const n = `URI: ${i.aud || i.uri}`
      , o = `Version: ${i.version}`
      , a = `Chain ID: ${iu(e)}`
      , c = `Nonce: ${i.nonce}`
      , h = `Issued At: ${i.iat}`
      , l = i.exp ? `Expiration Time: ${i.exp}` : void 0
      , u = i.nbf ? `Not Before: ${i.nbf}` : void 0
      , p = i.requestId ? `Request ID: ${i.requestId}` : void 0
      , d = i.resources ? `Resources:${i.resources.map(y => `
- ${y}`).join("")}` : void 0
      , g = ws(i.resources);
    if (g) {
        const y = Gi(g);
        r = uu(r, y)
    }
    return [t, s, "", r, "", n, o, a, c, h, l, u, p, d].filter(y => y != null).join(`
`) 
}
;
function su(i) {
    return ye.from(JSON.stringify(i)).toString("base64")
}
function ru(i) {
    return JSON.parse(ye.from(i, "base64").toString("utf-8"))
}
function Bt(i) {
    if (!i)
        throw new Error("No recap provided, value is undefined");
    if (!i.att)
        throw new Error("No `att` property found");
    const e = Object.keys(i.att);
    if (!(e != null && e.length))
        throw new Error("No resources found in `att` property");
    e.forEach(t => {
        const s = i.att[t];
        if (Array.isArray(s))
            throw new Error(`Resource must be an object: ${t}`);
        if (typeof s != "object")
            throw new Error(`Resource must be an object: ${t}`);
        if (!Object.keys(s).length)
            throw new Error(`Resource object is empty: ${t}`);
        Object.keys(s).forEach(r => {
            const n = s[r];
            if (!Array.isArray(n))
                throw new Error(`Ability limits ${r} must be an array of objects, found: ${n}`);
            if (!n.length)
                throw new Error(`Value of ${r} is empty array, must be an array with objects`);
            n.forEach(o => {
                if (typeof o != "object")
                    throw new Error(`Ability limits (${r}) must be an array of objects, found: ${o}`)
            }
            )
        }
        )
    }
    )
}
function nu(i, e, t, s={}) {
    return t?.sort( (r, n) => r.localeCompare(n)),
    {
        att: {
            [i]: ou(e, t, s)
        }
    }
}
function ou(i, e, t={}) {
    e = e?.sort( (r, n) => r.localeCompare(n));
    const s = e.map(r => ({
        [`${i}/${r}`]: [t]
    }));
    return Object.assign({}, ...s)
}
function La(i) {
    return Bt(i),
    `urn:recap:${su(i).replace(/=/g, "")}`
}
function Gi(i) {
    const e = ru(i.replace("urn:recap:", ""));
    return Bt(e),
    e
}
function au(i, e, t) {
    const s = nu(i, e, t);
    return La(s)
}
function cu(i) {
    return i && i.includes("urn:recap:")
}
function hu(i, e) {
    const t = Gi(i)
      , s = Gi(e)
      , r = lu(t, s);
    return La(r)
}
function lu(i, e) {
    Bt(i),
    Bt(e);
    const t = Object.keys(i.att).concat(Object.keys(e.att)).sort( (r, n) => r.localeCompare(n))
      , s = {
        att: {}
    };
    return t.forEach(r => {
        var n, o;
        Object.keys(((n = i.att) == null ? void 0 : n[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort( (a, c) => a.localeCompare(c)).forEach(a => {
            var c, h;
            s.att[r] = eu(Xl({}, s.att[r]), {
                [a]: ((c = i.att[r]) == null ? void 0 : c[a]) || ((h = e.att[r]) == null ? void 0 : h[a])
            })
        }
        )
    }
    ),
    s
}
function uu(i="", e) {
    Bt(e);
    const t = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (i.includes(t))
        return i;
    const s = [];
    let r = 0;
    Object.keys(e.att).forEach(a => {
        const c = Object.keys(e.att[a]).map(u => ({
            ability: u.split("/")[0],
            action: u.split("/")[1]
        }));
        c.sort( (u, p) => u.action.localeCompare(p.action));
        const h = {};
        c.forEach(u => {
            h[u.ability] || (h[u.ability] = []),
            h[u.ability].push(u.action)
        }
        );
        const l = Object.keys(h).map(u => (r++,
        `(${r}) '${u}': '${h[u].join("', '")}' for '${a}'.`));
        s.push(l.join(", ").replace(".,", "."))
    }
    );
    const n = s.join(" ")
      , o = `${t}${n}`;
    return `${i ? i + " " : ""}${o}`
}
function Mn(i) {
    var e;
    const t = Gi(i);
    Bt(t);
    const s = (e = t.att) == null ? void 0 : e.eip155;
    return s ? Object.keys(s).map(r => r.split("/")[1]) : []
}
function Un(i) {
    const e = Gi(i);
    Bt(e);
    const t = [];
    return Object.values(e.att).forEach(s => {
        Object.values(s).forEach(r => {
            var n;
            (n = r?.[0]) != null && n.chains && t.push(r[0].chains)
        }
        )
    }
    ),
    [...new Set(t.flat())]
}
function ws(i) {
    if (!i)
        return;
    const e = i?.[i.length - 1];
    return cu(e) ? e : void 0
}
function Ws(i) {
    if (!Number.isSafeInteger(i) || i < 0)
        throw new Error("positive integer expected, got " + i)
}
function Ba(i) {
    return i instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array"
}
function De(i, ...e) {
    if (!Ba(i))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(i.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + i.length)
}
function Ln(i, e=!0) {
    if (i.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && i.finished)
        throw new Error("Hash#digest() has already been called")
}
function pu(i, e) {
    De(i);
    const t = e.outputLen;
    if (i.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
function Bn(i) {
    if (typeof i != "boolean")
        throw new Error(`boolean expected, not ${i}`)
}
const $t = i => new Uint32Array(i.buffer,i.byteOffset,Math.floor(i.byteLength / 4))
  , du = i => new DataView(i.buffer,i.byteOffset,i.byteLength)
  , gu = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!gu)
    throw new Error("Non little-endian hardware is not supported");
function fu(i) {
    if (typeof i != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(i))
}
function Ir(i) {
    if (typeof i == "string")
        i = fu(i);
    else if (Ba(i))
        i = _r(i);
    else
        throw new Error("Uint8Array expected, got " + typeof i);
    return i
}
function yu(i, e) {
    if (e == null || typeof e != "object")
        throw new Error("options must be defined");
    return Object.assign(i, e)
}
function mu(i, e) {
    if (i.length !== e.length)
        return !1;
    let t = 0;
    for (let s = 0; s < i.length; s++)
        t |= i[s] ^ e[s];
    return t === 0
}
const wu = (i, e) => {
    function t(s, ...r) {
        if (De(s),
        i.nonceLength !== void 0) {
            const h = r[0];
            if (!h)
                throw new Error("nonce / iv required");
            i.varSizeNonce ? De(h) : De(h, i.nonceLength)
        }
        const n = i.tagLength;
        n && r[1] !== void 0 && De(r[1]);
        const o = e(s, ...r)
          , a = (h, l) => {
            if (l !== void 0) {
                if (h !== 2)
                    throw new Error("cipher output not supported");
                De(l)
            }
        }
        ;
        let c = !1;
        return {
            encrypt(h, l) {
                if (c)
                    throw new Error("cannot encrypt() twice with same key + nonce");
                return c = !0,
                De(h),
                a(o.encrypt.length, l),
                o.encrypt(h, l)
            },
            decrypt(h, l) {
                if (De(h),
                n && h.length < n)
                    throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
                return a(o.decrypt.length, l),
                o.decrypt(h, l)
            }
        }
    }
    return Object.assign(t, i),
    t
}
;
function zn(i, e, t=!0) {
    if (e === void 0)
        return new Uint8Array(i);
    if (e.length !== i)
        throw new Error("invalid output length, expected " + i + ", got: " + e.length);
    if (t && !bu(e))
        throw new Error("invalid output, must be aligned");
    return e
}
function Kn(i, e, t, s) {
    if (typeof i.setBigUint64 == "function")
        return i.setBigUint64(e, t, s);
    const r = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(t >> r & n)
      , a = Number(t & n);
    i.setUint32(e + 4, o, s),
    i.setUint32(e + 0, a, s)
}
function bu(i) {
    return i.byteOffset % 4 === 0
}
function _r(i) {
    return Uint8Array.from(i)
}
function mi(...i) {
    for (let e = 0; e < i.length; e++)
        i[e].fill(0)
}
const za = i => Uint8Array.from(i.split("").map(e => e.charCodeAt(0)))
  , vu = za("expand 16-byte k")
  , Eu = za("expand 32-byte k")
  , Iu = $t(vu)
  , _u = $t(Eu);
function V(i, e) {
    return i << e | i >>> 32 - e
}
function Pr(i) {
    return i.byteOffset % 4 === 0
}
const cs = 64
  , Pu = 16
  , Ka = 2 ** 32 - 1
  , Hn = new Uint32Array;
function $u(i, e, t, s, r, n, o, a) {
    const c = r.length
      , h = new Uint8Array(cs)
      , l = $t(h)
      , u = Pr(r) && Pr(n)
      , p = u ? $t(r) : Hn
      , d = u ? $t(n) : Hn;
    for (let g = 0; g < c; o++) {
        if (i(e, t, s, l, o, a),
        o >= Ka)
            throw new Error("arx: counter overflow");
        const y = Math.min(cs, c - g);
        if (u && y === cs) {
            const f = g / 4;
            if (g % 4 !== 0)
                throw new Error("arx: invalid block position");
            for (let w = 0, m; w < Pu; w++)
                m = f + w,
                d[m] = p[m] ^ l[w];
            g += cs;
            continue
        }
        for (let f = 0, w; f < y; f++)
            w = g + f,
            n[w] = r[w] ^ h[f];
        g += y
    }
}
function Su(i, e) {
    const {allowShortKeys: t, extendNonceFn: s, counterLength: r, counterRight: n, rounds: o} = yu({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, e);
    if (typeof i != "function")
        throw new Error("core must be a function");
    return Ws(r),
    Ws(o),
    Bn(n),
    Bn(t),
    (a, c, h, l, u=0) => {
        De(a),
        De(c),
        De(h);
        const p = h.length;
        if (l === void 0 && (l = new Uint8Array(p)),
        De(l),
        Ws(u),
        u < 0 || u >= Ka)
            throw new Error("arx: counter overflow");
        if (l.length < p)
            throw new Error(`arx: output (${l.length}) is shorter than data (${p})`);
        const d = [];
        let g = a.length, y, f;
        if (g === 32)
            d.push(y = _r(a)),
            f = _u;
        else if (g === 16 && t)
            y = new Uint8Array(32),
            y.set(a),
            y.set(a, 16),
            f = Iu,
            d.push(y);
        else
            throw new Error(`arx: invalid 32-byte key, got length=${g}`);
        Pr(c) || d.push(c = _r(c));
        const w = $t(y);
        if (s) {
            if (c.length !== 24)
                throw new Error("arx: extended nonce must be 24 bytes");
            s(f, w, $t(c.subarray(0, 16)), w),
            c = c.subarray(16)
        }
        const m = 16 - r;
        if (m !== c.length)
            throw new Error(`arx: nonce must be ${m} or 16 bytes`);
        if (m !== 12) {
            const x = new Uint8Array(12);
            x.set(c, n ? 0 : 12 - c.length),
            c = x,
            d.push(c)
        }
        const v = $t(c);
        return $u(i, f, w, v, h, l, u, o),
        mi(...d),
        l
    }
}
const me = (i, e) => i[e++] & 255 | (i[e++] & 255) << 8;
class Ou {
    constructor(e) {
        this.blockLen = 16,
        this.outputLen = 16,
        this.buffer = new Uint8Array(16),
        this.r = new Uint16Array(10),
        this.h = new Uint16Array(10),
        this.pad = new Uint16Array(8),
        this.pos = 0,
        this.finished = !1,
        e = Ir(e),
        De(e, 32);
        const t = me(e, 0)
          , s = me(e, 2)
          , r = me(e, 4)
          , n = me(e, 6)
          , o = me(e, 8)
          , a = me(e, 10)
          , c = me(e, 12)
          , h = me(e, 14);
        this.r[0] = t & 8191,
        this.r[1] = (t >>> 13 | s << 3) & 8191,
        this.r[2] = (s >>> 10 | r << 6) & 7939,
        this.r[3] = (r >>> 7 | n << 9) & 8191,
        this.r[4] = (n >>> 4 | o << 12) & 255,
        this.r[5] = o >>> 1 & 8190,
        this.r[6] = (o >>> 14 | a << 2) & 8191,
        this.r[7] = (a >>> 11 | c << 5) & 8065,
        this.r[8] = (c >>> 8 | h << 8) & 8191,
        this.r[9] = h >>> 5 & 127;
        for (let l = 0; l < 8; l++)
            this.pad[l] = me(e, 16 + 2 * l)
    }
    process(e, t, s=!1) {
        const r = s ? 0 : 2048
          , {h: n, r: o} = this
          , a = o[0]
          , c = o[1]
          , h = o[2]
          , l = o[3]
          , u = o[4]
          , p = o[5]
          , d = o[6]
          , g = o[7]
          , y = o[8]
          , f = o[9]
          , w = me(e, t + 0)
          , m = me(e, t + 2)
          , v = me(e, t + 4)
          , x = me(e, t + 6)
          , N = me(e, t + 8)
          , _ = me(e, t + 10)
          , $ = me(e, t + 12)
          , R = me(e, t + 14);
        let b = n[0] + (w & 8191)
          , k = n[1] + ((w >>> 13 | m << 3) & 8191)
          , q = n[2] + ((m >>> 10 | v << 6) & 8191)
          , D = n[3] + ((v >>> 7 | x << 9) & 8191)
          , U = n[4] + ((x >>> 4 | N << 12) & 8191)
          , I = n[5] + (N >>> 1 & 8191)
          , O = n[6] + ((N >>> 14 | _ << 2) & 8191)
          , S = n[7] + ((_ >>> 11 | $ << 5) & 8191)
          , T = n[8] + (($ >>> 8 | R << 8) & 8191)
          , j = n[9] + (R >>> 5 | r)
          , P = 0
          , M = P + b * a + k * (5 * f) + q * (5 * y) + D * (5 * g) + U * (5 * d);
        P = M >>> 13,
        M &= 8191,
        M += I * (5 * p) + O * (5 * u) + S * (5 * l) + T * (5 * h) + j * (5 * c),
        P += M >>> 13,
        M &= 8191;
        let B = P + b * c + k * a + q * (5 * f) + D * (5 * y) + U * (5 * g);
        P = B >>> 13,
        B &= 8191,
        B += I * (5 * d) + O * (5 * p) + S * (5 * u) + T * (5 * l) + j * (5 * h),
        P += B >>> 13,
        B &= 8191;
        let z = P + b * h + k * c + q * a + D * (5 * f) + U * (5 * y);
        P = z >>> 13,
        z &= 8191,
        z += I * (5 * g) + O * (5 * d) + S * (5 * p) + T * (5 * u) + j * (5 * l),
        P += z >>> 13,
        z &= 8191;
        let X = P + b * l + k * h + q * c + D * a + U * (5 * f);
        P = X >>> 13,
        X &= 8191,
        X += I * (5 * y) + O * (5 * g) + S * (5 * d) + T * (5 * p) + j * (5 * u),
        P += X >>> 13,
        X &= 8191;
        let W = P + b * u + k * l + q * h + D * c + U * a;
        P = W >>> 13,
        W &= 8191,
        W += I * (5 * f) + O * (5 * y) + S * (5 * g) + T * (5 * d) + j * (5 * p),
        P += W >>> 13,
        W &= 8191;
        let se = P + b * p + k * u + q * l + D * h + U * c;
        P = se >>> 13,
        se &= 8191,
        se += I * a + O * (5 * f) + S * (5 * y) + T * (5 * g) + j * (5 * d),
        P += se >>> 13,
        se &= 8191;
        let he = P + b * d + k * p + q * u + D * l + U * h;
        P = he >>> 13,
        he &= 8191,
        he += I * c + O * a + S * (5 * f) + T * (5 * y) + j * (5 * g),
        P += he >>> 13,
        he &= 8191;
        let Ie = P + b * g + k * d + q * p + D * u + U * l;
        P = Ie >>> 13,
        Ie &= 8191,
        Ie += I * h + O * c + S * a + T * (5 * f) + j * (5 * y),
        P += Ie >>> 13,
        Ie &= 8191;
        let oe = P + b * y + k * g + q * d + D * p + U * u;
        P = oe >>> 13,
        oe &= 8191,
        oe += I * l + O * h + S * c + T * a + j * (5 * f),
        P += oe >>> 13,
        oe &= 8191;
        let ae = P + b * f + k * y + q * g + D * d + U * p;
        P = ae >>> 13,
        ae &= 8191,
        ae += I * u + O * l + S * h + T * c + j * a,
        P += ae >>> 13,
        ae &= 8191,
        P = (P << 2) + P | 0,
        P = P + M | 0,
        M = P & 8191,
        P = P >>> 13,
        B += P,
        n[0] = M,
        n[1] = B,
        n[2] = z,
        n[3] = X,
        n[4] = W,
        n[5] = se,
        n[6] = he,
        n[7] = Ie,
        n[8] = oe,
        n[9] = ae
    }
    finalize() {
        const {h: e, pad: t} = this
          , s = new Uint16Array(10);
        let r = e[1] >>> 13;
        e[1] &= 8191;
        for (let a = 2; a < 10; a++)
            e[a] += r,
            r = e[a] >>> 13,
            e[a] &= 8191;
        e[0] += r * 5,
        r = e[0] >>> 13,
        e[0] &= 8191,
        e[1] += r,
        r = e[1] >>> 13,
        e[1] &= 8191,
        e[2] += r,
        s[0] = e[0] + 5,
        r = s[0] >>> 13,
        s[0] &= 8191;
        for (let a = 1; a < 10; a++)
            s[a] = e[a] + r,
            r = s[a] >>> 13,
            s[a] &= 8191;
        s[9] -= 8192;
        let n = (r ^ 1) - 1;
        for (let a = 0; a < 10; a++)
            s[a] &= n;
        n = ~n;
        for (let a = 0; a < 10; a++)
            e[a] = e[a] & n | s[a];
        e[0] = (e[0] | e[1] << 13) & 65535,
        e[1] = (e[1] >>> 3 | e[2] << 10) & 65535,
        e[2] = (e[2] >>> 6 | e[3] << 7) & 65535,
        e[3] = (e[3] >>> 9 | e[4] << 4) & 65535,
        e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535,
        e[5] = (e[6] >>> 2 | e[7] << 11) & 65535,
        e[6] = (e[7] >>> 5 | e[8] << 8) & 65535,
        e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
        let o = e[0] + t[0];
        e[0] = o & 65535;
        for (let a = 1; a < 8; a++)
            o = (e[a] + t[a] | 0) + (o >>> 16) | 0,
            e[a] = o & 65535;
        mi(s)
    }
    update(e) {
        Ln(this);
        const {buffer: t, blockLen: s} = this;
        e = Ir(e);
        const r = e.length;
        for (let n = 0; n < r; ) {
            const o = Math.min(s - this.pos, r - n);
            if (o === s) {
                for (; s <= r - n; n += s)
                    this.process(e, n);
                continue
            }
            t.set(e.subarray(n, n + o), this.pos),
            this.pos += o,
            n += o,
            this.pos === s && (this.process(t, 0, !1),
            this.pos = 0)
        }
        return this
    }
    destroy() {
        mi(this.h, this.r, this.buffer, this.pad)
    }
    digestInto(e) {
        Ln(this),
        pu(e, this),
        this.finished = !0;
        const {buffer: t, h: s} = this;
        let {pos: r} = this;
        if (r) {
            for (t[r++] = 1; r < 16; r++)
                t[r] = 0;
            this.process(t, 0, !0)
        }
        this.finalize();
        let n = 0;
        for (let o = 0; o < 8; o++)
            e[n++] = s[o] >>> 0,
            e[n++] = s[o] >>> 8;
        return e
    }
    digest() {
        const {buffer: e, outputLen: t} = this;
        this.digestInto(e);
        const s = e.slice(0, t);
        return this.destroy(),
        s
    }
}
function xu(i) {
    const e = (s, r) => i(r).update(Ir(s)).digest()
      , t = i(new Uint8Array(32));
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = s => i(s),
    e
}
const Au = xu(i => new Ou(i));
function Cu(i, e, t, s, r, n=20) {
    let o = i[0]
      , a = i[1]
      , c = i[2]
      , h = i[3]
      , l = e[0]
      , u = e[1]
      , p = e[2]
      , d = e[3]
      , g = e[4]
      , y = e[5]
      , f = e[6]
      , w = e[7]
      , m = r
      , v = t[0]
      , x = t[1]
      , N = t[2]
      , _ = o
      , $ = a
      , R = c
      , b = h
      , k = l
      , q = u
      , D = p
      , U = d
      , I = g
      , O = y
      , S = f
      , T = w
      , j = m
      , P = v
      , M = x
      , B = N;
    for (let X = 0; X < n; X += 2)
        _ = _ + k | 0,
        j = V(j ^ _, 16),
        I = I + j | 0,
        k = V(k ^ I, 12),
        _ = _ + k | 0,
        j = V(j ^ _, 8),
        I = I + j | 0,
        k = V(k ^ I, 7),
        $ = $ + q | 0,
        P = V(P ^ $, 16),
        O = O + P | 0,
        q = V(q ^ O, 12),
        $ = $ + q | 0,
        P = V(P ^ $, 8),
        O = O + P | 0,
        q = V(q ^ O, 7),
        R = R + D | 0,
        M = V(M ^ R, 16),
        S = S + M | 0,
        D = V(D ^ S, 12),
        R = R + D | 0,
        M = V(M ^ R, 8),
        S = S + M | 0,
        D = V(D ^ S, 7),
        b = b + U | 0,
        B = V(B ^ b, 16),
        T = T + B | 0,
        U = V(U ^ T, 12),
        b = b + U | 0,
        B = V(B ^ b, 8),
        T = T + B | 0,
        U = V(U ^ T, 7),
        _ = _ + q | 0,
        B = V(B ^ _, 16),
        S = S + B | 0,
        q = V(q ^ S, 12),
        _ = _ + q | 0,
        B = V(B ^ _, 8),
        S = S + B | 0,
        q = V(q ^ S, 7),
        $ = $ + D | 0,
        j = V(j ^ $, 16),
        T = T + j | 0,
        D = V(D ^ T, 12),
        $ = $ + D | 0,
        j = V(j ^ $, 8),
        T = T + j | 0,
        D = V(D ^ T, 7),
        R = R + U | 0,
        P = V(P ^ R, 16),
        I = I + P | 0,
        U = V(U ^ I, 12),
        R = R + U | 0,
        P = V(P ^ R, 8),
        I = I + P | 0,
        U = V(U ^ I, 7),
        b = b + k | 0,
        M = V(M ^ b, 16),
        O = O + M | 0,
        k = V(k ^ O, 12),
        b = b + k | 0,
        M = V(M ^ b, 8),
        O = O + M | 0,
        k = V(k ^ O, 7);
    let z = 0;
    s[z++] = o + _ | 0,
    s[z++] = a + $ | 0,
    s[z++] = c + R | 0,
    s[z++] = h + b | 0,
    s[z++] = l + k | 0,
    s[z++] = u + q | 0,
    s[z++] = p + D | 0,
    s[z++] = d + U | 0,
    s[z++] = g + I | 0,
    s[z++] = y + O | 0,
    s[z++] = f + S | 0,
    s[z++] = w + T | 0,
    s[z++] = m + j | 0,
    s[z++] = v + P | 0,
    s[z++] = x + M | 0,
    s[z++] = N + B | 0
}
const Nu = Su(Cu, {
    counterRight: !1,
    counterLength: 4,
    allowShortKeys: !1
})
  , Ru = new Uint8Array(16)
  , Vn = (i, e) => {
    i.update(e);
    const t = e.length % 16;
    t && i.update(Ru.subarray(t))
}
  , Tu = new Uint8Array(32);
function Fn(i, e, t, s, r) {
    const n = i(e, t, Tu)
      , o = Au.create(n);
    r && Vn(o, r),
    Vn(o, s);
    const a = new Uint8Array(16)
      , c = du(a);
    Kn(c, 0, BigInt(r ? r.length : 0), !0),
    Kn(c, 8, BigInt(s.length), !0),
    o.update(a);
    const h = o.digest();
    return mi(n, a),
    h
}
const qu = i => (e, t, s) => ({
    encrypt(r, n) {
        const o = r.length;
        n = zn(o + 16, n, !1),
        n.set(r);
        const a = n.subarray(0, -16);
        i(e, t, a, a, 1);
        const c = Fn(i, e, t, a, s);
        return n.set(c, o),
        mi(c),
        n
    },
    decrypt(r, n) {
        n = zn(r.length - 16, n, !1);
        const o = r.subarray(0, -16)
          , a = r.subarray(-16)
          , c = Fn(i, e, t, o, s);
        if (!mu(a, c))
            throw new Error("invalid tag");
        return n.set(r.subarray(0, -16)),
        i(e, t, n, n, 1),
        mi(c),
        n
    }
})
  , Ha = wu({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, qu(Nu));
let Va = class extends sn {
    constructor(e, t) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        tn(e);
        const s = yi(t);
        if (this.iHash = e.create(),
        typeof this.iHash.update != "function")
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        const r = this.blockLen
          , n = new Uint8Array(r);
        n.set(s.length > r ? e.create().update(s).digest() : s);
        for (let o = 0; o < n.length; o++)
            n[o] ^= 54;
        this.iHash.update(n),
        this.oHash = e.create();
        for (let o = 0; o < n.length; o++)
            n[o] ^= 106;
        this.oHash.update(n),
        n.fill(0)
    }
    update(e) {
        return fi(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        fi(this),
        Zi(e, this.outputLen),
        this.finished = !0,
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e),
        e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash: t, iHash: s, finished: r, destroyed: n, blockLen: o, outputLen: a} = this;
        return e = e,
        e.finished = r,
        e.destroyed = n,
        e.blockLen = o,
        e.outputLen = a,
        e.oHash = t._cloneInto(e.oHash),
        e.iHash = s._cloneInto(e.iHash),
        e
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
;
const Ds = (i, e, t) => new Va(i,e).update(t).digest();
Ds.create = (i, e) => new Va(i,e);
function ju(i, e, t) {
    return tn(i),
    t === void 0 && (t = new Uint8Array(i.outputLen)),
    Ds(i, yi(t), yi(e))
}
const Js = new Uint8Array([0])
  , Gn = new Uint8Array;
function Du(i, e, t, s=32) {
    if (tn(i),
    Fi(s),
    s > 255 * i.outputLen)
        throw new Error("Length should be <= 255*HashLen");
    const r = Math.ceil(s / i.outputLen);
    t === void 0 && (t = Gn);
    const n = new Uint8Array(r * i.outputLen)
      , o = Ds.create(i, e)
      , a = o._cloneInto()
      , c = new Uint8Array(o.outputLen);
    for (let h = 0; h < r; h++)
        Js[0] = h + 1,
        a.update(h === 0 ? Gn : c).update(t).update(Js).digestInto(c),
        n.set(c, i.outputLen * h),
        o._cloneInto(a);
    return o.destroy(),
    a.destroy(),
    c.fill(0),
    Js.fill(0),
    n.slice(0, s)
}
const ku = (i, e, t, s, r) => Du(i, ju(i, e, t), s, r);
function Mu(i, e, t, s) {
    if (typeof i.setBigUint64 == "function")
        return i.setBigUint64(e, t, s);
    const r = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(t >> r & n)
      , a = Number(t & n)
      , c = s ? 4 : 0
      , h = s ? 0 : 4;
    i.setUint32(e + c, o, s),
    i.setUint32(e + h, a, s)
}
function Uu(i, e, t) {
    return i & e ^ ~i & t
}
function Lu(i, e, t) {
    return i & e ^ i & t ^ e & t
}
let Bu = class extends sn {
    constructor(e, t, s, r) {
        super(),
        this.blockLen = e,
        this.outputLen = t,
        this.padOffset = s,
        this.isLE = r,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(e),
        this.view = Gs(this.buffer)
    }
    update(e) {
        fi(this);
        const {view: t, buffer: s, blockLen: r} = this;
        e = yi(e);
        const n = e.length;
        for (let o = 0; o < n; ) {
            const a = Math.min(r - this.pos, n - o);
            if (a === r) {
                const c = Gs(e);
                for (; r <= n - o; o += r)
                    this.process(c, o);
                continue
            }
            s.set(e.subarray(o, o + a), this.pos),
            this.pos += a,
            o += a,
            this.pos === r && (this.process(t, 0),
            this.pos = 0)
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        fi(this),
        Ra(e, this),
        this.finished = !0;
        const {buffer: t, view: s, blockLen: r, isLE: n} = this;
        let {pos: o} = this;
        t[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > r - o && (this.process(s, 0),
        o = 0);
        for (let u = o; u < r; u++)
            t[u] = 0;
        Mu(s, r - 8, BigInt(this.length * 8), n),
        this.process(s, 0);
        const a = Gs(e)
          , c = this.outputLen;
        if (c % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        const h = c / 4
          , l = this.get();
        if (h > l.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let u = 0; u < h; u++)
            a.setUint32(4 * u, l[u], n)
    }
    digest() {
        const {buffer: e, outputLen: t} = this;
        this.digestInto(e);
        const s = e.slice(0, t);
        return this.destroy(),
        s
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        const {blockLen: t, buffer: s, length: r, finished: n, destroyed: o, pos: a} = this;
        return e.length = r,
        e.pos = a,
        e.finished = n,
        e.destroyed = o,
        r % t && e.buffer.set(s),
        e
    }
}
;
const zu = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , vt = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , Et = new Uint32Array(64);
class Ku extends Bu {
    constructor() {
        super(64, 32, 8, !1),
        this.A = vt[0] | 0,
        this.B = vt[1] | 0,
        this.C = vt[2] | 0,
        this.D = vt[3] | 0,
        this.E = vt[4] | 0,
        this.F = vt[5] | 0,
        this.G = vt[6] | 0,
        this.H = vt[7] | 0
    }
    get() {
        const {A: e, B: t, C: s, D: r, E: n, F: o, G: a, H: c} = this;
        return [e, t, s, r, n, o, a, c]
    }
    set(e, t, s, r, n, o, a, c) {
        this.A = e | 0,
        this.B = t | 0,
        this.C = s | 0,
        this.D = r | 0,
        this.E = n | 0,
        this.F = o | 0,
        this.G = a | 0,
        this.H = c | 0
    }
    process(e, t) {
        for (let u = 0; u < 16; u++,
        t += 4)
            Et[u] = e.getUint32(t, !1);
        for (let u = 16; u < 64; u++) {
            const p = Et[u - 15]
              , d = Et[u - 2]
              , g = et(p, 7) ^ et(p, 18) ^ p >>> 3
              , y = et(d, 17) ^ et(d, 19) ^ d >>> 10;
            Et[u] = y + Et[u - 7] + g + Et[u - 16] | 0
        }
        let {A: s, B: r, C: n, D: o, E: a, F: c, G: h, H: l} = this;
        for (let u = 0; u < 64; u++) {
            const p = et(a, 6) ^ et(a, 11) ^ et(a, 25)
              , d = l + p + Uu(a, c, h) + zu[u] + Et[u] | 0
              , g = (et(s, 2) ^ et(s, 13) ^ et(s, 22)) + Lu(s, r, n) | 0;
            l = h,
            h = c,
            c = a,
            a = o + d | 0,
            o = n,
            n = r,
            r = s,
            s = d + g | 0
        }
        s = s + this.A | 0,
        r = r + this.B | 0,
        n = n + this.C | 0,
        o = o + this.D | 0,
        a = a + this.E | 0,
        c = c + this.F | 0,
        h = h + this.G | 0,
        l = l + this.H | 0,
        this.set(s, r, n, o, a, c, h, l)
    }
    roundClean() {
        Et.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
const Xi = Ta( () => new Ku);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ks = BigInt(0)
  , Ms = BigInt(1)
  , Hu = BigInt(2);
function zt(i) {
    return i instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array"
}
function es(i) {
    if (!zt(i))
        throw new Error("Uint8Array expected")
}
function wi(i, e) {
    if (typeof e != "boolean")
        throw new Error(i + " boolean expected, got " + e)
}
const Vu = Array.from({
    length: 256
}, (i, e) => e.toString(16).padStart(2, "0"));
function bi(i) {
    es(i);
    let e = "";
    for (let t = 0; t < i.length; t++)
        e += Vu[i[t]];
    return e
}
function ui(i) {
    const e = i.toString(16);
    return e.length & 1 ? "0" + e : e
}
function nn(i) {
    if (typeof i != "string")
        throw new Error("hex string expected, got " + typeof i);
    return i === "" ? ks : BigInt("0x" + i)
}
const ut = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Wn(i) {
    if (i >= ut._0 && i <= ut._9)
        return i - ut._0;
    if (i >= ut.A && i <= ut.F)
        return i - (ut.A - 10);
    if (i >= ut.a && i <= ut.f)
        return i - (ut.a - 10)
}
function vi(i) {
    if (typeof i != "string")
        throw new Error("hex string expected, got " + typeof i);
    const e = i.length
      , t = e / 2;
    if (e % 2)
        throw new Error("hex string expected, got unpadded hex of length " + e);
    const s = new Uint8Array(t);
    for (let r = 0, n = 0; r < t; r++,
    n += 2) {
        const o = Wn(i.charCodeAt(n))
          , a = Wn(i.charCodeAt(n + 1));
        if (o === void 0 || a === void 0) {
            const c = i[n] + i[n + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n)
        }
        s[r] = o * 16 + a
    }
    return s
}
function Ut(i) {
    return nn(bi(i))
}
function Wi(i) {
    return es(i),
    nn(bi(Uint8Array.from(i).reverse()))
}
function Ei(i, e) {
    return vi(i.toString(16).padStart(e * 2, "0"))
}
function Us(i, e) {
    return Ei(i, e).reverse()
}
function Fu(i) {
    return vi(ui(i))
}
function je(i, e, t) {
    let s;
    if (typeof e == "string")
        try {
            s = vi(e)
        } catch (n) {
            throw new Error(i + " must be hex string or Uint8Array, cause: " + n)
        }
    else if (zt(e))
        s = Uint8Array.from(e);
    else
        throw new Error(i + " must be hex string or Uint8Array");
    const r = s.length;
    if (typeof t == "number" && r !== t)
        throw new Error(i + " of length " + t + " expected, got " + r);
    return s
}
function Ji(...i) {
    let e = 0;
    for (let s = 0; s < i.length; s++) {
        const r = i[s];
        es(r),
        e += r.length
    }
    const t = new Uint8Array(e);
    for (let s = 0, r = 0; s < i.length; s++) {
        const n = i[s];
        t.set(n, r),
        r += n.length
    }
    return t
}
function Gu(i, e) {
    if (i.length !== e.length)
        return !1;
    let t = 0;
    for (let s = 0; s < i.length; s++)
        t |= i[s] ^ e[s];
    return t === 0
}
function Wu(i) {
    if (typeof i != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(i))
}
const Qs = i => typeof i == "bigint" && ks <= i;
function Ls(i, e, t) {
    return Qs(i) && Qs(e) && Qs(t) && e <= i && i < t
}
function yt(i, e, t, s) {
    if (!Ls(e, t, s))
        throw new Error("expected valid " + i + ": " + t + " <= n < " + s + ", got " + e)
}
function Fa(i) {
    let e;
    for (e = 0; i > ks; i >>= Ms,
    e += 1)
        ;
    return e
}
function Ju(i, e) {
    return i >> BigInt(e) & Ms
}
function Qu(i, e, t) {
    return i | (t ? Ms : ks) << BigInt(e)
}
const on = i => (Hu << BigInt(i - 1)) - Ms
  , Ys = i => new Uint8Array(i)
  , Jn = i => Uint8Array.from(i);
function Ga(i, e, t) {
    if (typeof i != "number" || i < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof t != "function")
        throw new Error("hmacFn must be a function");
    let s = Ys(i)
      , r = Ys(i)
      , n = 0;
    const o = () => {
        s.fill(1),
        r.fill(0),
        n = 0
    }
      , a = (...l) => t(r, s, ...l)
      , c = (l=Ys()) => {
        r = a(Jn([0]), l),
        s = a(),
        l.length !== 0 && (r = a(Jn([1]), l),
        s = a())
    }
      , h = () => {
        if (n++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let l = 0;
        const u = [];
        for (; l < e; ) {
            s = a();
            const p = s.slice();
            u.push(p),
            l += s.length
        }
        return Ji(...u)
    }
    ;
    return (l, u) => {
        o(),
        c(l);
        let p;
        for (; !(p = u(h())); )
            c();
        return o(),
        p
    }
}
const Yu = {
    bigint: i => typeof i == "bigint",
    function: i => typeof i == "function",
    boolean: i => typeof i == "boolean",
    string: i => typeof i == "string",
    stringOrUint8Array: i => typeof i == "string" || zt(i),
    isSafeInteger: i => Number.isSafeInteger(i),
    array: i => Array.isArray(i),
    field: (i, e) => e.Fp.isValid(i),
    hash: i => typeof i == "function" && Number.isSafeInteger(i.outputLen)
};
function xi(i, e, t={}) {
    const s = (r, n, o) => {
        const a = Yu[n];
        if (typeof a != "function")
            throw new Error("invalid validator function");
        const c = i[r];
        if (!(o && c === void 0) && !a(c, i))
            throw new Error("param " + String(r) + " is invalid. Expected " + n + ", got " + c)
    }
    ;
    for (const [r,n] of Object.entries(e))
        s(r, n, !1);
    for (const [r,n] of Object.entries(t))
        s(r, n, !0);
    return i
}
const Zu = () => {
    throw new Error("not implemented")
}
;
function $r(i) {
    const e = new WeakMap;
    return (t, ...s) => {
        const r = e.get(t);
        if (r !== void 0)
            return r;
        const n = i(t, ...s);
        return e.set(t, n),
        n
    }
}
var Xu = Object.freeze({
    __proto__: null,
    isBytes: zt,
    abytes: es,
    abool: wi,
    bytesToHex: bi,
    numberToHexUnpadded: ui,
    hexToNumber: nn,
    hexToBytes: vi,
    bytesToNumberBE: Ut,
    bytesToNumberLE: Wi,
    numberToBytesBE: Ei,
    numberToBytesLE: Us,
    numberToVarBytesBE: Fu,
    ensureBytes: je,
    concatBytes: Ji,
    equalBytes: Gu,
    utf8ToBytes: Wu,
    inRange: Ls,
    aInRange: yt,
    bitLen: Fa,
    bitGet: Ju,
    bitSet: Qu,
    bitMask: on,
    createHmacDrbg: Ga,
    validateObject: xi,
    notImplemented: Zu,
    memoized: $r
});
const fe = BigInt(0)
  , ie = BigInt(1)
  , qt = BigInt(2)
  , ep = BigInt(3)
  , Sr = BigInt(4)
  , Qn = BigInt(5)
  , Yn = BigInt(8);
function Ce(i, e) {
    const t = i % e;
    return t >= fe ? t : e + t
}
function Wa(i, e, t) {
    if (e < fe)
        throw new Error("invalid exponent, negatives unsupported");
    if (t <= fe)
        throw new Error("invalid modulus");
    if (t === ie)
        return fe;
    let s = ie;
    for (; e > fe; )
        e & ie && (s = s * i % t),
        i = i * i % t,
        e >>= ie;
    return s
}
function Je(i, e, t) {
    let s = i;
    for (; e-- > fe; )
        s *= s,
        s %= t;
    return s
}
function Or(i, e) {
    if (i === fe)
        throw new Error("invert: expected non-zero number");
    if (e <= fe)
        throw new Error("invert: expected positive modulus, got " + e);
    let t = Ce(i, e)
      , s = e
      , r = fe
      , n = ie;
    for (; t !== fe; ) {
        const o = s / t
          , a = s % t
          , c = r - n * o;
        s = t,
        t = a,
        r = n,
        n = c
    }
    if (s !== ie)
        throw new Error("invert: does not exist");
    return Ce(r, e)
}
function tp(i) {
    const e = (i - ie) / qt;
    let t, s, r;
    for (t = i - ie,
    s = 0; t % qt === fe; t /= qt,
    s++)
        ;
    for (r = qt; r < i && Wa(r, e, i) !== i - ie; r++)
        if (r > 1e3)
            throw new Error("Cannot find square root: likely non-prime P");
    if (s === 1) {
        const o = (i + ie) / Sr;
        return function(a, c) {
            const h = a.pow(c, o);
            if (!a.eql(a.sqr(h), c))
                throw new Error("Cannot find square root");
            return h
        }
    }
    const n = (t + ie) / qt;
    return function(o, a) {
        if (o.pow(a, e) === o.neg(o.ONE))
            throw new Error("Cannot find square root");
        let c = s
          , h = o.pow(o.mul(o.ONE, r), t)
          , l = o.pow(a, n)
          , u = o.pow(a, t);
        for (; !o.eql(u, o.ONE); ) {
            if (o.eql(u, o.ZERO))
                return o.ZERO;
            let p = 1;
            for (let g = o.sqr(u); p < c && !o.eql(g, o.ONE); p++)
                g = o.sqr(g);
            const d = o.pow(h, ie << BigInt(c - p - 1));
            h = o.sqr(d),
            l = o.mul(l, d),
            u = o.mul(u, h),
            c = p
        }
        return l
    }
}
function ip(i) {
    if (i % Sr === ep) {
        const e = (i + ie) / Sr;
        return function(t, s) {
            const r = t.pow(s, e);
            if (!t.eql(t.sqr(r), s))
                throw new Error("Cannot find square root");
            return r
        }
    }
    if (i % Yn === Qn) {
        const e = (i - Qn) / Yn;
        return function(t, s) {
            const r = t.mul(s, qt)
              , n = t.pow(r, e)
              , o = t.mul(s, n)
              , a = t.mul(t.mul(o, qt), n)
              , c = t.mul(o, t.sub(a, t.ONE));
            if (!t.eql(t.sqr(c), s))
                throw new Error("Cannot find square root");
            return c
        }
    }
    return tp(i)
}
const sp = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function rp(i) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }
      , t = sp.reduce( (s, r) => (s[r] = "function",
    s), e);
    return xi(i, t)
}
function np(i, e, t) {
    if (t < fe)
        throw new Error("invalid exponent, negatives unsupported");
    if (t === fe)
        return i.ONE;
    if (t === ie)
        return e;
    let s = i.ONE
      , r = e;
    for (; t > fe; )
        t & ie && (s = i.mul(s, r)),
        r = i.sqr(r),
        t >>= ie;
    return s
}
function op(i, e) {
    const t = new Array(e.length)
      , s = e.reduce( (n, o, a) => i.is0(o) ? n : (t[a] = n,
    i.mul(n, o)), i.ONE)
      , r = i.inv(s);
    return e.reduceRight( (n, o, a) => i.is0(o) ? n : (t[a] = i.mul(n, t[a]),
    i.mul(n, o)), r),
    t
}
function Ja(i, e) {
    const t = e !== void 0 ? e : i.toString(2).length
      , s = Math.ceil(t / 8);
    return {
        nBitLength: t,
        nByteLength: s
    }
}
function Qa(i, e, t=!1, s={}) {
    if (i <= fe)
        throw new Error("invalid field: expected ORDER > 0, got " + i);
    const {nBitLength: r, nByteLength: n} = Ja(i, e);
    if (n > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
        ORDER: i,
        isLE: t,
        BITS: r,
        BYTES: n,
        MASK: on(r),
        ZERO: fe,
        ONE: ie,
        create: c => Ce(c, i),
        isValid: c => {
            if (typeof c != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof c);
            return fe <= c && c < i
        }
        ,
        is0: c => c === fe,
        isOdd: c => (c & ie) === ie,
        neg: c => Ce(-c, i),
        eql: (c, h) => c === h,
        sqr: c => Ce(c * c, i),
        add: (c, h) => Ce(c + h, i),
        sub: (c, h) => Ce(c - h, i),
        mul: (c, h) => Ce(c * h, i),
        pow: (c, h) => np(a, c, h),
        div: (c, h) => Ce(c * Or(h, i), i),
        sqrN: c => c * c,
        addN: (c, h) => c + h,
        subN: (c, h) => c - h,
        mulN: (c, h) => c * h,
        inv: c => Or(c, i),
        sqrt: s.sqrt || (c => (o || (o = ip(i)),
        o(a, c))),
        invertBatch: c => op(a, c),
        cmov: (c, h, l) => l ? h : c,
        toBytes: c => t ? Us(c, n) : Ei(c, n),
        fromBytes: c => {
            if (c.length !== n)
                throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
            return t ? Wi(c) : Ut(c)
        }
    });
    return Object.freeze(a)
}
function Ya(i) {
    if (typeof i != "bigint")
        throw new Error("field order must be bigint");
    const e = i.toString(2).length;
    return Math.ceil(e / 8)
}
function Za(i) {
    const e = Ya(i);
    return e + Math.ceil(e / 2)
}
function ap(i, e, t=!1) {
    const s = i.length
      , r = Ya(e)
      , n = Za(e);
    if (s < 16 || s < n || s > 1024)
        throw new Error("expected " + n + "-1024 bytes of input, got " + s);
    const o = t ? Wi(i) : Ut(i)
      , a = Ce(o, e - ie) + ie;
    return t ? Us(a, r) : Ei(a, r)
}
const Zn = BigInt(0)
  , hs = BigInt(1);
function Zs(i, e) {
    const t = e.negate();
    return i ? t : e
}
function Xa(i, e) {
    if (!Number.isSafeInteger(i) || i <= 0 || i > e)
        throw new Error("invalid window size, expected [1.." + e + "], got W=" + i)
}
function Xs(i, e) {
    Xa(i, e);
    const t = Math.ceil(e / i) + 1
      , s = 2 ** (i - 1);
    return {
        windows: t,
        windowSize: s
    }
}
function cp(i, e) {
    if (!Array.isArray(i))
        throw new Error("array expected");
    i.forEach( (t, s) => {
        if (!(t instanceof e))
            throw new Error("invalid point at index " + s)
    }
    )
}
function hp(i, e) {
    if (!Array.isArray(i))
        throw new Error("array of scalars expected");
    i.forEach( (t, s) => {
        if (!e.isValid(t))
            throw new Error("invalid scalar at index " + s)
    }
    )
}
const er = new WeakMap
  , ec = new WeakMap;
function tr(i) {
    return ec.get(i) || 1
}
function lp(i, e) {
    return {
        constTimeNegate: Zs,
        hasPrecomputes(t) {
            return tr(t) !== 1
        },
        unsafeLadder(t, s, r=i.ZERO) {
            let n = t;
            for (; s > Zn; )
                s & hs && (r = r.add(n)),
                n = n.double(),
                s >>= hs;
            return r
        },
        precomputeWindow(t, s) {
            const {windows: r, windowSize: n} = Xs(s, e)
              , o = [];
            let a = t
              , c = a;
            for (let h = 0; h < r; h++) {
                c = a,
                o.push(c);
                for (let l = 1; l < n; l++)
                    c = c.add(a),
                    o.push(c);
                a = c.double()
            }
            return o
        },
        wNAF(t, s, r) {
            const {windows: n, windowSize: o} = Xs(t, e);
            let a = i.ZERO
              , c = i.BASE;
            const h = BigInt(2 ** t - 1)
              , l = 2 ** t
              , u = BigInt(t);
            for (let p = 0; p < n; p++) {
                const d = p * o;
                let g = Number(r & h);
                r >>= u,
                g > o && (g -= l,
                r += hs);
                const y = d
                  , f = d + Math.abs(g) - 1
                  , w = p % 2 !== 0
                  , m = g < 0;
                g === 0 ? c = c.add(Zs(w, s[y])) : a = a.add(Zs(m, s[f]))
            }
            return {
                p: a,
                f: c
            }
        },
        wNAFUnsafe(t, s, r, n=i.ZERO) {
            const {windows: o, windowSize: a} = Xs(t, e)
              , c = BigInt(2 ** t - 1)
              , h = 2 ** t
              , l = BigInt(t);
            for (let u = 0; u < o; u++) {
                const p = u * a;
                if (r === Zn)
                    break;
                let d = Number(r & c);
                if (r >>= l,
                d > a && (d -= h,
                r += hs),
                d === 0)
                    continue;
                let g = s[p + Math.abs(d) - 1];
                d < 0 && (g = g.negate()),
                n = n.add(g)
            }
            return n
        },
        getPrecomputes(t, s, r) {
            let n = er.get(s);
            return n || (n = this.precomputeWindow(s, t),
            t !== 1 && er.set(s, r(n))),
            n
        },
        wNAFCached(t, s, r) {
            const n = tr(t);
            return this.wNAF(n, this.getPrecomputes(n, t, r), s)
        },
        wNAFCachedUnsafe(t, s, r, n) {
            const o = tr(t);
            return o === 1 ? this.unsafeLadder(t, s, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, t, r), s, n)
        },
        setWindowSize(t, s) {
            Xa(s, e),
            ec.set(t, s),
            er.delete(t)
        }
    }
}
function up(i, e, t, s) {
    if (cp(t, i),
    hp(s, e),
    t.length !== s.length)
        throw new Error("arrays of points and scalars must have equal length");
    const r = i.ZERO
      , n = Fa(BigInt(t.length))
      , o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1
      , a = (1 << o) - 1
      , c = new Array(a + 1).fill(r)
      , h = Math.floor((e.BITS - 1) / o) * o;
    let l = r;
    for (let u = h; u >= 0; u -= o) {
        c.fill(r);
        for (let d = 0; d < s.length; d++) {
            const g = s[d]
              , y = Number(g >> BigInt(u) & BigInt(a));
            c[y] = c[y].add(t[d])
        }
        let p = r;
        for (let d = c.length - 1, g = r; d > 0; d--)
            g = g.add(c[d]),
            p = p.add(g);
        if (l = l.add(p),
        u !== 0)
            for (let d = 0; d < o; d++)
                l = l.double()
    }
    return l
}
function tc(i) {
    return rp(i.Fp),
    xi(i, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze({
        ...Ja(i.n, i.nBitLength),
        ...i,
        p: i.Fp.ORDER
    })
}
BigInt(0),
BigInt(1),
BigInt(2),
BigInt(8);
const Jt = BigInt(0)
  , ir = BigInt(1);
function pp(i) {
    return xi(i, {
        a: "bigint"
    }, {
        montgomeryBits: "isSafeInteger",
        nByteLength: "isSafeInteger",
        adjustScalarBytes: "function",
        domain: "function",
        powPminus2: "function",
        Gu: "bigint"
    }),
    Object.freeze({
        ...i
    })
}
function dp(i) {
    const e = pp(i)
      , {P: t} = e
      , s = m => Ce(m, t)
      , r = e.montgomeryBits
      , n = Math.ceil(r / 8)
      , o = e.nByteLength
      , a = e.adjustScalarBytes || (m => m)
      , c = e.powPminus2 || (m => Wa(m, t - BigInt(2), t));
    function h(m, v, x) {
        const N = s(m * (v - x));
        return v = s(v - N),
        x = s(x + N),
        [v, x]
    }
    const l = (e.a - BigInt(2)) / BigInt(4);
    function u(m, v) {
        yt("u", m, Jt, t),
        yt("scalar", v, Jt, t);
        const x = v
          , N = m;
        let _ = ir, $ = Jt, R = m, b = ir, k = Jt, q;
        for (let U = BigInt(r - 1); U >= Jt; U--) {
            const I = x >> U & ir;
            k ^= I,
            q = h(k, _, R),
            _ = q[0],
            R = q[1],
            q = h(k, $, b),
            $ = q[0],
            b = q[1],
            k = I;
            const O = _ + $
              , S = s(O * O)
              , T = _ - $
              , j = s(T * T)
              , P = S - j
              , M = R + b
              , B = R - b
              , z = s(B * O)
              , X = s(M * T)
              , W = z + X
              , se = z - X;
            R = s(W * W),
            b = s(N * s(se * se)),
            _ = s(S * j),
            $ = s(P * (S + s(l * P)))
        }
        q = h(k, _, R),
        _ = q[0],
        R = q[1],
        q = h(k, $, b),
        $ = q[0],
        b = q[1];
        const D = c($);
        return s(_ * D)
    }
    function p(m) {
        return Us(s(m), n)
    }
    function d(m) {
        const v = je("u coordinate", m, n);
        return o === 32 && (v[31] &= 127),
        Wi(v)
    }
    function g(m) {
        const v = je("scalar", m)
          , x = v.length;
        if (x !== n && x !== o) {
            let N = "" + n + " or " + o;
            throw new Error("invalid scalar, expected " + N + " bytes, got " + x)
        }
        return Wi(a(v))
    }
    function y(m, v) {
        const x = d(v)
          , N = g(m)
          , _ = u(x, N);
        if (_ === Jt)
            throw new Error("invalid private or public key received");
        return p(_)
    }
    const f = p(e.Gu);
    function w(m) {
        return y(m, f)
    }
    return {
        scalarMult: y,
        scalarMultBase: w,
        getSharedSecret: (m, v) => y(m, v),
        getPublicKey: m => w(m),
        utils: {
            randomPrivateKey: () => e.randomBytes(e.nByteLength)
        },
        GuBytes: f
    }
}
const xr = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const gp = BigInt(1)
  , Xn = BigInt(2)
  , fp = BigInt(3)
  , yp = BigInt(5);
BigInt(8);
function mp(i) {
    const e = BigInt(10)
      , t = BigInt(20)
      , s = BigInt(40)
      , r = BigInt(80)
      , n = xr
      , o = i * i % n * i % n
      , a = Je(o, Xn, n) * o % n
      , c = Je(a, gp, n) * i % n
      , h = Je(c, yp, n) * c % n
      , l = Je(h, e, n) * h % n
      , u = Je(l, t, n) * l % n
      , p = Je(u, s, n) * u % n
      , d = Je(p, r, n) * p % n
      , g = Je(d, r, n) * p % n
      , y = Je(g, e, n) * h % n;
    return {
        pow_p_5_8: Je(y, Xn, n) * i % n,
        b2: o
    }
}
function wp(i) {
    return i[0] &= 248,
    i[31] &= 127,
    i[31] |= 64,
    i
}
const Ar = dp({
    P: xr,
    a: BigInt(486662),
    montgomeryBits: 255,
    nByteLength: 32,
    Gu: BigInt(9),
    powPminus2: i => {
        const e = xr
          , {pow_p_5_8: t, b2: s} = mp(i);
        return Ce(Je(t, fp, e) * s, e)
    }
    ,
    adjustScalarBytes: wp,
    randomBytes: Oi
});
function eo(i) {
    i.lowS !== void 0 && wi("lowS", i.lowS),
    i.prehash !== void 0 && wi("prehash", i.prehash)
}
function bp(i) {
    const e = tc(i);
    xi(e, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    const {endo: t, Fp: s, a: r} = e;
    if (t) {
        if (!s.eql(r, s.ZERO))
            throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
        if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function")
            throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")
    }
    return Object.freeze({
        ...e
    })
}
const {bytesToNumberBE: vp, hexToBytes: Ep} = Xu;
class Ip extends Error {
    constructor(e="") {
        super(e)
    }
}
const gt = {
    Err: Ip,
    _tlv: {
        encode: (i, e) => {
            const {Err: t} = gt;
            if (i < 0 || i > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length & 1)
                throw new t("tlv.encode: unpadded data");
            const s = e.length / 2
              , r = ui(s);
            if (r.length / 2 & 128)
                throw new t("tlv.encode: long form length too big");
            const n = s > 127 ? ui(r.length / 2 | 128) : "";
            return ui(i) + n + r + e
        }
        ,
        decode(i, e) {
            const {Err: t} = gt;
            let s = 0;
            if (i < 0 || i > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length < 2 || e[s++] !== i)
                throw new t("tlv.decode: wrong tlv");
            const r = e[s++]
              , n = !!(r & 128);
            let o = 0;
            if (!n)
                o = r;
            else {
                const c = r & 127;
                if (!c)
                    throw new t("tlv.decode(long): indefinite length not supported");
                if (c > 4)
                    throw new t("tlv.decode(long): byte length is too big");
                const h = e.subarray(s, s + c);
                if (h.length !== c)
                    throw new t("tlv.decode: length bytes not complete");
                if (h[0] === 0)
                    throw new t("tlv.decode(long): zero leftmost byte");
                for (const l of h)
                    o = o << 8 | l;
                if (s += c,
                o < 128)
                    throw new t("tlv.decode(long): not minimal encoding")
            }
            const a = e.subarray(s, s + o);
            if (a.length !== o)
                throw new t("tlv.decode: wrong value length");
            return {
                v: a,
                l: e.subarray(s + o)
            }
        }
    },
    _int: {
        encode(i) {
            const {Err: e} = gt;
            if (i < ft)
                throw new e("integer: negative integers are not allowed");
            let t = ui(i);
            if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t),
            t.length & 1)
                throw new e("unexpected DER parsing assertion: unpadded hex");
            return t
        },
        decode(i) {
            const {Err: e} = gt;
            if (i[0] & 128)
                throw new e("invalid signature integer: negative");
            if (i[0] === 0 && !(i[1] & 128))
                throw new e("invalid signature integer: unnecessary leading zero");
            return vp(i)
        }
    },
    toSig(i) {
        const {Err: e, _int: t, _tlv: s} = gt
          , r = typeof i == "string" ? Ep(i) : i;
        es(r);
        const {v: n, l: o} = s.decode(48, r);
        if (o.length)
            throw new e("invalid signature: left bytes after parsing");
        const {v: a, l: c} = s.decode(2, n)
          , {v: h, l} = s.decode(2, c);
        if (l.length)
            throw new e("invalid signature: left bytes after parsing");
        return {
            r: t.decode(a),
            s: t.decode(h)
        }
    },
    hexFromSig(i) {
        const {_tlv: e, _int: t} = gt
          , s = e.encode(2, t.encode(i.r))
          , r = e.encode(2, t.encode(i.s))
          , n = s + r;
        return e.encode(48, n)
    }
}
  , ft = BigInt(0)
  , de = BigInt(1);
BigInt(2);
const to = BigInt(3);
BigInt(4);
function _p(i) {
    const e = bp(i)
      , {Fp: t} = e
      , s = Qa(e.n, e.nBitLength)
      , r = e.toBytes || ( (y, f, w) => {
        const m = f.toAffine();
        return Ji(Uint8Array.from([4]), t.toBytes(m.x), t.toBytes(m.y))
    }
    )
      , n = e.fromBytes || (y => {
        const f = y.subarray(1)
          , w = t.fromBytes(f.subarray(0, t.BYTES))
          , m = t.fromBytes(f.subarray(t.BYTES, 2 * t.BYTES));
        return {
            x: w,
            y: m
        }
    }
    );
    function o(y) {
        const {a: f, b: w} = e
          , m = t.sqr(y)
          , v = t.mul(m, y);
        return t.add(t.add(v, t.mul(y, f)), w)
    }
    if (!t.eql(t.sqr(e.Gy), o(e.Gx)))
        throw new Error("bad generator point: equation left != right");
    function a(y) {
        return Ls(y, de, e.n)
    }
    function c(y) {
        const {allowedPrivateKeyLengths: f, nByteLength: w, wrapPrivateKey: m, n: v} = e;
        if (f && typeof y != "bigint") {
            if (zt(y) && (y = bi(y)),
            typeof y != "string" || !f.includes(y.length))
                throw new Error("invalid private key");
            y = y.padStart(w * 2, "0")
        }
        let x;
        try {
            x = typeof y == "bigint" ? y : Ut(je("private key", y, w))
        } catch {
            throw new Error("invalid private key, expected hex or " + w + " bytes, got " + typeof y)
        }
        return m && (x = Ce(x, v)),
        yt("private key", x, de, v),
        x
    }
    function h(y) {
        if (!(y instanceof p))
            throw new Error("ProjectivePoint expected")
    }
    const l = $r( (y, f) => {
        const {px: w, py: m, pz: v} = y;
        if (t.eql(v, t.ONE))
            return {
                x: w,
                y: m
            };
        const x = y.is0();
        f == null && (f = x ? t.ONE : t.inv(v));
        const N = t.mul(w, f)
          , _ = t.mul(m, f)
          , $ = t.mul(v, f);
        if (x)
            return {
                x: t.ZERO,
                y: t.ZERO
            };
        if (!t.eql($, t.ONE))
            throw new Error("invZ was invalid");
        return {
            x: N,
            y: _
        }
    }
    )
      , u = $r(y => {
        if (y.is0()) {
            if (e.allowInfinityPoint && !t.is0(y.py))
                return;
            throw new Error("bad point: ZERO")
        }
        const {x: f, y: w} = y.toAffine();
        if (!t.isValid(f) || !t.isValid(w))
            throw new Error("bad point: x or y not FE");
        const m = t.sqr(w)
          , v = o(f);
        if (!t.eql(m, v))
            throw new Error("bad point: equation left != right");
        if (!y.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    class p {
        constructor(f, w, m) {
            if (this.px = f,
            this.py = w,
            this.pz = m,
            f == null || !t.isValid(f))
                throw new Error("x required");
            if (w == null || !t.isValid(w))
                throw new Error("y required");
            if (m == null || !t.isValid(m))
                throw new Error("z required");
            Object.freeze(this)
        }
        static fromAffine(f) {
            const {x: w, y: m} = f || {};
            if (!f || !t.isValid(w) || !t.isValid(m))
                throw new Error("invalid affine point");
            if (f instanceof p)
                throw new Error("projective point not allowed");
            const v = x => t.eql(x, t.ZERO);
            return v(w) && v(m) ? p.ZERO : new p(w,m,t.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(f) {
            const w = t.invertBatch(f.map(m => m.pz));
            return f.map( (m, v) => m.toAffine(w[v])).map(p.fromAffine)
        }
        static fromHex(f) {
            const w = p.fromAffine(n(je("pointHex", f)));
            return w.assertValidity(),
            w
        }
        static fromPrivateKey(f) {
            return p.BASE.multiply(c(f))
        }
        static msm(f, w) {
            return up(p, s, f, w)
        }
        _setWindowSize(f) {
            g.setWindowSize(this, f)
        }
        assertValidity() {
            u(this)
        }
        hasEvenY() {
            const {y: f} = this.toAffine();
            if (t.isOdd)
                return !t.isOdd(f);
            throw new Error("Field doesn't support isOdd")
        }
        equals(f) {
            h(f);
            const {px: w, py: m, pz: v} = this
              , {px: x, py: N, pz: _} = f
              , $ = t.eql(t.mul(w, _), t.mul(x, v))
              , R = t.eql(t.mul(m, _), t.mul(N, v));
            return $ && R
        }
        negate() {
            return new p(this.px,t.neg(this.py),this.pz)
        }
        double() {
            const {a: f, b: w} = e
              , m = t.mul(w, to)
              , {px: v, py: x, pz: N} = this;
            let _ = t.ZERO
              , $ = t.ZERO
              , R = t.ZERO
              , b = t.mul(v, v)
              , k = t.mul(x, x)
              , q = t.mul(N, N)
              , D = t.mul(v, x);
            return D = t.add(D, D),
            R = t.mul(v, N),
            R = t.add(R, R),
            _ = t.mul(f, R),
            $ = t.mul(m, q),
            $ = t.add(_, $),
            _ = t.sub(k, $),
            $ = t.add(k, $),
            $ = t.mul(_, $),
            _ = t.mul(D, _),
            R = t.mul(m, R),
            q = t.mul(f, q),
            D = t.sub(b, q),
            D = t.mul(f, D),
            D = t.add(D, R),
            R = t.add(b, b),
            b = t.add(R, b),
            b = t.add(b, q),
            b = t.mul(b, D),
            $ = t.add($, b),
            q = t.mul(x, N),
            q = t.add(q, q),
            b = t.mul(q, D),
            _ = t.sub(_, b),
            R = t.mul(q, k),
            R = t.add(R, R),
            R = t.add(R, R),
            new p(_,$,R)
        }
        add(f) {
            h(f);
            const {px: w, py: m, pz: v} = this
              , {px: x, py: N, pz: _} = f;
            let $ = t.ZERO
              , R = t.ZERO
              , b = t.ZERO;
            const k = e.a
              , q = t.mul(e.b, to);
            let D = t.mul(w, x)
              , U = t.mul(m, N)
              , I = t.mul(v, _)
              , O = t.add(w, m)
              , S = t.add(x, N);
            O = t.mul(O, S),
            S = t.add(D, U),
            O = t.sub(O, S),
            S = t.add(w, v);
            let T = t.add(x, _);
            return S = t.mul(S, T),
            T = t.add(D, I),
            S = t.sub(S, T),
            T = t.add(m, v),
            $ = t.add(N, _),
            T = t.mul(T, $),
            $ = t.add(U, I),
            T = t.sub(T, $),
            b = t.mul(k, S),
            $ = t.mul(q, I),
            b = t.add($, b),
            $ = t.sub(U, b),
            b = t.add(U, b),
            R = t.mul($, b),
            U = t.add(D, D),
            U = t.add(U, D),
            I = t.mul(k, I),
            S = t.mul(q, S),
            U = t.add(U, I),
            I = t.sub(D, I),
            I = t.mul(k, I),
            S = t.add(S, I),
            D = t.mul(U, S),
            R = t.add(R, D),
            D = t.mul(T, S),
            $ = t.mul(O, $),
            $ = t.sub($, D),
            D = t.mul(O, U),
            b = t.mul(T, b),
            b = t.add(b, D),
            new p($,R,b)
        }
        subtract(f) {
            return this.add(f.negate())
        }
        is0() {
            return this.equals(p.ZERO)
        }
        wNAF(f) {
            return g.wNAFCached(this, f, p.normalizeZ)
        }
        multiplyUnsafe(f) {
            const {endo: w, n: m} = e;
            yt("scalar", f, ft, m);
            const v = p.ZERO;
            if (f === ft)
                return v;
            if (this.is0() || f === de)
                return this;
            if (!w || g.hasPrecomputes(this))
                return g.wNAFCachedUnsafe(this, f, p.normalizeZ);
            let {k1neg: x, k1: N, k2neg: _, k2: $} = w.splitScalar(f)
              , R = v
              , b = v
              , k = this;
            for (; N > ft || $ > ft; )
                N & de && (R = R.add(k)),
                $ & de && (b = b.add(k)),
                k = k.double(),
                N >>= de,
                $ >>= de;
            return x && (R = R.negate()),
            _ && (b = b.negate()),
            b = new p(t.mul(b.px, w.beta),b.py,b.pz),
            R.add(b)
        }
        multiply(f) {
            const {endo: w, n: m} = e;
            yt("scalar", f, de, m);
            let v, x;
            if (w) {
                const {k1neg: N, k1: _, k2neg: $, k2: R} = w.splitScalar(f);
                let {p: b, f: k} = this.wNAF(_)
                  , {p: q, f: D} = this.wNAF(R);
                b = g.constTimeNegate(N, b),
                q = g.constTimeNegate($, q),
                q = new p(t.mul(q.px, w.beta),q.py,q.pz),
                v = b.add(q),
                x = k.add(D)
            } else {
                const {p: N, f: _} = this.wNAF(f);
                v = N,
                x = _
            }
            return p.normalizeZ([v, x])[0]
        }
        multiplyAndAddUnsafe(f, w, m) {
            const v = p.BASE
              , x = (_, $) => $ === ft || $ === de || !_.equals(v) ? _.multiplyUnsafe($) : _.multiply($)
              , N = x(this, w).add(x(f, m));
            return N.is0() ? void 0 : N
        }
        toAffine(f) {
            return l(this, f)
        }
        isTorsionFree() {
            const {h: f, isTorsionFree: w} = e;
            if (f === de)
                return !0;
            if (w)
                return w(p, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {h: f, clearCofactor: w} = e;
            return f === de ? this : w ? w(p, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(f=!0) {
            return wi("isCompressed", f),
            this.assertValidity(),
            r(p, this, f)
        }
        toHex(f=!0) {
            return wi("isCompressed", f),
            bi(this.toRawBytes(f))
        }
    }
    p.BASE = new p(e.Gx,e.Gy,t.ONE),
    p.ZERO = new p(t.ZERO,t.ONE,t.ZERO);
    const d = e.nBitLength
      , g = lp(p, e.endo ? Math.ceil(d / 2) : d);
    return {
        CURVE: e,
        ProjectivePoint: p,
        normPrivateKeyToScalar: c,
        weierstrassEquation: o,
        isWithinCurveOrder: a
    }
}
function Pp(i) {
    const e = tc(i);
    return xi(e, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }),
    Object.freeze({
        lowS: !0,
        ...e
    })
}
function $p(i) {
    const e = Pp(i)
      , {Fp: t, n: s} = e
      , r = t.BYTES + 1
      , n = 2 * t.BYTES + 1;
    function o(I) {
        return Ce(I, s)
    }
    function a(I) {
        return Or(I, s)
    }
    const {ProjectivePoint: c, normPrivateKeyToScalar: h, weierstrassEquation: l, isWithinCurveOrder: u} = _p({
        ...e,
        toBytes(I, O, S) {
            const T = O.toAffine()
              , j = t.toBytes(T.x)
              , P = Ji;
            return wi("isCompressed", S),
            S ? P(Uint8Array.from([O.hasEvenY() ? 2 : 3]), j) : P(Uint8Array.from([4]), j, t.toBytes(T.y))
        },
        fromBytes(I) {
            const O = I.length
              , S = I[0]
              , T = I.subarray(1);
            if (O === r && (S === 2 || S === 3)) {
                const j = Ut(T);
                if (!Ls(j, de, t.ORDER))
                    throw new Error("Point is not on curve");
                const P = l(j);
                let M;
                try {
                    M = t.sqrt(P)
                } catch (z) {
                    const X = z instanceof Error ? ": " + z.message : "";
                    throw new Error("Point is not on curve" + X)
                }
                const B = (M & de) === de;
                return (S & 1) === 1 !== B && (M = t.neg(M)),
                {
                    x: j,
                    y: M
                }
            } else if (O === n && S === 4) {
                const j = t.fromBytes(T.subarray(0, t.BYTES))
                  , P = t.fromBytes(T.subarray(t.BYTES, 2 * t.BYTES));
                return {
                    x: j,
                    y: P
                }
            } else {
                const j = r
                  , P = n;
                throw new Error("invalid Point, expected length of " + j + ", or uncompressed " + P + ", got " + O)
            }
        }
    })
      , p = I => bi(Ei(I, e.nByteLength));
    function d(I) {
        const O = s >> de;
        return I > O
    }
    function g(I) {
        return d(I) ? o(-I) : I
    }
    const y = (I, O, S) => Ut(I.slice(O, S));
    class f {
        constructor(O, S, T) {
            this.r = O,
            this.s = S,
            this.recovery = T,
            this.assertValidity()
        }
        static fromCompact(O) {
            const S = e.nByteLength;
            return O = je("compactSignature", O, S * 2),
            new f(y(O, 0, S),y(O, S, 2 * S))
        }
        static fromDER(O) {
            const {r: S, s: T} = gt.toSig(je("DER", O));
            return new f(S,T)
        }
        assertValidity() {
            yt("r", this.r, de, s),
            yt("s", this.s, de, s)
        }
        addRecoveryBit(O) {
            return new f(this.r,this.s,O)
        }
        recoverPublicKey(O) {
            const {r: S, s: T, recovery: j} = this
              , P = _(je("msgHash", O));
            if (j == null || ![0, 1, 2, 3].includes(j))
                throw new Error("recovery id invalid");
            const M = j === 2 || j === 3 ? S + e.n : S;
            if (M >= t.ORDER)
                throw new Error("recovery id 2 or 3 invalid");
            const B = (j & 1) === 0 ? "02" : "03"
              , z = c.fromHex(B + p(M))
              , X = a(M)
              , W = o(-P * X)
              , se = o(T * X)
              , he = c.BASE.multiplyAndAddUnsafe(z, W, se);
            if (!he)
                throw new Error("point at infinify");
            return he.assertValidity(),
            he
        }
        hasHighS() {
            return d(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new f(this.r,o(-this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return vi(this.toDERHex())
        }
        toDERHex() {
            return gt.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return vi(this.toCompactHex())
        }
        toCompactHex() {
            return p(this.r) + p(this.s)
        }
    }
    const w = {
        isValidPrivateKey(I) {
            try {
                return h(I),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: h,
        randomPrivateKey: () => {
            const I = Za(e.n);
            return ap(e.randomBytes(I), e.n)
        }
        ,
        precompute(I=8, O=c.BASE) {
            return O._setWindowSize(I),
            O.multiply(BigInt(3)),
            O
        }
    };
    function m(I, O=!0) {
        return c.fromPrivateKey(I).toRawBytes(O)
    }
    function v(I) {
        const O = zt(I)
          , S = typeof I == "string"
          , T = (O || S) && I.length;
        return O ? T === r || T === n : S ? T === 2 * r || T === 2 * n : I instanceof c
    }
    function x(I, O, S=!0) {
        if (v(I))
            throw new Error("first arg must be private key");
        if (!v(O))
            throw new Error("second arg must be public key");
        return c.fromHex(O).multiply(h(I)).toRawBytes(S)
    }
    const N = e.bits2int || function(I) {
        if (I.length > 8192)
            throw new Error("input is too large");
        const O = Ut(I)
          , S = I.length * 8 - e.nBitLength;
        return S > 0 ? O >> BigInt(S) : O
    }
      , _ = e.bits2int_modN || function(I) {
        return o(N(I))
    }
      , $ = on(e.nBitLength);
    function R(I) {
        return yt("num < 2^" + e.nBitLength, I, ft, $),
        Ei(I, e.nByteLength)
    }
    function b(I, O, S=k) {
        if (["recovered", "canonical"].some(oe => oe in S))
            throw new Error("sign() legacy options not supported");
        const {hash: T, randomBytes: j} = e;
        let {lowS: P, prehash: M, extraEntropy: B} = S;
        P == null && (P = !0),
        I = je("msgHash", I),
        eo(S),
        M && (I = je("prehashed msgHash", T(I)));
        const z = _(I)
          , X = h(O)
          , W = [R(X), R(z)];
        if (B != null && B !== !1) {
            const oe = B === !0 ? j(t.BYTES) : B;
            W.push(je("extraEntropy", oe))
        }
        const se = Ji(...W)
          , he = z;
        function Ie(oe) {
            const ae = N(oe);
            if (!u(ae))
                return;
            const At = a(ae)
              , ct = c.BASE.multiply(ae).toAffine()
              , Xe = o(ct.x);
            if (Xe === ft)
                return;
            const ht = o(At * o(he + Xe * X));
            if (ht === ft)
                return;
            let Ft = (ct.x === Xe ? 0 : 2) | Number(ct.y & de)
              , rs = ht;
            return P && d(ht) && (rs = g(ht),
            Ft ^= 1),
            new f(Xe,rs,Ft)
        }
        return {
            seed: se,
            k2sig: Ie
        }
    }
    const k = {
        lowS: e.lowS,
        prehash: !1
    }
      , q = {
        lowS: e.lowS,
        prehash: !1
    };
    function D(I, O, S=k) {
        const {seed: T, k2sig: j} = b(I, O, S)
          , P = e;
        return Ga(P.hash.outputLen, P.nByteLength, P.hmac)(T, j)
    }
    c.BASE._setWindowSize(8);
    function U(I, O, S, T=q) {
        const j = I;
        O = je("msgHash", O),
        S = je("publicKey", S);
        const {lowS: P, prehash: M, format: B} = T;
        if (eo(T),
        "strict"in T)
            throw new Error("options.strict was renamed to lowS");
        if (B !== void 0 && B !== "compact" && B !== "der")
            throw new Error("format must be compact or der");
        const z = typeof j == "string" || zt(j)
          , X = !z && !B && typeof j == "object" && j !== null && typeof j.r == "bigint" && typeof j.s == "bigint";
        if (!z && !X)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let W, se;
        try {
            if (X && (W = new f(j.r,j.s)),
            z) {
                try {
                    B !== "compact" && (W = f.fromDER(j))
                } catch (ht) {
                    if (!(ht instanceof gt.Err))
                        throw ht
                }
                !W && B !== "der" && (W = f.fromCompact(j))
            }
            se = c.fromHex(S)
        } catch {
            return !1
        }
        if (!W || P && W.hasHighS())
            return !1;
        M && (O = e.hash(O));
        const {r: he, s: Ie} = W
          , oe = _(O)
          , ae = a(Ie)
          , At = o(oe * ae)
          , ct = o(he * ae)
          , Xe = c.BASE.multiplyAndAddUnsafe(se, At, ct)?.toAffine();
        return Xe ? o(Xe.x) === he : !1
    }
    return {
        CURVE: e,
        getPublicKey: m,
        getSharedSecret: x,
        sign: D,
        verify: U,
        ProjectivePoint: c,
        Signature: f,
        utils: w
    }
}
function Sp(i) {
    return {
        hash: i,
        hmac: (e, ...t) => Ds(i, e, Cl(...t)),
        randomBytes: Oi
    }
}
function Op(i, e) {
    const t = s => $p({
        ...i,
        ...Sp(s)
    });
    return {
        ...t(e),
        create: t
    }
}
const ic = Qa(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"))
  , xp = ic.create(BigInt("-3"))
  , Ap = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b")
  , Cp = Op({
    a: xp,
    b: Ap,
    Fp: ic,
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
    h: BigInt(1),
    lowS: !1
}, Xi)
  , sc = "base10"
  , $e = "base16"
  , Qe = "base64pad"
  , _t = "base64url"
  , ts = "utf8"
  , rc = 0
  , mt = 1
  , is = 2
  , Np = 0
  , io = 1
  , zi = 12
  , an = 32;
function Rp() {
    const i = Ar.utils.randomPrivateKey()
      , e = Ar.getPublicKey(i);
    return {
        privateKey: Ne(i, $e),
        publicKey: Ne(e, $e)
    }
}
function Cr() {
    const i = Oi(an);
    return Ne(i, $e)
}
function Tp(i, e) {
    const t = Ar.getSharedSecret(Ke(i, $e), Ke(e, $e))
      , s = ku(Xi, t, void 0, void 0, an);
    return Ne(s, $e)
}
function bs(i) {
    const e = Xi(Ke(i, $e));
    return Ne(e, $e)
}
function nt(i) {
    const e = Xi(Ke(i, ts));
    return Ne(e, $e)
}
function nc(i) {
    return Ke(`${i}`, sc)
}
function Kt(i) {
    return Number(Ne(i, sc))
}
function oc(i) {
    return i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
function ac(i) {
    const e = i.replace(/-/g, "+").replace(/_/g, "/")
      , t = (4 - e.length % 4) % 4;
    return e + "=".repeat(t)
}
function qp(i) {
    const e = nc(typeof i.type < "u" ? i.type : rc);
    if (Kt(e) === mt && typeof i.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof i.senderPublicKey < "u" ? Ke(i.senderPublicKey, $e) : void 0
      , s = typeof i.iv < "u" ? Ke(i.iv, $e) : Oi(zi)
      , r = Ke(i.symKey, $e)
      , n = Ha(r, s).encrypt(Ke(i.message, ts))
      , o = cc({
        type: e,
        sealed: n,
        iv: s,
        senderPublicKey: t
    });
    return i.encoding === _t ? oc(o) : o
}
function jp(i) {
    const e = Ke(i.symKey, $e)
      , {sealed: t, iv: s} = Qi({
        encoded: i.encoded,
        encoding: i.encoding
    })
      , r = Ha(e, s).decrypt(t);
    if (r === null)
        throw new Error("Failed to decrypt");
    return Ne(r, ts)
}
function Dp(i, e) {
    const t = nc(is)
      , s = Oi(zi)
      , r = Ke(i, ts)
      , n = cc({
        type: t,
        sealed: r,
        iv: s
    });
    return e === _t ? oc(n) : n
}
function kp(i, e) {
    const {sealed: t} = Qi({
        encoded: i,
        encoding: e
    });
    return Ne(t, ts)
}
function cc(i) {
    if (Kt(i.type) === is)
        return Ne(Bi([i.type, i.sealed]), Qe);
    if (Kt(i.type) === mt) {
        if (typeof i.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return Ne(Bi([i.type, i.senderPublicKey, i.iv, i.sealed]), Qe)
    }
    return Ne(Bi([i.type, i.iv, i.sealed]), Qe)
}
function Qi(i) {
    const e = (i.encoding || Qe) === _t ? ac(i.encoded) : i.encoded
      , t = Ke(e, Qe)
      , s = t.slice(Np, io)
      , r = io;
    if (Kt(s) === mt) {
        const c = r + an
          , h = c + zi
          , l = t.slice(r, c)
          , u = t.slice(c, h)
          , p = t.slice(h);
        return {
            type: s,
            sealed: p,
            iv: u,
            senderPublicKey: l
        }
    }
    if (Kt(s) === is) {
        const c = t.slice(r)
          , h = Oi(zi);
        return {
            type: s,
            sealed: c,
            iv: h
        }
    }
    const n = r + zi
      , o = t.slice(r, n)
      , a = t.slice(n);
    return {
        type: s,
        sealed: a,
        iv: o
    }
}
function Mp(i, e) {
    const t = Qi({
        encoded: i,
        encoding: e?.encoding
    });
    return hc({
        type: Kt(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? Ne(t.senderPublicKey, $e) : void 0,
        receiverPublicKey: e?.receiverPublicKey
    })
}
function hc(i) {
    const e = i?.type || rc;
    if (e === mt) {
        if (typeof i?.senderPublicKey > "u")
            throw new Error("missing sender public key");
        if (typeof i?.receiverPublicKey > "u")
            throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: i?.senderPublicKey,
        receiverPublicKey: i?.receiverPublicKey
    }
}
function so(i) {
    return i.type === mt && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string"
}
function ro(i) {
    return i.type === is
}
function Up(i) {
    const e = ye.from(i.x, "base64")
      , t = ye.from(i.y, "base64");
    return Bi([new Uint8Array([4]), e, t])
}
function Lp(i, e) {
    const [t,s,r] = i.split(".")
      , n = ye.from(ac(r), "base64");
    if (n.length !== 64)
        throw new Error("Invalid signature length");
    const o = n.slice(0, 32)
      , a = n.slice(32, 64)
      , c = `${t}.${s}`
      , h = Xi(c)
      , l = Up(e);
    if (!Cp.verify(Bi([o, a]), h, l))
        throw new Error("Invalid signature");
    return yr(i).payload
}
const Bp = "irn";
function xs(i) {
    return i?.relay || {
        protocol: Bp
    }
}
function Mi(i) {
    const e = Gc[i];
    if (typeof e > "u")
        throw new Error(`Relay Protocol not supported: ${i}`);
    return e
}
function zp(i, e="-") {
    const t = {}
      , s = "relay" + e;
    return Object.keys(i).forEach(r => {
        if (r.startsWith(s)) {
            const n = r.replace(s, "")
              , o = i[r];
            t[n] = o
        }
    }
    ),
    t
}
function no(i) {
    if (!i.includes("wc:")) {
        const h = Na(i);
        h != null && h.includes("wc:") && (i = h)
    }
    i = i.includes("wc://") ? i.replace("wc://", "") : i,
    i = i.includes("wc:") ? i.replace("wc:", "") : i;
    const e = i.indexOf(":")
      , t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0
      , s = i.substring(0, e)
      , r = i.substring(e + 1, t).split("@")
      , n = typeof t < "u" ? i.substring(t) : ""
      , o = new URLSearchParams(n)
      , a = {};
    o.forEach( (h, l) => {
        a[l] = h
    }
    );
    const c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
        protocol: s,
        topic: Kp(r[0]),
        version: parseInt(r[1], 10),
        symKey: a.symKey,
        relay: zp(a),
        methods: c,
        expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    }
}
function Kp(i) {
    return i.startsWith("//") ? i.substring(2) : i
}
function Hp(i, e="-") {
    const t = "relay"
      , s = {};
    return Object.keys(i).forEach(r => {
        const n = r
          , o = t + e + n;
        i[n] && (s[o] = i[n])
    }
    ),
    s
}
function oo(i) {
    const e = new URLSearchParams
      , t = Hp(i.relay);
    Object.keys(t).sort().forEach(r => {
        e.set(r, t[r])
    }
    ),
    e.set("symKey", i.symKey),
    i.expiryTimestamp && e.set("expiryTimestamp", i.expiryTimestamp.toString()),
    i.methods && e.set("methods", i.methods.join(","));
    const s = e.toString();
    return `${i.protocol}:${i.topic}@${i.version}?${s}`
}
function ls(i, e, t) {
    return `${i}?wc_ev=${t}&topic=${e}`
}
var Vp = Object.defineProperty
  , Fp = Object.defineProperties
  , Gp = Object.getOwnPropertyDescriptors
  , ao = Object.getOwnPropertySymbols
  , Wp = Object.prototype.hasOwnProperty
  , Jp = Object.prototype.propertyIsEnumerable
  , co = (i, e, t) => e in i ? Vp(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Qp = (i, e) => {
    for (var t in e || (e = {}))
        Wp.call(e, t) && co(i, t, e[t]);
    if (ao)
        for (var t of ao(e))
            Jp.call(e, t) && co(i, t, e[t]);
    return i
}
  , Yp = (i, e) => Fp(i, Gp(e));
function Ai(i) {
    const e = [];
    return i.forEach(t => {
        const [s,r] = t.split(":");
        e.push(`${s}:${r}`)
    }
    ),
    e
}
function Zp(i) {
    const e = [];
    return Object.values(i).forEach(t => {
        e.push(...Ai(t.accounts))
    }
    ),
    e
}
function Xp(i, e) {
    const t = [];
    return Object.values(i).forEach(s => {
        Ai(s.accounts).includes(e) && t.push(...s.methods)
    }
    ),
    t
}
function ed(i, e) {
    const t = [];
    return Object.values(i).forEach(s => {
        Ai(s.accounts).includes(e) && t.push(...s.events)
    }
    ),
    t
}
function Bs(i) {
    return i.includes(":")
}
function pi(i) {
    return Bs(i) ? i.split(":")[0] : i
}
function ho(i) {
    var e, t, s;
    const r = {};
    if (!St(i))
        return r;
    for (const [n,o] of Object.entries(i)) {
        const a = Bs(n) ? [n] : o.chains
          , c = o.methods || []
          , h = o.events || []
          , l = pi(n);
        r[l] = Yp(Qp({}, r[l]), {
            chains: ot(a, (e = r[l]) == null ? void 0 : e.chains),
            methods: ot(c, (t = r[l]) == null ? void 0 : t.methods),
            events: ot(h, (s = r[l]) == null ? void 0 : s.events)
        })
    }
    return r
}
function td(i) {
    const e = {};
    return i?.forEach(t => {
        var s;
        const [r,n] = t.split(":");
        e[r] || (e[r] = {
            accounts: [],
            chains: [],
            events: [],
            methods: []
        }),
        e[r].accounts.push(t),
        (s = e[r].chains) == null || s.push(`${r}:${n}`)
    }
    ),
    e
}
function lo(i, e) {
    e = e.map(s => s.replace("did:pkh:", ""));
    const t = td(e);
    for (const [s,r] of Object.entries(t))
        r.methods ? r.methods = ot(r.methods, i) : r.methods = i,
        r.events = ["chainChanged", "accountsChanged"];
    return t
}
function id(i, e) {
    var t, s, r, n, o, a;
    const c = ho(i)
      , h = ho(e)
      , l = {}
      , u = Object.keys(c).concat(Object.keys(h));
    for (const p of u)
        l[p] = {
            chains: ot((t = c[p]) == null ? void 0 : t.chains, (s = h[p]) == null ? void 0 : s.chains),
            methods: ot((r = c[p]) == null ? void 0 : r.methods, (n = h[p]) == null ? void 0 : n.methods),
            events: ot((o = c[p]) == null ? void 0 : o.events, (a = h[p]) == null ? void 0 : a.events)
        };
    return l
}
const sd = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}
  , rd = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function A(i, e) {
    const {message: t, code: s} = rd[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}
function Q(i, e) {
    const {message: t, code: s} = sd[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}
function Ye(i, e) {
    return !!Array.isArray(i)
}
function St(i) {
    return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length
}
function ve(i) {
    return typeof i > "u"
}
function ne(i, e) {
    return e && ve(i) ? !0 : typeof i == "string" && !!i.trim().length
}
function cn(i, e) {
    return e && ve(i) ? !0 : typeof i == "number" && !isNaN(i)
}
function nd(i, e) {
    const {requiredNamespaces: t} = e
      , s = Object.keys(i.namespaces)
      , r = Object.keys(t);
    let n = !0;
    return Mt(r, s) ? (s.forEach(o => {
        const {accounts: a, methods: c, events: h} = i.namespaces[o]
          , l = Ai(a)
          , u = t[o];
        (!Mt(Sa(o, u), l) || !Mt(u.methods, c) || !Mt(u.events, h)) && (n = !1)
    }
    ),
    n) : !1
}
function As(i) {
    return ne(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1
}
function od(i) {
    if (ne(i, !1) && i.includes(":")) {
        const e = i.split(":");
        if (e.length === 3) {
            const t = e[0] + ":" + e[1];
            return !!e[2] && As(t)
        }
    }
    return !1
}
function ad(i) {
    function e(t) {
        try {
            return typeof new URL(t) < "u"
        } catch {
            return !1
        }
    }
    try {
        if (ne(i, !1)) {
            if (e(i))
                return !0;
            const t = Na(i);
            return e(t)
        }
    } catch {}
    return !1
}
function cd(i) {
    var e;
    return (e = i?.proposer) == null ? void 0 : e.publicKey
}
function hd(i) {
    return i?.topic
}
function ld(i, e) {
    let t = null;
    return ne(i?.publicKey, !1) || (t = A("MISSING_OR_INVALID", `${e} controller public key should be a string`)),
    t
}
function uo(i) {
    let e = !0;
    return Ye(i) ? i.length && (e = i.every(t => ne(t, !1))) : e = !1,
    e
}
function ud(i, e, t) {
    let s = null;
    return Ye(e) && e.length ? e.forEach(r => {
        s || As(r) || (s = Q("UNSUPPORTED_CHAINS", `${t}, chain ${r} should be a string and conform to "namespace:chainId" format`))
    }
    ) : As(i) || (s = Q("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    s
}
function pd(i, e, t) {
    let s = null;
    return Object.entries(i).forEach( ([r,n]) => {
        if (s)
            return;
        const o = ud(r, Sa(r, n), `${e} ${t}`);
        o && (s = o)
    }
    ),
    s
}
function dd(i, e) {
    let t = null;
    return Ye(i) ? i.forEach(s => {
        t || od(s) || (t = Q("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : t = Q("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    t
}
function gd(i, e) {
    let t = null;
    return Object.values(i).forEach(s => {
        if (t)
            return;
        const r = dd(s?.accounts, `${e} namespace`);
        r && (t = r)
    }
    ),
    t
}
function fd(i, e) {
    let t = null;
    return uo(i?.methods) ? uo(i?.events) || (t = Q("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = Q("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`),
    t
}
function lc(i, e) {
    let t = null;
    return Object.values(i).forEach(s => {
        if (t)
            return;
        const r = fd(s, `${e}, namespace`);
        r && (t = r)
    }
    ),
    t
}
function yd(i, e, t) {
    let s = null;
    if (i && St(i)) {
        const r = lc(i, e);
        r && (s = r);
        const n = pd(i, e, t);
        n && (s = n)
    } else
        s = A("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
    return s
}
function sr(i, e) {
    let t = null;
    if (i && St(i)) {
        const s = lc(i, e);
        s && (t = s);
        const r = gd(i, e);
        r && (t = r)
    } else
        t = A("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return t
}
function uc(i) {
    return ne(i.protocol, !0)
}
function md(i, e) {
    let t = !1;
    return i ? i && Ye(i) && i.length && i.forEach(s => {
        t = uc(s)
    }
    ) : t = !0,
    t
}
function wd(i) {
    return typeof i == "number"
}
function Ae(i) {
    return typeof i < "u" && typeof i !== null
}
function bd(i) {
    return !(!i || typeof i != "object" || !i.code || !cn(i.code, !1) || !i.message || !ne(i.message, !1))
}
function vd(i) {
    return !(ve(i) || !ne(i.method, !1))
}
function Ed(i) {
    return !(ve(i) || ve(i.result) && ve(i.error) || !cn(i.id, !1) || !ne(i.jsonrpc, !1))
}
function Id(i) {
    return !(ve(i) || !ne(i.name, !1))
}
function po(i, e) {
    return !(!As(e) || !Zp(i).includes(e))
}
function _d(i, e, t) {
    return ne(t, !1) ? Xp(i, e).includes(t) : !1
}
function Pd(i, e, t) {
    return ne(t, !1) ? ed(i, e).includes(t) : !1
}
function go(i, e, t) {
    let s = null;
    const r = $d(i)
      , n = Sd(e)
      , o = Object.keys(r)
      , a = Object.keys(n)
      , c = fo(Object.keys(i))
      , h = fo(Object.keys(e))
      , l = c.filter(u => !h.includes(u));
    return l.length && (s = A("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)),
    Mt(o, a) || (s = A("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)),
    Object.keys(e).forEach(u => {
        if (!u.includes(":") || s)
            return;
        const p = Ai(e[u].accounts);
        p.includes(u) || (s = A("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${p.toString()}`))
    }
    ),
    o.forEach(u => {
        s || (Mt(r[u].methods, n[u].methods) ? Mt(r[u].events, n[u].events) || (s = A("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${u}`)) : s = A("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${u}`))
    }
    ),
    s
}
function $d(i) {
    const e = {};
    return Object.keys(i).forEach(t => {
        var s;
        t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach(r => {
            e[r] = {
                methods: i[t].methods,
                events: i[t].events
            }
        }
        )
    }
    ),
    e
}
function fo(i) {
    return [...new Set(i.map(e => e.includes(":") ? e.split(":")[0] : e))]
}
function Sd(i) {
    const e = {};
    return Object.keys(i).forEach(t => {
        t.includes(":") ? e[t] = i[t] : Ai(i[t].accounts)?.forEach(r => {
            e[r] = {
                accounts: i[t].accounts.filter(n => n.includes(`${r}:`)),
                methods: i[t].methods,
                events: i[t].events
            }
        }
        )
    }
    ),
    e
}
function Od(i, e) {
    return cn(i, !1) && i <= e.max && i >= e.min
}
function yo() {
    const i = Yi();
    return new Promise(e => {
        switch (i) {
        case ke.browser:
            e(xd());
            break;
        case ke.reactNative:
            e(Ad());
            break;
        case ke.node:
            e(Cd());
            break;
        default:
            e(!0)
        }
    }
    )
}
function xd() {
    return Si() && navigator?.onLine
}
async function Ad() {
    return xt() && typeof L < "u" && L != null && L.NetInfo ? (await (L == null ? void 0 : L.NetInfo.fetch()))?.isConnected : !0
}
function Cd() {
    return !0
}
function Nd(i) {
    switch (Yi()) {
    case ke.browser:
        Rd(i);
        break;
    case ke.reactNative:
        Td(i);
        break
    }
}
function Rd(i) {
    !xt() && Si() && (window.addEventListener("online", () => i(!0)),
    window.addEventListener("offline", () => i(!1)))
}
function Td(i) {
    xt() && typeof L < "u" && L != null && L.NetInfo && L?.NetInfo.addEventListener(e => i(e?.isConnected))
}
function qd() {
    var i;
    return Si() && wt.getDocument() ? ((i = wt.getDocument()) == null ? void 0 : i.visibilityState) === "visible" : !0
}
const rr = {};
class Ri {
    static get(e) {
        return rr[e]
    }
    static set(e, t) {
        rr[e] = t
    }
    static delete(e) {
        delete rr[e]
    }
}
function jd(i) {
    return !i || typeof i.then != "function" ? Promise.resolve(i) : i
}
function pe(i, ...e) {
    try {
        return jd(i(...e))
    } catch (t) {
        return Promise.reject(t)
    }
}
function Dd(i) {
    const e = typeof i;
    return i === null || e !== "object" && e !== "function"
}
function kd(i) {
    const e = Object.getPrototypeOf(i);
    return !e || e.isPrototypeOf(Object)
}
function vs(i) {
    if (Dd(i))
        return String(i);
    if (kd(i) || Array.isArray(i))
        return JSON.stringify(i);
    if (typeof i.toJSON == "function")
        return vs(i.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}
const Nr = "base64:";
function Md(i) {
    return typeof i == "string" ? i : Nr + Bd(i)
}
function Ud(i) {
    return typeof i != "string" || !i.startsWith(Nr) ? i : Ld(i.slice(Nr.length))
}
function Ld(i) {
    return globalThis.Buffer ? ye.from(i, "base64") : Uint8Array.from(globalThis.atob(i), e => e.codePointAt(0))
}
function Bd(i) {
    return globalThis.Buffer ? ye.from(i).toString("base64") : globalThis.btoa(String.fromCodePoint(...i))
}
function xe(i) {
    return i && i.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || ""
}
function zd(...i) {
    return xe(i.join(":"))
}
function us(i) {
    return i = xe(i),
    i ? i + ":" : ""
}
function Kd(i, e) {
    if (e === void 0)
        return !0;
    let t = 0
      , s = i.indexOf(":");
    for (; s > -1; )
        t++,
        s = i.indexOf(":", s + 1);
    return t <= e
}
function Hd(i, e) {
    return e ? i.startsWith(e) && i[i.length - 1] !== "$" : i[i.length - 1] !== "$"
}
const Vd = "memory"
  , Fd = () => {
    const i = new Map;
    return {
        name: Vd,
        getInstance: () => i,
        hasItem(e) {
            return i.has(e)
        },
        getItem(e) {
            return i.get(e) ?? null
        },
        getItemRaw(e) {
            return i.get(e) ?? null
        },
        setItem(e, t) {
            i.set(e, t)
        },
        setItemRaw(e, t) {
            i.set(e, t)
        },
        removeItem(e) {
            i.delete(e)
        },
        getKeys() {
            return [...i.keys()]
        },
        clear() {
            i.clear()
        },
        dispose() {
            i.clear()
        }
    }
}
;
function Gd(i={}) {
    const e = {
        mounts: {
            "": i.driver || Fd()
        },
        mountpoints: [""],
        watching: !1,
        watchListeners: [],
        unwatch: {}
    }
      , t = h => {
        for (const l of e.mountpoints)
            if (h.startsWith(l))
                return {
                    base: l,
                    relativeKey: h.slice(l.length),
                    driver: e.mounts[l]
                };
        return {
            base: "",
            relativeKey: h,
            driver: e.mounts[""]
        }
    }
      , s = (h, l) => e.mountpoints.filter(u => u.startsWith(h) || l && h.startsWith(u)).map(u => ({
        relativeBase: h.length > u.length ? h.slice(u.length) : void 0,
        mountpoint: u,
        driver: e.mounts[u]
    }))
      , r = (h, l) => {
        if (e.watching) {
            l = xe(l);
            for (const u of e.watchListeners)
                u(h, l)
        }
    }
      , n = async () => {
        if (!e.watching) {
            e.watching = !0;
            for (const h in e.mounts)
                e.unwatch[h] = await mo(e.mounts[h], r, h)
        }
    }
      , o = async () => {
        if (e.watching) {
            for (const h in e.unwatch)
                await e.unwatch[h]();
            e.unwatch = {},
            e.watching = !1
        }
    }
      , a = (h, l, u) => {
        const p = new Map
          , d = g => {
            let y = p.get(g.base);
            return y || (y = {
                driver: g.driver,
                base: g.base,
                items: []
            },
            p.set(g.base, y)),
            y
        }
        ;
        for (const g of h) {
            const y = typeof g == "string"
              , f = xe(y ? g : g.key)
              , w = y ? void 0 : g.value
              , m = y || !g.options ? l : {
                ...l,
                ...g.options
            }
              , v = t(f);
            d(v).items.push({
                key: f,
                value: w,
                relativeKey: v.relativeKey,
                options: m
            })
        }
        return Promise.all([...p.values()].map(g => u(g))).then(g => g.flat())
    }
      , c = {
        hasItem(h, l={}) {
            h = xe(h);
            const {relativeKey: u, driver: p} = t(h);
            return pe(p.hasItem, u, l)
        },
        getItem(h, l={}) {
            h = xe(h);
            const {relativeKey: u, driver: p} = t(h);
            return pe(p.getItem, u, l).then(d => ns(d))
        },
        getItems(h, l={}) {
            return a(h, l, u => u.driver.getItems ? pe(u.driver.getItems, u.items.map(p => ({
                key: p.relativeKey,
                options: p.options
            })), l).then(p => p.map(d => ({
                key: zd(u.base, d.key),
                value: ns(d.value)
            }))) : Promise.all(u.items.map(p => pe(u.driver.getItem, p.relativeKey, p.options).then(d => ({
                key: p.key,
                value: ns(d)
            })))))
        },
        getItemRaw(h, l={}) {
            h = xe(h);
            const {relativeKey: u, driver: p} = t(h);
            return p.getItemRaw ? pe(p.getItemRaw, u, l) : pe(p.getItem, u, l).then(d => Ud(d))
        },
        async setItem(h, l, u={}) {
            if (l === void 0)
                return c.removeItem(h);
            h = xe(h);
            const {relativeKey: p, driver: d} = t(h);
            d.setItem && (await pe(d.setItem, p, vs(l), u),
            d.watch || r("update", h))
        },
        async setItems(h, l) {
            await a(h, l, async u => {
                if (u.driver.setItems)
                    return pe(u.driver.setItems, u.items.map(p => ({
                        key: p.relativeKey,
                        value: vs(p.value),
                        options: p.options
                    })), l);
                u.driver.setItem && await Promise.all(u.items.map(p => pe(u.driver.setItem, p.relativeKey, vs(p.value), p.options)))
            }
            )
        },
        async setItemRaw(h, l, u={}) {
            if (l === void 0)
                return c.removeItem(h, u);
            h = xe(h);
            const {relativeKey: p, driver: d} = t(h);
            if (d.setItemRaw)
                await pe(d.setItemRaw, p, l, u);
            else if (d.setItem)
                await pe(d.setItem, p, Md(l), u);
            else
                return;
            d.watch || r("update", h)
        },
        async removeItem(h, l={}) {
            typeof l == "boolean" && (l = {
                removeMeta: l
            }),
            h = xe(h);
            const {relativeKey: u, driver: p} = t(h);
            p.removeItem && (await pe(p.removeItem, u, l),
            (l.removeMeta || l.removeMata) && await pe(p.removeItem, u + "$", l),
            p.watch || r("remove", h))
        },
        async getMeta(h, l={}) {
            typeof l == "boolean" && (l = {
                nativeOnly: l
            }),
            h = xe(h);
            const {relativeKey: u, driver: p} = t(h)
              , d = Object.create(null);
            if (p.getMeta && Object.assign(d, await pe(p.getMeta, u, l)),
            !l.nativeOnly) {
                const g = await pe(p.getItem, u + "$", l).then(y => ns(y));
                g && typeof g == "object" && (typeof g.atime == "string" && (g.atime = new Date(g.atime)),
                typeof g.mtime == "string" && (g.mtime = new Date(g.mtime)),
                Object.assign(d, g))
            }
            return d
        },
        setMeta(h, l, u={}) {
            return this.setItem(h + "$", l, u)
        },
        removeMeta(h, l={}) {
            return this.removeItem(h + "$", l)
        },
        async getKeys(h, l={}) {
            h = us(h);
            const u = s(h, !0);
            let p = [];
            const d = [];
            let g = !0;
            for (const f of u) {
                f.driver.flags?.maxDepth || (g = !1);
                const w = await pe(f.driver.getKeys, f.relativeBase, l);
                for (const m of w) {
                    const v = f.mountpoint + xe(m);
                    p.some(x => v.startsWith(x)) || d.push(v)
                }
                p = [f.mountpoint, ...p.filter(m => !m.startsWith(f.mountpoint))]
            }
            const y = l.maxDepth !== void 0 && !g;
            return d.filter(f => (!y || Kd(f, l.maxDepth)) && Hd(f, h))
        },
        async clear(h, l={}) {
            h = us(h),
            await Promise.all(s(h, !1).map(async u => {
                if (u.driver.clear)
                    return pe(u.driver.clear, u.relativeBase, l);
                if (u.driver.removeItem) {
                    const p = await u.driver.getKeys(u.relativeBase || "", l);
                    return Promise.all(p.map(d => u.driver.removeItem(d, l)))
                }
            }
            ))
        },
        async dispose() {
            await Promise.all(Object.values(e.mounts).map(h => wo(h)))
        },
        async watch(h) {
            return await n(),
            e.watchListeners.push(h),
            async () => {
                e.watchListeners = e.watchListeners.filter(l => l !== h),
                e.watchListeners.length === 0 && await o()
            }
        },
        async unwatch() {
            e.watchListeners = [],
            await o()
        },
        mount(h, l) {
            if (h = us(h),
            h && e.mounts[h])
                throw new Error(`already mounted at ${h}`);
            return h && (e.mountpoints.push(h),
            e.mountpoints.sort( (u, p) => p.length - u.length)),
            e.mounts[h] = l,
            e.watching && Promise.resolve(mo(l, r, h)).then(u => {
                e.unwatch[h] = u
            }
            ).catch(console.error),
            c
        },
        async unmount(h, l=!0) {
            h = us(h),
            !(!h || !e.mounts[h]) && (e.watching && h in e.unwatch && (e.unwatch[h]?.(),
            delete e.unwatch[h]),
            l && await wo(e.mounts[h]),
            e.mountpoints = e.mountpoints.filter(u => u !== h),
            delete e.mounts[h])
        },
        getMount(h="") {
            h = xe(h) + ":";
            const l = t(h);
            return {
                driver: l.driver,
                base: l.base
            }
        },
        getMounts(h="", l={}) {
            return h = xe(h),
            s(h, l.parents).map(p => ({
                driver: p.driver,
                base: p.mountpoint
            }))
        },
        keys: (h, l={}) => c.getKeys(h, l),
        get: (h, l={}) => c.getItem(h, l),
        set: (h, l, u={}) => c.setItem(h, l, u),
        has: (h, l={}) => c.hasItem(h, l),
        del: (h, l={}) => c.removeItem(h, l),
        remove: (h, l={}) => c.removeItem(h, l)
    };
    return c
}
function mo(i, e, t) {
    return i.watch ? i.watch( (s, r) => e(s, t + r)) : () => {}
}
async function wo(i) {
    typeof i.dispose == "function" && await pe(i.dispose)
}
const Wd = "idb-keyval";
var Jd = (i={}) => {
    const e = i.base && i.base.length > 0 ? `${i.base}:` : ""
      , t = r => e + r;
    let s;
    return i.dbName && i.storeName && (s = Qc(i.dbName, i.storeName)),
    {
        name: Wd,
        options: i,
        async hasItem(r) {
            return !(typeof await pn(t(r), s) > "u")
        },
        async getItem(r) {
            return await pn(t(r), s) ?? null
        },
        setItem(r, n) {
            return eh(t(r), n, s)
        },
        removeItem(r) {
            return Xc(t(r), s)
        },
        getKeys() {
            return Zc(s)
        },
        clear() {
            return Yc(s)
        }
    }
}
;
const Qd = "WALLET_CONNECT_V2_INDEXED_DB"
  , Yd = "keyvaluestorage";
let Zd = class {
    constructor() {
        this.indexedDb = Gd({
            driver: Jd({
                dbName: Qd,
                storeName: Yd
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
    }
    async getItem(e) {
        const t = await this.indexedDb.getItem(e);
        if (t !== null)
            return t
    }
    async setItem(e, t) {
        await this.indexedDb.setItem(e, Wr(t))
    }
    async removeItem(e) {
        await this.indexedDb.removeItem(e)
    }
}
;
var nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof L < "u" ? L : typeof self < "u" ? self : {}
  , Es = {
    exports: {}
};
(function() {
    let i;
    function e() {}
    i = e,
    i.prototype.getItem = function(t) {
        return this.hasOwnProperty(t) ? String(this[t]) : null
    }
    ,
    i.prototype.setItem = function(t, s) {
        this[t] = String(s)
    }
    ,
    i.prototype.removeItem = function(t) {
        delete this[t]
    }
    ,
    i.prototype.clear = function() {
        const t = this;
        Object.keys(t).forEach(function(s) {
            t[s] = void 0,
            delete t[s]
        })
    }
    ,
    i.prototype.key = function(t) {
        return t = t || 0,
        Object.keys(this)[t]
    }
    ,
    i.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }),
    typeof nr < "u" && nr.localStorage ? Es.exports = nr.localStorage : typeof window < "u" && window.localStorage ? Es.exports = window.localStorage : Es.exports = new e
}
)();
function Xd(i) {
    var e;
    return [i[0], Ps((e = i[1]) != null ? e : "")]
}
let eg = class {
    constructor() {
        this.localStorage = Es.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(Xd)
    }
    async getItem(e) {
        const t = this.localStorage.getItem(e);
        if (t !== null)
            return Ps(t)
    }
    async setItem(e, t) {
        this.localStorage.setItem(e, Wr(t))
    }
    async removeItem(e) {
        this.localStorage.removeItem(e)
    }
}
;
const tg = "wc_storage_version"
  , bo = 1
  , ig = async (i, e, t) => {
    const s = tg
      , r = await e.getItem(s);
    if (r && r >= bo) {
        t(e);
        return
    }
    const n = await i.getKeys();
    if (!n.length) {
        t(e);
        return
    }
    const o = [];
    for (; n.length; ) {
        const a = n.shift();
        if (!a)
            continue;
        const c = a.toLowerCase();
        if (c.includes("wc@") || c.includes("walletconnect") || c.includes("wc_") || c.includes("wallet_connect")) {
            const h = await i.getItem(a);
            await e.setItem(a, h),
            o.push(a)
        }
    }
    await e.setItem(s, bo),
    t(e),
    sg(i, o)
}
  , sg = async (i, e) => {
    e.length && e.forEach(async t => {
        await i.removeItem(t)
    }
    )
}
;
let rg = class {
    constructor() {
        this.initialized = !1,
        this.setInitialized = t => {
            this.storage = t,
            this.initialized = !0
        }
        ;
        const e = new eg;
        this.storage = e;
        try {
            const t = new Zd;
            ig(e, t, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(),
        this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(),
        this.storage.getEntries()
    }
    async getItem(e) {
        return await this.initialize(),
        this.storage.getItem(e)
    }
    async setItem(e, t) {
        return await this.initialize(),
        this.storage.setItem(e, t)
    }
    async removeItem(e) {
        return await this.initialize(),
        this.storage.removeItem(e)
    }
    async initialize() {
        this.initialized || await new Promise(e => {
            const t = setInterval( () => {
                this.initialized && (clearInterval(t),
                e())
            }
            , 20)
        }
        )
    }
}
;
var ng = Object.defineProperty
  , og = (i, e, t) => e in i ? ng(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , vo = (i, e, t) => og(i, typeof e != "symbol" ? e + "" : e, t);
let ag = class extends Ii {
    constructor(e) {
        super(),
        this.opts = e,
        vo(this, "protocol", "wc"),
        vo(this, "version", 2)
    }
}
;
var cg = Object.defineProperty
  , hg = (i, e, t) => e in i ? cg(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , lg = (i, e, t) => hg(i, e + "", t);
let ug = class extends Ii {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t,
        lg(this, "records", new Map)
    }
}
  , pg = class {
    constructor(e, t) {
        this.logger = e,
        this.core = t
    }
}
;
class dg extends Ii {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
let gg = class extends Ii {
    constructor(e) {
        super()
    }
}
  , fg = class {
    constructor(e, t, s, r) {
        this.core = e,
        this.logger = t,
        this.name = s
    }
}
  , yg = class extends Ii {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
  , mg = class extends Ii {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t
    }
}
  , wg = class {
    constructor(e, t, s) {
        this.core = e,
        this.logger = t,
        this.store = s
    }
}
  , bg = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , vg = class {
    constructor(e, t, s) {
        this.core = e,
        this.logger = t,
        this.telemetryEnabled = s
    }
}
;
var Eg = Object.defineProperty
  , Ig = (i, e, t) => e in i ? Eg(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Eo = (i, e, t) => Ig(i, typeof e != "symbol" ? e + "" : e, t);
let _g = class {
    constructor(e) {
        this.opts = e,
        Eo(this, "protocol", "wc"),
        Eo(this, "version", 2)
    }
}
  , Pg = class {
    constructor(e) {
        this.client = e
    }
}
;
var $g = {};
const pc = "wc"
  , dc = 2
  , Rr = "core"
  , at = `${pc}@2:${Rr}:`
  , Sg = {
    logger: "error"
}
  , Og = {
    database: ":memory:"
}
  , xg = "crypto"
  , Io = "client_ed25519_seed"
  , Ag = C.ONE_DAY
  , Cg = "keychain"
  , Ng = "0.3"
  , Rg = "messages"
  , Tg = "0.3"
  , _o = C.SIX_HOURS
  , qg = "publisher"
  , gc = "irn"
  , jg = "error"
  , fc = "wss://relay.walletconnect.org"
  , Dg = "relayer"
  , ge = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , kg = "_subscription"
  , Le = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , Mg = .1
  , Tr = "2.21.1"
  , te = {
    link_mode: "link_mode",
    relay: "relay"
}
  , Is = {
    inbound: "inbound",
    outbound: "outbound"
}
  , Ug = "0.3"
  , Lg = "WALLETCONNECT_CLIENT_ID"
  , Po = "WALLETCONNECT_LINK_MODE_APPS"
  , qe = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , Bg = "subscription"
  , zg = "0.3"
  , Kg = "pairing"
  , Hg = "0.3"
  , Ti = {
    wc_pairingDelete: {
        req: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: C.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: C.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , jt = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , Fe = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , Vg = "history"
  , Fg = "0.3"
  , Gg = "expirer"
  , ze = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , Wg = "0.3"
  , Jg = "verify-api"
  , Qg = "https://verify.walletconnect.com"
  , yc = "https://verify.walletconnect.org"
  , Ki = yc
  , Yg = `${Ki}/v3`
  , Zg = [Qg, yc]
  , Xg = "echo"
  , ef = "https://echo.walletconnect.com"
  , st = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
}
  , dt = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
}
  , Ge = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success: "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success"
}
  , Ct = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found"
}
  , Nt = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
}
  , qi = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
}
  , tf = .1
  , sf = "event-client"
  , rf = 86400
  , nf = "https://pulse.walletconnect.org/batch";
function of(i, e) {
    if (i.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
        t[s] = 255;
    for (var r = 0; r < i.length; r++) {
        var n = i.charAt(r)
          , o = n.charCodeAt(0);
        if (t[o] !== 255)
            throw new TypeError(n + " is ambiguous");
        t[o] = r
    }
    var a = i.length
      , c = i.charAt(0)
      , h = Math.log(a) / Math.log(256)
      , l = Math.log(256) / Math.log(a);
    function u(g) {
        if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer,g.byteOffset,g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))),
        !(g instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (g.length === 0)
            return "";
        for (var y = 0, f = 0, w = 0, m = g.length; w !== m && g[w] === 0; )
            w++,
            y++;
        for (var v = (m - w) * l + 1 >>> 0, x = new Uint8Array(v); w !== m; ) {
            for (var N = g[w], _ = 0, $ = v - 1; (N !== 0 || _ < f) && $ !== -1; $--,
            _++)
                N += 256 * x[$] >>> 0,
                x[$] = N % a >>> 0,
                N = N / a >>> 0;
            if (N !== 0)
                throw new Error("Non-zero carry");
            f = _,
            w++
        }
        for (var R = v - f; R !== v && x[R] === 0; )
            R++;
        for (var b = c.repeat(y); R < v; ++R)
            b += i.charAt(x[R]);
        return b
    }
    function p(g) {
        if (typeof g != "string")
            throw new TypeError("Expected String");
        if (g.length === 0)
            return new Uint8Array;
        var y = 0;
        if (g[y] !== " ") {
            for (var f = 0, w = 0; g[y] === c; )
                f++,
                y++;
            for (var m = (g.length - y) * h + 1 >>> 0, v = new Uint8Array(m); g[y]; ) {
                var x = t[g.charCodeAt(y)];
                if (x === 255)
                    return;
                for (var N = 0, _ = m - 1; (x !== 0 || N < w) && _ !== -1; _--,
                N++)
                    x += a * v[_] >>> 0,
                    v[_] = x % 256 >>> 0,
                    x = x / 256 >>> 0;
                if (x !== 0)
                    throw new Error("Non-zero carry");
                w = N,
                y++
            }
            if (g[y] !== " ") {
                for (var $ = m - w; $ !== m && v[$] === 0; )
                    $++;
                for (var R = new Uint8Array(f + (m - $)), b = f; $ !== m; )
                    R[b++] = v[$++];
                return R
            }
        }
    }
    function d(g) {
        var y = p(g);
        if (y)
            return y;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: u,
        decodeUnsafe: p,
        decode: d
    }
}
var af = of
  , cf = af;
const mc = i => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
        return i;
    if (i instanceof ArrayBuffer)
        return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
        return new Uint8Array(i.buffer,i.byteOffset,i.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , hf = i => new TextEncoder().encode(i)
  , lf = i => new TextDecoder().decode(i);
class uf {
    constructor(e, t, s) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class pf {
    constructor(e, t, s) {
        if (this.name = e,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(e) {
        return wc(this, e)
    }
}
class df {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return wc(this, e)
    }
    decode(e) {
        const t = e[0]
          , s = this.decoders[t];
        if (s)
            return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const wc = (i, e) => new df({
    ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class gf {
    constructor(e, t, s, r) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s,
        this.baseDecode = r,
        this.encoder = new uf(e,t,s),
        this.decoder = new pf(e,t,r)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const zs = ({name: i, prefix: e, encode: t, decode: s}) => new gf(i,e,t,s)
  , ss = ({prefix: i, name: e, alphabet: t}) => {
    const {encode: s, decode: r} = cf(t, e);
    return zs({
        prefix: i,
        name: e,
        encode: s,
        decode: n => mc(r(n))
    })
}
  , ff = (i, e, t, s) => {
    const r = {};
    for (let l = 0; l < e.length; ++l)
        r[e[l]] = l;
    let n = i.length;
    for (; i[n - 1] === "="; )
        --n;
    const o = new Uint8Array(n * t / 8 | 0);
    let a = 0
      , c = 0
      , h = 0;
    for (let l = 0; l < n; ++l) {
        const u = r[i[l]];
        if (u === void 0)
            throw new SyntaxError(`Non-${s} character`);
        c = c << t | u,
        a += t,
        a >= 8 && (a -= 8,
        o[h++] = 255 & c >> a)
    }
    if (a >= t || 255 & c << 8 - a)
        throw new SyntaxError("Unexpected end of data");
    return o
}
  , yf = (i, e, t) => {
    const s = e[e.length - 1] === "="
      , r = (1 << t) - 1;
    let n = ""
      , o = 0
      , a = 0;
    for (let c = 0; c < i.length; ++c)
        for (a = a << 8 | i[c],
        o += 8; o > t; )
            o -= t,
            n += e[r & a >> o];
    if (o && (n += e[r & a << t - o]),
    s)
        for (; n.length * t & 7; )
            n += "=";
    return n
}
  , Ee = ({name: i, prefix: e, bitsPerChar: t, alphabet: s}) => zs({
    prefix: e,
    name: i,
    encode(r) {
        return yf(r, s, t)
    },
    decode(r) {
        return ff(r, s, t, i)
    }
})
  , mf = zs({
    prefix: "\0",
    name: "identity",
    encode: i => lf(i),
    decode: i => hf(i)
});
var wf = Object.freeze({
    __proto__: null,
    identity: mf
});
const bf = Ee({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var vf = Object.freeze({
    __proto__: null,
    base2: bf
});
const Ef = Ee({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var If = Object.freeze({
    __proto__: null,
    base8: Ef
});
const _f = ss({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Pf = Object.freeze({
    __proto__: null,
    base10: _f
});
const $f = Ee({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , Sf = Ee({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var Of = Object.freeze({
    __proto__: null,
    base16: $f,
    base16upper: Sf
});
const xf = Ee({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , Af = Ee({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , Cf = Ee({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , Nf = Ee({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , Rf = Ee({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Tf = Ee({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , qf = Ee({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , jf = Ee({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , Df = Ee({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var kf = Object.freeze({
    __proto__: null,
    base32: xf,
    base32upper: Af,
    base32pad: Cf,
    base32padupper: Nf,
    base32hex: Rf,
    base32hexupper: Tf,
    base32hexpad: qf,
    base32hexpadupper: jf,
    base32z: Df
});
const Mf = ss({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , Uf = ss({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Lf = Object.freeze({
    __proto__: null,
    base36: Mf,
    base36upper: Uf
});
const Bf = ss({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , zf = ss({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var Kf = Object.freeze({
    __proto__: null,
    base58btc: Bf,
    base58flickr: zf
});
const Hf = Ee({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , Vf = Ee({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , Ff = Ee({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , Gf = Ee({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Wf = Object.freeze({
    __proto__: null,
    base64: Hf,
    base64pad: Vf,
    base64url: Ff,
    base64urlpad: Gf
});
const bc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , Jf = bc.reduce( (i, e, t) => (i[t] = e,
i), [])
  , Qf = bc.reduce( (i, e, t) => (i[e.codePointAt(0)] = t,
i), []);
function Yf(i) {
    return i.reduce( (e, t) => (e += Jf[t],
    e), "")
}
function Zf(i) {
    const e = [];
    for (const t of i) {
        const s = Qf[t.codePointAt(0)];
        if (s === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const Xf = zs({
    prefix: "🚀",
    name: "base256emoji",
    encode: Yf,
    decode: Zf
});
var ey = Object.freeze({
    __proto__: null,
    base256emoji: Xf
})
  , ty = vc
  , $o = 128
  , iy = -128
  , sy = Math.pow(2, 31);
function vc(i, e, t) {
    e = e || [],
    t = t || 0;
    for (var s = t; i >= sy; )
        e[t++] = i & 255 | $o,
        i /= 128;
    for (; i & iy; )
        e[t++] = i & 255 | $o,
        i >>>= 7;
    return e[t] = i | 0,
    vc.bytes = t - s + 1,
    e
}
var ry = qr
  , ny = 128
  , So = 127;
function qr(i, s) {
    var t = 0, s = s || 0, r = 0, n = s, o, a = i.length;
    do {
        if (n >= a)
            throw qr.bytes = 0,
            new RangeError("Could not decode varint");
        o = i[n++],
        t += r < 28 ? (o & So) << r : (o & So) * Math.pow(2, r),
        r += 7
    } while (o >= ny);
    return qr.bytes = n - s,
    t
}
var oy = Math.pow(2, 7)
  , ay = Math.pow(2, 14)
  , cy = Math.pow(2, 21)
  , hy = Math.pow(2, 28)
  , ly = Math.pow(2, 35)
  , uy = Math.pow(2, 42)
  , py = Math.pow(2, 49)
  , dy = Math.pow(2, 56)
  , gy = Math.pow(2, 63)
  , fy = function(i) {
    return i < oy ? 1 : i < ay ? 2 : i < cy ? 3 : i < hy ? 4 : i < ly ? 5 : i < uy ? 6 : i < py ? 7 : i < dy ? 8 : i < gy ? 9 : 10
}
  , yy = {
    encode: ty,
    decode: ry,
    encodingLength: fy
}
  , Ec = yy;
const Oo = (i, e, t=0) => (Ec.encode(i, e, t),
e)
  , xo = i => Ec.encodingLength(i)
  , jr = (i, e) => {
    const t = e.byteLength
      , s = xo(i)
      , r = s + xo(t)
      , n = new Uint8Array(r + t);
    return Oo(i, n, 0),
    Oo(t, n, s),
    n.set(e, r),
    new my(i,t,e,n)
}
;
class my {
    constructor(e, t, s, r) {
        this.code = e,
        this.size = t,
        this.digest = s,
        this.bytes = r
    }
}
const Ic = ({name: i, code: e, encode: t}) => new wy(i,e,t);
class wy {
    constructor(e, t, s) {
        this.name = e,
        this.code = t,
        this.encode = s
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? jr(this.code, t) : t.then(s => jr(this.code, s))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const _c = i => async e => new Uint8Array(await crypto.subtle.digest(i, e))
  , by = Ic({
    name: "sha2-256",
    code: 18,
    encode: _c("SHA-256")
})
  , vy = Ic({
    name: "sha2-512",
    code: 19,
    encode: _c("SHA-512")
});
var Ey = Object.freeze({
    __proto__: null,
    sha256: by,
    sha512: vy
});
const Pc = 0
  , Iy = "identity"
  , $c = mc
  , _y = i => jr(Pc, $c(i))
  , Py = {
    code: Pc,
    name: Iy,
    encode: $c,
    digest: _y
};
var $y = Object.freeze({
    __proto__: null,
    identity: Py
});
new TextEncoder,
new TextDecoder;
const Ao = {
    ...wf,
    ...vf,
    ...If,
    ...Pf,
    ...Of,
    ...kf,
    ...Lf,
    ...Kf,
    ...Wf,
    ...ey
};
({
    ...Ey,
    ...$y
});
function Sy(i=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(i) : new Uint8Array(i)
}
function Sc(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const Co = Sc("utf8", "u", i => "u" + new TextDecoder("utf8").decode(i), i => new TextEncoder().encode(i.substring(1)))
  , or = Sc("ascii", "a", i => {
    let e = "a";
    for (let t = 0; t < i.length; t++)
        e += String.fromCharCode(i[t]);
    return e
}
, i => {
    i = i.substring(1);
    const e = Sy(i.length);
    for (let t = 0; t < i.length; t++)
        e[t] = i.charCodeAt(t);
    return e
}
)
  , Oy = {
    utf8: Co,
    "utf-8": Co,
    hex: Ao.base16,
    latin1: or,
    ascii: or,
    binary: or,
    ...Ao
};
function xy(i, e="utf8") {
    const t = Oy[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i, "utf8") : t.decoder.decode(`${t.prefix}${i}`)
}
var Ay = Object.defineProperty
  , Cy = (i, e, t) => e in i ? Ay(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , tt = (i, e, t) => Cy(i, typeof e != "symbol" ? e + "" : e, t);
class Ny {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        tt(this, "keychain", new Map),
        tt(this, "name", Cg),
        tt(this, "version", Ng),
        tt(this, "initialized", !1),
        tt(this, "storagePrefix", at),
        tt(this, "init", async () => {
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s),
                this.initialized = !0
            }
        }
        ),
        tt(this, "has", s => (this.isInitialized(),
        this.keychain.has(s))),
        tt(this, "set", async (s, r) => {
            this.isInitialized(),
            this.keychain.set(s, r),
            await this.persist()
        }
        ),
        tt(this, "get", s => {
            this.isInitialized();
            const r = this.keychain.get(s);
            if (typeof r > "u") {
                const {message: n} = A("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(n)
            }
            return r
        }
        ),
        tt(this, "del", async s => {
            this.isInitialized(),
            this.keychain.delete(s),
            await this.persist()
        }
        ),
        this.core = e,
        this.logger = Se(t, this.name)
    }
    get context() {
        return Ue(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, br(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? vr(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Ry = Object.defineProperty
  , Ty = (i, e, t) => e in i ? Ry(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , we = (i, e, t) => Ty(i, typeof e != "symbol" ? e + "" : e, t);
class qy {
    constructor(e, t, s) {
        this.core = e,
        this.logger = t,
        we(this, "name", xg),
        we(this, "keychain"),
        we(this, "randomSessionIdentifier", Cr()),
        we(this, "initialized", !1),
        we(this, "init", async () => {
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ),
        we(this, "hasKeys", r => (this.isInitialized(),
        this.keychain.has(r))),
        we(this, "getClientId", async () => {
            this.isInitialized();
            const r = await this.getClientSeed()
              , n = dn(r);
            return rh(n.publicKey)
        }
        ),
        we(this, "generateKeyPair", () => {
            this.isInitialized();
            const r = Rp();
            return this.setPrivateKey(r.publicKey, r.privateKey)
        }
        ),
        we(this, "signJWT", async r => {
            this.isInitialized();
            const n = await this.getClientSeed()
              , o = dn(n)
              , a = this.randomSessionIdentifier;
            return await nh(a, r, Ag, o)
        }
        ),
        we(this, "generateSharedKey", (r, n, o) => {
            this.isInitialized();
            const a = this.getPrivateKey(r)
              , c = Tp(a, n);
            return this.setSymKey(c, o)
        }
        ),
        we(this, "setSymKey", async (r, n) => {
            this.isInitialized();
            const o = n || bs(r);
            return await this.keychain.set(o, r),
            o
        }
        ),
        we(this, "deleteKeyPair", async r => {
            this.isInitialized(),
            await this.keychain.del(r)
        }
        ),
        we(this, "deleteSymKey", async r => {
            this.isInitialized(),
            await this.keychain.del(r)
        }
        ),
        we(this, "encode", async (r, n, o) => {
            this.isInitialized();
            const a = hc(o)
              , c = Wr(n);
            if (ro(a))
                return Dp(c, o?.encoding);
            if (so(a)) {
                const p = a.senderPublicKey
                  , d = a.receiverPublicKey;
                r = await this.generateSharedKey(p, d)
            }
            const h = this.getSymKey(r)
              , {type: l, senderPublicKey: u} = a;
            return qp({
                type: l,
                symKey: h,
                message: c,
                senderPublicKey: u,
                encoding: o?.encoding
            })
        }
        ),
        we(this, "decode", async (r, n, o) => {
            this.isInitialized();
            const a = Mp(n, o);
            if (ro(a)) {
                const c = kp(n, o?.encoding);
                return Ps(c)
            }
            if (so(a)) {
                const c = a.receiverPublicKey
                  , h = a.senderPublicKey;
                r = await this.generateSharedKey(c, h)
            }
            try {
                const c = this.getSymKey(r)
                  , h = jp({
                    symKey: c,
                    encoded: n,
                    encoding: o?.encoding
                });
                return Ps(h)
            } catch (c) {
                this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`),
                this.logger.error(c)
            }
        }
        ),
        we(this, "getPayloadType", (r, n=Qe) => {
            const o = Qi({
                encoded: r,
                encoding: n
            });
            return Kt(o.type)
        }
        ),
        we(this, "getPayloadSenderPublicKey", (r, n=Qe) => {
            const o = Qi({
                encoded: r,
                encoding: n
            });
            return o.senderPublicKey ? Ne(o.senderPublicKey, $e) : void 0
        }
        ),
        this.core = e,
        this.logger = Se(t, this.name),
        this.keychain = s || new Ny(this.core,this.logger)
    }
    get context() {
        return Ue(this.logger)
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t),
        e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(Io)
        } catch {
            e = Cr(),
            await this.keychain.set(Io, e)
        }
        return xy(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var jy = Object.defineProperty
  , Dy = Object.defineProperties
  , ky = Object.getOwnPropertyDescriptors
  , No = Object.getOwnPropertySymbols
  , My = Object.prototype.hasOwnProperty
  , Uy = Object.prototype.propertyIsEnumerable
  , Dr = (i, e, t) => e in i ? jy(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Ly = (i, e) => {
    for (var t in e || (e = {}))
        My.call(e, t) && Dr(i, t, e[t]);
    if (No)
        for (var t of No(e))
            Uy.call(e, t) && Dr(i, t, e[t]);
    return i
}
  , By = (i, e) => Dy(i, ky(e))
  , Re = (i, e, t) => Dr(i, typeof e != "symbol" ? e + "" : e, t);
class zy extends pg {
    constructor(e, t) {
        super(e, t),
        this.logger = e,
        this.core = t,
        Re(this, "messages", new Map),
        Re(this, "messagesWithoutClientAck", new Map),
        Re(this, "name", Rg),
        Re(this, "version", Tg),
        Re(this, "initialized", !1),
        Re(this, "storagePrefix", at),
        Re(this, "init", async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s);
                    const r = await this.getRelayerMessagesWithoutClientAck();
                    typeof r < "u" && (this.messagesWithoutClientAck = r),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(s)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ),
        Re(this, "set", async (s, r, n) => {
            this.isInitialized();
            const o = nt(r);
            let a = this.messages.get(s);
            if (typeof a > "u" && (a = {}),
            typeof a[o] < "u")
                return o;
            if (a[o] = r,
            this.messages.set(s, a),
            n === Is.inbound) {
                const c = this.messagesWithoutClientAck.get(s) || {};
                this.messagesWithoutClientAck.set(s, By(Ly({}, c), {
                    [o]: r
                }))
            }
            return await this.persist(),
            o
        }
        ),
        Re(this, "get", s => {
            this.isInitialized();
            let r = this.messages.get(s);
            return typeof r > "u" && (r = {}),
            r
        }
        ),
        Re(this, "getWithoutAck", s => {
            this.isInitialized();
            const r = {};
            for (const n of s) {
                const o = this.messagesWithoutClientAck.get(n) || {};
                r[n] = Object.values(o)
            }
            return r
        }
        ),
        Re(this, "has", (s, r) => {
            this.isInitialized();
            const n = this.get(s)
              , o = nt(r);
            return typeof n[o] < "u"
        }
        ),
        Re(this, "ack", async (s, r) => {
            this.isInitialized();
            const n = this.messagesWithoutClientAck.get(s);
            if (typeof n > "u")
                return;
            const o = nt(r);
            delete n[o],
            Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(s) : this.messagesWithoutClientAck.set(s, n),
            await this.persist()
        }
        ),
        Re(this, "del", async s => {
            this.isInitialized(),
            this.messages.delete(s),
            this.messagesWithoutClientAck.delete(s),
            await this.persist()
        }
        ),
        this.logger = Se(e, this.name),
        this.core = t
    }
    get context() {
        return Ue(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get storageKeyWithoutClientAck() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck"
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, br(e))
    }
    async setRelayerMessagesWithoutClientAck(e) {
        await this.core.storage.setItem(this.storageKeyWithoutClientAck, br(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? vr(e) : void 0
    }
    async getRelayerMessagesWithoutClientAck() {
        const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
        return typeof e < "u" ? vr(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages),
        await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Ky = Object.defineProperty
  , Hy = Object.defineProperties
  , Vy = Object.getOwnPropertyDescriptors
  , Ro = Object.getOwnPropertySymbols
  , Fy = Object.prototype.hasOwnProperty
  , Gy = Object.prototype.propertyIsEnumerable
  , kr = (i, e, t) => e in i ? Ky(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ps = (i, e) => {
    for (var t in e || (e = {}))
        Fy.call(e, t) && kr(i, t, e[t]);
    if (Ro)
        for (var t of Ro(e))
            Gy.call(e, t) && kr(i, t, e[t]);
    return i
}
  , ar = (i, e) => Hy(i, Vy(e))
  , We = (i, e, t) => kr(i, typeof e != "symbol" ? e + "" : e, t);
class Wy extends dg {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        We(this, "events", new Ot.EventEmitter),
        We(this, "name", qg),
        We(this, "queue", new Map),
        We(this, "publishTimeout", C.toMiliseconds(C.ONE_MINUTE)),
        We(this, "initialPublishTimeout", C.toMiliseconds(C.ONE_SECOND * 15)),
        We(this, "needsTransportRestart", !1),
        We(this, "publish", async (s, r, n) => {
            var o;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: r,
                    opts: n
                }
            });
            const a = n?.ttl || _o
              , c = xs(n)
              , h = n?.prompt || !1
              , l = n?.tag || 0
              , u = n?.id || li().toString()
              , p = {
                topic: s,
                message: r,
                opts: {
                    ttl: a,
                    relay: c,
                    prompt: h,
                    tag: l,
                    id: u,
                    attestation: n?.attestation,
                    tvf: n?.tvf
                }
            }
              , d = `Failed to publish payload, please try again. id:${u} tag:${l}`;
            try {
                const g = new Promise(async y => {
                    const f = ({id: m}) => {
                        p.opts.id === m && (this.removeRequestFromQueue(m),
                        this.relayer.events.removeListener(ge.publish, f),
                        y(p))
                    }
                    ;
                    this.relayer.events.on(ge.publish, f);
                    const w = Pt(new Promise( (m, v) => {
                        this.rpcPublish({
                            topic: s,
                            message: r,
                            ttl: a,
                            prompt: h,
                            tag: l,
                            id: u,
                            attestation: n?.attestation,
                            tvf: n?.tvf
                        }).then(m).catch(x => {
                            this.logger.warn(x, x?.message),
                            v(x)
                        }
                        )
                    }
                    ), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u} tag:${l}`);
                    try {
                        await w,
                        this.events.removeListener(ge.publish, f)
                    } catch (m) {
                        this.queue.set(u, ar(ps({}, p), {
                            attempt: 1
                        })),
                        this.logger.warn(m, m?.message)
                    }
                }
                );
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: u,
                        topic: s,
                        message: r,
                        opts: n
                    }
                }),
                await Pt(g, this.publishTimeout, d)
            } catch (g) {
                if (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(g),
                (o = n?.internal) != null && o.throwOnFailedPublish)
                    throw g
            } finally {
                this.queue.delete(u)
            }
        }
        ),
        We(this, "on", (s, r) => {
            this.events.on(s, r)
        }
        ),
        We(this, "once", (s, r) => {
            this.events.once(s, r)
        }
        ),
        We(this, "off", (s, r) => {
            this.events.off(s, r)
        }
        ),
        We(this, "removeListener", (s, r) => {
            this.events.removeListener(s, r)
        }
        ),
        this.relayer = e,
        this.logger = Se(t, this.name),
        this.registerEventListeners()
    }
    get context() {
        return Ue(this.logger)
    }
    async rpcPublish(e) {
        var t, s, r, n;
        const {topic: o, message: a, ttl: c=_o, prompt: h, tag: l, id: u, attestation: p, tvf: d} = e
          , g = {
            method: Mi(xs().protocol).publish,
            params: ps({
                topic: o,
                message: a,
                ttl: c,
                prompt: h,
                tag: l,
                attestation: p
            }, d),
            id: u
        };
        ve((t = g.params) == null ? void 0 : t.prompt) && ((s = g.params) == null || delete s.prompt),
        ve((r = g.params) == null ? void 0 : r.tag) && ((n = g.params) == null || delete n.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: g
        });
        const y = await this.relayer.request(g);
        return this.relayer.events.emit(ge.publish, e),
        this.logger.debug("Successfully Published Payload"),
        y
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach(async (e, t) => {
            const s = e.attempt + 1;
            this.queue.set(t, ar(ps({}, e), {
                attempt: s
            }));
            const {topic: r, message: n, opts: o, attestation: a} = e;
            this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${s}`),
            await this.rpcPublish(ar(ps({}, e), {
                topic: r,
                message: n,
                ttl: o.ttl,
                prompt: o.prompt,
                tag: o.tag,
                id: o.id,
                attestation: a,
                tvf: o.tvf
            })),
            this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`)
        }
        )
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(_i.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(ge.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(ge.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        }
        )
    }
}
var Jy = Object.defineProperty
  , Qy = (i, e, t) => e in i ? Jy(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Qt = (i, e, t) => Qy(i, typeof e != "symbol" ? e + "" : e, t);
class Yy {
    constructor() {
        Qt(this, "map", new Map),
        Qt(this, "set", (e, t) => {
            const s = this.get(e);
            this.exists(e, t) || this.map.set(e, [...s, t])
        }
        ),
        Qt(this, "get", e => this.map.get(e) || []),
        Qt(this, "exists", (e, t) => this.get(e).includes(t)),
        Qt(this, "delete", (e, t) => {
            if (typeof t > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e))
                return;
            const s = this.get(e);
            if (!this.exists(e, t))
                return;
            const r = s.filter(n => n !== t);
            if (!r.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, r)
        }
        ),
        Qt(this, "clear", () => {
            this.map.clear()
        }
        )
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var Zy = Object.defineProperty
  , Xy = Object.defineProperties
  , em = Object.getOwnPropertyDescriptors
  , To = Object.getOwnPropertySymbols
  , tm = Object.prototype.hasOwnProperty
  , im = Object.prototype.propertyIsEnumerable
  , Mr = (i, e, t) => e in i ? Zy(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ji = (i, e) => {
    for (var t in e || (e = {}))
        tm.call(e, t) && Mr(i, t, e[t]);
    if (To)
        for (var t of To(e))
            im.call(e, t) && Mr(i, t, e[t]);
    return i
}
  , cr = (i, e) => Xy(i, em(e))
  , Y = (i, e, t) => Mr(i, typeof e != "symbol" ? e + "" : e, t);
class sm extends yg {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        Y(this, "subscriptions", new Map),
        Y(this, "topicMap", new Yy),
        Y(this, "events", new Ot.EventEmitter),
        Y(this, "name", Bg),
        Y(this, "version", zg),
        Y(this, "pending", new Map),
        Y(this, "cached", []),
        Y(this, "initialized", !1),
        Y(this, "storagePrefix", at),
        Y(this, "subscribeTimeout", C.toMiliseconds(C.ONE_MINUTE)),
        Y(this, "initialSubscribeTimeout", C.toMiliseconds(C.ONE_SECOND * 15)),
        Y(this, "clientId"),
        Y(this, "batchSubscribeTopicsLimit", 500),
        Y(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.restore()),
            this.initialized = !0
        }
        ),
        Y(this, "subscribe", async (s, r) => {
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: r
                }
            });
            try {
                const n = xs(r)
                  , o = {
                    topic: s,
                    relay: n,
                    transportType: r?.transportType
                };
                this.pending.set(s, o);
                const a = await this.rpcSubscribe(s, n, r);
                return typeof a == "string" && (this.onSubscribe(a, o),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: r
                    }
                })),
                a
            } catch (n) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(n),
                n
            }
        }
        ),
        Y(this, "unsubscribe", async (s, r) => {
            this.isInitialized(),
            typeof r?.id < "u" ? await this.unsubscribeById(s, r.id, r) : await this.unsubscribeByTopic(s, r)
        }
        ),
        Y(this, "isSubscribed", s => new Promise(r => {
            r(this.topicMap.topics.includes(s))
        }
        )),
        Y(this, "isKnownTopic", s => new Promise(r => {
            r(this.topicMap.topics.includes(s) || this.pending.has(s) || this.cached.some(n => n.topic === s))
        }
        )),
        Y(this, "on", (s, r) => {
            this.events.on(s, r)
        }
        ),
        Y(this, "once", (s, r) => {
            this.events.once(s, r)
        }
        ),
        Y(this, "off", (s, r) => {
            this.events.off(s, r)
        }
        ),
        Y(this, "removeListener", (s, r) => {
            this.events.removeListener(s, r)
        }
        ),
        Y(this, "start", async () => {
            await this.onConnect()
        }
        ),
        Y(this, "stop", async () => {
            await this.onDisconnect()
        }
        ),
        Y(this, "restart", async () => {
            await this.restore(),
            await this.onRestart()
        }
        ),
        Y(this, "checkPending", async () => {
            if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected))
                return;
            const s = [];
            this.pending.forEach(r => {
                s.push(r)
            }
            ),
            await this.batchSubscribe(s)
        }
        ),
        Y(this, "registerEventListeners", () => {
            this.relayer.core.heartbeat.on(_i.pulse, async () => {
                await this.checkPending()
            }
            ),
            this.events.on(qe.created, async s => {
                const r = qe.created;
                this.logger.info(`Emitting ${r}`),
                this.logger.debug({
                    type: "event",
                    event: r,
                    data: s
                }),
                await this.persist()
            }
            ),
            this.events.on(qe.deleted, async s => {
                const r = qe.deleted;
                this.logger.info(`Emitting ${r}`),
                this.logger.debug({
                    type: "event",
                    event: r,
                    data: s
                }),
                await this.persist()
            }
            )
        }
        ),
        this.relayer = e,
        this.logger = Se(t, this.name),
        this.clientId = ""
    }
    get context() {
        return Ue(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    get hasAnyTopics() {
        return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0
    }
    hasSubscription(e, t) {
        let s = !1;
        try {
            s = this.getSubscription(e).topic === t
        } catch {}
        return s
    }
    reset() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.values.length > 0 && (this.cached = this.values),
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    async unsubscribeByTopic(e, t) {
        const s = this.topicMap.get(e);
        await Promise.all(s.map(async r => await this.unsubscribeById(e, r, t)))
    }
    async unsubscribeById(e, t, s) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: s
            }
        });
        try {
            const r = xs(s);
            await this.restartToComplete({
                topic: e,
                id: t,
                relay: r
            }),
            await this.rpcUnsubscribe(e, t, r);
            const n = Q("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: s
                }
            })
        } catch (r) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(r),
            r
        }
    }
    async rpcSubscribe(e, t, s) {
        var r;
        (!s || s?.transportType === te.relay) && await this.restartToComplete({
            topic: e,
            id: e,
            relay: t
        });
        const n = {
            method: Mi(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        const o = (r = s?.internal) == null ? void 0 : r.throwOnFailedPublish;
        try {
            const a = await this.getSubscriptionId(e);
            if (s?.transportType === te.link_mode)
                return setTimeout( () => {
                    (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch(l => this.logger.warn(l))
                }
                , C.toMiliseconds(C.ONE_SECOND)),
                a;
            const c = new Promise(async l => {
                const u = p => {
                    p.topic === e && (this.events.removeListener(qe.created, u),
                    l(p.id))
                }
                ;
                this.events.on(qe.created, u);
                try {
                    const p = await Pt(new Promise( (d, g) => {
                        this.relayer.request(n).catch(y => {
                            this.logger.warn(y, y?.message),
                            g(y)
                        }
                        ).then(d)
                    }
                    ), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
                    this.events.removeListener(qe.created, u),
                    l(p)
                } catch {}
            }
            )
              , h = await Pt(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
            if (!h && o)
                throw new Error(`Subscribing to ${e} failed, please try again`);
            return h ? a : null
        } catch (a) {
            if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(ge.connection_stalled),
            o)
                throw a
        }
        return null
    }
    async rpcBatchSubscribe(e) {
        if (!e.length)
            return;
        const t = e[0].relay
          , s = {
            method: Mi(t.protocol).batchSubscribe,
            params: {
                topics: e.map(r => r.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            await await Pt(new Promise(r => {
                this.relayer.request(s).catch(n => this.logger.warn(n)).then(r)
            }
            ), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again")
        } catch {
            this.relayer.events.emit(ge.connection_stalled)
        }
    }
    async rpcBatchFetchMessages(e) {
        if (!e.length)
            return;
        const t = e[0].relay
          , s = {
            method: Mi(t.protocol).batchFetchMessages,
            params: {
                topics: e.map(n => n.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        let r;
        try {
            r = await await Pt(new Promise( (n, o) => {
                this.relayer.request(s).catch(a => {
                    this.logger.warn(a),
                    o(a)
                }
                ).then(n)
            }
            ), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again")
        } catch {
            this.relayer.events.emit(ge.connection_stalled)
        }
        return r
    }
    rpcUnsubscribe(e, t, s) {
        const r = {
            method: Mi(s.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        }),
        this.relayer.request(r)
    }
    onSubscribe(e, t) {
        this.setSubscription(e, cr(ji({}, t), {
            id: e
        })),
        this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(t => {
            this.setSubscription(t.id, ji({}, t)),
            this.pending.delete(t.topic)
        }
        )
    }
    async onUnsubscribe(e, t, s) {
        this.events.removeAllListeners(t),
        this.hasSubscription(t, e) && this.deleteSubscription(t, s),
        await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, t) {
        this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }),
        this.addSubscription(e, t)
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, ji({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(qe.created, t)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const {message: s} = A("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const s = this.getSubscription(e);
        this.subscriptions.delete(e),
        this.topicMap.delete(s.topic, e),
        this.events.emit(qe.deleted, cr(ji({}, s), {
            reason: t
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(qe.sync)
    }
    async onRestart() {
        if (this.cached.length) {
            const e = [...this.cached]
              , t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let s = 0; s < t; s++) {
                const r = e.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(r)
            }
        }
        this.events.emit(qe.resubscribed)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length)
                return;
            if (this.subscriptions.size) {
                const {message: t} = A("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e)
        }
    }
    async batchSubscribe(e) {
        e.length && (await this.rpcBatchSubscribe(e),
        this.onBatchSubscribe(await Promise.all(e.map(async t => cr(ji({}, t), {
            id: await this.getSubscriptionId(t.topic)
        })))))
    }
    async batchFetchMessages(e) {
        if (!e.length)
            return;
        this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
        const t = await this.rpcBatchFetchMessages(e);
        t && t.messages && (await bl(C.toMiliseconds(C.ONE_SECOND)),
        await this.relayer.handleBatchMessageEvents(t.messages))
    }
    async onConnect() {
        await this.restart(),
        this.reset()
    }
    onDisconnect() {
        this.onDisable()
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async restartToComplete(e) {
        !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e),
        await this.relayer.transportOpen())
    }
    async getClientId() {
        return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()),
        this.clientId
    }
    async getSubscriptionId(e) {
        return nt(e + await this.getClientId())
    }
}
var rm = Object.defineProperty
  , qo = Object.getOwnPropertySymbols
  , nm = Object.prototype.hasOwnProperty
  , om = Object.prototype.propertyIsEnumerable
  , Ur = (i, e, t) => e in i ? rm(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , jo = (i, e) => {
    for (var t in e || (e = {}))
        nm.call(e, t) && Ur(i, t, e[t]);
    if (qo)
        for (var t of qo(e))
            om.call(e, t) && Ur(i, t, e[t]);
    return i
}
  , F = (i, e, t) => Ur(i, typeof e != "symbol" ? e + "" : e, t);
class am extends gg {
    constructor(e) {
        super(e),
        F(this, "protocol", "wc"),
        F(this, "version", 2),
        F(this, "core"),
        F(this, "logger"),
        F(this, "events", new Ot.EventEmitter),
        F(this, "provider"),
        F(this, "messages"),
        F(this, "subscriber"),
        F(this, "publisher"),
        F(this, "name", Dg),
        F(this, "transportExplicitlyClosed", !1),
        F(this, "initialized", !1),
        F(this, "connectionAttemptInProgress", !1),
        F(this, "relayUrl"),
        F(this, "projectId"),
        F(this, "packageName"),
        F(this, "bundleId"),
        F(this, "hasExperiencedNetworkDisruption", !1),
        F(this, "pingTimeout"),
        F(this, "heartBeatTimeout", C.toMiliseconds(C.THIRTY_SECONDS + C.FIVE_SECONDS)),
        F(this, "reconnectTimeout"),
        F(this, "connectPromise"),
        F(this, "reconnectInProgress", !1),
        F(this, "requestsInFlight", []),
        F(this, "connectTimeout", C.toMiliseconds(C.ONE_SECOND * 15)),
        F(this, "request", async t => {
            var s, r;
            this.logger.debug("Publishing Request Payload");
            const n = t.id || li().toString();
            await this.toEstablishConnection();
            try {
                this.logger.trace({
                    id: n,
                    method: t.method,
                    topic: (s = t.params) == null ? void 0 : s.topic
                }, "relayer.request - publishing...");
                const o = `${n}:${((r = t.params) == null ? void 0 : r.tag) || ""}`;
                this.requestsInFlight.push(o);
                const a = await this.provider.request(t);
                return this.requestsInFlight = this.requestsInFlight.filter(c => c !== o),
                a
            } catch (o) {
                throw this.logger.debug(`Failed to Publish Request: ${n}`),
                o
            }
        }
        ),
        F(this, "resetPingTimeout", () => {
            Ss() && (clearTimeout(this.pingTimeout),
            this.pingTimeout = setTimeout( () => {
                var t, s, r, n;
                try {
                    this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."),
                    (n = (r = (s = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : s.socket) == null ? void 0 : r.terminate) == null || n.call(r)
                } catch (o) {
                    this.logger.warn(o, o?.message)
                }
            }
            , this.heartBeatTimeout))
        }
        ),
        F(this, "onPayloadHandler", t => {
            this.onProviderPayload(t),
            this.resetPingTimeout()
        }
        ),
        F(this, "onConnectHandler", () => {
            this.logger.warn({}, "Relayer connected 🛜"),
            this.startPingTimeout(),
            this.events.emit(ge.connect)
        }
        ),
        F(this, "onDisconnectHandler", () => {
            this.logger.warn({}, "Relayer disconnected 🛑"),
            this.requestsInFlight = [],
            this.onProviderDisconnect()
        }
        ),
        F(this, "onProviderErrorHandler", t => {
            this.logger.fatal(`Fatal socket error: ${t.message}`),
            this.events.emit(ge.error, t),
            this.logger.fatal("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ),
        F(this, "registerProviderListeners", () => {
            this.provider.on(Le.payload, this.onPayloadHandler),
            this.provider.on(Le.connect, this.onConnectHandler),
            this.provider.on(Le.disconnect, this.onDisconnectHandler),
            this.provider.on(Le.error, this.onProviderErrorHandler)
        }
        ),
        this.core = e.core,
        this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Se(e.logger, this.name) : Jr(Ts({
            level: e.logger || jg
        })),
        this.messages = new zy(this.logger,e.core),
        this.subscriber = new sm(this,this.logger),
        this.publisher = new Wy(this,this.logger),
        this.relayUrl = e?.relayUrl || fc,
        this.projectId = e.projectId,
        sl() ? this.packageName = On() : rl() && (this.bundleId = On()),
        this.provider = {}
    }
    async init() {
        if (this.logger.trace("Initialized"),
        this.registerEventListeners(),
        await Promise.all([this.messages.init(), this.subscriber.init()]),
        this.initialized = !0,
        this.subscriber.hasAnyTopics)
            try {
                await this.transportOpen()
            } catch (e) {
                this.logger.warn(e, e?.message)
            }
    }
    get context() {
        return Ue(this.logger)
    }
    get connected() {
        var e, t, s;
        return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 1 || !1
    }
    get connecting() {
        var e, t, s;
        return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 0 || this.connectPromise !== void 0 || !1
    }
    async publish(e, t, s) {
        this.isInitialized(),
        await this.publisher.publish(e, t, s),
        await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now(),
            transportType: te.relay
        }, Is.outbound)
    }
    async subscribe(e, t) {
        var s, r, n;
        this.isInitialized(),
        (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
        const o = typeof ((s = t?.internal) == null ? void 0 : s.throwOnFailedPublish) > "u" ? !0 : (r = t?.internal) == null ? void 0 : r.throwOnFailedPublish;
        let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
        const h = l => {
            l.topic === e && (this.subscriber.off(qe.created, h),
            c())
        }
        ;
        return await Promise.all([new Promise(l => {
            c = l,
            this.subscriber.on(qe.created, h)
        }
        ), new Promise(async (l, u) => {
            a = await this.subscriber.subscribe(e, jo({
                internal: {
                    throwOnFailedPublish: o
                }
            }, t)).catch(p => {
                o && u(p)
            }
            ) || a,
            l()
        }
        )]),
        a
    }
    async unsubscribe(e, t) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(e, t)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async transportDisconnect() {
        this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Pt(this.provider.disconnect(), 2e3, "provider.disconnect()").catch( () => this.onProviderDisconnect()) : this.onProviderDisconnect()
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0,
        await this.transportDisconnect()
    }
    async transportOpen(e) {
        if (!this.subscriber.hasAnyTopics) {
            this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
            return
        }
        if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."),
        await this.connectPromise,
        this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, s) => {
            await this.connect(e).then(t).catch(s).finally( () => {
                this.connectPromise = void 0
            }
            )
        }
        ),
        await this.connectPromise),
        !this.connected)
            throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)
    }
    async restartTransport(e) {
        this.logger.debug({}, "Restarting transport..."),
        !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
        await this.confirmOnlineStateOrThrow(),
        await this.transportClose(),
        await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await yo())
            throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    async handleBatchMessageEvents(e) {
        if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return
        }
        const t = e.sort( (s, r) => s.publishedAt - r.publishedAt);
        this.logger.debug(`Batch of ${t.length} message events sorted`);
        for (const s of t)
            try {
                await this.onMessageEvent(s)
            } catch (r) {
                this.logger.warn(r, "Error while processing batch message event: " + r?.message)
            }
        this.logger.trace(`Batch of ${t.length} message events processed`)
    }
    async onLinkMessageEvent(e, t) {
        const {topic: s} = e;
        if (!t.sessionExists) {
            const r = ce(C.FIVE_MINUTES)
              , n = {
                topic: s,
                expiry: r,
                relay: {
                    protocol: "irn"
                },
                active: !1
            };
            await this.core.pairing.pairings.set(s, n)
        }
        this.events.emit(ge.message, e),
        await this.recordMessageEvent(e, Is.inbound)
    }
    async connect(e) {
        await this.confirmOnlineStateOrThrow(),
        e && e !== this.relayUrl && (this.relayUrl = e,
        await this.transportDisconnect()),
        this.connectionAttemptInProgress = !0,
        this.transportExplicitlyClosed = !1;
        let t = 1;
        for (; t < 6; ) {
            try {
                if (this.transportExplicitlyClosed)
                    break;
                this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`),
                await this.createProvider(),
                await new Promise(async (s, r) => {
                    const n = () => {
                        r(new Error("Connection interrupted while trying to subscribe"))
                    }
                    ;
                    this.provider.once(Le.disconnect, n),
                    await Pt(new Promise( (o, a) => {
                        this.provider.connect().then(o).catch(a)
                    }
                    ), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(o => {
                        r(o)
                    }
                    ).finally( () => {
                        this.provider.off(Le.disconnect, n),
                        clearTimeout(this.reconnectTimeout)
                    }
                    ),
                    await new Promise(async (o, a) => {
                        const c = () => {
                            a(new Error("Connection interrupted while trying to subscribe"))
                        }
                        ;
                        this.provider.once(Le.disconnect, c),
                        await this.subscriber.start().then(o).catch(a).finally( () => {
                            this.provider.off(Le.disconnect, c)
                        }
                        )
                    }
                    ),
                    this.hasExperiencedNetworkDisruption = !1,
                    s()
                }
                )
            } catch (s) {
                await this.subscriber.stop();
                const r = s;
                this.logger.warn({}, r.message),
                this.hasExperiencedNetworkDisruption = !0
            } finally {
                this.connectionAttemptInProgress = !1
            }
            if (this.connected) {
                this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
                break
            }
            await new Promise(s => setTimeout(s, C.toMiliseconds(t * 1))),
            t++
        }
    }
    startPingTimeout() {
        var e, t, s, r, n;
        if (Ss())
            try {
                (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((n = (r = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : r.socket) == null || n.on("ping", () => {
                    this.resetPingTimeout()
                }
                )),
                this.resetPingTimeout()
            } catch (o) {
                this.logger.warn(o, o?.message)
            }
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new He(new sh(hl({
            sdkVersion: Tr,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId,
            packageName: this.packageName
        }))),
        this.registerProviderListeners()
    }
    async recordMessageEvent(e, t) {
        const {topic: s, message: r} = e;
        await this.messages.set(s, r, t)
    }
    async shouldIgnoreMessageEvent(e) {
        const {topic: t, message: s} = e;
        if (!s || s.length === 0)
            return this.logger.warn(`Ignoring invalid/empty message: ${s}`),
            !0;
        if (!await this.subscriber.isKnownTopic(t))
            return this.logger.warn(`Ignoring message for unknown topic ${t}`),
            !0;
        const r = this.messages.has(t, s);
        return r && this.logger.warn(`Ignoring duplicate message: ${s}`),
        r
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }),
        Qr(e)) {
            if (!e.method.endsWith(kg))
                return;
            const t = e.params
              , {topic: s, message: r, publishedAt: n, attestation: o} = t.data
              , a = {
                topic: s,
                message: r,
                publishedAt: n,
                transportType: te.relay,
                attestation: o
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(jo({
                type: "event",
                event: t.id
            }, a)),
            this.events.emit(t.id, a),
            await this.acknowledgePayload(e),
            await this.onMessageEvent(a)
        } else
            Yr(e) && this.events.emit(ge.message_ack, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Is.inbound),
        this.events.emit(ge.message, e))
    }
    async acknowledgePayload(e) {
        const t = qs(e.id, !0);
        await this.provider.connection.send(t)
    }
    unregisterProviderListeners() {
        this.provider.off(Le.payload, this.onPayloadHandler),
        this.provider.off(Le.connect, this.onConnectHandler),
        this.provider.off(Le.disconnect, this.onDisconnectHandler),
        this.provider.off(Le.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout)
    }
    async registerEventListeners() {
        let e = await yo();
        Nd(async t => {
            e !== t && (e = t,
            t ? await this.transportOpen().catch(s => this.logger.error(s, s?.message)) : (this.hasExperiencedNetworkDisruption = !0,
            await this.transportDisconnect(),
            this.transportExplicitlyClosed = !1))
        }
        ),
        this.core.heartbeat.on(_i.pulse, async () => {
            if (!this.transportExplicitlyClosed && !this.connected && qd())
                try {
                    await this.confirmOnlineStateOrThrow(),
                    await this.transportOpen()
                } catch (t) {
                    this.logger.warn(t, t?.message)
                }
        }
        )
    }
    async onProviderDisconnect() {
        clearTimeout(this.pingTimeout),
        this.events.emit(ge.disconnect),
        this.connectionAttemptInProgress = !1,
        !this.reconnectInProgress && (this.reconnectInProgress = !0,
        await this.subscriber.stop(),
        this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
            await this.transportOpen().catch(e => this.logger.error(e, e?.message)),
            this.reconnectTimeout = void 0,
            this.reconnectInProgress = !1
        }
        , C.toMiliseconds(Mg)))))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(),
        !this.connected) {
            if (this.connectPromise) {
                await this.connectPromise;
                return
            }
            await this.connect()
        }
    }
}
function cm() {}
function Do(i) {
    if (!i || typeof i != "object")
        return !1;
    const e = Object.getPrototypeOf(i);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(i) === "[object Object]" : !1
}
function ko(i) {
    return Object.getOwnPropertySymbols(i).filter(e => Object.prototype.propertyIsEnumerable.call(i, e))
}
function Mo(i) {
    return i == null ? i === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(i)
}
const hm = "[object RegExp]"
  , lm = "[object String]"
  , um = "[object Number]"
  , pm = "[object Boolean]"
  , Uo = "[object Arguments]"
  , dm = "[object Symbol]"
  , gm = "[object Date]"
  , fm = "[object Map]"
  , ym = "[object Set]"
  , mm = "[object Array]"
  , wm = "[object Function]"
  , bm = "[object ArrayBuffer]"
  , hr = "[object Object]"
  , vm = "[object Error]"
  , Em = "[object DataView]"
  , Im = "[object Uint8Array]"
  , _m = "[object Uint8ClampedArray]"
  , Pm = "[object Uint16Array]"
  , $m = "[object Uint32Array]"
  , Sm = "[object BigUint64Array]"
  , Om = "[object Int8Array]"
  , xm = "[object Int16Array]"
  , Am = "[object Int32Array]"
  , Cm = "[object BigInt64Array]"
  , Nm = "[object Float32Array]"
  , Rm = "[object Float64Array]";
function Tm(i, e) {
    return i === e || Number.isNaN(i) && Number.isNaN(e)
}
function qm(i, e, t) {
    return Ui(i, e, void 0, void 0, void 0, void 0, t)
}
function Ui(i, e, t, s, r, n, o) {
    const a = o(i, e, t, s, r, n);
    if (a !== void 0)
        return a;
    if (typeof i == typeof e)
        switch (typeof i) {
        case "bigint":
        case "string":
        case "boolean":
        case "symbol":
        case "undefined":
            return i === e;
        case "number":
            return i === e || Object.is(i, e);
        case "function":
            return i === e;
        case "object":
            return Hi(i, e, n, o)
        }
    return Hi(i, e, n, o)
}
function Hi(i, e, t, s) {
    if (Object.is(i, e))
        return !0;
    let r = Mo(i)
      , n = Mo(e);
    if (r === Uo && (r = hr),
    n === Uo && (n = hr),
    r !== n)
        return !1;
    switch (r) {
    case lm:
        return i.toString() === e.toString();
    case um:
        {
            const c = i.valueOf()
              , h = e.valueOf();
            return Tm(c, h)
        }
    case pm:
    case gm:
    case dm:
        return Object.is(i.valueOf(), e.valueOf());
    case hm:
        return i.source === e.source && i.flags === e.flags;
    case wm:
        return i === e
    }
    t = t ?? new Map;
    const o = t.get(i)
      , a = t.get(e);
    if (o != null && a != null)
        return o === e;
    t.set(i, e),
    t.set(e, i);
    try {
        switch (r) {
        case fm:
            {
                if (i.size !== e.size)
                    return !1;
                for (const [c,h] of i.entries())
                    if (!e.has(c) || !Ui(h, e.get(c), c, i, e, t, s))
                        return !1;
                return !0
            }
        case ym:
            {
                if (i.size !== e.size)
                    return !1;
                const c = Array.from(i.values())
                  , h = Array.from(e.values());
                for (let l = 0; l < c.length; l++) {
                    const u = c[l]
                      , p = h.findIndex(d => Ui(u, d, void 0, i, e, t, s));
                    if (p === -1)
                        return !1;
                    h.splice(p, 1)
                }
                return !0
            }
        case mm:
        case Im:
        case _m:
        case Pm:
        case $m:
        case Sm:
        case Om:
        case xm:
        case Am:
        case Cm:
        case Nm:
        case Rm:
            {
                if (typeof ye < "u" && ye.isBuffer(i) !== ye.isBuffer(e) || i.length !== e.length)
                    return !1;
                for (let c = 0; c < i.length; c++)
                    if (!Ui(i[c], e[c], c, i, e, t, s))
                        return !1;
                return !0
            }
        case bm:
            return i.byteLength !== e.byteLength ? !1 : Hi(new Uint8Array(i), new Uint8Array(e), t, s);
        case Em:
            return i.byteLength !== e.byteLength || i.byteOffset !== e.byteOffset ? !1 : Hi(new Uint8Array(i), new Uint8Array(e), t, s);
        case vm:
            return i.name === e.name && i.message === e.message;
        case hr:
            {
                if (!(Hi(i.constructor, e.constructor, t, s) || Do(i) && Do(e)))
                    return !1;
                const c = [...Object.keys(i), ...ko(i)]
                  , h = [...Object.keys(e), ...ko(e)];
                if (c.length !== h.length)
                    return !1;
                for (let l = 0; l < c.length; l++) {
                    const u = c[l]
                      , p = i[u];
                    if (!Object.hasOwn(e, u))
                        return !1;
                    const d = e[u];
                    if (!Ui(p, d, u, i, e, t, s))
                        return !1
                }
                return !0
            }
        default:
            return !1
        }
    } finally {
        t.delete(i),
        t.delete(e)
    }
}
function jm(i, e) {
    return qm(i, e, cm)
}
var Dm = Object.defineProperty
  , Lo = Object.getOwnPropertySymbols
  , km = Object.prototype.hasOwnProperty
  , Mm = Object.prototype.propertyIsEnumerable
  , Lr = (i, e, t) => e in i ? Dm(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Bo = (i, e) => {
    for (var t in e || (e = {}))
        km.call(e, t) && Lr(i, t, e[t]);
    if (Lo)
        for (var t of Lo(e))
            Mm.call(e, t) && Lr(i, t, e[t]);
    return i
}
  , Oe = (i, e, t) => Lr(i, typeof e != "symbol" ? e + "" : e, t);
class Ht extends fg {
    constructor(e, t, s, r=at, n=void 0) {
        super(e, t, s, r),
        this.core = e,
        this.logger = t,
        this.name = s,
        Oe(this, "map", new Map),
        Oe(this, "version", Ug),
        Oe(this, "cached", []),
        Oe(this, "initialized", !1),
        Oe(this, "getKey"),
        Oe(this, "storagePrefix", at),
        Oe(this, "recentlyDeleted", []),
        Oe(this, "recentlyDeletedLimit", 200),
        Oe(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(o => {
                this.getKey && o !== null && !ve(o) ? this.map.set(this.getKey(o), o) : cd(o) ? this.map.set(o.id, o) : hd(o) && this.map.set(o.topic, o)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ),
        Oe(this, "set", async (o, a) => {
            this.isInitialized(),
            this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: o,
                value: a
            }),
            this.map.set(o, a),
            await this.persist())
        }
        ),
        Oe(this, "get", o => (this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: o
        }),
        this.getData(o))),
        Oe(this, "getAll", o => (this.isInitialized(),
        o ? this.values.filter(a => Object.keys(o).every(c => jm(a[c], o[c]))) : this.values)),
        Oe(this, "update", async (o, a) => {
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a
            });
            const c = Bo(Bo({}, this.getData(o)), a);
            this.map.set(o, c),
            await this.persist()
        }
        ),
        Oe(this, "delete", async (o, a) => {
            this.isInitialized(),
            this.map.has(o) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: o,
                reason: a
            }),
            this.map.delete(o),
            this.addToRecentlyDeleted(o),
            await this.persist())
        }
        ),
        this.logger = Se(t, this.name),
        this.storagePrefix = r,
        this.getKey = n
    }
    get context() {
        return Ue(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e),
        this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                const {message: r} = A("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(r),
                new Error(r)
            }
            const {message: s} = A("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s),
            new Error(s)
        }
        return t
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length)
                return;
            if (this.map.size) {
                const {message: t} = A("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Um = Object.defineProperty
  , Lm = (i, e, t) => e in i ? Um(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , K = (i, e, t) => Lm(i, typeof e != "symbol" ? e + "" : e, t);
class Bm {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        K(this, "name", Kg),
        K(this, "version", Hg),
        K(this, "events", new Zr),
        K(this, "pairings"),
        K(this, "initialized", !1),
        K(this, "storagePrefix", at),
        K(this, "ignoredPayloadTypes", [mt]),
        K(this, "registeredMethods", []),
        K(this, "init", async () => {
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ),
        K(this, "register", ({methods: s}) => {
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...s])]
        }
        ),
        K(this, "create", async s => {
            this.isInitialized();
            const r = Cr()
              , n = await this.core.crypto.setSymKey(r)
              , o = ce(C.FIVE_MINUTES)
              , a = {
                protocol: gc
            }
              , c = {
                topic: n,
                expiry: o,
                relay: a,
                active: !1,
                methods: s?.methods
            }
              , h = oo({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: n,
                symKey: r,
                relay: a,
                expiryTimestamp: o,
                methods: s?.methods
            });
            return this.events.emit(jt.create, c),
            this.core.expirer.set(n, o),
            await this.pairings.set(n, c),
            await this.core.relayer.subscribe(n, {
                transportType: s?.transportType
            }),
            {
                topic: n,
                uri: h
            }
        }
        ),
        K(this, "pair", async s => {
            this.isInitialized();
            const r = this.core.eventClient.createEvent({
                properties: {
                    topic: s?.uri,
                    trace: [st.pairing_started]
                }
            });
            this.isValidPair(s, r);
            const {topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h} = no(s.uri);
            r.props.properties.topic = n,
            r.addTrace(st.pairing_uri_validation_success),
            r.addTrace(st.pairing_uri_not_expired);
            let l;
            if (this.pairings.keys.includes(n)) {
                if (l = this.pairings.get(n),
                r.addTrace(st.existing_pairing),
                l.active)
                    throw r.setError(dt.active_pairing_already_exists),
                    new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
                r.addTrace(st.pairing_not_expired)
            }
            const u = c || ce(C.FIVE_MINUTES)
              , p = {
                topic: n,
                relay: a,
                expiry: u,
                active: !1,
                methods: h
            };
            this.core.expirer.set(n, u),
            await this.pairings.set(n, p),
            r.addTrace(st.store_new_pairing),
            s.activatePairing && await this.activate({
                topic: n
            }),
            this.events.emit(jt.create, p),
            r.addTrace(st.emit_inactive_pairing),
            this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n),
            r.addTrace(st.subscribing_pairing_topic);
            try {
                await this.core.relayer.confirmOnlineStateOrThrow()
            } catch {
                r.setError(dt.no_internet_connection)
            }
            try {
                await this.core.relayer.subscribe(n, {
                    relay: a
                })
            } catch (d) {
                throw r.setError(dt.subscribe_pairing_topic_failure),
                d
            }
            return r.addTrace(st.subscribe_pairing_topic_success),
            p
        }
        ),
        K(this, "activate", async ({topic: s}) => {
            this.isInitialized();
            const r = ce(C.FIVE_MINUTES);
            this.core.expirer.set(s, r),
            await this.pairings.update(s, {
                active: !0,
                expiry: r
            })
        }
        ),
        K(this, "ping", async s => {
            this.isInitialized(),
            await this.isValidPing(s),
            this.logger.warn("ping() is deprecated and will be removed in the next major release.");
            const {topic: r} = s;
            if (this.pairings.keys.includes(r)) {
                const n = await this.sendRequest(r, "wc_pairingPing", {})
                  , {done: o, resolve: a, reject: c} = Rt();
                this.events.once(J("pairing_ping", n), ({error: h}) => {
                    h ? c(h) : a()
                }
                ),
                await o()
            }
        }
        ),
        K(this, "updateExpiry", async ({topic: s, expiry: r}) => {
            this.isInitialized(),
            await this.pairings.update(s, {
                expiry: r
            })
        }
        ),
        K(this, "updateMetadata", async ({topic: s, metadata: r}) => {
            this.isInitialized(),
            await this.pairings.update(s, {
                peerMetadata: r
            })
        }
        ),
        K(this, "getPairings", () => (this.isInitialized(),
        this.pairings.values)),
        K(this, "disconnect", async s => {
            this.isInitialized(),
            await this.isValidDisconnect(s);
            const {topic: r} = s;
            this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", Q("USER_DISCONNECTED")),
            await this.deletePairing(r))
        }
        ),
        K(this, "formatUriFromPairing", s => {
            this.isInitialized();
            const {topic: r, relay: n, expiry: o, methods: a} = s
              , c = this.core.crypto.keychain.get(r);
            return oo({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: c,
                relay: n,
                expiryTimestamp: o,
                methods: a
            })
        }
        ),
        K(this, "sendRequest", async (s, r, n) => {
            const o = kt(r, n)
              , a = await this.core.crypto.encode(s, o)
              , c = Ti[r].req;
            return this.core.history.set(s, o),
            this.core.relayer.publish(s, a, c),
            o.id
        }
        ),
        K(this, "sendResult", async (s, r, n) => {
            const o = qs(s, n)
              , a = await this.core.crypto.encode(r, o)
              , c = (await this.core.history.get(r, s)).request.method
              , h = Ti[c].res;
            await this.core.relayer.publish(r, a, h),
            await this.core.history.resolve(o)
        }
        ),
        K(this, "sendError", async (s, r, n) => {
            const o = da(s, n)
              , a = await this.core.crypto.encode(r, o)
              , c = (await this.core.history.get(r, s)).request.method
              , h = Ti[c] ? Ti[c].res : Ti.unregistered_method.res;
            await this.core.relayer.publish(r, a, h),
            await this.core.history.resolve(o)
        }
        ),
        K(this, "deletePairing", async (s, r) => {
            await this.core.relayer.unsubscribe(s),
            await Promise.all([this.pairings.delete(s, Q("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), r ? Promise.resolve() : this.core.expirer.del(s)])
        }
        ),
        K(this, "cleanup", async () => {
            const s = this.pairings.getAll().filter(r => It(r.expiry));
            await Promise.all(s.map(r => this.deletePairing(r.topic)))
        }
        ),
        K(this, "onRelayEventRequest", async s => {
            const {topic: r, payload: n} = s;
            switch (n.method) {
            case "wc_pairingPing":
                return await this.onPairingPingRequest(r, n);
            case "wc_pairingDelete":
                return await this.onPairingDeleteRequest(r, n);
            default:
                return await this.onUnknownRpcMethodRequest(r, n)
            }
        }
        ),
        K(this, "onRelayEventResponse", async s => {
            const {topic: r, payload: n} = s
              , o = (await this.core.history.get(r, n.id)).request.method;
            switch (o) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(r, n);
            default:
                return this.onUnknownRpcMethodResponse(o)
            }
        }
        ),
        K(this, "onPairingPingRequest", async (s, r) => {
            const {id: n} = r;
            try {
                this.isValidPing({
                    topic: s
                }),
                await this.sendResult(n, s, !0),
                this.events.emit(jt.ping, {
                    id: n,
                    topic: s
                })
            } catch (o) {
                await this.sendError(n, s, o),
                this.logger.error(o)
            }
        }
        ),
        K(this, "onPairingPingResponse", (s, r) => {
            const {id: n} = r;
            setTimeout( () => {
                pt(r) ? this.events.emit(J("pairing_ping", n), {}) : rt(r) && this.events.emit(J("pairing_ping", n), {
                    error: r.error
                })
            }
            , 500)
        }
        ),
        K(this, "onPairingDeleteRequest", async (s, r) => {
            const {id: n} = r;
            try {
                this.isValidDisconnect({
                    topic: s
                }),
                await this.deletePairing(s),
                this.events.emit(jt.delete, {
                    id: n,
                    topic: s
                })
            } catch (o) {
                await this.sendError(n, s, o),
                this.logger.error(o)
            }
        }
        ),
        K(this, "onUnknownRpcMethodRequest", async (s, r) => {
            const {id: n, method: o} = r;
            try {
                if (this.registeredMethods.includes(o))
                    return;
                const a = Q("WC_METHOD_UNSUPPORTED", o);
                await this.sendError(n, s, a),
                this.logger.error(a)
            } catch (a) {
                await this.sendError(n, s, a),
                this.logger.error(a)
            }
        }
        ),
        K(this, "onUnknownRpcMethodResponse", s => {
            this.registeredMethods.includes(s) || this.logger.error(Q("WC_METHOD_UNSUPPORTED", s))
        }
        ),
        K(this, "isValidPair", (s, r) => {
            var n;
            if (!Ae(s)) {
                const {message: a} = A("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw r.setError(dt.malformed_pairing_uri),
                new Error(a)
            }
            if (!ad(s.uri)) {
                const {message: a} = A("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw r.setError(dt.malformed_pairing_uri),
                new Error(a)
            }
            const o = no(s?.uri);
            if (!((n = o?.relay) != null && n.protocol)) {
                const {message: a} = A("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw r.setError(dt.malformed_pairing_uri),
                new Error(a)
            }
            if (!(o != null && o.symKey)) {
                const {message: a} = A("MISSING_OR_INVALID", "pair() uri#symKey");
                throw r.setError(dt.malformed_pairing_uri),
                new Error(a)
            }
            if (o != null && o.expiryTimestamp && C.toMiliseconds(o?.expiryTimestamp) < Date.now()) {
                r.setError(dt.pairing_expired);
                const {message: a} = A("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(a)
            }
        }
        ),
        K(this, "isValidPing", async s => {
            if (!Ae(s)) {
                const {message: n} = A("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(n)
            }
            const {topic: r} = s;
            await this.isValidPairingTopic(r)
        }
        ),
        K(this, "isValidDisconnect", async s => {
            if (!Ae(s)) {
                const {message: n} = A("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(n)
            }
            const {topic: r} = s;
            await this.isValidPairingTopic(r)
        }
        ),
        K(this, "isValidPairingTopic", async s => {
            if (!ne(s, !1)) {
                const {message: r} = A("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(r)
            }
            if (!this.pairings.keys.includes(s)) {
                const {message: r} = A("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(r)
            }
            if (It(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const {message: r} = A("EXPIRED", `pairing topic: ${s}`);
                throw new Error(r)
            }
        }
        ),
        this.core = e,
        this.logger = Se(t, this.name),
        this.pairings = new Ht(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return Ue(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(ge.message, async e => {
            const {topic: t, message: s, transportType: r} = e;
            if (this.pairings.keys.includes(t) && r !== te.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
                try {
                    const n = await this.core.crypto.decode(t, s);
                    Qr(n) ? (this.core.history.set(t, n),
                    await this.onRelayEventRequest({
                        topic: t,
                        payload: n
                    })) : Yr(n) && (await this.core.history.resolve(n),
                    await this.onRelayEventResponse({
                        topic: t,
                        payload: n
                    }),
                    this.core.history.delete(t, n.id)),
                    await this.core.relayer.messages.ack(t, s)
                } catch (n) {
                    this.logger.error(n)
                }
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(ze.expired, async e => {
            const {topic: t} = Ca(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
            this.events.emit(jt.expire, {
                topic: t
            }))
        }
        )
    }
}
var zm = Object.defineProperty
  , Km = (i, e, t) => e in i ? zm(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , be = (i, e, t) => Km(i, typeof e != "symbol" ? e + "" : e, t);
class Hm extends ug {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        be(this, "records", new Map),
        be(this, "events", new Ot.EventEmitter),
        be(this, "name", Vg),
        be(this, "version", Fg),
        be(this, "cached", []),
        be(this, "initialized", !1),
        be(this, "storagePrefix", at),
        be(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(s => this.records.set(s.id, s)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ),
        be(this, "set", (s, r, n) => {
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: s,
                request: r,
                chainId: n
            }),
            this.records.has(r.id))
                return;
            const o = {
                id: r.id,
                topic: s,
                request: {
                    method: r.method,
                    params: r.params || null
                },
                chainId: n,
                expiry: ce(C.THIRTY_DAYS)
            };
            this.records.set(o.id, o),
            this.persist(),
            this.events.emit(Fe.created, o)
        }
        ),
        be(this, "resolve", async s => {
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: s
            }),
            !this.records.has(s.id))
                return;
            const r = await this.getRecord(s.id);
            typeof r.response > "u" && (r.response = rt(s) ? {
                error: s.error
            } : {
                result: s.result
            },
            this.records.set(r.id, r),
            this.persist(),
            this.events.emit(Fe.updated, r))
        }
        ),
        be(this, "get", async (s, r) => (this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: s,
            id: r
        }),
        await this.getRecord(r))),
        be(this, "delete", (s, r) => {
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: r
            }),
            this.values.forEach(n => {
                if (n.topic === s) {
                    if (typeof r < "u" && n.id !== r)
                        return;
                    this.records.delete(n.id),
                    this.events.emit(Fe.deleted, n)
                }
            }
            ),
            this.persist()
        }
        ),
        be(this, "exists", async (s, r) => (this.isInitialized(),
        this.records.has(r) ? (await this.getRecord(r)).topic === s : !1)),
        be(this, "on", (s, r) => {
            this.events.on(s, r)
        }
        ),
        be(this, "once", (s, r) => {
            this.events.once(s, r)
        }
        ),
        be(this, "off", (s, r) => {
            this.events.off(s, r)
        }
        ),
        be(this, "removeListener", (s, r) => {
            this.events.removeListener(s, r)
        }
        ),
        this.logger = Se(t, this.name)
    }
    get context() {
        return Ue(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const e = [];
        return this.values.forEach(t => {
            if (typeof t.response < "u")
                return;
            const s = {
                topic: t.topic,
                request: kt(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(s)
        }
        ),
        e
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const {message: s} = A("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(Fe.sync)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length)
                return;
            if (this.records.size) {
                const {message: t} = A("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e)
        }
    }
    registerEventListeners() {
        this.events.on(Fe.created, e => {
            const t = Fe.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.events.on(Fe.updated, e => {
            const t = Fe.updated;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.events.on(Fe.deleted, e => {
            const t = Fe.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.core.heartbeat.on(_i.pulse, () => {
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach(t => {
                C.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(Fe.deleted, t, !1),
                e = !0)
            }
            ),
            e && this.persist()
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Vm = Object.defineProperty
  , Fm = (i, e, t) => e in i ? Vm(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , _e = (i, e, t) => Fm(i, typeof e != "symbol" ? e + "" : e, t);
class Gm extends mg {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        _e(this, "expirations", new Map),
        _e(this, "events", new Ot.EventEmitter),
        _e(this, "name", Gg),
        _e(this, "version", Wg),
        _e(this, "cached", []),
        _e(this, "initialized", !1),
        _e(this, "storagePrefix", at),
        _e(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(s => this.expirations.set(s.target, s)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ),
        _e(this, "has", s => {
            try {
                const r = this.formatTarget(s);
                return typeof this.getExpiration(r) < "u"
            } catch {
                return !1
            }
        }
        ),
        _e(this, "set", (s, r) => {
            this.isInitialized();
            const n = this.formatTarget(s)
              , o = {
                target: n,
                expiry: r
            };
            this.expirations.set(n, o),
            this.checkExpiry(n, o),
            this.events.emit(ze.created, {
                target: n,
                expiration: o
            })
        }
        ),
        _e(this, "get", s => {
            this.isInitialized();
            const r = this.formatTarget(s);
            return this.getExpiration(r)
        }
        ),
        _e(this, "del", s => {
            if (this.isInitialized(),
            this.has(s)) {
                const r = this.formatTarget(s)
                  , n = this.getExpiration(r);
                this.expirations.delete(r),
                this.events.emit(ze.deleted, {
                    target: r,
                    expiration: n
                })
            }
        }
        ),
        _e(this, "on", (s, r) => {
            this.events.on(s, r)
        }
        ),
        _e(this, "once", (s, r) => {
            this.events.once(s, r)
        }
        ),
        _e(this, "off", (s, r) => {
            this.events.off(s, r)
        }
        ),
        _e(this, "removeListener", (s, r) => {
            this.events.removeListener(s, r)
        }
        ),
        this.logger = Se(t, this.name)
    }
    get context() {
        return Ue(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(e) {
        if (typeof e == "string")
            return ll(e);
        if (typeof e == "number")
            return ul(e);
        const {message: t} = A("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(ze.sync)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length)
                return;
            if (this.expirations.size) {
                const {message: t} = A("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e)
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const {message: s} = A("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(s),
            new Error(s)
        }
        return t
    }
    checkExpiry(e, t) {
        const {expiry: s} = t;
        C.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e),
        this.events.emit(ze.expired, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach( (e, t) => this.checkExpiry(t, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(_i.pulse, () => this.checkExpirations()),
        this.events.on(ze.created, e => {
            const t = ze.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(ze.expired, e => {
            const t = ze.expired;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(ze.deleted, e => {
            const t = ze.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Wm = Object.defineProperty
  , Jm = (i, e, t) => e in i ? Wm(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , re = (i, e, t) => Jm(i, typeof e != "symbol" ? e + "" : e, t);
class Qm extends wg {
    constructor(e, t, s) {
        super(e, t, s),
        this.core = e,
        this.logger = t,
        this.store = s,
        re(this, "name", Jg),
        re(this, "abortController"),
        re(this, "isDevEnv"),
        re(this, "verifyUrlV3", Yg),
        re(this, "storagePrefix", at),
        re(this, "version", dc),
        re(this, "publicKey"),
        re(this, "fetchPromise"),
        re(this, "init", async () => {
            var r;
            this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey),
            this.publicKey && C.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"),
            await this.removePublicKey()))
        }
        ),
        re(this, "register", async r => {
            if (!Si() || this.isDevEnv)
                return;
            const n = window.location.origin
              , {id: o, decryptedId: a} = r
              , c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
            try {
                const h = wt.getDocument()
                  , l = this.startAbortTimer(C.ONE_SECOND * 5)
                  , u = await new Promise( (p, d) => {
                    const g = () => {
                        window.removeEventListener("message", f),
                        h.body.removeChild(y),
                        d("attestation aborted")
                    }
                    ;
                    this.abortController.signal.addEventListener("abort", g);
                    const y = h.createElement("iframe");
                    y.src = c,
                    y.style.display = "none",
                    y.addEventListener("error", g, {
                        signal: this.abortController.signal
                    });
                    const f = w => {
                        if (w.data && typeof w.data == "string")
                            try {
                                const m = JSON.parse(w.data);
                                if (m.type === "verify_attestation") {
                                    if (yr(m.attestation).payload.id !== o)
                                        return;
                                    clearInterval(l),
                                    h.body.removeChild(y),
                                    this.abortController.signal.removeEventListener("abort", g),
                                    window.removeEventListener("message", f),
                                    p(m.attestation === null ? "" : m.attestation)
                                }
                            } catch (m) {
                                this.logger.warn(m)
                            }
                    }
                    ;
                    h.body.appendChild(y),
                    window.addEventListener("message", f, {
                        signal: this.abortController.signal
                    })
                }
                );
                return this.logger.debug("jwt attestation", u),
                u
            } catch (h) {
                this.logger.warn(h)
            }
            return ""
        }
        ),
        re(this, "resolve", async r => {
            if (this.isDevEnv)
                return "";
            const {attestationId: n, hash: o, encryptedId: a} = r;
            if (n === "") {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return
            }
            if (n) {
                if (yr(n).payload.id !== a)
                    return;
                const h = await this.isValidJwtAttestation(n);
                if (h) {
                    if (!h.isVerified) {
                        this.logger.warn("resolve: jwt attestation: origin url not verified");
                        return
                    }
                    return h
                }
            }
            if (!o)
                return;
            const c = this.getVerifyUrl(r?.verifyUrl);
            return this.fetchAttestation(o, c)
        }
        ),
        re(this, "fetchAttestation", async (r, n) => {
            this.logger.debug(`resolving attestation: ${r} from url: ${n}`);
            const o = this.startAbortTimer(C.ONE_SECOND * 5)
              , a = await fetch(`${n}/attestation/${r}?v2Supported=true`, {
                signal: this.abortController.signal
            });
            return clearTimeout(o),
            a.status === 200 ? await a.json() : void 0
        }
        ),
        re(this, "getVerifyUrl", r => {
            let n = r || Ki;
            return Zg.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Ki}`),
            n = Ki),
            n
        }
        ),
        re(this, "fetchPublicKey", async () => {
            try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                const r = this.startAbortTimer(C.FIVE_SECONDS)
                  , n = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal
                });
                return clearTimeout(r),
                await n.json()
            } catch (r) {
                this.logger.warn(r)
            }
        }
        ),
        re(this, "persistPublicKey", async r => {
            this.logger.debug("persisting public key to local storage", r),
            await this.store.setItem(this.storeKey, r),
            this.publicKey = r
        }
        ),
        re(this, "removePublicKey", async () => {
            this.logger.debug("removing verify v2 public key from storage"),
            await this.store.removeItem(this.storeKey),
            this.publicKey = void 0
        }
        ),
        re(this, "isValidJwtAttestation", async r => {
            const n = await this.getPublicKey();
            try {
                if (n)
                    return this.validateAttestation(r, n)
            } catch (a) {
                this.logger.error(a),
                this.logger.warn("error validating attestation")
            }
            const o = await this.fetchAndPersistPublicKey();
            try {
                if (o)
                    return this.validateAttestation(r, o)
            } catch (a) {
                this.logger.error(a),
                this.logger.warn("error validating attestation")
            }
        }
        ),
        re(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()),
        re(this, "fetchAndPersistPublicKey", async () => {
            if (this.fetchPromise)
                return await this.fetchPromise,
                this.publicKey;
            this.fetchPromise = new Promise(async n => {
                const o = await this.fetchPublicKey();
                o && (await this.persistPublicKey(o),
                n(o))
            }
            );
            const r = await this.fetchPromise;
            return this.fetchPromise = void 0,
            r
        }
        ),
        re(this, "validateAttestation", (r, n) => {
            const o = Lp(r, n.publicKey)
              , a = {
                hasExpired: C.toMiliseconds(o.exp) < Date.now(),
                payload: o
            };
            if (a.hasExpired)
                throw this.logger.warn("resolve: jwt attestation expired"),
                new Error("JWT attestation expired");
            return {
                origin: a.payload.origin,
                isScam: a.payload.isScam,
                isVerified: a.payload.isVerified
            }
        }
        ),
        this.logger = Se(t, this.name),
        this.abortController = new AbortController,
        this.isDevEnv = en(),
        this.init()
    }
    get storeKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key"
    }
    get context() {
        return Ue(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController,
        setTimeout( () => this.abortController.abort(), C.toMiliseconds(e))
    }
}
var Ym = Object.defineProperty
  , Zm = (i, e, t) => e in i ? Ym(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , zo = (i, e, t) => Zm(i, typeof e != "symbol" ? e + "" : e, t);
class Xm extends bg {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        zo(this, "context", Xg),
        zo(this, "registerDeviceToken", async s => {
            const {clientId: r, token: n, notificationType: o, enableEncrypted: a=!1} = s
              , c = `${ef}/${this.projectId}/clients`;
            await fetch(c, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: r,
                    type: o,
                    token: n,
                    always_raw: a
                })
            })
        }
        ),
        this.logger = Se(t, this.context)
    }
}
var ew = Object.defineProperty
  , Ko = Object.getOwnPropertySymbols
  , tw = Object.prototype.hasOwnProperty
  , iw = Object.prototype.propertyIsEnumerable
  , Br = (i, e, t) => e in i ? ew(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Di = (i, e) => {
    for (var t in e || (e = {}))
        tw.call(e, t) && Br(i, t, e[t]);
    if (Ko)
        for (var t of Ko(e))
            iw.call(e, t) && Br(i, t, e[t]);
    return i
}
  , le = (i, e, t) => Br(i, typeof e != "symbol" ? e + "" : e, t);
class sw extends vg {
    constructor(e, t, s=!0) {
        super(e, t, s),
        this.core = e,
        this.logger = t,
        le(this, "context", sf),
        le(this, "storagePrefix", at),
        le(this, "storageVersion", tf),
        le(this, "events", new Map),
        le(this, "shouldPersist", !1),
        le(this, "init", async () => {
            if (!en())
                try {
                    const r = {
                        eventId: An(),
                        timestamp: Date.now(),
                        domain: this.getAppDomain(),
                        props: {
                            event: "INIT",
                            type: "",
                            properties: {
                                client_id: await this.core.crypto.getClientId(),
                                user_agent: xa(this.core.relayer.protocol, this.core.relayer.version, Tr)
                            }
                        }
                    };
                    await this.sendEvent([r])
                } catch (r) {
                    this.logger.warn(r)
                }
        }
        ),
        le(this, "createEvent", r => {
            const {event: n="ERROR", type: o="", properties: {topic: a, trace: c}} = r
              , h = An()
              , l = this.core.projectId || ""
              , u = Date.now()
              , p = Di({
                eventId: h,
                timestamp: u,
                props: {
                    event: n,
                    type: o,
                    properties: {
                        topic: a,
                        trace: c
                    }
                },
                bundleId: l,
                domain: this.getAppDomain()
            }, this.setMethods(h));
            return this.telemetryEnabled && (this.events.set(h, p),
            this.shouldPersist = !0),
            p
        }
        ),
        le(this, "getEvent", r => {
            const {eventId: n, topic: o} = r;
            if (n)
                return this.events.get(n);
            const a = Array.from(this.events.values()).find(c => c.props.properties.topic === o);
            if (a)
                return Di(Di({}, a), this.setMethods(a.eventId))
        }
        ),
        le(this, "deleteEvent", r => {
            const {eventId: n} = r;
            this.events.delete(n),
            this.shouldPersist = !0
        }
        ),
        le(this, "setEventListeners", () => {
            this.core.heartbeat.on(_i.pulse, async () => {
                this.shouldPersist && await this.persist(),
                this.events.forEach(r => {
                    C.fromMiliseconds(Date.now()) - C.fromMiliseconds(r.timestamp) > rf && (this.events.delete(r.eventId),
                    this.shouldPersist = !0)
                }
                )
            }
            )
        }
        ),
        le(this, "setMethods", r => ({
            addTrace: n => this.addTrace(r, n),
            setError: n => this.setError(r, n)
        })),
        le(this, "addTrace", (r, n) => {
            const o = this.events.get(r);
            o && (o.props.properties.trace.push(n),
            this.events.set(r, o),
            this.shouldPersist = !0)
        }
        ),
        le(this, "setError", (r, n) => {
            const o = this.events.get(r);
            o && (o.props.type = n,
            o.timestamp = Date.now(),
            this.events.set(r, o),
            this.shouldPersist = !0)
        }
        ),
        le(this, "persist", async () => {
            await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
            this.shouldPersist = !1
        }
        ),
        le(this, "restore", async () => {
            try {
                const r = await this.core.storage.getItem(this.storageKey) || [];
                if (!r.length)
                    return;
                r.forEach(n => {
                    this.events.set(n.eventId, Di(Di({}, n), this.setMethods(n.eventId)))
                }
                )
            } catch (r) {
                this.logger.warn(r)
            }
        }
        ),
        le(this, "submit", async () => {
            if (!this.telemetryEnabled || this.events.size === 0)
                return;
            const r = [];
            for (const [n,o] of this.events)
                o.props.type && r.push(o);
            if (r.length !== 0)
                try {
                    if ((await this.sendEvent(r)).ok)
                        for (const n of r)
                            this.events.delete(n.eventId),
                            this.shouldPersist = !0
                } catch (n) {
                    this.logger.warn(n)
                }
        }
        ),
        le(this, "sendEvent", async r => {
            const n = this.getAppDomain() ? "" : "&sp=desktop";
            return await fetch(`${nf}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Tr}${n}`, {
                method: "POST",
                body: JSON.stringify(r)
            })
        }
        ),
        le(this, "getAppDomain", () => Oa().url),
        this.logger = Se(t, this.context),
        this.telemetryEnabled = s,
        s ? this.restore().then(async () => {
            await this.submit(),
            this.setEventListeners()
        }
        ) : this.persist()
    }
    get storageKey() {
        return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context
    }
}
var rw = Object.defineProperty
  , Ho = Object.getOwnPropertySymbols
  , nw = Object.prototype.hasOwnProperty
  , ow = Object.prototype.propertyIsEnumerable
  , zr = (i, e, t) => e in i ? rw(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Vo = (i, e) => {
    for (var t in e || (e = {}))
        nw.call(e, t) && zr(i, t, e[t]);
    if (Ho)
        for (var t of Ho(e))
            ow.call(e, t) && zr(i, t, e[t]);
    return i
}
  , ee = (i, e, t) => zr(i, typeof e != "symbol" ? e + "" : e, t);
let aw = class Oc extends ag {
    constructor(e) {
        var t;
        super(e),
        ee(this, "protocol", pc),
        ee(this, "version", dc),
        ee(this, "name", Rr),
        ee(this, "relayUrl"),
        ee(this, "projectId"),
        ee(this, "customStoragePrefix"),
        ee(this, "events", new Ot.EventEmitter),
        ee(this, "logger"),
        ee(this, "heartbeat"),
        ee(this, "relayer"),
        ee(this, "crypto"),
        ee(this, "storage"),
        ee(this, "history"),
        ee(this, "expirer"),
        ee(this, "pairing"),
        ee(this, "verify"),
        ee(this, "echoClient"),
        ee(this, "linkModeSupportedApps"),
        ee(this, "eventClient"),
        ee(this, "initialized", !1),
        ee(this, "logChunkController"),
        ee(this, "on", (a, c) => this.events.on(a, c)),
        ee(this, "once", (a, c) => this.events.once(a, c)),
        ee(this, "off", (a, c) => this.events.off(a, c)),
        ee(this, "removeListener", (a, c) => this.events.removeListener(a, c)),
        ee(this, "dispatchEnvelope", ({topic: a, message: c, sessionExists: h}) => {
            if (!a || !c)
                return;
            const l = {
                topic: a,
                message: c,
                publishedAt: Date.now(),
                transportType: te.link_mode
            };
            this.relayer.onLinkMessageEvent(l, {
                sessionExists: h
            })
        }
        );
        const s = this.getGlobalCore(e?.customStoragePrefix);
        if (s)
            try {
                return this.customStoragePrefix = s.customStoragePrefix,
                this.logger = s.logger,
                this.heartbeat = s.heartbeat,
                this.crypto = s.crypto,
                this.history = s.history,
                this.expirer = s.expirer,
                this.storage = s.storage,
                this.relayer = s.relayer,
                this.pairing = s.pairing,
                this.verify = s.verify,
                this.echoClient = s.echoClient,
                this.linkModeSupportedApps = s.linkModeSupportedApps,
                this.eventClient = s.eventClient,
                this.initialized = s.initialized,
                this.logChunkController = s.logChunkController,
                s
            } catch (a) {
                console.warn("Failed to copy global core", a)
            }
        this.projectId = e?.projectId,
        this.relayUrl = e?.relayUrl || fc,
        this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const r = Ts({
            level: typeof e?.logger == "string" && e.logger ? e.logger : Sg.logger,
            name: Rr
        })
          , {logger: n, chunkLoggerController: o} = th({
            opts: r,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = o,
        (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
            var a, c;
            (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }))
        }
        ),
        this.logger = Se(n, this.name),
        this.heartbeat = new ih,
        this.crypto = new qy(this,this.logger,e?.keychain),
        this.history = new Hm(this,this.logger),
        this.expirer = new Gm(this,this.logger),
        this.storage = e != null && e.storage ? e.storage : new rg(Vo(Vo({}, Og), e?.storageOptions)),
        this.relayer = new am({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new Bm(this,this.logger),
        this.verify = new Qm(this,this.logger,this.storage),
        this.echoClient = new Xm(this.projectId || "",this.logger),
        this.linkModeSupportedApps = [],
        this.eventClient = new sw(this,this.logger,e?.telemetryEnabled),
        this.setGlobalCore(this)
    }
    static async init(e) {
        const t = new Oc(e);
        await t.initialize();
        const s = await t.crypto.getClientId();
        return await t.storage.setItem(Lg, s),
        t
    }
    get context() {
        return Ue(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async getLogsBlob() {
        var e;
        return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
            clientId: await this.crypto.getClientId()
        })
    }
    async addLinkModeSupportedApp(e) {
        this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e),
        await this.storage.setItem(Po, this.linkModeSupportedApps))
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.linkModeSupportedApps = await this.storage.getItem(Po) || [],
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
            this.logger.error(e.message),
            e
        }
    }
    getGlobalCore(e="") {
        try {
            if (this.isGlobalCoreDisabled())
                return;
            const t = `_walletConnectCore_${e}`
              , s = `${t}_count`;
            return globalThis[s] = (globalThis[s] || 0) + 1,
            globalThis[s] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[s]} times.`),
            globalThis[t]
        } catch (t) {
            console.warn("Failed to get global WalletConnect core", t);
            return
        }
    }
    setGlobalCore(e) {
        var t;
        try {
            if (this.isGlobalCoreDisabled())
                return;
            const s = `_walletConnectCore_${((t = e.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
            globalThis[s] = e
        } catch (s) {
            console.warn("Failed to set global WalletConnect core", s)
        }
    }
    isGlobalCoreDisabled() {
        try {
            return typeof Li < "u" && $g.DISABLE_GLOBAL_CORE === "true"
        } catch {
            return !0
        }
    }
}
;
const cw = aw
  , xc = "wc"
  , Ac = 2
  , Cc = "client"
  , hn = `${xc}@${Ac}:${Cc}:`
  , lr = {
    name: Cc,
    logger: "error"
}
  , Fo = "WALLETCONNECT_DEEPLINK_CHOICE"
  , hw = "proposal"
  , Go = "Proposal expired"
  , lw = "session"
  , Yt = C.SEVEN_DAYS
  , uw = "engine"
  , ue = {
    wc_sessionPropose: {
        req: {
            ttl: C.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        },
        reject: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1120
        },
        autoReject: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1121
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: C.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: C.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: C.ONE_DAY,
            prompt: !1,
            tag: 1115
        }
    },
    wc_sessionAuthenticate: {
        req: {
            ttl: C.ONE_HOUR,
            prompt: !0,
            tag: 1116
        },
        res: {
            ttl: C.ONE_HOUR,
            prompt: !1,
            tag: 1117
        },
        reject: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1118
        },
        autoReject: {
            ttl: C.FIVE_MINUTES,
            prompt: !1,
            tag: 1119
        }
    }
}
  , ur = {
    min: C.FIVE_MINUTES,
    max: C.SEVEN_DAYS
}
  , it = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , Wo = {
    eth_sendTransaction: {
        key: ""
    },
    eth_sendRawTransaction: {
        key: ""
    },
    wallet_sendCalls: {
        key: ""
    },
    solana_signTransaction: {
        key: "signature"
    },
    solana_signAllTransactions: {
        key: "transactions"
    },
    solana_signAndSendTransaction: {
        key: "signature"
    }
}
  , pw = "request"
  , dw = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"]
  , gw = "wc"
  , fw = "auth"
  , yw = "authKeys"
  , mw = "pairingTopics"
  , ww = "requests"
  , Ks = `${gw}@${1.5}:${fw}:`
  , _s = `${Ks}:PUB_KEY`;
var bw = Object.defineProperty
  , vw = Object.defineProperties
  , Ew = Object.getOwnPropertyDescriptors
  , Jo = Object.getOwnPropertySymbols
  , Iw = Object.prototype.hasOwnProperty
  , _w = Object.prototype.propertyIsEnumerable
  , Kr = (i, e, t) => e in i ? bw(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Z = (i, e) => {
    for (var t in e || (e = {}))
        Iw.call(e, t) && Kr(i, t, e[t]);
    if (Jo)
        for (var t of Jo(e))
            _w.call(e, t) && Kr(i, t, e[t]);
    return i
}
  , Pe = (i, e) => vw(i, Ew(e))
  , E = (i, e, t) => Kr(i, typeof e != "symbol" ? e + "" : e, t);
class Pw extends Pg {
    constructor(e) {
        super(e),
        E(this, "name", uw),
        E(this, "events", new Zr),
        E(this, "initialized", !1),
        E(this, "requestQueue", {
            state: it.idle,
            queue: []
        }),
        E(this, "sessionRequestQueue", {
            state: it.idle,
            queue: []
        }),
        E(this, "requestQueueDelay", C.ONE_SECOND),
        E(this, "expectedPairingMethodMap", new Map),
        E(this, "recentlyDeletedMap", new Map),
        E(this, "recentlyDeletedLimit", 200),
        E(this, "relayMessageCache", []),
        E(this, "pendingSessions", new Map),
        E(this, "init", async () => {
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            await this.registerLinkModeListeners(),
            this.client.core.pairing.register({
                methods: Object.keys(ue)
            }),
            this.initialized = !0,
            setTimeout(async () => {
                await this.processPendingMessageEvents(),
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }
            , C.toMiliseconds(this.requestQueueDelay)))
        }
        ),
        E(this, "connect", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            const s = Pe(Z({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(s),
            s.optionalNamespaces = id(s.requiredNamespaces, s.optionalNamespaces),
            s.requiredNamespaces = {};
            const {pairingTopic: r, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: h} = s;
            let l = r, u, p = !1;
            try {
                if (l) {
                    const _ = this.client.core.pairing.pairings.get(l);
                    this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),
                    p = _.active
                }
            } catch (_) {
                throw this.client.logger.error(`connect() -> pairing.get(${l}) failed`),
                _
            }
            if (!l || !p) {
                const {topic: _, uri: $} = await this.client.core.pairing.create();
                l = _,
                u = $
            }
            if (!l) {
                const {message: _} = A("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
                throw new Error(_)
            }
            const d = await this.client.core.crypto.generateKeyPair()
              , g = ue.wc_sessionPropose.req.ttl || C.FIVE_MINUTES
              , y = ce(g)
              , f = Pe(Z(Z({
                requiredNamespaces: n,
                optionalNamespaces: o,
                relays: h ?? [{
                    protocol: gc
                }],
                proposer: {
                    publicKey: d,
                    metadata: this.client.metadata
                },
                expiryTimestamp: y,
                pairingTopic: l
            }, a && {
                sessionProperties: a
            }), c && {
                scopedProperties: c
            }), {
                id: bt()
            })
              , w = J("session_connect", f.id)
              , {reject: m, resolve: v, done: x} = Rt(g, Go)
              , N = ({id: _}) => {
                _ === f.id && (this.client.events.off("proposal_expire", N),
                this.pendingSessions.delete(f.id),
                this.events.emit(w, {
                    error: {
                        message: Go,
                        code: 0
                    }
                }))
            }
            ;
            return this.client.events.on("proposal_expire", N),
            this.events.once(w, ({error: _, session: $}) => {
                this.client.events.off("proposal_expire", N),
                _ ? m(_) : $ && v($)
            }
            ),
            await this.sendRequest({
                topic: l,
                method: "wc_sessionPropose",
                params: f,
                throwOnFailedPublish: !0,
                clientRpcId: f.id
            }),
            await this.setProposal(f.id, f),
            {
                uri: u,
                approval: x
            }
        }
        ),
        E(this, "pair", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                return await this.client.core.pairing.pair(t)
            } catch (s) {
                throw this.client.logger.error("pair() failed"),
                s
            }
        }
        ),
        E(this, "approve", async t => {
            var s, r, n;
            const o = this.client.core.eventClient.createEvent({
                properties: {
                    topic: (s = t?.id) == null ? void 0 : s.toString(),
                    trace: [Ge.session_approve_started]
                }
            });
            try {
                this.isInitialized(),
                await this.confirmOnlineStateOrThrow()
            } catch (b) {
                throw o.setError(Ct.no_internet_connection),
                b
            }
            try {
                await this.isValidProposalId(t?.id)
            } catch (b) {
                throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`),
                o.setError(Ct.proposal_not_found),
                b
            }
            try {
                await this.isValidApprove(t)
            } catch (b) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"),
                o.setError(Ct.session_approve_namespace_validation_failure),
                b
            }
            const {id: a, relayProtocol: c, namespaces: h, sessionProperties: l, scopedProperties: u, sessionConfig: p} = t
              , d = this.client.proposal.get(a);
            this.client.core.eventClient.deleteEvent({
                eventId: o.eventId
            });
            const {pairingTopic: g, proposer: y, requiredNamespaces: f, optionalNamespaces: w} = d;
            let m = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
                topic: g
            });
            m || (m = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({
                type: Ge.session_approve_started,
                properties: {
                    topic: g,
                    trace: [Ge.session_approve_started, Ge.session_namespaces_validation_success]
                }
            }));
            const v = await this.client.core.crypto.generateKeyPair()
              , x = y.publicKey
              , N = await this.client.core.crypto.generateSharedKey(v, x)
              , _ = Z(Z(Z({
                relay: {
                    protocol: c ?? "irn"
                },
                namespaces: h,
                controller: {
                    publicKey: v,
                    metadata: this.client.metadata
                },
                expiry: ce(Yt)
            }, l && {
                sessionProperties: l
            }), u && {
                scopedProperties: u
            }), p && {
                sessionConfig: p
            })
              , $ = te.relay;
            m.addTrace(Ge.subscribing_session_topic);
            try {
                await this.client.core.relayer.subscribe(N, {
                    transportType: $
                })
            } catch (b) {
                throw m.setError(Ct.subscribe_session_topic_failure),
                b
            }
            m.addTrace(Ge.subscribe_session_topic_success);
            const R = Pe(Z({}, _), {
                topic: N,
                requiredNamespaces: f,
                optionalNamespaces: w,
                pairingTopic: g,
                acknowledged: !1,
                self: _.controller,
                peer: {
                    publicKey: y.publicKey,
                    metadata: y.metadata
                },
                controller: v,
                transportType: te.relay
            });
            await this.client.session.set(N, R),
            m.addTrace(Ge.store_session);
            try {
                m.addTrace(Ge.publishing_session_settle),
                await this.sendRequest({
                    topic: N,
                    method: "wc_sessionSettle",
                    params: _,
                    throwOnFailedPublish: !0
                }).catch(b => {
                    throw m?.setError(Ct.session_settle_publish_failure),
                    b
                }
                ),
                m.addTrace(Ge.session_settle_publish_success),
                m.addTrace(Ge.publishing_session_approve),
                await this.sendResult({
                    id: a,
                    topic: g,
                    result: {
                        relay: {
                            protocol: c ?? "irn"
                        },
                        responderPublicKey: v
                    },
                    throwOnFailedPublish: !0
                }).catch(b => {
                    throw m?.setError(Ct.session_approve_publish_failure),
                    b
                }
                ),
                m.addTrace(Ge.session_approve_publish_success)
            } catch (b) {
                throw this.client.logger.error(b),
                this.client.session.delete(N, Q("USER_DISCONNECTED")),
                await this.client.core.relayer.unsubscribe(N),
                b
            }
            return this.client.core.eventClient.deleteEvent({
                eventId: m.eventId
            }),
            await this.client.core.pairing.updateMetadata({
                topic: g,
                metadata: y.metadata
            }),
            await this.client.proposal.delete(a, Q("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: g
            }),
            await this.setExpiry(N, ce(Yt)),
            {
                topic: N,
                acknowledged: () => Promise.resolve(this.client.session.get(N))
            }
        }
        ),
        E(this, "reject", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidReject(t)
            } catch (o) {
                throw this.client.logger.error("reject() -> isValidReject() failed"),
                o
            }
            const {id: s, reason: r} = t;
            let n;
            try {
                n = this.client.proposal.get(s).pairingTopic
            } catch (o) {
                throw this.client.logger.error(`reject() -> proposal.get(${s}) failed`),
                o
            }
            n && (await this.sendError({
                id: s,
                topic: n,
                error: r,
                rpcOpts: ue.wc_sessionPropose.reject
            }),
            await this.client.proposal.delete(s, Q("USER_DISCONNECTED")))
        }
        ),
        E(this, "update", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidUpdate(t)
            } catch (u) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"),
                u
            }
            const {topic: s, namespaces: r} = t
              , {done: n, resolve: o, reject: a} = Rt()
              , c = bt()
              , h = li().toString()
              , l = this.client.session.get(s).namespaces;
            return this.events.once(J("session_update", c), ({error: u}) => {
                u ? a(u) : o()
            }
            ),
            await this.client.session.update(s, {
                namespaces: r
            }),
            await this.sendRequest({
                topic: s,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: r
                },
                throwOnFailedPublish: !0,
                clientRpcId: c,
                relayRpcId: h
            }).catch(u => {
                this.client.logger.error(u),
                this.client.session.update(s, {
                    namespaces: l
                }),
                a(u)
            }
            ),
            {
                acknowledged: n
            }
        }
        ),
        E(this, "extend", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidExtend(t)
            } catch (c) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"),
                c
            }
            const {topic: s} = t
              , r = bt()
              , {done: n, resolve: o, reject: a} = Rt();
            return this.events.once(J("session_extend", r), ({error: c}) => {
                c ? a(c) : o()
            }
            ),
            await this.setExpiry(s, ce(Yt)),
            this.sendRequest({
                topic: s,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: r,
                throwOnFailedPublish: !0
            }).catch(c => {
                a(c)
            }
            ),
            {
                acknowledged: n
            }
        }
        ),
        E(this, "request", async t => {
            this.isInitialized();
            try {
                await this.isValidRequest(t)
            } catch (w) {
                throw this.client.logger.error("request() -> isValidRequest() failed"),
                w
            }
            const {chainId: s, request: r, topic: n, expiry: o=ue.wc_sessionRequest.req.ttl} = t
              , a = this.client.session.get(n);
            a?.transportType === te.relay && await this.confirmOnlineStateOrThrow();
            const c = bt()
              , h = li().toString()
              , {done: l, resolve: u, reject: p} = Rt(o, "Request expired. Please try again.");
            this.events.once(J("session_request", c), ({error: w, result: m}) => {
                w ? p(w) : u(m)
            }
            );
            const d = "wc_sessionRequest"
              , g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
            if (g)
                return await this.sendRequest({
                    clientRpcId: c,
                    relayRpcId: h,
                    topic: n,
                    method: d,
                    params: {
                        request: Pe(Z({}, r), {
                            expiryTimestamp: ce(o)
                        }),
                        chainId: s
                    },
                    expiry: o,
                    throwOnFailedPublish: !0,
                    appLink: g
                }).catch(w => p(w)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: r,
                    chainId: s,
                    id: c
                }),
                await l();
            const y = {
                request: Pe(Z({}, r), {
                    expiryTimestamp: ce(o)
                }),
                chainId: s
            }
              , f = this.shouldSetTVF(d, y);
            return await Promise.all([new Promise(async w => {
                await this.sendRequest(Z({
                    clientRpcId: c,
                    relayRpcId: h,
                    topic: n,
                    method: d,
                    params: y,
                    expiry: o,
                    throwOnFailedPublish: !0
                }, f && {
                    tvf: this.getTVFParams(c, y)
                })).catch(m => p(m)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: r,
                    chainId: s,
                    id: c
                }),
                w()
            }
            ), new Promise(async w => {
                var m;
                if (!((m = a.sessionConfig) != null && m.disableDeepLink)) {
                    const v = await fl(this.client.core.storage, Fo);
                    await pl({
                        id: c,
                        topic: n,
                        wcDeepLink: v
                    })
                }
                w()
            }
            ), l()]).then(w => w[2])
        }
        ),
        E(this, "respond", async t => {
            this.isInitialized(),
            await this.isValidRespond(t);
            const {topic: s, response: r} = t
              , {id: n} = r
              , o = this.client.session.get(s);
            o.transportType === te.relay && await this.confirmOnlineStateOrThrow();
            const a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
            pt(r) ? await this.sendResult({
                id: n,
                topic: s,
                result: r.result,
                throwOnFailedPublish: !0,
                appLink: a
            }) : rt(r) && await this.sendError({
                id: n,
                topic: s,
                error: r.error,
                appLink: a
            }),
            this.cleanupAfterResponse(t)
        }
        ),
        E(this, "ping", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidPing(t)
            } catch (r) {
                throw this.client.logger.error("ping() -> isValidPing() failed"),
                r
            }
            const {topic: s} = t;
            if (this.client.session.keys.includes(s)) {
                const r = bt()
                  , n = li().toString()
                  , {done: o, resolve: a, reject: c} = Rt();
                this.events.once(J("session_ping", r), ({error: h}) => {
                    h ? c(h) : a()
                }
                ),
                await Promise.all([this.sendRequest({
                    topic: s,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: r,
                    relayRpcId: n
                }), o()])
            } else
                this.client.core.pairing.pairings.keys.includes(s) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),
                await this.client.core.pairing.ping({
                    topic: s
                }))
        }
        ),
        E(this, "emit", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow(),
            await this.isValidEmit(t);
            const {topic: s, event: r, chainId: n} = t
              , o = li().toString()
              , a = bt();
            await this.sendRequest({
                topic: s,
                method: "wc_sessionEvent",
                params: {
                    event: r,
                    chainId: n
                },
                throwOnFailedPublish: !0,
                relayRpcId: o,
                clientRpcId: a
            })
        }
        ),
        E(this, "disconnect", async t => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow(),
            await this.isValidDisconnect(t);
            const {topic: s} = t;
            if (this.client.session.keys.includes(s))
                await this.sendRequest({
                    topic: s,
                    method: "wc_sessionDelete",
                    params: Q("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }),
                await this.deleteSession({
                    topic: s,
                    emitEvent: !1
                });
            else if (this.client.core.pairing.pairings.keys.includes(s))
                await this.client.core.pairing.disconnect({
                    topic: s
                });
            else {
                const {message: r} = A("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
                throw new Error(r)
            }
        }
        ),
        E(this, "find", t => (this.isInitialized(),
        this.client.session.getAll().filter(s => nd(s, t)))),
        E(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()),
        E(this, "authenticate", async (t, s) => {
            var r;
            this.isInitialized(),
            this.isValidAuthenticate(t);
            const n = s && this.client.core.linkModeSupportedApps.includes(s) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode)
              , o = n ? te.link_mode : te.relay;
            o === te.relay && await this.confirmOnlineStateOrThrow();
            const {chains: a, statement: c="", uri: h, domain: l, nonce: u, type: p, exp: d, nbf: g, methods: y=[], expiry: f} = t
              , w = [...t.resources || []]
              , {topic: m, uri: v} = await this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
                transportType: o
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: m,
                    uri: v
                }
            });
            const x = await this.client.core.crypto.generateKeyPair()
              , N = bs(x);
            if (await Promise.all([this.client.auth.authKeys.set(_s, {
                responseTopic: N,
                publicKey: x
            }), this.client.auth.pairingTopics.set(N, {
                topic: N,
                pairingTopic: m
            })]),
            await this.client.core.relayer.subscribe(N, {
                transportType: o
            }),
            this.client.logger.info(`sending request to new pairing topic: ${m}`),
            y.length > 0) {
                const {namespace: P} = gi(a[0]);
                let M = au(P, "request", y);
                ws(w) && (M = hu(M, w.pop())),
                w.push(M)
            }
            const _ = f && f > ue.wc_sessionAuthenticate.req.ttl ? f : ue.wc_sessionAuthenticate.req.ttl
              , $ = {
                authPayload: {
                    type: p ?? "caip122",
                    chains: a,
                    statement: c,
                    aud: h,
                    domain: l,
                    version: "1",
                    nonce: u,
                    iat: new Date().toISOString(),
                    exp: d,
                    nbf: g,
                    resources: w
                },
                requester: {
                    publicKey: x,
                    metadata: this.client.metadata
                },
                expiryTimestamp: ce(_)
            }
              , R = {
                eip155: {
                    chains: a,
                    methods: [...new Set(["personal_sign", ...y])],
                    events: ["chainChanged", "accountsChanged"]
                }
            }
              , b = {
                requiredNamespaces: {},
                optionalNamespaces: R,
                relays: [{
                    protocol: "irn"
                }],
                pairingTopic: m,
                proposer: {
                    publicKey: x,
                    metadata: this.client.metadata
                },
                expiryTimestamp: ce(ue.wc_sessionPropose.req.ttl),
                id: bt()
            }
              , {done: k, resolve: q, reject: D} = Rt(_, "Request expired")
              , U = bt()
              , I = J("session_connect", b.id)
              , O = J("session_request", U)
              , S = async ({error: P, session: M}) => {
                this.events.off(O, T),
                P ? D(P) : M && q({
                    session: M
                })
            }
              , T = async P => {
                var M, B, z;
                if (await this.deletePendingAuthRequest(U, {
                    message: "fulfilled",
                    code: 0
                }),
                P.error) {
                    const ae = Q("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                    return P.error.code === ae.code ? void 0 : (this.events.off(I, S),
                    D(P.error.message))
                }
                await this.deleteProposal(b.id),
                this.events.off(I, S);
                const {cacaos: X, responder: W} = P.result
                  , se = []
                  , he = [];
                for (const ae of X) {
                    await kn({
                        cacao: ae,
                        projectId: this.client.core.projectId
                    }) || (this.client.logger.error(ae, "Signature verification failed"),
                    D(Q("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                    const {p: At} = ae
                      , ct = ws(At.resources)
                      , Xe = [Er(At.iss)]
                      , ht = Os(At.iss);
                    if (ct) {
                        const Ft = Mn(ct)
                          , rs = Un(ct);
                        se.push(...Ft),
                        Xe.push(...rs)
                    }
                    for (const Ft of Xe)
                        he.push(`${Ft}:${ht}`)
                }
                const Ie = await this.client.core.crypto.generateSharedKey(x, W.publicKey);
                let oe;
                se.length > 0 && (oe = {
                    topic: Ie,
                    acknowledged: !0,
                    self: {
                        publicKey: x,
                        metadata: this.client.metadata
                    },
                    peer: W,
                    controller: W.publicKey,
                    expiry: ce(Yt),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: m,
                    namespaces: lo([...new Set(se)], [...new Set(he)]),
                    transportType: o
                },
                await this.client.core.relayer.subscribe(Ie, {
                    transportType: o
                }),
                await this.client.session.set(Ie, oe),
                m && await this.client.core.pairing.updateMetadata({
                    topic: m,
                    metadata: W.metadata
                }),
                oe = this.client.session.get(Ie)),
                (M = this.client.metadata.redirect) != null && M.linkMode && (B = W.metadata.redirect) != null && B.linkMode && (z = W.metadata.redirect) != null && z.universal && s && (this.client.core.addLinkModeSupportedApp(W.metadata.redirect.universal),
                this.client.session.update(Ie, {
                    transportType: te.link_mode
                })),
                q({
                    auths: X,
                    session: oe
                })
            }
            ;
            this.events.once(I, S),
            this.events.once(O, T);
            let j;
            try {
                if (n) {
                    const P = kt("wc_sessionAuthenticate", $, U);
                    this.client.core.history.set(m, P);
                    const M = await this.client.core.crypto.encode("", P, {
                        type: is,
                        encoding: _t
                    });
                    j = ls(s, m, M)
                } else
                    await Promise.all([this.sendRequest({
                        topic: m,
                        method: "wc_sessionAuthenticate",
                        params: $,
                        expiry: t.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: U
                    }), this.sendRequest({
                        topic: m,
                        method: "wc_sessionPropose",
                        params: b,
                        expiry: ue.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: b.id
                    })])
            } catch (P) {
                throw this.events.off(I, S),
                this.events.off(O, T),
                P
            }
            return await this.setProposal(b.id, b),
            await this.setAuthRequest(U, {
                request: Pe(Z({}, $), {
                    verifyContext: {}
                }),
                pairingTopic: m,
                transportType: o
            }),
            {
                uri: j ?? v,
                response: k
            }
        }
        ),
        E(this, "approveSessionAuthenticate", async t => {
            const {id: s, auths: r} = t
              , n = this.client.core.eventClient.createEvent({
                properties: {
                    topic: s.toString(),
                    trace: [Nt.authenticated_session_approve_started]
                }
            });
            try {
                this.isInitialized()
            } catch (f) {
                throw n.setError(qi.no_internet_connection),
                f
            }
            const o = this.getPendingAuthRequest(s);
            if (!o)
                throw n.setError(qi.authenticated_session_pending_request_not_found),
                new Error(`Could not find pending auth request with id ${s}`);
            const a = o.transportType || te.relay;
            a === te.relay && await this.confirmOnlineStateOrThrow();
            const c = o.requester.publicKey
              , h = await this.client.core.crypto.generateKeyPair()
              , l = bs(c)
              , u = {
                type: mt,
                receiverPublicKey: c,
                senderPublicKey: h
            }
              , p = []
              , d = [];
            for (const f of r) {
                if (!await kn({
                    cacao: f,
                    projectId: this.client.core.projectId
                })) {
                    n.setError(qi.invalid_cacao);
                    const N = Q("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw await this.sendError({
                        id: s,
                        topic: l,
                        error: N,
                        encodeOpts: u
                    }),
                    new Error(N.message)
                }
                n.addTrace(Nt.cacaos_verified);
                const {p: w} = f
                  , m = ws(w.resources)
                  , v = [Er(w.iss)]
                  , x = Os(w.iss);
                if (m) {
                    const N = Mn(m)
                      , _ = Un(m);
                    p.push(...N),
                    v.push(..._)
                }
                for (const N of v)
                    d.push(`${N}:${x}`)
            }
            const g = await this.client.core.crypto.generateSharedKey(h, c);
            n.addTrace(Nt.create_authenticated_session_topic);
            let y;
            if (p?.length > 0) {
                y = {
                    topic: g,
                    acknowledged: !0,
                    self: {
                        publicKey: h,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: c,
                        metadata: o.requester.metadata
                    },
                    controller: c,
                    expiry: ce(Yt),
                    authentication: r,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: o.pairingTopic,
                    namespaces: lo([...new Set(p)], [...new Set(d)]),
                    transportType: a
                },
                n.addTrace(Nt.subscribing_authenticated_session_topic);
                try {
                    await this.client.core.relayer.subscribe(g, {
                        transportType: a
                    })
                } catch (f) {
                    throw n.setError(qi.subscribe_authenticated_session_topic_failure),
                    f
                }
                n.addTrace(Nt.subscribe_authenticated_session_topic_success),
                await this.client.session.set(g, y),
                n.addTrace(Nt.store_authenticated_session),
                await this.client.core.pairing.updateMetadata({
                    topic: o.pairingTopic,
                    metadata: o.requester.metadata
                })
            }
            n.addTrace(Nt.publishing_authenticated_session_approve);
            try {
                await this.sendResult({
                    topic: l,
                    id: s,
                    result: {
                        cacaos: r,
                        responder: {
                            publicKey: h,
                            metadata: this.client.metadata
                        }
                    },
                    encodeOpts: u,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
                })
            } catch (f) {
                throw n.setError(qi.authenticated_session_approve_publish_failure),
                f
            }
            return await this.client.auth.requests.delete(s, {
                message: "fulfilled",
                code: 0
            }),
            await this.client.core.pairing.activate({
                topic: o.pairingTopic
            }),
            this.client.core.eventClient.deleteEvent({
                eventId: n.eventId
            }),
            {
                session: y
            }
        }
        ),
        E(this, "rejectSessionAuthenticate", async t => {
            this.isInitialized();
            const {id: s, reason: r} = t
              , n = this.getPendingAuthRequest(s);
            if (!n)
                throw new Error(`Could not find pending auth request with id ${s}`);
            n.transportType === te.relay && await this.confirmOnlineStateOrThrow();
            const o = n.requester.publicKey
              , a = await this.client.core.crypto.generateKeyPair()
              , c = bs(o)
              , h = {
                type: mt,
                receiverPublicKey: o,
                senderPublicKey: a
            };
            await this.sendError({
                id: s,
                topic: c,
                error: r,
                encodeOpts: h,
                rpcOpts: ue.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType)
            }),
            await this.client.auth.requests.delete(s, {
                message: "rejected",
                code: 0
            }),
            await this.client.proposal.delete(s, Q("USER_DISCONNECTED"))
        }
        ),
        E(this, "formatAuthMessage", t => {
            this.isInitialized();
            const {request: s, iss: r} = t;
            return Ua(s, r)
        }
        ),
        E(this, "processRelayMessageCache", () => {
            setTimeout(async () => {
                if (this.relayMessageCache.length !== 0)
                    for (; this.relayMessageCache.length > 0; )
                        try {
                            const t = this.relayMessageCache.shift();
                            t && await this.onRelayMessage(t)
                        } catch (t) {
                            this.client.logger.error(t)
                        }
            }
            , 50)
        }
        ),
        E(this, "cleanupDuplicatePairings", async t => {
            if (t.pairingTopic)
                try {
                    const s = this.client.core.pairing.pairings.get(t.pairingTopic)
                      , r = this.client.core.pairing.pairings.getAll().filter(n => {
                        var o, a;
                        return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === t.peer.metadata.url && n.topic && n.topic !== s.topic
                    }
                    );
                    if (r.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),
                    await Promise.all(r.map(n => this.client.core.pairing.disconnect({
                        topic: n.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (s) {
                    this.client.logger.error(s)
                }
        }
        ),
        E(this, "deleteSession", async t => {
            var s;
            const {topic: r, expirerHasDeleted: n=!1, emitEvent: o=!0, id: a=0} = t
              , {self: c} = this.client.session.get(r);
            await this.client.core.relayer.unsubscribe(r),
            await this.client.session.delete(r, Q("USER_DISCONNECTED")),
            this.addToRecentlyDeleted(r, "session"),
            this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey),
            this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r),
            n || this.client.core.expirer.del(r),
            this.client.core.storage.removeItem(Fo).catch(h => this.client.logger.warn(h)),
            this.getPendingSessionRequests().forEach(h => {
                h.topic === r && this.deletePendingSessionRequest(h.id, Q("USER_DISCONNECTED"))
            }
            ),
            r === ((s = this.sessionRequestQueue.queue[0]) == null ? void 0 : s.topic) && (this.sessionRequestQueue.state = it.idle),
            o && this.client.events.emit("session_delete", {
                id: a,
                topic: r
            })
        }
        ),
        E(this, "deleteProposal", async (t, s) => {
            if (s)
                try {
                    const r = this.client.proposal.get(t);
                    this.client.core.eventClient.getEvent({
                        topic: r.pairingTopic
                    })?.setError(Ct.proposal_expired)
                } catch {}
            await Promise.all([this.client.proposal.delete(t, Q("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.addToRecentlyDeleted(t, "proposal")
        }
        ),
        E(this, "deletePendingSessionRequest", async (t, s, r=!1) => {
            await Promise.all([this.client.pendingRequest.delete(t, s), r ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.addToRecentlyDeleted(t, "request"),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(n => n.id !== t),
            r && (this.sessionRequestQueue.state = it.idle,
            this.client.events.emit("session_request_expire", {
                id: t
            }))
        }
        ),
        E(this, "deletePendingAuthRequest", async (t, s, r=!1) => {
            await Promise.all([this.client.auth.requests.delete(t, s), r ? Promise.resolve() : this.client.core.expirer.del(t)])
        }
        ),
        E(this, "setExpiry", async (t, s) => {
            this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, s),
            await this.client.session.update(t, {
                expiry: s
            }))
        }
        ),
        E(this, "setProposal", async (t, s) => {
            this.client.core.expirer.set(t, ce(ue.wc_sessionPropose.req.ttl)),
            await this.client.proposal.set(t, s)
        }
        ),
        E(this, "setAuthRequest", async (t, s) => {
            const {request: r, pairingTopic: n, transportType: o=te.relay} = s;
            this.client.core.expirer.set(t, r.expiryTimestamp),
            await this.client.auth.requests.set(t, {
                authPayload: r.authPayload,
                requester: r.requester,
                expiryTimestamp: r.expiryTimestamp,
                id: t,
                pairingTopic: n,
                verifyContext: r.verifyContext,
                transportType: o
            })
        }
        ),
        E(this, "setPendingSessionRequest", async t => {
            const {id: s, topic: r, params: n, verifyContext: o} = t
              , a = n.request.expiryTimestamp || ce(ue.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(s, a),
            await this.client.pendingRequest.set(s, {
                id: s,
                topic: r,
                params: n,
                verifyContext: o
            })
        }
        ),
        E(this, "sendRequest", async t => {
            const {topic: s, method: r, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: h, appLink: l, tvf: u} = t
              , p = kt(r, n, c);
            let d;
            const g = !!l;
            try {
                const w = g ? _t : Qe;
                d = await this.client.core.crypto.encode(s, p, {
                    encoding: w
                })
            } catch (w) {
                throw await this.cleanup(),
                this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${s} failed`),
                w
            }
            let y;
            if (dw.includes(r)) {
                const w = nt(JSON.stringify(p))
                  , m = nt(d);
                y = await this.client.core.verify.register({
                    id: m,
                    decryptedId: w
                })
            }
            const f = ue[r].req;
            if (f.attestation = y,
            o && (f.ttl = o),
            a && (f.id = a),
            this.client.core.history.set(s, p),
            g) {
                const w = ls(l, s, d);
                await L.Linking.openURL(w, this.client.name)
            } else {
                const w = ue[r].req;
                o && (w.ttl = o),
                a && (w.id = a),
                w.tvf = Pe(Z({}, u), {
                    correlationId: p.id
                }),
                h ? (w.internal = Pe(Z({}, w.internal), {
                    throwOnFailedPublish: !0
                }),
                await this.client.core.relayer.publish(s, d, w)) : this.client.core.relayer.publish(s, d, w).catch(m => this.client.logger.error(m))
            }
            return p.id
        }
        ),
        E(this, "sendResult", async t => {
            const {id: s, topic: r, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c} = t
              , h = qs(s, n);
            let l;
            const u = c && typeof (L == null ? void 0 : L.Linking) < "u";
            try {
                const g = u ? _t : Qe;
                l = await this.client.core.crypto.encode(r, h, Pe(Z({}, a || {}), {
                    encoding: g
                }))
            } catch (g) {
                throw await this.cleanup(),
                this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`),
                g
            }
            let p, d;
            try {
                p = await this.client.core.history.get(r, s);
                const g = p.request;
                try {
                    this.shouldSetTVF(g.method, g.params) && (d = this.getTVFParams(s, g.params, n))
                } catch (y) {
                    this.client.logger.warn("sendResult() -> getTVFParams() failed", y)
                }
            } catch (g) {
                throw this.client.logger.error(`sendResult() -> history.get(${r}, ${s}) failed`),
                g
            }
            if (u) {
                const g = ls(c, r, l);
                await L.Linking.openURL(g, this.client.name)
            } else {
                const g = p.request.method
                  , y = ue[g].res;
                y.tvf = Pe(Z({}, d), {
                    correlationId: s
                }),
                o ? (y.internal = Pe(Z({}, y.internal), {
                    throwOnFailedPublish: !0
                }),
                await this.client.core.relayer.publish(r, l, y)) : this.client.core.relayer.publish(r, l, y).catch(f => this.client.logger.error(f))
            }
            await this.client.core.history.resolve(h)
        }
        ),
        E(this, "sendError", async t => {
            const {id: s, topic: r, error: n, encodeOpts: o, rpcOpts: a, appLink: c} = t
              , h = da(s, n);
            let l;
            const u = c && typeof (L == null ? void 0 : L.Linking) < "u";
            try {
                const d = u ? _t : Qe;
                l = await this.client.core.crypto.encode(r, h, Pe(Z({}, o || {}), {
                    encoding: d
                }))
            } catch (d) {
                throw await this.cleanup(),
                this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`),
                d
            }
            let p;
            try {
                p = await this.client.core.history.get(r, s)
            } catch (d) {
                throw this.client.logger.error(`sendError() -> history.get(${r}, ${s}) failed`),
                d
            }
            if (u) {
                const d = ls(c, r, l);
                await L.Linking.openURL(d, this.client.name)
            } else {
                const d = p.request.method
                  , g = a || ue[d].res;
                this.client.core.relayer.publish(r, l, g)
            }
            await this.client.core.history.resolve(h)
        }
        ),
        E(this, "cleanup", async () => {
            const t = []
              , s = [];
            this.client.session.getAll().forEach(r => {
                let n = !1;
                It(r.expiry) && (n = !0),
                this.client.core.crypto.keychain.has(r.topic) || (n = !0),
                n && t.push(r.topic)
            }
            ),
            this.client.proposal.getAll().forEach(r => {
                It(r.expiryTimestamp) && s.push(r.id)
            }
            ),
            await Promise.all([...t.map(r => this.deleteSession({
                topic: r
            })), ...s.map(r => this.deleteProposal(r))])
        }
        ),
        E(this, "onProviderMessageEvent", async t => {
            !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t) : await this.onRelayMessage(t)
        }
        ),
        E(this, "onRelayEventRequest", async t => {
            this.requestQueue.queue.push(t),
            await this.processRequestsQueue()
        }
        ),
        E(this, "processRequestsQueue", async () => {
            if (this.requestQueue.state === it.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = it.active;
                const t = this.requestQueue.queue.shift();
                if (t)
                    try {
                        await this.processRequest(t)
                    } catch (s) {
                        this.client.logger.warn(s)
                    }
            }
            this.requestQueue.state = it.idle
        }
        ),
        E(this, "processRequest", async t => {
            const {topic: s, payload: r, attestation: n, transportType: o, encryptedId: a} = t
              , c = r.method;
            if (!this.shouldIgnorePairingRequest({
                topic: s,
                requestMethod: c
            }))
                switch (c) {
                case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                        topic: s,
                        payload: r,
                        attestation: n,
                        encryptedId: a
                    });
                case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(s, r);
                case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(s, r);
                case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(s, r);
                case "wc_sessionPing":
                    return await this.onSessionPingRequest(s, r);
                case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(s, r);
                case "wc_sessionRequest":
                    return await this.onSessionRequest({
                        topic: s,
                        payload: r,
                        attestation: n,
                        encryptedId: a,
                        transportType: o
                    });
                case "wc_sessionEvent":
                    return await this.onSessionEventRequest(s, r);
                case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                        topic: s,
                        payload: r,
                        attestation: n,
                        encryptedId: a,
                        transportType: o
                    });
                default:
                    return this.client.logger.info(`Unsupported request method ${c}`)
                }
        }
        ),
        E(this, "onRelayEventResponse", async t => {
            const {topic: s, payload: r, transportType: n} = t
              , o = (await this.client.core.history.get(s, r.id)).request.method;
            switch (o) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(s, r, n);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(s, r);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(s, r);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(s, r);
            case "wc_sessionPing":
                return this.onSessionPingResponse(s, r);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(s, r);
            case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(s, r);
            default:
                return this.client.logger.info(`Unsupported response method ${o}`)
            }
        }
        ),
        E(this, "onRelayEventUnknownPayload", t => {
            const {topic: s} = t
              , {message: r} = A("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(r)
        }
        ),
        E(this, "shouldIgnorePairingRequest", t => {
            const {topic: s, requestMethod: r} = t
              , n = this.expectedPairingMethodMap.get(s);
            return !n || n.includes(r) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
        }
        ),
        E(this, "onSessionProposeRequest", async t => {
            const {topic: s, payload: r, attestation: n, encryptedId: o} = t
              , {params: a, id: c} = r;
            try {
                const h = this.client.core.eventClient.getEvent({
                    topic: s
                });
                this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"),
                h?.setError(dt.proposal_listener_not_found)),
                this.isValidConnect(Z({}, r.params));
                const l = a.expiryTimestamp || ce(ue.wc_sessionPropose.req.ttl)
                  , u = Z({
                    id: c,
                    pairingTopic: s,
                    expiryTimestamp: l
                }, a);
                await this.setProposal(c, u);
                const p = await this.getVerifyContext({
                    attestationId: n,
                    hash: nt(JSON.stringify(r)),
                    encryptedId: o,
                    metadata: u.proposer.metadata
                });
                h?.addTrace(st.emit_session_proposal),
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: u,
                    verifyContext: p
                })
            } catch (h) {
                await this.sendError({
                    id: c,
                    topic: s,
                    error: h,
                    rpcOpts: ue.wc_sessionPropose.autoReject
                }),
                this.client.logger.error(h)
            }
        }
        ),
        E(this, "onSessionProposeResponse", async (t, s, r) => {
            const {id: n} = s;
            if (pt(s)) {
                const {result: o} = s;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: o
                });
                const a = this.client.proposal.get(n);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: a
                });
                const c = a.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: c
                });
                const h = o.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: h
                });
                const l = await this.client.core.crypto.generateSharedKey(c, h);
                this.pendingSessions.set(n, {
                    sessionTopic: l,
                    pairingTopic: t,
                    proposalId: n,
                    publicKey: c
                });
                const u = await this.client.core.relayer.subscribe(l, {
                    transportType: r
                });
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: u
                }),
                await this.client.core.pairing.activate({
                    topic: t
                })
            } else if (rt(s)) {
                await this.client.proposal.delete(n, Q("USER_DISCONNECTED"));
                const o = J("session_connect", n);
                if (this.events.listenerCount(o) === 0)
                    throw new Error(`emitting ${o} without any listeners, 954`);
                this.events.emit(o, {
                    error: s.error
                })
            }
        }
        ),
        E(this, "onSessionSettleRequest", async (t, s) => {
            const {id: r, params: n} = s;
            try {
                this.isValidSessionSettleRequest(n);
                const {relay: o, controller: a, expiry: c, namespaces: h, sessionProperties: l, scopedProperties: u, sessionConfig: p} = s.params
                  , d = [...this.pendingSessions.values()].find(f => f.sessionTopic === t);
                if (!d)
                    return this.client.logger.error(`Pending session not found for topic ${t}`);
                const g = this.client.proposal.get(d.proposalId)
                  , y = Pe(Z(Z(Z({
                    topic: t,
                    relay: o,
                    expiry: c,
                    namespaces: h,
                    acknowledged: !0,
                    pairingTopic: d.pairingTopic,
                    requiredNamespaces: g.requiredNamespaces,
                    optionalNamespaces: g.optionalNamespaces,
                    controller: a.publicKey,
                    self: {
                        publicKey: d.publicKey,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: a.publicKey,
                        metadata: a.metadata
                    }
                }, l && {
                    sessionProperties: l
                }), u && {
                    scopedProperties: u
                }), p && {
                    sessionConfig: p
                }), {
                    transportType: te.relay
                });
                await this.client.session.set(y.topic, y),
                await this.setExpiry(y.topic, y.expiry),
                await this.client.core.pairing.updateMetadata({
                    topic: d.pairingTopic,
                    metadata: y.peer.metadata
                }),
                this.client.events.emit("session_connect", {
                    session: y
                }),
                this.events.emit(J("session_connect", d.proposalId), {
                    session: y
                }),
                this.pendingSessions.delete(d.proposalId),
                this.deleteProposal(d.proposalId, !1),
                this.cleanupDuplicatePairings(y),
                await this.sendResult({
                    id: s.id,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                })
            } catch (o) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: o
                }),
                this.client.logger.error(o)
            }
        }
        ),
        E(this, "onSessionSettleResponse", async (t, s) => {
            const {id: r} = s;
            pt(s) ? (await this.client.session.update(t, {
                acknowledged: !0
            }),
            this.events.emit(J("session_approve", r), {})) : rt(s) && (await this.client.session.delete(t, Q("USER_DISCONNECTED")),
            this.events.emit(J("session_approve", r), {
                error: s.error
            }))
        }
        ),
        E(this, "onSessionUpdateRequest", async (t, s) => {
            const {params: r, id: n} = s;
            try {
                const o = `${t}_session_update`
                  , a = Ri.get(o);
                if (a && this.isRequestOutOfSync(a, n)) {
                    this.client.logger.warn(`Discarding out of sync request - ${n}`),
                    this.sendError({
                        id: n,
                        topic: t,
                        error: Q("INVALID_UPDATE_REQUEST")
                    });
                    return
                }
                this.isValidUpdate(Z({
                    topic: t
                }, r));
                try {
                    Ri.set(o, n),
                    await this.client.session.update(t, {
                        namespaces: r.namespaces
                    }),
                    await this.sendResult({
                        id: n,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (c) {
                    throw Ri.delete(o),
                    c
                }
                this.client.events.emit("session_update", {
                    id: n,
                    topic: t,
                    params: r
                })
            } catch (o) {
                await this.sendError({
                    id: n,
                    topic: t,
                    error: o
                }),
                this.client.logger.error(o)
            }
        }
        ),
        E(this, "isRequestOutOfSync", (t, s) => s.toString().slice(0, -3) < t.toString().slice(0, -3)),
        E(this, "onSessionUpdateResponse", (t, s) => {
            const {id: r} = s
              , n = J("session_update", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            pt(s) ? this.events.emit(J("session_update", r), {}) : rt(s) && this.events.emit(J("session_update", r), {
                error: s.error
            })
        }
        ),
        E(this, "onSessionExtendRequest", async (t, s) => {
            const {id: r} = s;
            try {
                this.isValidExtend({
                    topic: t
                }),
                await this.setExpiry(t, ce(Yt)),
                await this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }),
                this.client.events.emit("session_extend", {
                    id: r,
                    topic: t
                })
            } catch (n) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: n
                }),
                this.client.logger.error(n)
            }
        }
        ),
        E(this, "onSessionExtendResponse", (t, s) => {
            const {id: r} = s
              , n = J("session_extend", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            pt(s) ? this.events.emit(J("session_extend", r), {}) : rt(s) && this.events.emit(J("session_extend", r), {
                error: s.error
            })
        }
        ),
        E(this, "onSessionPingRequest", async (t, s) => {
            const {id: r} = s;
            try {
                this.isValidPing({
                    topic: t
                }),
                await this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }),
                this.client.events.emit("session_ping", {
                    id: r,
                    topic: t
                })
            } catch (n) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: n
                }),
                this.client.logger.error(n)
            }
        }
        ),
        E(this, "onSessionPingResponse", (t, s) => {
            const {id: r} = s
              , n = J("session_ping", r);
            setTimeout( () => {
                if (this.events.listenerCount(n) === 0)
                    throw new Error(`emitting ${n} without any listeners 2176`);
                pt(s) ? this.events.emit(J("session_ping", r), {}) : rt(s) && this.events.emit(J("session_ping", r), {
                    error: s.error
                })
            }
            , 500)
        }
        ),
        E(this, "onSessionDeleteRequest", async (t, s) => {
            const {id: r} = s;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: s.params
                }),
                Promise.all([new Promise(n => {
                    this.client.core.relayer.once(ge.publish, async () => {
                        n(await this.deleteSession({
                            topic: t,
                            id: r
                        }))
                    }
                    )
                }
                ), this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: Q("USER_DISCONNECTED")
                })]).catch(n => this.client.logger.error(n))
            } catch (n) {
                this.client.logger.error(n)
            }
        }
        ),
        E(this, "onSessionRequest", async t => {
            var s, r, n;
            const {topic: o, payload: a, attestation: c, encryptedId: h, transportType: l} = t
              , {id: u, params: p} = a;
            try {
                await this.isValidRequest(Z({
                    topic: o
                }, p));
                const d = this.client.session.get(o)
                  , g = await this.getVerifyContext({
                    attestationId: c,
                    hash: nt(JSON.stringify(kt("wc_sessionRequest", p, u))),
                    encryptedId: h,
                    metadata: d.peer.metadata,
                    transportType: l
                })
                  , y = {
                    id: u,
                    topic: o,
                    params: p,
                    verifyContext: g
                };
                await this.setPendingSessionRequest(y),
                l === te.link_mode && (s = d.peer.metadata.redirect) != null && s.universal && this.client.core.addLinkModeSupportedApp((r = d.peer.metadata.redirect) == null ? void 0 : r.universal),
                (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(y) : (this.addSessionRequestToSessionRequestQueue(y),
                this.processSessionRequestQueue())
            } catch (d) {
                await this.sendError({
                    id: u,
                    topic: o,
                    error: d
                }),
                this.client.logger.error(d)
            }
        }
        ),
        E(this, "onSessionRequestResponse", (t, s) => {
            const {id: r} = s
              , n = J("session_request", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            pt(s) ? this.events.emit(J("session_request", r), {
                result: s.result
            }) : rt(s) && this.events.emit(J("session_request", r), {
                error: s.error
            })
        }
        ),
        E(this, "onSessionEventRequest", async (t, s) => {
            const {id: r, params: n} = s;
            try {
                const o = `${t}_session_event_${n.event.name}`
                  , a = Ri.get(o);
                if (a && this.isRequestOutOfSync(a, r)) {
                    this.client.logger.info(`Discarding out of sync request - ${r}`);
                    return
                }
                this.isValidEmit(Z({
                    topic: t
                }, n)),
                this.client.events.emit("session_event", {
                    id: r,
                    topic: t,
                    params: n
                }),
                Ri.set(o, r)
            } catch (o) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: o
                }),
                this.client.logger.error(o)
            }
        }
        ),
        E(this, "onSessionAuthenticateResponse", (t, s) => {
            const {id: r} = s;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: t,
                payload: s
            }),
            pt(s) ? this.events.emit(J("session_request", r), {
                result: s.result
            }) : rt(s) && this.events.emit(J("session_request", r), {
                error: s.error
            })
        }
        ),
        E(this, "onSessionAuthenticateRequest", async t => {
            var s;
            const {topic: r, payload: n, attestation: o, encryptedId: a, transportType: c} = t;
            try {
                const {requester: h, authPayload: l, expiryTimestamp: u} = n.params
                  , p = await this.getVerifyContext({
                    attestationId: o,
                    hash: nt(JSON.stringify(n)),
                    encryptedId: a,
                    metadata: h.metadata,
                    transportType: c
                })
                  , d = {
                    requester: h,
                    pairingTopic: r,
                    id: n.id,
                    authPayload: l,
                    verifyContext: p,
                    expiryTimestamp: u
                };
                await this.setAuthRequest(n.id, {
                    request: d,
                    pairingTopic: r,
                    transportType: c
                }),
                c === te.link_mode && (s = h.metadata.redirect) != null && s.universal && this.client.core.addLinkModeSupportedApp(h.metadata.redirect.universal),
                this.client.events.emit("session_authenticate", {
                    topic: r,
                    params: n.params,
                    id: n.id,
                    verifyContext: p
                })
            } catch (h) {
                this.client.logger.error(h);
                const l = n.params.requester.publicKey
                  , u = await this.client.core.crypto.generateKeyPair()
                  , p = this.getAppLinkIfEnabled(n.params.requester.metadata, c)
                  , d = {
                    type: mt,
                    receiverPublicKey: l,
                    senderPublicKey: u
                };
                await this.sendError({
                    id: n.id,
                    topic: r,
                    error: h,
                    encodeOpts: d,
                    rpcOpts: ue.wc_sessionAuthenticate.autoReject,
                    appLink: p
                })
            }
        }
        ),
        E(this, "addSessionRequestToSessionRequestQueue", t => {
            this.sessionRequestQueue.queue.push(t)
        }
        ),
        E(this, "cleanupAfterResponse", t => {
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout( () => {
                this.sessionRequestQueue.state = it.idle,
                this.processSessionRequestQueue()
            }
            , C.toMiliseconds(this.requestQueueDelay))
        }
        ),
        E(this, "cleanupPendingSentRequestsForTopic", ({topic: t, error: s}) => {
            const r = this.client.core.history.pending;
            r.length > 0 && r.filter(n => n.topic === t && n.request.method === "wc_sessionRequest").forEach(n => {
                const o = n.request.id
                  , a = J("session_request", o);
                if (this.events.listenerCount(a) === 0)
                    throw new Error(`emitting ${a} without any listeners`);
                this.events.emit(J("session_request", n.request.id), {
                    error: s
                })
            }
            )
        }
        ),
        E(this, "processSessionRequestQueue", () => {
            if (this.sessionRequestQueue.state === it.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = it.active,
                this.emitSessionRequest(t)
            } catch (s) {
                this.client.logger.error(s)
            }
        }
        ),
        E(this, "emitSessionRequest", t => {
            this.client.events.emit("session_request", t)
        }
        ),
        E(this, "onPairingCreated", t => {
            if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods),
            t.active)
                return;
            const s = this.client.proposal.getAll().find(r => r.pairingTopic === t.topic);
            s && this.onSessionProposeRequest({
                topic: t.topic,
                payload: kt("wc_sessionPropose", Pe(Z({}, s), {
                    requiredNamespaces: s.requiredNamespaces,
                    optionalNamespaces: s.optionalNamespaces,
                    relays: s.relays,
                    proposer: s.proposer,
                    sessionProperties: s.sessionProperties,
                    scopedProperties: s.scopedProperties
                }), s.id)
            })
        }
        ),
        E(this, "isValidConnect", async t => {
            if (!Ae(t)) {
                const {message: h} = A("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(h)
            }
            const {pairingTopic: s, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c} = t;
            if (ve(s) || await this.isValidPairingTopic(s),
            !md(c)) {
                const {message: h} = A("MISSING_OR_INVALID", `connect() relays: ${c}`);
                throw new Error(h)
            }
            if (!ve(r) && St(r) !== 0) {
                const h = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(h) : this.client.logger.warn(h),
                this.validateNamespaces(r, "requiredNamespaces")
            }
            if (!ve(n) && St(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"),
            ve(o) || this.validateSessionProps(o, "sessionProperties"),
            !ve(a)) {
                this.validateSessionProps(a, "scopedProperties");
                const h = Object.keys(r || {}).concat(Object.keys(n || {}));
                if (!Object.keys(a).every(l => h.includes(l)))
                    throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(h)}`)
            }
        }
        ),
        E(this, "validateNamespaces", (t, s) => {
            const r = yd(t, "connect()", s);
            if (r)
                throw new Error(r.message)
        }
        ),
        E(this, "isValidApprove", async t => {
            if (!Ae(t))
                throw new Error(A("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const {id: s, namespaces: r, relayProtocol: n, sessionProperties: o, scopedProperties: a} = t;
            this.checkRecentlyDeleted(s),
            await this.isValidProposalId(s);
            const c = this.client.proposal.get(s)
              , h = sr(r, "approve()");
            if (h)
                throw new Error(h.message);
            const l = go(c.requiredNamespaces, r, "approve()");
            if (l)
                throw new Error(l.message);
            if (!ne(n, !0)) {
                const {message: u} = A("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                throw new Error(u)
            }
            if (ve(o) || this.validateSessionProps(o, "sessionProperties"),
            !ve(a)) {
                this.validateSessionProps(a, "scopedProperties");
                const u = new Set(Object.keys(r));
                if (!Object.keys(a).every(p => u.has(p)))
                    throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`)
            }
        }
        ),
        E(this, "isValidReject", async t => {
            if (!Ae(t)) {
                const {message: n} = A("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(n)
            }
            const {id: s, reason: r} = t;
            if (this.checkRecentlyDeleted(s),
            await this.isValidProposalId(s),
            !bd(r)) {
                const {message: n} = A("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                throw new Error(n)
            }
        }
        ),
        E(this, "isValidSessionSettleRequest", t => {
            if (!Ae(t)) {
                const {message: h} = A("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(h)
            }
            const {relay: s, controller: r, namespaces: n, expiry: o} = t;
            if (!uc(s)) {
                const {message: h} = A("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(h)
            }
            const a = ld(r, "onSessionSettleRequest()");
            if (a)
                throw new Error(a.message);
            const c = sr(n, "onSessionSettleRequest()");
            if (c)
                throw new Error(c.message);
            if (It(o)) {
                const {message: h} = A("EXPIRED", "onSessionSettleRequest()");
                throw new Error(h)
            }
        }
        ),
        E(this, "isValidUpdate", async t => {
            if (!Ae(t)) {
                const {message: c} = A("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(c)
            }
            const {topic: s, namespaces: r} = t;
            this.checkRecentlyDeleted(s),
            await this.isValidSessionTopic(s);
            const n = this.client.session.get(s)
              , o = sr(r, "update()");
            if (o)
                throw new Error(o.message);
            const a = go(n.requiredNamespaces, r, "update()");
            if (a)
                throw new Error(a.message)
        }
        ),
        E(this, "isValidExtend", async t => {
            if (!Ae(t)) {
                const {message: r} = A("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(r)
            }
            const {topic: s} = t;
            this.checkRecentlyDeleted(s),
            await this.isValidSessionTopic(s)
        }
        ),
        E(this, "isValidRequest", async t => {
            if (!Ae(t)) {
                const {message: c} = A("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(c)
            }
            const {topic: s, request: r, chainId: n, expiry: o} = t;
            this.checkRecentlyDeleted(s),
            await this.isValidSessionTopic(s);
            const {namespaces: a} = this.client.session.get(s);
            if (!po(a, n)) {
                const {message: c} = A("MISSING_OR_INVALID", `request() chainId: ${n}`);
                throw new Error(c)
            }
            if (!vd(r)) {
                const {message: c} = A("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                throw new Error(c)
            }
            if (!_d(a, n, r.method)) {
                const {message: c} = A("MISSING_OR_INVALID", `request() method: ${r.method}`);
                throw new Error(c)
            }
            if (o && !Od(o, ur)) {
                const {message: c} = A("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${ur.min} and ${ur.max}`);
                throw new Error(c)
            }
        }
        ),
        E(this, "isValidRespond", async t => {
            var s;
            if (!Ae(t)) {
                const {message: o} = A("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(o)
            }
            const {topic: r, response: n} = t;
            try {
                await this.isValidSessionTopic(r)
            } catch (o) {
                throw (s = t?.response) != null && s.id && this.cleanupAfterResponse(t),
                o
            }
            if (!Ed(n)) {
                const {message: o} = A("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
                throw new Error(o)
            }
        }
        ),
        E(this, "isValidPing", async t => {
            if (!Ae(t)) {
                const {message: r} = A("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(r)
            }
            const {topic: s} = t;
            await this.isValidSessionOrPairingTopic(s)
        }
        ),
        E(this, "isValidEmit", async t => {
            if (!Ae(t)) {
                const {message: a} = A("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(a)
            }
            const {topic: s, event: r, chainId: n} = t;
            await this.isValidSessionTopic(s);
            const {namespaces: o} = this.client.session.get(s);
            if (!po(o, n)) {
                const {message: a} = A("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                throw new Error(a)
            }
            if (!Id(r)) {
                const {message: a} = A("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(a)
            }
            if (!Pd(o, n, r.name)) {
                const {message: a} = A("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(a)
            }
        }
        ),
        E(this, "isValidDisconnect", async t => {
            if (!Ae(t)) {
                const {message: r} = A("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(r)
            }
            const {topic: s} = t;
            await this.isValidSessionOrPairingTopic(s)
        }
        ),
        E(this, "isValidAuthenticate", t => {
            const {chains: s, uri: r, domain: n, nonce: o} = t;
            if (!Array.isArray(s) || s.length === 0)
                throw new Error("chains is required and must be a non-empty array");
            if (!ne(r, !1))
                throw new Error("uri is required parameter");
            if (!ne(n, !1))
                throw new Error("domain is required parameter");
            if (!ne(o, !1))
                throw new Error("nonce is required parameter");
            if ([...new Set(s.map(c => gi(c).namespace))].length > 1)
                throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            const {namespace: a} = gi(s[0]);
            if (a !== "eip155")
                throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
        }
        ),
        E(this, "getVerifyContext", async t => {
            const {attestationId: s, hash: r, encryptedId: n, metadata: o, transportType: a} = t
              , c = {
                verified: {
                    verifyUrl: o.verifyUrl || Ki,
                    validation: "UNKNOWN",
                    origin: o.url || ""
                }
            };
            try {
                if (a === te.link_mode) {
                    const l = this.getAppLinkIfEnabled(o, a);
                    return c.verified.validation = l && new URL(l).origin === new URL(o.url).origin ? "VALID" : "INVALID",
                    c
                }
                const h = await this.client.core.verify.resolve({
                    attestationId: s,
                    hash: r,
                    encryptedId: n,
                    verifyUrl: o.verifyUrl
                });
                h && (c.verified.origin = h.origin,
                c.verified.isScam = h.isScam,
                c.verified.validation = h.origin === new URL(o.url).origin ? "VALID" : "INVALID")
            } catch (h) {
                this.client.logger.warn(h)
            }
            return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),
            c
        }
        ),
        E(this, "validateSessionProps", (t, s) => {
            Object.values(t).forEach( (r, n) => {
                if (r == null) {
                    const {message: o} = A("MISSING_OR_INVALID", `${s} must contain an existing value for each key. Received: ${r} for key ${Object.keys(t)[n]}`);
                    throw new Error(o)
                }
            }
            )
        }
        ),
        E(this, "getPendingAuthRequest", t => {
            const s = this.client.auth.requests.get(t);
            return typeof s == "object" ? s : void 0
        }
        ),
        E(this, "addToRecentlyDeleted", (t, s) => {
            if (this.recentlyDeletedMap.set(t, s),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let r = 0;
                const n = this.recentlyDeletedLimit / 2;
                for (const o of this.recentlyDeletedMap.keys()) {
                    if (r++ >= n)
                        break;
                    this.recentlyDeletedMap.delete(o)
                }
            }
        }
        ),
        E(this, "checkRecentlyDeleted", t => {
            const s = this.recentlyDeletedMap.get(t);
            if (s) {
                const {message: r} = A("MISSING_OR_INVALID", `Record was recently deleted - ${s}: ${t}`);
                throw new Error(r)
            }
        }
        ),
        E(this, "isLinkModeEnabled", (t, s) => {
            var r, n, o, a, c, h, l, u, p;
            return !t || s !== te.link_mode ? !1 : ((n = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((h = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : h.universal) !== "" && ((l = t?.redirect) == null ? void 0 : l.universal) !== void 0 && ((u = t?.redirect) == null ? void 0 : u.universal) !== "" && ((p = t?.redirect) == null ? void 0 : p.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(t.redirect.universal) && typeof (L == null ? void 0 : L.Linking) < "u"
        }
        ),
        E(this, "getAppLinkIfEnabled", (t, s) => {
            var r;
            return this.isLinkModeEnabled(t, s) ? (r = t?.redirect) == null ? void 0 : r.universal : void 0
        }
        ),
        E(this, "handleLinkModeMessage", ({url: t}) => {
            if (!t || !t.includes("wc_ev") || !t.includes("topic"))
                return;
            const s = xn(t, "topic") || ""
              , r = decodeURIComponent(xn(t, "wc_ev") || "")
              , n = this.client.session.keys.includes(s);
            n && this.client.session.update(s, {
                transportType: te.link_mode
            }),
            this.client.core.dispatchEnvelope({
                topic: s,
                message: r,
                sessionExists: n
            })
        }
        ),
        E(this, "registerLinkModeListeners", async () => {
            var t;
            if (en() || xt() && (t = this.client.metadata.redirect) != null && t.linkMode) {
                const s = L == null ? void 0 : L.Linking;
                if (typeof s < "u") {
                    s.addEventListener("url", this.handleLinkModeMessage, this.client.name);
                    const r = await s.getInitialURL();
                    r && setTimeout( () => {
                        this.handleLinkModeMessage({
                            url: r
                        })
                    }
                    , 50)
                }
            }
        }
        ),
        E(this, "shouldSetTVF", (t, s) => {
            if (!s || t !== "wc_sessionRequest")
                return !1;
            const {request: r} = s;
            return Object.keys(Wo).includes(r.method)
        }
        ),
        E(this, "getTVFParams", (t, s, r) => {
            var n, o;
            try {
                const a = s.request.method
                  , c = this.extractTxHashesFromResult(a, r);
                return Pe(Z({
                    correlationId: t,
                    rpcMethods: [a],
                    chainId: s.chainId
                }, this.isValidContractData(s.request.params) && {
                    contractAddresses: [(o = (n = s.request.params) == null ? void 0 : n[0]) == null ? void 0 : o.to]
                }), {
                    txHashes: c
                })
            } catch (a) {
                this.client.logger.warn("Error getting TVF params", a)
            }
            return {}
        }
        ),
        E(this, "isValidContractData", t => {
            var s;
            if (!t)
                return !1;
            try {
                const r = t?.data || ((s = t?.[0]) == null ? void 0 : s.data);
                if (!r.startsWith("0x"))
                    return !1;
                const n = r.slice(2);
                return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1
            } catch {}
            return !1
        }
        ),
        E(this, "extractTxHashesFromResult", (t, s) => {
            try {
                const r = Wo[t];
                if (typeof s == "string")
                    return [s];
                const n = s[r.key];
                if (Ye(n))
                    return t === "solana_signAllTransactions" ? n.map(o => Gl(o)) : n;
                if (typeof n == "string")
                    return [n]
            } catch (r) {
                this.client.logger.warn("Error extracting tx hashes from result", r)
            }
            return []
        }
        )
    }
    async processPendingMessageEvents() {
        try {
            const e = this.client.session.keys
              , t = this.client.core.relayer.messages.getWithoutAck(e);
            for (const [s,r] of Object.entries(t))
                for (const n of r)
                    try {
                        await this.onProviderMessageEvent({
                            topic: s,
                            message: n,
                            publishedAt: Date.now()
                        })
                    } catch {
                        this.client.logger.warn(`Error processing pending message event for topic: ${s}, message: ${n}`)
                    }
        } catch (e) {
            this.client.logger.warn("processPendingMessageEvents failed", e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = A("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async confirmOnlineStateOrThrow() {
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(ge.message, e => {
            this.onProviderMessageEvent(e)
        }
        )
    }
    async onRelayMessage(e) {
        const {topic: t, message: s, attestation: r, transportType: n} = e
          , {publicKey: o} = this.client.auth.authKeys.keys.includes(_s) ? this.client.auth.authKeys.get(_s) : {
            publicKey: void 0
        };
        try {
            const a = await this.client.core.crypto.decode(t, s, {
                receiverPublicKey: o,
                encoding: n === te.link_mode ? _t : Qe
            });
            Qr(a) ? (this.client.core.history.set(t, a),
            await this.onRelayEventRequest({
                topic: t,
                payload: a,
                attestation: r,
                transportType: n,
                encryptedId: nt(s)
            })) : Yr(a) ? (await this.client.core.history.resolve(a),
            await this.onRelayEventResponse({
                topic: t,
                payload: a,
                transportType: n
            }),
            this.client.core.history.delete(t, a.id)) : await this.onRelayEventUnknownPayload({
                topic: t,
                payload: a,
                transportType: n
            }),
            await this.client.core.relayer.messages.ack(t, s)
        } catch (a) {
            this.client.logger.error(a)
        }
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(ze.expired, async e => {
            const {topic: t, id: s} = Ca(e.target);
            if (s && this.client.pendingRequest.keys.includes(s))
                return await this.deletePendingSessionRequest(s, A("EXPIRED"), !0);
            if (s && this.client.auth.requests.keys.includes(s))
                return await this.deletePendingAuthRequest(s, A("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                topic: t,
                expirerHasDeleted: !0
            }),
            this.client.events.emit("session_expire", {
                topic: t
            })) : s && (await this.deleteProposal(s, !0),
            this.client.events.emit("proposal_expire", {
                id: s
            }))
        }
        )
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(jt.create, e => this.onPairingCreated(e)),
        this.client.core.pairing.events.on(jt.delete, e => {
            this.addToRecentlyDeleted(e.topic, "pairing")
        }
        )
    }
    isValidPairingTopic(e) {
        if (!ne(e, !1)) {
            const {message: t} = A("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const {message: t} = A("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (It(this.client.core.pairing.pairings.get(e).expiry)) {
            const {message: t} = A("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    async isValidSessionTopic(e) {
        if (!ne(e, !1)) {
            const {message: t} = A("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (this.checkRecentlyDeleted(e),
        !this.client.session.keys.includes(e)) {
            const {message: t} = A("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (It(this.client.session.get(e).expiry)) {
            await this.deleteSession({
                topic: e
            });
            const {message: t} = A("EXPIRED", `session topic: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.crypto.keychain.has(e)) {
            const {message: t} = A("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
            throw await this.deleteSession({
                topic: e
            }),
            new Error(t)
        }
    }
    async isValidSessionOrPairingTopic(e) {
        if (this.checkRecentlyDeleted(e),
        this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
        else if (ne(e, !1)) {
            const {message: t} = A("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        } else {
            const {message: t} = A("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
    }
    async isValidProposalId(e) {
        if (!wd(e)) {
            const {message: t} = A("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
            throw new Error(t)
        }
        if (!this.client.proposal.keys.includes(e)) {
            const {message: t} = A("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (It(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const {message: t} = A("EXPIRED", `proposal id: ${e}`);
            throw new Error(t)
        }
    }
}
class $w extends Ht {
    constructor(e, t) {
        super(e, t, hw, hn),
        this.core = e,
        this.logger = t
    }
}
let Sw = class extends Ht {
    constructor(e, t) {
        super(e, t, lw, hn),
        this.core = e,
        this.logger = t
    }
}
;
class Ow extends Ht {
    constructor(e, t) {
        super(e, t, pw, hn, s => s.id),
        this.core = e,
        this.logger = t
    }
}
class xw extends Ht {
    constructor(e, t) {
        super(e, t, yw, Ks, () => _s),
        this.core = e,
        this.logger = t
    }
}
class Aw extends Ht {
    constructor(e, t) {
        super(e, t, mw, Ks),
        this.core = e,
        this.logger = t
    }
}
class Cw extends Ht {
    constructor(e, t) {
        super(e, t, ww, Ks, s => s.id),
        this.core = e,
        this.logger = t
    }
}
var Nw = Object.defineProperty
  , Rw = (i, e, t) => e in i ? Nw(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , pr = (i, e, t) => Rw(i, typeof e != "symbol" ? e + "" : e, t);
class Tw {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        pr(this, "authKeys"),
        pr(this, "pairingTopics"),
        pr(this, "requests"),
        this.authKeys = new xw(this.core,this.logger),
        this.pairingTopics = new Aw(this.core,this.logger),
        this.requests = new Cw(this.core,this.logger)
    }
    async init() {
        await this.authKeys.init(),
        await this.pairingTopics.init(),
        await this.requests.init()
    }
}
var qw = Object.defineProperty
  , jw = (i, e, t) => e in i ? qw(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , H = (i, e, t) => jw(i, typeof e != "symbol" ? e + "" : e, t);
let Dw = class Nc extends _g {
    constructor(e) {
        super(e),
        H(this, "protocol", xc),
        H(this, "version", Ac),
        H(this, "name", lr.name),
        H(this, "metadata"),
        H(this, "core"),
        H(this, "logger"),
        H(this, "events", new Ot.EventEmitter),
        H(this, "engine"),
        H(this, "session"),
        H(this, "proposal"),
        H(this, "pendingRequest"),
        H(this, "auth"),
        H(this, "signConfig"),
        H(this, "on", (s, r) => this.events.on(s, r)),
        H(this, "once", (s, r) => this.events.once(s, r)),
        H(this, "off", (s, r) => this.events.off(s, r)),
        H(this, "removeListener", (s, r) => this.events.removeListener(s, r)),
        H(this, "removeAllListeners", s => this.events.removeAllListeners(s)),
        H(this, "connect", async s => {
            try {
                return await this.engine.connect(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "pair", async s => {
            try {
                return await this.engine.pair(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "approve", async s => {
            try {
                return await this.engine.approve(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "reject", async s => {
            try {
                return await this.engine.reject(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "update", async s => {
            try {
                return await this.engine.update(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "extend", async s => {
            try {
                return await this.engine.extend(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "request", async s => {
            try {
                return await this.engine.request(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "respond", async s => {
            try {
                return await this.engine.respond(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "ping", async s => {
            try {
                return await this.engine.ping(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "emit", async s => {
            try {
                return await this.engine.emit(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "disconnect", async s => {
            try {
                return await this.engine.disconnect(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "find", s => {
            try {
                return this.engine.find(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "getPendingSessionRequests", () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (s) {
                throw this.logger.error(s.message),
                s
            }
        }
        ),
        H(this, "authenticate", async (s, r) => {
            try {
                return await this.engine.authenticate(s, r)
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        }
        ),
        H(this, "formatAuthMessage", s => {
            try {
                return this.engine.formatAuthMessage(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "approveSessionAuthenticate", async s => {
            try {
                return await this.engine.approveSessionAuthenticate(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "rejectSessionAuthenticate", async s => {
            try {
                return await this.engine.rejectSessionAuthenticate(s)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        this.name = e?.name || lr.name,
        this.metadata = ol(e?.metadata),
        this.signConfig = e?.signConfig;
        const t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : Jr(Ts({
            level: e?.logger || lr.logger
        }));
        this.core = e?.core || new cw(e),
        this.logger = Se(t, this.name),
        this.session = new Sw(this.core,this.logger),
        this.proposal = new $w(this.core,this.logger),
        this.pendingRequest = new Ow(this.core,this.logger),
        this.engine = new Pw(this),
        this.auth = new Tw(this.core,this.logger)
    }
    static async init(e) {
        const t = new Nc(e);
        return await t.initialize(),
        t
    }
    get context() {
        return Ue(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.auth.init(),
            await this.engine.init(),
            this.logger.info("SignClient Initialization Success"),
            setTimeout( () => {
                this.engine.processRelayMessageCache()
            }
            , C.toMiliseconds(C.ONE_SECOND))
        } catch (e) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e
        }
    }
}
;
const Qo = "error"
  , kw = "wss://relay.walletconnect.org"
  , Mw = "wc"
  , Uw = "universal_provider"
  , ds = `${Mw}@2:${Uw}:`
  , Rc = "https://rpc.walletconnect.org/v1/"
  , hi = "generic"
  , Lw = `${Rc}bundler`
  , Ve = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
function Bw() {}
function ln(i) {
    return i == null || typeof i != "object" && typeof i != "function"
}
function un(i) {
    return ArrayBuffer.isView(i) && !(i instanceof DataView)
}
function zw(i) {
    if (ln(i))
        return i;
    if (Array.isArray(i) || un(i) || i instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && i instanceof SharedArrayBuffer)
        return i.slice(0);
    const e = Object.getPrototypeOf(i)
      , t = e.constructor;
    if (i instanceof Date || i instanceof Map || i instanceof Set)
        return new t(i);
    if (i instanceof RegExp) {
        const s = new t(i);
        return s.lastIndex = i.lastIndex,
        s
    }
    if (i instanceof DataView)
        return new t(i.buffer.slice(0));
    if (i instanceof Error) {
        const s = new t(i.message);
        return s.stack = i.stack,
        s.name = i.name,
        s.cause = i.cause,
        s
    }
    if (typeof File < "u" && i instanceof File)
        return new t([i],i.name,{
            type: i.type,
            lastModified: i.lastModified
        });
    if (typeof i == "object") {
        const s = Object.create(e);
        return Object.assign(s, i)
    }
    return i
}
function Yo(i) {
    return typeof i == "object" && i !== null
}
function Tc(i) {
    return Object.getOwnPropertySymbols(i).filter(e => Object.prototype.propertyIsEnumerable.call(i, e))
}
function qc(i) {
    return i == null ? i === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(i)
}
const Kw = "[object RegExp]"
  , jc = "[object String]"
  , Dc = "[object Number]"
  , kc = "[object Boolean]"
  , Mc = "[object Arguments]"
  , Hw = "[object Symbol]"
  , Vw = "[object Date]"
  , Fw = "[object Map]"
  , Gw = "[object Set]"
  , Ww = "[object Array]"
  , Jw = "[object ArrayBuffer]"
  , Qw = "[object Object]"
  , Yw = "[object DataView]"
  , Zw = "[object Uint8Array]"
  , Xw = "[object Uint8ClampedArray]"
  , eb = "[object Uint16Array]"
  , tb = "[object Uint32Array]"
  , ib = "[object Int8Array]"
  , sb = "[object Int16Array]"
  , rb = "[object Int32Array]"
  , nb = "[object Float32Array]"
  , ob = "[object Float64Array]";
function ab(i, e) {
    return di(i, void 0, i, new Map, e)
}
function di(i, e, t, s=new Map, r=void 0) {
    const n = r?.(i, e, t, s);
    if (n != null)
        return n;
    if (ln(i))
        return i;
    if (s.has(i))
        return s.get(i);
    if (Array.isArray(i)) {
        const o = new Array(i.length);
        s.set(i, o);
        for (let a = 0; a < i.length; a++)
            o[a] = di(i[a], a, t, s, r);
        return Object.hasOwn(i, "index") && (o.index = i.index),
        Object.hasOwn(i, "input") && (o.input = i.input),
        o
    }
    if (i instanceof Date)
        return new Date(i.getTime());
    if (i instanceof RegExp) {
        const o = new RegExp(i.source,i.flags);
        return o.lastIndex = i.lastIndex,
        o
    }
    if (i instanceof Map) {
        const o = new Map;
        s.set(i, o);
        for (const [a,c] of i)
            o.set(a, di(c, a, t, s, r));
        return o
    }
    if (i instanceof Set) {
        const o = new Set;
        s.set(i, o);
        for (const a of i)
            o.add(di(a, void 0, t, s, r));
        return o
    }
    if (typeof ye < "u" && ye.isBuffer(i))
        return i.subarray();
    if (un(i)) {
        const o = new (Object.getPrototypeOf(i)).constructor(i.length);
        s.set(i, o);
        for (let a = 0; a < i.length; a++)
            o[a] = di(i[a], a, t, s, r);
        return o
    }
    if (i instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && i instanceof SharedArrayBuffer)
        return i.slice(0);
    if (i instanceof DataView) {
        const o = new DataView(i.buffer.slice(0),i.byteOffset,i.byteLength);
        return s.set(i, o),
        Dt(o, i, t, s, r),
        o
    }
    if (typeof File < "u" && i instanceof File) {
        const o = new File([i],i.name,{
            type: i.type
        });
        return s.set(i, o),
        Dt(o, i, t, s, r),
        o
    }
    if (i instanceof Blob) {
        const o = new Blob([i],{
            type: i.type
        });
        return s.set(i, o),
        Dt(o, i, t, s, r),
        o
    }
    if (i instanceof Error) {
        const o = new i.constructor;
        return s.set(i, o),
        o.message = i.message,
        o.name = i.name,
        o.stack = i.stack,
        o.cause = i.cause,
        Dt(o, i, t, s, r),
        o
    }
    if (typeof i == "object" && cb(i)) {
        const o = Object.create(Object.getPrototypeOf(i));
        return s.set(i, o),
        Dt(o, i, t, s, r),
        o
    }
    return i
}
function Dt(i, e, t=i, s, r) {
    const n = [...Object.keys(e), ...Tc(e)];
    for (let o = 0; o < n.length; o++) {
        const a = n[o]
          , c = Object.getOwnPropertyDescriptor(i, a);
        (c == null || c.writable) && (i[a] = di(e[a], a, t, s, r))
    }
}
function cb(i) {
    switch (qc(i)) {
    case Mc:
    case Ww:
    case Jw:
    case Yw:
    case kc:
    case Vw:
    case nb:
    case ob:
    case ib:
    case sb:
    case rb:
    case Fw:
    case Dc:
    case Qw:
    case Kw:
    case Gw:
    case jc:
    case Hw:
    case Zw:
    case Xw:
    case eb:
    case tb:
        return !0;
    default:
        return !1
    }
}
function hb(i, e) {
    return ab(i, (t, s, r, n) => {
        if (typeof i == "object")
            switch (Object.prototype.toString.call(i)) {
            case Dc:
            case jc:
            case kc:
                {
                    const o = new i.constructor(i?.valueOf());
                    return Dt(o, i),
                    o
                }
            case Mc:
                {
                    const o = {};
                    return Dt(o, i),
                    o.length = i.length,
                    o[Symbol.iterator] = i[Symbol.iterator],
                    o
                }
            default:
                return
            }
    }
    )
}
function Zo(i) {
    return hb(i)
}
function Xo(i) {
    return i !== null && typeof i == "object" && qc(i) === "[object Arguments]"
}
function lb(i) {
    return un(i)
}
function ub(i) {
    if (typeof i != "object" || i == null)
        return !1;
    if (Object.getPrototypeOf(i) === null)
        return !0;
    if (Object.prototype.toString.call(i) !== "[object Object]") {
        const t = i[Symbol.toStringTag];
        return t == null || !Object.getOwnPropertyDescriptor(i, Symbol.toStringTag)?.writable ? !1 : i.toString() === `[object ${t}]`
    }
    let e = i;
    for (; Object.getPrototypeOf(e) !== null; )
        e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(i) === e
}
function pb(i, ...e) {
    const t = e.slice(0, -1)
      , s = e[e.length - 1];
    let r = i;
    for (let n = 0; n < t.length; n++) {
        const o = t[n];
        r = Hr(r, o, s, new Map)
    }
    return r
}
function Hr(i, e, t, s) {
    if (ln(i) && (i = Object(i)),
    e == null || typeof e != "object")
        return i;
    if (s.has(e))
        return zw(s.get(e));
    if (s.set(e, i),
    Array.isArray(e)) {
        e = e.slice();
        for (let n = 0; n < e.length; n++)
            e[n] = e[n] ?? void 0
    }
    const r = [...Object.keys(e), ...Tc(e)];
    for (let n = 0; n < r.length; n++) {
        const o = r[n];
        let a = e[o]
          , c = i[o];
        if (Xo(a) && (a = {
            ...a
        }),
        Xo(c) && (c = {
            ...c
        }),
        typeof ye < "u" && ye.isBuffer(a) && (a = Zo(a)),
        Array.isArray(a))
            if (typeof c == "object" && c != null) {
                const l = []
                  , u = Reflect.ownKeys(c);
                for (let p = 0; p < u.length; p++) {
                    const d = u[p];
                    l[d] = c[d]
                }
                c = l
            } else
                c = [];
        const h = t(c, a, o, i, e, s);
        h != null ? i[o] = h : Array.isArray(a) || Yo(c) && Yo(a) ? i[o] = Hr(c, a, t, s) : c == null && ub(a) ? i[o] = Hr({}, a, t, s) : c == null && lb(a) ? i[o] = Zo(a) : (c === void 0 || a !== void 0) && (i[o] = a)
    }
    return i
}
function db(i, ...e) {
    return pb(i, ...e, Bw)
}
var gb = Object.defineProperty
  , fb = Object.defineProperties
  , yb = Object.getOwnPropertyDescriptors
  , ea = Object.getOwnPropertySymbols
  , mb = Object.prototype.hasOwnProperty
  , wb = Object.prototype.propertyIsEnumerable
  , ta = (i, e, t) => e in i ? gb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , gs = (i, e) => {
    for (var t in e || (e = {}))
        mb.call(e, t) && ta(i, t, e[t]);
    if (ea)
        for (var t of ea(e))
            wb.call(e, t) && ta(i, t, e[t]);
    return i
}
  , bb = (i, e) => fb(i, yb(e));
function Me(i, e, t) {
    var s;
    const r = gi(i);
    return ((s = e.rpcMap) == null ? void 0 : s[r.reference]) || `${Rc}?chainId=${r.namespace}:${r.reference}&projectId=${t}`
}
function Vt(i) {
    return i.includes(":") ? i.split(":")[1] : i
}
function Uc(i) {
    return i.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
}
function vb(i, e) {
    const t = Object.keys(e.namespaces).filter(r => r.includes(i));
    if (!t.length)
        return [];
    const s = [];
    return t.forEach(r => {
        const n = e.namespaces[r].accounts;
        s.push(...n)
    }
    ),
    s
}
function fs(i={}, e={}) {
    const t = ia(i)
      , s = ia(e);
    return db(t, s)
}
function ia(i) {
    var e, t, s, r, n;
    const o = {};
    if (!St(i))
        return o;
    for (const [a,c] of Object.entries(i)) {
        const h = Bs(a) ? [a] : c.chains
          , l = c.methods || []
          , u = c.events || []
          , p = c.rpcMap || {}
          , d = pi(a);
        o[d] = bb(gs(gs({}, o[d]), c), {
            chains: ot(h, (e = o[d]) == null ? void 0 : e.chains),
            methods: ot(l, (t = o[d]) == null ? void 0 : t.methods),
            events: ot(u, (s = o[d]) == null ? void 0 : s.events)
        }),
        (St(p) || St(((r = o[d]) == null ? void 0 : r.rpcMap) || {})) && (o[d].rpcMap = gs(gs({}, p), (n = o[d]) == null ? void 0 : n.rpcMap))
    }
    return o
}
function sa(i) {
    return i.includes(":") ? i.split(":")[2] : i
}
function ra(i) {
    const e = {};
    for (const [t,s] of Object.entries(i)) {
        const r = s.methods || []
          , n = s.events || []
          , o = s.accounts || []
          , a = Bs(t) ? [t] : s.chains ? s.chains : Uc(s.accounts);
        e[t] = {
            chains: a,
            methods: r,
            events: n,
            accounts: o
        }
    }
    return e
}
function dr(i) {
    return typeof i == "number" ? i : i.includes("0x") ? parseInt(i, 16) : (i = i.includes(":") ? i.split(":")[1] : i,
    isNaN(Number(i)) ? i : Number(i))
}
const Lc = {}
  , G = i => Lc[i]
  , gr = (i, e) => {
    Lc[i] = e
}
;
var Eb = Object.defineProperty
  , Ib = (i, e, t) => e in i ? Eb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Zt = (i, e, t) => Ib(i, typeof e != "symbol" ? e + "" : e, t);
class _b {
    constructor(e) {
        Zt(this, "name", "polkadot"),
        Zt(this, "client"),
        Zt(this, "httpProviders"),
        Zt(this, "events"),
        Zt(this, "namespace"),
        Zt(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const r = Vt(t);
            e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var Pb = Object.defineProperty
  , $b = Object.defineProperties
  , Sb = Object.getOwnPropertyDescriptors
  , na = Object.getOwnPropertySymbols
  , Ob = Object.prototype.hasOwnProperty
  , xb = Object.prototype.propertyIsEnumerable
  , Vr = (i, e, t) => e in i ? Pb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , oa = (i, e) => {
    for (var t in e || (e = {}))
        Ob.call(e, t) && Vr(i, t, e[t]);
    if (na)
        for (var t of na(e))
            xb.call(e, t) && Vr(i, t, e[t]);
    return i
}
  , aa = (i, e) => $b(i, Sb(e))
  , Xt = (i, e, t) => Vr(i, typeof e != "symbol" ? e + "" : e, t);
class Ab {
    constructor(e) {
        Xt(this, "name", "eip155"),
        Xt(this, "client"),
        Xt(this, "chainId"),
        Xt(this, "namespace"),
        Xt(this, "httpProviders"),
        Xt(this, "events"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    async request(e) {
        switch (e.request.method) {
        case "eth_requestAccounts":
            return this.getAccounts();
        case "eth_accounts":
            return this.getAccounts();
        case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(e);
        case "eth_chainId":
            return parseInt(this.getDefaultChain());
        case "wallet_getCapabilities":
            return await this.getCapabilities(e);
        case "wallet_getCallsStatus":
            return await this.getCallStatus(e)
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
        this.chainId = parseInt(e),
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    createHttpProvider(e, t) {
        const s = t || Me(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const r = parseInt(Vt(t));
            e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    getHttpProvider() {
        const e = this.chainId
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    async handleSwitchChain(e) {
        var t, s;
        let r = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
        r = r.startsWith("0x") ? r : `0x${r}`;
        const n = parseInt(r, 16);
        if (this.isChainApproved(n))
            this.setDefaultChain(`${n}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: e.topic,
                request: {
                    method: e.request.method,
                    params: [{
                        chainId: r
                    }]
                },
                chainId: (s = this.namespace.chains) == null ? void 0 : s[0]
            }),
            this.setDefaultChain(`${n}`);
        else
            throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
    }
    async getCapabilities(e) {
        var t, s, r, n, o;
        const a = (s = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : s[0]
          , c = ((n = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : n[1]) || []
          , h = `${a}${c.join(",")}`;
        if (!a)
            throw new Error("Missing address parameter in `wallet_getCapabilities` request");
        const l = this.client.session.get(e.topic)
          , u = ((o = l?.sessionProperties) == null ? void 0 : o.capabilities) || {};
        if (u != null && u[h])
            return u?.[h];
        const p = await this.client.request(e);
        try {
            await this.client.session.update(e.topic, {
                sessionProperties: aa(oa({}, l.sessionProperties || {}), {
                    capabilities: aa(oa({}, u || {}), {
                        [h]: p
                    })
                })
            })
        } catch (d) {
            console.warn("Failed to update session with capabilities", d)
        }
        return p
    }
    async getCallStatus(e) {
        var t, s;
        const r = this.client.session.get(e.topic)
          , n = (t = r.sessionProperties) == null ? void 0 : t.bundler_name;
        if (n) {
            const a = this.getBundlerUrl(e.chainId, n);
            try {
                return await this.getUserOperationReceipt(a, e)
            } catch (c) {
                console.warn("Failed to fetch call status from bundler", c, a)
            }
        }
        const o = (s = r.sessionProperties) == null ? void 0 : s.bundler_url;
        if (o)
            try {
                return await this.getUserOperationReceipt(o, e)
            } catch (a) {
                console.warn("Failed to fetch call status from custom bundler", a, o)
            }
        if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
        throw new Error("Fetching call status not approved by the wallet.")
    }
    async getUserOperationReceipt(e, t) {
        var s;
        const r = new URL(e)
          , n = await fetch(r, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(kt("eth_getUserOperationReceipt", [(s = t.request.params) == null ? void 0 : s[0]]))
        });
        if (!n.ok)
            throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
        return await n.json()
    }
    getBundlerUrl(e, t) {
        return `${Lw}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`
    }
}
var Cb = Object.defineProperty
  , Nb = (i, e, t) => e in i ? Cb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ei = (i, e, t) => Nb(i, typeof e != "symbol" ? e + "" : e, t);
class Rb {
    constructor(e) {
        ei(this, "name", "solana"),
        ei(this, "client"),
        ei(this, "httpProviders"),
        ei(this, "events"),
        ei(this, "namespace"),
        ei(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const r = Vt(t);
            e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var Tb = Object.defineProperty
  , qb = (i, e, t) => e in i ? Tb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ti = (i, e, t) => qb(i, typeof e != "symbol" ? e + "" : e, t);
class jb {
    constructor(e) {
        ti(this, "name", "cosmos"),
        ti(this, "client"),
        ti(this, "httpProviders"),
        ti(this, "events"),
        ti(this, "namespace"),
        ti(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const r = Vt(t);
            e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var Db = Object.defineProperty
  , kb = (i, e, t) => e in i ? Db(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ii = (i, e, t) => kb(i, typeof e != "symbol" ? e + "" : e, t);
class Mb {
    constructor(e) {
        ii(this, "name", "algorand"),
        ii(this, "client"),
        ii(this, "httpProviders"),
        ii(this, "events"),
        ii(this, "namespace"),
        ii(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (!this.httpProviders[e]) {
            const s = t || Me(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!s)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s)
        }
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            e[t] = this.createHttpProvider(t, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        return typeof s > "u" ? void 0 : new He(new Ze(s,G("disableProviderPing")))
    }
}
var Ub = Object.defineProperty
  , Lb = (i, e, t) => e in i ? Ub(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , si = (i, e, t) => Lb(i, typeof e != "symbol" ? e + "" : e, t);
class Bb {
    constructor(e) {
        si(this, "name", "cip34"),
        si(this, "client"),
        si(this, "httpProviders"),
        si(this, "events"),
        si(this, "namespace"),
        si(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            const s = this.getCardanoRPCUrl(t)
              , r = Vt(t);
            e[r] = this.createHttpProvider(r, s)
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    getCardanoRPCUrl(e) {
        const t = this.namespace.rpcMap;
        if (t)
            return t[e]
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || this.getCardanoRPCUrl(e);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var zb = Object.defineProperty
  , Kb = (i, e, t) => e in i ? zb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ri = (i, e, t) => Kb(i, typeof e != "symbol" ? e + "" : e, t);
class Hb {
    constructor(e) {
        ri(this, "name", "elrond"),
        ri(this, "client"),
        ri(this, "httpProviders"),
        ri(this, "events"),
        ri(this, "namespace"),
        ri(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const r = Vt(t);
            e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var Vb = Object.defineProperty
  , Fb = (i, e, t) => e in i ? Vb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ni = (i, e, t) => Fb(i, typeof e != "symbol" ? e + "" : e, t);
class Gb {
    constructor(e) {
        ni(this, "name", "multiversx"),
        ni(this, "client"),
        ni(this, "httpProviders"),
        ni(this, "events"),
        ni(this, "namespace"),
        ni(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const r = Vt(t);
            e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var Wb = Object.defineProperty
  , Jb = (i, e, t) => e in i ? Wb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , oi = (i, e, t) => Jb(i, typeof e != "symbol" ? e + "" : e, t);
class Qb {
    constructor(e) {
        oi(this, "name", "near"),
        oi(this, "client"),
        oi(this, "httpProviders"),
        oi(this, "events"),
        oi(this, "namespace"),
        oi(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            const s = t || Me(`${this.name}:${e}`, this.namespace);
            if (!s)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s)
        }
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            e[t] = this.createHttpProvider(t, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace);
        return typeof s > "u" ? void 0 : new He(new Ze(s,G("disableProviderPing")))
    }
}
var Yb = Object.defineProperty
  , Zb = (i, e, t) => e in i ? Yb(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ai = (i, e, t) => Zb(i, typeof e != "symbol" ? e + "" : e, t);
class Xb {
    constructor(e) {
        ai(this, "name", "tezos"),
        ai(this, "client"),
        ai(this, "httpProviders"),
        ai(this, "events"),
        ai(this, "namespace"),
        ai(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            const s = t || Me(`${this.name}:${e}`, this.namespace);
            if (!s)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s)
        }
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            e[t] = this.createHttpProvider(t)
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace);
        return typeof s > "u" ? void 0 : new He(new Ze(s))
    }
}
var ev = Object.defineProperty
  , tv = (i, e, t) => e in i ? ev(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ci = (i, e, t) => tv(i, typeof e != "symbol" ? e + "" : e, t);
class iv {
    constructor(e) {
        ci(this, "name", hi),
        ci(this, "client"),
        ci(this, "httpProviders"),
        ci(this, "events"),
        ci(this, "namespace"),
        ci(this, "chainId"),
        this.namespace = e.namespace,
        this.events = G("events"),
        this.client = G("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))],
        this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))],
        this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))],
        this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))],
        this.httpProviders = this.createHttpProviders()
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ve.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        var e, t;
        const s = {};
        return (t = (e = this.namespace) == null ? void 0 : e.accounts) == null || t.forEach(r => {
            const n = gi(r);
            s[`${n.namespace}:${n.reference}`] = this.createHttpProvider(r)
        }
        ),
        s
    }
    getHttpProvider(e) {
        const t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Me(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new He(new Ze(s,G("disableProviderPing")))
    }
}
var sv = Object.defineProperty
  , rv = Object.defineProperties
  , nv = Object.getOwnPropertyDescriptors
  , ca = Object.getOwnPropertySymbols
  , ov = Object.prototype.hasOwnProperty
  , av = Object.prototype.propertyIsEnumerable
  , Fr = (i, e, t) => e in i ? sv(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ys = (i, e) => {
    for (var t in e || (e = {}))
        ov.call(e, t) && Fr(i, t, e[t]);
    if (ca)
        for (var t of ca(e))
            av.call(e, t) && Fr(i, t, e[t]);
    return i
}
  , fr = (i, e) => rv(i, nv(e))
  , Be = (i, e, t) => Fr(i, typeof e != "symbol" ? e + "" : e, t);
let cv = class Bc {
    constructor(e) {
        Be(this, "client"),
        Be(this, "namespaces"),
        Be(this, "optionalNamespaces"),
        Be(this, "sessionProperties"),
        Be(this, "scopedProperties"),
        Be(this, "events", new Zr),
        Be(this, "rpcProviders", {}),
        Be(this, "session"),
        Be(this, "providerOpts"),
        Be(this, "logger"),
        Be(this, "uri"),
        Be(this, "disableProviderPing", !1),
        this.providerOpts = e,
        this.logger = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : Jr(Ts({
            level: e?.logger || Qo
        })),
        this.disableProviderPing = e?.disableProviderPing || !1
    }
    static async init(e) {
        const t = new Bc(e);
        return await t.initialize(),
        t
    }
    async request(e, t, s) {
        const [r,n] = this.validateChain(t);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(r).request({
            request: ys({}, e),
            chainId: `${r}:${n}`,
            topic: this.session.topic,
            expiry: s
        })
    }
    sendAsync(e, t, s, r) {
        const n = new Date().getTime();
        this.request(e, s, r).then(o => t(null, qs(n, o))).catch(o => t(o, void 0))
    }
    async enable() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties
        }),
        await this.requestAccounts()
    }
    async disconnect() {
        var e;
        if (!this.session)
            throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (e = this.session) == null ? void 0 : e.topic,
            reason: Q("USER_DISCONNECTED")
        }),
        await this.cleanup()
    }
    async connect(e) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e),
        await this.cleanupPendingPairings(),
        !e.skipPairing)
            return await this.pair(e.pairingTopic)
    }
    async authenticate(e, t) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        this.setNamespaces(e),
        await this.cleanupPendingPairings();
        const {uri: s, response: r} = await this.client.authenticate(e, t);
        s && (this.uri = s,
        this.events.emit("display_uri", s));
        const n = await r();
        if (this.session = n.session,
        this.session) {
            const o = ra(this.session.namespaces);
            this.namespaces = fs(this.namespaces, o),
            await this.persist("namespaces", this.namespaces),
            this.onConnect()
        }
        return n
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(e) {
        const {uri: t, approval: s} = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties
        });
        t && (this.uri = t,
        this.events.emit("display_uri", t));
        const r = await s();
        this.session = r;
        const n = ra(r.namespaces);
        return this.namespaces = fs(this.namespaces, n),
        await this.persist("namespaces", this.namespaces),
        await this.persist("optionalNamespaces", this.optionalNamespaces),
        this.onConnect(),
        this.session
    }
    setDefaultChain(e, t) {
        try {
            if (!this.session)
                return;
            const [s,r] = this.validateChain(e)
              , n = this.getProvider(s);
            n.name === hi ? n.setDefaultChain(`${s}:${r}`, t) : n.setDefaultChain(r, t)
        } catch (s) {
            if (!/Please call connect/.test(s.message))
                throw s
        }
    }
    async cleanupPendingPairings(e={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (Ye(t)) {
            for (const s of t)
                e.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
    }
    abortPairingAttempt() {
        this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")
    }
    async checkStorage() {
        this.namespaces = await this.getFromStore("namespaces") || {},
        this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
        this.session && this.createProviders()
    }
    async initialize() {
        this.logger.trace("Initialized"),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners()
    }
    async createClient() {
        var e, t;
        if (this.client = this.providerOpts.client || await Dw.init({
            core: this.providerOpts.core,
            logger: this.providerOpts.logger || Qo,
            relayUrl: this.providerOpts.relayUrl || kw,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name,
            customStoragePrefix: this.providerOpts.customStoragePrefix,
            telemetryEnabled: this.providerOpts.telemetryEnabled
        }),
        this.providerOpts.session)
            try {
                this.session = this.client.session.get(this.providerOpts.session.topic)
            } catch (s) {
                throw this.logger.error("Failed to get session", s),
                new Error(`The provided session: ${(t = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : t.topic} doesn't exist in the Sign client`)
            }
        else {
            const s = this.client.session.getAll();
            this.session = s[0]
        }
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const e = [...new Set(Object.keys(this.session.namespaces).map(t => pi(t)))];
        gr("client", this.client),
        gr("events", this.events),
        gr("disableProviderPing", this.disableProviderPing),
        e.forEach(t => {
            if (!this.session)
                return;
            const s = vb(t, this.session)
              , r = Uc(s)
              , n = fs(this.namespaces, this.optionalNamespaces)
              , o = fr(ys({}, n[t]), {
                accounts: s,
                chains: r
            });
            switch (t) {
            case "eip155":
                this.rpcProviders[t] = new Ab({
                    namespace: o
                });
                break;
            case "algorand":
                this.rpcProviders[t] = new Mb({
                    namespace: o
                });
                break;
            case "solana":
                this.rpcProviders[t] = new Rb({
                    namespace: o
                });
                break;
            case "cosmos":
                this.rpcProviders[t] = new jb({
                    namespace: o
                });
                break;
            case "polkadot":
                this.rpcProviders[t] = new _b({
                    namespace: o
                });
                break;
            case "cip34":
                this.rpcProviders[t] = new Bb({
                    namespace: o
                });
                break;
            case "elrond":
                this.rpcProviders[t] = new Hb({
                    namespace: o
                });
                break;
            case "multiversx":
                this.rpcProviders[t] = new Gb({
                    namespace: o
                });
                break;
            case "near":
                this.rpcProviders[t] = new Qb({
                    namespace: o
                });
                break;
            case "tezos":
                this.rpcProviders[t] = new Xb({
                    namespace: o
                });
                break;
            default:
                this.rpcProviders[hi] ? this.rpcProviders[hi].updateNamespace(o) : this.rpcProviders[hi] = new iv({
                    namespace: o
                })
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", e => {
            var t;
            const {topic: s} = e;
            s === ((t = this.session) == null ? void 0 : t.topic) && this.events.emit("session_ping", e)
        }
        ),
        this.client.on("session_event", e => {
            var t;
            const {params: s, topic: r} = e;
            if (r !== ((t = this.session) == null ? void 0 : t.topic))
                return;
            const {event: n} = s;
            if (n.name === "accountsChanged") {
                const o = n.data;
                o && Ye(o) && this.events.emit("accountsChanged", o.map(sa))
            } else if (n.name === "chainChanged") {
                const o = s.chainId
                  , a = s.event.data
                  , c = pi(o)
                  , h = dr(o) !== dr(a) ? `${c}:${dr(a)}` : o;
                this.onChainChanged(h)
            } else
                this.events.emit(n.name, n.data);
            this.events.emit("session_event", e)
        }
        ),
        this.client.on("session_update", ({topic: e, params: t}) => {
            var s, r;
            if (e !== ((s = this.session) == null ? void 0 : s.topic))
                return;
            const {namespaces: n} = t
              , o = (r = this.client) == null ? void 0 : r.session.get(e);
            this.session = fr(ys({}, o), {
                namespaces: n
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: e,
                params: t
            })
        }
        ),
        this.client.on("session_delete", async e => {
            var t;
            e.topic === ((t = this.session) == null ? void 0 : t.topic) && (await this.cleanup(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", fr(ys({}, Q("USER_DISCONNECTED")), {
                data: e.topic
            })))
        }
        ),
        this.on(Ve.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
        }
        )
    }
    getProvider(e) {
        return this.rpcProviders[e] || this.rpcProviders[hi]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e => {
            var t;
            this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e])
        }
        )
    }
    setNamespaces(e) {
        const {namespaces: t={}, optionalNamespaces: s={}, sessionProperties: r, scopedProperties: n} = e;
        this.optionalNamespaces = fs(t, s),
        this.sessionProperties = r,
        this.scopedProperties = n
    }
    validateChain(e) {
        const [t,s] = e?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, s];
        if (t && !Object.keys(this.namespaces || {}).map(o => pi(o)).includes(t))
            throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && s)
            return [t, s];
        const r = pi(Object.keys(this.namespaces)[0])
          , n = this.rpcProviders[r].getDefaultChain();
        return [r, n]
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
    }
    async onChainChanged(e, t=!1) {
        if (!this.namespaces)
            return;
        const [s,r] = this.validateChain(e);
        if (!r)
            return;
        this.updateNamespaceChain(s, r),
        this.events.emit("chainChanged", r);
        const n = this.getProvider(s).getDefaultChain();
        t || this.getProvider(s).setDefaultChain(r),
        this.emitAccountsChangedOnChainChange({
            namespace: s,
            previousChainId: n,
            newChainId: e
        }),
        await this.persist("namespaces", this.namespaces)
    }
    emitAccountsChangedOnChainChange({namespace: e, previousChainId: t, newChainId: s}) {
        var r, n;
        try {
            if (t === s)
                return;
            const o = (n = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : n.accounts;
            if (!o)
                return;
            const a = o.filter(c => c.includes(`${s}:`)).map(sa);
            if (!Ye(a))
                return;
            this.events.emit("accountsChanged", a)
        } catch (o) {
            this.logger.warn("Failed to emit accountsChanged on chain change", o)
        }
    }
    updateNamespaceChain(e, t) {
        if (!this.namespaces)
            return;
        const s = this.namespaces[e] ? e : `${e}:${t}`
          , r = {
            chains: [],
            methods: [],
            events: [],
            defaultChain: t
        };
        this.namespaces[s] ? this.namespaces[s] && (this.namespaces[s].defaultChain = t) : this.namespaces[s] = r
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.namespaces = void 0,
        this.optionalNamespaces = void 0,
        this.sessionProperties = void 0,
        await this.deleteFromStore("namespaces"),
        await this.deleteFromStore("optionalNamespaces"),
        await this.deleteFromStore("sessionProperties"),
        this.session = void 0,
        await this.cleanupPendingPairings({
            deletePairings: !0
        }),
        await this.cleanupStorage()
    }
    async persist(e, t) {
        var s;
        const r = ((s = this.session) == null ? void 0 : s.topic) || "";
        await this.client.core.storage.setItem(`${ds}/${e}${r}`, t)
    }
    async getFromStore(e) {
        var t;
        const s = ((t = this.session) == null ? void 0 : t.topic) || "";
        return await this.client.core.storage.getItem(`${ds}/${e}${s}`)
    }
    async deleteFromStore(e) {
        var t;
        const s = ((t = this.session) == null ? void 0 : t.topic) || "";
        await this.client.core.storage.removeItem(`${ds}/${e}${s}`)
    }
    async cleanupStorage() {
        var e;
        try {
            if (((e = this.client) == null ? void 0 : e.session.length) > 0)
                return;
            const t = await this.client.core.storage.getKeys();
            for (const s of t)
                s.startsWith(ds) && await this.client.core.storage.removeItem(s)
        } catch (t) {
            this.logger.warn("Failed to cleanup storage", t)
        }
    }
}
;
const hv = cv
  , lv = "wc"
  , uv = "ethereum_provider"
  , pv = `${lv}@2:${uv}:`
  , dv = "https://rpc.walletconnect.org/v1/"
  , Cs = ["eth_sendTransaction", "personal_sign"]
  , zc = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"]
  , Ns = ["chainChanged", "accountsChanged"]
  , Kc = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"]
  , gv = async () => {
    const {createAppKit: i} = await pa( () => import("./core-DalZKZG0.js").then(e => e.u), __vite__mapDeps([5, 1, 2, 3, 4, 6]));
    return i
}
;
var fv = Object.defineProperty
  , yv = Object.defineProperties
  , mv = Object.getOwnPropertyDescriptors
  , ha = Object.getOwnPropertySymbols
  , wv = Object.prototype.hasOwnProperty
  , bv = Object.prototype.propertyIsEnumerable
  , Gr = (i, e, t) => e in i ? fv(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Tt = (i, e) => {
    for (var t in e || (e = {}))
        wv.call(e, t) && Gr(i, t, e[t]);
    if (ha)
        for (var t of ha(e))
            bv.call(e, t) && Gr(i, t, e[t]);
    return i
}
  , ki = (i, e) => yv(i, mv(e))
  , Te = (i, e, t) => Gr(i, typeof e != "symbol" ? e + "" : e, t);
function Rs(i) {
    return Number(i[0].split(":")[1])
}
function ms(i) {
    return `0x${i.toString(16)}`
}
function vv(i) {
    const {chains: e, optionalChains: t, methods: s, optionalMethods: r, events: n, optionalEvents: o, rpcMap: a} = i;
    if (!Ye(e))
        throw new Error("Invalid chains");
    const c = {
        chains: e,
        methods: s || Cs,
        events: n || Ns,
        rpcMap: Tt({}, e.length ? {
            [Rs(e)]: a[Rs(e)]
        } : {})
    }
      , h = n?.filter(d => !Ns.includes(d))
      , l = s?.filter(d => !Cs.includes(d));
    if (!t && !o && !r && !(h != null && h.length) && !(l != null && l.length))
        return {
            required: e.length ? c : void 0
        };
    const u = h?.length && l?.length || !t
      , p = {
        chains: [...new Set(u ? c.chains.concat(t || []) : t)],
        methods: [...new Set(c.methods.concat(r != null && r.length ? r : zc))],
        events: [...new Set(c.events.concat(o != null && o.length ? o : Kc))],
        rpcMap: a
    };
    return {
        required: e.length ? c : void 0,
        optional: t.length ? p : void 0
    }
}
class Hs {
    constructor() {
        Te(this, "events", new Ot.EventEmitter),
        Te(this, "namespace", "eip155"),
        Te(this, "accounts", []),
        Te(this, "signer"),
        Te(this, "chainId", 1),
        Te(this, "modal"),
        Te(this, "rpc"),
        Te(this, "STORAGE_KEY", pv),
        Te(this, "on", (e, t) => (this.events.on(e, t),
        this)),
        Te(this, "once", (e, t) => (this.events.once(e, t),
        this)),
        Te(this, "removeListener", (e, t) => (this.events.removeListener(e, t),
        this)),
        Te(this, "off", (e, t) => (this.events.off(e, t),
        this)),
        Te(this, "parseAccount", e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
        this.signer = {},
        this.rpc = {}
    }
    static async init(e) {
        const t = new Hs;
        return await t.initialize(e),
        t
    }
    async request(e, t) {
        return await this.signer.request(e, this.formatChainId(this.chainId), t)
    }
    sendAsync(e, t, s) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(),
        await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(e) {
        var t;
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        const {required: s, optional: r} = vv(this.rpc);
        try {
            const n = await new Promise(async (a, c) => {
                var h, l;
                this.rpc.showQrModal && ((h = this.modal) == null || h.open(),
                (l = this.modal) == null || l.subscribeState(p => {
                    !p.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    c(new Error("Connection request reset. Please try again.")))
                }
                ));
                const u = e != null && e.scopedProperties ? {
                    [this.namespace]: e.scopedProperties
                } : void 0;
                await this.signer.connect(ki(Tt({
                    namespaces: Tt({}, s && {
                        [this.namespace]: s
                    })
                }, r && {
                    optionalNamespaces: {
                        [this.namespace]: r
                    }
                }), {
                    pairingTopic: e?.pairingTopic,
                    scopedProperties: u
                })).then(p => {
                    a(p)
                }
                ).catch(p => {
                    var d;
                    (d = this.modal) == null || d.showErrorMessage("Unable to connect"),
                    c(new Error(p.message))
                }
                )
            }
            );
            if (!n)
                return;
            const o = _n(n.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
            this.setAccounts(o),
            this.events.emit("connect", {
                chainId: ms(this.chainId)
            })
        } catch (n) {
            throw this.signer.logger.error(n),
            n
        } finally {
            (t = this.modal) == null || t.close()
        }
    }
    async authenticate(e, t) {
        var s;
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({
            chains: e?.chains
        });
        try {
            const r = await new Promise(async (o, a) => {
                var c, h;
                this.rpc.showQrModal && ((c = this.modal) == null || c.open(),
                (h = this.modal) == null || h.subscribeState(l => {
                    !l.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    a(new Error("Connection request reset. Please try again.")))
                }
                )),
                await this.signer.authenticate(ki(Tt({}, e), {
                    chains: this.rpc.chains
                }), t).then(l => {
                    o(l)
                }
                ).catch(l => {
                    var u;
                    (u = this.modal) == null || u.showErrorMessage("Unable to connect"),
                    a(new Error(l.message))
                }
                )
            }
            )
              , n = r.session;
            if (n) {
                const o = _n(n.namespaces, [this.namespace]);
                this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
                this.setAccounts(o),
                this.events.emit("connect", {
                    chainId: ms(this.chainId)
                })
            }
            return r
        } catch (r) {
            throw this.signer.logger.error(r),
            r
        } finally {
            (s = this.modal) == null || s.close()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(),
        this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", e => {
            const {params: t} = e
              , {event: s} = t;
            s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data),
            this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data),
            this.events.emit("session_event", e)
        }
        ),
        this.signer.on("accountsChanged", e => {
            this.accounts = this.parseAccounts(e),
            this.events.emit("accountsChanged", this.accounts)
        }
        ),
        this.signer.on("chainChanged", e => {
            const t = parseInt(e);
            this.chainId = t,
            this.events.emit("chainChanged", ms(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", e => {
            this.events.emit("session_update", e)
        }
        ),
        this.signer.on("session_delete", e => {
            this.reset(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", ki(Tt({}, Q("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", e => {
            this.events.emit("display_uri", e)
        }
        )
    }
    switchEthereumChain(e) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: e.toString(16)
            }]
        })
    }
    isCompatibleChainId(e) {
        return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(e) {
        return `${this.namespace}:${e}`
    }
    parseChainId(e) {
        return Number(e.split(":")[1])
    }
    setChainIds(e) {
        const t = e.filter(s => this.isCompatibleChainId(s)).map(s => this.parseChainId(s));
        t.length && (this.chainId = t[0],
        this.events.emit("chainChanged", ms(this.chainId)),
        this.persist())
    }
    setChainId(e) {
        if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            this.chainId = t,
            this.switchEthereumChain(t)
        }
    }
    parseAccountId(e) {
        const [t,s,r] = e.split(":");
        return {
            chainId: `${t}:${s}`,
            address: r
        }
    }
    setAccounts(e) {
        this.accounts = e.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(e) {
        var t, s;
        const r = (t = e?.chains) != null ? t : []
          , n = (s = e?.optionalChains) != null ? s : []
          , o = r.concat(n);
        if (!o.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        const a = r.length ? e?.methods || Cs : []
          , c = r.length ? e?.events || Ns : []
          , h = e?.optionalMethods || []
          , l = e?.optionalEvents || []
          , u = e?.rpcMap || this.buildRpcMap(o, e.projectId)
          , p = e?.qrModalOptions || void 0;
        return {
            chains: r?.map(d => this.formatChainId(d)),
            optionalChains: n.map(d => this.formatChainId(d)),
            methods: a,
            events: c,
            optionalMethods: h,
            optionalEvents: l,
            rpcMap: u,
            showQrModal: !!(e != null && e.showQrModal),
            qrModalOptions: p,
            projectId: e.projectId,
            metadata: e.metadata
        }
    }
    buildRpcMap(e, t) {
        const s = {};
        return e.forEach(r => {
            s[r] = this.getRpcUrl(r, t)
        }
        ),
        s
    }
    async initialize(e) {
        if (this.rpc = this.getRpcConfig(e),
        this.chainId = this.rpc.chains.length ? Rs(this.rpc.chains) : Rs(this.rpc.optionalChains),
        this.signer = await hv.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storage: e.storage,
            storageOptions: e.storageOptions,
            customStoragePrefix: e.customStoragePrefix,
            telemetryEnabled: e.telemetryEnabled,
            logger: e.logger
        }),
        this.registerEventListeners(),
        await this.loadPersistedSession(),
        this.rpc.showQrModal) {
            let t;
            try {
                const s = await gv()
                  , {convertWCMToAppKitOptions: r} = await Promise.resolve().then(function() {
                    return Nv
                })
                  , n = r(ki(Tt({}, this.rpc.qrModalOptions), {
                    chains: [...new Set([...this.rpc.chains, ...this.rpc.optionalChains])],
                    metadata: this.rpc.metadata,
                    projectId: this.rpc.projectId
                }));
                if (!n.networks.length)
                    throw new Error("No networks found for WalletConnect·");
                t = s(ki(Tt({}, n), {
                    universalProvider: this.signer,
                    manualWCControl: !0
                }))
            } catch (s) {
                throw console.warn(s),
                new Error("To use QR modal, please install @reown/appkit package")
            }
            if (t)
                try {
                    this.modal = t
                } catch (s) {
                    throw this.signer.logger.error(s),
                    new Error("Could not generate WalletConnectModal Instance")
                }
        }
    }
    loadConnectOpts(e) {
        if (!e)
            return;
        const {chains: t, optionalChains: s, rpcMap: r} = e;
        t && Ye(t) && (this.rpc.chains = t.map(n => this.formatChainId(n)),
        t.forEach(n => {
            this.rpc.rpcMap[n] = r?.[n] || this.getRpcUrl(n)
        }
        )),
        s && Ye(s) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = s?.map(n => this.formatChainId(n)),
        s.forEach(n => {
            this.rpc.rpcMap[n] = r?.[n] || this.getRpcUrl(n)
        }
        ))
    }
    getRpcUrl(e, t) {
        var s;
        return ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) || `${dv}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (this.session)
            try {
                const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
                  , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts)
            } catch (e) {
                this.signer.logger.error("Failed to load persisted session, clearing state..."),
                this.signer.logger.error(e),
                await this.disconnect().catch(t => this.signer.logger.warn(t))
            }
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(e) {
        return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map(t => this.parseAccount(t))
    }
}
const Ev = Hs;
var Iv = Object.defineProperty
  , _v = Object.defineProperties
  , Pv = Object.getOwnPropertyDescriptors
  , la = Object.getOwnPropertySymbols
  , $v = Object.prototype.hasOwnProperty
  , Sv = Object.prototype.propertyIsEnumerable
  , ua = (i, e, t) => e in i ? Iv(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Hc = (i, e) => {
    for (var t in e || (e = {}))
        $v.call(e, t) && ua(i, t, e[t]);
    if (la)
        for (var t of la(e))
            Sv.call(e, t) && ua(i, t, e[t]);
    return i
}
  , Ov = (i, e) => _v(i, Pv(e));
function xv(i) {
    if (i)
        return {
            "--w3m-font-family": i["--wcm-font-family"],
            "--w3m-accent": i["--wcm-accent-color"],
            "--w3m-color-mix": i["--wcm-background-color"],
            "--w3m-z-index": i["--wcm-z-index"] ? Number(i["--wcm-z-index"]) : void 0,
            "--w3m-qr-color": i["--wcm-accent-color"],
            "--w3m-font-size-master": i["--wcm-text-medium-regular-size"],
            "--w3m-border-radius-master": i["--wcm-container-border-radius"],
            "--w3m-color-mix-strength": 0
        }
}
const Av = i => {
    const [e,t] = i.split(":");
    return Vc({
        id: t,
        caipNetworkId: i,
        chainNamespace: e,
        name: "",
        nativeCurrency: {
            name: "",
            symbol: "",
            decimals: 8
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.walletconnect.org/v1"]
            }
        }
    })
}
;
function Cv(i) {
    var e, t, s, r, n, o, a;
    const c = (e = i.chains) == null ? void 0 : e.map(Av).filter(Boolean);
    if (c.length === 0)
        throw new Error("At least one chain must be specified");
    const h = c.find(u => {
        var p;
        return u.id === ((p = i.defaultChain) == null ? void 0 : p.id)
    }
    )
      , l = {
        projectId: i.projectId,
        networks: c,
        themeMode: i.themeMode,
        themeVariables: xv(i.themeVariables),
        chainImages: i.chainImages,
        connectorImages: i.walletImages,
        defaultNetwork: h,
        metadata: Ov(Hc({}, i.metadata), {
            name: ((t = i.metadata) == null ? void 0 : t.name) || "WalletConnect",
            description: ((s = i.metadata) == null ? void 0 : s.description) || "Connect to WalletConnect-compatible wallets",
            url: ((r = i.metadata) == null ? void 0 : r.url) || "https://walletconnect.org",
            icons: ((n = i.metadata) == null ? void 0 : n.icons) || ["https://walletconnect.org/walletconnect-logo.png"]
        }),
        showWallets: !0,
        featuredWalletIds: i.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(i.explorerRecommendedWalletIds) ? i.explorerRecommendedWalletIds : [],
        excludeWalletIds: i.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(i.explorerExcludedWalletIds) ? i.explorerExcludedWalletIds : [],
        enableEIP6963: !1,
        enableInjected: !1,
        enableCoinbase: !0,
        enableWalletConnect: !0,
        features: {
            email: !1,
            socials: !1
        }
    };
    if ((o = i.mobileWallets) != null && o.length || (a = i.desktopWallets) != null && a.length) {
        const u = [...(i.mobileWallets || []).map(g => ({
            id: g.id,
            name: g.name,
            links: g.links
        })), ...(i.desktopWallets || []).map(g => ({
            id: g.id,
            name: g.name,
            links: {
                native: g.links.native,
                universal: g.links.universal
            }
        }))]
          , p = [...l.featuredWalletIds || [], ...l.excludeWalletIds || []]
          , d = u.filter(g => !p.includes(g.id));
        d.length && (l.customWallets = d)
    }
    return l
}
function Vc(i) {
    return Hc({
        formatters: void 0,
        fees: void 0,
        serializers: void 0
    }, i)
}
var Nv = Object.freeze({
    __proto__: null,
    convertWCMToAppKitOptions: Cv,
    defineChain: Vc
});
const rE = Object.freeze(Object.defineProperty({
    __proto__: null,
    EthereumProvider: Ev,
    OPTIONAL_EVENTS: Kc,
    OPTIONAL_METHODS: zc,
    REQUIRED_EVENTS: Ns,
    REQUIRED_METHODS: Cs,
    default: Hs
}, Symbol.toStringTag, {
    value: "Module"
}));
export {uh as H, gn as a, ah as b, jv as c, qv as d, js as e, Mv as f, kv as g, rg as h, rE as i, Bh as k, Dv as r, ga as t, ph as w};
//# sourceMappingURL=index.es-Bx--q_0T.js.map
