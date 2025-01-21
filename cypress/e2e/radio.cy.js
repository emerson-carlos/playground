describe('Radio Buttons', ()=> {
    
    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Radio', 'Radio Buttons')
    })

    it('Deve marcar o framework usado no curso Cypress Skills', ()=> {
        cy.get('#cypress').as('cypress').check( {force: true} )
        cy.get('@cypress').should('be.checked')
    })
})