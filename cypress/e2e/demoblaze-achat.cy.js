/// <reference types="cypress" />

describe("L'achat d'un produit sur la plateforme Demoblaze", () => {
  before(() => {
    cy.visit("https://www.demoblaze.com/");
    cy.viewport("macbook-16");
  });
  it("Creation d'un utilisateur", () => {
    cy.get(".card").should("be.visible");
    cy.get("#signin2").click();
    cy.get("#sign-username").should("be.visible").type("oussamabelakhdar");
    cy.get("#sign-password").should("be.visible").type("Naruto933@");
    cy.wait(1000);
    cy.get("#signInModal").click({ force: true });
    cy.get(".card").should("be.visible");
    cy.get("#login2").click();
    cy.get("#logInModal").should("be.visible");
    cy.get("#loginusername").click().type("oussamabelakhdar");
    cy.get("#loginpassword").click().type("Naruto933@");
    cy.get("#logInModal")
      .should("be.visible")
      .find(".btn-primary")
      .click({ force: true });
    cy.wait(5000);
    cy.get('[class="card-img-top img-fluid"]').eq(0).click();
    cy.wait(1000);
    cy.get('[class="btn btn-success btn-lg"]').eq(0).click({ force: true });
    cy.get('[id = "cartur"]').click();
    cy.get('[class="btn btn-success"]').eq(0).click({ force: true });
    cy.get("#name").type("oussama");
    cy.get("#country").type("Maroc");
    cy.get("#city").type("adress");
    cy.get("#card").type(1234123412341234);
    cy.get("#month").type("11");
    cy.get("#year").type("2022");
    cy.get("#orderModal").find(".btn-primary").click();
    cy.get('[class="confirm btn btn-lg btn-primary"]')
      .eq(0)
      .click({ force: true });
  });
});
