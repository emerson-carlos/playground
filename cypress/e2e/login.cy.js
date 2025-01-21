describe('Login', () => {

  beforeEach(() => {
    cy.acessaEndereco()
  })

  it('deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.usuarioLogado()
  })

  it('não deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'showtimes')
    cy.erroLogin('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('não deve logar com email não cadastrado', () => {
    cy.login('papi@cyskills.com.br', 'showtime')
    cy.erroLogin('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('não deve logar com email incorreto', () => {
    cy.login('www.cyskills.com.br', 'showtime')
    cy.erroLogin('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar sem o email', () => {
    cy.login('', 'showtime')
    cy.erroLogin('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem a senha', () => {
    cy.login('papito@cyskills.com.br', '')
    cy.erroLogin('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem o email e sem a senha', () => {
    cy.login('', '')
    cy.erroLogin('Parece que você esqueceu de informar seu e-mail.')
  })
})