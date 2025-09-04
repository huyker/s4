const _ = {
    APP_URL: "https://pro.football.fun",
    API_URL: "https://api.pro.football.fun",
    PRIVY_CLIENT_ID: "cmcwzn2qn0223la0mzfyu5gl6",
    ASSETS_URL: "",
    WSS_URL: "wss://ws.pro.football.fun",
    WSS_ENABLED: "true",
    GA_TRACKING_ID: "G-7F1TBSER7Q",
    SENTRY_DSN: "https://a59d68d64dd79de4287106c3b66b8211@o4509123477438464.ingest.de.sentry.io/4509123479863376",
    ENVIRONMENT: "pro",
    PUBLIC_VAPID_KEY: "BITjigafN1W7pm7uFJU0wACpdWJMSOzM0Nt1VgV6xynNlH9Tc1jdaTZplxybdCofYPhgiu6hyuYaL2Uied63Gf4",
    PUBLIC_RPC_URL: "https://base-mainnet.g.alchemy.com/v2/CCDNKip23OyFJ7ssex2-O",
    PUBLIC_RELEASE: "35d243e3",
    PUBLIC_USDC_TOKEN_CONTRACT_ADDRESS: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    PUBLIC_DEX_CONTRACT_ADDRESS: "0x9da1bB4e725ACc0d96010b7cE2A7244Cda446617",
    PUBLIC_PLAYER_CONTRACT_ADDRESS: "0x71c8b0c5148EdB0399D1EdF9BF0C8C81dEa16918",
    PUBLIC_USDC_SYMBOL: "USDC",
    PUBLIC_CONTRACT_RENEWAL_ADDRESS: "0x6f0Bdfb013443C3Ff40E6BA11ecC543f302Dd470",
    PUBLIC_FEE_MANAGER_CONTRACT_ADDRESS: "0xBAc4a9428Ea707C51f171eD9890c3c2fa436305d",
    PUBLIC_CHAIN_CLIENT_ID: "8453",
    PUBLIC_WALLET_CONNECT_PROJECT_ID: "cea895dfe9b604dbfa1e5b377631b62d"
} 
  , L = {
    RENEWAL_COST_MULTIPLIER: 5e-4,
    RENEWAL_COST_DISCOUNTS: {
        5: .05,
        6: .1,
        7: .15,
        8: .2
    },
    SUBSTITUTION_THRESHOLDS: [{
        upper: 18,
        lower: 0,
        skillRatingPenalty: 0
    }, {
        upper: 21,
        lower: 19,
        skillRatingPenalty: 10
    }, {
        upper: 24,
        lower: 22,
        skillRatingPenalty: 25
    }, {
        upper: null,
        lower: 25,
        skillRatingPenalty: 70
    }],
    PLAYER_TOKEN_DECIMAL_PLACES: 18,
    REP_LEVEL_FORMULA: {
        baseRep: 200,
        incrementPerLevel: 100,
        maxLevel: 50
    },
    DEFAULT_SLIPPAGE_BPS: 500,
    DEFAULT_MIN_RENEWAL_LENGTH: 4,
    MAX_CONTRACT_LENGTH: 8
};
export {L as b, _ as c};
//# sourceMappingURL=config-ewMXOZVY.js.map
