describe('Select', ()=> {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Select', 'Select')
    })

    it('Deve selecionar o Cypress', ()=> {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve escoler as linguagens que usam Node.js', ()=> {

        const linguagens = ['JavaScript', 'TypeScript']

        cy.get('input[placeholder^="Linguagens de programação"]').click()

        linguagens.forEach(linguagem => {
            cy.contains('div', new RegExp("^" + linguagem + "$")).click()
        })

        cy.get('.language-item').should('have.length', linguagens.length)
    })

})