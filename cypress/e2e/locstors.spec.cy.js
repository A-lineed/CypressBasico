// <reference types="cypress" />

describe('work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    })
    beforeEach(() => {
        cy.reload()

    })

    it('Locators' , () => {
        cy.get('table#tabelaUsuarios').click()
        cy.get('[onclick*=\'Francisco\']')
        cy.get("[onclick*=\'Francisco\']")
        
    })

    it.only('using xpath', () => {
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath('//table[@id=\'tabelaUsuarios\']//td[contains(.,\'Francisco\')]/following-sibling::td/input')
        cy.xpath('//table[@id=\'tabelaUsuarios\']//td[contains(.,\'Francisco\')]/..//input[@type=\'text\']')
        cy.xpath('//table[@id=\'tabelaUsuarios\']//td[contains(.,\'Doutorado\')]/..//input[@type=\'text\']')
        cy.xpath('//table[@id=\'tabelaUsuarios\']//td[contains(.,\'Doutorado\')]/..//input[@type=\'radio\']')
        cy.xpath('//table[@id=\'tabelaUsuarios\']//td[contains(.,\'Doutorado\')]/..//input[@type=\'checkbox\']')
        cy.xpath('//*[@data-test=\'data2\']')
        cy.xpath('//td[contains(.,\'Usuario A\')]/following-sibling::td[contains(.,\'Mestrado\')]/..//input[@type=\'text\']').type('Funciona')
    })
})