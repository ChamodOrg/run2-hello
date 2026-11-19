Feature: F1 Greeting

  @story-F1.1
  Rule: The page's main heading is the fixed greeting "Hello, World!"

    Scenario: Opening the app
      Given Vera the visitor has the app's address
      When Vera opens the app
      Then the page's main heading reads "Hello, World!"

  @story-F1.2
  Rule: The greeting is public; no sign-in is needed to see it

    Scenario: Visitor sees the greeting without an account
      Given Vera the visitor has never signed in
      When Vera opens the app
      Then the page's main heading reads "Hello, World!"
      And Vera is not asked to sign in
