Feature: Login Screen Validation
  As a user
  I want to validate the Login screen behavior
  So that input validation and UI responses work correctly without backend

  Background:
    Given user is on the Login screen

  # -------------------------
  # Happy Path (UI-only)
  # -------------------------

  Scenario: Trigger login with valid email and password
    When user enters a valid email
    And user enters a valid password
    And user taps the Login button
    Then login action should be triggered
    And no validation error message should be displayed

  # -------------------------
  # Negative Scenarios
  # -------------------------

  Scenario: Login with invalid email format
    When user enters an invalid email
    And user enters a valid password
    And user taps the Login button
    Then email format validation error should be displayed
    And login action should not be triggered

  Scenario: Login with empty email
    When user leaves the email field empty
    And user enters a valid password
    And user taps the Login button
    Then email required validation error should be displayed

  Scenario: Login with empty password
    When user enters a valid email
    And user leaves the password field empty
    And user taps the Login button
    Then password required validation error should be displayed

  Scenario: Login with empty email and password
    When user leaves the email field empty
    And user leaves the password field empty
    And user taps the Login button
    Then required field validation errors should be displayed
    And login action should be blocked

  # -------------------------
  # Validation Rules
  # -------------------------

  Scenario: Email max length validation
    When user enters an email exceeding maximum allowed length
    And user enters a valid password
    And user taps the Login button
    Then email length validation error should be displayed

  Scenario: Password minimum length validation
    When user enters a valid email
    And user enters a password shorter than minimum length
    And user taps the Login button
    Then password length validation error should be displayed
    And login action should be blocked

  # -------------------------
  # UI Behavior
  # -------------------------

  Scenario: Display error message for invalid login input
    When user triggers a login validation error
    Then error message container should be visible
    And error message text should be readable
