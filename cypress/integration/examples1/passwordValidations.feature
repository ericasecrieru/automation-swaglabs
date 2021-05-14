Feature: Validate password feature

Scenario: Validate password functionality
    Given I am on login page
    When I fill username and password fields "standard_user" "123"
    And click on Login button
    Then A Epic sadface: Username and password do not match any user in this service message is displayed