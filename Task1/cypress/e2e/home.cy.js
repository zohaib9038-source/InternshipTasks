describe('Home Page', () => {
  it('should load the home page successfully', () => {
    cy.visit('http://localhost:5173/')

    cy.url().should('include', 'localhost:5173')
    cy.get('body').should('be.visible')
  })
})