
/// <reference types="cypress" />

describe('work with Iframes', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    })
    it('Deve preencher campo de texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?')
                .should('have.value', 'funciona?')
            /* 
                        cy.on('window:alert', msg => {
                            expect(msg).to.be.equal("Alert Simples")
                        }) */
            // cy.wrap(body).find('#otherButton').click()
        })
    })

    it('Deve preencher campo de texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal("Click OK!")
        })
    })

})