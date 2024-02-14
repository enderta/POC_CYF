// cypress.config.js
import { defineConfig } from "cypress";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
import fs from 'fs-extra';
import path from 'path';

async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Read environment configuration
  const envConfig = await fs.readJson(path.resolve('cypress.env.json'));
  config.env = { ...config.env, ...envConfig };

  return config;
}

export default defineConfig({
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