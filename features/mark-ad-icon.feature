
Feature: Icon in right panel of Youtube player
  As an internet user
  In order to access ad cut menu
  I should be able to see ᏆAD icon

  # Scenario: Simply load webpage
  #   Given I am watch "mKzLoZFz8PE" video
  #   Then I should see ".adr-mark-ad-button" element

  Scenario: Trying to open
    Given I am watch "mKzLoZFz8PE" video
    When I click ".adr-mark-ad-button" element
    Then I should see ".adr-ad-sel-menu" element
