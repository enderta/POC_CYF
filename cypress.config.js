const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs-extra');
const path = require('path');

async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);


  on("file:preprocessor", browserify.default(config));

  // Read environment configuration
  const envConfig = fs.readJsonSync(path.resolve('cypress.env.json'));
  config.env = { ...config.env, ...envConfig };


  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.js"],
    setupNodeEvents,
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  reporter: 'mochawesome', //to generate mochawesome report use npx cypress run
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});