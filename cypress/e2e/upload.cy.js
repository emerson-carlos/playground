describe('Upload', () => {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Upload', 'Upload')
    })

    it('Deve anexar um doc', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(elemento => {
                expect(elemento[0].files[0].name).to.equal('doc.pdf')
            })
    })

    it('Deve anexar uma imagem', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/shepard.png')
            .then(elemento => {
                expect(elemento[0].files[0].name).to.equal('shepard.png')
            })

        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .and('include', 'blob')
    })
})