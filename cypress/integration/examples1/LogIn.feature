Feature: Log in

Scenario: Login functionality
    Given I am on login page
    When I fill login form fields
    And click on Login button
    Then I am logged in
