const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.taptime-react.pages.dev",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  env: {
    record: true,        // cloud record enable
  },
});
