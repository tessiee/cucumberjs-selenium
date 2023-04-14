@regression
Feature: Google search

  Description: Testcases that test the Google search function

  Background: Navigating to Google
    Given I visit the url 'https://google.com/'
    And I click on the option 'English'

  Scenario: Verifying the functioning of Google search
    Given I enter 'cat' into the field 'searchBar'
    And I click on the page
    When I click on the button 'googleSearch'
    Then The page should contain 'Animal'

  Scenario Outline: Verify the functioning of Google search
    Given I enter <searchTerm> into the field 'searchBar'
    And I click on the page
    When I click on the button <button>
    Then The page should contain <text>

    Examples:
      | searchTerm | button         | text        |
      | 'cat'      | 'googleSearch' | 'Animal'    |
      | 'dog'      | 'feelingLucky' | 'Wikipedia' |