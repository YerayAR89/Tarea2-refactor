import { IperfAudience } from './IperfAudience.js';

export class comedy implements IperfAudience {
    audience: number;
    thisAmount: number = 30000;
    volumeCredits: number = 0;

    constructor(audience: number, thisAmount: number, volumeCredits: number) {
        this.audience = audience;
        this.thisAmount = thisAmount;
        this.volumeCredits = volumeCredits;
    }

    audienceAmount(audience: number): number {
        if (audience > 20) { this.thisAmount += 10000 + 500 * (audience - 20) };
        return this.thisAmount;
    }

    addCredits(audience: number): number {
        this.volumeCredits += Math.floor(audience / 5);
        return this.volumeCredits;
    }
}