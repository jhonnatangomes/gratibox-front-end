/// <reference types="cypress" />

describe('Login', () => {
    it('Should login successfully', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[placeholder=Email]').type('jhonn11@teste.com');
        cy.get('input[placeholder=Senha]').type('123');
        cy.contains('Login').click();
        cy.url().should('equal', 'http://localhost:3000/planos');
    });
});
