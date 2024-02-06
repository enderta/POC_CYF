Feature:  Volunteer Application Form

  Scenario Outline: Filling out the form with valid details
    Given  I am on the volunteer application form page
    When  I fill in the personal details with "<FirstName>", "<LastName>", "<Email>", and "<Phone>", "<City>"
    Then I fill the test area with "<TestArea>" and "<Options>"
    And I approve the agreement
    And I submit the form
    Then I should see "<ConfirmationMessage>"

    Examples:
      | FirstName | LastName | Email       | Phone       | City  | TestArea           | Options                                                                 | ConfirmationMessage           |
      | John      | Doe      | jd@gmail.com| 123-456-7890| London| I want to help     | Team, industry, Hear, Guide, Teach, Help, Education, Social Media, Coaching, JavaScript, Project Management | Thank you for applying |