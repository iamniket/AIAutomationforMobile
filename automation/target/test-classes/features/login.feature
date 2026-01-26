Feature: Login Functionality
  As a user
  I want to be able to login
  So that I can access the application

  Scenario: Valid email and password
    Given user opens login screen
    When user enters valid email
    And user enters valid password
    And user taps login button
    Then user should be logged in

  Scenario: Invalid email format
    Given user opens login screen
    When user enters invalid email
    Then error message should be displayed
    And login button should be disabled

  Scenario: Empty email field
    Given user opens login screen
    When user leaves email empty
    Then error message should be displayed

  Scenario: Password less than 6 characters
    Given user opens login screen
    When user enters short password
    Then error message should be displayed
    And login button should be disabled

  Scenario: Empty password field
    Given user opens login screen
    When user enters valid email
    And user leaves password empty
    Then login button should be disabled
