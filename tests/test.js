module.exports = {
  'AEM Login': function (client) {
    client
      .url('http:l')
      .setValue('input[name="j_username"]', 'admin')
      .setValue('input[name="j_password"]', 'admin')
      .click('#submit-button')
      .pause(10000)      
      .click('div[data-path="/contr"]')
      .click('button[data-path="/contenr"]')
      .pause(2000)
      .clearValue('input[name="./kickerTitleValue"]') 
      .setValue('input[name="./kickerTitleValue"]', 'MyBanner')
      .click('.cq-dialog-submit')
    }
};
