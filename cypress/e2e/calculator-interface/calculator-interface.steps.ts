import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("la página de la calculadora está abierta", () => {
  cy.visit("/");
});

Then("el título de la calculadora debe ser {string}", (titulo: string) => {
  cy.get("h1").should("contain.text", titulo);
});

Then('el campo "First number" debe estar visible', () => {
  cy.get('input[name="a"]').should("be.visible");
});

Then('el campo "Second number" debe estar visible', () => {
  cy.get('input[name="b"]').should("be.visible");
});

Then('el selector de "Operator" debe estar visible', () => {
  cy.get('select[name="operator"]').should("be.visible");
});

When("ingreso valores válidos en ambos campos", () => {
  cy.get('input[name="a"]').clear().type("1");
  cy.get('input[name="b"]').clear().type("1");
});

When("dejo un campo vacío", () => {
  cy.get('input[name="a"]').clear();
});

Then('el botón "Calculate" debe estar habilitado', () => {
  cy.get('button[type="submit"]').should("not.be.disabled");
});

Then('el botón "Calculate" debe estar deshabilitado', () => {
  cy.get('button[type="submit"]').should("be.disabled");
});
