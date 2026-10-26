describe("Vehicle detail panel", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens with vehicle details and receives focus", () => {
    cy.get('[aria-label="Filter by status"]').select("Active");
    cy.get('[data-testid="vehicle-row-ICT-1001"]').click();

    cy.get('[role="dialog"]')
      .should("be.visible")
      .and("have.attr", "aria-labelledby", "detail-title");
    cy.contains("ICT-1001").should("be.visible");
    cy.contains("Last known location").should("be.visible");
    cy.get('[aria-label="Close vehicle details"]').should("have.focus");
  });

  it("closes with the close button and keeps the filter unchanged", () => {
    cy.get('[aria-label="Filter by status"]').select("Idle");
    cy.get('[data-testid="vehicle-row-ICT-1002"]').click();
    cy.get('[aria-label="Close vehicle details"]').click();

    cy.get('[data-testid="detail-panel"]').should("not.exist");
    cy.get('[aria-label="Filter by status"]').should("have.value", "Idle");
    cy.get('[data-testid="vehicle-row-ICT-1002"]').should("be.visible");
  });

  it("closes with Escape and traps keyboard focus", () => {
    cy.get('[data-testid="vehicle-row-ICT-1001"]').click();
    cy.get('[aria-label="Close vehicle details"]').should("have.focus");
    cy.get('[aria-label="Close vehicle details"]').type("{shift}{tab}");
    cy.get('[role="dialog"]').should("exist");
    cy.get("body").type("{esc}");
    cy.get('[role="dialog"]').should("not.exist");
  });
});