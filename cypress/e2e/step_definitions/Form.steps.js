const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the volunteer application form page", function () {
    cy.visit("https://forms.qa.codeyourfuture.io/");
});

When("I fill out the form with the following details", function (dataTable) {
    const data = dataTable.hashes();
    data.forEach(row => {
        cy.get('#firstName').type(row.FirstName);
        cy.get('#lastName').type(row.LastName);
        if (row.Email) {
            cy.get('#email').type(row.Email);
        }
        cy.get('#phone-number-input').type(row.Phone);
        cy.get('#cityId').select(row.City);
        cy.get('#interestedInVolunteer').type(row.TestArea);
        cy.get('#interestedInCYF').type(row.TestArea);
        cy.get('#teamId').select(row.Team);
        cy.get('#industry').select(row.Industry);
        cy.get('#hearAboutCYF').select(row.Hear);
    });
});

Then("I click on the Coaching and React as some experience", function () {
    cy.get(':nth-child(10) > :nth-child(2) > .form-table-single > .form-check > .form-check-label').click();
    cy.get('[for="media98y439hf934Some"]').click();
    cy.get('#media23edcs3h3j3').click();
    cy.get('#media23edcs3h3j3').click();
});

Then('I approve the agreement', function () {
    cy.get('#agreeToTOU').click();
    cy.get('#agreeToReceiveCommunication').click();
});

Then('I submit the form', function () {
    cy.get('.volunteer-submit-btn').click();
});

Then("I should see {string} on {string}", function (expectedMessage, page) {
    if (page === 'New') {
        cy.get('h4').then(($body) => {
            expect($body.text()).to.include(expectedMessage);
        });
    } else {
        cy.get('.errors').should('contain', expectedMessage);
    }
});