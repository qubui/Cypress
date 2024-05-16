// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

//const { should } = require("chai")

Cypress.Commands.add("selectServices", (serviceName) => { 
    cy.contains(serviceName).click({force: true})
})


Cypress.Commands.add("selectAssociation", (associationName) => { 
    cy.contains(associationName).click({force: true})
})


Cypress.Commands.add("selectWhereToHear", (itemName) => { 
    cy.get('.ant-select-selection-item').click()
    cy.contains('.ant-select-item-option-content',itemName).click().should('have.text', itemName)
    
})



//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
