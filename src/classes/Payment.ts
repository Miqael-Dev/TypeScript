import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    reciepient: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.reciepient = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.reciepient} owed ${this.amount} for ${this.details}`
    }
}