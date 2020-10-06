# bug-slayer

---

**Automated Testing with Cypress.io**

### To Run:
- npm run serve<br>
- npm run cypress:open

---

### Writing/Adding Tests:

A solid test generally covers 3 phases:
1. Set up the application state.
2. Take an action.
3. Make an assertion about the resulting application state.


All cypress tests are formatted like:

`describe(‘What you are testing’, ( ) => {` <br>
        `it(’should do/not do some action’, ( ) => {` <br>
            `cy.visit(url you want to visit)` <br>
            `cy.` <br>
    `});` <br>
`});` 

---

### Cypress Commands:

--browser, -b
Run Cypress in the browser with the given name. If a filesystem path is supplied, Cypress will attempt to use the browser at that path.

--ci-build-id
Specify a unique identifier for a run to enable grouping or parallelization.

--config, -c
Specify configuration

--config-file, -C
Specify configuration file

--env, -e
Specify environment variables

--group
Group recorded tests together under a single run

--headed
Displays the browser instead of running headlessly (default for Firefox and Chromium-based browsers)

--headless
Hide the browser instead of running headed (default for Electron)

--help, -h
Output usage information 

--key, -k
Specify your secret record key

--no-exit
Keep Cypress Test Runner open after tests in a spec file run

--parallel
Run recorded specs in parallel across multiple machines

--port,-p
Override default port

--project, -P
Path to a specific project

--quiet, -q
If passed, Cypress output will not be printed to stdout. Only output from the configured Mocha reporter will print. 

--record
Whether to record the test run

--reporter, -r
Specify a Mocha reporter

--reporter-options, -o
Specify Mocha reporter options

--spec, -s
Specify the spec files to run

--tag, -t
Identify a run with a tag or tags

---

### Axe:

https://github.com/dequelabs/axe-core/

1. First download the package: npm install axe-core --save-dev

2. Include javascript file in each of your tests:
      `<script src="node_modules/axe-core/axe.min.js"></script>`

3. Insert calls at each point in your tests where a new piece of UI becomes visible or exposed:

`axe` <br>
        `.run()` <br>
        `.then(results => {` <br>
                `if (results.violations.length) {` <br>
                        `throw new Error('Accessibility issues found');` <br>
                `}` <br>
        `})` <br>
        `.catch(err => {` <br>
                `console.error('Something bad happened:', err.message);` <br>
        `});`


