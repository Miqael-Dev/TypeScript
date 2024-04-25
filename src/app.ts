import { Invoice } from "./classes/Invoice.js"

const invOne = new Invoice("Michael", "build a website", 230)
const invTwo = new Invoice("John", "build a website", 330)
const Invoices: Invoice[] = []

Invoices.push(invOne)
Invoices.push(invTwo)
console.log(invOne)


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
