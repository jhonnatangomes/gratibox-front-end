/// <reference types="cypress" />
// signup.test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Sign-up', () => {
    it('Should sign-up successfully', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Quero começar').click();
        cy.url().should('equal', 'http://localhost:3000/cadastro');
        cy.get('input[placeholder=Nome]').type('Gomium');
        cy.get('input[placeholder=Email]').type('jhonn11@teste.com');
        cy.get('input[placeholder=Senha]').type('123');
        cy.get('input[placeholder="Confirmar senha"]').type('123');
        cy.contains('Cadastrar').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Usuário cadastrado com sucesso');
        });
        cy.url().should('equal', 'http://localhost:3000/login');
    });
});
