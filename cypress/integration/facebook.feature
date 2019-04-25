Feature: The Facebook
  I want to test post creation like and delete functionality
# make sure user do not create same post consecutively  as FB does not allow it
  @focus
  Scenario: Create Post
    Given User "Tyagi Kumar Kuldeep" is logged in successfully
    When User Navigates to Profile
    Then User sees "tyagitester" in the url
    And Want to create post with "hi1"
  @focus
  Scenario: Like Post
    Given User "Tyagi Kumar Kuldeep" is logged in successfully
    When User Navigates to Profile
    Then User sees "tyagitester" in the url
    And Want to like all posts with "hi1"
  @focus
  Scenario: Delete Post
    Given User "Tyagi Kumar Kuldeep" is logged in successfully
    When User Navigates to Profile
    Then User sees "tyagitester" in the url
    And Want to delete all posts with "hi1"
