

it('should navigate to the portfolio page when clicking Portfolio link', () => {
    cy.visit('http://localhost:5173/');
    
    cy.contains('a, button', 'Portfolio').click();
    
   
    cy.url().should('include', '/portfolio'); 
    
  });

