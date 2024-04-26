import { Invoice } from "./classes/Invoice.js"


interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number
}

const me: IsPerson = {
    name: 'Michael',
    age: 22,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log("I spent", amount);
        return amount;
    }
}

me.spend(50)

const invOne = new Invoice("Michael", "build a website", 230)
const invTwo = new Invoice("John", "build a website", 330)
const Invoices: Invoice[] = []

Invoices.push(invOne)
Invoices.push(invTwo)
// console.log(invOne)


const anchor = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

anchor.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})
