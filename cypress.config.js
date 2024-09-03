const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', // Replace with your base URL
    // Add other configurations here (e.g., `viewportWidth`, `viewportHeight`, etc.)
  },
});
