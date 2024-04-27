import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void,
//     spend(a: number): number
// }
// const me: IsPerson = {
//     name: 'Michael',
//     age: 22,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log("I spent", amount);
//         return amount;
//     }
// }
// me.spend(50)
const invOne = new Invoice("Michael", "build a website", 230);
const invTwo = new Invoice("John", "build a website", 330);
let docOne;
let docTwo;
docOne = new Invoice("Michael", "build a website", 230);
docTwo = new Payment("John", "building ahouse", 44000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const anchor = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
anchor.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
