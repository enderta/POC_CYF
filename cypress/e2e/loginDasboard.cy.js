/// <reference types="cypress" />
import 'cypress-real-events/support'

describe('Dashboard Login', () => {
    it('logs in to the dashboard', () => {

        cy.logInToDashboard();
        cy.get('.dropdown.media-display-none > .dropdown-toggle').click()
        cy.get('[href="/profile"]').click({force: true})
        cy.get('.row > :nth-child(2)').should('contain', 'endertanver@gmail.com')
        cy.get('.navbar-nav.media-display-none > [href="/cohorts"]').click()
        cy.get('.btn').click({force: true})
        cy.get('#cohort-regions')
            .type('Glasgow')
            .realType('{enter}')
        cy.get('#cohort-number')
            .type('8')
            .realType('{enter}')
        cy.get('#itd_registration_end_date')
            .type('2024-01-30')
            .realType('{enter}')
        cy.get('#itd-start-date')
            .type('2024-02-28')
            .realType('{enter}')
        cy.get('#itd-end-date')
            .type('2024-03-28')
            .realType('{enter}')
        cy.get('#sdc-start-date')
            .type('2024-04-28')
            .realType('{enter}')
        cy.get('.add-btn').click()

        cy.get('.alert').should('contain', 'cohort already exists')
        cy.reload()
        cy.logOutOfDashboard()

    });
});