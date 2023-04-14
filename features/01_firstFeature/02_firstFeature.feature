@development
Feature: Google translate

    Test the functionality: Google translate

    Background: Open Google translate
        Given I visit the url 'https://google.com/'
        And I click on the option 'English'
        When I enter 'translate' into the field 'searchBar'
        And I click on the page
        And I click on the button 'googleSearch'
        Then The page should contain 'Translation'

    Scenario Outline: Check translate functionality in different languages
        Given I click on the field 'firstLanguageDropdown'
        And In the field 'originalLanguage' I search for <firstLanguage>
        Then I click on the field 'secondLanguageDropdown'
        And In the field 'translatedLanguage' I search for <secondLanguage>
        When I enter <request> into the field 'requestedWord'
        Then I should see <translation> in the widget 'translationBox'

        Examples:
            | firstLanguage | secondLanguage | request | translation |
           | 'Dutch'       | 'English'      | 'kat'   | 'cat'       |
#     | 'English'     | 'Italian'      | 'cat'   | 'gatto'     |
#    | 'Italian'     | 'Dutch'        | 'gatto' | 'kat'       |