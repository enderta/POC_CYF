Feature:  Volunteer Application Form

  Scenario Outline: Filling out the form with valid details
    Given  I am on the volunteer application form page
    When  I fill in the personal details with "<FirstName>", "<LastName>", "<Email>", and "<Phone>", "<City>"
    Then I fill the test area with "<TestArea>"
    Then I select the options "<Team>", "<Industry>", "<Hear>"
    Then I click on the Coaching and React as some experience
    And I approve the agreement
    And I submit the form
    Then I should see Welcome "<FirstName>" "<LastName>" message

    Examples:
      | FirstName | LastName | Email          | Phone        | City   | TestArea       | Team      | Industry  | Hear         |
      | John      | Doe      | jd6@gmail.com | 123-456-7890 | London | I want to help | Education | Education | Social media |

  Scenario Outline: Filling out the form with same email
    Given  I am on the volunteer application form page
    When  I fill in the personal details with "<FirstName>", "<LastName>", "<Email>", and "<Phone>", "<City>"
    Then I fill the test area with "<TestArea>"
    Then I select the options "<Team>", "<Industry>", "<Hear>"
    Then I click on the Coaching and React as some experience
    And I approve the agreement
    And I submit the form
    Then I should see the error message "An account with this email address already exists"

    Examples:
      | FirstName | LastName | Email          | Phone        | City   | TestArea       | Team      | Industry  | Hear         |
      | John      | Doe      | jd6@gmail.com | 123-456-7890 | London | I want to help | Education | Education | Social media |

  Scenario Outline: Leaving the email field empty
    Given  I am on the volunteer application form page
    When  I fill in the personal details with "<FirstName>", "<LastName>", and "<Phone>", "<City>"
    Then I fill the test area with "<TestArea>"
    Then I select the options "<Team>", "<Industry>", "<Hear>"
    Then I click on the Coaching and React as some experience
    And I approve the agreement
    And I submit the form
    Then I should see the error message "Form is incomplete, please check all your details."

    Examples:
      | FirstName | LastName | Phone        | City   | TestArea       | Team      | Industry  | Hear         |
      | John      | Doe      |   123-456-7890 | London | I want to help | Education | Education | Social media |