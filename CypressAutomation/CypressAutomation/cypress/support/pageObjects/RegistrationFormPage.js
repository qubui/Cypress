class RegistrationFormPage
{

getEmail()
{
    return cy.get('#form_item_email')
}

getLastname()
{
    return cy.get('#form_item_lastName')

}
getFirstname()
{
    return cy.get('#form_item_firstName')

}

getSelectionWhereToHear()
{
    return cy.get('.ant-select-selection-item')

}


getExplanation()
{
    return cy.get('#form_item_explanation')

}

getSubmitButton()
{
    return cy.get("span:contains('Submit')")

}

getEmailErrorMessage()
{
    return cy.get("#field_email>div>div>div>div.ant-form-item-explain-error")

}

getLastNameErrorMessage()
{
    return cy.get("#field_lastName>div>div>div>div.ant-form-item-explain-error")

}

getFirstNameErrorMessage()
{
    return cy.get("#field_firstName>div>div>div>div.ant-form-item-explain-error")
}

getInfoSourceErrorMessage()
{
    return cy.get("#field_infoSource>div>div>div>div.ant-form-item-explain-error")
}



getServicesOfInterestErrorMessage()
{
    return cy.get("#field_servicesOfInterest>div>div>div>div.ant-form-item-explain-error")
}



getTypeOfAssociationErrorMessage()
{
    return cy.get("#field_typeOfAssociation>div>div>div>div.ant-form-item-explain-error")
}

}

export default RegistrationFormPage;
