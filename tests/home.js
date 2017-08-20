module.exports = {

  'Log in to MOLGENIS': function(client) {
    client
      .url('https://molgenis01.gcc.rug.nl')
      .assert.title('MOLGENIS')
      .waitForElementVisible('#open-button', 1000)
      .pause(1000)
      .click('#open-button')
      .waitForElementVisible('#login-modal', 1000)
      .setValue('#username-field', 'admin')
      .setValue('#password-field', 'admin')
      .click('#signin-button')
      .waitForElementVisible('#signout-button', 1000)
      .end();
  }
};
