interface IperfAudience {
    thisAmount: number;
    audience: number;
    volumeCredits: number;
    audienceAmount(audience: number): number;
    addCredits(audience: number): number;
}

export { IperfAudience };