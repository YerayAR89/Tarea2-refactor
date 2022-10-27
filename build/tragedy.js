export class tragedy {
    constructor(audience, thisAmount, volumeCredits) {
        this.thisAmount = 40000;
        this.volumeCredits = 0;
        this.audience = audience;
        this.thisAmount = thisAmount;
        this.volumeCredits = volumeCredits;
    }
    audienceAmount(audience) {
        if (audience > 30) {
            this.thisAmount += 1000 * (audience - 30);
        }
        ;
        return this.thisAmount;
    }
    addCredits(audience) {
        this.volumeCredits += Math.max(audience - 30, 0);
        return this.volumeCredits;
    }
}
