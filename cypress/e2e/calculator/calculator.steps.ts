import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario visita la calculadora", () => {
  cy.visit("/"); 
});

Then('debe ver el título {string}', (titulo) => {
  cy.get("h1").should("contain.text", titulo);
});
