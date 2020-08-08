
# bug-slayer - WIP

Automated Testing with Cypress.io



## Installation

To run the bug-slayer on your machine, just clone this repo, run `npm install` in the root directory and `npm run start` to kick off the development server



## Running

- Add auth credentials for the user you want to test with to `smokeiterster.spec.js`
- If testing with scoped user you may need to comment out the apps your user does not have access to just until I have tests written for each permission level
- run `npm run cypress:open` to kick it off
- Select the smoke-tester from the spec library and watch the magic happen 


## Local Development

- `cd imc`
- `rails s`
- `npm run serve`
- fire up localhost
- in new terminal window `cd bug-slayer` (until I add to the IMC repo)
- `npm run cypress:open`
- run specs & code in tandem awesomeness
