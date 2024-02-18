const dotenv = require('dotenv');
dotenv.config({path: './cypress.config.js'});
require('@testing-library/cypress/add-commands');

Cypress.Commands.add('logInToDashboard', () => {
    const id = Cypress.env("ADMIN_ID");
    cy.exec(`cd ${Cypress.env('CYF_API_PATH')} && yarn generate-jwt ${id} 100d`).then((result) => {
        return result.stdout.split('\n').find(line => line.startsWith('eyJ'));
    })
})


Cypress.Commands.add('logOutOfDashboard', () => {
    cy.get('.dropdown.media-display-none > .dropdown-toggle').click()
    cy.get('#navbarText > div > div > div > span').click()
    cy.get('.mt-5').should('contain', 'Please sign in to continue')
})