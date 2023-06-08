const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.js',
    baseUrl:'https://cypress.vivifyscrum-stage.com/login',
    env:{
      email: 'lm@gmail.com',
      password: 'mynewpass1234'
    }
  },
});
