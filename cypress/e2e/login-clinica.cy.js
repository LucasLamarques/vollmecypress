describe('Página de Login', () => {

    it('Deve efetuar login com email e senha corretos', () => {
        cy.login(
            Cypress.env('email'),
            Cypress.env('senha')
        )
        cy.visit('/dashboard')
        cy.url().should('include', '/dashboard')
    })

})