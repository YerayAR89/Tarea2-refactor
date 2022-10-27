import { IperfAudience } from './IperfAudience.js';

export class tragedy implements IperfAudience {
    audience: number;
    thisAmount: number = 40000;
    volumeCredits: number = 0;

    constructor(audience: number, thisAmount: number, volumeCredits: number) {
        this.audience = audience;
        this.thisAmount = thisAmount;
        this.volumeCredits = volumeCredits;
    }

    audienceAmount(audience: number): number {
        if (audience > 30) { this.thisAmount += 1000 * (audience - 30) };
        return this.thisAmount;
    }

    addCredits(audience: number): number {
        this.volumeCredits += Math.max(audience - 30, 0);
        return this.volumeCredits;
    }

}
