
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
  on("file:preprocessor", browserify.default(config));


  on('after:run', async () => {
  console.log('override after:run');
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  //reporter: 'cypress-cucumber-preprocessor',
  //reporter: 'cucumber-html-reporter',
  
  video: true,

  reporterOptions: {

  charts: true,
  reportPageTitle: 'Cypress Inline Reporter',
  embeddedScreenshots: true,
  inlineAssets: true, 
  },//Adds the asserts inline
  defaultCommandTimeout: 6000,
  env: {
    url: "https://raksul.github.io",
  },
  retries: {
    runMode: 1,

  },
  projectId: "grh6qd",

  e2e: {
    setupNodeEvents,
    
    specPattern: 'cypress/integration/examples/BDD/*.feature'

  },
});

//messages -> json file ->html