describe('Drag and Drop', ()=> {

    beforeEach(() => {
        cy.acessaEndereco()
        cy.fazLogin()
        cy.menuNavegacao('Task Board', 'Task Board')
    })

    it('Deve finalizar uma tarefa', ()=> {
        const tarefa = 'Definir requisitos do projeto'

        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable="true"]', tarefa)
            .trigger('dragstart', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable="true"]', tarefa)
            .should('be.visible')
    })
})