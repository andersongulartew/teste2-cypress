/// <Reference types="cypress" />

describe('Dev Finances Agilizei', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/");
    });

    // Cadastrar entrada
        it('Cadastrar Entradas ', () => {
            cy.get('#transaction .button') // id + class
            .click()
            .should('to.be.visible')

            cy.get('#description') // id
            .type('Mesada')
            .should('to.be.visible')

            cy.get('[name=amount]') // atributos
            .type('20')
            .should('to.be.visible')

            cy.get('[type=date]') // atributos
            .type('2021-03-17')
            .should('to.be.visible')

            cy.contains('button', 'Salvar') // tipo e valor
            .click()

    });

    // Cadastrar saídas

    // Cadastrar entradas e saídas
});