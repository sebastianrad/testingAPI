Feature: Testing GET API

    Background:
        Given page is loaded

    Scenario: check the status
        Then the status is 200

    Scenario: check the keys from body
        Then the keys from body are
            | keys        |
            | page        |
            | per_page    |
            | total       |
            | total_pages |
            | data        |
            | support     |


    Scenario: check the emails to not be empty
        Then email file is not empty

    Scenario: check the list of the emails
        Then list of emails
            | keys                       |
            | michael.lawson@reqres.in   |
            | lindsay.ferguson@reqres.in |
            | tobias.funke@reqres.in     |
            | byron.fields@reqres.in     |
            | george.edwards@reqres.in   |
            | rachel.howell@reqres.in    |

    Scenario: check if per_page value is eqal with the data (daca sunt atatea date)
        Then per page is eqal with the lenght of data

    Scenario: check the first id is 7
        Then first id should be 7

    Scenario: check to se if we have duplicate id
        Then check to see if we have duplicates

    Scenario: check to see if we have duplicate persons
        Then check to see if we have a duplicate person

    Scenario: check the keys for body.data
        Then the keys are avaible
            | keys       |
            | avatar     |
            | email      |
            | first_name |
            | id         |
            | last_name  |
