describe('Application Registration Messages', () => {

    const checkMessage = (date, expectedMessage) => {
        const now= new Date(date)
        cy.clock(now, ['Date'])
        cy.loginApplicationProcess()
        cy.get('.message-bar > h4').should('contain', expectedMessage)
    }

    it('30 days message', () => {
        checkMessage('2024-02-18T15:53:37.316Z', '30');
    })
    it('20 days message', () => {
        checkMessage('2024-02-28T15:53:37.316Z', '20');
    })
    it('10 days message', () => {
        checkMessage('2024-03-09T15:53:37.316Z', '10');
    })
    it('0 days message', () => {
        checkMessage('2024-03-19T15:53:37.316Z', '0');
    })
})