const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");

let firstName, lastName, email, phone, city, testArea, options, confirmationMessage;

Given("I am on the volunteer application form page", function () {
    cy.visit("http://localhost:3000/");
});

When("I fill in the personal details with {string}, {string}, {string}, and {string}, {string}", function (FirstName, LastName, Email, Phone, City) {
    cy.get('#firstName').type(FirstName);
    cy.get('#lastName').type(LastName);
    cy.get('#email').type(Email);
    cy.get('#phone-number-input').type(Phone);
    cy.get('#cityId').select(City);
});

Then("I fill the test area with {string}", function (TestArea) {
    cy.get('#interestedInVolunteer').type(TestArea);
    cy.get('#interestedInCYF').type(TestArea);
});

Then("I select the options {string}, {string}, {string}", function (Team, Industry, Hear) {
    cy.get('#teamId').select(Team);
    cy.get('#industry').select(Industry);
    cy.get('#hearAboutCYF').select(Hear);
});

Then("I click on the {string} and {string} as some experience", function (Guide, TeachPeopleCoding) {
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

Then("I should see {string}", function (ConfirmationMessage) {
    cy.get('#root > div > div.main > div > p').then(($p) => {
        const text = $p.text();
        console.log(text);
        expect(text).to.include(ConfirmationMessage);
    })
});