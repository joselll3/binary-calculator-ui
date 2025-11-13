import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let numero1: string;
let numero2: string;

Given("ingreso {int} y {int}", (num1: number, num2: number) => {
  numero1 = num1.toString();
  numero2 = num2.toString();

  cy.visit("/"); // Ajusta si tu calculadora está en otra ruta
  cy.get('input[name="a"]').clear().type(numero1);
  cy.get('input[name="b"]').clear().type(numero2);
});

When("multiplico", () => {
  cy.get('select[name="operator"]').select("multiply");
  cy.get('button[type="submit"]').click();
});

When("sumo", () => {
  cy.get('select[name="operator"]').select("add");
  cy.get('button[type="submit"]').click();
});

When("intento dividir", () => {
  cy.get('select[name="operator"]').select("divide");
  cy.get('button[type="submit"]').click();
});

Then("el total es {int}", (resultadoEsperado: number) => {
  cy.get(".result-display").should("contain.text", `Result: ${resultadoEsperado}`);
});

Then("obtengo un error de división por cero", () => {
cy.get('[data-cy="error-message"]').should('be.visible').and('contain.text', 'Calculation error. Division by zero');

});
