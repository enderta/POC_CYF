

require('dotenv').config({path: './cypress.config.js'});

import '@testing-library/cypress/add-commands';


Cypress.Commands.add('logInToDashboard', (email) => {
    let token;
    const id = Cypress.env("ADMIN_ID"); // replace with your actual ID
    cy.exec(`cd ${Cypress.env('CYF_API_PATH')} && yarn generate-jwt ${id}`).then((result) => {
        const outputLines = result.stdout.split('\n');
        token = outputLines.find(line => line.startsWith('eyJ'));
        cy.log(token);
        cy.visit(Cypress.env('DASHBOARD_URL') + 'log-in/' + token, {failOnStatusCode: false});
    })
})

Cypress.Commands.add('logOutOfDashboard', () => {
    cy.get('.dropdown.media-display-none > .dropdown-toggle').click()
    cy.get('#navbarText > div > div > div > span').click()
    cy.get('.mt-5').should('contain', 'Please sign in to continue')
})

