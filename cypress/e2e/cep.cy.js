describe('CEP', ()=> {
    
    beforeEach(()=>{
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('CEP', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos correios', ()=>{

        const endereco = {
            cep: '06194225',
            logradouro: 'Rua Flor do Campo',
            localidade: 'Osasco',
            uf: 'SP'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${endereco.cep}/json/`, {
            statusCode: 200,
            body: endereco
        }).as('getCEP')

        cy.get('#cep').type(endereco.cep)
        cy.get('button[type="submit"]').click()

        cy.wait('@getCEP')

        cy.get('#logradouro', {timeout: 7000}).should('have.value', endereco.logradouro).and('be.visible')
        cy.get('#cidade').should('have.value', endereco.localidade).and('be.visible')
        cy.get('#estado').should('have.value', endereco.uf).and('be.visible')

    })
})