describe('Iframe', ()=> {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('IFrame', 'IFrame')
    })

    it.skip('Deve preencher o nome em uma página que tem Iframe', ()=> {
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe)=> {
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find('#fullname').as('nome')
                cy.get('@nome').type('Emerson Carlos')
            })
    })
})