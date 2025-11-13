import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let numero1: string;
let numero2: string;

Given("los valores {int} y {int}", (num1: number, num2: number) => {
  numero1 = num1.toString();
  numero2 = num2.toString();

  cy.visit("/"); 
  cy.get('input[name="a"]').clear().type(numero1);
  cy.get('input[name="b"]').clear().type(numero2);
});

When('aplico la operación "{word}"', (operacion: string) => {
  const mapping: Record<string, string> = {
    add: "add",
    subtract: "subtract",
    multiply: "multiply",
    divide: "divide",
    mod: "mod"
  };
  cy.get('select[name="operator"]').select(mapping[operacion] || operacion);
  cy.get('button[type="submit"]').click();
});

Then("espero {int}", (resultadoEsperado: number) => {
  cy.get(".result-display").should("contain.text", `Result: ${resultadoEsperado}`);
});
