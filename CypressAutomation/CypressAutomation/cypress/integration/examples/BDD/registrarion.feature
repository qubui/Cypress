Feature: End to end submit form validation

    application Regression
    @Regression
    Scenario: Submit form successfully
    Given I open qa-engineer-work-sample Page
    When I fulfill all fields
    |email            | lastName | firstName | whereToHear  |service  | association | explanation |
    |Test01@gmail.com | Alex     | Tan       | Social media |Logistics| Prospect    | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit |
    And Click on Submit button
    Then the message indicates that user submit successfully


    @Regression
    Scenario: Submit form without blank require fields
    Given I open qa-engineer-work-sample Page
    When Click on Submit button
    Then the error messages are displayed under required fields
    When input incorrect email format
    Then The message invalid email displays




