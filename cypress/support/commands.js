Cypress.Commands.add('acessaEndereco', ()=> {
    cy.visit('/')

    cy.contains('h2', 'Faça login').should('be.visible')
})

Cypress.Commands.add('fazLogin', ()=>{
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.usuarioLogado()
})

Cypress.Commands.add('login', (email, senha) => {
    if(email){
        cy.get('[data-cy="email"]').should('be.visible').type(email)
    }

    if(senha){
        cy.get('[data-cy="password"]').should('be.visible').type(senha, { log: false })
    }
    cy.get('[data-cy="login-button"]').should('be.visible').click()
})

Cypress.Commands.add('erroLogin', (mensagem) => {
    cy.contains('h4', 'Oops!').should('be.visible')
    cy.contains('p', mensagem).should('be.visible')
})

Cypress.Commands.add('usuarioLogado', ()=> {
    cy.title().should('be.eq', 'Playground | Home')
    cy.contains('h2', 'Boas vindas ao Cypress Playground').scrollIntoView().should('be.visible')
})

Cypress.Commands.add('menuNavegacao', (opcao, titulo)=> {
    cy.contains('a', opcao).click()
    cy.contains('h2', titulo).should('be.visible')
})