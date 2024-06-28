const qaAPIURL = Cypress.env('QA_API_URL');
const qaToken = Cypress.env('QA_TOKEN');

describe('QA API Smoke Test', () => {
    it('/cities endpoint', () => {
        cy.request({
            method: 'GET',
            url: `${qaAPIURL}/cities`,
            headers: {Authorization: `Bearer ${qaToken}`},
        }).then((response) => {
            cy.log(response.body)
            cy.log(qaToken)
            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('cities');
        });
    });
    it("/cities endpoint without token", () => {
        cy.request({
            method: 'GET',
            url: `${qaAPIURL}/cities`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});