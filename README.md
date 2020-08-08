# bug-slayer

Automated Testing with Cypress.io - WIP

## Installation

To run the bug-slayer on your machine, just clone this repo, run `npm install` in the root directory, and `npm run start` to kick off the development server.

## How to Test

To fire off the smoke-tester just add auth credentials for the user you want to test with (you may also need to comment out any apps the user does not have access to until I have tests written for each permission level) and then just run `npm run cypress:open` to kick it off!


## Local Development

cd imc
rails s
npm run serve
fire up localhost
in new window cd bug-slayer (until I add to the IMC repo)
npm run cypress:open
run specs & code in tandem
close out when done