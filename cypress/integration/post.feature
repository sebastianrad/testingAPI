Feature: Testing POST API

    Background: add a new user 
        Given page is loaded
        When I add a new user
            | name | job    |
            | Sebi | tester |

    Scenario: check the status code
        Then the response cod is 201

    Scenario: check the nama and the job for the user added
    Then the name is Sebi and the job is tester

    Scenario: check if the user contain all the keys
    Then the object contain all keys
    |keys|
    |name|
    |job|
    |createdAt|

    Scenario: check the keys to not be empty
    Then the object keys are not empty

