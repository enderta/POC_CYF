#noinspection CucumberUndefinedStep
Feature:  Volunteer Application Form
  I fill out the volunteer application form with valid details and submit it
  In the first scenario, I fill out the form with valid details and submit it
  In the second scenario, I fill out the form with an email address that already exists and submit it
  In the third scenario, I fill out the form with an incomplete email address and submit it

  Background:
    Given I am on the volunteer application form page

  Scenario Outline: Filling out the form with valid details
    When I fill out the form with the following details
      | FirstName   | LastName   | Email   | Phone   | City   | TestArea   | Team   | Industry   | Hear   |
      | <FirstName> | <LastName> | <Email> | <Phone> | <City> | <TestArea> | <Team> | <Industry> | <Hear> |
    And I click on the Coaching and React as some experience
    And I approve the agreement
    And I submit the form
    Then I should see "<Message>" on "<Page>"

    Examples:
      | FirstName | LastName | Email          | Phone        | City   | TestArea       | Team      | Industry  | Hear         | Message                                            | Page    |
      | John      | Doe      | jd21@gmail.com | 123-456-7890 | London | I want to help | Education | Education | Social media | Welcome John Doe                                   | New     |
      | John      | Doe      | jd10@gmail.com | 123-456-7890 | London | I want to help | Education | Education | Social media | An account with this email address already exists  | Current |
      | John      | Doe      |                | 123-456-7890 | London | I want to help | Education | Education | Social media | Form is incomplete, please check all your details. | Current |