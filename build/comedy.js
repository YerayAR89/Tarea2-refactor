export class comedy {
    constructor(audience, thisAmount, volumeCredits) {
        this.thisAmount = 30000;
        this.volumeCredits = 0;
        this.audience = audience;
        this.thisAmount = thisAmount;
        this.volumeCredits = volumeCredits;
    }
    audienceAmount(audience) {
        if (audience > 20) {
            this.thisAmount += 10000 + 500 * (audience - 20);
        }
        ;
        return this.thisAmount;
    }
    addCredits(audience) {
        this.volumeCredits += Math.floor(audience / 5);
        return this.volumeCredits;
    }
}
