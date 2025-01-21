describe('Checkbox', () => {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Checkbox', 'Checkbox')
    })

    it('Deve marcar as linguagens que usam Node.js', () => {
        cy.get('#javascript').as('javascript').check({ force: true })
        cy.get('@javascript').should('be.checked')

        cy.get('#typescript').as('typrescript').check({ force: true })
        cy.get('@typrescript').should('be.checked')
    })

    it.only('Deve marcar todas as opções', () => {

        const linguagens = ['javascript', 'python', 'rust', 'go', 'typescript']

        linguagens.forEach(linguagem => {
            cy.get(`#${linguagem}`).as(linguagem).check({ force: true })
            cy.get(`@${linguagem}`).should('be.checked')
        })
    })
})