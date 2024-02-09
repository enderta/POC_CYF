const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs-extra');
const path = require('path');

async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Use browserify
  on("file:preprocessor", browserify.default(config));

  // Read environment configuration
  const envConfig = fs.readJsonSync(path.resolve('cypress.env.json'));
  config.env = { ...config.env, ...envConfig };

  // Make sure to return the modified config object
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
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Specify the directory where reports will be generated
    overwrite: false, // Set to true if you want to overwrite existing reports
    html: true, // Set to true if you want to generate HTML reports (optional)
    json: true // Set to true to generate JSON reports
  }
});
