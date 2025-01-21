describe('Tags', () => {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Tags', 'Tags')
    })

    it('Deve adicionar algumas tags', () => {

        const tags = ['Cypress', 'Javascript', 'Nodejs', 'Typescript']

        tags.forEach(tag => {
            cy.get('.new-tag')
                .type(`${tag}{Enter}`)
                .should('have.value', '')
            cy.wait(500) // think time
        })

        tags.forEach(tag => {
            cy.get('.tag-input')
                .should('contain', tag)
        })

    })
})