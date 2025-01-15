const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    env: {
      USER_NAME: process.env.CYPRESS_USER_NAME,
      USER_PASS: process.env.CYPRESS_USER_PASS,
      GITLAB_ACCESS_TOKEN: process.env.CYPRESS_GITLAB_ACCESS_TOKEN,
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
  baseUrl: process.env.CYPRESS_URL_SITE,
});
