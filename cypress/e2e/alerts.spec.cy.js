/// <reference types="cypress" />

describe('work with alerts', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    })
    beforeEach(() => {
        cy.reload()

    })

    it("Alerts", () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

})