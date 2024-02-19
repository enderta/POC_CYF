const dotenv = require('dotenv');
dotenv.config({path: './cypress.config.js'});
require('@testing-library/cypress/add-commands');
import 'cypress-real-events/support'

Cypress.Commands.add('generateToken', () => {
    const id = Cypress.env("ADMIN_ID");
    cy.exec(`cd ${Cypress.env('CYF_API_PATH')} && yarn generate-jwt ${id} 100d`).then((result) => {
        return result.stdout.split('\n').find(line => line.startsWith('eyJ'));
    })
})

Cypress.Commands.add('loginDashboard', () => {
    cy.generateToken().then((result) => {
        cy.visit(`${Cypress.env('DASHBOARD_URL')}/log-in/${result}`)
    })
    const email = Cypress.env("ADMIN_EMAIL");
    cy.get('.dropdown.media-display-none > .dropdown-toggle').click()
    cy.get('[href="/profile"]').click({force: true})
    cy.get('.row > :nth-child(2)').should('contain', email)
})

Cypress.Commands.add('logOutOfDashboard', () => {
    cy.reload()
    cy.get('.dropdown.media-display-none > .dropdown-toggle').click()
    cy.get('#navbarText > div > div > div > span').click()
    cy.get('.mt-5').should('contain', 'Please sign in to continue')
})

Cypress.Commands.add('loginApplicationProcess', () => {
    cy.generateToken().then((token) => {
        cy.visit(`${Cypress.env('APPLICATION_URL')}/log-in/${token}`)
    })
})

Cypress.Commands.add('createCohort', (region, number, registrationEndDate, itdStartDate, itdEndDate, sdcStartDate, alertMessage) => {
    cy.get('.navbar-nav.media-display-none > [href="/cohorts"]').click()
    cy.get('.btn').click({force: true})
    cy.get('#cohort-regions')
        .type(region)
        .realType('{enter}')
    cy.get('#cohort-number')
        .type(number)
        .realType('{enter}')
    cy.get('#itd_registration_end_date')
        .type(registrationEndDate)
        .realType('{enter}')
    cy.get('#itd-start-date')
        .type(itdStartDate)
        .realType('{enter}')
    cy.get('#itd-end-date')
        .type(itdEndDate)
        .realType('{enter}')
    cy.get('#sdc-start-date')
        .type(sdcStartDate)
        .realType('{enter}')
    cy.get('.add-btn').click()
    cy.get('.alert').should('contain', alertMessage)
})