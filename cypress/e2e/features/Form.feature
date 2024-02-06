Feature:  Volunteer Application Form

  Scenario Outline: Filling out the form with valid details
    Given  I am on the volunteer application form page
    When  I fill in the personal details with "<FirstName>", "<LastName>", "<Email>", and "<Phone>", "<City>"
    Then I fill the test area with "<TestArea>"
    Then I select the options "<Team>", "<Industry>", "<Hear>"
    Then I click on the "<Guide>" and "<Teach people coding>" as some experience
    And I approve the agreement
    And I submit the form
    Then I should see "<ConfirmationMessage>"

    Examples:
      | FirstName | LastName | Email        | Phone        | City   | TestArea       | Team      | Industry | Hear         | Guide                | Teach people coding | ConfirmationMessage    |
      | John      | Doe      | jd@gmail.com | 123-456-7890 | London | I want to help | Education | Education | Social media | Coaching / Mentoring | React               | Thank you for applying |