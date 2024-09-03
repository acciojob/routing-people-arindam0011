const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080", // Replace with your base URL
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ensure this pattern matches your test files
    // Add other configurations here (e.g., `viewportWidth`, `viewportHeight`, etc.)
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
