const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");

let firstName, lastName, email, phone, city, testArea, options, confirmationMessage;

    Given("I am on the volunteer application form page", function () {
        cy.visit("http://localhost:3002/"); // replace with the URL of your volunteer application form page
    });

When("I fill in the personal details with {string}, {string}, {string}, and {string}, {string}", function (string, string2, string3, string4, string5) {
    cy.get('#firstName').type(string);
    cy.get('#lastName').type(string2);
    cy.get('#email').type(string3);
    cy.get('#phone-number-input').type(string4);
    cy.get('#cityId').select(string5);


});

Then('I fill the test area with "{string}" and "{string}"', (tArea, opts) => {
    testArea = tArea;
    options = opts;
    // code to fill the test area
});

Then('I approve the agreement', () => {
    // code to approve the agreement
});

Then('I submit the form', () => {
    // code to submit the form
});

Then('I should see "{string}"', (cMessage) => {
    confirmationMessage = cMessage;
    // code to check the confirmation message
});