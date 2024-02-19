/// <reference types="cypress" />

describe('Create cohort', () => {
    before(cy.loginDashboard);
    after(cy.logOutOfDashboard);

    const cohortDetails = {
        region: 'Glasgow',
        number: '9',//this number is unique for a new cohort
        registrationEndDate: '2024-01-30',
        itdStartDate: '2024-02-28',
        itdEndDate: '2024-03-28',
        sdcStartDate: '2024-04-28',
        alertMessage: 'cohort already exists'// This message is displayed when the cohort already exists for new cohort "Cohort added successfully" is displayed

    };

    it('create cohort', () => {
        cy.createCohort(
            cohortDetails.region,
            cohortDetails.number,
            cohortDetails.registrationEndDate,
            cohortDetails.itdStartDate,
            cohortDetails.itdEndDate,
            cohortDetails.sdcStartDate,
            cohortDetails.alertMessage
        );
    });
});