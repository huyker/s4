const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/secp256k1-DnIu5m5w.js", "assets/index.es-Bx--q_0T.js", "assets/main-CVc-xj4y.js", "assets/config-ewMXOZVY.js", "assets/main-C0iQzFUs.css", "assets/to-string-DV9ssbr2.js", "assets/basic-BrfNJLul.js", "assets/lit-element-D0fUBeRb.js", "assets/class-map-ydzjBnHc.js", "assets/index-_a4N8s_p.js", "assets/ref-Dy9GuwgG.js", "assets/w3m-modal-BHlZSbc-.js"]))) => i.map(i => d[i]);
import {a2 as wr, Y as fd, ai as kr, _ as Dn, $ as md, a0 as U, a1 as re, a3 as os, a4 as wd, a5 as yd, a6 as Ze, a7 as Ln, a8 as Uc, aj as zs, ak as pi, al as Dc, am as st, an as bd, ao as bt, ap as Ds, aq as Tr, ar as bo, as as St, at as vd, au as vo, av as Co, aw as Yi, ax as Eo, ay as Do, az as Cd, aA as Ed, ab as Id, aa as Lo, aB as pr, aC as Lc, aD as es, aE as Wt, aF as as, aG as Lt, i as Ni, t as Mo} from "./main-CVc-xj4y.js";
import {k as Nd, h as Ad} from "./index.es-Bx--q_0T.js";
import {f as _t, t as dt, c as Zr} from "./to-string-DV9ssbr2.js";
import {B as Lr, f as Bo, r as kt, i as yr} from "./lit-element-D0fUBeRb.js";
var qo = {};
const z = {
    WC_NAME_SUFFIX: ".reown.id",
    WC_NAME_SUFFIX_LEGACY: ".wcn.id",
    BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
    PULSE_API_URL: "https://pulse.walletconnect.org",
    W3M_API_URL: "https://api.web3modal.org",
    CONNECTOR_ID: {
        WALLET_CONNECT: "walletConnect",
        INJECTED: "injected",
        WALLET_STANDARD: "announced",
        COINBASE: "coinbaseWallet",
        COINBASE_SDK: "coinbaseWalletSDK",
        SAFE: "safe",
        LEDGER: "ledger",
        OKX: "okx",
        EIP6963: "eip6963",
        AUTH: "ID_AUTH"
    },
    CONNECTOR_NAMES: {
        AUTH: "Auth"
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
    LIMITS: {
        PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
        EVM: "eip155",
        SOLANA: "solana",
        POLKADOT: "polkadot",
        BITCOIN: "bip122"
    },
    CHAIN_NAME_MAP: {
        eip155: "EVM Networks",
        solana: "Solana",
        polkadot: "Polkadot",
        bip122: "Bitcoin",
        cosmos: "Cosmos"
    },
    ADAPTER_TYPES: {
        BITCOIN: "bitcoin",
        SOLANA: "solana",
        WAGMI: "wagmi",
        ETHERS: "ethers",
        ETHERS5: "ethers5"
    },
    USDT_CONTRACT_ADDRESSES: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", "0x919C1c267BC06a7039e03fcc2eF738525769109c", "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e", "0x55d398326f99059fF775485246999027B3197955", "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],
    HTTP_STATUS_CODES: {
        SERVICE_UNAVAILABLE: 503,
        FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: "Unknown Network",
    SECURE_SITE_SDK_ORIGIN: (typeof wr < "u" && typeof qo < "u" ? qo.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org"
}
  , Mc = {
    caipNetworkIdToNumber(t) {
        return t ? Number(t.split(":")[1]) : void 0
    },
    parseEvmChainId(t) {
        return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t
    },
    getNetworksByNamespace(t, e) {
        return t?.filter(s => s.chainNamespace === e) || []
    },
    getFirstNetworkByNamespace(t, e) {
        return this.getNetworksByNamespace(t, e)[0]
    },
    getNetworkNameByCaipNetworkId(t, e) {
        if (!e)
            return;
        const s = t.find(i => i.caipNetworkId === e);
        if (s)
            return s.name;
        const [r] = e.split(":");
        return z.CHAIN_NAME_MAP?.[r] || void 0
    }
}
  , _d = {
    bigNumber(t) {
        return t ? new Lr(t) : new Lr(0)
    },
    multiply(t, e) {
        if (t === void 0 || e === void 0)
            return new Lr(0);
        const s = new Lr(t)
          , r = new Lr(e);
        return s.times(r)
    },
    formatNumberToLocalString(t, e=2) {
        return t === void 0 ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
            maximumFractionDigits: e,
            minimumFractionDigits: e
        }) : parseFloat(t).toLocaleString("en-US", {
            maximumFractionDigits: e,
            minimumFractionDigits: e
        })
    },
    parseLocalStringToNumber(t) {
        return t === void 0 ? 0 : parseFloat(t.replace(/,/gu, ""))
    }
}
  , Sd = [{
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [{
        name: "_to",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}, {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [{
        name: "_from",
        type: "address"
    }, {
        name: "_to",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}]
  , Pd = [{
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [{
        name: "spender",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        type: "bool"
    }]
}]
  , kd = [{
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [{
        name: "recipient",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: []
}, {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [{
        name: "sender",
        type: "address"
    }, {
        name: "recipient",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}]
  , Td = {
    getERC20Abi: t => z.USDT_CONTRACT_ADDRESSES.includes(t) ? kd : Sd,
    getSwapAbi: () => Pd
}
  , cs = {
    validateCaipAddress(t) {
        if (t.split(":")?.length !== 3)
            throw new Error("Invalid CAIP Address");
        return t
    },
    parseCaipAddress(t) {
        const e = t.split(":");
        if (e.length !== 3)
            throw new Error(`Invalid CAIP-10 address: ${t}`);
        const [s,r,i] = e;
        if (!s || !r || !i)
            throw new Error(`Invalid CAIP-10 address: ${t}`);
        return {
            chainNamespace: s,
            chainId: r,
            address: i
        }
    },
    parseCaipNetworkId(t) {
        const e = t.split(":");
        if (e.length !== 2)
            throw new Error(`Invalid CAIP-2 network id: ${t}`);
        const [s,r] = e;
        if (!s || !r)
            throw new Error(`Invalid CAIP-2 network id: ${t}`);
        return {
            chainNamespace: s,
            chainId: r
        }
    }
}
  , ee = {
    WALLET_ID: "@appkit/wallet_id",
    WALLET_NAME: "@appkit/wallet_name",
    SOLANA_WALLET: "@appkit/solana_wallet",
    SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
    ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
    CONNECTED_SOCIAL: "@appkit/connected_social",
    CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
    RECENT_WALLETS: "@appkit/recent_wallets",
    DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    ACTIVE_NAMESPACE: "@appkit/active_namespace",
    CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
    CONNECTION_STATUS: "@appkit/connection_status",
    SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
    SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
    TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
    NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
    PORTFOLIO_CACHE: "@appkit/portfolio_cache",
    ENS_CACHE: "@appkit/ens_cache",
    IDENTITY_CACHE: "@appkit/identity_cache",
    PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
    CONNECTIONS: "@appkit/connections"
};
function on(t) {
    if (!t)
        throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`
}
const X = {
    setItem(t, e) {
        Hr() && e !== void 0 && localStorage.setItem(t, e)
    },
    getItem(t) {
        if (Hr())
            return localStorage.getItem(t) || void 0
    },
    removeItem(t) {
        Hr() && localStorage.removeItem(t)
    },
    clear() {
        Hr() && localStorage.clear()
    }
};
function Hr() {
    return typeof window < "u" && typeof localStorage < "u"
}
function ws(t, e) {
    return e === "light" ? {
        "--w3m-accent": t?.["--w3m-accent"] || "hsla(231, 100%, 70%, 1)",
        "--w3m-background": "#fff"
    } : {
        "--w3m-accent": t?.["--w3m-accent"] || "hsla(230, 100%, 67%, 1)",
        "--w3m-background": "#121313"
    }
}
const Od = Symbol()
  , jo = Object.getPrototypeOf
  , Mn = new WeakMap
  , xd = t => t && (Mn.has(t) ? Mn.get(t) : jo(t) === Object.prototype || jo(t) === Array.prototype)
  , Rd = t => xd(t) && t[Od] || null
  , Fo = (t, e=!0) => {
    Mn.set(t, e)
}
  , Wi = {}
  , an = t => typeof t == "object" && t !== null
  , gs = new WeakMap
  , Vr = new WeakSet
  , $d = (t=Object.is, e= (l, d) => new Proxy(l,d), s=l => an(l) && !Vr.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), r=l => {
    switch (l.status) {
    case "fulfilled":
        return l.value;
    case "rejected":
        throw l.reason;
    default:
        throw l
    }
}
, i=new WeakMap, n= (l, d, u=r) => {
    const p = i.get(l);
    if (p?.[0] === d)
        return p[1];
    const f = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
    return Fo(f, !0),
    i.set(l, [d, f]),
    Reflect.ownKeys(l).forEach(m => {
        if (Object.getOwnPropertyDescriptor(f, m))
            return;
        const w = Reflect.get(l, m)
          , {enumerable: g} = Reflect.getOwnPropertyDescriptor(l, m)
          , y = {
            value: w,
            enumerable: g,
            configurable: !0
        };
        if (Vr.has(w))
            Fo(w, !1);
        else if (w instanceof Promise)
            delete y.value,
            y.get = () => u(w);
        else if (gs.has(w)) {
            const [b,I] = gs.get(w);
            y.value = n(b, I(), u)
        }
        Object.defineProperty(f, m, y)
    }
    ),
    Object.preventExtensions(f)
}
, o=new WeakMap, a=[1, 1], c=l => {
    if (!an(l))
        throw new Error("object required");
    const d = o.get(l);
    if (d)
        return d;
    let u = a[0];
    const p = new Set
      , f = (v, x=++a[0]) => {
        u !== x && (u = x,
        p.forEach(C => C(v, x)))
    }
    ;
    let m = a[1];
    const w = (v=++a[1]) => (m !== v && !p.size && (m = v,
    y.forEach( ([x]) => {
        const C = x[1](v);
        C > u && (u = C)
    }
    )),
    u)
      , g = v => (x, C) => {
        const L = [...x];
        L[1] = [v, ...L[1]],
        f(L, C)
    }
      , y = new Map
      , b = (v, x) => {
        if ((Wi ? "production" : void 0) !== "production" && y.has(v))
            throw new Error("prop listener already exists");
        if (p.size) {
            const C = x[3](g(v));
            y.set(v, [x, C])
        } else
            y.set(v, [x])
    }
      , I = v => {
        var x;
        const C = y.get(v);
        C && (y.delete(v),
        (x = C[1]) == null || x.call(C))
    }
      , O = v => (p.add(v),
    p.size === 1 && y.forEach( ([C,L], H) => {
        if ((Wi ? "production" : void 0) !== "production" && L)
            throw new Error("remove already exists");
        const E = C[3](g(H));
        y.set(H, [C, E])
    }
    ),
    () => {
        p.delete(v),
        p.size === 0 && y.forEach( ([C,L], H) => {
            L && (L(),
            y.set(H, [C]))
        }
        )
    }
    )
      , R = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l))
      , _ = e(R, {
        deleteProperty(v, x) {
            const C = Reflect.get(v, x);
            I(x);
            const L = Reflect.deleteProperty(v, x);
            return L && f(["delete", [x], C]),
            L
        },
        set(v, x, C, L) {
            const H = Reflect.has(v, x)
              , E = Reflect.get(v, x, L);
            if (H && (t(E, C) || o.has(C) && t(E, o.get(C))))
                return !0;
            I(x),
            an(C) && (C = Rd(C) || C);
            let k = C;
            if (C instanceof Promise)
                C.then(A => {
                    C.status = "fulfilled",
                    C.value = A,
                    f(["resolve", [x], A])
                }
                ).catch(A => {
                    C.status = "rejected",
                    C.reason = A,
                    f(["reject", [x], A])
                }
                );
            else {
                !gs.has(C) && s(C) && (k = c(C));
                const A = !Vr.has(k) && gs.get(k);
                A && b(x, A)
            }
            return Reflect.set(v, x, k, L),
            f(["set", [x], C, E]),
            !0
        }
    });
    o.set(l, _);
    const D = [R, w, n, O];
    return gs.set(_, D),
    Reflect.ownKeys(l).forEach(v => {
        const x = Object.getOwnPropertyDescriptor(l, v);
        "value"in x && (_[v] = l[v],
        delete x.value,
        delete x.writable),
        Object.defineProperty(R, v, x)
    }
    ),
    _
}
) => [c, gs, Vr, t, e, s, r, i, n, o, a]
  , [Ud] = $d();
function _e(t={}) {
    return Ud(t)
}
function Xe(t, e, s) {
    const r = gs.get(t);
    (Wi ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
    let i;
    const n = []
      , o = r[3];
    let a = !1;
    const l = o(d => {
        n.push(d),
        i || (i = Promise.resolve().then( () => {
            i = void 0,
            a && e(n.splice(0))
        }
        ))
    }
    );
    return a = !0,
    () => {
        a = !1,
        l()
    }
}
function oi(t, e) {
    const s = gs.get(t);
    (Wi ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
    const [r,i,n] = s;
    return n(r, i(), e)
}
function Bs(t) {
    return Vr.add(t),
    t
}
function Qe(t, e, s, r) {
    let i = t[e];
    return Xe(t, () => {
        const n = t[e];
        Object.is(i, n) || s(i = n)
    }
    )
}
function Dd(t) {
    const e = _e({
        data: Array.from([]),
        has(s) {
            return this.data.some(r => r[0] === s)
        },
        set(s, r) {
            const i = this.data.find(n => n[0] === s);
            return i ? i[1] = r : this.data.push([s, r]),
            this
        },
        get(s) {
            var r;
            return (r = this.data.find(i => i[0] === s)) == null ? void 0 : r[1]
        },
        delete(s) {
            const r = this.data.findIndex(i => i[0] === s);
            return r === -1 ? !1 : (this.data.splice(r, 1),
            !0)
        },
        clear() {
            this.data.splice(0)
        },
        get size() {
            return this.data.length
        },
        toJSON() {
            return new Map(this.data)
        },
        forEach(s) {
            this.data.forEach(r => {
                s(r[1], r[0], this)
            }
            )
        },
        keys() {
            return this.data.map(s => s[0]).values()
        },
        values() {
            return this.data.map(s => s[1]).values()
        },
        entries() {
            return new Map(this.data).entries()
        },
        get[Symbol.toStringTag]() {
            return "Map"
        },
        [Symbol.iterator]() {
            return this.entries()
        }
    });
    return Object.defineProperties(e, {
        data: {
            enumerable: !1
        },
        size: {
            enumerable: !1
        },
        toJSON: {
            enumerable: !1
        }
    }),
    Object.seal(e),
    e
}
const Bc = [{
    label: "Coinbase",
    name: "coinbase",
    feeRange: "1-2%",
    url: "",
    supportedChains: ["eip155"]
}, {
    label: "Meld.io",
    name: "meld",
    feeRange: "1-2%",
    url: "https://meldcrypto.com",
    supportedChains: ["eip155", "solana"]
}]
  , Ld = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU"
  , ve = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    ONE_SEC_MS: 1e3,
    BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
    NATIVE_TOKEN_ADDRESS: {
        eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        solana: "So11111111111111111111111111111111111111111",
        polkadot: "0x",
        bip122: "0x",
        cosmos: "0x"
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
        MOBILE: "Open and continue in the wallet app"
    },
    SEND_SUPPORTED_NAMESPACES: ["eip155", "solana"],
    DEFAULT_REMOTE_FEATURES: {
        swaps: ["1inch"],
        onramp: ["coinbase", "meld"],
        email: !0,
        socials: ["google", "x", "discord", "farcaster", "github", "apple", "facebook"],
        activity: !0,
        reownBranding: !0
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
        email: !1,
        socials: !1,
        swaps: !1,
        onramp: !1,
        activity: !1,
        reownBranding: !1
    },
    DEFAULT_FEATURES: {
        receive: !0,
        send: !0,
        emailShowWallets: !0,
        connectorTypeOrder: ["walletConnect", "recent", "injected", "featured", "custom", "external", "recommended"],
        analytics: !0,
        allWallets: !0,
        legalCheckbox: !1,
        smartSessions: !1,
        collapseWallets: !1,
        walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
        connectMethodsOrder: void 0,
        pay: !1
    },
    DEFAULT_ACCOUNT_TYPES: {
        bip122: "payment",
        eip155: "smartAccount",
        polkadot: "eoa",
        solana: "eoa"
    },
    ADAPTER_TYPES: {
        UNIVERSAL: "universal"
    }
}
  , F = {
    cacheExpiry: {
        portfolio: 3e4,
        nativeBalance: 3e4,
        ens: 3e5,
        identity: 3e5
    },
    isCacheExpired(t, e) {
        return Date.now() - t > e
    },
    getActiveNetworkProps() {
        const t = F.getActiveNamespace()
          , e = F.getActiveCaipNetworkId()
          , s = e ? e.split(":")[1] : void 0
          , r = s ? isNaN(Number(s)) ? s : Number(s) : void 0;
        return {
            namespace: t,
            caipNetworkId: e,
            chainId: r
        }
    },
    setWalletConnectDeepLink({name: t, href: e}) {
        try {
            X.setItem(ee.DEEPLINK_CHOICE, JSON.stringify({
                href: e,
                name: t
            }))
        } catch {
            console.info("Unable to set WalletConnect deep link")
        }
    },
    getWalletConnectDeepLink() {
        try {
            const t = X.getItem(ee.DEEPLINK_CHOICE);
            if (t)
                return JSON.parse(t)
        } catch {
            console.info("Unable to get WalletConnect deep link")
        }
    },
    deleteWalletConnectDeepLink() {
        try {
            X.removeItem(ee.DEEPLINK_CHOICE)
        } catch {
            console.info("Unable to delete WalletConnect deep link")
        }
    },
    setActiveNamespace(t) {
        try {
            X.setItem(ee.ACTIVE_NAMESPACE, t)
        } catch {
            console.info("Unable to set active namespace")
        }
    },
    setActiveCaipNetworkId(t) {
        try {
            X.setItem(ee.ACTIVE_CAIP_NETWORK_ID, t),
            F.setActiveNamespace(t.split(":")[0])
        } catch {
            console.info("Unable to set active caip network id")
        }
    },
    getActiveCaipNetworkId() {
        try {
            return X.getItem(ee.ACTIVE_CAIP_NETWORK_ID)
        } catch {
            console.info("Unable to get active caip network id");
            return
        }
    },
    deleteActiveCaipNetworkId() {
        try {
            X.removeItem(ee.ACTIVE_CAIP_NETWORK_ID)
        } catch {
            console.info("Unable to delete active caip network id")
        }
    },
    deleteConnectedConnectorId(t) {
        try {
            const e = on(t);
            X.removeItem(e)
        } catch {
            console.info("Unable to delete connected connector id")
        }
    },
    setAppKitRecent(t) {
        try {
            const e = F.getRecentWallets();
            e.find(r => r.id === t.id) || (e.unshift(t),
            e.length > 2 && e.pop(),
            X.setItem(ee.RECENT_WALLETS, JSON.stringify(e)))
        } catch {
            console.info("Unable to set AppKit recent")
        }
    },
    getRecentWallets() {
        try {
            const t = X.getItem(ee.RECENT_WALLETS);
            return t ? JSON.parse(t) : []
        } catch {
            console.info("Unable to get AppKit recent")
        }
        return []
    },
    setConnectedConnectorId(t, e) {
        try {
            const s = on(t);
            X.setItem(s, e)
        } catch {
            console.info("Unable to set Connected Connector Id")
        }
    },
    getActiveNamespace() {
        try {
            return X.getItem(ee.ACTIVE_NAMESPACE)
        } catch {
            console.info("Unable to get active namespace")
        }
    },
    getConnectedConnectorId(t) {
        if (t)
            try {
                const e = on(t);
                return X.getItem(e)
            } catch {
                console.info("Unable to get connected connector id in namespace ", t)
            }
    },
    setConnectedSocialProvider(t) {
        try {
            X.setItem(ee.CONNECTED_SOCIAL, t)
        } catch {
            console.info("Unable to set connected social provider")
        }
    },
    getConnectedSocialProvider() {
        try {
            return X.getItem(ee.CONNECTED_SOCIAL)
        } catch {
            console.info("Unable to get connected social provider")
        }
    },
    deleteConnectedSocialProvider() {
        try {
            X.removeItem(ee.CONNECTED_SOCIAL)
        } catch {
            console.info("Unable to delete connected social provider")
        }
    },
    getConnectedSocialUsername() {
        try {
            return X.getItem(ee.CONNECTED_SOCIAL_USERNAME)
        } catch {
            console.info("Unable to get connected social username")
        }
    },
    getStoredActiveCaipNetworkId() {
        return X.getItem(ee.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1]
    },
    setConnectionStatus(t) {
        try {
            X.setItem(ee.CONNECTION_STATUS, t)
        } catch {
            console.info("Unable to set connection status")
        }
    },
    getConnectionStatus() {
        try {
            return X.getItem(ee.CONNECTION_STATUS)
        } catch {
            return
        }
    },
    getConnectedNamespaces() {
        try {
            const t = X.getItem(ee.CONNECTED_NAMESPACES);
            return t?.length ? t.split(",") : []
        } catch {
            return []
        }
    },
    setConnectedNamespaces(t) {
        try {
            const e = Array.from(new Set(t));
            X.setItem(ee.CONNECTED_NAMESPACES, e.join(","))
        } catch {
            console.info("Unable to set namespaces in storage")
        }
    },
    addConnectedNamespace(t) {
        try {
            const e = F.getConnectedNamespaces();
            e.includes(t) || (e.push(t),
            F.setConnectedNamespaces(e))
        } catch {
            console.info("Unable to add connected namespace")
        }
    },
    removeConnectedNamespace(t) {
        try {
            const e = F.getConnectedNamespaces()
              , s = e.indexOf(t);
            s > -1 && (e.splice(s, 1),
            F.setConnectedNamespaces(e))
        } catch {
            console.info("Unable to remove connected namespace")
        }
    },
    getTelegramSocialProvider() {
        try {
            return X.getItem(ee.TELEGRAM_SOCIAL_PROVIDER)
        } catch {
            return console.info("Unable to get telegram social provider"),
            null
        }
    },
    setTelegramSocialProvider(t) {
        try {
            X.setItem(ee.TELEGRAM_SOCIAL_PROVIDER, t)
        } catch {
            console.info("Unable to set telegram social provider")
        }
    },
    removeTelegramSocialProvider() {
        try {
            X.removeItem(ee.TELEGRAM_SOCIAL_PROVIDER)
        } catch {
            console.info("Unable to remove telegram social provider")
        }
    },
    getBalanceCache() {
        let t = {};
        try {
            const e = X.getItem(ee.PORTFOLIO_CACHE);
            t = e ? JSON.parse(e) : {}
        } catch {
            console.info("Unable to get balance cache")
        }
        return t
    },
    removeAddressFromBalanceCache(t) {
        try {
            const e = F.getBalanceCache();
            X.setItem(ee.PORTFOLIO_CACHE, JSON.stringify({
                ...e,
                [t]: void 0
            }))
        } catch {
            console.info("Unable to remove address from balance cache", t)
        }
    },
    getBalanceCacheForCaipAddress(t) {
        try {
            const s = F.getBalanceCache()[t];
            if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.portfolio))
                return s.balance;
            F.removeAddressFromBalanceCache(t)
        } catch {
            console.info("Unable to get balance cache for address", t)
        }
    },
    updateBalanceCache(t) {
        try {
            const e = F.getBalanceCache();
            e[t.caipAddress] = t,
            X.setItem(ee.PORTFOLIO_CACHE, JSON.stringify(e))
        } catch {
            console.info("Unable to update balance cache", t)
        }
    },
    getNativeBalanceCache() {
        let t = {};
        try {
            const e = X.getItem(ee.NATIVE_BALANCE_CACHE);
            t = e ? JSON.parse(e) : {}
        } catch {
            console.info("Unable to get balance cache")
        }
        return t
    },
    removeAddressFromNativeBalanceCache(t) {
        try {
            const e = F.getBalanceCache();
            X.setItem(ee.NATIVE_BALANCE_CACHE, JSON.stringify({
                ...e,
                [t]: void 0
            }))
        } catch {
            console.info("Unable to remove address from balance cache", t)
        }
    },
    getNativeBalanceCacheForCaipAddress(t) {
        try {
            const s = F.getNativeBalanceCache()[t];
            if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.nativeBalance))
                return s;
            console.info("Discarding cache for address", t),
            F.removeAddressFromBalanceCache(t)
        } catch {
            console.info("Unable to get balance cache for address", t)
        }
    },
    updateNativeBalanceCache(t) {
        try {
            const e = F.getNativeBalanceCache();
            e[t.caipAddress] = t,
            X.setItem(ee.NATIVE_BALANCE_CACHE, JSON.stringify(e))
        } catch {
            console.info("Unable to update balance cache", t)
        }
    },
    getEnsCache() {
        let t = {};
        try {
            const e = X.getItem(ee.ENS_CACHE);
            t = e ? JSON.parse(e) : {}
        } catch {
            console.info("Unable to get ens name cache")
        }
        return t
    },
    getEnsFromCacheForAddress(t) {
        try {
            const s = F.getEnsCache()[t];
            if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.ens))
                return s.ens;
            F.removeEnsFromCache(t)
        } catch {
            console.info("Unable to get ens name from cache", t)
        }
    },
    updateEnsCache(t) {
        try {
            const e = F.getEnsCache();
            e[t.address] = t,
            X.setItem(ee.ENS_CACHE, JSON.stringify(e))
        } catch {
            console.info("Unable to update ens name cache", t)
        }
    },
    removeEnsFromCache(t) {
        try {
            const e = F.getEnsCache();
            X.setItem(ee.ENS_CACHE, JSON.stringify({
                ...e,
                [t]: void 0
            }))
        } catch {
            console.info("Unable to remove ens name from cache", t)
        }
    },
    getIdentityCache() {
        let t = {};
        try {
            const e = X.getItem(ee.IDENTITY_CACHE);
            t = e ? JSON.parse(e) : {}
        } catch {
            console.info("Unable to get identity cache")
        }
        return t
    },
    getIdentityFromCacheForAddress(t) {
        try {
            const s = F.getIdentityCache()[t];
            if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.identity))
                return s.identity;
            F.removeIdentityFromCache(t)
        } catch {
            console.info("Unable to get identity from cache", t)
        }
    },
    updateIdentityCache(t) {
        try {
            const e = F.getIdentityCache();
            e[t.address] = {
                identity: t.identity,
                timestamp: t.timestamp
            },
            X.setItem(ee.IDENTITY_CACHE, JSON.stringify(e))
        } catch {
            console.info("Unable to update identity cache", t)
        }
    },
    removeIdentityFromCache(t) {
        try {
            const e = F.getIdentityCache();
            X.setItem(ee.IDENTITY_CACHE, JSON.stringify({
                ...e,
                [t]: void 0
            }))
        } catch {
            console.info("Unable to remove identity from cache", t)
        }
    },
    clearAddressCache() {
        try {
            X.removeItem(ee.PORTFOLIO_CACHE),
            X.removeItem(ee.NATIVE_BALANCE_CACHE),
            X.removeItem(ee.ENS_CACHE),
            X.removeItem(ee.IDENTITY_CACHE)
        } catch {
            console.info("Unable to clear address cache")
        }
    },
    setPreferredAccountTypes(t) {
        try {
            X.setItem(ee.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t))
        } catch {
            console.info("Unable to set preferred account types", t)
        }
    },
    getPreferredAccountTypes() {
        try {
            const t = X.getItem(ee.PREFERRED_ACCOUNT_TYPES);
            return t ? JSON.parse(t) : {}
        } catch {
            console.info("Unable to get preferred account types")
        }
        return {}
    },
    setConnections(t, e) {
        try {
            const s = {
                ...F.getConnections(),
                [e]: t
            };
            X.setItem(ee.CONNECTIONS, JSON.stringify(s))
        } catch (s) {
            console.error("Unable to sync connections to storage", s)
        }
    },
    getConnections() {
        try {
            const t = X.getItem(ee.CONNECTIONS);
            return t ? JSON.parse(t) : {}
        } catch (t) {
            return console.error("Unable to get connections from storage", t),
            {}
        }
    }
}
  , Z = {
    isMobile() {
        return this.isClient() ? !!(typeof window?.matchMedia == "function" && window?.matchMedia("(pointer:coarse)")?.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1
    },
    checkCaipNetwork(t, e="") {
        return t?.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())
    },
    isAndroid() {
        if (!this.isMobile())
            return !1;
        const t = window?.navigator.userAgent.toLowerCase();
        return Z.isMobile() && t.includes("android")
    },
    isIos() {
        if (!this.isMobile())
            return !1;
        const t = window?.navigator.userAgent.toLowerCase();
        return t.includes("iphone") || t.includes("ipad")
    },
    isSafari() {
        return this.isClient() ? (window?.navigator.userAgent.toLowerCase()).includes("safari") : !1
    },
    isClient() {
        return typeof window < "u"
    },
    isPairingExpired(t) {
        return t ? t - Date.now() <= ve.TEN_SEC_MS : !0
    },
    isAllowedRetry(t, e=ve.ONE_SEC_MS) {
        return Date.now() - t >= e
    },
    copyToClopboard(t) {
        navigator.clipboard.writeText(t)
    },
    isIframe() {
        try {
            return window?.self !== window?.top
        } catch {
            return !1
        }
    },
    isSafeApp() {
        if (Z.isClient() && window.self !== window.top)
            try {
                const t = window?.location?.ancestorOrigins?.[0]
                  , e = "https://app.safe.global";
                if (t) {
                    const s = new URL(t)
                      , r = new URL(e);
                    return s.hostname === r.hostname
                }
            } catch {
                return !1
            }
        return !1
    },
    getPairingExpiry() {
        return Date.now() + ve.FOUR_MINUTES_MS
    },
    getNetworkId(t) {
        return t?.split(":")[1]
    },
    getPlainAddress(t) {
        return t?.split(":")[2]
    },
    async wait(t) {
        return new Promise(e => {
            setTimeout(e, t)
        }
        )
    },
    debounce(t, e=500) {
        let s;
        return (...r) => {
            function i() {
                t(...r)
            }
            s && clearTimeout(s),
            s = setTimeout(i, e)
        }
    },
    isHttpUrl(t) {
        return t.startsWith("http://") || t.startsWith("https://")
    },
    formatNativeUrl(t, e, s=null) {
        if (Z.isHttpUrl(t))
            return this.formatUniversalUrl(t, e);
        let r = t
          , i = s;
        r.includes("://") || (r = t.replaceAll("/", "").replaceAll(":", ""),
        r = `${r}://`),
        r.endsWith("/") || (r = `${r}/`),
        i && !i?.endsWith("/") && (i = `${i}/`),
        this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
        const n = encodeURIComponent(e);
        return {
            redirect: `${r}wc?uri=${n}`,
            redirectUniversalLink: i ? `${i}wc?uri=${n}` : void 0,
            href: r
        }
    },
    formatUniversalUrl(t, e) {
        if (!Z.isHttpUrl(t))
            return this.formatNativeUrl(t, e);
        let s = t;
        s.endsWith("/") || (s = `${s}/`);
        const r = encodeURIComponent(e);
        return {
            redirect: `${s}wc?uri=${r}`,
            href: s
        }
    },
    getOpenTargetForPlatform(t) {
        return t === "popupWindow" ? t : this.isTelegram() ? F.getTelegramSocialProvider() ? "_top" : "_blank" : t
    },
    openHref(t, e, s) {
        window?.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener")
    },
    returnOpenHref(t, e, s) {
        return window?.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener")
    },
    isTelegram() {
        return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto)
    },
    isPWA() {
        if (typeof window > "u")
            return !1;
        const t = window.matchMedia?.("(display-mode: standalone)")?.matches
          , e = window?.navigator?.standalone;
        return !!(t || e)
    },
    async preloadImage(t) {
        const e = new Promise( (s, r) => {
            const i = new Image;
            i.onload = s,
            i.onerror = r,
            i.crossOrigin = "anonymous",
            i.src = t
        }
        );
        return Promise.race([e, Z.wait(2e3)])
    },
    formatBalance(t, e) {
        let s = "0.000";
        if (typeof t == "string") {
            const r = Number(t);
            if (r) {
                const i = Math.floor(r * 1e3) / 1e3;
                i && (s = i.toString())
            }
        }
        return `${s}${e ? ` ${e}` : ""}`
    },
    formatBalance2(t, e) {
        let s;
        if (t === "0")
            s = "0";
        else if (typeof t == "string") {
            const r = Number(t);
            r && (s = r.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])
        }
        return {
            value: s ?? "0",
            rest: s === "0" ? "000" : "",
            symbol: e
        }
    },
    getApiUrl() {
        return z.W3M_API_URL
    },
    getBlockchainApiUrl() {
        return z.BLOCKCHAIN_API_RPC_URL
    },
    getAnalyticsUrl() {
        return z.PULSE_API_URL
    },
    getUUID() {
        return crypto?.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, t => {
            const e = Math.random() * 16 | 0;
            return (t === "x" ? e : e & 3 | 8).toString(16)
        }
        )
    },
    parseError(t) {
        return typeof t == "string" ? t : typeof t?.issues?.[0]?.message == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error"
    },
    sortRequestedNetworks(t, e=[]) {
        const s = {};
        return e && t && (t.forEach( (r, i) => {
            s[r] = i
        }
        ),
        e.sort( (r, i) => {
            const n = s[r.id]
              , o = s[i.id];
            return n !== void 0 && o !== void 0 ? n - o : n !== void 0 ? -1 : o !== void 0 ? 1 : 0
        }
        )),
        e
    },
    calculateBalance(t) {
        let e = 0;
        for (const s of t)
            e += s.value ?? 0;
        return e
    },
    formatTokenBalance(t) {
        const e = t.toFixed(2)
          , [s,r] = e.split(".");
        return {
            dollars: s,
            pennies: r
        }
    },
    isAddress(t, e="eip155") {
        switch (e) {
        case "eip155":
            if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
                if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t))
                    return !0
            } else
                return !1;
            return !1;
        case "solana":
            return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
        default:
            return !1
        }
    },
    uniqueBy(t, e) {
        const s = new Set;
        return t.filter(r => {
            const i = r[e];
            return s.has(i) ? !1 : (s.add(i),
            !0)
        }
        )
    },
    generateSdkVersion(t, e, s) {
        const i = t.length === 0 ? ve.ADAPTER_TYPES.UNIVERSAL : t.map(n => n.adapterType).join(",");
        return `${e}-${i}-${s}`
    },
    createAccount(t, e, s, r, i) {
        return {
            namespace: t,
            address: e,
            type: s,
            publicKey: r,
            path: i
        }
    },
    isCaipAddress(t) {
        if (typeof t != "string")
            return !1;
        const e = t.split(":")
          , s = e[0];
        return e.filter(Boolean).length === 3 && s in z.CHAIN_NAME_MAP
    },
    isMac() {
        const t = window?.navigator.userAgent.toLowerCase();
        return t.includes("macintosh") && !t.includes("safari")
    },
    formatTelegramSocialLoginUrl(t) {
        const e = `--${encodeURIComponent(window?.location.href)}`
          , s = "state=";
        if (new URL(t).host === "auth.magic.link") {
            const i = "provider_authorization_url="
              , n = t.substring(t.indexOf(i) + i.length)
              , o = this.injectIntoUrl(decodeURIComponent(n), s, e);
            return t.replace(n, encodeURIComponent(o))
        }
        return this.injectIntoUrl(t, s, e)
    },
    injectIntoUrl(t, e, s) {
        const r = t.indexOf(e);
        if (r === -1)
            throw new Error(`${e} parameter not found in the URL: ${t}`);
        const i = t.indexOf("&", r)
          , n = e.length
          , o = i !== -1 ? i : t.length
          , a = t.substring(0, r + n)
          , c = t.substring(r + n, o)
          , l = t.substring(i)
          , d = c + s;
        return a + d + l
    }
};
async function Mr(...t) {
    const e = await fetch(...t);
    if (!e.ok)
        throw new Error(`HTTP status code: ${e.status}`,{
            cause: e
        });
    return e
}
class gi {
    constructor({baseUrl: e, clientId: s}) {
        this.baseUrl = e,
        this.clientId = s
    }
    async get({headers: e, signal: s, cache: r, ...i}) {
        const n = this.createUrl(i);
        return (await Mr(n, {
            method: "GET",
            headers: e,
            signal: s,
            cache: r
        })).json()
    }
    async getBlob({headers: e, signal: s, ...r}) {
        const i = this.createUrl(r);
        return (await Mr(i, {
            method: "GET",
            headers: e,
            signal: s
        })).blob()
    }
    async post({body: e, headers: s, signal: r, ...i}) {
        const n = this.createUrl(i);
        return (await Mr(n, {
            method: "POST",
            headers: s,
            body: e ? JSON.stringify(e) : void 0,
            signal: r
        })).json()
    }
    async put({body: e, headers: s, signal: r, ...i}) {
        const n = this.createUrl(i);
        return (await Mr(n, {
            method: "PUT",
            headers: s,
            body: e ? JSON.stringify(e) : void 0,
            signal: r
        })).json()
    }
    async delete({body: e, headers: s, signal: r, ...i}) {
        const n = this.createUrl(i);
        return (await Mr(n, {
            method: "DELETE",
            headers: s,
            body: e ? JSON.stringify(e) : void 0,
            signal: r
        })).json()
    }
    createUrl({path: e, params: s}) {
        const r = new URL(e,this.baseUrl);
        return s && Object.entries(s).forEach( ([i,n]) => {
            n && r.searchParams.append(i, n)
        }
        ),
        this.clientId && r.searchParams.append("clientId", this.clientId),
        r
    }
}
const Md = {
    getFeatureValue(t, e) {
        const s = e?.[t];
        return s === void 0 ? ve.DEFAULT_FEATURES[t] : s
    },
    filterSocialsByPlatform(t) {
        if (!t || !t.length)
            return t;
        if (Z.isTelegram()) {
            if (Z.isIos())
                return t.filter(e => e !== "google");
            if (Z.isMac())
                return t.filter(e => e !== "x");
            if (Z.isAndroid())
                return t.filter(e => !["facebook", "x"].includes(e))
        }
        return t
    }
}
  , K = _e({
    features: ve.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: ve.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: !0,
    experimental_preferUniversalLinks: !1,
    remoteFeatures: {}
})
  , S = {
    state: K,
    subscribeKey(t, e) {
        return Qe(K, t, e)
    },
    setOptions(t) {
        Object.assign(K, t)
    },
    setRemoteFeatures(t) {
        if (!t)
            return;
        const e = {
            ...K.remoteFeatures,
            ...t
        };
        K.remoteFeatures = e,
        K.remoteFeatures?.socials && (K.remoteFeatures.socials = Md.filterSocialsByPlatform(K.remoteFeatures.socials))
    },
    setFeatures(t) {
        if (!t)
            return;
        K.features || (K.features = ve.DEFAULT_FEATURES);
        const e = {
            ...K.features,
            ...t
        };
        K.features = e
    },
    setProjectId(t) {
        K.projectId = t
    },
    setCustomRpcUrls(t) {
        K.customRpcUrls = t
    },
    setAllWallets(t) {
        K.allWallets = t
    },
    setIncludeWalletIds(t) {
        K.includeWalletIds = t
    },
    setExcludeWalletIds(t) {
        K.excludeWalletIds = t
    },
    setFeaturedWalletIds(t) {
        K.featuredWalletIds = t
    },
    setTokens(t) {
        K.tokens = t
    },
    setTermsConditionsUrl(t) {
        K.termsConditionsUrl = t
    },
    setPrivacyPolicyUrl(t) {
        K.privacyPolicyUrl = t
    },
    setCustomWallets(t) {
        K.customWallets = t
    },
    setIsSiweEnabled(t) {
        K.isSiweEnabled = t
    },
    setIsUniversalProvider(t) {
        K.isUniversalProvider = t
    },
    setSdkVersion(t) {
        K.sdkVersion = t
    },
    setMetadata(t) {
        K.metadata = t
    },
    setDisableAppend(t) {
        K.disableAppend = t
    },
    setEIP6963Enabled(t) {
        K.enableEIP6963 = t
    },
    setDebug(t) {
        K.debug = t
    },
    setEnableWalletConnect(t) {
        K.enableWalletConnect = t
    },
    setEnableWalletGuide(t) {
        K.enableWalletGuide = t
    },
    setEnableAuthLogger(t) {
        K.enableAuthLogger = t
    },
    setEnableWallets(t) {
        K.enableWallets = t
    },
    setPreferUniversalLinks(t) {
        K.experimental_preferUniversalLinks = t
    },
    setHasMultipleAddresses(t) {
        K.hasMultipleAddresses = t
    },
    setSIWX(t) {
        K.siwx = t
    },
    setConnectMethodsOrder(t) {
        K.features = {
            ...K.features,
            connectMethodsOrder: t
        }
    },
    setWalletFeaturesOrder(t) {
        K.features = {
            ...K.features,
            walletFeaturesOrder: t
        }
    },
    setSocialsOrder(t) {
        K.remoteFeatures = {
            ...K.remoteFeatures,
            socials: t
        }
    },
    setCollapseWallets(t) {
        K.features = {
            ...K.features,
            collapseWallets: t
        }
    },
    setEnableEmbedded(t) {
        K.enableEmbedded = t
    },
    setAllowUnsupportedChain(t) {
        K.allowUnsupportedChain = t
    },
    setManualWCControl(t) {
        K.manualWCControl = t
    },
    setEnableNetworkSwitch(t) {
        K.enableNetworkSwitch = t
    },
    setDefaultAccountTypes(t={}) {
        Object.entries(t).forEach( ([e,s]) => {
            s && (K.defaultAccountTypes[e] = s)
        }
        )
    },
    setUniversalProviderConfigOverride(t) {
        K.universalProviderConfigOverride = t
    },
    getUniversalProviderConfigOverride() {
        return K.universalProviderConfigOverride
    },
    getSnapshot() {
        return oi(K)
    }
}
  , Bd = Object.freeze({
    enabled: !0,
    events: []
})
  , qd = new gi({
    baseUrl: Z.getAnalyticsUrl(),
    clientId: null
})
  , jd = 5
  , Fd = 60 * 1e3
  , ls = _e({
    ...Bd
})
  , Wd = {
    state: ls,
    subscribeKey(t, e) {
        return Qe(ls, t, e)
    },
    async sendError(t, e) {
        if (!ls.enabled)
            return;
        const s = Date.now();
        if (ls.events.filter(n => {
            const o = new Date(n.properties.timestamp || "").getTime();
            return s - o < Fd
        }
        ).length >= jd)
            return;
        const i = {
            type: "error",
            event: e,
            properties: {
                errorType: t.name,
                errorMessage: t.message,
                stackTrace: t.stack,
                timestamp: new Date().toISOString()
            }
        };
        ls.events.push(i);
        try {
            if (typeof window > "u")
                return;
            const {projectId: n, sdkType: o, sdkVersion: a} = S.state;
            await qd.post({
                path: "/e",
                params: {
                    projectId: n,
                    st: o,
                    sv: a || "html-wagmi-4.2.2"
                },
                body: {
                    eventId: Z.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: new Date().toISOString(),
                    props: {
                        type: "error",
                        event: e,
                        errorType: t.name,
                        errorMessage: t.message,
                        stackTrace: t.stack
                    }
                }
            })
        } catch {}
    },
    enable() {
        ls.enabled = !0
    },
    disable() {
        ls.enabled = !1
    },
    clearEvents() {
        ls.events = []
    }
};
class Cr extends Error {
    constructor(e, s, r) {
        super(e),
        this.name = "AppKitError",
        this.category = s,
        this.originalError = r,
        Object.setPrototypeOf(this, Cr.prototype);
        let i = !1;
        if (r instanceof Error && typeof r.stack == "string" && r.stack) {
            const n = r.stack
              , o = n.indexOf(`
`);
            if (o > -1) {
                const a = n.substring(o + 1);
                this.stack = `${this.name}: ${this.message}
${a}`,
                i = !0
            }
        }
        i || (Error.captureStackTrace ? Error.captureStackTrace(this, Cr) : this.stack || (this.stack = `${this.name}: ${this.message}`))
    }
}
function Wo(t, e) {
    const s = t instanceof Cr ? t : new Cr(t instanceof Error ? t.message : String(t),e,t);
    throw Wd.sendError(s, s.category),
    s
}
function vt(t, e="INTERNAL_SDK_ERROR") {
    const s = {};
    return Object.keys(t).forEach(r => {
        const i = t[r];
        if (typeof i == "function") {
            let n = i;
            i.constructor.name === "AsyncFunction" ? n = async (...o) => {
                try {
                    return await i(...o)
                } catch (a) {
                    return Wo(a, e)
                }
            }
            : n = (...o) => {
                try {
                    return i(...o)
                } catch (a) {
                    return Wo(a, e)
                }
            }
            ,
            s[r] = n
        } else
            s[r] = i
    }
    ),
    s
}
const zt = {
    PHANTOM: {
        id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
        url: "https://phantom.app"
    },
    SOLFLARE: {
        id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
        url: "https://solflare.com"
    },
    COINBASE: {
        id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
        url: "https://go.cb-w.com"
    }
}
  , zd = {
    handleMobileDeeplinkRedirect(t, e) {
        const s = window.location.href
          , r = encodeURIComponent(s);
        if (t === zt.PHANTOM.id && !("phantom"in window)) {
            const i = s.startsWith("https") ? "https" : "http"
              , n = s.split("/")[2]
              , o = encodeURIComponent(`${i}://${n}`);
            window.location.href = `${zt.PHANTOM.url}/ul/browse/${r}?ref=${o}`
        }
        t === zt.SOLFLARE.id && !("solflare"in window) && (window.location.href = `${zt.SOLFLARE.url}/ul/v1/browse/${r}?ref=${r}`),
        e === z.CHAIN.SOLANA && t === zt.COINBASE.id && !("coinbaseSolana"in window) && (window.location.href = `${zt.COINBASE.url}/dapp?cb_url=${r}`)
    }
}
  , ut = _e({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
})
  , Hd = {
    state: ut,
    subscribeNetworkImages(t) {
        return Xe(ut.networkImages, () => t(ut.networkImages))
    },
    subscribeKey(t, e) {
        return Qe(ut, t, e)
    },
    subscribe(t) {
        return Xe(ut, () => t(ut))
    },
    setWalletImage(t, e) {
        ut.walletImages[t] = e
    },
    setNetworkImage(t, e) {
        ut.networkImages[t] = e
    },
    setChainImage(t, e) {
        ut.chainImages[t] = e
    },
    setConnectorImage(t, e) {
        ut.connectorImages = {
            ...ut.connectorImages,
            [t]: e
        }
    },
    setTokenImage(t, e) {
        ut.tokenImages[t] = e
    },
    setCurrencyImage(t, e) {
        ut.currencyImages[t] = e
    }
}
  , $t = vt(Hd)
  , Vd = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: ""
}
  , cn = _e({
    networkImagePromises: {}
})
  , qc = {
    async fetchWalletImage(t) {
        if (t)
            return await V._fetchWalletImage(t),
            this.getWalletImageById(t)
    },
    async fetchNetworkImage(t) {
        if (!t)
            return;
        const e = this.getNetworkImageById(t);
        return e || (cn.networkImagePromises[t] || (cn.networkImagePromises[t] = V._fetchNetworkImage(t)),
        await cn.networkImagePromises[t],
        this.getNetworkImageById(t))
    },
    getWalletImageById(t) {
        if (t)
            return $t.state.walletImages[t]
    },
    getWalletImage(t) {
        if (t?.image_url)
            return t?.image_url;
        if (t?.image_id)
            return $t.state.walletImages[t.image_id]
    },
    getNetworkImage(t) {
        if (t?.assets?.imageUrl)
            return t?.assets?.imageUrl;
        if (t?.assets?.imageId)
            return $t.state.networkImages[t.assets.imageId]
    },
    getNetworkImageById(t) {
        if (t)
            return $t.state.networkImages[t]
    },
    getConnectorImage(t) {
        if (t?.imageUrl)
            return t.imageUrl;
        if (t?.imageId)
            return $t.state.connectorImages[t.imageId]
    },
    getChainImage(t) {
        return $t.state.networkImages[Vd[t]]
    }
}
  , ds = _e({
    message: "",
    variant: "info",
    open: !1
})
  , Kd = {
    state: ds,
    subscribeKey(t, e) {
        return Qe(ds, t, e)
    },
    open(t, e) {
        const {debug: s} = S.state
          , {shortMessage: r, longMessage: i} = t;
        s && (ds.message = r,
        ds.variant = e,
        ds.open = !0),
        i && console.error(typeof i == "function" ? i() : i)
    },
    close() {
        ds.open = !1,
        ds.message = "",
        ds.variant = "info"
    }
}
  , xs = vt(Kd)
  , Gd = Z.getAnalyticsUrl()
  , Jd = new gi({
    baseUrl: Gd,
    clientId: null
})
  , Yd = ["MODAL_CREATED"]
  , Yt = _e({
    timestamp: Date.now(),
    reportedErrors: {},
    data: {
        type: "track",
        event: "MODAL_CREATED"
    }
})
  , Pe = {
    state: Yt,
    subscribe(t) {
        return Xe(Yt, () => t(Yt))
    },
    getSdkProperties() {
        const {projectId: t, sdkType: e, sdkVersion: s} = S.state;
        return {
            projectId: t,
            st: e,
            sv: s || "html-wagmi-4.2.2"
        }
    },
    async _sendAnalyticsEvent(t) {
        try {
            const e = W.state.address;
            if (Yd.includes(t.data.event) || typeof window > "u")
                return;
            await Jd.post({
                path: "/e",
                params: Pe.getSdkProperties(),
                body: {
                    eventId: Z.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: t.timestamp,
                    props: {
                        ...t.data,
                        address: e
                    }
                }
            }),
            Yt.reportedErrors.FORBIDDEN = !1
        } catch (e) {
            e instanceof Error && e.cause instanceof Response && e.cause.status === z.HTTP_STATUS_CODES.FORBIDDEN && !Yt.reportedErrors.FORBIDDEN && (xs.open({
                shortMessage: "Invalid App Configuration",
                longMessage: `Origin ${Hr() ? window.origin : "uknown"} not found on Allowlist - update configuration on cloud.reown.com`
            }, "error"),
            Yt.reportedErrors.FORBIDDEN = !0)
        }
    },
    sendEvent(t) {
        Yt.timestamp = Date.now(),
        Yt.data = t,
        S.state.features?.analytics && Pe._sendAnalyticsEvent(Yt)
    }
}
  , Zd = Z.getApiUrl()
  , rt = new gi({
    baseUrl: Zd,
    clientId: null
})
  , Xd = 40
  , zo = 4
  , Qd = 20
  , te = _e({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    filteredWallets: [],
    search: [],
    isAnalyticsEnabled: !1,
    excludedWallets: [],
    isFetchingRecommendedWallets: !1
})
  , V = {
    state: te,
    subscribeKey(t, e) {
        return Qe(te, t, e)
    },
    _getSdkProperties() {
        const {projectId: t, sdkType: e, sdkVersion: s} = S.state;
        return {
            projectId: t,
            st: e || "appkit",
            sv: s || "html-wagmi-4.2.2"
        }
    },
    _filterOutExtensions(t) {
        return S.state.isUniversalProvider ? t.filter(e => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t
    },
    async _fetchWalletImage(t) {
        const e = `${rt.baseUrl}/getWalletImage/${t}`
          , s = await rt.getBlob({
            path: e,
            params: V._getSdkProperties()
        });
        $t.setWalletImage(t, URL.createObjectURL(s))
    },
    async _fetchNetworkImage(t) {
        const e = `${rt.baseUrl}/public/getAssetImage/${t}`
          , s = await rt.getBlob({
            path: e,
            params: V._getSdkProperties()
        });
        $t.setNetworkImage(t, URL.createObjectURL(s))
    },
    async _fetchConnectorImage(t) {
        const e = `${rt.baseUrl}/public/getAssetImage/${t}`
          , s = await rt.getBlob({
            path: e,
            params: V._getSdkProperties()
        });
        $t.setConnectorImage(t, URL.createObjectURL(s))
    },
    async _fetchCurrencyImage(t) {
        const e = `${rt.baseUrl}/public/getCurrencyImage/${t}`
          , s = await rt.getBlob({
            path: e,
            params: V._getSdkProperties()
        });
        $t.setCurrencyImage(t, URL.createObjectURL(s))
    }, 
    async _fetchTokenImage(t) {
        const e = `${rt.baseUrl}/public/getTokenImage/${t}`
          , s = await rt.getBlob({
            path: e,
            params: V._getSdkProperties()
        });
        $t.setTokenImage(t, URL.createObjectURL(s))
    },
    _filterWalletsByPlatform(t) {
        return Z.isMobile() ? t?.filter(s => s.mobile_link || s.id === zt.COINBASE.id ? !0 : h.state.activeChain === "solana" && (s.id === zt.SOLFLARE.id || s.id === zt.PHANTOM.id)) : t
    },
    async fetchProjectConfig() {
        return (await rt.get({
            path: "/appkit/v1/config",
            params: V._getSdkProperties()
        })).features
    },
    async fetchAllowedOrigins() {
        try {
            const {allowedOrigins: t} = await rt.get({
                path: "/projects/v1/origins",
                params: V._getSdkProperties()
            });
            return t
        } catch {
            return []
        }
    },
    async fetchNetworkImages() {
        const e = h.getAllRequestedCaipNetworks()?.map( ({assets: s}) => s?.imageId).filter(Boolean).filter(s => !qc.getNetworkImageById(s));
        e && await Promise.allSettled(e.map(s => V._fetchNetworkImage(s)))
    },
    async fetchConnectorImages() {
        const {connectors: t} = q.state
          , e = t.map( ({imageId: s}) => s).filter(Boolean);
        await Promise.allSettled(e.map(s => V._fetchConnectorImage(s)))
    },
    async fetchCurrencyImages(t=[]) {
        await Promise.allSettled(t.map(e => V._fetchCurrencyImage(e)))
    },
    async fetchTokenImages(t=[]) {
        await Promise.allSettled(t.map(e => V._fetchTokenImage(e)))
    },
    async fetchWallets(t) {
        const e = t.exclude ?? [];
        V._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(zt).map(n => n.id));
        const r = await rt.get({
            path: "/getWallets",
            params: {
                ...V._getSdkProperties(),
                ...t,
                page: String(t.page),
                entries: String(t.entries),
                include: t.include?.join(","),
                exclude: e.join(",")
            }
        });
        return {
            data: V._filterWalletsByPlatform(r?.data) || [],
            count: r?.count
        }
    },
    async fetchFeaturedWallets() {
        const {featuredWalletIds: t} = S.state;
        if (t?.length) {
            const e = {
                ...V._getSdkProperties(),
                page: 1,
                entries: t?.length ?? zo,
                include: t
            }
              , {data: s} = await V.fetchWallets(e)
              , r = [...s].sort( (n, o) => t.indexOf(n.id) - t.indexOf(o.id))
              , i = r.map(n => n.image_id).filter(Boolean);
            await Promise.allSettled(i.map(n => V._fetchWalletImage(n))),
            te.featured = r,
            te.allFeatured = r
        }
    },
    async fetchRecommendedWallets() {
        try {
            te.isFetchingRecommendedWallets = !0;
            const {includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s} = S.state
              , r = [...e ?? [], ...s ?? []].filter(Boolean)
              , i = h.getRequestedCaipNetworkIds().join(",")
              , n = {
                page: 1,
                entries: zo,
                include: t,
                exclude: r,
                chains: i
            }
              , {data: o, count: a} = await V.fetchWallets(n)
              , c = F.getRecentWallets()
              , l = o.map(u => u.image_id).filter(Boolean)
              , d = c.map(u => u.image_id).filter(Boolean);
            await Promise.allSettled([...l, ...d].map(u => V._fetchWalletImage(u))),
            te.recommended = o,
            te.allRecommended = o,
            te.count = a ?? 0
        } catch {} finally {
            te.isFetchingRecommendedWallets = !1
        }
    },
    async fetchWalletsByPage({page: t}) {
        const {includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: r} = S.state
          , i = h.getRequestedCaipNetworkIds().join(",")
          , n = [...te.recommended.map( ({id: d}) => d), ...s ?? [], ...r ?? []].filter(Boolean)
          , o = {
            page: t,
            entries: Xd,
            include: e,
            exclude: n,
            chains: i
        }
          , {data: a, count: c} = await V.fetchWallets(o)
          , l = a.slice(0, Qd).map(d => d.image_id).filter(Boolean);
        await Promise.allSettled(l.map(d => V._fetchWalletImage(d))),
        te.wallets = Z.uniqueBy([...te.wallets, ...V._filterOutExtensions(a)], "id").filter(d => d.chains?.some(u => i.includes(u))),
        te.count = c > te.count ? c : te.count,
        te.page = t
    },
    async initializeExcludedWallets({ids: t}) {
        const e = {
            page: 1,
            entries: t.length,
            include: t
        }
          , {data: s} = await V.fetchWallets(e);
        s && s.forEach(r => {
            te.excludedWallets.push({
                rdns: r.rdns,
                name: r.name
            })
        }
        )
    },
    async searchWallet({search: t, badge: e}) {
        const {includeWalletIds: s, excludeWalletIds: r} = S.state
          , i = h.getRequestedCaipNetworkIds().join(",");
        te.search = [];
        const n = {
            page: 1,
            entries: 100,
            search: t?.trim(),
            badge_type: e,
            include: s,
            exclude: r,
            chains: i
        }
          , {data: o} = await V.fetchWallets(n);
        Pe.sendEvent({
            type: "track",
            event: "SEARCH_WALLET",
            properties: {
                badge: e ?? "",
                search: t ?? ""
            }
        });
        const a = o.map(c => c.image_id).filter(Boolean);
        await Promise.allSettled([...a.map(c => V._fetchWalletImage(c)), Z.wait(300)]),
        te.search = V._filterOutExtensions(o)
    },
    initPromise(t, e) {
        const s = te.promises[t];
        return s || (te.promises[t] = e())
    },
    prefetch({fetchConnectorImages: t=!0, fetchFeaturedWallets: e=!0, fetchRecommendedWallets: s=!0, fetchNetworkImages: r=!0}={}) {
        const i = [t && V.initPromise("connectorImages", V.fetchConnectorImages), e && V.initPromise("featuredWallets", V.fetchFeaturedWallets), s && V.initPromise("recommendedWallets", V.fetchRecommendedWallets), r && V.initPromise("networkImages", V.fetchNetworkImages)].filter(Boolean);
        return Promise.allSettled(i)
    },
    prefetchAnalyticsConfig() {
        S.state.features?.analytics && V.fetchAnalyticsConfig()
    },
    async fetchAnalyticsConfig() {
        try {
            const {isAnalyticsEnabled: t} = await rt.get({
                path: "/getAnalyticsConfig",
                params: V._getSdkProperties()
            });
            S.setFeatures({
                analytics: t
            })
        } catch {
            S.setFeatures({
                analytics: !1
            })
        }
    },
    filterByNamespaces(t) {
        if (!t?.length) {
            te.featured = te.allFeatured,
            te.recommended = te.allRecommended;
            return
        }
        const e = h.getRequestedCaipNetworkIds().join(",");
        te.featured = te.allFeatured.filter(s => s.chains?.some(r => e.includes(r))),
        te.recommended = te.allRecommended.filter(s => s.chains?.some(r => e.includes(r))),
        te.filteredWallets = te.wallets.filter(s => s.chains?.some(r => e.includes(r)))
    },
    clearFilterByNamespaces() {
        te.filteredWallets = []
    },
    setFilterByNamespace(t) {
        if (!t) {
            te.featured = te.allFeatured,
            te.recommended = te.allRecommended;
            return
        }
        const e = h.getRequestedCaipNetworkIds().join(",");
        te.featured = te.allFeatured.filter(s => s.chains?.some(r => e.includes(r))),
        te.recommended = te.allRecommended.filter(s => s.chains?.some(r => e.includes(r))),
        te.filteredWallets = te.wallets.filter(s => s.chains?.some(r => e.includes(r)))
    }
}
  , me = _e({
    view: "Connect",
    history: ["Connect"],
    transactionStack: []
})
  , eu = {
    state: me,
    subscribeKey(t, e) {
        return Qe(me, t, e)
    },
    pushTransactionStack(t) {
        me.transactionStack.push(t)
    },
    popTransactionStack(t) {
        const e = me.transactionStack.pop();
        if (!e)
            return;
        const {onSuccess: s, onError: r, onCancel: i} = e;
        switch (t) {
        case "success":
            s?.();
            break;
        case "error":
            r?.(),
            ie.goBack();
            break;
        case "cancel":
            i?.(),
            ie.goBack();
            break
        }
    },
    push(t, e) {
        t !== me.view && (me.view = t,
        me.history.push(t),
        me.data = e)
    },
    reset(t, e) {
        me.view = t,
        me.history = [t],
        me.data = e
    },
    replace(t, e) {
        me.history.at(-1) === t || (me.view = t,
        me.history[me.history.length - 1] = t,
        me.data = e)
    },
    goBack() {
        const t = h.state.activeCaipAddress
          , e = ie.state.view === "ConnectingFarcaster"
          , s = !t && e;
        if (me.history.length > 1) {
            me.history.pop();
            const [r] = me.history.slice(-1);
            r && (t && r === "Connect" ? me.view = "Account" : me.view = r)
        } else
            Fe.close();
        me.data?.wallet && (me.data.wallet = void 0),
        setTimeout( () => {
            if (s) {
                W.setFarcasterUrl(void 0, h.state.activeChain);
                const r = q.getAuthConnector();
                r?.provider?.reload();
                const i = oi(S.state);
                r?.provider?.syncDappData?.({
                    metadata: i.metadata,
                    sdkVersion: i.sdkVersion,
                    projectId: i.projectId,
                    sdkType: i.sdkType
                })
            }
        }
        , 100)
    },
    goBackToIndex(t) {
        if (me.history.length > 1) {
            me.history = me.history.slice(0, t + 1);
            const [e] = me.history.slice(-1);
            e && (me.view = e)
        }
    },
    goBackOrCloseModal() {
        ie.state.history.length > 1 ? ie.goBack() : Fe.close()
    }
}
  , ie = vt(eu)
  , Zt = _e({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
})
  , Bn = {
    state: Zt,
    subscribe(t) {
        return Xe(Zt, () => t(Zt))
    },
    setThemeMode(t) {
        Zt.themeMode = t;
        try {
            const e = q.getAuthConnector();
            if (e) {
                const s = Bn.getSnapshot().themeVariables;
                e.provider.syncTheme({
                    themeMode: t,
                    themeVariables: s,
                    w3mThemeVariables: ws(s, t)
                })
            }
        } catch {
            console.info("Unable to sync theme to auth connector")
        }
    },
    setThemeVariables(t) {
        Zt.themeVariables = {
            ...Zt.themeVariables,
            ...t
        };
        try {
            const e = q.getAuthConnector();
            if (e) {
                const s = Bn.getSnapshot().themeVariables;
                e.provider.syncTheme({
                    themeVariables: s,
                    w3mThemeVariables: ws(Zt.themeVariables, Zt.themeMode)
                })
            }
        } catch {
            console.info("Unable to sync theme to auth connector")
        }
    },
    getSnapshot() {
        return oi(Zt)
    }
}
  , gt = vt(Bn)
  , jc = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0
}
  , ce = _e({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: {
        ...jc
    },
    filterByNamespaceMap: {
        eip155: !0,
        solana: !0,
        polkadot: !0,
        bip122: !0,
        cosmos: !0
    }
})
  , tu = {
    state: ce,
    subscribe(t) {
        return Xe(ce, () => {
            t(ce)
        }
        )
    },
    subscribeKey(t, e) {
        return Qe(ce, t, e)
    },
    initialize(t) {
        t.forEach(e => {
            const s = F.getConnectedConnectorId(e);
            s && q.setConnectorId(s, e)
        }
        )
    },
    setActiveConnector(t) {
        t && (ce.activeConnector = Bs(t))
    },
    setConnectors(t) {
        t.filter(i => !ce.allConnectors.some(n => n.id === i.id && q.getConnectorName(n.name) === q.getConnectorName(i.name) && n.chain === i.chain)).forEach(i => {
            i.type !== "MULTI_CHAIN" && ce.allConnectors.push(Bs(i))
        }
        );
        const s = q.getEnabledNamespaces()
          , r = q.getEnabledConnectors(s);
        ce.connectors = q.mergeMultiChainConnectors(r)
    },
    filterByNamespaces(t) {
        Object.keys(ce.filterByNamespaceMap).forEach(e => {
            ce.filterByNamespaceMap[e] = !1
        }
        ),
        t.forEach(e => {
            ce.filterByNamespaceMap[e] = !0
        }
        ),
        q.updateConnectorsForEnabledNamespaces()
    },
    filterByNamespace(t, e) {
        ce.filterByNamespaceMap[t] = e,
        q.updateConnectorsForEnabledNamespaces()
    },
    updateConnectorsForEnabledNamespaces() {
        const t = q.getEnabledNamespaces()
          , e = q.getEnabledConnectors(t)
          , s = q.areAllNamespacesEnabled();
        ce.connectors = q.mergeMultiChainConnectors(e),
        s ? V.clearFilterByNamespaces() : V.filterByNamespaces(t)
    },
    getEnabledNamespaces() {
        return Object.entries(ce.filterByNamespaceMap).filter( ([t,e]) => e).map( ([t]) => t)
    },
    getEnabledConnectors(t) {
        return ce.allConnectors.filter(e => t.includes(e.chain))
    },
    areAllNamespacesEnabled() {
        return Object.values(ce.filterByNamespaceMap).every(t => t)
    },
    mergeMultiChainConnectors(t) {
        const e = q.generateConnectorMapByName(t)
          , s = [];
        return e.forEach(r => {
            const i = r[0]
              , n = i?.id === z.CONNECTOR_ID.AUTH;
            r.length > 1 && i ? s.push({
                name: i.name,
                imageUrl: i.imageUrl,
                imageId: i.imageId,
                connectors: [...r],
                type: n ? "AUTH" : "MULTI_CHAIN",
                chain: "eip155",
                id: i?.id || ""
            }) : i && s.push(i)
        }
        ),
        s
    },
    generateConnectorMapByName(t) {
        const e = new Map;
        return t.forEach(s => {
            const {name: r} = s
              , i = q.getConnectorName(r);
            if (!i)
                return;
            const n = e.get(i) || [];
            n.find(a => a.chain === s.chain) || n.push(s),
            e.set(i, n)
        }
        ),
        e
    },
    getConnectorName(t) {
        return t && ({
            "Trust Wallet": "Trust"
        }[t] || t)
    },
    getUniqueConnectorsByName(t) {
        const e = [];
        return t.forEach(s => {
            e.find(r => r.chain === s.chain) || e.push(s)
        }
        ),
        e
    },
    addConnector(t) {
        if (t.id === z.CONNECTOR_ID.AUTH) {
            const e = t
              , s = oi(S.state)
              , r = gt.getSnapshot().themeMode
              , i = gt.getSnapshot().themeVariables;
            e?.provider?.syncDappData?.({
                metadata: s.metadata,
                sdkVersion: s.sdkVersion,
                projectId: s.projectId,
                sdkType: s.sdkType
            }),
            e?.provider?.syncTheme({
                themeMode: r,
                themeVariables: i,
                w3mThemeVariables: ws(i, r)
            }),
            q.setConnectors([t])
        } else
            q.setConnectors([t])
    },
    getAuthConnector(t) {
        const e = t || h.state.activeChain
          , s = ce.connectors.find(r => r.id === z.CONNECTOR_ID.AUTH);
        if (s)
            return s?.connectors?.length ? s.connectors.find(i => i.chain === e) : s
    },
    getAnnouncedConnectorRdns() {
        return ce.connectors.filter(t => t.type === "ANNOUNCED").map(t => t.info?.rdns)
    },
    getConnectorById(t) {
        return ce.allConnectors.find(e => e.id === t)
    },
    getConnector(t, e) {
        return ce.allConnectors.filter(r => r.chain === h.state.activeChain).find(r => r.explorerId === t || r.info?.rdns === e)
    },
    syncIfAuthConnector(t) {
        if (t.id !== "ID_AUTH")
            return;
        const e = t
          , s = oi(S.state)
          , r = gt.getSnapshot().themeMode
          , i = gt.getSnapshot().themeVariables;
        e?.provider?.syncDappData?.({
            metadata: s.metadata,
            sdkVersion: s.sdkVersion,
            sdkType: s.sdkType,
            projectId: s.projectId
        }),
        e.provider.syncTheme({
            themeMode: r,
            themeVariables: i,
            w3mThemeVariables: ws(i, r)
        })
    },
    getConnectorsByNamespace(t) {
        const e = ce.allConnectors.filter(s => s.chain === t);
        return q.mergeMultiChainConnectors(e)
    },
    selectWalletConnector(t) {
        const e = q.getConnector(t.id, t.rdns)
          , s = h.state.activeChain;
        zd.handleMobileDeeplinkRedirect(e?.explorerId || t.id, s),
        e ? ie.push("ConnectingExternal", {
            connector: e
        }) : ie.push("ConnectingWalletConnect", {
            wallet: t
        })
    },
    getConnectors(t) {
        return t ? q.getConnectorsByNamespace(t) : q.mergeMultiChainConnectors(ce.allConnectors)
    },
    setFilterByNamespace(t) {
        ce.filterByNamespace = t,
        ce.connectors = q.getConnectors(t),
        V.setFilterByNamespace(t)
    },
    setConnectorId(t, e) {
        t && (ce.activeConnectorIds = {
            ...ce.activeConnectorIds,
            [e]: t
        },
        F.setConnectedConnectorId(e, t))
    },
    removeConnectorId(t) {
        ce.activeConnectorIds = {
            ...ce.activeConnectorIds,
            [t]: void 0
        },
        F.deleteConnectedConnectorId(t)
    },
    getConnectorId(t) {
        if (t)
            return ce.activeConnectorIds[t]
    },
    isConnected(t) {
        return t ? !!ce.activeConnectorIds[t] : Object.values(ce.activeConnectorIds).some(e => !!e)
    },
    resetConnectorIds() {
        ce.activeConnectorIds = {
            ...jc
        }
    }
}
  , q = vt(tu)
  , Xr = {
    ACCOUNT_TYPES: {
        SMART_ACCOUNT: "smartAccount"
    }
}
  , Ts = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: !1,
    autoClose: !0
})
  , Ue = _e({
    ...Ts
})
  , su = {
    state: Ue,
    subscribeKey(t, e) {
        return Qe(Ue, t, e)
    },
    showLoading(t, e={}) {
        this._showMessage({
            message: t,
            variant: "loading",
            ...e
        })
    },
    showSuccess(t) {
        this._showMessage({
            message: t,
            variant: "success"
        })
    },
    showSvg(t, e) {
        this._showMessage({
            message: t,
            svg: e
        })
    },
    showError(t) {
        const e = Z.parseError(t);
        this._showMessage({
            message: e,
            variant: "error"
        })
    },
    hide() {
        Ue.message = Ts.message,
        Ue.variant = Ts.variant,
        Ue.svg = Ts.svg,
        Ue.open = Ts.open,
        Ue.autoClose = Ts.autoClose
    },
    _showMessage({message: t, svg: e, variant: s="success", autoClose: r=Ts.autoClose}) {
        Ue.open ? (Ue.open = !1,
        setTimeout( () => {
            Ue.message = t,
            Ue.variant = s,
            Ue.svg = e,
            Ue.open = !0,
            Ue.autoClose = r
        }
        , 150)) : (Ue.message = t,
        Ue.variant = s,
        Ue.svg = e,
        Ue.open = !0,
        Ue.autoClose = r)
    }
}
  , Ut = su
  , Ee = _e({
    transactions: [],
    coinbaseTransactions: {},
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: !1,
    empty: !1,
    next: void 0
})
  , ru = {
    state: Ee,
    subscribe(t) {
        return Xe(Ee, () => t(Ee))
    },
    setLastNetworkInView(t) {
        Ee.lastNetworkInView = t
    },
    async fetchTransactions(t, e) {
        if (!t)
            throw new Error("Transactions can't be fetched without an accountAddress");
        Ee.loading = !0;
        try {
            const s = await J.fetchTransactions({
                account: t,
                cursor: Ee.next,
                onramp: e,
                cache: e === "coinbase" ? "no-cache" : void 0,
                chainId: h.state.activeCaipNetwork?.caipNetworkId
            })
              , r = Kr.filterSpamTransactions(s.data)
              , i = Kr.filterByConnectedChain(r)
              , n = [...Ee.transactions, ...i];
            Ee.loading = !1,
            e === "coinbase" ? Ee.coinbaseTransactions = Kr.groupTransactionsByYearAndMonth(Ee.coinbaseTransactions, s.data) : (Ee.transactions = n,
            Ee.transactionsByYear = Kr.groupTransactionsByYearAndMonth(Ee.transactionsByYear, i)),
            Ee.empty = n.length === 0,
            Ee.next = s.next ? s.next : void 0
        } catch {
            const r = h.state.activeChain;
            Pe.sendEvent({
                type: "track",
                event: "ERROR_FETCH_TRANSACTIONS",
                properties: {
                    address: t,
                    projectId: S.state.projectId,
                    cursor: Ee.next,
                    isSmartAccount: W.state.preferredAccountTypes?.[r] === Xr.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            }),
            Ut.showError("Failed to fetch transactions"),
            Ee.loading = !1,
            Ee.empty = !0,
            Ee.next = void 0
        }
    },
    groupTransactionsByYearAndMonth(t={}, e=[]) {
        const s = t;
        return e.forEach(r => {
            const i = new Date(r.metadata.minedAt).getFullYear()
              , n = new Date(r.metadata.minedAt).getMonth()
              , o = s[i] ?? {}
              , c = (o[n] ?? []).filter(l => l.id !== r.id);
            s[i] = {
                ...o,
                [n]: [...c, r].sort( (l, d) => new Date(d.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
            }
        }
        ),
        s
    },
    filterSpamTransactions(t) {
        return t.filter(e => !e.transfers.every(r => r.nft_info?.flags.is_spam === !0))
    },
    filterByConnectedChain(t) {
        const e = h.state.activeCaipNetwork?.caipNetworkId;
        return t.filter(r => r.metadata.chain === e)
    },
    clearCursor() {
        Ee.next = void 0
    },
    resetTransactions() {
        Ee.transactions = [],
        Ee.transactionsByYear = {},
        Ee.lastNetworkInView = void 0,
        Ee.loading = !1,
        Ee.empty = !1,
        Ee.next = void 0
    }
}
  , Kr = vt(ru, "API_ERROR")
  , Ne = _e({
    connections: new Map,
    wcError: !1,
    buffering: !1,
    status: "disconnected"
});
let Ss;
const iu = {
    state: Ne,
    subscribeKey(t, e) {
        return Qe(Ne, t, e)
    },
    _getClient() {
        return Ne._client
    },
    setClient(t) {
        Ne._client = Bs(t)
    },
    async connectWalletConnect() {
        if (Z.isTelegram() || Z.isSafari() && Z.isIos()) {
            if (Ss) {
                await Ss,
                Ss = void 0;
                return
            }
            if (!Z.isPairingExpired(Ne?.wcPairingExpiry)) {
                const t = Ne.wcUri;
                Ne.wcUri = t;
                return
            }
            Ss = Y._getClient()?.connectWalletConnect?.().catch( () => {}
            ),
            Y.state.status = "connecting",
            await Ss,
            Ss = void 0,
            Ne.wcPairingExpiry = void 0,
            Y.state.status = "connected"
        } else
            await Y._getClient()?.connectWalletConnect?.()
    },
    async connectExternal(t, e, s=!0) {
        await Y._getClient()?.connectExternal?.(t),
        s && h.setActiveNamespace(e)
    },
    async reconnectExternal(t) {
        await Y._getClient()?.reconnectExternal?.(t);
        const e = t.chain || h.state.activeChain;
        e && q.setConnectorId(t.id, e)
    },
    async setPreferredAccountType(t, e) {
        Fe.setLoading(!0, h.state.activeChain);
        const s = q.getAuthConnector();
        s && (W.setPreferredAccountType(t, e),
        await s.provider.setPreferredAccount(t),
        F.setPreferredAccountTypes(W.state.preferredAccountTypes ?? {
            [e]: t
        }),
        await Y.reconnectExternal(s),
        Fe.setLoading(!1, h.state.activeChain),
        Pe.sendEvent({
            type: "track",
            event: "SET_PREFERRED_ACCOUNT_TYPE",
            properties: {
                accountType: t,
                network: h.state.activeCaipNetwork?.caipNetworkId || ""
            }
        }))
    },
    async signMessage(t) {
        return Y._getClient()?.signMessage(t)
    },
    parseUnits(t, e) {
        return Y._getClient()?.parseUnits(t, e)
    },
    formatUnits(t, e) {
        return Y._getClient()?.formatUnits(t, e)
    },
    async sendTransaction(t) {
        return Y._getClient()?.sendTransaction(t)
    },
    async getCapabilities(t) {
        return Y._getClient()?.getCapabilities(t)
    },
    async grantPermissions(t) {
        return Y._getClient()?.grantPermissions(t)
    },
    async walletGetAssets(t) {
        return Y._getClient()?.walletGetAssets(t) ?? {}
    },
    async estimateGas(t) {
        return Y._getClient()?.estimateGas(t)
    },
    async writeContract(t) {
        return Y._getClient()?.writeContract(t)
    },
    async getEnsAddress(t) {
        return Y._getClient()?.getEnsAddress(t)
    },
    async getEnsAvatar(t) {
        return Y._getClient()?.getEnsAvatar(t)
    },
    checkInstalled(t) {
        return Y._getClient()?.checkInstalled?.(t) || !1
    },
    resetWcConnection() {
        Ne.wcUri = void 0,
        Ne.wcPairingExpiry = void 0,
        Ne.wcLinking = void 0,
        Ne.recentWallet = void 0,
        Ne.status = "disconnected",
        Kr.resetTransactions(),
        F.deleteWalletConnectDeepLink()
    },
    resetUri() {
        Ne.wcUri = void 0,
        Ne.wcPairingExpiry = void 0,
        Ss = void 0
    },
    finalizeWcConnection() {
        const {wcLinking: t, recentWallet: e} = Y.state;
        t && F.setWalletConnectDeepLink(t),
        e && F.setAppKitRecent(e),
        Pe.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: {
                method: t ? "mobile" : "qrcode",
                name: ie.state.data?.wallet?.name || "Unknown"
            }
        })
    },
    setWcBasic(t) {
        Ne.wcBasic = t
    },
    setUri(t) {
        Ne.wcUri = t,
        Ne.wcPairingExpiry = Z.getPairingExpiry()
    },
    setWcLinking(t) {
        Ne.wcLinking = t
    },
    setWcError(t) {
        Ne.wcError = t,
        Ne.buffering = !1
    },
    setRecentWallet(t) {
        Ne.recentWallet = t
    },
    setBuffering(t) {
        Ne.buffering = t
    },
    setStatus(t) {
        Ne.status = t
    },
    async disconnect(t) {
        try {
            await Y._getClient()?.disconnect(t)
        } catch (e) {
            throw new Cr("Failed to disconnect","INTERNAL_SDK_ERROR",e)
        }
    },
    setConnections(t, e) {
        Ne.connections.set(e, t)
    },
    switchAccount({connection: t, address: e, namespace: s}) {
        if (q.state.activeConnectorIds[s] === t.connectorId) {
            const n = h.state.activeCaipNetwork;
            if (n) {
                const o = `${s}:${n.id}:${e}`;
                W.setCaipAddress(o, s)
            } else
                console.warn(`No current network found for namespace "${s}"`)
        } else {
            const n = q.getConnector(t.connectorId);
            n ? Y.connectExternal(n, s) : console.warn(`No connector found for namespace "${s}"`)
        }
    }
}
  , Y = vt(iu)
  , Gs = _e({
    loading: !1,
    open: !1,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: !1
})
  , bs = {
    state: Gs,
    subscribe(t) {
        return Xe(Gs, () => t(Gs))
    },
    subscribeOpen(t) {
        return Qe(Gs, "open", t)
    },
    set(t) {
        Object.assign(Gs, {
            ...Gs,
            ...t
        })
    }
}
  , ln = {
    createBalance(t, e) {
        const s = {
            name: t.metadata.name || "",
            symbol: t.metadata.symbol || "",
            decimals: t.metadata.decimals || 0,
            value: t.metadata.value || 0,
            price: t.metadata.price || 0,
            iconUrl: t.metadata.iconUrl || ""
        };
        return {
            name: s.name,
            symbol: s.symbol,
            chainId: e,
            address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
            value: s.value,
            price: s.price,
            quantity: {
                decimals: s.decimals.toString(),
                numeric: this.convertHexToBalance({
                    hex: t.balance,
                    decimals: s.decimals
                })
            },
            iconUrl: s.iconUrl
        }
    },
    convertHexToBalance({hex: t, decimals: e}) {
        return fd(BigInt(t), e)
    },
    convertAddressToCAIP10Address(t, e) {
        return `${e}:${t}`
    },
    createCAIP2ChainId(t, e) {
        return `${e}:${parseInt(t, 16)}`
    },
    getChainIdHexFromCAIP2ChainId(t) {
        const e = t.split(":");
        if (e.length < 2 || !e[1])
            return "0x0";
        const s = e[1]
          , r = parseInt(s, 10);
        return isNaN(r) ? "0x0" : `0x${r.toString(16)}`
    },
    isWalletGetAssetsResponse(t) {
        return typeof t != "object" || t === null ? !1 : Object.values(t).every(e => Array.isArray(e) && e.every(s => this.isValidAsset(s)))
    },
    isValidAsset(t) {
        return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string"
    }
}
  , Ho = {
    async getMyTokensWithBalance(t) {
        const e = W.state.address
          , s = h.state.activeCaipNetwork;
        if (!e || !s)
            return [];
        if (s.chainNamespace === "eip155") {
            const i = await this.getEIP155Balances(e, s);
            if (i)
                return this.filterLowQualityTokens(i)
        }
        const r = await J.getBalance(e, s.caipNetworkId, t);
        return this.filterLowQualityTokens(r.balances)
    },
    async getEIP155Balances(t, e) {
        try {
            const s = ln.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
            if (!(await Y.getCapabilities(t))?.[s]?.assetDiscovery?.supported)
                return null;
            const i = await Y.walletGetAssets({
                account: t,
                chainFilter: [s]
            });
            return ln.isWalletGetAssetsResponse(i) ? (i[s] || []).map(o => ln.createBalance(o, e.caipNetworkId)) : null
        } catch {
            return null
        }
    },
    filterLowQualityTokens(t) {
        return t.filter(e => e.quantity.decimals !== "0")
    },
    mapBalancesToSwapTokens(t) {
        return t?.map(e => ({
            ...e,
            address: e?.address ? e.address : h.getActiveNetworkTokenAddress(),
            decimals: parseInt(e.quantity.decimals, 10),
            logoUri: e.iconUrl,
            eip2612: !1
        })) || []
    }
}
  , fe = _e({
    tokenBalances: [],
    loading: !1
})
  , nu = {
    state: fe,
    subscribe(t) {
        return Xe(fe, () => t(fe))
    },
    subscribeKey(t, e) {
        return Qe(fe, t, e)
    },
    setToken(t) {
        t && (fe.token = Bs(t))
    },
    setTokenAmount(t) {
        fe.sendTokenAmount = t
    },
    setReceiverAddress(t) {
        fe.receiverAddress = t
    },
    setReceiverProfileImageUrl(t) {
        fe.receiverProfileImageUrl = t
    },
    setReceiverProfileName(t) {
        fe.receiverProfileName = t
    },
    setNetworkBalanceInUsd(t) {
        fe.networkBalanceInUSD = t
    },
    setLoading(t) {
        fe.loading = t
    },
    async sendToken() {
        try {
            switch (he.setLoading(!0),
            h.state.activeCaipNetwork?.chainNamespace) {
            case "eip155":
                await he.sendEvmToken();
                return;
            case "solana":
                await he.sendSolanaToken();
                return;
            default:
                throw new Error("Unsupported chain")
            }
        } finally {
            he.setLoading(!1)
        }
    },
    async sendEvmToken() {
        const t = h.state.activeChain
          , e = W.state.preferredAccountTypes?.[t];
        if (!he.state.sendTokenAmount || !he.state.receiverAddress)
            throw new Error("An amount and receiver address are required");
        if (!he.state.token)
            throw new Error("A token is required");
        he.state.token?.address ? (Pe.sendEvent({
            type: "track",
            event: "SEND_INITIATED",
            properties: {
                isSmartAccount: e === Xr.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: he.state.token.address,
                amount: he.state.sendTokenAmount,
                network: h.state.activeCaipNetwork?.caipNetworkId || ""
            }
        }),
        await he.sendERC20Token({
            receiverAddress: he.state.receiverAddress,
            tokenAddress: he.state.token.address,
            sendTokenAmount: he.state.sendTokenAmount,
            decimals: he.state.token.quantity.decimals
        })) : (Pe.sendEvent({
            type: "track",
            event: "SEND_INITIATED",
            properties: {
                isSmartAccount: e === Xr.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: he.state.token.symbol || "",
                amount: he.state.sendTokenAmount,
                network: h.state.activeCaipNetwork?.caipNetworkId || ""
            }
        }),
        await he.sendNativeToken({
            receiverAddress: he.state.receiverAddress,
            sendTokenAmount: he.state.sendTokenAmount,
            decimals: he.state.token.quantity.decimals
        }))
    },
    async fetchTokenBalance(t) {
        fe.loading = !0;
        const e = h.state.activeCaipNetwork?.caipNetworkId
          , s = h.state.activeCaipNetwork?.chainNamespace
          , r = h.state.activeCaipAddress
          , i = r ? Z.getPlainAddress(r) : void 0;
        if (fe.lastRetry && !Z.isAllowedRetry(fe.lastRetry, 30 * ve.ONE_SEC_MS))
            return fe.loading = !1,
            [];
        try {
            if (i && e && s) {
                const n = await Ho.getMyTokensWithBalance();
                return fe.tokenBalances = n,
                fe.lastRetry = void 0,
                n
            }
        } catch (n) {
            fe.lastRetry = Date.now(),
            t?.(n),
            Ut.showError("Token Balance Unavailable")
        } finally {
            fe.loading = !1
        }
        return []
    },
    fetchNetworkBalance() {
        if (fe.tokenBalances.length === 0)
            return;
        const t = Ho.mapBalancesToSwapTokens(fe.tokenBalances);
        if (!t)
            return;
        const e = t.find(s => s.address === h.getActiveNetworkTokenAddress());
        e && (fe.networkBalanceInUSD = e ? _d.multiply(e.quantity.numeric, e.price).toString() : "0")
    },
    async sendNativeToken(t) {
        ie.pushTransactionStack({});
        const e = t.receiverAddress
          , s = W.state.address
          , r = Y.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
        await Y.sendTransaction({
            chainNamespace: "eip155",
            to: e,
            address: s,
            data: "0x",
            value: r ?? BigInt(0)
        }),
        Pe.sendEvent({
            type: "track",
            event: "SEND_SUCCESS",
            properties: {
                isSmartAccount: W.state.preferredAccountTypes?.eip155 === Xr.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: he.state.token?.symbol || "",
                amount: t.sendTokenAmount,
                network: h.state.activeCaipNetwork?.caipNetworkId || ""
            }
        }),
        Y._getClient()?.updateBalance("eip155"),
        he.resetSend()
    },
    async sendERC20Token(t) {
        ie.pushTransactionStack({
            onSuccess() {
                ie.replace("Account")
            }
        });
        const e = Y.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
        if (W.state.address && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
            const s = Z.getPlainAddress(t.tokenAddress);
            await Y.writeContract({
                fromAddress: W.state.address,
                tokenAddress: s,
                args: [t.receiverAddress, e ?? BigInt(0)],
                method: "transfer",
                abi: Td.getERC20Abi(s),
                chainNamespace: "eip155"
            }),
            he.resetSend()
        }
    },
    async sendSolanaToken() {
        if (!he.state.sendTokenAmount || !he.state.receiverAddress)
            throw new Error("An amount and receiver address are required");
        ie.pushTransactionStack({
            onSuccess() {
                ie.replace("Account")
            }
        }),
        await Y.sendTransaction({
            chainNamespace: "solana",
            to: he.state.receiverAddress,
            value: he.state.sendTokenAmount
        }),
        Y._getClient()?.updateBalance("solana"),
        he.resetSend()
    },
    resetSend() {
        fe.token = void 0,
        fe.sendTokenAmount = void 0,
        fe.receiverAddress = void 0,
        fe.receiverProfileImageUrl = void 0,
        fe.receiverProfileName = void 0,
        fe.loading = !1,
        fe.tokenBalances = []
    }
}
  , he = vt(nu)
  , dn = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: !1,
    addressLabels: new Map,
    allAccounts: [],
    user: void 0
}
  , Ai = {
    caipNetwork: void 0,
    supportsAllNetworks: !0,
    smartAccountEnabledNetworks: []
}
  , M = _e({
    chains: Dd(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: !1,
    universalAdapter: {
        networkControllerClient: void 0,
        connectionControllerClient: void 0
    },
    isSwitchingNamespace: !1
})
  , ou = {
    state: M,
    subscribe(t) {
        return Xe(M, () => {
            t(M)
        }
        )
    },
    subscribeKey(t, e) {
        return Qe(M, t, e)
    },
    subscribeChainProp(t, e, s) {
        let r;
        return Xe(M.chains, () => {
            const i = s || M.activeChain;
            if (i) {
                const n = M.chains.get(i)?.[t];
                r !== n && (r = n,
                e(n))
            }
        }
        )
    },
    initialize(t, e, s) {
        const {chainId: r, namespace: i} = F.getActiveNetworkProps()
          , n = e?.find(d => d.id.toString() === r?.toString())
          , a = t.find(d => d?.namespace === i) || t?.[0]
          , c = t.map(d => d.namespace).filter(d => d !== void 0)
          , l = S.state.enableEmbedded ? new Set([...c]) : new Set([...e?.map(d => d.chainNamespace) ?? []]);
        (t?.length === 0 || !a) && (M.noAdapters = !0),
        M.noAdapters || (M.activeChain = a?.namespace,
        M.activeCaipNetwork = n,
        h.setChainNetworkData(a?.namespace, {
            caipNetwork: n
        }),
        M.activeChain && bs.set({
            activeChain: a?.namespace
        })),
        l.forEach(d => {
            const u = e?.filter(p => p.chainNamespace === d);
            h.state.chains.set(d, {
                namespace: d,
                networkState: _e({
                    ...Ai,
                    caipNetwork: u?.[0]
                }),
                accountState: _e(dn),
                caipNetworks: u ?? [],
                ...s
            }),
            h.setRequestedCaipNetworks(u ?? [], d)
        }
        )
    },
    removeAdapter(t) {
        if (M.activeChain === t) {
            const e = Array.from(M.chains.entries()).find( ([s]) => s !== t);
            if (e) {
                const s = e[1]?.caipNetworks?.[0];
                s && h.setActiveCaipNetwork(s)
            }
        }
        M.chains.delete(t)
    },
    addAdapter(t, {networkControllerClient: e, connectionControllerClient: s}, r) {
        M.chains.set(t.namespace, {
            namespace: t.namespace,
            networkState: {
                ...Ai,
                caipNetwork: r[0]
            },
            accountState: dn,
            caipNetworks: r,
            connectionControllerClient: s,
            networkControllerClient: e
        }),
        h.setRequestedCaipNetworks(r?.filter(i => i.chainNamespace === t.namespace) ?? [], t.namespace)
    },
    addNetwork(t) {
        const e = M.chains.get(t.chainNamespace);
        if (e) {
            const s = [...e.caipNetworks || []];
            e.caipNetworks?.find(r => r.id === t.id) || s.push(t),
            M.chains.set(t.chainNamespace, {
                ...e,
                caipNetworks: s
            }),
            h.setRequestedCaipNetworks(s, t.chainNamespace),
            q.filterByNamespace(t.chainNamespace, !0)
        }
    },
    removeNetwork(t, e) {
        const s = M.chains.get(t);
        if (s) {
            const r = M.activeCaipNetwork?.id === e
              , i = [...s.caipNetworks?.filter(n => n.id !== e) || []];
            r && s?.caipNetworks?.[0] && h.setActiveCaipNetwork(s.caipNetworks[0]),
            M.chains.set(t, {
                ...s,
                caipNetworks: i
            }),
            h.setRequestedCaipNetworks(i || [], t),
            i.length === 0 && q.filterByNamespace(t, !1)
        }
    },
    setAdapterNetworkState(t, e) {
        const s = M.chains.get(t);
        s && (s.networkState = {
            ...s.networkState || Ai,
            ...e
        },
        M.chains.set(t, s))
    },
    setChainAccountData(t, e, s=!0) {
        if (!t)
            throw new Error("Chain is required to update chain account data");
        const r = M.chains.get(t);
        if (r) {
            const i = {
                ...r.accountState || dn,
                ...e
            };
            M.chains.set(t, {
                ...r,
                accountState: i
            }),
            (M.chains.size === 1 || M.activeChain === t) && (e.caipAddress && (M.activeCaipAddress = e.caipAddress),
            W.replaceState(i))
        }
    },
    setChainNetworkData(t, e) {
        if (!t)
            return;
        const s = M.chains.get(t);
        if (s) {
            const r = {
                ...s.networkState || Ai,
                ...e
            };
            M.chains.set(t, {
                ...s,
                networkState: r
            })
        }
    },
    setAccountProp(t, e, s, r=!0) {
        h.setChainAccountData(s, {
            [t]: e
        }, r),
        t === "status" && e === "disconnected" && s && q.removeConnectorId(s)
    },
    setActiveNamespace(t) {
        M.activeChain = t;
        const e = t ? M.chains.get(t) : void 0
          , s = e?.networkState?.caipNetwork;
        s?.id && t && (M.activeCaipAddress = e?.accountState?.caipAddress,
        M.activeCaipNetwork = s,
        h.setChainNetworkData(t, {
            caipNetwork: s
        }),
        F.setActiveCaipNetworkId(s?.caipNetworkId),
        bs.set({
            activeChain: t,
            selectedNetworkId: s?.caipNetworkId
        }))
    },
    setActiveCaipNetwork(t) {
        if (!t)
            return;
        M.activeChain !== t.chainNamespace && h.setIsSwitchingNamespace(!0);
        const e = M.chains.get(t.chainNamespace);
        M.activeChain = t.chainNamespace,
        M.activeCaipNetwork = t,
        h.setChainNetworkData(t.chainNamespace, {
            caipNetwork: t
        }),
        e?.accountState?.address ? M.activeCaipAddress = `${t.chainNamespace}:${t.id}:${e?.accountState?.address}` : M.activeCaipAddress = void 0,
        h.setAccountProp("caipAddress", M.activeCaipAddress, t.chainNamespace),
        e && W.replaceState(e.accountState),
        he.resetSend(),
        bs.set({
            activeChain: M.activeChain,
            selectedNetworkId: M.activeCaipNetwork?.caipNetworkId
        }),
        F.setActiveCaipNetworkId(t.caipNetworkId),
        !h.checkIfSupportedNetwork(t.chainNamespace) && S.state.enableNetworkSwitch && !S.state.allowUnsupportedChain && !Y.state.wcBasic && h.showUnsupportedChainUI()
    },
    addCaipNetwork(t) {
        if (!t)
            return;
        const e = M.chains.get(t.chainNamespace);
        e && e?.caipNetworks?.push(t)
    },
    async switchActiveNamespace(t) {
        if (!t)
            return;
        const e = t !== h.state.activeChain
          , s = h.getNetworkData(t)?.caipNetwork
          , r = h.getCaipNetworkByNamespace(t, s?.id);
        e && r && await h.switchActiveNetwork(r)
    },
    async switchActiveNetwork(t) {
        const s = !h.state.chains.get(h.state.activeChain)?.caipNetworks?.some(i => i.id === M.activeCaipNetwork?.id)
          , r = h.getNetworkControllerClient(t.chainNamespace);
        if (r) {
            try {
                await r.switchCaipNetwork(t),
                s && Fe.close()
            } catch {
                ie.goBack()
            }
            Pe.sendEvent({
                type: "track",
                event: "SWITCH_NETWORK",
                properties: {
                    network: t.caipNetworkId
                }
            })
        }
    },
    getNetworkControllerClient(t) {
        const e = t || M.activeChain
          , s = M.chains.get(e);
        if (!s)
            throw new Error("Chain adapter not found");
        if (!s.networkControllerClient)
            throw new Error("NetworkController client not set");
        return s.networkControllerClient
    },
    getConnectionControllerClient(t) {
        const e = t || M.activeChain;
        if (!e)
            throw new Error("Chain is required to get connection controller client");
        const s = M.chains.get(e);
        if (!s?.connectionControllerClient)
            throw new Error("ConnectionController client not set");
        return s.connectionControllerClient
    },
    getAccountProp(t, e) {
        let s = M.activeChain;
        if (e && (s = e),
        !s)
            return;
        const r = M.chains.get(s)?.accountState;
        if (r)
            return r[t]
    },
    getNetworkProp(t, e) {
        const s = M.chains.get(e)?.networkState;
        if (s)
            return s[t]
    },
    getRequestedCaipNetworks(t) {
        const e = M.chains.get(t)
          , {approvedCaipNetworkIds: s=[], requestedCaipNetworks: r=[]} = e?.networkState || {};
        return Z.sortRequestedNetworks(s, r)
    },
    getAllRequestedCaipNetworks() {
        const t = [];
        return M.chains.forEach(e => {
            const s = h.getRequestedCaipNetworks(e.namespace);
            t.push(...s)
        }
        ),
        t
    },
    setRequestedCaipNetworks(t, e) {
        h.setAdapterNetworkState(e, {
            requestedCaipNetworks: t
        });
        const r = h.getAllRequestedCaipNetworks().map(n => n.chainNamespace)
          , i = Array.from(new Set(r));
        q.filterByNamespaces(i)
    },
    getAllApprovedCaipNetworkIds() {
        const t = [];
        return M.chains.forEach(e => {
            const s = h.getApprovedCaipNetworkIds(e.namespace);
            t.push(...s)
        }
        ),
        t
    },
    getActiveCaipNetwork() {
        return M.activeCaipNetwork
    },
    getActiveCaipAddress() {
        return M.activeCaipAddress
    },
    getApprovedCaipNetworkIds(t) {
        return M.chains.get(t)?.networkState?.approvedCaipNetworkIds || []
    },
    async setApprovedCaipNetworksData(t) {
        const s = await h.getNetworkControllerClient()?.getApprovedCaipNetworksData();
        h.setAdapterNetworkState(t, {
            approvedCaipNetworkIds: s?.approvedCaipNetworkIds,
            supportsAllNetworks: s?.supportsAllNetworks
        })
    },
    checkIfSupportedNetwork(t, e) {
        const s = e || M.activeCaipNetwork
          , r = h.getRequestedCaipNetworks(t);
        return r.length ? r?.some(i => i.id === s?.id) : !0
    },
    checkIfSupportedChainId(t) {
        return M.activeChain ? h.getRequestedCaipNetworks(M.activeChain)?.some(s => s.id === t) : !0
    },
    setSmartAccountEnabledNetworks(t, e) {
        h.setAdapterNetworkState(e, {
            smartAccountEnabledNetworks: t
        })
    },
    checkIfSmartAccountEnabled() {
        const t = Mc.caipNetworkIdToNumber(M.activeCaipNetwork?.caipNetworkId)
          , e = M.activeChain;
        return !e || !t ? !1 : !!h.getNetworkProp("smartAccountEnabledNetworks", e)?.includes(Number(t))
    },
    getActiveNetworkTokenAddress() {
        const t = M.activeCaipNetwork?.chainNamespace || "eip155"
          , e = M.activeCaipNetwork?.id || 1
          , s = ve.NATIVE_TOKEN_ADDRESS[t];
        return `${t}:${e}:${s}`
    },
    showUnsupportedChainUI() {
        Fe.open({
            view: "UnsupportedChain"
        })
    },
    checkIfNamesSupported() {
        const t = M.activeCaipNetwork;
        return !!(t?.chainNamespace && ve.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace))
    },
    resetNetwork(t) {
        h.setAdapterNetworkState(t, {
            approvedCaipNetworkIds: void 0,
            supportsAllNetworks: !0,
            smartAccountEnabledNetworks: []
        })
    },
    resetAccount(t) {
        const e = t;
        if (!e)
            throw new Error("Chain is required to set account prop");
        M.activeCaipAddress = void 0,
        h.setChainAccountData(e, {
            smartAccountDeployed: !1,
            currentTab: 0,
            caipAddress: void 0,
            address: void 0,
            balance: void 0,
            balanceSymbol: void 0,
            profileName: void 0,
            profileImage: void 0,
            addressExplorerUrl: void 0,
            tokenBalance: [],
            connectedWalletInfo: void 0,
            preferredAccountTypes: void 0,
            socialProvider: void 0,
            socialWindow: void 0,
            farcasterUrl: void 0,
            allAccounts: [],
            user: void 0,
            status: "disconnected"
        }),
        q.removeConnectorId(e)
    },
    setIsSwitchingNamespace(t) {
        M.isSwitchingNamespace = t
    },
    getFirstCaipNetworkSupportsAuthConnector() {
        const t = [];
        let e;
        if (M.chains.forEach(s => {
            z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r => r === s.namespace) && s.namespace && t.push(s.namespace)
        }
        ),
        t.length > 0) {
            const s = t[0];
            return e = s ? M.chains.get(s)?.caipNetworks?.[0] : void 0,
            e
        }
    },
    getAccountData(t) {
        return t ? h.state.chains.get(t)?.accountState : W.state
    },
    getNetworkData(t) {
        const e = t || M.activeChain;
        if (e)
            return h.state.chains.get(e)?.networkState
    },
    getCaipNetworkByNamespace(t, e) {
        if (!t)
            return;
        const s = h.state.chains.get(t)
          , r = s?.caipNetworks?.find(i => i.id === e);
        return r || s?.networkState?.caipNetwork || s?.caipNetworks?.[0]
    },
    getRequestedCaipNetworkIds() {
        const t = q.state.filterByNamespace;
        return (t ? [M.chains.get(t)] : Array.from(M.chains.values())).flatMap(s => s?.caipNetworks || []).map(s => s.caipNetworkId)
    },
    getCaipNetworks(t) {
        return t ? h.getRequestedCaipNetworks(t) : h.getAllRequestedCaipNetworks()
    }
}
  , h = vt(ou)
  , au = {
    purchaseCurrencies: [{
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "USD Coin",
        symbol: "USDC",
        networks: [{
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        }, {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }]
    }, {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "Ether",
        symbol: "ETH",
        networks: [{
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        }, {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }]
    }],
    paymentCurrencies: [{
        id: "USD",
        payment_method_limits: [{
            id: "card",
            min: "10.00",
            max: "7500.00"
        }, {
            id: "ach_bank_account",
            min: "10.00",
            max: "25000.00"
        }]
    }, {
        id: "EUR",
        payment_method_limits: [{
            id: "card",
            min: "10.00",
            max: "7500.00"
        }, {
            id: "ach_bank_account",
            min: "10.00",
            max: "25000.00"
        }]
    }]
}
  , Fc = Z.getBlockchainApiUrl()
  , it = _e({
    clientId: null,
    api: new gi({
        baseUrl: Fc,
        clientId: null
    }),
    supportedChains: {
        http: [],
        ws: []
    }
})
  , J = {
    state: it,
    async get(t) {
        const {st: e, sv: s} = J.getSdkProperties()
          , r = S.state.projectId
          , i = {
            ...t.params || {},
            st: e,
            sv: s,
            projectId: r
        };
        return it.api.get({
            ...t,
            params: i
        })
    },
    getSdkProperties() {
        const {sdkType: t, sdkVersion: e} = S.state;
        return {
            st: t || "unknown",
            sv: e || "unknown"
        }
    },
    async isNetworkSupported(t) {
        if (!t)
            return !1;
        try {
            it.supportedChains.http.length || await J.getSupportedNetworks()
        } catch {
            return !1
        }
        return it.supportedChains.http.includes(t)
    },
    async getSupportedNetworks() {
        try {
            const t = await J.get({
                path: "v1/supported-chains"
            });
            return it.supportedChains = t,
            t
        } catch {
            return it.supportedChains
        }
    },
    async fetchIdentity({address: t, caipNetworkId: e}) {
        if (!await J.isNetworkSupported(e))
            return {
                avatar: "",
                name: ""
            };
        const r = F.getIdentityFromCacheForAddress(t);
        if (r)
            return r;
        const i = await J.get({
            path: `/v1/identity/${t}`,
            params: {
                sender: h.state.activeCaipAddress ? Z.getPlainAddress(h.state.activeCaipAddress) : void 0
            }
        });
        return F.updateIdentityCache({
            address: t,
            identity: i,
            timestamp: Date.now()
        }),
        i
    },
    async fetchTransactions({account: t, cursor: e, onramp: s, signal: r, cache: i, chainId: n}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: `/v1/account/${t}/history`,
            params: {
                cursor: e,
                onramp: s,
                chainId: n
            },
            signal: r,
            cache: i
        }) : {
            data: [],
            next: void 0
        }
    },
    async fetchSwapQuote({amount: t, userAddress: e, from: s, to: r, gasPrice: i}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: "/v1/convert/quotes",
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                amount: t,
                userAddress: e,
                from: s,
                to: r,
                gasPrice: i
            }
        }) : {
            quotes: []
        }
    },
    async fetchSwapTokens({chainId: t}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: "/v1/convert/tokens",
            params: {
                chainId: t
            }
        }) : {
            tokens: []
        }
    },
    async fetchTokenPrice({addresses: t}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? it.api.post({
            path: "/v1/fungible/price",
            body: {
                currency: "usd",
                addresses: t,
                projectId: S.state.projectId
            },
            headers: {
                "Content-Type": "application/json"
            }
        }) : {
            fungibles: []
        }
    },
    async fetchSwapAllowance({tokenAddress: t, userAddress: e}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: "/v1/convert/allowance",
            params: {
                tokenAddress: t,
                userAddress: e
            },
            headers: {
                "Content-Type": "application/json"
            }
        }) : {
            allowance: "0"
        }
    },
    async fetchGasPrice({chainId: t}) {
        const {st: e, sv: s} = J.getSdkProperties();
        if (!await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))
            throw new Error("Network not supported for Gas Price");
        return J.get({
            path: "/v1/convert/gas-price",
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                chainId: t,
                st: e,
                sv: s
            }
        })
    },
    async generateSwapCalldata({amount: t, from: e, to: s, userAddress: r, disableEstimate: i}) {
        if (!await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))
            throw new Error("Network not supported for Swaps");
        return it.api.post({
            path: "/v1/convert/build-transaction",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                amount: t,
                eip155: {
                    slippage: ve.CONVERT_SLIPPAGE_TOLERANCE
                },
                projectId: S.state.projectId,
                from: e,
                to: s,
                userAddress: r,
                disableEstimate: i
            }
        })
    },
    async generateApproveCalldata({from: t, to: e, userAddress: s}) {
        const {st: r, sv: i} = J.getSdkProperties();
        if (!await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))
            throw new Error("Network not supported for Swaps");
        return J.get({
            path: "/v1/convert/build-approve",
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                userAddress: s,
                from: t,
                to: e,
                st: r,
                sv: i
            }
        })
    },
    async getBalance(t, e, s) {
        const {st: r, sv: i} = J.getSdkProperties();
        if (!await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))
            return Ut.showError("Token Balance Unavailable"),
            {
                balances: []
            };
        const o = `${e}:${t}`
          , a = F.getBalanceCacheForCaipAddress(o);
        if (a)
            return a;
        const c = await J.get({
            path: `/v1/account/${t}/balance`,
            params: {
                currency: "usd",
                chainId: e,
                forceUpdate: s,
                st: r,
                sv: i
            }
        });
        return F.updateBalanceCache({
            caipAddress: o,
            balance: c,
            timestamp: Date.now()
        }),
        c
    },
    async lookupEnsName(t) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: `/v1/profile/account/${t}`,
            params: {
                apiVersion: "2"
            }
        }) : {
            addresses: {},
            attributes: []
        }
    },
    async reverseLookupEnsName({address: t}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: `/v1/profile/reverse/${t}`,
            params: {
                sender: W.state.address,
                apiVersion: "2"
            }
        }) : []
    },
    async getEnsNameSuggestions(t) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: `/v1/profile/suggestions/${t}`,
            params: {
                zone: "reown.id"
            }
        }) : {
            suggestions: []
        }
    },
    async registerEnsName({coinType: t, address: e, message: s, signature: r}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? it.api.post({
            path: "/v1/profile/account",
            body: {
                coin_type: t,
                address: e,
                message: s,
                signature: r
            },
            headers: {
                "Content-Type": "application/json"
            }
        }) : {
            success: !1
        }
    },
    async generateOnRampURL({destinationWallets: t, partnerUserId: e, defaultNetwork: s, purchaseAmount: r, paymentAmount: i}) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? (await it.api.post({
            path: "/v1/generators/onrampurl",
            params: {
                projectId: S.state.projectId
            },
            body: {
                destinationWallets: t,
                defaultNetwork: s,
                partnerUserId: e,
                defaultExperience: "buy",
                presetCryptoAmount: r,
                presetFiatAmount: i
            }
        })).url : ""
    },
    async getOnrampOptions() {
        if (!await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))
            return {
                paymentCurrencies: [],
                purchaseCurrencies: []
            };
        try {
            return await J.get({
                path: "/v1/onramp/options"
            })
        } catch {
            return au
        }
    },
    async getOnrampQuote({purchaseCurrency: t, paymentCurrency: e, amount: s, network: r}) {
        try {
            return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? await it.api.post({
                path: "/v1/onramp/quote",
                params: {
                    projectId: S.state.projectId
                },
                body: {
                    purchaseCurrency: t,
                    paymentCurrency: e,
                    amount: s,
                    network: r
                }
            }) : null
        } catch {
            return {
                coinbaseFee: {
                    amount: s,
                    currency: e.id
                },
                networkFee: {
                    amount: s,
                    currency: e.id
                },
                paymentSubtotal: {
                    amount: s,
                    currency: e.id
                },
                paymentTotal: {
                    amount: s,
                    currency: e.id
                },
                purchaseAmount: {
                    amount: s,
                    currency: e.id
                },
                quoteId: "mocked-quote-id"
            }
        }
    },
    async getSmartSessions(t) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? J.get({
            path: `/v1/sessions/${t}`
        }) : []
    },
    async revokeSmartSession(t, e, s) {
        return await J.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId) ? it.api.post({
            path: `/v1/sessions/${t}/revoke`,
            params: {
                projectId: S.state.projectId
            },
            body: {
                pci: e,
                signature: s
            }
        }) : {
            success: !1
        }
    },
    setClientId(t) {
        it.clientId = t,
        it.api = new gi({
            baseUrl: Fc,
            clientId: t
        })
    }
}
  , Ct = _e({
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: !1,
    addressLabels: new Map,
    allAccounts: []
})
  , cu = {
    state: Ct,
    replaceState(t) {
        t && Object.assign(Ct, Bs(t))
    },
    subscribe(t) {
        return h.subscribeChainProp("accountState", e => {
            if (e)
                return t(e)
        }
        )
    },
    subscribeKey(t, e, s) {
        let r;
        return h.subscribeChainProp("accountState", i => {
            if (i) {
                const n = i[t];
                r !== n && (r = n,
                e(n))
            }
        }
        , s)
    },
    setStatus(t, e) {
        h.setAccountProp("status", t, e)
    },
    getCaipAddress(t) {
        return h.getAccountProp("caipAddress", t)
    },
    setCaipAddress(t, e) {
        const s = t ? Z.getPlainAddress(t) : void 0;
        e === h.state.activeChain && (h.state.activeCaipAddress = t),
        h.setAccountProp("caipAddress", t, e),
        h.setAccountProp("address", s, e)
    },
    setBalance(t, e, s) {
        h.setAccountProp("balance", t, s),
        h.setAccountProp("balanceSymbol", e, s)
    },
    setProfileName(t, e) {
        h.setAccountProp("profileName", t, e)
    },
    setProfileImage(t, e) {
        h.setAccountProp("profileImage", t, e)
    },
    setUser(t, e) {
        h.setAccountProp("user", t, e)
    },
    setAddressExplorerUrl(t, e) {
        h.setAccountProp("addressExplorerUrl", t, e)
    },
    setSmartAccountDeployed(t, e) {
        h.setAccountProp("smartAccountDeployed", t, e)
    },
    setCurrentTab(t) {
        h.setAccountProp("currentTab", t, h.state.activeChain)
    },
    setTokenBalance(t, e) {
        t && h.setAccountProp("tokenBalance", t, e)
    },
    setShouldUpdateToAddress(t, e) {
        h.setAccountProp("shouldUpdateToAddress", t, e)
    },
    setAllAccounts(t, e) {
        h.setAccountProp("allAccounts", t, e)
    },
    addAddressLabel(t, e, s) {
        const r = h.getAccountProp("addressLabels", s) || new Map;
        r.set(t, e),
        h.setAccountProp("addressLabels", r, s)
    },
    removeAddressLabel(t, e) {
        const s = h.getAccountProp("addressLabels", e) || new Map;
        s.delete(t),
        h.setAccountProp("addressLabels", s, e)
    },
    setConnectedWalletInfo(t, e) {
        h.setAccountProp("connectedWalletInfo", t, e, !1)
    },
    setPreferredAccountType(t, e) {
        h.setAccountProp("preferredAccountTypes", {
            ...Ct.preferredAccountTypes,
            [e]: t
        }, e)
    },
    setPreferredAccountTypes(t) {
        Ct.preferredAccountTypes = t
    },
    setSocialProvider(t, e) {
        t && h.setAccountProp("socialProvider", t, e)
    },
    setSocialWindow(t, e) {
        h.setAccountProp("socialWindow", t ? Bs(t) : void 0, e)
    },
    setFarcasterUrl(t, e) {
        h.setAccountProp("farcasterUrl", t, e)
    },
    async fetchTokenBalance(t) {
        Ct.balanceLoading = !0;
        const e = h.state.activeCaipNetwork?.caipNetworkId
          , s = h.state.activeCaipNetwork?.chainNamespace
          , r = h.state.activeCaipAddress
          , i = r ? Z.getPlainAddress(r) : void 0;
        if (Ct.lastRetry && !Z.isAllowedRetry(Ct.lastRetry, 30 * ve.ONE_SEC_MS))
            return Ct.balanceLoading = !1,
            [];
        try {
            if (i && e && s) {
                const o = (await J.getBalance(i, e)).balances.filter(a => a.quantity.decimals !== "0");
                return W.setTokenBalance(o, s),
                Ct.lastRetry = void 0,
                Ct.balanceLoading = !1,
                o
            }
        } catch (n) {
            Ct.lastRetry = Date.now(),
            t?.(n),
            Ut.showError("Token Balance Unavailable")
        } finally {
            Ct.balanceLoading = !1
        }
        return []
    },
    resetAccount(t) {
        h.resetAccount(t)
    }
}
  , W = vt(cu)
  , lu = {
    onSwitchNetwork({network: t, ignoreSwitchConfirmation: e=!1}) {
        const s = h.state.activeCaipNetwork
          , r = ie.state.data;
        if (t.id === s?.id)
            return;
        const n = W.getCaipAddress(h.state.activeChain)
          , o = t.chainNamespace !== h.state.activeChain
          , a = W.getCaipAddress(t.chainNamespace)
          , l = q.getConnectorId(h.state.activeChain) === z.CONNECTOR_ID.AUTH
          , d = z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(u => u === t.chainNamespace);
        e || l && d ? ie.push("SwitchNetwork", {
            ...r,
            network: t
        }) : n && o && !a ? ie.push("SwitchActiveChain", {
            switchToChain: t.chainNamespace,
            navigateTo: "Connect",
            navigateWithReplace: !0,
            network: t
        }) : ie.push("SwitchNetwork", {
            ...r,
            network: t
        })
    }
}
  , nt = _e({
    loading: !1,
    loadingNamespaceMap: new Map,
    open: !1,
    shake: !1,
    namespace: void 0
})
  , du = {
    state: nt,
    subscribe(t) {
        return Xe(nt, () => t(nt))
    },
    subscribeKey(t, e) {
        return Qe(nt, t, e)
    },
    async open(t) {
        const e = W.state.status === "connected"
          , s = t?.namespace
          , r = h.state.activeChain
          , i = s && s !== r
          , n = h.getAccountData(t?.namespace)?.caipAddress;
        if (Y.state.wcBasic ? V.prefetch({
            fetchNetworkImages: !1,
            fetchConnectorImages: !1
        }) : await V.prefetch({
            fetchConnectorImages: !e,
            fetchFeaturedWallets: !e,
            fetchRecommendedWallets: !e
        }),
        q.setFilterByNamespace(t?.namespace),
        Fe.setLoading(!0, s),
        s && i) {
            const o = h.getNetworkData(s)?.caipNetwork || h.getRequestedCaipNetworks(s)[0];
            o && lu.onSwitchNetwork({
                network: o,
                ignoreSwitchConfirmation: !0
            })
        } else {
            const o = h.state.noAdapters;
            S.state.manualWCControl || o && !n ? Z.isMobile() ? ie.reset("AllWallets") : ie.reset("ConnectingWalletConnectBasic") : t?.view ? ie.reset(t.view, t.data) : n ? ie.reset("Account") : ie.reset("Connect")
        }
        nt.open = !0,
        bs.set({
            open: !0
        }),
        Pe.sendEvent({
            type: "track",
            event: "MODAL_OPEN",
            properties: {
                connected: !!n
            }
        })
    },
    close() {
        const t = S.state.enableEmbedded
          , e = !!h.state.activeCaipAddress;
        nt.open && Pe.sendEvent({
            type: "track",
            event: "MODAL_CLOSE",
            properties: {
                connected: e
            }
        }),
        nt.open = !1,
        ie.reset("Connect"),
        Fe.clearLoading(),
        t ? e ? ie.replace("Account") : ie.push("Connect") : bs.set({
            open: !1
        }),
        Y.resetUri()
    },
    setLoading(t, e) {
        e && nt.loadingNamespaceMap.set(e, t),
        nt.loading = t,
        bs.set({
            loading: t
        })
    },
    clearLoading() {
        nt.loadingNamespaceMap.clear(),
        nt.loading = !1
    },
    shake() {
        nt.shake || (nt.shake = !0,
        setTimeout( () => {
            nt.shake = !1
        }
        , 500))
    }
}
  , Fe = vt(du)
  , Qr = {
    id: "2b92315d-eab7-5bef-84fa-089a131333f5",
    name: "USD Coin",
    symbol: "USDC",
    networks: [{
        name: "ethereum-mainnet",
        display_name: "Ethereum",
        chain_id: "1",
        contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    }, {
        name: "polygon-mainnet",
        display_name: "Polygon",
        chain_id: "137",
        contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }]
}
  , qn = {
    id: "USD",
    payment_method_limits: [{
        id: "card",
        min: "10.00",
        max: "7500.00"
    }, {
        id: "ach_bank_account",
        min: "10.00",
        max: "25000.00"
    }]
}
  , uu = {
    providers: Bc,
    selectedProvider: null,
    error: null,
    purchaseCurrency: Qr,
    paymentCurrency: qn,
    purchaseCurrencies: [Qr],
    paymentCurrencies: [],
    quotesLoading: !1
}
  , ae = _e(uu)
  , hu = {
    state: ae,
    subscribe(t) {
        return Xe(ae, () => t(ae))
    },
    subscribeKey(t, e) {
        return Qe(ae, t, e)
    },
    setSelectedProvider(t) {
        if (t && t.name === "meld") {
            const e = h.state.activeChain === z.CHAIN.SOLANA ? "SOL" : "USDC"
              , s = W.state.address ?? ""
              , r = new URL(t.url);
            r.searchParams.append("publicKey", Ld),
            r.searchParams.append("destinationCurrencyCode", e),
            r.searchParams.append("walletAddress", s),
            r.searchParams.append("externalCustomerId", S.state.projectId),
            ae.selectedProvider = {
                ...t,
                url: r.toString()
            }
        } else
            ae.selectedProvider = t
    },
    setOnrampProviders(t) {
        if (Array.isArray(t) && t.every(e => typeof e == "string")) {
            const e = t
              , s = Bc.filter(r => e.includes(r.name));
            ae.providers = s
        } else
            ae.providers = []
    },
    setPurchaseCurrency(t) {
        ae.purchaseCurrency = t
    },
    setPaymentCurrency(t) {
        ae.paymentCurrency = t
    },
    setPurchaseAmount(t) {
        jn.state.purchaseAmount = t
    },
    setPaymentAmount(t) {
        jn.state.paymentAmount = t
    },
    async getAvailableCurrencies() {
        const t = await J.getOnrampOptions();
        ae.purchaseCurrencies = t.purchaseCurrencies,
        ae.paymentCurrencies = t.paymentCurrencies,
        ae.paymentCurrency = t.paymentCurrencies[0] || qn,
        ae.purchaseCurrency = t.purchaseCurrencies[0] || Qr,
        await V.fetchCurrencyImages(t.paymentCurrencies.map(e => e.id)),
        await V.fetchTokenImages(t.purchaseCurrencies.map(e => e.symbol))
    },
    async getQuote() {
        ae.quotesLoading = !0;
        try {
            const t = await J.getOnrampQuote({
                purchaseCurrency: ae.purchaseCurrency,
                paymentCurrency: ae.paymentCurrency,
                amount: ae.paymentAmount?.toString() || "0",
                network: ae.purchaseCurrency?.symbol
            });
            return ae.quotesLoading = !1,
            ae.purchaseAmount = Number(t?.purchaseAmount.amount),
            t
        } catch (t) {
            return ae.error = t.message,
            ae.quotesLoading = !1,
            null
        } finally {
            ae.quotesLoading = !1
        }
    },
    resetState() {
        ae.selectedProvider = null,
        ae.error = null,
        ae.purchaseCurrency = Qr,
        ae.paymentCurrency = qn,
        ae.purchaseCurrencies = [Qr],
        ae.paymentCurrencies = [],
        ae.paymentAmount = void 0,
        ae.purchaseAmount = void 0,
        ae.quotesLoading = !1
    }
}
  , jn = vt(hu)
  , Vo = 2147483648
  , pu = {
    convertEVMChainIdToCoinType(t) {
        if (t >= Vo)
            throw new Error("Invalid chainId");
        return (Vo | t) >>> 0
    }
}
  , Et = _e({
    suggestions: [],
    loading: !1
})
  , gu = {
    state: Et,
    subscribe(t) {
        return Xe(Et, () => t(Et))
    },
    subscribeKey(t, e) {
        return Qe(Et, t, e)
    },
    async resolveName(t) {
        try {
            return await J.lookupEnsName(t)
        } catch (e) {
            const s = e;
            throw new Error(s?.reasons?.[0]?.description || "Error resolving name")
        }
    },
    async isNameRegistered(t) {
        try {
            return await J.lookupEnsName(t),
            !0
        } catch {
            return !1
        }
    },
    async getSuggestions(t) {
        try {
            Et.loading = !0,
            Et.suggestions = [];
            const e = await J.getEnsNameSuggestions(t);
            return Et.suggestions = e.suggestions.map(s => ({
                ...s,
                name: s.name
            })) || [],
            Et.suggestions
        } catch (e) {
            const s = ei.parseEnsApiError(e, "Error fetching name suggestions");
            throw new Error(s)
        } finally {
            Et.loading = !1
        }
    },
    async getNamesForAddress(t) {
        try {
            if (!h.state.activeCaipNetwork)
                return [];
            const s = F.getEnsFromCacheForAddress(t);
            if (s)
                return s;
            const r = await J.reverseLookupEnsName({
                address: t
            });
            return F.updateEnsCache({
                address: t,
                ens: r,
                timestamp: Date.now()
            }),
            r
        } catch (e) {
            const s = ei.parseEnsApiError(e, "Error fetching names for address");
            throw new Error(s)
        }
    },
    async registerName(t) {
        const e = h.state.activeCaipNetwork;
        if (!e)
            throw new Error("Network not found");
        const s = W.state.address
          , r = q.getAuthConnector();
        if (!s || !r)
            throw new Error("Address or auth connector not found");
        Et.loading = !0;
        try {
            const i = JSON.stringify({
                name: t,
                attributes: {},
                timestamp: Math.floor(Date.now() / 1e3)
            });
            ie.pushTransactionStack({
                onCancel() {
                    ie.replace("RegisterAccountName")
                }
            });
            const n = await Y.signMessage(i);
            Et.loading = !1;
            const o = e.id;
            if (!o)
                throw new Error("Network not found");
            const a = pu.convertEVMChainIdToCoinType(Number(o));
            await J.registerEnsName({
                coinType: a,
                address: s,
                signature: n,
                message: i
            }),
            W.setProfileName(t, e.chainNamespace),
            ie.replace("RegisterAccountNameSuccess")
        } catch (i) {
            const n = ei.parseEnsApiError(i, `Error registering name ${t}`);
            throw ie.replace("RegisterAccountName"),
            new Error(n)
        } finally {
            Et.loading = !1
        }
    },
    validateName(t) {
        return /^[a-zA-Z0-9-]{4,}$/u.test(t)
    },
    parseEnsApiError(t, e) {
        return t?.reasons?.[0]?.description || e
    }
}
  , ei = vt(gu)
  , ti = {
    getSIWX() {
        return S.state.siwx
    },
    async initializeIfEnabled() {
        const t = S.state.siwx
          , e = h.getActiveCaipAddress();
        if (!(t && e))
            return;
        const [s,r,i] = e.split(":");
        if (h.checkIfSupportedNetwork(s))
            try {
                if ((await t.getSessions(`${s}:${r}`, i)).length)
                    return;
                await Fe.open({
                    view: "SIWXSignMessage"
                })
            } catch (n) {
                console.error("SIWXUtil:initializeIfEnabled", n),
                Pe.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: this.getSIWXEventProperties()
                }),
                await Y._getClient()?.disconnect().catch(console.error),
                ie.reset("Connect"),
                Ut.showError("A problem occurred while trying initialize authentication")
            }
    },
    async requestSignMessage() {
        const t = S.state.siwx
          , e = Z.getPlainAddress(h.getActiveCaipAddress())
          , s = h.getActiveCaipNetwork()
          , r = Y._getClient();
        if (!t)
            throw new Error("SIWX is not enabled");
        if (!e)
            throw new Error("No ActiveCaipAddress found");
        if (!s)
            throw new Error("No ActiveCaipNetwork or client found");
        if (!r)
            throw new Error("No ConnectionController client found");
        try {
            const i = await t.createMessage({
                chainId: s.caipNetworkId,
                accountAddress: e
            })
              , n = i.toString();
            q.getConnectorId(s.chainNamespace) === z.CONNECTOR_ID.AUTH && ie.pushTransactionStack({});
            const a = await r.signMessage(n);
            await t.addSession({
                data: i,
                message: n,
                signature: a
            }),
            Fe.close(),
            Pe.sendEvent({
                type: "track",
                event: "SIWX_AUTH_SUCCESS",
                properties: this.getSIWXEventProperties()
            })
        } catch (i) {
            const n = this.getSIWXEventProperties();
            (!Fe.state.open || ie.state.view === "ApproveTransaction") && await Fe.open({
                view: "SIWXSignMessage"
            }),
            n.isSmartAccount ? Ut.showError("This application might not support Smart Accounts") : Ut.showError("Signature declined"),
            Pe.sendEvent({
                type: "track",
                event: "SIWX_AUTH_ERROR",
                properties: n
            }),
            console.error("SWIXUtil:requestSignMessage", i)
        }
    },
    async cancelSignMessage() {
        try {
            this.getSIWX()?.getRequired?.() ? await Y.disconnect() : Fe.close(),
            ie.reset("Connect"),
            Pe.sendEvent({
                event: "CLICK_CANCEL_SIWX",
                type: "track",
                properties: this.getSIWXEventProperties()
            })
        } catch (t) {
            console.error("SIWXUtil:cancelSignMessage", t)
        }
    },
    async getSessions() {
        const t = S.state.siwx
          , e = Z.getPlainAddress(h.getActiveCaipAddress())
          , s = h.getActiveCaipNetwork();
        return t && e && s ? t.getSessions(s.caipNetworkId, e) : []
    },
    async isSIWXCloseDisabled() {
        const t = this.getSIWX();
        if (t) {
            const e = ie.state.view === "ApproveTransaction"
              , s = ie.state.view === "SIWXSignMessage";
            if (e || s)
                return t.getRequired?.() && (await this.getSessions()).length === 0
        }
        return !1
    },
    async universalProviderAuthenticate({universalProvider: t, chains: e, methods: s}) {
        const r = ti.getSIWX()
          , i = new Set(e.map(a => a.split(":")[0]));
        if (!r || i.size !== 1 || !i.has("eip155"))
            return !1;
        const n = await r.createMessage({
            chainId: h.getActiveCaipNetwork()?.caipNetworkId || "",
            accountAddress: ""
        })
          , o = await t.authenticate({
            nonce: n.nonce,
            domain: n.domain,
            uri: n.uri,
            exp: n.expirationTime,
            iat: n.issuedAt,
            nbf: n.notBefore,
            requestId: n.requestId,
            version: n.version,
            resources: n.resources,
            statement: n.statement,
            chainId: n.chainId,
            methods: s,
            chains: [n.chainId, ...e.filter(a => a !== n.chainId)]
        });
        if (Ut.showLoading("Authenticating...", {
            autoClose: !1
        }),
        W.setConnectedWalletInfo({
            ...o.session.peer.metadata,
            name: o.session.peer.metadata.name,
            icon: o.session.peer.metadata.icons?.[0],
            type: "WALLET_CONNECT"
        }, Array.from(i)[0]),
        o?.auths?.length) {
            const a = o.auths.map(c => {
                const l = t.client.formatAuthMessage({
                    request: c.p,
                    iss: c.p.iss
                });
                return {
                    data: {
                        ...c.p,
                        accountAddress: c.p.iss.split(":").slice(-1).join(""),
                        chainId: c.p.iss.split(":").slice(2, 4).join(":"),
                        uri: c.p.aud,
                        version: c.p.version || n.version,
                        expirationTime: c.p.exp,
                        issuedAt: c.p.iat,
                        notBefore: c.p.nbf
                    },
                    message: l,
                    signature: c.s.s,
                    cacao: c
                }
            }
            );
            try {
                await r.setSessions(a),
                Pe.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_SUCCESS",
                    properties: ti.getSIWXEventProperties()
                })
            } catch (c) {
                throw console.error("SIWX:universalProviderAuth - failed to set sessions", c),
                Pe.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: ti.getSIWXEventProperties()
                }),
                await t.disconnect().catch(console.error),
                c
            } finally {
                Ut.hide()
            }
        }
        return !0
    },
    getSIWXEventProperties() {
        const t = h.state.activeChain;
        return {
            network: h.state.activeCaipNetwork?.caipNetworkId || "",
            isSmartAccount: W.state.preferredAccountTypes?.[t] === Xr.ACCOUNT_TYPES.SMART_ACCOUNT
        }
    },
    async clearSessions() {
        const t = this.getSIWX();
        t && await t.setSessions([])
    }
};
var fu = Object.defineProperty
  , mu = (t, e, s) => e in t ? fu(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Ko = (t, e, s) => mu(t, typeof e != "symbol" ? e + "" : e, s);
let wu = class extends kr {
    constructor(e) {
        super(),
        this.opts = e,
        Ko(this, "protocol", "wc"),
        Ko(this, "version", 2)
    }
}
;
var yu = Object.defineProperty
  , bu = (t, e, s) => e in t ? yu(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , vu = (t, e, s) => bu(t, e + "", s);
let Cu = class extends kr {
    constructor(e, s) {
        super(),
        this.core = e,
        this.logger = s,
        vu(this, "records", new Map)
    }
}
  , Eu = class {
    constructor(e, s) {
        this.logger = e,
        this.core = s
    }
}
;
class Iu extends kr {
    constructor(e, s) {
        super(),
        this.relayer = e,
        this.logger = s
    }
}
let Nu = class extends kr {
    constructor(e) {
        super()
    }
}
  , Au = class {
    constructor(e, s, r, i) {
        this.core = e,
        this.logger = s,
        this.name = r
    }
}
  , _u = class extends kr {
    constructor(e, s) {
        super(),
        this.relayer = e,
        this.logger = s
    }
}
  , Su = class extends kr {
    constructor(e, s) {
        super(),
        this.core = e,
        this.logger = s
    }
}
  , Pu = class {
    constructor(e, s, r) {
        this.core = e,
        this.logger = s,
        this.store = r
    }
}
  , ku = class {
    constructor(e, s) {
        this.projectId = e,
        this.logger = s
    }
}
  , Tu = class {
    constructor(e, s, r) {
        this.core = e,
        this.logger = s,
        this.telemetryEnabled = r
    }
}
;
var Ou = Object.defineProperty
  , xu = (t, e, s) => e in t ? Ou(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Go = (t, e, s) => xu(t, typeof e != "symbol" ? e + "" : e, s);
let Ru = class {
    constructor(e) {
        this.opts = e,
        Go(this, "protocol", "wc"),
        Go(this, "version", 2)
    }
}
  , $u = class {
    constructor(e) {
        this.client = e
    }
}
;
function ai(t, {strict: e=!0}={}) {
    return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x")
}
function Jo(t) {
    return ai(t, {
        strict: !1
    }) ? Math.ceil((t.length - 2) / 2) : t.length
}
const Wc = "2.23.2";
let un = {
    getDocsUrl: ({docsBaseUrl: t, docsPath: e="", docsSlug: s}) => e ? `${t ?? "https://viem.sh"}${e}${s ? `#${s}` : ""}` : void 0,
    version: `viem@${Wc}`
};
class qs extends Error {
    constructor(e, s={}) {
        const r = s.cause instanceof qs ? s.cause.details : s.cause?.message ? s.cause.message : s.details
          , i = s.cause instanceof qs && s.cause.docsPath || s.docsPath
          , n = un.getDocsUrl?.({
            ...s,
            docsPath: i
        })
          , o = [e || "An error occurred.", "", ...s.metaMessages ? [...s.metaMessages, ""] : [], ...n ? [`Docs: ${n}`] : [], ...r ? [`Details: ${r}`] : [], ...un.version ? [`Version: ${un.version}`] : []].join(`
`);
        super(o, s.cause ? {
            cause: s.cause
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
        this.details = r,
        this.docsPath = i,
        this.metaMessages = s.metaMessages,
        this.name = s.name ?? this.name,
        this.shortMessage = e,
        this.version = Wc
    }
    walk(e) {
        return zc(this, e)
    }
}
function zc(t, e) {
    return e?.(t) ? t : t && typeof t == "object" && "cause"in t && t.cause !== void 0 ? zc(t.cause, e) : e ? null : t
}
class Hc extends qs {
    constructor({size: e, targetSize: s, type: r}) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${s}).`, {
            name: "SizeExceedsPaddingSizeError"
        })
    }
}
function Or(t, {dir: e, size: s=32}={}) {
    return typeof t == "string" ? Uu(t, {
        dir: e,
        size: s
    }) : Du(t, {
        dir: e,
        size: s
    })
}
function Uu(t, {dir: e, size: s=32}={}) {
    if (s === null)
        return t;
    const r = t.replace("0x", "");
    if (r.length > s * 2)
        throw new Hc({
            size: Math.ceil(r.length / 2),
            targetSize: s,
            type: "hex"
        });
    return `0x${r[e === "right" ? "padEnd" : "padStart"](s * 2, "0")}`
}
function Du(t, {dir: e, size: s=32}={}) {
    if (s === null)
        return t;
    if (t.length > s)
        throw new Hc({
            size: t.length,
            targetSize: s,
            type: "bytes"
        });
    const r = new Uint8Array(s);
    for (let i = 0; i < s; i++) {
        const n = e === "right";
        r[n ? i : s - i - 1] = t[n ? i : t.length - i - 1]
    }
    return r
}
class Lu extends qs {
    constructor({max: e, min: s, signed: r, size: i, value: n}) {
        super(`Number "${n}" is not in safe ${i ? `${i * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${s} to ${e})` : `(above ${s})`}`, {
            name: "IntegerOutOfRangeError"
        })
    }
}
class Mu extends qs {
    constructor({givenSize: e, maxSize: s}) {
        super(`Size cannot exceed ${s} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError"
        })
    }
}
function xr(t, {size: e}) {
    if (Jo(t) > e)
        throw new Mu({
            givenSize: Jo(t),
            maxSize: e
        })
}
function Fn(t, e={}) {
    const {signed: s} = e;
    e.size && xr(t, {
        size: e.size
    });
    const r = BigInt(t);
    if (!s)
        return r;
    const i = (t.length - 2) / 2
      , n = (1n << BigInt(i) * 8n - 1n) - 1n;
    return r <= n ? r : r - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n
}
function Bu(t, e={}) {
    return Number(Fn(t, e))
}
const qu = Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function Wn(t, e={}) {
    return typeof t == "number" || typeof t == "bigint" ? Kc(t, e) : typeof t == "string" ? Wu(t, e) : typeof t == "boolean" ? ju(t, e) : Vc(t, e)
}
function ju(t, e={}) {
    const s = `0x${Number(t)}`;
    return typeof e.size == "number" ? (xr(s, {
        size: e.size
    }),
    Or(s, {
        size: e.size
    })) : s
}
function Vc(t, e={}) {
    let s = "";
    for (let i = 0; i < t.length; i++)
        s += qu[t[i]];
    const r = `0x${s}`;
    return typeof e.size == "number" ? (xr(r, {
        size: e.size
    }),
    Or(r, {
        dir: "right",
        size: e.size
    })) : r
}
function Kc(t, e={}) {
    const {signed: s, size: r} = e
      , i = BigInt(t);
    let n;
    r ? s ? n = (1n << BigInt(r) * 8n - 1n) - 1n : n = 2n ** (BigInt(r) * 8n) - 1n : typeof t == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof n == "bigint" && s ? -n - 1n : 0;
    if (n && i > n || i < o) {
        const c = typeof t == "bigint" ? "n" : "";
        throw new Lu({
            max: n ? `${n}${c}` : void 0,
            min: `${o}${c}`,
            signed: s,
            size: r,
            value: `${t}${c}`
        })
    }
    const a = `0x${(s && i < 0 ? (1n << BigInt(r * 8)) + BigInt(i) : i).toString(16)}`;
    return r ? Or(a, {
        size: r
    }) : a
}
const Fu = new TextEncoder;
function Wu(t, e={}) {
    const s = Fu.encode(t);
    return Vc(s, e)
}
const zu = new TextEncoder;
function Hu(t, e={}) {
    return typeof t == "number" || typeof t == "bigint" ? Ku(t, e) : typeof t == "boolean" ? Vu(t, e) : ai(t) ? Gc(t, e) : Jc(t, e)
}
function Vu(t, e={}) {
    const s = new Uint8Array(1);
    return s[0] = Number(t),
    typeof e.size == "number" ? (xr(s, {
        size: e.size
    }),
    Or(s, {
        size: e.size
    })) : s
}
const Xt = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Yo(t) {
    if (t >= Xt.zero && t <= Xt.nine)
        return t - Xt.zero;
    if (t >= Xt.A && t <= Xt.F)
        return t - (Xt.A - 10);
    if (t >= Xt.a && t <= Xt.f)
        return t - (Xt.a - 10)
}
function Gc(t, e={}) {
    let s = t;
    e.size && (xr(s, {
        size: e.size
    }),
    s = Or(s, {
        dir: "right",
        size: e.size
    }));
    let r = s.slice(2);
    r.length % 2 && (r = `0${r}`);
    const i = r.length / 2
      , n = new Uint8Array(i);
    for (let o = 0, a = 0; o < i; o++) {
        const c = Yo(r.charCodeAt(a++))
          , l = Yo(r.charCodeAt(a++));
        if (c === void 0 || l === void 0)
            throw new qs(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
        n[o] = c * 16 + l
    }
    return n
}
function Ku(t, e) {
    const s = Kc(t, e);
    return Gc(s)
}
function Jc(t, e={}) {
    const s = zu.encode(t);
    return typeof e.size == "number" ? (xr(s, {
        size: e.size
    }),
    Or(s, {
        dir: "right",
        size: e.size
    })) : s
}
function Yc(t, e) {
    const s = e || "hex"
      , r = Nd(ai(t, {
        strict: !1
    }) ? Hu(t) : t);
    return s === "bytes" ? r : Wn(r)
}
class Gu extends Map {
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
        const s = super.get(e);
        return super.has(e) && s !== void 0 && (this.delete(e),
        super.set(e, s)),
        s
    }
    set(e, s) {
        if (super.set(e, s),
        this.maxSize && this.size > this.maxSize) {
            const r = this.keys().next().value;
            r && this.delete(r)
        }
        return this
    }
}
const hn = new Gu(8192);
function Ju(t, e) {
    if (hn.has(`${t}.${e}`))
        return hn.get(`${t}.${e}`);
    const s = t.substring(2).toLowerCase()
      , r = Yc(Jc(s), "bytes")
      , i = s.split("");
    for (let o = 0; o < 40; o += 2)
        r[o >> 1] >> 4 >= 8 && i[o] && (i[o] = i[o].toUpperCase()),
        (r[o >> 1] & 15) >= 8 && i[o + 1] && (i[o + 1] = i[o + 1].toUpperCase());
    const n = `0x${i.join("")}`;
    return hn.set(`${t}.${e}`, n),
    n
}
function Yu(t) {
    const e = Yc(`0x${t.substring(4)}`).substring(26);
    return Ju(`0x${e}`)
}
async function Zu({hash: t, signature: e}) {
    const s = ai(t) ? t : Wn(t)
      , {secp256k1: r} = await Dn(async () => {
        const {secp256k1: o} = await import("./secp256k1-DnIu5m5w.js");
        return {
            secp256k1: o
        }
    }
    , __vite__mapDeps([0, 1, 2, 3, 4, 5]));
    return `0x${( () => {
        if (typeof e == "object" && "r"in e && "s"in e) {
            const {r: l, s: d, v: u, yParity: p} = e
              , f = Number(p ?? u)
              , m = Zo(f);
            return new r.Signature(Fn(l),Fn(d)).addRecoveryBit(m)
        }
        const o = ai(e) ? e : Wn(e)
          , a = Bu(`0x${o.slice(130)}`)
          , c = Zo(a);
        return r.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(c)
    }
    )().recoverPublicKey(s.substring(2)).toHex(!1)}`
}
function Zo(t) {
    if (t === 0 || t === 1)
        return t;
    if (t === 27)
        return 0;
    if (t === 28)
        return 1;
    throw new Error("Invalid yParityOrV value")
}
async function Xu({hash: t, signature: e}) {
    return Yu(await Zu({
        hash: t,
        signature: e
    }))
}
var Qu = {};
const eh = ":";
function br(t) {
    const [e,s] = t.split(eh);
    return {
        namespace: e,
        reference: s
    }
}
function Zc(t, e) {
    return t.includes(":") ? [t] : e.chains || []
}
var th = Object.defineProperty
  , sh = Object.defineProperties
  , rh = Object.getOwnPropertyDescriptors
  , Xo = Object.getOwnPropertySymbols
  , ih = Object.prototype.hasOwnProperty
  , nh = Object.prototype.propertyIsEnumerable
  , Qo = (t, e, s) => e in t ? th(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , ea = (t, e) => {
    for (var s in e || (e = {}))
        ih.call(e, s) && Qo(t, s, e[s]);
    if (Xo)
        for (var s of Xo(e))
            nh.call(e, s) && Qo(t, s, e[s]);
    return t
}
  , oh = (t, e) => sh(t, rh(e));
const ah = "ReactNative"
  , wt = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}
  , ch = "js";
function zi() {
    return typeof wr < "u" && typeof wr.versions < "u" && typeof wr.versions.node < "u"
}
function As() {
    return !os.getDocument() && !!os.getNavigator() && navigator.product === ah
}
function lh() {
    return As() && typeof re < "u" && typeof (re == null ? void 0 : re.Platform) < "u" && (re == null ? void 0 : re.Platform.OS) === "android"
}
function dh() {
    return As() && typeof re < "u" && typeof (re == null ? void 0 : re.Platform) < "u" && (re == null ? void 0 : re.Platform.OS) === "ios"
}
function Rr() {
    return !zi() && !!os.getNavigator() && !!os.getDocument()
}
function fi() {
    return As() ? wt.reactNative : zi() ? wt.node : Rr() ? wt.browser : wt.unknown
}
function ta() {
    var t;
    try {
        return As() && typeof re < "u" && typeof (re == null ? void 0 : re.Application) < "u" ? (t = re.Application) == null ? void 0 : t.applicationId : void 0
    } catch {
        return
    }
}
function uh(t, e) {
    const s = new URLSearchParams(t);
    for (const r of Object.keys(e).sort())
        if (e.hasOwnProperty(r)) {
            const i = e[r];
            i !== void 0 && s.set(r, i)
        }
    return s.toString()
}
function hh(t) {
    var e, s;
    const r = Xc();
    try {
        return t != null && t.url && r.url && new URL(t.url).host !== new URL(r.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`),
        t.url = r.url),
        (e = t?.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter(i => i !== "")),
        oh(ea(ea({}, r), t), {
            url: t?.url || r.url,
            name: t?.name || r.name,
            description: t?.description || r.description,
            icons: (s = t?.icons) != null && s.length && t.icons.length > 0 ? t.icons : r.icons
        })
    } catch (i) {
        return console.warn("Error populating app metadata", i),
        t || r
    }
}
function Xc() {
    return md.getWindowMetadata() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function ph() {
    if (fi() === wt.reactNative && typeof re < "u" && typeof (re == null ? void 0 : re.Platform) < "u") {
        const {OS: s, Version: r} = re.Platform;
        return [s, r].join("-")
    }
    const t = yd();
    if (t === null)
        return "unknown";
    const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
    return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-")
}
function gh() {
    var t;
    const e = fi();
    return e === wt.browser ? [e, ((t = os.getLocation()) == null ? void 0 : t.host) || "unknown"].join(":") : e
}
function Qc(t, e, s) {
    const r = ph()
      , i = gh();
    return [[t, e].join("-"), [ch, s].join("-"), r, i].join("/")
}
function fh({protocol: t, version: e, relayUrl: s, sdkVersion: r, auth: i, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c}) {
    const l = s.split("?")
      , d = Qc(t, e, r)
      , u = {
        auth: i,
        ua: d,
        projectId: n,
        useOnCloseEvent: o,
        packageName: c || void 0,
        bundleId: a || void 0
    }
      , p = uh(l[1] || "", u);
    return l[0] + "?" + p
}
function Ls(t, e) {
    return t.filter(s => e.includes(s)).length === t.length
}
function zn(t) {
    return Object.fromEntries(t.entries())
}
function Hn(t) {
    return new Map(Object.entries(t))
}
function Os(t=U.FIVE_MINUTES, e) {
    const s = U.toMiliseconds(t || U.FIVE_MINUTES);
    let r, i, n, o;
    return {
        resolve: a => {
            n && r && (clearTimeout(n),
            r(a),
            o = Promise.resolve(a))
        }
        ,
        reject: a => {
            n && i && (clearTimeout(n),
            i(a))
        }
        ,
        done: () => new Promise( (a, c) => {
            if (o)
                return a(o);
            n = setTimeout( () => {
                const l = new Error(e);
                o = Promise.reject(l),
                c(l)
            }
            , s),
            r = a,
            i = c
        }
        )
    }
}
function ys(t, e, s) {
    return new Promise(async (r, i) => {
        const n = setTimeout( () => i(new Error(s)), e);
        try {
            const o = await t;
            r(o)
        } catch (o) {
            i(o)
        }
        clearTimeout(n)
    }
    )
}
function el(t, e) {
    if (typeof e == "string" && e.startsWith(`${t}:`))
        return e;
    if (t.toLowerCase() === "topic") {
        if (typeof e != "string")
            throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (t.toLowerCase() === "id") {
        if (typeof e != "number")
            throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${t}`)
}
function mh(t) {
    return el("topic", t)
}
function wh(t) {
    return el("id", t)
}
function tl(t) {
    const [e,s] = t.split(":")
      , r = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof s == "string")
        r.topic = s;
    else if (e === "id" && Number.isInteger(Number(s)))
        r.id = Number(s);
    else
        throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return r
}
function De(t, e) {
    return U.fromMiliseconds(Date.now() + U.toMiliseconds(t))
}
function fs(t) {
    return Date.now() >= U.toMiliseconds(t)
}
function ge(t, e) {
    return `${t}${e ? `:${e}` : ""}`
}
function Vt(t=[], e=[]) {
    return [...new Set([...t, ...e])]
}
async function yh({id: t, topic: e, wcDeepLink: s}) {
    var r;
    try {
        if (!s)
            return;
        const i = typeof s == "string" ? JSON.parse(s) : s
          , n = i?.href;
        if (typeof n != "string")
            return;
        const o = bh(n, t, e)
          , a = fi();
        if (a === wt.browser) {
            if (!((r = os.getDocument()) != null && r.hasFocus())) {
                console.warn("Document does not have focus, skipping deeplink.");
                return
            }
            vh(o)
        } else
            a === wt.reactNative && typeof (re == null ? void 0 : re.Linking) < "u" && await re.Linking.openURL(o)
    } catch (i) {
        console.error(i)
    }
}
function bh(t, e, s) {
    const r = `requestId=${e}&sessionTopic=${s}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let i = `${t}`;
    if (t.startsWith("https://t.me")) {
        const n = t.includes("?") ? "&startapp=" : "?startapp=";
        i = `${i}${n}${Nh(r, !0)}`
    } else
        i = `${i}/wc?${r}`;
    return i
}
function vh(t) {
    let e = "_self";
    Ih() ? e = "_top" : (Eh() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"),
    window.open(t, e, "noreferrer noopener")
}
async function Ch(t, e) {
    let s = "";
    try {
        if (Rr() && (s = localStorage.getItem(e),
        s))
            return s;
        s = await t.getItem(e)
    } catch (r) {
        console.error(r)
    }
    return s
}
function sa(t, e) {
    if (!t.includes(e))
        return null;
    const s = t.split(/([&,?,=])/)
      , r = s.indexOf(e);
    return s[r + 2]
}
function ra() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, t => {
        const e = Math.random() * 16 | 0;
        return (t === "x" ? e : e & 3 | 8).toString(16)
    }
    )
}
function Io() {
    return typeof wr < "u" && Qu.IS_VITEST === "true"
}
function Eh() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto)
}
function Ih() {
    try {
        return window.self !== window.top
    } catch {
        return !1
    }
}
function Nh(t, e=!1) {
    const s = Ze.from(t).toString("base64");
    return e ? s.replace(/[=]/g, "") : s
}
function sl(t) {
    return Ze.from(t, "base64").toString("utf-8")
}
function Ah(t) {
    return new Promise(e => setTimeout(e, t))
}
function ci(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error("positive integer expected, got " + t)
}
function _h(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array"
}
function mi(t, ...e) {
    if (!_h(t))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length)
}
function No(t) {
    if (typeof t != "function" || typeof t.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    ci(t.outputLen),
    ci(t.blockLen)
}
function Er(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function rl(t, e) {
    mi(t);
    const s = e.outputLen;
    if (t.length < s)
        throw new Error("digestInto() expects output buffer of length at least " + s)
}
const _i = BigInt(2 ** 32 - 1)
  , ia = BigInt(32);
function Sh(t, e=!1) {
    return e ? {
        h: Number(t & _i),
        l: Number(t >> ia & _i)
    } : {
        h: Number(t >> ia & _i) | 0,
        l: Number(t & _i) | 0
    }
}
function Ph(t, e=!1) {
    let s = new Uint32Array(t.length)
      , r = new Uint32Array(t.length);
    for (let i = 0; i < t.length; i++) {
        const {h: n, l: o} = Sh(t[i], e);
        [s[i],r[i]] = [n, o]
    }
    return [s, r]
}
const kh = (t, e, s) => t << s | e >>> 32 - s
  , Th = (t, e, s) => e << s | t >>> 32 - s
  , Oh = (t, e, s) => e << s - 32 | t >>> 64 - s
  , xh = (t, e, s) => t << s - 32 | e >>> 64 - s
  , Js = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
function Rh(t) {
    return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
}
function pn(t) {
    return new DataView(t.buffer,t.byteOffset,t.byteLength)
}
function Bt(t, e) {
    return t << 32 - e | t >>> e
}
const na = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function $h(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255
}
function oa(t) {
    for (let e = 0; e < t.length; e++)
        t[e] = $h(t[e])
}
function Uh(t) {
    if (typeof t != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof t);
    return new Uint8Array(new TextEncoder().encode(t))
}
function Ir(t) {
    return typeof t == "string" && (t = Uh(t)),
    mi(t),
    t
}
function Dh(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        mi(i),
        e += i.length
    }
    const s = new Uint8Array(e);
    for (let r = 0, i = 0; r < t.length; r++) {
        const n = t[r];
        s.set(n, i),
        i += n.length
    }
    return s
}
let Ao = class {
    clone() {
        return this._cloneInto()
    }
}
;
function il(t) {
    const e = r => t().update(Ir(r)).digest()
      , s = t();
    return e.outputLen = s.outputLen,
    e.blockLen = s.blockLen,
    e.create = () => t(),
    e
}
function $r(t=32) {
    if (Js && typeof Js.getRandomValues == "function")
        return Js.getRandomValues(new Uint8Array(t));
    if (Js && typeof Js.randomBytes == "function")
        return Js.randomBytes(t);
    throw new Error("crypto.getRandomValues must be defined")
}
const nl = []
  , ol = []
  , al = []
  , Lh = BigInt(0)
  , Br = BigInt(1)
  , Mh = BigInt(2)
  , Bh = BigInt(7)
  , qh = BigInt(256)
  , jh = BigInt(113);
for (let t = 0, e = Br, s = 1, r = 0; t < 24; t++) {
    [s,r] = [r, (2 * s + 3 * r) % 5],
    nl.push(2 * (5 * r + s)),
    ol.push((t + 1) * (t + 2) / 2 % 64);
    let i = Lh;
    for (let n = 0; n < 7; n++)
        e = (e << Br ^ (e >> Bh) * jh) % qh,
        e & Mh && (i ^= Br << (Br << BigInt(n)) - Br);
    al.push(i)
}
const [Fh,Wh] = Ph(al, !0)
  , aa = (t, e, s) => s > 32 ? Oh(t, e, s) : kh(t, e, s)
  , ca = (t, e, s) => s > 32 ? xh(t, e, s) : Th(t, e, s);
function zh(t, e=24) {
    const s = new Uint32Array(10);
    for (let r = 24 - e; r < 24; r++) {
        for (let o = 0; o < 10; o++)
            s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10
              , c = (o + 2) % 10
              , l = s[c]
              , d = s[c + 1]
              , u = aa(l, d, 1) ^ s[a]
              , p = ca(l, d, 1) ^ s[a + 1];
            for (let f = 0; f < 50; f += 10)
                t[o + f] ^= u,
                t[o + f + 1] ^= p
        }
        let i = t[2]
          , n = t[3];
        for (let o = 0; o < 24; o++) {
            const a = ol[o]
              , c = aa(i, n, a)
              , l = ca(i, n, a)
              , d = nl[o];
            i = t[d],
            n = t[d + 1],
            t[d] = c,
            t[d + 1] = l
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                s[a] = t[o + a];
            for (let a = 0; a < 10; a++)
                t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10]
        }
        t[0] ^= Fh[r],
        t[1] ^= Wh[r]
    }
    s.fill(0)
}
let Hh = class cl extends Ao {
    constructor(e, s, r, i=!1, n=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = s,
        this.outputLen = r,
        this.enableXOF = i,
        this.rounds = n,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        ci(r),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Rh(this.state)
    }
    keccak() {
        na || oa(this.state32),
        zh(this.state32, this.rounds),
        na || oa(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        Er(this);
        const {blockLen: s, state: r} = this;
        e = Ir(e);
        const i = e.length;
        for (let n = 0; n < i; ) {
            const o = Math.min(s - this.pos, i - n);
            for (let a = 0; a < o; a++)
                r[this.pos++] ^= e[n++];
            this.pos === s && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: s, pos: r, blockLen: i} = this;
        e[r] ^= s,
        (s & 128) !== 0 && r === i - 1 && this.keccak(),
        e[i - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        Er(this, !1),
        mi(e),
        this.finish();
        const s = this.state
          , {blockLen: r} = this;
        for (let i = 0, n = e.length; i < n; ) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, n - i);
            e.set(s.subarray(this.posOut, this.posOut + o), i),
            this.posOut += o,
            i += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return ci(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (rl(e, this),
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
        const {blockLen: s, suffix: r, outputLen: i, rounds: n, enableXOF: o} = this;
        return e || (e = new cl(s,r,i,o,n)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = n,
        e.suffix = r,
        e.outputLen = i,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
;
const Vh = (t, e, s) => il( () => new Hh(e,t,s))
  , Kh = Vh(1, 136, 256 / 8)
  , Gh = "https://rpc.walletconnect.org/v1";
function ll(t) {
    const e = `Ethereum Signed Message:
${t.length}`
      , s = new TextEncoder().encode(e + t);
    return "0x" + Ze.from(Kh(s)).toString("hex")
}
async function Jh(t, e, s, r, i, n) {
    switch (s.t) {
    case "eip191":
        return await Yh(t, e, s.s);
    case "eip1271":
        return await Zh(t, e, s.s, r, i, n);
    default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`)
    }
}
async function Yh(t, e, s) {
    return (await Xu({
        hash: ll(e),
        signature: s
    })).toLowerCase() === t.toLowerCase()
}
async function Zh(t, e, s, r, i, n) {
    const o = br(r);
    if (!o.namespace || !o.reference)
        throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);
    try {
        const a = "0x1626ba7e"
          , c = "0000000000000000000000000000000000000000000000000000000000000040"
          , l = "0000000000000000000000000000000000000000000000000000000000000041"
          , d = s.substring(2)
          , u = ll(e).substring(2)
          , p = a + u + c + l + d
          , f = await fetch(`${n || Gh}/?chainId=${r}&projectId=${i}`, {
            method: "POST",
            body: JSON.stringify({
                id: Xh(),
                jsonrpc: "2.0",
                method: "eth_call",
                params: [{
                    to: t,
                    data: p
                }, "latest"]
            })
        })
          , {result: m} = await f.json();
        return m ? m.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1
    } catch (a) {
        return console.error("isValidEip1271Signature: ", a),
        !1
    }
}
function Xh() {
    return Date.now() + Math.floor(Math.random() * 1e3)
}
function Qh(t) {
    const e = atob(t)
      , s = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++)
        s[o] = e.charCodeAt(o);
    const r = s[0];
    if (r === 0)
        throw new Error("No signatures found");
    const i = 1 + r * 64;
    if (s.length < i)
        throw new Error("Transaction data too short for claimed signature count");
    if (s.length < 100)
        throw new Error("Transaction too short");
    const n = Ze.from(t, "base64").slice(1, 65);
    return Uc.encode(n)
}
var ep = Object.defineProperty
  , tp = Object.defineProperties
  , sp = Object.getOwnPropertyDescriptors
  , la = Object.getOwnPropertySymbols
  , rp = Object.prototype.hasOwnProperty
  , ip = Object.prototype.propertyIsEnumerable
  , da = (t, e, s) => e in t ? ep(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , np = (t, e) => {
    for (var s in e || (e = {}))
        rp.call(e, s) && da(t, s, e[s]);
    if (la)
        for (var s of la(e))
            ip.call(e, s) && da(t, s, e[s]);
    return t
}
  , op = (t, e) => tp(t, sp(e));
const ap = "did:pkh:"
  , _o = t => t?.split(":")
  , cp = t => {
    const e = t && _o(t);
    if (e)
        return t.includes(ap) ? e[3] : e[1]
}
  , Vn = t => {
    const e = t && _o(t);
    if (e)
        return e[2] + ":" + e[3]
}
  , Hi = t => {
    const e = t && _o(t);
    if (e)
        return e.pop()
}
;
async function ua(t) {
    const {cacao: e, projectId: s} = t
      , {s: r, p: i} = e
      , n = dl(i, i.iss)
      , o = Hi(i.iss);
    return await Jh(o, n, r, Vn(i.iss), s)
}
const dl = (t, e) => {
    const s = `${t.domain} wants you to sign in with your Ethereum account:`
      , r = Hi(e);
    if (!t.aud && !t.uri)
        throw new Error("Either `aud` or `uri` is required to construct the message");
    let i = t.statement || void 0;
    const n = `URI: ${t.aud || t.uri}`
      , o = `Version: ${t.version}`
      , a = `Chain ID: ${cp(e)}`
      , c = `Nonce: ${t.nonce}`
      , l = `Issued At: ${t.iat}`
      , d = t.exp ? `Expiration Time: ${t.exp}` : void 0
      , u = t.nbf ? `Not Before: ${t.nbf}` : void 0
      , p = t.requestId ? `Request ID: ${t.requestId}` : void 0
      , f = t.resources ? `Resources:${t.resources.map(w => `
- ${w}`).join("")}` : void 0
      , m = Li(t.resources);
    if (m) {
        const w = li(m);
        i = wp(i, w)
    }
    return [s, r, "", i, "", n, o, a, c, l, d, u, p, f].filter(w => w != null).join(`
`)
}
;
function lp(t) {
    return Ze.from(JSON.stringify(t)).toString("base64")
}
function dp(t) {
    return JSON.parse(Ze.from(t, "base64").toString("utf-8"))
}
function js(t) {
    if (!t)
        throw new Error("No recap provided, value is undefined");
    if (!t.att)
        throw new Error("No `att` property found");
    const e = Object.keys(t.att);
    if (!(e != null && e.length))
        throw new Error("No resources found in `att` property");
    e.forEach(s => {
        const r = t.att[s];
        if (Array.isArray(r))
            throw new Error(`Resource must be an object: ${s}`);
        if (typeof r != "object")
            throw new Error(`Resource must be an object: ${s}`);
        if (!Object.keys(r).length)
            throw new Error(`Resource object is empty: ${s}`);
        Object.keys(r).forEach(i => {
            const n = r[i];
            if (!Array.isArray(n))
                throw new Error(`Ability limits ${i} must be an array of objects, found: ${n}`);
            if (!n.length)
                throw new Error(`Value of ${i} is empty array, must be an array with objects`);
            n.forEach(o => {
                if (typeof o != "object")
                    throw new Error(`Ability limits (${i}) must be an array of objects, found: ${o}`)
            }
            )
        }
        )
    }
    )
}
function up(t, e, s, r={}) {
    return s?.sort( (i, n) => i.localeCompare(n)),
    {
        att: {
            [t]: hp(e, s, r)
        }
    }
}
function hp(t, e, s={}) {
    e = e?.sort( (i, n) => i.localeCompare(n));
    const r = e.map(i => ({
        [`${t}/${i}`]: [s]
    }));
    return Object.assign({}, ...r)
}
function ul(t) {
    return js(t),
    `urn:recap:${lp(t).replace(/=/g, "")}`
}
function li(t) {
    const e = dp(t.replace("urn:recap:", ""));
    return js(e),
    e
}
function pp(t, e, s) {
    const r = up(t, e, s);
    return ul(r)
}
function gp(t) {
    return t && t.includes("urn:recap:")
}
function fp(t, e) {
    const s = li(t)
      , r = li(e)
      , i = mp(s, r);
    return ul(i)
}
function mp(t, e) {
    js(t),
    js(e);
    const s = Object.keys(t.att).concat(Object.keys(e.att)).sort( (i, n) => i.localeCompare(n))
      , r = {
        att: {}
    };
    return s.forEach(i => {
        var n, o;
        Object.keys(((n = t.att) == null ? void 0 : n[i]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[i]) || {})).sort( (a, c) => a.localeCompare(c)).forEach(a => {
            var c, l;
            r.att[i] = op(np({}, r.att[i]), {
                [a]: ((c = t.att[i]) == null ? void 0 : c[a]) || ((l = e.att[i]) == null ? void 0 : l[a])
            })
        }
        )
    }
    ),
    r
}
function wp(t="", e) {
    js(e);
    const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (t.includes(s))
        return t;
    const r = [];
    let i = 0;
    Object.keys(e.att).forEach(a => {
        const c = Object.keys(e.att[a]).map(u => ({
            ability: u.split("/")[0],
            action: u.split("/")[1]
        }));
        c.sort( (u, p) => u.action.localeCompare(p.action));
        const l = {};
        c.forEach(u => {
            l[u.ability] || (l[u.ability] = []),
            l[u.ability].push(u.action)
        }
        );
        const d = Object.keys(l).map(u => (i++,
        `(${i}) '${u}': '${l[u].join("', '")}' for '${a}'.`));
        r.push(d.join(", ").replace(".,", "."))
    }
    );
    const n = r.join(" ")
      , o = `${s}${n}`;
    return `${t ? t + " " : ""}${o}`
}
function ha(t) {
    var e;
    const s = li(t);
    js(s);
    const r = (e = s.att) == null ? void 0 : e.eip155;
    return r ? Object.keys(r).map(i => i.split("/")[1]) : []
}
function pa(t) {
    const e = li(t);
    js(e);
    const s = [];
    return Object.values(e.att).forEach(r => {
        Object.values(r).forEach(i => {
            var n;
            (n = i?.[0]) != null && n.chains && s.push(i[0].chains)
        }
        )
    }
    ),
    [...new Set(s.flat())]
}
function Li(t) {
    if (!t)
        return;
    const e = t?.[t.length - 1];
    return gp(e) ? e : void 0
}
function gn(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error("positive integer expected, got " + t)
}
function hl(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array"
}
function mt(t, ...e) {
    if (!hl(t))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length)
}
function ga(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function yp(t, e) {
    mt(t);
    const s = e.outputLen;
    if (t.length < s)
        throw new Error("digestInto() expects output buffer of length at least " + s)
}
function fa(t) {
    if (typeof t != "boolean")
        throw new Error(`boolean expected, not ${t}`)
}
const vs = t => new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
  , bp = t => new DataView(t.buffer,t.byteOffset,t.byteLength)
  , vp = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!vp)
    throw new Error("Non little-endian hardware is not supported");
function Cp(t) {
    if (typeof t != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t))
}
function Kn(t) {
    if (typeof t == "string")
        t = Cp(t);
    else if (hl(t))
        t = Gn(t);
    else
        throw new Error("Uint8Array expected, got " + typeof t);
    return t
}
function Ep(t, e) {
    if (e == null || typeof e != "object")
        throw new Error("options must be defined");
    return Object.assign(t, e)
}
function Ip(t, e) {
    if (t.length !== e.length)
        return !1;
    let s = 0;
    for (let r = 0; r < t.length; r++)
        s |= t[r] ^ e[r];
    return s === 0
}
const Np = (t, e) => {
    function s(r, ...i) {
        if (mt(r),
        t.nonceLength !== void 0) {
            const l = i[0];
            if (!l)
                throw new Error("nonce / iv required");
            t.varSizeNonce ? mt(l) : mt(l, t.nonceLength)
        }
        const n = t.tagLength;
        n && i[1] !== void 0 && mt(i[1]);
        const o = e(r, ...i)
          , a = (l, d) => {
            if (d !== void 0) {
                if (l !== 2)
                    throw new Error("cipher output not supported");
                mt(d)
            }
        }
        ;
        let c = !1;
        return {
            encrypt(l, d) {
                if (c)
                    throw new Error("cannot encrypt() twice with same key + nonce");
                return c = !0,
                mt(l),
                a(o.encrypt.length, d),
                o.encrypt(l, d)
            },
            decrypt(l, d) {
                if (mt(l),
                n && l.length < n)
                    throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
                return a(o.decrypt.length, d),
                o.decrypt(l, d)
            }
        }
    }
    return Object.assign(s, t),
    s
}
;
function ma(t, e, s=!0) {
    if (e === void 0)
        return new Uint8Array(t);
    if (e.length !== t)
        throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !Ap(e))
        throw new Error("invalid output, must be aligned");
    return e
}
function wa(t, e, s, r) {
    if (typeof t.setBigUint64 == "function")
        return t.setBigUint64(e, s, r);
    const i = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(s >> i & n)
      , a = Number(s & n);
    t.setUint32(e + 4, o, r),
    t.setUint32(e + 0, a, r)
}
function Ap(t) {
    return t.byteOffset % 4 === 0
}
function Gn(t) {
    return Uint8Array.from(t)
}
function Nr(...t) {
    for (let e = 0; e < t.length; e++)
        t[e].fill(0)
}
const pl = t => Uint8Array.from(t.split("").map(e => e.charCodeAt(0)))
  , _p = pl("expand 16-byte k")
  , Sp = pl("expand 32-byte k")
  , Pp = vs(_p)
  , kp = vs(Sp);
function le(t, e) {
    return t << e | t >>> 32 - e
}
function Jn(t) {
    return t.byteOffset % 4 === 0
}
const Si = 64
  , Tp = 16
  , gl = 2 ** 32 - 1
  , ya = new Uint32Array;
function Op(t, e, s, r, i, n, o, a) {
    const c = i.length
      , l = new Uint8Array(Si)
      , d = vs(l)
      , u = Jn(i) && Jn(n)
      , p = u ? vs(i) : ya
      , f = u ? vs(n) : ya;
    for (let m = 0; m < c; o++) {
        if (t(e, s, r, d, o, a),
        o >= gl)
            throw new Error("arx: counter overflow");
        const w = Math.min(Si, c - m);
        if (u && w === Si) {
            const g = m / 4;
            if (m % 4 !== 0)
                throw new Error("arx: invalid block position");
            for (let y = 0, b; y < Tp; y++)
                b = g + y,
                f[b] = p[b] ^ d[y];
            m += Si;
            continue
        }
        for (let g = 0, y; g < w; g++)
            y = m + g,
            n[y] = i[y] ^ l[g];
        m += w
    }
}
function xp(t, e) {
    const {allowShortKeys: s, extendNonceFn: r, counterLength: i, counterRight: n, rounds: o} = Ep({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, e);
    if (typeof t != "function")
        throw new Error("core must be a function");
    return gn(i),
    gn(o),
    fa(n),
    fa(s),
    (a, c, l, d, u=0) => {
        mt(a),
        mt(c),
        mt(l);
        const p = l.length;
        if (d === void 0 && (d = new Uint8Array(p)),
        mt(d),
        gn(u),
        u < 0 || u >= gl)
            throw new Error("arx: counter overflow");
        if (d.length < p)
            throw new Error(`arx: output (${d.length}) is shorter than data (${p})`);
        const f = [];
        let m = a.length, w, g;
        if (m === 32)
            f.push(w = Gn(a)),
            g = kp;
        else if (m === 16 && s)
            w = new Uint8Array(32),
            w.set(a),
            w.set(a, 16),
            g = Pp,
            f.push(w);
        else
            throw new Error(`arx: invalid 32-byte key, got length=${m}`);
        Jn(c) || f.push(c = Gn(c));
        const y = vs(w);
        if (r) {
            if (c.length !== 24)
                throw new Error("arx: extended nonce must be 24 bytes");
            r(g, y, vs(c.subarray(0, 16)), y),
            c = c.subarray(16)
        }
        const b = 16 - i;
        if (b !== c.length)
            throw new Error(`arx: nonce must be ${b} or 16 bytes`);
        if (b !== 12) {
            const O = new Uint8Array(12);
            O.set(c, n ? 0 : 12 - c.length),
            c = O,
            f.push(c)
        }
        const I = vs(c);
        return Op(t, g, y, I, l, d, u, o),
        Nr(...f),
        d
    }
}
const ze = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class Rp {
    constructor(e) {
        this.blockLen = 16,
        this.outputLen = 16,
        this.buffer = new Uint8Array(16),
        this.r = new Uint16Array(10),
        this.h = new Uint16Array(10),
        this.pad = new Uint16Array(8),
        this.pos = 0,
        this.finished = !1,
        e = Kn(e),
        mt(e, 32);
        const s = ze(e, 0)
          , r = ze(e, 2)
          , i = ze(e, 4)
          , n = ze(e, 6)
          , o = ze(e, 8)
          , a = ze(e, 10)
          , c = ze(e, 12)
          , l = ze(e, 14);
        this.r[0] = s & 8191,
        this.r[1] = (s >>> 13 | r << 3) & 8191,
        this.r[2] = (r >>> 10 | i << 6) & 7939,
        this.r[3] = (i >>> 7 | n << 9) & 8191,
        this.r[4] = (n >>> 4 | o << 12) & 255,
        this.r[5] = o >>> 1 & 8190,
        this.r[6] = (o >>> 14 | a << 2) & 8191,
        this.r[7] = (a >>> 11 | c << 5) & 8065,
        this.r[8] = (c >>> 8 | l << 8) & 8191,
        this.r[9] = l >>> 5 & 127;
        for (let d = 0; d < 8; d++)
            this.pad[d] = ze(e, 16 + 2 * d)
    }
    process(e, s, r=!1) {
        const i = r ? 0 : 2048
          , {h: n, r: o} = this
          , a = o[0]
          , c = o[1]
          , l = o[2]
          , d = o[3]
          , u = o[4]
          , p = o[5]
          , f = o[6]
          , m = o[7]
          , w = o[8]
          , g = o[9]
          , y = ze(e, s + 0)
          , b = ze(e, s + 2)
          , I = ze(e, s + 4)
          , O = ze(e, s + 6)
          , R = ze(e, s + 8)
          , P = ze(e, s + 10)
          , _ = ze(e, s + 12)
          , D = ze(e, s + 14);
        let v = n[0] + (y & 8191)
          , x = n[1] + ((y >>> 13 | b << 3) & 8191)
          , C = n[2] + ((b >>> 10 | I << 6) & 8191)
          , L = n[3] + ((I >>> 7 | O << 9) & 8191)
          , H = n[4] + ((O >>> 4 | R << 12) & 8191)
          , E = n[5] + (R >>> 1 & 8191)
          , k = n[6] + ((R >>> 14 | P << 2) & 8191)
          , A = n[7] + ((P >>> 11 | _ << 5) & 8191)
          , B = n[8] + ((_ >>> 8 | D << 8) & 8191)
          , j = n[9] + (D >>> 5 | i)
          , T = 0
          , G = T + v * a + x * (5 * g) + C * (5 * w) + L * (5 * m) + H * (5 * f);
        T = G >>> 13,
        G &= 8191,
        G += E * (5 * p) + k * (5 * u) + A * (5 * d) + B * (5 * l) + j * (5 * c),
        T += G >>> 13,
        G &= 8191;
        let Q = T + v * c + x * a + C * (5 * g) + L * (5 * w) + H * (5 * m);
        T = Q >>> 13,
        Q &= 8191,
        Q += E * (5 * f) + k * (5 * p) + A * (5 * u) + B * (5 * d) + j * (5 * l),
        T += Q >>> 13,
        Q &= 8191;
        let se = T + v * l + x * c + C * a + L * (5 * g) + H * (5 * w);
        T = se >>> 13,
        se &= 8191,
        se += E * (5 * m) + k * (5 * f) + A * (5 * p) + B * (5 * u) + j * (5 * d),
        T += se >>> 13,
        se &= 8191;
        let Ce = T + v * d + x * l + C * c + L * a + H * (5 * g);
        T = Ce >>> 13,
        Ce &= 8191,
        Ce += E * (5 * w) + k * (5 * m) + A * (5 * f) + B * (5 * p) + j * (5 * u),
        T += Ce >>> 13,
        Ce &= 8191;
        let pe = T + v * u + x * d + C * l + L * c + H * a;
        T = pe >>> 13,
        pe &= 8191,
        pe += E * (5 * g) + k * (5 * w) + A * (5 * m) + B * (5 * f) + j * (5 * p),
        T += pe >>> 13,
        pe &= 8191;
        let Te = T + v * p + x * u + C * d + L * l + H * c;
        T = Te >>> 13,
        Te &= 8191,
        Te += E * a + k * (5 * g) + A * (5 * w) + B * (5 * m) + j * (5 * f),
        T += Te >>> 13,
        Te &= 8191;
        let Le = T + v * f + x * p + C * u + L * d + H * l;
        T = Le >>> 13,
        Le &= 8191,
        Le += E * c + k * a + A * (5 * g) + B * (5 * w) + j * (5 * m),
        T += Le >>> 13,
        Le &= 8191;
        let Je = T + v * m + x * f + C * p + L * u + H * d;
        T = Je >>> 13,
        Je &= 8191,
        Je += E * l + k * c + A * a + B * (5 * g) + j * (5 * w),
        T += Je >>> 13,
        Je &= 8191;
        let Re = T + v * w + x * m + C * f + L * p + H * u;
        T = Re >>> 13,
        Re &= 8191,
        Re += E * d + k * l + A * c + B * a + j * (5 * g),
        T += Re >>> 13,
        Re &= 8191;
        let $e = T + v * g + x * w + C * m + L * f + H * p;
        T = $e >>> 13,
        $e &= 8191,
        $e += E * u + k * d + A * l + B * c + j * a,
        T += $e >>> 13,
        $e &= 8191,
        T = (T << 2) + T | 0,
        T = T + G | 0,
        G = T & 8191,
        T = T >>> 13,
        Q += T,
        n[0] = G,
        n[1] = Q,
        n[2] = se,
        n[3] = Ce,
        n[4] = pe,
        n[5] = Te,
        n[6] = Le,
        n[7] = Je,
        n[8] = Re,
        n[9] = $e
    }
    finalize() {
        const {h: e, pad: s} = this
          , r = new Uint16Array(10);
        let i = e[1] >>> 13;
        e[1] &= 8191;
        for (let a = 2; a < 10; a++)
            e[a] += i,
            i = e[a] >>> 13,
            e[a] &= 8191;
        e[0] += i * 5,
        i = e[0] >>> 13,
        e[0] &= 8191,
        e[1] += i,
        i = e[1] >>> 13,
        e[1] &= 8191,
        e[2] += i,
        r[0] = e[0] + 5,
        i = r[0] >>> 13,
        r[0] &= 8191;
        for (let a = 1; a < 10; a++)
            r[a] = e[a] + i,
            i = r[a] >>> 13,
            r[a] &= 8191;
        r[9] -= 8192;
        let n = (i ^ 1) - 1;
        for (let a = 0; a < 10; a++)
            r[a] &= n;
        n = ~n;
        for (let a = 0; a < 10; a++)
            e[a] = e[a] & n | r[a];
        e[0] = (e[0] | e[1] << 13) & 65535,
        e[1] = (e[1] >>> 3 | e[2] << 10) & 65535,
        e[2] = (e[2] >>> 6 | e[3] << 7) & 65535,
        e[3] = (e[3] >>> 9 | e[4] << 4) & 65535,
        e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535,
        e[5] = (e[6] >>> 2 | e[7] << 11) & 65535,
        e[6] = (e[7] >>> 5 | e[8] << 8) & 65535,
        e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
        let o = e[0] + s[0];
        e[0] = o & 65535;
        for (let a = 1; a < 8; a++)
            o = (e[a] + s[a] | 0) + (o >>> 16) | 0,
            e[a] = o & 65535;
        Nr(r)
    }
    update(e) {
        ga(this);
        const {buffer: s, blockLen: r} = this;
        e = Kn(e);
        const i = e.length;
        for (let n = 0; n < i; ) {
            const o = Math.min(r - this.pos, i - n);
            if (o === r) {
                for (; r <= i - n; n += r)
                    this.process(e, n);
                continue
            }
            s.set(e.subarray(n, n + o), this.pos),
            this.pos += o,
            n += o,
            this.pos === r && (this.process(s, 0, !1),
            this.pos = 0)
        }
        return this
    }
    destroy() {
        Nr(this.h, this.r, this.buffer, this.pad)
    }
    digestInto(e) {
        ga(this),
        yp(e, this),
        this.finished = !0;
        const {buffer: s, h: r} = this;
        let {pos: i} = this;
        if (i) {
            for (s[i++] = 1; i < 16; i++)
                s[i] = 0;
            this.process(s, 0, !0)
        }
        this.finalize();
        let n = 0;
        for (let o = 0; o < 8; o++)
            e[n++] = r[o] >>> 0,
            e[n++] = r[o] >>> 8;
        return e
    }
    digest() {
        const {buffer: e, outputLen: s} = this;
        this.digestInto(e);
        const r = e.slice(0, s);
        return this.destroy(),
        r
    }
}
function $p(t) {
    const e = (r, i) => t(i).update(Kn(r)).digest()
      , s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen,
    e.blockLen = s.blockLen,
    e.create = r => t(r),
    e
}
const Up = $p(t => new Rp(t));
function Dp(t, e, s, r, i, n=20) {
    let o = t[0]
      , a = t[1]
      , c = t[2]
      , l = t[3]
      , d = e[0]
      , u = e[1]
      , p = e[2]
      , f = e[3]
      , m = e[4]
      , w = e[5]
      , g = e[6]
      , y = e[7]
      , b = i
      , I = s[0]
      , O = s[1]
      , R = s[2]
      , P = o
      , _ = a
      , D = c
      , v = l
      , x = d
      , C = u
      , L = p
      , H = f
      , E = m
      , k = w
      , A = g
      , B = y
      , j = b
      , T = I
      , G = O
      , Q = R;
    for (let Ce = 0; Ce < n; Ce += 2)
        P = P + x | 0,
        j = le(j ^ P, 16),
        E = E + j | 0,
        x = le(x ^ E, 12),
        P = P + x | 0,
        j = le(j ^ P, 8),
        E = E + j | 0,
        x = le(x ^ E, 7),
        _ = _ + C | 0,
        T = le(T ^ _, 16),
        k = k + T | 0,
        C = le(C ^ k, 12),
        _ = _ + C | 0,
        T = le(T ^ _, 8),
        k = k + T | 0,
        C = le(C ^ k, 7),
        D = D + L | 0,
        G = le(G ^ D, 16),
        A = A + G | 0,
        L = le(L ^ A, 12),
        D = D + L | 0,
        G = le(G ^ D, 8),
        A = A + G | 0,
        L = le(L ^ A, 7),
        v = v + H | 0,
        Q = le(Q ^ v, 16),
        B = B + Q | 0,
        H = le(H ^ B, 12),
        v = v + H | 0,
        Q = le(Q ^ v, 8),
        B = B + Q | 0,
        H = le(H ^ B, 7),
        P = P + C | 0,
        Q = le(Q ^ P, 16),
        A = A + Q | 0,
        C = le(C ^ A, 12),
        P = P + C | 0,
        Q = le(Q ^ P, 8),
        A = A + Q | 0,
        C = le(C ^ A, 7),
        _ = _ + L | 0,
        j = le(j ^ _, 16),
        B = B + j | 0,
        L = le(L ^ B, 12),
        _ = _ + L | 0,
        j = le(j ^ _, 8),
        B = B + j | 0,
        L = le(L ^ B, 7),
        D = D + H | 0,
        T = le(T ^ D, 16),
        E = E + T | 0,
        H = le(H ^ E, 12),
        D = D + H | 0,
        T = le(T ^ D, 8),
        E = E + T | 0,
        H = le(H ^ E, 7),
        v = v + x | 0,
        G = le(G ^ v, 16),
        k = k + G | 0,
        x = le(x ^ k, 12),
        v = v + x | 0,
        G = le(G ^ v, 8),
        k = k + G | 0,
        x = le(x ^ k, 7);
    let se = 0;
    r[se++] = o + P | 0,
    r[se++] = a + _ | 0,
    r[se++] = c + D | 0,
    r[se++] = l + v | 0,
    r[se++] = d + x | 0,
    r[se++] = u + C | 0,
    r[se++] = p + L | 0,
    r[se++] = f + H | 0,
    r[se++] = m + E | 0,
    r[se++] = w + k | 0,
    r[se++] = g + A | 0,
    r[se++] = y + B | 0,
    r[se++] = b + j | 0,
    r[se++] = I + T | 0,
    r[se++] = O + G | 0,
    r[se++] = R + Q | 0
}
const Lp = xp(Dp, {
    counterRight: !1,
    counterLength: 4,
    allowShortKeys: !1
})
  , Mp = new Uint8Array(16)
  , ba = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(Mp.subarray(s))
}
  , Bp = new Uint8Array(32);
function va(t, e, s, r, i) {
    const n = t(e, s, Bp)
      , o = Up.create(n);
    i && ba(o, i),
    ba(o, r);
    const a = new Uint8Array(16)
      , c = bp(a);
    wa(c, 0, BigInt(i ? i.length : 0), !0),
    wa(c, 8, BigInt(r.length), !0),
    o.update(a);
    const l = o.digest();
    return Nr(n, a),
    l
}
const qp = t => (e, s, r) => ({
    encrypt(i, n) {
        const o = i.length;
        n = ma(o + 16, n, !1),
        n.set(i);
        const a = n.subarray(0, -16);
        t(e, s, a, a, 1);
        const c = va(t, e, s, a, r);
        return n.set(c, o),
        Nr(c),
        n
    },
    decrypt(i, n) {
        n = ma(i.length - 16, n, !1);
        const o = i.subarray(0, -16)
          , a = i.subarray(-16)
          , c = va(t, e, s, o, r);
        if (!Ip(a, c))
            throw new Error("invalid tag");
        return n.set(i.subarray(0, -16)),
        t(e, s, n, n, 1),
        Nr(c),
        n
    }
})
  , fl = Np({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, qp(Lp));
let ml = class extends Ao {
    constructor(e, s) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        No(e);
        const r = Ir(s);
        if (this.iHash = e.create(),
        typeof this.iHash.update != "function")
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        const i = this.blockLen
          , n = new Uint8Array(i);
        n.set(r.length > i ? e.create().update(r).digest() : r);
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
        return Er(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        Er(this),
        mi(e, this.outputLen),
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
        const {oHash: s, iHash: r, finished: i, destroyed: n, blockLen: o, outputLen: a} = this;
        return e = e,
        e.finished = i,
        e.destroyed = n,
        e.blockLen = o,
        e.outputLen = a,
        e.oHash = s._cloneInto(e.oHash),
        e.iHash = r._cloneInto(e.iHash),
        e
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
;
const Zi = (t, e, s) => new ml(t,e).update(s).digest();
Zi.create = (t, e) => new ml(t,e);
function jp(t, e, s) {
    return No(t),
    s === void 0 && (s = new Uint8Array(t.outputLen)),
    Zi(t, Ir(s), Ir(e))
}
const fn = new Uint8Array([0])
  , Ca = new Uint8Array;
function Fp(t, e, s, r=32) {
    if (No(t),
    ci(r),
    r > 255 * t.outputLen)
        throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(r / t.outputLen);
    s === void 0 && (s = Ca);
    const n = new Uint8Array(i * t.outputLen)
      , o = Zi.create(t, e)
      , a = o._cloneInto()
      , c = new Uint8Array(o.outputLen);
    for (let l = 0; l < i; l++)
        fn[0] = l + 1,
        a.update(l === 0 ? Ca : c).update(s).update(fn).digestInto(c),
        n.set(c, t.outputLen * l),
        o._cloneInto(a);
    return o.destroy(),
    a.destroy(),
    c.fill(0),
    fn.fill(0),
    n.slice(0, r)
}
const Wp = (t, e, s, r, i) => Fp(t, jp(t, e, s), r, i);
function zp(t, e, s, r) {
    if (typeof t.setBigUint64 == "function")
        return t.setBigUint64(e, s, r);
    const i = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(s >> i & n)
      , a = Number(s & n)
      , c = r ? 4 : 0
      , l = r ? 0 : 4;
    t.setUint32(e + c, o, r),
    t.setUint32(e + l, a, r)
}
function Hp(t, e, s) {
    return t & e ^ ~t & s
}
function Vp(t, e, s) {
    return t & e ^ t & s ^ e & s
}
let Kp = class extends Ao {
    constructor(e, s, r, i) {
        super(),
        this.blockLen = e,
        this.outputLen = s,
        this.padOffset = r,
        this.isLE = i,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(e),
        this.view = pn(this.buffer)
    }
    update(e) {
        Er(this);
        const {view: s, buffer: r, blockLen: i} = this;
        e = Ir(e);
        const n = e.length;
        for (let o = 0; o < n; ) {
            const a = Math.min(i - this.pos, n - o);
            if (a === i) {
                const c = pn(e);
                for (; i <= n - o; o += i)
                    this.process(c, o);
                continue
            }
            r.set(e.subarray(o, o + a), this.pos),
            this.pos += a,
            o += a,
            this.pos === i && (this.process(s, 0),
            this.pos = 0)
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        Er(this),
        rl(e, this),
        this.finished = !0;
        const {buffer: s, view: r, blockLen: i, isLE: n} = this;
        let {pos: o} = this;
        s[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > i - o && (this.process(r, 0),
        o = 0);
        for (let u = o; u < i; u++)
            s[u] = 0;
        zp(r, i - 8, BigInt(this.length * 8), n),
        this.process(r, 0);
        const a = pn(e)
          , c = this.outputLen;
        if (c % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        const l = c / 4
          , d = this.get();
        if (l > d.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let u = 0; u < l; u++)
            a.setUint32(4 * u, d[u], n)
    }
    digest() {
        const {buffer: e, outputLen: s} = this;
        this.digestInto(e);
        const r = e.slice(0, s);
        return this.destroy(),
        r
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        const {blockLen: s, buffer: r, length: i, finished: n, destroyed: o, pos: a} = this;
        return e.length = i,
        e.pos = a,
        e.finished = n,
        e.destroyed = o,
        i % s && e.buffer.set(r),
        e
    }
}
;
const Gp = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , us = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , hs = new Uint32Array(64);
class Jp extends Kp {
    constructor() {
        super(64, 32, 8, !1),
        this.A = us[0] | 0,
        this.B = us[1] | 0,
        this.C = us[2] | 0,
        this.D = us[3] | 0,
        this.E = us[4] | 0,
        this.F = us[5] | 0,
        this.G = us[6] | 0,
        this.H = us[7] | 0
    }
    get() {
        const {A: e, B: s, C: r, D: i, E: n, F: o, G: a, H: c} = this;
        return [e, s, r, i, n, o, a, c]
    }
    set(e, s, r, i, n, o, a, c) {
        this.A = e | 0,
        this.B = s | 0,
        this.C = r | 0,
        this.D = i | 0,
        this.E = n | 0,
        this.F = o | 0,
        this.G = a | 0,
        this.H = c | 0
    }
    process(e, s) {
        for (let u = 0; u < 16; u++,
        s += 4)
            hs[u] = e.getUint32(s, !1);
        for (let u = 16; u < 64; u++) {
            const p = hs[u - 15]
              , f = hs[u - 2]
              , m = Bt(p, 7) ^ Bt(p, 18) ^ p >>> 3
              , w = Bt(f, 17) ^ Bt(f, 19) ^ f >>> 10;
            hs[u] = w + hs[u - 7] + m + hs[u - 16] | 0
        }
        let {A: r, B: i, C: n, D: o, E: a, F: c, G: l, H: d} = this;
        for (let u = 0; u < 64; u++) {
            const p = Bt(a, 6) ^ Bt(a, 11) ^ Bt(a, 25)
              , f = d + p + Hp(a, c, l) + Gp[u] + hs[u] | 0
              , m = (Bt(r, 2) ^ Bt(r, 13) ^ Bt(r, 22)) + Vp(r, i, n) | 0;
            d = l,
            l = c,
            c = a,
            a = o + f | 0,
            o = n,
            n = i,
            i = r,
            r = f + m | 0
        }
        r = r + this.A | 0,
        i = i + this.B | 0,
        n = n + this.C | 0,
        o = o + this.D | 0,
        a = a + this.E | 0,
        c = c + this.F | 0,
        l = l + this.G | 0,
        d = d + this.H | 0,
        this.set(r, i, n, o, a, c, l, d)
    }
    roundClean() {
        hs.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
const wi = il( () => new Jp);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Xi = BigInt(0)
  , Qi = BigInt(1)
  , Yp = BigInt(2);
function Fs(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array"
}
function yi(t) {
    if (!Fs(t))
        throw new Error("Uint8Array expected")
}
function Ar(t, e) {
    if (typeof e != "boolean")
        throw new Error(t + " boolean expected, got " + e)
}
const Zp = Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function _r(t) {
    yi(t);
    let e = "";
    for (let s = 0; s < t.length; s++)
        e += Zp[t[s]];
    return e
}
function gr(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e
}
function So(t) {
    if (typeof t != "string")
        throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Xi : BigInt("0x" + t)
}
const Qt = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Ea(t) {
    if (t >= Qt._0 && t <= Qt._9)
        return t - Qt._0;
    if (t >= Qt.A && t <= Qt.F)
        return t - (Qt.A - 10);
    if (t >= Qt.a && t <= Qt.f)
        return t - (Qt.a - 10)
}
function Sr(t) {
    if (typeof t != "string")
        throw new Error("hex string expected, got " + typeof t);
    const e = t.length
      , s = e / 2;
    if (e % 2)
        throw new Error("hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(s);
    for (let i = 0, n = 0; i < s; i++,
    n += 2) {
        const o = Ea(t.charCodeAt(n))
          , a = Ea(t.charCodeAt(n + 1));
        if (o === void 0 || a === void 0) {
            const c = t[n] + t[n + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n)
        }
        r[i] = o * 16 + a
    }
    return r
}
function Ms(t) {
    return So(_r(t))
}
function di(t) {
    return yi(t),
    So(_r(Uint8Array.from(t).reverse()))
}
function Pr(t, e) {
    return Sr(t.toString(16).padStart(e * 2, "0"))
}
function en(t, e) {
    return Pr(t, e).reverse()
}
function Xp(t) {
    return Sr(gr(t))
}
function ft(t, e, s) {
    let r;
    if (typeof e == "string")
        try {
            r = Sr(e)
        } catch (n) {
            throw new Error(t + " must be hex string or Uint8Array, cause: " + n)
        }
    else if (Fs(e))
        r = Uint8Array.from(e);
    else
        throw new Error(t + " must be hex string or Uint8Array");
    const i = r.length;
    if (typeof s == "number" && i !== s)
        throw new Error(t + " of length " + s + " expected, got " + i);
    return r
}
function ui(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        yi(i),
        e += i.length
    }
    const s = new Uint8Array(e);
    for (let r = 0, i = 0; r < t.length; r++) {
        const n = t[r];
        s.set(n, i),
        i += n.length
    }
    return s
}
function Qp(t, e) {
    if (t.length !== e.length)
        return !1;
    let s = 0;
    for (let r = 0; r < t.length; r++)
        s |= t[r] ^ e[r];
    return s === 0
}
function eg(t) {
    if (typeof t != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t))
}
const mn = t => typeof t == "bigint" && Xi <= t;
function tn(t, e, s) {
    return mn(t) && mn(e) && mn(s) && e <= t && t < s
}
function is(t, e, s, r) {
    if (!tn(e, s, r))
        throw new Error("expected valid " + t + ": " + s + " <= n < " + r + ", got " + e)
}
function wl(t) {
    let e;
    for (e = 0; t > Xi; t >>= Qi,
    e += 1)
        ;
    return e
}
function tg(t, e) {
    return t >> BigInt(e) & Qi
}
function sg(t, e, s) {
    return t | (s ? Qi : Xi) << BigInt(e)
}
const Po = t => (Yp << BigInt(t - 1)) - Qi
  , wn = t => new Uint8Array(t)
  , Ia = t => Uint8Array.from(t);
function yl(t, e, s) {
    if (typeof t != "number" || t < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof s != "function")
        throw new Error("hmacFn must be a function");
    let r = wn(t)
      , i = wn(t)
      , n = 0;
    const o = () => {
        r.fill(1),
        i.fill(0),
        n = 0
    }
      , a = (...d) => s(i, r, ...d)
      , c = (d=wn()) => {
        i = a(Ia([0]), d),
        r = a(),
        d.length !== 0 && (i = a(Ia([1]), d),
        r = a())
    }
      , l = () => {
        if (n++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let d = 0;
        const u = [];
        for (; d < e; ) {
            r = a();
            const p = r.slice();
            u.push(p),
            d += r.length
        }
        return ui(...u)
    }
    ;
    return (d, u) => {
        o(),
        c(d);
        let p;
        for (; !(p = u(l())); )
            c();
        return o(),
        p
    }
}
const rg = {
    bigint: t => typeof t == "bigint",
    function: t => typeof t == "function",
    boolean: t => typeof t == "boolean",
    string: t => typeof t == "string",
    stringOrUint8Array: t => typeof t == "string" || Fs(t),
    isSafeInteger: t => Number.isSafeInteger(t),
    array: t => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: t => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Ur(t, e, s={}) {
    const r = (i, n, o) => {
        const a = rg[n];
        if (typeof a != "function")
            throw new Error("invalid validator function");
        const c = t[i];
        if (!(o && c === void 0) && !a(c, t))
            throw new Error("param " + String(i) + " is invalid. Expected " + n + ", got " + c)
    }
    ;
    for (const [i,n] of Object.entries(e))
        r(i, n, !1);
    for (const [i,n] of Object.entries(s))
        r(i, n, !0);
    return t
}
const ig = () => {
    throw new Error("not implemented")
}
;
function Yn(t) {
    const e = new WeakMap;
    return (s, ...r) => {
        const i = e.get(s);
        if (i !== void 0)
            return i;
        const n = t(s, ...r);
        return e.set(s, n),
        n
    }
}
var ng = Object.freeze({
    __proto__: null,
    isBytes: Fs,
    abytes: yi,
    abool: Ar,
    bytesToHex: _r,
    numberToHexUnpadded: gr,
    hexToNumber: So,
    hexToBytes: Sr,
    bytesToNumberBE: Ms,
    bytesToNumberLE: di,
    numberToBytesBE: Pr,
    numberToBytesLE: en,
    numberToVarBytesBE: Xp,
    ensureBytes: ft,
    concatBytes: ui,
    equalBytes: Qp,
    utf8ToBytes: eg,
    inRange: tn,
    aInRange: is,
    bitLen: wl,
    bitGet: tg,
    bitSet: sg,
    bitMask: Po,
    createHmacDrbg: yl,
    validateObject: Ur,
    notImplemented: ig,
    memoized: Yn
});
const We = BigInt(0)
  , ke = BigInt(1)
  , Rs = BigInt(2)
  , og = BigInt(3)
  , Zn = BigInt(4)
  , Na = BigInt(5)
  , Aa = BigInt(8);
function lt(t, e) {
    const s = t % e;
    return s >= We ? s : e + s
}
function bl(t, e, s) {
    if (e < We)
        throw new Error("invalid exponent, negatives unsupported");
    if (s <= We)
        throw new Error("invalid modulus");
    if (s === ke)
        return We;
    let r = ke;
    for (; e > We; )
        e & ke && (r = r * t % s),
        t = t * t % s,
        e >>= ke;
    return r
}
function Rt(t, e, s) {
    let r = t;
    for (; e-- > We; )
        r *= r,
        r %= s;
    return r
}
function Xn(t, e) {
    if (t === We)
        throw new Error("invert: expected non-zero number");
    if (e <= We)
        throw new Error("invert: expected positive modulus, got " + e);
    let s = lt(t, e)
      , r = e
      , i = We
      , n = ke;
    for (; s !== We; ) {
        const o = r / s
          , a = r % s
          , c = i - n * o;
        r = s,
        s = a,
        i = n,
        n = c
    }
    if (r !== ke)
        throw new Error("invert: does not exist");
    return lt(i, e)
}
function ag(t) {
    const e = (t - ke) / Rs;
    let s, r, i;
    for (s = t - ke,
    r = 0; s % Rs === We; s /= Rs,
    r++)
        ;
    for (i = Rs; i < t && bl(i, e, t) !== t - ke; i++)
        if (i > 1e3)
            throw new Error("Cannot find square root: likely non-prime P");
    if (r === 1) {
        const o = (t + ke) / Zn;
        return function(a, c) {
            const l = a.pow(c, o);
            if (!a.eql(a.sqr(l), c))
                throw new Error("Cannot find square root");
            return l
        }
    }
    const n = (s + ke) / Rs;
    return function(o, a) {
        if (o.pow(a, e) === o.neg(o.ONE))
            throw new Error("Cannot find square root");
        let c = r
          , l = o.pow(o.mul(o.ONE, i), s)
          , d = o.pow(a, n)
          , u = o.pow(a, s);
        for (; !o.eql(u, o.ONE); ) {
            if (o.eql(u, o.ZERO))
                return o.ZERO;
            let p = 1;
            for (let m = o.sqr(u); p < c && !o.eql(m, o.ONE); p++)
                m = o.sqr(m);
            const f = o.pow(l, ke << BigInt(c - p - 1));
            l = o.sqr(f),
            d = o.mul(d, f),
            u = o.mul(u, l),
            c = p
        }
        return d
    }
}
function cg(t) {
    if (t % Zn === og) {
        const e = (t + ke) / Zn;
        return function(s, r) {
            const i = s.pow(r, e);
            if (!s.eql(s.sqr(i), r))
                throw new Error("Cannot find square root");
            return i
        }
    }
    if (t % Aa === Na) {
        const e = (t - Na) / Aa;
        return function(s, r) {
            const i = s.mul(r, Rs)
              , n = s.pow(i, e)
              , o = s.mul(r, n)
              , a = s.mul(s.mul(o, Rs), n)
              , c = s.mul(o, s.sub(a, s.ONE));
            if (!s.eql(s.sqr(c), r))
                throw new Error("Cannot find square root");
            return c
        }
    }
    return ag(t)
}
const lg = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function dg(t) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }
      , s = lg.reduce( (r, i) => (r[i] = "function",
    r), e);
    return Ur(t, s)
}
function ug(t, e, s) {
    if (s < We)
        throw new Error("invalid exponent, negatives unsupported");
    if (s === We)
        return t.ONE;
    if (s === ke)
        return e;
    let r = t.ONE
      , i = e;
    for (; s > We; )
        s & ke && (r = t.mul(r, i)),
        i = t.sqr(i),
        s >>= ke;
    return r
}
function hg(t, e) {
    const s = new Array(e.length)
      , r = e.reduce( (n, o, a) => t.is0(o) ? n : (s[a] = n,
    t.mul(n, o)), t.ONE)
      , i = t.inv(r);
    return e.reduceRight( (n, o, a) => t.is0(o) ? n : (s[a] = t.mul(n, s[a]),
    t.mul(n, o)), i),
    s
}
function vl(t, e) {
    const s = e !== void 0 ? e : t.toString(2).length
      , r = Math.ceil(s / 8);
    return {
        nBitLength: s,
        nByteLength: r
    }
}
function Cl(t, e, s=!1, r={}) {
    if (t <= We)
        throw new Error("invalid field: expected ORDER > 0, got " + t);
    const {nBitLength: i, nByteLength: n} = vl(t, e);
    if (n > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
        ORDER: t,
        isLE: s,
        BITS: i,
        BYTES: n,
        MASK: Po(i),
        ZERO: We,
        ONE: ke,
        create: c => lt(c, t),
        isValid: c => {
            if (typeof c != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof c);
            return We <= c && c < t
        }
        ,
        is0: c => c === We,
        isOdd: c => (c & ke) === ke,
        neg: c => lt(-c, t),
        eql: (c, l) => c === l,
        sqr: c => lt(c * c, t),
        add: (c, l) => lt(c + l, t),
        sub: (c, l) => lt(c - l, t),
        mul: (c, l) => lt(c * l, t),
        pow: (c, l) => ug(a, c, l),
        div: (c, l) => lt(c * Xn(l, t), t),
        sqrN: c => c * c,
        addN: (c, l) => c + l,
        subN: (c, l) => c - l,
        mulN: (c, l) => c * l,
        inv: c => Xn(c, t),
        sqrt: r.sqrt || (c => (o || (o = cg(t)),
        o(a, c))),
        invertBatch: c => hg(a, c),
        cmov: (c, l, d) => d ? l : c,
        toBytes: c => s ? en(c, n) : Pr(c, n),
        fromBytes: c => {
            if (c.length !== n)
                throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
            return s ? di(c) : Ms(c)
        }
    });
    return Object.freeze(a)
}
function El(t) {
    if (typeof t != "bigint")
        throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8)
}
function Il(t) {
    const e = El(t);
    return e + Math.ceil(e / 2)
}
function pg(t, e, s=!1) {
    const r = t.length
      , i = El(e)
      , n = Il(e);
    if (r < 16 || r < n || r > 1024)
        throw new Error("expected " + n + "-1024 bytes of input, got " + r);
    const o = s ? di(t) : Ms(t)
      , a = lt(o, e - ke) + ke;
    return s ? en(a, i) : Pr(a, i)
}
const _a = BigInt(0)
  , Pi = BigInt(1);
function yn(t, e) {
    const s = e.negate();
    return t ? s : e
}
function Nl(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e)
        throw new Error("invalid window size, expected [1.." + e + "], got W=" + t)
}
function bn(t, e) {
    Nl(t, e);
    const s = Math.ceil(e / t) + 1
      , r = 2 ** (t - 1);
    return {
        windows: s,
        windowSize: r
    }
}
function gg(t, e) {
    if (!Array.isArray(t))
        throw new Error("array expected");
    t.forEach( (s, r) => {
        if (!(s instanceof e))
            throw new Error("invalid point at index " + r)
    }
    )
}
function fg(t, e) {
    if (!Array.isArray(t))
        throw new Error("array of scalars expected");
    t.forEach( (s, r) => {
        if (!e.isValid(s))
            throw new Error("invalid scalar at index " + r)
    }
    )
}
const vn = new WeakMap
  , Al = new WeakMap;
function Cn(t) {
    return Al.get(t) || 1
}
function mg(t, e) {
    return {
        constTimeNegate: yn,
        hasPrecomputes(s) {
            return Cn(s) !== 1
        },
        unsafeLadder(s, r, i=t.ZERO) {
            let n = s;
            for (; r > _a; )
                r & Pi && (i = i.add(n)),
                n = n.double(),
                r >>= Pi;
            return i
        },
        precomputeWindow(s, r) {
            const {windows: i, windowSize: n} = bn(r, e)
              , o = [];
            let a = s
              , c = a;
            for (let l = 0; l < i; l++) {
                c = a,
                o.push(c);
                for (let d = 1; d < n; d++)
                    c = c.add(a),
                    o.push(c);
                a = c.double()
            }
            return o
        },
        wNAF(s, r, i) {
            const {windows: n, windowSize: o} = bn(s, e);
            let a = t.ZERO
              , c = t.BASE;
            const l = BigInt(2 ** s - 1)
              , d = 2 ** s
              , u = BigInt(s);
            for (let p = 0; p < n; p++) {
                const f = p * o;
                let m = Number(i & l);
                i >>= u,
                m > o && (m -= d,
                i += Pi);
                const w = f
                  , g = f + Math.abs(m) - 1
                  , y = p % 2 !== 0
                  , b = m < 0;
                m === 0 ? c = c.add(yn(y, r[w])) : a = a.add(yn(b, r[g]))
            }
            return {
                p: a,
                f: c
            }
        },
        wNAFUnsafe(s, r, i, n=t.ZERO) {
            const {windows: o, windowSize: a} = bn(s, e)
              , c = BigInt(2 ** s - 1)
              , l = 2 ** s
              , d = BigInt(s);
            for (let u = 0; u < o; u++) {
                const p = u * a;
                if (i === _a)
                    break;
                let f = Number(i & c);
                if (i >>= d,
                f > a && (f -= l,
                i += Pi),
                f === 0)
                    continue;
                let m = r[p + Math.abs(f) - 1];
                f < 0 && (m = m.negate()),
                n = n.add(m)
            }
            return n
        },
        getPrecomputes(s, r, i) {
            let n = vn.get(r);
            return n || (n = this.precomputeWindow(r, s),
            s !== 1 && vn.set(r, i(n))),
            n
        },
        wNAFCached(s, r, i) {
            const n = Cn(s);
            return this.wNAF(n, this.getPrecomputes(n, s, i), r)
        },
        wNAFCachedUnsafe(s, r, i, n) {
            const o = Cn(s);
            return o === 1 ? this.unsafeLadder(s, r, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, s, i), r, n)
        },
        setWindowSize(s, r) {
            Nl(r, e),
            Al.set(s, r),
            vn.delete(s)
        }
    }
}
function wg(t, e, s, r) {
    if (gg(s, t),
    fg(r, e),
    s.length !== r.length)
        throw new Error("arrays of points and scalars must have equal length");
    const i = t.ZERO
      , n = wl(BigInt(s.length))
      , o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1
      , a = (1 << o) - 1
      , c = new Array(a + 1).fill(i)
      , l = Math.floor((e.BITS - 1) / o) * o;
    let d = i;
    for (let u = l; u >= 0; u -= o) {
        c.fill(i);
        for (let f = 0; f < r.length; f++) {
            const m = r[f]
              , w = Number(m >> BigInt(u) & BigInt(a));
            c[w] = c[w].add(s[f])
        }
        let p = i;
        for (let f = c.length - 1, m = i; f > 0; f--)
            m = m.add(c[f]),
            p = p.add(m);
        if (d = d.add(p),
        u !== 0)
            for (let f = 0; f < o; f++)
                d = d.double()
    }
    return d
}
function _l(t) {
    return dg(t.Fp),
    Ur(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze({
        ...vl(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    })
}
BigInt(0),
BigInt(1),
BigInt(2),
BigInt(8);
const Ys = BigInt(0)
  , En = BigInt(1);
function yg(t) {
    return Ur(t, {
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
        ...t
    })
}
function bg(t) {
    const e = yg(t)
      , {P: s} = e
      , r = b => lt(b, s)
      , i = e.montgomeryBits
      , n = Math.ceil(i / 8)
      , o = e.nByteLength
      , a = e.adjustScalarBytes || (b => b)
      , c = e.powPminus2 || (b => bl(b, s - BigInt(2), s));
    function l(b, I, O) {
        const R = r(b * (I - O));
        return I = r(I - R),
        O = r(O + R),
        [I, O]
    }
    const d = (e.a - BigInt(2)) / BigInt(4);
    function u(b, I) {
        is("u", b, Ys, s),
        is("scalar", I, Ys, s);
        const O = I
          , R = b;
        let P = En, _ = Ys, D = b, v = En, x = Ys, C;
        for (let H = BigInt(i - 1); H >= Ys; H--) {
            const E = O >> H & En;
            x ^= E,
            C = l(x, P, D),
            P = C[0],
            D = C[1],
            C = l(x, _, v),
            _ = C[0],
            v = C[1],
            x = E;
            const k = P + _
              , A = r(k * k)
              , B = P - _
              , j = r(B * B)
              , T = A - j
              , G = D + v
              , Q = D - v
              , se = r(Q * k)
              , Ce = r(G * B)
              , pe = se + Ce
              , Te = se - Ce;
            D = r(pe * pe),
            v = r(R * r(Te * Te)),
            P = r(A * j),
            _ = r(T * (A + r(d * T)))
        }
        C = l(x, P, D),
        P = C[0],
        D = C[1],
        C = l(x, _, v),
        _ = C[0],
        v = C[1];
        const L = c(_);
        return r(P * L)
    }
    function p(b) {
        return en(r(b), n)
    }
    function f(b) {
        const I = ft("u coordinate", b, n);
        return o === 32 && (I[31] &= 127),
        di(I)
    }
    function m(b) {
        const I = ft("scalar", b)
          , O = I.length;
        if (O !== n && O !== o) {
            let R = "" + n + " or " + o;
            throw new Error("invalid scalar, expected " + R + " bytes, got " + O)
        }
        return di(a(I))
    }
    function w(b, I) {
        const O = f(I)
          , R = m(b)
          , P = u(O, R);
        if (P === Ys)
            throw new Error("invalid private or public key received");
        return p(P)
    }
    const g = p(e.Gu);
    function y(b) {
        return w(b, g)
    }
    return {
        scalarMult: w,
        scalarMultBase: y,
        getSharedSecret: (b, I) => w(b, I),
        getPublicKey: b => y(b),
        utils: {
            randomPrivateKey: () => e.randomBytes(e.nByteLength)
        },
        GuBytes: g
    }
}
const Qn = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const vg = BigInt(1)
  , Sa = BigInt(2)
  , Cg = BigInt(3)
  , Eg = BigInt(5);
BigInt(8);
function Ig(t) {
    const e = BigInt(10)
      , s = BigInt(20)
      , r = BigInt(40)
      , i = BigInt(80)
      , n = Qn
      , o = t * t % n * t % n
      , a = Rt(o, Sa, n) * o % n
      , c = Rt(a, vg, n) * t % n
      , l = Rt(c, Eg, n) * c % n
      , d = Rt(l, e, n) * l % n
      , u = Rt(d, s, n) * d % n
      , p = Rt(u, r, n) * u % n
      , f = Rt(p, i, n) * p % n
      , m = Rt(f, i, n) * p % n
      , w = Rt(m, e, n) * l % n;
    return {
        pow_p_5_8: Rt(w, Sa, n) * t % n,
        b2: o
    }
}
function Ng(t) {
    return t[0] &= 248,
    t[31] &= 127,
    t[31] |= 64,
    t
}
const eo = bg({
    P: Qn,
    a: BigInt(486662),
    montgomeryBits: 255,
    nByteLength: 32,
    Gu: BigInt(9),
    powPminus2: t => {
        const e = Qn
          , {pow_p_5_8: s, b2: r} = Ig(t);
        return lt(Rt(s, Cg, e) * r, e)
    }
    ,
    adjustScalarBytes: Ng,
    randomBytes: $r
});
function Pa(t) {
    t.lowS !== void 0 && Ar("lowS", t.lowS),
    t.prehash !== void 0 && Ar("prehash", t.prehash)
}
function Ag(t) {
    const e = _l(t);
    Ur(e, {
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
    const {endo: s, Fp: r, a: i} = e;
    if (s) {
        if (!r.eql(i, r.ZERO))
            throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
        if (typeof s != "object" || typeof s.beta != "bigint" || typeof s.splitScalar != "function")
            throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")
    }
    return Object.freeze({
        ...e
    })
}
const {bytesToNumberBE: _g, hexToBytes: Sg} = ng;
class Pg extends Error {
    constructor(e="") {
        super(e)
    }
}
const ss = {
    Err: Pg,
    _tlv: {
        encode: (t, e) => {
            const {Err: s} = ss;
            if (t < 0 || t > 256)
                throw new s("tlv.encode: wrong tag");
            if (e.length & 1)
                throw new s("tlv.encode: unpadded data");
            const r = e.length / 2
              , i = gr(r);
            if (i.length / 2 & 128)
                throw new s("tlv.encode: long form length too big");
            const n = r > 127 ? gr(i.length / 2 | 128) : "";
            return gr(t) + n + i + e
        }
        ,
        decode(t, e) {
            const {Err: s} = ss;
            let r = 0;
            if (t < 0 || t > 256)
                throw new s("tlv.encode: wrong tag");
            if (e.length < 2 || e[r++] !== t)
                throw new s("tlv.decode: wrong tlv");
            const i = e[r++]
              , n = !!(i & 128);
            let o = 0;
            if (!n)
                o = i;
            else {
                const c = i & 127;
                if (!c)
                    throw new s("tlv.decode(long): indefinite length not supported");
                if (c > 4)
                    throw new s("tlv.decode(long): byte length is too big");
                const l = e.subarray(r, r + c);
                if (l.length !== c)
                    throw new s("tlv.decode: length bytes not complete");
                if (l[0] === 0)
                    throw new s("tlv.decode(long): zero leftmost byte");
                for (const d of l)
                    o = o << 8 | d;
                if (r += c,
                o < 128)
                    throw new s("tlv.decode(long): not minimal encoding")
            }
            const a = e.subarray(r, r + o);
            if (a.length !== o)
                throw new s("tlv.decode: wrong value length");
            return {
                v: a,
                l: e.subarray(r + o)
            }
        }
    },
    _int: {
        encode(t) {
            const {Err: e} = ss;
            if (t < rs)
                throw new e("integer: negative integers are not allowed");
            let s = gr(t);
            if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s),
            s.length & 1)
                throw new e("unexpected DER parsing assertion: unpadded hex");
            return s
        },
        decode(t) {
            const {Err: e} = ss;
            if (t[0] & 128)
                throw new e("invalid signature integer: negative");
            if (t[0] === 0 && !(t[1] & 128))
                throw new e("invalid signature integer: unnecessary leading zero");
            return _g(t)
        }
    },
    toSig(t) {
        const {Err: e, _int: s, _tlv: r} = ss
          , i = typeof t == "string" ? Sg(t) : t;
        yi(i);
        const {v: n, l: o} = r.decode(48, i);
        if (o.length)
            throw new e("invalid signature: left bytes after parsing");
        const {v: a, l: c} = r.decode(2, n)
          , {v: l, l: d} = r.decode(2, c);
        if (d.length)
            throw new e("invalid signature: left bytes after parsing");
        return {
            r: s.decode(a),
            s: s.decode(l)
        }
    },
    hexFromSig(t) {
        const {_tlv: e, _int: s} = ss
          , r = e.encode(2, s.encode(t.r))
          , i = e.encode(2, s.encode(t.s))
          , n = r + i;
        return e.encode(48, n)
    }
}
  , rs = BigInt(0)
  , qe = BigInt(1);
BigInt(2);
const ka = BigInt(3);
BigInt(4);
function kg(t) {
    const e = Ag(t)
      , {Fp: s} = e
      , r = Cl(e.n, e.nBitLength)
      , i = e.toBytes || ( (w, g, y) => {
        const b = g.toAffine();
        return ui(Uint8Array.from([4]), s.toBytes(b.x), s.toBytes(b.y))
    }
    )
      , n = e.fromBytes || (w => {
        const g = w.subarray(1)
          , y = s.fromBytes(g.subarray(0, s.BYTES))
          , b = s.fromBytes(g.subarray(s.BYTES, 2 * s.BYTES));
        return {
            x: y,
            y: b
        }
    }
    );
    function o(w) {
        const {a: g, b: y} = e
          , b = s.sqr(w)
          , I = s.mul(b, w);
        return s.add(s.add(I, s.mul(w, g)), y)
    }
    if (!s.eql(s.sqr(e.Gy), o(e.Gx)))
        throw new Error("bad generator point: equation left != right");
    function a(w) {
        return tn(w, qe, e.n)
    }
    function c(w) {
        const {allowedPrivateKeyLengths: g, nByteLength: y, wrapPrivateKey: b, n: I} = e;
        if (g && typeof w != "bigint") {
            if (Fs(w) && (w = _r(w)),
            typeof w != "string" || !g.includes(w.length))
                throw new Error("invalid private key");
            w = w.padStart(y * 2, "0")
        }
        let O;
        try {
            O = typeof w == "bigint" ? w : Ms(ft("private key", w, y))
        } catch {
            throw new Error("invalid private key, expected hex or " + y + " bytes, got " + typeof w)
        }
        return b && (O = lt(O, I)),
        is("private key", O, qe, I),
        O
    }
    function l(w) {
        if (!(w instanceof p))
            throw new Error("ProjectivePoint expected")
    }
    const d = Yn( (w, g) => {
        const {px: y, py: b, pz: I} = w;
        if (s.eql(I, s.ONE))
            return {
                x: y,
                y: b
            };
        const O = w.is0();
        g == null && (g = O ? s.ONE : s.inv(I));
        const R = s.mul(y, g)
          , P = s.mul(b, g)
          , _ = s.mul(I, g);
        if (O)
            return {
                x: s.ZERO,
                y: s.ZERO
            };
        if (!s.eql(_, s.ONE))
            throw new Error("invZ was invalid");
        return {
            x: R,
            y: P
        }
    }
    )
      , u = Yn(w => {
        if (w.is0()) {
            if (e.allowInfinityPoint && !s.is0(w.py))
                return;
            throw new Error("bad point: ZERO")
        }
        const {x: g, y} = w.toAffine();
        if (!s.isValid(g) || !s.isValid(y))
            throw new Error("bad point: x or y not FE");
        const b = s.sqr(y)
          , I = o(g);
        if (!s.eql(b, I))
            throw new Error("bad point: equation left != right");
        if (!w.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    class p {
        constructor(g, y, b) {
            if (this.px = g,
            this.py = y,
            this.pz = b,
            g == null || !s.isValid(g))
                throw new Error("x required");
            if (y == null || !s.isValid(y))
                throw new Error("y required");
            if (b == null || !s.isValid(b))
                throw new Error("z required");
            Object.freeze(this)
        }
        static fromAffine(g) {
            const {x: y, y: b} = g || {};
            if (!g || !s.isValid(y) || !s.isValid(b))
                throw new Error("invalid affine point");
            if (g instanceof p)
                throw new Error("projective point not allowed");
            const I = O => s.eql(O, s.ZERO);
            return I(y) && I(b) ? p.ZERO : new p(y,b,s.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(g) {
            const y = s.invertBatch(g.map(b => b.pz));
            return g.map( (b, I) => b.toAffine(y[I])).map(p.fromAffine)
        }
        static fromHex(g) {
            const y = p.fromAffine(n(ft("pointHex", g)));
            return y.assertValidity(),
            y
        }
        static fromPrivateKey(g) {
            return p.BASE.multiply(c(g))
        }
        static msm(g, y) {
            return wg(p, r, g, y)
        }
        _setWindowSize(g) {
            m.setWindowSize(this, g)
        }
        assertValidity() {
            u(this)
        }
        hasEvenY() {
            const {y: g} = this.toAffine();
            if (s.isOdd)
                return !s.isOdd(g);
            throw new Error("Field doesn't support isOdd")
        }
        equals(g) {
            l(g);
            const {px: y, py: b, pz: I} = this
              , {px: O, py: R, pz: P} = g
              , _ = s.eql(s.mul(y, P), s.mul(O, I))
              , D = s.eql(s.mul(b, P), s.mul(R, I));
            return _ && D
        }
        negate() {
            return new p(this.px,s.neg(this.py),this.pz)
        }
        double() {
            const {a: g, b: y} = e
              , b = s.mul(y, ka)
              , {px: I, py: O, pz: R} = this;
            let P = s.ZERO
              , _ = s.ZERO
              , D = s.ZERO
              , v = s.mul(I, I)
              , x = s.mul(O, O)
              , C = s.mul(R, R)
              , L = s.mul(I, O);
            return L = s.add(L, L),
            D = s.mul(I, R),
            D = s.add(D, D),
            P = s.mul(g, D),
            _ = s.mul(b, C),
            _ = s.add(P, _),
            P = s.sub(x, _),
            _ = s.add(x, _),
            _ = s.mul(P, _),
            P = s.mul(L, P),
            D = s.mul(b, D),
            C = s.mul(g, C),
            L = s.sub(v, C),
            L = s.mul(g, L),
            L = s.add(L, D),
            D = s.add(v, v),
            v = s.add(D, v),
            v = s.add(v, C),
            v = s.mul(v, L),
            _ = s.add(_, v),
            C = s.mul(O, R),
            C = s.add(C, C),
            v = s.mul(C, L),
            P = s.sub(P, v),
            D = s.mul(C, x),
            D = s.add(D, D),
            D = s.add(D, D),
            new p(P,_,D)
        }
        add(g) {
            l(g);
            const {px: y, py: b, pz: I} = this
              , {px: O, py: R, pz: P} = g;
            let _ = s.ZERO
              , D = s.ZERO
              , v = s.ZERO;
            const x = e.a
              , C = s.mul(e.b, ka);
            let L = s.mul(y, O)
              , H = s.mul(b, R)
              , E = s.mul(I, P)
              , k = s.add(y, b)
              , A = s.add(O, R);
            k = s.mul(k, A),
            A = s.add(L, H),
            k = s.sub(k, A),
            A = s.add(y, I);
            let B = s.add(O, P);
            return A = s.mul(A, B),
            B = s.add(L, E),
            A = s.sub(A, B),
            B = s.add(b, I),
            _ = s.add(R, P),
            B = s.mul(B, _),
            _ = s.add(H, E),
            B = s.sub(B, _),
            v = s.mul(x, A),
            _ = s.mul(C, E),
            v = s.add(_, v),
            _ = s.sub(H, v),
            v = s.add(H, v),
            D = s.mul(_, v),
            H = s.add(L, L),
            H = s.add(H, L),
            E = s.mul(x, E),
            A = s.mul(C, A),
            H = s.add(H, E),
            E = s.sub(L, E),
            E = s.mul(x, E),
            A = s.add(A, E),
            L = s.mul(H, A),
            D = s.add(D, L),
            L = s.mul(B, A),
            _ = s.mul(k, _),
            _ = s.sub(_, L),
            L = s.mul(k, H),
            v = s.mul(B, v),
            v = s.add(v, L),
            new p(_,D,v)
        }
        subtract(g) {
            return this.add(g.negate())
        }
        is0() {
            return this.equals(p.ZERO)
        }
        wNAF(g) {
            return m.wNAFCached(this, g, p.normalizeZ)
        }
        multiplyUnsafe(g) {
            const {endo: y, n: b} = e;
            is("scalar", g, rs, b);
            const I = p.ZERO;
            if (g === rs)
                return I;
            if (this.is0() || g === qe)
                return this;
            if (!y || m.hasPrecomputes(this))
                return m.wNAFCachedUnsafe(this, g, p.normalizeZ);
            let {k1neg: O, k1: R, k2neg: P, k2: _} = y.splitScalar(g)
              , D = I
              , v = I
              , x = this;
            for (; R > rs || _ > rs; )
                R & qe && (D = D.add(x)),
                _ & qe && (v = v.add(x)),
                x = x.double(),
                R >>= qe,
                _ >>= qe;
            return O && (D = D.negate()),
            P && (v = v.negate()),
            v = new p(s.mul(v.px, y.beta),v.py,v.pz),
            D.add(v)
        }
        multiply(g) {
            const {endo: y, n: b} = e;
            is("scalar", g, qe, b);
            let I, O;
            if (y) {
                const {k1neg: R, k1: P, k2neg: _, k2: D} = y.splitScalar(g);
                let {p: v, f: x} = this.wNAF(P)
                  , {p: C, f: L} = this.wNAF(D);
                v = m.constTimeNegate(R, v),
                C = m.constTimeNegate(_, C),
                C = new p(s.mul(C.px, y.beta),C.py,C.pz),
                I = v.add(C),
                O = x.add(L)
            } else {
                const {p: R, f: P} = this.wNAF(g);
                I = R,
                O = P
            }
            return p.normalizeZ([I, O])[0]
        }
        multiplyAndAddUnsafe(g, y, b) {
            const I = p.BASE
              , O = (P, _) => _ === rs || _ === qe || !P.equals(I) ? P.multiplyUnsafe(_) : P.multiply(_)
              , R = O(this, y).add(O(g, b));
            return R.is0() ? void 0 : R
        }
        toAffine(g) {
            return d(this, g)
        }
        isTorsionFree() {
            const {h: g, isTorsionFree: y} = e;
            if (g === qe)
                return !0;
            if (y)
                return y(p, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {h: g, clearCofactor: y} = e;
            return g === qe ? this : y ? y(p, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(g=!0) {
            return Ar("isCompressed", g),
            this.assertValidity(),
            i(p, this, g)
        }
        toHex(g=!0) {
            return Ar("isCompressed", g),
            _r(this.toRawBytes(g))
        }
    }
    p.BASE = new p(e.Gx,e.Gy,s.ONE),
    p.ZERO = new p(s.ZERO,s.ONE,s.ZERO);
    const f = e.nBitLength
      , m = mg(p, e.endo ? Math.ceil(f / 2) : f);
    return {
        CURVE: e,
        ProjectivePoint: p,
        normPrivateKeyToScalar: c,
        weierstrassEquation: o,
        isWithinCurveOrder: a
    }
}
function Tg(t) {
    const e = _l(t);
    return Ur(e, {
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
function Og(t) {
    const e = Tg(t)
      , {Fp: s, n: r} = e
      , i = s.BYTES + 1
      , n = 2 * s.BYTES + 1;
    function o(E) {
        return lt(E, r)
    }
    function a(E) {
        return Xn(E, r)
    }
    const {ProjectivePoint: c, normPrivateKeyToScalar: l, weierstrassEquation: d, isWithinCurveOrder: u} = kg({
        ...e,
        toBytes(E, k, A) {
            const B = k.toAffine()
              , j = s.toBytes(B.x)
              , T = ui;
            return Ar("isCompressed", A),
            A ? T(Uint8Array.from([k.hasEvenY() ? 2 : 3]), j) : T(Uint8Array.from([4]), j, s.toBytes(B.y))
        },
        fromBytes(E) {
            const k = E.length
              , A = E[0]
              , B = E.subarray(1);
            if (k === i && (A === 2 || A === 3)) {
                const j = Ms(B);
                if (!tn(j, qe, s.ORDER))
                    throw new Error("Point is not on curve");
                const T = d(j);
                let G;
                try {
                    G = s.sqrt(T)
                } catch (se) {
                    const Ce = se instanceof Error ? ": " + se.message : "";
                    throw new Error("Point is not on curve" + Ce)
                }
                const Q = (G & qe) === qe;
                return (A & 1) === 1 !== Q && (G = s.neg(G)),
                {
                    x: j,
                    y: G
                }
            } else if (k === n && A === 4) {
                const j = s.fromBytes(B.subarray(0, s.BYTES))
                  , T = s.fromBytes(B.subarray(s.BYTES, 2 * s.BYTES));
                return {
                    x: j,
                    y: T
                }
            } else {
                const j = i
                  , T = n;
                throw new Error("invalid Point, expected length of " + j + ", or uncompressed " + T + ", got " + k)
            }
        }
    })
      , p = E => _r(Pr(E, e.nByteLength));
    function f(E) {
        const k = r >> qe;
        return E > k
    }
    function m(E) {
        return f(E) ? o(-E) : E
    }
    const w = (E, k, A) => Ms(E.slice(k, A));
    class g {
        constructor(k, A, B) {
            this.r = k,
            this.s = A,
            this.recovery = B,
            this.assertValidity()
        }
        static fromCompact(k) {
            const A = e.nByteLength;
            return k = ft("compactSignature", k, A * 2),
            new g(w(k, 0, A),w(k, A, 2 * A))
        }
        static fromDER(k) {
            const {r: A, s: B} = ss.toSig(ft("DER", k));
            return new g(A,B)
        }
        assertValidity() {
            is("r", this.r, qe, r),
            is("s", this.s, qe, r)
        }
        addRecoveryBit(k) {
            return new g(this.r,this.s,k)
        }
        recoverPublicKey(k) {
            const {r: A, s: B, recovery: j} = this
              , T = P(ft("msgHash", k));
            if (j == null || ![0, 1, 2, 3].includes(j))
                throw new Error("recovery id invalid");
            const G = j === 2 || j === 3 ? A + e.n : A;
            if (G >= s.ORDER)
                throw new Error("recovery id 2 or 3 invalid");
            const Q = (j & 1) === 0 ? "02" : "03"
              , se = c.fromHex(Q + p(G))
              , Ce = a(G)
              , pe = o(-T * Ce)
              , Te = o(B * Ce)
              , Le = c.BASE.multiplyAndAddUnsafe(se, pe, Te);
            if (!Le)
                throw new Error("point at infinify");
            return Le.assertValidity(),
            Le
        }
        hasHighS() {
            return f(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new g(this.r,o(-this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return Sr(this.toDERHex())
        }
        toDERHex() {
            return ss.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return Sr(this.toCompactHex())
        }
        toCompactHex() {
            return p(this.r) + p(this.s)
        }
    }
    const y = {
        isValidPrivateKey(E) {
            try {
                return l(E),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: l,
        randomPrivateKey: () => {
            const E = Il(e.n);
            return pg(e.randomBytes(E), e.n)
        }
        ,
        precompute(E=8, k=c.BASE) {
            return k._setWindowSize(E),
            k.multiply(BigInt(3)),
            k
        }
    };
    function b(E, k=!0) {
        return c.fromPrivateKey(E).toRawBytes(k)
    }
    function I(E) {
        const k = Fs(E)
          , A = typeof E == "string"
          , B = (k || A) && E.length;
        return k ? B === i || B === n : A ? B === 2 * i || B === 2 * n : E instanceof c
    }
    function O(E, k, A=!0) {
        if (I(E))
            throw new Error("first arg must be private key");
        if (!I(k))
            throw new Error("second arg must be public key");
        return c.fromHex(k).multiply(l(E)).toRawBytes(A)
    }
    const R = e.bits2int || function(E) {
        if (E.length > 8192)
            throw new Error("input is too large");
        const k = Ms(E)
          , A = E.length * 8 - e.nBitLength;
        return A > 0 ? k >> BigInt(A) : k
    }
      , P = e.bits2int_modN || function(E) {
        return o(R(E))
    }
      , _ = Po(e.nBitLength);
    function D(E) {
        return is("num < 2^" + e.nBitLength, E, rs, _),
        Pr(E, e.nByteLength)
    }
    function v(E, k, A=x) {
        if (["recovered", "canonical"].some(Re => Re in A))
            throw new Error("sign() legacy options not supported");
        const {hash: B, randomBytes: j} = e;
        let {lowS: T, prehash: G, extraEntropy: Q} = A;
        T == null && (T = !0),
        E = ft("msgHash", E),
        Pa(A),
        G && (E = ft("prehashed msgHash", B(E)));
        const se = P(E)
          , Ce = l(k)
          , pe = [D(Ce), D(se)];
        if (Q != null && Q !== !1) {
            const Re = Q === !0 ? j(s.BYTES) : Q;
            pe.push(ft("extraEntropy", Re))
        }
        const Te = ui(...pe)
          , Le = se;
        function Je(Re) {
            const $e = R(Re);
            if (!u($e))
                return;
            const _s = a($e)
              , Gt = c.BASE.multiply($e).toAffine()
              , Mt = o(Gt.x);
            if (Mt === rs)
                return;
            const Jt = o(_s * o(Le + Mt * Ce));
            if (Jt === rs)
                return;
            let Ks = (Gt.x === Mt ? 0 : 2) | Number(Gt.y & qe)
              , Ii = Jt;
            return T && f(Jt) && (Ii = m(Jt),
            Ks ^= 1),
            new g(Mt,Ii,Ks)
        }
        return {
            seed: Te,
            k2sig: Je
        }
    }
    const x = {
        lowS: e.lowS,
        prehash: !1
    }
      , C = {
        lowS: e.lowS,
        prehash: !1
    };
    function L(E, k, A=x) {
        const {seed: B, k2sig: j} = v(E, k, A)
          , T = e;
        return yl(T.hash.outputLen, T.nByteLength, T.hmac)(B, j)
    }
    c.BASE._setWindowSize(8);
    function H(E, k, A, B=C) {
        const j = E;
        k = ft("msgHash", k),
        A = ft("publicKey", A);
        const {lowS: T, prehash: G, format: Q} = B;
        if (Pa(B),
        "strict"in B)
            throw new Error("options.strict was renamed to lowS");
        if (Q !== void 0 && Q !== "compact" && Q !== "der")
            throw new Error("format must be compact or der");
        const se = typeof j == "string" || Fs(j)
          , Ce = !se && !Q && typeof j == "object" && j !== null && typeof j.r == "bigint" && typeof j.s == "bigint";
        if (!se && !Ce)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let pe, Te;
        try {
            if (Ce && (pe = new g(j.r,j.s)),
            se) {
                try {
                    Q !== "compact" && (pe = g.fromDER(j))
                } catch (Jt) {
                    if (!(Jt instanceof ss.Err))
                        throw Jt
                }
                !pe && Q !== "der" && (pe = g.fromCompact(j))
            }
            Te = c.fromHex(A)
        } catch {
            return !1
        }
        if (!pe || T && pe.hasHighS())
            return !1;
        G && (k = e.hash(k));
        const {r: Le, s: Je} = pe
          , Re = P(k)
          , $e = a(Je)
          , _s = o(Re * $e)
          , Gt = o(Le * $e)
          , Mt = c.BASE.multiplyAndAddUnsafe(Te, _s, Gt)?.toAffine();
        return Mt ? o(Mt.x) === Le : !1
    }
    return {
        CURVE: e,
        getPublicKey: b,
        getSharedSecret: O,
        sign: L,
        verify: H,
        ProjectivePoint: c,
        Signature: g,
        utils: y
    }
}
function xg(t) {
    return {
        hash: t,
        hmac: (e, ...s) => Zi(t, e, Dh(...s)),
        randomBytes: $r
    }
}
function Rg(t, e) {
    const s = r => Og({
        ...t,
        ...xg(r)
    });
    return {
        ...s(e),
        create: s
    }
}
const Sl = Cl(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"))
  , $g = Sl.create(BigInt("-3"))
  , Ug = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b")
  , Dg = Rg({
    a: $g,
    b: Ug,
    Fp: Sl,
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
    h: BigInt(1),
    lowS: !1
}, wi)
  , Pl = "base10"
  , tt = "base16"
  , Dt = "base64pad"
  , ms = "base64url"
  , bi = "utf8"
  , kl = 0
  , ns = 1
  , vi = 2
  , Lg = 0
  , Ta = 1
  , si = 12
  , ko = 32;
function Mg() {
    const t = eo.utils.randomPrivateKey()
      , e = eo.getPublicKey(t);
    return {
        privateKey: dt(t, tt),
        publicKey: dt(e, tt)
    }
}
function to() {
    const t = $r(ko);
    return dt(t, tt)
}
function Bg(t, e) {
    const s = eo.getSharedSecret(_t(t, tt), _t(e, tt))
      , r = Wp(wi, s, void 0, void 0, ko);
    return dt(r, tt)
}
function Mi(t) {
    const e = wi(_t(t, tt));
    return dt(e, tt)
}
function Ht(t) {
    const e = wi(_t(t, bi));
    return dt(e, tt)
}
function Tl(t) {
    return _t(`${t}`, Pl)
}
function Ws(t) {
    return Number(dt(t, Pl))
}
function Ol(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
function xl(t) {
    const e = t.replace(/-/g, "+").replace(/_/g, "/")
      , s = (4 - e.length % 4) % 4;
    return e + "=".repeat(s)
}
function qg(t) {
    const e = Tl(typeof t.type < "u" ? t.type : kl);
    if (Ws(e) === ns && typeof t.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    const s = typeof t.senderPublicKey < "u" ? _t(t.senderPublicKey, tt) : void 0
      , r = typeof t.iv < "u" ? _t(t.iv, tt) : $r(si)
      , i = _t(t.symKey, tt)
      , n = fl(i, r).encrypt(_t(t.message, bi))
      , o = Rl({
        type: e,
        sealed: n,
        iv: r,
        senderPublicKey: s
    });
    return t.encoding === ms ? Ol(o) : o
}
function jg(t) {
    const e = _t(t.symKey, tt)
      , {sealed: s, iv: r} = hi({
        encoded: t.encoded,
        encoding: t.encoding
    })
      , i = fl(e, r).decrypt(s);
    if (i === null)
        throw new Error("Failed to decrypt");
    return dt(i, bi)
}
function Fg(t, e) {
    const s = Tl(vi)
      , r = $r(si)
      , i = _t(t, bi)
      , n = Rl({
        type: s,
        sealed: i,
        iv: r
    });
    return e === ms ? Ol(n) : n
}
function Wg(t, e) {
    const {sealed: s} = hi({
        encoded: t,
        encoding: e
    });
    return dt(s, bi)
}
function Rl(t) {
    if (Ws(t.type) === vi)
        return dt(Zr([t.type, t.sealed]), Dt);
    if (Ws(t.type) === ns) {
        if (typeof t.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return dt(Zr([t.type, t.senderPublicKey, t.iv, t.sealed]), Dt)
    }
    return dt(Zr([t.type, t.iv, t.sealed]), Dt)
}
function hi(t) {
    const e = (t.encoding || Dt) === ms ? xl(t.encoded) : t.encoded
      , s = _t(e, Dt)
      , r = s.slice(Lg, Ta)
      , i = Ta;
    if (Ws(r) === ns) {
        const c = i + ko
          , l = c + si
          , d = s.slice(i, c)
          , u = s.slice(c, l)
          , p = s.slice(l);
        return {
            type: r,
            sealed: p,
            iv: u,
            senderPublicKey: d
        }
    }
    if (Ws(r) === vi) {
        const c = s.slice(i)
          , l = $r(si);
        return {
            type: r,
            sealed: c,
            iv: l
        }
    }
    const n = i + si
      , o = s.slice(i, n)
      , a = s.slice(n);
    return {
        type: r,
        sealed: a,
        iv: o
    }
}
function zg(t, e) {
    const s = hi({
        encoded: t,
        encoding: e?.encoding
    });
    return $l({
        type: Ws(s.type),
        senderPublicKey: typeof s.senderPublicKey < "u" ? dt(s.senderPublicKey, tt) : void 0,
        receiverPublicKey: e?.receiverPublicKey
    })
}
function $l(t) {
    const e = t?.type || kl;
    if (e === ns) {
        if (typeof t?.senderPublicKey > "u")
            throw new Error("missing sender public key");
        if (typeof t?.receiverPublicKey > "u")
            throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: t?.senderPublicKey,
        receiverPublicKey: t?.receiverPublicKey
    }
}
function Oa(t) {
    return t.type === ns && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string"
}
function xa(t) {
    return t.type === vi
}
function Hg(t) {
    const e = Ze.from(t.x, "base64")
      , s = Ze.from(t.y, "base64");
    return Zr([new Uint8Array([4]), e, s])
}
function Vg(t, e) {
    const [s,r,i] = t.split(".")
      , n = Ze.from(xl(i), "base64");
    if (n.length !== 64)
        throw new Error("Invalid signature length");
    const o = n.slice(0, 32)
      , a = n.slice(32, 64)
      , c = `${s}.${r}`
      , l = wi(c)
      , d = Hg(e);
    if (!Dg.verify(Zr([o, a]), l, d))
        throw new Error("Invalid signature");
    return Ln(t).payload
}
const Kg = "irn";
function Vi(t) {
    return t?.relay || {
        protocol: Kg
    }
}
function Gr(t) {
    const e = wd[t];
    if (typeof e > "u")
        throw new Error(`Relay Protocol not supported: ${t}`);
    return e
}
function Gg(t, e="-") {
    const s = {}
      , r = "relay" + e;
    return Object.keys(t).forEach(i => {
        if (i.startsWith(r)) {
            const n = i.replace(r, "")
              , o = t[i];
            s[n] = o
        }
    }
    ),
    s
}
function Ra(t) {
    if (!t.includes("wc:")) {
        const l = sl(t);
        l != null && l.includes("wc:") && (t = l)
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t,
    t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":")
      , s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0
      , r = t.substring(0, e)
      , i = t.substring(e + 1, s).split("@")
      , n = typeof s < "u" ? t.substring(s) : ""
      , o = new URLSearchParams(n)
      , a = {};
    o.forEach( (l, d) => {
        a[d] = l
    }
    );
    const c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
        protocol: r,
        topic: Jg(i[0]),
        version: parseInt(i[1], 10),
        symKey: a.symKey,
        relay: Gg(a),
        methods: c,
        expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    }
}
function Jg(t) {
    return t.startsWith("//") ? t.substring(2) : t
}
function Yg(t, e="-") {
    const s = "relay"
      , r = {};
    return Object.keys(t).forEach(i => {
        const n = i
          , o = s + e + n;
        t[n] && (r[o] = t[n])
    }
    ),
    r
}
function $a(t) {
    const e = new URLSearchParams
      , s = Yg(t.relay);
    Object.keys(s).sort().forEach(i => {
        e.set(i, s[i])
    }
    ),
    e.set("symKey", t.symKey),
    t.expiryTimestamp && e.set("expiryTimestamp", t.expiryTimestamp.toString()),
    t.methods && e.set("methods", t.methods.join(","));
    const r = e.toString();
    return `${t.protocol}:${t.topic}@${t.version}?${r}`
}
function ki(t, e, s) {
    return `${t}?wc_ev=${s}&topic=${e}`
}
var Zg = Object.defineProperty
  , Xg = Object.defineProperties
  , Qg = Object.getOwnPropertyDescriptors
  , Ua = Object.getOwnPropertySymbols
  , ef = Object.prototype.hasOwnProperty
  , tf = Object.prototype.propertyIsEnumerable
  , Da = (t, e, s) => e in t ? Zg(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , sf = (t, e) => {
    for (var s in e || (e = {}))
        ef.call(e, s) && Da(t, s, e[s]);
    if (Ua)
        for (var s of Ua(e))
            tf.call(e, s) && Da(t, s, e[s]);
    return t
}
  , rf = (t, e) => Xg(t, Qg(e));
function Dr(t) {
    const e = [];
    return t.forEach(s => {
        const [r,i] = s.split(":");
        e.push(`${r}:${i}`)
    }
    ),
    e
}
function nf(t) {
    const e = [];
    return Object.values(t).forEach(s => {
        e.push(...Dr(s.accounts))
    }
    ),
    e
}
function of(t, e) {
    const s = [];
    return Object.values(t).forEach(r => {
        Dr(r.accounts).includes(e) && s.push(...r.methods)
    }
    ),
    s
}
function af(t, e) {
    const s = [];
    return Object.values(t).forEach(r => {
        Dr(r.accounts).includes(e) && s.push(...r.events)
    }
    ),
    s
}
function sn(t) {
    return t.includes(":")
}
function fr(t) {
    return sn(t) ? t.split(":")[0] : t
}
function La(t) {
    var e, s, r;
    const i = {};
    if (!Es(t))
        return i;
    for (const [n,o] of Object.entries(t)) {
        const a = sn(n) ? [n] : o.chains
          , c = o.methods || []
          , l = o.events || []
          , d = fr(n);
        i[d] = rf(sf({}, i[d]), {
            chains: Vt(a, (e = i[d]) == null ? void 0 : e.chains),
            methods: Vt(c, (s = i[d]) == null ? void 0 : s.methods),
            events: Vt(l, (r = i[d]) == null ? void 0 : r.events)
        })
    }
    return i
}
function cf(t) {
    const e = {};
    return t?.forEach(s => {
        var r;
        const [i,n] = s.split(":");
        e[i] || (e[i] = {
            accounts: [],
            chains: [],
            events: [],
            methods: []
        }),
        e[i].accounts.push(s),
        (r = e[i].chains) == null || r.push(`${i}:${n}`)
    }
    ),
    e
}
function Ma(t, e) {
    e = e.map(r => r.replace("did:pkh:", ""));
    const s = cf(e);
    for (const [r,i] of Object.entries(s))
        i.methods ? i.methods = Vt(i.methods, t) : i.methods = t,
        i.events = ["chainChanged", "accountsChanged"];
    return s
}
function lf(t, e) {
    var s, r, i, n, o, a;
    const c = La(t)
      , l = La(e)
      , d = {}
      , u = Object.keys(c).concat(Object.keys(l));
    for (const p of u)
        d[p] = {
            chains: Vt((s = c[p]) == null ? void 0 : s.chains, (r = l[p]) == null ? void 0 : r.chains),
            methods: Vt((i = c[p]) == null ? void 0 : i.methods, (n = l[p]) == null ? void 0 : n.methods),
            events: Vt((o = c[p]) == null ? void 0 : o.events, (a = l[p]) == null ? void 0 : a.events)
        };
    return d
}
const df = {
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
  , uf = {
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
function $(t, e) {
    const {message: s, code: r} = uf[t];
    return {
        message: e ? `${s} ${e}` : s,
        code: r
    }
}
function we(t, e) {
    const {message: s, code: r} = df[t];
    return {
        message: e ? `${s} ${e}` : s,
        code: r
    }
}
function Cs(t, e) {
    return !!Array.isArray(t)
}
function Es(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
}
function Ke(t) {
    return typeof t > "u"
}
function xe(t, e) {
    return e && Ke(t) ? !0 : typeof t == "string" && !!t.trim().length
}
function To(t, e) {
    return e && Ke(t) ? !0 : typeof t == "number" && !isNaN(t)
}
function hf(t, e) {
    const {requiredNamespaces: s} = e
      , r = Object.keys(t.namespaces)
      , i = Object.keys(s);
    let n = !0;
    return Ls(i, r) ? (r.forEach(o => {
        const {accounts: a, methods: c, events: l} = t.namespaces[o]
          , d = Dr(a)
          , u = s[o];
        (!Ls(Zc(o, u), d) || !Ls(u.methods, c) || !Ls(u.events, l)) && (n = !1)
    }
    ),
    n) : !1
}
function Ki(t) {
    return xe(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1
}
function pf(t) {
    if (xe(t, !1) && t.includes(":")) {
        const e = t.split(":");
        if (e.length === 3) {
            const s = e[0] + ":" + e[1];
            return !!e[2] && Ki(s)
        }
    }
    return !1
}
function gf(t) {
    function e(s) {
        try {
            return typeof new URL(s) < "u"
        } catch {
            return !1
        }
    }
    try {
        if (xe(t, !1)) {
            if (e(t))
                return !0;
            const s = sl(t);
            return e(s)
        }
    } catch {}
    return !1
}
function ff(t) {
    var e;
    return (e = t?.proposer) == null ? void 0 : e.publicKey
}
function mf(t) {
    return t?.topic
}
function wf(t, e) {
    let s = null;
    return xe(t?.publicKey, !1) || (s = $("MISSING_OR_INVALID", `${e} controller public key should be a string`)),
    s
}
function Ba(t) {
    let e = !0;
    return Cs(t) ? t.length && (e = t.every(s => xe(s, !1))) : e = !1,
    e
}
function yf(t, e, s) {
    let r = null;
    return Cs(e) && e.length ? e.forEach(i => {
        r || Ki(i) || (r = we("UNSUPPORTED_CHAINS", `${s}, chain ${i} should be a string and conform to "namespace:chainId" format`))
    }
    ) : Ki(t) || (r = we("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    r
}
function bf(t, e, s) {
    let r = null;
    return Object.entries(t).forEach( ([i,n]) => {
        if (r)
            return;
        const o = yf(i, Zc(i, n), `${e} ${s}`);
        o && (r = o)
    }
    ),
    r
}
function vf(t, e) {
    let s = null;
    return Cs(t) ? t.forEach(r => {
        s || pf(r) || (s = we("UNSUPPORTED_ACCOUNTS", `${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : s = we("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    s
}
function Cf(t, e) {
    let s = null;
    return Object.values(t).forEach(r => {
        if (s)
            return;
        const i = vf(r?.accounts, `${e} namespace`);
        i && (s = i)
    }
    ),
    s
}
function Ef(t, e) {
    let s = null;
    return Ba(t?.methods) ? Ba(t?.events) || (s = we("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = we("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`),
    s
}
function Ul(t, e) {
    let s = null;
    return Object.values(t).forEach(r => {
        if (s)
            return;
        const i = Ef(r, `${e}, namespace`);
        i && (s = i)
    }
    ),
    s
}
function If(t, e, s) {
    let r = null;
    if (t && Es(t)) {
        const i = Ul(t, e);
        i && (r = i);
        const n = bf(t, e, s);
        n && (r = n)
    } else
        r = $("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
    return r
}
function In(t, e) {
    let s = null;
    if (t && Es(t)) {
        const r = Ul(t, e);
        r && (s = r);
        const i = Cf(t, e);
        i && (s = i)
    } else
        s = $("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return s
}
function Dl(t) {
    return xe(t.protocol, !0)
}
function Nf(t, e) {
    let s = !1;
    return t ? t && Cs(t) && t.length && t.forEach(r => {
        s = Dl(r)
    }
    ) : s = !0,
    s
}
function Af(t) {
    return typeof t == "number"
}
function ct(t) {
    return typeof t < "u" && typeof t !== null
}
function _f(t) {
    return !(!t || typeof t != "object" || !t.code || !To(t.code, !1) || !t.message || !xe(t.message, !1))
}
function Sf(t) {
    return !(Ke(t) || !xe(t.method, !1))
}
function Pf(t) {
    return !(Ke(t) || Ke(t.result) && Ke(t.error) || !To(t.id, !1) || !xe(t.jsonrpc, !1))
}
function kf(t) {
    return !(Ke(t) || !xe(t.name, !1))
}
function qa(t, e) {
    return !(!Ki(e) || !nf(t).includes(e))
}
function Tf(t, e, s) {
    return xe(s, !1) ? of(t, e).includes(s) : !1
}
function Of(t, e, s) {
    return xe(s, !1) ? af(t, e).includes(s) : !1
}
function ja(t, e, s) {
    let r = null;
    const i = xf(t)
      , n = Rf(e)
      , o = Object.keys(i)
      , a = Object.keys(n)
      , c = Fa(Object.keys(t))
      , l = Fa(Object.keys(e))
      , d = c.filter(u => !l.includes(u));
    return d.length && (r = $("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)),
    Ls(o, a) || (r = $("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)),
    Object.keys(e).forEach(u => {
        if (!u.includes(":") || r)
            return;
        const p = Dr(e[u].accounts);
        p.includes(u) || (r = $("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${p.toString()}`))
    }
    ),
    o.forEach(u => {
        r || (Ls(i[u].methods, n[u].methods) ? Ls(i[u].events, n[u].events) || (r = $("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${u}`)) : r = $("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${u}`))
    }
    ),
    r
}
function xf(t) {
    const e = {};
    return Object.keys(t).forEach(s => {
        var r;
        s.includes(":") ? e[s] = t[s] : (r = t[s].chains) == null || r.forEach(i => {
            e[i] = {
                methods: t[s].methods,
                events: t[s].events
            }
        }
        )
    }
    ),
    e
}
function Fa(t) {
    return [...new Set(t.map(e => e.includes(":") ? e.split(":")[0] : e))]
}
function Rf(t) {
    const e = {};
    return Object.keys(t).forEach(s => {
        s.includes(":") ? e[s] = t[s] : Dr(t[s].accounts)?.forEach(i => {
            e[i] = {
                accounts: t[s].accounts.filter(n => n.includes(`${i}:`)),
                methods: t[s].methods,
                events: t[s].events
            }
        }
        )
    }
    ),
    e
}
function $f(t, e) {
    return To(t, !1) && t <= e.max && t >= e.min
}
function Wa() {
    const t = fi();
    return new Promise(e => {
        switch (t) {
        case wt.browser:
            e(Uf());
            break;
        case wt.reactNative:
            e(Df());
            break;
        case wt.node:
            e(Lf());
            break;
        default:
            e(!0)
        }
    }
    )
}
function Uf() {
    return Rr() && navigator?.onLine
}
async function Df() {
    return As() && typeof re < "u" && re != null && re.NetInfo ? (await (re == null ? void 0 : re.NetInfo.fetch()))?.isConnected : !0
}
function Lf() {
    return !0
}
function Mf(t) {
    switch (fi()) {
    case wt.browser:
        Bf(t);
        break;
    case wt.reactNative:
        qf(t);
        break
    }
}
function Bf(t) {
    !As() && Rr() && (window.addEventListener("online", () => t(!0)),
    window.addEventListener("offline", () => t(!1)))
}
function qf(t) {
    As() && typeof re < "u" && re != null && re.NetInfo && re?.NetInfo.addEventListener(e => t(e?.isConnected))
}
function jf() {
    var t;
    return Rr() && os.getDocument() ? ((t = os.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : !0
}
const Nn = {};
class qr {
    static get(e) {
        return Nn[e]
    }
    static set(e, s) {
        Nn[e] = s
    }
    static delete(e) {
        delete Nn[e]
    }
}
var Ff = {};
const Ll = "wc"
  , Ml = 2
  , so = "core"
  , Kt = `${Ll}@2:${so}:`
  , Wf = {
    logger: "error"
}
  , zf = {
    database: ":memory:"
}
  , Hf = "crypto"
  , za = "client_ed25519_seed"
  , Vf = U.ONE_DAY
  , Kf = "keychain"
  , Gf = "0.3"
  , Jf = "messages"
  , Yf = "0.3"
  , Ha = U.SIX_HOURS
  , Zf = "publisher"
  , Bl = "irn"
  , Xf = "error"
  , ql = "wss://relay.walletconnect.org"
  , Qf = "relayer"
  , je = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , em = "_subscription"
  , It = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , tm = .1
  , ro = "2.21.0"
  , Ae = {
    link_mode: "link_mode",
    relay: "relay"
}
  , Bi = {
    inbound: "inbound",
    outbound: "outbound"
}
  , sm = "0.3"
  , rm = "WALLETCONNECT_CLIENT_ID"
  , Va = "WALLETCONNECT_LINK_MODE_APPS"
  , pt = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , im = "subscription"
  , nm = "0.3"
  , om = "pairing"
  , am = "0.3"
  , jr = {
    wc_pairingDelete: {
        req: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: U.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: U.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , $s = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , Tt = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , cm = "history"
  , lm = "0.3"
  , dm = "expirer"
  , At = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , um = "0.3"
  , hm = "verify-api"
  , pm = "https://verify.walletconnect.com"
  , jl = "https://verify.walletconnect.org"
  , ri = jl
  , gm = `${ri}/v3`
  , fm = [pm, jl]
  , mm = "echo"
  , wm = "https://echo.walletconnect.com"
  , Ft = {
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
  , ts = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
}
  , Ot = {
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
  , Ps = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found"
}
  , ks = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
}
  , Fr = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
}
  , ym = .1
  , bm = "event-client"
  , vm = 86400
  , Cm = "https://pulse.walletconnect.org/batch";
function Em(t, e) {
    if (t.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var s = new Uint8Array(256), r = 0; r < s.length; r++)
        s[r] = 255;
    for (var i = 0; i < t.length; i++) {
        var n = t.charAt(i)
          , o = n.charCodeAt(0);
        if (s[o] !== 255)
            throw new TypeError(n + " is ambiguous");
        s[o] = i
    }
    var a = t.length
      , c = t.charAt(0)
      , l = Math.log(a) / Math.log(256)
      , d = Math.log(256) / Math.log(a);
    function u(m) {
        if (m instanceof Uint8Array || (ArrayBuffer.isView(m) ? m = new Uint8Array(m.buffer,m.byteOffset,m.byteLength) : Array.isArray(m) && (m = Uint8Array.from(m))),
        !(m instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (m.length === 0)
            return "";
        for (var w = 0, g = 0, y = 0, b = m.length; y !== b && m[y] === 0; )
            y++,
            w++;
        for (var I = (b - y) * d + 1 >>> 0, O = new Uint8Array(I); y !== b; ) {
            for (var R = m[y], P = 0, _ = I - 1; (R !== 0 || P < g) && _ !== -1; _--,
            P++)
                R += 256 * O[_] >>> 0,
                O[_] = R % a >>> 0,
                R = R / a >>> 0;
            if (R !== 0)
                throw new Error("Non-zero carry");
            g = P,
            y++
        }
        for (var D = I - g; D !== I && O[D] === 0; )
            D++;
        for (var v = c.repeat(w); D < I; ++D)
            v += t.charAt(O[D]);
        return v
    }
    function p(m) {
        if (typeof m != "string")
            throw new TypeError("Expected String");
        if (m.length === 0)
            return new Uint8Array;
        var w = 0;
        if (m[w] !== " ") {
            for (var g = 0, y = 0; m[w] === c; )
                g++,
                w++;
            for (var b = (m.length - w) * l + 1 >>> 0, I = new Uint8Array(b); m[w]; ) {
                var O = s[m.charCodeAt(w)];
                if (O === 255)
                    return;
                for (var R = 0, P = b - 1; (O !== 0 || R < y) && P !== -1; P--,
                R++)
                    O += a * I[P] >>> 0,
                    I[P] = O % 256 >>> 0,
                    O = O / 256 >>> 0;
                if (O !== 0)
                    throw new Error("Non-zero carry");
                y = R,
                w++
            }
            if (m[w] !== " ") {
                for (var _ = b - y; _ !== b && I[_] === 0; )
                    _++;
                for (var D = new Uint8Array(g + (b - _)), v = g; _ !== b; )
                    D[v++] = I[_++];
                return D
            }
        }
    }
    function f(m) {
        var w = p(m);
        if (w)
            return w;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: u,
        decodeUnsafe: p,
        decode: f
    }
}
var Im = Em
  , Nm = Im;
const Fl = t => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
        return t;
    if (t instanceof ArrayBuffer)
        return new Uint8Array(t);
    if (ArrayBuffer.isView(t))
        return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , Am = t => new TextEncoder().encode(t)
  , _m = t => new TextDecoder().decode(t);
class Sm {
    constructor(e, s, r) {
        this.name = e,
        this.prefix = s,
        this.baseEncode = r
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class Pm {
    constructor(e, s, r) {
        if (this.name = e,
        this.prefix = s,
        s.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = s.codePointAt(0),
        this.baseDecode = r
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
        return Wl(this, e)
    }
}
class km {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Wl(this, e)
    }
    decode(e) {
        const s = e[0]
          , r = this.decoders[s];
        if (r)
            return r.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Wl = (t, e) => new km({
    ...t.decoders || {
        [t.prefix]: t
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class Tm {
    constructor(e, s, r, i) {
        this.name = e,
        this.prefix = s,
        this.baseEncode = r,
        this.baseDecode = i,
        this.encoder = new Sm(e,s,r),
        this.decoder = new Pm(e,s,i)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const rn = ({name: t, prefix: e, encode: s, decode: r}) => new Tm(t,e,s,r)
  , Ci = ({prefix: t, name: e, alphabet: s}) => {
    const {encode: r, decode: i} = Nm(s, e);
    return rn({
        prefix: t,
        name: e,
        encode: r,
        decode: n => Fl(i(n))
    })
}
  , Om = (t, e, s, r) => {
    const i = {};
    for (let d = 0; d < e.length; ++d)
        i[e[d]] = d;
    let n = t.length;
    for (; t[n - 1] === "="; )
        --n;
    const o = new Uint8Array(n * s / 8 | 0);
    let a = 0
      , c = 0
      , l = 0;
    for (let d = 0; d < n; ++d) {
        const u = i[t[d]];
        if (u === void 0)
            throw new SyntaxError(`Non-${r} character`);
        c = c << s | u,
        a += s,
        a >= 8 && (a -= 8,
        o[l++] = 255 & c >> a)
    }
    if (a >= s || 255 & c << 8 - a)
        throw new SyntaxError("Unexpected end of data");
    return o
}
  , xm = (t, e, s) => {
    const r = e[e.length - 1] === "="
      , i = (1 << s) - 1;
    let n = ""
      , o = 0
      , a = 0;
    for (let c = 0; c < t.length; ++c)
        for (a = a << 8 | t[c],
        o += 8; o > s; )
            o -= s,
            n += e[i & a >> o];
    if (o && (n += e[i & a << s - o]),
    r)
        for (; n.length * s & 7; )
            n += "=";
    return n
}
  , Ge = ({name: t, prefix: e, bitsPerChar: s, alphabet: r}) => rn({
    prefix: e,
    name: t,
    encode(i) {
        return xm(i, r, s)
    },
    decode(i) {
        return Om(i, r, s, t)
    }
})
  , Rm = rn({
    prefix: "\0",
    name: "identity",
    encode: t => _m(t),
    decode: t => Am(t)
});
var $m = Object.freeze({
    __proto__: null,
    identity: Rm
});
const Um = Ge({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var Dm = Object.freeze({
    __proto__: null,
    base2: Um
});
const Lm = Ge({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var Mm = Object.freeze({
    __proto__: null,
    base8: Lm
});
const Bm = Ci({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var qm = Object.freeze({
    __proto__: null,
    base10: Bm
});
const jm = Ge({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , Fm = Ge({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var Wm = Object.freeze({
    __proto__: null,
    base16: jm,
    base16upper: Fm
});
const zm = Ge({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , Hm = Ge({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , Vm = Ge({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , Km = Ge({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , Gm = Ge({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Jm = Ge({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , Ym = Ge({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , Zm = Ge({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , Xm = Ge({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var Qm = Object.freeze({
    __proto__: null,
    base32: zm,
    base32upper: Hm,
    base32pad: Vm,
    base32padupper: Km,
    base32hex: Gm,
    base32hexupper: Jm,
    base32hexpad: Ym,
    base32hexpadupper: Zm,
    base32z: Xm
});
const ew = Ci({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , tw = Ci({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var sw = Object.freeze({
    __proto__: null,
    base36: ew,
    base36upper: tw
});
const rw = Ci({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , iw = Ci({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var nw = Object.freeze({
    __proto__: null,
    base58btc: rw,
    base58flickr: iw
});
const ow = Ge({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , aw = Ge({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , cw = Ge({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , lw = Ge({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var dw = Object.freeze({
    __proto__: null,
    base64: ow,
    base64pad: aw,
    base64url: cw,
    base64urlpad: lw
});
const zl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , uw = zl.reduce( (t, e, s) => (t[s] = e,
t), [])
  , hw = zl.reduce( (t, e, s) => (t[e.codePointAt(0)] = s,
t), []);
function pw(t) {
    return t.reduce( (e, s) => (e += uw[s],
    e), "")
}
function gw(t) {
    const e = [];
    for (const s of t) {
        const r = hw[s.codePointAt(0)];
        if (r === void 0)
            throw new Error(`Non-base256emoji character: ${s}`);
        e.push(r)
    }
    return new Uint8Array(e)
}
const fw = rn({
    prefix: "🚀",
    name: "base256emoji",
    encode: pw,
    decode: gw
});
var mw = Object.freeze({
    __proto__: null,
    base256emoji: fw
})
  , ww = Hl
  , Ka = 128
  , yw = -128
  , bw = Math.pow(2, 31);
function Hl(t, e, s) {
    e = e || [],
    s = s || 0;
    for (var r = s; t >= bw; )
        e[s++] = t & 255 | Ka,
        t /= 128;
    for (; t & yw; )
        e[s++] = t & 255 | Ka,
        t >>>= 7;
    return e[s] = t | 0,
    Hl.bytes = s - r + 1,
    e
}
var vw = io
  , Cw = 128
  , Ga = 127;
function io(t, r) {
    var s = 0, r = r || 0, i = 0, n = r, o, a = t.length;
    do {
        if (n >= a)
            throw io.bytes = 0,
            new RangeError("Could not decode varint");
        o = t[n++],
        s += i < 28 ? (o & Ga) << i : (o & Ga) * Math.pow(2, i),
        i += 7
    } while (o >= Cw);
    return io.bytes = n - r,
    s
}
var Ew = Math.pow(2, 7)
  , Iw = Math.pow(2, 14)
  , Nw = Math.pow(2, 21)
  , Aw = Math.pow(2, 28)
  , _w = Math.pow(2, 35)
  , Sw = Math.pow(2, 42)
  , Pw = Math.pow(2, 49)
  , kw = Math.pow(2, 56)
  , Tw = Math.pow(2, 63)
  , Ow = function(t) {
    return t < Ew ? 1 : t < Iw ? 2 : t < Nw ? 3 : t < Aw ? 4 : t < _w ? 5 : t < Sw ? 6 : t < Pw ? 7 : t < kw ? 8 : t < Tw ? 9 : 10
}
  , xw = {
    encode: ww,
    decode: vw,
    encodingLength: Ow
}
  , Vl = xw;
const Ja = (t, e, s=0) => (Vl.encode(t, e, s),
e)
  , Ya = t => Vl.encodingLength(t)
  , no = (t, e) => {
    const s = e.byteLength
      , r = Ya(t)
      , i = r + Ya(s)
      , n = new Uint8Array(i + s);
    return Ja(t, n, 0),
    Ja(s, n, r),
    n.set(e, i),
    new Rw(t,s,e,n)
}
;
class Rw {
    constructor(e, s, r, i) {
        this.code = e,
        this.size = s,
        this.digest = r,
        this.bytes = i
    }
}
const Kl = ({name: t, code: e, encode: s}) => new $w(t,e,s);
class $w {
    constructor(e, s, r) {
        this.name = e,
        this.code = s,
        this.encode = r
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const s = this.encode(e);
            return s instanceof Uint8Array ? no(this.code, s) : s.then(r => no(this.code, r))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const Gl = t => async e => new Uint8Array(await crypto.subtle.digest(t, e))
  , Uw = Kl({
    name: "sha2-256",
    code: 18,
    encode: Gl("SHA-256")
})
  , Dw = Kl({
    name: "sha2-512",
    code: 19,
    encode: Gl("SHA-512")
});
var Lw = Object.freeze({
    __proto__: null,
    sha256: Uw,
    sha512: Dw
});
const Jl = 0
  , Mw = "identity"
  , Yl = Fl
  , Bw = t => no(Jl, Yl(t))
  , qw = {
    code: Jl,
    name: Mw,
    encode: Yl,
    digest: Bw
};
var jw = Object.freeze({
    __proto__: null,
    identity: qw
});
new TextEncoder,
new TextDecoder;
const Za = {
    ...$m,
    ...Dm,
    ...Mm,
    ...qm,
    ...Wm,
    ...Qm,
    ...sw,
    ...nw,
    ...dw,
    ...mw
};
({
    ...Lw,
    ...jw
});
function Fw(t=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t)
}
function Zl(t, e, s, r) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: s
        },
        decoder: {
            decode: r
        }
    }
}
const Xa = Zl("utf8", "u", t => "u" + new TextDecoder("utf8").decode(t), t => new TextEncoder().encode(t.substring(1)))
  , An = Zl("ascii", "a", t => {
    let e = "a";
    for (let s = 0; s < t.length; s++)
        e += String.fromCharCode(t[s]);
    return e
}
, t => {
    t = t.substring(1);
    const e = Fw(t.length);
    for (let s = 0; s < t.length; s++)
        e[s] = t.charCodeAt(s);
    return e
}
)
  , Ww = {
    utf8: Xa,
    "utf-8": Xa,
    hex: Za.base16,
    latin1: An,
    ascii: An,
    binary: An,
    ...Za
};
function zw(t, e="utf8") {
    const s = Ww[e];
    if (!s)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t, "utf8") : s.decoder.decode(`${s.prefix}${t}`)
}
var Hw = Object.defineProperty
  , Vw = (t, e, s) => e in t ? Hw(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , qt = (t, e, s) => Vw(t, typeof e != "symbol" ? e + "" : e, s);
class Kw {
    constructor(e, s) {
        this.core = e,
        this.logger = s,
        qt(this, "keychain", new Map),
        qt(this, "name", Kf),
        qt(this, "version", Gf),
        qt(this, "initialized", !1),
        qt(this, "storagePrefix", Kt),
        qt(this, "init", async () => {
            if (!this.initialized) {
                const r = await this.getKeyChain();
                typeof r < "u" && (this.keychain = r),
                this.initialized = !0
            }
        }
        ),
        qt(this, "has", r => (this.isInitialized(),
        this.keychain.has(r))),
        qt(this, "set", async (r, i) => {
            this.isInitialized(),
            this.keychain.set(r, i),
            await this.persist()
        }
        ),
        qt(this, "get", r => {
            this.isInitialized();
            const i = this.keychain.get(r);
            if (typeof i > "u") {
                const {message: n} = $("NO_MATCHING_KEY", `${this.name}: ${r}`);
                throw new Error(n)
            }
            return i
        }
        ),
        qt(this, "del", async r => {
            this.isInitialized(),
            this.keychain.delete(r),
            await this.persist()
        }
        ),
        this.core = e,
        this.logger = st(s, this.name)
    }
    get context() {
        return bt(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, zn(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Hn(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Gw = Object.defineProperty
  , Jw = (t, e, s) => e in t ? Gw(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , He = (t, e, s) => Jw(t, typeof e != "symbol" ? e + "" : e, s);
class Yw {
    constructor(e, s, r) {
        this.core = e,
        this.logger = s,
        He(this, "name", Hf),
        He(this, "keychain"),
        He(this, "randomSessionIdentifier", to()),
        He(this, "initialized", !1),
        He(this, "init", async () => {
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ),
        He(this, "hasKeys", i => (this.isInitialized(),
        this.keychain.has(i))),
        He(this, "getClientId", async () => {
            this.isInitialized();
            const i = await this.getClientSeed()
              , n = Do(i);
            return Cd(n.publicKey)
        }
        ),
        He(this, "generateKeyPair", () => {
            this.isInitialized();
            const i = Mg();
            return this.setPrivateKey(i.publicKey, i.privateKey)
        }
        ),
        He(this, "signJWT", async i => {
            this.isInitialized();
            const n = await this.getClientSeed()
              , o = Do(n)
              , a = this.randomSessionIdentifier;
            return await Ed(a, i, Vf, o)
        }
        ),
        He(this, "generateSharedKey", (i, n, o) => {
            this.isInitialized();
            const a = this.getPrivateKey(i)
              , c = Bg(a, n);
            return this.setSymKey(c, o)
        }
        ),
        He(this, "setSymKey", async (i, n) => {
            this.isInitialized();
            const o = n || Mi(i);
            return await this.keychain.set(o, i),
            o
        }
        ),
        He(this, "deleteKeyPair", async i => {
            this.isInitialized(),
            await this.keychain.del(i)
        }
        ),
        He(this, "deleteSymKey", async i => {
            this.isInitialized(),
            await this.keychain.del(i)
        }
        ),
        He(this, "encode", async (i, n, o) => {
            this.isInitialized();
            const a = $l(o)
              , c = Id(n);
            if (xa(a))
                return Fg(c, o?.encoding);
            if (Oa(a)) {
                const p = a.senderPublicKey
                  , f = a.receiverPublicKey;
                i = await this.generateSharedKey(p, f)
            }
            const l = this.getSymKey(i)
              , {type: d, senderPublicKey: u} = a;
            return qg({
                type: d,
                symKey: l,
                message: c,
                senderPublicKey: u,
                encoding: o?.encoding
            })
        }
        ),
        He(this, "decode", async (i, n, o) => {
            this.isInitialized();
            const a = zg(n, o);
            if (xa(a)) {
                const c = Wg(n, o?.encoding);
                return Lo(c)
            }
            if (Oa(a)) {
                const c = a.receiverPublicKey
                  , l = a.senderPublicKey;
                i = await this.generateSharedKey(c, l)
            }
            try {
                const c = this.getSymKey(i)
                  , l = jg({
                    symKey: c,
                    encoded: n,
                    encoding: o?.encoding
                });
                return Lo(l)
            } catch (c) {
                this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`),
                this.logger.error(c)
            }
        }
        ),
        He(this, "getPayloadType", (i, n=Dt) => {
            const o = hi({
                encoded: i,
                encoding: n
            });
            return Ws(o.type)
        }
        ),
        He(this, "getPayloadSenderPublicKey", (i, n=Dt) => {
            const o = hi({
                encoded: i,
                encoding: n
            });
            return o.senderPublicKey ? dt(o.senderPublicKey, tt) : void 0
        }
        ),
        this.core = e,
        this.logger = st(s, this.name),
        this.keychain = r || new Kw(this.core,this.logger)
    }
    get context() {
        return bt(this.logger)
    }
    async setPrivateKey(e, s) {
        return await this.keychain.set(e, s),
        e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(za)
        } catch {
            e = to(),
            await this.keychain.set(za, e)
        }
        return zw(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var Zw = Object.defineProperty
  , Xw = Object.defineProperties
  , Qw = Object.getOwnPropertyDescriptors
  , Qa = Object.getOwnPropertySymbols
  , ey = Object.prototype.hasOwnProperty
  , ty = Object.prototype.propertyIsEnumerable
  , oo = (t, e, s) => e in t ? Zw(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , sy = (t, e) => {
    for (var s in e || (e = {}))
        ey.call(e, s) && oo(t, s, e[s]);
    if (Qa)
        for (var s of Qa(e))
            ty.call(e, s) && oo(t, s, e[s]);
    return t
}
  , ry = (t, e) => Xw(t, Qw(e))
  , ht = (t, e, s) => oo(t, typeof e != "symbol" ? e + "" : e, s);
class iy extends Eu {
    constructor(e, s) {
        super(e, s),
        this.logger = e,
        this.core = s,
        ht(this, "messages", new Map),
        ht(this, "messagesWithoutClientAck", new Map),
        ht(this, "name", Jf),
        ht(this, "version", Yf),
        ht(this, "initialized", !1),
        ht(this, "storagePrefix", Kt),
        ht(this, "init", async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const r = await this.getRelayerMessages();
                    typeof r < "u" && (this.messages = r);
                    const i = await this.getRelayerMessagesWithoutClientAck();
                    typeof i < "u" && (this.messagesWithoutClientAck = i),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (r) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(r)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ),
        ht(this, "set", async (r, i, n) => {
            this.isInitialized();
            const o = Ht(i);
            let a = this.messages.get(r);
            if (typeof a > "u" && (a = {}),
            typeof a[o] < "u")
                return o;
            if (a[o] = i,
            this.messages.set(r, a),
            n === Bi.inbound) {
                const c = this.messagesWithoutClientAck.get(r) || {};
                this.messagesWithoutClientAck.set(r, ry(sy({}, c), {
                    [o]: i
                }))
            }
            return await this.persist(),
            o
        }
        ),
        ht(this, "get", r => {
            this.isInitialized();
            let i = this.messages.get(r);
            return typeof i > "u" && (i = {}),
            i
        }
        ),
        ht(this, "getWithoutAck", r => {
            this.isInitialized();
            const i = {};
            for (const n of r) {
                const o = this.messagesWithoutClientAck.get(n) || {};
                i[n] = Object.values(o)
            }
            return i
        }
        ),
        ht(this, "has", (r, i) => {
            this.isInitialized();
            const n = this.get(r)
              , o = Ht(i);
            return typeof n[o] < "u"
        }
        ),
        ht(this, "ack", async (r, i) => {
            this.isInitialized();
            const n = this.messagesWithoutClientAck.get(r);
            if (typeof n > "u")
                return;
            const o = Ht(i);
            delete n[o],
            Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(r) : this.messagesWithoutClientAck.set(r, n),
            await this.persist()
        }
        ),
        ht(this, "del", async r => {
            this.isInitialized(),
            this.messages.delete(r),
            this.messagesWithoutClientAck.delete(r),
            await this.persist()
        }
        ),
        this.logger = st(e, this.name),
        this.core = s
    }
    get context() {
        return bt(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get storageKeyWithoutClientAck() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck"
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, zn(e))
    }
    async setRelayerMessagesWithoutClientAck(e) {
        await this.core.storage.setItem(this.storageKeyWithoutClientAck, zn(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Hn(e) : void 0
    }
    async getRelayerMessagesWithoutClientAck() {
        const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
        return typeof e < "u" ? Hn(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages),
        await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var ny = Object.defineProperty
  , oy = Object.defineProperties
  , ay = Object.getOwnPropertyDescriptors
  , ec = Object.getOwnPropertySymbols
  , cy = Object.prototype.hasOwnProperty
  , ly = Object.prototype.propertyIsEnumerable
  , ao = (t, e, s) => e in t ? ny(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Ti = (t, e) => {
    for (var s in e || (e = {}))
        cy.call(e, s) && ao(t, s, e[s]);
    if (ec)
        for (var s of ec(e))
            ly.call(e, s) && ao(t, s, e[s]);
    return t
}
  , _n = (t, e) => oy(t, ay(e))
  , xt = (t, e, s) => ao(t, typeof e != "symbol" ? e + "" : e, s);
class dy extends Iu {
    constructor(e, s) {
        super(e, s),
        this.relayer = e,
        this.logger = s,
        xt(this, "events", new zs.EventEmitter),
        xt(this, "name", Zf),
        xt(this, "queue", new Map),
        xt(this, "publishTimeout", U.toMiliseconds(U.ONE_MINUTE)),
        xt(this, "initialPublishTimeout", U.toMiliseconds(U.ONE_SECOND * 15)),
        xt(this, "needsTransportRestart", !1),
        xt(this, "publish", async (r, i, n) => {
            var o;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: r,
                    message: i,
                    opts: n
                }
            });
            const a = n?.ttl || Ha
              , c = Vi(n)
              , l = n?.prompt || !1
              , d = n?.tag || 0
              , u = n?.id || pr().toString()
              , p = {
                topic: r,
                message: i,
                opts: {
                    ttl: a,
                    relay: c,
                    prompt: l,
                    tag: d,
                    id: u,
                    attestation: n?.attestation,
                    tvf: n?.tvf
                }
            }
              , f = `Failed to publish payload, please try again. id:${u} tag:${d}`;
            try {
                const m = new Promise(async w => {
                    const g = ({id: b}) => {
                        p.opts.id === b && (this.removeRequestFromQueue(b),
                        this.relayer.events.removeListener(je.publish, g),
                        w(p))
                    }
                    ;
                    this.relayer.events.on(je.publish, g);
                    const y = ys(new Promise( (b, I) => {
                        this.rpcPublish({
                            topic: r,
                            message: i,
                            ttl: a,
                            prompt: l,
                            tag: d,
                            id: u,
                            attestation: n?.attestation,
                            tvf: n?.tvf
                        }).then(b).catch(O => {
                            this.logger.warn(O, O?.message),
                            I(O)
                        }
                        )
                    }
                    ), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u} tag:${d}`);
                    try {
                        await y,
                        this.events.removeListener(je.publish, g)
                    } catch (b) {
                        this.queue.set(u, _n(Ti({}, p), {
                            attempt: 1
                        })),
                        this.logger.warn(b, b?.message)
                    }
                }
                );
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: u,
                        topic: r,
                        message: i,
                        opts: n
                    }
                }),
                await ys(m, this.publishTimeout, f)
            } catch (m) {
                if (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(m),
                (o = n?.internal) != null && o.throwOnFailedPublish)
                    throw m
            } finally {
                this.queue.delete(u)
            }
        }
        ),
        xt(this, "on", (r, i) => {
            this.events.on(r, i)
        }
        ),
        xt(this, "once", (r, i) => {
            this.events.once(r, i)
        }
        ),
        xt(this, "off", (r, i) => {
            this.events.off(r, i)
        }
        ),
        xt(this, "removeListener", (r, i) => {
            this.events.removeListener(r, i)
        }
        ),
        this.relayer = e,
        this.logger = st(s, this.name),
        this.registerEventListeners()
    }
    get context() {
        return bt(this.logger)
    }
    async rpcPublish(e) {
        var s, r, i, n;
        const {topic: o, message: a, ttl: c=Ha, prompt: l, tag: d, id: u, attestation: p, tvf: f} = e
          , m = {
            method: Gr(Vi().protocol).publish,
            params: Ti({
                topic: o,
                message: a,
                ttl: c,
                prompt: l,
                tag: d,
                attestation: p
            }, f),
            id: u
        };
        Ke((s = m.params) == null ? void 0 : s.prompt) && ((r = m.params) == null || delete r.prompt),
        Ke((i = m.params) == null ? void 0 : i.tag) && ((n = m.params) == null || delete n.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: m
        });
        const w = await this.relayer.request(m);
        return this.relayer.events.emit(je.publish, e),
        this.logger.debug("Successfully Published Payload"),
        w
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach(async (e, s) => {
            const r = e.attempt + 1;
            this.queue.set(s, _n(Ti({}, e), {
                attempt: r
            }));
            const {topic: i, message: n, opts: o, attestation: a} = e;
            this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`),
            await this.rpcPublish(_n(Ti({}, e), {
                topic: i,
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
        this.relayer.core.heartbeat.on(Tr.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(je.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(je.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        }
        )
    }
}
var uy = Object.defineProperty
  , hy = (t, e, s) => e in t ? uy(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Zs = (t, e, s) => hy(t, typeof e != "symbol" ? e + "" : e, s);
class py {
    constructor() {
        Zs(this, "map", new Map),
        Zs(this, "set", (e, s) => {
            const r = this.get(e);
            this.exists(e, s) || this.map.set(e, [...r, s])
        }
        ),
        Zs(this, "get", e => this.map.get(e) || []),
        Zs(this, "exists", (e, s) => this.get(e).includes(s)),
        Zs(this, "delete", (e, s) => {
            if (typeof s > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e))
                return;
            const r = this.get(e);
            if (!this.exists(e, s))
                return;
            const i = r.filter(n => n !== s);
            if (!i.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, i)
        }
        ),
        Zs(this, "clear", () => {
            this.map.clear()
        }
        )
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var gy = Object.defineProperty
  , fy = Object.defineProperties
  , my = Object.getOwnPropertyDescriptors
  , tc = Object.getOwnPropertySymbols
  , wy = Object.prototype.hasOwnProperty
  , yy = Object.prototype.propertyIsEnumerable
  , co = (t, e, s) => e in t ? gy(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Wr = (t, e) => {
    for (var s in e || (e = {}))
        wy.call(e, s) && co(t, s, e[s]);
    if (tc)
        for (var s of tc(e))
            yy.call(e, s) && co(t, s, e[s]);
    return t
}
  , Sn = (t, e) => fy(t, my(e))
  , ye = (t, e, s) => co(t, typeof e != "symbol" ? e + "" : e, s);
class by extends _u {
    constructor(e, s) {
        super(e, s),
        this.relayer = e,
        this.logger = s,
        ye(this, "subscriptions", new Map),
        ye(this, "topicMap", new py),
        ye(this, "events", new zs.EventEmitter),
        ye(this, "name", im),
        ye(this, "version", nm),
        ye(this, "pending", new Map),
        ye(this, "cached", []),
        ye(this, "initialized", !1),
        ye(this, "storagePrefix", Kt),
        ye(this, "subscribeTimeout", U.toMiliseconds(U.ONE_MINUTE)),
        ye(this, "initialSubscribeTimeout", U.toMiliseconds(U.ONE_SECOND * 15)),
        ye(this, "clientId"),
        ye(this, "batchSubscribeTopicsLimit", 500),
        ye(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.restore()),
            this.initialized = !0
        }
        ),
        ye(this, "subscribe", async (r, i) => {
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: r,
                    opts: i
                }
            });
            try {
                const n = Vi(i)
                  , o = {
                    topic: r,
                    relay: n,
                    transportType: i?.transportType
                };
                this.pending.set(r, o);
                const a = await this.rpcSubscribe(r, n, i);
                return typeof a == "string" && (this.onSubscribe(a, o),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: r,
                        opts: i
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
        ye(this, "unsubscribe", async (r, i) => {
            this.isInitialized(),
            typeof i?.id < "u" ? await this.unsubscribeById(r, i.id, i) : await this.unsubscribeByTopic(r, i)
        }
        ),
        ye(this, "isSubscribed", r => new Promise(i => {
            i(this.topicMap.topics.includes(r))
        }
        )),
        ye(this, "isKnownTopic", r => new Promise(i => {
            i(this.topicMap.topics.includes(r) || this.pending.has(r) || this.cached.some(n => n.topic === r))
        }
        )),
        ye(this, "on", (r, i) => {
            this.events.on(r, i)
        }
        ),
        ye(this, "once", (r, i) => {
            this.events.once(r, i)
        }
        ),
        ye(this, "off", (r, i) => {
            this.events.off(r, i)
        }
        ),
        ye(this, "removeListener", (r, i) => {
            this.events.removeListener(r, i)
        }
        ),
        ye(this, "start", async () => {
            await this.onConnect()
        }
        ),
        ye(this, "stop", async () => {
            await this.onDisconnect()
        }
        ),
        ye(this, "restart", async () => {
            await this.restore(),
            await this.onRestart()
        }
        ),
        ye(this, "checkPending", async () => {
            if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected))
                return;
            const r = [];
            this.pending.forEach(i => {
                r.push(i)
            }
            ),
            await this.batchSubscribe(r)
        }
        ),
        ye(this, "registerEventListeners", () => {
            this.relayer.core.heartbeat.on(Tr.pulse, async () => {
                await this.checkPending()
            }
            ),
            this.events.on(pt.created, async r => {
                const i = pt.created;
                this.logger.info(`Emitting ${i}`),
                this.logger.debug({
                    type: "event",
                    event: i,
                    data: r
                }),
                await this.persist()
            }
            ),
            this.events.on(pt.deleted, async r => {
                const i = pt.deleted;
                this.logger.info(`Emitting ${i}`),
                this.logger.debug({
                    type: "event",
                    event: i,
                    data: r
                }),
                await this.persist()
            }
            )
        }
        ),
        this.relayer = e,
        this.logger = st(s, this.name),
        this.clientId = ""
    }
    get context() {
        return bt(this.logger)
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
    hasSubscription(e, s) {
        let r = !1;
        try {
            r = this.getSubscription(e).topic === s
        } catch {}
        return r
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
    async unsubscribeByTopic(e, s) {
        const r = this.topicMap.get(e);
        await Promise.all(r.map(async i => await this.unsubscribeById(e, i, s)))
    }
    async unsubscribeById(e, s, r) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: s,
                opts: r
            }
        });
        try {
            const i = Vi(r);
            await this.restartToComplete({
                topic: e,
                id: s,
                relay: i
            }),
            await this.rpcUnsubscribe(e, s, i);
            const n = we("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, s, n),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: s,
                    opts: r
                }
            })
        } catch (i) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(i),
            i
        }
    }
    async rpcSubscribe(e, s, r) {
        var i;
        (!r || r?.transportType === Ae.relay) && await this.restartToComplete({
            topic: e,
            id: e,
            relay: s
        });
        const n = {
            method: Gr(s.protocol).subscribe,
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
        const o = (i = r?.internal) == null ? void 0 : i.throwOnFailedPublish;
        try {
            const a = await this.getSubscriptionId(e);
            if (r?.transportType === Ae.link_mode)
                return setTimeout( () => {
                    (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch(d => this.logger.warn(d))
                }
                , U.toMiliseconds(U.ONE_SECOND)),
                a;
            const c = new Promise(async d => {
                const u = p => {
                    p.topic === e && (this.events.removeListener(pt.created, u),
                    d(p.id))
                }
                ;
                this.events.on(pt.created, u);
                try {
                    const p = await ys(new Promise( (f, m) => {
                        this.relayer.request(n).catch(w => {
                            this.logger.warn(w, w?.message),
                            m(w)
                        }
                        ).then(f)
                    }
                    ), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
                    this.events.removeListener(pt.created, u),
                    d(p)
                } catch {}
            }
            )
              , l = await ys(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
            if (!l && o)
                throw new Error(`Subscribing to ${e} failed, please try again`);
            return l ? a : null
        } catch (a) {
            if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(je.connection_stalled),
            o)
                throw a
        }
        return null
    }
    async rpcBatchSubscribe(e) {
        if (!e.length)
            return;
        const s = e[0].relay
          , r = {
            method: Gr(s.protocol).batchSubscribe,
            params: {
                topics: e.map(i => i.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        });
        try {
            await await ys(new Promise(i => {
                this.relayer.request(r).catch(n => this.logger.warn(n)).then(i)
            }
            ), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again")
        } catch {
            this.relayer.events.emit(je.connection_stalled)
        }
    }
    async rpcBatchFetchMessages(e) {
        if (!e.length)
            return;
        const s = e[0].relay
          , r = {
            method: Gr(s.protocol).batchFetchMessages,
            params: {
                topics: e.map(n => n.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        });
        let i;
        try {
            i = await await ys(new Promise( (n, o) => {
                this.relayer.request(r).catch(a => {
                    this.logger.warn(a),
                    o(a)
                }
                ).then(n)
            }
            ), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again")
        } catch {
            this.relayer.events.emit(je.connection_stalled)
        }
        return i
    }
    rpcUnsubscribe(e, s, r) {
        const i = {
            method: Gr(r.protocol).unsubscribe,
            params: {
                topic: e,
                id: s
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        }),
        this.relayer.request(i)
    }
    onSubscribe(e, s) {
        this.setSubscription(e, Sn(Wr({}, s), {
            id: e
        })),
        this.pending.delete(s.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(s => {
            this.setSubscription(s.id, Wr({}, s)),
            this.pending.delete(s.topic)
        }
        )
    }
    async onUnsubscribe(e, s, r) {
        this.events.removeAllListeners(s),
        this.hasSubscription(s, e) && this.deleteSubscription(s, r),
        await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, s) {
        this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: s
        }),
        this.addSubscription(e, s)
    }
    addSubscription(e, s) {
        this.subscriptions.set(e, Wr({}, s)),
        this.topicMap.set(s.topic, e),
        this.events.emit(pt.created, s)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const s = this.subscriptions.get(e);
        if (!s) {
            const {message: r} = $("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(r)
        }
        return s
    }
    deleteSubscription(e, s) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: s
        });
        const r = this.getSubscription(e);
        this.subscriptions.delete(e),
        this.topicMap.delete(r.topic, e),
        this.events.emit(pt.deleted, Sn(Wr({}, r), {
            reason: s
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(pt.sync)
    }
    async onRestart() {
        if (this.cached.length) {
            const e = [...this.cached]
              , s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < s; r++) {
                const i = e.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(i)
            }
        }
        this.events.emit(pt.resubscribed)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length)
                return;
            if (this.subscriptions.size) {
                const {message: s} = $("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(s),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(s)
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
        this.onBatchSubscribe(await Promise.all(e.map(async s => Sn(Wr({}, s), {
            id: await this.getSubscriptionId(s.topic)
        })))))
    }
    async batchFetchMessages(e) {
        if (!e.length)
            return;
        this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
        const s = await this.rpcBatchFetchMessages(e);
        s && s.messages && (await Ah(U.toMiliseconds(U.ONE_SECOND)),
        await this.relayer.handleBatchMessageEvents(s.messages))
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
            const {message: e} = $("NOT_INITIALIZED", this.name);
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
        return Ht(e + await this.getClientId())
    }
}
var vy = Object.defineProperty
  , sc = Object.getOwnPropertySymbols
  , Cy = Object.prototype.hasOwnProperty
  , Ey = Object.prototype.propertyIsEnumerable
  , lo = (t, e, s) => e in t ? vy(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , rc = (t, e) => {
    for (var s in e || (e = {}))
        Cy.call(e, s) && lo(t, s, e[s]);
    if (sc)
        for (var s of sc(e))
            Ey.call(e, s) && lo(t, s, e[s]);
    return t
}
  , de = (t, e, s) => lo(t, typeof e != "symbol" ? e + "" : e, s);
class Iy extends Nu {
    constructor(e) {
        super(e),
        de(this, "protocol", "wc"),
        de(this, "version", 2),
        de(this, "core"),
        de(this, "logger"),
        de(this, "events", new zs.EventEmitter),
        de(this, "provider"),
        de(this, "messages"),
        de(this, "subscriber"),
        de(this, "publisher"),
        de(this, "name", Qf),
        de(this, "transportExplicitlyClosed", !1),
        de(this, "initialized", !1),
        de(this, "connectionAttemptInProgress", !1),
        de(this, "relayUrl"),
        de(this, "projectId"),
        de(this, "packageName"),
        de(this, "bundleId"),
        de(this, "hasExperiencedNetworkDisruption", !1),
        de(this, "pingTimeout"),
        de(this, "heartBeatTimeout", U.toMiliseconds(U.THIRTY_SECONDS + U.FIVE_SECONDS)),
        de(this, "reconnectTimeout"),
        de(this, "connectPromise"),
        de(this, "reconnectInProgress", !1),
        de(this, "requestsInFlight", []),
        de(this, "connectTimeout", U.toMiliseconds(U.ONE_SECOND * 15)),
        de(this, "request", async s => {
            var r, i;
            this.logger.debug("Publishing Request Payload");
            const n = s.id || pr().toString();
            await this.toEstablishConnection();
            try {
                this.logger.trace({
                    id: n,
                    method: s.method,
                    topic: (r = s.params) == null ? void 0 : r.topic
                }, "relayer.request - publishing...");
                const o = `${n}:${((i = s.params) == null ? void 0 : i.tag) || ""}`;
                this.requestsInFlight.push(o);
                const a = await this.provider.request(s);
                return this.requestsInFlight = this.requestsInFlight.filter(c => c !== o),
                a
            } catch (o) {
                throw this.logger.debug(`Failed to Publish Request: ${n}`),
                o
            }
        }
        ),
        de(this, "resetPingTimeout", () => {
            zi() && (clearTimeout(this.pingTimeout),
            this.pingTimeout = setTimeout( () => {
                var s, r, i, n;
                try {
                    this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."),
                    (n = (i = (r = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || n.call(i)
                } catch (o) {
                    this.logger.warn(o, o?.message)
                }
            }
            , this.heartBeatTimeout))
        }
        ),
        de(this, "onPayloadHandler", s => {
            this.onProviderPayload(s),
            this.resetPingTimeout()
        }
        ),
        de(this, "onConnectHandler", () => {
            this.logger.warn({}, "Relayer connected 🛜"),
            this.startPingTimeout(),
            this.events.emit(je.connect)
        }
        ),
        de(this, "onDisconnectHandler", () => {
            this.logger.warn({}, "Relayer disconnected 🛑"),
            this.requestsInFlight = [],
            this.onProviderDisconnect()
        }
        ),
        de(this, "onProviderErrorHandler", s => {
            this.logger.fatal(`Fatal socket error: ${s.message}`),
            this.events.emit(je.error, s),
            this.logger.fatal("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ),
        de(this, "registerProviderListeners", () => {
            this.provider.on(It.payload, this.onPayloadHandler),
            this.provider.on(It.connect, this.onConnectHandler),
            this.provider.on(It.disconnect, this.onDisconnectHandler),
            this.provider.on(It.error, this.onProviderErrorHandler)
        }
        ),
        this.core = e.core,
        this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? st(e.logger, this.name) : bo(pi({
            level: e.logger || Xf
        })),
        this.messages = new iy(this.logger,e.core),
        this.subscriber = new by(this,this.logger),
        this.publisher = new dy(this,this.logger),
        this.relayUrl = e?.relayUrl || ql,
        this.projectId = e.projectId,
        lh() ? this.packageName = ta() : dh() && (this.bundleId = ta()),
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
        return bt(this.logger)
    }
    get connected() {
        var e, s, r;
        return ((r = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : r.readyState) === 1 || !1
    }
    get connecting() {
        var e, s, r;
        return ((r = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : r.readyState) === 0 || this.connectPromise !== void 0 || !1
    }
    async publish(e, s, r) {
        this.isInitialized(),
        await this.publisher.publish(e, s, r),
        await this.recordMessageEvent({
            topic: e,
            message: s,
            publishedAt: Date.now(),
            transportType: Ae.relay
        }, Bi.outbound)
    }
    async subscribe(e, s) {
        var r, i, n;
        this.isInitialized(),
        (!(s != null && s.transportType) || s?.transportType === "relay") && await this.toEstablishConnection();
        const o = typeof ((r = s?.internal) == null ? void 0 : r.throwOnFailedPublish) > "u" ? !0 : (i = s?.internal) == null ? void 0 : i.throwOnFailedPublish;
        let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
        const l = d => {
            d.topic === e && (this.subscriber.off(pt.created, l),
            c())
        }
        ;
        return await Promise.all([new Promise(d => {
            c = d,
            this.subscriber.on(pt.created, l)
        }
        ), new Promise(async (d, u) => {
            a = await this.subscriber.subscribe(e, rc({
                internal: {
                    throwOnFailedPublish: o
                }
            }, s)).catch(p => {
                o && u(p)
            }
            ) || a,
            d()
        }
        )]),
        a
    }
    async unsubscribe(e, s) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(e, s)
    }
    on(e, s) {
        this.events.on(e, s)
    }
    once(e, s) {
        this.events.once(e, s)
    }
    off(e, s) {
        this.events.off(e, s)
    }
    removeListener(e, s) {
        this.events.removeListener(e, s)
    }
    async transportDisconnect() {
        this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await ys(this.provider.disconnect(), 2e3, "provider.disconnect()").catch( () => this.onProviderDisconnect()) : this.onProviderDisconnect()
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
        this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (s, r) => {
            await this.connect(e).then(s).catch(r).finally( () => {
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
        if (!await Wa())
            throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    async handleBatchMessageEvents(e) {
        if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return
        }
        const s = e.sort( (r, i) => r.publishedAt - i.publishedAt);
        this.logger.debug(`Batch of ${s.length} message events sorted`);
        for (const r of s)
            try {
                await this.onMessageEvent(r)
            } catch (i) {
                this.logger.warn(i, "Error while processing batch message event: " + i?.message)
            }
        this.logger.trace(`Batch of ${s.length} message events processed`)
    }
    async onLinkMessageEvent(e, s) {
        const {topic: r} = e;
        if (!s.sessionExists) {
            const i = De(U.FIVE_MINUTES)
              , n = {
                topic: r,
                expiry: i,
                relay: {
                    protocol: "irn"
                },
                active: !1
            };
            await this.core.pairing.pairings.set(r, n)
        }
        this.events.emit(je.message, e),
        await this.recordMessageEvent(e, Bi.inbound)
    }
    async connect(e) {
        await this.confirmOnlineStateOrThrow(),
        e && e !== this.relayUrl && (this.relayUrl = e,
        await this.transportDisconnect()),
        this.connectionAttemptInProgress = !0,
        this.transportExplicitlyClosed = !1;
        let s = 1;
        for (; s < 6; ) {
            try {
                if (this.transportExplicitlyClosed)
                    break;
                this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${s}...`),
                await this.createProvider(),
                await new Promise(async (r, i) => {
                    const n = () => {
                        i(new Error("Connection interrupted while trying to subscribe"))
                    }
                    ;
                    this.provider.once(It.disconnect, n),
                    await ys(new Promise( (o, a) => {
                        this.provider.connect().then(o).catch(a)
                    }
                    ), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(o => {
                        i(o)
                    }
                    ).finally( () => {
                        this.provider.off(It.disconnect, n),
                        clearTimeout(this.reconnectTimeout)
                    }
                    ),
                    await new Promise(async (o, a) => {
                        const c = () => {
                            a(new Error("Connection interrupted while trying to subscribe"))
                        }
                        ;
                        this.provider.once(It.disconnect, c),
                        await this.subscriber.start().then(o).catch(a).finally( () => {
                            this.provider.off(It.disconnect, c)
                        }
                        )
                    }
                    ),
                    this.hasExperiencedNetworkDisruption = !1,
                    r()
                }
                )
            } catch (r) {
                await this.subscriber.stop();
                const i = r;
                this.logger.warn({}, i.message),
                this.hasExperiencedNetworkDisruption = !0
            } finally {
                this.connectionAttemptInProgress = !1
            }
            if (this.connected) {
                this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${s}`);
                break
            }
            await new Promise(r => setTimeout(r, U.toMiliseconds(s * 1))),
            s++
        }
    }
    startPingTimeout() {
        var e, s, r, i, n;
        if (zi())
            try {
                (s = (e = this.provider) == null ? void 0 : e.connection) != null && s.socket && ((n = (i = (r = this.provider) == null ? void 0 : r.connection) == null ? void 0 : i.socket) == null || n.on("ping", () => {
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
        this.provider = new St(new vd(fh({
            sdkVersion: ro,
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
    async recordMessageEvent(e, s) {
        const {topic: r, message: i} = e;
        await this.messages.set(r, i, s)
    }
    async shouldIgnoreMessageEvent(e) {
        const {topic: s, message: r} = e;
        if (!r || r.length === 0)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`),
            !0;
        if (!await this.subscriber.isKnownTopic(s))
            return this.logger.warn(`Ignoring message for unknown topic ${s}`),
            !0;
        const i = this.messages.has(s, r);
        return i && this.logger.warn(`Ignoring duplicate message: ${r}`),
        i
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }),
        vo(e)) {
            if (!e.method.endsWith(em))
                return;
            const s = e.params
              , {topic: r, message: i, publishedAt: n, attestation: o} = s.data
              , a = {
                topic: r,
                message: i,
                publishedAt: n,
                transportType: Ae.relay,
                attestation: o
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(rc({
                type: "event",
                event: s.id
            }, a)),
            this.events.emit(s.id, a),
            await this.acknowledgePayload(e),
            await this.onMessageEvent(a)
        } else
            Co(e) && this.events.emit(je.message_ack, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Bi.inbound),
        this.events.emit(je.message, e))
    }
    async acknowledgePayload(e) {
        const s = Yi(e.id, !0);
        await this.provider.connection.send(s)
    }
    unregisterProviderListeners() {
        this.provider.off(It.payload, this.onPayloadHandler),
        this.provider.off(It.connect, this.onConnectHandler),
        this.provider.off(It.disconnect, this.onDisconnectHandler),
        this.provider.off(It.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout)
    }
    async registerEventListeners() {
        let e = await Wa();
        Mf(async s => {
            e !== s && (e = s,
            s ? await this.transportOpen().catch(r => this.logger.error(r, r?.message)) : (this.hasExperiencedNetworkDisruption = !0,
            await this.transportDisconnect(),
            this.transportExplicitlyClosed = !1))
        }
        ),
        this.core.heartbeat.on(Tr.pulse, async () => {
            if (!this.transportExplicitlyClosed && !this.connected && jf())
                try {
                    await this.confirmOnlineStateOrThrow(),
                    await this.transportOpen()
                } catch (s) {
                    this.logger.warn(s, s?.message)
                }
        }
        )
    }
    async onProviderDisconnect() {
        clearTimeout(this.pingTimeout),
        this.events.emit(je.disconnect),
        this.connectionAttemptInProgress = !1,
        !this.reconnectInProgress && (this.reconnectInProgress = !0,
        await this.subscriber.stop(),
        this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
            await this.transportOpen().catch(e => this.logger.error(e, e?.message)),
            this.reconnectTimeout = void 0,
            this.reconnectInProgress = !1
        }
        , U.toMiliseconds(tm)))))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
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
function Ny() {}
function ic(t) {
    if (!t || typeof t != "object")
        return !1;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1
}
function nc(t) {
    return Object.getOwnPropertySymbols(t).filter(e => Object.prototype.propertyIsEnumerable.call(t, e))
}
function oc(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t)
}
const Ay = "[object RegExp]"
  , _y = "[object String]"
  , Sy = "[object Number]"
  , Py = "[object Boolean]"
  , ac = "[object Arguments]"
  , ky = "[object Symbol]"
  , Ty = "[object Date]"
  , Oy = "[object Map]"
  , xy = "[object Set]"
  , Ry = "[object Array]"
  , $y = "[object Function]"
  , Uy = "[object ArrayBuffer]"
  , Pn = "[object Object]"
  , Dy = "[object Error]"
  , Ly = "[object DataView]"
  , My = "[object Uint8Array]"
  , By = "[object Uint8ClampedArray]"
  , qy = "[object Uint16Array]"
  , jy = "[object Uint32Array]"
  , Fy = "[object BigUint64Array]"
  , Wy = "[object Int8Array]"
  , zy = "[object Int16Array]"
  , Hy = "[object Int32Array]"
  , Vy = "[object BigInt64Array]"
  , Ky = "[object Float32Array]"
  , Gy = "[object Float64Array]";
function Jy(t, e) {
    return t === e || Number.isNaN(t) && Number.isNaN(e)
}
function Yy(t, e, s) {
    return Jr(t, e, void 0, void 0, void 0, void 0, s)
}
function Jr(t, e, s, r, i, n, o) {
    const a = o(t, e, s, r, i, n);
    if (a !== void 0)
        return a;
    if (typeof t == typeof e)
        switch (typeof t) {
        case "bigint":
        case "string":
        case "boolean":
        case "symbol":
        case "undefined":
            return t === e;
        case "number":
            return t === e || Object.is(t, e);
        case "function":
            return t === e;
        case "object":
            return ii(t, e, n, o)
        }
    return ii(t, e, n, o)
}
function ii(t, e, s, r) {
    if (Object.is(t, e))
        return !0;
    let i = oc(t)
      , n = oc(e);
    if (i === ac && (i = Pn),
    n === ac && (n = Pn),
    i !== n)
        return !1;
    switch (i) {
    case _y:
        return t.toString() === e.toString();
    case Sy:
        {
            const c = t.valueOf()
              , l = e.valueOf();
            return Jy(c, l)
        }
    case Py:
    case Ty:
    case ky:
        return Object.is(t.valueOf(), e.valueOf());
    case Ay:
        return t.source === e.source && t.flags === e.flags;
    case $y:
        return t === e
    }
    s = s ?? new Map;
    const o = s.get(t)
      , a = s.get(e);
    if (o != null && a != null)
        return o === e;
    s.set(t, e),
    s.set(e, t);
    try {
        switch (i) {
        case Oy:
            {
                if (t.size !== e.size)
                    return !1;
                for (const [c,l] of t.entries())
                    if (!e.has(c) || !Jr(l, e.get(c), c, t, e, s, r))
                        return !1;
                return !0
            }
        case xy:
            {
                if (t.size !== e.size)
                    return !1;
                const c = Array.from(t.values())
                  , l = Array.from(e.values());
                for (let d = 0; d < c.length; d++) {
                    const u = c[d]
                      , p = l.findIndex(f => Jr(u, f, void 0, t, e, s, r));
                    if (p === -1)
                        return !1;
                    l.splice(p, 1)
                }
                return !0
            }
        case Ry:
        case My:
        case By:
        case qy:
        case jy:
        case Fy:
        case Wy:
        case zy:
        case Hy:
        case Vy:
        case Ky:
        case Gy:
            {
                if (typeof Ze < "u" && Ze.isBuffer(t) !== Ze.isBuffer(e) || t.length !== e.length)
                    return !1;
                for (let c = 0; c < t.length; c++)
                    if (!Jr(t[c], e[c], c, t, e, s, r))
                        return !1;
                return !0
            }
        case Uy:
            return t.byteLength !== e.byteLength ? !1 : ii(new Uint8Array(t), new Uint8Array(e), s, r);
        case Ly:
            return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : ii(new Uint8Array(t), new Uint8Array(e), s, r);
        case Dy:
            return t.name === e.name && t.message === e.message;
        case Pn:
            {
                if (!(ii(t.constructor, e.constructor, s, r) || ic(t) && ic(e)))
                    return !1;
                const c = [...Object.keys(t), ...nc(t)]
                  , l = [...Object.keys(e), ...nc(e)];
                if (c.length !== l.length)
                    return !1;
                for (let d = 0; d < c.length; d++) {
                    const u = c[d]
                      , p = t[u];
                    if (!Object.hasOwn(e, u))
                        return !1;
                    const f = e[u];
                    if (!Jr(p, f, u, t, e, s, r))
                        return !1
                }
                return !0
            }
        default:
            return !1
        }
    } finally {
        s.delete(t),
        s.delete(e)
    }
}
function Zy(t, e) {
    return Yy(t, e, Ny)
}
var Xy = Object.defineProperty
  , cc = Object.getOwnPropertySymbols
  , Qy = Object.prototype.hasOwnProperty
  , eb = Object.prototype.propertyIsEnumerable
  , uo = (t, e, s) => e in t ? Xy(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , lc = (t, e) => {
    for (var s in e || (e = {}))
        Qy.call(e, s) && uo(t, s, e[s]);
    if (cc)
        for (var s of cc(e))
            eb.call(e, s) && uo(t, s, e[s]);
    return t
}
  , ot = (t, e, s) => uo(t, typeof e != "symbol" ? e + "" : e, s);
class Hs extends Au {
    constructor(e, s, r, i=Kt, n=void 0) {
        super(e, s, r, i),
        this.core = e,
        this.logger = s,
        this.name = r,
        ot(this, "map", new Map),
        ot(this, "version", sm),
        ot(this, "cached", []),
        ot(this, "initialized", !1),
        ot(this, "getKey"),
        ot(this, "storagePrefix", Kt),
        ot(this, "recentlyDeleted", []),
        ot(this, "recentlyDeletedLimit", 200),
        ot(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(o => {
                this.getKey && o !== null && !Ke(o) ? this.map.set(this.getKey(o), o) : ff(o) ? this.map.set(o.id, o) : mf(o) && this.map.set(o.topic, o)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ),
        ot(this, "set", async (o, a) => {
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
        ot(this, "get", o => (this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: o
        }),
        this.getData(o))),
        ot(this, "getAll", o => (this.isInitialized(),
        o ? this.values.filter(a => Object.keys(o).every(c => Zy(a[c], o[c]))) : this.values)),
        ot(this, "update", async (o, a) => {
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a
            });
            const c = lc(lc({}, this.getData(o)), a);
            this.map.set(o, c),
            await this.persist()
        }
        ),
        ot(this, "delete", async (o, a) => {
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
        this.logger = st(s, this.name),
        this.storagePrefix = i,
        this.getKey = n
    }
    get context() {
        return bt(this.logger)
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
        const s = this.map.get(e);
        if (!s) {
            if (this.recentlyDeleted.includes(e)) {
                const {message: i} = $("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(i),
                new Error(i)
            }
            const {message: r} = $("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(r),
            new Error(r)
        }
        return s
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
                const {message: s} = $("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(s),
                new Error(s)
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
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var tb = Object.defineProperty
  , sb = (t, e, s) => e in t ? tb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , ne = (t, e, s) => sb(t, typeof e != "symbol" ? e + "" : e, s);
class rb {
    constructor(e, s) {
        this.core = e,
        this.logger = s,
        ne(this, "name", om),
        ne(this, "version", am),
        ne(this, "events", new Eo),
        ne(this, "pairings"),
        ne(this, "initialized", !1),
        ne(this, "storagePrefix", Kt),
        ne(this, "ignoredPayloadTypes", [ns]),
        ne(this, "registeredMethods", []),
        ne(this, "init", async () => {
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ),
        ne(this, "register", ({methods: r}) => {
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...r])]
        }
        ),
        ne(this, "create", async r => {
            this.isInitialized();
            const i = to()
              , n = await this.core.crypto.setSymKey(i)
              , o = De(U.FIVE_MINUTES)
              , a = {
                protocol: Bl
            }
              , c = {
                topic: n,
                expiry: o,
                relay: a,
                active: !1,
                methods: r?.methods
            }
              , l = $a({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: n,
                symKey: i,
                relay: a,
                expiryTimestamp: o,
                methods: r?.methods
            });
            return this.events.emit($s.create, c),
            this.core.expirer.set(n, o),
            await this.pairings.set(n, c),
            await this.core.relayer.subscribe(n, {
                transportType: r?.transportType
            }),
            {
                topic: n,
                uri: l
            }
        }
        ),
        ne(this, "pair", async r => {
            this.isInitialized();
            const i = this.core.eventClient.createEvent({
                properties: {
                    topic: r?.uri,
                    trace: [Ft.pairing_started]
                }
            });
            this.isValidPair(r, i);
            const {topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: l} = Ra(r.uri);
            i.props.properties.topic = n,
            i.addTrace(Ft.pairing_uri_validation_success),
            i.addTrace(Ft.pairing_uri_not_expired);
            let d;
            if (this.pairings.keys.includes(n)) {
                if (d = this.pairings.get(n),
                i.addTrace(Ft.existing_pairing),
                d.active)
                    throw i.setError(ts.active_pairing_already_exists),
                    new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
                i.addTrace(Ft.pairing_not_expired)
            }
            const u = c || De(U.FIVE_MINUTES)
              , p = {
                topic: n,
                relay: a,
                expiry: u,
                active: !1,
                methods: l
            };
            this.core.expirer.set(n, u),
            await this.pairings.set(n, p),
            i.addTrace(Ft.store_new_pairing),
            r.activatePairing && await this.activate({
                topic: n
            }),
            this.events.emit($s.create, p),
            i.addTrace(Ft.emit_inactive_pairing),
            this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n),
            i.addTrace(Ft.subscribing_pairing_topic);
            try {
                await this.core.relayer.confirmOnlineStateOrThrow()
            } catch {
                i.setError(ts.no_internet_connection)
            }
            try {
                await this.core.relayer.subscribe(n, {
                    relay: a
                })
            } catch (f) {
                throw i.setError(ts.subscribe_pairing_topic_failure),
                f
            }
            return i.addTrace(Ft.subscribe_pairing_topic_success),
            p
        }
        ),
        ne(this, "activate", async ({topic: r}) => {
            this.isInitialized();
            const i = De(U.FIVE_MINUTES);
            this.core.expirer.set(r, i),
            await this.pairings.update(r, {
                active: !0,
                expiry: i
            })
        }
        ),
        ne(this, "ping", async r => {
            this.isInitialized(),
            await this.isValidPing(r),
            this.logger.warn("ping() is deprecated and will be removed in the next major release.");
            const {topic: i} = r;
            if (this.pairings.keys.includes(i)) {
                const n = await this.sendRequest(i, "wc_pairingPing", {})
                  , {done: o, resolve: a, reject: c} = Os();
                this.events.once(ge("pairing_ping", n), ({error: l}) => {
                    l ? c(l) : a()
                }
                ),
                await o()
            }
        }
        ),
        ne(this, "updateExpiry", async ({topic: r, expiry: i}) => {
            this.isInitialized(),
            await this.pairings.update(r, {
                expiry: i
            })
        }
        ),
        ne(this, "updateMetadata", async ({topic: r, metadata: i}) => {
            this.isInitialized(),
            await this.pairings.update(r, {
                peerMetadata: i
            })
        }
        ),
        ne(this, "getPairings", () => (this.isInitialized(),
        this.pairings.values)),
        ne(this, "disconnect", async r => {
            this.isInitialized(),
            await this.isValidDisconnect(r);
            const {topic: i} = r;
            this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", we("USER_DISCONNECTED")),
            await this.deletePairing(i))
        }
        ),
        ne(this, "formatUriFromPairing", r => {
            this.isInitialized();
            const {topic: i, relay: n, expiry: o, methods: a} = r
              , c = this.core.crypto.keychain.get(i);
            return $a({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: i,
                symKey: c,
                relay: n,
                expiryTimestamp: o,
                methods: a
            })
        }
        ),
        ne(this, "sendRequest", async (r, i, n) => {
            const o = Ds(i, n)
              , a = await this.core.crypto.encode(r, o)
              , c = jr[i].req;
            return this.core.history.set(r, o),
            this.core.relayer.publish(r, a, c),
            o.id
        }
        ),
        ne(this, "sendResult", async (r, i, n) => {
            const o = Yi(r, n)
              , a = await this.core.crypto.encode(i, o)
              , c = (await this.core.history.get(i, r)).request.method
              , l = jr[c].res;
            await this.core.relayer.publish(i, a, l),
            await this.core.history.resolve(o)
        }
        ),
        ne(this, "sendError", async (r, i, n) => {
            const o = Lc(r, n)
              , a = await this.core.crypto.encode(i, o)
              , c = (await this.core.history.get(i, r)).request.method
              , l = jr[c] ? jr[c].res : jr.unregistered_method.res;
            await this.core.relayer.publish(i, a, l),
            await this.core.history.resolve(o)
        }
        ),
        ne(this, "deletePairing", async (r, i) => {
            await this.core.relayer.unsubscribe(r),
            await Promise.all([this.pairings.delete(r, we("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(r), i ? Promise.resolve() : this.core.expirer.del(r)])
        }
        ),
        ne(this, "cleanup", async () => {
            const r = this.pairings.getAll().filter(i => fs(i.expiry));
            await Promise.all(r.map(i => this.deletePairing(i.topic)))
        }
        ),
        ne(this, "onRelayEventRequest", async r => {
            const {topic: i, payload: n} = r;
            switch (n.method) {
            case "wc_pairingPing":
                return await this.onPairingPingRequest(i, n);
            case "wc_pairingDelete":
                return await this.onPairingDeleteRequest(i, n);
            default:
                return await this.onUnknownRpcMethodRequest(i, n)
            }
        }
        ),
        ne(this, "onRelayEventResponse", async r => {
            const {topic: i, payload: n} = r
              , o = (await this.core.history.get(i, n.id)).request.method;
            switch (o) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(i, n);
            default:
                return this.onUnknownRpcMethodResponse(o)
            }
        }
        ),
        ne(this, "onPairingPingRequest", async (r, i) => {
            const {id: n} = i;
            try {
                this.isValidPing({
                    topic: r
                }),
                await this.sendResult(n, r, !0),
                this.events.emit($s.ping, {
                    id: n,
                    topic: r
                })
            } catch (o) {
                await this.sendError(n, r, o),
                this.logger.error(o)
            }
        }
        ),
        ne(this, "onPairingPingResponse", (r, i) => {
            const {id: n} = i;
            setTimeout( () => {
                es(i) ? this.events.emit(ge("pairing_ping", n), {}) : Wt(i) && this.events.emit(ge("pairing_ping", n), {
                    error: i.error
                })
            }
            , 500)
        }
        ),
        ne(this, "onPairingDeleteRequest", async (r, i) => {
            const {id: n} = i;
            try {
                this.isValidDisconnect({
                    topic: r
                }),
                await this.deletePairing(r),
                this.events.emit($s.delete, {
                    id: n,
                    topic: r
                })
            } catch (o) {
                await this.sendError(n, r, o),
                this.logger.error(o)
            }
        }
        ),
        ne(this, "onUnknownRpcMethodRequest", async (r, i) => {
            const {id: n, method: o} = i;
            try {
                if (this.registeredMethods.includes(o))
                    return;
                const a = we("WC_METHOD_UNSUPPORTED", o);
                await this.sendError(n, r, a),
                this.logger.error(a)
            } catch (a) {
                await this.sendError(n, r, a),
                this.logger.error(a)
            }
        }
        ),
        ne(this, "onUnknownRpcMethodResponse", r => {
            this.registeredMethods.includes(r) || this.logger.error(we("WC_METHOD_UNSUPPORTED", r))
        }
        ),
        ne(this, "isValidPair", (r, i) => {
            var n;
            if (!ct(r)) {
                const {message: a} = $("MISSING_OR_INVALID", `pair() params: ${r}`);
                throw i.setError(ts.malformed_pairing_uri),
                new Error(a)
            }
            if (!gf(r.uri)) {
                const {message: a} = $("MISSING_OR_INVALID", `pair() uri: ${r.uri}`);
                throw i.setError(ts.malformed_pairing_uri),
                new Error(a)
            }
            const o = Ra(r?.uri);
            if (!((n = o?.relay) != null && n.protocol)) {
                const {message: a} = $("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw i.setError(ts.malformed_pairing_uri),
                new Error(a)
            }
            if (!(o != null && o.symKey)) {
                const {message: a} = $("MISSING_OR_INVALID", "pair() uri#symKey");
                throw i.setError(ts.malformed_pairing_uri),
                new Error(a)
            }
            if (o != null && o.expiryTimestamp && U.toMiliseconds(o?.expiryTimestamp) < Date.now()) {
                i.setError(ts.pairing_expired);
                const {message: a} = $("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(a)
            }
        }
        ),
        ne(this, "isValidPing", async r => {
            if (!ct(r)) {
                const {message: n} = $("MISSING_OR_INVALID", `ping() params: ${r}`);
                throw new Error(n)
            }
            const {topic: i} = r;
            await this.isValidPairingTopic(i)
        }
        ),
        ne(this, "isValidDisconnect", async r => {
            if (!ct(r)) {
                const {message: n} = $("MISSING_OR_INVALID", `disconnect() params: ${r}`);
                throw new Error(n)
            }
            const {topic: i} = r;
            await this.isValidPairingTopic(i)
        }
        ),
        ne(this, "isValidPairingTopic", async r => {
            if (!xe(r, !1)) {
                const {message: i} = $("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
                throw new Error(i)
            }
            if (!this.pairings.keys.includes(r)) {
                const {message: i} = $("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
                throw new Error(i)
            }
            if (fs(this.pairings.get(r).expiry)) {
                await this.deletePairing(r);
                const {message: i} = $("EXPIRED", `pairing topic: ${r}`);
                throw new Error(i)
            }
        }
        ),
        this.core = e,
        this.logger = st(s, this.name),
        this.pairings = new Hs(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return bt(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(je.message, async e => {
            const {topic: s, message: r, transportType: i} = e;
            if (this.pairings.keys.includes(s) && i !== Ae.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r)))
                try {
                    const n = await this.core.crypto.decode(s, r);
                    vo(n) ? (this.core.history.set(s, n),
                    await this.onRelayEventRequest({
                        topic: s,
                        payload: n
                    })) : Co(n) && (await this.core.history.resolve(n),
                    await this.onRelayEventResponse({
                        topic: s,
                        payload: n
                    }),
                    this.core.history.delete(s, n.id)),
                    await this.core.relayer.messages.ack(s, r)
                } catch (n) {
                    this.logger.error(n)
                }
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(At.expired, async e => {
            const {topic: s} = tl(e.target);
            s && this.pairings.keys.includes(s) && (await this.deletePairing(s, !0),
            this.events.emit($s.expire, {
                topic: s
            }))
        }
        )
    }
}
var ib = Object.defineProperty
  , nb = (t, e, s) => e in t ? ib(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Ve = (t, e, s) => nb(t, typeof e != "symbol" ? e + "" : e, s);
class ob extends Cu {
    constructor(e, s) {
        super(e, s),
        this.core = e,
        this.logger = s,
        Ve(this, "records", new Map),
        Ve(this, "events", new zs.EventEmitter),
        Ve(this, "name", cm),
        Ve(this, "version", lm),
        Ve(this, "cached", []),
        Ve(this, "initialized", !1),
        Ve(this, "storagePrefix", Kt),
        Ve(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(r => this.records.set(r.id, r)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ),
        Ve(this, "set", (r, i, n) => {
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: r,
                request: i,
                chainId: n
            }),
            this.records.has(i.id))
                return;
            const o = {
                id: i.id,
                topic: r,
                request: {
                    method: i.method,
                    params: i.params || null
                },
                chainId: n,
                expiry: De(U.THIRTY_DAYS)
            };
            this.records.set(o.id, o),
            this.persist(),
            this.events.emit(Tt.created, o)
        }
        ),
        Ve(this, "resolve", async r => {
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: r
            }),
            !this.records.has(r.id))
                return;
            const i = await this.getRecord(r.id);
            typeof i.response > "u" && (i.response = Wt(r) ? {
                error: r.error
            } : {
                result: r.result
            },
            this.records.set(i.id, i),
            this.persist(),
            this.events.emit(Tt.updated, i))
        }
        ),
        Ve(this, "get", async (r, i) => (this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: r,
            id: i
        }),
        await this.getRecord(i))),
        Ve(this, "delete", (r, i) => {
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: i
            }),
            this.values.forEach(n => {
                if (n.topic === r) {
                    if (typeof i < "u" && n.id !== i)
                        return;
                    this.records.delete(n.id),
                    this.events.emit(Tt.deleted, n)
                }
            }
            ),
            this.persist()
        }
        ),
        Ve(this, "exists", async (r, i) => (this.isInitialized(),
        this.records.has(i) ? (await this.getRecord(i)).topic === r : !1)),
        Ve(this, "on", (r, i) => {
            this.events.on(r, i)
        }
        ),
        Ve(this, "once", (r, i) => {
            this.events.once(r, i)
        }
        ),
        Ve(this, "off", (r, i) => {
            this.events.off(r, i)
        }
        ),
        Ve(this, "removeListener", (r, i) => {
            this.events.removeListener(r, i)
        }
        ),
        this.logger = st(s, this.name)
    }
    get context() {
        return bt(this.logger)
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
        return this.values.forEach(s => {
            if (typeof s.response < "u")
                return;
            const r = {
                topic: s.topic,
                request: Ds(s.request.method, s.request.params, s.id),
                chainId: s.chainId
            };
            return e.push(r)
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
        const s = this.records.get(e);
        if (!s) {
            const {message: r} = $("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(r)
        }
        return s
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(Tt.sync)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length)
                return;
            if (this.records.size) {
                const {message: s} = $("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(s),
                new Error(s)
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
        this.events.on(Tt.created, e => {
            const s = Tt.created;
            this.logger.info(`Emitting ${s}`),
            this.logger.debug({
                type: "event",
                event: s,
                record: e
            })
        }
        ),
        this.events.on(Tt.updated, e => {
            const s = Tt.updated;
            this.logger.info(`Emitting ${s}`),
            this.logger.debug({
                type: "event",
                event: s,
                record: e
            })
        }
        ),
        this.events.on(Tt.deleted, e => {
            const s = Tt.deleted;
            this.logger.info(`Emitting ${s}`),
            this.logger.debug({
                type: "event",
                event: s,
                record: e
            })
        }
        ),
        this.core.heartbeat.on(Tr.pulse, () => {
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach(s => {
                U.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`),
                this.records.delete(s.id),
                this.events.emit(Tt.deleted, s, !1),
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
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var ab = Object.defineProperty
  , cb = (t, e, s) => e in t ? ab(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Ye = (t, e, s) => cb(t, typeof e != "symbol" ? e + "" : e, s);
class lb extends Su {
    constructor(e, s) {
        super(e, s),
        this.core = e,
        this.logger = s,
        Ye(this, "expirations", new Map),
        Ye(this, "events", new zs.EventEmitter),
        Ye(this, "name", dm),
        Ye(this, "version", um),
        Ye(this, "cached", []),
        Ye(this, "initialized", !1),
        Ye(this, "storagePrefix", Kt),
        Ye(this, "init", async () => {
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(r => this.expirations.set(r.target, r)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ),
        Ye(this, "has", r => {
            try {
                const i = this.formatTarget(r);
                return typeof this.getExpiration(i) < "u"
            } catch {
                return !1
            }
        }
        ),
        Ye(this, "set", (r, i) => {
            this.isInitialized();
            const n = this.formatTarget(r)
              , o = {
                target: n,
                expiry: i
            };
            this.expirations.set(n, o),
            this.checkExpiry(n, o),
            this.events.emit(At.created, {
                target: n,
                expiration: o
            })
        }
        ),
        Ye(this, "get", r => {
            this.isInitialized();
            const i = this.formatTarget(r);
            return this.getExpiration(i)
        }
        ),
        Ye(this, "del", r => {
            if (this.isInitialized(),
            this.has(r)) {
                const i = this.formatTarget(r)
                  , n = this.getExpiration(i);
                this.expirations.delete(i),
                this.events.emit(At.deleted, {
                    target: i,
                    expiration: n
                })
            }
        }
        ),
        Ye(this, "on", (r, i) => {
            this.events.on(r, i)
        }
        ),
        Ye(this, "once", (r, i) => {
            this.events.once(r, i)
        }
        ),
        Ye(this, "off", (r, i) => {
            this.events.off(r, i)
        }
        ),
        Ye(this, "removeListener", (r, i) => {
            this.events.removeListener(r, i)
        }
        ),
        this.logger = st(s, this.name)
    }
    get context() {
        return bt(this.logger)
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
            return mh(e);
        if (typeof e == "number")
            return wh(e);
        const {message: s} = $("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(s)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(At.sync)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length)
                return;
            if (this.expirations.size) {
                const {message: s} = $("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(s),
                new Error(s)
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
        const s = this.expirations.get(e);
        if (!s) {
            const {message: r} = $("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(r),
            new Error(r)
        }
        return s
    }
    checkExpiry(e, s) {
        const {expiry: r} = s;
        U.toMiliseconds(r) - Date.now() <= 0 && this.expire(e, s)
    }
    expire(e, s) {
        this.expirations.delete(e),
        this.events.emit(At.expired, {
            target: e,
            expiration: s
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach( (e, s) => this.checkExpiry(s, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Tr.pulse, () => this.checkExpirations()),
        this.events.on(At.created, e => {
            const s = At.created;
            this.logger.info(`Emitting ${s}`),
            this.logger.debug({
                type: "event",
                event: s,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(At.expired, e => {
            const s = At.expired;
            this.logger.info(`Emitting ${s}`),
            this.logger.debug({
                type: "event",
                event: s,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(At.deleted, e => {
            const s = At.deleted;
            this.logger.info(`Emitting ${s}`),
            this.logger.debug({
                type: "event",
                event: s,
                data: e
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
var db = Object.defineProperty
  , ub = (t, e, s) => e in t ? db(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Oe = (t, e, s) => ub(t, typeof e != "symbol" ? e + "" : e, s);
class hb extends Pu {
    constructor(e, s, r) {
        super(e, s, r),
        this.core = e,
        this.logger = s,
        this.store = r,
        Oe(this, "name", hm),
        Oe(this, "abortController"),
        Oe(this, "isDevEnv"),
        Oe(this, "verifyUrlV3", gm),
        Oe(this, "storagePrefix", Kt),
        Oe(this, "version", Ml),
        Oe(this, "publicKey"),
        Oe(this, "fetchPromise"),
        Oe(this, "init", async () => {
            var i;
            this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey),
            this.publicKey && U.toMiliseconds((i = this.publicKey) == null ? void 0 : i.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"),
            await this.removePublicKey()))
        }
        ),
        Oe(this, "register", async i => {
            if (!Rr() || this.isDevEnv)
                return;
            const n = window.location.origin
              , {id: o, decryptedId: a} = i
              , c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
            try {
                const l = os.getDocument()
                  , d = this.startAbortTimer(U.ONE_SECOND * 5)
                  , u = await new Promise( (p, f) => {
                    const m = () => {
                        window.removeEventListener("message", g),
                        l.body.removeChild(w),
                        f("attestation aborted")
                    }
                    ;
                    this.abortController.signal.addEventListener("abort", m);
                    const w = l.createElement("iframe");
                    w.src = c,
                    w.style.display = "none",
                    w.addEventListener("error", m, {
                        signal: this.abortController.signal
                    });
                    const g = y => {
                        if (y.data && typeof y.data == "string")
                            try {
                                const b = JSON.parse(y.data);
                                if (b.type === "verify_attestation") {
                                    if (Ln(b.attestation).payload.id !== o)
                                        return;
                                    clearInterval(d),
                                    l.body.removeChild(w),
                                    this.abortController.signal.removeEventListener("abort", m),
                                    window.removeEventListener("message", g),
                                    p(b.attestation === null ? "" : b.attestation)
                                }
                            } catch (b) {
                                this.logger.warn(b)
                            }
                    }
                    ;
                    l.body.appendChild(w),
                    window.addEventListener("message", g, {
                        signal: this.abortController.signal
                    })
                }
                );
                return this.logger.debug("jwt attestation", u),
                u
            } catch (l) {
                this.logger.warn(l)
            }
            return ""
        }
        ),
        Oe(this, "resolve", async i => {
            if (this.isDevEnv)
                return "";
            const {attestationId: n, hash: o, encryptedId: a} = i;
            if (n === "") {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return
            }
            if (n) {
                if (Ln(n).payload.id !== a)
                    return;
                const l = await this.isValidJwtAttestation(n);
                if (l) {
                    if (!l.isVerified) {
                        this.logger.warn("resolve: jwt attestation: origin url not verified");
                        return
                    }
                    return l
                }
            }
            if (!o)
                return;
            const c = this.getVerifyUrl(i?.verifyUrl);
            return this.fetchAttestation(o, c)
        }
        ),
        Oe(this, "fetchAttestation", async (i, n) => {
            this.logger.debug(`resolving attestation: ${i} from url: ${n}`);
            const o = this.startAbortTimer(U.ONE_SECOND * 5)
              , a = await fetch(`${n}/attestation/${i}?v2Supported=true`, {
                signal: this.abortController.signal
            });
            return clearTimeout(o),
            a.status === 200 ? await a.json() : void 0
        }
        ),
        Oe(this, "getVerifyUrl", i => {
            let n = i || ri;
            return fm.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${ri}`),
            n = ri),
            n
        }
        ),
        Oe(this, "fetchPublicKey", async () => {
            try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                const i = this.startAbortTimer(U.FIVE_SECONDS)
                  , n = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal
                });
                return clearTimeout(i),
                await n.json()
            } catch (i) {
                this.logger.warn(i)
            }
        }
        ),
        Oe(this, "persistPublicKey", async i => {
            this.logger.debug("persisting public key to local storage", i),
            await this.store.setItem(this.storeKey, i),
            this.publicKey = i
        }
        ),
        Oe(this, "removePublicKey", async () => {
            this.logger.debug("removing verify v2 public key from storage"),
            await this.store.removeItem(this.storeKey),
            this.publicKey = void 0
        }
        ),
        Oe(this, "isValidJwtAttestation", async i => {
            const n = await this.getPublicKey();
            try {
                if (n)
                    return this.validateAttestation(i, n)
            } catch (a) {
                this.logger.error(a),
                this.logger.warn("error validating attestation")
            }
            const o = await this.fetchAndPersistPublicKey();
            try {
                if (o)
                    return this.validateAttestation(i, o)
            } catch (a) {
                this.logger.error(a),
                this.logger.warn("error validating attestation")
            }
        }
        ),
        Oe(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()),
        Oe(this, "fetchAndPersistPublicKey", async () => {
            if (this.fetchPromise)
                return await this.fetchPromise,
                this.publicKey;
            this.fetchPromise = new Promise(async n => {
                const o = await this.fetchPublicKey();
                o && (await this.persistPublicKey(o),
                n(o))
            }
            );
            const i = await this.fetchPromise;
            return this.fetchPromise = void 0,
            i
        }
        ),
        Oe(this, "validateAttestation", (i, n) => {
            const o = Vg(i, n.publicKey)
              , a = {
                hasExpired: U.toMiliseconds(o.exp) < Date.now(),
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
        this.logger = st(s, this.name),
        this.abortController = new AbortController,
        this.isDevEnv = Io(),
        this.init()
    }
    get storeKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key"
    }
    get context() {
        return bt(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController,
        setTimeout( () => this.abortController.abort(), U.toMiliseconds(e))
    }
}
var pb = Object.defineProperty
  , gb = (t, e, s) => e in t ? pb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , dc = (t, e, s) => gb(t, typeof e != "symbol" ? e + "" : e, s);
class fb extends ku {
    constructor(e, s) {
        super(e, s),
        this.projectId = e,
        this.logger = s,
        dc(this, "context", mm),
        dc(this, "registerDeviceToken", async r => {
            const {clientId: i, token: n, notificationType: o, enableEncrypted: a=!1} = r
              , c = `${wm}/${this.projectId}/clients`;
            await fetch(c, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: i,
                    type: o,
                    token: n,
                    always_raw: a
                })
            })
        }
        ),
        this.logger = st(s, this.context)
    }
}
var mb = Object.defineProperty
  , uc = Object.getOwnPropertySymbols
  , wb = Object.prototype.hasOwnProperty
  , yb = Object.prototype.propertyIsEnumerable
  , ho = (t, e, s) => e in t ? mb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , zr = (t, e) => {
    for (var s in e || (e = {}))
        wb.call(e, s) && ho(t, s, e[s]);
    if (uc)
        for (var s of uc(e))
            yb.call(e, s) && ho(t, s, e[s]);
    return t
}
  , Me = (t, e, s) => ho(t, typeof e != "symbol" ? e + "" : e, s);
class bb extends Tu {
    constructor(e, s, r=!0) {
        super(e, s, r),
        this.core = e,
        this.logger = s,
        Me(this, "context", bm),
        Me(this, "storagePrefix", Kt),
        Me(this, "storageVersion", ym),
        Me(this, "events", new Map),
        Me(this, "shouldPersist", !1),
        Me(this, "init", async () => {
            if (!Io())
                try {
                    const i = {
                        eventId: ra(),
                        timestamp: Date.now(),
                        domain: this.getAppDomain(),
                        props: {
                            event: "INIT",
                            type: "",
                            properties: {
                                client_id: await this.core.crypto.getClientId(),
                                user_agent: Qc(this.core.relayer.protocol, this.core.relayer.version, ro)
                            }
                        }
                    };
                    await this.sendEvent([i])
                } catch (i) {
                    this.logger.warn(i)
                }
        }
        ),
        Me(this, "createEvent", i => {
            const {event: n="ERROR", type: o="", properties: {topic: a, trace: c}} = i
              , l = ra()
              , d = this.core.projectId || ""
              , u = Date.now()
              , p = zr({
                eventId: l,
                timestamp: u,
                props: {
                    event: n,
                    type: o,
                    properties: {
                        topic: a,
                        trace: c
                    }
                },
                bundleId: d,
                domain: this.getAppDomain()
            }, this.setMethods(l));
            return this.telemetryEnabled && (this.events.set(l, p),
            this.shouldPersist = !0),
            p
        }
        ),
        Me(this, "getEvent", i => {
            const {eventId: n, topic: o} = i;
            if (n)
                return this.events.get(n);
            const a = Array.from(this.events.values()).find(c => c.props.properties.topic === o);
            if (a)
                return zr(zr({}, a), this.setMethods(a.eventId))
        }
        ),
        Me(this, "deleteEvent", i => {
            const {eventId: n} = i;
            this.events.delete(n),
            this.shouldPersist = !0
        }
        ),
        Me(this, "setEventListeners", () => {
            this.core.heartbeat.on(Tr.pulse, async () => {
                this.shouldPersist && await this.persist(),
                this.events.forEach(i => {
                    U.fromMiliseconds(Date.now()) - U.fromMiliseconds(i.timestamp) > vm && (this.events.delete(i.eventId),
                    this.shouldPersist = !0)
                }
                )
            }
            )
        }
        ),
        Me(this, "setMethods", i => ({
            addTrace: n => this.addTrace(i, n),
            setError: n => this.setError(i, n)
        })),
        Me(this, "addTrace", (i, n) => {
            const o = this.events.get(i);
            o && (o.props.properties.trace.push(n),
            this.events.set(i, o),
            this.shouldPersist = !0)
        }
        ),
        Me(this, "setError", (i, n) => {
            const o = this.events.get(i);
            o && (o.props.type = n,
            o.timestamp = Date.now(),
            this.events.set(i, o),
            this.shouldPersist = !0)
        }
        ),
        Me(this, "persist", async () => {
            await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
            this.shouldPersist = !1
        }
        ),
        Me(this, "restore", async () => {
            try {
                const i = await this.core.storage.getItem(this.storageKey) || [];
                if (!i.length)
                    return;
                i.forEach(n => {
                    this.events.set(n.eventId, zr(zr({}, n), this.setMethods(n.eventId)))
                }
                )
            } catch (i) {
                this.logger.warn(i)
            }
        }
        ),
        Me(this, "submit", async () => {
            if (!this.telemetryEnabled || this.events.size === 0)
                return;
            const i = [];
            for (const [n,o] of this.events)
                o.props.type && i.push(o);
            if (i.length !== 0)
                try {
                    if ((await this.sendEvent(i)).ok)
                        for (const n of i)
                            this.events.delete(n.eventId),
                            this.shouldPersist = !0
                } catch (n) {
                    this.logger.warn(n)
                }
        }
        ),
        Me(this, "sendEvent", async i => {
            const n = this.getAppDomain() ? "" : "&sp=desktop";
            return await fetch(`${Cm}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${ro}${n}`, {
                method: "POST",
                body: JSON.stringify(i)
            })
        }
        ),
        Me(this, "getAppDomain", () => Xc().url),
        this.logger = st(s, this.context),
        this.telemetryEnabled = r,
        r ? this.restore().then(async () => {
            await this.submit(),
            this.setEventListeners()
        }
        ) : this.persist()
    }
    get storageKey() {
        return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context
    }
}
var vb = Object.defineProperty
  , hc = Object.getOwnPropertySymbols
  , Cb = Object.prototype.hasOwnProperty
  , Eb = Object.prototype.propertyIsEnumerable
  , po = (t, e, s) => e in t ? vb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , pc = (t, e) => {
    for (var s in e || (e = {}))
        Cb.call(e, s) && po(t, s, e[s]);
    if (hc)
        for (var s of hc(e))
            Eb.call(e, s) && po(t, s, e[s]);
    return t
}
  , Ie = (t, e, s) => po(t, typeof e != "symbol" ? e + "" : e, s);
let Ib = class Xl extends wu {
    constructor(e) {
        var s;
        super(e),
        Ie(this, "protocol", Ll),
        Ie(this, "version", Ml),
        Ie(this, "name", so),
        Ie(this, "relayUrl"),
        Ie(this, "projectId"),
        Ie(this, "customStoragePrefix"),
        Ie(this, "events", new zs.EventEmitter),
        Ie(this, "logger"),
        Ie(this, "heartbeat"),
        Ie(this, "relayer"),
        Ie(this, "crypto"),
        Ie(this, "storage"),
        Ie(this, "history"),
        Ie(this, "expirer"),
        Ie(this, "pairing"),
        Ie(this, "verify"),
        Ie(this, "echoClient"),
        Ie(this, "linkModeSupportedApps"),
        Ie(this, "eventClient"),
        Ie(this, "initialized", !1),
        Ie(this, "logChunkController"),
        Ie(this, "on", (a, c) => this.events.on(a, c)),
        Ie(this, "once", (a, c) => this.events.once(a, c)),
        Ie(this, "off", (a, c) => this.events.off(a, c)),
        Ie(this, "removeListener", (a, c) => this.events.removeListener(a, c)),
        Ie(this, "dispatchEnvelope", ({topic: a, message: c, sessionExists: l}) => {
            if (!a || !c)
                return;
            const d = {
                topic: a,
                message: c,
                publishedAt: Date.now(),
                transportType: Ae.link_mode
            };
            this.relayer.onLinkMessageEvent(d, {
                sessionExists: l
            })
        }
        );
        const r = this.getGlobalCore(e?.customStoragePrefix);
        if (r)
            try {
                return this.customStoragePrefix = r.customStoragePrefix,
                this.logger = r.logger,
                this.heartbeat = r.heartbeat,
                this.crypto = r.crypto,
                this.history = r.history,
                this.expirer = r.expirer,
                this.storage = r.storage,
                this.relayer = r.relayer,
                this.pairing = r.pairing,
                this.verify = r.verify,
                this.echoClient = r.echoClient,
                this.linkModeSupportedApps = r.linkModeSupportedApps,
                this.eventClient = r.eventClient,
                this.initialized = r.initialized,
                this.logChunkController = r.logChunkController,
                r
            } catch (a) {
                console.warn("Failed to copy global core", a)
            }
        this.projectId = e?.projectId,
        this.relayUrl = e?.relayUrl || ql,
        this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const i = pi({
            level: typeof e?.logger == "string" && e.logger ? e.logger : Wf.logger,
            name: so
        })
          , {logger: n, chunkLoggerController: o} = Dc({
            opts: i,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = o,
        (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
            var a, c;
            (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }))
        }
        ),
        this.logger = st(n, this.name),
        this.heartbeat = new bd,
        this.crypto = new Yw(this,this.logger,e?.keychain),
        this.history = new ob(this,this.logger),
        this.expirer = new lb(this,this.logger),
        this.storage = e != null && e.storage ? e.storage : new Ad(pc(pc({}, zf), e?.storageOptions)),
        this.relayer = new Iy({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new rb(this,this.logger),
        this.verify = new hb(this,this.logger,this.storage),
        this.echoClient = new fb(this.projectId || "",this.logger),
        this.linkModeSupportedApps = [],
        this.eventClient = new bb(this,this.logger,e?.telemetryEnabled),
        this.setGlobalCore(this)
    }
    static async init(e) {
        const s = new Xl(e);
        await s.initialize();
        const r = await s.crypto.getClientId();
        return await s.storage.setItem(rm, r),
        s
    }
    get context() {
        return bt(this.logger)
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
        await this.storage.setItem(Va, this.linkModeSupportedApps))
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
            this.linkModeSupportedApps = await this.storage.getItem(Va) || [],
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
            const s = `_walletConnectCore_${e}`
              , r = `${s}_count`;
            return globalThis[r] = (globalThis[r] || 0) + 1,
            globalThis[r] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`),
            globalThis[s]
        } catch (s) {
            console.warn("Failed to get global WalletConnect core", s);
            return
        }
    }
    setGlobalCore(e) {
        var s;
        try {
            if (this.isGlobalCoreDisabled())
                return;
            const r = `_walletConnectCore_${((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""}`;
            globalThis[r] = e
        } catch (r) {
            console.warn("Failed to set global WalletConnect core", r)
        }
    }
    isGlobalCoreDisabled() {
        try {
            return typeof wr < "u" && Ff.DISABLE_GLOBAL_CORE === "true"
        } catch {
            return !0
        }
    }
}
;
const Nb = Ib
  , Ql = "wc"
  , ed = 2
  , td = "client"
  , Oo = `${Ql}@${ed}:${td}:`
  , kn = {
    name: td,
    logger: "error"
}
  , gc = "WALLETCONNECT_DEEPLINK_CHOICE"
  , Ab = "proposal"
  , fc = "Proposal expired"
  , _b = "session"
  , Xs = U.SEVEN_DAYS
  , Sb = "engine"
  , Be = {
    wc_sessionPropose: {
        req: {
            ttl: U.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        },
        reject: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1120
        },
        autoReject: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1121
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: U.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: U.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: U.ONE_DAY,
            prompt: !1,
            tag: 1115
        }
    },
    wc_sessionAuthenticate: {
        req: {
            ttl: U.ONE_HOUR,
            prompt: !0,
            tag: 1116
        },
        res: {
            ttl: U.ONE_HOUR,
            prompt: !1,
            tag: 1117
        },
        reject: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1118
        },
        autoReject: {
            ttl: U.FIVE_MINUTES,
            prompt: !1,
            tag: 1119
        }
    }
}
  , Tn = {
    min: U.FIVE_MINUTES,
    max: U.SEVEN_DAYS
}
  , jt = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , mc = {
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
  , Pb = "request"
  , kb = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"]
  , Tb = "wc"
  , Ob = "auth"
  , xb = "authKeys"
  , Rb = "pairingTopics"
  , $b = "requests"
  , nn = `${Tb}@${1.5}:${Ob}:`
  , qi = `${nn}:PUB_KEY`;
var Ub = Object.defineProperty
  , Db = Object.defineProperties
  , Lb = Object.getOwnPropertyDescriptors
  , wc = Object.getOwnPropertySymbols
  , Mb = Object.prototype.hasOwnProperty
  , Bb = Object.prototype.propertyIsEnumerable
  , go = (t, e, s) => e in t ? Ub(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , be = (t, e) => {
    for (var s in e || (e = {}))
        Mb.call(e, s) && go(t, s, e[s]);
    if (wc)
        for (var s of wc(e))
            Bb.call(e, s) && go(t, s, e[s]);
    return t
}
  , et = (t, e) => Db(t, Lb(e))
  , N = (t, e, s) => go(t, typeof e != "symbol" ? e + "" : e, s);
class qb extends $u {
    constructor(e) {
        super(e),
        N(this, "name", Sb),
        N(this, "events", new Eo),
        N(this, "initialized", !1),
        N(this, "requestQueue", {
            state: jt.idle,
            queue: []
        }),
        N(this, "sessionRequestQueue", {
            state: jt.idle,
            queue: []
        }),
        N(this, "requestQueueDelay", U.ONE_SECOND),
        N(this, "expectedPairingMethodMap", new Map),
        N(this, "recentlyDeletedMap", new Map),
        N(this, "recentlyDeletedLimit", 200),
        N(this, "relayMessageCache", []),
        N(this, "pendingSessions", new Map),
        N(this, "init", async () => {
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            await this.registerLinkModeListeners(),
            this.client.core.pairing.register({
                methods: Object.keys(Be)
            }),
            this.initialized = !0,
            setTimeout(async () => {
                await this.processPendingMessageEvents(),
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }
            , U.toMiliseconds(this.requestQueueDelay)))
        }
        ),
        N(this, "connect", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            const r = et(be({}, s), {
                requiredNamespaces: s.requiredNamespaces || {},
                optionalNamespaces: s.optionalNamespaces || {}
            });
            await this.isValidConnect(r),
            r.optionalNamespaces = lf(r.requiredNamespaces, r.optionalNamespaces),
            r.requiredNamespaces = {};
            const {pairingTopic: i, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: l} = r;
            let d = i, u, p = !1;
            try {
                if (d) {
                    const P = this.client.core.pairing.pairings.get(d);
                    this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),
                    p = P.active
                }
            } catch (P) {
                throw this.client.logger.error(`connect() -> pairing.get(${d}) failed`),
                P
            }
            if (!d || !p) {
                const {topic: P, uri: _} = await this.client.core.pairing.create();
                d = P,
                u = _
            }
            if (!d) {
                const {message: P} = $("NO_MATCHING_KEY", `connect() pairing topic: ${d}`);
                throw new Error(P)
            }
            const f = await this.client.core.crypto.generateKeyPair()
              , m = Be.wc_sessionPropose.req.ttl || U.FIVE_MINUTES
              , w = De(m)
              , g = et(be(be({
                requiredNamespaces: n,
                optionalNamespaces: o,
                relays: l ?? [{
                    protocol: Bl
                }],
                proposer: {
                    publicKey: f,
                    metadata: this.client.metadata
                },
                expiryTimestamp: w,
                pairingTopic: d
            }, a && {
                sessionProperties: a
            }), c && {
                scopedProperties: c
            }), {
                id: as()
            })
              , y = ge("session_connect", g.id)
              , {reject: b, resolve: I, done: O} = Os(m, fc)
              , R = ({id: P}) => {
                P === g.id && (this.client.events.off("proposal_expire", R),
                this.pendingSessions.delete(g.id),
                this.events.emit(y, {
                    error: {
                        message: fc,
                        code: 0
                    }
                }))
            }
            ;
            return this.client.events.on("proposal_expire", R),
            this.events.once(y, ({error: P, session: _}) => {
                this.client.events.off("proposal_expire", R),
                P ? b(P) : _ && I(_)
            }
            ),
            await this.sendRequest({
                topic: d,
                method: "wc_sessionPropose",
                params: g,
                throwOnFailedPublish: !0,
                clientRpcId: g.id
            }),
            await this.setProposal(g.id, g),
            {
                uri: u,
                approval: O
            }
        }
        ),
        N(this, "pair", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                return await this.client.core.pairing.pair(s)
            } catch (r) {
                throw this.client.logger.error("pair() failed"),
                r
            }
        }
        ),
        N(this, "approve", async s => {
            var r, i, n;
            const o = this.client.core.eventClient.createEvent({
                properties: {
                    topic: (r = s?.id) == null ? void 0 : r.toString(),
                    trace: [Ot.session_approve_started]
                }
            });
            try {
                this.isInitialized(),
                await this.confirmOnlineStateOrThrow()
            } catch (v) {
                throw o.setError(Ps.no_internet_connection),
                v
            }
            try {
                await this.isValidProposalId(s?.id)
            } catch (v) {
                throw this.client.logger.error(`approve() -> proposal.get(${s?.id}) failed`),
                o.setError(Ps.proposal_not_found),
                v
            }
            try {
                await this.isValidApprove(s)
            } catch (v) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"),
                o.setError(Ps.session_approve_namespace_validation_failure),
                v
            }
            const {id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: p} = s
              , f = this.client.proposal.get(a);
            this.client.core.eventClient.deleteEvent({
                eventId: o.eventId
            });
            const {pairingTopic: m, proposer: w, requiredNamespaces: g, optionalNamespaces: y} = f;
            let b = (i = this.client.core.eventClient) == null ? void 0 : i.getEvent({
                topic: m
            });
            b || (b = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({
                type: Ot.session_approve_started,
                properties: {
                    topic: m,
                    trace: [Ot.session_approve_started, Ot.session_namespaces_validation_success]
                }
            }));
            const I = await this.client.core.crypto.generateKeyPair()
              , O = w.publicKey
              , R = await this.client.core.crypto.generateSharedKey(I, O)
              , P = be(be(be({
                relay: {
                    protocol: c ?? "irn"
                },
                namespaces: l,
                controller: {
                    publicKey: I,
                    metadata: this.client.metadata
                },
                expiry: De(Xs)
            }, d && {
                sessionProperties: d
            }), u && {
                scopedProperties: u
            }), p && {
                sessionConfig: p
            })
              , _ = Ae.relay;
            b.addTrace(Ot.subscribing_session_topic);
            try {
                await this.client.core.relayer.subscribe(R, {
                    transportType: _
                })
            } catch (v) {
                throw b.setError(Ps.subscribe_session_topic_failure),
                v
            }
            b.addTrace(Ot.subscribe_session_topic_success);
            const D = et(be({}, P), {
                topic: R,
                requiredNamespaces: g,
                optionalNamespaces: y,
                pairingTopic: m,
                acknowledged: !1,
                self: P.controller,
                peer: {
                    publicKey: w.publicKey,
                    metadata: w.metadata
                },
                controller: I,
                transportType: Ae.relay
            });
            await this.client.session.set(R, D),
            b.addTrace(Ot.store_session);
            try {
                b.addTrace(Ot.publishing_session_settle),
                await this.sendRequest({
                    topic: R,
                    method: "wc_sessionSettle",
                    params: P,
                    throwOnFailedPublish: !0
                }).catch(v => {
                    throw b?.setError(Ps.session_settle_publish_failure),
                    v
                }
                ),
                b.addTrace(Ot.session_settle_publish_success),
                b.addTrace(Ot.publishing_session_approve),
                await this.sendResult({
                    id: a,
                    topic: m,
                    result: {
                        relay: {
                            protocol: c ?? "irn"
                        },
                        responderPublicKey: I
                    },
                    throwOnFailedPublish: !0
                }).catch(v => {
                    throw b?.setError(Ps.session_approve_publish_failure),
                    v
                }
                ),
                b.addTrace(Ot.session_approve_publish_success)
            } catch (v) {
                throw this.client.logger.error(v),
                this.client.session.delete(R, we("USER_DISCONNECTED")),
                await this.client.core.relayer.unsubscribe(R),
                v
            }
            return this.client.core.eventClient.deleteEvent({
                eventId: b.eventId
            }),
            await this.client.core.pairing.updateMetadata({
                topic: m,
                metadata: w.metadata
            }),
            await this.client.proposal.delete(a, we("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: m
            }),
            await this.setExpiry(R, De(Xs)),
            {
                topic: R,
                acknowledged: () => Promise.resolve(this.client.session.get(R))
            }
        }
        ),
        N(this, "reject", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidReject(s)
            } catch (o) {
                throw this.client.logger.error("reject() -> isValidReject() failed"),
                o
            }
            const {id: r, reason: i} = s;
            let n;
            try {
                n = this.client.proposal.get(r).pairingTopic
            } catch (o) {
                throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`),
                o
            }
            n && (await this.sendError({
                id: r,
                topic: n,
                error: i,
                rpcOpts: Be.wc_sessionPropose.reject
            }),
            await this.client.proposal.delete(r, we("USER_DISCONNECTED")))
        }
        ),
        N(this, "update", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidUpdate(s)
            } catch (u) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"),
                u
            }
            const {topic: r, namespaces: i} = s
              , {done: n, resolve: o, reject: a} = Os()
              , c = as()
              , l = pr().toString()
              , d = this.client.session.get(r).namespaces;
            return this.events.once(ge("session_update", c), ({error: u}) => {
                u ? a(u) : o()
            }
            ),
            await this.client.session.update(r, {
                namespaces: i
            }),
            await this.sendRequest({
                topic: r,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: i
                },
                throwOnFailedPublish: !0,
                clientRpcId: c,
                relayRpcId: l
            }).catch(u => {
                this.client.logger.error(u),
                this.client.session.update(r, {
                    namespaces: d
                }),
                a(u)
            }
            ),
            {
                acknowledged: n
            }
        }
        ),
        N(this, "extend", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidExtend(s)
            } catch (c) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"),
                c
            }
            const {topic: r} = s
              , i = as()
              , {done: n, resolve: o, reject: a} = Os();
            return this.events.once(ge("session_extend", i), ({error: c}) => {
                c ? a(c) : o()
            }
            ),
            await this.setExpiry(r, De(Xs)),
            this.sendRequest({
                topic: r,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: i,
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
        N(this, "request", async s => {
            this.isInitialized();
            try {
                await this.isValidRequest(s)
            } catch (y) {
                throw this.client.logger.error("request() -> isValidRequest() failed"),
                y
            }
            const {chainId: r, request: i, topic: n, expiry: o=Be.wc_sessionRequest.req.ttl} = s
              , a = this.client.session.get(n);
            a?.transportType === Ae.relay && await this.confirmOnlineStateOrThrow();
            const c = as()
              , l = pr().toString()
              , {done: d, resolve: u, reject: p} = Os(o, "Request expired. Please try again.");
            this.events.once(ge("session_request", c), ({error: y, result: b}) => {
                y ? p(y) : u(b)
            }
            );
            const f = "wc_sessionRequest"
              , m = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
            if (m)
                return await this.sendRequest({
                    clientRpcId: c,
                    relayRpcId: l,
                    topic: n,
                    method: f,
                    params: {
                        request: et(be({}, i), {
                            expiryTimestamp: De(o)
                        }),
                        chainId: r
                    },
                    expiry: o,
                    throwOnFailedPublish: !0,
                    appLink: m
                }).catch(y => p(y)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: i,
                    chainId: r,
                    id: c
                }),
                await d();
            const w = {
                request: et(be({}, i), {
                    expiryTimestamp: De(o)
                }),
                chainId: r
            }
              , g = this.shouldSetTVF(f, w);
            return await Promise.all([new Promise(async y => {
                await this.sendRequest(be({
                    clientRpcId: c,
                    relayRpcId: l,
                    topic: n,
                    method: f,
                    params: w,
                    expiry: o,
                    throwOnFailedPublish: !0
                }, g && {
                    tvf: this.getTVFParams(c, w)
                })).catch(b => p(b)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: i,
                    chainId: r,
                    id: c
                }),
                y()
            }
            ), new Promise(async y => {
                var b;
                if (!((b = a.sessionConfig) != null && b.disableDeepLink)) {
                    const I = await Ch(this.client.core.storage, gc);
                    await yh({
                        id: c,
                        topic: n,
                        wcDeepLink: I
                    })
                }
                y()
            }
            ), d()]).then(y => y[2])
        }
        ),
        N(this, "respond", async s => {
            this.isInitialized(),
            await this.isValidRespond(s);
            const {topic: r, response: i} = s
              , {id: n} = i
              , o = this.client.session.get(r);
            o.transportType === Ae.relay && await this.confirmOnlineStateOrThrow();
            const a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
            es(i) ? await this.sendResult({
                id: n,
                topic: r,
                result: i.result,
                throwOnFailedPublish: !0,
                appLink: a
            }) : Wt(i) && await this.sendError({
                id: n,
                topic: r,
                error: i.error,
                appLink: a
            }),
            this.cleanupAfterResponse(s)
        }
        ),
        N(this, "ping", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidPing(s)
            } catch (i) {
                throw this.client.logger.error("ping() -> isValidPing() failed"),
                i
            }
            const {topic: r} = s;
            if (this.client.session.keys.includes(r)) {
                const i = as()
                  , n = pr().toString()
                  , {done: o, resolve: a, reject: c} = Os();
                this.events.once(ge("session_ping", i), ({error: l}) => {
                    l ? c(l) : a()
                }
                ),
                await Promise.all([this.sendRequest({
                    topic: r,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: i,
                    relayRpcId: n
                }), o()])
            } else
                this.client.core.pairing.pairings.keys.includes(r) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),
                await this.client.core.pairing.ping({
                    topic: r
                }))
        }
        ),
        N(this, "emit", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow(),
            await this.isValidEmit(s);
            const {topic: r, event: i, chainId: n} = s
              , o = pr().toString()
              , a = as();
            await this.sendRequest({
                topic: r,
                method: "wc_sessionEvent",
                params: {
                    event: i,
                    chainId: n
                },
                throwOnFailedPublish: !0,
                relayRpcId: o,
                clientRpcId: a
            })
        }
        ),
        N(this, "disconnect", async s => {
            this.isInitialized(),
            await this.confirmOnlineStateOrThrow(),
            await this.isValidDisconnect(s);
            const {topic: r} = s;
            if (this.client.session.keys.includes(r))
                await this.sendRequest({
                    topic: r,
                    method: "wc_sessionDelete",
                    params: we("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }),
                await this.deleteSession({
                    topic: r,
                    emitEvent: !1
                });
            else if (this.client.core.pairing.pairings.keys.includes(r))
                await this.client.core.pairing.disconnect({
                    topic: r
                });
            else {
                const {message: i} = $("MISMATCHED_TOPIC", `Session or pairing topic not found: ${r}`);
                throw new Error(i)
            }
        }
        ),
        N(this, "find", s => (this.isInitialized(),
        this.client.session.getAll().filter(r => hf(r, s)))),
        N(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()),
        N(this, "authenticate", async (s, r) => {
            var i;
            this.isInitialized(),
            this.isValidAuthenticate(s);
            const n = r && this.client.core.linkModeSupportedApps.includes(r) && ((i = this.client.metadata.redirect) == null ? void 0 : i.linkMode)
              , o = n ? Ae.link_mode : Ae.relay;
            o === Ae.relay && await this.confirmOnlineStateOrThrow();
            const {chains: a, statement: c="", uri: l, domain: d, nonce: u, type: p, exp: f, nbf: m, methods: w=[], expiry: g} = s
              , y = [...s.resources || []]
              , {topic: b, uri: I} = await this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
                transportType: o
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: b,
                    uri: I
                }
            });
            const O = await this.client.core.crypto.generateKeyPair()
              , R = Mi(O);
            if (await Promise.all([this.client.auth.authKeys.set(qi, {
                responseTopic: R,
                publicKey: O
            }), this.client.auth.pairingTopics.set(R, {
                topic: R,
                pairingTopic: b
            })]),
            await this.client.core.relayer.subscribe(R, {
                transportType: o
            }),
            this.client.logger.info(`sending request to new pairing topic: ${b}`),
            w.length > 0) {
                const {namespace: T} = br(a[0]);
                let G = pp(T, "request", w);
                Li(y) && (G = fp(G, y.pop())),
                y.push(G)
            }
            const P = g && g > Be.wc_sessionAuthenticate.req.ttl ? g : Be.wc_sessionAuthenticate.req.ttl
              , _ = {
                authPayload: {
                    type: p ?? "caip122",
                    chains: a,
                    statement: c,
                    aud: l,
                    domain: d,
                    version: "1",
                    nonce: u,
                    iat: new Date().toISOString(),
                    exp: f,
                    nbf: m,
                    resources: y
                },
                requester: {
                    publicKey: O,
                    metadata: this.client.metadata
                },
                expiryTimestamp: De(P)
            }
              , D = {
                eip155: {
                    chains: a,
                    methods: [...new Set(["personal_sign", ...w])],
                    events: ["chainChanged", "accountsChanged"]
                }
            }
              , v = {
                requiredNamespaces: {},
                optionalNamespaces: D,
                relays: [{
                    protocol: "irn"
                }],
                pairingTopic: b,
                proposer: {
                    publicKey: O,
                    metadata: this.client.metadata
                },
                expiryTimestamp: De(Be.wc_sessionPropose.req.ttl),
                id: as()
            }
              , {done: x, resolve: C, reject: L} = Os(P, "Request expired")
              , H = as()
              , E = ge("session_connect", v.id)
              , k = ge("session_request", H)
              , A = async ({error: T, session: G}) => {
                this.events.off(k, B),
                T ? L(T) : G && C({
                    session: G
                })
            }
              , B = async T => {
                var G, Q, se;
                if (await this.deletePendingAuthRequest(H, {
                    message: "fulfilled",
                    code: 0
                }),
                T.error) {
                    const $e = we("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                    return T.error.code === $e.code ? void 0 : (this.events.off(E, A),
                    L(T.error.message))
                }
                await this.deleteProposal(v.id),
                this.events.off(E, A);
                const {cacaos: Ce, responder: pe} = T.result
                  , Te = []
                  , Le = [];
                for (const $e of Ce) {
                    await ua({
                        cacao: $e,
                        projectId: this.client.core.projectId
                    }) || (this.client.logger.error($e, "Signature verification failed"),
                    L(we("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                    const {p: _s} = $e
                      , Gt = Li(_s.resources)
                      , Mt = [Vn(_s.iss)]
                      , Jt = Hi(_s.iss);
                    if (Gt) {
                        const Ks = ha(Gt)
                          , Ii = pa(Gt);
                        Te.push(...Ks),
                        Mt.push(...Ii)
                    }
                    for (const Ks of Mt)
                        Le.push(`${Ks}:${Jt}`)
                }
                const Je = await this.client.core.crypto.generateSharedKey(O, pe.publicKey);
                let Re;
                Te.length > 0 && (Re = {
                    topic: Je,
                    acknowledged: !0,
                    self: {
                        publicKey: O,
                        metadata: this.client.metadata
                    },
                    peer: pe,
                    controller: pe.publicKey,
                    expiry: De(Xs),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: b,
                    namespaces: Ma([...new Set(Te)], [...new Set(Le)]),
                    transportType: o
                },
                await this.client.core.relayer.subscribe(Je, {
                    transportType: o
                }),
                await this.client.session.set(Je, Re),
                b && await this.client.core.pairing.updateMetadata({
                    topic: b,
                    metadata: pe.metadata
                }),
                Re = this.client.session.get(Je)),
                (G = this.client.metadata.redirect) != null && G.linkMode && (Q = pe.metadata.redirect) != null && Q.linkMode && (se = pe.metadata.redirect) != null && se.universal && r && (this.client.core.addLinkModeSupportedApp(pe.metadata.redirect.universal),
                this.client.session.update(Je, {
                    transportType: Ae.link_mode
                })),
                C({
                    auths: Ce,
                    session: Re
                })
            }
            ;
            this.events.once(E, A),
            this.events.once(k, B);
            let j;
            try {
                if (n) {
                    const T = Ds("wc_sessionAuthenticate", _, H);
                    this.client.core.history.set(b, T);
                    const G = await this.client.core.crypto.encode("", T, {
                        type: vi,
                        encoding: ms
                    });
                    j = ki(r, b, G)
                } else
                    await Promise.all([this.sendRequest({
                        topic: b,
                        method: "wc_sessionAuthenticate",
                        params: _,
                        expiry: s.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: H
                    }), this.sendRequest({
                        topic: b,
                        method: "wc_sessionPropose",
                        params: v,
                        expiry: Be.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: v.id
                    })])
            } catch (T) {
                throw this.events.off(E, A),
                this.events.off(k, B),
                T
            }
            return await this.setProposal(v.id, v),
            await this.setAuthRequest(H, {
                request: et(be({}, _), {
                    verifyContext: {}
                }),
                pairingTopic: b,
                transportType: o
            }),
            {
                uri: j ?? I,
                response: x
            }
        }
        ),
        N(this, "approveSessionAuthenticate", async s => {
            const {id: r, auths: i} = s
              , n = this.client.core.eventClient.createEvent({
                properties: {
                    topic: r.toString(),
                    trace: [ks.authenticated_session_approve_started]
                }
            });
            try {
                this.isInitialized()
            } catch (g) {
                throw n.setError(Fr.no_internet_connection),
                g
            }
            const o = this.getPendingAuthRequest(r);
            if (!o)
                throw n.setError(Fr.authenticated_session_pending_request_not_found),
                new Error(`Could not find pending auth request with id ${r}`);
            const a = o.transportType || Ae.relay;
            a === Ae.relay && await this.confirmOnlineStateOrThrow();
            const c = o.requester.publicKey
              , l = await this.client.core.crypto.generateKeyPair()
              , d = Mi(c)
              , u = {
                type: ns,
                receiverPublicKey: c,
                senderPublicKey: l
            }
              , p = []
              , f = [];
            for (const g of i) {
                if (!await ua({
                    cacao: g,
                    projectId: this.client.core.projectId
                })) {
                    n.setError(Fr.invalid_cacao);
                    const R = we("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw await this.sendError({
                        id: r,
                        topic: d,
                        error: R,
                        encodeOpts: u
                    }),
                    new Error(R.message)
                }
                n.addTrace(ks.cacaos_verified);
                const {p: y} = g
                  , b = Li(y.resources)
                  , I = [Vn(y.iss)]
                  , O = Hi(y.iss);
                if (b) {
                    const R = ha(b)
                      , P = pa(b);
                    p.push(...R),
                    I.push(...P)
                }
                for (const R of I)
                    f.push(`${R}:${O}`)
            }
            const m = await this.client.core.crypto.generateSharedKey(l, c);
            n.addTrace(ks.create_authenticated_session_topic);
            let w;
            if (p?.length > 0) {
                w = {
                    topic: m,
                    acknowledged: !0,
                    self: {
                        publicKey: l,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: c,
                        metadata: o.requester.metadata
                    },
                    controller: c,
                    expiry: De(Xs),
                    authentication: i,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: o.pairingTopic,
                    namespaces: Ma([...new Set(p)], [...new Set(f)]),
                    transportType: a
                },
                n.addTrace(ks.subscribing_authenticated_session_topic);
                try {
                    await this.client.core.relayer.subscribe(m, {
                        transportType: a
                    })
                } catch (g) {
                    throw n.setError(Fr.subscribe_authenticated_session_topic_failure),
                    g
                }
                n.addTrace(ks.subscribe_authenticated_session_topic_success),
                await this.client.session.set(m, w),
                n.addTrace(ks.store_authenticated_session),
                await this.client.core.pairing.updateMetadata({
                    topic: o.pairingTopic,
                    metadata: o.requester.metadata
                })
            }
            n.addTrace(ks.publishing_authenticated_session_approve);
            try {
                await this.sendResult({
                    topic: d,
                    id: r,
                    result: {
                        cacaos: i,
                        responder: {
                            publicKey: l,
                            metadata: this.client.metadata
                        }
                    },
                    encodeOpts: u,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
                })
            } catch (g) {
                throw n.setError(Fr.authenticated_session_approve_publish_failure),
                g
            }
            return await this.client.auth.requests.delete(r, {
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
                session: w
            }
        }
        ),
        N(this, "rejectSessionAuthenticate", async s => {
            this.isInitialized();
            const {id: r, reason: i} = s
              , n = this.getPendingAuthRequest(r);
            if (!n)
                throw new Error(`Could not find pending auth request with id ${r}`);
            n.transportType === Ae.relay && await this.confirmOnlineStateOrThrow();
            const o = n.requester.publicKey
              , a = await this.client.core.crypto.generateKeyPair()
              , c = Mi(o)
              , l = {
                type: ns,
                receiverPublicKey: o,
                senderPublicKey: a
            };
            await this.sendError({
                id: r,
                topic: c,
                error: i,
                encodeOpts: l,
                rpcOpts: Be.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType)
            }),
            await this.client.auth.requests.delete(r, {
                message: "rejected",
                code: 0
            }),
            await this.client.proposal.delete(r, we("USER_DISCONNECTED"))
        }
        ),
        N(this, "formatAuthMessage", s => {
            this.isInitialized();
            const {request: r, iss: i} = s;
            return dl(r, i)
        }
        ),
        N(this, "processRelayMessageCache", () => {
            setTimeout(async () => {
                if (this.relayMessageCache.length !== 0)
                    for (; this.relayMessageCache.length > 0; )
                        try {
                            const s = this.relayMessageCache.shift();
                            s && await this.onRelayMessage(s)
                        } catch (s) {
                            this.client.logger.error(s)
                        }
            }
            , 50)
        }
        ),
        N(this, "cleanupDuplicatePairings", async s => {
            if (s.pairingTopic)
                try {
                    const r = this.client.core.pairing.pairings.get(s.pairingTopic)
                      , i = this.client.core.pairing.pairings.getAll().filter(n => {
                        var o, a;
                        return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === s.peer.metadata.url && n.topic && n.topic !== r.topic
                    }
                    );
                    if (i.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`),
                    await Promise.all(i.map(n => this.client.core.pairing.disconnect({
                        topic: n.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (r) {
                    this.client.logger.error(r)
                }
        }
        ),
        N(this, "deleteSession", async s => {
            var r;
            const {topic: i, expirerHasDeleted: n=!1, emitEvent: o=!0, id: a=0} = s
              , {self: c} = this.client.session.get(i);
            await this.client.core.relayer.unsubscribe(i),
            await this.client.session.delete(i, we("USER_DISCONNECTED")),
            this.addToRecentlyDeleted(i, "session"),
            this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey),
            this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i),
            n || this.client.core.expirer.del(i),
            this.client.core.storage.removeItem(gc).catch(l => this.client.logger.warn(l)),
            this.getPendingSessionRequests().forEach(l => {
                l.topic === i && this.deletePendingSessionRequest(l.id, we("USER_DISCONNECTED"))
            }
            ),
            i === ((r = this.sessionRequestQueue.queue[0]) == null ? void 0 : r.topic) && (this.sessionRequestQueue.state = jt.idle),
            o && this.client.events.emit("session_delete", {
                id: a,
                topic: i
            })
        }
        ),
        N(this, "deleteProposal", async (s, r) => {
            if (r)
                try {
                    const i = this.client.proposal.get(s);
                    this.client.core.eventClient.getEvent({
                        topic: i.pairingTopic
                    })?.setError(Ps.proposal_expired)
                } catch {}
            await Promise.all([this.client.proposal.delete(s, we("USER_DISCONNECTED")), r ? Promise.resolve() : this.client.core.expirer.del(s)]),
            this.addToRecentlyDeleted(s, "proposal")
        }
        ),
        N(this, "deletePendingSessionRequest", async (s, r, i=!1) => {
            await Promise.all([this.client.pendingRequest.delete(s, r), i ? Promise.resolve() : this.client.core.expirer.del(s)]),
            this.addToRecentlyDeleted(s, "request"),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(n => n.id !== s),
            i && (this.sessionRequestQueue.state = jt.idle,
            this.client.events.emit("session_request_expire", {
                id: s
            }))
        }
        ),
        N(this, "deletePendingAuthRequest", async (s, r, i=!1) => {
            await Promise.all([this.client.auth.requests.delete(s, r), i ? Promise.resolve() : this.client.core.expirer.del(s)])
        }
        ),
        N(this, "setExpiry", async (s, r) => {
            this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, r),
            await this.client.session.update(s, {
                expiry: r
            }))
        }
        ),
        N(this, "setProposal", async (s, r) => {
            this.client.core.expirer.set(s, De(Be.wc_sessionPropose.req.ttl)),
            await this.client.proposal.set(s, r)
        }
        ),
        N(this, "setAuthRequest", async (s, r) => {
            const {request: i, pairingTopic: n, transportType: o=Ae.relay} = r;
            this.client.core.expirer.set(s, i.expiryTimestamp),
            await this.client.auth.requests.set(s, {
                authPayload: i.authPayload,
                requester: i.requester,
                expiryTimestamp: i.expiryTimestamp,
                id: s,
                pairingTopic: n,
                verifyContext: i.verifyContext,
                transportType: o
            })
        }
        ),
        N(this, "setPendingSessionRequest", async s => {
            const {id: r, topic: i, params: n, verifyContext: o} = s
              , a = n.request.expiryTimestamp || De(Be.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(r, a),
            await this.client.pendingRequest.set(r, {
                id: r,
                topic: i,
                params: n,
                verifyContext: o
            })
        }
        ),
        N(this, "sendRequest", async s => {
            const {topic: r, method: i, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: u} = s
              , p = Ds(i, n, c);
            let f;
            const m = !!d;
            try {
                const y = m ? ms : Dt;
                f = await this.client.core.crypto.encode(r, p, {
                    encoding: y
                })
            } catch (y) {
                throw await this.cleanup(),
                this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${r} failed`),
                y
            }
            let w;
            if (kb.includes(i)) {
                const y = Ht(JSON.stringify(p))
                  , b = Ht(f);
                w = await this.client.core.verify.register({
                    id: b,
                    decryptedId: y
                })
            }
            const g = Be[i].req;
            if (g.attestation = w,
            o && (g.ttl = o),
            a && (g.id = a),
            this.client.core.history.set(r, p),
            m) {
                const y = ki(d, r, f);
                await re.Linking.openURL(y, this.client.name)
            } else {
                const y = Be[i].req;
                o && (y.ttl = o),
                a && (y.id = a),
                y.tvf = et(be({}, u), {
                    correlationId: p.id
                }),
                l ? (y.internal = et(be({}, y.internal), {
                    throwOnFailedPublish: !0
                }),
                await this.client.core.relayer.publish(r, f, y)) : this.client.core.relayer.publish(r, f, y).catch(b => this.client.logger.error(b))
            }
            return p.id
        }
        ),
        N(this, "sendResult", async s => {
            const {id: r, topic: i, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c} = s
              , l = Yi(r, n);
            let d;
            const u = c && typeof (re == null ? void 0 : re.Linking) < "u";
            try {
                const m = u ? ms : Dt;
                d = await this.client.core.crypto.encode(i, l, et(be({}, a || {}), {
                    encoding: m
                }))
            } catch (m) {
                throw await this.cleanup(),
                this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${i} failed`),
                m
            }
            let p, f;
            try {
                p = await this.client.core.history.get(i, r);
                const m = p.request;
                try {
                    this.shouldSetTVF(m.method, m.params) && (f = this.getTVFParams(r, m.params, n))
                } catch (w) {
                    this.client.logger.warn("sendResult() -> getTVFParams() failed", w)
                }
            } catch (m) {
                throw this.client.logger.error(`sendResult() -> history.get(${i}, ${r}) failed`),
                m
            }
            if (u) {
                const m = ki(c, i, d);
                await re.Linking.openURL(m, this.client.name)
            } else {
                const m = p.request.method
                  , w = Be[m].res;
                w.tvf = et(be({}, f), {
                    correlationId: r
                }),
                o ? (w.internal = et(be({}, w.internal), {
                    throwOnFailedPublish: !0
                }),
                await this.client.core.relayer.publish(i, d, w)) : this.client.core.relayer.publish(i, d, w).catch(g => this.client.logger.error(g))
            }
            await this.client.core.history.resolve(l)
        }
        ),
        N(this, "sendError", async s => {
            const {id: r, topic: i, error: n, encodeOpts: o, rpcOpts: a, appLink: c} = s
              , l = Lc(r, n);
            let d;
            const u = c && typeof (re == null ? void 0 : re.Linking) < "u";
            try {
                const f = u ? ms : Dt;
                d = await this.client.core.crypto.encode(i, l, et(be({}, o || {}), {
                    encoding: f
                }))
            } catch (f) {
                throw await this.cleanup(),
                this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${i} failed`),
                f
            }
            let p;
            try {
                p = await this.client.core.history.get(i, r)
            } catch (f) {
                throw this.client.logger.error(`sendError() -> history.get(${i}, ${r}) failed`),
                f
            }
            if (u) {
                const f = ki(c, i, d);
                await re.Linking.openURL(f, this.client.name)
            } else {
                const f = p.request.method
                  , m = a || Be[f].res;
                this.client.core.relayer.publish(i, d, m)
            }
            await this.client.core.history.resolve(l)
        }
        ),
        N(this, "cleanup", async () => {
            const s = []
              , r = [];
            this.client.session.getAll().forEach(i => {
                let n = !1;
                fs(i.expiry) && (n = !0),
                this.client.core.crypto.keychain.has(i.topic) || (n = !0),
                n && s.push(i.topic)
            }
            ),
            this.client.proposal.getAll().forEach(i => {
                fs(i.expiryTimestamp) && r.push(i.id)
            }
            ),
            await Promise.all([...s.map(i => this.deleteSession({
                topic: i
            })), ...r.map(i => this.deleteProposal(i))])
        }
        ),
        N(this, "onProviderMessageEvent", async s => {
            !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s)
        }
        ),
        N(this, "onRelayEventRequest", async s => {
            this.requestQueue.queue.push(s),
            await this.processRequestsQueue()
        }
        ),
        N(this, "processRequestsQueue", async () => {
            if (this.requestQueue.state === jt.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = jt.active;
                const s = this.requestQueue.queue.shift();
                if (s)
                    try {
                        await this.processRequest(s)
                    } catch (r) {
                        this.client.logger.warn(r)
                    }
            }
            this.requestQueue.state = jt.idle
        }
        ),
        N(this, "processRequest", async s => {
            const {topic: r, payload: i, attestation: n, transportType: o, encryptedId: a} = s
              , c = i.method;
            if (!this.shouldIgnorePairingRequest({
                topic: r,
                requestMethod: c
            }))
                switch (c) {
                case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                        topic: r,
                        payload: i,
                        attestation: n,
                        encryptedId: a
                    });
                case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(r, i);
                case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(r, i);
                case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(r, i);
                case "wc_sessionPing":
                    return await this.onSessionPingRequest(r, i);
                case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(r, i);
                case "wc_sessionRequest":
                    return await this.onSessionRequest({
                        topic: r,
                        payload: i,
                        attestation: n,
                        encryptedId: a,
                        transportType: o
                    });
                case "wc_sessionEvent":
                    return await this.onSessionEventRequest(r, i);
                case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                        topic: r,
                        payload: i,
                        attestation: n,
                        encryptedId: a,
                        transportType: o
                    });
                default:
                    return this.client.logger.info(`Unsupported request method ${c}`)
                }
        }
        ),
        N(this, "onRelayEventResponse", async s => {
            const {topic: r, payload: i, transportType: n} = s
              , o = (await this.client.core.history.get(r, i.id)).request.method;
            switch (o) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(r, i, n);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(r, i);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(r, i);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(r, i);
            case "wc_sessionPing":
                return this.onSessionPingResponse(r, i);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(r, i);
            case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(r, i);
            default:
                return this.client.logger.info(`Unsupported response method ${o}`)
            }
        }
        ),
        N(this, "onRelayEventUnknownPayload", s => {
            const {topic: r} = s
              , {message: i} = $("MISSING_OR_INVALID", `Decoded payload on topic ${r} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(i)
        }
        ),
        N(this, "shouldIgnorePairingRequest", s => {
            const {topic: r, requestMethod: i} = s
              , n = this.expectedPairingMethodMap.get(r);
            return !n || n.includes(i) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
        }
        ),
        N(this, "onSessionProposeRequest", async s => {
            const {topic: r, payload: i, attestation: n, encryptedId: o} = s
              , {params: a, id: c} = i;
            try {
                const l = this.client.core.eventClient.getEvent({
                    topic: r
                });
                this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"),
                l?.setError(ts.proposal_listener_not_found)),
                this.isValidConnect(be({}, i.params));
                const d = a.expiryTimestamp || De(Be.wc_sessionPropose.req.ttl)
                  , u = be({
                    id: c,
                    pairingTopic: r,
                    expiryTimestamp: d
                }, a);
                await this.setProposal(c, u);
                const p = await this.getVerifyContext({
                    attestationId: n,
                    hash: Ht(JSON.stringify(i)),
                    encryptedId: o,
                    metadata: u.proposer.metadata
                });
                l?.addTrace(Ft.emit_session_proposal),
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: u,
                    verifyContext: p
                })
            } catch (l) {
                await this.sendError({
                    id: c,
                    topic: r,
                    error: l,
                    rpcOpts: Be.wc_sessionPropose.autoReject
                }),
                this.client.logger.error(l)
            }
        }
        ),
        N(this, "onSessionProposeResponse", async (s, r, i) => {
            const {id: n} = r;
            if (es(r)) {
                const {result: o} = r;
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
                const l = o.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: l
                });
                const d = await this.client.core.crypto.generateSharedKey(c, l);
                this.pendingSessions.set(n, {
                    sessionTopic: d,
                    pairingTopic: s,
                    proposalId: n,
                    publicKey: c
                });
                const u = await this.client.core.relayer.subscribe(d, {
                    transportType: i
                });
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: u
                }),
                await this.client.core.pairing.activate({
                    topic: s
                })
            } else if (Wt(r)) {
                await this.client.proposal.delete(n, we("USER_DISCONNECTED"));
                const o = ge("session_connect", n);
                if (this.events.listenerCount(o) === 0)
                    throw new Error(`emitting ${o} without any listeners, 954`);
                this.events.emit(o, {
                    error: r.error
                })
            }
        }
        ),
        N(this, "onSessionSettleRequest", async (s, r) => {
            const {id: i, params: n} = r;
            try {
                this.isValidSessionSettleRequest(n);
                const {relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: p} = r.params
                  , f = [...this.pendingSessions.values()].find(g => g.sessionTopic === s);
                if (!f)
                    return this.client.logger.error(`Pending session not found for topic ${s}`);
                const m = this.client.proposal.get(f.proposalId)
                  , w = et(be(be(be({
                    topic: s,
                    relay: o,
                    expiry: c,
                    namespaces: l,
                    acknowledged: !0,
                    pairingTopic: f.pairingTopic,
                    requiredNamespaces: m.requiredNamespaces,
                    optionalNamespaces: m.optionalNamespaces,
                    controller: a.publicKey,
                    self: {
                        publicKey: f.publicKey,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: a.publicKey,
                        metadata: a.metadata
                    }
                }, d && {
                    sessionProperties: d
                }), u && {
                    scopedProperties: u
                }), p && {
                    sessionConfig: p
                }), {
                    transportType: Ae.relay
                });
                await this.client.session.set(w.topic, w),
                await this.setExpiry(w.topic, w.expiry),
                await this.client.core.pairing.updateMetadata({
                    topic: f.pairingTopic,
                    metadata: w.peer.metadata
                }),
                this.client.events.emit("session_connect", {
                    session: w
                }),
                this.events.emit(ge("session_connect", f.proposalId), {
                    session: w
                }),
                this.pendingSessions.delete(f.proposalId),
                this.deleteProposal(f.proposalId, !1),
                this.cleanupDuplicatePairings(w),
                await this.sendResult({
                    id: r.id,
                    topic: s,
                    result: !0,
                    throwOnFailedPublish: !0
                })
            } catch (o) {
                await this.sendError({
                    id: i,
                    topic: s,
                    error: o
                }),
                this.client.logger.error(o)
            }
        }
        ),
        N(this, "onSessionSettleResponse", async (s, r) => {
            const {id: i} = r;
            es(r) ? (await this.client.session.update(s, {
                acknowledged: !0
            }),
            this.events.emit(ge("session_approve", i), {})) : Wt(r) && (await this.client.session.delete(s, we("USER_DISCONNECTED")),
            this.events.emit(ge("session_approve", i), {
                error: r.error
            }))
        }
        ),
        N(this, "onSessionUpdateRequest", async (s, r) => {
            const {params: i, id: n} = r;
            try {
                const o = `${s}_session_update`
                  , a = qr.get(o);
                if (a && this.isRequestOutOfSync(a, n)) {
                    this.client.logger.warn(`Discarding out of sync request - ${n}`),
                    this.sendError({
                        id: n,
                        topic: s,
                        error: we("INVALID_UPDATE_REQUEST")
                    });
                    return
                }
                this.isValidUpdate(be({
                    topic: s
                }, i));
                try {
                    qr.set(o, n),
                    await this.client.session.update(s, {
                        namespaces: i.namespaces
                    }),
                    await this.sendResult({
                        id: n,
                        topic: s,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (c) {
                    throw qr.delete(o),
                    c
                }
                this.client.events.emit("session_update", {
                    id: n,
                    topic: s,
                    params: i
                })
            } catch (o) {
                await this.sendError({
                    id: n,
                    topic: s,
                    error: o
                }),
                this.client.logger.error(o)
            }
        }
        ),
        N(this, "isRequestOutOfSync", (s, r) => r.toString().slice(0, -3) < s.toString().slice(0, -3)),
        N(this, "onSessionUpdateResponse", (s, r) => {
            const {id: i} = r
              , n = ge("session_update", i);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            es(r) ? this.events.emit(ge("session_update", i), {}) : Wt(r) && this.events.emit(ge("session_update", i), {
                error: r.error
            })
        }
        ),
        N(this, "onSessionExtendRequest", async (s, r) => {
            const {id: i} = r;
            try {
                this.isValidExtend({
                    topic: s
                }),
                await this.setExpiry(s, De(Xs)),
                await this.sendResult({
                    id: i,
                    topic: s,
                    result: !0,
                    throwOnFailedPublish: !0
                }),
                this.client.events.emit("session_extend", {
                    id: i,
                    topic: s
                })
            } catch (n) {
                await this.sendError({
                    id: i,
                    topic: s,
                    error: n
                }),
                this.client.logger.error(n)
            }
        }
        ),
        N(this, "onSessionExtendResponse", (s, r) => {
            const {id: i} = r
              , n = ge("session_extend", i);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            es(r) ? this.events.emit(ge("session_extend", i), {}) : Wt(r) && this.events.emit(ge("session_extend", i), {
                error: r.error
            })
        }
        ),
        N(this, "onSessionPingRequest", async (s, r) => {
            const {id: i} = r;
            try {
                this.isValidPing({
                    topic: s
                }),
                await this.sendResult({
                    id: i,
                    topic: s,
                    result: !0,
                    throwOnFailedPublish: !0
                }),
                this.client.events.emit("session_ping", {
                    id: i,
                    topic: s
                })
            } catch (n) {
                await this.sendError({
                    id: i,
                    topic: s,
                    error: n
                }),
                this.client.logger.error(n)
            }
        }
        ),
        N(this, "onSessionPingResponse", (s, r) => {
            const {id: i} = r
              , n = ge("session_ping", i);
            setTimeout( () => {
                if (this.events.listenerCount(n) === 0)
                    throw new Error(`emitting ${n} without any listeners 2176`);
                es(r) ? this.events.emit(ge("session_ping", i), {}) : Wt(r) && this.events.emit(ge("session_ping", i), {
                    error: r.error
                })
            }
            , 500)
        }
        ),
        N(this, "onSessionDeleteRequest", async (s, r) => {
            const {id: i} = r;
            try {
                this.isValidDisconnect({
                    topic: s,
                    reason: r.params
                }),
                Promise.all([new Promise(n => {
                    this.client.core.relayer.once(je.publish, async () => {
                        n(await this.deleteSession({
                            topic: s,
                            id: i
                        }))
                    }
                    )
                }
                ), this.sendResult({
                    id: i,
                    topic: s,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: s,
                    error: we("USER_DISCONNECTED")
                })]).catch(n => this.client.logger.error(n))
            } catch (n) {
                this.client.logger.error(n)
            }
        }
        ),
        N(this, "onSessionRequest", async s => {
            var r, i, n;
            const {topic: o, payload: a, attestation: c, encryptedId: l, transportType: d} = s
              , {id: u, params: p} = a;
            try {
                await this.isValidRequest(be({
                    topic: o
                }, p));
                const f = this.client.session.get(o)
                  , m = await this.getVerifyContext({
                    attestationId: c,
                    hash: Ht(JSON.stringify(Ds("wc_sessionRequest", p, u))),
                    encryptedId: l,
                    metadata: f.peer.metadata,
                    transportType: d
                })
                  , w = {
                    id: u,
                    topic: o,
                    params: p,
                    verifyContext: m
                };
                await this.setPendingSessionRequest(w),
                d === Ae.link_mode && (r = f.peer.metadata.redirect) != null && r.universal && this.client.core.addLinkModeSupportedApp((i = f.peer.metadata.redirect) == null ? void 0 : i.universal),
                (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(w) : (this.addSessionRequestToSessionRequestQueue(w),
                this.processSessionRequestQueue())
            } catch (f) {
                await this.sendError({
                    id: u,
                    topic: o,
                    error: f
                }),
                this.client.logger.error(f)
            }
        }
        ),
        N(this, "onSessionRequestResponse", (s, r) => {
            const {id: i} = r
              , n = ge("session_request", i);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            es(r) ? this.events.emit(ge("session_request", i), {
                result: r.result
            }) : Wt(r) && this.events.emit(ge("session_request", i), {
                error: r.error
            })
        }
        ),
        N(this, "onSessionEventRequest", async (s, r) => {
            const {id: i, params: n} = r;
            try {
                const o = `${s}_session_event_${n.event.name}`
                  , a = qr.get(o);
                if (a && this.isRequestOutOfSync(a, i)) {
                    this.client.logger.info(`Discarding out of sync request - ${i}`);
                    return
                }
                this.isValidEmit(be({
                    topic: s
                }, n)),
                this.client.events.emit("session_event", {
                    id: i,
                    topic: s,
                    params: n
                }),
                qr.set(o, i)
            } catch (o) {
                await this.sendError({
                    id: i,
                    topic: s,
                    error: o
                }),
                this.client.logger.error(o)
            }
        }
        ),
        N(this, "onSessionAuthenticateResponse", (s, r) => {
            const {id: i} = r;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: s,
                payload: r
            }),
            es(r) ? this.events.emit(ge("session_request", i), {
                result: r.result
            }) : Wt(r) && this.events.emit(ge("session_request", i), {
                error: r.error
            })
        }
        ),
        N(this, "onSessionAuthenticateRequest", async s => {
            var r;
            const {topic: i, payload: n, attestation: o, encryptedId: a, transportType: c} = s;
            try {
                const {requester: l, authPayload: d, expiryTimestamp: u} = n.params
                  , p = await this.getVerifyContext({
                    attestationId: o,
                    hash: Ht(JSON.stringify(n)),
                    encryptedId: a,
                    metadata: l.metadata,
                    transportType: c
                })
                  , f = {
                    requester: l,
                    pairingTopic: i,
                    id: n.id,
                    authPayload: d,
                    verifyContext: p,
                    expiryTimestamp: u
                };
                await this.setAuthRequest(n.id, {
                    request: f,
                    pairingTopic: i,
                    transportType: c
                }),
                c === Ae.link_mode && (r = l.metadata.redirect) != null && r.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),
                this.client.events.emit("session_authenticate", {
                    topic: i,
                    params: n.params,
                    id: n.id,
                    verifyContext: p
                })
            } catch (l) {
                this.client.logger.error(l);
                const d = n.params.requester.publicKey
                  , u = await this.client.core.crypto.generateKeyPair()
                  , p = this.getAppLinkIfEnabled(n.params.requester.metadata, c)
                  , f = {
                    type: ns,
                    receiverPublicKey: d,
                    senderPublicKey: u
                };
                await this.sendError({
                    id: n.id,
                    topic: i,
                    error: l,
                    encodeOpts: f,
                    rpcOpts: Be.wc_sessionAuthenticate.autoReject,
                    appLink: p
                })
            }
        }
        ),
        N(this, "addSessionRequestToSessionRequestQueue", s => {
            this.sessionRequestQueue.queue.push(s)
        }
        ),
        N(this, "cleanupAfterResponse", s => {
            this.deletePendingSessionRequest(s.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout( () => {
                this.sessionRequestQueue.state = jt.idle,
                this.processSessionRequestQueue()
            }
            , U.toMiliseconds(this.requestQueueDelay))
        }
        ),
        N(this, "cleanupPendingSentRequestsForTopic", ({topic: s, error: r}) => {
            const i = this.client.core.history.pending;
            i.length > 0 && i.filter(n => n.topic === s && n.request.method === "wc_sessionRequest").forEach(n => {
                const o = n.request.id
                  , a = ge("session_request", o);
                if (this.events.listenerCount(a) === 0)
                    throw new Error(`emitting ${a} without any listeners`);
                this.events.emit(ge("session_request", n.request.id), {
                    error: r
                })
            }
            )
        }
        ),
        N(this, "processSessionRequestQueue", () => {
            if (this.sessionRequestQueue.state === jt.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const s = this.sessionRequestQueue.queue[0];
            if (!s) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = jt.active,
                this.emitSessionRequest(s)
            } catch (r) {
                this.client.logger.error(r)
            }
        }
        ),
        N(this, "emitSessionRequest", s => {
            this.client.events.emit("session_request", s)
        }
        ),
        N(this, "onPairingCreated", s => {
            if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods),
            s.active)
                return;
            const r = this.client.proposal.getAll().find(i => i.pairingTopic === s.topic);
            r && this.onSessionProposeRequest({
                topic: s.topic,
                payload: Ds("wc_sessionPropose", et(be({}, r), {
                    requiredNamespaces: r.requiredNamespaces,
                    optionalNamespaces: r.optionalNamespaces,
                    relays: r.relays,
                    proposer: r.proposer,
                    sessionProperties: r.sessionProperties,
                    scopedProperties: r.scopedProperties
                }), r.id)
            })
        }
        ),
        N(this, "isValidConnect", async s => {
            if (!ct(s)) {
                const {message: l} = $("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
                throw new Error(l)
            }
            const {pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c} = s;
            if (Ke(r) || await this.isValidPairingTopic(r),
            !Nf(c)) {
                const {message: l} = $("MISSING_OR_INVALID", `connect() relays: ${c}`);
                throw new Error(l)
            }
            if (!Ke(i) && Es(i) !== 0) {
                const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l),
                this.validateNamespaces(i, "requiredNamespaces")
            }
            if (!Ke(n) && Es(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"),
            Ke(o) || this.validateSessionProps(o, "sessionProperties"),
            !Ke(a)) {
                this.validateSessionProps(a, "scopedProperties");
                const l = Object.keys(i || {}).concat(Object.keys(n || {}));
                if (!Object.keys(a).every(d => l.includes(d)))
                    throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`)
            }
        }
        ),
        N(this, "validateNamespaces", (s, r) => {
            const i = If(s, "connect()", r);
            if (i)
                throw new Error(i.message)
        }
        ),
        N(this, "isValidApprove", async s => {
            if (!ct(s))
                throw new Error($("MISSING_OR_INVALID", `approve() params: ${s}`).message);
            const {id: r, namespaces: i, relayProtocol: n, sessionProperties: o, scopedProperties: a} = s;
            this.checkRecentlyDeleted(r),
            await this.isValidProposalId(r);
            const c = this.client.proposal.get(r)
              , l = In(i, "approve()");
            if (l)
                throw new Error(l.message);
            const d = ja(c.requiredNamespaces, i, "approve()");
            if (d)
                throw new Error(d.message);
            if (!xe(n, !0)) {
                const {message: u} = $("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                throw new Error(u)
            }
            if (Ke(o) || this.validateSessionProps(o, "sessionProperties"),
            !Ke(a)) {
                this.validateSessionProps(a, "scopedProperties");
                const u = new Set(Object.keys(i));
                if (!Object.keys(a).every(p => u.has(p)))
                    throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`)
            }
        }
        ),
        N(this, "isValidReject", async s => {
            if (!ct(s)) {
                const {message: n} = $("MISSING_OR_INVALID", `reject() params: ${s}`);
                throw new Error(n)
            }
            const {id: r, reason: i} = s;
            if (this.checkRecentlyDeleted(r),
            await this.isValidProposalId(r),
            !_f(i)) {
                const {message: n} = $("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
                throw new Error(n)
            }
        }
        ),
        N(this, "isValidSessionSettleRequest", s => {
            if (!ct(s)) {
                const {message: l} = $("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
                throw new Error(l)
            }
            const {relay: r, controller: i, namespaces: n, expiry: o} = s;
            if (!Dl(r)) {
                const {message: l} = $("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(l)
            }
            const a = wf(i, "onSessionSettleRequest()");
            if (a)
                throw new Error(a.message);
            const c = In(n, "onSessionSettleRequest()");
            if (c)
                throw new Error(c.message);
            if (fs(o)) {
                const {message: l} = $("EXPIRED", "onSessionSettleRequest()");
                throw new Error(l)
            }
        }
        ),
        N(this, "isValidUpdate", async s => {
            if (!ct(s)) {
                const {message: c} = $("MISSING_OR_INVALID", `update() params: ${s}`);
                throw new Error(c)
            }
            const {topic: r, namespaces: i} = s;
            this.checkRecentlyDeleted(r),
            await this.isValidSessionTopic(r);
            const n = this.client.session.get(r)
              , o = In(i, "update()");
            if (o)
                throw new Error(o.message);
            const a = ja(n.requiredNamespaces, i, "update()");
            if (a)
                throw new Error(a.message)
        }
        ),
        N(this, "isValidExtend", async s => {
            if (!ct(s)) {
                const {message: i} = $("MISSING_OR_INVALID", `extend() params: ${s}`);
                throw new Error(i)
            }
            const {topic: r} = s;
            this.checkRecentlyDeleted(r),
            await this.isValidSessionTopic(r)
        }
        ),
        N(this, "isValidRequest", async s => {
            if (!ct(s)) {
                const {message: c} = $("MISSING_OR_INVALID", `request() params: ${s}`);
                throw new Error(c)
            }
            const {topic: r, request: i, chainId: n, expiry: o} = s;
            this.checkRecentlyDeleted(r),
            await this.isValidSessionTopic(r);
            const {namespaces: a} = this.client.session.get(r);
            if (!qa(a, n)) {
                const {message: c} = $("MISSING_OR_INVALID", `request() chainId: ${n}`);
                throw new Error(c)
            }
            if (!Sf(i)) {
                const {message: c} = $("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                throw new Error(c)
            }
            if (!Tf(a, n, i.method)) {
                const {message: c} = $("MISSING_OR_INVALID", `request() method: ${i.method}`);
                throw new Error(c)
            }
            if (o && !$f(o, Tn)) {
                const {message: c} = $("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Tn.min} and ${Tn.max}`);
                throw new Error(c)
            }
        }
        ),
        N(this, "isValidRespond", async s => {
            var r;
            if (!ct(s)) {
                const {message: o} = $("MISSING_OR_INVALID", `respond() params: ${s}`);
                throw new Error(o)
            }
            const {topic: i, response: n} = s;
            try {
                await this.isValidSessionTopic(i)
            } catch (o) {
                throw (r = s?.response) != null && r.id && this.cleanupAfterResponse(s),
                o
            }
            if (!Pf(n)) {
                const {message: o} = $("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
                throw new Error(o)
            }
        }
        ),
        N(this, "isValidPing", async s => {
            if (!ct(s)) {
                const {message: i} = $("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(i)
            }
            const {topic: r} = s;
            await this.isValidSessionOrPairingTopic(r)
        }
        ),
        N(this, "isValidEmit", async s => {
            if (!ct(s)) {
                const {message: a} = $("MISSING_OR_INVALID", `emit() params: ${s}`);
                throw new Error(a)
            }
            const {topic: r, event: i, chainId: n} = s;
            await this.isValidSessionTopic(r);
            const {namespaces: o} = this.client.session.get(r);
            if (!qa(o, n)) {
                const {message: a} = $("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                throw new Error(a)
            }
            if (!kf(i)) {
                const {message: a} = $("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                throw new Error(a)
            }
            if (!Of(o, n, i.name)) {
                const {message: a} = $("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                throw new Error(a)
            }
        }
        ),
        N(this, "isValidDisconnect", async s => {
            if (!ct(s)) {
                const {message: i} = $("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(i)
            }
            const {topic: r} = s;
            await this.isValidSessionOrPairingTopic(r)
        }
        ),
        N(this, "isValidAuthenticate", s => {
            const {chains: r, uri: i, domain: n, nonce: o} = s;
            if (!Array.isArray(r) || r.length === 0)
                throw new Error("chains is required and must be a non-empty array");
            if (!xe(i, !1))
                throw new Error("uri is required parameter");
            if (!xe(n, !1))
                throw new Error("domain is required parameter");
            if (!xe(o, !1))
                throw new Error("nonce is required parameter");
            if ([...new Set(r.map(c => br(c).namespace))].length > 1)
                throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            const {namespace: a} = br(r[0]);
            if (a !== "eip155")
                throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
        }
        ),
        N(this, "getVerifyContext", async s => {
            const {attestationId: r, hash: i, encryptedId: n, metadata: o, transportType: a} = s
              , c = {
                verified: {
                    verifyUrl: o.verifyUrl || ri,
                    validation: "UNKNOWN",
                    origin: o.url || ""
                }
            };
            try {
                if (a === Ae.link_mode) {
                    const d = this.getAppLinkIfEnabled(o, a);
                    return c.verified.validation = d && new URL(d).origin === new URL(o.url).origin ? "VALID" : "INVALID",
                    c
                }
                const l = await this.client.core.verify.resolve({
                    attestationId: r,
                    hash: i,
                    encryptedId: n,
                    verifyUrl: o.verifyUrl
                });
                l && (c.verified.origin = l.origin,
                c.verified.isScam = l.isScam,
                c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID")
            } catch (l) {
                this.client.logger.warn(l)
            }
            return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),
            c
        }
        ),
        N(this, "validateSessionProps", (s, r) => {
            Object.values(s).forEach( (i, n) => {
                if (i == null) {
                    const {message: o} = $("MISSING_OR_INVALID", `${r} must contain an existing value for each key. Received: ${i} for key ${Object.keys(s)[n]}`);
                    throw new Error(o)
                }
            }
            )
        }
        ),
        N(this, "getPendingAuthRequest", s => {
            const r = this.client.auth.requests.get(s);
            return typeof r == "object" ? r : void 0
        }
        ),
        N(this, "addToRecentlyDeleted", (s, r) => {
            if (this.recentlyDeletedMap.set(s, r),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let i = 0;
                const n = this.recentlyDeletedLimit / 2;
                for (const o of this.recentlyDeletedMap.keys()) {
                    if (i++ >= n)
                        break;
                    this.recentlyDeletedMap.delete(o)
                }
            }
        }
        ),
        N(this, "checkRecentlyDeleted", s => {
            const r = this.recentlyDeletedMap.get(s);
            if (r) {
                const {message: i} = $("MISSING_OR_INVALID", `Record was recently deleted - ${r}: ${s}`);
                throw new Error(i)
            }
        }
        ),
        N(this, "isLinkModeEnabled", (s, r) => {
            var i, n, o, a, c, l, d, u, p;
            return !s || r !== Ae.link_mode ? !1 : ((n = (i = this.client.metadata) == null ? void 0 : i.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = s?.redirect) == null ? void 0 : d.universal) !== void 0 && ((u = s?.redirect) == null ? void 0 : u.universal) !== "" && ((p = s?.redirect) == null ? void 0 : p.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (re == null ? void 0 : re.Linking) < "u"
        }
        ),
        N(this, "getAppLinkIfEnabled", (s, r) => {
            var i;
            return this.isLinkModeEnabled(s, r) ? (i = s?.redirect) == null ? void 0 : i.universal : void 0
        }
        ),
        N(this, "handleLinkModeMessage", ({url: s}) => {
            if (!s || !s.includes("wc_ev") || !s.includes("topic"))
                return;
            const r = sa(s, "topic") || ""
              , i = decodeURIComponent(sa(s, "wc_ev") || "")
              , n = this.client.session.keys.includes(r);
            n && this.client.session.update(r, {
                transportType: Ae.link_mode
            }),
            this.client.core.dispatchEnvelope({
                topic: r,
                message: i,
                sessionExists: n
            })
        }
        ),
        N(this, "registerLinkModeListeners", async () => {
            var s;
            if (Io() || As() && (s = this.client.metadata.redirect) != null && s.linkMode) {
                const r = re == null ? void 0 : re.Linking;
                if (typeof r < "u") {
                    r.addEventListener("url", this.handleLinkModeMessage, this.client.name);
                    const i = await r.getInitialURL();
                    i && setTimeout( () => {
                        this.handleLinkModeMessage({
                            url: i
                        })
                    }
                    , 50)
                }
            }
        }
        ),
        N(this, "shouldSetTVF", (s, r) => {
            if (!r || s !== "wc_sessionRequest")
                return !1;
            const {request: i} = r;
            return Object.keys(mc).includes(i.method)
        }
        ),
        N(this, "getTVFParams", (s, r, i) => {
            var n, o;
            try {
                const a = r.request.method
                  , c = this.extractTxHashesFromResult(a, i);
                return et(be({
                    correlationId: s,
                    rpcMethods: [a],
                    chainId: r.chainId
                }, this.isValidContractData(r.request.params) && {
                    contractAddresses: [(o = (n = r.request.params) == null ? void 0 : n[0]) == null ? void 0 : o.to]
                }), {
                    txHashes: c
                })
            } catch (a) {
                this.client.logger.warn("Error getting TVF params", a)
            }
            return {}
        }
        ),
        N(this, "isValidContractData", s => {
            var r;
            if (!s)
                return !1;
            try {
                const i = s?.data || ((r = s?.[0]) == null ? void 0 : r.data);
                if (!i.startsWith("0x"))
                    return !1;
                const n = i.slice(2);
                return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1
            } catch {}
            return !1
        }
        ),
        N(this, "extractTxHashesFromResult", (s, r) => {
            try {
                const i = mc[s];
                if (typeof r == "string")
                    return [r];
                const n = r[i.key];
                if (Cs(n))
                    return s === "solana_signAllTransactions" ? n.map(o => Qh(o)) : n;
                if (typeof n == "string")
                    return [n]
            } catch (i) {
                this.client.logger.warn("Error extracting tx hashes from result", i)
            }
            return []
        }
        )
    }
    async processPendingMessageEvents() {
        try {
            const e = this.client.session.keys
              , s = this.client.core.relayer.messages.getWithoutAck(e);
            for (const [r,i] of Object.entries(s))
                for (const n of i)
                    try {
                        await this.onProviderMessageEvent({
                            topic: r,
                            message: n,
                            publishedAt: Date.now()
                        })
                    } catch {
                        this.client.logger.warn(`Error processing pending message event for topic: ${r}, message: ${n}`)
                    }
        } catch (e) {
            this.client.logger.warn("processPendingMessageEvents failed", e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = $("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async confirmOnlineStateOrThrow() {
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(je.message, e => {
            this.onProviderMessageEvent(e)
        }
        )
    }
    async onRelayMessage(e) {
        const {topic: s, message: r, attestation: i, transportType: n} = e
          , {publicKey: o} = this.client.auth.authKeys.keys.includes(qi) ? this.client.auth.authKeys.get(qi) : {
            publicKey: void 0
        };
        try {
            const a = await this.client.core.crypto.decode(s, r, {
                receiverPublicKey: o,
                encoding: n === Ae.link_mode ? ms : Dt
            });
            vo(a) ? (this.client.core.history.set(s, a),
            await this.onRelayEventRequest({
                topic: s,
                payload: a,
                attestation: i,
                transportType: n,
                encryptedId: Ht(r)
            })) : Co(a) ? (await this.client.core.history.resolve(a),
            await this.onRelayEventResponse({
                topic: s,
                payload: a,
                transportType: n
            }),
            this.client.core.history.delete(s, a.id)) : await this.onRelayEventUnknownPayload({
                topic: s,
                payload: a,
                transportType: n
            }),
            await this.client.core.relayer.messages.ack(s, r)
        } catch (a) {
            this.client.logger.error(a)
        }
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(At.expired, async e => {
            const {topic: s, id: r} = tl(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
                return await this.deletePendingSessionRequest(r, $("EXPIRED"), !0);
            if (r && this.client.auth.requests.keys.includes(r))
                return await this.deletePendingAuthRequest(r, $("EXPIRED"), !0);
            s ? this.client.session.keys.includes(s) && (await this.deleteSession({
                topic: s,
                expirerHasDeleted: !0
            }),
            this.client.events.emit("session_expire", {
                topic: s
            })) : r && (await this.deleteProposal(r, !0),
            this.client.events.emit("proposal_expire", {
                id: r
            }))
        }
        )
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on($s.create, e => this.onPairingCreated(e)),
        this.client.core.pairing.events.on($s.delete, e => {
            this.addToRecentlyDeleted(e.topic, "pairing")
        }
        )
    }
    isValidPairingTopic(e) {
        if (!xe(e, !1)) {
            const {message: s} = $("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(s)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const {message: s} = $("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(s)
        }
        if (fs(this.client.core.pairing.pairings.get(e).expiry)) {
            const {message: s} = $("EXPIRED", `pairing topic: ${e}`);
            throw new Error(s)
        }
    }
    async isValidSessionTopic(e) {
        if (!xe(e, !1)) {
            const {message: s} = $("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
            throw new Error(s)
        }
        if (this.checkRecentlyDeleted(e),
        !this.client.session.keys.includes(e)) {
            const {message: s} = $("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
            throw new Error(s)
        }
        if (fs(this.client.session.get(e).expiry)) {
            await this.deleteSession({
                topic: e
            });
            const {message: s} = $("EXPIRED", `session topic: ${e}`);
            throw new Error(s)
        }
        if (!this.client.core.crypto.keychain.has(e)) {
            const {message: s} = $("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
            throw await this.deleteSession({
                topic: e
            }),
            new Error(s)
        }
    }
    async isValidSessionOrPairingTopic(e) {
        if (this.checkRecentlyDeleted(e),
        this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
        else if (xe(e, !1)) {
            const {message: s} = $("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
            throw new Error(s)
        } else {
            const {message: s} = $("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
            throw new Error(s)
        }
    }
    async isValidProposalId(e) {
        if (!Af(e)) {
            const {message: s} = $("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
            throw new Error(s)
        }
        if (!this.client.proposal.keys.includes(e)) {
            const {message: s} = $("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
            throw new Error(s)
        }
        if (fs(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const {message: s} = $("EXPIRED", `proposal id: ${e}`);
            throw new Error(s)
        }
    }
}
class jb extends Hs {
    constructor(e, s) {
        super(e, s, Ab, Oo),
        this.core = e,
        this.logger = s
    }
}
let Fb = class extends Hs {
    constructor(e, s) {
        super(e, s, _b, Oo),
        this.core = e,
        this.logger = s
    }
}
;
class Wb extends Hs {
    constructor(e, s) {
        super(e, s, Pb, Oo, r => r.id),
        this.core = e,
        this.logger = s
    }
}
class zb extends Hs {
    constructor(e, s) {
        super(e, s, xb, nn, () => qi),
        this.core = e,
        this.logger = s
    }
}
class Hb extends Hs {
    constructor(e, s) {
        super(e, s, Rb, nn),
        this.core = e,
        this.logger = s
    }
}
class Vb extends Hs {
    constructor(e, s) {
        super(e, s, $b, nn, r => r.id),
        this.core = e,
        this.logger = s
    }
}
var Kb = Object.defineProperty
  , Gb = (t, e, s) => e in t ? Kb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , On = (t, e, s) => Gb(t, typeof e != "symbol" ? e + "" : e, s);
class Jb {
    constructor(e, s) {
        this.core = e,
        this.logger = s,
        On(this, "authKeys"),
        On(this, "pairingTopics"),
        On(this, "requests"),
        this.authKeys = new zb(this.core,this.logger),
        this.pairingTopics = new Hb(this.core,this.logger),
        this.requests = new Vb(this.core,this.logger)
    }
    async init() {
        await this.authKeys.init(),
        await this.pairingTopics.init(),
        await this.requests.init()
    }
}
var Yb = Object.defineProperty
  , Zb = (t, e, s) => e in t ? Yb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , oe = (t, e, s) => Zb(t, typeof e != "symbol" ? e + "" : e, s);
let Xb = class sd extends Ru {
    constructor(e) {
        super(e),
        oe(this, "protocol", Ql),
        oe(this, "version", ed),
        oe(this, "name", kn.name),
        oe(this, "metadata"),
        oe(this, "core"),
        oe(this, "logger"),
        oe(this, "events", new zs.EventEmitter),
        oe(this, "engine"),
        oe(this, "session"),
        oe(this, "proposal"),
        oe(this, "pendingRequest"),
        oe(this, "auth"),
        oe(this, "signConfig"),
        oe(this, "on", (r, i) => this.events.on(r, i)),
        oe(this, "once", (r, i) => this.events.once(r, i)),
        oe(this, "off", (r, i) => this.events.off(r, i)),
        oe(this, "removeListener", (r, i) => this.events.removeListener(r, i)),
        oe(this, "removeAllListeners", r => this.events.removeAllListeners(r)),
        oe(this, "connect", async r => {
            try {
                return await this.engine.connect(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "pair", async r => {
            try {
                return await this.engine.pair(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "approve", async r => {
            try {
                return await this.engine.approve(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "reject", async r => {
            try {
                return await this.engine.reject(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "update", async r => {
            try {
                return await this.engine.update(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "extend", async r => {
            try {
                return await this.engine.extend(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "request", async r => {
            try {
                return await this.engine.request(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "respond", async r => {
            try {
                return await this.engine.respond(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "ping", async r => {
            try {
                return await this.engine.ping(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "emit", async r => {
            try {
                return await this.engine.emit(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "disconnect", async r => {
            try {
                return await this.engine.disconnect(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "find", r => {
            try {
                return this.engine.find(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "getPendingSessionRequests", () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        oe(this, "authenticate", async (r, i) => {
            try {
                return await this.engine.authenticate(r, i)
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        }
        ),
        oe(this, "formatAuthMessage", r => {
            try {
                return this.engine.formatAuthMessage(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "approveSessionAuthenticate", async r => {
            try {
                return await this.engine.approveSessionAuthenticate(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        oe(this, "rejectSessionAuthenticate", async r => {
            try {
                return await this.engine.rejectSessionAuthenticate(r)
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        this.name = e?.name || kn.name,
        this.metadata = hh(e?.metadata),
        this.signConfig = e?.signConfig;
        const s = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : bo(pi({
            level: e?.logger || kn.logger
        }));
        this.core = e?.core || new Nb(e),
        this.logger = st(s, this.name),
        this.session = new Fb(this.core,this.logger),
        this.proposal = new jb(this.core,this.logger),
        this.pendingRequest = new Wb(this.core,this.logger),
        this.engine = new qb(this),
        this.auth = new Jb(this.core,this.logger)
    }
    static async init(e) {
        const s = new sd(e);
        return await s.initialize(),
        s
    }
    get context() {
        return bt(this.logger)
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
            , U.toMiliseconds(U.ONE_SECOND))
        } catch (e) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e
        }
    }
}
;
const yc = "error"
  , Qb = "wss://relay.walletconnect.org"
  , ev = "wc"
  , tv = "universal_provider"
  , Oi = `${ev}@2:${tv}:`
  , rd = "https://rpc.walletconnect.org/v1/"
  , ur = "generic"
  , sv = `${rd}bundler`
  , Pt = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
function rv() {}
function xo(t) {
    return t == null || typeof t != "object" && typeof t != "function"
}
function Ro(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView)
}
function iv(t) {
    if (xo(t))
        return t;
    if (Array.isArray(t) || Ro(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)
        return t.slice(0);
    const e = Object.getPrototypeOf(t)
      , s = e.constructor;
    if (t instanceof Date || t instanceof Map || t instanceof Set)
        return new s(t);
    if (t instanceof RegExp) {
        const r = new s(t);
        return r.lastIndex = t.lastIndex,
        r
    }
    if (t instanceof DataView)
        return new s(t.buffer.slice(0));
    if (t instanceof Error) {
        const r = new s(t.message);
        return r.stack = t.stack,
        r.name = t.name,
        r.cause = t.cause,
        r
    }
    if (typeof File < "u" && t instanceof File)
        return new s([t],t.name,{
            type: t.type,
            lastModified: t.lastModified
        });
    if (typeof t == "object") {
        const r = Object.create(e);
        return Object.assign(r, t)
    }
    return t
}
function bc(t) {
    return typeof t == "object" && t !== null
}
function id(t) {
    return Object.getOwnPropertySymbols(t).filter(e => Object.prototype.propertyIsEnumerable.call(t, e))
}
function nd(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t)
}
const nv = "[object RegExp]"
  , od = "[object String]"
  , ad = "[object Number]"
  , cd = "[object Boolean]"
  , ld = "[object Arguments]"
  , ov = "[object Symbol]"
  , av = "[object Date]"
  , cv = "[object Map]"
  , lv = "[object Set]"
  , dv = "[object Array]"
  , uv = "[object ArrayBuffer]"
  , hv = "[object Object]"
  , pv = "[object DataView]"
  , gv = "[object Uint8Array]"
  , fv = "[object Uint8ClampedArray]"
  , mv = "[object Uint16Array]"
  , wv = "[object Uint32Array]"
  , yv = "[object Int8Array]"
  , bv = "[object Int16Array]"
  , vv = "[object Int32Array]"
  , Cv = "[object Float32Array]"
  , Ev = "[object Float64Array]";
function Iv(t, e) {
    return mr(t, void 0, t, new Map, e)
}
function mr(t, e, s, r=new Map, i=void 0) {
    const n = i?.(t, e, s, r);
    if (n != null)
        return n;
    if (xo(t))
        return t;
    if (r.has(t))
        return r.get(t);
    if (Array.isArray(t)) {
        const o = new Array(t.length);
        r.set(t, o);
        for (let a = 0; a < t.length; a++)
            o[a] = mr(t[a], a, s, r, i);
        return Object.hasOwn(t, "index") && (o.index = t.index),
        Object.hasOwn(t, "input") && (o.input = t.input),
        o
    }
    if (t instanceof Date)
        return new Date(t.getTime());
    if (t instanceof RegExp) {
        const o = new RegExp(t.source,t.flags);
        return o.lastIndex = t.lastIndex,
        o
    }
    if (t instanceof Map) {
        const o = new Map;
        r.set(t, o);
        for (const [a,c] of t)
            o.set(a, mr(c, a, s, r, i));
        return o
    }
    if (t instanceof Set) {
        const o = new Set;
        r.set(t, o);
        for (const a of t)
            o.add(mr(a, void 0, s, r, i));
        return o
    }
    if (typeof Ze < "u" && Ze.isBuffer(t))
        return t.subarray();
    if (Ro(t)) {
        const o = new (Object.getPrototypeOf(t)).constructor(t.length);
        r.set(t, o);
        for (let a = 0; a < t.length; a++)
            o[a] = mr(t[a], a, s, r, i);
        return o
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)
        return t.slice(0);
    if (t instanceof DataView) {
        const o = new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);
        return r.set(t, o),
        Us(o, t, s, r, i),
        o
    }
    if (typeof File < "u" && t instanceof File) {
        const o = new File([t],t.name,{
            type: t.type
        });
        return r.set(t, o),
        Us(o, t, s, r, i),
        o
    }
    if (t instanceof Blob) {
        const o = new Blob([t],{
            type: t.type
        });
        return r.set(t, o),
        Us(o, t, s, r, i),
        o
    }
    if (t instanceof Error) {
        const o = new t.constructor;
        return r.set(t, o),
        o.message = t.message,
        o.name = t.name,
        o.stack = t.stack,
        o.cause = t.cause,
        Us(o, t, s, r, i),
        o
    }
    if (typeof t == "object" && Nv(t)) {
        const o = Object.create(Object.getPrototypeOf(t));
        return r.set(t, o),
        Us(o, t, s, r, i),
        o
    }
    return t
}
function Us(t, e, s=t, r, i) {
    const n = [...Object.keys(e), ...id(e)];
    for (let o = 0; o < n.length; o++) {
        const a = n[o]
          , c = Object.getOwnPropertyDescriptor(t, a);
        (c == null || c.writable) && (t[a] = mr(e[a], a, s, r, i))
    }
}
function Nv(t) {
    switch (nd(t)) {
    case ld:
    case dv:
    case uv:
    case pv:
    case cd:
    case av:
    case Cv:
    case Ev:
    case yv:
    case bv:
    case vv:
    case cv:
    case ad:
    case hv:
    case nv:
    case lv:
    case od:
    case ov:
    case gv:
    case fv:
    case mv:
    case wv:
        return !0;
    default:
        return !1
    }
}
function Av(t, e) {
    return Iv(t, (s, r, i, n) => {
        if (typeof t == "object")
            switch (Object.prototype.toString.call(t)) {
            case ad:
            case od:
            case cd:
                {
                    const o = new t.constructor(t?.valueOf());
                    return Us(o, t),
                    o
                }
            case ld:
                {
                    const o = {};
                    return Us(o, t),
                    o.length = t.length,
                    o[Symbol.iterator] = t[Symbol.iterator],
                    o
                }
            default:
                return
            }
    }
    )
}
function vc(t) {
    return Av(t)
}
function Cc(t) {
    return t !== null && typeof t == "object" && nd(t) === "[object Arguments]"
}
function _v(t) {
    return Ro(t)
}
function Sv(t) {
    if (typeof t != "object" || t == null)
        return !1;
    if (Object.getPrototypeOf(t) === null)
        return !0;
    if (Object.prototype.toString.call(t) !== "[object Object]") {
        const s = t[Symbol.toStringTag];
        return s == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable ? !1 : t.toString() === `[object ${s}]`
    }
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; )
        e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e
}
function Pv(t, ...e) {
    const s = e.slice(0, -1)
      , r = e[e.length - 1];
    let i = t;
    for (let n = 0; n < s.length; n++) {
        const o = s[n];
        i = fo(i, o, r, new Map)
    }
    return i
}
function fo(t, e, s, r) {
    if (xo(t) && (t = Object(t)),
    e == null || typeof e != "object")
        return t;
    if (r.has(e))
        return iv(r.get(e));
    if (r.set(e, t),
    Array.isArray(e)) {
        e = e.slice();
        for (let n = 0; n < e.length; n++)
            e[n] = e[n] ?? void 0
    }
    const i = [...Object.keys(e), ...id(e)];
    for (let n = 0; n < i.length; n++) {
        const o = i[n];
        let a = e[o]
          , c = t[o];
        if (Cc(a) && (a = {
            ...a
        }),
        Cc(c) && (c = {
            ...c
        }),
        typeof Ze < "u" && Ze.isBuffer(a) && (a = vc(a)),
        Array.isArray(a))
            if (typeof c == "object" && c != null) {
                const d = []
                  , u = Reflect.ownKeys(c);
                for (let p = 0; p < u.length; p++) {
                    const f = u[p];
                    d[f] = c[f]
                }
                c = d
            } else
                c = [];
        const l = s(c, a, o, t, e, r);
        l != null ? t[o] = l : Array.isArray(a) || bc(c) && bc(a) ? t[o] = fo(c, a, s, r) : c == null && Sv(a) ? t[o] = fo({}, a, s, r) : c == null && _v(a) ? t[o] = vc(a) : (c === void 0 || a !== void 0) && (t[o] = a)
    }
    return t
}
function kv(t, ...e) {
    return Pv(t, ...e, rv)
}
var Tv = Object.defineProperty
  , Ov = Object.defineProperties
  , xv = Object.getOwnPropertyDescriptors
  , Ec = Object.getOwnPropertySymbols
  , Rv = Object.prototype.hasOwnProperty
  , $v = Object.prototype.propertyIsEnumerable
  , Ic = (t, e, s) => e in t ? Tv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , xi = (t, e) => {
    for (var s in e || (e = {}))
        Rv.call(e, s) && Ic(t, s, e[s]);
    if (Ec)
        for (var s of Ec(e))
            $v.call(e, s) && Ic(t, s, e[s]);
    return t
}
  , Uv = (t, e) => Ov(t, xv(e));
function yt(t, e, s) {
    var r;
    const i = br(t);
    return ((r = e.rpcMap) == null ? void 0 : r[i.reference]) || `${rd}?chainId=${i.namespace}:${i.reference}&projectId=${s}`
}
function Vs(t) {
    return t.includes(":") ? t.split(":")[1] : t
}
function dd(t) {
    return t.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
}
function Dv(t, e) {
    const s = Object.keys(e.namespaces).filter(i => i.includes(t));
    if (!s.length)
        return [];
    const r = [];
    return s.forEach(i => {
        const n = e.namespaces[i].accounts;
        r.push(...n)
    }
    ),
    r
}
function Ri(t={}, e={}) {
    const s = Nc(t)
      , r = Nc(e);
    return kv(s, r)
}
function Nc(t) {
    var e, s, r, i, n;
    const o = {};
    if (!Es(t))
        return o;
    for (const [a,c] of Object.entries(t)) {
        const l = sn(a) ? [a] : c.chains
          , d = c.methods || []
          , u = c.events || []
          , p = c.rpcMap || {}
          , f = fr(a);
        o[f] = Uv(xi(xi({}, o[f]), c), {
            chains: Vt(l, (e = o[f]) == null ? void 0 : e.chains),
            methods: Vt(d, (s = o[f]) == null ? void 0 : s.methods),
            events: Vt(u, (r = o[f]) == null ? void 0 : r.events)
        }),
        (Es(p) || Es(((i = o[f]) == null ? void 0 : i.rpcMap) || {})) && (o[f].rpcMap = xi(xi({}, p), (n = o[f]) == null ? void 0 : n.rpcMap))
    }
    return o
}
function Ac(t) {
    return t.includes(":") ? t.split(":")[2] : t
}
function _c(t) {
    const e = {};
    for (const [s,r] of Object.entries(t)) {
        const i = r.methods || []
          , n = r.events || []
          , o = r.accounts || []
          , a = sn(s) ? [s] : r.chains ? r.chains : dd(r.accounts);
        e[s] = {
            chains: a,
            methods: i,
            events: n,
            accounts: o
        }
    }
    return e
}
function xn(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t,
    isNaN(Number(t)) ? t : Number(t))
}
const ud = {}
  , ue = t => ud[t]
  , Rn = (t, e) => {
    ud[t] = e
}
;
var Lv = Object.defineProperty
  , Mv = (t, e, s) => e in t ? Lv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Qs = (t, e, s) => Mv(t, typeof e != "symbol" ? e + "" : e, s);
class Bv {
    constructor(e) {
        Qs(this, "name", "polkadot"),
        Qs(this, "client"),
        Qs(this, "httpProviders"),
        Qs(this, "events"),
        Qs(this, "namespace"),
        Qs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            const i = Vs(s);
            e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var qv = Object.defineProperty
  , jv = Object.defineProperties
  , Fv = Object.getOwnPropertyDescriptors
  , Sc = Object.getOwnPropertySymbols
  , Wv = Object.prototype.hasOwnProperty
  , zv = Object.prototype.propertyIsEnumerable
  , mo = (t, e, s) => e in t ? qv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , Pc = (t, e) => {
    for (var s in e || (e = {}))
        Wv.call(e, s) && mo(t, s, e[s]);
    if (Sc)
        for (var s of Sc(e))
            zv.call(e, s) && mo(t, s, e[s]);
    return t
}
  , kc = (t, e) => jv(t, Fv(e))
  , er = (t, e, s) => mo(t, typeof e != "symbol" ? e + "" : e, s);
class Hv {
    constructor(e) {
        er(this, "name", "eip155"),
        er(this, "client"),
        er(this, "chainId"),
        er(this, "namespace"),
        er(this, "httpProviders"),
        er(this, "events"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), s),
        this.chainId = parseInt(e),
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
    createHttpProvider(e, s) {
        const r = s || yt(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            const i = parseInt(Vs(s));
            e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    getHttpProvider() {
        const e = this.chainId
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    async handleSwitchChain(e) {
        var s, r;
        let i = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
        i = i.startsWith("0x") ? i : `0x${i}`;
        const n = parseInt(i, 16);
        if (this.isChainApproved(n))
            this.setDefaultChain(`${n}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: e.topic,
                request: {
                    method: e.request.method,
                    params: [{
                        chainId: i
                    }]
                },
                chainId: (r = this.namespace.chains) == null ? void 0 : r[0]
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
        var s, r, i, n, o;
        const a = (r = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : r[0]
          , c = ((n = (i = e.request) == null ? void 0 : i.params) == null ? void 0 : n[1]) || []
          , l = `${a}${c.join(",")}`;
        if (!a)
            throw new Error("Missing address parameter in `wallet_getCapabilities` request");
        const d = this.client.session.get(e.topic)
          , u = ((o = d?.sessionProperties) == null ? void 0 : o.capabilities) || {};
        if (u != null && u[l])
            return u?.[l];
        const p = await this.client.request(e);
        try {
            await this.client.session.update(e.topic, {
                sessionProperties: kc(Pc({}, d.sessionProperties || {}), {
                    capabilities: kc(Pc({}, u || {}), {
                        [l]: p
                    })
                })
            })
        } catch (f) {
            console.warn("Failed to update session with capabilities", f)
        }
        return p
    }
    async getCallStatus(e) {
        var s, r;
        const i = this.client.session.get(e.topic)
          , n = (s = i.sessionProperties) == null ? void 0 : s.bundler_name;
        if (n) {
            const a = this.getBundlerUrl(e.chainId, n);
            try {
                return await this.getUserOperationReceipt(a, e)
            } catch (c) {
                console.warn("Failed to fetch call status from bundler", c, a)
            }
        }
        const o = (r = i.sessionProperties) == null ? void 0 : r.bundler_url;
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
    async getUserOperationReceipt(e, s) {
        var r;
        const i = new URL(e)
          , n = await fetch(i, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Ds("eth_getUserOperationReceipt", [(r = s.request.params) == null ? void 0 : r[0]]))
        });
        if (!n.ok)
            throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
        return await n.json()
    }
    getBundlerUrl(e, s) {
        return `${sv}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`
    }
}
var Vv = Object.defineProperty
  , Kv = (t, e, s) => e in t ? Vv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , tr = (t, e, s) => Kv(t, typeof e != "symbol" ? e + "" : e, s);
class Gv {
    constructor(e) {
        tr(this, "name", "solana"),
        tr(this, "client"),
        tr(this, "httpProviders"),
        tr(this, "events"),
        tr(this, "namespace"),
        tr(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            const i = Vs(s);
            e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var Jv = Object.defineProperty
  , Yv = (t, e, s) => e in t ? Jv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , sr = (t, e, s) => Yv(t, typeof e != "symbol" ? e + "" : e, s);
class Zv {
    constructor(e) {
        sr(this, "name", "cosmos"),
        sr(this, "client"),
        sr(this, "httpProviders"),
        sr(this, "events"),
        sr(this, "namespace"),
        sr(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            const i = Vs(s);
            e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var Xv = Object.defineProperty
  , Qv = (t, e, s) => e in t ? Xv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , rr = (t, e, s) => Qv(t, typeof e != "symbol" ? e + "" : e, s);
class e0 {
    constructor(e) {
        rr(this, "name", "algorand"),
        rr(this, "client"),
        rr(this, "httpProviders"),
        rr(this, "events"),
        rr(this, "namespace"),
        rr(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        if (!this.httpProviders[e]) {
            const r = s || yt(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
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
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new St(new Lt(r,ue("disableProviderPing")))
    }
}
var t0 = Object.defineProperty
  , s0 = (t, e, s) => e in t ? t0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , ir = (t, e, s) => s0(t, typeof e != "symbol" ? e + "" : e, s);
class r0 {
    constructor(e) {
        ir(this, "name", "cip34"),
        ir(this, "client"),
        ir(this, "httpProviders"),
        ir(this, "events"),
        ir(this, "namespace"),
        ir(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            const r = this.getCardanoRPCUrl(s)
              , i = Vs(s);
            e[i] = this.createHttpProvider(i, r)
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    getCardanoRPCUrl(e) {
        const s = this.namespace.rpcMap;
        if (s)
            return s[e]
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || this.getCardanoRPCUrl(e);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var i0 = Object.defineProperty
  , n0 = (t, e, s) => e in t ? i0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , nr = (t, e, s) => n0(t, typeof e != "symbol" ? e + "" : e, s);
class o0 {
    constructor(e) {
        nr(this, "name", "elrond"),
        nr(this, "client"),
        nr(this, "httpProviders"),
        nr(this, "events"),
        nr(this, "namespace"),
        nr(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            const i = Vs(s);
            e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var a0 = Object.defineProperty
  , c0 = (t, e, s) => e in t ? a0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , or = (t, e, s) => c0(t, typeof e != "symbol" ? e + "" : e, s);
class l0 {
    constructor(e) {
        or(this, "name", "multiversx"),
        or(this, "client"),
        or(this, "httpProviders"),
        or(this, "events"),
        or(this, "namespace"),
        or(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            const i = Vs(s);
            e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var d0 = Object.defineProperty
  , u0 = (t, e, s) => e in t ? d0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , ar = (t, e, s) => u0(t, typeof e != "symbol" ? e + "" : e, s);
class h0 {
    constructor(e) {
        ar(this, "name", "near"),
        ar(this, "client"),
        ar(this, "httpProviders"),
        ar(this, "events"),
        ar(this, "namespace"),
        ar(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            const r = s || yt(`${this.name}:${e}`, this.namespace);
            if (!r)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            var r;
            e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[s])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace);
        return typeof r > "u" ? void 0 : new St(new Lt(r,ue("disableProviderPing")))
    }
}
var p0 = Object.defineProperty
  , g0 = (t, e, s) => e in t ? p0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , cr = (t, e, s) => g0(t, typeof e != "symbol" ? e + "" : e, s);
class f0 {
    constructor(e) {
        cr(this, "name", "tezos"),
        cr(this, "client"),
        cr(this, "httpProviders"),
        cr(this, "events"),
        cr(this, "namespace"),
        cr(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            const r = s || yt(`${this.name}:${e}`, this.namespace);
            if (!r)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(s => {
            e[s] = this.createHttpProvider(s)
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace);
        return typeof r > "u" ? void 0 : new St(new Lt(r))
    }
}
var m0 = Object.defineProperty
  , w0 = (t, e, s) => e in t ? m0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , lr = (t, e, s) => w0(t, typeof e != "symbol" ? e + "" : e, s);
class y0 {
    constructor(e) {
        lr(this, "name", ur),
        lr(this, "client"),
        lr(this, "httpProviders"),
        lr(this, "events"),
        lr(this, "namespace"),
        lr(this, "chainId"),
        this.namespace = e.namespace,
        this.events = ue("events"),
        this.client = ue("client"),
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
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s),
        this.chainId = e,
        this.events.emit(Pt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
        return e ? [...new Set(e.filter(s => s.split(":")[1] === this.chainId.toString()).map(s => s.split(":")[2]))] : []
    }
    createHttpProviders() {
        var e, s;
        const r = {};
        return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach(i => {
            const n = br(i);
            r[`${n.namespace}:${n.reference}`] = this.createHttpProvider(i)
        }
        ),
        r
    }
    getHttpProvider(e) {
        const s = this.httpProviders[e];
        if (typeof s > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return s
    }
    setHttpProvider(e, s) {
        const r = this.createHttpProvider(e, s);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, s) {
        const r = s || yt(e, this.namespace, this.client.core.projectId);
        if (!r)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new St(new Lt(r,ue("disableProviderPing")))
    }
}
var b0 = Object.defineProperty
  , v0 = Object.defineProperties
  , C0 = Object.getOwnPropertyDescriptors
  , Tc = Object.getOwnPropertySymbols
  , E0 = Object.prototype.hasOwnProperty
  , I0 = Object.prototype.propertyIsEnumerable
  , wo = (t, e, s) => e in t ? b0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s
  , $i = (t, e) => {
    for (var s in e || (e = {}))
        E0.call(e, s) && wo(t, s, e[s]);
    if (Tc)
        for (var s of Tc(e))
            I0.call(e, s) && wo(t, s, e[s]);
    return t
}
  , $n = (t, e) => v0(t, C0(e))
  , Nt = (t, e, s) => wo(t, typeof e != "symbol" ? e + "" : e, s);
class $o {
    constructor(e) {
        Nt(this, "client"),
        Nt(this, "namespaces"),
        Nt(this, "optionalNamespaces"),
        Nt(this, "sessionProperties"),
        Nt(this, "scopedProperties"),
        Nt(this, "events", new Eo),
        Nt(this, "rpcProviders", {}),
        Nt(this, "session"),
        Nt(this, "providerOpts"),
        Nt(this, "logger"),
        Nt(this, "uri"),
        Nt(this, "disableProviderPing", !1),
        this.providerOpts = e,
        this.logger = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : bo(pi({
            level: e?.logger || yc
        })),
        this.disableProviderPing = e?.disableProviderPing || !1
    }
    static async init(e) {
        const s = new $o(e);
        return await s.initialize(),
        s
    }
    async request(e, s, r) {
        const [i,n] = this.validateChain(s);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(i).request({
            request: $i({}, e),
            chainId: `${i}:${n}`,
            topic: this.session.topic,
            expiry: r
        })
    }
    sendAsync(e, s, r, i) {
        const n = new Date().getTime();
        this.request(e, r, i).then(o => s(null, Yi(n, o))).catch(o => s(o, void 0))
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
            reason: we("USER_DISCONNECTED")
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
    async authenticate(e, s) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        this.setNamespaces(e),
        await this.cleanupPendingPairings();
        const {uri: r, response: i} = await this.client.authenticate(e, s);
        r && (this.uri = r,
        this.events.emit("display_uri", r));
        const n = await i();
        if (this.session = n.session,
        this.session) {
            const o = _c(this.session.namespaces);
            this.namespaces = Ri(this.namespaces, o),
            await this.persist("namespaces", this.namespaces),
            this.onConnect()
        }
        return n
    }
    on(e, s) {
        this.events.on(e, s)
    }
    once(e, s) {
        this.events.once(e, s)
    }
    removeListener(e, s) {
        this.events.removeListener(e, s)
    }
    off(e, s) {
        this.events.off(e, s)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(e) {
        const {uri: s, approval: r} = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties
        });
        s && (this.uri = s,
        this.events.emit("display_uri", s));
        const i = await r();
        this.session = i;
        const n = _c(i.namespaces);
        return this.namespaces = Ri(this.namespaces, n),
        await this.persist("namespaces", this.namespaces),
        await this.persist("optionalNamespaces", this.optionalNamespaces),
        this.onConnect(),
        this.session
    }
    setDefaultChain(e, s) {
        try {
            if (!this.session)
                return;
            const [r,i] = this.validateChain(e)
              , n = this.getProvider(r);
            n.name === ur ? n.setDefaultChain(`${r}:${i}`, s) : n.setDefaultChain(i, s)
        } catch (r) {
            if (!/Please call connect/.test(r.message))
                throw r
        }
    }
    async cleanupPendingPairings(e={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const s = this.client.pairing.getAll();
        if (Cs(s)) {
            for (const r of s)
                e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
            this.logger.info(`Inactive pairings cleared: ${s.length}`)
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
        var e, s;
        if (this.client = this.providerOpts.client || await Xb.init({
            core: this.providerOpts.core,
            logger: this.providerOpts.logger || yc,
            relayUrl: this.providerOpts.relayUrl || Qb,
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
            } catch (r) {
                throw this.logger.error("Failed to get session", r),
                new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`)
            }
        else {
            const r = this.client.session.getAll();
            this.session = r[0]
        }
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const e = [...new Set(Object.keys(this.session.namespaces).map(s => fr(s)))];
        Rn("client", this.client),
        Rn("events", this.events),
        Rn("disableProviderPing", this.disableProviderPing),
        e.forEach(s => {
            if (!this.session)
                return;
            const r = Dv(s, this.session)
              , i = dd(r)
              , n = Ri(this.namespaces, this.optionalNamespaces)
              , o = $n($i({}, n[s]), {
                accounts: r,
                chains: i
            });
            switch (s) {
            case "eip155":
                this.rpcProviders[s] = new Hv({
                    namespace: o
                });
                break;
            case "algorand":
                this.rpcProviders[s] = new e0({
                    namespace: o
                });
                break;
            case "solana":
                this.rpcProviders[s] = new Gv({
                    namespace: o
                });
                break;
            case "cosmos":
                this.rpcProviders[s] = new Zv({
                    namespace: o
                });
                break;
            case "polkadot":
                this.rpcProviders[s] = new Bv({
                    namespace: o
                });
                break;
            case "cip34":
                this.rpcProviders[s] = new r0({
                    namespace: o
                });
                break;
            case "elrond":
                this.rpcProviders[s] = new o0({
                    namespace: o
                });
                break;
            case "multiversx":
                this.rpcProviders[s] = new l0({
                    namespace: o
                });
                break;
            case "near":
                this.rpcProviders[s] = new h0({
                    namespace: o
                });
                break;
            case "tezos":
                this.rpcProviders[s] = new f0({
                    namespace: o
                });
                break;
            default:
                this.rpcProviders[ur] ? this.rpcProviders[ur].updateNamespace(o) : this.rpcProviders[ur] = new y0({
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
            var s;
            const {topic: r} = e;
            r === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e)
        }
        ),
        this.client.on("session_event", e => {
            var s;
            const {params: r, topic: i} = e;
            if (i !== ((s = this.session) == null ? void 0 : s.topic))
                return;
            const {event: n} = r;
            if (n.name === "accountsChanged") {
                const o = n.data;
                o && Cs(o) && this.events.emit("accountsChanged", o.map(Ac))
            } else if (n.name === "chainChanged") {
                const o = r.chainId
                  , a = r.event.data
                  , c = fr(o)
                  , l = xn(o) !== xn(a) ? `${c}:${xn(a)}` : o;
                this.onChainChanged(l)
            } else
                this.events.emit(n.name, n.data);
            this.events.emit("session_event", e)
        }
        ),
        this.client.on("session_update", ({topic: e, params: s}) => {
            var r, i;
            if (e !== ((r = this.session) == null ? void 0 : r.topic))
                return;
            const {namespaces: n} = s
              , o = (i = this.client) == null ? void 0 : i.session.get(e);
            this.session = $n($i({}, o), {
                namespaces: n
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: e,
                params: s
            })
        }
        ),
        this.client.on("session_delete", async e => {
            var s;
            e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", $n($i({}, we("USER_DISCONNECTED")), {
                data: e.topic
            })))
        }
        ),
        this.on(Pt.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
        }
        )
    }
    getProvider(e) {
        return this.rpcProviders[e] || this.rpcProviders[ur]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e => {
            var s;
            this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e])
        }
        )
    }
    setNamespaces(e) {
        const {namespaces: s={}, optionalNamespaces: r={}, sessionProperties: i, scopedProperties: n} = e;
        this.optionalNamespaces = Ri(s, r),
        this.sessionProperties = i,
        this.scopedProperties = n
    }
    validateChain(e) {
        const [s,r] = e?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [s, r];
        if (s && !Object.keys(this.namespaces || {}).map(o => fr(o)).includes(s))
            throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
        if (s && r)
            return [s, r];
        const i = fr(Object.keys(this.namespaces)[0])
          , n = this.rpcProviders[i].getDefaultChain();
        return [i, n]
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
    }
    async onChainChanged(e, s=!1) {
        if (!this.namespaces)
            return;
        const [r,i] = this.validateChain(e);
        if (!i)
            return;
        this.updateNamespaceChain(r, i),
        this.events.emit("chainChanged", i);
        const n = this.getProvider(r).getDefaultChain();
        s || this.getProvider(r).setDefaultChain(i),
        this.emitAccountsChangedOnChainChange({
            namespace: r,
            previousChainId: n,
            newChainId: e
        }),
        await this.persist("namespaces", this.namespaces)
    }
    emitAccountsChangedOnChainChange({namespace: e, previousChainId: s, newChainId: r}) {
        var i, n;
        try {
            if (s === r)
                return;
            const o = (n = (i = this.session) == null ? void 0 : i.namespaces[e]) == null ? void 0 : n.accounts;
            if (!o)
                return;
            const a = o.filter(c => c.includes(`${r}:`)).map(Ac);
            if (!Cs(a))
                return;
            this.events.emit("accountsChanged", a)
        } catch (o) {
            this.logger.warn("Failed to emit accountsChanged on chain change", o)
        }
    }
    updateNamespaceChain(e, s) {
        if (!this.namespaces)
            return;
        const r = this.namespaces[e] ? e : `${e}:${s}`
          , i = {
            chains: [],
            methods: [],
            events: [],
            defaultChain: s
        };
        this.namespaces[r] ? this.namespaces[r] && (this.namespaces[r].defaultChain = s) : this.namespaces[r] = i
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
    async persist(e, s) {
        var r;
        const i = ((r = this.session) == null ? void 0 : r.topic) || "";
        await this.client.core.storage.setItem(`${Oi}/${e}${i}`, s)
    }
    async getFromStore(e) {
        var s;
        const r = ((s = this.session) == null ? void 0 : s.topic) || "";
        return await this.client.core.storage.getItem(`${Oi}/${e}${r}`)
    }
    async deleteFromStore(e) {
        var s;
        const r = ((s = this.session) == null ? void 0 : s.topic) || "";
        await this.client.core.storage.removeItem(`${Oi}/${e}${r}`)
    }
    async cleanupStorage() {
        var e;
        try {
            if (((e = this.client) == null ? void 0 : e.session.length) > 0)
                return;
            const s = await this.client.core.storage.getKeys();
            for (const r of s)
                r.startsWith(Oi) && await this.client.core.storage.removeItem(r)
        } catch (s) {
            this.logger.warn("Failed to cleanup storage", s)
        }
    }
}
function Ui(t, e) {
    return q.getConnectorId(t) === e
}
function N0(t) {
    const e = Array.from(h.state.chains.keys());
    let s = [];
    return t ? (s.push([t, h.state.chains.get(t)]),
    Ui(t, z.CONNECTOR_ID.WALLET_CONNECT) ? e.forEach(r => {
        r !== t && Ui(r, z.CONNECTOR_ID.WALLET_CONNECT) && s.push([r, h.state.chains.get(r)])
    }
    ) : Ui(t, z.CONNECTOR_ID.AUTH) && e.forEach(r => {
        r !== t && Ui(r, z.CONNECTOR_ID.AUTH) && s.push([r, h.state.chains.get(r)])
    }
    )) : s = Array.from(h.state.chains.entries()),
    s
}
const ps = {
    EIP155: "eip155",
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED"
}
  , Gi = {
    NetworkImageIds: {
        1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
        42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
        43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
        56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
        250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
        10: "ab9c186a-c52f-464b-2906-ca59d760a400",
        137: "41d04d42-da3b-4453-8506-668cc0727900",
        5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
        295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
        11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
        84532: "a18a7ecd-e307-4360-4746-283182228e00",
        1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
        130: "2257980a-3463-48c6-cbac-a42d2a956e00",
        10143: "0a728e83-bacb-46db-7844-948f05434900",
        100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
        9001: "f926ff41-260d-4028-635e-91913fc28e00",
        324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
        314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
        4689: "34e68754-e536-40da-c153-6ef2e7188a00",
        1088: "3897a66d-40b9-4833-162f-a2c90531c900",
        1284: "161038da-44ae-4ec7-1208-0ea569454b00",
        1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
        7777777: "845c60df-d429-4991-e687-91ae45791600",
        42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
        8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
        1313161554: "3ff73439-a619-4894-9262-4470c773a100",
        2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
        2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
        80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
        2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
        "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
        "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
        "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
        "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200"
    },
    ConnectorImageIds: {
        [z.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
        [z.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
        [z.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
        [z.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
        [z.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
        [z.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
    },
    ConnectorNamesMap: {
        [z.CONNECTOR_ID.INJECTED]: "Browser Wallet",
        [z.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
        [z.CONNECTOR_ID.COINBASE]: "Coinbase",
        [z.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
        [z.CONNECTOR_ID.LEDGER]: "Ledger",
        [z.CONNECTOR_ID.SAFE]: "Safe"
    }
}
  , Uo = {
    getCaipTokens(t) {
        if (!t)
            return;
        const e = {};
        return Object.entries(t).forEach( ([s,r]) => {
            e[`${ps.EIP155}:${s}`] = r
        }
        ),
        e
    },
    isLowerCaseMatch(t, e) {
        return t?.toLowerCase() === e?.toLowerCase()
    }
};
new AbortController;
const dr = {
    UniversalProviderErrors: {
        UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: "Unauthorized: origin not allowed",
            alertErrorKey: "INVALID_APP_CONFIGURATION"
        },
        JWT_VALIDATION_ERROR: {
            message: "JWT validation error: JWT Token is not yet valid",
            alertErrorKey: "JWT_TOKEN_NOT_VALID"
        },
        INVALID_KEY: {
            message: "Unauthorized: invalid key",
            alertErrorKey: "INVALID_PROJECT_ID"
        }
    },
    ALERT_ERRORS: {
        SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: "Network Not Found",
            longMessage: "Network not found - please make sure it is included in 'networks' array in createAppKit function"
        },
        INVALID_APP_CONFIGURATION: {
            shortMessage: "Invalid App Configuration",
            longMessage: () => `Origin ${A0() ? window.origin : "unknown"} not found on Allowlist - update configuration on cloud.reown.com`
        },
        IFRAME_LOAD_FAILED: {
            shortMessage: "Network Error - Could not load embedded wallet",
            longMessage: () => "There was an issue loading the embedded wallet. Please try again later."
        },
        IFRAME_REQUEST_TIMEOUT: {
            shortMessage: "Embedded Wallet Request Timed Out",
            longMessage: () => "There was an issue doing the request to the embedded wallet. Please try again later."
        },
        UNVERIFIED_DOMAIN: {
            shortMessage: "Invalid App Configuration",
            longMessage: () => "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"
        },
        JWT_TOKEN_NOT_VALID: {
            shortMessage: "Session Expired",
            longMessage: "Invalid session found on UniversalProvider - please check your time settings and connect again"
        },
        INVALID_PROJECT_ID: {
            shortMessage: "Invalid App Configuration",
            longMessage: "Invalid Project ID - update configuration"
        },
        PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: "Project ID Not Configured",
            longMessage: "Project ID Not Configured - update configuration on cloud.reown.com"
        }
    }
};
function A0() {
    return typeof window < "u"
}
const _0 = {
    createLogger(t, e="error") {
        const s = pi({
            level: e
        })
          , {logger: r} = Dc({
            opts: s
        });
        return r.error = (...i) => {
            for (const n of i)
                if (n instanceof Error) {
                    t(n, ...i);
                    return
                }
            t(void 0, ...i)
        }
        ,
        r
    }
}
  , S0 = "rpc.walletconnect.org";
function Oc(t, e) {
    const s = new URL("https://rpc.walletconnect.org/v1/");
    return s.searchParams.set("chainId", t),
    s.searchParams.set("projectId", e),
    s.toString()
}
const Un = ["near:mainnet", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", "eip155:1101", "eip155:56", "eip155:42161", "eip155:7777777", "eip155:59144", "eip155:324", "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1", "eip155:5000", "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz", "eip155:80084", "eip155:5003", "eip155:100", "eip155:8453", "eip155:42220", "eip155:1313161555", "eip155:17000", "eip155:1", "eip155:300", "eip155:1313161554", "eip155:1329", "eip155:84532", "eip155:421614", "eip155:11155111", "eip155:8217", "eip155:43114", "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z", "eip155:999999999", "eip155:11155420", "eip155:80002", "eip155:97", "eip155:43113", "eip155:137", "eip155:10", "eip155:1301", "bip122:000000000019d6689c085ae165831e93", "bip122:000000000933ea01ad0ee984209779ba"]
  , hr = {
    extendRpcUrlWithProjectId(t, e) {
        let s = !1;
        try {
            s = new URL(t).host === S0
        } catch {
            s = !1
        }
        if (s) {
            const r = new URL(t);
            return r.searchParams.has("projectId") || r.searchParams.set("projectId", e),
            r.toString()
        }
        return t
    },
    isCaipNetwork(t) {
        return "chainNamespace"in t && "caipNetworkId"in t
    },
    getChainNamespace(t) {
        return this.isCaipNetwork(t) ? t.chainNamespace : z.CHAIN.EVM
    },
    getCaipNetworkId(t) {
        return this.isCaipNetwork(t) ? t.caipNetworkId : `${z.CHAIN.EVM}:${t.id}`
    },
    getDefaultRpcUrl(t, e, s) {
        const r = t.rpcUrls?.default?.http?.[0];
        return Un.includes(e) ? Oc(e, s) : r || ""
    },
    extendCaipNetwork(t, {customNetworkImageUrls: e, projectId: s, customRpcUrls: r}) {
        const i = this.getChainNamespace(t)
          , n = this.getCaipNetworkId(t)
          , o = t.rpcUrls.default.http?.[0]
          , a = this.getDefaultRpcUrl(t, n, s)
          , c = t?.rpcUrls?.chainDefault?.http?.[0] || o
          , l = r?.[n]?.map(p => p.url) || []
          , d = [...l, a]
          , u = [...l];
        return c && !u.includes(c) && u.push(c),
        {
            ...t,
            chainNamespace: i,
            caipNetworkId: n,
            assets: {
                imageId: Gi.NetworkImageIds[t.id],
                imageUrl: e?.[t.id]
            },
            rpcUrls: {
                ...t.rpcUrls,
                default: {
                    http: d
                },
                chainDefault: {
                    http: u
                }
            }
        }
    },
    extendCaipNetworks(t, {customNetworkImageUrls: e, projectId: s, customRpcUrls: r}) {
        return t.map(i => hr.extendCaipNetwork(i, {
            customNetworkImageUrls: e,
            customRpcUrls: r,
            projectId: s
        }))
    },
    getViemTransport(t, e, s) {
        const r = [];
        return s?.forEach(i => {
            r.push(Ni(i.url, i.config))
        }
        ),
        Un.includes(t.caipNetworkId) && r.push(Ni(Oc(t.caipNetworkId, e), {
            fetchOptions: {
                headers: {
                    "Content-Type": "text/plain"
                }
            }
        })),
        t?.rpcUrls?.default?.http?.forEach(i => {
            r.push(Ni(i))
        }
        ),
        Bo(r)
    },
    extendWagmiTransports(t, e, s) {
        if (Un.includes(t.caipNetworkId)) {
            const r = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
            return Bo([s, Ni(r)])
        }
        return s
    },
    getUnsupportedNetwork(t) {
        return {
            id: t.split(":")[1],
            caipNetworkId: t,
            name: z.UNSUPPORTED_NETWORK_NAME,
            chainNamespace: t.split(":")[0],
            nativeCurrency: {
                name: "",
                decimals: 0,
                symbol: ""
            },
            rpcUrls: {
                default: {
                    http: []
                }
            }
        }
    },
    getCaipNetworkFromStorage(t) {
        const e = F.getActiveCaipNetworkId()
          , s = h.getAllRequestedCaipNetworks()
          , r = Array.from(h.state.chains?.keys() || [])
          , i = e?.split(":")[0]
          , n = i ? r.includes(i) : !1
          , o = s?.find(c => c.caipNetworkId === e);
        return n && !o && e ? this.getUnsupportedNetwork(e) : o || t || s?.[0]
    }
}
  , Ji = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0
}
  , at = _e({
    providers: {
        ...Ji
    },
    providerIds: {
        ...Ji
    }
})
  , Se = {
    state: at,
    subscribeKey(t, e) {
        return Qe(at, t, e)
    },
    subscribe(t) {
        return Xe(at, () => {
            t(at)
        }
        )
    },
    subscribeProviders(t) {
        return Xe(at.providers, () => t(at.providers))
    },
    setProvider(t, e) {
        e && (at.providers[t] = Bs(e))
    },
    getProvider(t) {
        return at.providers[t]
    },
    setProviderId(t, e) {
        e && (at.providerIds[t] = e)
    },
    getProviderId(t) {
        if (t)
            return at.providerIds[t]
    },
    reset() {
        at.providers = {
            ...Ji
        },
        at.providerIds = {
            ...Ji
        }
    },
    resetChain(t) {
        at.providers[t] = void 0,
        at.providerIds[t] = void 0
    }
}
  , P0 = {
    VIEW_DIRECTION: {
        Next: "next",
        Prev: "prev"
    },
    DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
    ANIMATION_DURATIONS: {
        HeaderText: 120,
        ModalHeight: 150,
        ViewTransition: 150
    }
}
  , yo = {
    filterOutDuplicatesByRDNS(t) {
        const e = S.state.enableEIP6963 ? q.state.connectors : []
          , s = F.getRecentWallets()
          , r = e.map(a => a.info?.rdns).filter(Boolean)
          , i = s.map(a => a.rdns).filter(Boolean)
          , n = r.concat(i);
        if (n.includes("io.metamask.mobile") && Z.isMobile()) {
            const a = n.indexOf("io.metamask.mobile");
            n[a] = "io.metamask"
        }
        return t.filter(a => !n.includes(String(a?.rdns)))
    },
    filterOutDuplicatesByIds(t) {
        const e = q.state.connectors.filter(a => a.type === "ANNOUNCED" || a.type === "INJECTED")
          , s = F.getRecentWallets()
          , r = e.map(a => a.explorerId)
          , i = s.map(a => a.id)
          , n = r.concat(i);
        return t.filter(a => !n.includes(a?.id))
    },
    filterOutDuplicateWallets(t) {
        const e = this.filterOutDuplicatesByRDNS(t);
        return this.filterOutDuplicatesByIds(e)
    },
    markWalletsAsInstalled(t) {
        const {connectors: e} = q.state
          , {featuredWalletIds: s} = S.state
          , r = e.filter(o => o.type === "ANNOUNCED").reduce( (o, a) => (a.info?.rdns && (o[a.info.rdns] = !0),
        o), {});
        return t.map(o => ({
            ...o,
            installed: !!o.rdns && !!r[o.rdns ?? ""]
        })).sort( (o, a) => {
            const c = Number(a.installed) - Number(o.installed);
            if (c !== 0)
                return c;
            if (s?.length) {
                const l = s.indexOf(o.id)
                  , d = s.indexOf(a.id);
                if (l !== -1 && d !== -1)
                    return l - d;
                if (l !== -1)
                    return -1;
                if (d !== -1)
                    return 1
            }
            return 0
        }
        )
    },
    getConnectOrderMethod(t, e) {
        const s = t?.connectMethodsOrder || S.state.features?.connectMethodsOrder
          , r = e || q.state.connectors;
        if (s)
            return s;
        const {injected: i, announced: n} = ji.getConnectorsByType(r, V.state.recommended, V.state.featured)
          , o = i.filter(ji.showConnector)
          , a = n.filter(ji.showConnector);
        return o.length || a.length ? ["wallet", "email", "social"] : P0.DEFAULT_CONNECT_METHOD_ORDER
    },
    isExcluded(t) {
        const e = !!t.rdns && V.state.excludedWallets.some(r => r.rdns === t.rdns)
          , s = !!t.name && V.state.excludedWallets.some(r => Uo.isLowerCaseMatch(r.name, t.name));
        return e || s
    }
}
  , ji = {
    getConnectorsByType(t, e, s) {
        const {customWallets: r} = S.state
          , i = F.getRecentWallets()
          , n = yo.filterOutDuplicateWallets(e)
          , o = yo.filterOutDuplicateWallets(s)
          , a = t.filter(u => u.type === "MULTI_CHAIN")
          , c = t.filter(u => u.type === "ANNOUNCED")
          , l = t.filter(u => u.type === "INJECTED")
          , d = t.filter(u => u.type === "EXTERNAL");
        return {
            custom: r,
            recent: i,
            external: d,
            multiChain: a,
            announced: c,
            injected: l,
            recommended: n,
            featured: o
        }
    },
    showConnector(t) {
        const e = t.info?.rdns
          , s = !!e && V.state.excludedWallets.some(i => !!i.rdns && i.rdns === e)
          , r = !!t.name && V.state.excludedWallets.some(i => Uo.isLowerCaseMatch(i.name, t.name));
        return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!Z.isMobile() || Z.isMobile() && !e && !Y.checkInstalled()) || s || r) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (s || r))
    },
    getIsConnectedWithWC() {
        return Array.from(h.state.chains.values()).some(s => q.getConnectorId(s.namespace) === z.CONNECTOR_ID.WALLET_CONNECT)
    },
    getConnectorTypeOrder({recommended: t, featured: e, custom: s, recent: r, announced: i, injected: n, multiChain: o, external: a, overriddenConnectors: c=S.state.features?.connectorTypeOrder ?? []}) {
        const l = ji.getIsConnectedWithWC()
          , p = [{
            type: "walletConnect",
            isEnabled: S.state.enableWalletConnect && !l
        }, {
            type: "recent",
            isEnabled: r.length > 0
        }, {
            type: "injected",
            isEnabled: [...n, ...i, ...o].length > 0
        }, {
            type: "featured",
            isEnabled: e.length > 0
        }, {
            type: "custom",
            isEnabled: s && s.length > 0
        }, {
            type: "external",
            isEnabled: a.length > 0
        }, {
            type: "recommended",
            isEnabled: t.length > 0
        }].filter(g => g.isEnabled)
          , f = new Set(p.map(g => g.type))
          , m = c.filter(g => f.has(g)).map(g => ({
            type: g,
            isEnabled: !0
        }))
          , w = p.filter( ({type: g}) => !m.some( ({type: b}) => b === g));
        return Array.from(new Set([...m, ...w].map( ({type: g}) => g)))
    }
};
let ni, Is, Ns;
function nC(t, e) {
    ni = document.createElement("style"),
    Is = document.createElement("style"),
    Ns = document.createElement("style"),
    ni.textContent = vr(t).core.cssText,
    Is.textContent = vr(t).dark.cssText,
    Ns.textContent = vr(t).light.cssText,
    document.head.appendChild(ni),
    document.head.appendChild(Is),
    document.head.appendChild(Ns),
    hd(e)
}
function hd(t) {
    Is && Ns && (t === "light" ? (Is.removeAttribute("media"),
    Ns.media = "enabled") : (Ns.removeAttribute("media"),
    Is.media = "enabled"))
}
function k0(t) {
    ni && Is && Ns && (ni.textContent = vr(t).core.cssText,
    Is.textContent = vr(t).dark.cssText,
    Ns.textContent = vr(t).light.cssText)
}
function vr(t) {
    return {
        core: yr`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${kt(t?.["--w3m-color-mix-strength"] ? `${t["--w3m-color-mix-strength"]}%` : "0%")};
        --w3m-font-family: ${kt(t?.["--w3m-font-family"] || "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${kt(t?.["--w3m-font-size-master"] || "10px")};
        --w3m-border-radius-master: ${kt(t?.["--w3m-border-radius-master"] || "4px")};
        --w3m-z-index: ${kt(t?.["--w3m-z-index"] || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
        light: yr`
      :root {
        --w3m-color-mix: ${kt(t?.["--w3m-color-mix"] || "#fff")};
        --w3m-accent: ${kt(ws(t, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${kt(ws(t, "dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
        dark: yr`
      :root {
        --w3m-color-mix: ${kt(t?.["--w3m-color-mix"] || "#000")};
        --w3m-accent: ${kt(ws(t, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${kt(ws(t, "light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `
    }
}
const oC = yr`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`
  , aC = yr`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`
  , cC = yr`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`
  , Yr = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603,
    DEFAULT_ALLOWED_ANCESTORS: ["http://localhost:*", "https://*.pages.dev", "https://*.vercel.app", "https://*.ngrok-free.app", "https://secure-mobile.walletconnect.com", "https://secure-mobile.walletconnect.org"]
};
function Ei(t) {
    return {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        ...t
    }
}
const xc = Ei({
    id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    name: "Solana",
    network: "solana-mainnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !1,
    chainNamespace: "solana",
    caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"
})
  , Rc = Ei({
    id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    name: "Solana Devnet",
    network: "solana-devnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !0,
    chainNamespace: "solana",
    caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
});
Ei({
    id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
    name: "Solana Testnet",
    network: "solana-testnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !0,
    chainNamespace: "solana",
    caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
});
Ei({
    id: "000000000019d6689c085ae165831e93",
    caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
    chainNamespace: "bip122",
    name: "Bitcoin",
    nativeCurrency: {
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    }
});
Ei({
    id: "000000000933ea01ad0ee984209779ba",
    caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
    chainNamespace: "bip122",
    name: "Bitcoin Testnet",
    nativeCurrency: {
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    testnet: !0
});
const T0 = {
    solana: ["solana_signMessage", "solana_signTransaction", "solana_requestAccounts", "solana_getAccounts", "solana_signAllTransactions", "solana_signAndSendTransaction"],
    eip155: ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_showCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"],
    bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
}
  , Fi = {
    getMethodsByChainNamespace(t) {
        return T0[t] || []
    },
    createDefaultNamespace(t) {
        return {
            methods: this.getMethodsByChainNamespace(t),
            events: ["accountsChanged", "chainChanged"],
            chains: [],
            rpcMap: {}
        }
    },
    applyNamespaceOverrides(t, e) {
        if (!e)
            return {
                ...t
            };
        const s = {
            ...t
        }
          , r = new Set;
        if (e.methods && Object.keys(e.methods).forEach(i => r.add(i)),
        e.chains && Object.keys(e.chains).forEach(i => r.add(i)),
        e.events && Object.keys(e.events).forEach(i => r.add(i)),
        e.rpcMap && Object.keys(e.rpcMap).forEach(i => {
            const [n] = i.split(":");
            n && r.add(n)
        }
        ),
        r.forEach(i => {
            s[i] || (s[i] = this.createDefaultNamespace(i))
        }
        ),
        e.methods && Object.entries(e.methods).forEach( ([i,n]) => {
            s[i] && (s[i].methods = n)
        }
        ),
        e.chains && Object.entries(e.chains).forEach( ([i,n]) => {
            s[i] && (s[i].chains = n)
        }
        ),
        e.events && Object.entries(e.events).forEach( ([i,n]) => {
            s[i] && (s[i].events = n)
        }
        ),
        e.rpcMap) {
            const i = new Set;
            Object.entries(e.rpcMap).forEach( ([n,o]) => {
                const [a,c] = n.split(":");
                !a || !c || !s[a] || (s[a].rpcMap || (s[a].rpcMap = {}),
                i.has(a) || (s[a].rpcMap = {},
                i.add(a)),
                s[a].rpcMap[c] = o)
            }
            )
        }
        return s
    },
    createNamespaces(t, e) {
        const s = t.reduce( (r, i) => {
            const {id: n, chainNamespace: o, rpcUrls: a} = i
              , c = a.default.http[0];
            r[o] || (r[o] = this.createDefaultNamespace(o));
            const l = `${o}:${n}`
              , d = r[o];
            switch (d.chains.push(l),
            l) {
            case xc.caipNetworkId:
                d.chains.push(xc.deprecatedCaipNetworkId);
                break;
            case Rc.caipNetworkId:
                d.chains.push(Rc.deprecatedCaipNetworkId);
                break
            }
            return d?.rpcMap && c && (d.rpcMap[n] = c),
            r
        }
        , {});
        return this.applyNamespaceOverrides(s, e)
    },
    resolveReownName: async t => {
        const e = await ei.resolveName(t);
        return (Object.values(e?.addresses) || [])[0]?.address || !1
    }
    ,
    getChainsFromNamespaces(t={}) {
        return Object.values(t).flatMap(e => {
            const s = e.chains || []
              , r = e.accounts.map(i => {
                const [n,o] = i.split(":");
                return `${n}:${o}`
            }
            );
            return Array.from(new Set([...s, ...r]))
        }
        )
    },
    isSessionEventData(t) {
        return typeof t == "object" && t !== null && "id"in t && "topic"in t && "params"in t && typeof t.params == "object" && t.params !== null && "chainId"in t.params && "event"in t.params && typeof t.params.event == "object" && t.params.event !== null
    },
    isOriginAllowed(t, e, s) {
        for (const r of [...e, ...s])
            if (r.includes("*")) {
                const n = `^${r.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&").replace(/\\\*/gu, ".*")}$`;
                if (new RegExp(n,"u").test(t))
                    return !0
            } else
                try {
                    if (new URL(r).origin === t)
                        return !0
                } catch {
                    if (r === t)
                        return !0
                }
        return !1
    }
};
class pd {
    constructor({provider: e, namespace: s}) {
        this.id = z.CONNECTOR_ID.WALLET_CONNECT,
        this.name = Gi.ConnectorNamesMap[z.CONNECTOR_ID.WALLET_CONNECT],
        this.type = "WALLET_CONNECT",
        this.imageId = Gi.ConnectorImageIds[z.CONNECTOR_ID.WALLET_CONNECT],
        this.getCaipNetworks = h.getCaipNetworks.bind(h),
        this.caipNetworks = this.getCaipNetworks(),
        this.provider = e,
        this.chain = s
    }
    get chains() {
        return this.getCaipNetworks()
    }
    async connectWalletConnect() {
        if (!await this.authenticate()) {
            const s = this.getCaipNetworks()
              , r = S.state.universalProviderConfigOverride
              , i = Fi.createNamespaces(s, r);
            await this.provider.connect({
                optionalNamespaces: i
            })
        }
        return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session
        }
    }
    async disconnect() {
        await this.provider.disconnect()
    }
    async authenticate() {
        const e = this.chains.map(s => s.caipNetworkId);
        return ti.universalProviderAuthenticate({
            universalProvider: this.provider,
            chains: e,
            methods: O0
        })
    }
}
const O0 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"];
class x0 {
    constructor(e) {
        this.availableConnectors = [],
        this.eventListeners = new Map,
        this.getCaipNetworks = s => h.getCaipNetworks(s),
        e && this.construct(e)
    }
    construct(e) {
        this.projectId = e.projectId,
        this.namespace = e.namespace,
        this.adapterType = e.adapterType
    }
    get connectors() {
        return this.availableConnectors
    }
    get networks() {
        return this.getCaipNetworks(this.namespace)
    }
    setAuthProvider(e) {
        this.addConnector({
            id: z.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: z.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: Gi.ConnectorImageIds[z.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: []
        })
    }
    addConnector(...e) {
        const s = new Set;
        this.availableConnectors = [...e, ...this.availableConnectors].filter(r => s.has(r.id) ? !1 : (s.add(r.id),
        !0)),
        this.emit("connectors", this.availableConnectors)
    }
    setStatus(e, s) {
        W.setStatus(e, s)
    }
    on(e, s) {
        this.eventListeners.has(e) || this.eventListeners.set(e, new Set),
        this.eventListeners.get(e)?.add(s)
    }
    off(e, s) {
        const r = this.eventListeners.get(e);
        r && r.delete(s)
    }
    removeAllEventListeners() {
        this.eventListeners.forEach(e => {
            e.clear()
        }
        )
    }
    emit(e, s) {
        const r = this.eventListeners.get(e);
        r && r.forEach(i => i(s))
    }
    async connectWalletConnect(e) {
        return {
            clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
        }
    }
    async switchNetwork(e) {
        const {caipNetwork: s, providerType: r} = e;
        if (!e.provider)
            return;
        const i = "provider"in e.provider ? e.provider.provider : e.provider;
        if (r === "WALLET_CONNECT") {
            i.setDefaultChain(s.caipNetworkId);
            return
        }
        if (i && r === "AUTH") {
            const n = i
              , o = W.state.preferredAccountTypes?.[s.chainNamespace];
            await n.switchNetwork(s.caipNetworkId);
            const a = await n.getUser({
                chainId: s.caipNetworkId,
                preferredAccountType: o
            });
            this.emit("switchNetwork", a)
        }
    }
    getWalletConnectConnector() {
        const e = this.connectors.find(s => s instanceof pd);
        if (!e)
            throw new Error("WalletConnectConnector not found");
        return e
    }
}
class R0 extends x0 {
    setUniversalProvider(e) {
        this.addConnector(new pd({
            provider: e,
            caipNetworks: this.getCaipNetworks(),
            namespace: this.namespace
        }))
    }
    async connect(e) {
        return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: Number(e.chainId),
            provider: this.provider,
            address: ""
        })
    }
    async disconnect() {
        try {
            await this.getWalletConnectConnector().disconnect()
        } catch (e) {
            console.warn("UniversalAdapter:disconnect - error", e)
        }
    }
    async getAccounts({namespace: e}) {
        const r = this.provider?.session?.namespaces?.[e]?.accounts?.map(i => {
            const [,,n] = i.split(":");
            return n
        }
        ).filter( (i, n, o) => o.indexOf(i) === n) || [];
        return Promise.resolve({
            accounts: r.map(i => Z.createAccount(e, i, e === "bip122" ? "payment" : "eoa"))
        })
    }
    async syncConnectors() {
        return Promise.resolve()
    }
    async getBalance(e) {
        if (!(e.caipNetwork && ve.BALANCE_SUPPORTED_CHAINS.includes(e.caipNetwork?.chainNamespace)) || e.caipNetwork?.testnet)
            return {
                balance: "0.00",
                symbol: e.caipNetwork?.nativeCurrency.symbol || ""
            };
        if (W.state.balanceLoading && e.chainId === h.state.activeCaipNetwork?.id)
            return {
                balance: W.state.balance || "0.00",
                symbol: W.state.balanceSymbol || ""
            };
        const i = (await W.fetchTokenBalance()).find(n => n.chainId === `${e.caipNetwork?.chainNamespace}:${e.chainId}` && n.symbol === e.caipNetwork?.nativeCurrency.symbol);
        return {
            balance: i?.quantity.numeric || "0.00",
            symbol: i?.symbol || e.caipNetwork?.nativeCurrency.symbol || ""
        }
    }
    async signMessage(e) {
        const {provider: s, message: r, address: i} = e;
        if (!s)
            throw new Error("UniversalAdapter:signMessage - provider is undefined");
        let n = "";
        return h.state.activeCaipNetwork?.chainNamespace === z.CHAIN.SOLANA ? n = (await s.request({
            method: "solana_signMessage",
            params: {
                message: Uc.encode(new TextEncoder().encode(r)),
                pubkey: i
            }
        }, h.state.activeCaipNetwork?.caipNetworkId)).signature : n = await s.request({
            method: "personal_sign",
            params: [r, i]
        }, h.state.activeCaipNetwork?.caipNetworkId),
        {
            signature: n
        }
    }
    async estimateGas() {
        return Promise.resolve({
            gas: BigInt(0)
        })
    }
    async sendTransaction() {
        return Promise.resolve({
            hash: ""
        })
    }
    walletGetAssets(e) {
        return Promise.resolve({})
    }
    async writeContract() {
        return Promise.resolve({
            hash: ""
        })
    }
    parseUnits() {
        return 0n
    }
    formatUnits() {
        return "0"
    }
    async getCapabilities() {
        return Promise.resolve({})
    }
    async grantPermissions() {
        return Promise.resolve({})
    }
    async revokePermissions() {
        return Promise.resolve("0x")
    }
    async syncConnection() {
        return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: 1,
            provider: this.provider,
            address: ""
        })
    }
    async switchNetwork(e) {
        const {caipNetwork: s} = e
          , r = this.getWalletConnectConnector();
        if (s.chainNamespace === z.CHAIN.EVM)
            try {
                await r.provider?.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: Mo(s.id)
                    }]
                })
            } catch (i) {
                if (i.code === Yr.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || i.code === Yr.ERROR_INVALID_CHAIN_ID || i.code === Yr.ERROR_CODE_DEFAULT || i?.data?.originalError?.code === Yr.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)
                    try {
                        await r.provider?.request({
                            method: "wallet_addEthereumChain",
                            params: [{
                                chainId: Mo(s.id),
                                rpcUrls: [s?.rpcUrls.chainDefault?.http],
                                chainName: s.name,
                                nativeCurrency: s.nativeCurrency,
                                blockExplorerUrls: [s.blockExplorers?.default.url]
                            }]
                        })
                    } catch {
                        throw new Error("Chain is not supported")
                    }
            }
        r.provider.setDefaultChain(s.caipNetworkId)
    }
    getWalletConnectProvider() {
        return this.connectors.find(r => r.type === "WALLET_CONNECT")?.provider
    }
}
const $0 = ["email", "socials", "swaps", "onramp", "activity", "reownBranding"]
  , Di = {
    email: {
        apiFeatureName: "social_login",
        localFeatureName: "email",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: t => {
            if (!t?.config)
                return !1;
            const e = t.config;
            return !!t.isEnabled && e.includes("email")
        }
        ,
        processFallback: t => t === void 0 ? ve.DEFAULT_REMOTE_FEATURES.email : !!t
    },
    socials: {
        apiFeatureName: "social_login",
        localFeatureName: "socials",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: t => {
            if (!t?.config)
                return !1;
            const e = t.config;
            return t.isEnabled && e.length > 0 ? e.filter(s => s !== "email") : !1
        }
        ,
        processFallback: t => t === void 0 ? ve.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? ve.DEFAULT_REMOTE_FEATURES.socials : !1 : t
    },
    swaps: {
        apiFeatureName: "swap",
        localFeatureName: "swaps",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: t => {
            if (!t?.config)
                return !1;
            const e = t.config;
            return t.isEnabled && e.length > 0 ? e : !1
        }
        ,
        processFallback: t => t === void 0 ? ve.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? ve.DEFAULT_REMOTE_FEATURES.swaps : !1 : t
    },
    onramp: {
        apiFeatureName: "onramp",
        localFeatureName: "onramp",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: t => {
            if (!t?.config)
                return !1;
            const e = t.config;
            return t.isEnabled && e.length > 0 ? e : !1
        }
        ,
        processFallback: t => t === void 0 ? ve.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? ve.DEFAULT_REMOTE_FEATURES.onramp : !1 : t
    },
    activity: {
        apiFeatureName: "activity",
        localFeatureName: "history",
        returnType: !1,
        isLegacy: !0,
        isAvailableOnBasic: !1,
        processApi: t => !!t.isEnabled,
        processFallback: t => t === void 0 ? ve.DEFAULT_REMOTE_FEATURES.activity : !!t
    },
    reownBranding: {
        apiFeatureName: "reown_branding",
        localFeatureName: "reownBranding",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: t => !!t.isEnabled,
        processFallback: t => t === void 0 ? ve.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
    }
}
  , U0 = {
    localSettingsOverridden: new Set,
    getApiConfig(t, e) {
        return e?.find(s => s.id === t)
    },
    addWarning(t, e) {
        if (t !== void 0) {
            const s = Di[e]
              , r = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
            this.localSettingsOverridden.add(r)
        }
    },
    processFeature(t, e, s, r, i) {
        const n = Di[t]
          , o = e[n.localFeatureName];
        if (i && !n.isAvailableOnBasic)
            return !1;
        if (r) {
            const a = this.getApiConfig(n.apiFeatureName, s);
            return a?.config === null ? this.processFallbackFeature(t, o) : a?.config ? (o !== void 0 && this.addWarning(o, t),
            this.processApiFeature(t, a)) : !1
        }
        return this.processFallbackFeature(t, o)
    },
    processApiFeature(t, e) {
        return Di[t].processApi(e)
    },
    processFallbackFeature(t, e) {
        return Di[t].processFallback(e)
    },
    async fetchRemoteFeatures(t) {
        const e = t.basic ?? !1
          , s = t.features || {};
        this.localSettingsOverridden.clear();
        let r = null
          , i = !1;
        try {
            r = await V.fetchProjectConfig(),
            i = r != null
        } catch (o) {
            console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o)
        }
        const n = i && !e ? ve.DEFAULT_REMOTE_FEATURES : ve.DEFAULT_REMOTE_FEATURES_DISABLED;
        try {
            for (const o of $0) {
                const a = this.processFeature(o, s, r, i, e);
                Object.assign(n, {
                    [o]: a
                })
            }
        } catch (o) {
            return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o),
            ve.DEFAULT_REMOTE_FEATURES
        }
        if (i && this.localSettingsOverridden.size > 0) {
            const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
            xs.open({
                shortMessage: "Local configuration ignored",
                longMessage: `[Reown Config Notice] ${o}`
            }, "warning")
        }
        return n
    }
};
class D0 {
    constructor(e) {
        this.chainNamespaces = [],
        this.remoteFeatures = {},
        this.reportedAlertErrors = {},
        this.getCaipNetwork = (s, r) => {
            if (s) {
                const i = h.getNetworkData(s)?.requestedCaipNetworks?.find(a => a.id === r);
                if (i)
                    return i;
                const n = h.getNetworkData(s)?.caipNetwork;
                return n || h.getRequestedCaipNetworks(s).filter(a => a.chainNamespace === s)?.[0]
            }
            return h.state.activeCaipNetwork || this.defaultCaipNetwork
        }
        ,
        this.getCaipNetworkId = () => {
            const s = this.getCaipNetwork();
            if (s)
                return s.id
        }
        ,
        this.getCaipNetworks = s => h.getCaipNetworks(s),
        this.getActiveChainNamespace = () => h.state.activeChain,
        this.setRequestedCaipNetworks = (s, r) => {
            h.setRequestedCaipNetworks(s, r)
        }
        ,
        this.getApprovedCaipNetworkIds = () => h.getAllApprovedCaipNetworkIds(),
        this.getCaipAddress = s => h.state.activeChain === s || !s ? h.state.activeCaipAddress : h.getAccountProp("caipAddress", s),
        this.setClientId = s => {
            J.setClientId(s)
        }
        ,
        this.getProvider = s => Se.getProvider(s),
        this.getProviderType = s => Se.getProviderId(s),
        this.getPreferredAccountType = s => W.state.preferredAccountTypes?.[s],
        this.setCaipAddress = (s, r) => {
            W.setCaipAddress(s, r),
            s && S.state.enableEmbedded && this.close()
        }
        ,
        this.setBalance = (s, r, i) => {
            W.setBalance(s, r, i)
        }
        ,
        this.setProfileName = (s, r) => {
            W.setProfileName(s, r)
        }
        ,
        this.setProfileImage = (s, r) => {
            W.setProfileImage(s, r)
        }
        ,
        this.setUser = (s, r) => {
            W.setUser(s, r)
        }
        ,
        this.resetAccount = s => {
            W.resetAccount(s)
        }
        ,
        this.setCaipNetwork = s => {
            h.setActiveCaipNetwork(s)
        }
        ,
        this.setCaipNetworkOfNamespace = (s, r) => {
            h.setChainNetworkData(r, {
                caipNetwork: s
            })
        }
        ,
        this.setAllAccounts = (s, r) => {
            W.setAllAccounts(s, r),
            S.setHasMultipleAddresses(s?.length > 1)
        }
        ,
        this.setStatus = (s, r) => {
            W.setStatus(s, r),
            q.isConnected() ? F.setConnectionStatus("connected") : F.setConnectionStatus("disconnected")
        }
        ,
        this.getAddressByChainNamespace = s => h.getAccountProp("address", s),
        this.setConnectors = s => {
            const r = [...q.state.allConnectors, ...s];
            q.setConnectors(r)
        }
        ,
        this.setConnections = (s, r) => {
            Y.setConnections(s, r)
        }
        ,
        this.fetchIdentity = s => J.fetchIdentity(s),
        this.getReownName = s => ei.getNamesForAddress(s),
        this.getConnectors = () => q.getConnectors(),
        this.getConnectorImage = s => qc.getConnectorImage(s),
        this.setConnectedWalletInfo = (s, r) => {
            const i = Se.getProviderId(r)
              , n = s ? {
                ...s,
                type: i
            } : void 0;
            W.setConnectedWalletInfo(n, r)
        }
        ,
        this.getIsConnectedState = () => !!h.state.activeCaipAddress,
        this.addAddressLabel = (s, r, i) => {
            W.addAddressLabel(s, r, i)
        }
        ,
        this.removeAddressLabel = (s, r) => {
            W.removeAddressLabel(s, r)
        }
        ,
        this.getAddress = s => h.state.activeChain === s || !s ? W.state.address : h.getAccountProp("address", s),
        this.setApprovedCaipNetworksData = s => h.setApprovedCaipNetworksData(s),
        this.resetNetwork = s => {
            h.resetNetwork(s)
        }
        ,
        this.addConnector = s => {
            q.addConnector(s)
        }
        ,
        this.resetWcConnection = () => {
            Y.resetWcConnection()
        }
        ,
        this.setAddressExplorerUrl = (s, r) => {
            W.setAddressExplorerUrl(s, r)
        }
        ,
        this.setSmartAccountDeployed = (s, r) => {
            W.setSmartAccountDeployed(s, r)
        }
        ,
        this.setSmartAccountEnabledNetworks = (s, r) => {
            h.setSmartAccountEnabledNetworks(s, r)
        }
        ,
        this.setPreferredAccountType = (s, r) => {
            W.setPreferredAccountType(s, r)
        }
        ,
        this.setEIP6963Enabled = s => {
            S.setEIP6963Enabled(s)
        }
        ,
        this.handleUnsafeRPCRequest = () => {
            if (this.isOpen()) {
                if (this.isTransactionStackEmpty())
                    return;
                this.redirect("ApproveTransaction")
            } else
                this.open({
                    view: "ApproveTransaction"
                })
        }
        ,
        this.options = e,
        this.version = e.sdkVersion,
        this.caipNetworks = this.extendCaipNetworks(e),
        this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks),
        this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e),
        this.chainAdapters = this.createAdapters(e.adapters),
        this.readyPromise = this.initialize(e)
    }
    getChainNamespacesSet(e, s) {
        const r = e?.map(n => n.namespace).filter(n => !!n);
        if (r?.length)
            return [...new Set(r)];
        const i = s?.map(n => n.chainNamespace);
        return [...new Set(i)]
    }
    async initialize(e) {
        this.initializeProjectSettings(e),
        this.initControllers(e),
        await this.initChainAdapters(),
        this.sendInitializeEvent(e),
        await this.syncExistingConnection(),
        this.remoteFeatures = await U0.fetchRemoteFeatures(e),
        S.setRemoteFeatures(this.remoteFeatures),
        this.remoteFeatures.onramp && jn.setOnrampProviders(this.remoteFeatures.onramp),
        (S.state.remoteFeatures?.email || Array.isArray(S.state.remoteFeatures?.socials) && S.state.remoteFeatures?.socials.length > 0) && await this.checkAllowedOrigins()
    }
    async checkAllowedOrigins() {
        const e = await V.fetchAllowedOrigins();
        if (e && Z.isClient()) {
            const s = window.location.origin;
            Fi.isOriginAllowed(s, e, Yr.DEFAULT_ALLOWED_ANCESTORS) || xs.open(dr.ALERT_ERRORS.INVALID_APP_CONFIGURATION, "error")
        } else
            xs.open(dr.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error")
    }
    sendInitializeEvent(e) {
        const {...s} = e;
        delete s.adapters,
        delete s.universalProvider,
        Pe.sendEvent({
            type: "track",
            event: "INITIALIZE",
            properties: {
                ...s,
                networks: e.networks.map(r => r.id),
                siweConfig: {
                    options: e.siweConfig?.options || {}
                }
            }
        })
    }
    initControllers(e) {
        this.initializeOptionsController(e),
        this.initializeChainController(e),
        this.initializeThemeController(e),
        this.initializeConnectionController(e),
        this.initializeConnectorController()
    }
    initializeThemeController(e) {
        e.themeMode && gt.setThemeMode(e.themeMode),
        e.themeVariables && gt.setThemeVariables(e.themeVariables)
    }
    initializeChainController(e) {
        if (!this.connectionControllerClient || !this.networkControllerClient)
            throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
        h.initialize(e.adapters ?? [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient
        });
        const s = this.getDefaultNetwork();
        s && h.setActiveCaipNetwork(s)
    }
    initializeConnectionController(e) {
        Y.setWcBasic(e.basic ?? !1)
    }
    initializeConnectorController() {
        q.initialize(this.chainNamespaces)
    }
    initializeProjectSettings(e) {
        S.setProjectId(e.projectId),
        S.setSdkVersion(e.sdkVersion)
    }
    initializeOptionsController(e) {
        S.setDebug(e.debug !== !1),
        S.setEnableWalletConnect(e.enableWalletConnect !== !1),
        S.setEnableWalletGuide(e.enableWalletGuide !== !1),
        S.setEnableWallets(e.enableWallets !== !1),
        S.setEIP6963Enabled(e.enableEIP6963 !== !1),
        S.setEnableNetworkSwitch(e.enableNetworkSwitch !== !1),
        S.setEnableAuthLogger(e.enableAuthLogger !== !1),
        S.setCustomRpcUrls(e.customRpcUrls),
        S.setEnableEmbedded(e.enableEmbedded),
        S.setAllWallets(e.allWallets),
        S.setIncludeWalletIds(e.includeWalletIds),
        S.setExcludeWalletIds(e.excludeWalletIds),
        S.setFeaturedWalletIds(e.featuredWalletIds),
        S.setTokens(e.tokens),
        S.setTermsConditionsUrl(e.termsConditionsUrl),
        S.setPrivacyPolicyUrl(e.privacyPolicyUrl),
        S.setCustomWallets(e.customWallets),
        S.setFeatures(e.features),
        S.setAllowUnsupportedChain(e.allowUnsupportedChain),
        S.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),
        S.setPreferUniversalLinks(e.experimental_preferUniversalLinks),
        S.setDefaultAccountTypes(e.defaultAccountTypes);
        const s = F.getPreferredAccountTypes() || {}
          , r = {
            ...S.state.defaultAccountTypes,
            ...s
        };
        W.setPreferredAccountTypes(r);
        const i = this.getDefaultMetaData();
        if (!e.metadata && i && (e.metadata = i),
        S.setMetadata(e.metadata),
        S.setDisableAppend(e.disableAppend),
        S.setEnableEmbedded(e.enableEmbedded),
        S.setSIWX(e.siwx),
        !e.projectId) {
            xs.open(dr.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
            return
        }
        if (e.adapters?.find(o => o.namespace === z.CHAIN.EVM) && e.siweConfig) {
            if (e.siwx)
                throw new Error("Cannot set both `siweConfig` and `siwx` options");
            S.setSIWX(e.siweConfig.mapToSIWX())
        }
    }
    getDefaultMetaData() {
        return Z.isClient() ? {
            name: document.getElementsByTagName("title")?.[0]?.textContent || "",
            description: document.querySelector('meta[property="og:description"]')?.content || "",
            url: window.location.origin,
            icons: [document.querySelector('link[rel~="icon"]')?.href || ""]
        } : null
    }
    setUnsupportedNetwork(e) {
        const s = this.getActiveChainNamespace();
        if (s) {
            const r = hr.getUnsupportedNetwork(`${s}:${e}`);
            h.setActiveCaipNetwork(r)
        }
    }
    getDefaultNetwork() {
        return hr.getCaipNetworkFromStorage(this.defaultCaipNetwork)
    }
    extendCaipNetwork(e, s) {
        return hr.extendCaipNetwork(e, {
            customNetworkImageUrls: s.chainImages,
            projectId: s.projectId
        })
    }
    extendCaipNetworks(e) {
        return hr.extendCaipNetworks(e.networks, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId
        })
    }
    extendDefaultCaipNetwork(e) {
        const s = e.networks.find(i => i.id === e.defaultNetwork?.id);
        return s ? hr.extendCaipNetwork(s, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId
        }) : void 0
    }
    async disconnectNamespace(e) {
        try {
            const s = this.getAdapter(e)
              , r = Se.getProvider(e)
              , i = Se.getProviderId(e)
              , {caipAddress: n} = h.getAccountData(e) || {};
            this.setLoading(!0, e),
            n && s?.disconnect && await s.disconnect({
                provider: r,
                providerType: i
            }),
            F.removeConnectedNamespace(e),
            Se.resetChain(e),
            this.setUser(void 0, e),
            this.setStatus("disconnected", e),
            this.setConnectedWalletInfo(void 0, e),
            q.removeConnectorId(e),
            h.resetAccount(e),
            h.resetNetwork(e),
            this.setLoading(!1, e)
        } catch (s) {
            throw this.setLoading(!1, e),
            new Error(`Failed to disconnect chain ${e}: ${s.message}`)
        }
    }
    createClients() {
        this.connectionControllerClient = {
            connectWalletConnect: async () => {
                const e = h.state.activeChain
                  , s = this.getAdapter(e)
                  , r = this.getCaipNetwork(e)?.id;
                if (!s)
                    throw new Error("Adapter not found");
                const i = await s.connectWalletConnect(r);
                this.close(),
                this.setClientId(i?.clientId || null),
                F.setConnectedNamespaces([...h.state.chains.keys()]),
                this.chainNamespaces.forEach(n => {
                    q.setConnectorId(ps.CONNECTOR_TYPE_WALLET_CONNECT, n)
                }
                ),
                await this.syncWalletConnectAccount()
            }
            ,
            connectExternal: async ({id: e, info: s, type: r, provider: i, chain: n, caipNetwork: o, socialUri: a}) => {
                const c = h.state.activeChain
                  , l = n || c
                  , d = this.getAdapter(l);
                if (n && n !== c && !o) {
                    const w = this.getCaipNetworks().find(g => g.chainNamespace === n);
                    w && this.setCaipNetwork(w)
                }
                if (!d)
                    throw new Error("Adapter not found");
                const u = this.getCaipNetwork(l)
                  , p = await d.connect({
                    id: e,
                    info: s,
                    type: r,
                    provider: i,
                    socialUri: a,
                    chainId: o?.id || u?.id,
                    rpcUrl: o?.rpcUrls?.default?.http?.[0] || u?.rpcUrls?.default?.http?.[0]
                });
                if (!p)
                    return;
                F.addConnectedNamespace(l),
                this.syncProvider({
                    ...p,
                    chainNamespace: l
                });
                const f = W.state.allAccounts
                  , {accounts: m} = f?.length > 0 ? {
                    accounts: [...f]
                } : await d.getAccounts({
                    namespace: l,
                    id: e
                });
                this.setAllAccounts(m, l),
                this.setStatus("connected", l),
                this.syncConnectedWalletInfo(l)
            }
            ,
            reconnectExternal: async ({id: e, info: s, type: r, provider: i}) => {
                const n = h.state.activeChain
                  , o = this.getAdapter(n);
                o?.reconnect && (await o?.reconnect({
                    id: e,
                    info: s,
                    type: r,
                    provider: i,
                    chainId: this.getCaipNetwork()?.id
                }),
                F.addConnectedNamespace(n),
                this.syncConnectedWalletInfo(n))
            }
            ,
            disconnect: async e => {
                const s = N0(e);
                try {
                    const r = await Promise.allSettled(s.map(async ([n]) => this.disconnectNamespace(n)));
                    he.resetSend(),
                    Y.resetWcConnection(),
                    await ti.clearSessions(),
                    q.setFilterByNamespace(void 0);
                    const i = r.filter(n => n.status === "rejected");
                    if (i.length > 0)
                        throw new Error(i.map(n => n.reason.message).join(", "));
                    F.deleteConnectedSocialProvider(),
                    Pe.sendEvent({
                        type: "track",
                        event: "DISCONNECT_SUCCESS",
                        properties: {
                            namespace: e || "all"
                        }
                    })
                } catch (r) {
                    throw new Error(`Failed to disconnect chains: ${r.message}`)
                }
            }
            ,
            checkInstalled: e => e ? e.some(s => !!window.ethereum?.[String(s)]) : !!window.ethereum,
            signMessage: async e => (await this.getAdapter(h.state.activeChain)?.signMessage({
                message: e,
                address: W.state.address,
                provider: Se.getProvider(h.state.activeChain)
            }))?.signature || "",
            sendTransaction: async e => {
                const s = e.chainNamespace;
                if (ve.SEND_SUPPORTED_NAMESPACES.includes(s)) {
                    const r = this.getAdapter(h.state.activeChain)
                      , i = Se.getProvider(s);
                    return (await r?.sendTransaction({
                        ...e,
                        caipNetwork: this.getCaipNetwork(),
                        provider: i
                    }))?.hash || ""
                }
                return ""
            }
            ,
            estimateGas: async e => {
                if (e.chainNamespace === z.CHAIN.EVM) {
                    const s = this.getAdapter(h.state.activeChain)
                      , r = Se.getProvider(h.state.activeChain)
                      , i = this.getCaipNetwork();
                    if (!i)
                        throw new Error("CaipNetwork is undefined");
                    return (await s?.estimateGas({
                        ...e,
                        provider: r,
                        caipNetwork: i
                    }))?.gas || 0n
                }
                return 0n
            }
            ,
            getEnsAvatar: async () => (await this.syncIdentity({
                address: W.state.address,
                chainId: Number(this.getCaipNetwork()?.id),
                chainNamespace: h.state.activeChain
            }),
            W.state.profileImage || !1),
            getEnsAddress: async e => await Fi.resolveReownName(e),
            writeContract: async e => {
                const s = this.getAdapter(h.state.activeChain)
                  , r = this.getCaipNetwork()
                  , i = this.getCaipAddress()
                  , n = Se.getProvider(h.state.activeChain);
                if (!r || !i)
                    throw new Error("CaipNetwork or CaipAddress is undefined");
                return (await s?.writeContract({
                    ...e,
                    caipNetwork: r,
                    provider: n,
                    caipAddress: i
                }))?.hash
            }
            ,
            parseUnits: (e, s) => this.getAdapter(h.state.activeChain)?.parseUnits({
                value: e,
                decimals: s
            }) ?? 0n,
            formatUnits: (e, s) => this.getAdapter(h.state.activeChain)?.formatUnits({
                value: e,
                decimals: s
            }) ?? "0",
            getCapabilities: async e => await this.getAdapter(h.state.activeChain)?.getCapabilities(e),
            grantPermissions: async e => await this.getAdapter(h.state.activeChain)?.grantPermissions(e),
            revokePermissions: async e => {
                const s = this.getAdapter(h.state.activeChain);
                return s?.revokePermissions ? await s.revokePermissions(e) : "0x"
            }
            ,
            walletGetAssets: async e => await this.getAdapter(h.state.activeChain)?.walletGetAssets(e) ?? {},
            updateBalance: e => {
                const s = this.getCaipNetwork(e);
                !s || !W.state.address || this.updateNativeBalance(W.state.address, s?.id, e)
            }
        },
        this.networkControllerClient = {
            switchCaipNetwork: async e => await this.switchCaipNetwork(e),
            getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
        },
        Y.setClient(this.connectionControllerClient)
    }
    getApprovedCaipNetworksData() {
        if (Se.getProviderId(h.state.activeChain) === ps.CONNECTOR_TYPE_WALLET_CONNECT) {
            const s = this.universalProvider?.session?.namespaces;
            return {
                supportsAllNetworks: this.universalProvider?.session?.peer?.metadata.name === "MetaMask Wallet",
                approvedCaipNetworkIds: this.getChainsFromNamespaces(s)
            }
        }
        return {
            supportsAllNetworks: !0,
            approvedCaipNetworkIds: []
        }
    }
    async switchCaipNetwork(e) {
        if (!e)
            return;
        const s = e.chainNamespace;
        if (this.getAddressByChainNamespace(e.chainNamespace)) {
            const i = Se.getProvider(s)
              , n = Se.getProviderId(s);
            if (e.chainNamespace === h.state.activeChain)
                await this.getAdapter(s)?.switchNetwork({
                    caipNetwork: e,
                    provider: i,
                    providerType: n
                });
            else if (this.setCaipNetwork(e),
            n === ps.CONNECTOR_TYPE_WALLET_CONNECT)
                this.syncWalletConnectAccount();
            else {
                const o = this.getAddressByChainNamespace(s);
                o && this.syncAccount({
                    address: o,
                    chainId: e.id,
                    chainNamespace: s
                })
            }
        } else
            this.setCaipNetwork(e)
    }
    getChainsFromNamespaces(e={}) {
        return Object.values(e).flatMap(s => {
            const r = s.chains || []
              , i = s.accounts.map(n => {
                const {chainId: o, chainNamespace: a} = cs.parseCaipAddress(n);
                return `${a}:${o}`
            }
            );
            return Array.from(new Set([...r, ...i]))
        }
        )
    }
    createAdapters(e) {
        return this.createClients(),
        this.chainNamespaces.reduce( (s, r) => {
            const i = e?.find(n => n.namespace === r);
            return i ? (i.construct({
                namespace: r,
                projectId: this.options?.projectId,
                networks: this.getCaipNetworks()
            }),
            s[r] = i) : s[r] = new R0({
                namespace: r,
                networks: this.getCaipNetworks()
            }),
            s
        }
        , {})
    }
    async initChainAdapter(e) {
        this.onConnectors(e),
        this.listenAdapter(e),
        await this.chainAdapters?.[e].syncConnectors(this.options, this),
        await this.createUniversalProviderForAdapter(e)
    }
    async initChainAdapters() {
        await Promise.all(this.chainNamespaces.map(async e => {
            await this.initChainAdapter(e)
        }
        ))
    }
    onConnectors(e) {
        this.getAdapter(e)?.on("connectors", this.setConnectors.bind(this))
    }
    listenAdapter(e) {
        const s = this.getAdapter(e);
        if (!s)
            return;
        const r = F.getConnectionStatus();
        r === "connected" ? this.setStatus("connecting", e) : r === "disconnected" ? (F.clearAddressCache(),
        this.setStatus(r, e)) : this.setStatus(r, e),
        s.on("switchNetwork", ({address: i, chainId: n}) => {
            const o = this.getCaipNetworks().find(l => l.id === n || l.caipNetworkId === n)
              , a = h.state.activeChain === e
              , c = h.getAccountProp("address", e);
            if (o) {
                const l = a && i ? i : c;
                l && this.syncAccount({
                    address: l,
                    chainId: o.id,
                    chainNamespace: e
                })
            } else
                this.setUnsupportedNetwork(n)
        }
        ),
        s.on("disconnect", this.disconnect.bind(this, e)),
        s.on("connections", i => {
            this.setConnections(i, e)
        }
        ),
        s.on("pendingTransactions", () => {
            const i = W.state.address
              , n = h.state.activeCaipNetwork;
            !i || !n?.id || this.updateNativeBalance(i, n.id, n.chainNamespace)
        }
        ),
        s.on("accountChanged", ({address: i, chainId: n}) => {
            const o = h.state.activeChain === e;
            o && n ? this.syncAccount({
                address: i,
                chainId: n,
                chainNamespace: e
            }) : o && h.state.activeCaipNetwork?.id ? this.syncAccount({
                address: i,
                chainId: h.state.activeCaipNetwork?.id,
                chainNamespace: e
            }) : this.syncAccountInfo(i, n, e),
            this.syncAllAccounts(e)
        }
        )
    }
    async createUniversalProviderForAdapter(e) {
        await this.getUniversalProvider(),
        this.universalProvider && this.chainAdapters?.[e]?.setUniversalProvider?.(this.universalProvider)
    }
    async syncExistingConnection() {
        await Promise.allSettled(this.chainNamespaces.map(e => this.syncNamespaceConnection(e)))
    }
    async syncNamespaceConnection(e) {
        try {
            e === z.CHAIN.EVM && Z.isSafeApp() && q.setConnectorId(z.CONNECTOR_ID.SAFE, e);
            const s = q.getConnectorId(e);
            switch (this.setStatus("connecting", e),
            s) {
            case z.CONNECTOR_ID.WALLET_CONNECT:
                await this.syncWalletConnectAccount();
                break;
            case z.CONNECTOR_ID.AUTH:
                break;
            default:
                await this.syncAdapterConnection(e)
            }
        } catch (s) {
            console.warn("AppKit couldn't sync existing connection", s),
            this.setStatus("disconnected", e)
        }
    }
    async syncAdapterConnection(e) {
        const s = this.getAdapter(e)
          , r = q.getConnectorId(e)
          , i = this.getCaipNetwork(e)
          , o = q.getConnectors(e).find(a => a.id === r);
        try {
            if (!s || !o)
                throw new Error(`Adapter or connector not found for namespace ${e}`);
            if (!i?.id)
                throw new Error("CaipNetwork not found");
            const a = await s?.syncConnection({
                namespace: e,
                id: o.id,
                chainId: i.id,
                rpcUrl: i?.rpcUrls?.default?.http?.[0]
            });
            if (a) {
                const c = await s?.getAccounts({
                    namespace: e,
                    id: o.id
                });
                c && c.accounts.length > 0 ? this.setAllAccounts(c.accounts, e) : this.setAllAccounts([Z.createAccount(e, a.address, "eoa")], e),
                this.syncProvider({
                    ...a,
                    chainNamespace: e
                }),
                await this.syncAccount({
                    ...a,
                    chainNamespace: e
                }),
                this.setStatus("connected", e)
            } else
                this.setStatus("disconnected", e)
        } catch {
            this.setStatus("disconnected", e)
        }
    }
    async syncWalletConnectAccount() {
        const e = this.chainNamespaces.map(async s => {
            const r = this.getAdapter(s)
              , i = this.universalProvider?.session?.namespaces?.[s]?.accounts || []
              , n = h.state.activeCaipNetwork?.id
              , o = i.find(a => {
                const {chainId: c} = cs.parseCaipAddress(a);
                return c === n?.toString()
            }
            ) || i[0];
            if (o) {
                const a = cs.validateCaipAddress(o)
                  , {chainId: c, address: l} = cs.parseCaipAddress(a);
                if (Se.setProviderId(s, ps.CONNECTOR_TYPE_WALLET_CONNECT),
                this.caipNetworks && h.state.activeCaipNetwork && r?.namespace !== z.CHAIN.EVM) {
                    const d = r?.getWalletConnectProvider({
                        caipNetworks: this.getCaipNetworks(),
                        provider: this.universalProvider,
                        activeCaipNetwork: h.state.activeCaipNetwork
                    });
                    Se.setProvider(s, d)
                } else
                    Se.setProvider(s, this.universalProvider);
                q.setConnectorId(z.CONNECTOR_ID.WALLET_CONNECT, s),
                F.addConnectedNamespace(s),
                this.syncWalletConnectAccounts(s),
                await this.syncAccount({
                    address: l,
                    chainId: c,
                    chainNamespace: s
                })
            } else
                this.setStatus("disconnected", s);
            this.syncConnectedWalletInfo(s),
            await h.setApprovedCaipNetworksData(s)
        }
        );
        await Promise.all(e)
    }
    syncWalletConnectAccounts(e) {
        const s = this.universalProvider?.session?.namespaces?.[e]?.accounts?.map(r => {
            const {address: i} = cs.parseCaipAddress(r);
            return i
        }
        ).filter( (r, i, n) => n.indexOf(r) === i);
        s && this.setAllAccounts(s.map(r => Z.createAccount(e, r, e === "bip122" ? "payment" : "eoa")), e)
    }
    syncProvider({type: e, provider: s, id: r, chainNamespace: i}) {
        Se.setProviderId(i, e),
        Se.setProvider(i, s),
        q.setConnectorId(r, i)
    }
    async syncAllAccounts(e) {
        const s = q.getConnectorId(e);
        if (!s)
            return;
        const i = await this.getAdapter(e)?.getAccounts({
            namespace: e,
            id: s
        });
        i && i.accounts.length > 0 && this.setAllAccounts(i.accounts, e)
    }
    async syncAccount(e) {
        const s = e.chainNamespace === h.state.activeChain
          , r = h.getCaipNetworkByNamespace(e.chainNamespace, e.chainId)
          , {address: i, chainId: n, chainNamespace: o} = e
          , {chainId: a} = F.getActiveNetworkProps()
          , c = n || a
          , l = h.state.activeCaipNetwork?.name === z.UNSUPPORTED_NETWORK_NAME
          , d = h.getNetworkProp("supportsAllNetworks", o);
        if (this.setStatus("connected", o),
        !(l && !d) && c) {
            let u = this.getCaipNetworks().find(m => m.id.toString() === c.toString())
              , p = this.getCaipNetworks().find(m => m.chainNamespace === o);
            if (!d && !u && !p) {
                const m = this.getApprovedCaipNetworkIds() || []
                  , w = m.find(y => cs.parseCaipNetworkId(y)?.chainId === c.toString())
                  , g = m.find(y => cs.parseCaipNetworkId(y)?.chainNamespace === o);
                u = this.getCaipNetworks().find(y => y.caipNetworkId === w),
                p = this.getCaipNetworks().find(y => y.caipNetworkId === g || "deprecatedCaipNetworkId"in y && y.deprecatedCaipNetworkId === g)
            }
            const f = u || p;
            f?.chainNamespace === h.state.activeChain ? S.state.enableNetworkSwitch && !S.state.allowUnsupportedChain && h.state.activeCaipNetwork?.name === z.UNSUPPORTED_NETWORK_NAME ? h.showUnsupportedChainUI() : this.setCaipNetwork(f) : s || r && this.setCaipNetworkOfNamespace(r, o),
            this.syncConnectedWalletInfo(o),
            Uo.isLowerCaseMatch(i, W.state.address) || this.syncAccountInfo(i, f?.id, o),
            s ? await this.syncBalance({
                address: i,
                chainId: f?.id,
                chainNamespace: o
            }) : await this.syncBalance({
                address: i,
                chainId: r?.id,
                chainNamespace: o
            })
        }
    }
    async syncAccountInfo(e, s, r) {
        const i = this.getCaipAddress(r)
          , n = s || i?.split(":")[1];
        if (!n)
            return;
        const o = `${r}:${n}:${e}`;
        this.setCaipAddress(o, r),
        await this.syncIdentity({
            address: e,
            chainId: n,
            chainNamespace: r
        })
    }
    async syncReownName(e, s) {
        try {
            const r = await this.getReownName(e);
            if (r[0]) {
                const i = r[0];
                this.setProfileName(i.name, s)
            } else
                this.setProfileName(null, s)
        } catch {
            this.setProfileName(null, s)
        }
    }
    syncConnectedWalletInfo(e) {
        const s = q.getConnectorId(e)
          , r = Se.getProviderId(e);
        if (r === ps.CONNECTOR_TYPE_ANNOUNCED || r === ps.CONNECTOR_TYPE_INJECTED) {
            if (s) {
                const i = this.getConnectors().find(n => n.id === s);
                if (i) {
                    const {info: n, name: o, imageUrl: a} = i
                      , c = a || this.getConnectorImage(i);
                    this.setConnectedWalletInfo({
                        name: o,
                        icon: c,
                        ...n
                    }, e)
                }
            }
        } else if (r === ps.CONNECTOR_TYPE_WALLET_CONNECT) {
            const i = Se.getProvider(e);
            i?.session && this.setConnectedWalletInfo({
                ...i.session.peer.metadata,
                name: i.session.peer.metadata.name,
                icon: i.session.peer.metadata.icons?.[0]
            }, e)
        } else if (s && s === z.CONNECTOR_ID.COINBASE) {
            const i = this.getConnectors().find(n => n.id === z.CONNECTOR_ID.COINBASE);
            this.setConnectedWalletInfo({
                name: "Coinbase Wallet",
                icon: this.getConnectorImage(i)
            }, e)
        }
    }
    async syncBalance(e) {
        !Mc.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find(r => r.id.toString() === e.chainId?.toString()) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace)
    }
    async ready() {
        await this.readyPromise
    }
    async updateNativeBalance(e, s, r) {
        const i = this.getAdapter(r)
          , n = h.getCaipNetworkByNamespace(r, s);
        if (i) {
            const o = await i.getBalance({
                address: e,
                chainId: s,
                caipNetwork: n,
                tokens: this.options.tokens
            });
            return this.setBalance(o.balance, o.symbol, r),
            o
        }
    }
    async initializeUniversalAdapter() {
        const e = _0.createLogger( (r, ...i) => {
            r && this.handleAlertError(r),
            console.error(...i)
        }
        )
          , s = {
            projectId: this.options?.projectId,
            metadata: {
                name: this.options?.metadata ? this.options?.metadata.name : "",
                description: this.options?.metadata ? this.options?.metadata.description : "",
                url: this.options?.metadata ? this.options?.metadata.url : "",
                icons: this.options?.metadata ? this.options?.metadata.icons : [""]
            },
            logger: e
        };
        S.setManualWCControl(!!this.options?.manualWCControl),
        this.universalProvider = this.options.universalProvider ?? await $o.init(s),
        this.listenWalletConnect()
    }
    listenWalletConnect() {
        this.universalProvider && (this.universalProvider.on("display_uri", e => {
            Y.setUri(e)
        }
        ),
        this.universalProvider.on("connect", Y.finalizeWcConnection),
        this.universalProvider.on("disconnect", () => {
            this.chainNamespaces.forEach(e => {
                this.resetAccount(e)
            }
            ),
            Y.resetWcConnection()
        }
        ),
        this.universalProvider.on("chainChanged", e => {
            const s = this.getCaipNetworks().find(i => i.id == e)
              , r = this.getCaipNetwork();
            if (!s) {
                this.setUnsupportedNetwork(e);
                return
            }
            r?.id !== s?.id && this.setCaipNetwork(s)
        }
        ),
        this.universalProvider.on("session_event", e => {
            if (Fi.isSessionEventData(e)) {
                const {name: s, data: r} = e.params.event;
                s === "accountsChanged" && Array.isArray(r) && Z.isCaipAddress(r[0]) && this.syncAccount(cs.parseCaipAddress(r[0]))
            }
        }
        ))
    }
    createUniversalProvider() {
        return !this.universalProviderInitPromise && Z.isClient() && this.options?.projectId && (this.universalProviderInitPromise = this.initializeUniversalAdapter()),
        this.universalProviderInitPromise
    }
    async getUniversalProvider() {
        if (!this.universalProvider)
            try {
                await this.createUniversalProvider()
            } catch (e) {
                Pe.sendEvent({
                    type: "error",
                    event: "INTERNAL_SDK_ERROR",
                    properties: {
                        errorType: "UniversalProviderInitError",
                        errorMessage: e instanceof Error ? e.message : "Unknown",
                        uncaught: !1
                    }
                }),
                console.error("AppKit:getUniversalProvider - Cannot create provider", e)
            }
        return this.universalProvider
    }
    handleAlertError(e) {
        const s = Object.entries(dr.UniversalProviderErrors).find( ([,{message: a}]) => e.message.includes(a))
          , [r,i] = s ?? []
          , {message: n, alertErrorKey: o} = i ?? {};
        if (r && n && !this.reportedAlertErrors[r]) {
            const a = dr.ALERT_ERRORS[o];
            a && (xs.open(a, "error"),
            this.reportedAlertErrors[r] = !0)
        }
    }
    getAdapter(e) {
        if (e)
            return this.chainAdapters?.[e]
    }
    createAdapter(e) {
        if (!e)
            return;
        const s = e.namespace;
        if (!s)
            return;
        this.createClients();
        const r = e;
        r.namespace = s,
        r.construct({
            namespace: s,
            projectId: this.options?.projectId,
            networks: this.getCaipNetworks()
        }),
        this.chainNamespaces.includes(s) || this.chainNamespaces.push(s),
        this.chainAdapters && (this.chainAdapters[s] = r)
    }
    async open(e) {
        if (await this.injectModalUi(),
        e?.uri && Y.setUri(e.uri),
        e?.arguments)
            switch (e?.view) {
            case "Swap":
                return Fe.open({
                    ...e,
                    data: {
                        swap: e.arguments
                    }
                })
            }
        return Fe.open(e)
    }
    async close() {
        await this.injectModalUi(),
        Fe.close()
    }
    setLoading(e, s) {
        Fe.setLoading(e, s)
    }
    async disconnect(e) {
        await Y.disconnect(e)
    }
    getSIWX() {
        return S.state.siwx
    }
    getError() {
        return ""
    }
    getChainId() {
        return h.state.activeCaipNetwork?.id
    }
    async switchNetwork(e) {
        const s = this.getCaipNetworks().find(r => r.id === e.id);
        if (!s) {
            xs.open(dr.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
            return
        }
        await h.switchActiveNetwork(s)
    }
    getWalletProvider() {
        return h.state.activeChain ? Se.state.providers[h.state.activeChain] : null
    }
    getWalletProviderType() {
        return Se.getProviderId(h.state.activeChain)
    }
    subscribeProviders(e) {
        return Se.subscribeProviders(e)
    }
    getThemeMode() {
        return gt.state.themeMode
    }
    getThemeVariables() {
        return gt.state.themeVariables
    }
    setThemeMode(e) {
        gt.setThemeMode(e),
        hd(gt.state.themeMode)
    }
    setTermsConditionsUrl(e) {
        S.setTermsConditionsUrl(e)
    }
    setPrivacyPolicyUrl(e) {
        S.setPrivacyPolicyUrl(e)
    }
    setThemeVariables(e) {
        gt.setThemeVariables(e),
        k0(gt.state.themeVariables)
    }
    subscribeTheme(e) {
        return gt.subscribe(e)
    }
    getWalletInfo() {
        return W.state.connectedWalletInfo
    }
    getAccount(e) {
        const s = q.getAuthConnector(e)
          , r = h.getAccountData(e)
          , i = h.state.activeChain
          , n = F.getConnectedConnectorId(e || i);
        if (r)
            return {
                allAccounts: r.allAccounts,
                caipAddress: r.caipAddress,
                address: Z.getPlainAddress(r.caipAddress),
                isConnected: !!r.caipAddress,
                status: r.status,
                embeddedWalletInfo: s && n === z.CONNECTOR_ID.AUTH ? {
                    user: r.user ? {
                        ...r.user,
                        username: F.getConnectedSocialUsername()
                    } : void 0,
                    authProvider: r.socialProvider || "email",
                    accountType: r.preferredAccountTypes?.[e || i],
                    isSmartAccountDeployed: !!r.smartAccountDeployed
                } : void 0
            }
    }
    subscribeAccount(e, s) {
        const r = () => {
            const i = this.getAccount(s);
            i && e(i)
        }
        ;
        s ? h.subscribeChainProp("accountState", r, s) : h.subscribe(r),
        q.subscribe(r)
    }
    subscribeNetwork(e) {
        return h.subscribe( ({activeCaipNetwork: s}) => {
            e({
                caipNetwork: s,
                chainId: s?.id,
                caipNetworkId: s?.caipNetworkId
            })
        }
        )
    }
    subscribeWalletInfo(e) {
        return W.subscribeKey("connectedWalletInfo", e)
    }
    subscribeShouldUpdateToAddress(e) {
        W.subscribeKey("shouldUpdateToAddress", e)
    }
    subscribeCaipNetworkChange(e) {
        h.subscribeKey("activeCaipNetwork", e)
    }
    getState() {
        return bs.state
    }
    subscribeState(e) {
        return bs.subscribe(e)
    }
    showErrorMessage(e) {
        Ut.showError(e)
    }
    showSuccessMessage(e) {
        Ut.showSuccess(e)
    }
    getEvent() {
        return {
            ...Pe.state
        }
    }
    subscribeEvents(e) {
        return Pe.subscribe(e)
    }
    replace(e) {
        ie.replace(e)
    }
    redirect(e) {
        ie.push(e)
    }
    popTransactionStack(e) {
        ie.popTransactionStack(e)
    }
    isOpen() {
        return Fe.state.open
    }
    isTransactionStackEmpty() {
        return ie.state.transactionStack.length === 0
    }
    static getInstance() {
        return this.instance
    }
    updateFeatures(e) {
        S.setFeatures(e)
    }
    updateRemoteFeatures(e) {
        S.setRemoteFeatures(e)
    }
    updateOptions(e) {
        const r = {
            ...S.state || {},
            ...e
        };
        S.setOptions(r)
    }
    setConnectMethodsOrder(e) {
        S.setConnectMethodsOrder(e)
    }
    setWalletFeaturesOrder(e) {
        S.setWalletFeaturesOrder(e)
    }
    setCollapseWallets(e) {
        S.setCollapseWallets(e)
    }
    setSocialsOrder(e) {
        S.setSocialsOrder(e)
    }
    getConnectMethodsOrder() {
        return yo.getConnectOrderMethod(S.state.features, q.getConnectors())
    }
    addNetwork(e, s) {
        if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
        const r = this.extendCaipNetwork(s, this.options);
        this.getCaipNetworks().find(i => i.id === r.id) || h.addNetwork(r)
    }
    removeNetwork(e, s) {
        if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
        this.getCaipNetworks().find(i => i.id === s) && h.removeNetwork(e, s)
    }
}
let $c = !1;
class gd extends D0 {
    async open(e) {
        q.isConnected() || await super.open(e)
    }
    async close() {
        await super.close(),
        this.options.manualWCControl && Y.finalizeWcConnection()
    }
    async syncIdentity(e) {
        return Promise.resolve()
    }
    async syncBalance(e) {
        return Promise.resolve()
    }
    async injectModalUi() {
        if (!$c && Z.isClient()) {
            if (await Dn( () => import("./basic-BrfNJLul.js"), __vite__mapDeps([6, 7, 2, 3, 4, 8, 9, 10, 1, 5])),
            await Dn( () => import("./w3m-modal-BHlZSbc-.js"), __vite__mapDeps([11, 7, 2, 3, 4, 8, 9, 1, 5])),
            !document.querySelector("w3m-modal")) {
                const s = document.createElement("w3m-modal");
                !S.state.disableAppend && !S.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s)
            }
            $c = !0
        }
    }
}
const L0 = "1.7.8";
function M0(t) {
    return new gd({
        ...t,
        basic: !0,
        sdkVersion: `html-core-${L0}`
    })
}
const lC = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: gd,
    createAppKit: M0
}, Symbol.toStringTag, {
    value: "Module"
}));
export {V as A, q as C, Pe as E, Fe as M, S as O, ie as R, F as S, gt as T, yo as W, Z as a, ji as b, qc as c, Y as d, aC as e, z as f, h as g, $t as h, Ut as i, ve as j, cC as k, Xe as l, ti as m, xs as n, P0 as o, _e as p, W as q, oC as r, Qe as s, nC as t, lC as u, vt as w};
//# sourceMappingURL=core-DalZKZG0.js.map
