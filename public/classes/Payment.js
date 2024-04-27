export class Payment {
    constructor(c, d, a) {
        this.reciepient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.reciepient} owed ${this.amount} for ${this.details}`;
    }
}
