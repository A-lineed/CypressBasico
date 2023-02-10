/// <reference types="cypress" />

describe('work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    })

    it('Voltando ao passado', () => {
        // cy.get('#buttonNow').click()
        //   cy.get('#resultado > span').should('contain', '10/02/2023')

        //cy.clock()
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '10/02/2023')

        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())

        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })
})