Feature: The Facebook

  I want to test post creatio,n like and delete functionality

  @focus
  Scenario: Create Post
    Given User "Tyagi Kumar Kuldeep" is logged in successfully
    When User Navigates to Profile
    Then User sees "tyagitester" in the url
    And Want to create post with "hi12345"
  @focus
  Scenario: Like Post
    Given User "Tyagi Kumar Kuldeep" is logged in successfully
    When User Navigates to Profile
    Then User sees "tyagitester" in the url
    And Want to like all posts with "hi12345"
  @focus
  Scenario: Delete Post
    Given User "Tyagi Kumar Kuldeep" is logged in successfully
    When User Navigates to Profile
    Then User sees "tyagitester" in the url
    And Want to delete all posts with "hi12345"
