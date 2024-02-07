const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the volunteer application form page", function () {
    cy.visit("https://forms.qa.codeyourfuture.io/");
});

When("I fill in the personal details with {string}, {string}, {string}, and {string}, {string}", function (FirstName, LastName, Email, Phone, City) {
    //cy.get('#firstName').type(FirstName);
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

Then("I click on the Coaching and React as some experience", function () {
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

Then(`I should see Welcome {string} {string} message`, function (firstName, lastName) {
   /* cy.get('h4').then(($body) => {
        expect($body.text()).to.include(`Welcome ${firstName} ${lastName}`);
    })*/
   /* cy.get('.errors').then(($body) => {
        expect($body.text()).to.include('An account with this email address already exists');
    })*/
    cy.get('.errors').then(($body) => {
        expect($body.text()).to.include('Form is incomplete, please check all your details.');
    })
    //cy.contains(`Welcome ${firstName} ${lastName}`);
});

