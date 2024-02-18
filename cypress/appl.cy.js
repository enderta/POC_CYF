describe('getApplicantRegistrationWelcomeEmailTemplate', () => {
    let token;
    before(() => {
        const id = Cypress.env("ADMIN_ID");

        const now= new Date('2024-02-25T15:53:37.316Z')
        cy.clock(now, ['Date'])
        console.log(now)

       cy.logInToDashboard().then((result) => {
            token = result;

       })
    })
    it('should return a string', () => {
        cy.visit('http://localhost:3002/log-in/'+token)
        cy.get('.message-bar > h4').should('contain', '27')
    })
})