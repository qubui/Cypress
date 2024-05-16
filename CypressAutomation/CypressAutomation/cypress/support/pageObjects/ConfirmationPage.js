class ConfirmationPage
{

    getSuccessfulMessage()
    {
        return cy.get('.ant-alert-message')
    }
}
export default ConfirmationPage;
