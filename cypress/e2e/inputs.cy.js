describe('Input Fields', () => {

    beforeEach(() => {
        cy.acessaEndereco()
    })

    it('deve preencher o campo texto', () => {
        cy.fazLogin()

        cy.menuNavegacao('Input Fields', 'Input Fields')

        cy.get('#fullname').type('Emerson Carlos')
        cy.get('#email').type('teste@teste.com')
        cy.get('#number').type('2025')
        cy.get('#date').type('2025-01-18')
    })
})