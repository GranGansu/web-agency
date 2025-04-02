/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

     it("cy.go() - go back or forward in the browser's history", () => {
    cy.visit('http://localhost:3000/Demo');
    cy.location('pathname').should('include', 'Demo');
    cy.go('back');
    cy.location('pathname').should('include', '/');
  }); 
  it('URL Modal Open', () => {
    cy.get('#clickableURL').click();
    cy.get('#inputURL').type('webdeprueba').type('{enter}')
  });
});
