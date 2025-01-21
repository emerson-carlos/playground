describe('Textarea', ()=> {

    beforeEach(()=> {
        cy.acessaEndereco()
    })

    it.only('Deve preencher o campo de area de texto', ()=> {
        cy.fazLogin()

        cy.menuNavegacao('Textarea', 'Textarea')
        
        cy.get('textarea[name="message"]')
            .type('Boas vindas ao Cypress Skills. Um curso de formação completo para você aprender sobre automação de Cypress.')

    })
})