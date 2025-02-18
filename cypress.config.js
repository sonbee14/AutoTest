const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  specPatern: 'cypress/e2e/**.{js}'
});
