import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Michael", "build a website", 230);
const invTwo = new Invoice("John", "build a website", 330);
const Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
console.log(invOne);
const anchor = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
anchor.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
