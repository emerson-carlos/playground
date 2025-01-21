describe('Date Picker', () => {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Date Picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][type="text"]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Setembro')

        cy.get('input[aria-label="Year"]')
            .type('1996')

        cy.get('span[aria-label="Setembro 23, 1996"]')
            .click()
    })
})