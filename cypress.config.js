const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
