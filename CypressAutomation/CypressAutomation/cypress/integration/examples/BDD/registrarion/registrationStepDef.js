/// <reference types="Cypress" />
//import './commands';
import RegistrationFormPage from '../../../../support/pageObjects/RegistrationFormPage'
import ConfirmationPage from '../../../../support/pageObjects/ConfirmationPage'
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"
const registrationFormPage=new RegistrationFormPage()
const confirmationPage=new ConfirmationPage()
let name
Given('I open qa-engineer-work-sample Page',()=>
{
    cy.visit(Cypress.env('url')+"/recruit-qa-engineer-work-sample/")
})

// When I fulfill all fields
When('I fulfill all fields',function (dataTable)
{  
    name = dataTable.rawTable[1][0]
    registrationFormPage.getEmail().type(dataTable.rawTable[1][0])
    registrationFormPage.getLastname().type(dataTable.rawTable[1][1])
    registrationFormPage.getFirstname().type(dataTable.rawTable[1][2])
    cy.selectWhereToHear(dataTable.rawTable[1][3])
    cy.log('Select Service')
    cy.selectServices(dataTable.rawTable[1][4])
    cy.selectAssociation(dataTable.rawTable[1][5])
    registrationFormPage.getExplanation().type(dataTable.rawTable[1][6])
    
})

//And Click on Submit button
When('Click on Submit button',()=>
   {
    registrationFormPage.getSubmitButton().click({force: true})
    })

    //Then the message indicates that user submit successfully

Then('the message indicates that user submit successfully',()=>
    {
        const actualMessage = confirmationPage.getSuccessfulMessage().invoke('text').should("eq", "Your inquiry has been submitted successfully!");
    })
    
 
Then('the error messages are displayed under required fields',()=>
        {
            registrationFormPage.getEmailErrorMessage().invoke('text').should("eq", "'email' is required");
            registrationFormPage.getLastNameErrorMessage().invoke('text').should("eq", "'lastName' is required");
            registrationFormPage.getFirstNameErrorMessage().invoke('text').should("eq", "'firstName' is required");
            registrationFormPage.getInfoSourceErrorMessage().invoke('text').should("eq", "'infoSource' is required");
            registrationFormPage.getServicesOfInterestErrorMessage().invoke('text').should("eq", "'servicesOfInterest' is required");
            registrationFormPage.getTypeOfAssociationErrorMessage().invoke('text').should("eq", "'typeOfAssociation' is required");
            
        })

    
//input incorrect email format
When('input incorrect email format',()=>
    {
        registrationFormPage.getEmail().type("bob")
     })
 

Then('The message invalid email displays',()=>
    {
        registrationFormPage.getEmailErrorMessage().invoke('text').should("eq", "'email' is not a valid email");
            
    })






