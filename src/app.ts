import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

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

const invOne = new Invoice("Michael", "build a website", 230)
const invTwo = new Invoice("John", "build a website", 330)
 
let docOne: HasFormatter; 
let docTwo: HasFormatter;

docOne = new Invoice("Michael", "build a website", 230)
docTwo = new Payment("John", "building ahouse", 44000)

let docs: HasFormatter[] = [];

docs.push(docOne)
docs.push(docTwo)
console.log(docs)


const anchor = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)

anchor.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter;
    if(type.value == "invoice"){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    
    list.render(doc, type.value, "end")
    
})
