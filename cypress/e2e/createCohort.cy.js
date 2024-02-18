/// <reference types="cypress" />

describe('Create cohort', () => {
    before(() => {
        cy.loginDashboard()
    })
    after(() => {
        cy.logOutOfDashboard()
    })
    it('exist cohort', () => {
        cy.createCohort('Glasgow', '8', '2024-01-30', '2024-02-28', '2024-03-28', '2024-04-28', 'cohort already exists');
    });
});