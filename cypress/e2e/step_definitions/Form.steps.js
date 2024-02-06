const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");

let firstName, lastName, email, phone, city, testArea, options, confirmationMessage;

    Given("I am on the volunteer application form page", function () {
        cy.visit("http://localhost:3000/"); // replace with the URL of your volunteer application form page
    });

When("I fill in the personal details with {string}, {string}, {string}, and {string}, {string}", function (string, string2, string3, string4, string5) {
    cy.get('#firstName').type(string);
    cy.get('#lastName').type(string2);
    cy.get('#email').type(string3);
    cy.get('#phone-number-input').type(string4);
    cy.get('#cityId').select(string5);


});

Then("I fill the test area with {string}", function (string) {
    cy.get('#interestedInVolunteer').type(string);
    cy.get('#interestedInCYF').type(string);
});

Then("I select the options {string}, {string}, {string}", function (string, string2, string3) {
    cy.get('#teamId').select(string);
    cy.get('#industry').select(string2);
    cy.get('#hearAboutCYF').select(string3);
});

Then("I click on the {string} and {string} as some experience", function (string, string2) {
    cy.get(':nth-child(10) > :nth-child(2) > .form-table-single > .form-check > .form-check-label').click();
    cy.get('[for="media98y439hf934Some"]').click();
    cy.get('#media23edcs3h3j3').click();
    cy.get('#media23edcs3h3j3').click();
});

Then('I approve the agreement', () => {
    cy.get('#agreeToTOU').click();
    cy.get('#agreeToReceiveCommunication').click();
});

Then('I submit the form', () => {
    cy.get('.volunteer-submit-btn').click();
});

Then("I should see {string}", function (string) {
    cy.get('#root > div > div.main > div > p').then(($p) => {
        const text = $p.text();
        console.log(text);
        expect(text).to.include(string);
    })
});