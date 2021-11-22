/// <reference types="cypress" />

describe('Subscripe to weekly plan', () => {
    it('Should subscribe to weekly plan', () => {
        cy.login('jhonn11@teste.com', '123');
        cy.url().should('equal', 'http://localhost:3000/planos');
        cy.get('button').first().click();
        cy.url().should('equal', 'http://localhost:3000/assinar-plano');
        cy.contains('Plano').click();
        cy.contains('Semanal').siblings().first().click();

        cy.contains('Entrega').click();
        cy.contains('Segunda').siblings().first().click();

        cy.contains('Produtos').click();
        cy.contains('Chás').siblings().first().click();

        cy.contains('Próximo').click();

        cy.get('input[placeholder="Nome completo"]').type('123');
        cy.get('input[placeholder="Endereço de entrega"]').type('123');
        cy.get('input[placeholder=CEP]').type('123');
        cy.get('input[placeholder=Cidade]').type('123');
        cy.get('input[placeholder=Estado]').type('SP');

        cy.contains('Finalizar').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Plano registrado com sucesso');
        });
        cy.url().should('equal', 'http://localhost:3000/detalhes-plano');
        cy.contains('Plano').should('be.visible');
        cy.contains('Data da assinatura').should('be.visible');
        cy.contains('Próximas entregas: ').should('be.visible');
    });
});
